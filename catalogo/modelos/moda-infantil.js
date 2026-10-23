/* =====================================================================
   Nour Catálogo · modelo pronto: Moda infantil
   Baseado no modelo "modainfantil" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Pequenos Exemplo",
  "slogan": "Roupas confortáveis para brincar o dia inteiro. Menina e menino.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Roupas confortáveis para brincar o dia inteiro. Menina e menino. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#F06C8B",
    "p2": "#4FB397",
    "p3": "#FED068",
    "on3": "#3A2600"
  },
  "tema": "auto",
  "faixa": [
    "Moda menina e menino",
    "Frete grátis acima de R$ 199",
    "Primeira troca grátis"
  ],
  "banners": [],
  "banner": {
    "selo": "Coleção nova",
    "titulo": "Para brincar o dia todo",
    "texto": "Algodão macio, cores alegres e tamanhos de 2 a 10 anos.",
    "botao": "Comprar agora",
    "categoria": "menina",
    "imagem": ""
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
    "Compre por categoria",
    "Encontre o que você procura"
  ],
  "descontoPix": 5,
  "parcelas": 5,
  "freteGratisAcima": 299,
  "rotulos": {
    "cor": "Cor",
    "tamanho": "Tamanho"
  },
  "tabelaMedidas": [
    [
      "Tam.",
      "Idade",
      "Altura (cm)"
    ],
    [
      "2",
      "2 anos",
      "86–92"
    ],
    [
      "4",
      "4 anos",
      "98–104"
    ],
    [
      "6",
      "6 anos",
      "110–116"
    ],
    [
      "8",
      "8 anos",
      "122–128"
    ],
    [
      "10",
      "10 anos",
      "134–140"
    ]
  ],
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
    "id": "menina",
    "nome": "Menina",
    "chamada": "Vestidos e conjuntos",
    "desenho": "vestido",
    "cor": "#E58FAE"
  },
  {
    "id": "menino",
    "nome": "Menino",
    "chamada": "Conjuntos e bermudas",
    "desenho": "camiseta",
    "cor": "#2457C5"
  },
  {
    "id": "bebe",
    "nome": "Bebê",
    "chamada": "Macio para a pele",
    "desenho": "moletom",
    "cor": "#92D0B7"
  },
  {
    "id": "calcados",
    "nome": "Calçados",
    "chamada": "Do 18 ao 34",
    "desenho": "tenis",
    "cor": "#F2C14E"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "VEST-FLOR-DE",
    "nome": "Vestido floral de algodão",
    "marca": "Pequenos",
    "cat": "menina",
    "preco": 79.9,
    "de": 99.9,
    "desenho": "vestido",
    "destaque": true,
    "desc": "Vestido floral de algodão da Pequenos. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Lilás",
        "#B39DDB"
      ]
    ],
    "tamanhos": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "estoque": {
      "Rosa|2": 5,
      "Rosa|6": 4,
      "Rosa|8": 4,
      "Rosa|10": 6,
      "Lilás|2": 8,
      "Lilás|4": 5,
      "Lilás|6": 4,
      "Lilás|8": 6,
      "Lilás|10": 5
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Rosa · 2"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "CONJ-CAMI-E",
    "nome": "Conjunto camiseta e bermuda",
    "marca": "Pequenos",
    "cat": "menino",
    "preco": 89.9,
    "desenho": "camiseta",
    "destaque": true,
    "desc": "Conjunto camiseta e bermuda da Pequenos. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Azul",
        "#2457C5"
      ],
      [
        "Verde",
        "#2F6B4F"
      ]
    ],
    "tamanhos": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "estoque": {
      "Azul|2": 8,
      "Azul|4": 6,
      "Azul|6": 3,
      "Azul|8": 6,
      "Azul|10": 8,
      "Verde|2": 9,
      "Verde|4": 7,
      "Verde|6": 1,
      "Verde|8": 9,
      "Verde|10": 8
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Azul · 2"
      },
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Azul · 2"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "MACA-PLUS",
    "nome": "Macacão plush",
    "marca": "Pequenos",
    "cat": "bebe",
    "preco": 69.9,
    "de": 89.9,
    "desenho": "moletom",
    "destaque": true,
    "desc": "Macacão plush da Pequenos. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Menta",
        "#92D0B7"
      ],
      [
        "Amarelo",
        "#F2C14E"
      ]
    ],
    "tamanhos": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "estoque": {
      "Menta|2": 3,
      "Menta|6": 8,
      "Menta|8": 8,
      "Amarelo|2": 5,
      "Amarelo|4": 1,
      "Amarelo|8": 5,
      "Amarelo|10": 5
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Menta · 2"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Menta · 2"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "TENI-COM-LUZ",
    "nome": "Tênis com luz",
    "marca": "Pequenos",
    "cat": "calcados",
    "preco": 119.9,
    "de": 149.9,
    "desenho": "tenis",
    "destaque": true,
    "desc": "Tênis com luz da Pequenos. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "22",
      "24",
      "26",
      "28",
      "30"
    ],
    "estoque": {
      "Rosa|22": 2,
      "Rosa|24": 1,
      "Rosa|26": 1,
      "Rosa|28": 3,
      "Rosa|30": 6,
      "Azul|22": 6,
      "Azul|24": 5,
      "Azul|26": 4,
      "Azul|30": 7
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Rosa · 22"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "SAIA-TULE-COM",
    "nome": "Saia tule com body",
    "marca": "Pequenos",
    "cat": "menina",
    "preco": 99.9,
    "desenho": "saia",
    "destaque": true,
    "desc": "Saia tule com body da Pequenos. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "estoque": {
      "Rosa|4": 7,
      "Rosa|6": 2,
      "Rosa|8": 8,
      "Rosa|10": 1,
      "Branco|4": 4,
      "Branco|6": 6,
      "Branco|8": 6,
      "Branco|10": 4
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Rosa · 2"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "BERM-MOLE",
    "nome": "Bermuda moletom",
    "marca": "Pequenos",
    "cat": "menino",
    "preco": 49.9,
    "de": 59.9,
    "desenho": "short",
    "destaque": false,
    "desc": "Bermuda moletom da Pequenos. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ],
      [
        "Marinho",
        "#1D2B4F"
      ]
    ],
    "tamanhos": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "estoque": {
      "Cinza|2": 9,
      "Cinza|4": 9,
      "Cinza|6": 3,
      "Cinza|8": 8,
      "Cinza|10": 2,
      "Marinho|2": 8,
      "Marinho|4": 6,
      "Marinho|6": 1,
      "Marinho|8": 8,
      "Marinho|10": 8
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Cinza · 2"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "MOLE-COM-CAPU",
    "nome": "Moletom com capuz",
    "marca": "Pequenos",
    "cat": "bebe",
    "preco": 79.9,
    "desenho": "moletom",
    "destaque": false,
    "desc": "Moletom com capuz da Pequenos. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Amarelo",
        "#F2C14E"
      ],
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "estoque": {
      "Amarelo|4": 6
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Amarelo · 2"
      },
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Amarelo · 2"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "CAMI-ESTA",
    "nome": "Camiseta estampada",
    "marca": "Pequenos",
    "cat": "menino",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "camiseta",
    "destaque": false,
    "desc": "Camiseta estampada da Pequenos. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ],
      [
        "Verde",
        "#2F6B4F"
      ]
    ],
    "tamanhos": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "estoque": {
      "Branco|4": 4,
      "Branco|6": 6,
      "Branco|10": 3,
      "Verde|2": 7,
      "Verde|4": 2,
      "Verde|6": 9,
      "Verde|8": 2
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Branco · 2"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Branco · 2"
      }
    ]
  }
];
