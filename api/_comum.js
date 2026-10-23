/* Nour Catálogo · base das páginas geradas no servidor (SEO).
   A conexão é a mesma da loja (catalogo/js/config.js): chave pública, só funções do catálogo. */
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const cfg = fs.readFileSync(path.join(RAIZ, 'catalogo/js/config.js'), 'utf8');
const API = (cfg.match(/url:\s*'([^']+)'/) || [])[1];
const CHAVE = (cfg.match(/chave:\s*'([^']+)'/) || [])[1];

async function rpc(nome, args) {
  const r = await fetch(API + '/rest/v1/rpc/' + nome, {
    method: 'POST',
    headers: { apikey: CHAVE, Authorization: 'Bearer ' + CHAVE, 'Content-Type': 'application/json' },
    body: JSON.stringify(args || {})
  });
  if (!r.ok) throw new Error('rpc_' + r.status);
  return r.json();
}
function origem(req) {
  const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').replace(/[^a-z0-9.:-]/gi, '');
  return 'https://' + host;
}
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
// JSON dentro de <script>: nada de "<" cru, para não fechar a tag.
function jsonTag(o) { return JSON.stringify(o).replace(/</g, '\\u003c').replace(/[\u2028\u2029]/g, c => '\\u' + c.charCodeAt(0).toString(16)); }
function https(u) { u = String(u || '').trim(); return /^https:\/\/[^\s"'<>\\]+$/.test(u) ? u : ''; }
function corta(s, n) { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s; }

module.exports = { RAIZ, rpc, origem, esc, jsonTag, https, corta };
