# Roteiro de testes · Nour Catálogo

Marque cada item ao testar. Teste no computador **e** no celular, no tema claro **e** no escuro.
A loja de teste é `atelie-exemplo` (banco de teste). Os endereços e o código de acesso foram passados por mensagem e não ficam neste arquivo.

## 1. Loja: topo e navegação

- [ ] Faixa rotativa no topo passa as 3 frases sem parar e sem cortar texto.
- [ ] Linha de contatos: WhatsApp abre conversa com a loja; Instagram abre o perfil.
- [ ] Logo/nome volta para o início.
- [ ] Menu de categorias (computador) abre a página de cada categoria.
- [ ] Busca: digitar "vestido" filtra; apagar volta ao início; o endereço muda para `#busca-vestido`.
- [ ] Botão de tema (lua/sol) troca claro/escuro e lembra a escolha ao recarregar.
- [ ] Coração no topo abre Favoritos; contador mostra a quantidade.
- [ ] Sacola no topo abre a sacola; contador mostra a quantidade de peças.

## 2. Loja: vitrine

- [ ] Banner: sem arte, mostra o banner montado com as cores da loja; com arte cadastrada no painel, mostra a imagem (e a versão celular no celular). Com 2 ou 3 artes, troca sozinho a cada 6 s e as bolinhas trocam de arte.
- [ ] Benefícios (envio, Pix, compra segura, troca) aparecem abaixo do banner.
- [ ] "Compre por categoria": título, círculos e cards com a chamada de cada categoria; passar o mouse dá zoom.
- [ ] Mais vendidos: título centralizado, setas passam os produtos, as setas somem quando não há mais o que passar.
- [ ] Ofertas: título igual ao do painel (ex.: "Outlet"); "Ver todas as ofertas" abre só produtos em oferta.
- [ ] Vitrine por categoria só aparece com 3 produtos ou mais.
- [ ] Avaliações: nota geral, selo "Loja verificada", ícone da origem (WhatsApp, Instagram, Google), "Compra verificada".
- [ ] Rodapé: categorias, contato, horários agrupados ("Segunda a sexta"), frete grátis, "Feito por" com nome/logo do parceiro, links de cookies e privacidade, ano atual.

## 3. Loja: card e página do produto

- [ ] Passar o mouse na foto troca para a 2ª foto (ou o desenho espelhado) com zoom; aparece "Ver detalhes".
- [ ] Selo "NOVO" / "% OFF" / "ESGOTADO" corretos.
- [ ] Tamanhos sem estoque aparecem riscados no card.
- [ ] Coração salva/remove dos favoritos e mostra aviso.
- [ ] Página do produto: fotos em miniatura, zoom ao passar o mouse, preço "de", preço no Pix, parcelas.
- [ ] Cor esgotada aparece riscada; tamanho sem estoque fica desabilitado.
- [ ] "Últimas X unidades" quando restam 2 ou menos.
- [ ] Botão de quantidade não passa do estoque.
- [ ] Sem escolher tamanho, "Adicionar" pede para escolher.
- [ ] Tabela de medidas abre e fecha.
- [ ] Código (SKU) muda conforme cor e tamanho.
- [ ] Produto esgotado mostra "Avise-me quando chegar" (abre WhatsApp).

## 4. Loja: lista, filtros e sacola

- [ ] Página de categoria: botões grade/lista funcionam e são lembrados.
- [ ] Filtro de tamanho mostra só produtos com aquele tamanho em estoque.
- [ ] Ordenar por menor preço, maior preço, desconto e avaliação.
- [ ] Sacola: + e − respeitam o estoque; "Esvaziar" limpa.
- [ ] Barra de frete grátis mostra quanto falta.
- [ ] Trocar entrega (Correios pede CEP; motoboy pede endereço; retirada não pede nada).
- [ ] Escolher Pix mostra o desconto; outro pagamento tira o desconto.
- [ ] Enviar sem nome/CEP mostra o erro no campo.
- [ ] **Enviar pedido:** abre o WhatsApp com "Pedido #número", itens, cor, tamanho, código, total e "Código do pedido". A sacola esvazia. O pedido aparece no painel como **Novo**.
- [ ] Se outra pessoa comprou a última peça antes: aparece "acabou de esgotar" e o WhatsApp não abre.
- [ ] **Cupom na sacola:** código inválido mostra aviso; `BEMVINDA10` com sacola acima de R$ 100 dá 10% e aparece no resumo e na mensagem; abaixo do mínimo avisa quanto falta; o "x" tira o cupom.
- [ ] Cupom + Pix: o Pix é calculado depois do cupom (ex.: R$ 89,90 − 8,99 − 4,05 = R$ 76,86).
- [ ] Cupom de frete grátis marca a entrega como grátis.

