-- =====================================================================
-- Nour Catálogo · funções do banco (exportadas do projeto de teste em 23/10/2026)
-- Rodar depois de catalogo.sql. Observação: o proxy do Supabase recusa alguns
-- comandos agrupados (ex.: insert seguido de delete na mesma função); por isso
-- algumas operações estão separadas em funções pequenas.
-- =====================================================================

-- ---------- auxiliares (internas) ----------
CREATE OR REPLACE FUNCTION public.catalogo_url_ok(u text) RETURNS boolean LANGUAGE sql IMMUTABLE SET search_path TO 'public' AS $function$
  select u ~ '^https://' and char_length(u) between 12 and 500 and u !~ ('[[:space:]"' || chr(39) || chr(60) || chr(62) || chr(92) || ']');
$function$;

CREATE OR REPLACE FUNCTION public.catalogo_ok(p_slug text, p_token text) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  select exists (select 1 from catalogos c where c.slug = p_slug and p_token is not null and char_length(p_token) between 20 and 200
    and c.painel_token = encode(sha256(convert_to(p_token, 'UTF8')), 'hex'));
$function$;

CREATE OR REPLACE FUNCTION public.catalogo_mover(p_slug text, p_prod bigint, p_cor text, p_tam text, p_delta integer, p_motivo text, p_pedido bigint)
 RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_novo int; v_nome text;
begin
  if p_delta = 0 then return; end if;
  select nome into v_nome from catalogo_produtos where id = p_prod and slug = p_slug;
  if not found then return; end if;
  insert into catalogo_estoque (produto_id, cor, tamanho, qtd) values (p_prod, p_cor, p_tam, greatest(p_delta, 0))
  on conflict (produto_id, cor, tamanho) do update set qtd = greatest(catalogo_estoque.qtd + p_delta, 0)
  returning qtd into v_novo;
  insert into catalogo_movimentos (slug, produto_id, produto_nome, cor, tamanho, delta, saldo, motivo, pedido_id)
  values (p_slug, p_prod, v_nome, p_cor, p_tam, p_delta, v_novo, p_motivo, p_pedido);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_apagar(p_slug text, p_tipo text, p_id bigint) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$ begin
  if p_tipo = 'categoria' then delete from catalogo_categorias where id = p_id and slug = p_slug;
  elsif p_tipo = 'produto' then delete from catalogo_produtos where id = p_id and slug = p_slug;
  elsif p_tipo = 'avaliacao' then delete from catalogo_avaliacoes where id = p_id and slug = p_slug;
  elsif p_tipo = 'contato' then delete from catalogo_contatos where id = p_id and slug = p_slug;
  elsif p_tipo = 'produtos' then delete from catalogo_produtos where slug = p_slug and id != coalesce(p_id, 0);
  elsif p_tipo = 'categorias' then delete from catalogo_categorias where slug = p_slug and id != coalesce(p_id, 0);
  elsif p_tipo = 'movimentos' then delete from catalogo_movimentos where slug = p_slug and id != coalesce(p_id, 0);
  end if;
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_apagar_variacoes(v_id bigint, v_keep text[]) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$ begin
  delete from catalogo_estoque where produto_id = v_id and concat_ws(chr(124), cor, tamanho) != all (v_keep);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_limpar_estoque(p_slug text, v_id bigint, v_keep text[]) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
begin
  insert into catalogo_movimentos (slug, produto_id, produto_nome, cor, tamanho, delta, saldo, motivo)
  select p_slug, v_id, p.nome, e.cor, e.tamanho, 0 - e.qtd, 0, 'variacao removida'
  from catalogo_estoque e join catalogo_produtos p on p.id = e.produto_id
  where e.produto_id = v_id and e.qtd != 0 and concat_ws(chr(124), e.cor, e.tamanho) != all (v_keep);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_gravar_estoque(p_slug text, v_id bigint, est jsonb, p_motivo text) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare k text; x jsonb; v_cor text; v_tam text; v_q int; v_old int; v_keep text[] := '{}';
