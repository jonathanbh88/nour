/* =====================================================================
   Nour Catálogo · modelo pronto: Acessórios e bijuterias
   Baseado no modelo "acessorios" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Brilho Acessórios",
  "slogan": "Brincos, colares, bolsas e óculos para completar o look.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Brincos, colares, bolsas e óculos para completar o look. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#0B4F8A",
    "p2": "#02B5FE",
    "p3": "#FFD6E0",
    "on3": "#3A0F1E"
  },
  "tema": "auto",
  "faixa": [
    "Peças novas toda semana",
    "Frete grátis acima de R$ 149",
    "Embalagem para presente"
  ],
  "banners": [],
  "banner": {
    "selo": "Novidades",
    "titulo": "Brilho para todo dia",
    "texto": "Semijoias banhadas, bolsas e óculos com garantia.",
    "botao": "Comprar agora",
    "categoria": "brincos",
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
    "id": "brincos",
    "nome": "Brincos",
    "chamada": "Banhados a ouro 18k",
    "desenho": "anel",
    "cor": "#C9A227"
  },
  {
    "id": "colares",
    "nome": "Colares",
    "chamada": "Para usar em camadas",
    "desenho": "colar",
    "cor": "#C9A227"
  },
  {
    "id": "bolsas",
    "nome": "Bolsas",
    "chamada": "Do dia a dia à festa",
    "desenho": "bolsa",
    "cor": "#6E1F33"
  },
  {
    "id": "oculos",
    "nome": "Óculos de sol",
    "chamada": "Proteção UV400",
    "desenho": "oculos",
    "cor": "#1D1F23"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "BRIN-ARGO-MEDI",
    "nome": "Brinco argola média",
    "marca": "Brilho",
    "cat": "brincos",
    "preco": 49.9,
    "de": 69.9,
    "desenho": "anel",
    "destaque": true,
    "desc": "Brinco argola média da Brilho. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ],
      [
        "Prata",
        "#B8BCC2"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Dourado|Único": 2,
      "Prata|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado"
      },
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Dourado"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "COLA-PONT-DE",
    "nome": "Colar ponto de luz",
    "marca": "Brilho",
    "cat": "colares",
    "preco": 59.9,
    "desenho": "colar",
    "destaque": true,
    "desc": "Colar ponto de luz da Brilho. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ],
      [
        "Prata",
        "#B8BCC2"
      ],
      [
        "Rosé",
        "#D9A08B"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Dourado|Único": 3,
      "Prata|Único": 3,
      "Rosé|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Dourado"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "BOLS-TIRA-MATE",
    "nome": "Bolsa tiracolo matelassê",
    "marca": "Brilho",
    "cat": "bolsas",
    "preco": 139.9,
    "de": 169.9,
    "desenho": "bolsa",
    "destaque": true,
    "desc": "Bolsa tiracolo matelassê da Brilho. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vinho",
        "#6E1F33"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Vinho|Único": 5,
      "Preto|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vinho"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "OCUL-GATI",
    "nome": "Óculos gatinho",
    "marca": "Brilho",
    "cat": "oculos",
    "preco": 89.9,
    "de": 119.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Óculos gatinho da Brilho. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Tartaruga",
        "#7A4A22"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Preto|Único": 6,
      "Tartaruga|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "BRIN-EAR-CUFF",
    "nome": "Brinco ear cuff",
    "marca": "Brilho",
    "cat": "brincos",
    "preco": 39.9,
    "desenho": "anel",
    "destaque": true,
    "desc": "Brinco ear cuff da Brilho. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ],
      [
        "Prata",
        "#B8BCC2"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Dourado|Único": 5,
      "Prata|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "CHOK-DE-PERO",
    "nome": "Choker de pérolas",
    "marca": "Brilho",
    "cat": "colares",
    "preco": 69.9,
    "de": 89.9,
    "desenho": "colar",
    "destaque": false,
    "desc": "Choker de pérolas da Brilho. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Off-white",
        "#EDE6DA"
      ],
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Off-white|Único": 1,
      "Dourado|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Off-white"
      },
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Off-white"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "BOLS-DE-PRAI",
    "nome": "Bolsa de praia palha",
    "marca": "Brilho",
    "cat": "bolsas",
    "preco": 99.9,
    "desenho": "bolsa",
    "destaque": false,
    "desc": "Bolsa de praia palha da Brilho. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Bege",
        "#D8C3A5"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Bege|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Bege"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "OCUL-AVIA",
    "nome": "Óculos aviador",
    "marca": "Brilho",
    "cat": "oculos",
    "preco": 99.9,
    "de": 129.9,
    "desenho": "oculos",
    "destaque": false,
    "desc": "Óculos aviador da Brilho. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Dourado|Único": 7,
      "Preto|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      }
    ]
  }
];
