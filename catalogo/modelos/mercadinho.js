/* =====================================================================
   Nour Catálogo · modelo pronto: Mercadinho
   Baseado no modelo "mercadinho" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Mercadinho Exemplo",
  "slogan": "Hortifrúti, carnes, frios e limpeza com entrega no bairro.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Hortifrúti, carnes, frios e limpeza com entrega no bairro. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#2B8A3E",
    "p2": "#F08C00",
    "p3": "#FFE066",
    "on3": "#2B2200"
  },
  "tema": "auto",
  "faixa": [
    "Entrega no bairro em até 1 hora",
    "Hortifrúti fresquinho todo dia",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Ofertas do dia",
    "titulo": "Fresquinho todo dia",
    "texto": "Hortifrúti, carnes e mercearia com entrega rápida.",
    "botao": "Comprar agora",
    "categoria": "hortifruti",
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
    "tamanho": "Quantidade"
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
    "id": "hortifruti",
    "nome": "Hortifrúti",
    "chamada": "Colhido hoje",
    "desenho": "flor",
    "cor": "#2F6B4F"
  },
  {
    "id": "carnes",
    "nome": "Carnes e frios",
    "chamada": "Cortes selecionados",
    "desenho": "caixa",
    "cor": "#8C2F1B"
  },
  {
    "id": "mercearia",
    "nome": "Mercearia",
    "chamada": "Do básico ao especial",
    "desenho": "racao",
    "cor": "#F08C00"
  },
  {
    "id": "limpeza",
    "nome": "Limpeza",
    "chamada": "Casa limpinha",
    "desenho": "garrafa",
    "cor": "#2457C5"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CEST-DE-FRUT",
    "nome": "Cesta de frutas da estação",
    "marca": "Exemplo",
    "cat": "hortifruti",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "bolsa",
    "destaque": true,
    "desc": "Cesta de frutas da estação da Exemplo. Troque este texto pela descrição do produto.",
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
      "Verde|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Verde"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "KIT-VERD-ORGA",
    "nome": "Kit verduras orgânicas",
    "marca": "Exemplo",
    "cat": "hortifruti",
    "preco": 24.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Kit verduras orgânicas da Exemplo. Troque este texto pela descrição do produto.",
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
      "Verde|Único": 8
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Verde"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Verde"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "PICA",
    "nome": "Picanha",
    "marca": "Exemplo",
    "cat": "carnes",
    "preco": 79.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Picanha da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Carne",
        "#8C2F1B"
      ]
    ],
    "tamanhos": [
      "1 kg"
    ],
    "estoque": {
      "Carne|1 kg": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Carne · 1 kg"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Carne · 1 kg"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "FRAN-INTE",
    "nome": "Frango inteiro",
    "marca": "Exemplo",
    "cat": "carnes",
    "preco": 19.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Frango inteiro da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Frango",
        "#E3B04B"
      ]
    ],
    "tamanhos": [
      "1 kg"
    ],
    "estoque": {
      "Frango|1 kg": 1
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Frango · 1 kg"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Frango · 1 kg"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "ARRO-TIPO-1",
    "nome": "Arroz tipo 1",
    "marca": "Exemplo",
    "cat": "mercearia",
    "preco": 29.9,
    "de": 34.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Arroz tipo 1 da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "5 kg"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco · 5 kg"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "CAFE-TORR-E",
    "nome": "Café torrado e moído",
    "marca": "Exemplo",
    "cat": "mercearia",
    "preco": 19.9,
    "de": 24.9,
    "desenho": "racao",
    "destaque": false,
    "desc": "Café torrado e moído da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Marrom",
        "#6B4128"
      ]
    ],
    "tamanhos": [
      "500 g"
    ],
    "estoque": {
      "Marrom|500 g": 8
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Marrom · 500 g"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "KIT-LIMP-DA",
    "nome": "Kit limpeza da casa",
    "marca": "Exemplo",
    "cat": "limpeza",
    "preco": 49.9,
    "de": 59.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "Kit limpeza da casa da Exemplo. Troque este texto pela descrição do produto.",
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
      "Azul|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Azul"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "SABA-LIQU",
    "nome": "Sabão líquido",
    "marca": "Exemplo",
    "cat": "limpeza",
    "preco": 29.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "Sabão líquido da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "3 L"
    ],
    "estoque": {
      "Azul|3 L": 5
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Azul · 3 L"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul · 3 L"
      }
    ]
  }
];
