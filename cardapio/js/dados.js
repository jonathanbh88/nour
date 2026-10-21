/* =====================================================================
   Nour Cardápio · dados da loja
   Este é o único arquivo que precisa mudar para cada cliente.
   Preços em reais, com ponto decimal (ex.: 28.9 = R$ 28,90).
   ===================================================================== */

window.LOJA = {
  nome: 'Cantina Exemplo',
  slogan: 'Pizza no forno à lenha, lanches e pratos feitos na hora.',
  cidade: 'Belo Horizonte · MG',
  endereco: 'Rua dos Exemplos, 123 · Centro',
  whatsapp: '5531999999999',          // só números, com 55 + DDD
  telefone: '(31) 99999-9999',
  instagram: 'cantinaexemplo',
  logo: '',                           // caminho ou link da imagem; vazio = iniciais

  // Mesmo formato de paleta dos modelos do Nour Bio Site:
  // p1 e p2 = cores principais, p3 = destaque, on3 = texto sobre o destaque
  cores: { p1: '#2B8A3E', p2: '#C92A2A', p3: '#FFE066', on3: '#2B2200' },

  faixa: ['PIZZA NO FORNO À LENHA', 'PEÇA PELO WHATSAPP', 'ENTREGA E RETIRADA'],

  // 0 = domingo ... 6 = sábado. Fechamento depois da meia-noite funciona (ex.: '00:30').
  horarios: {
    0: [['11:00', '15:00'], ['18:00', '23:30']],
    1: [],
    2: [['18:00', '23:00']],
    3: [['18:00', '23:00']],
    4: [['18:00', '23:00']],
    5: [['18:00', '00:30']],
    6: [['11:00', '15:00'], ['18:00', '00:30']]
  },

  entrega: { ativa: true, taxa: 6, tempo: '35–50 min', minimo: 30 },
  retirada: { ativa: true, tempo: '20–30 min' },
  pagamentos: ['Pix', 'Cartão na entrega', 'Dinheiro']
};

/* Ícones disponíveis (desenhos do Nour Bio Site):
   pizza, burger, fries, cup, bowl, beer, coffee, icecream, bread, bottle, heart */

