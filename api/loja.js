/* Nour Catálogo · página da loja para o Google e para prévias de link (WhatsApp, Instagram, Facebook).
   /loja/<slug>/ e /loja/<slug>/p/<id>/ chegam aqui: buscamos a loja, escrevemos título, descrição,
   imagem de prévia, endereço canônico e dados estruturados (schema.org), e entregamos a mesma página
   da loja já com os dados embutidos (abre mais rápido, sem esperar outra ida ao banco). */
const fs = require('fs');
const path = require('path');
const { RAIZ, rpc, origem, esc, jsonTag, https, corta } = require('./_comum');

const MODELO = fs.readFileSync(path.join(RAIZ, 'catalogo/index.html'), 'utf8')
  .replace(/(src|href)="(css|js)\//g, '$1="/catalogo/$2/');

function preco(n) { return (Math.round(n * 100) / 100).toFixed(2); }
function estoque(p) { let t = 0; for (const k in (p.estoque || {})) t += +p.estoque[k] || 0; return t; }
function nota(revs) {
  const r = (revs || []).filter(x => x && x.nota);
  if (!r.length) return null;
  return { '@type': 'AggregateRating', ratingValue: (r.reduce((s, x) => s + +x.nota, 0) / r.length).toFixed(1), reviewCount: r.length, bestRating: 5, worstRating: 1 };
}
const DIAS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

module.exports = async (req, res) => {
  const slug = String(req.query.slug || '').toLowerCase();
  const pid = String(req.query.p || '');
  if (!/^[a-z0-9-]{2,60}$/.test(slug) || (pid && !/^[0-9a-z-]{1,40}$/i.test(pid))) return naoAchou(res);
  let d;
  try { d = await rpc('catalogo_publico', { p_slug: slug }); } catch (e) { d = undefined; }
  if (d === undefined) { res.statusCode = 503; res.setHeader('Retry-After', '60'); return res.end('Tente de novo em instantes.'); }
  if (!d || !d.loja) return naoAchou(res);

  const L = d.loja, base = origem(req), urlLoja = base + '/loja/' + slug + '/';
  const prods = d.produtos || [], P = pid ? prods.filter(p => String(p.id) === pid)[0] : null;
  if (pid && !P) { res.statusCode = 301; res.setHeader('Location', urlLoja); return res.end(); }
  const nome = d.nome || L.nome || 'Loja';
  const banner = ((L.banners || [])[0] || {}).imagem || (L.banner || {}).imagem;
  const capa = https(P ? (P.fotos || [])[0] : banner || L.logo || (prods.find(p => (p.fotos || [])[0]) || { fotos: [] }).fotos[0]);
  const cidade = String(L.cidade || '').split('·')[0].trim();

  let titulo, desc, canon, ld;
  if (P) {
    titulo = P.nome + ' · ' + nome;
    desc = corta(P.desc || (P.nome + ' na ' + nome + '. Peça pelo WhatsApp.'), 158);
    canon = urlLoja + 'p/' + encodeURIComponent(P.id) + '/';
    const disp = estoque(P) > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock';
    ld = {
      '@context': 'https://schema.org', '@type': 'Product', name: P.nome, description: corta(P.desc, 5000),
      image: (P.fotos || []).map(https).filter(Boolean), sku: P.sku || undefined, brand: { '@type': 'Brand', name: P.marca || nome },
      offers: { '@type': 'Offer', url: canon, priceCurrency: 'BRL', price: preco(P.preco), availability: disp, itemCondition: 'https://schema.org/NewCondition', seller: { '@type': 'Organization', name: nome } },
      aggregateRating: nota(P.avaliacoes) || undefined
    };
  } else {
    // Até ~65 caracteres, que é o que o Google mostra.
    titulo = nome + (L.slogan && nome.length < 50 ? ' · ' + corta(String(L.slogan).split(/[.!]/)[0], 62 - nome.length) : '');
    desc = corta((L.slogan ? L.slogan + ' ' : '') + (L.sobre || '') || nome + ': catálogo com pedido pelo WhatsApp.', 158);
    canon = urlLoja;
    const h = L.horarios || {}, horas = [];
    Object.keys(h).forEach(k => (h[k] || []).forEach(f => { if (DIAS[k] && f && f[0] && f[1]) horas.push({ '@type': 'OpeningHoursSpecification', dayOfWeek: DIAS[k], opens: f[0], closes: f[1] }); }));
    ld = [{
      '@context': 'https://schema.org', '@type': 'Store', '@id': urlLoja + '#loja', name: nome, url: urlLoja, description: corta(L.sobre || L.slogan, 500) || undefined,
      image: capa || undefined, logo: https(L.logo) || undefined, telephone: L.whatsapp ? '+' + String(L.whatsapp).replace(/\D/g, '') : undefined,
      email: L.email || undefined, priceRange: 'R$',
      address: L.endereco || cidade ? { '@type': 'PostalAddress', streetAddress: L.endereco || undefined, addressLocality: cidade || undefined, addressCountry: 'BR' } : undefined,
      sameAs: L.instagram ? ['https://www.instagram.com/' + String(L.instagram).replace(/[^a-z0-9._]/gi, '')] : undefined,
      openingHoursSpecification: horas.length ? horas : undefined,
      aggregateRating: nota(d.avaliacoes) || undefined
    }, {
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Produtos de ' + nome,
      itemListElement: prods.slice(0, 100).map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: urlLoja + 'p/' + encodeURIComponent(p.id) + '/', name: p.nome }))
    }];
  }

  const head = '<title>' + esc(titulo) + '</title>\n<meta name="description" content="' + esc(desc) + '">\n' +
    '<link rel="canonical" href="' + esc(canon) + '">\n<meta name="robots" content="index, follow, max-image-preview:large">\n' +
    '<meta property="og:type" content="' + (P ? 'product' : 'website') + '">\n<meta property="og:locale" content="pt_BR">\n<meta property="og:site_name" content="' + esc(nome) + '">\n' +
    '<meta property="og:title" content="' + esc(titulo) + '">\n<meta property="og:description" content="' + esc(desc) + '">\n<meta property="og:url" content="' + esc(canon) + '">\n' +
    (capa ? '<meta property="og:image" content="' + esc(capa) + '">\n<meta name="twitter:image" content="' + esc(capa) + '">\n' : '') +
    (P ? '<meta property="product:price:amount" content="' + preco(P.preco) + '">\n<meta property="product:price:currency" content="BRL">\n' : '') +
    '<meta name="twitter:card" content="' + (capa ? 'summary_large_image' : 'summary') + '">\n' +
    '<link rel="preconnect" href="https://images.unsplash.com" crossorigin>\n' +
    '<script type="application/ld+json">' + jsonTag(ld) + '</script>\n';

  // Conteúdo em HTML puro (lido por robôs que não rodam JavaScript); a loja substitui ao abrir.
  const cats = (d.categorias || []).map(c => '<li><a href="' + esc(urlLoja) + '#c-' + esc(c.id) + '">' + esc(c.nome) + '</a></li>').join('');
  const lista = prods.slice(0, 100).map(p => '<li><a href="' + esc(urlLoja + 'p/' + encodeURIComponent(p.id) + '/') + '">' + esc(p.nome) + '</a> · R$ ' + preco(p.preco).replace('.', ',') + '</li>').join('');
  const corpo = P
    ? '<main class="seo"><p><a href="' + esc(urlLoja) + '">' + esc(nome) + '</a></p><h1>' + esc(P.nome) + '</h1><p>R$ ' + preco(P.preco).replace('.', ',') + '</p><p>' + esc(P.desc || '') + '</p></main>'
    : '<main class="seo"><h1>' + esc(nome) + '</h1><p>' + esc(L.slogan || '') + '</p><p>' + esc(L.sobre || '') + '</p><ul>' + cats + '</ul><ul>' + lista + '</ul></main>';

  const dados = { slug: d.slug || slug, nome: d.nome, loja: L, categorias: d.categorias || [], produtos: prods, avaliacoes: d.avaliacoes || [], abrir: P ? String(P.id) : '' };
  const html = MODELO
    .replace(/<title>[\s\S]*?<\/title>\s*<meta name="description"[^>]*>\n?/, head)
    .replace('<div id="app"></div>', '<div id="app">' + corpo + '</div>\n<script type="application/json" id="nour-dados">' + jsonTag(dados) + '</script>');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400');
  res.end(html);
};

function naoAchou(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.setHeader('Cache-Control', 'public, s-maxage=60');
  res.end('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Loja não encontrada</title>' +
    '<div style="max-width:420px;margin:18vh auto;padding:0 16px;text-align:center;font-family:system-ui,sans-serif"><h1 style="font-size:1.4rem">Loja não encontrada</h1><p style="color:#6B617D">Confira o endereço ou fale com a loja.</p></div></html>');
}
