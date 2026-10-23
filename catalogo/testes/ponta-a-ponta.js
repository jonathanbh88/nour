// Teste de ponta a ponta no site publicado (banco de teste): compra na loja e todos os botões do painel.
// Uso: npm i playwright-core @sparticuz/chromium && TOK=<código de acesso do painel> node ponta-a-ponta.js  (resultado em /tmp/res.json)
const { chromium } = require('playwright-core');
const sparticuz = require('@sparticuz/chromium');
const fs = require('fs');
const BASE = 'https://nour-catalogo.vercel.app', SLUG = 'atelie-exemplo', TOK = process.env.TOK;
const R = [], errs = [];
function ok(passo, info) { R.push(['ok', passo, info === undefined ? '' : String(info).slice(0, 160)]); }
function falha(passo, e) { R.push(['FALHOU', passo, String(e && e.message || e).split('\n')[0].slice(0, 200)]); }
async function passo(nome, fn) { try { const v = await fn(); ok(nome, v); return v; } catch (e) { falha(nome, e); } }
function salvar() { fs.writeFileSync('/tmp/res.json', JSON.stringify({ R, errs }, null, 0)); }
const ZAP = '(62) 98888-0' + String(Date.now()).slice(-3), NOME = 'Cliente Robô ' + String(Date.now()).slice(-4);