window.CARDAPIO = [
  {
    id: 'pizzas', nome: 'Pizzas', nota: 'Massa de fermentação natural, assada no forno à lenha.',
    itens: [
      { id: 'marg', nome: 'Margherita', desc: 'Molho de tomate italiano, muçarela de búfala, manjericão fresco e azeite.', preco: 49.9, icone: 'pizza', selo: 'MAIS PEDIDA', destaque: true, opcoes: 'tamanhoPizza' },
      { id: 'calab', nome: 'Calabresa', desc: 'Calabresa artesanal fatiada, cebola roxa, muçarela e orégano.', preco: 46.9, icone: 'pizza', opcoes: 'tamanhoPizza' },
      { id: 'portu', nome: 'Portuguesa', desc: 'Presunto, ovos, cebola, ervilha, azeitona preta e muçarela.', preco: 52.9, icone: 'pizza', opcoes: 'tamanhoPizza' },
      { id: 'frango', nome: 'Frango com catupiry', desc: 'Frango desfiado temperado, catupiry original e milho.', preco: 51.9, icone: 'pizza', opcoes: 'tamanhoPizza' },
      { id: 'quatro', nome: 'Quatro queijos', desc: 'Muçarela, provolone, gorgonzola e parmesão.', preco: 56.9, icone: 'pizza', selo: 'NOVO', opcoes: 'tamanhoPizza' },
      { id: 'choc', nome: 'Chocolate com morango', desc: 'Pizza doce com chocolate ao leite e morangos frescos.', preco: 44.9, icone: 'pizza', opcoes: 'tamanhoPizza' }
    ]
  },
  {
    id: 'lanches', nome: 'Lanches',
    itens: [
      { id: 'burger', nome: 'Hambúrguer da casa', desc: 'Pão brioche, blend 180 g, cheddar, bacon, alface, tomate e maionese da casa.', preco: 32.9, icone: 'burger', selo: 'MAIS PEDIDO', destaque: true, opcoes: 'adicionaisLanche' },
      { id: 'smash', nome: 'Smash duplo', desc: 'Dois smash de 90 g, queijo prato e cebola caramelizada.', preco: 29.9, icone: 'burger', opcoes: 'adicionaisLanche' },
      { id: 'combo', nome: 'Combo da casa', desc: 'Hambúrguer da casa, batata média e refrigerante lata.', preco: 44.9, icone: 'burger', selo: 'COMBO', destaque: true, opcoes: 'bebidaCombo' }
    ]
  },
  {
    id: 'pratos', nome: 'Pratos do dia', nota: 'Servidos no almoço de sábado e domingo.',
    itens: [
      { id: 'parmeg', nome: 'Parmegiana de frango', desc: 'Acompanha arroz branco e batata frita. Serve 1 pessoa.', preco: 38.9, icone: 'bowl' },
      { id: 'lasanha', nome: 'Lasanha à bolonhesa', desc: 'Massa fresca, molho bolonhesa e muçarela gratinada.', preco: 36.9, icone: 'bowl' },
      { id: 'marmita', nome: 'Marmita executiva', desc: 'Arroz, feijão, salada e a carne do dia.', preco: 24.9, icone: 'bowl', esgotado: true }
    ]
  },
  {
    id: 'porcoes', nome: 'Porções',
    itens: [
      { id: 'batata', nome: 'Batata frita', desc: 'Porção de 400 g com cheddar e bacon.', preco: 28, icone: 'fries' },
      { id: 'mandioca', nome: 'Mandioca frita', desc: 'Porção de 400 g com manteiga de garrafa.', preco: 26, icone: 'fries' }
    ]
  },
  {
    id: 'bebidas', nome: 'Bebidas',
    itens: [
      { id: 'refri', nome: 'Refrigerante lata', desc: '350 ml.', preco: 7, icone: 'cup', opcoes: 'saborRefri' },
      { id: 'refri2', nome: 'Refrigerante 2 litros', desc: 'Coca-Cola, Guaraná ou Fanta.', preco: 15, icone: 'bottle' },
      { id: 'suco', nome: 'Suco natural', desc: 'Laranja, limão ou maracujá. 500 ml.', preco: 12, icone: 'cup' },
      { id: 'cerveja', nome: 'Cerveja long neck', desc: '355 ml. Venda proibida para menores de 18 anos.', preco: 11, icone: 'beer' }
    ]
  },
  {
    id: 'sobremesas', nome: 'Sobremesas',
    itens: [
      { id: 'petit', nome: 'Petit gâteau', desc: 'Com sorvete de creme.', preco: 22, icone: 'icecream' },
      { id: 'pudim', nome: 'Pudim de leite', desc: 'Fatia generosa com calda de caramelo.', preco: 14, icone: 'heart' }
    ]
  }
];

/* Grupos de opções reaproveitados pelos itens.
   tipo 'um' = escolher uma (preço somado ao item); 'varios' = adicionais até "max". */
window.OPCOES = {
  tamanhoPizza: [
    { titulo: 'Tamanho', tipo: 'um', obrigatorio: true, itens: [['Média · 6 fatias', 0], ['Grande · 8 fatias', 12], ['Família · 12 fatias', 24]] },
    { titulo: 'Borda', tipo: 'um', obrigatorio: false, itens: [['Sem borda recheada', 0], ['Catupiry', 9], ['Cheddar', 9], ['Chocolate', 11]] }
  ],
  adicionaisLanche: [
    { titulo: 'Adicionais', tipo: 'varios', max: 4, itens: [['Bacon extra', 5], ['Ovo', 3], ['Cheddar extra', 4], ['Blend extra 90 g', 9]] }
  ],
  bebidaCombo: [
    { titulo: 'Refrigerante do combo', tipo: 'um', obrigatorio: true, itens: [['Coca-Cola', 0], ['Coca-Cola Zero', 0], ['Guaraná', 0]] }
  ],
  saborRefri: [
    { titulo: 'Sabor', tipo: 'um', obrigatorio: true, itens: [['Coca-Cola', 0], ['Coca-Cola Zero', 0], ['Guaraná', 0], ['Fanta Laranja', 0]] }
  ]
};
