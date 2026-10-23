/* Nour Catálogo · sitemap.xml com todas as lojas ativas e seus produtos visíveis. */
const { rpc, origem, esc } = require('./_comum');

module.exports = async (req, res) => {
  let lojas = [];
  try { lojas = await rpc('catalogo_sitemap', {}); } catch (e) { res.statusCode = 503; return res.end(); }
  const base = origem(req), dia = s => String(s || '').slice(0, 10);
  const urls = [];
  lojas.forEach(l => {
    const u = base + '/loja/' + l.slug + '/';
    urls.push('<url><loc>' + esc(u) + '</loc>' + (l.atualizado ? '<lastmod>' + dia(l.atualizado) + '</lastmod>' : '') + '</url>');
    (l.produtos || []).forEach(p => urls.push('<url><loc>' + esc(u + 'p/' + encodeURIComponent(p.id) + '/') + '</loc>' + (p.atualizado ? '<lastmod>' + dia(p.atualizado) + '</lastmod>' : '') + '</url>'));
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.end('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.slice(0, 50000).join('\n') + '\n</urlset>\n');
};
