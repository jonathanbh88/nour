/* =====================================================================
   Nour Catálogo · modelo pronto: Móveis
   Baseado no modelo "moveis" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Casa Exemplo Móveis",
  "slogan": "Móveis para todos os ambientes com montagem e entrega na cidade.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Móveis para todos os ambientes com montagem e entrega na cidade. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#3B2A1A",
    "p2": "#8B5E34",
    "p3": "#E9D58A",
    "on3": "#3A2A00"
  },
  "tema": "auto",
  "faixa": [
    "Montagem grátis na cidade",
    "Parcele em até 12x",
    "Entrega agendada"
  ],
  "banners": [],
  "banner": {
    "selo": "Casa nova",
    "titulo": "Móveis para cada canto da casa",
    "texto": "Montagem grátis e entrega agendada.",
    "botao": "Comprar agora",
    "categoria": "sala",
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
    "cor": "Acabamento",
    "tamanho": "Medida"
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
    "id": "sala",
    "nome": "Sala",
    "chamada": "Sofás e racks",
    "desenho": "sofa",
    "cor": "#8B5E34"
  },
  {
    "id": "quarto",
    "nome": "Quarto",
    "chamada": "Camas e guarda-roupas",
    "desenho": "caixa",
    "cor": "#EDE6DA"
  },
  {
    "id": "cozinha",
    "nome": "Cozinha",
    "chamada": "Mesas e armários",
    "desenho": "caixa",
    "cor": "#3A3F46"
  },
  {
    "id": "escritorio",
    "nome": "Escritório",
    "chamada": "Para trabalhar bem",
    "desenho": "caixa",
    "cor": "#1D1F23"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "SOFA-RETR-3",
    "nome": "Sofá retrátil 3 lugares",
    "marca": "Exemplo",
    "cat": "sala",
    "preco": 1899,
    "de": 2299,
    "desenho": "sofa",
    "destaque": true,
    "desc": "Sofá retrátil 3 lugares da Exemplo. Troque este texto pela descrição do produto.",
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
      "2,10 m",
      "2,30 m"
    ],
    "estoque": {
      "Cinza|2,30 m": 7,
      "Bege|2,10 m": 2,
      "Bege|2,30 m": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Cinza · 2,10 m"
      },
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Cinza · 2,10 m"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "RACK-PARA-TV",
    "nome": "Rack para TV até 65\"",
    "marca": "Exemplo",
    "cat": "sala",
    "preco": 599,
    "de": 699,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Rack para TV até 65\" da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Madeira",
        "#8B5E34"
      ],
      [
        "Off-white",
        "#EDE6DA"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Madeira"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Madeira"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "GUAR-CASA-6",
    "nome": "Guarda-roupa casal 6 portas",
    "marca": "Exemplo",
    "cat": "quarto",
    "preco": 1499,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Guarda-roupa casal 6 portas da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Off-white",
        "#EDE6DA"
      ],
      [
        "Madeira",
        "#8B5E34"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Off-white|Único": 9,
      "Madeira|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Off-white"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Off-white"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "CAMA-BOX-CASA",
    "nome": "Cama box casal",
    "marca": "Exemplo",
    "cat": "quarto",
    "preco": 1299,
    "de": 1499,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Cama box casal da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "Casal",
      "Queen"
    ],
    "estoque": {
      "Cinza|Casal": 8
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Cinza · Casal"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Cinza · Casal"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "MESA-DE-JANT",
    "nome": "Mesa de jantar 6 lugares",
    "marca": "Exemplo",
    "cat": "cozinha",
    "preco": 1599,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Mesa de jantar 6 lugares da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Madeira",
        "#8B5E34"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Madeira"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "ARMA-DE-COZI",
    "nome": "Armário de cozinha completo",
    "marca": "Exemplo",
    "cat": "cozinha",
    "preco": 1999,
    "de": 2399,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Armário de cozinha completo da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Off-white",
        "#EDE6DA"
      ],
      [
        "Grafite",
        "#3A3F46"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Off-white|Único": 1,
      "Grafite|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Off-white"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "ESCR-COM-GAVE",
    "nome": "Escrivaninha com gavetas",
    "marca": "Exemplo",
    "cat": "escritorio",
    "preco": 449,
    "de": 529,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Escrivaninha com gavetas da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Madeira",
        "#8B5E34"
      ],
      [
        "Off-white",
        "#EDE6DA"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Madeira|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Madeira"
      },
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Madeira"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "CADE-DE-ESCR",
    "nome": "Cadeira de escritório",
    "marca": "Exemplo",
    "cat": "escritorio",
    "preco": 599,
    "desenho": "sofa",
    "destaque": false,
    "desc": "Cadeira de escritório da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Preto|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Preto"
      }
    ]
  }
];
