-- Mercado Pago (Marketplace + Checkout Pro): cada lojista conecta a própria conta por OAuth.
-- Tokens ficam criptografados (AES-GCM na função catalogo-mp, chave só no segredo da função); nada disso sai para o navegador.
-- Rodar no SQL Editor do Supabase do catálogo (projeto de teste dvhinwfrofoxbtsnhxjc).
create table if not exists public.catalogo_mp (
  slug text primary key references public.catalogos(slug) on delete cascade,
  mp_user_id text not null,
  access_enc text not null,
  refresh_enc text not null,
  expira timestamptz not null,
  escopo text not null default '',
  reconectar boolean not null default false,
  conectado timestamptz not null default now(),
  atualizado timestamptz not null default now()
);
create index if not exists catalogo_mp_user on public.catalogo_mp (mp_user_id);
-- state do OAuth: aleatório, de uso único, vale 10 minutos
create table if not exists public.catalogo_mp_estado (
  estado text primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  expira timestamptz not null default now() + interval '10 minutes'
);
alter table public.catalogo_mp enable row level security;
alter table public.catalogo_mp_estado enable row level security;
revoke all on public.catalogo_mp, public.catalogo_mp_estado from anon, authenticated;

alter table public.catalogo_pedidos
  add column if not exists mp_preferencia text not null default '',
  add column if not exists mp_pagamento text not null default '',
  add column if not exists mp_status text not null default '',
  add column if not exists pago_em timestamptz;

-- Painel: situação da conexão (sem expor tokens) e desconectar.
CREATE OR REPLACE FUNCTION public.catalogo_mp_status(p_slug text, p_token text) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare m catalogo_mp;
begin
  if not catalogo_ok(p_slug, p_token) then raise exception 'acesso_negado'; end if;
  select * into m from catalogo_mp where slug = p_slug;
  if not found then return jsonb_build_object('conectado', false); end if;
  return jsonb_build_object('conectado', not m.reconectar, 'reconectar', m.reconectar, 'conta', m.mp_user_id, 'desde', m.conectado);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_mp_desconectar(p_slug text, p_token text) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
begin
  if not catalogo_ok(p_slug, p_token) then raise exception 'acesso_negado'; end if;
  delete from catalogo_mp where slug = p_slug;
  update catalogos set loja = coalesce(loja, '{}'::jsonb) - 'pagamentoOnline' where slug = p_slug;
  return jsonb_build_object('conectado', false);
end $function$;

revoke all on function public.catalogo_mp_status(text, text), public.catalogo_mp_desconectar(text, text) from public;
grant execute on function public.catalogo_mp_status(text, text), public.catalogo_mp_desconectar(text, text) to anon, authenticated;