## 5. Loja: cadastro, cookies e privacidade

- [ ] Aviso de cookies aparece na primeira visita; "Aceitar" e "Só necessários" fecham e lembram.
- [ ] "Cookies e privacidade" no rodapé reabre o aviso.
- [ ] Visita só é contada (painel → Financeiro e visitas) depois de "Aceitar".
- [ ] "Receba as novidades": sem nome dá erro; WhatsApp ou e-mail inválido dá erro; sem marcar o aceite dá erro.
- [ ] Cadastro válido mostra "Pronto" e aparece no painel → Clientes. Repetir o mesmo e-mail não duplica.
- [ ] "Entrar no grupo de promoções" aparece só com o link cadastrado no painel.
- [ ] Endereço com loja que não existe mostra "Loja não encontrada".

## 6. Painel: acesso

- [ ] Abrir o link do painel com o código entra direto e o código some do endereço.
- [ ] Código errado: "Loja ou código de acesso incorreto".
- [ ] "Lembrar neste aparelho" mantém a entrada após fechar o navegador; sem marcar, sai ao fechar.
- [ ] "Sair" volta para a tela de entrada.
- [ ] Acesso → "Gerar novo código": mostra o novo código uma vez; o antigo deixa de funcionar (testar em outra aba).

## 7. Painel: configuração inicial (igual à Agenda)

- [ ] Loja nova abre o passo a passo: nome e WhatsApp → modelo → cores.
- [ ] Escolher um modelo traz categorias, produtos e cores do modelo (avisa que substitui os produtos atuais).
- [ ] Paletas prontas e as 3 cores ajustáveis mudam a prévia.
- [ ] Concluir abre o painel já com as cores da loja. Acesso → "Refazer configuração" abre de novo.

## 8. Painel: produtos e estoque

- [ ] Novo produto: nome, categoria, preço, preço "de", SKU, marca, selo, desenho, visível, mais vendidos, ofertas, descrição, composição, fotos (links https), cores (nome + cor), tamanhos.
- [ ] Mudar tamanhos ou cores atualiza a grade de estoque sem perder os números já digitados.
- [ ] Renomear uma cor leva o estoque junto.
- [ ] Preço "de" menor que o preço é recusado; foto sem https é recusada; duas cores com o mesmo nome são recusadas.
- [ ] Salvar atualiza a lista; a loja mostra a mudança ao recarregar.
- [ ] Interruptor "Visível/Oculto" esconde e mostra o produto na loja.
- [ ] Excluir pede confirmação.
- [ ] Categorias: criar, editar (nome, chamada, desenho, cor, foto) e excluir.
- [ ] Busca e filtro por categoria.
- [ ] "Movimentos de estoque" registra entrada, ajuste, venda e devolução, com saldo.

## 9. Painel: pedidos

- [ ] Abas Novos / Confirmados / Enviados / Entregues / Cancelados / Todos com contagem.
- [ ] **Confirmar pedido baixa o estoque** (ver em Produtos e Movimentos).
- [ ] Marcar enviado e entregue.
- [ ] **Cancelar devolve o estoque** se ele já tinha sido baixado; pede confirmação.
- [ ] Reabrir pedido cancelado.
- [ ] Contador de pedidos novos no menu.

## 10. Painel: financeiro, visitas, clientes e avaliações

- [ ] Período 7 / 30 / 90 dias muda os números.
- [ ] Faturamento conta só pedidos confirmados, enviados ou entregues; descontos Pix e cancelados aparecem separados.
- [ ] Gráfico de visitas por dia; passar o mouse mostra o valor.
- [ ] Produtos mais vendidos e vendas por pagamento e entrega.
- [ ] "Excel" de pedidos e de clientes abre no Excel com acentos, valores em R$ e filtro no cabeçalho.
- [ ] Clientes: busca, excluir, link do WhatsApp do cliente.
- [ ] Avaliações: nova, editar, ocultar/mostrar na loja, excluir; avaliação ligada a produto aparece na página do produto.

