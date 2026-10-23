/* =====================================================================
   Nour Catálogo · modelo pronto: Adega e tabacaria
   Baseado no modelo "adega" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Adega Exemplo",
  "slogan": "Cervejas, vinhos, destilados e tabacaria com entrega gelada. Venda para maiores de 18 anos.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Cervejas, vinhos, destilados e tabacaria com entrega gelada. Venda para maiores de 18 anos. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#101114",
    "p2": "#6E1F33",
    "p3": "#C9A227",
    "on3": "#1A1400"
  },
  "tema": "auto",
  "faixa": [
    "Entrega gelada no bairro",
    "Venda proibida para menores de 18 anos",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Fim de semana",
    "titulo": "Tudo gelado na sua porta",
    "texto": "Cervejas, vinhos e destilados com entrega rápida.",
    "botao": "Comprar agora",
    "categoria": "cervejas",
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
    "tamanho": "Volume"
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
    "id": "cervejas",
    "nome": "Cervejas",
    "chamada": "Long neck e latão",
    "desenho": "garrafa",
    "cor": "#C9A227"
  },
  {
    "id": "vinhos",
    "nome": "Vinhos",
    "chamada": "Tintos, brancos e rosés",
    "desenho": "vinho",
    "cor": "#5A1424"
  },
  {
    "id": "destilados",
    "nome": "Destilados",
    "chamada": "Para os drinks",
    "desenho": "garrafa",
    "cor": "#3A3F46"
  },
  {
    "id": "tabacaria",
    "nome": "Tabacaria",
    "chamada": "Essências e acessórios",
    "desenho": "caixa",
    "cor": "#6B4128"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CERV-LONG-NECK",
    "nome": "Cerveja long neck (fardo 6 un.)",
    "marca": "Exemplo",
    "cat": "cervejas",
    "preco": 39.9,
    "de": 44.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Cerveja long neck (fardo 6 un.) da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "355 ml"
    ],
    "estoque": {
      "Dourado|355 ml": 3
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado · 355 ml"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "CERV-LATA-FARD",
    "nome": "Cerveja latão (fardo 12 un.)",
    "marca": "Exemplo",
    "cat": "cervejas",
    "preco": 59.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Cerveja latão (fardo 12 un.) da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "473 ml"
    ],
    "estoque": {
      "Dourado|473 ml": 4
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado · 473 ml"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Dourado · 473 ml"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "VINH-TINT-CHIL",
    "nome": "Vinho tinto chileno",
    "marca": "Exemplo",
    "cat": "vinhos",
    "preco": 59.9,
    "de": 69.9,
    "desenho": "vinho",
    "destaque": true,
    "desc": "Vinho tinto chileno da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Tinto",
        "#5A1424"
      ]
    ],
    "tamanhos": [
      "750 ml"
    ],
    "estoque": {
      "Tinto|750 ml": 5
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Tinto · 750 ml"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "VINH-ROSE",
    "nome": "Vinho rosé",
    "marca": "Exemplo",
    "cat": "vinhos",
    "preco": 49.9,
    "desenho": "vinho",
    "destaque": true,
    "desc": "Vinho rosé da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ]
    ],
    "tamanhos": [
      "750 ml"
    ],
    "estoque": {
      "Rosa|750 ml": 1
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Rosa · 750 ml"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Rosa · 750 ml"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "GIN-NACI",
    "nome": "Gin nacional",
    "marca": "Exemplo",
    "cat": "destilados",
    "preco": 89.9,
    "de": 109.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Gin nacional da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Transparente",
        "#D7E3EA"
      ]
    ],
    "tamanhos": [
      "750 ml"
    ],
    "estoque": {
      "Transparente|750 ml": 9
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Transparente · 750 ml"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "WHIS-8-ANOS",
    "nome": "Whisky 8 anos",
    "marca": "Exemplo",
    "cat": "destilados",
    "preco": 129.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "Whisky 8 anos da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Marrom",
        "#6B4128"
      ]
    ],
    "tamanhos": [
      "1 L"
    ],
    "estoque": {
      "Marrom|1 L": 1
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Marrom · 1 L"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Marrom · 1 L"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "ESSE-50-G",
    "nome": "Essência 50 g",
    "marca": "Exemplo",
    "cat": "tabacaria",
    "preco": 19.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Essência 50 g da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Menta",
        "#92D0B7"
      ],
      [
        "Morango",
        "#E0607E"
      ]
    ],
    "tamanhos": [
      "50 g"
    ],
    "estoque": {
      "Menta|50 g": 3
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Menta · 50 g"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "CARV-DE-COCO",
    "nome": "Carvão de coco 1 kg",
    "marca": "Exemplo",
    "cat": "tabacaria",
    "preco": 29.9,
    "de": 34.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Carvão de coco 1 kg da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "1 kg"
    ],
    "estoque": {
      "Preto|1 kg": 1
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto · 1 kg"
      }
    ]
  }
];
