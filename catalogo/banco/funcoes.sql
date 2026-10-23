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
declare v_id bigint := nullif(d->>'id', '')::bigint; v_fotos jsonb := '[]'::jsonb; v_cores jsonb := '[]'::jsonb; v_tams jsonb := '[]'::jsonb; x jsonb; v_cf text;
begin
  for x in select * from jsonb_array_elements(coalesce(d->'fotos', '[]')) loop
    if jsonb_typeof(x) = 'string' and catalogo_url_ok(x #>> '{}') and jsonb_array_length(v_fotos) < 5 then v_fotos := v_fotos || x; end if;
  end loop;
  -- cada cor: [nome, #hex] ou [nome, #hex, foto da cor]
  for x in select * from jsonb_array_elements(coalesce(d->'cores', '[]')) loop
    if jsonb_typeof(x) = 'array' and char_length(btrim(x->>0)) between 1 and 30 and position('|' in x->>0) = 0 and coalesce(x->>1, '') ~ '^(#[0-9A-Fa-f]{6})?$' and jsonb_array_length(v_cores) < 20 then
      v_cf := coalesce(x->>2, '');
      if catalogo_url_ok(v_cf) then v_cores := v_cores || jsonb_build_array(jsonb_build_array(btrim(x->>0), coalesce(x->>1, ''), v_cf));
      else v_cores := v_cores || jsonb_build_array(jsonb_build_array(btrim(x->>0), coalesce(x->>1, ''))); end if;
    end if;
  end loop;
  for x in select * from jsonb_array_elements(coalesce(d->'tamanhos', '[]')) loop
    if jsonb_typeof(x) = 'string' and char_length(btrim(x #>> '{}')) between 1 and 20 and position('|' in x #>> '{}') = 0 and jsonb_array_length(v_tams) < 30 then v_tams := v_tams || to_jsonb(btrim(x #>> '{}')); end if;
  end loop;
  if v_id is null then
    if (select count(*) from catalogo_produtos where slug = p_slug) >= (select (catalogo_limites(plano)->>'produtos')::int from catalogos where slug = p_slug) then raise exception 'limite_plano'; end if;
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

-- =====================================================================
-- 23/10/2026 (2ª parte): cupons, trocas, analytics e white label.
-- Substituem as versões acima de catalogo_apagar, catalogo_pedido_status,
-- catalogo_painel e catalogo_painel_salvar. A loja passa a usar
-- catalogo_fazer_pedido (com cupom e origem); catalogo_pedido fica sem acesso público.
-- =====================================================================
CREATE OR REPLACE FUNCTION public.catalogo_cupom_calc(p_slug text, p_codigo text, p_sub numeric) RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
declare k catalogo_cupons; v_hoje date := (now() at time zone 'America/Sao_Paulo')::date; v_desc numeric := 0;
begin
  if coalesce(btrim(p_codigo), '') = '' then return jsonb_build_object('ok', false, 'erro', 'cupom_vazio'); end if;
  select * into k from catalogo_cupons where slug = p_slug and codigo = upper(btrim(p_codigo)) and ativo;
  if not found then return jsonb_build_object('ok', false, 'erro', 'cupom_invalido'); end if;
  if k.inicio is not null and v_hoje < k.inicio then return jsonb_build_object('ok', false, 'erro', 'cupom_ainda_nao_vale'); end if;
  if k.fim is not null and v_hoje > k.fim then return jsonb_build_object('ok', false, 'erro', 'cupom_expirado'); end if;
  if k.limite is not null and k.usos >= k.limite then return jsonb_build_object('ok', false, 'erro', 'cupom_esgotado'); end if;
  if p_sub < k.minimo then return jsonb_build_object('ok', false, 'erro', 'cupom_minimo', 'minimo', k.minimo); end if;
  if k.tipo = 'pct' then v_desc := round(p_sub * least(k.valor, 90) / 100, 2);
  elsif k.tipo = 'valor' then v_desc := least(k.valor, p_sub);
  end if;
  return jsonb_build_object('ok', true, 'codigo', k.codigo, 'tipo', k.tipo, 'valor', k.valor, 'minimo', k.minimo, 'desconto', v_desc, 'frete_gratis', k.tipo = 'frete', 'descricao', k.descricao);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_cupom(p_slug text, p_codigo text, p_subtotal numeric) RETURNS jsonb LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  select case when exists (select 1 from catalogos where slug = p_slug and ativo)
    then catalogo_cupom_calc(p_slug, p_codigo, least(greatest(coalesce(p_subtotal, 0), 0), 10000000))
    else jsonb_build_object('ok', false, 'erro', 'loja_indisponivel') end;
$function$;

-- Origens aceitas no analytics e nos pedidos (lista fechada).
CREATE OR REPLACE FUNCTION public.catalogo_origem_ok(p text) RETURNS text LANGUAGE sql IMMUTABLE SET search_path TO 'public' AS $function$
  select case when p = any (array['instagram','whatsapp','google','biosite','facebook','tiktok','email','direto','outro']) then p else '' end;
$function$;

CREATE OR REPLACE FUNCTION public.catalogo_fazer_pedido(p_slug text, p_codigo text, p_nome text, p_contato jsonb, p_itens jsonb, p_entrega text, p_pagamento text, p_cupom text, p_origem text)
 RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare
  c catalogos; it jsonb; p catalogo_produtos; v_qtd int; v_cor text; v_tam text; v_est int; v_cup jsonb; v_cdesc numeric := 0; v_fg boolean := false; v_cod text := '';
  v_itens jsonb := '[]'::jsonb; v_sub numeric := 0; v_desc numeric := 0; v_pct numeric; v_num int; v_ped catalogo_pedidos; v_zap text;
begin
  select * into c from catalogos where slug = p_slug and ativo;
  if not found then raise exception 'loja_indisponivel'; end if;
  select * into v_ped from catalogo_pedidos where slug = p_slug and codigo = p_codigo;
  if found then return jsonb_build_object('numero', v_ped.numero, 'codigo', v_ped.codigo, 'total', v_ped.total); end if;
  if (select count(*) from catalogo_pedidos where slug = p_slug and criado > now() - interval '1 minute') >= 10 then raise exception 'muitos_pedidos'; end if;
  if p_codigo !~ '^[A-Z0-9]{4,12}$' then raise exception 'codigo_invalido'; end if;
  p_nome := btrim(coalesce(p_nome, ''));
  if char_length(p_nome) not between 1 and 80 then raise exception 'nome_invalido'; end if;
  -- WhatsApp do cliente (para o CRM reconhecer quem volta a comprar): só dígitos, 10 a 13.
  v_zap := regexp_replace(coalesce(p_contato->>'whatsapp', ''), '[^0-9]', '', 'g');
  if char_length(v_zap) not between 10 and 13 then v_zap := ''; end if;
  if jsonb_typeof(p_itens) != 'array' or jsonb_array_length(p_itens) not between 1 and 50 then raise exception 'itens_invalidos'; end if;
  for it in select * from jsonb_array_elements(p_itens) loop
    v_qtd := (it->>'qtd')::int; v_cor := coalesce(it->>'cor', ''); v_tam := coalesce(it->>'tam', '');
    if v_qtd is null or v_qtd not between 1 and 99 then raise exception 'quantidade_invalida'; end if;
    select * into p from catalogo_produtos where id = (it->>'id')::bigint and slug = p_slug and ativo;
    if not found then raise exception 'produto_indisponivel'; end if;
    select qtd into v_est from catalogo_estoque where produto_id = p.id and cor = v_cor and tamanho = v_tam;
    if coalesce(v_est, 0) < v_qtd then raise exception 'sem_estoque:%', p.nome; end if;
    v_sub := v_sub + p.preco * v_qtd;
    v_itens := v_itens || jsonb_build_object('id', p.id, 'nome', p.nome, 'sku', p.sku, 'cat', p.categoria, 'cor', v_cor, 'tam', v_tam, 'qtd', v_qtd, 'preco', p.preco);
  end loop;
  if coalesce(btrim(p_cupom), '') != '' then
    v_cup := catalogo_cupom_calc(p_slug, p_cupom, v_sub);
    if not (v_cup->>'ok')::boolean then raise exception '%', v_cup->>'erro'; end if;
    v_cdesc := (v_cup->>'desconto')::numeric; v_fg := (v_cup->>'frete_gratis')::boolean; v_cod := v_cup->>'codigo';
  end if;
  -- Frete grátis automático acima do valor configurado no painel.
  if not v_fg and coalesce(c.loja->>'freteGratisAcima', '') ~ '^[0-9]+(\.[0-9]+)?$' and (c.loja->>'freteGratisAcima')::numeric > 0 and v_sub >= (c.loja->>'freteGratisAcima')::numeric then v_fg := true; end if;
  if coalesce(p_pagamento, '') ilike '%pix%' then
    v_pct := least(greatest(coalesce(nullif(c.loja->>'descontoPix', '')::numeric, 0), 0), 50);
    v_desc := round((v_sub - v_cdesc) * v_pct / 100, 2);
  end if;
  perform pg_advisory_xact_lock(hashtext('catalogo_pedido:' || p_slug));
  select coalesce(max(numero), 1000) + 1 into v_num from catalogo_pedidos where slug = p_slug;
  insert into catalogo_pedidos (slug, numero, codigo, nome, contato, itens, subtotal, desconto, total, entrega, pagamento, cupom, cupom_desconto, frete_gratis, origem)
  values (p_slug, v_num, p_codigo, p_nome,
          jsonb_build_object('cep', left(coalesce(p_contato->>'cep', ''), 10), 'endereco', left(coalesce(p_contato->>'endereco', ''), 200), 'whatsapp', v_zap),
          v_itens, v_sub, v_desc, v_sub - v_cdesc - v_desc, left(coalesce(p_entrega, ''), 60), left(coalesce(p_pagamento, ''), 60), v_cod, v_cdesc, v_fg,
          catalogo_origem_ok(p_origem))
  returning * into v_ped;
  if v_cod != '' then update catalogo_cupons set usos = usos + 1 where slug = p_slug and codigo = v_cod; end if;
  return jsonb_build_object('numero', v_ped.numero, 'codigo', v_ped.codigo, 'total', v_ped.total, 'cupom_desconto', v_cdesc, 'desconto', v_desc, 'frete_gratis', v_fg);
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_evento(p_slug text, p_tipo text, p_alvo text, p_origem text) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_o text := coalesce(nullif(catalogo_origem_ok(p_origem), ''), 'outro');
begin
  if not (p_tipo = any (array['visita','produto','sacola','pedido','busca','cupom','avise','grupo'])) then return; end if;
  if not exists (select 1 from catalogos where slug = p_slug and ativo) then return; end if;
  insert into catalogo_ev_dia (slug, tipo, alvo, origem, n) values (p_slug, p_tipo, left(lower(btrim(coalesce(p_alvo, ''))), 40), v_o, 1)
  on conflict (slug, dia, tipo, alvo, origem) do update set n = catalogo_ev_dia.n + 1;
  if p_tipo = 'visita' then
    insert into catalogo_visitas (slug, n) values (p_slug, 1) on conflict (slug, dia) do update set n = catalogo_visitas.n + 1;
  end if;
end $function$;

-- White label: marca do parceiro na tela de entrada do painel (sem login).
CREATE OR REPLACE FUNCTION public.catalogo_marca(p_slug text) RETURNS jsonb LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  select jsonb_build_object('nome', c.nome, 'parceiro', coalesce(c.loja->'parceiro', '{}'::jsonb), 'cores', coalesce(c.loja->'cores', '{}'::jsonb))
  from catalogos c where c.slug = p_slug;
$function$;

CREATE OR REPLACE FUNCTION public.catalogo_salvar_cupom(p_slug text, d jsonb) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_id bigint := nullif(d->>'id', '')::bigint; v_cod text := upper(regexp_replace(coalesce(d->>'codigo', ''), '[^A-Za-z0-9_-]', '', 'g'));
begin
  if char_length(v_cod) not between 3 and 20 then raise exception 'cupom_codigo_invalido'; end if;
  if not (coalesce(d->>'tipo', 'pct') = any (array['pct','valor','frete'])) then raise exception 'dados_invalidos'; end if;
  if v_id is null then
    insert into catalogo_cupons (slug, codigo, tipo, valor, minimo, inicio, fim, limite, ativo, descricao)
    values (p_slug, v_cod, coalesce(d->>'tipo', 'pct'), least(greatest(coalesce(nullif(d->>'valor', '')::numeric, 0), 0), 100000), greatest(coalesce(nullif(d->>'minimo', '')::numeric, 0), 0),
            nullif(d->>'inicio', '')::date, nullif(d->>'fim', '')::date, nullif(nullif(d->>'limite', '')::int, 0), coalesce((d->>'ativo')::boolean, true), left(coalesce(d->>'descricao', ''), 120));
  else
    update catalogo_cupons set codigo = v_cod, tipo = coalesce(d->>'tipo', 'pct'), valor = least(greatest(coalesce(nullif(d->>'valor', '')::numeric, 0), 0), 100000),
      minimo = greatest(coalesce(nullif(d->>'minimo', '')::numeric, 0), 0), inicio = nullif(d->>'inicio', '')::date, fim = nullif(d->>'fim', '')::date,
      limite = nullif(nullif(d->>'limite', '')::int, 0), ativo = coalesce((d->>'ativo')::boolean, true), descricao = left(coalesce(d->>'descricao', ''), 120)
    where id = v_id and slug = p_slug;
  end if;
exception when unique_violation then raise exception 'cupom_repetido';
end $function$;

CREATE OR REPLACE FUNCTION public.catalogo_registrar_troca(p_slug text, d jsonb) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
declare p catalogo_produtos; v_q int := coalesce(nullif(d->>'qtd', '')::int, 1); v_tipo text := coalesce(d->>'tipo', 'troca'); v_est int; v_num int;
  v_dc text := coalesce(d->>'de_cor', ''); v_dt text := coalesce(d->>'de_tam', ''); v_pc text := coalesce(d->>'para_cor', ''); v_pt text := coalesce(d->>'para_tam', '');
begin
  select * into p from catalogo_produtos where id = (d->>'produto_id')::bigint and slug = p_slug;
  if not found then raise exception 'produto_inexistente'; end if;
  if v_q not between 1 and 99 then raise exception 'quantidade_invalida'; end if;
  if nullif(d->>'pedido_id', '') is not null then
    select numero into v_num from catalogo_pedidos where id = (d->>'pedido_id')::bigint and slug = p_slug;
    if not found then raise exception 'pedido_inexistente'; end if;
  end if;
  if v_tipo = 'troca' then
    select qtd into v_est from catalogo_estoque where produto_id = p.id and cor = v_pc and tamanho = v_pt;
    if coalesce(v_est, 0) + (case when v_pc = v_dc and v_pt = v_dt then v_q else 0 end) < v_q then raise exception 'sem_estoque:%', p.nome; end if;
  end if;
  insert into catalogo_trocas (slug, pedido_id, pedido_numero, produto_id, produto_nome, de_cor, de_tam, para_cor, para_tam, qtd, tipo, motivo, valor, obs)
  values (p_slug, nullif(d->>'pedido_id', '')::bigint, v_num, p.id, p.nome, v_dc, v_dt, case when v_tipo = 'troca' then v_pc else '' end, case when v_tipo = 'troca' then v_pt else '' end,
          v_q, v_tipo, coalesce(d->>'motivo', 'outro'), greatest(coalesce(nullif(d->>'valor', '')::numeric, 0), 0), left(coalesce(d->>'obs', ''), 200));
  perform catalogo_mover(p_slug, p.id, v_dc, v_dt, v_q, case when v_tipo = 'troca' then 'troca (volta)' else 'devolucao' end || coalesce(' #' || v_num, ''), nullif(d->>'pedido_id', '')::bigint);
  if v_tipo = 'troca' then
    perform catalogo_mover(p_slug, p.id, v_pc, v_pt, 0 - v_q, 'troca (sai)' || coalesce(' #' || v_num, ''), nullif(d->>'pedido_id', '')::bigint);
  end if;
end $function$;

-- catalogo_apagar: ganhou o tipo 'cupom'.
-- catalogo_pedido_status: cancelar devolve o uso do cupom; reabrir conta de novo.
-- catalogo_painel: devolve também cupons, trocas, eventos (120 dias) e até 2000 pedidos.
-- catalogo_painel_salvar: ações cupom_salvar, cupom_excluir e troca_registrar.
-- (versões completas aplicadas no banco de teste; exportar com pg_get_functiondef antes de levar para a produção)

revoke all on function public.catalogo_cupom_calc(text, text, numeric), public.catalogo_salvar_cupom(text, jsonb), public.catalogo_registrar_troca(text, jsonb) from public, anon, authenticated;
revoke all on function public.catalogo_cupom(text, text, numeric), public.catalogo_fazer_pedido(text, text, text, jsonb, jsonb, text, text, text, text),
  public.catalogo_evento(text, text, text, text), public.catalogo_marca(text) from public;
grant execute on function public.catalogo_cupom(text, text, numeric), public.catalogo_fazer_pedido(text, text, text, jsonb, jsonb, text, text, text, text),
  public.catalogo_evento(text, text, text, text), public.catalogo_marca(text) to anon, authenticated;
revoke all on function public.catalogo_pedido(text, text, text, jsonb, jsonb, text, text) from anon, authenticated;


-- =====================================================================
-- Planos (Básico até 100 produtos; Mais até 1000), fotos e sitemap
-- (a coluna catalogos.plano está em catalogo.sql)
-- =====================================================================
-- Limites por plano: Básico até 100 produtos; Mais até 1000. Fotos contam arquivos no armazenamento (cada foto gera 2: grande e miniatura).
CREATE OR REPLACE FUNCTION public.catalogo_limites(p_plano text) RETURNS jsonb LANGUAGE sql IMMUTABLE SET search_path TO 'public' AS $function$
  select case when p_plano = 'mais' then jsonb_build_object('produtos', 1000, 'arquivos', 12000) else jsonb_build_object('produtos', 100, 'arquivos', 1600) end;
$function$;

CREATE OR REPLACE FUNCTION public.catalogo_plano(p_slug text, p_token text) RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_plano text;
begin
  if not catalogo_ok(p_slug, p_token) then raise exception 'acesso_negado'; end if;
  select plano into v_plano from catalogos where slug = p_slug;
  return jsonb_build_object('plano', v_plano, 'limites', catalogo_limites(v_plano),
    'produtos', (select count(*) from catalogo_produtos where slug = p_slug),
    'arquivos', (select count(*) from storage.objects where bucket_id = 'catalogo' and name like p_slug || '/%'));
end $function$;

-- Usado só pela função de envio de fotos (chave de serviço).
CREATE OR REPLACE FUNCTION public.catalogo_foto_ok(p_slug text, p_token text) RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
declare v_plano text;
begin
  if not catalogo_ok(p_slug, p_token) then return jsonb_build_object('ok', false); end if;
  select plano into v_plano from catalogos where slug = p_slug;
  return jsonb_build_object('ok', true, 'limite', (catalogo_limites(v_plano)->>'arquivos')::int,
    'arquivos', (select count(*) from storage.objects where bucket_id = 'catalogo' and name like p_slug || '/%'));
end $function$;

-- Arquivos da loja que ainda aparecem em algum lugar (produtos, cores, categorias, avaliações, aparência).
CREATE OR REPLACE FUNCTION public.catalogo_fotos_usadas(p_slug text) RETURNS SETOF text LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  select distinct m[1] from (
    select loja::text t from catalogos where slug = p_slug
    union all select fotos::text || cores::text from catalogo_produtos where slug = p_slug
    union all select coalesce(foto, '') from catalogo_categorias where slug = p_slug
  ) x, regexp_matches(x.t, '/object/public/catalogo/([A-Za-z0-9._/-]+)', 'g') m;
$function$;

revoke all on function public.catalogo_limites(text), public.catalogo_foto_ok(text, text), public.catalogo_fotos_usadas(text) from public, anon, authenticated;
grant execute on function public.catalogo_foto_ok(text, text), public.catalogo_fotos_usadas(text) to service_role;
revoke all on function public.catalogo_plano(text, text) from public;
grant execute on function public.catalogo_plano(text, text) to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('catalogo', 'catalogo', true, 409600, array['image/webp', 'image/jpeg', 'image/png']) on conflict (id) do nothing;

CREATE OR REPLACE FUNCTION public.catalogo_fotos_orfas(p_slug text) RETURNS SETOF text LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  select o.name from storage.objects o
  where o.bucket_id = 'catalogo' and o.name like p_slug || '/%' and o.created_at < now() - interval '1 hour'
    and regexp_replace(o.name, '-p(\.[a-z]+)$', '\1') not in (select catalogo_fotos_usadas(p_slug))
  limit 500;
$function$;
revoke all on function public.catalogo_fotos_orfas(text) from public, anon, authenticated;
grant execute on function public.catalogo_fotos_orfas(text) to service_role;

-- Lojas ativas (sem demonstração) e seus produtos visíveis, para o sitemap.xml do Google.
CREATE OR REPLACE FUNCTION public.catalogo_sitemap() RETURNS jsonb LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  select coalesce(jsonb_agg(jsonb_build_object('slug', c.slug, 'atualizado', c.atualizado,
    'produtos', (select coalesce(jsonb_agg(jsonb_build_object('id', p.id::text, 'atualizado', p.atualizado) order by p.id), '[]'::jsonb) from catalogo_produtos p where p.slug = c.slug and p.ativo))
    order by c.slug), '[]'::jsonb)
  from catalogos c where c.ativo and not c.demo;
$function$;
revoke all on function public.catalogo_sitemap() from public;
grant execute on function public.catalogo_sitemap() to anon, authenticated;