(async () => {
  const b = await chromium.launch({ executablePath: await sparticuz.executablePath(), args: sparticuz.args, headless: true });
  const watch = (p, tag) => {
    p.on('pageerror', e => errs.push(tag + ' JS: ' + e.message.slice(0, 160)));
    p.on('console', m => { if (m.type() === 'error' && !/fonts\.|favicon|ERR_ABORTED|Failed to load resource: the server responded with a status of 4/.test(m.text())) errs.push(tag + ' console: ' + m.text().slice(0, 160)); });
    p.on('response', r => { if (/supabase\.co/.test(r.url()) && r.status() >= 400) errs.push(tag + ' HTTP ' + r.status() + ' ' + r.url().split('/').pop().slice(0, 60)); });
    p.on('dialog', d => d.accept());
  };
  const loja = await b.newContext({ viewport: { width: 1280, height: 900 } });
  await loja.route(/wa\.me|api\.whatsapp/, r => r.abort());
  const p = await loja.newPage(); watch(p, 'loja');
  let n1, n2;

  // ---------- LOJA: compra 1 ----------
  await passo('loja abre com origem Instagram', async () => { await p.goto(BASE + '/loja/' + SLUG + '/?utm_source=instagram'); await p.waitForSelector('.pc', { timeout: 20000 }); return (await p.$$('.pc')).length + ' produtos; título: ' + await p.title(); });
  await passo('aceitar cookies', async () => { await p.click('[data-cookie="todos"]', { timeout: 5000 }); return 'ok'; });
  await passo('faixa de contato do topo', async () => (await p.textContent('.info')).replace(/\s+/g, ' ').trim());
  await passo('botão tema claro/escuro', async () => { await p.click('#tema'); const a = await p.getAttribute('html', 'data-theme'); await p.click('#tema'); return 'trocou para ' + a; });
  await passo('busca "vestido"', async () => { await p.fill('#q', 'vestido'); await p.waitForTimeout(700); const n = (await p.$$('.pc')).length; await p.fill('#q', ''); await p.waitForTimeout(500); return n + ' resultados'; });
  await passo('menu de categorias', async () => { const cs = await p.$$eval('.cats a', a => a.map(x => x.getAttribute('href'))); for (const h of cs) { await p.click('.cats a[href="' + h + '"]'); await p.waitForTimeout(350); } return cs.length + ' categorias abertas'; });
  await passo('filtro de tamanho e layout', async () => { const t = await p.$('[data-tam]:not([data-tam=""])'); if (t) await t.click(); await p.waitForTimeout(200); const l = await p.$('[data-layout]'); if (l) { await l.click(); await l.click().catch(() => {}); } const z = await p.$('[data-tam=""]'); if (z) await z.click(); return (t ? 'tamanho ok' : 'sem filtro') + (l ? ', layout ok' : ''); });
  await passo('favoritar', async () => { await p.goto(BASE + '/loja/' + SLUG + '/'); await p.waitForSelector('.pc'); await p.click('.pc [data-fav]'); await p.goto(BASE + '/loja/' + SLUG + '/#favoritos'); await p.waitForTimeout(800); const n = (await p.$$('.pc')).length; await p.goto(BASE + '/loja/' + SLUG + '/'); await p.waitForSelector('.pc'); return n + ' nos favoritos'; });
  async function addProduto(i) {
    const cards = await p.$$('.pc [data-open]'); await cards[i].click(); await p.waitForSelector('#padd', { timeout: 8000 });
    const nome = await p.textContent('dialog[open] h2, dialog[open] h1').catch(() => '?');
    const cores = await p.$$('dialog[open] [data-cor]:not(.no)'); if (cores.length > 1) await cores[1].click();
    await p.click('dialog[open] .sz:not([disabled])'); await p.click('dialog[open] [data-pq="1"]').catch(() => {}); await p.click('dialog[open] [data-pq="-1"]').catch(() => {});
    const fotos = await p.$$('dialog[open] [data-foto]'); if (fotos.length > 1) await fotos[1].click();
    await p.click('#padd'); await p.waitForTimeout(400); const c = await p.$('dialog[open] [data-close]'); if (c) await c.click().catch(() => {}); await p.keyboard.press('Escape').catch(() => {});
    return nome.trim();
  }
  await passo('produto 1: cor, tamanho, quantidade, foto e sacola', () => addProduto(0));
  await passo('produto 2 na sacola', () => addProduto(2));
  await passo('sacola: + e −', async () => { await p.click('[data-cart]'); await p.waitForSelector('[data-l]'); await p.click('[data-l="0"][data-d="1"]'); await p.click('[data-l="0"][data-d="-1"]'); return (await p.textContent('.cart-h')).replace(/\s+/g, ' '); });
  await passo('cupom errado', async () => { await p.fill('#fCupom', 'NAOEXISTE'); await p.click('[data-cupom]'); await p.waitForTimeout(1200); return await p.textContent('#toast'); });
  await passo('entregas e pagamentos', async () => { const es = await p.$$eval('[data-ent]', a => a.map(x => x.getAttribute('data-ent'))); for (const e of es) { await p.click('[data-ent="' + e + '"]'); } const ps = await p.$$eval('[data-pag]', a => a.map(x => x.getAttribute('data-pag'))); for (const x of ps) await p.click('[data-pag="' + x + '"]'); return 'entregas: ' + es.join(',') + ' | pagamentos: ' + ps.join(','); });
  await passo('enviar sem preencher bloqueia', async () => { await p.fill('#fNome', ''); await p.click('#send'); await p.waitForTimeout(400); return (await p.$$eval('.field em', a => a.map(x => x.textContent))).join(' / ') || 'sem aviso'; });
  async function preencherEEnviar() {
    await p.fill('#fNome', NOME); await p.fill('#fZap', ZAP);
    const ent = await p.$$eval('[data-ent]', a => a.map(x => x.getAttribute('data-ent'))); const pref = ent.find(e => e === 'correios') || ent[0];
    await p.click('[data-ent="' + pref + '"]'); if (await p.$('#fCep')) await p.fill('#fCep', '74000-000'); if (await p.$('#fEnd')) await p.fill('#fEnd', 'Rua Teste, 10');
    const pg = await p.$$eval('[data-pag]', a => a.map(x => x.getAttribute('data-pag'))); await p.click('[data-pag="' + (pg.find(x => /pix/i.test(x)) || pg[0]) + '"]');
    const resumo = (await p.textContent('.sum')).replace(/\s+/g, ' ');
    const [pop] = await Promise.all([loja.waitForEvent('page', { timeout: 15000 }), p.click('#send')]);
    const u = decodeURIComponent(pop.url()); await pop.close().catch(() => {});
    const num = (u.match(/#\s?(\d{4,})/) || u.match(/[Pp]edido[^0-9]{0,12}(\d{3,})/) || [])[1];
    return { num, resumo, msg: u.replace(/\s+/g, ' ').slice(0, 300) };
  }
  const v1 = await passo('compra 1 enviada', async () => { const r = await preencherEEnviar(); n1 = r.num; return '#' + r.num + ' | ' + r.resumo; });
  await passo('mensagem do WhatsApp', async () => R[R.length - 1] && 'ver acima');
  await passo('confirmação na loja', async () => { await p.waitForTimeout(1500); return (await p.textContent('dialog[open]').catch(() => '') || '').replace(/\s+/g, ' ').slice(0, 140); });
  await passo('cadastro de novidades', async () => { await p.keyboard.press('Escape'); await p.goto(BASE + '/loja/' + SLUG + '/?utm_source=email'); await p.waitForSelector('#news'); await p.fill('#nNome', NOME); await p.fill('#nZap', ZAP); await p.fill('#nMail', 'robo@teste.com'); await p.click('#news .want'); await p.waitForTimeout(1500); return (await p.textContent('#news')).replace(/\s+/g, ' ').slice(0, 100); });
  await passo('rodapé: pagamentos e Feito por', async () => (await p.textContent('.pays').catch(() => 'sem bloco de pagamento')).replace(/\s+/g, ' ').slice(0, 140) + ' | ' + (await p.textContent('.madeby').catch(() => '')).trim());
  salvar();

  // ---------- PAINEL ----------
  const pc = await b.newContext({ viewport: { width: 1280, height: 900 }, acceptDownloads: true });
  const q = await pc.newPage(); watch(q, 'painel');
  await q.addInitScript(() => { window.print = () => { window.__pdf = (document.getElementById('imprimir') || {}).innerText || ''; }; });
  const aba = async t => { await q.click('[data-tab="' + t + '"]'); await q.waitForTimeout(500); return (await q.textContent('main h1, #app h1').catch(() => '')).trim(); };
  await passo('painel: entrar', async () => { await q.goto(BASE + '/catalogo/painel/?loja=' + SLUG + '#' + TOK); await q.waitForSelector('.shell, #fonb', { timeout: 20000 }); if (await q.$('#fonb')) return 'abriu a configuração inicial'; return (await q.textContent('h1')).trim() + ' | url sem código: ' + !q.url().includes(TOK.slice(0, 8)); });
  for (const t of ['inicio', 'produtos', 'pedidos', 'cupons', 'analytics', 'relatorios', 'clientes', 'avaliacoes', 'loja', 'acesso']) await passo('aba ' + t, () => aba(t));
  const pedido = async (num, de, para) => { await aba('pedidos'); await q.click('[data-pst="' + de + '"]'); await q.waitForTimeout(300); const art = q.locator('article.ped', { hasText: '#' + num }).first(); await art.locator('[data-st="' + para + '"]').click(); await q.waitForTimeout(1500); await q.click('[data-pst="' + para + '"]'); await q.waitForTimeout(300); return await q.locator('article.ped', { hasText: '#' + num }).first().locator('.pill').first().textContent(); };
  await passo('pedido 1 aparece como novo', async () => { await aba('pedidos'); await q.click('[data-pst="novo"]'); const t = await q.locator('article.ped', { hasText: '#' + n1 }).first().textContent({ timeout: 5000 }); return t.replace(/\s+/g, ' ').slice(0, 200); });
  await passo('pedido 1 → confirmado (baixa estoque)', () => pedido(n1, 'novo', 'confirmado'));
  await passo('pedido 1 → enviado', () => pedido(n1, 'confirmado', 'enviado'));
  await passo('pedido 1 → entregue', () => pedido(n1, 'enviado', 'entregue'));
  await passo('exportar pedidos Excel', async () => { const [d] = await Promise.all([q.waitForEvent('download'), q.click('[data-exp="pedidos"][data-fmt="xlsx"]')]); const f = await d.path(); return d.suggestedFilename() + ' ' + fs.statSync(f).size + ' bytes'; });
  await passo('troca no pedido 1', async () => { await q.click('[data-pst="entregue"]'); await q.locator('article.ped', { hasText: '#' + n1 }).first().locator('[data-troca]').click(); await q.waitForSelector('#ftroca'); await q.click('[data-ttipo="troca"]'); await q.click('#ftroca [type=submit]'); await q.waitForTimeout(1500); return await q.textContent('#toast'); });
  await passo('cupom: criar ROBO10', async () => { await aba('cupons'); const ja = await q.$('text=ROBO10'); if (ja) return 'já existia'; await q.click('[data-novo-cupom]'); await q.fill('#u_cod', 'ROBO10'); await q.fill('#u_val', '10'); await q.click('#fcupom [type=submit]'); await q.waitForTimeout(1500); return await q.textContent('#toast'); });
  salvar();

  // ---------- LOJA: compra 2 (mesmo WhatsApp + cupom) ----------
  await passo('compra 2 com cupom ROBO10', async () => { await p.goto(BASE + '/loja/' + SLUG + '/?utm_source=whatsapp'); await p.waitForSelector('.pc'); await addProduto(1); await p.click('[data-cart]'); await p.fill('#fCupom', 'robo10'); await p.click('[data-cupom]'); await p.waitForSelector('.cupom.on', { timeout: 8000 }); const r = await preencherEEnviar(); n2 = r.num; return '#' + r.num + ' | ' + r.resumo; });

  // ---------- PAINEL de novo ----------
  await passo('painel recarrega com pedido 2', async () => { await q.goto(BASE + '/catalogo/painel/?loja=' + SLUG); await q.waitForSelector('.shell', { timeout: 20000 }); return await q.textContent('.nv[data-tab="pedidos"]'); });
  await passo('pedido 2 → confirmado', () => pedido(n2, 'novo', 'confirmado'));
  await passo('pedido 2 cancelar e reabrir', async () => { await pedido(n2, 'confirmado', 'cancelado'); await pedido(n2, 'cancelado', 'novo'); return await pedido(n2, 'novo', 'confirmado'); });
  await passo('CRM: cliente reconhecido pelo WhatsApp', async () => { await aba('clientes'); await q.fill('#cq', NOME); await q.waitForTimeout(800); return (await q.locator('table.crm tbody tr').first().textContent()).replace(/\s+/g, ' ').slice(0, 200); });
  await passo('CRM: indicadores', async () => (await q.textContent('.kpis')).replace(/\s+/g, ' ').slice(0, 300));
  await passo('CRM: ficha do cliente', async () => { await q.click('[data-ver-cli]'); await q.waitForSelector('#dlg .sheet'); const t = (await q.textContent('#dlg .body')).replace(/\s+/g, ' ').slice(0, 220); await q.click('#dlg [data-fechar]'); return t; });
  await passo('CRM: filtros e ordenação', async () => { await q.fill('#cq', ''); await q.waitForTimeout(600); const out = []; for (const f of ['vip', 'recorrente', 'novo', 'sumindo', 'inativo', 'lead', 'todos']) { await q.click('[data-cf="' + f + '"]'); out.push(f + ':' + await q.locator('table.crm tbody tr').count()); } for (const o of ['gasto', 'compras', 'antigos', 'recentes']) await q.selectOption('#cord', o); return out.join(' '); });
  await passo('CRM: copiar WhatsApps', async () => { await q.click('[data-copiar-zaps]'); await q.waitForTimeout(400); return await q.textContent('#toast'); });
  await passo('CRM: Excel e PDF', async () => { const [d] = await Promise.all([q.waitForEvent('download'), q.click('[data-exp="clientes"][data-fmt="xlsx"]')]); const s = fs.statSync(await d.path()).size; await q.click('[data-exp="clientes"][data-fmt="pdf"]'); await q.waitForTimeout(400); const pdf = await q.evaluate(() => window.__pdf); return 'xlsx ' + s + ' bytes | PDF: ' + pdf.replace(/\s+/g, ' ').slice(0, 120); });
  await passo('CRM: cadastros de novidades', async () => { await q.click('details.card summary'); return (await q.textContent('details.card')).includes(NOME) ? 'cadastro do robô está na lista' : 'cadastro NÃO apareceu'; });
  await passo('Analytics: canais', async () => { await aba('analytics'); for (const d of [7, 90, 30]) await q.click('[data-per="' + d + '"]'); return (await q.$$eval('.canal .cn b', a => a.map(x => x.textContent))).join(', '); });
  await passo('Relatórios: abas, Excel e PDF', async () => { await aba('relatorios'); const out = []; for (const s of ['vendas', 'financeiro', 'trocas', 'estoque', 'clientes']) { await q.click('[data-sub="' + s + '"]'); await q.waitForTimeout(300); let x = '-'; try { const [d] = await Promise.all([q.waitForEvent('download', { timeout: 5000 }), q.click('[data-exp="' + s + '"][data-fmt="xlsx"]')]); x = fs.statSync(await d.path()).size; } catch (e) { x = 'sem dados'; } await q.evaluate(() => window.__pdf = ''); await q.click('[data-exp="' + s + '"][data-fmt="pdf"]'); await q.waitForTimeout(300); const pdf = await q.evaluate(() => window.__pdf || ''); out.push(s + ' xlsx:' + x + ' pdf:' + (pdf ? 'ok' : 'vazio')); } return out.join(' | '); });
  await passo('Produtos: editar e salvar', async () => { await aba('produtos'); await q.click('[data-edit]'); await q.waitForSelector('#fprod'); await q.click('#fprod [type=submit]'); await q.waitForTimeout(1500); return await q.textContent('#toast'); });
  await passo('Produtos: duplicar, salvar e excluir a cópia', async () => { await q.click('[data-dup]'); await q.waitForSelector('#fprod'); const tit = await q.textContent('#fprod h2'); const nome = await q.inputValue('#e_nome'); await q.click('#fprod [type=submit]'); await q.waitForTimeout(2000); const row = q.locator('tr', { hasText: nome }).first(); await row.locator('[data-edit]').click(); await q.waitForSelector('[data-delprod]'); await q.click('[data-delprod]'); await q.waitForTimeout(1500); const ainda = await q.locator('tr', { hasText: nome }).count(); return tit + ' → "' + nome + '" salvo e excluído (restou ' + ainda + ')'; });
  await passo('Produtos: ocultar e mostrar', async () => { const c = q.locator('[data-ativo]').first(); await c.click(); await q.waitForTimeout(1200); await q.locator('[data-ativo]').first().click(); await q.waitForTimeout(1200); return await q.textContent('#toast'); });
  await passo('Produtos: movimentos de estoque', async () => { await q.click('details.card:has-text("Movimentos") summary'); const t = (await q.locator('details.card:has-text("Movimentos") tbody tr').first().textContent()).replace(/\s+/g, ' '); const [d] = await Promise.all([q.waitForEvent('download'), q.click('[data-exp="movimentos"][data-fmt="xlsx"]')]); return t.slice(0, 120) + ' | xlsx ok'; });
  await passo('Avaliações: criar e excluir', async () => { await aba('avaliacoes'); await q.click('[data-nova-av]'); await q.fill('#a_nome', 'Robô'); await q.fill('#a_texto', 'Teste automático'); await q.click('#fav [type=submit]'); await q.waitForTimeout(1500); const art = q.locator('article.av', { hasText: 'Teste automático' }).first(); await art.locator('[data-delav]').click(); await q.waitForTimeout(1500); return await q.textContent('#toast'); });
  await passo('Cupom: ligar/desligar e excluir ROBO10', async () => { await aba('cupons'); const art = q.locator('article.cup', { hasText: 'ROBO10' }).first(); const usos = (await art.textContent()).match(/(\d+) uso/); await art.locator('[data-cupom-ativo]').click(); await q.waitForTimeout(1200); await q.locator('article.cup', { hasText: 'ROBO10' }).first().locator('[data-del-cupom]').click(); await q.waitForTimeout(1500); return 'usos: ' + (usos ? usos[1] : '?') + ' | ' + await q.textContent('#toast'); });
  await passo('Editar loja: 5 etapas e prévia', async () => { await aba('loja'); const out = []; for (let i = 0; i < 5; i++) { await q.click('.wz-b[data-wz="' + i + '"]'); await q.waitForTimeout(400); out.push((await q.textContent('.wz-b[aria-current], .wz-b.on').catch(() => i)).toString().trim().slice(0, 20)); } const pv = await q.frameLocator('.stickpv iframe').locator('.pc').count().catch(() => -1); return out.join(' > ') + ' | prévia com ' + pv + ' produtos'; });
  await passo('Início', async () => (await aba('inicio')) + ' | ' + (await q.textContent('.kpis')).replace(/\s+/g, ' ').slice(0, 160));
  salvar();

  // ---------- CELULAR ----------
  const m = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }); await m.route(/wa\.me/, r => r.abort());
  const mp = await m.newPage(); watch(mp, 'celular'); await mp.addInitScript(t => { try { localStorage.setItem('nourpainel', JSON.stringify({ slug: 'atelie-exemplo', token: t })); } catch (e) {} }, TOK);
  await passo('celular: loja sem rolagem lateral', async () => { await mp.goto(BASE + '/loja/' + SLUG + '/'); await mp.waitForSelector('.pc'); return 'largura ' + await mp.evaluate(() => document.documentElement.scrollWidth); });
  await passo('celular: painel em todas as abas', async () => { await mp.goto(BASE + '/catalogo/painel/?loja=' + SLUG); await mp.waitForSelector('.shell', { timeout: 20000 }); const out = []; for (const t of ['inicio', 'produtos', 'pedidos', 'clientes', 'analytics', 'relatorios', 'loja']) { await mp.click('[data-tab="' + t + '"]'); await mp.waitForTimeout(400); const w = await mp.evaluate(() => document.documentElement.scrollWidth); if (w > 392) out.push(t + ':' + w); } return out.length ? 'rolagem lateral em ' + out.join(', ') : 'nenhuma aba passa da tela'; });
  salvar(); await b.close();
})().catch(e => { R.push(['ERRO GERAL', String(e.message).slice(0, 300)]); salvar(); });
