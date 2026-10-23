# Nour Cardápio e Catálogo Digital

Páginas no padrão visual do Nour Bio Site. O cliente monta o pedido e envia pelo WhatsApp.

## Cardápio (`cardapio/`)

Para restaurantes, pizzarias, lanchonetes e afins.

- `cardapio/index.html` — página
- `cardapio/js/dados.js` — **único arquivo a editar por cliente**: nome, cores, horários, entrega, produtos, preços e opções
- `cardapio/js/cardapio.js` — montagem da página, sacola e mensagem do WhatsApp
- `cardapio/css/cardapio.css` — visual

## Catálogo (`catalogo/`)

Para lojas de produto: roupas, calçados, acessórios, cosméticos, pet, construção e outras.

- `catalogo/index.html` — loja: faixa rotativa, contatos, menu, banner (arte em imagem ou montado com as cores da loja), categorias com chamada, mais vendidos, ofertas, vitrines por categoria, avaliações, cadastro de novidades, grupo de promoções no WhatsApp e rodapé com horários
- `catalogo/js/dados.js` — **único arquivo a editar por cliente**: loja, cores, faixa, banners, categorias, produtos com grade de cores e tamanhos, estoque por variação, ofertas, avaliações e parceiro (white label)
- `catalogo/js/catalogo.js` — montagem da página, filtros, grade/lista, sacola respeitando o estoque e mensagem do WhatsApp com o código (SKU) de cada peça
- `catalogo/css/catalogo.css` — visual, com tema claro e escuro
- `catalogo/modelos/` — 20 modelos prontos, um por tipo de loja do Bio Site. Veja todos em `catalogo/modelos/index.html` ou abra um direto com `catalogo/index.html?modelo=pet-shop`. Para começar uma loja, copie o modelo para `catalogo/js/dados.js`.

- `catalogo/painel/` — painel do lojista (com white label do parceiro: logo, nome, cores e suporte): configuração inicial (nome, WhatsApp, modelo e cores), produtos com grade e estoque, pedidos (confirmar baixa o estoque, cancelar devolve), cupons de desconto, analytics (funil, origem, aparelho, produtos, buscas), relatórios (vendas, financeiro, trocas, estoque, clientes) com CSV, trocas e devoluções, clientes, avaliações, aparência e código de acesso
- `catalogo/js/config.js` — endereço do banco e chave pública. Com `catalogo/index.html?loja=slug`, a loja lê o banco; sem isso, usa `js/dados.js`
- `catalogo/banco/` — SQL das tabelas e funções (Supabase). Nenhuma tabela é acessível pela chave pública; tudo passa pelas funções, que validam preço, estoque e código de acesso
- `catalogo/TESTES.md` — roteiro de testes
- `vercel.json` — cabeçalhos de segurança da hospedagem

Para testar sem banco, abra `cardapio/index.html` ou `catalogo/index.html` no navegador.
