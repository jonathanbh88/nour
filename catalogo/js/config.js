/* Conexão com o banco (Supabase) usada pela loja (?loja=slug) e pelo painel.
   A chave abaixo é pública por natureza: o banco só aceita as funções do catálogo, que validam tudo. */
window.NOUR_API = {
  url: 'https://dvhinwfrofoxbtsnhxjc.supabase.co',
  chave: 'sb_publishable_DPsabLN4fajW2w1k_A--DQ_brnCJ9VH'
};
window.nourRpc = function (nome, args) {
  return fetch(window.NOUR_API.url + '/rest/v1/rpc/' + nome, {
    method: 'POST',
    headers: { apikey: window.NOUR_API.chave, Authorization: 'Bearer ' + window.NOUR_API.chave, 'Content-Type': 'application/json' },
    body: JSON.stringify(args || {})
  }).then(function (r) {
    return r.text().then(function (t) {
      var d = null; try { d = t ? JSON.parse(t) : null; } catch (e) {}
      if (!r.ok) { var err = new Error((d && d.message) || 'erro_' + r.status); err.status = r.status; throw err; }
      return d;
    });
  });
};
