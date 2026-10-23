/* =====================================================================
   Nour Catálogo · modelo pronto: Papelaria e presentes
   Baseado no modelo "papelaria" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Papel & Cor",
  "slogan": "Cadernos, presentes e personalizados feitos com carinho.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Cadernos, presentes e personalizados feitos com carinho. Atendimento de pessoa real pelo WhatsApp.",
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
    "p2": "#7B1FA2",
    "p3": "#FFEB3B",
    "on3": "#3A3000"
  },
  "tema": "auto",
  "faixa": [
    "Personalizamos com seu nome",
    "Embalagem para presente grátis",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Volta às aulas",
    "titulo": "Papelaria que dá gosto de usar",
    "texto": "Cadernos, estojos e presentes personalizados.",
    "botao": "Comprar agora",
    "categoria": "cadernos",
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
    "id": "cadernos",
    "nome": "Cadernos",
    "chamada": "Capa dura e personalizados",
    "desenho": "caderno",
    "cor": "#C2185B"
  },
  {
    "id": "escrita",
    "nome": "Escrita",
    "chamada": "Canetas e marca-texto",
    "desenho": "caderno",
    "cor": "#2457C5"
  },
  {
    "id": "presentes",
    "nome": "Presentes",
    "chamada": "Para toda ocasião",
    "desenho": "caixa",
    "cor": "#7B1FA2"
  },
  {
    "id": "personalizados",
    "nome": "Personalizados",
    "chamada": "Com o seu nome",
    "desenho": "caderno",
    "cor": "#F2C14E"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CADE-CAPA-DURA",
    "nome": "Caderno capa dura 10 matérias",
    "marca": "Papel & Cor",
    "cat": "cadernos",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "caderno",
    "destaque": true,
    "desc": "Caderno capa dura 10 matérias da Papel & Cor. Troque este texto pela descrição do produto.",
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
        "Lilás",
        "#B39DDB"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Rosa|Único": 8,
      "Azul|Único": 4,
      "Lilás|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Rosa"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Rosa"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "PLAN-ANUA",
    "nome": "Planner anual",
    "marca": "Papel & Cor",
    "cat": "cadernos",
    "preco": 59.9,
    "desenho": "caderno",
    "destaque": true,
    "desc": "Planner anual da Papel & Cor. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
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
      "Rosa|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Verde"
      },
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Verde"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "KIT-MARC-PAST",
    "nome": "Kit marca-texto pastel",
    "marca": "Papel & Cor",
    "cat": "escrita",
    "preco": 29.9,
    "de": 34.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Kit marca-texto pastel da Papel & Cor. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Lilás",
        "#B39DDB"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Lilás|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Lilás"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "ESTO-GRAN",
    "nome": "Estojo grande",
    "marca": "Papel & Cor",
    "cat": "escrita",
    "preco": 34.9,
    "desenho": "bolsa",
    "destaque": true,
    "desc": "Estojo grande da Papel & Cor. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
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
      "Preto|Único": 5,
      "Rosa|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "CANE-PERS",
    "nome": "Caneca personalizada",
    "marca": "Papel & Cor",
    "cat": "personalizados",
    "preco": 39.9,
    "desenho": "pote",
    "destaque": true,
    "desc": "Caneca personalizada da Papel & Cor. Troque este texto pela descrição do produto.",
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
      "Branco|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "CHAV-COM-NOME",
    "nome": "Chaveiro com nome",
    "marca": "Papel & Cor",
    "cat": "personalizados",
    "preco": 19.9,
    "de": 24.9,
    "desenho": "anel",
    "destaque": false,
    "desc": "Chaveiro com nome da Papel & Cor. Troque este texto pela descrição do produto.",
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
      "Prata|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "KIT-PRES-PAPE",
    "nome": "Kit presente papelaria",
    "marca": "Papel & Cor",
    "cat": "presentes",
    "preco": 89.9,
    "de": 109.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Kit presente papelaria da Papel & Cor. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Rosa|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Rosa"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "CAPA-PARA-KIND",
    "nome": "Capa para Kindle",
    "marca": "Papel & Cor",
    "cat": "presentes",
    "preco": 49.9,
    "desenho": "caderno",
    "destaque": false,
    "desc": "Capa para Kindle da Papel & Cor. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
      ],
      [
        "Bege",
        "#D8C3A5"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Verde|Único": 2,
      "Bege|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Verde"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Verde"
      }
    ]
  }
];
