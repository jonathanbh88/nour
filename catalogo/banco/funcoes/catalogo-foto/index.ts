// Nour Catálogo · envio de fotos do painel.
// O painel já manda a foto comprimida (WebP, ou JPEG/PNG quando o aparelho não gera WebP) em dois tamanhos:
// "g" (grande, página do produto e banners) e "p" (miniatura, vitrine e listas). Aqui só conferimos
// o código de acesso, o limite do plano, o tamanho e o tipo real do arquivo antes de gravar.
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const J = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const MAX = 400 * 1024;

// Tipo pelo conteúdo, não pelo nome do arquivo.
function tipo(b: Uint8Array): [string, string] | null {
  if (b.length > 12 && b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return ["image/webp", "webp"];
  if (b.length > 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return ["image/jpeg", "jpg"];
  if (b.length > 8 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return ["image/png", "png"];
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  if (req.method !== "POST") return J({ error: "metodo" }, 405);
  if (Number(req.headers.get("content-length") || 0) > 2 * MAX + 20000) return J({ error: "tamanho" }, 413);
  let fd: FormData;
  try { fd = await req.formData(); } catch { return J({ error: "formato" }, 400); }
  const slug = String(fd.get("loja") || ""), token = String(fd.get("codigo") || ""), acao = String(fd.get("acao") || "enviar");
  if (!/^[a-z0-9-]{2,60}$/.test(slug)) return J({ error: "acesso_negado" }, 403);
  const { data: ok, error } = await sb.rpc("catalogo_foto_ok", { p_slug: slug, p_token: token });
  if (error || !ok?.ok) return J({ error: "acesso_negado" }, 403);

  // Apaga fotos enviadas há mais de 1 hora que não estão em nenhum produto, categoria ou na aparência.
  if (acao === "limpar") {
    const { data: orfas } = await sb.rpc("catalogo_fotos_orfas", { p_slug: slug });
    const nomes = (orfas || []) as string[];
    if (nomes.length) await sb.storage.from("catalogo").remove(nomes);
    return J({ apagadas: nomes.length });
  }

  const g = fd.get("g"), p = fd.get("p");
  if (!(g instanceof File) || !(p instanceof File)) return J({ error: "arquivo" }, 400);
  if (ok.arquivos + 2 > ok.limite) return J({ error: "limite_fotos" }, 403);
  const arqs: [Uint8Array, [string, string]][] = [];
  for (const f of [g, p]) {
    if (f.size > MAX || f.size < 100) return J({ error: "tamanho" }, 413);
    const b = new Uint8Array(await f.arrayBuffer()), t = tipo(b);
    if (!t) return J({ error: "tipo" }, 415);
    arqs.push([b, t]);
  }
  if (arqs[0][1][1] !== arqs[1][1][1]) return J({ error: "tipo" }, 415);
  const id = crypto.randomUUID().replace(/-/g, "").slice(0, 20), ext = arqs[0][1][1];
  const nomes = [`${slug}/${id}.${ext}`, `${slug}/${id}-p.${ext}`];
  for (let i = 0; i < 2; i++) {
    const { error: e } = await sb.storage.from("catalogo").upload(nomes[i], arqs[i][0], { contentType: arqs[i][1][0], cacheControl: "31536000", upsert: false });
    if (e) return J({ error: "falha_envio" }, 500);
  }
  return J({ url: sb.storage.from("catalogo").getPublicUrl(nomes[0]).data.publicUrl });
});