## 10b. Painel: cupons

- [ ] Aba Cupons: criar cupom em % ou R$ ou frete grátis, com mínimo, validade e limite de usos.
- [ ] Código repetido é recusado; código com espaço ou símbolo é recusado.
- [ ] Interruptor liga e desliga o cupom; desligado, a loja recusa o código.
- [ ] "Copiar texto" gera a frase de divulgação para WhatsApp/Instagram.
- [ ] Contador de usos sobe quando um pedido com cupom é confirmado.

## 10c. Painel: analytics

- [ ] Visitas, funil (visita → produto → sacola → pedido → venda) e taxa de conversão.
- [ ] Origem das visitas: abrir a loja com `&utm_source=instagram` conta como Instagram.
- [ ] Celular x computador.
- [ ] Tabela de produtos: vistos, colocados na sacola e vendidos.
- [ ] Buscas mais feitas (3 letras ou mais) e cliques em "Avise-me" e no grupo.
- [ ] Nada é contado antes de aceitar os cookies.

## 10d. Painel: relatórios

- [ ] Subabas Vendas, Financeiro, Trocas, Estoque e Clientes; período 7 / 30 / 90 dias.
- [ ] Vendas: por produto, categoria, tamanho, cor, origem e comparação com o período anterior.
- [ ] Financeiro: bruto, descontos (cupom e Pix), cancelados, líquido, ticket médio, por pagamento.
- [ ] Trocas: por motivo, por produto e dica de modelagem quando o tamanho trocado se repete.
- [ ] Estoque: valor parado, cobertura em dias, produtos sem venda.
- [ ] Clientes: quem mais compra, recorrência.
- [ ] "Excel" e "PDF" em cada relatório: a planilha abre formatada; o PDF sai com cabeçalho (logo, loja, título, período) e rodapé (data de geração e parceiro) em todas as páginas.

## 10e. Painel: trocas e devoluções

- [ ] Em pedido confirmado/enviado/entregue, "Troca ou devolução" abre o formulário.
- [ ] Troca de tamanho/cor: o item devolvido volta ao estoque e o novo sai (ver Movimentos).
- [ ] Devolução com reembolso aparece no relatório financeiro.
- [ ] Quantidade maior que a do pedido é recusada.

## 11. Painel: aparência e loja

- [ ] Todas as seções salvam: identidade, cores, tema, contato, horários, faixa (3 frases), banners em imagem (até 3) e banner montado, vitrines (título das categorias, ofertas com título livre, novidades com link do grupo), vendas (Pix, parcelas, frete grátis, nomes das variações, entregas, pagamentos), privacidade (cookies, termos, política), white label.
- [ ] Sair da página com alterações não salvas avisa.
- [ ] WhatsApp sem DDD é recusado; links sem https são recusados.
- [ ] White label: com nome/logo do parceiro, a loja mostra "Feito por [parceiro]" e o painel mostra "Painel por [parceiro]"; sem nada, mostra Nour.
- [ ] White label do painel: a tela de entrada mostra logo e nome do parceiro e usa as cores da loja; o título da aba mostra "· [parceiro]"; o rodapé do painel tem "Falar com o suporte" com o link cadastrado.

## 12. Segurança (já testado no banco; repetir se quiser)

- [x] Com a chave pública não dá para ler nenhuma tabela direto (só pelas funções).
- [x] Painel recusa código errado; o código fica salvo só como sha256 e não aparece nos dados públicos.
- [x] Pedido: preço e total são calculados no servidor; preço falso enviado pelo navegador é ignorado.
- [x] Pedido acima do estoque é recusado.
- [x] Limite de 10 pedidos e 20 cadastros por minuto por loja.
- [x] Confirmar baixa o estoque; cancelar devolve.
- [x] Código colado em nome de produto, categoria, avaliação, faixa ou rodapé aparece como texto, sem executar (testado no navegador).
- [x] Links `javascript:` em foto, logo, banner, grupo ou parceiro são descartados; cores inválidas voltam para a padrão (testado no navegador).
- [ ] Testar: abrir o painel dentro de um iframe em outro site — deve ser bloqueado.

## 13. Fotos (envio com compressão)

