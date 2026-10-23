/* =====================================================================
   Nour Catálogo · modelo pronto: Celulares e acessórios
   Baseado no modelo "celular" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Conecta Celulares",
  "slogan": "Capinhas, películas, carregadores e fones. Assistência técnica na hora.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Capinhas, películas, carregadores e fones. Assistência técnica na hora. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#111827",
    "p2": "#C8A24A",
    "p3": "#F4E3B5",
    "on3": "#3A2A00"
  },
  "tema": "auto",
  "faixa": [
    "Película aplicada na hora",
    "Garantia em todos os produtos",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Acessórios",
    "titulo": "Tudo para o seu celular",
    "texto": "Capinhas, carregadores turbo e fones com garantia.",
    "botao": "Comprar agora",
    "categoria": "capinhas",
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
    "tamanho": "Modelo"
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
    "id": "capinhas",
    "nome": "Capinhas",
    "chamada": "Para todos os modelos",
    "desenho": "celular",
    "cor": "#5B3B8C"
  },
  {
    "id": "carregadores",
    "nome": "Carregadores",
    "chamada": "Turbo e originais",
    "desenho": "caixa",
    "cor": "#F2F2EE"
  },
  {
    "id": "fones",
    "nome": "Fones",
    "chamada": "Com e sem fio",
    "desenho": "fone",
    "cor": "#1D1F23"
  },
  {
    "id": "peliculas",
    "nome": "Películas",
    "chamada": "Aplicamos na hora",
    "desenho": "celular",
    "cor": "#9AA1A9"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CAPI-ANTI",
    "nome": "Capinha anti-impacto",
    "marca": "Conecta",
    "cat": "capinhas",
    "preco": 49.9,
    "de": 69.9,
    "desenho": "celular",
    "destaque": true,
    "desc": "Capinha anti-impacto da Conecta. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Transparente",
        "#D7E3EA"
      ],
      [
        "Roxo",
        "#5B3B8C"
      ]
    ],
    "tamanhos": [
      "iPhone 15",
      "iPhone 14",
      "Galaxy S24",
      "Galaxy A55",
      "Moto G84"
    ],
    "estoque": {
      "Preto|iPhone 15": 5,
      "Preto|iPhone 14": 2,
      "Preto|Galaxy S24": 2,
      "Preto|Galaxy A55": 5,
      "Preto|Moto G84": 1,
      "Transparente|iPhone 15": 6,
      "Transparente|iPhone 14": 5,
      "Transparente|Galaxy S24": 9,
      "Transparente|Galaxy A55": 1,
      "Transparente|Moto G84": 5,
      "Roxo|iPhone 15": 7,
      "Roxo|iPhone 14": 7,
      "Roxo|Moto G84": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Preto · iPhone 15"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "CAPI-DE-SILI",
    "nome": "Capinha de silicone aveludada",
    "marca": "Conecta",
    "cat": "capinhas",
    "preco": 59.9,
    "desenho": "celular",
    "destaque": true,
    "desc": "Capinha de silicone aveludada da Conecta. Troque este texto pela descrição do produto.",
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
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "iPhone 15",
      "iPhone 14",
      "Galaxy S24",
      "Galaxy A55",
      "Moto G84"
    ],
    "estoque": {
      "Rosa|iPhone 15": 2,
      "Rosa|iPhone 14": 1,
      "Rosa|Galaxy S24": 9,
      "Rosa|Galaxy A55": 8,
      "Rosa|Moto G84": 7,
      "Azul|iPhone 15": 2,
      "Azul|iPhone 14": 7,
      "Azul|Moto G84": 2,
      "Preto|iPhone 15": 8,
      "Preto|iPhone 14": 8,
      "Preto|Galaxy A55": 2,
      "Preto|Moto G84": 9
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Rosa · iPhone 15"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "CARR-TURB-25",
    "nome": "Carregador turbo 25 W",
    "marca": "Conecta",
    "cat": "carregadores",
    "preco": 89.9,
    "de": 119.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Carregador turbo 25 W da Conecta. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "USB-C"
    ],
    "estoque": {
      "Branco|USB-C": 7
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Branco · USB-C"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "CABO-USB--REFO",
    "nome": "Cabo USB-C reforçado 2 m",
    "marca": "Conecta",
    "cat": "carregadores",
    "preco": 39.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Cabo USB-C reforçado 2 m da Conecta. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
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
      "Branco|Único": 5,
      "Preto|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "FONE-BLUE-COM",
    "nome": "Fone bluetooth com estojo",
    "marca": "Conecta",
    "cat": "fones",
    "preco": 149.9,
    "de": 199.9,
    "desenho": "fone",
    "destaque": true,
    "desc": "Fone bluetooth com estojo da Conecta. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
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
      "Branco|Único": 3,
      "Preto|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Branco"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "FONE-COM-FIO",
    "nome": "Fone com fio P2",
    "marca": "Conecta",
    "cat": "fones",
    "preco": 29.9,
    "desenho": "fone",
    "destaque": false,
    "desc": "Fone com fio P2 da Conecta. Troque este texto pela descrição do produto.",
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
      "Preto|Único": 2
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Recife, PE",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Preto"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "PELI-DE-VIDR",
    "nome": "Película de vidro 3D",
    "marca": "Conecta",
    "cat": "peliculas",
    "preco": 29.9,
    "de": 39.9,
    "desenho": "celular",
    "destaque": false,
    "desc": "Película de vidro 3D da Conecta. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Transparente",
        "#D7E3EA"
      ]
    ],
    "tamanhos": [
      "iPhone 15",
      "iPhone 14",
      "Galaxy S24",
      "Galaxy A55",
      "Moto G84"
    ],
    "estoque": {
      "Transparente|iPhone 15": 5
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Transparente · iPhone 15"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Transparente · iPhone 15"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "PELI-DE-PRIV",
    "nome": "Película de privacidade",
    "marca": "Conecta",
    "cat": "peliculas",
    "preco": 49.9,
    "desenho": "celular",
    "destaque": false,
    "desc": "Película de privacidade da Conecta. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "iPhone 15",
      "iPhone 14",
      "Galaxy S24",
      "Galaxy A55",
      "Moto G84"
    ],
    "estoque": {
      "Preto|iPhone 15": 3,
      "Preto|Galaxy S24": 1,
      "Preto|Galaxy A55": 4,
      "Preto|Moto G84": 9
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto · iPhone 15"
      }
    ]
  }
];
