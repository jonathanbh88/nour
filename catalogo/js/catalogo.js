/* =====================================================================
   Nour Catálogo · vitrine, grade de cores e tamanhos, sacola e pedido pelo WhatsApp
   Lê window.LOJA, window.CATEGORIAS e window.PRODUTOS (js/dados.js).
   ===================================================================== */
(function () {
  'use strict';
  var L = window.LOJA, CATS = window.CATEGORIAS || [], P = window.PRODUTOS || [];
  var app = document.getElementById('app');
  var R = Object.assign({ cor: 'Cor', tamanho: 'Tamanho' }, L.rotulos || {});

  /* ---------- desenhos das peças (usados quando ainda não há foto) ---------- */
  var ART = {
    camiseta: '<path d="M72 34 50 42 22 72l22 20 16-12v86h80V80l16 12 22-20-28-30-22-8q-28 22-56 0Z"/>',
    regata: '<path d="M74 28h14q12 26 24 0h14l4 40 14 18v84H56V86l14-18Z"/>',
    blusa: '<path d="M74 34 52 42 28 120l20 6 18-50v84h68V76l18 50 20-6-24-78-22-8q-26 18-52 0Z"/>',
    vestido: '<path d="M82 26h8l4 22h12l4-22h8l-2 44 34 104H50L84 70Z"/><path d="M84 92h32" stroke="rgba(0,0,0,.18)" stroke-width="5"/>',
    calca: '<path d="M62 28h76l10 148h-34l-14-102-14 102H52Z"/><rect x="62" y="28" width="76" height="12" fill="rgba(0,0,0,.18)"/>',
    saia: '<path d="M70 40h60l30 128H40Z"/><rect x="70" y="40" width="60" height="12" fill="rgba(0,0,0,.18)"/><path d="M86 56 78 166M100 56v110M114 56l8 110" stroke="rgba(0,0,0,.12)" stroke-width="3"/>',
    casaco: '<path d="M70 30 44 40 24 150l22 4 16-60v80h76V94l16 60 22-4-20-110-26-10-30 40Z"/><path d="M100 70v100" stroke="rgba(0,0,0,.22)" stroke-width="4"/><circle cx="92" cy="104" r="4" fill="rgba(0,0,0,.3)"/><circle cx="92" cy="132" r="4" fill="rgba(0,0,0,.3)"/>',
    short: '<path d="M48 48h104l12 104h-52l-12-56-12 56H36Z"/><rect x="48" y="42" width="104" height="14" rx="3" fill="rgba(0,0,0,.18)"/>',
    moletom: '<path d="M70 36 46 46 20 120l22 8 18-50v90h80V78l18 50 22-8-26-74-24-10q-30-14-60 0Z"/><rect x="78" y="120" width="44" height="22" rx="4" fill="rgba(0,0,0,.15)"/>',
    tenis: '<path d="M14 128Q14 106 36 104L86 96Q108 62 136 66L152 86Q178 96 186 116V134Q186 142 178 142H22Q14 142 14 134Z"/><path d="M14 134H186V142Q186 152 176 152H24Q14 152 14 142Z" fill="#fff" opacity=".92"/><path d="M52 126Q110 132 166 100" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>',
    bolsa: '<path d="M70 70q0-34 30-34t30 34" fill="none" stroke="currentColor" stroke-width="8"/><rect x="40" y="70" width="120" height="96" rx="14"/><path d="M40 98h120" stroke="rgba(0,0,0,.18)" stroke-width="4"/>',
    bone: '<path d="M40 112Q46 52 100 52T160 112Z"/><path d="M40 112h146q0 14-26 14H40Z"/>',
    pote: '<rect x="52" y="56" width="96" height="118" rx="14"/><rect x="46" y="38" width="108" height="26" rx="7" fill="#1B1F24"/><rect x="62" y="92" width="76" height="46" rx="5" fill="#fff" opacity=".92"/>',
    garrafa: '<rect x="72" y="62" width="56" height="112" rx="12"/><rect x="82" y="38" width="36" height="28" rx="5" fill="#1B1F24"/><rect x="78" y="100" width="44" height="36" rx="4" fill="#fff" opacity=".9"/>',
    sandalia: '<path d="M30 140q0-16 20-18l100-6q24 0 24 14v8q0 8-10 8H40q-10 0-10-6Z"/><path d="M70 120q20-40 50 0M110 118q14-30 34-2" fill="none" stroke="currentColor" stroke-width="9"/>',
    oculos: '<circle cx="62" cy="104" r="30"/><circle cx="138" cy="104" r="30"/><path d="M92 100q8-8 16 0M32 96 16 84M168 96l16-12" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/><circle cx="62" cy="104" r="20" fill="#fff" opacity=".35"/><circle cx="138" cy="104" r="20" fill="#fff" opacity=".35"/>',
    relogio: '<rect x="80" y="20" width="40" height="44" rx="8"/><rect x="80" y="136" width="40" height="44" rx="8"/><circle cx="100" cy="100" r="44"/><circle cx="100" cy="100" r="34" fill="#fff" opacity=".9"/><path d="M100 76v26l16 10" stroke="#1B1F24" stroke-width="5" fill="none" stroke-linecap="round"/>',
    anel: '<circle cx="100" cy="120" r="46" fill="none" stroke="currentColor" stroke-width="14"/><path d="M80 66l20-26 20 26-20 14Z" fill="#fff" opacity=".9"/><path d="M80 66l20-26 20 26-20 14Z" fill="none" stroke="currentColor" stroke-width="4"/>',
    colar: '<path d="M40 40q60 140 120 0" fill="none" stroke="currentColor" stroke-width="7"/><path d="M100 110l18 22-18 22-18-22Z"/>',
    perfume: '<rect x="50" y="76" width="100" height="100" rx="18"/><rect x="84" y="50" width="32" height="28" rx="4" fill="#1B1F24"/><rect x="76" y="30" width="48" height="22" rx="6"/><rect x="66" y="108" width="68" height="36" rx="6" fill="#fff" opacity=".85"/>',
    batom: '<rect x="70" y="100" width="60" height="78" rx="8" fill="#1B1F24"/><rect x="76" y="72" width="48" height="32" rx="4" fill="#C9A227"/><path d="M80 72V44q20-28 40-8v36Z"/>',
    celular: '<rect x="56" y="18" width="88" height="164" rx="16"/><rect x="64" y="34" width="72" height="128" rx="6" fill="#fff" opacity=".85"/><rect x="88" y="24" width="24" height="5" rx="2.5" fill="#1B1F24"/>',
    fone: '<path d="M44 120V100a56 56 0 0 1 112 0v20" fill="none" stroke="currentColor" stroke-width="12"/><rect x="30" y="112" width="34" height="58" rx="12"/><rect x="136" y="112" width="34" height="58" rx="12"/>',
    racao: '<path d="M54 44h92l10 132H44Z"/><rect x="54" y="44" width="92" height="14" fill="rgba(0,0,0,.25)"/><circle cx="100" cy="112" r="24" fill="#fff" opacity=".9"/><path d="M90 108a4 4 0 1 1 0 .1M110 108a4 4 0 1 1 0 .1M100 122q-8-8 0-10 8 2 0 10" fill="currentColor"/>',
    bola: '<circle cx="100" cy="104" r="62"/><path d="M48 80q52 30 104 0M48 128q52-30 104 0" fill="none" stroke="#fff" stroke-width="7" opacity=".85"/>',
    ferramenta: '<rect x="90" y="70" width="20" height="110" rx="8" fill="#6B4128"/><path d="M44 40h92l20 18v14h-36v-6H60Z"/>',
    tinta: '<path d="M50 60h100v108q0 10-10 10H60q-10 0-10-10Z"/><ellipse cx="100" cy="60" rx="50" ry="12" fill="#1B1F24"/><rect x="62" y="96" width="76" height="44" rx="6" fill="#fff" opacity=".9"/><path d="M50 60q50-60 100 0" fill="none" stroke="#9AA1A9" stroke-width="5"/>',
    pneu: '<circle cx="100" cy="100" r="76" fill="#1B1F24"/><circle cx="100" cy="100" r="44"/><circle cx="100" cy="100" r="14" fill="#1B1F24"/><path d="M100 24v20M100 156v20M24 100h20M156 100h20" stroke="#3A3F46" stroke-width="10"/>',
    flor: '<path d="M100 120v60" stroke="#2F6B4F" stroke-width="8"/><path d="M100 150q-30-6-34-26 22 0 34 26M100 160q30-6 34-26-22 0-34 26" fill="#2F6B4F"/><circle cx="100" cy="64" r="22"/><circle cx="74" cy="84" r="22"/><circle cx="126" cy="84" r="22"/><circle cx="86" cy="112" r="22"/><circle cx="114" cy="112" r="22"/><circle cx="100" cy="90" r="14" fill="#F6D365"/>',
    vinho: '<path d="M84 20h32v44q22 14 22 44v62q0 10-10 10H72q-10 0-10-10v-62q0-30 22-44Z"/><rect x="72" y="104" width="56" height="44" rx="4" fill="#fff" opacity=".9"/>',
    caderno: '<rect x="50" y="28" width="104" height="148" rx="10"/><path d="M50 50h-12M50 80h-12M50 110h-12M50 140h-12" stroke="#1B1F24" stroke-width="8" stroke-linecap="round"/><rect x="70" y="60" width="64" height="20" rx="4" fill="#fff" opacity=".9"/>',
    sofa: '<rect x="30" y="70" width="140" height="56" rx="16"/><rect x="18" y="92" width="34" height="62" rx="12"/><rect x="148" y="92" width="34" height="62" rx="12"/><rect x="44" y="112" width="112" height="40" rx="8" fill="rgba(0,0,0,.18)"/><path d="M40 154v18M160 154v18" stroke="#1B1F24" stroke-width="8"/>',
    botijao: '<rect x="54" y="62" width="92" height="104" rx="40"/><rect x="80" y="36" width="40" height="30" rx="6" fill="#1B1F24"/><rect x="60" y="166" width="80" height="12" rx="4" fill="#1B1F24"/>',
    caixa: '<path d="M30 70 100 40l70 30v80l-70 30-70-30Z"/><path d="M30 70l70 30 70-30M100 100v80" fill="none" stroke="rgba(0,0,0,.2)" stroke-width="5"/>'
  };
  function art(n, color, alt) {
    var g = ART[n] || ART.camiseta;
    return '<svg class="art" viewBox="0 0 200 200" aria-hidden="true" style="color:' + esc(cor(color, 'var(--p1)')) + '"><g fill="currentColor"' +
      (alt ? ' transform="translate(200 0) scale(-1 1) rotate(-8 100 100)"' : '') + '>' + g + '</g></svg>';
  }
  var BI = {
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.3A8.4 8.4 0 1 1 21 11.5z"/>',
    pin: '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/>',
    ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    bag: '<path d="M6 8h12l1 12H5L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    list: '<rect x="4" y="4" width="6" height="6" rx="1.5"/><path d="M13 7h7"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><path d="M13 17h7"/>',
    envio: '<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    pix: '<path d="m12 3 9 9-9 9-9-9z"/><path d="m8 12 4-4 4 4-4 4z"/>',
    card: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/>', cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>', barcode: '<path d="M4 5v14M7 5v14M11 5v14M14 5v14M17 5v14M20 5v14"/>',
    seguro: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    troca: '<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
    go: '<path d="M9 5l7 7-7 7"/>',
    phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    loja: '<path d="M4 10v10h16V10M3 4h18l-1 6H4z"/><path d="M10 20v-5h4v5"/>',
    google: '<path d="M20 12.2a8 8 0 1 1-2.4-5.7"/><path d="M20 12h-8"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
    ruler: '<path d="M3 17 17 3l4 4L7 21z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/>'
  };
  function ic(n, extra) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || '') + '>' + BI[n] + '</svg>'; }

  /* ---------- utilidades ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // Links e cores vindos da configuração passam por aqui antes de entrar na página.
  function url(u) { u = String(u == null ? '' : u).trim(); return /^(https:\/\/|#|\.?\/?[a-z0-9_-]+[a-z0-9_./-]*$)/i.test(u) && !/^\s*(javascript|data|vbscript):/i.test(u) ? u : ''; }
  // Miniatura leve para vitrine e listas: fotos enviadas pelo painel já têm a versão "-p";
  // fotos da Unsplash e do Pexels (modelos prontos) são pedidas menores ao próprio CDN.
  function mini(u) {
    u = url(u); if (!u) return '';
    if (/\/object\/public\/catalogo\/[^?#]+\.(webp|jpg|png)$/.test(u) && !/-p\.(webp|jpg|png)$/.test(u)) return u.replace(/\.(webp|jpg|png)$/, '-p.$1');
    var m = /^https:\/\/images\.(unsplash|pexels)\.com\/.*[?&]w=(\d+)/.exec(u); if (m) m = [m[0], m[2]];
    if (m && +m[1] > 480) { var k = 480 / +m[1]; return u.replace(/([?&])w=\d+/, '$1w=480').replace(/([?&])h=(\d+)/, function (x, a, h) { return a + 'h=' + Math.round(h * k); }); }
    return u;
  }
  // Foto com versão leve e versão grande; o navegador escolhe pela largura da tela.
  function pic(u, sizes, extra) {
    var g = url(u), p = mini(u);
    return '<img src="' + esc(p) + '"' + (p !== g ? ' srcset="' + esc(p) + ' 480w, ' + esc(g) + ' 1000w" sizes="' + sizes + '"' : '') + ' alt="" loading="lazy" decoding="async"' + (extra || '') + '>';
  }
  function prodUrl(p) { return L.api && L.id ? '/loja/' + encodeURIComponent(L.id) + '/p/' + encodeURIComponent(p.id) + '/' : '#'; }
  function corFoto(p, nome) { var c = p.cores.filter(function (x) { return x[0] === nome; })[0]; return c && url(c[2]) || ''; }
  function cor(c, padrao) { return /^#[0-9a-f]{3,8}$/i.test(String(c || '')) ? c : padrao; }
  function brl(n) { return 'R$ ' + (Math.round(n * 100) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function norm(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function slug(s) { return norm(s).toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function initials(n) { return String(n || '').split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase(); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  // Sacola, favoritos e preferências ficam separados por loja no mesmo navegador.
  function store(k, v) { var key = 'nourcatalogo:' + (L.id ? L.id + ':' : '') + k; try { if (v === undefined) return JSON.parse(localStorage.getItem(key)); localStorage.setItem(key, JSON.stringify(v)); } catch (e) { return null; } }
  function wa(text) { return 'https://wa.me/' + String(L.whatsapp || '').replace(/\D/g, '') + '?text=' + encodeURIComponent(text); }
  function stars(n) { var f = Math.round(n); return '<span class="stars" aria-label="Nota ' + n.toFixed(1).replace('.', ',') + ' de 5"><i>' + '★★★★★'.slice(0, f) + '</i>' + '★★★★★'.slice(f) + '</span>'; }

  /* ---------- produtos: estoque e preços ---------- */
  var BYID = {}, CATBY = {};
  P.forEach(function (p) { BYID[p.id] = p; p.cores = p.cores || [['', '']]; p.tamanhos = p.tamanhos && p.tamanhos.length ? p.tamanhos : ['']; p.estoque = p.estoque || {}; p.avaliacoes = (p.avaliacoes || []).map(revObj); });
  var LOJAREVS = (L.avaliacoes || []).map(revObj);
  function revObj(r) { return Array.isArray(r) ? { nome: r[0], nota: r[1], texto: r[2], variacao: r[3] } : r; }
  CATS.forEach(function (c) { CATBY[c.id] = c; });
  function qtd(p, cor, tam) { return +p.estoque[cor + '|' + tam] || 0; }
  function total(p) { var t = 0; for (var k in p.estoque) t += +p.estoque[k] || 0; return t; }
  function hasCor(p, cor) { return p.tamanhos.some(function (t) { return qtd(p, cor, t) > 0; }); }
  function hasTam(p, tam) { return p.cores.some(function (c) { return qtd(p, c[0], tam) > 0; }); }
  function skuOf(p, cor, tam) { return [p.sku || slug(p.nome), cor && slug(cor), tam && slug(tam)].filter(Boolean).join('-'); }
  function pixOf(v) { return v * (1 - (L.descontoPix || 0) / 100); }
  function offOf(p) { return p.de && p.de > p.preco ? Math.round((1 - p.preco / p.de) * 100) : 0; }
  function rating(p) { var a = p.avaliacoes; return a.length ? a.reduce(function (s, r) { return s + r.nota; }, 0) / a.length : 0; }
  function varTxt(cor, tam) { return [cor && R.cor + ': ' + cor, tam && R.tamanho + ': ' + tam].filter(Boolean).join(' · '); }

  /* ---------- cores e tema ---------- */
  var root = document.documentElement;
  // Temas de data (escolhidos no painel): trocam as cores, o selo do banner e somam uma frase à faixa enquanto estiverem ligados.
  var SAZ = {
    natal: { cores: { p1: '#B3122E', p2: '#0F6B3A', p3: '#F2C14E', on3: '#3A2600' }, selo: 'Especial de Natal', faixa: 'Natal: presentes com entrega rápida' },
    blackfriday: { cores: { p1: '#111111', p2: '#2B2B2B', p3: '#FFD400', on3: '#111111' }, selo: 'Black Friday', faixa: 'Black Friday: descontos por tempo limitado' }
  };
  var saz = L.sazonal === 'natal' || L.sazonal === 'blackfriday' ? SAZ[L.sazonal] : null;
  if (saz) {
    L.cores = saz.cores; L.banner = Object.assign({}, L.banner, { selo: saz.selo });
    L.faixa = [saz.faixa].concat((L.faixa || []).slice(0, 2));
    root.classList.add('saz-' + L.sazonal);
  }
  // Estilo visual da loja: padrão, minimalista ou moderno.
  if (L.estilo === 'minimalista' || L.estilo === 'moderno') root.classList.add('est-' + L.estilo);
  ['p1', 'p2', 'p3', 'on3'].forEach(function (k) { if (L.cores && cor(L.cores[k])) root.style.setProperty('--' + k, L.cores[k]); });
  var TIT = L.nome + (L.slogan && L.nome.length < 50 ? ' · ' + String(L.slogan).split(/[.!]/)[0].slice(0, 62 - L.nome.length).trim() : ''), mdesc = $('meta[name="description"]'), DESC = mdesc ? mdesc.content : '';
  function meta(t) { if (mdesc) mdesc.content = String(t).slice(0, 158); }
  document.title = TIT;
  var tc = $('meta[name="theme-color"]'); if (tc && L.cores && cor(L.cores.p1)) tc.content = L.cores.p1;
  var tema = L.tema === 'claro' ? 'light' : L.tema === 'escuro' ? 'dark' : (store('tema') || '');
  function applyTheme() { if (tema) root.setAttribute('data-theme', tema); else root.removeAttribute('data-theme'); }
  function isDark() { return tema ? tema === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  applyTheme();

  /* ---------- estado ---------- */
  var favs = store('favs') || [];
  var cart = (store('cart') || []).filter(function (l) { var p = BYID[l.id]; return p && qtd(p, l.cor, l.tam) > 0; });
  cart.forEach(function (l) { l.qty = Math.min(l.qty, qtd(BYID[l.id], l.cor, l.tam)); });
  var form = Object.assign({ nome: '', zap: '', entrega: (L.entrega && L.entrega[0] || [''])[0], cep: '', end: '', pag: (L.pagamentos || [])[0] || '' }, store('form') || {});
  var pref = Object.assign({ layout: 'grade', ordem: 'relevancia', tam: '' }, store('pref') || {});
  function save() { store('cart', cart); store('form', form); store('favs', favs); store('pref', pref); }
  function count() { return cart.reduce(function (s, l) { return s + l.qty; }, 0); }
  function subtotal() { return cart.reduce(function (s, l) { return s + l.qty * BYID[l.id].preco; }, 0); }
  function pixOn() { return L.descontoPix && /pix/i.test(form.pag); }
  // Cupom: as contas seguem as do servidor (cupom sobre os produtos, Pix sobre o que sobra).
  var cup = store('cupom');
  function r2(v) { return Math.round(v * 100) / 100; }
  function cupomDesc() {
    if (!cup) return 0;
    var sub = subtotal();
    if (cup.minimo && sub < cup.minimo) return 0;
    return cup.tipo === 'pct' ? r2(sub * Math.min(cup.valor, 90) / 100) : cup.tipo === 'valor' ? Math.min(cup.valor, sub) : 0;
  }
  function pixValor() { return pixOn() ? r2((subtotal() - cupomDesc()) * Math.min(L.descontoPix, 50) / 100) : 0; }
  function totalPedido() { return subtotal() - cupomDesc() - pixValor(); }
  // Frete grátis automático: compra (sem descontos) a partir do valor configurado no painel.
  function freteAcima() { return +L.freteGratisAcima > 0 && subtotal() >= +L.freteGratisAcima; }
  function freteCupom() { return cup && cup.tipo === 'frete' && !(cup.minimo && subtotal() < cup.minimo); }
  var CUPOM_ERRO = { cupom_invalido: 'Cupom não encontrado', cupom_expirado: 'Esse cupom expirou', cupom_ainda_nao_vale: 'Esse cupom ainda não começou a valer',
    cupom_esgotado: 'Esse cupom já foi todo usado', cupom_vazio: 'Digite o cupom', loja_indisponivel: 'Loja indisponível' };
  function aplicarCupom(cod) {
    cod = String(cod || '').trim().toUpperCase();
    if (!cod) return toast('Digite o cupom');
    function ok(c) { cup = c; store('cupom', cup); drawCart(); toast('Cupom ' + c.codigo + ' aplicado'); track('cupom', c.codigo); }
    function erro(e, minimo) { toast(e === 'cupom_minimo' ? 'Cupom válido para compras a partir de ' + brl(minimo) : CUPOM_ERRO[e] || 'Não deu para aplicar o cupom'); }
    if (L.api) {
      window.nourRpc('catalogo_cupom', { p_slug: L.id, p_codigo: cod, p_subtotal: subtotal() }).then(function (r) {
        if (r && r.ok) ok({ codigo: r.codigo, tipo: r.tipo, valor: +r.valor, minimo: +r.minimo || 0 }); else erro(r && r.erro, r && r.minimo);
      }).catch(function () { toast('Não deu para conferir o cupom agora'); });
    } else {
      var c = (L.cupons || []).filter(function (x) { return String(x.codigo).toUpperCase() === cod; })[0];
      if (!c) return erro('cupom_invalido');
      if (c.minimo && subtotal() < c.minimo) return erro('cupom_minimo', c.minimo);
      ok({ codigo: cod, tipo: c.tipo || 'pct', valor: +c.valor || 0, minimo: +c.minimo || 0 });
    }
  }

  // Rotas por âncora, para o link de uma categoria poder ser compartilhado: #c-vestidos, #favoritos, #busca-termo
  function route() {
    var h = decodeURIComponent(location.hash.slice(1));
    if (h.indexOf('c-') === 0 && CATBY[h.slice(2)]) return { t: 'lista', cat: h.slice(2) };
    if (h === 'favoritos') return { t: 'lista', fav: true };
    if (h === 'todos') return { t: 'lista' };
    if (h === 'ofertas') return { t: 'lista', of: true };
    if (h.indexOf('busca-') === 0) return { t: 'lista', q: h.slice(6) };
    return { t: 'home' };
  }

  /* ---------- cartão de produto ---------- */
  function picLayers(p) {
    var f = p.fotos || [], c0 = p.cores[0][1], c1 = (p.cores[1] || p.cores[0])[1];
    var CS = '(min-width:1000px) 280px, 50vw';
    var a = f[0] ? pic(f[0], CS).replace('alt=""', 'alt="' + esc(p.nome) + '"') : art(p.desenho, c0);
    var b = f[1] ? pic(f[1], CS) : f[0] ? '' : art(p.desenho, c1, true);
    return '<span class="lay a">' + a + '</span>' + (b ? '<span class="lay b">' + b + '</span>' : '');
  }
  function card(p) {
    var out = !total(p), off = offOf(p), r = rating(p), fav = favs.indexOf(p.id) > -1;
    var tag = out ? '<span class="tag out">ESGOTADO</span>' : p.selo ? '<span class="tag">' + esc(p.selo) + '</span>' : off ? '<span class="tag">' + off + '% OFF</span>' : '';
    var sizes = p.tamanhos[0] ? '<span class="sizes">' + p.tamanhos.map(function (t) { return hasTam(p, t) ? '<span>' + esc(t) + '</span>' : '<s>' + esc(t) + '</s>'; }).join('') + '</span>' : '';
    var dots = p.cores[0][0] ? '<span class="dots">' + p.cores.map(function (c) { return '<i style="background:' + esc(cor(c[1], '#ccc')) + '" title="' + esc(c[0]) + '"' + (hasCor(p, c[0]) ? '' : ' class="no"') + '></i>'; }).join('') + '</span>' : '';
    return '<article class="pc' + (out ? ' off' : '') + '">' +
      '<button type="button" class="ph" data-open="' + esc(p.id) + '" aria-label="Ver ' + esc(p.nome) + '">' + picLayers(p) + tag + '<span class="quick">Ver detalhes</span></button>' +
      '<button type="button" class="fav" data-fav="' + esc(p.id) + '" aria-pressed="' + fav + '" aria-label="' + (fav ? 'Tirar dos' : 'Salvar nos') + ' favoritos">' + ic('heart') + '</button>' +
      '<div class="bd"><span class="brand">' + esc(p.marca || (CATBY[p.cat] || {}).nome || '') + '</span>' +
      '<a class="nm" href="' + esc(prodUrl(p)) + '" data-open="' + esc(p.id) + '">' + esc(p.nome) + '</a>' +
      (r ? '<span class="rate">' + stars(r) + '<small>(' + p.avaliacoes.length + ')</small></span>' : '') +
      '<p class="desc">' + esc(p.desc || '') + '</p>' +
      '<span class="prices">' + (off ? '<s class="num">' + brl(p.de) + '</s>' : '') + '<b class="num">' + brl(p.preco) + '</b>' +
      (L.descontoPix ? '<small class="num">' + brl(pixOf(p.preco)) + ' no Pix</small>' : '') + '</span>' + dots + sizes +
      '<span class="acts"><button type="button" class="want" data-open="' + esc(p.id) + '">' + (out ? 'Avise-me' : 'Comprar') + '</button>' +
      (out ? '' : '<button type="button" class="bagb" data-open="' + esc(p.id) + '" aria-label="Escolher ' + esc(R.tamanho.toLowerCase()) + ' e adicionar">' + ic('bag') + '</button>') + '</span></div></article>';
  }

  /* ---------- página ---------- */
  function header() {
    var n = count();
    return '<div class="topo">' +
      (L.faixa && L.faixa.length ? '<div class="tick" aria-hidden="true"><div>' + [1, 2, 3, 4].map(function () { return L.faixa.map(function (t) { return '<span>' + esc(t) + '</span><span>✦</span>'; }).join(''); }).join('') + '</div></div>' : '') +
      '<div class="info"><div class="wrap"><a href="' + wa('Olá! Vim pelo catálogo.') + '" target="_blank" rel="noopener">' + ic('chat') + 'Atendimento pelo WhatsApp' + (L.telefone ? ' <b class="num">' + esc(L.telefone) + '</b>' : '') + '</a>' +
        (L.email ? '<a class="hide-s" href="mailto:' + esc(L.email) + '">' + ic('mail') + esc(L.email) + '</a>' : '') +
        '<span class="r">' + redes('Siga a loja') + '</span></div></div>' +
      '<header class="nav wrap"><a class="logo" href="#"><span class="ring"><span class="in">' + (L.logo ? '<img src="' + esc(url(L.logo)) + '" alt="">' : esc(initials(L.nome))) + '</span></span><b>' + esc(L.nome) + '</b></a>' +
      '<nav class="cats" aria-label="Categorias">' + CATS.map(function (c) { return '<a href="#c-' + esc(c.id) + '">' + esc(c.nome) + '</a>'; }).join('') + '</nav>' +
      '<label class="search">' + ic('search') + '<input id="q" type="search" placeholder="Buscar" autocomplete="off" aria-label="Buscar produtos"></label>' +
      '<div class="tools">' + (L.tema === 'claro' || L.tema === 'escuro' ? '' : '<button type="button" class="ib" id="tema" aria-label="' + (isDark() ? 'Usar tema claro' : 'Usar tema escuro') + '">' + ic(isDark() ? 'sun' : 'moon') + '</button>') +
      '<a class="ib" href="#favoritos" aria-label="Favoritos">' + ic('heart') + '<span class="nb num" id="nfav"' + (favs.length ? '' : ' hidden') + '>' + favs.length + '</span></a>' +
      '<button type="button" class="ib" data-cart aria-label="Sacola">' + ic('bag') + '<span class="nb num" id="nbag"' + (n ? '' : ' hidden') + '>' + n + '</span></button></div></header></div>';
  }

  function home() {
    var b = L.banner || {}, hl = P.filter(function (p) { return p.destaque && total(p); });
    if (!hl.length) hl = P.filter(function (p) { return total(p); }).slice(0, 8);
    var heroArt = b.imagem ? '<img src="' + esc(url(b.imagem)) + '" alt="">' :
      P.slice(0, 2).map(function (p, i) { return '<span class="h' + i + '">' + art(p.desenho, i ? '#fff' : (p.cores[0][1] || '#fff')) + '</span>'; }).join('');
    var revs = LOJAREVS.map(function (r) { return { r: r }; });
    P.forEach(function (p) { p.avaliacoes.forEach(function (r) { revs.push({ p: p, r: r }); }); });
    var avg = revs.length ? revs.reduce(function (s, x) { return s + x.r.nota; }, 0) / revs.length : 0;
    revs.sort(function (a, b) { return b.r.nota - a.r.nota || (b.r.foto ? 1 : 0) - (a.r.foto ? 1 : 0); });
    var of = L.ofertas || {}, ofs = P.filter(function (p) { return total(p) && (p.oferta || offOf(p)); }).sort(function (a, b) { return offOf(b) - offOf(a); });
    var shelves = CATS.map(function (c) {
      var ps = P.filter(function (p) { return p.cat === c.id; });
      return ps.length >= (L.minimoVitrine || 3) ? '<section class="sec wrap"><div class="sec-head"><h2 class="h">' + esc(c.nome) + '</h2><a class="more" href="#c-' + esc(c.id) + '">Ver todos</a></div>' + rail(ps) + '</section>' : '';
    }).join('');
    var bs = (L.banners || []).filter(function (x) { return x.imagem; });
    var top = bs.length ? '<section class="banners" aria-roledescription="carrossel" aria-label="Destaques"><div class="slides">' + bs.map(function (x, i) {
        return '<a class="slide' + (i ? '' : ' on') + '" href="' + esc(url(x.link) || '#todos') + '"' + (i ? ' aria-hidden="true" tabindex="-1"' : '') + '><picture>' +
          (x.imagemCelular ? '<source media="(max-width: 700px)" srcset="' + esc(url(x.imagemCelular)) + '">' : '') +
          '<img src="' + esc(url(x.imagem)) + '" alt="' + esc(x.alt || '') + '"' + (i ? ' loading="lazy"' : '') + '></picture></a>';
      }).join('') + '</div>' + (bs.length > 1 ? '<div class="dots-b">' + bs.map(function (x, i) { return '<button type="button" data-slide="' + i + '" aria-label="Banner ' + (i + 1) + '" aria-pressed="' + !i + '"></button>'; }).join('') + '</div>' : '') + '</section>' : '';
    // Banner montado com foto real de fundo: o texto fica por cima, com um véu na cor da loja para dar leitura.
    var fundo = url(b.imagem) ? '<picture class="hbg">' + (url(b.imagemCelular) ? '<source media="(max-width: 700px)" srcset="' + esc(url(b.imagemCelular)) + '">' : '') + '<img src="' + esc(url(b.imagem)) + '" alt="" fetchpriority="high"></picture>' : '';
    return (top || '<section class="hero' + (fundo ? ' foto' : '') + '">' + fundo + (fundo ? '' : '<div class="blob b1"></div><div class="blob b2"></div>') + '<div class="wrap in">' +
        '<div class="copy">' + (b.selo ? '<span class="kick">' + esc(b.selo) + '</span>' : '') + '<h1>' + esc(b.titulo || L.nome) + '</h1><p>' + esc(b.texto || L.slogan) + '</p>' +
        '<a class="cta light" href="#' + (b.categoria && CATBY[b.categoria] ? 'c-' + esc(b.categoria) : 'todos') + '">' + esc(b.botao || 'Ver catálogo') + '</a></div>' +
        (fundo ? '' : '<div class="hart">' + heroArt + '</div>') + '</div></section>') +
      (L.beneficios && L.beneficios.length ? '<div class="perks wrap">' + L.beneficios.map(function (x) { return '<div class="perk">' + ic(BI[x[0]] ? x[0] : 'seguro') + '<span><b>' + esc(x[1]) + '</b><small>' + esc(x[2] || '') + '</small></span></div>'; }).join('') + '</div>' : '') +
      '<section class="sec wrap"><div class="sec-head center"><h2 class="h">' + esc((L.categoriasTitulo || ['Compre por categoria'])[0]) + '</h2>' +
        ((L.categoriasTitulo || [])[1] ? '<p class="subt">' + esc(L.categoriasTitulo[1]) + '</p>' : '') + '</div><div class="circles">' + CATS.map(function (c) { return '<a class="circle" href="#c-' + esc(c.id) + '"><span class="c">' + (c.foto ? '<img src="' + esc(mini(c.foto)) + '" alt="" loading="lazy" decoding="async">' : art(c.desenho, c.cor)) + '</span>' + esc(c.nome) + '</a>'; }).join('') + '</div>' +
      '<div class="catcards">' + CATS.slice(0, 3).map(function (c) { return '<a class="catcard" href="#c-' + esc(c.id) + '">' + (c.foto ? pic(c.foto, '(min-width:900px) 33vw, 90vw') : art(c.desenho, c.cor)) + '<span class="t">' + (c.chamada ? '<em>' + esc(c.chamada) + '</em>' : '') + '<b>' + esc(c.nome) + '</b><small>Ver todos os produtos →</small></span></a>'; }).join('') + '</div></section>' +
      '<section class="sec wrap"><div class="sec-head center"><h2 class="h">Mais vendidos</h2></div>' + rail(hl) + '<a class="more end" href="#todos">Ver todos os produtos</a></section>' +
      (of.ativo !== false && ofs.length ? '<section class="sec wrap ofertas"><div class="sec-head center">' + (of.selo ? '<span class="kick">' + esc(of.selo) + '</span>' : '') + '<h2 class="h">' + esc(of.titulo || 'Ofertas da semana') + '</h2>' +
        (of.texto ? '<p class="subt">' + esc(of.texto) + '</p>' : '') + '</div>' + rail(ofs) + '<a class="more end" href="#ofertas">Ver todas as ofertas</a></section>' : '') +
      shelves +
      (revs.length ? '<section class="sec wrap"><div class="rev-head"><div><h2 class="h">Avaliações de clientes</h2>' + (L.lojaVerificada ? '<span class="vf">' + ic('check') + 'Loja verificada</span>' : '') + '</div>' +
        '<div class="score"><b class="num">' + avg.toFixed(1).replace('.', ',') + '</b><span>' + stars(avg) + '<small>Baseado em ' + revs.length + (revs.length === 1 ? ' avaliação' : ' avaliações') + '</small></span></div></div>' +
        '<div class="rail revs-rail">' + revs.slice(0, 8).map(function (x) { return review(x.r, x.p); }).join('') + '</div></section>' : '') +
      novidades();
  }
  function rail(ps) {
    return '<div class="rail-w"><button type="button" class="arr prev" data-rail="-1" aria-label="Anteriores">' + ic('go', ' style="transform:scaleX(-1)"') + '</button>' +
      '<div class="rail">' + ps.map(card).join('') + '</div><button type="button" class="arr next" data-rail="1" aria-label="Próximos">' + ic('go') + '</button></div>';
  }
  var ORIGEM = { whatsapp: ['chat', 'WhatsApp'], instagram: ['ig', 'Instagram'], google: ['google', 'Google'], loja: ['loja', 'Na loja'] };
  function review(r, p) {
    var o = ORIGEM[r.origem];
    return '<div class="rev"><div class="who">' + (r.foto ? '<img class="av" src="' + esc(url(r.foto)) + '" alt="" loading="lazy">' : '<span class="av">' + esc(initials(r.nome)) + '</span>') +
      '<span class="nm2"><b>' + esc(r.nome) + '</b>' + (r.cidade ? '<small>' + esc(r.cidade) + '</small>' : '') + '</span>' +
      (o ? '<span class="src" title="Avaliação feita pelo ' + esc(o[1]) + '">' + ic(o[0]) + '</span>' : '') + '</div>' +
      '<div class="when">' + stars(r.nota) + (r.quando ? '<small>' + esc(r.quando) + '</small>' : '') + '</div>' +
      '<p>' + esc(r.texto) + '</p>' + (p || r.variacao ? '<small class="bought">' + (p ? 'Comprou: ' + esc(p.nome) : '') + (r.variacao ? (p ? ' · ' : '') + esc(r.variacao) : '') + '</small>' : '') +
      (r.verificada !== false && (p || r.verificada) ? '<span class="vf">' + ic('check') + 'Compra verificada</span>' : '') + '</div>';
  }

  /* ---------- cadastro de novidades e grupo do WhatsApp ---------- */
  function novidades() {
    var n = L.novidades || {}; if (n.ativo === false) return '';
    return '<section class="news"><div class="wrap in"><div class="copy"><b>' + esc(n.titulo || 'Receba as últimas novidades') + '</b><p>' + esc(n.texto || 'Seja a primeira a saber de lançamentos e promoções.') + '</p>' +
      (n.grupoWhatsapp ? '<a class="grp" data-ev="grupo" href="' + esc(url(n.grupoWhatsapp)) + '" target="_blank" rel="noopener">' + ic('users') + 'Entrar no grupo de promoções</a>' : '') + '</div>' +
      '<form class="nform" id="news" novalidate><label class="field"><span>Nome</span><input id="nNome" autocomplete="name" placeholder="Seu nome" required></label>' +
      '<label class="field"><span>WhatsApp</span><input id="nZap" type="tel" inputmode="tel" autocomplete="tel" placeholder="(11) 91234-5678"></label>' +
      '<label class="field"><span>E-mail</span><input id="nMail" type="email" autocomplete="email" placeholder="voce@email.com"></label>' +
      '<button type="submit" class="want">Quero receber</button>' +
      '<label class="ok-mkt"><input type="checkbox" id="nOk" checked> Aceito receber novidades e promoções. Posso sair quando quiser.</label></form></div></section>';
  }
  function sendNews(ev) {
    ev.preventDefault();
    var n = L.novidades || {}, d = { loja: L.id || L.nome, nome: $('#nNome').value.trim(), whatsapp: $('#nZap').value.trim(), email: $('#nMail').value.trim(), aceita: $('#nOk').checked, origem: 'catalogo' };
    if (!d.nome) return toast('Informe seu nome');
    if (!d.whatsapp && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) return toast('Informe um WhatsApp ou um e-mail válido');
    if (!d.aceita) return toast('Marque que aceita receber as novidades');
    var done = function () { $('#news').innerHTML = '<p class="thanks">' + ic('check') + 'Pronto, ' + esc(d.nome.split(' ')[0]) + '! Você vai receber nossas novidades.' + (n.grupoWhatsapp ? ' <a href="' + esc(url(n.grupoWhatsapp)) + '" target="_blank" rel="noopener">Entre também no grupo de promoções.</a>' : '') + '</p>'; };
    // Com "cadastro" configurado, o contato vai para a lista de e-mail marketing da loja; sem ele, segue pelo WhatsApp.
    if (L.api) {
      window.nourRpc('catalogo_contato', { p_slug: L.id, p_nome: d.nome, p_whatsapp: d.whatsapp, p_email: d.email, p_aceita: d.aceita })
        .then(done).catch(function (err) {
          var m = { whatsapp_invalido: 'Confira o WhatsApp com DDD', email_invalido: 'Confira o e-mail', muitos_cadastros: 'Muitos cadastros agora. Tente em 1 minuto.' }[err.message];
          toast(m || 'Não deu para salvar agora. Tente de novo em instantes.');
        });
    } else if (n.cadastro) {
      fetch(n.cadastro, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
        .then(function (r) { if (!r.ok) throw 0; done(); })
        .catch(function () { toast('Não deu para salvar agora. Tente de novo em instantes.'); });
    } else {
      window.open(wa('Olá! Quero receber as novidades e promoções.\nNome: ' + d.nome + (d.email ? '\nE-mail: ' + d.email : '')), '_blank', 'noopener');
      done();
    }
  }

  function lista(v) {
    var ps = P.slice(), title = 'Todos os produtos';
    if (v.cat) { ps = ps.filter(function (p) { return p.cat === v.cat; }); title = CATBY[v.cat].nome; }
    if (v.fav) { ps = ps.filter(function (p) { return favs.indexOf(p.id) > -1; }); title = 'Favoritos'; }
    if (v.of) { ps = ps.filter(function (p) { return p.oferta || offOf(p); }); title = (L.ofertas || {}).titulo || 'Ofertas'; }
    if (v.q) { var q = norm(v.q); ps = ps.filter(function (p) { return norm(p.nome + ' ' + (p.marca || '') + ' ' + (p.desc || '') + ' ' + ((CATBY[p.cat] || {}).nome || '') + ' ' + p.cores.map(function (c) { return c[0]; }).join(' ')).indexOf(q) > -1; }); title = 'Busca: “' + v.q + '”'; }
    var tams = [];
    ps.forEach(function (p) { p.tamanhos.forEach(function (t) { if (t && tams.indexOf(t) < 0) tams.push(t); }); });
    if (pref.tam && tams.indexOf(pref.tam) < 0) pref.tam = '';
    if (pref.tam) ps = ps.filter(function (p) { return hasTam(p, pref.tam); });
    var sorts = {
      relevancia: function (a, b) { return (total(b) ? 1 : 0) - (total(a) ? 1 : 0) || (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0); },
      menor: function (a, b) { return a.preco - b.preco; },
      maior: function (a, b) { return b.preco - a.preco; },
      desconto: function (a, b) { return offOf(b) - offOf(a); },
      avaliadas: function (a, b) { return rating(b) - rating(a); }
    };
    ps.sort(sorts[pref.ordem] || sorts.relevancia);
    return '<section class="sec wrap list-page"><nav class="crumb"><a href="#">Início</a> / ' + esc(title) + '</nav><h1 class="h">' + esc(title) + '</h1>' +
      (v.cat && CATBY[v.cat].chamada ? '<p class="subt">' + esc(CATBY[v.cat].chamada) + '</p>' : '') +
      '<div class="toolbar"><span class="cnt">' + ps.length + (ps.length === 1 ? ' produto' : ' produtos') + '</span>' +
      (tams.length > 1 ? '<div class="chipsz" role="group" aria-label="Filtrar por ' + esc(R.tamanho.toLowerCase()) + '"><button type="button" data-tam="" aria-pressed="' + !pref.tam + '">Todos</button>' + tams.map(function (t) { return '<button type="button" data-tam="' + esc(t) + '" aria-pressed="' + (pref.tam === t) + '">' + esc(t) + '</button>'; }).join('') + '</div>' : '') +
      '<label class="sort"><span>Ordenar</span><select id="ordem"><option value="relevancia">Relevância</option><option value="menor">Menor preço</option><option value="maior">Maior preço</option><option value="desconto">Maior desconto</option><option value="avaliadas">Melhor avaliados</option></select></label>' +
      '<div class="vt" role="group" aria-label="Visualização"><button type="button" data-layout="grade" aria-pressed="' + (pref.layout === 'grade') + '" aria-label="Grade">' + ic('grid') + '</button><button type="button" data-layout="lista" aria-pressed="' + (pref.layout === 'lista') + '" aria-label="Lista">' + ic('list') + '</button></div></div>' +
      (ps.length ? '<div class="grid' + (pref.layout === 'lista' ? ' as-list' : '') + '">' + ps.map(card).join('') + '</div>' :
        '<div class="empty"><b>' + (v.fav ? 'Nenhum favorito ainda' : 'Nada encontrado') + '</b>' + (v.fav ? 'Toque no coração de um produto para salvar aqui.' : 'Tente outro nome ou veja todos os produtos.') + '</div>') + '</section>';
  }

  var DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  function hoursRows() {
    // Junta dias seguidos com o mesmo horário: "Segunda a sexta"
    var H = L.horarios || {}, rows = [], order = [1, 2, 3, 4, 5, 6, 0];
    order.forEach(function (d) {
      var txt = (H[d] || []).map(function (x) { return x[0] + ' – ' + x[1]; }).join(', ') || 'Fechado', last = rows[rows.length - 1];
      if (last && last.txt === txt) last.to = d; else rows.push({ from: d, to: d, txt: txt });
    });
    return rows.map(function (r) { return '<div><span>' + DIAS[r.from] + (r.to !== r.from ? ' a ' + DIAS[r.to].toLowerCase() : '') + '</span><b class="num">' + esc(r.txt) + '</b></div>'; }).join('');
  }
  // Mapa da loja física (liga e desliga no painel); só carrega quando chega perto da tela.
  function mapa() {
    if (!L.mapa || !L.endereco) return '';
    var q = encodeURIComponent(L.endereco + ', ' + (L.cidade || '').split('·')[0].trim());
    return '<div class="wrap mapa"><iframe src="https://www.google.com/maps?q=' + q + '&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa: ' + esc(L.endereco) + '"></iframe>' +
      '<a class="cta ghost" href="https://www.google.com/maps/dir/?api=1&destination=' + q + '" target="_blank" rel="noopener">' + ic('pin') + 'Como chegar</a></div>';
  }
  // Redes da loja lado a lado (Instagram e WhatsApp sempre juntos).
  function redes(rot) {
    return '<span class="socs" aria-label="' + esc(rot) + '">' + (L.instagram ? '<a class="soc" href="https://instagram.com/' + encodeURIComponent(L.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram @' + esc(L.instagram) + '">' + ic('ig') + '</a>' : '') +
      '<a class="soc" href="' + wa('Olá! Vim pelo catálogo.') + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ic('chat') + '</a>' +
      (L.email ? '<a class="soc" href="mailto:' + esc(L.email) + '" aria-label="E-mail">' + ic('mail') + '</a>' : '') + '</span>';
  }
  var PAGIC = { 'pix': 'pix', 'cartão de crédito': 'card', 'cartão de débito': 'card', 'link de pagamento': 'link', 'dinheiro': 'cash', 'boleto': 'barcode' };
  // Formas de pagamento e parcelamento no rodapé.
  function pagamentos() {
    var ps = L.pagamentos || []; if (!ps.length && !(L.parcelas > 1) && !L.descontoPix) return '';
    return '<div class="wrap pays"><div><h4>Formas de pagamento</h4><div class="pchips">' + ps.map(function (x) { return '<span class="pchip">' + ic(PAGIC[String(x).toLowerCase()] || 'card') + esc(x) + '</span>'; }).join('') + '</div></div>' +
      '<div class="pinfo">' + (L.parcelas > 1 ? '<span>' + ic('card') + '<b>Até ' + L.parcelas + 'x sem juros</b> no cartão</span>' : '') +
        (L.descontoPix ? '<span>' + ic('pix') + '<b>' + L.descontoPix + '% de desconto</b> no Pix</span>' : '') +
        '<span>' + ic('seguro') + 'Compra combinada e confirmada pelo WhatsApp</span></div></div>';
  }
  function footer() {
    var parc = L.parceiro || {}, lk = L.links || {}, hasH = L.horarios && Object.keys(L.horarios).length;
    var pIg = parc.rodapeIg && /^[A-Za-z0-9._]{1,30}$/.test(parc.instagram || '') ? parc.instagram : '', pZap = parc.rodapeZap ? String(parc.whatsapp || parc.suporte || '').replace(/\D/g, '') : '';
    var made = parc.nome || parc.logo ? '<span class="madeby"><a' + (parc.link ? ' href="' + esc(url(parc.link)) + '" target="_blank" rel="noopener"' : '') + '>Feito por ' + (parc.logo ? '<img src="' + esc(url(parc.logo)) + '" alt="' + esc(parc.nome || '') + '">' : '<b>' + esc(parc.nome) + '</b>') + '</a>' +
      (pIg ? '<a class="soc sm" href="https://instagram.com/' + encodeURIComponent(pIg) + '" target="_blank" rel="noopener" aria-label="Instagram de ' + esc(parc.nome || 'quem fez') + '">' + ic('ig') + '</a>' : '') +
      (pZap.length >= 10 ? '<a class="soc sm" href="https://wa.me/' + (pZap.length <= 11 ? '55' : '') + pZap + '?text=' + encodeURIComponent('Olá! Vi o catálogo da ' + L.nome + ' e quero um catálogo assim.') + '" target="_blank" rel="noopener" aria-label="WhatsApp de ' + esc(parc.nome || 'quem fez') + '">' + ic('chat') + '</a>' : '') + '</span>' : '<span></span>';
    return '<footer class="foot-c"><div class="wrap cols4">' +
      '<div class="about">' + (L.logo ? '<img class="flogo" src="' + esc(url(L.logo)) + '" alt="' + esc(L.nome) + '">' : '<b class="fname">' + esc(L.nome) + '</b>') +
        '<p>' + esc(L.sobre || L.slogan || '') + '</p>' +
        redes('Redes da loja') +
        (L.tema === 'claro' || L.tema === 'escuro' ? '' : '<button type="button" class="ln themeb" data-tema-f>Tema ' + ic(isDark() ? 'sun' : 'moon') + '</button>') + '</div>' +
      '<div><h4>Categorias</h4>' + CATS.map(function (c) { return '<a class="ln" href="#c-' + esc(c.id) + '">' + esc(c.nome) + '</a>'; }).join('') + '</div>' +
      '<div><h4>Contato</h4><a class="ln" href="' + wa('Olá! Vim pelo catálogo.') + '" target="_blank" rel="noopener">' + ic('chat') + '<span class="num">' + esc(L.telefone || 'WhatsApp') + '</span></a>' +
        (L.fixo ? '<span class="ln">' + ic('phone') + '<span class="num">' + esc(L.fixo) + '</span></span>' : '') +
        (L.email ? '<span class="ln">' + ic('mail') + esc(L.email) + '</span>' : '') +
        (L.endereco ? '<a class="ln" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(L.endereco + ', ' + (L.cidade || '')) + '" target="_blank" rel="noopener">' + ic('pin') + esc(L.endereco) + '</a>' : '') + '</div>' +
      '<div><h4>' + ic('clock') + 'Atendimento</h4>' + (hasH ? '<div class="hrs">' + hoursRows() + '</div>' : '') +
        (L.freteGratisAcima ? '<span class="ln">' + ic('envio') + 'Frete grátis para todo o Brasil acima de ' + brl(L.freteGratisAcima) + '</span>' : '') +
        '<span class="ln">' + ic('chat') + 'Respondemos em poucos minutos pelo WhatsApp</span><small class="fin">Compra finalizada pelo WhatsApp.</small></div>' +
      '</div>' + pagamentos() + mapa() + '<div class="bottom"><div class="wrap">' + made + '<nav>' +
        (L.cookies ? '<button type="button" class="lk" data-cookies-reabrir>Cookies e privacidade</button>' : '') +
        (lk.termos ? '<a href="' + esc(url(lk.termos)) + '" target="_blank" rel="noopener">Termos de uso</a>' : '') +
        (lk.privacidade || L.politica ? '<a href="' + esc(url(lk.privacidade || L.politica)) + '" target="_blank" rel="noopener">Política de privacidade</a>' : '') +
        '<span>© ' + new Date().getFullYear() + ' ' + esc(L.nome) + '. Todos os direitos reservados.</span></nav></div></div></footer>';
  }

  function render() {
    app.innerHTML = header() + '<main id="main"></main>' + footer() +
      '<a class="fab" id="fab" href="' + wa('Olá! Vim pelo catálogo.') + '" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">' + ic('chat') + '</a>' +
      '<dialog id="dProd" aria-label="Produto"></dialog><dialog id="dCart" aria-label="Sua sacola"></dialog>' +
      (L.cookies && !store('cookies') ? cookieBar() : '') +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
    drawMain();
  }
  var slideT, slideI = 0;
  function showSlide(i) {
    var ss = $$('.slide'); if (!ss.length) return;
    slideI = (i + ss.length) % ss.length;
    ss.forEach(function (x, k) { var on = k === slideI; x.classList.toggle('on', on); if (on) { x.removeAttribute('aria-hidden'); x.removeAttribute('tabindex'); } else { x.setAttribute('aria-hidden', 'true'); x.setAttribute('tabindex', '-1'); } });
    $$('[data-slide]').forEach(function (x, k) { x.setAttribute('aria-pressed', k === slideI); });
  }
  function autoplay() {
    clearInterval(slideT); slideI = 0;
    if ($$('.slide').length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) slideT = setInterval(function () { showSlide(slideI + 1); }, 6000);
  }
  function drawMain() {
    var v = route();
    $('#main').innerHTML = v.t === 'home' ? home() : lista(v);
    var o = $('#ordem'); if (o) o.value = pref.ordem;
    var q = $('#q'); if (q && document.activeElement !== q) q.value = v.q || '';
    autoplay();
    arrows();
  }
  function arrows() {
    $$('.rail-w').forEach(function (w) { var r = $('.rail', w), over = r.scrollWidth > r.clientWidth + 4; $$('.arr', w).forEach(function (a) { a.hidden = !over; }); });
  }
  function drawCounts() {
    var n = count(), a = $('#nbag'), f = $('#nfav');
    a.textContent = n; a.hidden = !n; f.textContent = favs.length; f.hidden = !favs.length;
  }

  var toastT;
  function toast(t) { var el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { el.classList.remove('on'); }, 2200); }

  /* ---------- aviso de cookies (LGPD) ---------- */
  // A escolha fica em window.NOUR_CONSENTIMENTO; um contador de visitas só deve rodar com 'todos'.
  window.NOUR_CONSENTIMENTO = store('cookies');
  function cookieBar() {
    return '<div class="cookie" id="cookie" role="region" aria-label="Aviso de cookies"><p>Usamos cookies para guardar sua sacola e seus favoritos e para entender as visitas da loja.' +
      (L.politica ? ' <a href="' + esc(url(L.politica)) + '" target="_blank" rel="noopener">Política de privacidade</a>' : '') + '</p>' +
      '<div class="cbtns"><button type="button" class="ghost" data-cookie="necessarios">Só necessários</button><button type="button" class="want" data-cookie="todos">Aceitar</button></div></div>';
  }

  /* ---------- janela do produto ---------- */
  var cur = null;
  function openProd(id) {
    var p = BYID[id]; if (!p) return;
    var cor = (p.cores.filter(function (c) { return hasCor(p, c[0]); })[0] || p.cores[0])[0];
    var tam = p.tamanhos.filter(function (t) { return qtd(p, cor, t) > 0; });
    cur = { p: p, cor: cor, tam: p.tamanhos.length === 1 ? tam[0] || null : null, qty: 1, foto: 0 };
    drawProd();
    track('produto', p.id);
    document.title = p.nome + ' · ' + L.nome; meta(p.desc || p.nome);
    var d = $('#dProd'); if (!d.open) d.showModal();
    var s = $('.scroll', d); if (s) s.scrollTop = 0;
  }
  function drawProd() {
    var p = cur.p, d = $('#dProd'), out = !total(p), off = offOf(p), r = rating(p);
    var hex = (p.cores.filter(function (c) { return c[0] === cur.cor; })[0] || p.cores[0])[1];
    var cf = corFoto(p, cur.cor), fs = (cf ? [cf] : []).concat((p.fotos || []).filter(function (f) { return f !== cf; }));
    var shots = fs.length ? fs.map(function (f) { return '<img src="' + esc(url(f)) + '" alt="' + esc(p.nome + (cur.cor ? ' · ' + cur.cor : '')) + '" decoding="async">'; }) :
      [art(p.desenho, hex), art(p.desenho, hex, true), '<span class="zoomed">' + art(p.desenho, hex) + '</span>'];
    cur.foto = Math.min(cur.foto, shots.length - 1);
    var q = cur.tam != null ? qtd(p, cur.cor, cur.tam) : 0;
    var stockTxt = !hasCor(p, cur.cor) ? '<span class="no">Esgotado nesta ' + esc(R.cor.toLowerCase()) + '</span>' :
      cur.tam == null ? 'Escolha o ' + esc(R.tamanho.toLowerCase()) :
      q <= 2 ? '<span class="low">Últimas ' + q + (q === 1 ? ' unidade' : ' unidades') + '</span>' : 'Em estoque';
    var medidas = L.tabelaMedidas && L.tabelaMedidas.length > 1 && p.tamanhos.length > 1 ?
      '<details class="medidas"><summary>' + ic('ruler') + 'Tabela de medidas (cm)</summary><div class="tbl"><table>' + L.tabelaMedidas.map(function (row, i) { return '<tr>' + row.map(function (c) { return i ? '<td>' + esc(c) + '</td>' : '<th>' + esc(c) + '</th>'; }).join('') + '</tr>'; }).join('') + '</table></div></details>' : '';
    var avise = out || !hasCor(p, cur.cor);
    d.innerHTML = '<div class="sheet wide" role="document"><button type="button" class="x" data-close aria-label="Fechar">' + ic('x') + '</button><div class="scroll"><div class="pd">' +
      '<div class="gal"><div class="main-pic" id="mainpic">' + shots[cur.foto] + '</div>' +
        (shots.length > 1 ? '<div class="thumbs">' + shots.map(function (s, i) { return '<button type="button" data-foto="' + i + '" aria-pressed="' + (i === cur.foto) + '" aria-label="Foto ' + (i + 1) + '">' + s + '</button>'; }).join('') + '</div>' : '') + '</div>' +
      '<div class="body"><span class="brand">' + esc(p.marca || '') + '</span><h2>' + esc(p.nome) + '</h2>' +
        (r ? '<span class="rate">' + stars(r) + '<small>' + r.toFixed(1).replace('.', ',') + ' · ' + p.avaliacoes.length + (p.avaliacoes.length === 1 ? ' avaliação' : ' avaliações') + '</small></span>' : '') +
        '<div class="pp">' + (off ? '<s class="num">' + brl(p.de) + '</s><span class="offp">' + off + '% OFF</span>' : '') + '<b class="num">' + brl(p.preco) + '</b>' +
        (L.descontoPix ? '<small class="num">' + brl(pixOf(p.preco)) + ' no Pix (' + L.descontoPix + '% off)</small>' : '') +
        (L.parcelas > 1 ? '<small class="num">ou ' + L.parcelas + 'x de ' + brl(p.preco / L.parcelas) + ' sem juros</small>' : '') + '</div>' +
        (p.cores[0][0] ? '<div class="opt-h">' + esc(R.cor) + ': <span>' + esc(cur.cor) + '</span></div><div class="sw">' + p.cores.map(function (c) {
          return '<button type="button" class="col' + (hasCor(p, c[0]) ? '' : ' no') + '" data-cor="' + esc(c[0]) + '" style="--c:' + esc(cor(c[1], '#ccc')) + '" aria-pressed="' + (c[0] === cur.cor) + '" aria-label="' + esc(c[0]) + (hasCor(p, c[0]) ? '' : ', esgotada') + '"></button>'; }).join('') + '</div>' : '') +
        (p.tamanhos[0] ? '<div class="opt-h">' + esc(R.tamanho) + (cur.tam ? ': <span>' + esc(cur.tam) + '</span>' : '') + '</div><div class="sw">' + p.tamanhos.map(function (t) {
          var ok = qtd(p, cur.cor, t) > 0;
          return '<button type="button" class="sz" data-tam-p="' + esc(t) + '" aria-pressed="' + (t === cur.tam) + '"' + (ok ? '' : ' disabled') + '>' + esc(t) + '</button>'; }).join('') + '</div>' : '') +
        '<p class="stock">' + stockTxt + '</p>' + medidas +
        (p.desc ? '<p class="d">' + esc(p.desc) + '</p>' : '') + (p.composicao ? '<p class="d"><b>Composição:</b> ' + esc(p.composicao) + '</p>' : '') +
        '<p class="skuline">Código ' + esc(skuOf(p, cur.cor, cur.tam || '')) + '</p>' +
      '</div></div>' +
      (p.avaliacoes.length ? '<div class="pd-revs"><h3>Avaliações</h3><div class="revs">' + p.avaliacoes.map(function (x) { return review(x); }).join('') + '</div></div>' : '') +
      '</div><div class="foot">' + (avise ?
        '<a class="cta zap" data-ev="avise:' + esc(p.id) + '" href="' + wa('Olá! Quero ser avisada quando chegar: ' + p.nome + (cur.cor ? ' · ' + R.cor + ' ' + cur.cor : '') + '.') + '" target="_blank" rel="noopener">' + ic('chat') + 'Avise-me quando chegar</a>' :
        '<div class="step"><button type="button" data-pq="-1" aria-label="Tirar um">−</button><b>' + cur.qty + '</b><button type="button" data-pq="1" aria-label="Adicionar mais um">+</button></div>' +
        '<button type="button" class="cta" id="padd">Adicionar à sacola<span class="sp num">' + brl(p.preco * cur.qty) + '</span></button>') + '</div></div>';
  }
  function addCur() {
    var p = cur.p;
    if (cur.tam == null) { toast('Escolha o ' + R.tamanho.toLowerCase()); var s = $('.sz:not([disabled])', $('#dProd')); if (s) s.focus(); return; }
    var max = qtd(p, cur.cor, cur.tam), same = cart.filter(function (l) { return l.id === p.id && l.cor === cur.cor && l.tam === cur.tam; })[0];
    var want = (same ? same.qty : 0) + cur.qty;
    if (want > max) { toast('Só temos ' + max + (max === 1 ? ' unidade' : ' unidades') + ' nesta opção'); want = max; }
    if (same) same.qty = want; else cart.push({ id: p.id, cor: cur.cor, tam: cur.tam, qty: want });
    save(); drawCounts(); $('#dProd').close();
    track('sacola', p.id);
    toast(p.nome + ' foi para a sacola');
  }

  /* ---------- sacola e pedido ---------- */
  function problems() {
    var e = {};
    if (!form.nome.trim()) e.nome = 'Informe seu nome';
    var zd = String(form.zap || '').replace(/\D/g, '');
    if (zd.length < 10 || zd.length > 13) e.zap = 'Informe seu WhatsApp com DDD';
    if (form.entrega === 'correios' && String(form.cep).replace(/\D/g, '').length !== 8) e.cep = 'Informe um CEP com 8 números';
    if (form.entrega === 'motoboy' && !form.end.trim()) e.end = 'Informe o endereço de entrega';
    return e;
  }
  function message(reg) {
    var lines = ['*' + (reg ? 'Pedido #' + reg.numero : 'Novo pedido') + ' · ' + L.nome + '*', ''];
    cart.forEach(function (l) {
      var p = BYID[l.id];
      lines.push(l.qty + 'x ' + p.nome + ' (' + brl(p.preco * l.qty) + ')');
      lines.push('   ' + [varTxt(l.cor, l.tam), 'Cód. ' + skuOf(p, l.cor, l.tam)].filter(Boolean).join(' · '));
    });
    lines.push('', 'Subtotal: ' + brl(subtotal()));
    if (cupomDesc()) lines.push('Cupom ' + cup.codigo + ': − ' + brl(cupomDesc()));
    if (pixOn()) lines.push('Desconto Pix (' + L.descontoPix + '%): − ' + brl(pixValor()));
    lines.push('*Total: ' + brl(totalPedido()) + '*' + (form.entrega === 'retirada' || freteCupom() || freteAcima() ? '' : ' + frete'), '');
    if (freteCupom()) lines.push('Frete grátis (cupom ' + cup.codigo + ')');
    else if (freteAcima() && form.entrega !== 'retirada') lines.push('Frete grátis (compra acima de ' + brl(+L.freteGratisAcima) + ')');
    var ent = (L.entrega || []).filter(function (x) { return x[0] === form.entrega; })[0];
    if (ent) lines.push('Receber: ' + ent[1] + (form.entrega === 'correios' ? ' · CEP ' + form.cep : form.entrega === 'motoboy' ? ' · ' + form.end : ''));
    lines.push('Pagamento: ' + form.pag, 'Nome: ' + form.nome, 'WhatsApp: ' + form.zap);
    if (reg) lines.push('Código do pedido: ' + reg.codigo);
    return lines.join('\n');
  }
  function drawCart() {
    var d = $('#dCart'), n = count(), sub = subtotal();
    var focusId = document.activeElement && d.contains(document.activeElement) ? document.activeElement.id : '';
    var scr = $('.scroll', d), top = scr ? scr.scrollTop : 0;
    if (!n) {
      d.innerHTML = '<div class="sheet"><button type="button" class="x" data-close aria-label="Fechar">' + ic('x') + '</button><div class="scroll"><div class="cart-empty"><b>Sua sacola está vazia</b>Escolha suas peças no catálogo.</div></div><div class="foot"><button type="button" class="cta" data-close>Ver catálogo</button></div></div>';
      return;
    }
    var e = problems(), ok = !Object.keys(e).length, falta = L.freteGratisAcima ? L.freteGratisAcima - sub : 0;
    var lines = cart.map(function (l, i) {
      var p = BYID[l.id], hex = (p.cores.filter(function (c) { return c[0] === l.cor; })[0] || p.cores[0])[1];
      return '<div class="line"><span class="th">' + (corFoto(p, l.cor) || (p.fotos && p.fotos[0]) ? '<img src="' + esc(mini(corFoto(p, l.cor) || p.fotos[0])) + '" alt="">' : art(p.desenho, hex)) + '</span><div class="info"><b>' + esc(p.nome) + '</b><small>' + esc(varTxt(l.cor, l.tam)) + '</small>' +
        '<div class="v num">' + brl(p.preco * l.qty) + '</div></div><div class="step"><button type="button" data-l="' + i + '" data-d="-1" aria-label="Tirar um">−</button><b>' + l.qty + '</b><button type="button" data-l="' + i + '" data-d="1" aria-label="Adicionar mais um"' + (l.qty >= qtd(p, l.cor, l.tam) ? ' disabled' : '') + '>+</button></div></div>';
    }).join('');
    var ents = (L.entrega || []).map(function (x) { return '<button type="button" data-ent="' + esc(x[0]) + '" aria-pressed="' + (form.entrega === x[0]) + '"><b>' + esc(x[1]) + '</b><small>' + esc(x[2] || '') + '</small></button>'; }).join('');
    var pays = (L.pagamentos || []).map(function (x) { return '<button type="button" data-pag="' + esc(x) + '" aria-pressed="' + (form.pag === x) + '">' + esc(x) + '</button>'; }).join('');
    d.innerHTML = '<div class="sheet"><button type="button" class="x" data-close aria-label="Fechar">' + ic('x') + '</button><div class="scroll">' +
      '<div class="cart-h"><h2>Sua sacola</h2><p>' + n + (n === 1 ? ' peça' : ' peças') + ' · <button type="button" class="clear" data-clear>Esvaziar</button></p></div>' +
      '<div class="lines">' + lines + '</div>' +
      (L.freteGratisAcima ? '<div class="frete-bar"><span>' + (falta > 0 ? 'Faltam <b class="num">' + brl(falta) + '</b> para o frete grátis' : '<b>Você ganhou frete grátis</b>') + '</span><i><em style="width:' + Math.min(100, sub / L.freteGratisAcima * 100) + '%"></em></i></div>' : '') +
      '<div class="form"><h3>Como você quer receber?</h3><div class="seg col">' + ents + '</div>' +
      '<label class="field"><span>Seu nome</span><input id="fNome" autocomplete="name" value="' + esc(form.nome) + '" placeholder="Como devemos te chamar">' + (e.nome && form._try ? '<em>' + e.nome + '</em>' : '') + '</label>' +
      '<label class="field"><span>Seu WhatsApp</span><input id="fZap" type="tel" inputmode="tel" autocomplete="tel" value="' + esc(form.zap) + '" placeholder="(00) 00000-0000">' + (e.zap && form._try ? '<em>' + e.zap + '</em>' : '') + '</label>' +
      (form.entrega === 'correios' ? '<label class="field"><span>CEP</span><input id="fCep" inputmode="numeric" autocomplete="postal-code" value="' + esc(form.cep) + '" placeholder="00000-000">' + (e.cep && form._try ? '<em>' + e.cep + '</em>' : '') + '</label>' : '') +
      (form.entrega === 'motoboy' ? '<label class="field"><span>Endereço de entrega</span><input id="fEnd" autocomplete="street-address" value="' + esc(form.end) + '" placeholder="Rua, número e bairro">' + (e.end && form._try ? '<em>' + e.end + '</em>' : '') + '</label>' : '') +
      '<h3>Forma de pagamento</h3><div class="seg pay">' + pays + '</div>' +
      (L.api || (L.cupons && L.cupons.length) ? '<h3>Cupom de desconto</h3>' + (cup ? '<div class="cupom on"><span><b>' + esc(cup.codigo) + '</b>' +
        (cup.minimo && sub < cup.minimo ? '<small>Vale a partir de ' + brl(cup.minimo) + '</small>' : '<small>' + (cup.tipo === 'pct' ? cup.valor + '% de desconto' : cup.tipo === 'valor' ? brl(cup.valor) + ' de desconto' : 'Frete grátis') + '</small>') +
        '</span><button type="button" class="clear" data-cupom-x>Remover</button></div>' :
        '<div class="cupom"><input id="fCupom" autocomplete="off" autocapitalize="characters" placeholder="Digite o cupom" aria-label="Cupom de desconto" maxlength="20"><button type="button" class="ghost" data-cupom>Aplicar</button></div>') : '') + '</div>' +
      '<div class="sum"><div><span>Subtotal</span><span class="num">' + brl(sub) + '</span></div>' +
      (cupomDesc() ? '<div class="pixd"><span>Cupom ' + esc(cup.codigo) + '</span><span class="num">− ' + brl(cupomDesc()) + '</span></div>' : '') +
      (pixOn() ? '<div class="pixd"><span>Desconto Pix (' + L.descontoPix + '%)</span><span class="num">− ' + brl(pixValor()) + '</span></div>' : '') +
      '<div><span>Frete</span><span>' + (form.entrega === 'retirada' ? 'Grátis' : freteCupom() ? 'Grátis (cupom)' : falta <= 0 && L.freteGratisAcima ? 'Grátis' : 'Combinado no WhatsApp') + '</span></div>' +
      '<div class="tot"><span>Total</span><span class="num">' + brl(totalPedido()) + '</span></div></div>' +
      '</div><div class="foot"><a class="cta zap" id="send" href="' + (ok ? wa(message()) : '#') + '" target="_blank" rel="noopener"' + (ok ? '' : ' aria-disabled="true"') + '>' + ic('chat') + 'Enviar pedido no WhatsApp</a></div></div>';
    scr = $('.scroll', d); if (scr) scr.scrollTop = top;
    if (focusId && $('#' + focusId)) { var f = $('#' + focusId); f.focus(); try { f.setSelectionRange(f.value.length, f.value.length); } catch (x) {} }
  }
  // Com a loja ligada ao banco, o pedido é registrado (preço e estoque conferidos no servidor) antes de abrir o WhatsApp.
  var sending = false;
  function sendOrder(btn) {
    if (sending) return;
    sending = true; btn.setAttribute('aria-busy', 'true');
    var w = window.open('', '_blank'); if (w) w.opener = null;
    var codigo = Array.apply(null, Array(6)).map(function () { return 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'.charAt(Math.floor(Math.random() * 32)); }).join('');
    var ent = (L.entrega || []).filter(function (x) { return x[0] === form.entrega; })[0];
    window.nourRpc('catalogo_fazer_pedido', {
      p_slug: L.id, p_codigo: codigo, p_nome: form.nome.trim(), p_contato: { cep: form.cep, endereco: form.end, whatsapp: String(form.zap || '').replace(/\D/g, '') },
      p_itens: cart.map(function (l) { return { id: +l.id, cor: l.cor, tam: l.tam, qtd: l.qty }; }),
      p_entrega: ent ? ent[1] : form.entrega, p_pagamento: form.pag, p_cupom: cup ? cup.codigo : '', p_origem: origem
    }).then(function (reg) {
      var link = wa(message(reg));
      cup = null; store('cupom', null);
      if (w) w.location.href = link; else location.href = link;
      cart = []; save(); drawCounts(); $('#dCart').close();
      toast('Pedido #' + reg.numero + ' enviado. Finalize a conversa no WhatsApp.');
    }).catch(function (err) {
      var m = String(err.message || '');
      if (m.indexOf('sem_estoque') === 0) { if (w) w.close(); toast((m.split(':')[1] || 'Um produto') + ' acabou de esgotar nessa opção. Ajuste a sacola.'); }
      else if (m.indexOf('cupom_') === 0) { if (w) w.close(); cup = null; store('cupom', null); drawCart(); toast((CUPOM_ERRO[m] || 'O cupom não vale para este pedido') + '. Cupom removido.'); }
      else if (m === 'muitos_pedidos') { if (w) w.close(); toast('Muitos pedidos agora. Tente de novo em 1 minuto.'); }
      else { var link = wa(message()); if (w) w.location.href = link; else location.href = link; }  // sem conexão com o banco: o pedido segue só pelo WhatsApp
    }).then(function () { sending = false; btn.removeAttribute('aria-busy'); });
  }
  function openCart() { var d = $('#dCart'); drawCart(); if (!d.open) d.showModal(); }

  /* ---------- eventos ---------- */
  function bind() {
    document.addEventListener('click', function (ev) {
      var t = ev.target, b;
      if (t.tagName === 'DIALOG' || t.closest('[data-close]')) { var dl = t.closest('dialog'); if (dl) dl.close(); return; }
      if ((b = t.closest('[data-fav]'))) {
        var id = b.getAttribute('data-fav'), i = favs.indexOf(id);
        if (i > -1) favs.splice(i, 1); else favs.push(id);
        save(); drawCounts();
        $$('[data-fav="' + id + '"]').forEach(function (x) { x.setAttribute('aria-pressed', i < 0); x.setAttribute('aria-label', (i < 0 ? 'Tirar dos' : 'Salvar nos') + ' favoritos'); });
        toast(i < 0 ? 'Salvo nos favoritos' : 'Removido dos favoritos');
        if (route().fav) drawMain();
        return;
      }
      if ((b = t.closest('[data-open]'))) { ev.preventDefault(); return openProd(b.getAttribute('data-open')); }
      if (cur && $('#dProd').open) {
        if ((b = t.closest('[data-cor]'))) { cur.cor = b.getAttribute('data-cor'); cur.foto = 0; if (cur.tam != null && !qtd(cur.p, cur.cor, cur.tam)) cur.tam = null; cur.qty = 1; return drawProd(); }
        if ((b = t.closest('[data-tam-p]'))) { cur.tam = b.getAttribute('data-tam-p'); cur.qty = 1; return drawProd(); }
        if ((b = t.closest('[data-foto]'))) { cur.foto = +b.getAttribute('data-foto'); return drawProd(); }
        if ((b = t.closest('[data-pq]'))) { var mx = cur.tam != null ? qtd(cur.p, cur.cor, cur.tam) : 99; cur.qty = Math.min(Math.max(1, mx), Math.max(1, cur.qty + +b.getAttribute('data-pq'))); return drawProd(); }
        if (t.closest('#padd')) return addCur();
      }
      if (t.closest('[data-cart]')) return openCart();
      if ((b = t.closest('[data-l]'))) { var k = +b.getAttribute('data-l'); cart[k].qty += +b.getAttribute('data-d'); if (cart[k].qty < 1) cart.splice(k, 1); save(); drawCounts(); return drawCart(); }
      if (t.closest('[data-clear]')) { cart = []; save(); drawCounts(); return drawCart(); }
      if ((b = t.closest('[data-ent]'))) { form.entrega = b.getAttribute('data-ent'); save(); return drawCart(); }
      if ((b = t.closest('[data-pag]'))) { form.pag = b.getAttribute('data-pag'); save(); return drawCart(); }
      if ((b = t.closest('#send'))) {
        if (b.getAttribute('aria-disabled')) { ev.preventDefault(); form._try = 1; drawCart(); var e = problems(); toast(e.nome || e.cep || e.end); }
        else if (L.api) { ev.preventDefault(); sendOrder(b); }
        else toast('Abrindo o WhatsApp com seu pedido');
        return;
      }
      if (t.closest('[data-cupom]')) { aplicarCupom(($('#fCupom') || {}).value); return; }
      if (t.closest('[data-cupom-x]')) { cup = null; store('cupom', null); drawCart(); return; }
      if ((b = t.closest('[data-ev]'))) { var e2 = b.getAttribute('data-ev').split(':'); track(e2[0], e2[1] || ''); }
      if ((b = t.closest('[data-rail]'))) { var rl = $('.rail', b.parentNode); rl.scrollBy({ left: +b.getAttribute('data-rail') * rl.clientWidth * .9, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); return; }
      if ((b = t.closest('[data-slide]'))) { showSlide(+b.getAttribute('data-slide')); autoplay(); slideI = +b.getAttribute('data-slide'); return; }
      if ((b = t.closest('[data-tam]'))) { pref.tam = b.getAttribute('data-tam'); save(); return drawMain(); }
      if ((b = t.closest('[data-layout]'))) { pref.layout = b.getAttribute('data-layout'); save(); return drawMain(); }
      if ((b = t.closest('[data-cookie]'))) { window.NOUR_CONSENTIMENTO = b.getAttribute('data-cookie'); store('cookies', window.NOUR_CONSENTIMENTO); $('#cookie').remove(); visita(); document.dispatchEvent(new CustomEvent('nour:consentimento', { detail: window.NOUR_CONSENTIMENTO })); return; }
      if (t.closest('[data-cookies-reabrir]')) { if (!$('#cookie')) document.body.insertAdjacentHTML('beforeend', cookieBar()); return; }
      if (t.closest('[data-tema-f]')) { tema = isDark() ? 'light' : 'dark'; store('tema', tema); applyTheme(); render(); return; }
      if (t.closest('#tema')) { tema = isDark() ? 'light' : 'dark'; store('tema', tema); applyTheme(); var tb = $('#tema'); tb.innerHTML = ic(isDark() ? 'sun' : 'moon'); tb.setAttribute('aria-label', isDark() ? 'Usar tema claro' : 'Usar tema escuro'); return; }
    });
    document.addEventListener('submit', function (ev) { if (ev.target.id === 'news') sendNews(ev); });
    document.addEventListener('keydown', function (e) { if (e.target.id === 'fCupom' && e.key === 'Enter') { e.preventDefault(); aplicarCupom(e.target.value); } });
    document.addEventListener('change', function (ev) {
      if (ev.target.id === 'ordem') { pref.ordem = ev.target.value; save(); drawMain(); }
    });
    var qT;
    document.addEventListener('input', function (ev) {
      var id = ev.target.id, map = { fNome: 'nome', fZap: 'zap', fCep: 'cep', fEnd: 'end' };
      if (map[id]) {
        form[map[id]] = ev.target.value; save();
        var ok = !Object.keys(problems()).length, s = $('#send');
        if (s) { s.href = ok ? wa(message()) : '#'; if (ok) s.removeAttribute('aria-disabled'); else s.setAttribute('aria-disabled', 'true'); }
        return;
      }
      if (id === 'q') {
        clearTimeout(qT);
        var v = ev.target.value.trim();
        qT = setTimeout(function () { if (v.length >= 3) track('busca', v); var h = v ? '#busca-' + encodeURIComponent(v) : '#'; if (location.hash !== h) history.replaceState(null, '', h === '#' ? location.pathname + location.search : h); drawMain(); }, 250);
      }
    });
    window.addEventListener('resize', arrows);
    window.addEventListener('hashchange', function () { drawMain(); window.scrollTo(0, 0); });
  }

  /* ---------- analytics (só para quem aceitou os cookies) ---------- */
  // De onde a pessoa veio: ?utm_source=… ou o site anterior. Fica guardado na sessão.
  var origem = (function () {
    try { var o = sessionStorage.getItem('nourorigem'); if (o) return o; } catch (e) {}
    var u = (location.search.match(/[?&]utm_source=([^&]+)/i) || [])[1], r = document.referrer, h = '', ua = navigator.userAgent || '';
    try { h = r ? new URL(r).hostname : ''; } catch (e) {}
    // Link marcado (?utm_source=) vale primeiro; depois o site anterior; por último o app em que o link foi aberto.
    var t = (decodeURIComponent(u || '') + ' ' + h).toLowerCase();
    var o2 = /bio|nourbiosite/.test(t) ? 'biosite' : /instagram/.test(t) ? 'instagram' : /whatsapp|wa\.me/.test(t) ? 'whatsapp' : /google|bing|yahoo|duckduckgo/.test(t) ? 'google' :
      /facebook|fb\./.test(t) ? 'facebook' : /tiktok/.test(t) ? 'tiktok' : /e-?mail|newsletter/.test(t) ? 'email' :
      /Instagram/.test(ua) ? 'instagram' : /FBAN|FBAV/.test(ua) ? 'facebook' : /musical_ly|BytedanceWebview|TikTok/i.test(ua) ? 'tiktok' :
      !t.trim() || h === location.hostname ? 'direto' : 'outro';
    try { sessionStorage.setItem('nourorigem', o2); } catch (e) {}
    return o2;
  })();
  var vistos = {};
  function track(tipo, alvo) {
    if (!L.api || window.NOUR_CONSENTIMENTO !== 'todos') return;
    var k = tipo + ':' + alvo;
    if ((tipo === 'produto' || tipo === 'busca') && vistos[k]) return;  // uma vez por sessão
    vistos[k] = 1;
    window.nourRpc('catalogo_evento', { p_slug: L.id, p_tipo: tipo, p_alvo: String(alvo || ''), p_origem: origem }).catch(function () {});
  }
  // Uma visita por dia e por aparelho.
  function visita() {
    if (!L.api || window.NOUR_CONSENTIMENTO !== 'todos') return;
    var hoje = new Date().toISOString().slice(0, 10);
    if (store('visita') === hoje) return;
    store('visita', hoje);
    track('visita', matchMedia('(max-width: 820px)').matches ? 'celular' : 'computador');
  }

  render();
  bind();
  visita();
  // Endereço de produto (/loja/x/p/id/ ou #p-id) abre o produto direto.
  var abrir = window.NOUR_ABRIR || (location.hash.indexOf('#p-') === 0 ? decodeURIComponent(location.hash.slice(3)) : '');
  if (abrir && BYID[abrir]) openProd(abrir);
  $('#dProd').addEventListener('close', function () { document.title = TIT; meta(DESC); });
})();
