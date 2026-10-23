/* =====================================================================
   Nour Catálogo · modelo pronto: Cosméticos e perfumaria
   Baseado no modelo "cosmeticos" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Beleza Exemplo",
  "slogan": "Perfumes, maquiagem e skincare originais, com nota fiscal e ajuda na escolha.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Beleza Exemplo trabalha só com produtos originais, com nota fiscal e procedência. Ficou em dúvida sobre fragrância, tom de base ou rotina de cuidados? Fale com a gente no WhatsApp e ajudamos você a escolher.",
  "horarios": {
    "0": [],
    "1": [
      [
        "09:00",
        "18:00"
      ]
    ],
    "2": [
      [
        "09:00",
        "18:00"
      ]
    ],
    "3": [
      [
        "09:00",
        "18:00"
      ]
    ],
    "4": [
      [
        "09:00",
        "18:00"
      ]
    ],
    "5": [
      [
        "09:00",
        "18:00"
      ]
    ],
    "6": [
      [
        "09:00",
        "13:00"
      ]
    ]
  },
  "cores": {
    "p1": "#B0123A",
    "p2": "#E8467C",
    "p3": "#F7D6E0",
    "on3": "#4A0A1D"
  },
  "tema": "auto",
  "faixa": [
    "Produtos originais com nota fiscal",
    "Frete grátis acima de R$ 199",
    "Amostra grátis em todo pedido"
  ],
  "banners": [],
  "banner": {
    "selo": "Kits presente",
    "titulo": "Presentes que fazem qualquer um sorrir",
    "texto": "Perfumes, maquiagem e skincare originais, com embalagem pronta para presentear.",
    "botao": "Ver kits presente",
    "categoria": "perfumes",
    "imagem": "https://images.pexels.com/photos/30999189/pexels-photo-30999189.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/30999189/pexels-photo-30999189.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
  },
  "beneficios": [
    [
      "envio",
      "Enviamos para todo o Brasil",
      "Correios e transportadoras"
    ],
    [
      "pix",
      "Desconto no Pix",
      "À vista, direto no WhatsApp"
    ],
    [
      "seguro",
      "Compra segura",
      "Atendimento de pessoa real"
    ],
    [
      "troca",
      "Primeira troca grátis",
      "Em até 7 dias"
    ]
  ],
  "categoriasTitulo": [
    "Monte sua rotina de beleza",
    "Fragrâncias, cores e cuidados para o dia a dia"
  ],
  "descontoPix": 5,
  "parcelas": 5,
  "freteGratisAcima": 299,
  "rotulos": {
    "cor": "Cor",
    "tamanho": "Volume"
  },
  "tabelaMedidas": [],
  "entrega": [
    [
      "correios",
      "Envio pelos Correios",
      "Frete combinado pelo CEP"
    ],
    [
      "retirada",
      "Retirar na loja",
      "Sem custo"
    ],
    [
      "motoboy",
      "Motoboy na cidade",
      "Combinado no WhatsApp"
    ]
  ],
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Link de pagamento"
  ],
  "ofertas": {
    "ativo": true,
    "titulo": "Ofertas da semana",
    "selo": "Só esta semana",
    "texto": "Produtos selecionados com preço especial."
  },
  "novidades": {
    "ativo": true,
    "titulo": "Receba as últimas novidades",
    "texto": "Seja o primeiro a saber de lançamentos e promoções.",
    "grupoWhatsapp": "",
    "cadastro": ""
  },
  "lojaVerificada": true,
  "avaliacoes": [],
  "cookies": true,
  "links": {
    "termos": "",
    "privacidade": ""
  },
  "parceiro": {
    "nome": "Nour",
    "logo": "",
    "link": ""
  }
};

window.CATEGORIAS = [
  {
    "id": "perfumes",
    "nome": "Perfumes",
    "chamada": "Uma fragrância para cada momento",
    "desenho": "perfume",
    "cor": "#E8467C",
    "foto": "https://images.pexels.com/photos/12563417/pexels-photo-12563417.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "maquiagem",
    "nome": "Maquiagem",
    "chamada": "Cor e acabamento que duram",
    "desenho": "batom",
    "cor": "#B0123A",
    "foto": "https://images.pexels.com/photos/7290674/pexels-photo-7290674.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "skincare",
    "nome": "Skincare",
    "chamada": "Pele cuidada todos os dias",
    "desenho": "garrafa",
    "cor": "#92D0B7",
    "foto": "https://images.pexels.com/photos/34939704/pexels-photo-34939704.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "kits",
    "nome": "Kits presente",
    "chamada": "Presente pronto, é só entregar",
    "desenho": "caixa",
    "cor": "#C9A227",
    "foto": "https://images.pexels.com/photos/5632327/pexels-photo-5632327.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "PERF-FEMI-FLOR",
    "nome": "Perfume feminino floral",
    "marca": "Exemplo",
    "cat": "perfumes",
    "preco": 189.9,
    "de": 229.9,
    "desenho": "perfume",
    "destaque": true,
    "desc": "Perfume feminino floral com notas delicadas que lembram flores frescas, para usar de dia ou em ocasiões especiais. Frasco elegante, que fica bonito na penteadeira. Uma ótima escolha para presentear em aniversários e datas comemorativas.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ]
    ],
    "tamanhos": [
      "50 ml",
      "100 ml"
    ],
    "estoque": {
      "Rosa|50 ml": 6,
      "Rosa|100 ml": 1
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Rosa · 50 ml"
      }
    ],
    "composicao": "Eau de parfum floral, frasco 100 ml",
    "fotos": [
      "https://images.pexels.com/photos/12563417/pexels-photo-12563417.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/36834063/pexels-photo-36834063.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "PERF-MASC-AMAD",
    "nome": "Perfume masculino amadeirado",
    "marca": "Exemplo",
    "cat": "perfumes",
    "preco": 199.9,
    "desenho": "perfume",
    "destaque": true,
    "desc": "Perfume masculino amadeirado, com saída fresca e fundo quente e marcante. Uma fragrância versátil, que vai bem no trabalho e à noite. Combina com o kit presente para quem quer surpreender alguém especial.",
    "cores": [
      [
        "Marrom",
        "#6B4128"
      ]
    ],
    "tamanhos": [
      "50 ml",
      "100 ml"
    ],
    "estoque": {
      "Marrom|100 ml": 6
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Marrom · 50 ml"
      },
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Marrom · 50 ml"
      }
    ],
    "selo": "NOVO",
    "composicao": "Eau de parfum amadeirado, frasco 100 ml",
    "fotos": [
      "https://images.pexels.com/photos/11711813/pexels-photo-11711813.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/14211239/pexels-photo-14211239.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "BATO-MATT",
    "nome": "Batom matte",
    "marca": "Exemplo",
    "cat": "maquiagem",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "batom",
    "destaque": true,
    "desc": "Batom matte de alta pigmentação, que cobre bem já na primeira camada e tem acabamento aveludado sem brilho. A textura é confortável e não pesa nos lábios. Disponível em vermelho, nude e vinho para combinar com qualquer produção.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ],
      [
        "Nude",
        "#D9A98B"
      ],
      [
        "Vinho",
        "#6E1F33"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Vermelho|Único": 8,
      "Nude|Único": 7,
      "Vinho|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Vermelho"
      }
    ],
    "composicao": "Batom em bastão, acabamento matte, 3,5 g",
    "fotos": [
      "https://images.pexels.com/photos/7810603/pexels-photo-7810603.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/14444882/pexels-photo-14444882.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "BASE-LIQU",
    "nome": "Base líquida",
    "marca": "Exemplo",
    "cat": "maquiagem",
    "preco": 69.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Base líquida de cobertura média, que uniformiza o tom da pele com acabamento natural. A textura leve espalha fácil com esponja, pincel ou com os dedos. Em dúvida sobre o tom? Mande uma foto com luz natural no WhatsApp que ajudamos a escolher.",
    "cores": [
      [
        "Bege",
        "#D8C3A5"
      ],
      [
        "Nude",
        "#D9A98B"
      ],
      [
        "Marrom",
        "#6B4128"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Bege|Único": 1,
      "Nude|Único": 3,
      "Marrom|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Bege"
      }
    ],
    "composicao": "Base líquida, frasco 30 ml",
    "fotos": [
      "https://images.pexels.com/photos/10107538/pexels-photo-10107538.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/32426538/pexels-photo-32426538.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "SERU-VITA-C",
    "nome": "Sérum vitamina C",
    "marca": "Exemplo",
    "cat": "skincare",
    "preco": 89.9,
    "de": 109.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Sérum de vitamina C pensado para incluir na rotina de cuidados da manhã, auxiliando a pele a ficar com aspecto mais uniforme e luminoso. A textura leve absorve rápido e não deixa a pele pegajosa. Use antes do protetor solar.",
    "cores": [
      [
        "Laranja",
        "#EF6C1A"
      ]
    ],
    "tamanhos": [
      "30 ml"
    ],
    "estoque": {
      "Laranja|30 ml": 5
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Laranja · 30 ml"
      }
    ],
    "composicao": "Sérum facial com vitamina C, frasco 30 ml",
    "fotos": [
      "https://images.pexels.com/photos/34939709/pexels-photo-34939709.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/30229017/pexels-photo-30229017.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "CREM-HIDR-CORP",
    "nome": "Creme hidratante corporal",
    "marca": "Exemplo",
    "cat": "skincare",
    "preco": 49.9,
    "desenho": "pote",
    "destaque": false,
    "desc": "Creme hidratante corporal de textura cremosa, que espalha fácil e ajuda a manter a pele macia ao longo do dia. A fragrância é suave e não compete com o perfume. Ideal para usar logo depois do banho.",
    "cores": [
      [
        "Menta",
        "#92D0B7"
      ]
    ],
    "tamanhos": [
      "200 ml",
      "400 ml"
    ],
    "estoque": {
      "Menta|200 ml": 4,
      "Menta|400 ml": 3
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Menta · 200 ml"
      }
    ],
    "composicao": "Loção hidratante corporal, frasco 400 ml",
    "fotos": [
      "https://images.pexels.com/photos/5798000/pexels-photo-5798000.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/6690234/pexels-photo-6690234.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "KIT-PRES-PERF",
    "nome": "Kit presente perfume e creme",
    "marca": "Exemplo",
    "cat": "kits",
    "preco": 229.9,
    "de": 279.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Kit presente com perfume e creme hidratante da mesma linha, para perfumar e cuidar da pele de uma vez só. Vem em embalagem bonita, pronta para entregar. Uma escolha certeira para aniversário, Dia das Mães ou amigo secreto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Rosa|Único": 2
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Rosa"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Rosa"
      }
    ],
    "composicao": "Perfume 100 ml e creme hidratante 200 ml",
    "fotos": [
      "https://images.pexels.com/photos/30999189/pexels-photo-30999189.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "KIT-SKIN-BASI",
    "nome": "Kit skincare básico",
    "marca": "Exemplo",
    "cat": "kits",
    "preco": 149.9,
    "de": 189.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Kit skincare básico com os passos essenciais para quem quer começar uma rotina de cuidados sem complicação. Os produtos foram pensados para limpar, tratar e hidratar a pele no dia a dia. Bom para presentear ou para você mesma.",
    "cores": [
      [
        "Menta",
        "#92D0B7"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Menta|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Menta"
      }
    ],
    "composicao": "Sabonete facial, sérum e hidratante facial",
    "fotos": [
      "https://images.pexels.com/photos/34939704/pexels-photo-34939704.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/10825661/pexels-photo-10825661.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
