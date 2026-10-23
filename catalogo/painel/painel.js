/* =====================================================================
   Nour Catálogo · painel do lojista
   Entra com o endereço da loja e o código de acesso. Tudo é lido e gravado
   pelas funções catalogo_painel e catalogo_painel_salvar, que conferem o código.
   ===================================================================== */
(function () {
  'use strict';
  var app = document.getElementById('app'), dlg = document.getElementById('dlg');
  var S = { slug: '', token: '', d: null, tab: 'inicio', q: '', cat: '', pst: 'novo', periodo: 30, cq: '' };
  try { var temaSalvo = localStorage.getItem('nourpaineltema'); if (temaSalvo === 'dark' || temaSalvo === 'light') document.documentElement.setAttribute('data-theme', temaSalvo); } catch (e) {}

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
    x: '<path d="M6 6l12 12M18 6L6 18"/>', cam: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>', plus: '<path d="M12 5v14M5 12h14"/>', down: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>', repeat: '<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>', money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>', out: '<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>', moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>', link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
  };
  function ic(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[n] + '</svg>'; }

  /* ---------- acesso ---------- */
  var ERROS = { acesso_negado: 'Loja ou código de acesso incorreto.', dados_invalidos: 'Algum campo está fora do formato.', produto_inexistente: 'Esse produto não existe mais.',
    nome_invalido: 'Preencha o nome.', status_invalido: 'Status inválido.', acao_invalida: 'Ação inválida.',
    cupom_repetido: 'Já existe um cupom com esse código.', cupom_codigo_invalido: 'Use de 3 a 20 letras ou números no código do cupom.', pedido_inexistente: 'Esse pedido não existe mais.', quantidade_invalida: 'Quantidade inválida.',
    limite_plano: 'Seu plano chegou ao limite de produtos. Fale com o suporte para passar ao plano Mais.', limite_fotos: 'Seu plano chegou ao limite de fotos. Apague fotos sem uso ou passe ao plano Mais.',
    tamanho: 'A foto ficou grande demais mesmo comprimida. Tente outra.', tipo: 'Esse arquivo não é uma foto (use JPG, PNG, WebP ou foto do celular).', falha_envio: 'Não deu para enviar a foto. Tente de novo.' };
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
      S.d = d; guardar(); aplicarCor(); lerPlano(); limparFotos();
      if (window.nourProtecao) window.nourProtecao({ onde: 'painel', slug: slug, marca: (d.nome || slug) + ' · ' + slug + ' · ' + dataX(Date.now(), 1) });
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
  /* ---------- plano e fotos ---------- */
  var PLANOS = { basico: 'Básico', mais: 'Mais' };
  function lerPlano() {
    window.nourRpc('catalogo_plano', { p_slug: S.slug, p_token: S.token }).then(function (pl) { S.plano = pl; if (S.tab === 'produtos' && !dlg.open) render(); }, function () {});
  }
  function planoTxt() {
    var pl = S.plano; if (!pl || !pl.limites) return '';
    var lim = pl.limites.produtos, n = S.d.produtos.length;
    return '<p class="plano' + (n >= lim ? ' cheio' : '') + '">Plano <b>' + esc(PLANOS[pl.plano] || pl.plano) + '</b> · ' + n + ' de ' + lim + ' produtos' + (n >= lim ? ' · limite atingido; fale com o suporte para passar ao plano Mais' : '') + '</p>';
  }
  // Uma vez por entrada: apaga do armazenamento as fotos enviadas há mais de 1 hora que não ficaram em lugar nenhum.
  function limparFotos() {
    var fd = new FormData(); fd.append('loja', S.slug); fd.append('codigo', S.token); fd.append('acao', 'limpar');
    fetch(window.NOUR_API.url + '/functions/v1/catalogo-foto', { method: 'POST', headers: { apikey: window.NOUR_API.chave }, body: fd }).catch(function () {});
  }
  // Compressão automática: toda foto é reduzida no próprio aparelho antes de subir (WebP; JPEG ou PNG se o navegador não gerar WebP).
  // Cada foto vira 2 arquivos: grande (página do produto, banner) e miniatura (vitrine, listas).
  var TAM = { produto: [1400, 480], banner: [1920, 960], 'banner-cel': [1200, 600], logo: [600, 200], categoria: [900, 400] };
  // Tamanho e proporção recomendados para quem vai tirar ou preparar a foto.
  var IDEAL = { produto: '1000 × 1250 px · retrato 4:5', banner: '1920 × 800 px · paisagem', 'banner-cel': '900 × 1200 px · retrato 3:4', logo: '500 × 500 px · quadrado, de preferência com fundo transparente (PNG)', categoria: '600 × 600 px · quadrada' };
  function abrirImg(file) {
    if (window.createImageBitmap) return createImageBitmap(file, { imageOrientation: 'from-image' }).catch(function () { return createImageBitmap(file); }).catch(function () { return viaTag(file); });
    return viaTag(file);
  }
  function viaTag(file) {
    return new Promise(function (ok, erro) {
      var u = URL.createObjectURL(file), im = new Image();
      im.onload = function () { ok(im); }; im.onerror = function () { erro(new Error('tipo')); }; im.src = u;
    });
  }
  function gerar(img, max, q, alfa) {
    var w = img.width, h = img.height, k = Math.min(1, max / Math.max(w, h));
    var c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w * k)); c.height = Math.max(1, Math.round(h * k));
    var x = c.getContext('2d'); if (!alfa) { x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); }
    x.imageSmoothingQuality = 'high'; x.drawImage(img, 0, 0, c.width, c.height);
    function blob(t, qq) { return new Promise(function (ok) { c.toBlob(ok, t, qq); }); }
    return blob('image/webp', q).then(function (b) {
      if (b && b.type === 'image/webp') return b;
      return blob(alfa ? 'image/png' : 'image/jpeg', q);
    }).then(function (b) {
      if (!b) throw new Error('tipo');
      if (b.size > 380 * 1024 && max > 400) return gerar(img, Math.round(max * 0.8), Math.max(0.6, q - 0.08), alfa);
      return b;
    });
  }
  function comprimir(file, tipo) {
    if (!/^image\//.test(file.type || 'image/')) return Promise.reject(new Error('tipo'));
    if (file.size > 40 * 1024 * 1024) return Promise.reject(new Error('tamanho'));
    var t = TAM[tipo] || TAM.produto, alfa = tipo === 'logo';
    return abrirImg(file).then(function (img) {
      return Promise.all([gerar(img, t[0], 0.8, alfa), gerar(img, t[1], 0.76, alfa)]);
    });
  }
  function enviarFoto(file, tipo) {
    return comprimir(file, tipo).then(function (bs) {
      var ext = bs[0].type === 'image/webp' ? 'webp' : bs[0].type === 'image/png' ? 'png' : 'jpg';
      if (bs[1].type !== bs[0].type) throw new Error('tipo');
      var fd = new FormData(); fd.append('loja', S.slug); fd.append('codigo', S.token);
      fd.append('g', bs[0], 'foto.' + ext); fd.append('p', bs[1], 'foto-p.' + ext);
      return fetch(window.NOUR_API.url + '/functions/v1/catalogo-foto', { method: 'POST', headers: { apikey: window.NOUR_API.chave }, body: fd });
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok || !d.url) throw new Error(d.error || 'falha_envio'); return d.url; });
    });
  }
  // Envia uma ou mais fotos em sequência mostrando o andamento; devolve os links na mesma ordem.
  function enviarVarias(files, tipo, onde) {
    var urls = [], i = 0;
    function prox() {
      if (i >= files.length) return Promise.resolve(urls);
      if (onde) onde.textContent = 'Comprimindo e enviando ' + (i + 1) + ' de ' + files.length + '…';
      return enviarFoto(files[i++], tipo).then(function (u) { urls.push(u); return prox(); });
    }
    return prox().then(function (u) { if (onde) onde.textContent = ''; return u; }, function (e) { if (onde) onde.textContent = ''; toast(msgErro(e)); if (urls.length) return urls; throw e; });
  }
  // Miniatura gerada no envio (só para fotos do nosso armazenamento).
  function mini(u) { return /\/object\/public\/catalogo\/[^?#]+\.(webp|jpg|png)$/.test(u) && !/-p\.(webp|jpg|png)$/.test(u) ? u.replace(/\.(webp|jpg|png)$/, '-p.$1') : u; }
  // Campo de imagem: link + botão para enviar do aparelho + prévia.
  function fldFoto(id, rot, v, tipo) {
    v = v || '';
    return '<div class="field ffoto"><span>' + rot + '</span><div class="fup"><span class="pv" id="pv_' + id + '">' + (url(v) ? '<img src="' + esc(mini(url(v))) + '" alt="">' : '') + '</span>' +
      '<input id="' + id + '" type="url" inputmode="url" placeholder="https://… ou envie do aparelho" value="' + esc(v) + '" aria-label="' + esc(rot) + '">' +
      '<label class="btn ghost sm">Enviar foto<input type="file" accept="image/*" data-up-campo="' + id + '" data-up-tipo="' + (tipo || 'produto') + '" hidden></label></div>' +
      '<small class="ideal">Ideal: ' + IDEAL[tipo || 'produto'] + '</small><small class="upst" aria-live="polite"></small></div>';
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
  function lojaUrl() { return new URL('/loja/' + encodeURIComponent(S.slug) + '/', location.href).href; }

  /* ---------- estrutura: menu em grupos, barra do topo e navegação de baixo no celular ---------- */
  var GRUPOS = [['Visão geral', [['inicio', 'Início', 'home']]],
    ['Vendas', [['pedidos', 'Pedidos', 'bag'], ['clientes', 'Clientes', 'users'], ['cupons', 'Cupons', 'tag']]],
    ['Catálogo', [['produtos', 'Produtos e estoque', 'box'], ['avaliacoes', 'Avaliações', 'star']]],
    ['Resultados', [['analytics', 'Analytics', 'eye'], ['relatorios', 'Relatórios', 'chart']]],
    ['Configurações', [['loja', 'Editar loja', 'brush'], ['acesso', 'Acesso e links', 'key']]]];
  var TELAS = { inicio: inicio, produtos: produtos, pedidos: pedidos, cupons: cupons, analytics: analytics, relatorios: relatorios, clientes: clientes, avaliacoes: avaliacoes, loja: loja, acesso: acesso };
  var BAIXO = ['inicio', 'pedidos', 'produtos', 'clientes'];
  function aba(id) { var r = null; GRUPOS.forEach(function (g) { g[1].forEach(function (t) { if (t[0] === id) r = { g: g[0], t: t }; }); }); return r || { g: '', t: [id, id, 'home'] }; }
  // Números que pedem atenção, mostrados no menu.
  function avisos() {
    var d = S.d, esg = 0, sum = 0;
    d.produtos.forEach(function (p) { if (p.ativo && !totalEst(p)) esg++; });
    try { sum = baseClientes().filter(function (c) { return c.situacao === 'sumindo'; }).length; } catch (e) {}
    return { pedidos: [d.pedidos.filter(function (p) { return p.status === 'novo'; }).length, ''], produtos: [esg, 'bad'], clientes: [sum, 'warn'] };
  }
  function itemMenu(t, av, cls) {
    var n = av[t[0]];
    return '<button type="button" class="' + cls + '" data-tab="' + t[0] + '"' + (S.tab === t[0] ? ' aria-current="page"' : '') + '><i>' + ic(t[2]) + '</i><span>' + t[1] + '</span>' + (n && n[0] ? '<em class="num ' + n[1] + '">' + n[0] + '</em>' : '') + '</button>';
  }
  function temaAtual() { return document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  function render() {
    var d = S.d, av = avisos(), at = aba(S.tab);
    var init = String(d.nome || 'L').split(/\s+/).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
    var L = d.loja || {};
    app.innerHTML = '<div class="shell"><aside class="side"><div class="who"><span class="ring">' + (url(L.logo) ? '<img src="' + esc(url(L.logo)) + '" alt="">' : '<span class="in">' + esc(init) + '</span>') + '</span><span><b>' + esc(d.nome) + '</b><a href="' + esc(lojaUrl()) + '" target="_blank" rel="noopener" class="on">Loja no ar</a></span></div>' +
      '<nav aria-label="Seções">' + GRUPOS.map(function (g) { return '<div class="grp"><small>' + g[0] + '</small>' + g[1].map(function (t) { return itemMenu(t, av, 'nv'); }).join('') + '</div>'; }).join('') + '</nav>' +
      '<div class="sidefoot"><a class="nv" href="' + esc(lojaUrl()) + '" target="_blank" rel="noopener"><i>' + ic('ext') + '</i><span>Ver minha loja</span></a><button type="button" class="nv" data-sair><i>' + ic('out') + '</i><span>Sair</span></button>' +
      parceiroRodape() + '</div></aside>' +
      '<div class="area"><header class="topbar"><div class="crumb">' + (at.g ? '<span>' + at.g + '</span><i>›</i>' : '') + '<b>' + esc(at.t[1]) + '</b></div><span class="sp"></span>' +
        '<button type="button" class="ib" data-tema aria-label="' + (temaAtual() === 'dark' ? 'Usar tema claro' : 'Usar tema escuro') + '">' + ic(temaAtual() === 'dark' ? 'sun' : 'moon') + '</button>' +
        '<button type="button" class="btn ghost sm hide-s" data-copiar-link>' + ic('link') + 'Copiar link</button><a class="btn sm" href="' + esc(lojaUrl()) + '" target="_blank" rel="noopener">' + ic('ext') + '<span class="hide-s">Ver loja</span></a></header>' +
      '<main class="main" id="main" data-tela="' + esc(S.tab) + '">' + TELAS[S.tab]() + '</main></div>' +
      '<nav class="bnav" aria-label="Atalhos">' + BAIXO.map(function (id) { var t = aba(id).t; return itemMenu([t[0], t[1].split(' e ')[0], t[2]], av, 'bn'); }).join('') +
        '<button type="button" class="bn" data-mais' + (BAIXO.indexOf(S.tab) < 0 ? ' aria-current="page"' : '') + '><i>' + ic('grid') + '</i><span>Mais</span></button></nav></div>';    if (S.tab === 'acesso') carregarSeg();
  }
  // Menu completo no celular, em blocos por grupo.
  function menuMais() {
    var av = avisos();
    dlg.innerHTML = '<div class="sheet sm menu-mais"><header><h2>Menu</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      GRUPOS.map(function (g) { return '<section><small>' + g[0] + '</small><div class="tiles">' + g[1].map(function (t) { return itemMenu(t, av, 'tile'); }).join('') + '</div></section>'; }).join('') +
      '<div class="tiles"><a class="tile" href="' + esc(lojaUrl()) + '" target="_blank" rel="noopener"><i>' + ic('ext') + '</i><span>Ver minha loja</span></a><button type="button" class="tile" data-sair><i>' + ic('out') + '</i><span>Sair</span></button></div>' +
      parceiroRodape() + '</div></div>';
    dlg.showModal();
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
  function kpi(t, v, s, icone) { return '<div class="kpi' + (icone ? ' ki' : '') + '">' + (icone ? '<em class="kic">' + ic(icone) + '</em>' : '') + '<span>' + esc(t) + '</span><b class="num">' + v + '</b>' + (s ? '<small>' + s + '</small>' : '') + '</div>'; }
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
    var h = new Date().getHours(), saud = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
    return '<section class="boasvindas"><div><small>' + saud + '</small><h1>' + esc(d.nome) + '</h1><p>Resumo dos últimos 30 dias da sua loja.</p></div>' +
      '<div class="atalhos"><button type="button" data-novo-prod>' + ic('plus') + 'Novo produto</button><button type="button" data-tab="pedidos">' + ic('bag') + 'Pedidos' + (novos.length ? ' <em class="num">' + novos.length + '</em>' : '') + '</button>' +
      '<button type="button" data-tab="clientes">' + ic('users') + 'Clientes</button><button type="button" data-copiar-link>' + ic('link') + 'Copiar link</button></div></section>' +
      (passos.length ? '<div class="card todo"><h2>Falta pouco para a loja ficar completa</h2><ul>' + passos.map(function (x) { return '<li><button type="button" class="link" data-tab="' + x[2] + '">' + esc(x[1]) + '</button></li>'; }).join('') + '</ul></div>' : '') +
      '<div class="kpis">' + kpi('Vendas confirmadas', brl(fat), v30.length + (v30.length === 1 ? ' pedido' : ' pedidos'), 'money') + kpi('Pedidos novos', num(novos.length), novos.length ? 'Confirme para baixar o estoque' : 'Nenhum esperando', 'bag') +
        kpi('Ticket médio', brl(v30.length ? fat / v30.length : 0), '', 'tag') + kpi('Visitas na loja', num(vis), vis ? 'Conversão ' + (v30.length / vis * 100).toFixed(1).replace('.', ',') + '%' : 'Contadas após o aceite de cookies', 'eye') + '</div>' +
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
    return '<div class="head"><div><h1>Produtos e estoque</h1><p class="sub">' + d.produtos.length + ' produtos · ' + num(d.produtos.reduce(function (s, p) { return s + totalEst(p); }, 0)) + ' unidades em estoque</p>' + planoTxt() + '</div>' +
      '<button type="button" class="btn" data-novo-prod>' + ic('plus') + 'Novo produto</button></div>' + planilhaBloco() +
      '<div class="card"><h2>Categorias</h2><div class="chips">' + d.categorias.map(function (c) { return '<button type="button" class="chip" data-edit-cat="' + c.id + '"><i style="background:' + esc(cor(c.cor, '#ccc')) + '"></i>' + esc(c.nome) + '</button>'; }).join('') +
      '<button type="button" class="chip add" data-nova-cat>' + ic('plus') + 'Nova categoria</button></div></div>' +
      '<div class="card"><div class="tools"><input id="pq" type="search" placeholder="Buscar por nome ou código" value="' + esc(S.q) + '" aria-label="Buscar produtos">' +
      '<select id="pcat" aria-label="Filtrar por categoria"><option value="">Todas as categorias</option>' + d.categorias.map(function (c) { return '<option value="' + esc(c.chave) + '"' + (S.cat === c.chave ? ' selected' : '') + '>' + esc(c.nome) + '</option>'; }).join('') + '</select></div>' +
      (ps.length ? '<div class="tbl"><table><thead><tr><th>Produto</th><th>Categoria</th><th class="r">Preço</th><th class="r">Estoque</th><th>Na loja</th><th></th></tr></thead><tbody>' + ps.map(function (p) {
        var t = totalEst(p), c0 = (p.cores[0] || [])[1];
        return '<tr><td><span class="pr">' + (p.fotos && url(p.fotos[0]) ? '<img src="' + esc(mini(url(p.fotos[0]))) + '" alt="" loading="lazy">' : '<i style="background:' + esc(cor(c0, 'var(--soft)')) + '"></i>') + '<span><b>' + esc(p.nome) + '</b><small class="mono">' + esc(p.sku || 'sem código') + '</small></span></span></td>' +
          '<td>' + esc(catNome[p.categoria] || '—') + '</td><td class="r num">' + (p.preco_de ? '<s>' + brl(p.preco_de) + '</s> ' : '') + brl(p.preco) + '</td>' +
          '<td class="r">' + (t === 0 ? '<span class="pill bad">Esgotado</span>' : t <= 3 ? '<span class="pill warn">' + t + '</span>' : '<span class="num">' + t + '</span>') + '</td>' +
          '<td><label class="sw"><input type="checkbox" data-ativo="' + p.id + '"' + (p.ativo ? ' checked' : '') + '><span>' + (p.ativo ? 'Visível' : 'Oculto') + '</span></label></td>' +
          '<td class="r nowrap"><button type="button" class="btn ghost sm" data-dup="' + p.id + '" aria-label="Duplicar ' + esc(p.nome) + '" title="Duplicar">' + ic('copy') + '</button><button type="button" class="btn ghost sm" data-edit="' + p.id + '">Editar</button></td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="empty">Nenhum produto encontrado.</p>') + '</div>' +
      '<details class="card"><summary><h2>Movimentos de estoque</h2></summary><div class="tools"><span class="note">Entradas, saídas, vendas e trocas das peças.</span><span class="sp"></span>' + expBtns('movimentos') + '</div><div class="tbl"><table><thead><tr><th>Quando</th><th>Produto</th><th>Variação</th><th class="r">Mudança</th><th class="r">Saldo</th><th>Motivo</th></tr></thead><tbody>' +
      d.movimentos.slice(0, 80).map(function (m) { return '<tr><td>' + dataBr(m.em, 1) + '</td><td>' + esc(m.produto_nome) + '</td><td>' + esc([m.cor, m.tamanho].filter(Boolean).join(' · ') || '—') + '</td><td class="r"><span class="mv ' + (m.delta < 0 ? 'neg' : 'pos') + '">' + (m.delta < 0 ? '↓ ' : '↑ +') + m.delta + '</span></td><td class="r num">' + (m.saldo == null ? '' : m.saldo) + '</td><td>' + esc(m.motivo) + '</td></tr>'; }).join('') +
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
  // Duplicar: abre o editor com uma cópia (sem código e com estoque zerado); só vira produto ao salvar.
  function duplicarProduto(id) {
    if (S.plano && S.plano.limites && S.d.produtos.length >= S.plano.limites.produtos) return toast(ERROS.limite_plano);
    var base = id ? S.d.produtos.filter(function (x) { return String(x.id) === String(id); })[0] : ed;
    if (!base) return;
    var c = JSON.parse(JSON.stringify(base)); delete c.id;
    c.nome = String(c.nome || '').slice(0, 70) + ' (cópia)'; c.sku = ''; c.estoque = {}; c.ativo = false;
    ed = c; ed.duplicado = true;
    if (!ed.cores.length) ed.cores = [['', '']];
    if (!ed.tamanhos.length) ed.tamanhos = [''];
    drawEditor(); if (!dlg.open) dlg.showModal();
    toast('Cópia criada. Ajuste o que mudar e salve.');
  }
  function lerEditor() {
    if (!ed) return;
    var antigos = ed.cores.map(function (c) { return c[0]; });
    $$('[data-est]', dlg).forEach(function (el) { ed.estoque[el.getAttribute('data-est')] = Math.max(0, parseInt(el.value, 10) || 0); });
    ['nome', 'sku', 'marca', 'categoria', 'preco', 'preco_de', 'desenho', 'descricao', 'composicao', 'selo'].forEach(function (k) { var el = document.getElementById('e_' + k); if (el) ed[k] = el.value; });
    ['destaque', 'oferta', 'ativo'].forEach(function (k) { var el = document.getElementById('e_' + k); if (el) ed[k] = el.checked; });
    ed.cores = $$('[data-cor-i]', dlg).map(function (row) { var f = row.getAttribute('data-foto') || ''; return f ? [$('.cn', row).value.trim(), $('.ch', row).value, f] : [$('.cn', row).value.trim(), $('.ch', row).value]; });
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
  function fotosHtml() {
    return '<div class="fotos">' + ed.fotos.map(function (f, i) {
      return '<figure><img src="' + esc(mini(url(f))) + '" alt="Foto ' + (i + 1) + '">' + (i ? '<button type="button" class="ft" data-capa="' + i + '" title="Usar como capa">capa</button>' : '<span class="ft on">capa</span>') +
        '<button type="button" class="x sm" data-rmfoto="' + i + '" aria-label="Tirar foto ' + (i + 1) + '">' + ic('x') + '</button></figure>';
    }).join('') + (ed.fotos.length < 5 ? '<label class="addfoto">' + ic('cam') + '<span>Adicionar fotos</span><input type="file" accept="image/*" multiple data-up-fotos hidden></label>' : '') + '</div>' +
      '<small class="upst" id="efst" aria-live="polite"></small>' +
      (ed.fotos.length < 5 ? '<div class="fup"><input id="e_flink" type="url" inputmode="url" placeholder="ou cole um link https da foto" aria-label="Link da foto"><button type="button" class="btn ghost sm" data-addlink>Adicionar link</button></div>' : '');
  }
  function drawFotos() { var el = document.getElementById('efotos'); if (el) el.innerHTML = fotosHtml(); }
  // Só a tabela da grade é redesenhada ao mudar cores ou tamanhos, para não perder o clique em "Salvar".
  function drawGrade() { var g = document.getElementById('egrade'); if (g) g.innerHTML = gradeHtml(); }
  function drawEditor() {
    var c = S.d.categorias, novo = !ed.id;
    dlg.innerHTML = '<form class="sheet" id="fprod" novalidate><header><h2>' + (ed.duplicado ? 'Cópia do produto' : novo ? 'Novo produto' : 'Editar produto') + '</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
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
      '<fieldset><legend>Fotos <small>até 5; a 1ª é a capa e a 2ª aparece ao passar o mouse. Ideal: 1000 × 1250 px (retrato 4:5), fundo limpo. Comprimidas automaticamente.</small></legend><div id="efotos">' + fotosHtml() + '</div></fieldset>' +
      '<fieldset><legend>Cores <small>deixe vazio se o produto tem uma cor só</small></legend><div id="ecores">' + ed.cores.map(function (co, i) { return '<div class="corrow" data-cor-i data-foto="' + esc(url(co[2]) || '') + '"><label class="corfoto" title="Foto desta cor (opcional) · ideal 1000 × 1250 px">' + (url(co[2]) ? '<img src="' + esc(mini(url(co[2]))) + '" alt="">' : ic('cam')) + '<input type="file" accept="image/*" data-up-cor="' + i + '" hidden aria-label="Foto da cor ' + (i + 1) + '"></label>' + (url(co[2]) ? '<button type="button" class="link sm" data-rmcorfoto="' + i + '">tirar foto</button>' : '') + '<input class="cn" maxlength="30" placeholder="Nome da cor" value="' + esc(co[0]) + '" aria-label="Nome da cor ' + (i + 1) + '"><input class="ch" type="color" value="' + esc(cor(co[1], '#1D1F23')) + '" aria-label="Cor ' + (i + 1) + '"><button type="button" class="x sm" data-rmcor="' + i + '" aria-label="Remover cor">' + ic('x') + '</button></div>'; }).join('') + '</div>' +
      '<button type="button" class="btn ghost sm" data-addcor>' + ic('plus') + 'Adicionar cor</button></fieldset>' +
      '<label class="field"><span>Tamanhos, separados por vírgula</span><input id="e_tams" value="' + esc(ed.tamanhos.join(', ')) + '" placeholder="PP, P, M, G, GG"></label>' +
      '<fieldset><legend>Estoque por variação <button type="button" class="link" data-regrade>atualizar grade</button></legend><div class="tbl" id="egrade">' + gradeHtml() + '</div></fieldset>' +
      '</div><footer>' + (novo ? '' : '<button type="button" class="btn danger ghost" data-delprod>Excluir</button><button type="button" class="btn ghost" data-dup-ed>' + ic('copy') + 'Duplicar</button>') + '<span class="sp"></span><button type="button" class="btn ghost" data-fechar>Cancelar</button><button type="submit" class="btn">Salvar produto</button></footer></form>';
  }

  function editarCategoria(id) {
    var c = S.d.categorias.filter(function (x) { return String(x.id) === String(id); })[0] || { nome: '', chamada: '', desenho: 'camiseta', cor: '#8C2A5B', foto: '' };
    dlg.innerHTML = '<form class="sheet sm" id="fcat" data-id="' + esc(c.id || '') + '" novalidate><header><h2>' + (c.id ? 'Editar categoria' : 'Nova categoria') + '</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      '<label class="field"><span>Nome</span><input id="c_nome" maxlength="60" value="' + esc(c.nome) + '" required></label>' +
      '<label class="field"><span>Chamada (frase curta no card)</span><input id="c_chamada" maxlength="80" value="' + esc(c.chamada) + '" placeholder="Ex.: Para todas as ocasiões"></label>' +
      '<div class="g2"><label class="field"><span>Desenho</span><select id="c_desenho">' + DESENHOS.map(function (x) { return '<option' + (c.desenho === x ? ' selected' : '') + '>' + x + '</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span>Cor do desenho</span><input id="c_cor" type="color" value="' + esc(cor(c.cor, '#8C2A5B')) + '"></label></div>' +
      fldFoto('c_foto', 'Foto (opcional)', c.foto, 'categoria') + '</div>' +
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
    return '<div class="head"><div><h1>Pedidos</h1><p class="sub">Os pedidos chegam pelo WhatsApp e ficam registrados aqui. Ao confirmar, o estoque é baixado; ao cancelar, ele volta.</p></div>' + expBtns('pedidos') + '</div>' +
      '<div class="chips stt">' + [['novo', 'Novos'], ['confirmado', 'Confirmados'], ['enviado', 'Enviados'], ['entregue', 'Entregues'], ['cancelado', 'Cancelados'], ['todos', 'Todos']].map(function (x) {
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
  var ORIGENS = { google: 'Google', biosite: 'Bio Site', instagram: 'Instagram', whatsapp: 'WhatsApp', facebook: 'Facebook', tiktok: 'TikTok', email: 'E-mail marketing', direto: 'Link direto', outro: 'Outros sites', '': 'Sem origem' };
  // Links marcados por canal: a loja reconhece de onde a pessoa veio mesmo quando o app não informa.
  var CANAIS = [['biosite', 'Bio Site', 'Botão da loja no seu Bio Site'], ['instagram', 'Instagram', 'Link da bio e stories'], ['whatsapp', 'WhatsApp', 'Status, grupo e lista de transmissão'],
    ['google', 'Google', 'Perfil da empresa no Google (site)'], ['email', 'E-mail marketing', 'Botões dos e-mails'], ['facebook', 'Facebook', 'Página e anúncios'], ['tiktok', 'TikTok', 'Link da bio']];
  function linkCanal(c) { return lojaUrl() + '?utm_source=' + c; }
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
      canaisCard(porOrig, peds) +
      '<div class="cols"><div class="card"><h2>De onde vêm as visitas</h2>' + hbar(ordena(porOrig).map(function (x) { return [ORIGENS[x[0]] || x[0], x[1]]; }), num) + '</div>' +
      '<div class="card"><h2>Pedidos por origem</h2>' + hbar(ordena(pedOrig).map(function (x) { return [ORIGENS[x[0]] || x[0], x[1]]; }), function (v) { return v + (v === 1 ? ' pedido' : ' pedidos'); }) + '<h2 style="margin-top:16px">Aparelho</h2>' + hbar(ordena(porDisp).map(function (x) { return [x[0] === 'celular' ? 'Celular' : 'Computador', x[1]]; }), num) + '</div></div>' +
      '<div class="card"><h2>Produtos: vistos, sacola e vendidos</h2>' + tabela(['Produto', 'Vistos', 'Sacola', 'Vendidos', 'Conversão %'], prods) + '<p class="note">Muito visto e pouco vendido costuma ser preço, foto ou falta de tamanho.</p></div>' +
      '<div class="cols"><div class="card"><h2>O que procuram na busca</h2>' + hbar(ordena(buscas).slice(0, 10), function (v) { return v + 'x'; }) + '</div>' +
      '<div class="card"><h2>Outros cliques</h2>' + hbar([['Grupo de promoções', t.grupo], ['Avise-me (esgotados)', t.avise], ['Cupons aplicados', t.cupom]].filter(function (x) { return x[1]; }), num) + '</div></div>' +
      '<p class="note">Os números contam só quem aceitou os cookies (LGPD). Uma visita por dia e por aparelho.</p>';
  }

  // Canais lado a lado: visitas, pedidos, vendas e conversão de cada origem, mais o link marcado de cada um.
  function canaisCard(porOrig, peds) {
    var ped = {}, ven = {};
    peds.forEach(function (p) { soma2(ped, p.origem || '', 1); if (VENDIDO.indexOf(p.status) > -1) soma2(ven, p.origem || '', +p.total); });
    var ks = Object.keys(ORIGENS).filter(function (k) { return porOrig[k] || ped[k]; });
    var max = Math.max.apply(null, [1].concat(ks.map(function (k) { return porOrig[k] || 0; })));
    return '<div class="card"><h2>Canais</h2><p class="note">Visitas, pedidos e vendas de cada canal no período.</p>' +
      (ks.length ? '<div class="canais">' + ks.sort(function (a, b) { return (porOrig[b] || 0) - (porOrig[a] || 0); }).map(function (k) {
        return '<div class="canal"><span class="cico o-' + esc(k || 'nada') + '">' + esc((ORIGENS[k] || k).charAt(0)) + '</span><div class="cn"><b>' + esc(ORIGENS[k] || k) + '</b><i><em style="width:' + Math.round((porOrig[k] || 0) / max * 100) + '%"></em></i></div>' +
          '<div class="cv"><b class="num">' + num(porOrig[k] || 0) + '</b><small>visitas</small></div><div class="cv"><b class="num">' + num(ped[k] || 0) + '</b><small>pedidos</small></div>' +
          '<div class="cv"><b class="num">' + brl(ven[k] || 0) + '</b><small>vendas</small></div><div class="cv"><b class="num">' + pct(ped[k] || 0, porOrig[k] || 0) + '</b><small>conversão</small></div></div>';
      }).join('') + '</div>' : '<p class="empty">Ainda sem visitas no período.</p>') +
      '<details class="mais"><summary>Links marcados por canal (copie e use em cada lugar)</summary><p class="note">Sem o link marcado, o WhatsApp e alguns apps não dizem de onde a pessoa veio e a visita cai em “Link direto”.</p>' +
      CANAIS.map(function (c) { return '<div class="field"><span>' + c[1] + ' <small class="note">· ' + c[2] + '</small></span><div class="copy"><input readonly id="lk_' + c[0] + '" value="' + esc(linkCanal(c[0])) + '" aria-label="Link para ' + c[1] + '"><button type="button" class="btn ghost sm" data-copy="lk_' + c[0] + '">Copiar</button></div></div>'; }).join('') + '</details></div>';
  }

  /* ---------- relatórios ---------- */
  var SUBS = [['vendas', 'Vendas'], ['financeiro', 'Financeiro'], ['trocas', 'Trocas e devoluções'], ['estoque', 'Estoque'], ['clientes', 'Clientes']];
  function relatorios() {
    var sub = S.sub || 'vendas';
    return '<div class="head"><div><h1>Relatórios</h1><p class="sub">Vendas contam a partir da confirmação do pedido.</p></div>' + periodos() + '</div>' +
      '<div class="subtabs" role="tablist">' + SUBS.map(function (x) { return '<button type="button" role="tab" data-sub="' + x[0] + '" aria-selected="' + (sub === x[0]) + '">' + x[1] + '</button>'; }).join('') + '</div>' +
      ({ vendas: relVendas, financeiro: relFin, trocas: relTrocas, estoque: relEstoque, clientes: relClientes })[sub]() +
      '<div class="card row"><span>Exportar este relatório</span><span class="sp"></span>' + expBtns(sub) + '</div>';
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

  /* ---------- clientes (CRM, no mesmo jeito da Agenda) ---------- */
  // O cliente é reconhecido pelo WhatsApp informado no pedido (ou pelo nome, nos pedidos antigos).
  function zapNorm(z) { z = String(z || '').replace(/\D/g, ''); if (z.length >= 12 && z.indexOf('55') === 0) z = z.slice(2); return z.length >= 10 ? z : ''; }
  function nomeNorm(n) { return String(n || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim(); }
  var PERFIS = { vip: ['VIP', 'vip'], recorrente: ['Recorrente', 'ok'], novo: ['Novo', 'info'], lead: ['Interessado', ''] };
  var SITUACAO = { ativo: ['Ativo', 'ok'], sumindo: ['Sumindo', 'warn'], inativo: ['Inativo', 'bad'], '': ['—', ''] };
  var SUMINDO = 45, INATIVO = 90;  // dias sem comprar
  function baseClientes() {
    var m = {}, hoje = Date.now();
    S.d.pedidos.forEach(function (p) {
      if (p.status === 'cancelado') return;
      var z = zapNorm((p.contato || {}).whatsapp), k = z ? 'z' + z : 'n' + nomeNorm(p.nome);
      var c = m[k] || (m[k] = { k: k, nome: p.nome, zap: z, pedidos: [], compras: 0, gasto: 0, primeira: 0, ultima: 0, aberto: 0, tams: {}, cats: {}, origem: p.origem || '' });
      if (z && !c.zap) c.zap = z;
      c.pedidos.push(p);
      if (VENDIDO.indexOf(p.status) < 0) { c.aberto++; return; }
      var t = new Date(p.criado).getTime();
      c.compras++; c.gasto += +p.total || 0;
      if (!c.primeira || t < c.primeira) { c.primeira = t; c.origem = p.origem || c.origem; }
      if (t > c.ultima) { c.ultima = t; c.nome = p.nome; }
      (p.itens || []).forEach(function (it) { if (it.tam) soma2(c.tams, it.tam, it.qtd); if (it.cat) soma2(c.cats, it.cat, it.qtd); });
    });
    (S.d.contatos || []).forEach(function (ct) {
      var z = zapNorm(ct.whatsapp), k = z ? 'z' + z : 'n' + nomeNorm(ct.nome);
      var c = m[k] || (m[k] = { k: k, nome: ct.nome, zap: z, pedidos: [], compras: 0, gasto: 0, primeira: 0, ultima: 0, aberto: 0, tams: {}, cats: {}, origem: '' });
      c.novidades = true; c.email = ct.email || c.email; c.contatoId = ct.id; c.cadastro = ct.criado;
    });
    var lista = Object.keys(m).map(function (k) { return m[k]; });
    var gastos = lista.filter(function (c) { return c.compras >= 2; }).map(function (c) { return c.gasto; }).sort(function (a, b) { return b - a; });
    var corte = gastos.length ? gastos[Math.max(0, Math.ceil(gastos.length * 0.1) - 1)] : Infinity;
    var catNome = {}; S.d.categorias.forEach(function (x) { catNome[x.chave] = x.nome; });
    lista.forEach(function (c) {
      c.dias = c.ultima ? Math.floor((hoje - c.ultima) / 864e5) : null;
      c.ticket = c.compras ? c.gasto / c.compras : 0;
      c.perfil = !c.compras ? 'lead' : c.compras >= 3 || (c.compras >= 2 && c.gasto >= corte) ? 'vip' : c.compras >= 2 ? 'recorrente' : 'novo';
      c.situacao = !c.compras ? '' : c.dias >= INATIVO ? 'inativo' : c.dias >= SUMINDO ? 'sumindo' : 'ativo';
      var tm = ordena(c.tams)[0], ca = ordena(c.cats)[0];
      c.prefere = [tm ? 'Tam. ' + tm[0] : '', ca ? (catNome[ca[0]] || ca[0]) : ''].filter(Boolean).join(' · ');
    });
    return lista;
  }
  // Mensagem pronta para cada momento do cliente.
  function msgCliente(c) {
    var n = String(c.nome || '').split(' ')[0], loja = S.d.nome, link = lojaUrl() + '?utm_source=whatsapp';
    var cup = (S.d.cupons || []).filter(function (x) { return cupomStatus(x)[0] === 'Ativo'; })[0], txtCup = cup ? ' Use o cupom ' + cup.codigo + ' (' + cupomTexto(cup).toLowerCase() + ').' : '';
    if (c.situacao === 'sumindo' || c.situacao === 'inativo') return 'Oi, ' + n + '! Aqui é da ' + loja + '. Sentimos sua falta! Chegaram novidades que combinam com você.' + txtCup + ' Dá uma olhada: ' + link;
    if (c.perfil === 'vip') return 'Oi, ' + n + '! Você é uma cliente especial da ' + loja + ' e queremos te mostrar as novidades antes de todo mundo.' + txtCup + ' ' + link;
    if (c.perfil === 'novo') return 'Oi, ' + n + '! Aqui é da ' + loja + '. Obrigada pela sua compra! Deu tudo certo com o seu pedido? Qualquer coisa é só chamar. ' + link;
    return 'Oi, ' + n + '! Vi que você quer receber as novidades da ' + loja + '. Dá uma olhada no que chegou:' + txtCup + ' ' + link;
  }
  function zapLink(c) { return c.zap ? 'https://wa.me/55' + c.zap + '?text=' + encodeURIComponent(msgCliente(c)) : ''; }
  function filtroClientes(lista) {
    var q = nomeNorm(S.cq), f = S.cf || 'todos';
    return lista.filter(function (c) {
      if (q && (nomeNorm(c.nome) + ' ' + c.zap + ' ' + (c.email || '')).indexOf(q) < 0) return false;
      if (f === 'todos') return true;
      if (f === 'sumindo' || f === 'inativo') return c.situacao === f;
      return c.perfil === f;
    }).sort(function (a, b) { return S.cord === 'gasto' ? b.gasto - a.gasto : S.cord === 'compras' ? b.compras - a.compras : S.cord === 'antigos' ? (b.dias || 0) - (a.dias || 0) : (b.ultima || 0) - (a.ultima || 0) || (b.compras - a.compras); });
  }
  function clientes() {
    var lista = baseClientes(), dias = S.periodo, ini = Date.now() - dias * 864e5;
    var comp = lista.filter(function (c) { return c.compras; }), rec = comp.filter(function (c) { return c.compras >= 2; });
    var novosP = comp.filter(function (c) { return c.primeira >= ini; }).length;
    var voltaramP = comp.filter(function (c) { return c.primeira < ini && c.pedidos.some(function (p) { return VENDIDO.indexOf(p.status) > -1 && new Date(p.criado).getTime() >= ini; }); }).length;
    var nCompras = comp.reduce(function (s, c) { return s + c.compras; }, 0), gasto = comp.reduce(function (s, c) { return s + c.gasto; }, 0);
    var conta = function (f) { return lista.filter(f).length; };
    var segs = [['todos', 'Todos', lista.length], ['vip', 'VIP', conta(function (c) { return c.perfil === 'vip'; })], ['recorrente', 'Recorrentes', conta(function (c) { return c.perfil === 'recorrente'; })],
      ['novo', 'Novos', conta(function (c) { return c.perfil === 'novo'; })], ['sumindo', 'Sumindo', conta(function (c) { return c.situacao === 'sumindo'; })], ['inativo', 'Inativos', conta(function (c) { return c.situacao === 'inativo'; })],
      ['lead', 'Interessados', conta(function (c) { return c.perfil === 'lead'; })]];
    var vis = filtroClientes(lista), grupo = ((S.d.loja.novidades || {}).grupoWhatsapp) || '';
    var sum = lista.filter(function (c) { return c.situacao === 'sumindo' && c.zap; }).sort(function (a, b) { return b.gasto - a.gasto; }).slice(0, 6);
    return '<div class="head"><div><h1>Clientes</h1><p class="sub">Quem compra, quem volta e quem está sumindo. O cliente é reconhecido pelo WhatsApp do pedido.</p></div>' + periodos() + '</div>' +
      '<div class="kpis">' + kpi('Clientes que compraram', num(comp.length), num(lista.length - comp.length) + (lista.length - comp.length === 1 ? ' interessado' : ' interessados'), 'users') +
        kpi('Novos no período', num(novosP), 'primeira compra nos últimos ' + dias + ' dias', 'plus') +
        kpi('Voltaram no período', num(voltaramP), 'já tinham comprado antes', 'repeat') +
        kpi('Taxa de recompra', pct(rec.length, comp.length), num(rec.length) + ' compraram 2 vezes ou mais', 'chart') +
        kpi('Frequência', comp.length ? (nCompras / comp.length).toFixed(1).replace('.', ',') : '—', 'compras por cliente', 'bag') +
        kpi('Ticket médio', brl(nCompras ? gasto / nCompras : 0), 'por compra', 'tag') +
        kpi('Valor por cliente', brl(comp.length ? gasto / comp.length : 0), 'quanto cada cliente já gastou, em média', 'star') +
        kpi('Sumindo', num(segs[4][2] + segs[5][2]), SUMINDO + '+ dias sem comprar', 'alert') + '</div>' +
      (sum.length ? '<div class="card destaque"><h2>' + ic('alert') + 'Chame de volta</h2><p class="note">Clientes que compravam e não voltam há mais de ' + SUMINDO + ' dias. O botão abre o WhatsApp com a mensagem pronta.</p><div class="volta">' +
        sum.map(function (c) { return '<div class="vc"><b>' + esc(c.nome) + '</b><small>' + c.compras + (c.compras === 1 ? ' compra' : ' compras') + ' · ' + brl(c.gasto) + ' · há ' + c.dias + ' dias</small><a class="btn sm zap" href="' + esc(zapLink(c)) + '" target="_blank" rel="noopener">' + ic('chat') + 'Chamar</a></div>'; }).join('') + '</div></div>' : '') +
      '<div class="card"><div class="tools wrap2"><div class="chips">' + segs.map(function (x) { return '<button type="button" class="chip" data-cf="' + x[0] + '" aria-pressed="' + ((S.cf || 'todos') === x[0]) + '">' + x[1] + ' <span class="cnt">' + x[2] + '</span></button>'; }).join('') + '</div></div>' +
        '<div class="tools"><input id="cq" type="search" placeholder="Buscar por nome, WhatsApp ou e-mail" value="' + esc(S.cq) + '" aria-label="Buscar clientes">' +
        '<select id="cord" aria-label="Ordenar"><option value="recentes">Compra mais recente</option><option value="gasto"' + (S.cord === 'gasto' ? ' selected' : '') + '>Quem mais gastou</option><option value="compras"' + (S.cord === 'compras' ? ' selected' : '') + '>Mais compras</option><option value="antigos"' + (S.cord === 'antigos' ? ' selected' : '') + '>Há mais tempo sem comprar</option></select>' +
        '<span class="sp"></span><button type="button" class="btn ghost sm" data-copiar-zaps>' + ic('chat') + 'Copiar WhatsApps (' + vis.filter(function (c) { return c.zap; }).length + ')</button>' + expBtns('clientes') + '</div>' +
        (vis.length ? '<div class="tbl"><table class="crm"><thead><tr><th>Cliente</th><th>Perfil</th><th class="r">Compras</th><th class="r">Total gasto</th><th class="r">Ticket</th><th>Última compra</th><th>Prefere</th><th></th></tr></thead><tbody>' + vis.slice(0, 300).map(function (c) {
          var pf = PERFIS[c.perfil], st = SITUACAO[c.situacao];
          return '<tr><td><span class="pr"><span class="av">' + esc(String(c.nome || '?').charAt(0).toUpperCase()) + '</span><span><b>' + esc(c.nome) + '</b><small class="mono">' + esc(c.zap ? fmtZap(c.zap) : c.email || 'sem WhatsApp') + (c.novidades ? ' · recebe novidades' : '') + '</small></span></span></td>' +
            '<td><span class="pill ' + pf[1] + '">' + pf[0] + '</span>' + (c.situacao && c.situacao !== 'ativo' ? ' <span class="pill ' + st[1] + '">' + st[0] + '</span>' : '') + '</td>' +
            '<td class="r num">' + c.compras + (c.aberto ? ' <small class="note">+' + c.aberto + ' em aberto</small>' : '') + '</td><td class="r num">' + brl(c.gasto) + '</td><td class="r num">' + (c.compras ? brl(c.ticket) : '—') + '</td>' +
            '<td>' + (c.ultima ? dataBr(c.ultima) + ' <small class="note">há ' + c.dias + (c.dias === 1 ? ' dia' : ' dias') + '</small>' : c.cadastro ? '<small class="note">cadastro ' + dataBr(c.cadastro) + '</small>' : '—') + '</td>' +
            '<td><small>' + esc(c.prefere || '—') + '</small></td>' +
            '<td class="r nowrap">' + (c.zap ? '<a class="btn ghost sm zap" href="' + esc(zapLink(c)) + '" target="_blank" rel="noopener" aria-label="WhatsApp de ' + esc(c.nome) + '">' + ic('chat') + '</a>' : '') + '<button type="button" class="btn ghost sm" data-ver-cli="' + esc(c.k) + '">Ver</button></td></tr>';
        }).join('') + '</tbody></table></div>' : '<p class="empty">Nenhum cliente neste filtro.</p>') + '</div>' +
      '<details class="card"><summary><h2>Cadastros de “Receba as novidades” (' + S.d.contatos.length + ')</h2></summary>' +
        '<div class="card row flat"><span>Grupo de promoções no WhatsApp: ' + (grupo ? '<b>ativo</b>' : '<b>sem link</b>') + '</span><button type="button" class="btn ghost sm" data-tab="loja">' + (grupo ? 'Trocar link' : 'Colocar link') + '</button>' + expBtns('contatos') + '</div>' +
        (S.d.contatos.length ? '<div class="tbl"><table><thead><tr><th>Nome</th><th>WhatsApp</th><th>E-mail</th><th>Cadastro</th><th></th></tr></thead><tbody>' + S.d.contatos.map(function (c) {
          return '<tr><td>' + esc(c.nome) + '</td><td>' + (c.whatsapp ? '<a href="https://wa.me/' + esc(c.whatsapp.length <= 11 ? '55' + c.whatsapp : c.whatsapp) + '" target="_blank" rel="noopener" class="num">' + esc(c.whatsapp) + '</a>' : '—') + '</td><td>' + esc(c.email || '—') + '</td><td>' + dataBr(c.criado) + '</td>' +
            '<td class="r"><button type="button" class="btn ghost sm danger" data-delcont="' + c.id + '">Excluir</button></td></tr>'; }).join('') + '</tbody></table></div>' : '<p class="empty">Nenhum cadastro ainda.</p>') + '</details>' +
      '<p class="note">Perfis: <b>Novo</b> 1 compra · <b>Recorrente</b> 2 compras · <b>VIP</b> 3 compras ou mais (ou entre os que mais gastam) · <b>Interessado</b> cadastrou ou pediu, mas ainda não comprou. <b>Sumindo</b> ' + SUMINDO + ' a ' + (INATIVO - 1) + ' dias sem comprar · <b>Inativo</b> ' + INATIVO + ' dias ou mais.</p>';
  }
  function fmtZap(z) { return z.length === 11 ? '(' + z.slice(0, 2) + ') ' + z.slice(2, 7) + '-' + z.slice(7) : z.length === 10 ? '(' + z.slice(0, 2) + ') ' + z.slice(2, 6) + '-' + z.slice(6) : z; }
  // Ficha do cliente: compras, preferências e mensagem pronta.
  function verCliente(k) {
    var c = baseClientes().filter(function (x) { return x.k === k; })[0]; if (!c) return;
    var pf = PERFIS[c.perfil], st = SITUACAO[c.situacao];
    dlg.innerHTML = '<div class="sheet"><header><h2>' + esc(c.nome) + '</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      '<p><span class="pill ' + pf[1] + '">' + pf[0] + '</span> ' + (c.situacao ? '<span class="pill ' + st[1] + '">' + st[0] + '</span>' : '') + (c.novidades ? ' <span class="pill">Recebe novidades</span>' : '') + '</p>' +
      '<div class="kpis k3">' + kpi('Compras', num(c.compras)) + kpi('Total gasto', brl(c.gasto)) + kpi('Ticket médio', c.compras ? brl(c.ticket) : '—') + '</div>' +
      '<p class="note">' + [c.zap ? 'WhatsApp ' + fmtZap(c.zap) : '', c.email || '', c.primeira ? 'Cliente desde ' + dataBr(c.primeira) : '', c.origem ? 'Chegou pelo ' + (ORIGENS[c.origem] || c.origem) : '', c.prefere ? 'Prefere ' + c.prefere : ''].filter(Boolean).map(esc).join(' · ') + '</p>' +
      (c.zap ? '<label class="field"><span>Mensagem pronta</span><textarea id="cli_msg" rows="3">' + esc(msgCliente(c)) + '</textarea></label><a class="btn zap" id="cli_zap" href="' + esc(zapLink(c)) + '" target="_blank" rel="noopener">' + ic('chat') + 'Enviar no WhatsApp</a>' : '') +
      '<h3>Pedidos</h3>' + (c.pedidos.length ? '<div class="tbl"><table><thead><tr><th>Pedido</th><th>Data</th><th>Situação</th><th class="r">Total</th><th>Itens</th></tr></thead><tbody>' + c.pedidos.slice().sort(function (a, b) { return a.criado < b.criado ? 1 : -1; }).map(function (p) {
        return '<tr><td class="num">#' + p.numero + '</td><td>' + dataBr(p.criado) + '</td><td>' + stPill(p.status) + '</td><td class="r num">' + brl(p.total) + '</td><td><small>' + esc((p.itens || []).map(function (it) { return it.qtd + '× ' + it.nome + (it.tam ? ' ' + it.tam : ''); }).join(', ')) + '</small></td></tr>'; }).join('') + '</tbody></table></div>' : '<p class="empty">Ainda não comprou.</p>') +
      '</div></div>';
    dlg.showModal();
  }

  /* ---------- exportar: Excel (.xlsx) e PDF com cabeçalho e rodapé ---------- */
  function expBtns(tipo) { return '<span class="exp"><button type="button" class="btn ghost sm" data-exp="' + tipo + '" data-fmt="xlsx">' + ic('down') + 'Excel</button><button type="button" class="btn ghost sm" data-exp="' + tipo + '" data-fmt="pdf">' + ic('down') + 'PDF</button></span>'; }
  function dataX(iso, hora) { var d = new Date(iso); return d.toLocaleDateString('pt-BR') + (hora ? ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : ''); }
  function dadosExport(tipo) {
    var dias = S.periodo, per = 'Últimos ' + dias + ' dias';
    if (tipo === 'vendas') return { titulo: 'Relatório de vendas', periodo: per, cols: ['Data', 'Pedido', 'Produto', 'Código', 'Cor', 'Tamanho', 'Qtd', 'Preço', 'Total', 'Origem'], tipos: 'ttttttnmmt',
      linhas: itensVendidos(dias).map(function (x) { return [dataX(x.p.criado, 1), '#' + x.p.numero, x.it.nome, x.it.sku, x.it.cor, x.it.tam, x.it.qtd, +x.it.preco, x.it.qtd * x.it.preco, ORIGENS[x.p.origem || '']]; }) };
    if (tipo === 'financeiro' || tipo === 'pedidos') return { titulo: tipo === 'pedidos' ? 'Pedidos' : 'Relatório financeiro', periodo: per, cols: ['Pedido', 'Data', 'Situação', 'Cliente', 'Entrega', 'Pagamento', 'Subtotal', 'Cupom', 'Desc. cupom', 'Desc. Pix', 'Total'], tipos: 'ttttttmtmmm',
      linhas: noPeriodo(S.d.pedidos, dias).map(function (p) { return ['#' + p.numero, dataX(p.criado, 1), p.status, p.nome, p.entrega, p.pagamento, +p.subtotal, p.cupom || '', +p.cupom_desconto || 0, +p.desconto || 0, +p.total]; }) };
    if (tipo === 'trocas') return { titulo: 'Trocas e devoluções', periodo: per, cols: ['Data', 'Pedido', 'Produto', 'Tipo', 'De', 'Para', 'Qtd', 'Motivo', 'Devolvido'], tipos: 'ttttttntm',
      linhas: noPeriodo(S.d.trocas, dias).map(function (t) { return [dataX(t.criado), t.pedido_numero ? '#' + t.pedido_numero : '', t.produto_nome, t.tipo, [t.de_cor, t.de_tam].filter(Boolean).join(' '), [t.para_cor, t.para_tam].filter(Boolean).join(' '), t.qtd, MOTIVOS[t.motivo] || '', +t.valor || 0]; }) };
    if (tipo === 'estoque') { var l = []; S.d.produtos.forEach(function (p) { for (var k in p.estoque) { var c = k.split('|'); l.push([p.nome, p.sku, c[0], c[1], +p.estoque[k], +p.preco, p.estoque[k] * p.preco]); } });
      return { titulo: 'Estoque', periodo: 'Posição atual', cols: ['Produto', 'Código', 'Cor', 'Tamanho', 'Estoque', 'Preço', 'Valor em estoque'], tipos: 'ttttnmm', linhas: l }; }
    if (tipo === 'movimentos') return { titulo: 'Movimentos de estoque', periodo: per, cols: ['Quando', 'Produto', 'Variação', 'Mudança', 'Saldo', 'Motivo'], tipos: 'tttnnt',
      linhas: noPeriodo(S.d.movimentos, dias, 0, 'em').map(function (m) { return [dataX(m.em, 1), m.produto_nome, [m.cor, m.tamanho].filter(Boolean).join(' · '), +m.delta, m.saldo == null ? '' : +m.saldo, m.motivo]; }) };
    if (tipo === 'contatos') return { titulo: 'Cadastros de novidades', periodo: 'Todos', cols: ['Nome', 'WhatsApp', 'E-mail', 'Cadastro'], tipos: 'tttt', linhas: S.d.contatos.map(function (c) { return [c.nome, c.whatsapp, c.email, dataX(c.criado)]; }) };
    var f = filtroClientes(baseClientes()), seg = (S.cf && S.cf !== 'todos') ? ' · ' + ({ vip: 'VIP', recorrente: 'Recorrentes', novo: 'Novos', sumindo: 'Sumindo', inativo: 'Inativos', lead: 'Interessados' })[S.cf] : '';
    return { titulo: 'Clientes' + seg, periodo: 'Posição atual', cols: ['Cliente', 'WhatsApp', 'E-mail', 'Perfil', 'Situação', 'Compras', 'Total gasto', 'Ticket médio', 'Última compra', 'Dias sem comprar', 'Prefere'], tipos: 'tttttnmmtnt',
      linhas: f.map(function (c) { return [c.nome, c.zap ? fmtZap(c.zap) : '', c.email || '', PERFIS[c.perfil][0], SITUACAO[c.situacao][0], c.compras, c.gasto, c.ticket, c.ultima ? dataX(c.ultima) : '', c.dias == null ? '' : c.dias, c.prefere]; }) };
  }
  function exportar(tipo, fmt) {
    var d = dadosExport(tipo); if (!d.linhas.length) return toast('Nada para exportar neste filtro.');
    var nome = (tipo + '-' + S.slug + '-' + dia(Date.now())).replace(/[^a-z0-9-]/gi, '');
    if (fmt === 'pdf') return pdf(d);
    baixar(nome + '.xlsx', xlsx(d), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  }
  function baixar(nome, dados, tipo) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([dados], { type: tipo })); a.download = nome; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  // Planilha .xlsx de verdade (zip sem compressão): cabeçalho em negrito, números como número e R$ formatado.
  function xlsx(d) {
    function x(v) { return String(v == null ? '' : v).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, ''); }
    function col(i) { var s = ''; i++; while (i) { var m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; }
    function cel(v, r, c, est) {
      var ref = col(c) + r, t = d.tipos ? d.tipos.charAt(c) : 't';
      if (r >= I && (t === 'n' || t === 'm') && v !== '' && v != null && isFinite(+v)) return '<c r="' + ref + '" s="' + (t === 'm' ? 3 : 0) + '"><v>' + (t === 'm' ? Math.round(v * 100) / 100 : +v) + '</v></c>';
      return '<c r="' + ref + '" t="inlineStr"' + (est ? ' s="' + est + '"' : '') + '><is><t xml:space="preserve">' + x(v) + '</t></is></c>';
    }
    // Com d.ajuda: linha 1 = colunas (obrigatórias na cor da loja), linha 2 = explicação, dados a partir da linha 3.
    var H = d.ajuda ? 1 : 3, I = d.ajuda ? 3 : 4, U = Math.max(I - 1, d.linhas.length + I - 1);
    var larg = d.cols.map(function (h, i) { return Math.min(50, Math.max(String(h).length, d.ajuda ? Math.min(28, String(d.ajuda[i] || '').length) : 0, d.linhas.reduce(function (m, l) { return Math.max(m, String(l[i] == null ? '' : l[i]).length); }, 0)) + 3); });
    var rows = (d.ajuda ? '<row r="1" ht="22" customHeight="1">' + d.cols.map(function (h, i) { return cel(h, 1, i, d.obrig && d.obrig[i] ? 1 : 5); }).join('') + '</row>' +
        '<row r="2" ht="62" customHeight="1">' + d.ajuda.map(function (a, i) { return cel(a, 2, i, d.obrig && d.obrig[i] ? 6 : 4); }).join('') + '</row>' :
      '<row r="1">' + cel(S.d.nome + ' · ' + d.titulo, 1, 0, 2) + '</row><row r="2">' + cel(d.periodo + ' · gerado em ' + dataX(Date.now(), 1), 2, 0) + '</row>' +
      '<row r="3">' + d.cols.map(function (h, i) { return cel(h, 3, i, 1); }).join('') + '</row>') +
      d.linhas.map(function (l, ri) { return '<row r="' + (ri + I) + '">' + l.map(function (v, i) { return cel(v, ri + I, i); }).join('') + '</row>'; }).join('');
    var sheet = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="' + (I - 1) + '" topLeftCell="A' + I + '" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols>' +
      larg.map(function (w, i) { return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>'; }).join('') + '</cols><sheetData>' + rows + '</sheetData><autoFilter ref="A' + H + ':' + col(d.cols.length - 1) + U + '"/></worksheet>';
    var styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="&quot;R$&quot; #,##0.00"/></numFmts>' +
      '<fonts count="5"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font><font><b/><sz val="14"/><name val="Calibri"/></font><font><i/><sz val="10"/><color rgb="FF5B5368"/><name val="Calibri"/></font><font><b/><sz val="10"/><color rgb="FF9F1239"/><name val="Calibri"/></font></fonts>' +
      '<fills count="5"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF' + cor((S.d.loja.cores || {}).p1, '#1E1630').slice(1).toUpperCase() + '"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFF7F3EC"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF6B6478"/></patternFill></fill></fills>' +
      '<borders count="1"><border/></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="7"><xf/><xf fontId="1" fillId="2" applyFont="1" applyFill="1"/><xf fontId="2" applyFont="1"/><xf numFmtId="164" applyNumberFormat="1"/><xf fontId="3" fillId="3" applyFont="1" applyFill="1" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf><xf fontId="1" fillId="4" applyFont="1" applyFill="1"/><xf fontId="4" fillId="3" applyFont="1" applyFill="1" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>';
    var arqs = [
      ['[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>'],
      ['_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'],
      ['xl/workbook.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="' + x(d.titulo.slice(0, 31).replace(/[\\\/?*\[\]:]/g, ' ')) + '" sheetId="1" r:id="rId1"/></sheets><definedNames><definedName name="_xlnm._FilterDatabase" localSheetId="0" hidden="1">\'' + x(d.titulo.slice(0, 31).replace(/[\\\/?*\[\]:]/g, ' ')) + '\'!$A$' + H + ':$' + col(d.cols.length - 1) + '$' + U + '</definedName></definedNames></workbook>'],
      ['xl/_rels/workbook.xml.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'],
      ['xl/worksheets/sheet1.xml', sheet], ['xl/styles.xml', styles]];
    return zip(arqs);
  }
  // Zip mínimo (método "guardado", sem compressão), suficiente para o Excel abrir.
  var CRC = (function () { var t = []; for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(b) { var c = 0xFFFFFFFF; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function zip(arqs) {
    var enc = new TextEncoder(), partes = [], central = [], off = 0;
    function u16(v) { return [v & 255, (v >>> 8) & 255]; }
    function u32(v) { return [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255]; }
    arqs.forEach(function (a) {
      var nome = enc.encode(a[0]), dados = enc.encode(a[1]), crc = crc32(dados);
      var loc = [].concat(u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(dados.length), u32(dados.length), u16(nome.length), u16(0));
      partes.push(new Uint8Array(loc), nome, dados);
      central.push(new Uint8Array([].concat(u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(dados.length), u32(dados.length), u16(nome.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(off))), nome);
      off += loc.length + nome.length + dados.length;
    });
    var tam = central.reduce(function (s, b) { return s + b.length; }, 0);
    var fim = new Uint8Array([].concat(u32(0x06054b50), u16(0), u16(0), u16(arqs.length), u16(arqs.length), u32(tam), u32(off), u16(0)));
    return new Blob(partes.concat(central, [fim]));
  }
  // PDF: abre a impressão com cabeçalho (logo, loja, título e período) e rodapé (geração e página); o "Salvar como PDF" gera o arquivo.
  function pdf(d) {
    var L = S.d.loja || {}, pc = L.parceiro || {}, el = document.getElementById('imprimir');
    if (el) el.remove();
    el = document.createElement('div'); el.id = 'imprimir';
    var tot = d.cols.map(function (c, i) { var t = d.tipos ? d.tipos.charAt(i) : 't'; return t === 'm' ? brl(d.linhas.reduce(function (s, l) { return s + (+l[i] || 0); }, 0)) : t === 'n' && !/dias|saldo/i.test(c) ? num(d.linhas.reduce(function (s, l) { return s + (+l[i] || 0); }, 0)) : ''; });
    var temTot = tot.some(Boolean);
    el.innerHTML = '<table class="pdoc"><thead><tr><td colspan="' + d.cols.length + '"><div class="phead">' + (url(L.logo) ? '<img src="' + esc(url(L.logo)) + '" alt="">' : '<span class="plog">' + esc(String(S.d.nome || '').charAt(0)) + '</span>') +
      '<div><b>' + esc(S.d.nome) + '</b><small>' + esc([L.cidade, L.telefone, L.email].filter(Boolean).join(' · ')) + '</small></div><div class="pt"><b>' + esc(d.titulo) + '</b><small>' + esc(d.periodo) + ' · ' + num(d.linhas.length) + ' linhas</small></div></div></td></tr>' +
      '<tr>' + d.cols.map(function (c, i) { var t = d.tipos ? d.tipos.charAt(i) : 't'; return '<th' + (t !== 't' ? ' class="r"' : '') + '>' + esc(c) + '</th>'; }).join('') + '</tr></thead>' +
      '<tbody>' + d.linhas.map(function (l) { return '<tr>' + l.map(function (v, i) { var t = d.tipos ? d.tipos.charAt(i) : 't'; return '<td' + (t !== 't' ? ' class="r"' : '') + '>' + esc(t === 'm' && v !== '' ? brl(v) : t === 'n' && v !== '' ? num(v) : v) + '</td>'; }).join('') + '</tr>'; }).join('') +
      (temTot ? '<tr class="ptot">' + tot.map(function (v, i) { return '<td' + (v ? ' class="r"' : '') + '>' + (i === 0 && !v ? 'Total' : esc(v)) + '</td>'; }).join('') + '</tr>' : '') + '</tbody>' +
      '<tfoot><tr><td colspan="' + d.cols.length + '"><div class="pfoot"><span>Gerado em ' + esc(dataX(Date.now(), 1)) + ' · Painel do catálogo' + (pc.nome ? ' · ' + esc(pc.nome) : ' · Nour') + '</span><span>' + esc(S.d.nome) + '</span></div></td></tr></tfoot></table>';
    document.body.appendChild(el);
    document.documentElement.classList.add('imprimindo');
    var fim = function () { document.documentElement.classList.remove('imprimindo'); el.remove(); window.removeEventListener('afterprint', fim); };
    window.addEventListener('afterprint', fim);
    setTimeout(function () { window.print(); }, 50);
  }

  /* ---------- planilha de produtos: baixar, modelo vazio e subir (tudo no navegador) ---------- */
  // Uma linha por variação (cor + tamanho). O ID liga a linha ao produto já cadastrado.
  var PCOLS = [['ID', 'id', 'n', 0, 'NÃO MEXA. Vazio = produto novo. Preenchido = atualiza o produto.'], ['Código', 'sku', 't', 0, 'Opcional. Ex.: BL-001. Linhas com o mesmo código viram um produto só.'],
    ['Nome', 'nome', 't', 1, 'OBRIGATÓRIO. Ex.: Blusa de linho. Repita o nome em cada linha de cor/tamanho.'], ['Categoria', 'categoria', 't', 0, 'Opcional. Ex.: Blusas. Se não existir, é criada.'],
    ['Marca', 'marca', 't', 0, 'Opcional.'], ['Preço', 'preco', 'm', 1, 'OBRIGATÓRIO. Ex.: 89,90'], ['Preço antes (de)', 'preco_de', 'm', 0, 'Opcional. Preço riscado, maior que o Preço. Ex.: 119,90'],
    ['Cor', 'cor', 't', 0, 'Opcional. Uma linha para cada cor. Sem cores, deixe vazio.'], ['Código da cor', 'hex', 't', 0, 'Opcional. Cor da bolinha. Ex.: #1D1F23'],
    ['Tamanho', 'tam', 't', 0, 'Opcional. Uma linha para cada tamanho. Ex.: P, M, G, 38'], ['Estoque', 'est', 'n', 0, 'Quantidade dessa cor e tamanho. Vazio = 0.'],
    ['Na loja', 'ativo', 't', 0, 'sim ou não. Vazio = sim.'], ['Destaque', 'destaque', 't', 0, 'sim ou não. Aparece na vitrine de destaques.'],
    ['Descrição', 'descricao', 't', 0, 'Opcional. Texto da página do produto.'], ['Composição', 'composicao', 't', 0, 'Opcional. Ex.: 100% algodão'],
    ['Foto 1', 'f0', 't', 0, 'Opcional. Link que começa com https://. Vazio mantém as fotos atuais.'], ['Foto 2', 'f1', 't', 0, 'Opcional.'], ['Foto 3', 'f2', 't', 0, 'Opcional.'], ['Foto 4', 'f3', 't', 0, 'Opcional.'], ['Foto 5', 'f4', 't', 0, 'Opcional.']];
  var PALIAS = { id: 'id', codigo: 'sku', sku: 'sku', referencia: 'sku', nome: 'nome', produto: 'nome', 'nome do produto': 'nome', categoria: 'categoria', marca: 'marca', preco: 'preco', 'preco de venda': 'preco', valor: 'preco',
    'preco antes (de)': 'preco_de', 'preco antes': 'preco_de', 'preco de': 'preco_de', de: 'preco_de', cor: 'cor', 'codigo da cor': 'hex', hex: 'hex', tamanho: 'tam', tam: 'tam', estoque: 'est', quantidade: 'est', qtd: 'est',
    'na loja': 'ativo', ativo: 'ativo', visivel: 'ativo', destaque: 'destaque', descricao: 'descricao', composicao: 'composicao', 'foto 1': 'f0', 'foto 2': 'f1', 'foto 3': 'f2', 'foto 4': 'f3', 'foto 5': 'f4', foto: 'f0' };
  // Primeiro bloco da tela de produtos: importar em 3 passos.
  function planilhaBloco() {
    var aberto = !S.d.produtos.length || S.planAberto;
    return '<details class="card importar"' + (aberto ? ' open' : '') + ' data-plan-det><summary><h2>' + ic('down') + 'Importar produtos pela planilha</h2><small class="note">Cadastre ou atualize muitos produtos de uma vez</small></summary>' +
      '<ol class="passos">' +
        '<li><b>Baixe o modelo</b><span class="note">Planilha do Excel com as colunas na linha 1 e a explicação de cada uma na linha 2.</span><button type="button" class="btn ghost sm" data-plan="modelo">' + ic('down') + 'Baixar modelo</button></li>' +
        '<li><b>Preencha a partir da linha 3</b><span class="note">Uma linha para cada cor e tamanho. Só <b>Nome</b> e <b>Preço</b> são obrigatórios.</span><button type="button" class="btn ghost sm" data-plan-ajuda>Como preencher</button></li>' +
        '<li><b>Suba a planilha</b><span class="note">Você confere a prévia antes de gravar. Excel (.xlsx) ou CSV.</span><label class="btn sm">' + ic('plus') + 'Subir planilha<input type="file" id="plan_arq" accept=".xlsx,.csv,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" hidden></label></li>' +
      '</ol>' + (S.d.produtos.length ? '<p class="note">Para editar o que já existe: <button type="button" class="link" data-plan="meus">baixe seus ' + S.d.produtos.length + ' produtos</button>, altere e suba de novo. A coluna ID liga cada linha ao produto.</p>' : '') + '</details>';
  }
  function planilhaAjuda() {
    dlg.innerHTML = '<div class="sheet"><header><h2>Como preencher a planilha</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
      '<p class="note">Linha 1: nomes das colunas (não mude). Linha 2: explicação (pode deixar). Seus produtos começam na <b>linha 3</b>. Colunas em destaque são obrigatórias.</p>' +
      '<div class="tbl"><table><thead><tr><th>Coluna</th><th></th><th>Como preencher</th></tr></thead><tbody>' + PCOLS.filter(function (c) { return !/^f[1-4]$/.test(c[1]); }).map(function (c) {
        return '<tr><td><b>' + esc(c[1] === 'f0' ? 'Foto 1 a Foto 5' : c[0]) + '</b></td><td>' + (c[3] ? '<span class="pill bad">Obrigatório</span>' : c[1] === 'id' ? '<span class="pill warn">Não mexa</span>' : '<span class="pill">Opcional</span>') + '</td><td class="note">' + esc(c[4].replace(/^(OBRIGATÓRIO|Opcional|NÃO MEXA)\.\s*/, '')) + '</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<h3>Exemplo: uma blusa em 2 cores e 2 tamanhos</h3><div class="tbl"><table class="ex"><thead><tr><th>Código</th><th>Nome</th><th>Preço</th><th>Cor</th><th>Tamanho</th><th>Estoque</th></tr></thead><tbody>' +
        [['BL-001', 'Blusa de linho', '89,90', 'Off white', 'P', 3], ['BL-001', 'Blusa de linho', '89,90', 'Off white', 'M', 5], ['BL-001', 'Blusa de linho', '89,90', 'Preto', 'P', 2], ['BL-001', 'Blusa de linho', '89,90', 'Preto', 'M', 4], ['BO-010', 'Bolsa tiracolo', '149,90', '', '', 4]]
          .map(function (l) { return '<tr>' + l.map(function (v) { return '<td>' + esc(v) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' +
      '<p class="note">A bolsa não tem grade: Cor e Tamanho ficam vazios. Até 1000 produtos por planilha. Nada é gravado antes de você conferir a prévia.</p></div>' +
      '<footer><span class="sp"></span><button type="button" class="btn ghost" data-plan="modelo">' + ic('down') + 'Baixar modelo</button><button type="button" class="btn" data-fechar>Entendi</button></footer></div>';
    dlg.showModal();
  }
  function planilhaBaixar(vazio) {
    var cat = {}; S.d.categorias.forEach(function (c) { cat[c.chave] = c.nome; });
    var linhas = [];
    if (!vazio) {
      S.d.produtos.forEach(function (p) {
        var cores = p.cores.length ? p.cores : [['', '']], tams = p.tamanhos.length ? p.tamanhos : [''], f = (p.fotos || []).concat(['', '', '', '', '']);
        cores.forEach(function (c) { tams.forEach(function (t) {
          linhas.push([p.id, p.sku || '', p.nome, cat[p.categoria] || p.categoria || '', p.marca || '', +p.preco, p.preco_de ? +p.preco_de : '', c[0] || '', c[1] || '', t || '',
            +(p.estoque[(c[0] || '') + '|' + (t || '')] || 0), p.ativo ? 'sim' : 'não', p.destaque ? 'sim' : 'não', p.descricao || '', p.composicao || '', f[0], f[1], f[2], f[3], f[4]]);
        }); });
      });
    }
    var d = { titulo: 'Produtos', cols: PCOLS.map(function (c) { return c[0]; }), tipos: PCOLS.map(function (c) { return c[2]; }).join(''), linhas: linhas,
      ajuda: PCOLS.map(function (c) { return c[4]; }), obrig: PCOLS.map(function (c) { return !!c[3]; }) };
    baixar((vazio ? 'modelo-produtos' : 'produtos-' + S.slug + '-' + dia(Date.now())) + '.xlsx', xlsx(d), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  }
  // Lê o .xlsx sem biblioteca: abre o zip (DecompressionStream) e o XML da primeira aba.
  function lerZip(buf) {
    var v = new DataView(buf), u8 = new Uint8Array(buf), fim = -1;
    for (var i = u8.length - 22; i >= Math.max(0, u8.length - 70000); i--) if (v.getUint32(i, true) === 0x06054b50) { fim = i; break; }
    if (fim < 0) return Promise.reject(new Error('arquivo'));
    var n = v.getUint16(fim + 10, true), off = v.getUint32(fim + 16, true), arqs = {}, dec = new TextDecoder();
    for (var k = 0; k < n; k++) {
      var met = v.getUint16(off + 10, true), tam = v.getUint32(off + 20, true), ln = v.getUint16(off + 28, true), lx = v.getUint16(off + 30, true), lc = v.getUint16(off + 32, true), loc = v.getUint32(off + 42, true);
      var nome = dec.decode(u8.subarray(off + 46, off + 46 + ln)), ini = loc + 30 + v.getUint16(loc + 26, true) + v.getUint16(loc + 28, true);
      arqs[nome] = { met: met, dados: u8.subarray(ini, ini + tam) };
      off += 46 + ln + lx + lc;
    }
    function texto(nome) {
      var a = arqs[nome]; if (!a) return Promise.resolve('');
      if (a.met === 0) return Promise.resolve(dec.decode(a.dados));
      if (a.met !== 8 || typeof DecompressionStream === 'undefined') return Promise.reject(new Error('arquivo'));
      return new Response(new Blob([a.dados]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).text();
    }
    var aba = Object.keys(arqs).filter(function (x) { return /^xl\/worksheets\/sheet\d+\.xml$/.test(x); }).sort(function (a, b) { return parseInt(a.replace(/\D/g, ''), 10) - parseInt(b.replace(/\D/g, ''), 10); })[0];
    if (!aba) return Promise.reject(new Error('arquivo'));
    return Promise.all([texto('xl/sharedStrings.xml'), texto(aba)]);
  }
  function lerXlsx(buf) {
    return lerZip(buf).then(function (r) {
      var px = new DOMParser(), ss = [], linhas = [];
      if (r[0]) [].forEach.call(px.parseFromString(r[0], 'application/xml').getElementsByTagName('si'), function (si) { ss.push([].map.call(si.getElementsByTagName('t'), function (t) { return t.textContent; }).join('')); });
      [].forEach.call(px.parseFromString(r[1], 'application/xml').getElementsByTagName('row'), function (row) {
        var l = [];
        [].forEach.call(row.getElementsByTagName('c'), function (c) {
          var ref = c.getAttribute('r') || '', col = 0, m = ref.match(/^[A-Z]+/);
          if (m) for (var i = 0; i < m[0].length; i++) col = col * 26 + m[0].charCodeAt(i) - 64; else col = l.length + 1;
          var t = c.getAttribute('t'), vEl = c.getElementsByTagName('v')[0], val = vEl ? vEl.textContent : '';
          if (t === 's') val = ss[+val] || ''; else if (t === 'inlineStr') val = [].map.call(c.getElementsByTagName('t'), function (x) { return x.textContent; }).join(''); else if (t === 'b') val = val === '1' ? 'sim' : 'não';
          l[col - 1] = val;
        });
        linhas[(+row.getAttribute('r') || linhas.length + 1) - 1] = l;
      });
      return linhas.map(function (l) { return l || []; });
    });
  }
  function lerCsv(txt) {
    txt = txt.replace(/^﻿/, '');
    var sep = (txt.split('\n')[0].match(/;/g) || []).length >= (txt.split('\n')[0].match(/,/g) || []).length ? ';' : ',', out = [], l = [], c = '', q = false;
    for (var i = 0; i < txt.length; i++) {
      var ch = txt[i];
      if (q) { if (ch === '"') { if (txt[i + 1] === '"') { c += '"'; i++; } else q = false; } else c += ch; }
      else if (ch === '"') q = true; else if (ch === sep) { l.push(c); c = ''; } else if (ch === '\n') { l.push(c.replace(/\r$/, '')); out.push(l); l = []; c = ''; } else c += ch;
    }
    if (c || l.length) { l.push(c); out.push(l); }
    return out;
  }
  function normTxt(s) { return String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim(); }
  function numBr(v) {
    if (typeof v === 'number') return v; v = String(v == null ? '' : v).replace(/R\$|\s/g, '');
    if (!v) return null;
    if (/^-?\d{1,3}(\.\d{3})*(,\d+)?$/.test(v) || /^-?\d+,\d+$/.test(v)) v = v.replace(/\./g, '').replace(',', '.');
    return /^-?\d+(\.\d+)?$/.test(v) ? +v : NaN;
  }
  function simNao(v, padrao) { v = normTxt(v); if (!v) return padrao; return /^(sim|s|x|1|true|verdadeiro|yes)$/.test(v); }
  // Junta as linhas em produtos e confere tudo antes de gravar.
  function planilhaMontar(linhas) {
    var hi = -1, mapa = {};
    for (var i = 0; i < Math.min(linhas.length, 15); i++) { if ((linhas[i] || []).some(function (c) { return normTxt(c) === 'nome' || normTxt(c) === 'produto'; })) { hi = i; break; } }
    if (hi < 0) return { erro: 'Não achei a linha de cabeçalho (precisa ter a coluna "Nome"). Use o modelo da Nour.' };
    linhas[hi].forEach(function (h, j) { var k = PALIAS[normTxt(h)]; if (k && !(k in mapa)) mapa[k] = j; });
    var porId = {}, porSku = {}, catPorNome = {}, novasCat = {}, grupos = {}, ordem = [], erros = [];
    S.d.produtos.forEach(function (p) { porId[p.id] = p; if (p.sku) porSku[String(p.sku).toUpperCase()] = p; });
    S.d.categorias.forEach(function (c) { catPorNome[normTxt(c.nome)] = c.chave; catPorNome[normTxt(c.chave)] = c.chave; });
    linhas.slice(hi + 1).forEach(function (l, j) {
      var nl = hi + j + 2, g = function (k) { return k in mapa ? String(l[mapa[k]] == null ? '' : l[mapa[k]]).trim() : ''; };
      if (!PCOLS.some(function (c) { return g(c[1]); })) return;
      if (/^(obrigatorio|opcional|nao mexa)/.test(normTxt(g('id') || g('nome') || g('preco')))) return;  // linha 2 do modelo (explicação)
      var id = g('id'), sku = g('sku').toUpperCase().replace(/[^A-Z0-9-]/g, ''), nome = g('nome');
      if (id && !porId[id]) { erros.push('Linha ' + nl + ': ID ' + id + ' não existe nesta loja (apague o ID para criar como novo).'); return; }
      var base = id ? porId[id] : sku && porSku[sku] ? porSku[sku] : null, chave = base ? 'p' + base.id : sku ? 's' + sku : 'n' + normTxt(nome);
      if (!base && !nome) { erros.push('Linha ' + nl + ': falta o nome do produto.'); return; }
      var gr = grupos[chave];
      if (!gr) { gr = grupos[chave] = { base: base, linhas: [], primeira: nl }; ordem.push(chave); }
      gr.linhas.push({ nl: nl, g: g, sku: sku });
    });
    var produtos = ordem.map(function (k) {
      var gr = grupos[k], b = gr.base, p = b ? JSON.parse(JSON.stringify(b)) : { nome: '', sku: '', marca: '', categoria: '', preco: 0, preco_de: null, desenho: 'caixa', fotos: [], descricao: '', composicao: '', destaque: false, oferta: false, selo: '', ativo: true, cores: [], tamanhos: [], estoque: {} };
      var prim = function (key) { for (var i = 0; i < gr.linhas.length; i++) { var v = gr.linhas[i].g(key); if (v !== '') return v; } return ''; }, onde = 'Linha ' + gr.primeira + ' (' + (prim('nome') || p.nome) + ')';
      if (prim('nome')) p.nome = prim('nome').slice(0, 120);
      if (prim('sku')) p.sku = gr.linhas[0].sku || prim('sku');
      if (prim('marca')) p.marca = prim('marca');
      if (prim('descricao')) p.descricao = prim('descricao');
      if (prim('composicao')) p.composicao = prim('composicao');
      var pr = numBr(prim('preco')); if (pr === null) { if (!b) erros.push(onde + ': falta o preço.'); } else if (!(pr >= 0)) erros.push(onde + ': preço "' + prim('preco') + '" não é um número.'); else p.preco = pr;
      var de = numBr(prim('preco_de')); if (de !== null) { if (!(de >= 0)) erros.push(onde + ': preço antes "' + prim('preco_de') + '" não é um número.'); else p.preco_de = de > p.preco ? de : null; } else if ('preco_de' in mapa) p.preco_de = null;
      if ('ativo' in mapa) p.ativo = simNao(prim('ativo'), true);
      if ('destaque' in mapa) p.destaque = simNao(prim('destaque'), false);
      var cn = prim('categoria'); if (cn) { var ck = catPorNome[normTxt(cn)]; if (!ck) { ck = slugify(cn); if (!ck) erros.push(onde + ': categoria inválida.'); else { novasCat[ck] = cn.slice(0, 40); catPorNome[normTxt(cn)] = ck; } } p.categoria = ck; }
      var fotos = ['f0', 'f1', 'f2', 'f3', 'f4'].map(prim).filter(Boolean);
      if (fotos.length) { if (fotos.some(function (f) { return !/^https:\/\//i.test(f); })) erros.push(onde + ': foto precisa ser um link que começa com https://'); else p.fotos = fotos.slice(0, 5); }
      if ('est' in mapa || 'cor' in mapa || 'tam' in mapa) {
        var hex = {}; (b ? b.cores : []).forEach(function (c) { hex[c[0]] = c; });
        var cores = [], tams = [], est = {};
        gr.linhas.forEach(function (x) {
          var c = x.g('cor').slice(0, 30), t = x.g('tam').slice(0, 20), h = x.g('hex'), q = x.g('est');
          if (/\|/.test(c + t)) { erros.push('Linha ' + x.nl + ': não use o caractere | em cor ou tamanho.'); return; }
          if (h && !/^#?[0-9A-Fa-f]{6}$/.test(h)) erros.push('Linha ' + x.nl + ': código da cor "' + h + '" deve ser como #1D1F23.');
          if (c && cores.indexOf(c) < 0) { cores.push(c); var ant = hex[c]; hex[c] = [c, h && /^#?[0-9A-Fa-f]{6}$/.test(h) ? '#' + h.replace('#', '').toUpperCase() : ant ? ant[1] : ''].concat(ant && ant[2] ? [ant[2]] : []); }
          if (t && tams.indexOf(t) < 0) tams.push(t);
          var n = q === '' ? 0 : numBr(q);
          if (!(n >= 0) || Math.floor(n) !== n) { erros.push('Linha ' + x.nl + ': estoque "' + q + '" precisa ser um número inteiro.'); n = 0; }
          est[c + '|' + t] = (est[c + '|' + t] || 0) + n;
        });
        if (cores.length && gr.linhas.some(function (x) { return !x.g('cor'); })) erros.push(onde + ': se uma linha tem cor, todas as linhas do produto precisam ter.');
        if (tams.length && gr.linhas.some(function (x) { return !x.g('tam'); })) erros.push(onde + ': se uma linha tem tamanho, todas as linhas do produto precisam ter.');
        p.cores = cores.map(function (c) { return hex[c]; }); p.tamanhos = tams; p.estoque = est;
      }
      return p;
    });
    var novos = produtos.filter(function (p) { return !p.id; }).length, lim = S.plano && S.plano.limites ? S.plano.limites.produtos : 0;
    if (lim && S.d.produtos.length + novos > lim) erros.unshift('Seu plano permite ' + lim + ' produtos. Com esta planilha seriam ' + (S.d.produtos.length + novos) + '. Passe ao plano Mais ou tire alguns produtos novos.');
    if (produtos.length > 1000) erros.unshift('Máximo de 1000 produtos por planilha.');
    return { produtos: produtos, novos: novos, atualizados: produtos.length - novos, categorias: Object.keys(novasCat).map(function (k) { return { chave: k, nome: novasCat[k] }; }), erros: erros,
      variacoes: produtos.reduce(function (s, p) { return s + Object.keys(p.estoque).length; }, 0) };
  }
  var planPrevia = null;
  function planilhaSubir(inp) {
    var f = inp.files[0]; inp.value = '';
    if (!f) return;
    if (f.size > 8e6) return toast('Planilha grande demais (máximo 8 MB).');
    var ehCsv = /\.csv$/i.test(f.name) || /csv/.test(f.type);
    (ehCsv ? f.text().then(lerCsv) : f.arrayBuffer().then(lerXlsx)).then(function (linhas) {
      var r = planilhaMontar(linhas); planPrevia = r;
      if (r.erro) { toast(r.erro); return; }
      dlg.innerHTML = '<div class="sheet sm"><header><h2>Conferir planilha</h2><button type="button" class="x" data-fechar aria-label="Fechar">' + ic('x') + '</button></header><div class="body">' +
        '<p class="note">' + esc(f.name) + '</p><div class="kpis k3">' + kpi('Produtos novos', num(r.novos)) + kpi('Atualizados', num(r.atualizados)) + kpi('Variações', num(r.variacoes)) + '</div>' +
        (r.categorias.length ? '<p class="note">Categorias novas: <b>' + esc(r.categorias.map(function (c) { return c.nome; }).join(', ')) + '</b></p>' : '') +
        (r.erros.length ? '<div class="card destaque"><h2>' + ic('alert') + r.erros.length + (r.erros.length === 1 ? ' problema' : ' problemas') + ' para corrigir</h2><ul class="note">' + r.erros.slice(0, 25).map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>' +
          (r.erros.length > 25 ? '<p class="note">… e mais ' + (r.erros.length - 25) + '.</p>' : '') + '<p class="note">Corrija na planilha e suba de novo. Nada foi gravado.</p></div>' :
          '<div class="tbl"><table><thead><tr><th>Produto</th><th class="r">Preço</th><th class="r">Estoque</th><th></th></tr></thead><tbody>' + r.produtos.slice(0, 40).map(function (p) {
            var t = 0; for (var k in p.estoque) t += p.estoque[k];
            return '<tr><td>' + esc(p.nome) + '<small class="note"> ' + esc([p.sku, p.cores.length ? p.cores.length + ' cores' : '', p.tamanhos.length ? p.tamanhos.join('/') : ''].filter(Boolean).join(' · ')) + '</small></td><td class="r num">' + brl(p.preco) + '</td><td class="r num">' + t + '</td><td>' + (p.id ? '<span class="pill">Atualiza</span>' : '<span class="pill ok">Novo</span>') + '</td></tr>';
          }).join('') + '</tbody></table></div>' + (r.produtos.length > 40 ? '<p class="note">… e mais ' + (r.produtos.length - 40) + ' produtos.</p>' : '')) +
        '</div><footer><span class="sp"></span><button type="button" class="btn ghost" data-fechar>Cancelar</button>' + (r.erros.length ? '' : '<button type="button" class="btn" data-plan-gravar>Gravar ' + r.produtos.length + (r.produtos.length === 1 ? ' produto' : ' produtos') + '</button>') + '</footer></div>';
      if (!dlg.open) dlg.showModal();
    }).catch(function () { toast('Não consegui ler esse arquivo. Salve como Excel (.xlsx) ou CSV e tente de novo.'); });
  }
  function planilhaGravar(btn) {
    if (!planPrevia || planPrevia.erros.length) return;
    btn.disabled = true; btn.setAttribute('aria-busy', 'true');
    salvar('planilha', { categorias: planPrevia.categorias, produtos: planPrevia.produtos }, 'Planilha gravada: ' + planPrevia.novos + ' novos e ' + planPrevia.atualizados + ' atualizados')
      .then(function () { planPrevia = null; dlg.close(); S.tab = 'produtos'; render(); lerPlano(); }, function () { btn.disabled = false; btn.removeAttribute('aria-busy'); });
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
  function radio(nome) { var el = document.querySelector('input[name="' + nome + '"]:checked'); return el ? el.value : ''; }
  function chk(id, rot, v) { return '<label class="check"><input type="checkbox" id="' + id + '"' + (v ? ' checked' : '') + '> ' + rot + '</label>'; }
  var DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  var ENTREGAS = [['correios', 'Envio pelos Correios', 'Frete combinado pelo CEP'], ['retirada', 'Retirar na loja', 'Sem custo'], ['motoboy', 'Motoboy na cidade', 'Combinado no WhatsApp']];
  var PAGS = ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Link de pagamento', 'Dinheiro', 'Boleto'];
  // Editor da loja no mesmo formato do Bio Site: etapas numeradas, prévia ao vivo no celular e um botão de salvar.
  var WZN = ['Negócio', 'Visual', 'Vitrine', 'Vendas e entrega', 'Publicar'];
  var ESTILOS = [['padrao', 'Padrão', 'Colorido, com degradê e fonte elegante'], ['minimalista', 'Minimalista', 'Fundo claro, linhas finas, sem enfeites'], ['moderno', 'Moderno', 'Escuro, títulos fortes, cara de loja de tecnologia']];
  var DATAS = [['', 'Nenhuma', 'Cores normais da loja'], ['natal', 'Natal', 'Vermelho e verde, selo “Especial de Natal”. Use de dezembro até 6 de janeiro'], ['blackfriday', 'Black Friday', 'Preto e amarelo, selo “Black Friday”. Use em novembro']];
  // Minimaquete de cada estilo, só com blocos (igual aos cartões do Bio Site).
  function miniEstilo(k) {
    var c = { padrao: ['linear-gradient(120deg,var(--p1),var(--p2))', '#fff', 'var(--p3)'], minimalista: ['#F4F2F6', '#fff', '#1E1630'], moderno: ['linear-gradient(135deg,#0F0B14,var(--p1))', '#1D1724', 'var(--p3)'],
      natal: ['linear-gradient(120deg,#B3122E,#0F6B3A)', '#fff', '#F2C14E'], blackfriday: ['#111', '#2B2B2B', '#FFD400'], '': ['linear-gradient(120deg,var(--p1),var(--p2))', '#fff', 'var(--p3)'] }[k];
    return '<span class="modmini"><i class="mh" style="background:' + c[0] + '"><i style="background:' + c[2] + '"></i></i><i class="mc" style="background:' + c[1] + '"></i><i class="mc" style="background:' + c[1] + '"></i></span>';
  }
  function opcoes(nome, lista, atual) {
    return '<div class="fontpick" role="radiogroup">' + lista.map(function (o) {
      return '<label class="fontopt' + ((atual || '') === o[0] ? ' on' : '') + '"><input type="radio" name="' + nome + '" value="' + o[0] + '"' + ((atual || '') === o[0] ? ' checked' : '') + '>' + miniEstilo(o[0]) + '<span class="fn"><b>' + o[1] + '</b><small>' + o[2] + '</small></span></label>';
    }).join('') + '</div>';
  }
  function sec(t, corpo, nota) { return '<section class="esec"><h3 class="esech">' + t + '</h3>' + (nota ? '<p class="note">' + nota + '</p>' : '') + corpo + '</section>'; }
  function loja() {
    var L = S.d.loja || {}, b = L.banner || {}, of = L.ofertas || {}, nv = L.novidades || {}, pc = L.parceiro || {}, lk = L.links || {}, H = L.horarios || {}, fx = (L.faixa || []).concat(['', '', '']), bs = (L.banners || []).concat([{}, {}, {}]).slice(0, 3);
    var ents = (L.entrega || []).map(function (e) { return e[0]; }), cats = S.d.categorias;
    var ofTit = ['Ofertas da semana', 'Promoção', 'Outlet', 'Queima de estoque', 'Liquidação', 'Black Friday'];
    S.wz = S.wz || 0;
    var etapas = [
      // 1. Negócio
      sec('Identidade', '<div class="g2">' + fld('k_nome', 'Nome da loja', S.d.nome, ' maxlength="80" required') + fldFoto('k_logo', 'Logo', L.logo, 'logo') + '</div>' +
        fld('k_slogan', 'Frase curta (slogan)', L.slogan, ' maxlength="140"') + '<label class="field"><span>Sobre a loja (rodapé)</span><textarea id="k_sobre" rows="2" maxlength="400">' + esc(L.sobre || '') + '</textarea></label>') +
      sec('Contato', '<div class="g2">' + fld('k_zap', 'WhatsApp de pedidos (com DDD)', L.whatsapp ? String(L.whatsapp).replace(/^55/, '') : '', ' inputmode="tel" placeholder="62999999999" required') + fld('k_tel', 'Telefone exibido', L.telefone) +
        fld('k_fixo', 'Telefone fixo (opcional)', L.fixo) + fld('k_email', 'E-mail', L.email, ' type="email"') + fld('k_ig', 'Instagram (sem @)', L.instagram) + '</div>') +
      sec('Endereço', '<div class="g2">' + fld('k_end', 'Endereço (rua, número, bairro)', L.endereco) + fld('k_cidade', 'Cidade · UF', L.cidade) + '</div>' + chk('k_mapa', 'Mostrar o mapa da loja no rodapé', L.mapa), 'Só se você atende em loja física. Sem endereço, o mapa não aparece.') +
      sec('Horário de atendimento', '<div class="hrs">' + [1, 2, 3, 4, 5, 6, 0].map(function (d) { var h = (H[d] || [])[0]; return '<div><label class="check"><input type="checkbox" id="h_on' + d + '"' + (h ? ' checked' : '') + '> ' + DIAS[d] + '</label><input type="time" id="h_a' + d + '" value="' + esc(h ? h[0] : '09:00') + '" aria-label="Abre ' + DIAS[d] + '"><input type="time" id="h_b' + d + '" value="' + esc(h ? h[1] : '18:00') + '" aria-label="Fecha ' + DIAS[d] + '"></div>'; }).join('') + '</div>'),
      // 2. Visual
      sec('Modelo do site', opcoes('k_estilo', ESTILOS, L.estilo || 'padrao')) +
      sec('Data especial', opcoes('k_saz', DATAS, L.sazonal || ''), 'Enquanto estiver ligada, troca as cores, o selo do banner e a primeira frase da faixa. Depois é só voltar para “Nenhuma”.') +
      sec('Cores e tema', coresHtml(L.cores || {}) + '<label class="field"><span>Tema</span><select id="k_tema">' + [['auto', 'Automático (segue o celular do cliente)'], ['claro', 'Sempre claro'], ['escuro', 'Sempre escuro']].map(function (t) { return '<option value="' + t[0] + '"' + ((L.tema || 'auto') === t[0] ? ' selected' : '') + '>' + t[1] + '</option>'; }).join('') + '</select></label>') +
      sec('Banner inicial', '<div class="g2">' + fld('b_selo', 'Selo', b.selo, ' maxlength="30"') + fld('b_tit', 'Título', b.titulo, ' maxlength="60"') + '</div>' + fld('b_txt', 'Texto', b.texto, ' maxlength="140"') +
        '<div class="g2">' + fld('b_bot', 'Texto do botão', b.botao || 'Comprar agora', ' maxlength="30"') + '<label class="field"><span>Botão abre a categoria</span><select id="b_cat"><option value="">Todos os produtos</option>' + cats.map(function (c) { return '<option value="' + esc(c.chave) + '"' + (b.categoria === c.chave ? ' selected' : '') + '>' + esc(c.nome) + '</option>'; }).join('') + '</select></label></div>' +
        '<div class="g2">' + fldFoto('b_fundo', 'Foto de fundo (computador)', b.imagem, 'banner') + fldFoto('b_fundocel', 'Foto de fundo (celular)', b.imagemCelular, 'banner-cel') + '</div>' +
        '<details class="mais"><summary>Usar artes prontas em imagem (até 3, trocam sozinhas)</summary><p class="note">Com arte pronta (com texto já na imagem), ela substitui o banner acima.</p>' +
        bs.map(function (x, i) { return '<div class="g3">' + fldFoto('b_img' + i, 'Arte ' + (i + 1) + ' (computador)', x.imagem, 'banner') + fldFoto('b_cel' + i, 'Versão celular', x.imagemCelular, 'banner-cel') +
          '<label class="field"><span>Ao clicar, abre</span><select id="b_lnk' + i + '"><option value="#todos">Todos os produtos</option><option value="#ofertas"' + (x.link === '#ofertas' ? ' selected' : '') + '>Ofertas</option>' + cats.map(function (c) { return '<option value="#c-' + esc(c.chave) + '"' + (x.link === '#c-' + c.chave ? ' selected' : '') + '>' + esc(c.nome) + '</option>'; }).join('') + '</select></label></div>'; }).join('') + '</details>',
        'Foto de fundo com o texto por cima. Sem foto, o banner usa as cores da loja.') +
      sec('Faixa rotativa do topo', [0, 1, 2].map(function (i) { return '<input id="k_fx' + i + '" maxlength="70" value="' + esc(fx[i]) + '" aria-label="Frase ' + (i + 1) + '">'; }).join(''), 'Até 3 frases curtas. Deixe todas vazias para esconder.'),
      // 3. Vitrine
      sec('Categorias', '<div class="g2">' + fld('k_ct1', 'Título das categorias', (L.categoriasTitulo || [])[0] || 'Compre por categoria', ' maxlength="50"') + fld('k_ct2', 'Subtítulo das categorias', (L.categoriasTitulo || [])[1], ' maxlength="80"') + '</div>', 'Para criar e editar categorias, vá em Produtos.') +
      sec('Ofertas', chk('o_on', 'Mostrar a vitrine de ofertas', of.ativo !== false) + '<div class="g3"><label class="field"><span>Título</span><input id="o_tit" list="ofTit" maxlength="40" value="' + esc(of.titulo || 'Ofertas da semana') + '"><datalist id="ofTit">' + ofTit.map(function (t) { return '<option value="' + t + '">'; }).join('') + '</datalist></label>' +
        fld('o_selo', 'Selo', of.selo, ' maxlength="30"') + fld('o_txt', 'Texto', of.texto, ' maxlength="100"') + '</div>') +
      sec('Novidades e grupo do WhatsApp', chk('n_on', 'Mostrar o cadastro de novidades', nv.ativo !== false) + '<div class="g2">' + fld('n_tit', 'Título', nv.titulo || 'Receba as últimas novidades', ' maxlength="60"') + fld('n_txt', 'Texto', nv.texto, ' maxlength="120"') + '</div>' +
        fld('n_grp', 'Link do grupo de promoções no WhatsApp', nv.grupoWhatsapp, ' type="url" placeholder="https://chat.whatsapp.com/…"')) +
      sec('Avaliações', chk('k_verif', 'Mostrar selo “Loja verificada” nas avaliações', L.lojaVerificada), 'As avaliações em si ficam na aba Avaliações.'),
      // 4. Vendas e entrega
      sec('Frete grátis', fld('v_frete', 'Frete grátis a partir de (R$)', L.freteGratisAcima || 0, ' type="number" min="0" step="1"'), 'Calculado sozinho: a sacola mostra quanto falta, o pedido sai com “Frete grátis” e a loja avisa no rodapé. Coloque 0 para não oferecer.') +
      sec('Pagamento', '<div class="g2">' + fld('v_pix', 'Desconto no Pix (%)', L.descontoPix || 0, ' type="number" min="0" max="50"') + fld('v_parc', 'Parcelas sem juros mostradas', L.parcelas || 0, ' type="number" min="0" max="24"') + '</div>' +
        '<div class="checks">' + PAGS.map(function (p, i) { return chk('pg' + i, p, (L.pagamentos || []).indexOf(p) > -1); }).join('') + '</div>') +
      sec('Entrega', '<div class="checks">' + ENTREGAS.map(function (e) { return chk('e_' + e[0], e[1], ents.indexOf(e[0]) > -1); }).join('') + '</div>') +
      sec('Nomes das variações', '<div class="g2">' + fld('v_rcor', 'Variação 1', (L.rotulos || {}).cor || 'Cor', ' maxlength="20"') + fld('v_rtam', 'Variação 2', (L.rotulos || {}).tamanho || 'Tamanho', ' maxlength="20"') + '</div>', 'Ex.: “Cor” e “Tamanho”, ou “Sabor” e “Peso”.'),
      // 5. Publicar
      sec('Link da loja', '<div class="copy"><input readonly id="lnkLoja2" value="' + esc(lojaUrl()) + '" aria-label="Link da loja"><button type="button" class="btn ghost" data-copy="lnkLoja2">Copiar</button><a class="btn ghost" href="' + esc(lojaUrl()) + '" target="_blank" rel="noopener">' + ic('ext') + 'Abrir</a></div>') +
      sec('Privacidade (LGPD)', chk('k_cook', 'Mostrar o aviso de cookies', L.cookies !== false) + '<div class="g2">' + fld('k_termos', 'Link dos termos de uso', lk.termos, ' type="url"') + fld('k_priv', 'Link da política de privacidade', lk.privacidade, ' type="url"') + '</div>') +
      sec('White label', '<div class="g3">' + fld('w_nome', 'Nome do parceiro', pc.nome, ' maxlength="40"') + fldFoto('w_logo', 'Logo do parceiro', pc.logo, 'logo') + fld('w_link', 'Site do parceiro', pc.link, ' type="url"') + '</div>' + fld('w_sup', 'WhatsApp de suporte do parceiro (aparece no painel do lojista)', pc.suporte, ' inputmode="tel"') +
        '<div class="g2">' + fld('w_ig', 'Instagram do parceiro (sem @)', pc.instagram, ' maxlength="30"') + fld('w_zap', 'WhatsApp do parceiro no rodapé (vazio = o de suporte)', pc.whatsapp, ' inputmode="tel"') + '</div>' +
        '<div class="checks">' + chk('w_rig', 'Mostrar o Instagram do parceiro no rodapé da loja', pc.rodapeIg) + chk('w_rzap', 'Mostrar o WhatsApp do parceiro no rodapé da loja', pc.rodapeZap) + '</div>', 'Quem aparece em “Feito por” no rodapé da loja e no painel. Sem nome, fica Nour.')
    ];
    return '<div class="head"><div><h1>Editar loja</h1><p class="sub">Siga as etapas. A prévia ao lado mostra como fica antes de salvar.</p></div><a class="btn ghost" href="' + esc(lojaUrl()) + '" target="_blank" rel="noopener">' + ic('ext') + 'Ver loja</a></div>' +
      '<div class="ed2"><form id="floja" class="stack" novalidate>' + wzBar() +
      etapas.map(function (h, i) { return '<div class="wz-step" data-wzs="' + i + '"' + (i === S.wz ? '' : ' hidden') + '>' + h + wzNav(i) + '</div>'; }).join('') +
      '<div class="savebar"><span class="note" id="dirty"></span><button type="submit" class="btn">Salvar alterações</button></div></form>' +
      '<aside class="stickpv" aria-label="Prévia da loja"><div class="phone2"><iframe id="pvloja" title="Prévia da loja" src="../?previa=' + encodeURIComponent(S.slug) + '"></iframe></div><p class="note">Prévia com as mudanças ainda não salvas.</p></aside></div>';
  }
  function wzBar() {
    return '<nav class="wz-bar" aria-label="Etapas">' + WZN.map(function (n, i) { return '<button type="button" class="wz-b' + (i === S.wz ? ' on' : i < S.wz ? ' ok' : '') + '" data-wz="' + i + '"' + (i === S.wz ? ' aria-current="step"' : '') + '><span>' + (i + 1) + '</span><small>' + n + '</small></button>'; }).join('') + '</nav>' +
      '<p class="wz-cap" aria-live="polite">Etapa ' + (S.wz + 1) + ' de ' + WZN.length + ': <b>' + WZN[S.wz] + '</b></p>';
  }
  function wzNav(i) {
    return '<div class="wz-nav">' + (i > 0 ? '<button type="button" class="btn ghost" data-wz="' + (i - 1) + '">← Voltar</button>' : '<span></span>') +
      (i < WZN.length - 1 ? '<button type="button" class="btn" data-wz="' + (i + 1) + '">Próximo: ' + WZN[i + 1] + ' →</button>' : '<button type="submit" class="btn">Salvar e publicar</button>') + '</div>';
  }
  // Troca de etapa sem redesenhar o formulário (não perde o que foi digitado).
  function irEtapa(n) {
    S.wz = n;
    $$('.wz-step').forEach(function (d) { d.hidden = +d.getAttribute('data-wzs') !== n; });
    $$('.wz-b').forEach(function (x, i) { x.classList.toggle('on', i === n); x.classList.toggle('ok', i < n); if (i === n) x.setAttribute('aria-current', 'step'); else x.removeAttribute('aria-current'); });
    var cap = $('.wz-cap'); if (cap) cap.innerHTML = 'Etapa ' + (n + 1) + ' de ' + WZN.length + ': <b>' + WZN[n] + '</b>';
    var bar = $('.wz-bar'); if (bar) bar.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  // Prévia ao vivo: guarda o rascunho e recarrega a loja de prévia ao lado.
  var pvT;
  function previa() {
    clearTimeout(pvT);
    pvT = setTimeout(function () {
      var fr = document.getElementById('pvloja'); if (!fr || !document.getElementById('k_nome')) return;
      var L = lerLoja();
      var d = { slug: S.slug, nome: L.nome, loja: L,
        categorias: S.d.categorias.map(function (c) { return { id: c.chave, nome: c.nome, chamada: c.chamada, desenho: c.desenho, cor: c.cor, foto: c.foto }; }),
        produtos: S.d.produtos.filter(function (p) { return p.ativo; }).map(function (p) { return { id: String(p.id), sku: p.sku, nome: p.nome, marca: p.marca, cat: p.categoria, preco: +p.preco, de: p.preco_de ? +p.preco_de : null, desenho: p.desenho, fotos: p.fotos, desc: p.descricao, composicao: p.composicao, destaque: p.destaque, oferta: p.oferta, selo: p.selo, cores: p.cores && p.cores.length ? p.cores : [['', '']], tamanhos: p.tamanhos, estoque: p.estoque, avaliacoes: [] }; }),
        avaliacoes: (S.d.avaliacoes || []).filter(function (a) { return a.visivel && !a.produto_id; }) };
      try { localStorage.setItem('nourprevia:' + S.slug, JSON.stringify(d)); fr.contentWindow.location.reload(); } catch (e) {}
    }, 700);
  }
  function lerLoja() {
    var L = JSON.parse(JSON.stringify(S.d.loja || {}));
    var zap = val('k_zap').replace(/\D/g, '');
    if (zap && zap.length >= 10 && zap.length <= 11) zap = '55' + zap;
    var H = {}; [0, 1, 2, 3, 4, 5, 6].forEach(function (d) { H[d] = val('h_on' + d) ? [[val('h_a' + d) || '09:00', val('h_b' + d) || '18:00']] : []; });
    var bs = [0, 1, 2].map(function (i) { return { imagem: url(val('b_img' + i)), imagemCelular: url(val('b_cel' + i)), link: val('b_lnk' + i), alt: '' }; }).filter(function (x) { return x.imagem; });
    Object.assign(L, {
      nome: val('k_nome'), logo: url(val('k_logo')), slogan: val('k_slogan'), sobre: val('k_sobre'), tema: val('k_tema'),
      estilo: radio('k_estilo') || 'padrao', sazonal: radio('k_saz'),
      cores: { p1: val('k_p1'), p2: val('k_p2'), p3: val('k_p3'), on3: contraste(val('k_p3')) },
      whatsapp: zap, telefone: val('k_tel'), fixo: val('k_fixo'), email: val('k_email'), instagram: val('k_ig').replace(/^@/, ''), cidade: val('k_cidade'), endereco: val('k_end'), mapa: !!val('k_mapa') && !!val('k_end'),
      horarios: H, faixa: [0, 1, 2].map(function (i) { return val('k_fx' + i); }).filter(Boolean), banners: bs,
      banner: { selo: val('b_selo'), titulo: val('b_tit'), texto: val('b_txt'), botao: val('b_bot'), categoria: val('b_cat'), imagem: url(val('b_fundo')), imagemCelular: url(val('b_fundocel')) },
      categoriasTitulo: [val('k_ct1'), val('k_ct2')],
      ofertas: { ativo: val('o_on'), titulo: val('o_tit'), selo: val('o_selo'), texto: val('o_txt') },
      novidades: { ativo: val('n_on'), titulo: val('n_tit'), texto: val('n_txt'), grupoWhatsapp: url(val('n_grp')), cadastro: '' },
      lojaVerificada: val('k_verif'),
      descontoPix: Math.min(50, Math.max(0, +val('v_pix') || 0)), parcelas: Math.min(24, Math.max(0, parseInt(val('v_parc'), 10) || 0)), freteGratisAcima: Math.max(0, +val('v_frete') || 0),
      rotulos: { cor: val('v_rcor') || 'Cor', tamanho: val('v_rtam') || 'Tamanho' },
      entrega: ENTREGAS.filter(function (e) { return val('e_' + e[0]); }),
      pagamentos: PAGS.filter(function (p, i) { return val('pg' + i); }),
      cookies: val('k_cook'), links: { termos: url(val('k_termos')), privacidade: url(val('k_priv')) },
      parceiro: { nome: val('w_nome'), logo: url(val('w_logo')), link: url(val('w_link')), suporte: val('w_sup').replace(/\D/g, ''), instagram: val('w_ig').replace(/^@/, '').replace(/[^A-Za-z0-9._]/g, '').slice(0, 30), whatsapp: val('w_zap').replace(/\D/g, ''), rodapeIg: !!val('w_rig'), rodapeZap: !!val('w_rzap') }
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
    return '<div class="head"><div><h1>Acesso e links</h1><p class="sub">Links para divulgar e o código que protege este painel.</p></div></div>' +
      '<div class="card"><h2>Link da loja</h2><div class="copy"><input readonly id="lnkLoja" value="' + esc(lojaUrl()) + '" aria-label="Link da loja"><button type="button" class="btn ghost" data-copy="lnkLoja">Copiar</button></div><p class="note">Coloque este link no Bio Site, no Instagram e no WhatsApp.</p></div>' +
      '<div class="card"><h2>Link do painel</h2><div class="copy"><input readonly id="lnkPainel" value="' + esc(painel) + '" aria-label="Link do painel"><button type="button" class="btn ghost" data-copy="lnkPainel">Copiar</button></div><p class="note">O link não abre o painel sozinho: pede o código de acesso.</p></div>' +
      '<div class="card"><h2>Código de acesso</h2><p>Troque o código se alguém que não deveria tiver acesso. Quem estiver com o código antigo perde o acesso na hora.</p><div id="novoCod"></div><button type="button" class="btn danger ghost" data-trocar>Gerar novo código</button></div>' +
      '<div class="card"><h2>Segurança</h2><p class="note">Como no Bio Site: o painel tem marca d\'água com o nome da loja e a data, e bloqueia cópia do código, das imagens e de textos enormes. Print de tela e impressão continuam liberados. Abaixo, as tentativas registradas nos últimos 30 dias (na loja e neste painel).</p><div id="segLista"><p class="note">Carregando…</p></div></div>' +
      '<div class="card"><h2>Configuração inicial</h2><p>Refaça o passo a passo para trocar o modelo ou as cores.</p><button type="button" class="btn ghost" data-refazer>Refazer configuração</button></div>';
  }

  var SEGTIPO = { devtools: 'Ferramenta do desenvolvedor aberta', atalho: 'Atalho bloqueado', copia: 'Cópia de texto grande', imagem: 'Tentativa de copiar imagem' };
  function carregarSeg() {
    var el = document.getElementById('segLista'); if (!el) return;
    window.nourRpc('catalogo_seg_lista', { p_slug: S.slug, p_token: S.token }).then(function (l) {
      el = document.getElementById('segLista'); if (!el) return;
      el.innerHTML = l && l.length ? '<div class="tbl"><table><thead><tr><th>Quando</th><th>Onde</th><th>O quê</th><th>IP</th></tr></thead><tbody>' + l.map(function (x) {
        return '<tr><td class="nowrap">' + dataBr(x.criado, 1) + '</td><td>' + (x.onde === 'painel' ? '<span class="pill warn">Painel</span>' : '<span class="pill">Loja</span>') + '</td><td>' + esc(SEGTIPO[x.tipo] || x.tipo) + (x.detalhe ? ' <small class="note">' + esc(x.detalhe) + '</small>' : '') + '</td><td class="mono">' + esc(x.ip || '—') + '</td></tr>'; }).join('') + '</tbody></table></div>' :
        '<p class="note">Nenhuma tentativa registrada.</p>';
    }, function () { el.innerHTML = '<p class="note">Não deu para carregar agora.</p>'; });
  }

  /* ---------- configuração inicial (igual à Agenda) ---------- */
  var ob = {};
  function onboarding(passo) {
    var L = S.d.loja || {};
    if (passo === 1 && !ob.iniciado) ob = { iniciado: true, nome: S.d.nome || '', zap: L.whatsapp ? String(L.whatsapp).replace(/^55/, '') : '', cidade: L.cidade || '', modelo: undefined, estilo: L.estilo || 'padrao', cores: L.cores || {} };
    var temProd = S.d.produtos.length > 0, steps = ['Sua loja', 'Ramo', 'Estilo', 'Cores', 'Pronto'];
    var corpo = '';
    if (passo === 1) corpo = '<h2>Vamos montar sua loja</h2><p class="sub">Leva 1 minuto. Dá para mudar tudo depois.</p>' + fld('o1nome', 'Nome da loja', ob.nome, ' maxlength="80" required') + fld('o1zap', 'WhatsApp que recebe os pedidos (com DDD)', ob.zap, ' inputmode="tel" placeholder="62999999999" required') + fld('o1cid', 'Cidade · UF', ob.cidade, ' maxlength="60" placeholder="Goiânia · GO"');
    if (passo === 2) corpo = '<h2>Qual é o seu ramo?</h2><p class="sub">O modelo traz categorias, produtos de exemplo e cores para você só trocar pelos seus.' + (temProd ? ' <b>Escolher um modelo substitui os produtos atuais.</b>' : '') + '</p>' +
      '<div class="modelos">' + (temProd ? '<button type="button" class="mod" data-mod="" aria-pressed="' + (ob.modelo === '') + '"><span class="top" style="background:var(--soft)"></span><b>Manter meus produtos</b><small>Só ajustar cores</small></button>' : '') +
      (window.MODELOS || []).map(function (m) { return '<button type="button" class="mod" data-mod="' + esc(m.id) + '" aria-pressed="' + (ob.modelo === m.id) + '"><span class="top" style="background:linear-gradient(120deg,' + esc(cor(m.cores.p1, '#888')) + ',' + esc(cor(m.cores.p2, '#aaa')) + ')">' + (url(m.foto) ? '<img src="' + esc(url(m.foto)) + '" alt="" loading="lazy">' : '') + '</span><b>' + esc(m.titulo) + '</b><small>' + esc(m.cats.slice(0, 3).join(' · ')) + '</small></button>'; }).join('') + '</div>';
    if (passo === 3) corpo = '<h2>Modelo do site</h2><p class="sub">O jeito da loja. Dá para trocar a qualquer momento em Editar loja.</p>' + opcoes('k_estilo', ESTILOS, ob.estilo);
    if (passo === 4) corpo = '<h2>Cores da loja</h2><p class="sub">Escolha uma paleta pronta ou ajuste cada cor.</p>' + coresHtml(ob.cores);
    if (passo === 5) {
      var mo = (window.MODELOS || []).filter(function (x) { return x.id === ob.modelo; })[0];
      corpo = '<h2>Tudo pronto para criar sua loja</h2><p class="sub">Confira e conclua. Depois você troca fotos, preços e textos no painel.</p>' +
        '<ul class="resumo"><li><b>Loja:</b> ' + esc(ob.nome) + (ob.cidade ? ' · ' + esc(ob.cidade) : '') + '</li><li><b>WhatsApp:</b> ' + esc(ob.zap) + '</li>' +
        '<li><b>Ramo:</b> ' + esc(mo ? mo.titulo : 'Manter meus produtos') + '</li><li><b>Modelo do site:</b> ' + esc((ESTILOS.filter(function (e) { return e[0] === ob.estilo; })[0] || ESTILOS[0])[1]) + '</li>' +
        '<li><b>Cores:</b> <i class="sw" style="background:' + esc(cor(ob.cores.p1, '#888')) + '"></i><i class="sw" style="background:' + esc(cor(ob.cores.p2, '#aaa')) + '"></i><i class="sw" style="background:' + esc(cor(ob.cores.p3, '#ddd')) + '"></i></li></ul>';
    }
    app.innerHTML = '<main class="onb"><div class="obox"><nav class="wz-bar" aria-label="Etapas">' + steps.map(function (s, i) { return '<span class="wz-b' + (i + 1 === passo ? ' on' : i + 1 < passo ? ' ok' : '') + '"' + (i + 1 === passo ? ' aria-current="step"' : '') + '><span>' + (i + 1) + '</span><small>' + s + '</small></span>'; }).join('') + '</nav>' +
      '<p class="wz-cap">Etapa ' + passo + ' de ' + steps.length + ': <b>' + steps[passo - 1] + '</b></p>' +
      '<form id="fonb" data-passo="' + passo + '" class="form" novalidate>' + corpo + '<div class="nav2">' + (passo > 1 ? '<button type="button" class="btn ghost" data-voltar>Voltar</button>' : '<span></span>') +
      '<button type="submit" class="btn">' + (passo === 5 ? 'Criar minha loja' : 'Próximo: ' + steps[passo] + ' →') + '</button></div></form></div></main>';
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
      var L = Object.assign({}, base, { nome: ob.nome, whatsapp: zap, cores: ob.cores, estilo: ob.estilo, cidade: ob.cidade || base.cidade || '' });
      delete L.avaliacoes; delete L.id; delete L.api;
      return salvar('loja', { loja: L, onboarding: { feito: true, modelo: ob.modelo || '', em: new Date().toISOString() } }, 'Loja pronta!');
    }).then(function () { ob = {}; aplicarCor(); S.tab = 'inicio'; render(); });
  }

  /* ---------- eventos ---------- */
  document.addEventListener('click', function (ev) {
    var t = ev.target, b;
    if (t === dlg || t.closest('[data-fechar]')) { dlg.close(); ed = null; tr = null; return; }
    if ((b = t.closest('[data-tab]'))) { if (dlg.open) dlg.close(); S.tab = b.getAttribute('data-tab'); render(); window.scrollTo(0, 0); return; }
    if (t.closest('[data-mais]')) return menuMais();
    if (t.closest('[data-tema]')) { var novo = temaAtual() === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', novo); try { localStorage.setItem('nourpaineltema', novo); } catch (e) {} render(); return; }
    if (t.closest('[data-copiar-link]')) { (navigator.clipboard ? navigator.clipboard.writeText(lojaUrl()) : Promise.reject()).then(function () { toast('Link da loja copiado'); }, function () { prompt('Copie o link:', lojaUrl()); }); return; }
    if (t.closest('[data-sair]')) { if (dlg.open) dlg.close(); esquecer(); S.d = null; S.token = ''; login(); return; }
    if ((b = t.closest('[data-edit]'))) { if (S.tab !== 'produtos') { S.tab = 'produtos'; render(); } editarProduto(b.getAttribute('data-edit')); return; }
    if (t.closest('[data-novo-prod]')) { if (S.plano && S.plano.limites && S.d.produtos.length >= S.plano.limites.produtos) return toast(ERROS.limite_plano); return editarProduto(null); }
    if ((b = t.closest('[data-edit-cat]'))) return editarCategoria(b.getAttribute('data-edit-cat'));
    if (t.closest('[data-nova-cat]')) return editarCategoria(null);
    if (t.closest('[data-addcor]')) { lerEditor(); ed.cores.push(['', '#1D1F23']); drawEditor(); return; }
    if ((b = t.closest('[data-rmcor]'))) { lerEditor(); ed.cores.splice(+b.getAttribute('data-rmcor'), 1); drawEditor(); return; }
    if (t.closest('[data-regrade]')) { lerEditor(); drawGrade(); return; }
    if ((b = t.closest('[data-rmfoto]'))) { ed.fotos.splice(+b.getAttribute('data-rmfoto'), 1); drawFotos(); return; }
    if ((b = t.closest('[data-capa]'))) { var fc = ed.fotos.splice(+b.getAttribute('data-capa'), 1)[0]; ed.fotos.unshift(fc); drawFotos(); return; }
    if (t.closest('[data-addlink]')) {
      var lk = url(val('e_flink')); if (!lk) return toast('Use um link que começa com https://');
      ed.fotos.push(lk); drawFotos(); return;
    }
    if ((b = t.closest('[data-rmcorfoto]'))) { lerEditor(); ed.cores[+b.getAttribute('data-rmcorfoto')].length = 2; drawEditor(); return; }
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
    if (t.closest('[data-plan-ajuda]')) return planilhaAjuda();
    if (t.closest('[data-plan-det] > summary')) S.planAberto = !t.closest('details').open;
    if ((b = t.closest('[data-plan]'))) { planilhaBaixar(b.getAttribute('data-plan') === 'modelo'); return; }
    if ((b = t.closest('[data-plan-gravar]'))) { planilhaGravar(b); return; }
    if ((b = t.closest('[data-exp]'))) { exportar(b.getAttribute('data-exp'), b.getAttribute('data-fmt')); return; }
    if ((b = t.closest('[data-cf]'))) { S.cf = b.getAttribute('data-cf'); render(); return; }
    if ((b = t.closest('[data-ver-cli]'))) { verCliente(b.getAttribute('data-ver-cli')); return; }
    if (t.closest('[data-copiar-zaps]')) {
      var zs = filtroClientes(baseClientes()).filter(function (c) { return c.zap; }).map(function (c) { return '55' + c.zap; }).join('\n');
      if (!zs) return toast('Nenhum WhatsApp neste filtro.');
      (navigator.clipboard ? navigator.clipboard.writeText(zs) : Promise.reject()).then(function () { toast('WhatsApps copiados. Cole na lista de transmissão.'); }, function () { prompt('Copie os números:', zs); });
      return;
    }
    if ((b = t.closest('[data-dup]'))) { duplicarProduto(b.getAttribute('data-dup')); return; }
    if (t.closest('[data-dup-ed]')) { lerEditor(); duplicarProduto(null); return; }
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
      prevCores(); previa(); return;
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
    if (t.closest('[data-refazer]')) { ob = {}; return onboarding(1); }
    if ((b = t.closest('[data-wz]'))) { irEtapa(+b.getAttribute('data-wz')); return; }
    if ((b = t.closest('[data-mod]'))) { ob.modelo = b.getAttribute('data-mod'); var m = (window.MODELOS || []).filter(function (x) { return x.id === ob.modelo; })[0]; if (m) ob.cores = m.cores; $$('[data-mod]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); return; }
    if (t.closest('[data-voltar]')) { var pa = +$('#fonb').getAttribute('data-passo'); lerOnb(pa); onboarding(pa - 1); return; }
  });
  function lerOnb(passo) {
    if (passo === 1) { ob.nome = val('o1nome'); ob.zap = val('o1zap'); ob.cidade = val('o1cid'); }
    if (passo === 3) ob.estilo = radio('k_estilo') || 'padrao';
    if (passo === 4) ob.cores = { p1: val('k_p1'), p2: val('k_p2'), p3: val('k_p3'), on3: contraste(val('k_p3')) };
  }
  function prevCores() {
    var pv = document.getElementById('kprev'); if (!pv) return;
    pv.style.background = 'linear-gradient(120deg,' + val('k_p1') + ',' + val('k_p2') + ')'; $('span', pv).style.background = val('k_p3');
  }
  document.addEventListener('input', function (ev) {
    var id = ev.target.id;
    if (id === 'k_p1' || id === 'k_p2' || id === 'k_p3') prevCores();
    if (ev.target.closest && ev.target.closest('#floja')) { var dt = $('#dirty'); if (dt) dt.textContent = 'Alterações não salvas'; previa(); }
    if (id === 'pq' || id === 'cq') {
      clearTimeout(S.qt); var v = ev.target.value;
      S.qt = setTimeout(function () { if (id === 'pq') S.q = v; else S.cq = v; render(); var el = document.getElementById(id); el.focus(); el.setSelectionRange(v.length, v.length); }, 250);
    }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'plan_arq') return planilhaSubir(t);
    if (t.type === 'file' && t.files && t.files.length) return subir(t);
    if (t.type === 'radio' && t.closest('.fontpick')) { $$('.fontopt', t.closest('.fontpick')).forEach(function (o) { o.classList.toggle('on', o.contains(t)); }); }
    if (t.closest && t.closest('#floja')) { var dt2 = $('#dirty'); if (dt2) dt2.textContent = 'Alterações não salvas'; previa(); }
    if (t.id === 'pcat') { S.cat = t.value; render(); }
    if (t.id === 'cord') { S.cord = t.value; render(); }
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
  function subir(t) {
    var files = [].slice.call(t.files); t.value = '';
    if (t.hasAttribute('data-up-fotos')) {
      files = files.slice(0, 5 - ed.fotos.length);
      return enviarVarias(files, 'produto', document.getElementById('efst')).then(function (us) { if (ed) { ed.fotos = ed.fotos.concat(us).slice(0, 5); drawFotos(); } }, function () {});
    }
    if (t.hasAttribute('data-up-cor')) {
      var i = +t.getAttribute('data-up-cor');
      return enviarVarias(files.slice(0, 1), 'produto', document.getElementById('efst')).then(function (us) { if (ed && us[0]) { lerEditor(); ed.cores[i][2] = us[0]; drawEditor(); } }, function () {});
    }
    var id = t.getAttribute('data-up-campo'), alvo = document.getElementById(id), box = t.closest('.field');
    if (!alvo) return;
    return enviarVarias(files.slice(0, 1), t.getAttribute('data-up-tipo'), box && $('.upst', box)).then(function (us) {
      if (!us[0]) return;
      alvo.value = us[0]; alvo.dispatchEvent(new Event('input', { bubbles: true }));
      var pv = document.getElementById('pv_' + id); if (pv) pv.innerHTML = '<img src="' + esc(mini(us[0])) + '" alt="">';
      toast('Foto enviada. Lembre de salvar.');
    }, function () {});
  }
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
      var dados = Object.assign({}, ed, { duplicado: undefined, estoque: est, cores: ed.cores[0][0] || ed.cores.length > 1 ? ed.cores : [], tamanhos: ed.tamanhos[0] ? ed.tamanhos : [] });
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
      ['k_logo', 'n_grp', 'k_termos', 'k_priv', 'w_logo', 'w_link', 'b_img0', 'b_img1', 'b_img2', 'b_cel0', 'b_cel1', 'b_cel2', 'b_fundo', 'b_fundocel'].forEach(function (id) { if (val(id) && !url(val(id))) z = ''; });
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
      if (pa === 3 || pa === 4) return onboarding(pa + 1);
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
