/* =====================================================================
   Nour Catálogo · modelo pronto: Joias e relógios
   Baseado no modelo "relojoaria" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Joalheria Exemplo",
  "slogan": "Alianças, joias em ouro 18k e relógios com garantia e certificado.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Alianças, joias em ouro 18k e relógios com garantia e certificado. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#7A5C3E",
    "p2": "#B49575",
    "p3": "#F1E3C8",
    "on3": "#3A2A10"
  },
  "tema": "auto",
  "faixa": [
    "Ouro 18k com certificado",
    "Gravação grátis nas alianças",
    "Parcele em até 10x"
  ],
  "banners": [],
  "banner": {
    "selo": "Para sempre",
    "titulo": "Alianças e joias em ouro 18k",
    "texto": "Certificado de garantia e gravação grátis.",
    "botao": "Comprar agora",
    "categoria": "aliancas",
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
  "parcelas": 10,
  "freteGratisAcima": 299,
  "rotulos": {
    "cor": "Material",
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
    "id": "aliancas",
    "nome": "Alianças",
    "chamada": "Gravação grátis",
    "desenho": "anel",
    "cor": "#C9A227"
  },
  {
    "id": "aneis",
    "nome": "Anéis",
    "chamada": "Solitários e aparadores",
    "desenho": "anel",
    "cor": "#D9A08B"
  },
  {
    "id": "colares",
    "nome": "Colares",
    "chamada": "Ouro e prata",
    "desenho": "colar",
    "cor": "#C9A227"
  },
  {
    "id": "relogios",
    "nome": "Relógios",
    "chamada": "Com garantia",
    "desenho": "relogio",
    "cor": "#3A3F46"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "PAR-DE-ALIA",
    "nome": "Par de alianças tradicionais 4 mm",
    "marca": "Exemplo",
    "cat": "aliancas",
    "preco": 1890,
    "de": 2290,
    "desenho": "anel",
    "destaque": true,
    "desc": "Par de alianças tradicionais 4 mm da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "14",
      "16",
      "18",
      "20",
      "22",
      "24"
    ],
    "estoque": {
      "Dourado|16": 7,
      "Dourado|18": 8,
      "Dourado|20": 3,
      "Dourado|22": 4,
      "Dourado|24": 4
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado · 14"
      },
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado · 14"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "ANEL-SOLI",
    "nome": "Anel solitário",
    "marca": "Exemplo",
    "cat": "aneis",
    "preco": 890,
    "desenho": "anel",
    "destaque": true,
    "desc": "Anel solitário da Exemplo. Troque este texto pela descrição do produto.",
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
      "12",
      "14",
      "16",
      "18"
    ],
    "estoque": {
      "Dourado|12": 7,
      "Dourado|16": 9,
      "Dourado|18": 2,
      "Prata|12": 5,
      "Prata|16": 7,
      "Prata|18": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado · 12"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Dourado · 12"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "COLA-VENE-45",
    "nome": "Colar veneziana 45 cm",
    "marca": "Exemplo",
    "cat": "colares",
    "preco": 590,
    "de": 690,
    "desenho": "colar",
    "destaque": true,
    "desc": "Colar veneziana 45 cm da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "RELO-MASC-ACO",
    "nome": "Relógio masculino aço",
    "marca": "Exemplo",
    "cat": "relogios",
    "preco": 459,
    "de": 559,
    "desenho": "relogio",
    "destaque": true,
    "desc": "Relógio masculino aço da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Prata",
        "#B8BCC2"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Prata"
      },
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Prata"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "RELO-FEMI-ROSE",
    "nome": "Relógio feminino rosé",
    "marca": "Exemplo",
    "cat": "relogios",
    "preco": 399,
    "desenho": "relogio",
    "destaque": true,
    "desc": "Relógio feminino rosé da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosé",
        "#D9A08B"
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
      "Rosé|Único": 2,
      "Dourado|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Rosé"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "BRIN-DE-PERO",
    "nome": "Brinco de pérola",
    "marca": "Exemplo",
    "cat": "colares",
    "preco": 290,
    "desenho": "anel",
    "destaque": false,
    "desc": "Brinco de pérola da Exemplo. Troque este texto pela descrição do produto.",
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
      "Prata|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Dourado"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "ANEL-APAR",
    "nome": "Anel aparador",
    "marca": "Exemplo",
    "cat": "aneis",
    "preco": 390,
    "de": 450,
    "desenho": "anel",
    "destaque": false,
    "desc": "Anel aparador da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "12",
      "14",
      "16",
      "18"
    ],
    "estoque": {
      "Dourado|12": 8
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado · 12"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "PULS-RIVI",
    "nome": "Pulseira riviera",
    "marca": "Exemplo",
    "cat": "colares",
    "preco": 690,
    "de": 790,
    "desenho": "colar",
    "destaque": false,
    "desc": "Pulseira riviera da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Prata",
        "#B8BCC2"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Prata|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Prata"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "Brasília, DF",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Prata"
      }
    ]
  }
];
