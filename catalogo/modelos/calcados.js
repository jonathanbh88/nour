/* =====================================================================
   Nour Catálogo · modelo pronto: Calçados
   Baseado no modelo "calcados" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Passo Calçados",
  "slogan": "Tênis, sandálias e sapatos com conforto para o dia inteiro.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Tênis, sandálias e sapatos com conforto para o dia inteiro. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#1324DD",
    "p2": "#04222A",
    "p3": "#F3FF4D",
    "on3": "#1A1C00"
  },
  "tema": "auto",
  "faixa": [
    "Frete grátis para todo o Brasil acima de R$ 299",
    "5% de desconto no Pix",
    "Primeira troca grátis"
  ],
  "banners": [],
  "banner": {
    "selo": "Coleção 2026",
    "titulo": "Os melhores sneakers",
    "texto": "Modelos selecionados para quem busca estilo, conforto e performance.",
    "botao": "Comprar agora",
    "categoria": "casual",
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
    "tamanho": "Número"
  },
  "tabelaMedidas": [
    [
      "Nº",
      "Comprimento do pé (cm)"
    ],
    [
      "34",
      "22,5"
    ],
    [
      "35",
      "23,2"
    ],
    [
      "36",
      "23,9"
    ],
    [
      "37",
      "24,6"
    ],
    [
      "38",
      "25,3"
    ],
    [
      "39",
      "26,0"
    ],
    [
      "40",
      "26,6"
    ],
    [
      "41",
      "27,3"
    ],
    [
      "42",
      "28,0"
    ],
    [
      "43",
      "28,6"
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
    "id": "casual",
    "nome": "Tênis casual",
    "chamada": "Para o dia a dia",
    "desenho": "tenis",
    "cor": "#1D1F23"
  },
  {
    "id": "corrida",
    "nome": "Corrida",
    "chamada": "Amortecimento de verdade",
    "desenho": "tenis",
    "cor": "#E58FAE"
  },
  {
    "id": "sandalias",
    "nome": "Sandálias",
    "chamada": "Leves e confortáveis",
    "desenho": "sandalia",
    "cor": "#D8C3A5"
  },
  {
    "id": "sociais",
    "nome": "Sapatos sociais",
    "chamada": "Couro legítimo",
    "desenho": "tenis",
    "cor": "#6B4128"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "TENI-CASU-URBA",
    "nome": "Tênis casual urbano",
    "marca": "Passo",
    "cat": "casual",
    "preco": 309.9,
    "de": 369.9,
    "desenho": "tenis",
    "destaque": true,
    "desc": "Tênis casual urbano da Passo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "estoque": {
      "Preto|37": 8,
      "Preto|38": 2,
      "Preto|40": 6,
      "Preto|42": 1,
      "Preto|43": 2,
      "Branco|37": 7,
      "Branco|38": 3,
      "Branco|39": 9,
      "Branco|40": 4,
      "Branco|41": 1,
      "Branco|42": 1,
      "Branco|43": 6
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto · 37"
      },
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto · 37"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "TENI-DE-CORR",
    "nome": "Tênis de corrida com amortecimento",
    "marca": "Passo Run",
    "cat": "corrida",
    "preco": 419.9,
    "de": 519.9,
    "desenho": "tenis",
    "destaque": true,
    "desc": "Tênis de corrida com amortecimento da Passo Run. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Azul",
        "#2457C5"
      ],
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "estoque": {
      "Rosa|37": 4,
      "Rosa|38": 8,
      "Rosa|39": 3,
      "Rosa|40": 8,
      "Rosa|41": 1,
      "Rosa|42": 6,
      "Rosa|43": 9,
      "Azul|38": 7,
      "Azul|40": 9,
      "Azul|42": 5,
      "Branco|37": 6,
      "Branco|39": 8,
      "Branco|41": 8,
      "Branco|43": 2
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Rosa · 37"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "SAND-PAPE",
    "nome": "Sandália papete",
    "marca": "Passo",
    "cat": "sandalias",
    "preco": 129.9,
    "de": 159.9,
    "desenho": "sandalia",
    "destaque": true,
    "desc": "Sandália papete da Passo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Bege",
        "#D8C3A5"
      ]
    ],
    "tamanhos": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39"
    ],
    "estoque": {
      "Preto|34": 4,
      "Preto|36": 7,
      "Preto|37": 7,
      "Preto|38": 9,
      "Preto|39": 2,
      "Bege|34": 1,
      "Bege|35": 9,
      "Bege|36": 9,
      "Bege|37": 5,
      "Bege|38": 4,
      "Bege|39": 8
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto · 34"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Preto · 34"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "SAPA-SOCI-DE",
    "nome": "Sapato social de couro",
    "marca": "Passo Classic",
    "cat": "sociais",
    "preco": 299.9,
    "desenho": "tenis",
    "destaque": true,
    "desc": "Sapato social de couro da Passo Classic. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Marrom",
        "#6B4128"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "estoque": {
      "Marrom|37": 1,
      "Marrom|38": 1,
      "Marrom|39": 1,
      "Marrom|41": 9,
      "Marrom|42": 7,
      "Marrom|43": 3,
      "Preto|37": 8,
      "Preto|38": 5,
      "Preto|39": 6,
      "Preto|41": 2,
      "Preto|42": 5,
      "Preto|43": 6
    },
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Marrom · 37"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "TENI-DE-TREI",
    "nome": "Tênis de treino",
    "marca": "Passo Run",
    "cat": "corrida",
    "preco": 349.9,
    "de": 399.9,
    "desenho": "tenis",
    "destaque": true,
    "desc": "Tênis de treino da Passo Run. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ],
      [
        "Vermelho",
        "#C62A2A"
      ]
    ],
    "tamanhos": [
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "estoque": {
      "Cinza|37": 6,
      "Cinza|38": 3,
      "Cinza|41": 7,
      "Cinza|42": 9,
      "Cinza|43": 6,
      "Vermelho|37": 6,
      "Vermelho|38": 1,
      "Vermelho|39": 2,
      "Vermelho|40": 7,
      "Vermelho|41": 1,
      "Vermelho|42": 7,
      "Vermelho|43": 5
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Cinza · 37"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "TENI-CANO-ALTO",
    "nome": "Tênis cano alto",
    "marca": "Passo",
    "cat": "casual",
    "preco": 259.9,
    "de": 329.9,
    "desenho": "tenis",
    "destaque": false,
    "desc": "Tênis cano alto da Passo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "estoque": {
      "Vermelho|37": 2,
      "Vermelho|38": 6,
      "Vermelho|39": 4,
      "Vermelho|40": 3,
      "Vermelho|41": 8,
      "Vermelho|42": 5,
      "Vermelho|43": 1,
      "Preto|37": 9,
      "Preto|38": 8,
      "Preto|39": 9,
      "Preto|41": 4,
      "Preto|42": 1,
      "Preto|43": 2
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Vermelho · 37"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "CHIN-SLID",
    "nome": "Chinelo slide",
    "marca": "Passo",
    "cat": "sandalias",
    "preco": 59.9,
    "desenho": "sandalia",
    "destaque": false,
    "desc": "Chinelo slide da Passo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Off-white",
        "#EDE6DA"
      ]
    ],
    "tamanhos": [
      "35/36",
      "37/38",
      "39/40",
      "41/42"
    ],
    "estoque": {
      "Preto|35/36": 5
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto · 35/36"
      },
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto · 35/36"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "TENI-COUR-BRAN",
    "nome": "Tênis couro branco",
    "marca": "Passo",
    "cat": "casual",
    "preco": 279.9,
    "desenho": "tenis",
    "destaque": false,
    "desc": "Tênis couro branco da Passo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ],
      [
        "Bege",
        "#D8C3A5"
      ]
    ],
    "tamanhos": [
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "estoque": {
      "Branco|37": 3,
      "Branco|38": 4,
      "Branco|39": 6,
      "Branco|40": 9,
      "Branco|41": 2,
      "Branco|43": 1,
      "Bege|37": 2,
      "Bege|38": 8,
      "Bege|39": 1,
      "Bege|40": 4,
      "Bege|41": 6,
      "Bege|42": 9,
      "Bege|43": 5
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco · 37"
      },
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco · 37"
      }
    ]
  }
];
