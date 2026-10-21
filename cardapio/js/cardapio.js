/* =====================================================================
   Nour Cardápio · montagem da página, sacola e pedido pelo WhatsApp
   Lê window.LOJA, window.CARDAPIO e window.OPCOES (js/dados.js).
   ===================================================================== */
(function () {
  'use strict';
  var L = window.LOJA, C = window.CARDAPIO, O = window.OPCOES || {};
  var app = document.getElementById('app');

  /* ---------- desenhos e ícones (mesmos do Nour Bio Site) ---------- */
  var SIL = {
    pizza: '<path d="M32 68L5 14a52 52 0 0 1 54 0z"/><circle cx="26" cy="30" r="4.5" fill="rgba(0,0,0,.25)"/><circle cx="40" cy="26" r="4" fill="rgba(0,0,0,.25)"/><circle cx="33" cy="44" r="4" fill="rgba(0,0,0,.25)"/>',
    burger: '<path d="M8 30a24 20 0 0 1 48 0z"/><rect x="5" y="34" width="54" height="9" rx="4.5"/><path d="M8 47h48v4a9 9 0 0 1-9 9H17a9 9 0 0 1-9-9z"/>',
    fries: '<path d="M14 28h36l-6 40H20z"/><path d="M19 28L16 8M27 28l-2-22M35 28l1-24M43 28l3-20M49 28l6-16" stroke="currentColor" stroke-width="5" stroke-linecap="round" fill="none"/>',
    cup: '<path d="M16 18h32l-4 48H20z"/><rect x="12" y="11" width="40" height="8" rx="4"/><path d="M34 11l9-9" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>',
    bowl: '<path d="M5 32h54a27 27 0 0 1-54 0z"/><rect x="14" y="62" width="36" height="6" rx="3"/><path d="M22 24c0-6 6-6 6-12M34 24c0-6 6-6 6-12" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>',
    beer: '<rect x="10" y="24" width="34" height="40" rx="5"/><path d="M44 30h6a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6h-6" fill="none" stroke="currentColor" stroke-width="5"/><path d="M11 24a8 8 0 0 1 8-10 9 9 0 0 1 14-2 8 8 0 0 1 11 12z"/>',
    coffee: '<path d="M8 26h38v14a16 16 0 0 1-16 16h-6A16 16 0 0 1 8 40z"/><path d="M46 30h4a8 8 0 0 1 0 16h-5" fill="none" stroke="currentColor" stroke-width="5"/><rect x="6" y="60" width="44" height="6" rx="3"/>',
    icecream: '<path d="M20 36h24L32 68z"/><circle cx="32" cy="24" r="14"/><circle cx="21" cy="31" r="9"/><circle cx="43" cy="31" r="9"/>',
    bread: '<path d="M8 42c0-15 11-26 24-26s24 11 24 26v4c0 4-3 6-6 6H14c-3 0-6-2-6-6z"/><path d="M22 28l6 11M32 24l6 13M42 28l6 11" stroke="rgba(0,0,0,.25)" stroke-width="4" stroke-linecap="round" fill="none"/>',
    bottle: '<rect x="24" y="4" width="16" height="10" rx="3"/><path d="M22 18h20l4 10v36a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6V28z"/>',
    heart: '<path d="M32 64C8 46 6 30 6 24a14 14 0 0 1 26-6 14 14 0 0 1 26 6c0 6-2 22-26 40z"/>'
  };
  var BI = {
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.3A8.4 8.4 0 1 1 21 11.5z"/>',
    pin: '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/>',
    ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    bag: '<path d="M6 8h12l1 12H5L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    go: '<path d="M9 5l7 7-7 7"/>'
  };
  function ic(n, extra) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || '') + '>' + BI[n] + '</svg>'; }
  function sil(n) { return '<svg viewBox="0 0 64 72" aria-hidden="true">' + (SIL[n] || SIL.bowl) + '</svg>'; }

  /* ---------- utilidades ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function brl(n) { return 'R$ ' + (Math.round(n * 100) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function norm(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function initials(n) { return String(n || '').split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase(); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem('nourcardapio:' + k)); localStorage.setItem('nourcardapio:' + k, JSON.stringify(v)); } catch (e) { return null; } }

  var BYID = {}, CATOF = {};
  C.forEach(function (c) { c.itens.forEach(function (it) { BYID[it.id] = it; CATOF[it.id] = c; }); });
  function optsOf(it) { return (typeof it.opcoes === 'string' ? O[it.opcoes] : it.opcoes) || []; }
  function fromPrice(it) { return optsOf(it).some(function (g) { return g.tipo === 'um' && g.obrigatorio && g.itens.some(function (o) { return o[1] > 0; }); }); }

  /* ---------- cores da loja ---------- */
  var root = document.documentElement.style;
  ['p1', 'p2', 'p3', 'on3'].forEach(function (k) { if (L.cores && L.cores[k]) root.setProperty('--' + k, L.cores[k]); });
  document.title = L.nome + ' · Cardápio';
  var tc = document.querySelector('meta[name="theme-color"]'); if (tc && L.cores) tc.content = L.cores.p1;

  /* ---------- horário de funcionamento ---------- */
  var DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  function mins(h) { var p = h.split(':'); return +p[0] * 60 + +p[1]; }
  function status() {
    var d = new Date(), wd = d.getDay(), now = d.getHours() * 60 + d.getMinutes(), H = L.horarios || {};
    var today = H[wd] || [], yest = H[(wd + 6) % 7] || [];
    for (var i = 0; i < today.length; i++) {
      var a = mins(today[i][0]), b = mins(today[i][1]); if (b <= a) b += 1440;
      if (now >= a && now < b) return { open: true, txt: 'Aberto agora · fecha às ' + today[i][1] };
    }
    for (i = 0; i < yest.length; i++) {
      a = mins(yest[i][0]); b = mins(yest[i][1]);
      if (b <= a && now < b) return { open: true, txt: 'Aberto agora · fecha às ' + yest[i][1] };
    }
    for (var k = 0; k < 8; k++) {
      var dd = (wd + k) % 7, sl = H[dd] || [];
      for (i = 0; i < sl.length; i++) {
        if (k === 0 && mins(sl[i][0]) <= now) continue;
        var when = k === 0 ? 'hoje' : k === 1 ? 'amanhã' : DIAS[dd];
        return { open: false, txt: 'Fechado · abre ' + when + ' às ' + sl[i][0] };
      }
    }
    return { open: false, txt: 'Fechado no momento' };
  }

  /* ---------- sacola ---------- */
  var cart = store('cart') || [];
  cart = cart.filter(function (l) { return BYID[l.id] && !BYID[l.id].esgotado; });
  var form = Object.assign({ modo: L.entrega && L.entrega.ativa ? 'entrega' : 'retirada', nome: '', end: '', ref: '', pag: (L.pagamentos || [])[0] || '', troco: '' }, store('form') || {});
  function save() { store('cart', cart); store('form', form); }
  function count() { return cart.reduce(function (s, l) { return s + l.qty; }, 0); }
  function subtotal() { return cart.reduce(function (s, l) { return s + l.qty * l.unit; }, 0); }
  function fee() { return form.modo === 'entrega' && L.entrega ? (L.entrega.taxa || 0) : 0; }
  function addLine(line) {
    var same = cart.filter(function (l) { return l.key === line.key; })[0];
    if (same) same.qty += line.qty; else cart.push(line);
    save(); drawCart();
  }

  /* ---------- página ---------- */
  var st = status();
  function render() {
    var tick = (L.faixa || []).map(function (t) { return '<span>' + esc(t) + '</span><span>★</span>'; }).join('');
    var e = L.entrega || {}, r = L.retirada || {};
    var facts = [
      e.ativa ? ['Entrega', e.tempo] : ['Retirada', r.tempo],
      e.ativa ? ['Taxa', e.taxa ? brl(e.taxa) : 'Grátis'] : ['Entrega', 'Não fazemos'],
      ['Mínimo', e.ativa && e.minimo ? brl(e.minimo) : 'Sem mínimo']
    ].map(function (f) { return '<div class="fact"><small>' + esc(f[0]) + '</small><b class="num">' + esc(f[1]) + '</b></div>'; }).join('');

    var hl = [];
    C.forEach(function (c) { c.itens.forEach(function (it) { if (it.destaque && !it.esgotado) hl.push(it); }); });
    var hlHTML = hl.map(function (it, i) {
      return '<article class="hl"><div class="pic g' + (i % 4 + 1) + '">' + (it.selo ? '<span class="tagp">' + esc(it.selo) + '</span>' : '') + (it.foto ? '<img src="' + esc(it.foto) + '" alt="">' : sil(it.icone)) + '</div>' +
        '<div class="meta"><b>' + esc(it.nome) + '</b><div class="price num">' + (fromPrice(it) ? '<span class="from">a partir de </span>' : '') + brl(it.preco) + '</div>' +
        '<button type="button" class="want" data-quick="' + esc(it.id) + '">Adicionar</button></div></article>';
    }).join('');

    var secs = C.map(function (c) {
      var items = c.itens.map(function (it, i) {
        var off = !!it.esgotado;
        return '<button type="button" class="item' + (off ? ' off' : '') + '" data-id="' + esc(it.id) + '" data-s="' + esc(norm(it.nome + ' ' + (it.desc || '') + ' ' + c.nome)) + '"' + (off ? ' aria-disabled="true"' : '') + '>' +
          '<span class="txt"><b>' + esc(it.nome) + '</b>' + (it.desc ? '<p>' + esc(it.desc) + '</p>' : '') +
          '<span class="row">' + (off ? '<span class="soldout">Esgotado hoje</span>' : '<span class="price num">' + (fromPrice(it) ? '<span class="from">a partir de </span>' : '') + brl(it.preco) + '</span>') +
          (it.selo && !off ? '<span class="sel">' + esc(it.selo) + '</span>' : '') + '<span class="qtag num" data-qt="' + esc(it.id) + '" hidden></span></span></span>' +
          '<span class="pic g' + (i % 4 + 1) + '">' + (it.foto ? '<img src="' + esc(it.foto) + '" alt="">' : sil(it.icone)) + (off ? '' : '<span class="plus">' + ic('plus') + '</span>') + '</span></button>';
      }).join('');
      return '<section class="sec cat" id="cat-' + esc(c.id) + '" data-cat="' + esc(c.id) + '"><div class="sec-head"><h2 class="h">' + esc(c.nome) + '</h2>' + (c.nota ? '<p class="subt">' + esc(c.nota) + '</p>' : '') + '</div><div class="list">' + items + '</div></section>';
    }).join('');

    var wd = new Date().getDay(), H = L.horarios || {};
    var hours = [1, 2, 3, 4, 5, 6, 0].map(function (d) {
      var s = (H[d] || []).map(function (x) { return x[0] + '–' + x[1]; }).join(', ') || 'Fechado';
      return '<div' + (d === wd ? ' class="today"' : '') + '><span>' + DIAS[d].charAt(0).toUpperCase() + DIAS[d].slice(1) + '</span><span>' + esc(s) + '</span></div>';
    }).join('');
    var wa = 'https://wa.me/' + L.whatsapp + '?text=' + encodeURIComponent('Olá! Vim pelo cardápio digital.');

    app.innerHTML =
      '<div class="page">' +
      '<header class="hero wrap"><div class="blob b1"></div><div class="blob b2"></div>' +
        '<div class="ring"><div class="in">' + (L.logo ? '<img src="' + esc(L.logo) + '" alt="Logo de ' + esc(L.nome) + '">' : esc(initials(L.nome))) + '</div></div>' +
        '<h1>' + esc(L.nome) + '</h1><p class="slogan">' + esc(L.slogan) + '</p>' +
        '<div class="chips"><span class="chip' + (st.open ? '' : ' closed') + '"><i class="dot"></i>' + esc(st.txt) + '</span><span class="chip">' + ic('pin') + esc(L.cidade) + '</span></div>' +
        '<svg class="wave" viewBox="0 0 480 52" preserveAspectRatio="none" aria-hidden="true"><path d="M0 26C80 52 160 0 260 20s150 28 220 2V52H0z"/></svg>' +
      '</header>' +
      (tick ? '<div class="tick" aria-hidden="true"><div>' + tick + tick + tick + tick + '</div></div>' : '') +
      '<div class="facts wrap">' + facts + '</div>' +
      '<div class="cols"><main>' +
        '<div class="bar wrap" id="bar"><label class="search">' + ic('search') + '<input id="q" type="search" placeholder="Buscar no cardápio" autocomplete="off" aria-label="Buscar no cardápio"><button type="button" id="qx" aria-label="Limpar busca" hidden>' + ic('x', ' width="18" height="18"') + '</button></label>' +
        '<nav class="pills" id="pills" aria-label="Categorias">' + C.map(function (c, i) { return '<button type="button" data-go="' + esc(c.id) + '"' + (i ? '' : ' class="on"') + '>' + esc(c.nome) + '</button>'; }).join('') + '</nav></div>' +
        (hl.length ? '<section class="sec wrap" id="hls"><div class="sec-head"><h2 class="h">Mais pedidos</h2><p class="subt">Deslize para ver mais.</p></div><div class="rail">' + hlHTML + '</div></section>' : '') +
        '<div class="wrap">' + secs + '<div class="empty" id="empty" hidden><b>Nada encontrado</b>Tente outro nome, como “pizza” ou “suco”.</div></div>' +
      '</main><aside class="side" aria-label="Sua sacola"><div class="inner" id="side"></div></aside></div>' +
      '<footer class="foot-x wrap"><b>' + esc(L.nome) + '</b><p>' + esc(L.endereco) + ' · ' + esc(L.cidade) + '</p><p class="num">' + esc(L.telefone || '') + '</p>' +
        '<div class="hours">' + hours + '</div>' +
        '<div class="links"><a href="' + wa + '" target="_blank" rel="noopener">' + ic('chat') + 'WhatsApp</a>' +
        (L.instagram ? '<a href="https://instagram.com/' + encodeURIComponent(L.instagram) + '" target="_blank" rel="noopener">' + ic('ig') + 'Instagram</a>' : '') +
        '<a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(L.endereco + ', ' + L.cidade) + '" target="_blank" rel="noopener">' + ic('pin') + 'Como chegar</a></div>' +
        '<small class="made">Cardápio feito com Nour</small></footer>' +
      '</div>' +
      '<div class="dock"><button type="button" class="cartbar" id="cartbar" hidden><span class="n num" id="cbn">0</span><span class="t"><b id="cbt">Ver sacola</b><small id="cbs"></small></span><span class="go">Ver sacola</span></button></div>' +
      '<a class="fab" id="fab" href="' + wa + '" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">' + ic('chat') + '</a>' +
      '<dialog id="dItem" aria-label="Produto"></dialog><dialog id="dCart" aria-label="Sua sacola"></dialog>' +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
  }

  var toastT;
  function toast(t) { var el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { el.classList.remove('on'); }, 2200); }

  /* ---------- janela do produto ---------- */
  var cur = null;
  function openItem(id) {
    var it = BYID[id]; if (!it || it.esgotado) return;
    var groups = optsOf(it);
    cur = { it: it, sel: groups.map(function (g) { return g.tipo === 'um' ? 0 : []; }), qty: 1, obs: '' };
    var gi = C.indexOf(CATOF[id]) + CATOF[id].itens.indexOf(it);
    var d = $('#dItem');
    d.innerHTML = '<div class="sheet" role="document"><button type="button" class="x" data-close aria-label="Fechar">' + ic('x') + '</button><div class="scroll">' +
      '<div class="pic bigpic g' + (gi % 4 + 1) + '">' + (it.foto ? '<img src="' + esc(it.foto) + '" alt="">' : sil(it.icone)) + '</div>' +
      '<div class="body"><h2>' + esc(it.nome) + '</h2>' + (it.desc ? '<p class="d">' + esc(it.desc) + '</p>' : '') + '<div class="p num">' + brl(it.preco) + '</div>' +
      groups.map(function (g, i) {
        var many = g.tipo !== 'um';
        return '<div class="grp" data-g="' + i + '"><div class="grp-h"><span><b>' + esc(g.titulo) + '</b><br><small>' + (many ? 'Escolha até ' + (g.max || g.itens.length) : 'Escolha 1 opção') + '</small></span>' +
          (g.obrigatorio ? '<span class="req ok">Obrigatório</span>' : '') + '</div>' +
          g.itens.map(function (o, j) {
            return '<label class="opt"><span>' + esc(o[0]) + '</span>' + (o[1] ? '<small>+ ' + brl(o[1]) + '</small>' : '') +
              '<input type="' + (many ? 'checkbox' : 'radio') + '" name="g' + i + '" value="' + j + '"' + (!many && j === 0 ? ' checked' : '') + '></label>';
          }).join('') + '</div>';
      }).join('') +
      '<label class="obs"><b>Alguma observação?</b><textarea id="obs" rows="2" maxlength="140" placeholder="Ex.: sem cebola, bem passado"></textarea></label>' +
      '</div></div>' +
      '<div class="foot"><div class="step"><button type="button" data-q="-1" aria-label="Tirar um">−</button><b id="iq">1</b><button type="button" data-q="1" aria-label="Adicionar mais um">+</button></div>' +
      '<button type="button" class="cta" id="iadd">Adicionar<span class="sp" id="itot"></span></button></div></div>';
    d.showModal();
    itemTotal();
  }
  function unitOf() {
    var groups = optsOf(cur.it), u = cur.it.preco;
    cur.sel.forEach(function (s, i) { if (Array.isArray(s)) s.forEach(function (j) { u += groups[i].itens[j][1]; }); else u += groups[i].itens[s][1]; });
    return u;
  }
  function itemTotal() { $('#iq').textContent = cur.qty; $('#itot').textContent = brl(unitOf() * cur.qty); }
  function optText(it, sel) {
    var groups = optsOf(it);
    return sel.map(function (s, i) {
      var g = groups[i], names = (Array.isArray(s) ? s : [s]).map(function (j) { return g.itens[j][0]; });
      if (!names.length || (!g.obrigatorio && !Array.isArray(s) && g.itens[s][1] === 0 && s === 0)) return '';
      return g.titulo + ': ' + names.join(', ');
    }).filter(Boolean).join(' · ');
  }
  function quickAdd(id) {
    var it = BYID[id];
    if (optsOf(it).length) return openItem(id);
    addLine({ key: id, id: id, nome: it.nome, qty: 1, unit: it.preco, desc: '', obs: '' });
    toast(it.nome + ' foi para a sacola');
  }

  /* ---------- sacola: linhas e resumo ---------- */
  function linesHTML() {
    return cart.map(function (l, i) {
      return '<div class="line"><div class="info"><b>' + esc(l.nome) + '</b>' + (l.desc ? '<small>' + esc(l.desc) + '</small>' : '') + (l.obs ? '<small>Obs.: ' + esc(l.obs) + '</small>' : '') +
        '<div class="v">' + brl(l.unit * l.qty) + '</div></div><div class="step"><button type="button" data-l="' + i + '" data-d="-1" aria-label="Tirar um">−</button><b>' + l.qty + '</b><button type="button" data-l="' + i + '" data-d="1" aria-label="Adicionar mais um">+</button></div></div>';
    }).join('');
  }
  function drawCart() {
    var n = count(), sub = subtotal();
    var bar = $('#cartbar'); bar.hidden = !n;
    $('#cbn').textContent = n; $('#cbt').textContent = brl(sub); $('#cbs').textContent = n + (n === 1 ? ' item' : ' itens') + (fee() ? ' + entrega' : '');
    $('#fab').hidden = !!n;
    // quantidade já na sacola, por produto
    var per = {}; cart.forEach(function (l) { per[l.id] = (per[l.id] || 0) + l.qty; });
    $$('[data-qt]').forEach(function (el) { var q = per[el.getAttribute('data-qt')]; el.hidden = !q; el.textContent = q ? q + ' na sacola' : ''; });
    // painel lateral (computador)
    $('#side').innerHTML = '<div class="cart-h"><h2>Sua sacola</h2><p>' + (n ? n + (n === 1 ? ' item' : ' itens') : 'Ainda vazia') + '</p></div>' +
      (n ? '<div class="lines">' + linesHTML() + '</div><div class="sum" style="margin-top:14px"><div><span>Subtotal</span><b>' + brl(sub) + '</b></div></div>' +
        '<div class="foot"><button type="button" class="cta" data-checkout>Finalizar pedido<span class="sp">' + brl(sub + fee()) + '</span></button></div>'
        : '<div class="cart-empty">Toque em um produto para adicionar.</div>');
    if ($('#dCart').open) drawCheckout();
  }

  /* ---------- finalizar pedido ---------- */
  function problems() {
    var p = {};
    if (!form.nome.trim()) p.nome = 'Informe seu nome';
    if (form.modo === 'entrega' && !form.end.trim()) p.end = 'Informe o endereço de entrega';
    if (form.modo === 'entrega' && L.entrega.minimo && subtotal() < L.entrega.minimo) p.min = 1;
    return p;
  }
  function message() {
    var lines = ['*Novo pedido · ' + L.nome + '*', ''];
    cart.forEach(function (l) {
      lines.push(l.qty + 'x ' + l.nome + ' (' + brl(l.unit * l.qty) + ')');
      if (l.desc) lines.push('   ' + l.desc);
      if (l.obs) lines.push('   Obs.: ' + l.obs);
    });
    lines.push('', 'Subtotal: ' + brl(subtotal()));
    if (fee()) lines.push('Entrega: ' + brl(fee()));
    lines.push('*Total: ' + brl(subtotal() + fee()) + '*', '');
    lines.push(form.modo === 'entrega' ? 'Entregar em: ' + form.end + (form.ref ? ' (' + form.ref + ')' : '') : 'Vou retirar no local');
    lines.push('Pagamento: ' + form.pag + (form.pag === 'Dinheiro' && form.troco ? ' · troco para ' + form.troco : ''));
    lines.push('Nome: ' + form.nome);
    return lines.join('\n');
  }
  function drawCheckout() {
    var d = $('#dCart'), n = count(), sub = subtotal(), e = L.entrega || {}, r = L.retirada || {};
    var focusId = document.activeElement && d.contains(document.activeElement) ? document.activeElement.id : '';
    var scr = $('.scroll', d), top = scr ? scr.scrollTop : 0;
    if (!n) {
      d.innerHTML = '<div class="sheet"><button type="button" class="x" data-close aria-label="Fechar">' + ic('x') + '</button><div class="scroll"><div class="cart-empty"><b>Sua sacola está vazia</b>Escolha algo gostoso no cardápio.</div></div><div class="foot"><button type="button" class="cta" data-close>Ver cardápio</button></div></div>';
      return;
    }
    var p = problems(), ok = !Object.keys(p).length;
    var modes = (e.ativa ? '<button type="button" data-modo="entrega" aria-pressed="' + (form.modo === 'entrega') + '"><b>Entrega</b><small>' + esc(e.tempo) + ' · ' + (e.taxa ? brl(e.taxa) : 'grátis') + '</small></button>' : '') +
      (r.ativa ? '<button type="button" data-modo="retirada" aria-pressed="' + (form.modo === 'retirada') + '"><b>Retirar no local</b><small>' + esc(r.tempo) + ' · sem taxa</small></button>' : '');
    var pays = (L.pagamentos || []).map(function (x) { return '<button type="button" data-pag="' + esc(x) + '" aria-pressed="' + (form.pag === x) + '">' + esc(x) + '</button>'; }).join('');
    var href = 'https://wa.me/' + L.whatsapp + '?text=' + encodeURIComponent(message());
    d.innerHTML = '<div class="sheet"><button type="button" class="x" data-close aria-label="Fechar">' + ic('x') + '</button><div class="scroll">' +
      '<div class="cart-h"><h2>Sua sacola</h2><p>' + n + (n === 1 ? ' item' : ' itens') + ' · <button type="button" class="clear" data-clear>Esvaziar</button></p></div>' +
      '<div class="lines">' + linesHTML() + '</div>' +
      '<div class="form"><h3>Como você quer receber?</h3><div class="seg">' + modes + '</div>' +
      '<label class="field"><span>Seu nome</span><input id="fNome" autocomplete="name" value="' + esc(form.nome) + '" placeholder="Como devemos te chamar">' + (p.nome && form._try ? '<em>' + p.nome + '</em>' : '') + '</label>' +
      (form.modo === 'entrega' ? '<label class="field"><span>Endereço de entrega</span><input id="fEnd" autocomplete="street-address" value="' + esc(form.end) + '" placeholder="Rua, número e bairro">' + (p.end && form._try ? '<em>' + p.end + '</em>' : '') + '</label>' +
        '<label class="field"><span>Complemento ou referência (opcional)</span><input id="fRef" value="' + esc(form.ref) + '" placeholder="Apto, bloco, ponto de referência"></label>' : '') +
      '<h3>Forma de pagamento</h3><div class="seg pay">' + pays + '</div>' +
      (form.pag === 'Dinheiro' ? '<label class="field"><span>Troco para quanto? (opcional)</span><input id="fTroco" inputmode="decimal" value="' + esc(form.troco) + '" placeholder="Ex.: R$ 100"></label>' : '') +
      '</div>' +
      '<div class="sum"><div><span>Subtotal</span><span>' + brl(sub) + '</span></div>' + (form.modo === 'entrega' ? '<div><span>Taxa de entrega</span><span>' + (fee() ? brl(fee()) : 'Grátis') + '</span></div>' : '') +
      '<div class="tot"><span>Total</span><span>' + brl(sub + fee()) + '</span></div></div>' +
      (p.min ? '<p class="warn">O pedido mínimo para entrega é ' + brl(e.minimo) + '. Faltam ' + brl(e.minimo - sub) + '.</p>' : '') +
      (!st.open ? '<p class="warn">' + esc(st.txt) + '. Você pode enviar agora e a loja responde quando abrir.</p>' : '') +
      '</div><div class="foot"><a class="cta zap" id="send" href="' + (ok ? href : '#') + '" target="_blank" rel="noopener"' + (ok ? '' : ' aria-disabled="true"') + '>' + ic('chat') + 'Enviar pedido no WhatsApp</a></div></div>';
    scr = $('.scroll', d); if (scr) scr.scrollTop = top;
    if (focusId && $('#' + focusId)) { var f = $('#' + focusId); f.focus(); try { f.setSelectionRange(f.value.length, f.value.length); } catch (x) {} }
  }
  function openCart() { var d = $('#dCart'); drawCheckout(); if (!d.open) d.showModal(); }

  /* ---------- eventos ---------- */
  function bind() {
    document.addEventListener('click', function (ev) {
      var t = ev.target, b;
      if ((t.tagName === 'DIALOG') || t.closest('[data-close]')) { var dl = t.closest('dialog'); if (dl) dl.close(); return; }
      if ((b = t.closest('[data-quick]'))) return quickAdd(b.getAttribute('data-quick'));
      if ((b = t.closest('.item[data-id]'))) return openItem(b.getAttribute('data-id'));
      if ((b = t.closest('[data-go]'))) { var s = $('#cat-' + b.getAttribute('data-go')); if (s) s.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); return; }
      if ((b = t.closest('[data-q]')) && cur && b.closest('#dItem')) { cur.qty = Math.max(1, cur.qty + +b.getAttribute('data-q')); return itemTotal(); }
      if (t.closest('#iadd')) {
        cur.obs = $('#obs').value.trim();
        var key = cur.it.id + '|' + JSON.stringify(cur.sel) + '|' + cur.obs;
        addLine({ key: key, id: cur.it.id, nome: cur.it.nome, qty: cur.qty, unit: unitOf(), desc: optText(cur.it, cur.sel), obs: cur.obs });
        $('#dItem').close(); toast(cur.qty + 'x ' + cur.it.nome + ' na sacola'); return;
      }
      if ((b = t.closest('[data-l]'))) { var i = +b.getAttribute('data-l'); cart[i].qty += +b.getAttribute('data-d'); if (cart[i].qty < 1) cart.splice(i, 1); save(); return drawCart(); }
      if (t.closest('#cartbar') || t.closest('[data-checkout]')) return openCart();
      if (t.closest('[data-clear]')) { cart = []; save(); drawCart(); return; }
      if ((b = t.closest('[data-modo]'))) { form.modo = b.getAttribute('data-modo'); save(); drawCart(); return; }
      if ((b = t.closest('[data-pag]'))) { form.pag = b.getAttribute('data-pag'); save(); return drawCheckout(); }
      if ((b = t.closest('#send'))) {
        if (b.getAttribute('aria-disabled')) { ev.preventDefault(); form._try = 1; drawCheckout(); var p = problems(); toast(p.nome || p.end || 'Falta atingir o pedido mínimo'); }
        else toast('Abrindo o WhatsApp com seu pedido');
      }
    });
    document.addEventListener('change', function (ev) {
      var t = ev.target, g = t.closest('.grp');
      if (!g || !cur) return;
      var gi = +g.getAttribute('data-g'), grp = optsOf(cur.it)[gi];
      if (grp.tipo === 'um') cur.sel[gi] = +t.value;
      else {
        cur.sel[gi] = $$('input:checked', g).map(function (x) { return +x.value; });
        var full = cur.sel[gi].length >= (grp.max || 99);
        $$('input', g).forEach(function (x) { x.disabled = full && !x.checked; });
      }
      itemTotal();
    });
    document.addEventListener('input', function (ev) {
      var id = ev.target.id, map = { fNome: 'nome', fEnd: 'end', fRef: 'ref', fTroco: 'troco' };
      if (map[id]) {
        form[map[id]] = ev.target.value; save();
        var ok = !Object.keys(problems()).length, s = $('#send');
        if (s) { s.href = ok ? 'https://wa.me/' + L.whatsapp + '?text=' + encodeURIComponent(message()) : '#'; if (ok) s.removeAttribute('aria-disabled'); else s.setAttribute('aria-disabled', 'true'); }
        return;
      }
      if (id === 'q') search(ev.target.value);
    });
    $('#qx').addEventListener('click', function () { var q = $('#q'); q.value = ''; search(''); q.focus(); });

    // categoria ativa conforme a rolagem
    if ('IntersectionObserver' in window) {
      var pills = $('#pills'), seen = {};
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { seen[e.target.getAttribute('data-cat')] = e.isIntersecting; });
        var first = C.filter(function (c) { return seen[c.id]; })[0];
        if (!first) return;
        $$('button', pills).forEach(function (b) {
          var on = b.getAttribute('data-go') === first.id; b.classList.toggle('on', on);
          if (on) pills.scrollTo({ left: b.offsetLeft - 16, behavior: 'smooth' });
        });
      }, { rootMargin: '-150px 0px -55% 0px' });
      $$('.cat').forEach(function (s) { io.observe(s); });
      var bar = $('#bar');
      window.addEventListener('scroll', function () { bar.classList.toggle('stuck', bar.getBoundingClientRect().top <= 1); }, { passive: true });
    }
  }

  function search(v) {
    var q = norm(v.trim()), any = false;
    $('#qx').hidden = !q;
    var hls = $('#hls'); if (hls) hls.hidden = !!q;
    $$('.cat').forEach(function (s) {
      var vis = 0;
      $$('.item', s).forEach(function (it) { var m = !q || it.getAttribute('data-s').indexOf(q) > -1; it.hidden = !m; if (m) vis++; });
      s.hidden = !vis; if (vis) any = true;
    });
    $('#empty').hidden = any;
  }

  render();
  bind();
  drawCart();
})();
