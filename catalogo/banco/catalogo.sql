-- =====================================================================
-- Nour Catálogo · banco (Supabase/Postgres)
-- Aplicado no projeto de teste nour-bio-site-teste em 23/10/2026.
-- Nenhuma tabela é acessível pela chave pública: a loja e o painel usam só as
-- funções catalogo_publico, catalogo_pedido, catalogo_contato, catalogo_visita,
-- catalogo_painel e catalogo_painel_salvar. As demais são internas.
-- O código de acesso do painel fica salvo só como sha256.
-- =====================================================================

create table public.catalogos (
  slug text primary key check (slug ~ '^[a-z0-9][a-z0-9-]{2,39}$'),
  owner uuid,
  nome text not null default '' check (char_length(nome) <= 80),
  ativo boolean not null default true,
  demo boolean not null default false,
  painel_token text not null,
  loja jsonb not null default '{}'::jsonb,
  onboarding jsonb not null default '{}'::jsonb,
  bio_slug text,
  criado timestamptz not null default now(),
  atualizado timestamptz not null default now()
);
create table public.catalogo_categorias (
  id bigserial primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  chave text not null check (chave ~ '^[a-z0-9-]{1,40}$'),
  nome text not null check (char_length(nome) between 1 and 60),
  chamada text not null default '' check (char_length(chamada) <= 80),
  desenho text not null default '' check (char_length(desenho) <= 20),
  cor text not null default '' check (cor = '' or cor ~ '^#[0-9A-Fa-f]{6}$'),
  foto text not null default '' check (char_length(foto) <= 500),
  ordem int not null default 0,
  unique (slug, chave)
);
create table public.catalogo_produtos (
  id bigserial primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  sku text not null default '' check (char_length(sku) <= 40),
  nome text not null check (char_length(nome) between 1 and 120),
  marca text not null default '' check (char_length(marca) <= 60),
  categoria text not null default '',
  preco numeric(12,2) not null check (preco >= 0 and preco < 1000000),
  preco_de numeric(12,2) check (preco_de is null or (preco_de >= 0 and preco_de < 1000000)),
  desenho text not null default '' check (char_length(desenho) <= 20),
  fotos jsonb not null default '[]'::jsonb check (jsonb_typeof(fotos) = 'array' and jsonb_array_length(fotos) <= 8),
  descricao text not null default '' check (char_length(descricao) <= 2000),
  composicao text not null default '' check (char_length(composicao) <= 200),
  destaque boolean not null default false,
  oferta boolean not null default false,
  selo text not null default '' check (char_length(selo) <= 16),
  ativo boolean not null default true,
  ordem int not null default 0,
  cores jsonb not null default '[]'::jsonb check (jsonb_typeof(cores) = 'array' and jsonb_array_length(cores) <= 20),
  tamanhos jsonb not null default '[]'::jsonb check (jsonb_typeof(tamanhos) = 'array' and jsonb_array_length(tamanhos) <= 30),
  canais jsonb not null default '{}'::jsonb,   -- IDs no Mercado Livre, Shopee etc.
  criado timestamptz not null default now(),
  atualizado timestamptz not null default now()
);
create index on public.catalogo_produtos (slug, ordem);
create table public.catalogo_estoque (
  produto_id bigint not null references public.catalogo_produtos(id) on delete cascade,
  cor text not null default '',
  tamanho text not null default '',
  qtd int not null default 0 check (qtd >= 0 and qtd <= 1000000),
  ean text not null default '' check (char_length(ean) <= 20),
  primary key (produto_id, cor, tamanho)
);
create table public.catalogo_movimentos (
  id bigserial primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  produto_id bigint,
  produto_nome text not null default '',
  cor text not null default '',
  tamanho text not null default '',
  delta int not null,
  saldo int,
  motivo text not null default 'ajuste',
  pedido_id bigint,
  em timestamptz not null default now()
);
create index on public.catalogo_movimentos (slug, em desc);
create table public.catalogo_pedidos (
  id bigserial primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  numero int not null,
  codigo text not null check (codigo ~ '^[A-Z0-9]{4,12}$'),
  nome text not null check (char_length(nome) between 1 and 80),
  contato jsonb not null default '{}'::jsonb,
  itens jsonb not null,
  subtotal numeric(12,2) not null,
  desconto numeric(12,2) not null default 0,
  total numeric(12,2) not null,
  entrega text not null default '',
  pagamento text not null default '',
  status text not null default 'novo' check (status in ('novo','confirmado','enviado','entregue','cancelado')),
  estoque_baixado boolean not null default false,
  criado timestamptz not null default now(),
  atualizado timestamptz not null default now(),
  unique (slug, numero),
  unique (slug, codigo)
);
create index on public.catalogo_pedidos (slug, criado desc);
create table public.catalogo_avaliacoes (
  id bigserial primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  produto_id bigint references public.catalogo_produtos(id) on delete cascade,
  nome text not null check (char_length(nome) between 1 and 60),
  cidade text not null default '' check (char_length(cidade) <= 60),
  nota int not null check (nota between 1 and 5),
  texto text not null check (char_length(texto) between 1 and 600),
  origem text not null default '' check (origem in ('','whatsapp','instagram','google','loja')),
  variacao text not null default '' check (char_length(variacao) <= 60),
  quando text not null default '' check (char_length(quando) <= 30),
  visivel boolean not null default true,
  verificada boolean not null default true,
  criado timestamptz not null default now()
);
create table public.catalogo_contatos (
  id bigserial primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  nome text not null check (char_length(nome) between 1 and 80),
  whatsapp text not null default '' check (whatsapp ~ '^[0-9]{0,15}$'),
  email text not null default '' check (char_length(email) <= 120),
  aceita boolean not null default true,
  origem text not null default 'catalogo',
  criado timestamptz not null default now(),
  saiu_em timestamptz
);
create unique index catalogo_contatos_email on public.catalogo_contatos (slug, lower(email)) where email <> '';
create unique index catalogo_contatos_zap on public.catalogo_contatos (slug, whatsapp) where whatsapp <> '';
create table public.catalogo_visitas (
  slug text not null references public.catalogos(slug) on delete cascade,
  dia date not null default (now() at time zone 'America/Sao_Paulo')::date,
  n int not null default 0,
  primary key (slug, dia)
);

