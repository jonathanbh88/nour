/* =====================================================================
   Nour Catálogo · modelo pronto: Suplementos
   Baseado no modelo "academia" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Vigor Suplementos",
  "slogan": "Suplementos de alta performance com nota fiscal e procedência.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Suplementos de alta performance com nota fiscal e procedência. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#14532D",
    "p2": "#16A34A",
    "p3": "#E8C45A",
    "on3": "#2A2000"
  },
  "tema": "auto",
  "faixa": [
    "Suplementos com nota fiscal e procedência",
    "Frete grátis para todo o Brasil acima de R$ 199",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Alta performance",
    "titulo": "Vigor performance",
    "texto": "Suplementos para elevar seus resultados.",
    "botao": "Comprar agora",
    "categoria": "proteinas",
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
    "cor": "Sabor",
    "tamanho": "Peso"
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
    "id": "proteinas",
    "nome": "Proteínas",
    "chamada": "Whey e veganas",
    "desenho": "pote",
    "cor": "#2457C5"
  },
  {
    "id": "hipercaloricos",
    "nome": "Hipercalóricos",
    "chamada": "Para ganhar massa",
    "desenho": "racao",
    "cor": "#2F6B4F"
  },
  {
    "id": "creatina",
    "nome": "Creatina",
    "chamada": "100% pura",
    "desenho": "racao",
    "cor": "#1D1F23"
  },
  {
    "id": "aminoacidos",
    "nome": "Aminoácidos",
    "chamada": "BCAA e glutamina",
    "desenho": "garrafa",
    "cor": "#E0607E"
  },
  {
    "id": "vitaminas",
    "nome": "Vitaminas",
    "chamada": "Imunidade e energia",
    "desenho": "garrafa",
    "cor": "#5B3B8C"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "WHEY-PROT-ISOL",
    "nome": "Whey protein isolado",
    "marca": "Forza",
    "cat": "proteinas",
    "preco": 219.9,
    "de": 279.9,
    "desenho": "pote",
    "destaque": true,
    "desc": "Whey protein isolado da Forza. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Chocolate",
        "#6B4128"
      ],
      [
        "Baunilha",
        "#E9D8A6"
      ],
      [
        "Morango",
        "#E0607E"
      ]
    ],
    "tamanhos": [
      "900 g",
      "2 kg"
    ],
    "estoque": {
      "Chocolate|900 g": 3,
      "Chocolate|2 kg": 9,
      "Baunilha|2 kg": 3,
      "Morango|900 g": 3,
      "Morango|2 kg": 2
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Chocolate · 900 g"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "CREA-MONO",
    "nome": "Creatina monohidratada",
    "marca": "Pure Line",
    "cat": "creatina",
    "preco": 179.9,
    "de": 229.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Creatina monohidratada da Pure Line. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Natural",
        "#CFD6DC"
      ]
    ],
    "tamanhos": [
      "300 g",
      "500 g"
    ],
    "estoque": {
      "Natural|300 g": 2,
      "Natural|500 g": 5
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Natural · 300 g"
      },
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Natural · 300 g"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "HIPE-GANH-DE",
    "nome": "Hipercalórico ganho de massa 3 kg",
    "marca": "Massa Max",
    "cat": "hipercaloricos",
    "preco": 249.9,
    "de": 299.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Hipercalórico ganho de massa 3 kg da Massa Max. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Chocolate",
        "#6B4128"
      ],
      [
        "Baunilha",
        "#E9D8A6"
      ]
    ],
    "tamanhos": [
      "3 kg"
    ],
    "estoque": {
      "Chocolate|3 kg": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Chocolate · 3 kg"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Chocolate · 3 kg"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "GLUT",
    "nome": "Glutamina",
    "marca": "Vigor Pro",
    "cat": "aminoacidos",
    "preco": 109.9,
    "de": 139.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Glutamina da Vigor Pro. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Natural",
        "#CFD6DC"
      ]
    ],
    "tamanhos": [
      "300 g"
    ],
    "estoque": {
      "Natural|300 g": 6
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Natural · 300 g"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Natural · 300 g"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "COLA-HIDR",
    "nome": "Colágeno hidrolisado",
    "marca": "Vital Base",
    "cat": "vitaminas",
    "preco": 119.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Colágeno hidrolisado da Vital Base. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Limão",
        "#B8D94A"
      ],
      [
        "Morango",
        "#E0607E"
      ]
    ],
    "tamanhos": [
      "300 g"
    ],
    "estoque": {
      "Limão|300 g": 2,
      "Morango|300 g": 4
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Limão · 300 g"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Limão · 300 g"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "WHEY-CONC",
    "nome": "Whey concentrado",
    "marca": "Forza",
    "cat": "proteinas",
    "preco": 189.9,
    "desenho": "pote",
    "destaque": false,
    "desc": "Whey concentrado da Forza. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Chocolate",
        "#6B4128"
      ],
      [
        "Baunilha",
        "#E9D8A6"
      ]
    ],
    "tamanhos": [
      "900 g",
      "2 kg"
    ],
    "estoque": {
      "Chocolate|900 g": 2,
      "Chocolate|2 kg": 7,
      "Baunilha|900 g": 9,
      "Baunilha|2 kg": 2
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Chocolate · 900 g"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "BCAA-21",
    "nome": "BCAA 2:1:1",
    "marca": "Vigor Pro",
    "cat": "aminoacidos",
    "preco": 89.9,
    "de": 109.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "BCAA 2:1:1 da Vigor Pro. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Limão",
        "#B8D94A"
      ]
    ],
    "tamanhos": [
      "120 caps"
    ],
    "estoque": {
      "Limão|120 caps": 2
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Limão · 120 caps"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "MULT",
    "nome": "Multivitamínico",
    "marca": "Vital Base",
    "cat": "vitaminas",
    "preco": 59.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "Multivitamínico da Vital Base. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Natural",
        "#CFD6DC"
      ]
    ],
    "tamanhos": [
      "60 caps"
    ],
    "estoque": {
      "Natural|60 caps": 4
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Natural · 60 caps"
      },
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Natural · 60 caps"
      }
    ]
  }
];