begin
  for k, x in select * from jsonb_each(est) loop
    v_cor := split_part(k, '|', 1); v_tam := split_part(k, '|', 2);
    v_q := least(greatest(coalesce((x #>> '{}')::int, 0), 0), 1000000);
    v_keep := v_keep || concat_ws(chr(124), v_cor, v_tam);
    v_old := null;
    select qtd into v_old from catalogo_estoque where produto_id = v_id and cor = v_cor and tamanho = v_tam;
    if v_old is null then insert into catalogo_estoque (produto_id, cor, tamanho, qtd) values (v_id, v_cor, v_tam, 0); end if;
    perform catalogo_mover(p_slug, v_id, v_cor, v_tam, v_q - coalesce(v_old, 0), p_motivo, null);
  end loop;
  perform catalogo_limpar_estoque(p_slug, v_id, v_keep);
  perform catalogo_apagar_variacoes(v_id, v_keep);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_gravar_produto(p_slug text, d jsonb, p_motivo text) RETURNS bigint LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_id bigint := nullif(d->>'id', '')::bigint; v_fotos jsonb := '[]'::jsonb; v_cores jsonb := '[]'::jsonb; v_tams jsonb := '[]'::jsonb; x jsonb;
begin
  for x in select * from jsonb_array_elements(coalesce(d->'fotos', '[]')) loop
    if jsonb_typeof(x) = 'string' and catalogo_url_ok(x #>> '{}') and jsonb_array_length(v_fotos) < 8 then v_fotos := v_fotos || x; end if;
  end loop;
  for x in select * from jsonb_array_elements(coalesce(d->'cores', '[]')) loop
    if jsonb_typeof(x) = 'array' and char_length(btrim(x->>0)) between 1 and 30 and position('|' in x->>0) = 0 and coalesce(x->>1, '') ~ '^(#[0-9A-Fa-f]{6})?$' and jsonb_array_length(v_cores) < 20 then
      v_cores := v_cores || jsonb_build_array(jsonb_build_array(btrim(x->>0), coalesce(x->>1, ''))); end if;
  end loop;
  for x in select * from jsonb_array_elements(coalesce(d->'tamanhos', '[]')) loop
    if jsonb_typeof(x) = 'string' and char_length(btrim(x #>> '{}')) between 1 and 20 and position('|' in x #>> '{}') = 0 and jsonb_array_length(v_tams) < 30 then v_tams := v_tams || to_jsonb(btrim(x #>> '{}')); end if;
  end loop;
  if v_id is null then
    insert into catalogo_produtos (slug, nome, preco) values (p_slug, 'Produto', 0) returning id into v_id;
  elsif not exists (select 1 from catalogo_produtos where id = v_id and slug = p_slug) then raise exception 'produto_inexistente';
  end if;
  update catalogo_produtos set
    sku = left(upper(regexp_replace(coalesce(d->>'sku', ''), '[^A-Za-z0-9-]', '', 'g')), 40),
    nome = left(btrim(coalesce(nullif(d->>'nome', ''), 'Produto')), 120), marca = left(coalesce(d->>'marca', ''), 60), categoria = left(coalesce(d->>'categoria', ''), 40),
    preco = least(greatest(coalesce(nullif(d->>'preco', '')::numeric, 0), 0), 999999),
    preco_de = nullif(least(greatest(coalesce(nullif(d->>'preco_de', '')::numeric, 0), 0), 999999), 0),
    desenho = left(coalesce(d->>'desenho', ''), 20), fotos = v_fotos,
    descricao = left(coalesce(d->>'descricao', ''), 2000), composicao = left(coalesce(d->>'composicao', ''), 200),
    destaque = coalesce((d->>'destaque')::boolean, false), oferta = coalesce((d->>'oferta')::boolean, false), selo = left(upper(coalesce(d->>'selo', '')), 16),
    ativo = coalesce((d->>'ativo')::boolean, true), ordem = coalesce(nullif(d->>'ordem', '')::int, 0),
    cores = v_cores, tamanhos = v_tams,
    canais = case when jsonb_typeof(d->'canais') = 'object' then d->'canais' else canais end,
    atualizado = now()
  where id = v_id;
  if jsonb_typeof(d->'estoque') = 'object' then perform catalogo_gravar_estoque(p_slug, v_id, d->'estoque', p_motivo); end if;
  return v_id;
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_salvar_categoria(p_slug text, d jsonb) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_id bigint := nullif(d->>'id', '')::bigint; v_foto text := case when catalogo_url_ok(coalesce(d->>'foto', '')) then d->>'foto' else '' end;
  v_cor text := case when coalesce(d->>'cor', '') ~ '^#[0-9A-Fa-f]{6}$' then d->>'cor' else '' end;
begin
  if char_length(btrim(coalesce(d->>'nome', ''))) = 0 then raise exception 'nome_invalido'; end if;
  if v_id is null then
    insert into catalogo_categorias (slug, chave, nome, chamada, desenho, cor, foto, ordem)
    values (p_slug, left(coalesce(nullif(regexp_replace(lower(coalesce(d->>'chave', '')), '[^a-z0-9-]', '', 'g'), ''), 'cat-' || floor(random() * 1000000)::text), 40),
            left(btrim(d->>'nome'), 60), left(coalesce(d->>'chamada', ''), 80), left(coalesce(d->>'desenho', ''), 20), v_cor, v_foto,
            coalesce(nullif(d->>'ordem', '')::int, (select coalesce(max(ordem), 0) + 1 from catalogo_categorias where slug = p_slug)));
  else
    update catalogo_categorias set nome = left(btrim(d->>'nome'), 60), chamada = left(coalesce(d->>'chamada', ''), 80), desenho = left(coalesce(d->>'desenho', ''), 20),
      cor = v_cor, foto = v_foto, ordem = coalesce(nullif(d->>'ordem', '')::int, ordem)
    where id = v_id and slug = p_slug;
  end if;
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_salvar_avaliacao(p_slug text, d jsonb) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_id bigint := nullif(d->>'id', '')::bigint; v_prod bigint := nullif(d->>'produto_id', '')::bigint;
begin
  if v_prod is not null and not exists (select 1 from catalogo_produtos where id = v_prod and slug = p_slug) then raise exception 'produto_inexistente'; end if;
  if v_id is null then
    insert into catalogo_avaliacoes (slug, produto_id, nome, cidade, nota, texto, origem, variacao, quando, visivel, verificada)
    values (p_slug, v_prod, left(btrim(d->>'nome'), 60), left(coalesce(d->>'cidade', ''), 60), (d->>'nota')::int, left(btrim(d->>'texto'), 600),
            coalesce(d->>'origem', ''), left(coalesce(d->>'variacao', ''), 60), left(coalesce(d->>'quando', ''), 30), coalesce((d->>'visivel')::boolean, true), coalesce((d->>'verificada')::boolean, true));
  else
    update catalogo_avaliacoes set produto_id = v_prod, nome = left(btrim(d->>'nome'), 60), cidade = left(coalesce(d->>'cidade', ''), 60),
      nota = (d->>'nota')::int, texto = left(btrim(d->>'texto'), 600), origem = coalesce(d->>'origem', ''), variacao = left(coalesce(d->>'variacao', ''), 60),
      quando = left(coalesce(d->>'quando', ''), 30), visivel = coalesce((d->>'visivel')::boolean, true), verificada = coalesce((d->>'verificada')::boolean, true)
    where id = v_id and slug = p_slug;
  end if;
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_pedido_status(p_slug text, p_id bigint, v_novo text) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_ped catalogo_pedidos; it jsonb; v_baixa boolean;
begin
  if not (v_novo = any (array['novo', 'confirmado', 'enviado', 'entregue', 'cancelado'])) then raise exception 'status_invalido'; end if;
  select * into v_ped from catalogo_pedidos where id = p_id and slug = p_slug for update;
  if not found then raise exception 'pedido_inexistente'; end if;
  v_baixa := v_ped.estoque_baixado;
  if v_novo = any (array['confirmado', 'enviado', 'entregue']) and not v_baixa then
    for it in select * from jsonb_array_elements(v_ped.itens) loop
      perform catalogo_mover(p_slug, (it->>'id')::bigint, coalesce(it->>'cor', ''), coalesce(it->>'tam', ''), 0 - (it->>'qtd')::int, 'venda #' || v_ped.numero, v_ped.id);
    end loop;
    v_baixa := true;
  elsif v_novo = any (array['cancelado', 'novo']) and v_baixa then
    for it in select * from jsonb_array_elements(v_ped.itens) loop
      perform catalogo_mover(p_slug, (it->>'id')::bigint, coalesce(it->>'cor', ''), coalesce(it->>'tam', ''), (it->>'qtd')::int, 'devolucao #' || v_ped.numero, v_ped.id);
    end loop;
    v_baixa := false;
  end if;
  update catalogo_pedidos set status = v_novo, estoque_baixado = v_baixa, atualizado = now() where id = v_ped.id;
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_importar(p_slug text, d jsonb) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare x jsonb;
begin
  if jsonb_typeof(d->'categorias') != 'array' or jsonb_typeof(d->'produtos') != 'array' or jsonb_array_length(d->'produtos') > 300 then raise exception 'dados_invalidos'; end if;
  perform catalogo_apagar(p_slug, 'produtos', null);
  perform catalogo_apagar(p_slug, 'categorias', null);
  perform catalogo_apagar(p_slug, 'movimentos', null);
  for x in select * from jsonb_array_elements(d->'categorias') loop
    perform catalogo_salvar_categoria(p_slug, jsonb_build_object('chave', x->'id', 'nome', x->'nome', 'chamada', x->'chamada', 'desenho', x->'desenho', 'cor', x->'cor', 'foto', x->'foto'));
  end loop;
  for x in select * from jsonb_array_elements(d->'produtos') loop
    perform catalogo_gravar_produto(p_slug, jsonb_build_object('nome', x->'nome', 'sku', x->'sku', 'marca', x->'marca', 'categoria', x->'cat', 'preco', x->'preco', 'preco_de', x->'de',
      'desenho', x->'desenho', 'fotos', coalesce(x->'fotos', '[]'), 'descricao', x->'desc', 'composicao', x->'composicao', 'destaque', x->'destaque', 'oferta', x->'oferta',
      'selo', x->'selo', 'cores', x->'cores', 'tamanhos', x->'tamanhos', 'estoque', x->'estoque'), 'entrada inicial');
  end loop;
end $function$;

-- ---------- públicas: vitrine ----------
CREATE OR REPLACE FUNCTION public.catalogo_publico(p_slug text) RETURNS jsonb LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  select jsonb_build_object(
    'slug', c.slug, 'nome', c.nome, 'loja', c.loja,
    'categorias', (select coalesce(jsonb_agg(jsonb_build_object('id', k.chave, 'nome', k.nome, 'chamada', k.chamada, 'desenho', k.desenho, 'cor', k.cor, 'foto', k.foto) order by k.ordem, k.id), '[]'::jsonb)
                   from catalogo_categorias k where k.slug = c.slug),
    'produtos', (select coalesce(jsonb_agg(jsonb_build_object(
        'id', p.id::text, 'sku', p.sku, 'nome', p.nome, 'marca', p.marca, 'cat', p.categoria, 'preco', p.preco, 'de', p.preco_de,
        'desenho', p.desenho, 'fotos', p.fotos, 'desc', p.descricao, 'composicao', p.composicao, 'destaque', p.destaque, 'oferta', p.oferta,
        'selo', p.selo, 'cores', p.cores, 'tamanhos', p.tamanhos,
        'estoque', (select coalesce(jsonb_object_agg(e.cor || '|' || e.tamanho, least(e.qtd, 99)), '{}'::jsonb) from catalogo_estoque e where e.produto_id = p.id and e.qtd > 0),
        'avaliacoes', (select coalesce(jsonb_agg(jsonb_build_object('nome', a.nome, 'cidade', a.cidade, 'nota', a.nota, 'texto', a.texto, 'origem', a.origem, 'variacao', a.variacao, 'quando', a.quando, 'verificada', a.verificada) order by a.criado desc), '[]'::jsonb)
                       from catalogo_avaliacoes a where a.produto_id = p.id and a.visivel)
      ) order by p.ordem, p.id), '[]'::jsonb) from catalogo_produtos p where p.slug = c.slug and p.ativo),
    'avaliacoes', (select coalesce(jsonb_agg(jsonb_build_object('nome', a.nome, 'cidade', a.cidade, 'nota', a.nota, 'texto', a.texto, 'origem', a.origem, 'variacao', a.variacao, 'quando', a.quando, 'verificada', a.verificada) order by a.criado desc), '[]'::jsonb)
                   from catalogo_avaliacoes a where a.slug = c.slug and a.produto_id is null and a.visivel)
  ) from catalogos c where c.slug = p_slug and c.ativo;
$function$;

CREATE OR REPLACE FUNCTION public.catalogo_pedido(p_slug text, p_codigo text, p_nome text, p_contato jsonb, p_itens jsonb, p_entrega text, p_pagamento text)
 RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare
  c catalogos; it jsonb; p catalogo_produtos; v_qtd int; v_cor text; v_tam text; v_est int;
  v_itens jsonb := '[]'::jsonb; v_sub numeric := 0; v_desc numeric := 0; v_pct numeric; v_num int; v_ped catalogo_pedidos;
begin
  select * into c from catalogos where slug = p_slug and ativo;
  if not found then raise exception 'loja_indisponivel'; end if;
  select * into v_ped from catalogo_pedidos where slug = p_slug and codigo = p_codigo;
  if found then return jsonb_build_object('numero', v_ped.numero, 'codigo', v_ped.codigo, 'total', v_ped.total); end if;
  if (select count(*) from catalogo_pedidos where slug = p_slug and criado > now() - interval '1 minute') >= 10 then raise exception 'muitos_pedidos'; end if;
  if p_codigo !~ '^[A-Z0-9]{4,12}$' then raise exception 'codigo_invalido'; end if;
  p_nome := btrim(coalesce(p_nome, ''));
  if char_length(p_nome) not between 1 and 80 then raise exception 'nome_invalido'; end if;
  if jsonb_typeof(p_itens) <> 'array' or jsonb_array_length(p_itens) not between 1 and 50 then raise exception 'itens_invalidos'; end if;
  for it in select * from jsonb_array_elements(p_itens) loop
    v_qtd := (it->>'qtd')::int; v_cor := coalesce(it->>'cor', ''); v_tam := coalesce(it->>'tam', '');
    if v_qtd is null or v_qtd not between 1 and 99 then raise exception 'quantidade_invalida'; end if;
    select * into p from catalogo_produtos where id = (it->>'id')::bigint and slug = p_slug and ativo;
    if not found then raise exception 'produto_indisponivel'; end if;
    select qtd into v_est from catalogo_estoque where produto_id = p.id and cor = v_cor and tamanho = v_tam;
    if coalesce(v_est, 0) < v_qtd then raise exception 'sem_estoque:%', p.nome; end if;
    v_sub := v_sub + p.preco * v_qtd;
    v_itens := v_itens || jsonb_build_object('id', p.id, 'nome', p.nome, 'sku', p.sku, 'cor', v_cor, 'tam', v_tam, 'qtd', v_qtd, 'preco', p.preco);
  end loop;
  if coalesce(p_pagamento, '') ilike '%pix%' then
    v_pct := least(greatest(coalesce(nullif(c.loja->>'descontoPix', '')::numeric, 0), 0), 50);
    v_desc := round(v_sub * v_pct / 100, 2);
  end if;
  perform pg_advisory_xact_lock(hashtext('catalogo_pedido:' || p_slug));
  select coalesce(max(numero), 1000) + 1 into v_num from catalogo_pedidos where slug = p_slug;
  insert into catalogo_pedidos (slug, numero, codigo, nome, contato, itens, subtotal, desconto, total, entrega, pagamento)
  values (p_slug, v_num, p_codigo, p_nome,
          jsonb_build_object('cep', left(coalesce(p_contato->>'cep', ''), 10), 'endereco', left(coalesce(p_contato->>'endereco', ''), 200)),
          v_itens, v_sub, v_desc, v_sub - v_desc, left(coalesce(p_entrega, ''), 60), left(coalesce(p_pagamento, ''), 60))
  returning * into v_ped;
  return jsonb_build_object('numero', v_ped.numero, 'codigo', v_ped.codigo, 'total', v_ped.total);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_contato(p_slug text, p_nome text, p_whatsapp text, p_email text, p_aceita boolean)
 RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_zap text := regexp_replace(coalesce(p_whatsapp, ''), '\D', '', 'g'); v_mail text := lower(btrim(coalesce(p_email, '')));
begin
  if not exists (select 1 from catalogos where slug = p_slug and ativo) then raise exception 'loja_indisponivel'; end if;
  if not coalesce(p_aceita, false) then raise exception 'sem_consentimento'; end if;
  p_nome := btrim(coalesce(p_nome, ''));
  if char_length(p_nome) not between 1 and 80 then raise exception 'nome_invalido'; end if;
  if v_zap <> '' and char_length(v_zap) not between 10 and 13 then raise exception 'whatsapp_invalido'; end if;
  if v_mail <> '' and (char_length(v_mail) > 120 or v_mail !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$') then raise exception 'email_invalido'; end if;
  if v_zap = '' and v_mail = '' then raise exception 'contato_vazio'; end if;
  if (select count(*) from catalogo_contatos where slug = p_slug and criado > now() - interval '1 minute') >= 20 then raise exception 'muitos_cadastros'; end if;
  begin
    if v_mail <> '' then
      insert into catalogo_contatos (slug, nome, whatsapp, email) values (p_slug, p_nome, v_zap, v_mail)
      on conflict (slug, lower(email)) where email <> '' do update set nome = excluded.nome, aceita = true, saiu_em = null,
        whatsapp = case when excluded.whatsapp <> '' then excluded.whatsapp else catalogo_contatos.whatsapp end;
    else
      insert into catalogo_contatos (slug, nome, whatsapp) values (p_slug, p_nome, v_zap)
      on conflict (slug, whatsapp) where whatsapp <> '' do update set nome = excluded.nome, aceita = true, saiu_em = null;
    end if;
  exception when unique_violation then null;  -- WhatsApp já cadastrado com outro e-mail: mantém o cadastro que existe
  end;
  return jsonb_build_object('ok', true);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_visita(p_slug text) RETURNS void LANGUAGE sql SECURITY DEFINER SET search_path TO 'public' AS $function$
  insert into catalogo_visitas (slug, n) select p_slug, 1 where exists (select 1 from catalogos where slug = p_slug and ativo)
  on conflict (slug, dia) do update set n = catalogo_visitas.n + 1;
$function$;

-- ---------- públicas com código de acesso: painel ----------
CREATE OR REPLACE FUNCTION public.catalogo_painel(p_slug text, p_token text) RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
begin
  if not catalogo_ok(p_slug, p_token) then raise exception 'acesso_negado'; end if;
  return (select jsonb_build_object(
    'slug', c.slug, 'nome', c.nome, 'ativo', c.ativo, 'loja', c.loja, 'onboarding', c.onboarding,
    'categorias', (select coalesce(jsonb_agg(to_jsonb(k) - 'slug' order by k.ordem, k.id), '[]'::jsonb) from catalogo_categorias k where k.slug = c.slug),
    'produtos', (select coalesce(jsonb_agg((to_jsonb(p) - 'slug') || jsonb_build_object('estoque',
        (select coalesce(jsonb_object_agg(e.cor || '|' || e.tamanho, e.qtd), '{}'::jsonb) from catalogo_estoque e where e.produto_id = p.id)) order by p.ordem, p.id), '[]'::jsonb)
      from catalogo_produtos p where p.slug = c.slug),
    'pedidos', (select coalesce(jsonb_agg(to_jsonb(x) - 'slug' order by x.criado desc), '[]'::jsonb)
      from (select * from catalogo_pedidos where slug = c.slug order by criado desc limit 300) x),
    'avaliacoes', (select coalesce(jsonb_agg(to_jsonb(a) - 'slug' order by a.criado desc), '[]'::jsonb) from catalogo_avaliacoes a where a.slug = c.slug),
    'contatos', (select coalesce(jsonb_agg(to_jsonb(x) - 'slug' order by x.criado desc), '[]'::jsonb)
      from (select * from catalogo_contatos where slug = c.slug order by criado desc limit 2000) x),
    'visitas', (select coalesce(jsonb_agg(jsonb_build_object('dia', v.dia, 'n', v.n) order by v.dia), '[]'::jsonb)
      from catalogo_visitas v where v.slug = c.slug and v.dia > (now() at time zone 'America/Sao_Paulo')::date - 60),
    'movimentos', (select coalesce(jsonb_agg(to_jsonb(x) - 'slug' order by x.em desc), '[]'::jsonb)
      from (select * from catalogo_movimentos where slug = c.slug order by em desc limit 200) x)
  ) from catalogos c where c.slug = p_slug);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_painel_salvar(p_slug text, p_token text, p_acao text, d jsonb) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_tok text;
begin
  if not catalogo_ok(p_slug, p_token) then raise exception 'acesso_negado'; end if;
  d := coalesce(d, '{}'::jsonb);
  if p_acao = 'loja' then
    if jsonb_typeof(d->'loja') != 'object' or octet_length((d->'loja')::text) > 60000 then raise exception 'dados_invalidos'; end if;
    update catalogos set loja = d->'loja', nome = left(btrim(coalesce(nullif(d->'loja'->>'nome', ''), nome)), 80),
      onboarding = case when jsonb_typeof(d->'onboarding') = 'object' then d->'onboarding' else onboarding end, atualizado = now()
    where slug = p_slug;
  elsif p_acao = 'categoria_salvar' then perform catalogo_salvar_categoria(p_slug, d);
  elsif p_acao = 'categoria_excluir' then perform catalogo_apagar(p_slug, 'categoria', (d->>'id')::bigint);
  elsif p_acao = 'produto_salvar' then perform catalogo_gravar_produto(p_slug, d, 'ajuste');
  elsif p_acao = 'produto_excluir' then perform catalogo_apagar(p_slug, 'produto', (d->>'id')::bigint);
  elsif p_acao = 'estoque_ajustar' then
    if not exists (select 1 from catalogo_produtos where id = (d->>'produto_id')::bigint and slug = p_slug) then raise exception 'produto_inexistente'; end if;
    perform catalogo_mover(p_slug, (d->>'produto_id')::bigint, coalesce(d->>'cor', ''), coalesce(d->>'tamanho', ''),
      least(greatest((d->>'delta')::int, -1000000), 1000000), left(coalesce(nullif(d->>'motivo', ''), 'ajuste'), 30), null);
  elsif p_acao = 'pedido_status' then perform catalogo_pedido_status(p_slug, (d->>'id')::bigint, d->>'status');
  elsif p_acao = 'avaliacao_salvar' then perform catalogo_salvar_avaliacao(p_slug, d);
  elsif p_acao = 'avaliacao_excluir' then perform catalogo_apagar(p_slug, 'avaliacao', (d->>'id')::bigint);
  elsif p_acao = 'contato_excluir' then perform catalogo_apagar(p_slug, 'contato', (d->>'id')::bigint);
  elsif p_acao = 'importar' then perform catalogo_importar(p_slug, d);
  elsif p_acao = 'trocar_codigo' then
    v_tok := encode(extensions.gen_random_bytes(24), 'hex');
    update catalogos set painel_token = encode(sha256(convert_to(v_tok, 'UTF8')), 'hex') where slug = p_slug;
    return jsonb_build_object('token', v_tok);
  else raise exception 'acao_invalida';
  end if;
  return catalogo_painel(p_slug, p_token);
end $function$;

-- ---------- permissões ----------
revoke all on function public.catalogo_url_ok(text), public.catalogo_ok(text, text), public.catalogo_mover(text, bigint, text, text, int, text, bigint),
  public.catalogo_apagar(text, text, bigint), public.catalogo_apagar_variacoes(bigint, text[]), public.catalogo_limpar_estoque(text, bigint, text[]),
  public.catalogo_gravar_estoque(text, bigint, jsonb, text), public.catalogo_gravar_produto(text, jsonb, text), public.catalogo_salvar_categoria(text, jsonb),
  public.catalogo_salvar_avaliacao(text, jsonb), public.catalogo_pedido_status(text, bigint, text), public.catalogo_importar(text, jsonb) from public, anon, authenticated;
revoke all on function public.catalogo_publico(text), public.catalogo_pedido(text, text, text, jsonb, jsonb, text, text), public.catalogo_contato(text, text, text, text, boolean),
  public.catalogo_visita(text), public.catalogo_painel(text, text), public.catalogo_painel_salvar(text, text, text, jsonb) from public;
grant execute on function public.catalogo_publico(text), public.catalogo_pedido(text, text, text, jsonb, jsonb, text, text), public.catalogo_contato(text, text, text, text, boolean),
  public.catalogo_visita(text), public.catalogo_painel(text, text), public.catalogo_painel_salvar(text, text, text, jsonb) to anon, authenticated;

-- ---------- criar uma loja ----------
-- O código de acesso é gerado fora do banco e só o sha256 é salvo:
-- insert into catalogos (slug, nome, painel_token) values ('minha-loja', 'Minha Loja', encode(sha256(convert_to('<código>', 'UTF8')), 'hex'));
-- Depois, o lojista entra no painel com ?loja=minha-loja e faz a configuração inicial.
