/* =====================================================================
   Nour Catálogo · painel do lojista
   Entra com o endereço da loja e o código de acesso. Tudo é lido e gravado
   pelas funções catalogo_painel e catalogo_painel_salvar, que conferem o código.
   ===================================================================== */
(function () {
  'use strict';
  var app = document.getElementById('app'), dlg = document.getElementById('dlg');
  var S = { slug: '', token: '', d: null, tab: 'inicio', q: '', cat: '', pst: 'novo', periodo: 30, cq: '' };

  /* ---------- utilidades ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function brl(n) { return 'R$ ' + (Math.round((+n || 0) * 100) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function num(n) { return (+n || 0).toLocaleString('pt-BR'); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function val(id) { var el = document.getElementById(id); return el ? (el.type === 'checkbox' ? el.checked : el.value.trim()) : ''; }
  function cor(c, p) { return /^#[0-9a-f]{6}$/i.test(String(c || '')) ? c : p; }
  function url(u) { u = String(u || '').trim(); return /^https:\/\/[^\s"'<>\\]+$/.test(u) ? u : ''; }
  function slugify(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40); }
  function dataBr(iso, hora) { var d = new Date(iso); return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) + (hora ? ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : ''); }
  function dia(iso) { return new Date(iso).toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' }); }
  var toastT;
  function toast(t) { var el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { el.classList.remove('on'); }, 2600); }
  var I = {
    home: '<path d="M3 11 12 4l9 7v9h-6v-6H9v6H3z"/>', box: '<path d="m3 7 9-4 9 4v10l-9 4-9-4z"/><path d="m3 7 9 4 9-4M12 11v10"/>',
    bag: '<path d="M6 8h12l1 12H5L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>', chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>', brush: '<path d="M14 4l6 6-9 9H5v-6z"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3"/>', tag: '<path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>', chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.3A8.4 8.4 0 1 1 21 11.5z"/>', ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>', plus: '<path d="M12 5v14M5 12h14"/>', out: '<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>'
  };
  function ic(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[n] + '</svg>'; }

  /* ---------- acesso ---------- */
  var ERROS = { acesso_negado: 'Loja ou código de acesso incorreto.', dados_invalidos: 'Algum campo está fora do formato.', produto_inexistente: 'Esse produto não existe mais.',
    nome_invalido: 'Preencha o nome.', status_invalido: 'Status inválido.', acao_invalida: 'Ação inválida.',
    cupom_repetido: 'Já existe um cupom com esse código.', cupom_codigo_invalido: 'Use de 3 a 20 letras ou números no código do cupom.', pedido_inexistente: 'Esse pedido não existe mais.', quantidade_invalida: 'Quantidade inválida.' };
  function msgErro(e) { var m = String(e && e.message || ''); if (m.indexOf('sem_estoque') === 0) return 'Sem estoque dessa opção de ' + (m.split(':')[1] || 'produto') + '.'; return ERROS[m] || (e && e.status === 0 ? 'Sem conexão. Confira a internet.' : 'Não deu certo: ' + m); }
  function guardar() {
    var v = JSON.stringify({ slug: S.slug, token: S.token });
    try { sessionStorage.setItem('nourpainel', v); if (S.lembrar) localStorage.setItem('nourpainel', v); } catch (e) {}
  }
  function esquecer() { try { sessionStorage.removeItem('nourpainel'); localStorage.removeItem('nourpainel'); } catch (e) {} }
  function salvo() { try { return JSON.parse(sessionStorage.getItem('nourpainel') || localStorage.getItem('nourpainel') || 'null'); } catch (e) { return null; } }

  function entrar(slug, token, lembrar) {
    S.slug = slug; S.token = token; S.lembrar = lembrar;
    app.innerHTML = '<div class="loading">Abrindo o painel…</div>';
    return window.nourRpc('catalogo_painel', { p_slug: slug, p_token: token }).then(function (d) {
      S.d = d; guardar(); aplicarCor();
      if (!d.onboarding || !d.onboarding.feito) return onboarding(1);
      render();
    }).catch(function (e) { esquecer(); login(msgErro(e)); });
  }
  function salvar(acao, dados, ok) {
    return window.nourRpc('catalogo_painel_salvar', { p_slug: S.slug, p_token: S.token, p_acao: acao, d: dados || {} }).then(function (d) {
      if (d && d.slug) S.d = d;
      if (ok) toast(ok);
      return d;
    }).catch(function (e) { toast(msgErro(e)); throw e; });
  }
  // White label: com o endereço da loja, a entrada já mostra a marca do parceiro e as cores da loja.
  var marca = null;
  function marcaHtml(m) {
    var pc = (m && m.parceiro) || {};
    return pc.logo && url(pc.logo) ? '<img class="plogo" src="' + esc(url(pc.logo)) + '" alt="' + esc(pc.nome || '') + '">' : '<span class="ring"><span class="in">' + esc(String(pc.nome || 'N').charAt(0).toUpperCase()) + '</span></span>';
  }
  function login(erro) {
    var s = salvo(), slugAtual = (s && s.slug) || S.slug || '';
    if (slugAtual && !marca) {
      window.nourRpc('catalogo_marca', { p_slug: slugAtual }).then(function (m) {
        if (!m) return; marca = m;
        var c = m.cores || {}; document.documentElement.style.setProperty('--p1', cor(c.p1, '#8C2A5B')); document.documentElement.style.setProperty('--p2', cor(c.p2, '#D0567F'));
        if ($('#flogin')) login(erro);
      }).catch(function () {});
    }
    var pc = (marca && marca.parceiro) || {};
    document.title = 'Painel' + (marca ? ' · ' + marca.nome : '') + (pc.nome ? ' · ' + pc.nome : '');
    app.innerHTML = '<main class="login"><div class="lbox">' + marcaHtml(marca) + '<h1>' + (marca ? esc(marca.nome) : 'Painel da loja') + '</h1><p class="sub">Entre com o endereço da sua loja e o código de acesso que você recebeu.</p>' +
      (erro ? '<p class="err" role="alert">' + esc(erro) + '</p>' : '') +
      '<form id="flogin" class="form" novalidate><label class="field"><span>Endereço da loja</span><input id="lSlug" autocomplete="username" placeholder="ex.: atelie-exemplo" value="' + esc((s && s.slug) || S.slug || '') + '" required></label>' +
      '<label class="field"><span>Código de acesso</span><input id="lTok" type="password" autocomplete="current-password" required></label>' +
      '<label class="check"><input type="checkbox" id="lLem"> Lembrar neste aparelho</label><button class="btn" type="submit">Entrar</button></form>' +
      '<p class="note">Perdeu o código? Peça um novo para ' + (pc.nome ? esc(pc.nome) : 'quem criou sua loja') + '.</p>' + (pc.nome ? '<p class="by2">Painel por ' + esc(pc.nome) + '</p>' : '') + '</div></main>';
  }

  /* ---------- cores do painel = cores da loja ---------- */
  function aplicarCor() {
    var c = (S.d.loja && S.d.loja.cores) || {};
    document.documentElement.style.setProperty('--p1', cor(c.p1, '#8C2A5B'));
    document.documentElement.style.setProperty('--p2', cor(c.p2, '#D0567F'));
    var pc = (S.d.loja && S.d.loja.parceiro) || {};
    document.title = (S.d.nome || 'Loja') + ' · Painel' + (pc.nome ? ' · ' + pc.nome : '');
  }
  function lojaUrl() { return new URL('../?loja=' + encodeURIComponent(S.slug), location.href).href; }

  /* ---------- estrutura ---------- */
  var TABS = [['inicio', 'Início', 'home'], ['produtos', 'Produtos e estoque', 'box'], ['pedidos', 'Pedidos', 'bag'], ['cupons', 'Cupons', 'tag'], ['analytics', 'Analytics', 'eye'],
    ['relatorios', 'Relatórios', 'chart'], ['clientes', 'Clientes', 'users'], ['avaliacoes', 'Avaliações', 'star'], ['loja', 'Aparência e loja', 'brush'], ['acesso', 'Acesso', 'key']];
  function render() {
    var d = S.d, novos = d.pedidos.filter(function (p) { return p.status === 'novo'; }).length;
    var init = String(d.nome || 'L').split(/\s+/).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
    app.innerHTML = '<div class="shell"><aside class="side"><div class="who"><span class="ring"><span class="in">' + esc(init) + '</span></span><span><b>' + esc(d.nome) + '</b><small>Painel do catálogo</small></span></div>' +
      '<nav aria-label="Seções">' + TABS.map(function (t) { return '<button type="button" class="nv" data-tab="' + t[0] + '"' + (S.tab === t[0] ? ' aria-current="page"' : '') + '>' + ic(t[2]) + '<span>' + t[1] + '</span>' + (t[0] === 'pedidos' && novos ? '<em class="num">' + novos + '</em>' : '') + '</button>'; }).join('') + '</nav>' +
      '<div class="sidefoot"><a class="nv" href="' + esc(lojaUrl()) + '" target="_blank" rel="noopener">' + ic('ext') + '<span>Ver minha loja</span></a><button type="button" class="nv" data-sair>' + ic('out') + '<span>Sair</span></button>' +
      parceiroRodape() + '</div></aside>' +
      '<main class="main" id="main">' + ({ inicio: inicio, produtos: produtos, pedidos: pedidos, cupons: cupons, analytics: analytics, relatorios: relatorios, clientes: clientes, avaliacoes: avaliacoes, loja: loja, acesso: acesso })[S.tab]() + '</main></div>';
  }
  // White label: rodapé do menu com a marca e o suporte do parceiro (sem parceiro, Nour).
  function parceiroRodape() {
    var p = (S.d.loja && S.d.loja.parceiro) || {}, sup = String(p.suporte || '').replace(/\D/g, '');
    return '<div class="by">' + (p.logo && url(p.logo) ? '<img src="' + esc(url(p.logo)) + '" alt="">' : '') + '<span>Painel por <b>' + esc(p.nome || 'Nour') + '</b></span>' +
      (sup ? '<a href="https://wa.me/' + esc(sup.length <= 11 ? '55' + sup : sup) + '" target="_blank" rel="noopener">' + ic('chat') + 'Falar com o suporte</a>' : '') + '</div>';
  }

  /* ---------- números ---------- */
  var VENDIDO = ['confirmado', 'enviado', 'entregue'];
  function vendas(dias) {
    var lim = Date.now() - dias * 864e5;
    return S.d.pedidos.filter(function (p) { return VENDIDO.indexOf(p.status) > -1 && new Date(p.criado).getTime() >= lim; });
  }
  function soma(arr, k) { return arr.reduce(function (s, x) { return s + (+x[k] || 0); }, 0); }
  function visitas(dias) { var lim = dia(Date.now() - dias * 864e5); return S.d.visitas.filter(function (v) { return v.dia > lim; }); }
  function totalEst(p) { var t = 0; for (var k in p.estoque) t += +p.estoque[k] || 0; return t; }
  function serieDias(dias, fn) {
    var out = [];
    for (var i = dias - 1; i >= 0; i--) { var dd = dia(Date.now() - i * 864e5); out.push({ dia: dd, v: fn(dd) }); }
    return out;
  }
  // Barras de uma série só, na escala do maior valor; cada barra mostra o valor ao passar o mouse.
  function barras(serie, fmt) {
    var W = 640, H = 180, pl = 44, pb = 22, pt = 8, max = Math.max.apply(null, serie.map(function (x) { return x.v; }));
    if (!max) return '<p class="empty">Nada registrado no período.</p>';
    var passo = Math.pow(10, Math.floor(Math.log10(max / 3))), m = max / 3 / passo; passo = Math.max(1, passo * (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10));
    var topo = Math.ceil(max / passo) * passo, bw = (W - pl) / serie.length, g = '';
    for (var v = 0; v <= topo + 1e-9; v += passo) { var y = pt + (H - pt - pb) * (1 - v / topo); g += '<line x1="' + pl + '" x2="' + W + '" y1="' + y + '" y2="' + y + '" class="grid"/><text x="' + (pl - 6) + '" y="' + (y + 4) + '" text-anchor="end">' + esc(fmt(v, true)) + '</text>'; }
    var bars = serie.map(function (x, i) {
      var h = (H - pt - pb) * (x.v / topo), bx = pl + i * bw + 1.5, by = H - pb - h, w = Math.max(bw - 3, 1);
      return '<g class="bar"><title>' + esc(x.dia.split('-').reverse().slice(0, 2).join('/') + ': ' + fmt(x.v)) + '</title><rect x="' + (pl + i * bw) + '" y="' + pt + '" width="' + bw + '" height="' + (H - pt - pb) + '" fill="transparent"/>' +
        (x.v ? '<path d="M' + bx + ' ' + (H - pb) + 'V' + (by + Math.min(3, h)) + 'q0-3 3-3h' + Math.max(w - 6, 0) + 'q3 0 3 3V' + (H - pb) + 'Z"/>' : '') + '</g>';
    }).join('');
    var labs = serie.map(function (x, i) { return i % Math.ceil(serie.length / 6) === 0 || i === serie.length - 1 ? '<text x="' + (pl + i * bw + bw / 2) + '" y="' + (H - 5) + '" text-anchor="middle">' + x.dia.split('-').reverse().slice(0, 2).join('/') + '</text>' : ''; }).join('');
    return '<div class="chart"><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Gráfico por dia">' + g + bars + labs + '</svg></div>';
  }
  function hbar(rows, fmt) {
    var max = Math.max.apply(null, rows.map(function (r) { return r[1]; })) || 1;
    return rows.length ? rows.map(function (r) { return '<div class="hbar"><span>' + esc(r[0]) + '</span><i><em style="width:' + (r[1] / max * 100) + '%"></em></i><b class="num">' + esc(fmt(r[1])) + '</b></div>'; }).join('') : '<p class="note">Sem dados no período.</p>';
  }
  function kpi(t, v, s) { return '<div class="kpi"><span>' + esc(t) + '</span><b class="num">' + v + '</b>' + (s ? '<small>' + s + '</small>' : '') + '</div>'; }
  function stPill(s) { var m = { novo: ['Novo', 'warn'], confirmado: ['Confirmado', 'ok'], enviado: ['Enviado', 'ok'], entregue: ['Entregue', 'ok'], cancelado: ['Cancelado', 'bad'] }[s] || [s, '']; return '<span class="pill ' + m[1] + '">' + m[0] + '</span>'; }

  /* ---------- início ---------- */
  function inicio() {
    var d = S.d, v30 = vendas(30), fat = soma(v30, 'total'), vis = soma(visitas(30), 'n'), novos = d.pedidos.filter(function (p) { return p.status === 'novo'; });
    var baixo = [];
    d.produtos.forEach(function (p) { if (!p.ativo) return; for (var k in p.estoque) if (p.estoque[k] <= 2) baixo.push({ p: p, k: k, q: p.estoque[k] }); });
    baixo.sort(function (a, b) { return a.q - b.q; });
    var passos = [[d.loja.whatsapp, 'WhatsApp de pedidos', 'loja'], [d.loja.logo, 'Logo da loja', 'loja'], [d.produtos.some(function (p) { return p.fotos && p.fotos.length; }), 'Fotos nos produtos', 'produtos'],
      [d.categorias.length, 'Categorias', 'produtos'], [(d.loja.novidades || {}).grupoWhatsapp, 'Link do grupo de promoções', 'loja']].filter(function (x) { return !x[0]; });
    var serie = serieDias(30, function (dd) { return soma(v30.filter(function (p) { return dia(p.criado) === dd; }), 'total'); });
    return '<h1>Olá, ' + esc(d.nome) + '</h1><p class="sub">Resumo dos últimos 30 dias</p>' +
      (passos.length ? '<div class="card todo"><h2>Falta pouco para a loja ficar completa</h2><ul>' + passos.map(function (x) { return '<li><button type="button" class="link" data-tab="' + x[2] + '">' + esc(x[1]) + '</button></li>'; }).join('') + '</ul></div>' : '') +
      '<div class="kpis">' + kpi('Vendas confirmadas', brl(fat), v30.length + (v30.length === 1 ? ' pedido' : ' pedidos')) + kpi('Pedidos novos', num(novos.length), novos.length ? 'Confirme para baixar o estoque' : 'Nenhum esperando') +
        kpi('Ticket médio', brl(v30.length ? fat / v30.length : 0)) + kpi('Visitas na loja', num(vis), vis ? 'Conversão ' + (v30.length / vis * 100).toFixed(1).replace('.', ',') + '%' : 'Contadas após o aceite de cookies') + '</div>' +
      '<div class="cols"><div class="card"><h2>Vendas por dia</h2>' + barras(serie, function (v, ax) { return ax ? (v >= 1000 ? (v / 1000).toLocaleString('pt-BR') + ' mil' : String(Math.round(v))) : brl(v); }) + '</div>' +
      '<div class="card"><h2>Estoque baixo</h2>' + (baixo.length ? '<ul class="lst">' + baixo.slice(0, 8).map(function (x) { return '<li><button type="button" class="link" data-edit="' + x.p.id + '">' + esc(x.p.nome) + '</button><small>' + esc(x.k.split('|').filter(Boolean).join(' · ')) + '</small>' + (x.q ? '<span class="pill warn">' + x.q + ' un.</span>' : '<span class="pill bad">Zerado</span>') + '</li>'; }).join('') + '</ul>' : '<p class="note">Nada acabando.</p>') + '</div></div>' +
      '<div class="card"><h2>Pedidos novos</h2>' + (novos.length ? novos.slice(0, 5).map(pedidoCard).join('') : '<p class="note">Quando um cliente enviar um pedido pelo WhatsApp, ele aparece aqui.</p>') + '</div>';
  }

  /* ---------- produtos ---------- */
  function produtos() {
    var d = S.d, q = S.q.toLowerCase(), ps = d.produtos.filter(function (p) {
      return (!S.cat || p.categoria === S.cat) && (!q || (p.nome + ' ' + p.sku + ' ' + p.marca).toLowerCase().indexOf(q) > -1);
    });
    var catNome = {}; d.categorias.forEach(function (c) { catNome[c.chave] = c.nome; });
    return '<div class="head"><div><h1>Produtos e estoque</h1><p class="sub">' + d.produtos.length + ' produtos · ' + num(d.produtos.reduce(function (s, p) { return s + totalEst(p); }, 0)) + ' unidades em estoque</p></div>' +
      '<button type="button" class="btn" data-novo-prod>' + ic('plus') + 'Novo produto</button></div>' +
      '<div class="card"><h2>Categorias</h2><div class="chips">' + d.categorias.map(function (c) { return '<button type="button" class="chip" data-edit-cat="' + c.id + '"><i style="background:' + esc(cor(c.cor, '#ccc')) + '"></i>' + esc(c.nome) + '</button>'; }).join('') +
      '<button type="button" class="chip add" data-nova-cat>' + ic('plus') + 'Nova categoria</button></div></div>' +
      '<div class="card"><div class="tools"><input id="pq" type="search" placeholder="Buscar por nome ou código" value="' + esc(S.q) + '" aria-label="Buscar produtos">' +
      '<select id="pcat" aria-label="Filtrar por categoria"><option value="">Todas as categorias</option>' + d.categorias.map(function (c) { return '<option value="' + esc(c.chave) + '"' + (S.cat === c.chave ? ' selected' : '') + '>' + esc(c.nome) + '</option>'; }).join('') + '</select></div>' +
      (ps.length ? '<div class="tbl"><table><thead><tr><th>Produto</th><th>Categoria</th><th class="r">Preço</th><th class="r">Estoque</th><th>Na loja</th><th></th></tr></thead><tbody>' + ps.map(function (p) {
        var t = totalEst(p), c0 = (p.cores[0] || [])[1];
        return '<tr><td><span class="pr">' + (p.fotos && url(p.fotos[0]) ? '<img src="' + esc(url(p.fotos[0])) + '" alt="">' : '<i style="background:' + esc(cor(c0, 'var(--soft)')) + '"></i>') + '<span><b>' + esc(p.nome) + '</b><small class="mono">' + esc(p.sku || 'sem código') + '</small></span></span></td>' +
          '<td>' + esc(catNome[p.categoria] || '—') + '</td><td class="r num">' + (p.preco_de ? '<s>' + brl(p.preco_de) + '</s> ' : '') + brl(p.preco) + '</td>' +
          '<td class="r">' + (t === 0 ? '<span class="pill bad">Esgotado</span>' : t <= 3 ? '<span class="pill warn">' + t + '</span>' : '<span class="num">' + t + '</span>') + '</td>' +
          '<td><label class="sw"><input type="checkbox" data-ativo="' + p.id + '"' + (p.ativo ? ' checked' : '') + '><span>' + (p.ativo ? 'Visível' : 'Oculto') + '</span></label></td>' +
          '<td class="r"><button type="button" class="btn ghost sm" data-edit="' + p.id + '">Editar</button></td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="empty">Nenhum produto encontrado.</p>') + '</div>' +
      '<details class="card"><summary><h2>Movimentos de estoque</h2></summary><div class="tbl"><table><thead><tr><th>Quando</th><th>Produto</th><th>Variação</th><th class="r">Mudança</th><th class="r">Saldo</th><th>Motivo</th></tr></thead><tbody>' +
      d.movimentos.slice(0, 80).map(function (m) { return '<tr><td>' + dataBr(m.em, 1) + '</td><td>' + esc(m.produto_nome) + '</td><td>' + esc([m.cor, m.tamanho].filter(Boolean).join(' · ') || '—') + '</td><td class="r num ' + (m.delta < 0 ? 'neg' : 'pos') + '">' + (m.delta > 0 ? '+' : '') + m.delta + '</td><td class="r num">' + (m.saldo == null ? '' : m.saldo) + '</td><td>' + esc(m.motivo) + '</td></tr>'; }).join('') +
      '</tbody></table></div></details>';
  }
  var DESENHOS = ['camiseta', 'blusa', 'vestido', 'calca', 'saia', 'casaco', 'short', 'regata', 'moletom', 'tenis', 'sandalia', 'bolsa', 'bone', 'oculos', 'relogio', 'anel', 'colar', 'perfume', 'batom', 'pote', 'garrafa', 'celular', 'fone', 'racao', 'bola', 'ferramenta', 'tinta', 'pneu', 'flor', 'vinho', 'caderno', 'sofa', 'botijao', 'caixa'];
  var ed = null;  // produto em edição
  function editarProduto(id) {
    var p = S.d.produtos.filter(function (x) { return String(x.id) === String(id); })[0];
    ed = p ? JSON.parse(JSON.stringify(p)) : { nome: '', sku: '', marca: '', categoria: S.cat || (S.d.categorias[0] || {}).chave || '', preco: '', preco_de: '', desenho: 'camiseta', fotos: [], descricao: '', composicao: '',
      destaque: false, oferta: false, selo: '', ativo: true, cores: [['', '#1D1F23']], tamanhos: ['P', 'M', 'G'], estoque: {} };
    if (!ed.cores.length) ed.cores = [['', '']];
    if (!ed.tamanhos.length) ed.tamanhos = [''];
    drawEditor(); dlg.showModal();
  }
  function lerEditor() {
    if (!ed) return;
    var antigos = ed.cores.map(function (c) { return c[0]; });
    $$('[data-est]', dlg).forEach(function (el) { ed.estoque[el.getAttribute('data-est')] = Math.max(0, parseInt(el.value, 10) || 0); });
    ['nome', 'sku', 'marca', 'categoria', 'preco', 'preco_de', 'desenho', 'descricao', 'composicao', 'selo'].forEach(function (k) { var el = document.getElementById('e_' + k); if (el) ed[k] = el.value; });
    ['destaque', 'oferta', 'ativo'].forEach(function (k) { var el = document.getElementById('e_' + k); if (el) ed[k] = el.checked; });
    ed.fotos = $$('[data-foto-i]', dlg).map(function (el) { return el.value.trim(); }).filter(Boolean);
    ed.cores = $$('[data-cor-i]', dlg).map(function (row) { return [$('.cn', row).value.trim(), $('.ch', row).value]; });
    ed.tamanhos = (document.getElementById('e_tams') || { value: '' }).value.split(',').map(function (t) { return t.trim(); }).filter(function (t, i, a) { return t && a.indexOf(t) === i; });
    // Renomear uma cor leva o estoque junto.
    ed.cores.forEach(function (c, i) {
      var velho = antigos[i]; if (velho === undefined || velho === c[0]) return;
      ed.tamanhos.forEach(function (t) { if ((velho + '|' + t) in ed.estoque) { ed.estoque[c[0] + '|' + t] = ed.estoque[velho + '|' + t]; delete ed.estoque[velho + '|' + t]; } });
    });
    if (!ed.cores.length) ed.cores = [['', '']];
    if (!ed.tamanhos.length) ed.tamanhos = [''];
  }
  function gradeHtml() {
    return '<table class="grade"><thead><tr><th></th>' + ed.tamanhos.map(function (t) { return '<th>' + esc(t || 'Único') + '</th>'; }).join('') + '</tr></thead><tbody>' +
      ed.cores.map(function (co) { return '<tr><th>' + esc(co[0] || 'Única') + '</th>' + ed.tamanhos.map(function (t) { var k = co[0] + '|' + t; return '<td><input type="number" min="0" max="99999" inputmode="numeric" data-est="' + esc(k) + '" value="' + (+ed.estoque[k] || 0) + '" aria-label="Estoque ' + esc((co[0] || '') + ' ' + (t || '')) + '"></td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }
  // Só a tabela da grade é redesenhada ao mudar cores ou tamanhos, para não perder o clique em "Salvar".
  function drawGrade() { var g = document.getElementById('egrade'); if (g) g.innerHTML = gradeHtml(); }
  function drawEditor() {
    var c = S.d.categorias, novo = !ed.id;
    dlg.innerHTML = '<form class="sheet" id="fprod" novalidate><header><h2>' + (novo ? 'Novo produto' : 'Editar produto') + '</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      '<div class="g2"><label class="field"><span>Nome</span><input id="e_nome" maxlength="120" value="' + esc(ed.nome) + '" required></label>' +
      '<label class="field"><span>Categoria</span><select id="e_categoria"><option value="">Sem categoria</option>' + c.map(function (x) { return '<option value="' + esc(x.chave) + '"' + (ed.categoria === x.chave ? ' selected' : '') + '>' + esc(x.nome) + '</option>'; }).join('') + '</select></label></div>' +
      '<div class="g3"><label class="field"><span>Preço (R$)</span><input id="e_preco" type="number" min="0" step="0.01" inputmode="decimal" value="' + esc(ed.preco) + '" required></label>' +
      '<label class="field"><span>Preço "de" (riscado)</span><input id="e_preco_de" type="number" min="0" step="0.01" inputmode="decimal" value="' + esc(ed.preco_de || '') + '"></label>' +
      '<label class="field"><span>Código (SKU)</span><input id="e_sku" maxlength="40" value="' + esc(ed.sku) + '" placeholder="Ex.: VES-LINHO"></label></div>' +
      '<div class="g3"><label class="field"><span>Marca ou linha</span><input id="e_marca" maxlength="60" value="' + esc(ed.marca) + '"></label>' +
      '<label class="field"><span>Selo</span><input id="e_selo" maxlength="16" value="' + esc(ed.selo) + '" placeholder="NOVO, ÚLTIMAS…"></label>' +
      '<label class="field"><span>Desenho (sem foto)</span><select id="e_desenho">' + DESENHOS.map(function (x) { return '<option' + (ed.desenho === x ? ' selected' : '') + '>' + x + '</option>'; }).join('') + '</select></label></div>' +
      '<div class="checks"><label class="check"><input type="checkbox" id="e_ativo"' + (ed.ativo ? ' checked' : '') + '> Visível na loja</label><label class="check"><input type="checkbox" id="e_destaque"' + (ed.destaque ? ' checked' : '') + '> Mais vendidos</label><label class="check"><input type="checkbox" id="e_oferta"' + (ed.oferta ? ' checked' : '') + '> Na vitrine de ofertas</label></div>' +
      '<label class="field"><span>Descrição</span><textarea id="e_descricao" rows="3" maxlength="2000">' + esc(ed.descricao) + '</textarea></label>' +
      '<label class="field"><span>Composição</span><input id="e_composicao" maxlength="200" value="' + esc(ed.composicao) + '"></label>' +
      '<fieldset><legend>Fotos <small>link https da imagem; a 2ª aparece ao passar o mouse</small></legend>' + (ed.fotos.length ? ed.fotos : ['']).concat(ed.fotos.length && ed.fotos.length < 8 ? [''] : []).map(function (f, i) { return '<input data-foto-i type="url" inputmode="url" placeholder="https://…" value="' + esc(f) + '" aria-label="Foto ' + (i + 1) + '">'; }).join('') + '</fieldset>' +
      '<fieldset><legend>Cores <small>deixe vazio se o produto tem uma cor só</small></legend><div id="ecores">' + ed.cores.map(function (co, i) { return '<div class="corrow" data-cor-i><input class="cn" maxlength="30" placeholder="Nome da cor" value="' + esc(co[0]) + '" aria-label="Nome da cor ' + (i + 1) + '"><input class="ch" type="color" value="' + esc(cor(co[1], '#1D1F23')) + '" aria-label="Cor ' + (i + 1) + '"><button type="button" class="x sm" data-rmcor="' + i + '" aria-label="Remover cor">' + ic('x') + '</button></div>'; }).join('') + '</div>' +
      '<button type="button" class="btn ghost sm" data-addcor>' + ic('plus') + 'Adicionar cor</button></fieldset>' +
      '<label class="field"><span>Tamanhos, separados por vírgula</span><input id="e_tams" value="' + esc(ed.tamanhos.join(', ')) + '" placeholder="PP, P, M, G, GG"></label>' +
      '<fieldset><legend>Estoque por variação <button type="button" class="link" data-regrade>atualizar grade</button></legend><div class="tbl" id="egrade">' + gradeHtml() + '</div></fieldset>' +
      '</div><footer>' + (novo ? '' : '<button type="button" class="btn danger ghost" data-delprod>Excluir</button>') + '<span class="sp"></span><button type="button" class="btn ghost" data-fechar>Cancelar</button><button type="submit" class="btn">Salvar produto</button></footer></form>';
  }

  function editarCategoria(id) {
    var c = S.d.categorias.filter(function (x) { return String(x.id) === String(id); })[0] || { nome: '', chamada: '', desenho: 'camiseta', cor: '#8C2A5B', foto: '' };
    dlg.innerHTML = '<form class="sheet sm" id="fcat" data-id="' + esc(c.id || '') + '" novalidate><header><h2>' + (c.id ? 'Editar categoria' : 'Nova categoria') + '</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      '<label class="field"><span>Nome</span><input id="c_nome" maxlength="60" value="' + esc(c.nome) + '" required></label>' +
      '<label class="field"><span>Chamada (frase curta no card)</span><input id="c_chamada" maxlength="80" value="' + esc(c.chamada) + '" placeholder="Ex.: Para todas as ocasiões"></label>' +
      '<div class="g2"><label class="field"><span>Desenho</span><select id="c_desenho">' + DESENHOS.map(function (x) { return '<option' + (c.desenho === x ? ' selected' : '') + '>' + x + '</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span>Cor do desenho</span><input id="c_cor" type="color" value="' + esc(cor(c.cor, '#8C2A5B')) + '"></label></div>' +
      '<label class="field"><span>Foto (opcional, link https)</span><input id="c_foto" type="url" value="' + esc(c.foto) + '"></label></div>' +
      '<footer>' + (c.id ? '<button type="button" class="btn danger ghost" data-delcat="' + c.id + '">Excluir</button>' : '') + '<span class="sp"></span><button type="button" class="btn ghost" data-fechar>Cancelar</button><button type="submit" class="btn">Salvar</button></footer></form>';
    dlg.showModal();
  }

  /* ---------- pedidos ---------- */
  function pedidoCard(p) {
    var prox = { novo: [['confirmado', 'Confirmar pedido'], ['cancelado', 'Cancelar']], confirmado: [['enviado', 'Marcar como enviado'], ['cancelado', 'Cancelar']], enviado: [['entregue', 'Marcar como entregue']], entregue: [], cancelado: [['novo', 'Reabrir']] }[p.status] || [];
    return '<article class="ped"><header><b>#' + p.numero + '</b>' + stPill(p.status) + '<span class="when">' + dataBr(p.criado, 1) + '</span><b class="num tot">' + brl(p.total) + '</b></header>' +
      '<p><b>' + esc(p.nome) + '</b> · ' + esc(p.entrega || '—') + ' · ' + esc(p.pagamento || '—') + (p.contato && p.contato.cep ? ' · CEP ' + esc(p.contato.cep) : '') + (p.contato && p.contato.endereco ? ' · ' + esc(p.contato.endereco) : '') + '</p>' +
      '<ul>' + p.itens.map(function (it) { return '<li>' + it.qtd + 'x ' + esc(it.nome) + (it.cor || it.tam ? ' <small>' + esc([it.cor, it.tam].filter(Boolean).join(' · ')) + '</small>' : '') + '<span class="num">' + brl(it.preco * it.qtd) + '</span></li>'; }).join('') + '</ul>' +
      (p.cupom ? '<p class="note">Cupom ' + esc(p.cupom) + ': − ' + brl(p.cupom_desconto) + (p.frete_gratis ? ' · frete grátis' : '') + '</p>' : '') +
      (+p.desconto ? '<p class="note">Desconto Pix: − ' + brl(p.desconto) + '</p>' : '') +
      '<footer><small class="mono">Código ' + esc(p.codigo) + (p.origem ? ' · veio do ' + esc(ORIGENS[p.origem] || p.origem) : '') + '</small><span class="sp"></span>' +
      (VENDIDO.indexOf(p.status) > -1 ? '<button type="button" class="btn ghost sm" data-troca="' + p.id + '">Troca ou devolução</button>' : '') + prox.map(function (x) { return '<button type="button" class="btn sm' + (x[0] === 'cancelado' ? ' ghost danger' : x[0] === 'novo' ? ' ghost' : '') + '" data-st="' + x[0] + '" data-ped="' + p.id + '">' + x[1] + '</button>'; }).join('') + '</footer></article>';
  }
  function pedidos() {
    var d = S.d, c = {}; d.pedidos.forEach(function (p) { c[p.status] = (c[p.status] || 0) + 1; });
    var lista = d.pedidos.filter(function (p) { return S.pst === 'todos' || p.status === S.pst; });
    return '<h1>Pedidos</h1><p class="sub">Os pedidos chegam pelo WhatsApp e ficam registrados aqui. Ao confirmar, o estoque é baixado; ao cancelar, ele volta.</p>' +
      '<div class="chips">' + [['novo', 'Novos'], ['confirmado', 'Confirmados'], ['enviado', 'Enviados'], ['entregue', 'Entregues'], ['cancelado', 'Cancelados'], ['todos', 'Todos']].map(function (x) {
        return '<button type="button" class="chip" data-pst="' + x[0] + '" aria-pressed="' + (S.pst === x[0]) + '">' + x[1] + ' <span class="num">' + (x[0] === 'todos' ? d.pedidos.length : c[x[0]] || 0) + '</span></button>'; }).join('') + '</div>' +
      (lista.length ? lista.map(pedidoCard).join('') : '<p class="empty">Nenhum pedido aqui.</p>');
  }

  /* ---------- relatórios: períodos ---------- */
  function noPeriodo(arr, dias, desloc, campo) {
    var fim = Date.now() - (desloc || 0) * 864e5, ini = fim - dias * 864e5;
    return arr.filter(function (x) { var t = new Date(x[campo || 'criado']).getTime(); return t >= ini && t < fim; });
  }
  function vendidos(arr) { return arr.filter(function (p) { return VENDIDO.indexOf(p.status) > -1; }); }
  function ordena(o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }).sort(function (a, b) { return b[1] - a[1]; }); }
  function soma2(o, k, v) { o[k] = (o[k] || 0) + v; }
  function varia(a, b) { if (!b) return a ? '<span class="up">novo</span>' : ''; var p = (a / b - 1) * 100; return '<span class="' + (p >= 0 ? 'up' : 'down') + '">' + (p >= 0 ? '▲ ' : '▼ ') + Math.abs(p).toFixed(0) + '% vs. período anterior</span>'; }
  function pct(a, b) { return b ? (a / b * 100).toFixed(1).replace('.', ',') + '%' : '—'; }
  function periodos() { return '<div class="chips">' + [7, 30, 90].map(function (n) { return '<button type="button" class="chip" data-per="' + n + '" aria-pressed="' + (S.periodo === n) + '">' + n + ' dias</button>'; }).join('') + '</div>'; }
  function tabela(cab, linhas, vazio) {
    return linhas.length ? '<div class="tbl"><table><thead><tr>' + cab.map(function (c) { return '<th' + (/^[#R$]|peças|qtd|%|un\.|vist|vend|sacola|estoque|cobertura|pedidos|total|usos|desconto/i.test(c) ? ' class="r"' : '') + '>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      linhas.map(function (l) { return '<tr>' + l.map(function (c, i) { return '<td' + (i && /^[−\d.,R$% —]+$|^R\$/.test(String(c)) ? ' class="r num"' : '') + '>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' : '<p class="empty">' + esc(vazio || 'Sem dados no período.') + '</p>';
  }
  var ORIGENS = { instagram: 'Instagram', whatsapp: 'WhatsApp', google: 'Google', facebook: 'Facebook', tiktok: 'TikTok', direto: 'Link direto', outro: 'Outros sites', '': 'Sem origem' };
  var MOTIVOS = { tamanho: 'Tamanho', defeito: 'Defeito', cor: 'Cor', arrependimento: 'Arrependimento', outro: 'Outro' };

  /* ---------- analytics ---------- */
  function analytics() {
    var dias = S.periodo, evs = noPeriodo(S.d.eventos, dias, 0, 'dia'), peds = noPeriodo(S.d.pedidos, dias).filter(function (p) { return p.status !== 'cancelado'; });
    var t = { visita: 0, produto: 0, sacola: 0, busca: 0, grupo: 0, avise: 0, cupom: 0 }, porOrig = {}, porDisp = {}, vistos = {}, sacola = {}, buscas = {}, pedOrig = {};
    evs.forEach(function (e) {
      t[e.tipo] = (t[e.tipo] || 0) + e.n;
      if (e.tipo === 'visita') { soma2(porOrig, e.origem, e.n); soma2(porDisp, e.alvo || 'computador', e.n); }
      if (e.tipo === 'produto') soma2(vistos, e.alvo, e.n);
      if (e.tipo === 'sacola') soma2(sacola, e.alvo, e.n);
      if (e.tipo === 'busca') soma2(buscas, e.alvo, e.n);
    });
    if (!t.visita) t.visita = soma(visitas(dias), 'n');
    peds.forEach(function (p) { soma2(pedOrig, p.origem || '', 1); });
    var vend = {}; vendidos(peds).forEach(function (p) { p.itens.forEach(function (it) { soma2(vend, String(it.id), it.qtd); }); });
    var nome = {}; S.d.produtos.forEach(function (p) { nome[p.id] = p.nome; });
    var serie = serieDias(dias, function (dd) { return evs.filter(function (e) { return e.tipo === 'visita' && e.dia === dd; }).reduce(function (s, e) { return s + e.n; }, 0); });
    var funil = [['Visitas', t.visita], ['Viram um produto', Math.min(t.produto, t.visita || t.produto)], ['Colocaram na sacola', t.sacola], ['Enviaram o pedido', peds.length]];
    var prods = Object.keys(Object.assign({}, vistos, vend)).map(function (id) { return [nome[id] || 'Produto removido', vistos[id] || 0, sacola[id] || 0, vend[id] || 0, pct(vend[id] || 0, vistos[id] || 0)]; })
      .sort(function (a, b) { return b[1] - a[1]; }).slice(0, 15);
    return '<div class="head"><div><h1>Analytics</h1><p class="sub">Como os clientes chegam e o que fazem na loja.</p></div>' + periodos() + '</div>' +
      '<div class="kpis">' + kpi('Visitas', num(t.visita)) + kpi('Produtos vistos', num(t.produto)) + kpi('Adições à sacola', num(t.sacola)) + kpi('Pedidos enviados', num(peds.length), 'Conversão ' + pct(peds.length, t.visita)) + '</div>' +
      '<div class="cols"><div class="card"><h2>Visitas por dia</h2>' + barras(serie, function (v, ax) { return ax ? String(Math.round(v)) : v + (v === 1 ? ' visita' : ' visitas'); }) + '</div>' +
      '<div class="card"><h2>Funil de compra</h2>' + funil.map(function (f) { return '<div class="hbar"><span>' + f[0] + '</span><i><em style="width:' + (t.visita ? Math.min(100, f[1] / t.visita * 100) : 0) + '%"></em></i><b class="num">' + num(f[1]) + ' <small>' + pct(f[1], t.visita) + '</small></b></div>'; }).join('') + '</div></div>' +
      '<div class="cols"><div class="card"><h2>De onde vêm as visitas</h2>' + hbar(ordena(porOrig).map(function (x) { return [ORIGENS[x[0]] || x[0], x[1]]; }), num) + '</div>' +
      '<div class="card"><h2>Pedidos por origem</h2>' + hbar(ordena(pedOrig).map(function (x) { return [ORIGENS[x[0]] || x[0], x[1]]; }), function (v) { return v + (v === 1 ? ' pedido' : ' pedidos'); }) + '<h2 style="margin-top:16px">Aparelho</h2>' + hbar(ordena(porDisp).map(function (x) { return [x[0] === 'celular' ? 'Celular' : 'Computador', x[1]]; }), num) + '</div></div>' +
      '<div class="card"><h2>Produtos: vistos, sacola e vendidos</h2>' + tabela(['Produto', 'Vistos', 'Sacola', 'Vendidos', 'Conversão %'], prods) + '<p class="note">Muito visto e pouco vendido costuma ser preço, foto ou falta de tamanho.</p></div>' +
      '<div class="cols"><div class="card"><h2>O que procuram na busca</h2>' + hbar(ordena(buscas).slice(0, 10), function (v) { return v + 'x'; }) + '</div>' +
      '<div class="card"><h2>Outros cliques</h2>' + hbar([['Grupo de promoções', t.grupo], ['Avise-me (esgotados)', t.avise], ['Cupons aplicados', t.cupom]].filter(function (x) { return x[1]; }), num) + '</div></div>' +
      '<p class="note">Os números contam só quem aceitou os cookies (LGPD). Uma visita por dia e por aparelho.</p>';
  }

  /* ---------- relatórios ---------- */
  var SUBS = [['vendas', 'Vendas'], ['financeiro', 'Financeiro'], ['trocas', 'Trocas e devoluções'], ['estoque', 'Estoque'], ['clientes', 'Clientes']];
  function relatorios() {
    var sub = S.sub || 'vendas';
    return '<div class="head"><div><h1>Relatórios</h1><p class="sub">Vendas contam a partir da confirmação do pedido.</p></div>' + periodos() + '</div>' +
      '<div class="subtabs" role="tablist">' + SUBS.map(function (x) { return '<button type="button" role="tab" data-sub="' + x[0] + '" aria-selected="' + (sub === x[0]) + '">' + x[1] + '</button>'; }).join('') + '</div>' +
      ({ vendas: relVendas, financeiro: relFin, trocas: relTrocas, estoque: relEstoque, clientes: relClientes })[sub]() +
      '<div class="card row"><span>Exportar este relatório para planilha (Excel).</span><button type="button" class="btn ghost" data-csv="' + sub + '">Baixar CSV</button></div>';
  }
  function itensVendidos(dias, desloc) {
    var out = []; vendidos(noPeriodo(S.d.pedidos, dias, desloc)).forEach(function (p) { p.itens.forEach(function (it) { out.push({ p: p, it: it }); }); }); return out;
  }
  function relVendas() {
    var dias = S.periodo, vs = vendidos(noPeriodo(S.d.pedidos, dias)), ant = vendidos(noPeriodo(S.d.pedidos, dias, dias)), its = itensVendidos(dias);
    var fat = soma(vs, 'total'), fatA = soma(ant, 'total'), pecas = its.reduce(function (s, x) { return s + x.it.qtd; }, 0);
    var porProd = {}, porCat = {}, porCor = {}, porTam = {}, porOrig = {}, porEnt = {}, catNome = {};
    S.d.categorias.forEach(function (c) { catNome[c.chave] = c.nome; });
    var catDe = {}; S.d.produtos.forEach(function (p) { catDe[p.id] = p.categoria; });
    its.forEach(function (x) { var k = x.it.nome; porProd[k] = porProd[k] || [0, 0]; porProd[k][0] += x.it.qtd; porProd[k][1] += x.it.qtd * x.it.preco;
      soma2(porCat, catNome[x.it.cat || catDe[x.it.id]] || 'Sem categoria', x.it.qtd * x.it.preco); if (x.it.cor) soma2(porCor, x.it.cor, x.it.qtd); if (x.it.tam) soma2(porTam, x.it.tam, x.it.qtd); });
    vs.forEach(function (p) { soma2(porOrig, ORIGENS[p.origem || ''] || p.origem, +p.total); soma2(porEnt, p.entrega || '—', 1); });
    var serie = serieDias(dias, function (dd) { return soma(vs.filter(function (p) { return dia(p.criado) === dd; }), 'total'); });
    return '<div class="kpis">' + kpi('Faturamento', brl(fat), varia(fat, fatA)) + kpi('Pedidos', num(vs.length), varia(vs.length, ant.length)) + kpi('Peças vendidas', num(pecas)) + kpi('Ticket médio', brl(vs.length ? fat / vs.length : 0)) + '</div>' +
      '<div class="card"><h2>Faturamento por dia</h2>' + barras(serie, function (v, ax) { return ax ? (v >= 1000 ? (v / 1000).toLocaleString('pt-BR') + ' mil' : String(Math.round(v))) : brl(v); }) + '</div>' +
      '<div class="card"><h2>Por produto</h2>' + tabela(['Produto', 'Peças', 'R$ vendido'], Object.keys(porProd).map(function (k) { return [k, porProd[k][0], brl(porProd[k][1])]; }).sort(function (a, b) { return b[1] - a[1]; })) + '</div>' +
      '<div class="cols"><div class="card"><h2>Por categoria</h2>' + hbar(ordena(porCat), brl) + '</div><div class="card"><h2>Por origem da visita</h2>' + hbar(ordena(porOrig), brl) + '</div></div>' +
      '<div class="cols"><div class="card"><h2>Por cor (peças)</h2>' + hbar(ordena(porCor).slice(0, 12), num) + '</div><div class="card"><h2>Por tamanho (peças)</h2>' + hbar(ordena(porTam), num) + '</div></div>' +
      '<div class="card"><h2>Por forma de entrega</h2>' + hbar(ordena(porEnt), function (v) { return v + (v === 1 ? ' pedido' : ' pedidos'); }) + '</div>';
  }
  function relFin() {
    var dias = S.periodo, todos = noPeriodo(S.d.pedidos, dias), vs = vendidos(todos), ant = vendidos(noPeriodo(S.d.pedidos, dias, dias));
    var bruto = soma(vs, 'subtotal'), dCup = soma(vs, 'cupom_desconto'), dPix = soma(vs, 'desconto'), liq = soma(vs, 'total'), canc = todos.filter(function (p) { return p.status === 'cancelado'; });
    var devol = noPeriodo(S.d.trocas, dias).filter(function (t) { return t.tipo === 'devolucao'; }), vDev = soma(devol, 'valor');
    var porPag = {}, cups = {};
    vs.forEach(function (p) { soma2(porPag, p.pagamento || '—', +p.total); if (p.cupom) { cups[p.cupom] = cups[p.cupom] || [0, 0, 0]; cups[p.cupom][0]++; cups[p.cupom][1] += +p.cupom_desconto; cups[p.cupom][2] += +p.total; } });
    return '<div class="kpis">' + kpi('Vendas brutas', brl(bruto)) + kpi('Descontos de cupom', '− ' + brl(dCup)) + kpi('Descontos no Pix', '− ' + brl(dPix)) + kpi('Recebido', brl(liq), varia(liq, soma(ant, 'total'))) +
        kpi('Devoluções', '− ' + brl(vDev), devol.length + (devol.length === 1 ? ' devolução' : ' devoluções')) + kpi('Líquido após devoluções', brl(liq - vDev)) + kpi('Cancelados', brl(soma(canc, 'total')), canc.length + ' pedidos') + '</div>' +
      '<div class="cols"><div class="card"><h2>Recebido por forma de pagamento</h2>' + hbar(ordena(porPag), brl) + '</div>' +
      '<div class="card"><h2>Cupons usados</h2>' + tabela(['Cupom', 'Pedidos', 'Desconto', 'Vendas'], Object.keys(cups).map(function (k) { return [k, cups[k][0], brl(cups[k][1]), brl(cups[k][2])]; }), 'Nenhum cupom usado no período.') + '</div></div>' +
      '<p class="note">O frete é combinado no WhatsApp e não entra nesses valores. Taxas de cartão e Pix dependem da maquininha ou banco de cada loja.</p>';
  }
  function relTrocas() {
    var dias = S.periodo, ts = noPeriodo(S.d.trocas, dias), trocas = ts.filter(function (t) { return t.tipo === 'troca'; }), devs = ts.filter(function (t) { return t.tipo === 'devolucao'; });
    var pecas = ts.reduce(function (s, t) { return s + t.qtd; }, 0), vendPecas = itensVendidos(dias).reduce(function (s, x) { return s + x.it.qtd; }, 0);
    var porMot = {}, porProd = {}, fluxo = {};
    ts.forEach(function (t) { soma2(porMot, MOTIVOS[t.motivo] || t.motivo, t.qtd); soma2(porProd, t.produto_nome, t.qtd); if (t.tipo === 'troca' && t.de_tam !== t.para_tam) soma2(fluxo, (t.de_tam || '—') + ' → ' + (t.para_tam || '—'), t.qtd); });
    var maior = ordena(fluxo)[0], dica = '';
    if (maior) { var p = maior[0].split(' → '), ordem = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG']; var a = ordem.indexOf(p[0]), b = ordem.indexOf(p[1]);
      if (a > -1 && b > -1) dica = '<p class="note">A troca mais comum é de ' + esc(p[0]) + ' para ' + esc(p[1]) + ': ' + (b > a ? 'as peças podem estar vestindo pequeno. Vale avisar na descrição ou na tabela de medidas.' : 'as peças podem estar vestindo grande.') + '</p>'; }
    return '<div class="head2"><span></span><button type="button" class="btn" data-troca="">' + ic('plus') + 'Registrar troca ou devolução</button></div>' +
      '<div class="kpis">' + kpi('Trocas', num(trocas.length)) + kpi('Devoluções', num(devs.length), brl(soma(devs, 'valor')) + ' devolvidos') + kpi('Peças', num(pecas)) + kpi('Taxa de troca', pct(pecas, vendPecas), 'peças trocadas ÷ vendidas') + '</div>' +
      '<div class="cols"><div class="card"><h2>Por motivo</h2>' + hbar(ordena(porMot), function (v) { return v + ' un.'; }) + '</div><div class="card"><h2>Tamanho trocado</h2>' + hbar(ordena(fluxo), function (v) { return v + ' un.'; }) + dica + '</div></div>' +
      '<div class="card"><h2>Produtos mais trocados</h2>' + hbar(ordena(porProd).slice(0, 10), function (v) { return v + ' un.'; }) + '</div>' +
      '<div class="card"><h2>Registros</h2>' + tabela(['Data', 'Pedido', 'Produto', 'Tipo', 'De', 'Para', 'Qtd', 'Motivo', 'R$'], ts.map(function (t) {
        return [dataBr(t.criado), t.pedido_numero ? '#' + t.pedido_numero : '—', t.produto_nome, t.tipo === 'troca' ? 'Troca' : 'Devolução', [t.de_cor, t.de_tam].filter(Boolean).join(' · ') || '—',
          t.tipo === 'troca' ? [t.para_cor, t.para_tam].filter(Boolean).join(' · ') || '—' : '—', t.qtd, MOTIVOS[t.motivo] || t.motivo, t.valor ? brl(t.valor) : '—']; }), 'Nenhuma troca no período.') + '</div>';
  }
  function relEstoque() {
    var dias = S.periodo, its = itensVendidos(dias), vend = {};
    its.forEach(function (x) { soma2(vend, String(x.it.id), x.it.qtd); });
    var pecas = 0, valor = 0, zer = 0, acab = 0, linhas = [], parados = [];
    S.d.produtos.forEach(function (p) {
      var t = totalEst(p), v = vend[p.id] || 0; pecas += t; valor += t * p.preco;
      for (var k in p.estoque) { if (!p.estoque[k]) zer++; else if (p.estoque[k] <= 2) acab++; }
      linhas.push([p.nome, t, brl(t * p.preco), v, v ? Math.round(t / (v / dias)) + ' dias' : '—']);
      if (p.ativo && t > 0 && !v) parados.push([p.nome, t, brl(t * p.preco)]);
    });
    return '<div class="kpis">' + kpi('Peças em estoque', num(pecas)) + kpi('Valor em estoque', brl(valor), 'pelo preço de venda') + kpi('Variações zeradas', num(zer)) + kpi('Acabando (1 a 2)', num(acab)) + '</div>' +
      '<div class="card"><h2>Por produto</h2>' + tabela(['Produto', 'Estoque', 'R$ em estoque', 'Vendidos no período', 'Cobertura'], linhas.sort(function (a, b) { return b[3] - a[3]; })) +
      '<p class="note">Cobertura: quantos dias o estoque dura no ritmo de venda do período.</p></div>' +
      '<div class="card"><h2>Parados (sem venda no período)</h2>' + tabela(['Produto', 'Estoque', 'R$ em estoque'], parados, 'Nenhum produto parado.') + '<p class="note">Bons candidatos para cupom ou vitrine de ofertas.</p></div>';
  }
  function relClientes() {
    var dias = S.periodo, cad = noPeriodo(S.d.contatos, dias), vs = vendidos(S.d.pedidos), comp = {};
    vs.forEach(function (p) { var k = String(p.nome).trim().toLowerCase(); comp[k] = comp[k] || { nome: p.nome, n: 0, t: 0, ult: p.criado }; comp[k].n++; comp[k].t += +p.total; if (p.criado > comp[k].ult) comp[k].ult = p.criado; });
    var lista = Object.keys(comp).map(function (k) { return comp[k]; }), voltaram = lista.filter(function (c) { return c.n > 1; }).length;
    var noPer = Object.keys(comp).filter(function (k) { return new Date(comp[k].ult).getTime() >= Date.now() - dias * 864e5; }).length;
    var serie = serieDias(dias, function (dd) { return S.d.contatos.filter(function (c) { return dia(c.criado) === dd; }).length; });
    return '<div class="kpis">' + kpi('Cadastros no período', num(cad.length), num(S.d.contatos.length) + ' no total') + kpi('Compraram no período', num(noPer)) + kpi('Voltaram a comprar', num(voltaram), pct(voltaram, lista.length) + ' dos compradores') +
        kpi('Com WhatsApp', num(S.d.contatos.filter(function (c) { return c.whatsapp; }).length)) + '</div>' +
      '<div class="card"><h2>Cadastros por dia</h2>' + barras(serie, function (v, ax) { return ax ? String(Math.round(v)) : v + (v === 1 ? ' cadastro' : ' cadastros'); }) + '</div>' +
      '<div class="card"><h2>Quem mais compra</h2>' + tabela(['Cliente', 'Pedidos', 'R$ total', 'Última compra'], lista.sort(function (a, b) { return b.t - a.t; }).slice(0, 20).map(function (c) { return [c.nome, c.n, brl(c.t), dataBr(c.ult)]; }), 'Nenhuma venda confirmada ainda.') +
      '<p class="note">Clientes são agrupados pelo nome informado no pedido.</p></div>';
  }
  function csvRelatorio(sub) {
    var dias = S.periodo, n = sub + '-' + S.slug + '-' + dias + 'dias.csv';
    if (sub === 'vendas') return csv(n, [['Data', 'Pedido', 'Produto', 'Código', 'Cor', 'Tamanho', 'Qtd', 'Preço', 'Total', 'Origem']].concat(itensVendidos(dias).map(function (x) {
      return [dataBr(x.p.criado, 1), x.p.numero, x.it.nome, x.it.sku, x.it.cor, x.it.tam, x.it.qtd, x.it.preco, (x.it.qtd * x.it.preco).toFixed(2), ORIGENS[x.p.origem || '']]; })));
    if (sub === 'financeiro' || sub === 'pedidos') return csv(n, [['Número', 'Data', 'Status', 'Cliente', 'Entrega', 'Pagamento', 'Subtotal', 'Cupom', 'Desconto cupom', 'Desconto Pix', 'Total', 'Código']].concat(noPeriodo(S.d.pedidos, dias).map(function (p) {
      return [p.numero, dataBr(p.criado, 1), p.status, p.nome, p.entrega, p.pagamento, p.subtotal, p.cupom, p.cupom_desconto, p.desconto, p.total, p.codigo]; })));
    if (sub === 'trocas') return csv(n, [['Data', 'Pedido', 'Produto', 'Tipo', 'De cor', 'De tamanho', 'Para cor', 'Para tamanho', 'Qtd', 'Motivo', 'Valor devolvido', 'Observação']].concat(noPeriodo(S.d.trocas, dias).map(function (t) {
      return [dataBr(t.criado), t.pedido_numero || '', t.produto_nome, t.tipo, t.de_cor, t.de_tam, t.para_cor, t.para_tam, t.qtd, MOTIVOS[t.motivo], t.valor, t.obs]; })));
    if (sub === 'estoque') { var l = [['Produto', 'Código', 'Cor', 'Tamanho', 'Estoque', 'Preço']]; S.d.produtos.forEach(function (p) { for (var k in p.estoque) { var c = k.split('|'); l.push([p.nome, p.sku, c[0], c[1], p.estoque[k], p.preco]); } }); return csv(n, l); }
    return csv('clientes-' + S.slug + '.csv', [['Nome', 'WhatsApp', 'E-mail', 'Cadastro']].concat(S.d.contatos.map(function (c) { return [c.nome, c.whatsapp, c.email, dataBr(c.criado)]; })));
  }

  /* ---------- cupons ---------- */
  function cupomStatus(c) {
    var hoje = dia(Date.now());
    if (!c.ativo) return ['Pausado', ''];
    if (c.fim && c.fim < hoje) return ['Expirado', 'bad'];
    if (c.inicio && c.inicio > hoje) return ['Agendado', 'warn'];
    if (c.limite && c.usos >= c.limite) return ['Esgotado', 'bad'];
    return ['Ativo', 'ok'];
  }
  function cupomTexto(c) { return c.tipo === 'pct' ? (+c.valor) + '% de desconto' : c.tipo === 'valor' ? brl(c.valor) + ' de desconto' : 'Frete grátis'; }
  function cupons() {
    var ped = {}; S.d.pedidos.forEach(function (p) { if (p.cupom && p.status !== 'cancelado') { ped[p.cupom] = ped[p.cupom] || [0, 0]; ped[p.cupom][0] += +p.cupom_desconto; ped[p.cupom][1] += +p.total; } });
    return '<div class="head"><div><h1>Cupons de desconto</h1><p class="sub">O cliente digita o cupom na sacola. O desconto é conferido no servidor e vem antes do desconto do Pix.</p></div><button type="button" class="btn" data-novo-cupom>' + ic('plus') + 'Novo cupom</button></div>' +
      (S.d.cupons.length ? S.d.cupons.map(function (c) {
        var st = cupomStatus(c), u = ped[c.codigo] || [0, 0];
        return '<article class="card cup"><header><b class="mono big">' + esc(c.codigo) + '</b><span class="pill ' + st[1] + '">' + st[0] + '</span><span class="sp"></span><b>' + esc(cupomTexto(c)) + '</b></header>' +
          '<p class="note">' + [c.minimo > 0 ? 'Compras a partir de ' + brl(c.minimo) : 'Sem valor mínimo', c.inicio || c.fim ? 'Vale ' + (c.inicio ? 'de ' + c.inicio.split('-').reverse().join('/') : '') + (c.fim ? ' até ' + c.fim.split('-').reverse().join('/') : '') : 'Sem data de validade',
            c.limite ? c.usos + ' de ' + c.limite + ' usos' : c.usos + (c.usos === 1 ? ' uso' : ' usos'), c.descricao].filter(Boolean).map(esc).join(' · ') + '</p>' +
          '<p class="note">Desconto concedido: <b>' + brl(u[0]) + '</b> · Vendas com o cupom: <b>' + brl(u[1]) + '</b></p>' +
          '<footer><label class="sw"><input type="checkbox" data-cupom-ativo="' + c.id + '"' + (c.ativo ? ' checked' : '') + '><span>' + (c.ativo ? 'Ligado' : 'Desligado') + '</span></label><span class="sp"></span>' +
          '<button type="button" class="btn ghost sm" data-copiar-cupom="' + c.id + '">Copiar divulgação</button><button type="button" class="btn ghost sm" data-edit-cupom="' + c.id + '">Editar</button><button type="button" class="btn ghost sm danger" data-del-cupom="' + c.id + '">Excluir</button></footer></article>';
      }).join('') : '<div class="card"><p class="empty">Nenhum cupom ainda. Crie um para a primeira compra, para o grupo de promoções ou para liquidar peças paradas.</p></div>');
  }
  function editarCupom(id) {
    var c = S.d.cupons.filter(function (x) { return String(x.id) === String(id); })[0] || { codigo: '', tipo: 'pct', valor: 10, minimo: 0, inicio: '', fim: '', limite: '', ativo: true, descricao: '' };
    dlg.innerHTML = '<form class="sheet sm" id="fcupom" data-id="' + esc(c.id || '') + '" novalidate><header><h2>' + (c.id ? 'Editar cupom' : 'Novo cupom') + '</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      '<label class="field"><span>Código que o cliente digita</span><input id="u_cod" maxlength="20" value="' + esc(c.codigo) + '" placeholder="Ex.: BEMVINDA10" required style="text-transform:uppercase"></label>' +
      '<div class="g2"><label class="field"><span>Tipo</span><select id="u_tipo"><option value="pct"' + (c.tipo === 'pct' ? ' selected' : '') + '>Porcentagem (%)</option><option value="valor"' + (c.tipo === 'valor' ? ' selected' : '') + '>Valor fixo (R$)</option><option value="frete"' + (c.tipo === 'frete' ? ' selected' : '') + '>Frete grátis</option></select></label>' +
      '<label class="field"><span>Desconto</span><input id="u_val" type="number" min="0" step="0.01" inputmode="decimal" value="' + esc(c.valor) + '"></label></div>' +
      '<div class="g2"><label class="field"><span>Compra mínima (R$)</span><input id="u_min" type="number" min="0" step="0.01" inputmode="decimal" value="' + esc(+c.minimo || '') + '" placeholder="0 = sem mínimo"></label>' +
      '<label class="field"><span>Limite de usos</span><input id="u_lim" type="number" min="1" inputmode="numeric" value="' + esc(c.limite || '') + '" placeholder="Vazio = sem limite"></label></div>' +
      '<div class="g2"><label class="field"><span>Começa em</span><input id="u_ini" type="date" value="' + esc(c.inicio || '') + '"></label><label class="field"><span>Termina em</span><input id="u_fim" type="date" value="' + esc(c.fim || '') + '"></label></div>' +
      '<label class="field"><span>Observação interna</span><input id="u_desc" maxlength="120" value="' + esc(c.descricao) + '" placeholder="Ex.: campanha do grupo de promoções"></label>' +
      chk('u_on', 'Cupom ligado', c.ativo) + '</div>' +
      '<footer><span class="sp"></span><button type="button" class="btn ghost" data-fechar>Cancelar</button><button type="submit" class="btn">Salvar cupom</button></footer></form>';
    dlg.showModal();
  }

  /* ---------- trocas e devoluções ---------- */
  var tr = null;
  function abrirTroca(pedId) {
    var ped = S.d.pedidos.filter(function (p) { return String(p.id) === String(pedId); })[0] || null;
    var it = ped ? ped.itens[0] : null, p = it ? prod(it.id) : S.d.produtos[0];
    if (!p) return toast('Cadastre um produto antes.');
    tr = { ped: ped, item: 0, pid: p.id, de_cor: it ? it.cor : (p.cores[0] || [''])[0], de_tam: it ? it.tam : p.tamanhos[0] || '', para_cor: '', para_tam: '', qtd: 1, tipo: 'troca', motivo: 'tamanho', valor: '', obs: '' };
    tr.para_cor = tr.de_cor; tr.para_tam = tr.de_tam;
    drawTroca(); dlg.showModal();
  }
  function prod(id) { return S.d.produtos.filter(function (x) { return String(x.id) === String(id); })[0]; }
  function opts(lista, sel) { return (lista.length ? lista : ['']).map(function (v) { return '<option value="' + esc(v) + '"' + (v === sel ? ' selected' : '') + '>' + esc(v || 'Única') + '</option>'; }).join(''); }
  function drawTroca() {
    var p = prod(tr.pid), cores = p.cores.map(function (c) { return c[0]; }), tams = p.tamanhos, ped = tr.ped;
    var estPara = +(p.estoque[tr.para_cor + '|' + tr.para_tam] || 0);
    dlg.innerHTML = '<form class="sheet sm" id="ftroca" novalidate><header><h2>Troca ou devolução' + (ped ? ' · #' + ped.numero : '') + '</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      '<div class="seg2" role="group"><button type="button" data-ttipo="troca" aria-pressed="' + (tr.tipo === 'troca') + '">Troca</button><button type="button" data-ttipo="devolucao" aria-pressed="' + (tr.tipo === 'devolucao') + '">Devolução</button></div>' +
      (ped ? '<label class="field"><span>Peça do pedido</span><select id="t_item">' + ped.itens.map(function (it, i) { return '<option value="' + i + '"' + (i === tr.item ? ' selected' : '') + '>' + esc(it.qtd + 'x ' + it.nome + ' ' + [it.cor, it.tam].filter(Boolean).join(' · ')) + '</option>'; }).join('') + '</select></label>' :
        '<label class="field"><span>Produto</span><select id="t_prod">' + S.d.produtos.map(function (x) { return '<option value="' + x.id + '"' + (x.id === tr.pid ? ' selected' : '') + '>' + esc(x.nome) + '</option>'; }).join('') + '</select></label>') +
      '<h3>Peça que voltou</h3><div class="g3"><label class="field"><span>Cor</span><select id="t_dc">' + opts(cores, tr.de_cor) + '</select></label><label class="field"><span>Tamanho</span><select id="t_dt">' + opts(tams, tr.de_tam) + '</select></label>' +
      '<label class="field"><span>Quantidade</span><input id="t_q" type="number" min="1" max="99" value="' + tr.qtd + '"></label></div>' +
      (tr.tipo === 'troca' ? '<h3>Peça que o cliente levou</h3><div class="g2"><label class="field"><span>Cor</span><select id="t_pc">' + opts(cores, tr.para_cor) + '</select></label><label class="field"><span>Tamanho</span><select id="t_pt">' + opts(tams, tr.para_tam) + '</select></label></div>' +
        '<p class="note">Em estoque nessa opção: <b>' + estPara + '</b>. A peça que voltou entra no estoque e a nova sai.</p>' :
        '<label class="field"><span>Valor devolvido ao cliente (R$)</span><input id="t_v" type="number" min="0" step="0.01" value="' + esc(tr.valor !== '' ? tr.valor : (ped ? (ped.itens[tr.item].preco * tr.qtd).toFixed(2) : p.preco)) + '"></label><p class="note">A peça volta para o estoque.</p>') +
      '<label class="field"><span>Motivo</span><select id="t_mot">' + Object.keys(MOTIVOS).map(function (k) { return '<option value="' + k + '"' + (tr.motivo === k ? ' selected' : '') + '>' + MOTIVOS[k] + '</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span>Observação</span><input id="t_obs" maxlength="200" value="' + esc(tr.obs) + '" placeholder="Ex.: ficou apertada no quadril"></label></div>' +
      '<footer><span class="sp"></span><button type="button" class="btn ghost" data-fechar>Cancelar</button><button type="submit" class="btn">Registrar</button></footer></form>';
  }
  function lerTroca() {
    if (!tr) return;
    if (document.getElementById('t_item')) { var i = +val('t_item'); if (i !== tr.item) { tr.item = i; var it = tr.ped.itens[i]; tr.pid = it.id; tr.de_cor = tr.para_cor = it.cor; tr.de_tam = tr.para_tam = it.tam; tr.valor = ''; return; } }
    if (document.getElementById('t_prod')) { var pid = +val('t_prod'); if (pid !== tr.pid) { var p = prod(pid); tr.pid = pid; tr.de_cor = tr.para_cor = (p.cores[0] || [''])[0]; tr.de_tam = tr.para_tam = p.tamanhos[0] || ''; tr.valor = ''; return; } }
    tr.de_cor = val('t_dc'); tr.de_tam = val('t_dt'); tr.qtd = Math.max(1, Math.min(99, parseInt(val('t_q'), 10) || 1));
    if (document.getElementById('t_pc')) { tr.para_cor = val('t_pc'); tr.para_tam = val('t_pt'); }
    if (document.getElementById('t_v')) tr.valor = val('t_v');
    tr.motivo = val('t_mot'); tr.obs = val('t_obs');
  }

  function csv(nome, linhas) {
    var txt = '﻿' + linhas.map(function (l) { return l.map(function (c) { c = String(c == null ? '' : c); if (/^[=+\-@]/.test(c)) c = "'" + c; return '"' + c.replace(/"/g, '""') + '"'; }).join(';'); }).join('\r\n');
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([txt], { type: 'text/csv;charset=utf-8' })); a.download = nome; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  /* ---------- clientes ---------- */
  function clientes() {
    var q = S.cq.toLowerCase(), cs = S.d.contatos.filter(function (c) { return !q || (c.nome + ' ' + c.email + ' ' + c.whatsapp).toLowerCase().indexOf(q) > -1; });
    var grupo = ((S.d.loja.novidades || {}).grupoWhatsapp) || '';
    return '<div class="head"><div><h1>Clientes</h1><p class="sub">Quem se cadastrou em “Receba as novidades”. Use para e-mail marketing e listas de transmissão.</p></div><button type="button" class="btn ghost" data-csv="contatos">Baixar CSV</button></div>' +
      '<div class="card row"><span>Grupo de promoções no WhatsApp: ' + (grupo ? '<b>ativo</b>' : '<b>sem link</b>') + '</span><button type="button" class="btn ghost sm" data-tab="loja">' + (grupo ? 'Trocar link' : 'Colocar link') + '</button></div>' +
      '<div class="card"><div class="tools"><input id="cq" type="search" placeholder="Buscar por nome, e-mail ou WhatsApp" value="' + esc(S.cq) + '" aria-label="Buscar clientes"><span class="note">' + cs.length + ' contatos</span></div>' +
      (cs.length ? '<div class="tbl"><table><thead><tr><th>Nome</th><th>WhatsApp</th><th>E-mail</th><th>Cadastro</th><th></th></tr></thead><tbody>' + cs.map(function (c) {
        return '<tr><td>' + esc(c.nome) + '</td><td>' + (c.whatsapp ? '<a href="https://wa.me/' + esc(c.whatsapp.length <= 11 ? '55' + c.whatsapp : c.whatsapp) + '" target="_blank" rel="noopener" class="num">' + esc(c.whatsapp) + '</a>' : '—') + '</td><td>' + esc(c.email || '—') + '</td><td>' + dataBr(c.criado) + '</td>' +
          '<td class="r"><button type="button" class="btn ghost sm danger" data-delcont="' + c.id + '">Excluir</button></td></tr>'; }).join('') + '</tbody></table></div>' : '<p class="empty">Nenhum cadastro ainda.</p>') + '</div>';
  }

  /* ---------- avaliações ---------- */
  function avaliacoes() {
    var nomes = {}; S.d.produtos.forEach(function (p) { nomes[p.id] = p.nome; });
    return '<div class="head"><div><h1>Avaliações</h1><p class="sub">Escolha o que aparece na loja. Avaliações sem produto aparecem na seção “Avaliações de clientes”.</p></div><button type="button" class="btn" data-nova-av>' + ic('plus') + 'Nova avaliação</button></div>' +
      (S.d.avaliacoes.length ? S.d.avaliacoes.map(function (a) {
        return '<article class="card av"><header><b>' + esc(a.nome) + '</b><small>' + esc(a.cidade) + '</small><span class="stars">' + '★★★★★'.slice(0, a.nota) + '<i>' + '★★★★★'.slice(a.nota) + '</i></span></header><p>' + esc(a.texto) + '</p>' +
          '<footer><small>' + esc(a.produto_id ? 'Produto: ' + (nomes[a.produto_id] || '—') : 'Avaliação da loja') + (a.origem ? ' · ' + esc(a.origem) : '') + '</small><span class="sp"></span>' +
          '<label class="sw"><input type="checkbox" data-avvis="' + a.id + '"' + (a.visivel ? ' checked' : '') + '><span>' + (a.visivel ? 'Na loja' : 'Oculta') + '</span></label>' +
          '<button type="button" class="btn ghost sm" data-edit-av="' + a.id + '">Editar</button><button type="button" class="btn ghost sm danger" data-delav="' + a.id + '">Excluir</button></footer></article>';
      }).join('') : '<p class="empty">Nenhuma avaliação ainda.</p>');
  }
  function editarAvaliacao(id) {
    var a = S.d.avaliacoes.filter(function (x) { return String(x.id) === String(id); })[0] || { nome: '', cidade: '', nota: 5, texto: '', origem: 'whatsapp', variacao: '', quando: '', visivel: true, verificada: true, produto_id: null };
    dlg.innerHTML = '<form class="sheet sm" id="fav" data-id="' + esc(a.id || '') + '" novalidate><header><h2>' + (a.id ? 'Editar avaliação' : 'Nova avaliação') + '</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      '<div class="g2"><label class="field"><span>Nome</span><input id="a_nome" maxlength="60" value="' + esc(a.nome) + '" placeholder="Ex.: Camila R." required></label><label class="field"><span>Cidade</span><input id="a_cidade" maxlength="60" value="' + esc(a.cidade) + '" placeholder="Goiânia, GO"></label></div>' +
      '<div class="g3"><label class="field"><span>Nota</span><select id="a_nota">' + [5, 4, 3, 2, 1].map(function (n) { return '<option value="' + n + '"' + (a.nota === n ? ' selected' : '') + '>' + n + ' estrelas</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span>Onde avaliou</span><select id="a_origem">' + [['whatsapp', 'WhatsApp'], ['instagram', 'Instagram'], ['google', 'Google'], ['loja', 'Na loja'], ['', 'Não mostrar']].map(function (o) { return '<option value="' + o[0] + '"' + (a.origem === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span>Quando</span><input id="a_quando" maxlength="30" value="' + esc(a.quando) + '" placeholder="há 2 semanas"></label></div>' +
      '<label class="field"><span>Produto</span><select id="a_prod"><option value="">Avaliação da loja</option>' + S.d.produtos.map(function (p) { return '<option value="' + p.id + '"' + (String(a.produto_id) === String(p.id) ? ' selected' : '') + '>' + esc(p.nome) + '</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span>Comentário</span><textarea id="a_texto" rows="3" maxlength="600" required>' + esc(a.texto) + '</textarea></label>' +
      '<label class="field"><span>Variação comprada (opcional)</span><input id="a_var" maxlength="60" value="' + esc(a.variacao) + '" placeholder="Preto · M"></label>' +
      '<div class="checks"><label class="check"><input type="checkbox" id="a_vis"' + (a.visivel ? ' checked' : '') + '> Mostrar na loja</label><label class="check"><input type="checkbox" id="a_ver"' + (a.verificada ? ' checked' : '') + '> Selo “Compra verificada”</label></div>' +
      '</div><footer><span class="sp"></span><button type="button" class="btn ghost" data-fechar>Cancelar</button><button type="submit" class="btn">Salvar</button></footer></form>';
    dlg.showModal();
  }

  /* ---------- aparência e configurações da loja ---------- */
  var PRESETS = [['#8C2A5B', '#D0567F', '#F6D365'], ['#1D4FD8', '#0EA5E9', '#FDE68A'], ['#14532D', '#16A34A', '#E8C45A'], ['#111111', '#D62828', '#F6D365'], ['#7A5C3E', '#B49575', '#F1E3C8'],
    ['#EA580C', '#5B3B8C', '#FFD166'], ['#0F766E', '#14B8A6', '#FDE68A'], ['#C2185B', '#7B1FA2', '#FFEB3B'], ['#1E1630', '#6B4FA0', '#F6D365'], ['#B0123A', '#E8467C', '#F7D6E0']];
  function coresHtml(c) {
    return '<div class="presets">' + PRESETS.map(function (p, i) { return '<button type="button" class="preset" data-preset="' + i + '" aria-label="Paleta ' + (i + 1) + '" style="background:linear-gradient(120deg,' + p[0] + ',' + p[1] + ')"><i style="background:' + p[2] + '"></i></button>'; }).join('') + '</div>' +
      '<div class="g3"><label class="field"><span>Cor principal</span><input type="color" id="k_p1" value="' + esc(cor(c.p1, '#8C2A5B')) + '"></label><label class="field"><span>Cor secundária</span><input type="color" id="k_p2" value="' + esc(cor(c.p2, '#D0567F')) + '"></label>' +
      '<label class="field"><span>Destaque (selos)</span><input type="color" id="k_p3" value="' + esc(cor(c.p3, '#F6D365')) + '"></label></div>' +
      '<div class="prev" id="kprev" style="background:linear-gradient(120deg,' + esc(cor(c.p1, '#8C2A5B')) + ',' + esc(cor(c.p2, '#D0567F')) + ')"><b>Prévia do banner</b><span style="background:' + esc(cor(c.p3, '#F6D365')) + '">SELO</span></div>';
  }
  function fld(id, rot, v, extra) { return '<label class="field"><span>' + rot + '</span><input id="' + id + '" value="' + esc(v == null ? '' : v) + '"' + (extra || '') + '></label>'; }
  function chk(id, rot, v) { return '<label class="check"><input type="checkbox" id="' + id + '"' + (v ? ' checked' : '') + '> ' + rot + '</label>'; }
  var DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  var ENTREGAS = [['correios', 'Envio pelos Correios', 'Frete combinado pelo CEP'], ['retirada', 'Retirar na loja', 'Sem custo'], ['motoboy', 'Motoboy na cidade', 'Combinado no WhatsApp']];
  var PAGS = ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Link de pagamento', 'Dinheiro', 'Boleto'];
  function loja() {
    var L = S.d.loja || {}, b = L.banner || {}, of = L.ofertas || {}, nv = L.novidades || {}, pc = L.parceiro || {}, lk = L.links || {}, H = L.horarios || {}, fx = (L.faixa || []).concat(['', '', '']), bs = (L.banners || []).concat([{}, {}, {}]).slice(0, 3);
    var ents = (L.entrega || []).map(function (e) { return e[0]; }), cats = S.d.categorias;
    var ofTit = ['Ofertas da semana', 'Promoção', 'Outlet', 'Queima de estoque', 'Liquidação', 'Black Friday'];
    return '<div class="head"><div><h1>Aparência e loja</h1><p class="sub">Tudo o que aparece para o cliente. As mudanças valem assim que você salvar.</p></div><a class="btn ghost" href="' + esc(lojaUrl()) + '" target="_blank" rel="noopener">' + ic('ext') + 'Ver loja</a></div>' +
      '<form id="floja" class="stack" novalidate>' +
      '<section class="card"><h2>Identidade</h2><div class="g2">' + fld('k_nome', 'Nome da loja', S.d.nome, ' maxlength="80" required') + fld('k_logo', 'Logo (link https da imagem)', L.logo, ' type="url"') + '</div>' +
        fld('k_slogan', 'Frase curta (slogan)', L.slogan, ' maxlength="140"') + '<label class="field"><span>Sobre a loja (rodapé)</span><textarea id="k_sobre" rows="2" maxlength="400">' + esc(L.sobre || '') + '</textarea></label></section>' +
      '<section class="card"><h2>Cores da loja</h2>' + coresHtml(L.cores || {}) + '<label class="field"><span>Tema</span><select id="k_tema">' + [['auto', 'Automático (segue o celular do cliente)'], ['claro', 'Sempre claro'], ['escuro', 'Sempre escuro']].map(function (t) { return '<option value="' + t[0] + '"' + ((L.tema || 'auto') === t[0] ? ' selected' : '') + '>' + t[1] + '</option>'; }).join('') + '</select></label></section>' +
      '<section class="card"><h2>Contato</h2><div class="g2">' + fld('k_zap', 'WhatsApp de pedidos (com DDD)', L.whatsapp ? String(L.whatsapp).replace(/^55/, '') : '', ' inputmode="tel" placeholder="62999999999" required') + fld('k_tel', 'Telefone exibido', L.telefone) +
        fld('k_fixo', 'Telefone fixo (opcional)', L.fixo) + fld('k_email', 'E-mail', L.email, ' type="email"') + fld('k_ig', 'Instagram (sem @)', L.instagram) + fld('k_cidade', 'Cidade', L.cidade) + '</div>' + fld('k_end', 'Endereço', L.endereco) + '</section>' +
      '<section class="card"><h2>Horário de atendimento</h2><div class="hrs">' + [1, 2, 3, 4, 5, 6, 0].map(function (d) { var h = (H[d] || [])[0]; return '<div><label class="check"><input type="checkbox" id="h_on' + d + '"' + (h ? ' checked' : '') + '> ' + DIAS[d] + '</label><input type="time" id="h_a' + d + '" value="' + esc(h ? h[0] : '09:00') + '" aria-label="Abre ' + DIAS[d] + '"><input type="time" id="h_b' + d + '" value="' + esc(h ? h[1] : '18:00') + '" aria-label="Fecha ' + DIAS[d] + '"></div>'; }).join('') + '</div></section>' +
      '<section class="card"><h2>Faixa rotativa do topo</h2><p class="note">Até 3 frases curtas. Deixe todas vazias para esconder.</p>' + [0, 1, 2].map(function (i) { return '<input id="k_fx' + i + '" maxlength="70" value="' + esc(fx[i]) + '" aria-label="Frase ' + (i + 1) + '">'; }).join('') + '</section>' +
      '<section class="card"><h2>Banner inicial</h2><p class="note">Com arte em imagem (1920 × 700 px), ela substitui o banner montado. Até 3 artes, trocando a cada 6 segundos.</p>' +
        bs.map(function (x, i) { return '<div class="g3">' + fld('b_img' + i, 'Arte ' + (i + 1) + ' (computador)', x.imagem, ' type="url"') + fld('b_cel' + i, 'Versão celular (opcional)', x.imagemCelular, ' type="url"') +
          '<label class="field"><span>Ao clicar, abre</span><select id="b_lnk' + i + '"><option value="#todos">Todos os produtos</option><option value="#ofertas"' + (x.link === '#ofertas' ? ' selected' : '') + '>Ofertas</option>' + cats.map(function (c) { return '<option value="#c-' + esc(c.chave) + '"' + (x.link === '#c-' + c.chave ? ' selected' : '') + '>' + esc(c.nome) + '</option>'; }).join('') + '</select></label></div>'; }).join('') +
        '<h3>Banner montado (sem arte)</h3><div class="g2">' + fld('b_selo', 'Selo', b.selo, ' maxlength="30"') + fld('b_tit', 'Título', b.titulo, ' maxlength="60"') + '</div>' + fld('b_txt', 'Texto', b.texto, ' maxlength="140"') +
        '<div class="g2">' + fld('b_bot', 'Texto do botão', b.botao || 'Comprar agora', ' maxlength="30"') + '<label class="field"><span>Botão abre a categoria</span><select id="b_cat"><option value="">Todos os produtos</option>' + cats.map(function (c) { return '<option value="' + esc(c.chave) + '"' + (b.categoria === c.chave ? ' selected' : '') + '>' + esc(c.nome) + '</option>'; }).join('') + '</select></label></div></section>' +
      '<section class="card"><h2>Vitrines</h2><div class="g2">' + fld('k_ct1', 'Título das categorias', (L.categoriasTitulo || [])[0] || 'Compre por categoria', ' maxlength="50"') + fld('k_ct2', 'Subtítulo das categorias', (L.categoriasTitulo || [])[1], ' maxlength="80"') + '</div>' +
        '<h3>Ofertas</h3>' + chk('o_on', 'Mostrar a vitrine de ofertas', of.ativo !== false) + '<div class="g3"><label class="field"><span>Título</span><input id="o_tit" list="ofTit" maxlength="40" value="' + esc(of.titulo || 'Ofertas da semana') + '"><datalist id="ofTit">' + ofTit.map(function (t) { return '<option value="' + t + '">'; }).join('') + '</datalist></label>' +
        fld('o_selo', 'Selo', of.selo, ' maxlength="30"') + fld('o_txt', 'Texto', of.texto, ' maxlength="100"') + '</div>' +
        '<h3>Receba as novidades</h3>' + chk('n_on', 'Mostrar o cadastro de novidades', nv.ativo !== false) + '<div class="g2">' + fld('n_tit', 'Título', nv.titulo || 'Receba as últimas novidades', ' maxlength="60"') + fld('n_txt', 'Texto', nv.texto, ' maxlength="120"') + '</div>' +
        fld('n_grp', 'Link do grupo de promoções no WhatsApp', nv.grupoWhatsapp, ' type="url" placeholder="https://chat.whatsapp.com/…"') + chk('k_verif', 'Mostrar selo “Loja verificada” nas avaliações', L.lojaVerificada) + '</section>' +
      '<section class="card"><h2>Vendas</h2><div class="g3">' + fld('v_pix', 'Desconto no Pix (%)', L.descontoPix || 0, ' type="number" min="0" max="50"') + fld('v_parc', 'Parcelas sem juros mostradas', L.parcelas || 0, ' type="number" min="0" max="24"') + fld('v_frete', 'Frete grátis acima de (R$, 0 = não)', L.freteGratisAcima || 0, ' type="number" min="0"') + '</div>' +
        '<div class="g2">' + fld('v_rcor', 'Nome da variação 1', (L.rotulos || {}).cor || 'Cor', ' maxlength="20"') + fld('v_rtam', 'Nome da variação 2', (L.rotulos || {}).tamanho || 'Tamanho', ' maxlength="20"') + '</div>' +
        '<h3>Formas de entrega</h3><div class="checks">' + ENTREGAS.map(function (e) { return chk('e_' + e[0], e[1], ents.indexOf(e[0]) > -1); }).join('') + '</div>' +
        '<h3>Formas de pagamento</h3><div class="checks">' + PAGS.map(function (p, i) { return chk('pg' + i, p, (L.pagamentos || []).indexOf(p) > -1); }).join('') + '</div></section>' +
      '<section class="card"><h2>Privacidade (LGPD)</h2>' + chk('k_cook', 'Mostrar o aviso de cookies', L.cookies !== false) + '<div class="g2">' + fld('k_termos', 'Link dos termos de uso', lk.termos, ' type="url"') + fld('k_priv', 'Link da política de privacidade', lk.privacidade, ' type="url"') + '</div></section>' +
      '<section class="card"><h2>White label</h2><p class="note">Quem aparece em “Feito por” no rodapé da loja e no painel. Sem nome, fica Nour.</p><div class="g3">' + fld('w_nome', 'Nome do parceiro', pc.nome, ' maxlength="40"') + fld('w_logo', 'Logo do parceiro (link https)', pc.logo, ' type="url"') + fld('w_link', 'Site do parceiro', pc.link, ' type="url"') + '</div>' + fld('w_sup', 'WhatsApp de suporte do parceiro (aparece no painel do lojista)', pc.suporte, ' inputmode="tel"') + '</section>' +
      '<div class="savebar"><span class="note" id="dirty"></span><button type="submit" class="btn">Salvar alterações</button></div></form>';
  }
  function lerLoja() {
    var L = JSON.parse(JSON.stringify(S.d.loja || {}));
    var zap = val('k_zap').replace(/\D/g, '');
    if (zap && zap.length >= 10 && zap.length <= 11) zap = '55' + zap;
    var H = {}; [0, 1, 2, 3, 4, 5, 6].forEach(function (d) { H[d] = val('h_on' + d) ? [[val('h_a' + d) || '09:00', val('h_b' + d) || '18:00']] : []; });
    var bs = [0, 1, 2].map(function (i) { return { imagem: url(val('b_img' + i)), imagemCelular: url(val('b_cel' + i)), link: val('b_lnk' + i), alt: '' }; }).filter(function (x) { return x.imagem; });
    Object.assign(L, {
      nome: val('k_nome'), logo: url(val('k_logo')), slogan: val('k_slogan'), sobre: val('k_sobre'), tema: val('k_tema'),
      cores: { p1: val('k_p1'), p2: val('k_p2'), p3: val('k_p3'), on3: contraste(val('k_p3')) },
      whatsapp: zap, telefone: val('k_tel'), fixo: val('k_fixo'), email: val('k_email'), instagram: val('k_ig').replace(/^@/, ''), cidade: val('k_cidade'), endereco: val('k_end'),
      horarios: H, faixa: [0, 1, 2].map(function (i) { return val('k_fx' + i); }).filter(Boolean), banners: bs,
      banner: { selo: val('b_selo'), titulo: val('b_tit'), texto: val('b_txt'), botao: val('b_bot'), categoria: val('b_cat'), imagem: (L.banner || {}).imagem || '' },
      categoriasTitulo: [val('k_ct1'), val('k_ct2')],
      ofertas: { ativo: val('o_on'), titulo: val('o_tit'), selo: val('o_selo'), texto: val('o_txt') },
      novidades: { ativo: val('n_on'), titulo: val('n_tit'), texto: val('n_txt'), grupoWhatsapp: url(val('n_grp')), cadastro: '' },
      lojaVerificada: val('k_verif'),
      descontoPix: Math.min(50, Math.max(0, +val('v_pix') || 0)), parcelas: Math.min(24, Math.max(0, parseInt(val('v_parc'), 10) || 0)), freteGratisAcima: Math.max(0, +val('v_frete') || 0),
      rotulos: { cor: val('v_rcor') || 'Cor', tamanho: val('v_rtam') || 'Tamanho' },
      entrega: ENTREGAS.filter(function (e) { return val('e_' + e[0]); }),
      pagamentos: PAGS.filter(function (p, i) { return val('pg' + i); }),
      cookies: val('k_cook'), links: { termos: url(val('k_termos')), privacidade: url(val('k_priv')) },
      parceiro: { nome: val('w_nome'), logo: url(val('w_logo')), link: url(val('w_link')), suporte: val('w_sup').replace(/\D/g, '') }
    });
    return L;
  }
  // Texto escuro ou claro sobre a cor de destaque, pela luminância.
  function contraste(hex) {
    var h = cor(hex, '#F6D365').slice(1), l = [0, 2, 4].map(function (i) { var v = parseInt(h.substr(i, 2), 16) / 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); });
    return .2126 * l[0] + .7152 * l[1] + .0722 * l[2] > .4 ? '#2A1F00' : '#FFFFFF';
  }

  /* ---------- acesso ---------- */
  function acesso() {
    var painel = new URL('./?loja=' + encodeURIComponent(S.slug), location.href).href;
    return '<h1>Acesso</h1><p class="sub">Links para divulgar e o código que protege este painel.</p>' +
      '<div class="card"><h2>Link da loja</h2><div class="copy"><input readonly id="lnkLoja" value="' + esc(lojaUrl()) + '" aria-label="Link da loja"><button type="button" class="btn ghost" data-copy="lnkLoja">Copiar</button></div><p class="note">Coloque este link no Bio Site, no Instagram e no WhatsApp.</p></div>' +
      '<div class="card"><h2>Link do painel</h2><div class="copy"><input readonly id="lnkPainel" value="' + esc(painel) + '" aria-label="Link do painel"><button type="button" class="btn ghost" data-copy="lnkPainel">Copiar</button></div><p class="note">O link não abre o painel sozinho: pede o código de acesso.</p></div>' +
      '<div class="card"><h2>Código de acesso</h2><p>Troque o código se alguém que não deveria tiver acesso. Quem estiver com o código antigo perde o acesso na hora.</p><div id="novoCod"></div><button type="button" class="btn danger ghost" data-trocar>Gerar novo código</button></div>' +
      '<div class="card"><h2>Configuração inicial</h2><p>Refaça o passo a passo para trocar o modelo ou as cores.</p><button type="button" class="btn ghost" data-refazer>Refazer configuração</button></div>';
  }

  /* ---------- configuração inicial (igual à Agenda) ---------- */
  var ob = {};
  function onboarding(passo) {
    var L = S.d.loja || {};
    if (passo === 1) ob = { nome: S.d.nome || '', zap: L.whatsapp ? String(L.whatsapp).replace(/^55/, '') : '', modelo: '', cores: L.cores || {} };
    var temProd = S.d.produtos.length > 0, steps = ['Sua loja', 'Modelo', 'Cores'];
    var corpo = '';
    if (passo === 1) corpo = '<h2>Vamos montar sua loja</h2><p class="sub">Leva 1 minuto. Dá para mudar tudo depois.</p>' + fld('o1nome', 'Nome da loja', ob.nome, ' maxlength="80" required') + fld('o1zap', 'WhatsApp que recebe os pedidos (com DDD)', ob.zap, ' inputmode="tel" placeholder="62999999999" required');
    if (passo === 2) corpo = '<h2>Escolha um modelo</h2><p class="sub">O modelo traz categorias, produtos de exemplo e cores para você só trocar pelos seus.' + (temProd ? ' <b>Escolher um modelo substitui os produtos atuais.</b>' : '') + '</p>' +
      '<div class="modelos">' + (temProd ? '<button type="button" class="mod" data-mod="" aria-pressed="' + (ob.modelo === '') + '"><span class="top" style="background:var(--soft)"></span><b>Manter meus produtos</b><small>Só ajustar cores</small></button>' : '') +
      (window.MODELOS || []).map(function (m) { return '<button type="button" class="mod" data-mod="' + esc(m.id) + '" aria-pressed="' + (ob.modelo === m.id) + '"><span class="top" style="background:linear-gradient(120deg,' + esc(cor(m.cores.p1, '#888')) + ',' + esc(cor(m.cores.p2, '#aaa')) + ')"></span><b>' + esc(m.titulo) + '</b><small>' + esc(m.cats.slice(0, 3).join(' · ')) + '</small></button>'; }).join('') + '</div>';
    if (passo === 3) corpo = '<h2>Cores da loja</h2><p class="sub">Escolha uma paleta pronta ou ajuste cada cor.</p>' + coresHtml(ob.cores);
    app.innerHTML = '<main class="onb"><div class="obox"><ol class="steps">' + steps.map(function (s, i) { return '<li' + (i + 1 === passo ? ' aria-current="step"' : i + 1 < passo ? ' class="done"' : '') + '>' + (i + 1) + '. ' + s + '</li>'; }).join('') + '</ol>' +
      '<form id="fonb" data-passo="' + passo + '" class="form" novalidate>' + corpo + '<div class="nav2">' + (passo > 1 ? '<button type="button" class="btn ghost" data-voltar>Voltar</button>' : '<span></span>') +
      '<button type="submit" class="btn">' + (passo === 3 ? 'Concluir e abrir o painel' : 'Continuar') + '</button></div></form></div></main>';
  }
  function carregarModelo(id) {
    return new Promise(function (ok, erro) {
      var s = document.createElement('script'); s.src = '../modelos/' + encodeURIComponent(id) + '.js';
      s.onload = function () { ok({ loja: window.LOJA, categorias: window.CATEGORIAS, produtos: window.PRODUTOS }); };
      s.onerror = erro; document.body.appendChild(s);
    });
  }
  function concluirOnboarding() {
    var base = S.d.loja || {}, passo = Promise.resolve();
    if (ob.modelo) {
      passo = carregarModelo(ob.modelo).then(function (m) {
        base = Object.assign({}, m.loja);
        return salvar('importar', { categorias: m.categorias, produtos: m.produtos });
      });
    }
    return passo.then(function () {
      var zap = String(ob.zap).replace(/\D/g, ''); if (zap.length >= 10 && zap.length <= 11) zap = '55' + zap;
      var L = Object.assign({}, base, { nome: ob.nome, whatsapp: zap, cores: ob.cores });
      delete L.avaliacoes; delete L.id; delete L.api;
      return salvar('loja', { loja: L, onboarding: { feito: true, modelo: ob.modelo || '', em: new Date().toISOString() } }, 'Loja pronta!');
    }).then(function () { aplicarCor(); S.tab = 'inicio'; render(); });
  }

  /* ---------- eventos ---------- */
  document.addEventListener('click', function (ev) {
    var t = ev.target, b;
    if (t === dlg || t.closest('[data-fechar]')) { dlg.close(); ed = null; tr = null; return; }
    if ((b = t.closest('[data-tab]'))) { S.tab = b.getAttribute('data-tab'); render(); window.scrollTo(0, 0); return; }
    if (t.closest('[data-sair]')) { esquecer(); S.d = null; S.token = ''; login(); return; }
    if ((b = t.closest('[data-edit]'))) { if (S.tab !== 'produtos') { S.tab = 'produtos'; render(); } editarProduto(b.getAttribute('data-edit')); return; }
    if (t.closest('[data-novo-prod]')) return editarProduto(null);
    if ((b = t.closest('[data-edit-cat]'))) return editarCategoria(b.getAttribute('data-edit-cat'));
    if (t.closest('[data-nova-cat]')) return editarCategoria(null);
    if (t.closest('[data-addcor]')) { lerEditor(); ed.cores.push(['', '#1D1F23']); drawEditor(); return; }
    if ((b = t.closest('[data-rmcor]'))) { lerEditor(); ed.cores.splice(+b.getAttribute('data-rmcor'), 1); drawEditor(); return; }
    if (t.closest('[data-regrade]')) { lerEditor(); drawGrade(); return; }
    if (t.closest('[data-delprod]')) {
      if (!confirm('Excluir "' + ed.nome + '"? O estoque e as avaliações dele também saem.')) return;
      salvar('produto_excluir', { id: ed.id }, 'Produto excluído').then(function () { dlg.close(); ed = null; render(); }); return;
    }
    if ((b = t.closest('[data-delcat]'))) {
      if (!confirm('Excluir a categoria? Os produtos dela continuam, sem categoria.')) return;
      salvar('categoria_excluir', { id: +b.getAttribute('data-delcat') }, 'Categoria excluída').then(function () { dlg.close(); render(); }); return;
    }
    if ((b = t.closest('[data-st]'))) {
      var st = b.getAttribute('data-st'), msg = { confirmado: 'Pedido confirmado. Estoque baixado.', cancelado: 'Pedido cancelado.', enviado: 'Marcado como enviado.', entregue: 'Marcado como entregue.', novo: 'Pedido reaberto.' }[st];
      if (st === 'cancelado' && !confirm('Cancelar este pedido? Se o estoque já foi baixado, ele volta.')) return;
      b.disabled = true; salvar('pedido_status', { id: +b.getAttribute('data-ped'), status: st }, msg).then(render, function () { b.disabled = false; }); return;
    }
    if ((b = t.closest('[data-pst]'))) { S.pst = b.getAttribute('data-pst'); render(); return; }
    if ((b = t.closest('[data-per]'))) { S.periodo = +b.getAttribute('data-per'); render(); return; }
    if ((b = t.closest('[data-csv]'))) { var tipoCsv = b.getAttribute('data-csv'); csvRelatorio(tipoCsv === 'contatos' ? 'clientes' : tipoCsv); return; }
    if ((b = t.closest('[data-sub]'))) { S.sub = b.getAttribute('data-sub'); render(); return; }
    if (t.closest('[data-novo-cupom]')) return editarCupom(null);
    if ((b = t.closest('[data-edit-cupom]'))) return editarCupom(b.getAttribute('data-edit-cupom'));
    if ((b = t.closest('[data-del-cupom]'))) { if (!confirm('Excluir este cupom? Os pedidos que já usaram continuam registrados.')) return; salvar('cupom_excluir', { id: +b.getAttribute('data-del-cupom') }, 'Cupom excluído').then(render); return; }
    if ((b = t.closest('[data-copiar-cupom]'))) {
      var cc = S.d.cupons.filter(function (x) { return String(x.id) === b.getAttribute('data-copiar-cupom'); })[0];
      var txt = 'Use o cupom ' + cc.codigo + ' e ganhe ' + cupomTexto(cc).toLowerCase() + (cc.minimo > 0 ? ' nas compras a partir de ' + brl(cc.minimo) : '') + (cc.fim ? ', até ' + cc.fim.split('-').reverse().join('/') : '') + '. ' + lojaUrl();
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () { toast('Texto copiado. Cole no WhatsApp ou Instagram.'); }, function () { prompt('Copie o texto:', txt); });
      return;
    }
    if ((b = t.closest('[data-troca]'))) { abrirTroca(b.getAttribute('data-troca')); return; }
    if ((b = t.closest('[data-ttipo]'))) { lerTroca(); tr.tipo = b.getAttribute('data-ttipo'); drawTroca(); return; }
    if ((b = t.closest('[data-delcont]'))) { if (!confirm('Excluir este contato da lista?')) return; salvar('contato_excluir', { id: +b.getAttribute('data-delcont') }, 'Contato excluído').then(render); return; }
    if (t.closest('[data-nova-av]')) return editarAvaliacao(null);
    if ((b = t.closest('[data-edit-av]'))) return editarAvaliacao(b.getAttribute('data-edit-av'));
    if ((b = t.closest('[data-delav]'))) { if (!confirm('Excluir esta avaliação?')) return; salvar('avaliacao_excluir', { id: +b.getAttribute('data-delav') }, 'Avaliação excluída').then(render); return; }
    if ((b = t.closest('[data-preset]'))) {
      var p = PRESETS[+b.getAttribute('data-preset')];
      ['k_p1', 'k_p2', 'k_p3'].forEach(function (id, i) { document.getElementById(id).value = p[i]; });
      prevCores(); return;
    }
    if ((b = t.closest('[data-copy]'))) {
      var inp = document.getElementById(b.getAttribute('data-copy'));
      (navigator.clipboard ? navigator.clipboard.writeText(inp.value) : Promise.reject()).then(function () { toast('Link copiado'); }, function () { inp.select(); toast('Selecionado. Copie com Ctrl+C'); });
      return;
    }
    if (t.closest('[data-trocar]')) {
      if (!confirm('Gerar um novo código? O código atual deixa de funcionar agora.')) return;
      salvar('trocar_codigo', {}).then(function (r) {
        S.token = r.token; guardar();
        $('#novoCod').innerHTML = '<p class="newcode">Novo código: <b class="mono">' + esc(r.token) + '</b></p><p class="note">Anote agora. Ele não aparece de novo.</p>';
      });
      return;
    }
    if (t.closest('[data-refazer]')) return onboarding(1);
    if ((b = t.closest('[data-mod]'))) { ob.modelo = b.getAttribute('data-mod'); var m = (window.MODELOS || []).filter(function (x) { return x.id === ob.modelo; })[0]; if (m) ob.cores = m.cores; $$('[data-mod]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); return; }
    if (t.closest('[data-voltar]')) { var pa = +$('#fonb').getAttribute('data-passo'); lerOnb(pa); onboarding(pa - 1); return; }
  });
  function lerOnb(passo) {
    if (passo === 1) { ob.nome = val('o1nome'); ob.zap = val('o1zap'); }
    if (passo === 3) ob.cores = { p1: val('k_p1'), p2: val('k_p2'), p3: val('k_p3'), on3: contraste(val('k_p3')) };
  }
  function prevCores() {
    var pv = document.getElementById('kprev'); if (!pv) return;
    pv.style.background = 'linear-gradient(120deg,' + val('k_p1') + ',' + val('k_p2') + ')'; $('span', pv).style.background = val('k_p3');
  }
  document.addEventListener('input', function (ev) {
    var id = ev.target.id;
    if (id === 'k_p1' || id === 'k_p2' || id === 'k_p3') prevCores();
    if (ev.target.closest && ev.target.closest('#floja')) { var dt = $('#dirty'); if (dt) dt.textContent = 'Alterações não salvas'; }
    if (id === 'pq' || id === 'cq') {
      clearTimeout(S.qt); var v = ev.target.value;
      S.qt = setTimeout(function () { if (id === 'pq') S.q = v; else S.cq = v; render(); var el = document.getElementById(id); el.focus(); el.setSelectionRange(v.length, v.length); }, 250);
    }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'pcat') { S.cat = t.value; render(); }
    if (t.hasAttribute && t.hasAttribute('data-ativo')) {
      var p = S.d.produtos.filter(function (x) { return String(x.id) === t.getAttribute('data-ativo'); })[0];
      salvar('produto_salvar', Object.assign({}, p, { ativo: t.checked }), t.checked ? 'Produto visível na loja' : 'Produto oculto da loja').then(render, render);
    }
    if (t.hasAttribute && t.hasAttribute('data-avvis')) {
      var a = S.d.avaliacoes.filter(function (x) { return String(x.id) === t.getAttribute('data-avvis'); })[0];
      salvar('avaliacao_salvar', Object.assign({}, a, { visivel: t.checked }), t.checked ? 'Avaliação na loja' : 'Avaliação oculta').then(render, render);
    }
    if (t.id === 'e_tams' || (t.classList && t.classList.contains('cn'))) { lerEditor(); drawGrade(); }
    if (tr && /^t_(item|prod|pc|pt|q)$/.test(t.id)) { lerTroca(); drawTroca(); }
    if (t.hasAttribute && t.hasAttribute('data-cupom-ativo')) {
      var cu = S.d.cupons.filter(function (x) { return String(x.id) === t.getAttribute('data-cupom-ativo'); })[0];
      salvar('cupom_salvar', Object.assign({}, cu, { ativo: t.checked }), t.checked ? 'Cupom ligado' : 'Cupom desligado').then(render, render);
    }
  });
  document.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var f = ev.target, btn = $('[type=submit]', f);
    function trava(on) { if (btn) { btn.disabled = on; btn.setAttribute('aria-busy', on); } }
    if (f.id === 'flogin') {
      var sl = val('lSlug').toLowerCase().replace(/[^a-z0-9-]/g, ''), tk = val('lTok');
      if (!sl || !tk) return toast('Preencha o endereço da loja e o código.');
      entrar(sl, tk, val('lLem'));
    } else if (f.id === 'fprod') {
      lerEditor();
      if (!ed.nome.trim()) return toast('Preencha o nome do produto.');
      if (!(+ed.preco >= 0) || ed.preco === '') return toast('Preencha o preço.');
      if (ed.preco_de && +ed.preco_de <= +ed.preco) return toast('O preço "de" precisa ser maior que o preço atual.');
      var nomes = ed.cores.map(function (c) { return c[0]; });
      if (nomes.length > 1 && nomes.some(function (n) { return !n; })) return toast('Dê um nome para cada cor.');
      if (nomes.some(function (n, i) { return n && nomes.indexOf(n) !== i; })) return toast('Há cores com o mesmo nome.');
      var bad = ed.fotos.filter(function (x) { return !url(x); }); if (bad.length) return toast('Use links de foto que começam com https://');
      var est = {}; ed.cores.forEach(function (c) { ed.tamanhos.forEach(function (tm) { var k = c[0] + '|' + tm; est[k] = +ed.estoque[k] || 0; }); });
      var dados = Object.assign({}, ed, { estoque: est, cores: ed.cores[0][0] || ed.cores.length > 1 ? ed.cores : [], tamanhos: ed.tamanhos[0] ? ed.tamanhos : [] });
      trava(true);
      salvar('produto_salvar', dados, 'Produto salvo').then(function () { dlg.close(); ed = null; render(); }, function () { trava(false); });
    } else if (f.id === 'fcat') {
      var nome = val('c_nome'); if (!nome) return toast('Preencha o nome da categoria.');
      trava(true);
      salvar('categoria_salvar', { id: f.getAttribute('data-id') || null, chave: slugify(nome), nome: nome, chamada: val('c_chamada'), desenho: val('c_desenho'), cor: val('c_cor'), foto: url(val('c_foto')) }, 'Categoria salva')
        .then(function () { dlg.close(); render(); }, function () { trava(false); });
    } else if (f.id === 'fav') {
      if (!val('a_nome') || !val('a_texto')) return toast('Preencha nome e comentário.');
      trava(true);
      salvar('avaliacao_salvar', { id: f.getAttribute('data-id') || null, nome: val('a_nome'), cidade: val('a_cidade'), nota: +val('a_nota'), origem: val('a_origem'), quando: val('a_quando'),
        produto_id: val('a_prod') || null, texto: val('a_texto'), variacao: val('a_var'), visivel: val('a_vis'), verificada: val('a_ver') }, 'Avaliação salva')
        .then(function () { dlg.close(); render(); }, function () { trava(false); });
    } else if (f.id === 'fcupom') {
      var cod = val('u_cod').toUpperCase().replace(/[^A-Z0-9_-]/g, ''), tp = val('u_tipo'), vl = +val('u_val') || 0;
      if (cod.length < 3) return toast('Use de 3 a 20 letras ou números no código.');
      if (tp === 'pct' && (vl <= 0 || vl > 90)) return toast('A porcentagem precisa ficar entre 1 e 90.');
      if (tp === 'valor' && vl <= 0) return toast('Informe o valor do desconto.');
      if (val('u_ini') && val('u_fim') && val('u_fim') < val('u_ini')) return toast('A data final é antes da inicial.');
      trava(true);
      salvar('cupom_salvar', { id: f.getAttribute('data-id') || null, codigo: cod, tipo: tp, valor: tp === 'frete' ? 0 : vl, minimo: +val('u_min') || 0, limite: parseInt(val('u_lim'), 10) || null,
        inicio: val('u_ini'), fim: val('u_fim'), descricao: val('u_desc'), ativo: val('u_on') }, 'Cupom salvo').then(function () { dlg.close(); render(); }, function () { trava(false); });
    } else if (f.id === 'ftroca') {
      lerTroca();
      if (tr.tipo === 'troca' && tr.de_cor === tr.para_cor && tr.de_tam === tr.para_tam) return toast('Escolha a cor ou o tamanho que o cliente levou.');
      trava(true);
      salvar('troca_registrar', { pedido_id: tr.ped ? tr.ped.id : null, produto_id: tr.pid, de_cor: tr.de_cor, de_tam: tr.de_tam, para_cor: tr.para_cor, para_tam: tr.para_tam, qtd: tr.qtd,
        tipo: tr.tipo, motivo: tr.motivo, valor: tr.tipo === 'devolucao' ? (+tr.valor || 0) : 0, obs: tr.obs }, tr.tipo === 'troca' ? 'Troca registrada. Estoque atualizado.' : 'Devolução registrada. Peça de volta ao estoque.')
        .then(function () { dlg.close(); tr = null; render(); }, function () { trava(false); });
    } else if (f.id === 'floja') {
      if (!val('k_nome')) return toast('Preencha o nome da loja.');
      var z = val('k_zap').replace(/\D/g, ''); if (z.length < 10 || z.length > 13) return toast('Confira o WhatsApp com DDD.');
      ['k_logo', 'n_grp', 'k_termos', 'k_priv', 'w_logo', 'w_link', 'b_img0', 'b_img1', 'b_img2'].forEach(function (id) { if (val(id) && !url(val(id))) z = ''; });
      if (!z) return toast('Os links precisam começar com https://');
      trava(true);
      salvar('loja', { loja: lerLoja() }, 'Loja atualizada').then(function () { aplicarCor(); render(); }, function () { trava(false); });
    } else if (f.id === 'fonb') {
      var pa = +f.getAttribute('data-passo'); lerOnb(pa);
      if (pa === 1) {
        if (!ob.nome) return toast('Preencha o nome da loja.');
        var zz = String(ob.zap).replace(/\D/g, ''); if (zz.length < 10 || zz.length > 13) return toast('Confira o WhatsApp com DDD.');
        return onboarding(2);
      }
      if (pa === 2) {
        if (ob.modelo && S.d.produtos.length && !confirm('Usar o modelo vai substituir os produtos e categorias atuais. Continuar?')) return;
        if (ob.modelo === undefined || (ob.modelo === '' && !S.d.produtos.length)) return toast('Escolha um modelo.');
        return onboarding(3);
      }
      trava(true);
      concluirOnboarding().catch(function () { trava(false); });
    }
  });
  window.addEventListener('beforeunload', function (e) { var dt = $('#dirty'); if (dt && dt.textContent) { e.preventDefault(); e.returnValue = ''; } });

  /* ---------- início: link com código (?loja=slug#código) ou sessão salva ---------- */
  var qs = (location.search.match(/[?&]loja=([a-z0-9-]+)/) || [])[1], cod = location.hash.slice(1);
  if (cod) history.replaceState(null, '', location.pathname + location.search);  // o código não fica no histórico
  window.addEventListener('hashchange', function () {
    var c = location.hash.slice(1), sl = (location.search.match(/[?&]loja=([a-z0-9-]+)/) || [])[1];
    if (!c || !sl) return;
    history.replaceState(null, '', location.pathname + location.search);
    entrar(sl, decodeURIComponent(c), false);
  });
  var s = salvo();
  if (qs && cod) entrar(qs, decodeURIComponent(cod), false);
  else if (s && s.slug && s.token && (!qs || qs === s.slug)) { var lem = false; try { lem = !!localStorage.getItem('nourpainel'); } catch (e) {} entrar(s.slug, s.token, lem); }
  else { S.slug = qs || ''; login(); }
})();