- [ ] Produto: "Adicionar fotos" aceita várias de uma vez (até 5); mostra "Comprimindo e enviando 1 de N…".
- [ ] Foto grande do celular (3 a 10 MB) sobe em poucos segundos e vira WebP leve (cerca de 100 a 300 KB) + miniatura.
- [ ] "capa" troca a foto principal; o "x" tira a foto; "Adicionar link" aceita só https.
- [ ] Foto por cor: o quadradinho ao lado da cor envia a foto; na loja, escolher a cor troca a foto principal.
- [ ] Logo, foto da categoria, banners e logo do parceiro têm "Enviar foto" e mostram o tamanho ideal.
- [ ] Arquivo que não é foto mostra aviso e não sobe.
- [ ] Plano: Produtos mostra "Plano Básico · X de 100 produtos"; no limite, "Novo produto" avisa para falar com o suporte.
- [ ] Fotos enviadas e não usadas são apagadas sozinhas depois de 1 hora (ao entrar no painel).

## 14. Google e compartilhamento (SEO)

- [ ] O endereço da loja é /loja/nome-da-loja/ (o antigo ?loja= redireciona).
- [ ] Colar o link no WhatsApp mostra título, descrição e foto da loja.
- [ ] Link de produto (/loja/nome/p/123/) abre direto no produto, com título e foto do produto na prévia.
- [ ] /sitemap.xml lista lojas e produtos (lojas de demonstração ficam fora).
- [ ] Ferramenta "Teste de pesquisa aprimorada" do Google reconhece Loja e Produto (preço, estoque, avaliações).

## 15. Mapa, frete grátis, estilos e datas

- [ ] Com endereço e "Mostrar o mapa" ligado, o rodapé mostra o mapa e o botão "Como chegar"; desligado, não mostra.
- [ ] Frete grátis acima de X: a sacola mostra a barra, o resumo diz "Grátis", a mensagem do WhatsApp diz "Frete grátis (compra acima de X)" e o pedido fica marcado como frete grátis.
- [ ] Estilo Padrão, Minimalista e Moderno mudam o visual da loja.
- [ ] Tema Natal e Black Friday trocam cores, selo do banner e a 1ª frase da faixa; desligar volta ao normal.
- [ ] Modelos prontos com fotos reais e textos de venda (ver a galeria de modelos).

## 16. Clientes (CRM), canais e duplicar produto

- [ ] Pedido pede o WhatsApp do cliente; dois pedidos com o mesmo número viram o mesmo cliente (compras = 2, perfil Recorrente).
- [ ] Clientes: indicadores (recompra, frequência, ticket, valor por cliente), filtros VIP / Recorrentes / Novos / Sumindo / Inativos / Interessados, busca e ordenação.
- [ ] "Chame de volta" lista quem não compra há 45+ dias; o botão abre o WhatsApp com a mensagem pronta.
- [ ] "Ver" abre a ficha do cliente com pedidos, preferências (tamanho e categoria) e mensagem editável.
- [ ] "Copiar WhatsApps" copia os números do filtro atual.
- [ ] Analytics → Canais: visitas, pedidos, vendas e conversão de Google, Bio Site, Instagram, WhatsApp, Facebook, TikTok, E-mail e Link direto; os links marcados (?utm_source=) caem no canal certo.
- [ ] Produtos: o botão de copiar (na lista ou dentro do editor) abre uma cópia "(cópia)", sem código, com estoque zerado e oculta; só é criada ao salvar e respeita o limite do plano.
- [ ] Movimentos de estoque com entradas em verde e saídas em vermelho, e exportação Excel/PDF.

## 17. Topo, rodapé e pagamento na loja

- [ ] Faixa de contato do topo alinhada ao cabeçalho: atendimento pelo WhatsApp e e-mail à esquerda, Instagram/WhatsApp/e-mail juntos à direita (some no celular).
- [ ] Rodapé com "Formas de pagamento" (as marcadas no painel), parcelas sem juros e desconto no Pix.
- [ ] White label: com "Mostrar o Instagram/WhatsApp do parceiro" ligados, os ícones aparecem ao lado de "Feito por"; desligados, somem.

## Fora deste teste (próximas fases)

- Pagamento online (Mercado Pago) e frete calculado (Melhor Envio).
- E-mail marketing disparado pelo painel (a lista de clientes já está pronta para isso).
- Ligação com o login do Bio Site/Agenda (hoje o painel usa código de acesso próprio).
