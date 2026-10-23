/* =====================================================================
   Nour Catálogo · proteção contra cópia (mesmo padrão do Nour Bio Site)
   - Trava: botão direito e "segurar" em imagem, arrastar imagem, copiar textos enormes (mais de 600 letras),
     Ctrl+U (código-fonte), Ctrl+S (salvar página), F12 e Ctrl+Shift+I/J/C/K (ferramenta do desenvolvedor).
   - Detecta a ferramenta do desenvolvedor aberta (computador, pelo tamanho da janela).
   - Registra cada tentativa no servidor (catalogo_seg_registrar, com IP), sem bloquear ninguém.
   - No painel: marca d'água clarinha com a loja, a data e a hora (aparece em qualquer print) e aviso na tela
     quando a ferramenta do desenvolvedor está aberta.
   - Print de tela e impressão continuam liberados (o PDF dos relatórios usa a impressão).
   Uso: window.nourProtecao({ onde: 'loja' | 'painel', slug: '...', marca: 'texto da marca d'água' }).
   ===================================================================== */
(function () {
  var cfg = null, enviados = {}, aviso = null, devAberto = false;
  var LIM_COPIA = 600;

  function registrar(tipo, detalhe) {
    if (!cfg || !cfg.slug || !window.nourRpc) return;
    var k = tipo + ':' + detalhe;
    if (enviados[k]) return;  // uma vez por tipo e detalhe a cada página aberta
    enviados[k] = 1;
    window.nourRpc('catalogo_seg_registrar', { p_slug: cfg.slug, p_onde: cfg.onde, p_tipo: tipo, p_detalhe: String(detalhe || '').slice(0, 120) }).catch(function () {});
  }
  function ehImagem(el) { return el && el.closest && el.closest('img, picture, svg, canvas, video, [style*="background-image"]'); }
  function ehCampo(el) { return el && el.closest && el.closest('input, textarea, select, [contenteditable="true"]'); }

  function avisoTela(on) {
    if (cfg.onde !== 'painel') return;
    if (on && !aviso) {
      aviso = document.createElement('div');
      aviso.className = 'nour-prot-aviso';
      aviso.setAttribute('role', 'alertdialog');
      aviso.innerHTML = '<div><b>Ferramenta do desenvolvedor aberta</b><p>Por segurança, o painel fica coberto enquanto ela estiver aberta. Feche a ferramenta para continuar.</p></div>';
      document.body.appendChild(aviso);
    } else if (!on && aviso) { aviso.remove(); aviso = null; }
  }
  // Ferramenta do desenvolvedor encaixada na janela deixa uma diferença grande entre o tamanho externo e o interno.
  function checarDev() {
    if (window.matchMedia && matchMedia('(pointer: coarse)').matches) return;  // celular e tablet: não se aplica
    var aberto = window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 260;
    if (aberto && !devAberto) registrar('devtools', window.outerWidth + 'x' + window.outerHeight + ' / ' + window.innerWidth + 'x' + window.innerHeight);
    devAberto = aberto;
    avisoTela(aberto);
  }

  function marcaDagua(texto) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200"><text x="20" y="110" transform="rotate(-22 180 100)" font-family="sans-serif" font-size="13" fill="rgba(120,110,130,0.10)">' +
      String(texto).replace(/[&<>"']/g, '') + '</text></svg>';
    var el = document.createElement('div');
    el.className = 'nour-prot-marca';
    el.setAttribute('aria-hidden', 'true');
    el.style.backgroundImage = 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) + '")';
    document.body.appendChild(el);
  }

  window.nourProtecao = function (opcoes) {
    if (cfg) { cfg = Object.assign(cfg, opcoes || {}); return; }
    cfg = Object.assign({ onde: 'loja', slug: '', marca: '' }, opcoes || {});
    var css = document.createElement('style');
    css.textContent = 'img,svg,picture,video{-webkit-user-drag:none;-webkit-touch-callout:none}' +
      '.nour-prot-marca{position:fixed;inset:0;z-index:2147483000;pointer-events:none;background-repeat:repeat}' +
      '.nour-prot-aviso{position:fixed;inset:0;z-index:2147483600;display:grid;place-items:center;padding:24px;background:rgba(18,13,26,.94);color:#fff;font-family:Outfit,system-ui,sans-serif;text-align:center}' +
      '.nour-prot-aviso div{max-width:420px}.nour-prot-aviso b{font-size:1.2rem}.nour-prot-aviso p{opacity:.85}' +
      '@media print{.nour-prot-marca,.nour-prot-aviso{display:none!important}}';
    document.head.appendChild(css);
    if (cfg.onde === 'painel' && cfg.marca) marcaDagua(cfg.marca);

    document.addEventListener('contextmenu', function (e) {
      if (ehImagem(e.target) && !ehCampo(e.target)) { e.preventDefault(); registrar('imagem', 'botão direito'); }
    });
    document.addEventListener('dragstart', function (e) { if (ehImagem(e.target)) { e.preventDefault(); registrar('imagem', 'arrastar'); } });
    document.addEventListener('copy', function (e) {
      if (ehCampo(e.target)) return;
      var sel = String(window.getSelection ? window.getSelection() : '');
      if (sel.length > LIM_COPIA) {
        e.preventDefault();
        if (e.clipboardData) e.clipboardData.setData('text/plain', '');
        registrar('copia', sel.length + ' letras');
      }
    });
    document.addEventListener('keydown', function (e) {
      var k = String(e.key || '').toLowerCase(), ctrl = e.ctrlKey || e.metaKey, dev = ctrl && (e.shiftKey || e.altKey) && ['i', 'j', 'c', 'k'].indexOf(k) > -1;
      if (k === 'f12' || dev || (ctrl && !e.shiftKey && (k === 'u' || k === 's'))) {
        e.preventDefault(); e.stopPropagation();
        registrar('atalho', (ctrl ? (e.metaKey ? 'Cmd+' : 'Ctrl+') : '') + (e.shiftKey ? 'Shift+' : '') + (e.altKey ? 'Alt+' : '') + (k === 'f12' ? 'F12' : k.toUpperCase()));
      }
    }, true);
    checarDev();
    window.addEventListener('resize', checarDev);
    setInterval(checarDev, 2000);
  };
})();
