// Nour Catálogo · Mercado Pago (Marketplace + Checkout Pro).
// Cada lojista conecta a PRÓPRIA conta pelo login oficial (OAuth) e recebe direto. Rotas:
//   POST /conectar  {loja, codigo}          painel: cria o state de uso único e devolve o link de autorização
//   GET  /retorno   ?code&state              Mercado Pago volta aqui: troca o código pelos tokens (só no servidor)
//   POST /pagar     {loja, pedido}           loja: cria a preferência com o token do lojista e o valor gravado no pedido
//   POST /aviso                              webhook: confere a assinatura, busca o pagamento e confirma o pedido
// Segredos (Supabase → Edge Functions → Secrets): MP_CLIENT_ID (ou MP_APP_ID), MP_CLIENT_SECRET, MP_WEBHOOK_SECRET.
// Opcionais: MP_OAUTH_REDIRECT_URI, MP_TOKEN_ENCRYPTION_KEY (sem ela, a chave é derivada da chave de serviço),
// MP_COMISSAO_PCT (comissão da plataforma, padrão 0) e CATALOGO_SITE (padrão https://nour-catalogo.vercel.app).
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const BASE = Deno.env.get("SUPABASE_URL")!;
const SRV = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const CLIENT_ID = Deno.env.get("MP_APP_ID") ?? Deno.env.get("MP_CLIENT_ID") ?? "";
const CLIENT_SECRET = Deno.env.get("MP_CLIENT_SECRET") ?? "";
const WEBHOOK_SECRET = Deno.env.get("MP_WEBHOOK_SECRET") ?? "";
const SITE = (Deno.env.get("CATALOGO_SITE") ?? "https://nour-catalogo.vercel.app").replace(/\/+$/, "");
const REDIRECT = Deno.env.get("MP_OAUTH_REDIRECT_URI") ?? BASE + "/functions/v1/catalogo-mp/retorno";  // igual ao cadastrado na aplicação do Mercado Pago
const CHAVE_BASE = Deno.env.get("MP_TOKEN_ENCRYPTION_KEY") || SRV;
const AVISO = BASE + "/functions/v1/catalogo-mp/aviso";
const COMISSAO = Math.min(Math.max(Number(Deno.env.get("MP_COMISSAO_PCT") ?? "0") || 0, 0), 30);
const MP_OAUTH_TOKEN = "https://api.mercadopago.com/oauth/token";
const MP_PREFERENCES = "https://api.mercadopago.com/checkout/preferences";
const MP_PAYMENTS = "https://api.mercadopago.com/v1/payments";
const sb = createClient(BASE, SRV, { auth: { persistSession: false } });

const ORIGEM_OK = (o: string) => o === SITE || /^https:\/\/nour-catalogo[a-z0-9-]*\.vercel\.app$/.test(o) || /^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(o);
function cors(req: Request) {
  const o = req.headers.get("origin") ?? "";
  return { "Access-Control-Allow-Origin": ORIGEM_OK(o) ? o : SITE, "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS", "Vary": "Origin" };
}
const J = (req: Request, o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { ...cors(req), "Content-Type": "application/json", "Cache-Control": "no-store" } });
const SLUG = /^[a-z0-9-]{2,60}$/;

// ---------- tokens criptografados (AES-GCM; chave derivada da chave de serviço, que nunca sai do servidor) ----------
const enc = new TextEncoder(), dec = new TextDecoder();
let chave: CryptoKey | null = null;
async function key() {
  if (chave) return chave;
  const base = await crypto.subtle.importKey("raw", enc.encode(CHAVE_BASE), "HKDF", false, ["deriveKey"]);
  chave = await crypto.subtle.deriveKey({ name: "HKDF", hash: "SHA-256", salt: enc.encode("nour-catalogo-mp"), info: enc.encode("tokens-v1") }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  return chave;
}
const b64 = (u: Uint8Array) => btoa(String.fromCharCode(...u));
const unb64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
async function encryptToken(t: string) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  return b64(iv) + "." + b64(new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await key(), enc.encode(t))));
}
async function decryptToken(s: string) {
  const [a, b] = s.split(".");
  return dec.decode(await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(a) }, await key(), unb64(b)));
}