alter table public.catalogos enable row level security;
alter table public.catalogo_categorias enable row level security;
alter table public.catalogo_produtos enable row level security;
alter table public.catalogo_estoque enable row level security;
alter table public.catalogo_movimentos enable row level security;
alter table public.catalogo_pedidos enable row level security;
alter table public.catalogo_avaliacoes enable row level security;
alter table public.catalogo_contatos enable row level security;
alter table public.catalogo_visitas enable row level security;
revoke all on public.catalogos, public.catalogo_categorias, public.catalogo_produtos, public.catalogo_estoque, public.catalogo_movimentos,
  public.catalogo_pedidos, public.catalogo_avaliacoes, public.catalogo_contatos, public.catalogo_visitas from anon, authenticated;

-- As funções estão em funcoes.sql (exportadas do banco com pg_get_functiondef).

-- ---------- 23/10/2026 (2ª parte): cupons, trocas, analytics ----------
create table public.catalogo_cupons (
  id bigserial primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  codigo text not null check (codigo ~ '^[A-Z0-9_-]{3,20}$'),
  tipo text not null default 'pct' check (tipo in ('pct','valor','frete')),
  valor numeric(10,2) not null default 0 check (valor >= 0 and valor <= 100000),
  minimo numeric(12,2) not null default 0 check (minimo >= 0),
  inicio date, fim date,
  limite int check (limite is null or limite > 0),
  usos int not null default 0,
  ativo boolean not null default true,
  descricao text not null default '' check (char_length(descricao) <= 120),
  criado timestamptz not null default now(),
  unique (slug, codigo)
);
create table public.catalogo_trocas (
  id bigserial primary key,
  slug text not null references public.catalogos(slug) on delete cascade,
  pedido_id bigint, pedido_numero int,
  produto_id bigint, produto_nome text not null default '',
  de_cor text not null default '', de_tam text not null default '',
  para_cor text not null default '', para_tam text not null default '',
  qtd int not null default 1 check (qtd between 1 and 99),
  tipo text not null default 'troca' check (tipo in ('troca','devolucao')),
  motivo text not null default 'tamanho' check (motivo in ('tamanho','defeito','cor','arrependimento','outro')),
  valor numeric(12,2) not null default 0 check (valor >= 0),
  obs text not null default '' check (char_length(obs) <= 200),
  criado timestamptz not null default now()
);
create index on public.catalogo_trocas (slug, criado desc);
-- Eventos do analytics agregados por dia (só de quem aceitou os cookies).
create table public.catalogo_ev_dia (
  slug text not null references public.catalogos(slug) on delete cascade,
  dia date not null default (now() at time zone 'America/Sao_Paulo')::date,
  tipo text not null, alvo text not null default '', origem text not null default '',
  n int not null default 0,
  primary key (slug, dia, tipo, alvo, origem)
);
alter table public.catalogo_pedidos add column cupom text not null default '', add column cupom_desconto numeric(12,2) not null default 0,
  add column frete_gratis boolean not null default false, add column origem text not null default '';
alter table public.catalogo_cupons enable row level security;
alter table public.catalogo_trocas enable row level security;
alter table public.catalogo_ev_dia enable row level security;
revoke all on public.catalogo_cupons, public.catalogo_trocas, public.catalogo_ev_dia from anon, authenticated;
