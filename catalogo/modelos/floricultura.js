/* =====================================================================
   Nour Catálogo · modelo pronto: Floricultura
   Baseado no modelo "floricultura" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Flor de Lis",
  "slogan": "Buquês, arranjos e cestas com entrega no mesmo dia.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Buquês, arranjos e cestas com entrega no mesmo dia. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#C2185B",
    "p2": "#93042B",
    "p3": "#EBCEB7",
    "on3": "#4A1020"
  },
  "tema": "auto",
  "faixa": [
    "Entrega no mesmo dia",
    "Cartão personalizado grátis",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Presentes",
    "titulo": "Flores que dizem tudo",
    "texto": "Buquês e arranjos com entrega no mesmo dia.",
    "botao": "Comprar agora",
    "categoria": "buques",
    "imagem": ""
  },
  "beneficios": [
    [
      "envio",
      "Entrega no bairro",
      "Rápida e combinada no WhatsApp"
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
  "freteGratisAcima": 0,
  "rotulos": {
    "cor": "Cor",
    "tamanho": "Tamanho"
  },
  "tabelaMedidas": [],
  "entrega": [
    [
      "motoboy",
      "Entrega no bairro",
      "Combinado no WhatsApp"
    ],
    [
      "retirada",
      "Retirar na loja",
      "Sem custo"
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
    "id": "buques",
    "nome": "Buquês",
    "chamada": "Rosas e flores do campo",
    "desenho": "flor",
    "cor": "#E81968"
  },
  {
    "id": "arranjos",
    "nome": "Arranjos",
    "chamada": "Para mesa e eventos",
    "desenho": "flor",
    "cor": "#F2C14E"
  },
  {
    "id": "cestas",
    "nome": "Cestas",
    "chamada": "Café da manhã e presentes",
    "desenho": "bolsa",
    "cor": "#8B5E34"
  },
  {
    "id": "plantas",
    "nome": "Plantas",
    "chamada": "Vasos e suculentas",
    "desenho": "flor",
    "cor": "#2F6B4F"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "BUQU-12-ROSA",
    "nome": "Buquê 12 rosas",
    "marca": "Flor de Lis",
    "cat": "buques",
    "preco": 189.9,
    "de": 229.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Buquê 12 rosas da Flor de Lis. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ],
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
      "Único"
    ],
    "estoque": {
      "Vermelho|Único": 3,
      "Branco|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Vermelho"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "BUQU-5-ROSA",
    "nome": "Buquê 5 rosas",
    "marca": "Flor de Lis",
    "cat": "buques",
    "preco": 99.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Buquê 5 rosas da Flor de Lis. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ],
      [
        "Rosa",
        "#E58FAE"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Vermelho|Único": 2,
      "Rosa|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vermelho"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vermelho"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "ARRA-DE-GIRA",
    "nome": "Arranjo de girassóis",
    "marca": "Flor de Lis",
    "cat": "arranjos",
    "preco": 149.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Arranjo de girassóis da Flor de Lis. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Amarelo",
        "#F2C14E"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Amarelo|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Amarelo"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Amarelo"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "ARRA-ORQU",
    "nome": "Arranjo orquídea",
    "marca": "Flor de Lis",
    "cat": "arranjos",
    "preco": 169.9,
    "de": 199.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Arranjo orquídea da Flor de Lis. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Lilás",
        "#B39DDB"
      ],
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Lilás|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Lilás"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Lilás"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "CEST-CAFE-DA",
    "nome": "Cesta café da manhã",
    "marca": "Flor de Lis",
    "cat": "cestas",
    "preco": 219.9,
    "de": 259.9,
    "desenho": "bolsa",
    "destaque": true,
    "desc": "Cesta café da manhã da Flor de Lis. Troque este texto pela descrição do produto.",
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
      "Bege|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Bege"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "CEST-ENCA-DOS",
    "nome": "Cesta encanto dos namorados",
    "marca": "Flor de Lis",
    "cat": "cestas",
    "preco": 289.9,
    "desenho": "bolsa",
    "destaque": false,
    "desc": "Cesta encanto dos namorados da Flor de Lis. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Vermelho|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Vermelho"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vermelho"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "KIT-SUCU",
    "nome": "Kit suculentas",
    "marca": "Flor de Lis",
    "cat": "plantas",
    "preco": 59.9,
    "de": 69.9,
    "desenho": "flor",
    "destaque": false,
    "desc": "Kit suculentas da Flor de Lis. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Verde|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Verde"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "VASO-DE-LIRI",
    "nome": "Vaso de lírio da paz",
    "marca": "Flor de Lis",
    "cat": "plantas",
    "preco": 79.9,
    "desenho": "flor",
    "destaque": false,
    "desc": "Vaso de lírio da paz da Flor de Lis. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Branco|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Branco"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Branco"
      }
    ]
  }
];