// ---------- OAuth ----------
async function tokenOauth(corpo: Record<string, string>) {
  const r = await fetch(MP_OAUTH_TOKEN, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" }, body: new URLSearchParams(corpo) });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token) {
    // Só o motivo devolvido pelo Mercado Pago; nunca tokens ou segredos.
    const motivo = String(j.error || j.message || "http_" + r.status).replace(/[^a-z0-9_]/gi, "_").slice(0, 40);
    console.error("oauth_token_falhou", r.status, motivo, String(j.message ?? "").slice(0, 160));
    throw new Error(motivo);
  }
  return j as { access_token: string; refresh_token: string; expires_in: number; user_id: number; scope?: string };
}
type OauthTokens = { access_token: string; refresh_token: string; expires_in: number; user_id: number; scope?: string };
// Conexões dos lojistas: tokens sempre criptografados no banco; os dois tokens são trocados juntos a cada renovação.
const sellerRepository = {
  async save(slug: string, t: OauthTokens) {
    const { error } = await sb.from("catalogo_mp").upsert({
      slug, mp_user_id: String(t.user_id), access_enc: await encryptToken(t.access_token), refresh_enc: await encryptToken(t.refresh_token),
      expira: new Date(Date.now() + Math.max(60, Number(t.expires_in) || 0) * 1000).toISOString(), escopo: t.scope ?? "", reconectar: false, atualizado: new Date().toISOString(),
    });
    if (error) { console.error("gravar_tokens", error.message); throw new Error("gravar_tokens"); }
    // Marca na loja (público) que dá para pagar online; o servidor confere de novo na hora de pagar.
    const { data: c } = await sb.from("catalogos").select("loja").eq("slug", slug).single();
    await sb.from("catalogos").update({ loja: { ...(c?.loja ?? {}), pagamentoOnline: true } }).eq("slug", slug);
  },
  async find(slug: string) { return (await sb.from("catalogo_mp").select("*").eq("slug", slug).maybeSingle()).data; },
  async findByUser(mpUser: string) { return (await sb.from("catalogo_mp").select("slug").eq("mp_user_id", mpUser).maybeSingle()).data; },
  async markReauth(slug: string) { await sb.from("catalogo_mp").update({ reconectar: true }).eq("slug", slug); },
};
// state do OAuth: aleatório, gravado no banco ligado à loja, vale 10 minutos e é consumido uma única vez.
const oauthStateStore = {
  async create(slug: string) {
    await sb.from("catalogo_mp_estado").delete().lt("expira", new Date().toISOString());
    const state = b64(crypto.getRandomValues(new Uint8Array(24))).replace(/[+/=]/g, (c) => ({ "+": "-", "/": "_", "=": "" }[c] as string));
    const { error } = await sb.from("catalogo_mp_estado").insert({ estado: state, slug });
    return error ? null : state;
  },
  async consume(state: string) { return (await sb.from("catalogo_mp_estado").delete().eq("estado", state).select("slug,expira").maybeSingle()).data; },
};
// Token do lojista pronto para uso; renova antes de vencer (o refresh pode trocar os dois tokens).
async function sellerAccessToken(slug: string): Promise<string | null> {
  const m = await sellerRepository.find(slug);
  if (!m || m.reconectar) return null;
  if (new Date(m.expira).getTime() - Date.now() > 7 * 864e5) return await decryptToken(m.access_enc);
  try {
    const t = await tokenOauth({ grant_type: "refresh_token", client_id: CLIENT_ID, client_secret: CLIENT_SECRET, refresh_token: await decryptToken(m.refresh_enc) });
    await sellerRepository.save(slug, t);
    return t.access_token;
  } catch {
    await sellerRepository.markReauth(slug);
    return null;  // nunca cai para o token da plataforma
  }
}

function paginaRetorno(slug: string, ok: boolean, msg: string) {
  const destino = SITE + "/catalogo/painel/?loja=" + encodeURIComponent(slug) + "&mp=" + (ok ? "ok" : "erro");
  return new Response(null, { status: 302, headers: { Location: destino + (msg ? "&mpmsg=" + encodeURIComponent(msg) : ""), "Cache-Control": "no-store" } });
}

