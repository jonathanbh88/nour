/* =====================================================================
   Nour Catálogo · modelo pronto: Moda feminina
   Baseado no modelo "roupas" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Ateliê Exemplo",
  "slogan": "Moda feminina com caimento de verdade. Peças novas toda semana.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Moda feminina com caimento de verdade. Peças novas toda semana. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#8C2A5B",
    "p2": "#D0567F",
    "p3": "#F6D365",
    "on3": "#3A2600"
  },
  "tema": "auto",
  "faixa": [
    "Novas peças toda semana",
    "Frete grátis para todo o Brasil acima de R$ 299",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Lançamentos",
    "titulo": "Nova coleção da estação",
    "texto": "Elegância para todos os momentos, do trabalho ao fim de semana.",
    "botao": "Comprar agora",
    "categoria": "vestidos",
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
      "Busto",
      "Cintura",
      "Quadril"
    ],
    [
      "PP",
      "80",
      "62",
      "88"
    ],
    [
      "P",
      "84",
      "66",
      "92"
    ],
    [
      "M",
      "90",
      "72",
      "98"
    ],
    [
      "G",
      "96",
      "78",
      "104"
    ],
    [
      "GG",
      "102",
      "84",
      "110"
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
    "id": "blusas",
    "nome": "Blusas",
    "chamada": "Leves para o dia a dia",
    "desenho": "blusa",
    "cor": "#2F6B4F"
  },
  {
    "id": "vestidos",
    "nome": "Vestidos",
    "chamada": "Para todas as ocasiões",
    "desenho": "vestido",
    "cor": "#9AA1A9"
  },
  {
    "id": "calcas-saias",
    "nome": "Calças e saias",
    "chamada": "Cintura alta e caimento perfeito",
    "desenho": "calca",
    "cor": "#1D1F23"
  },
  {
    "id": "casacos",
    "nome": "Casacos",
    "chamada": "Alfaiataria que dura",
    "desenho": "casaco",
    "cor": "#C9AE8C"
  },
  {
    "id": "acessorios",
    "nome": "Acessórios",
    "chamada": "O toque final do look",
    "desenho": "bolsa",
    "cor": "#6E1F33"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "BLUS-BASI-MANG",
    "nome": "Blusa básica manga curta",
    "marca": "Linha Essencial",
    "cat": "blusas",
    "preco": 89.9,
    "de": 119.9,
    "desenho": "blusa",
    "destaque": true,
    "desc": "Blusa básica manga curta da Linha Essencial. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
      ],
      [
        "Bege",
        "#D8C3A5"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Verde|PP": 5,
      "Verde|M": 8,
      "Verde|G": 3,
      "Bege|PP": 9,
      "Bege|P": 2,
      "Bege|M": 8,
      "Bege|G": 5,
      "Bege|GG": 8,
      "Preto|PP": 5,
      "Preto|P": 1,
      "Preto|G": 6,
      "Preto|GG": 9
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Verde · PP"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Verde · PP"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "VEST-TIGR-OMBR",
    "nome": "Vestido tigrado ombro único",
    "marca": "Linha Festa",
    "cat": "vestidos",
    "preco": 99.9,
    "de": 139.9,
    "desenho": "vestido",
    "destaque": true,
    "desc": "Vestido tigrado ombro único da Linha Festa. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ],
      [
        "Bege",
        "#D8C3A5"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Cinza|PP": 6,
      "Cinza|P": 6,
      "Cinza|M": 9,
      "Cinza|G": 7,
      "Cinza|GG": 2,
      "Bege|PP": 5,
      "Bege|P": 2,
      "Bege|M": 2,
      "Bege|G": 3,
      "Bege|GG": 6
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Cinza · PP"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Cinza · PP"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "CALC-LARG-PRET",
    "nome": "Calça larga preta",
    "marca": "Linha Essencial",
    "cat": "calcas-saias",
    "preco": 79.9,
    "de": 109.9,
    "desenho": "calca",
    "destaque": true,
    "desc": "Calça larga preta da Linha Essencial. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Preto|PP": 2,
      "Preto|P": 6,
      "Preto|M": 4,
      "Preto|G": 5,
      "Preto|GG": 1
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto · PP"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto · PP"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "BLUS-LIST-COM",
    "nome": "Blusa listrada com bolso",
    "marca": "Linha Casual",
    "cat": "blusas",
    "preco": 159.9,
    "de": 199.9,
    "desenho": "blusa",
    "destaque": true,
    "desc": "Blusa listrada com bolso da Linha Casual. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vinho",
        "#6E1F33"
      ],
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Vinho|PP": 9,
      "Vinho|M": 7,
      "Vinho|G": 8,
      "Vinho|GG": 1,
      "Branco|PP": 1,
      "Branco|P": 2,
      "Branco|M": 4,
      "Branco|G": 5,
      "Branco|GG": 5
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Vinho · PP"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Vinho · PP"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "VEST-MIDI-DE",
    "nome": "Vestido midi de linho",
    "marca": "Linha Festa",
    "cat": "vestidos",
    "preco": 189.9,
    "desenho": "vestido",
    "destaque": true,
    "desc": "Vestido midi de linho da Linha Festa. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Bege",
        "#D8C3A5"
      ],
      [
        "Verde",
        "#2F6B4F"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Bege|PP": 4,
      "Bege|P": 1,
      "Bege|M": 5,
      "Bege|G": 3,
      "Bege|GG": 8,
      "Verde|PP": 1,
      "Verde|P": 5,
      "Verde|M": 4,
      "Verde|G": 9,
      "Verde|GG": 8
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Bege · PP"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege · PP"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "CASA-DE-ALFA",
    "nome": "Casaco de alfaiataria",
    "marca": "Linha Inverno",
    "cat": "casacos",
    "preco": 249.9,
    "de": 299.9,
    "desenho": "casaco",
    "destaque": false,
    "desc": "Casaco de alfaiataria da Linha Inverno. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Bege",
        "#D8C3A5"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Bege|PP": 1,
      "Bege|M": 4,
      "Bege|G": 7,
      "Bege|GG": 6,
      "Preto|PP": 6,
      "Preto|P": 3,
      "Preto|M": 6,
      "Preto|G": 1,
      "Preto|GG": 2
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege · PP"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege · PP"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "SAIA-MIDI-PLIS",
    "nome": "Saia midi plissada",
    "marca": "Linha Casual",
    "cat": "calcas-saias",
    "preco": 119.9,
    "desenho": "saia",
    "destaque": false,
    "desc": "Saia midi plissada da Linha Casual. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Rosa|PP": 9
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Rosa · PP"
      },
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Rosa · PP"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "BOLS-TIRA-MATE",
    "nome": "Bolsa tiracolo matelassê",
    "marca": "Acessórios",
    "cat": "acessorios",
    "preco": 139.9,
    "de": 169.9,
    "desenho": "bolsa",
    "destaque": false,
    "desc": "Bolsa tiracolo matelassê da Acessórios. Troque este texto pela descrição do produto.",
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
      "Vinho|Único": 9,
      "Preto|Único": 8
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
  }
];
