/* =====================================================================
   Nour Catálogo · modelo pronto: Pet shop
   Baseado no modelo "pet" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Patas Pet Shop",
  "slogan": "Rações, petiscos e acessórios para cães e gatos. Entrega no bairro.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Rações, petiscos e acessórios para cães e gatos. Entrega no bairro. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#EA580C",
    "p2": "#5B3B8C",
    "p3": "#FFD166",
    "on3": "#3A2A00"
  },
  "tema": "auto",
  "faixa": [
    "Entrega no mesmo dia no bairro",
    "Frete grátis acima de R$ 150",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Cães e gatos",
    "titulo": "Tudo para o seu pet",
    "texto": "Rações premium, petiscos e acessórios com entrega rápida.",
    "botao": "Comprar agora",
    "categoria": "racoes",
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
    "cor": "Sabor",
    "tamanho": "Peso"
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
    "id": "racoes",
    "nome": "Rações",
    "chamada": "Premium e super premium",
    "desenho": "racao",
    "cor": "#EA580C"
  },
  {
    "id": "petiscos",
    "nome": "Petiscos",
    "chamada": "Para agradar",
    "desenho": "racao",
    "cor": "#8C2F1B"
  },
  {
    "id": "brinquedos",
    "nome": "Brinquedos",
    "chamada": "Para gastar energia",
    "desenho": "bola",
    "cor": "#2457C5"
  },
  {
    "id": "higiene",
    "nome": "Higiene",
    "chamada": "Banho e cuidados",
    "desenho": "garrafa",
    "cor": "#92D0B7"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "RACA-PREM-CAES",
    "nome": "Ração premium cães adultos",
    "marca": "Patas",
    "cat": "racoes",
    "preco": 159.9,
    "de": 189.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Ração premium cães adultos da Patas. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Frango",
        "#E3B04B"
      ],
      [
        "Carne",
        "#8C2F1B"
      ]
    ],
    "tamanhos": [
      "1 kg",
      "3 kg",
      "10 kg"
    ],
    "estoque": {
      "Frango|1 kg": 1,
      "Frango|3 kg": 8,
      "Frango|10 kg": 5,
      "Carne|3 kg": 1,
      "Carne|10 kg": 7
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Frango · 1 kg"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Frango · 1 kg"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "RACA-GATO-CAST",
    "nome": "Ração gatos castrados",
    "marca": "Patas",
    "cat": "racoes",
    "preco": 129.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Ração gatos castrados da Patas. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Frango",
        "#E3B04B"
      ],
      [
        "Carne",
        "#8C2F1B"
      ]
    ],
    "tamanhos": [
      "1 kg",
      "3 kg"
    ],
    "estoque": {
      "Frango|1 kg": 7,
      "Frango|3 kg": 1,
      "Carne|1 kg": 6
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Frango · 1 kg"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Frango · 1 kg"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "PETI-BIFI",
    "nome": "Petisco bifinho",
    "marca": "Patas",
    "cat": "petiscos",
    "preco": 14.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Petisco bifinho da Patas. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Carne",
        "#8C2F1B"
      ],
      [
        "Frango",
        "#E3B04B"
      ]
    ],
    "tamanhos": [
      "65 g"
    ],
    "estoque": {
      "Carne|65 g": 2,
      "Frango|65 g": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Carne · 65 g"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "OSSO-DE-COUR",
    "nome": "Osso de couro",
    "marca": "Patas",
    "cat": "petiscos",
    "preco": 19.9,
    "de": 24.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Osso de couro da Patas. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Natural",
        "#CFD6DC"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Natural|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Natural"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Natural"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "BOLI-RESI",
    "nome": "Bolinha resistente",
    "marca": "Patas",
    "cat": "brinquedos",
    "preco": 24.9,
    "desenho": "bola",
    "destaque": true,
    "desc": "Bolinha resistente da Patas. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ],
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Azul|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Vermelho"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Vermelho"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "ARRA-PARA-GATO",
    "nome": "Arranhador para gatos",
    "marca": "Patas",
    "cat": "brinquedos",
    "preco": 89.9,
    "de": 119.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Arranhador para gatos da Patas. Troque este texto pela descrição do produto.",
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
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "SHAM-NEUT",
    "nome": "Shampoo neutro",
    "marca": "Patas",
    "cat": "higiene",
    "preco": 29.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "Shampoo neutro da Patas. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Menta",
        "#92D0B7"
      ]
    ],
    "tamanhos": [
      "500 ml"
    ],
    "estoque": {
      "Menta|500 ml": 4
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Menta · 500 ml"
      },
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Menta · 500 ml"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "TAPE-HIGI-30",
    "nome": "Tapete higiênico 30 un.",
    "marca": "Patas",
    "cat": "higiene",
    "preco": 59.9,
    "de": 69.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Tapete higiênico 30 un. da Patas. Troque este texto pela descrição do produto.",
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
      "Branco|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Branco"
      },
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Branco"
      }
    ]
  }
];