// ---------- webhook: assinatura x-signature (HMAC-SHA256 de id;request-id;ts) ----------
async function assinaturaOk(req: Request, dataId: string) {
  if (!WEBHOOK_SECRET) return false;
  const sig = req.headers.get("x-signature") ?? "", rid = req.headers.get("x-request-id") ?? "";
  const p = Object.fromEntries(sig.split(",").map((x) => x.split("=").map((s) => s.trim())));
  if (!p.ts || !p.v1 || !rid || !dataId) return false;
  const k = await crypto.subtle.importKey("raw", enc.encode(WEBHOOK_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const h = Array.from(new Uint8Array(await crypto.subtle.sign("HMAC", k, enc.encode(`id:${dataId};request-id:${rid};ts:${p.ts};`)))).map((b) => b.toString(16).padStart(2, "0")).join("");
  if (h.length !== p.v1.length) return false;
  let d = 0; for (let i = 0; i < h.length; i++) d |= h.charCodeAt(i) ^ p.v1.charCodeAt(i);  // comparação em tempo constante
  return d === 0;
}
async function processarPagamento(id: string, slugDica: string, mpUser: string) {
  // Descobre a loja pelo parâmetro da notificação ou pela conta do lojista; busca o pagamento com o token DELE.
  let slug = SLUG.test(slugDica) ? slugDica : "";
  if (!slug && mpUser) slug = (await sellerRepository.findByUser(mpUser))?.slug ?? "";
  if (!slug) return;
  const sellerToken = await sellerAccessToken(slug); if (!sellerToken) return;
  const r = await fetch(`${MP_PAYMENTS}/${encodeURIComponent(id)}`, { headers: { Authorization: `Bearer ${sellerToken}` } });
  if (!r.ok) return;
  const pg = await r.json();
  const m = /^([a-z0-9-]+):(\d+):([A-Z0-9]+)$/.exec(String(pg.external_reference ?? ""));
  if (!m || m[1] !== slug) return;
  const { data: ped } = await sb.from("catalogo_pedidos").select("id,status,total,mp_status").eq("slug", slug).eq("numero", Number(m[2])).eq("codigo", m[3]).maybeSingle();
  if (!ped) return;
  const aprovado = pg.status === "approved" && Math.abs(Number(pg.transaction_amount) - Number(ped.total)) < 0.01;
  await sb.from("catalogo_pedidos").update({ mp_pagamento: String(pg.id), mp_status: String(pg.status ?? ""), ...(aprovado ? { pago_em: new Date().toISOString() } : {}) }).eq("id", ped.id);
  // Pago e conferido: confirma o pedido (baixa o estoque). Pedidos já andados não voltam.
  if (aprovado && ped.status === "novo") await sb.rpc("catalogo_pedido_status", { p_slug: slug, p_id: ped.id, v_novo: "confirmado" });
}

Deno.serve(async (req) => {
  const url = new URL(req.url), rota = url.pathname.replace(/\/+$/, "").split("/").pop();
  if (req.method === "OPTIONS") return new Response(null, { headers: cors(req) });
  if (!CLIENT_ID || !CLIENT_SECRET) return J(req, { error: "mp_nao_configurado" }, 503);

  // Painel: começar a conexão.
  if (rota === "conectar" && req.method === "POST") {
    const b = await req.json().catch(() => ({}));
    const slug = String(b.loja ?? ""), token = String(b.codigo ?? "");
    if (!SLUG.test(slug)) return J(req, { error: "acesso_negado" }, 403);
    const { data: ok } = await sb.rpc("catalogo_ok", { p_slug: slug, p_token: token });
    if (!ok) return J(req, { error: "acesso_negado" }, 403);
    const estado = await oauthStateStore.create(slug);
    if (!estado) return J(req, { error: "falha" }, 500);
    const u = new URL("https://auth.mercadopago.com.br/authorization");
    u.searchParams.set("client_id", CLIENT_ID); u.searchParams.set("response_type", "code"); u.searchParams.set("platform_id", "mp");
    u.searchParams.set("state", estado); u.searchParams.set("redirect_uri", REDIRECT);
    return J(req, { url: u.toString() });
  }

  // Volta do Mercado Pago depois que o lojista autorizou.
  if (rota === "retorno" && req.method === "GET") {
    const estado = url.searchParams.get("state") ?? "", code = url.searchParams.get("code") ?? "";
    const st = await oauthStateStore.consume(estado);  // uso único
    if (!st) return new Response("Link expirado. Volte ao painel e clique em Conectar de novo.", { status: 400, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    if (new Date(st.expira).getTime() < Date.now()) return paginaRetorno(st.slug, false, "expirou");
    if (url.searchParams.get("error") || !code) return paginaRetorno(st.slug, false, "cancelado");
    try {
      await sellerRepository.save(st.slug, await tokenOauth({ grant_type: "authorization_code", client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code, redirect_uri: REDIRECT }));
      return paginaRetorno(st.slug, true, "");
    } catch (e) { return paginaRetorno(st.slug, false, "falha_" + String((e as Error).message).toLowerCase()); }
  }

  // Loja: criar o pagamento do pedido já gravado (valor e itens vêm do banco, nunca do navegador).
  if (rota === "pagar" && req.method === "POST") {
    const b = await req.json().catch(() => ({}));
    const slug = String(b.loja ?? ""), codigo = String(b.pedido ?? "");
    if (!SLUG.test(slug) || !/^[A-Z0-9]{4,12}$/.test(codigo)) return J(req, { error: "pedido_invalido" }, 400);
    const { data: ped } = await sb.from("catalogo_pedidos").select("id,numero,codigo,total,itens,status,mp_status,mp_preferencia,criado").eq("slug", slug).eq("codigo", codigo).maybeSingle();
    if (!ped || ped.status === "cancelado") return J(req, { error: "pedido_invalido" }, 404);
    if (ped.mp_status === "approved") return J(req, { error: "ja_pago" }, 409);
    if (Date.now() - new Date(ped.criado).getTime() > 2 * 864e5) return J(req, { error: "pedido_antigo" }, 410);
    const sellerToken = await sellerAccessToken(slug);
    if (!sellerToken) return J(req, { error: "mp_desconectado" }, 409);
    const { data: c } = await sb.from("catalogos").select("nome,loja").eq("slug", slug).single();
    const total = Math.round(Number(ped.total) * 100) / 100;
    if (!Number.isFinite(total) || !(total > 0)) return J(req, { error: "pedido_invalido" }, 400);
    const fee = Math.round(total * COMISSAO) / 100;  // comissão da plataforma, definida no servidor
    if (!Number.isFinite(fee) || fee < 0 || fee >= total) return J(req, { error: "pedido_invalido" }, 400);
    const lojaUrl = `${SITE}/loja/${encodeURIComponent(slug)}/`;
    const parcelas = Math.min(Math.max(parseInt(String(c?.loja?.parcelas ?? 12), 10) || 12, 1), 12);
    const pref = {
      items: [{ id: String(ped.numero), title: `Pedido #${ped.numero} · ${String(c?.nome ?? slug).slice(0, 80)}`, description: (ped.itens as { qtd: number; nome: string }[] ?? []).map((i) => `${i.qtd}x ${i.nome}`).join(", ").slice(0, 250), quantity: 1, currency_id: "BRL", unit_price: total }],
      external_reference: `${slug}:${ped.numero}:${ped.codigo}`,
      notification_url: `${AVISO}?loja=${encodeURIComponent(slug)}`,
      back_urls: { success: `${lojaUrl}?pago=${ped.codigo}`, pending: `${lojaUrl}?pago=${ped.codigo}`, failure: `${lojaUrl}?pago=${ped.codigo}` },
      auto_return: "approved",  // SITE é HTTPS público
      payment_methods: { installments: parcelas },
      statement_descriptor: String(c?.nome ?? "").replace(/[^A-Za-z0-9 ]/g, "").slice(0, 13) || undefined,
      ...(fee > 0 ? { marketplace_fee: fee } : {}),
    };
    const r = await fetch(MP_PREFERENCES, { method: "POST", headers: { Authorization: `Bearer ${sellerToken}`, "Content-Type": "application/json", "X-Idempotency-Key": `${slug}-${ped.codigo}-${Math.floor(Date.now() / 600000)}` }, body: JSON.stringify(pref) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.init_point) { console.error("preferencia_falhou", r.status, String(j.message ?? j.error ?? "").slice(0, 160)); return J(req, { error: "mp_falha" }, 502); }
    await sb.from("catalogo_pedidos").update({ mp_preferencia: String(j.id) }).eq("id", ped.id);
    return J(req, { preferenceId: j.id, initPoint: j.init_point });
  }

  // Webhook: responde rápido e processa depois de conferir a assinatura.
  if (rota === "aviso" && req.method === "POST") {
    const corpo = await req.json().catch(() => ({}));
    const dataId = String(url.searchParams.get("data.id") ?? corpo?.data?.id ?? "");
    if (!(await assinaturaOk(req, dataId))) return new Response("assinatura", { status: 401 });
    const tipo = String(corpo?.type ?? url.searchParams.get("type") ?? "");
    if (tipo === "payment" && /^\d+$/.test(dataId)) {
      // @ts-ignore EdgeRuntime existe no Supabase
      EdgeRuntime.waitUntil(processarPagamento(dataId, url.searchParams.get("loja") ?? "", String(corpo?.user_id ?? "")).catch(() => {}));
    }
    return new Response("ok", { status: 200 });
  }

  return J(req, { error: "rota" }, 404);
});
