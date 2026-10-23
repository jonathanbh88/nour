/* =====================================================================
   Nour Catálogo · modelo pronto: Água e gás
   Baseado no modelo "agua" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Gás & Água Exemplo",
  "slogan": "Gás de cozinha e água mineral com entrega rápida no seu bairro.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Gás de cozinha e água mineral com entrega rápida no seu bairro. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#0B5CAD",
    "p2": "#F41007",
    "p3": "#DBC200",
    "on3": "#1A1800"
  },
  "tema": "auto",
  "faixa": [
    "Entrega em até 40 minutos",
    "Aceitamos Pix e cartão na entrega",
    "Atendemos sábado e domingo"
  ],
  "banners": [],
  "banner": {
    "selo": "Entrega rápida",
    "titulo": "Gás e água na sua porta",
    "texto": "Peça pelo WhatsApp e receba em minutos.",
    "botao": "Comprar agora",
    "categoria": "gas",
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
    "cor": "Tipo",
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
    "id": "gas",
    "nome": "Gás de cozinha",
    "chamada": "Botijão P13",
    "desenho": "botijao",
    "cor": "#F41007"
  },
  {
    "id": "agua",
    "nome": "Água mineral",
    "chamada": "Galão e fardos",
    "desenho": "garrafa",
    "cor": "#0B5CAD"
  },
  {
    "id": "acessorios",
    "nome": "Acessórios",
    "chamada": "Registros e mangueiras",
    "desenho": "caixa",
    "cor": "#3A3F46"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "GAS-DE-COZI",
    "nome": "Gás de cozinha P13 (troca)",
    "marca": "Exemplo",
    "cat": "gas",
    "preco": 119.9,
    "desenho": "botijao",
    "destaque": true,
    "desc": "Gás de cozinha P13 (troca) da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Vermelho"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Vermelho"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "GAS-P13-COM",
    "nome": "Gás P13 com botijão",
    "marca": "Exemplo",
    "cat": "gas",
    "preco": 329.9,
    "desenho": "botijao",
    "destaque": true,
    "desc": "Gás P13 com botijão da Exemplo. Troque este texto pela descrição do produto.",
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
      "Vermelho|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Vermelho"
      },
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Vermelho"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "AGUA-MINE-GALA",
    "nome": "Água mineral galão 20 L (troca)",
    "marca": "Exemplo",
    "cat": "agua",
    "preco": 14.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Água mineral galão 20 L (troca) da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
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
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Azul"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "GALA-20-L",
    "nome": "Galão 20 L com vasilhame",
    "marca": "Exemplo",
    "cat": "agua",
    "preco": 39.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Galão 20 L com vasilhame da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
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
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "FARD-AGUA-500",
    "nome": "Fardo água 500 ml (12 un.)",
    "marca": "Exemplo",
    "cat": "agua",
    "preco": 19.9,
    "de": 24.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Fardo água 500 ml (12 un.) da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Azul|Único": 2
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Azul"
      },
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "REGI-DE-GAS",
    "nome": "Registro de gás com mangueira",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 59.9,
    "de": 69.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Registro de gás com mangueira da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
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
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Cinza"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "SUPO-PARA-GALA",
    "nome": "Suporte para galão",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 29.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Suporte para galão da Exemplo. Troque este texto pela descrição do produto.",
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
      "Branco|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Branco"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Branco"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "BOMB-ELET-PARA",
    "nome": "Bomba elétrica para galão",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 49.9,
    "de": 59.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Bomba elétrica para galão da Exemplo. Troque este texto pela descrição do produto.",
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
      "Preto|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Preto"
      }
    ]
  }
];
