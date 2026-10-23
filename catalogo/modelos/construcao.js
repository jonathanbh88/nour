/* =====================================================================
   Nour Catálogo · modelo pronto: Material de construção
   Baseado no modelo "construcao" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Constrói Materiais",
  "slogan": "Cimento, tintas, ferramentas, elétrica e hidráulica com entrega na obra.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Cimento, tintas, ferramentas, elétrica e hidráulica com entrega na obra. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#121114",
    "p2": "#B32F45",
    "p3": "#F2C14E",
    "on3": "#2A2000"
  },
  "tema": "auto",
  "faixa": [
    "Entrega na obra",
    "Orçamento rápido pelo WhatsApp",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Sua obra",
    "titulo": "Do alicerce ao acabamento",
    "texto": "Material de construção com entrega na obra.",
    "botao": "Comprar agora",
    "categoria": "basico",
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
    "tamanho": "Embalagem"
  },
  "tabelaMedidas": [],
  "entrega": [
    [
      "motoboy",
      "Entrega na obra",
      "Combinada pelo WhatsApp"
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
    "id": "basico",
    "nome": "Básico",
    "chamada": "Cimento e argamassa",
    "desenho": "racao",
    "cor": "#9AA1A9"
  },
  {
    "id": "tintas",
    "nome": "Tintas",
    "chamada": "Para dentro e fora",
    "desenho": "tinta",
    "cor": "#2457C5"
  },
  {
    "id": "ferramentas",
    "nome": "Ferramentas",
    "chamada": "Manuais e elétricas",
    "desenho": "ferramenta",
    "cor": "#B32F45"
  },
  {
    "id": "eletrica",
    "nome": "Elétrica e hidráulica",
    "chamada": "Fios, tubos e conexões",
    "desenho": "caixa",
    "cor": "#F2C14E"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CIME-CP-II",
    "nome": "Cimento CP II",
    "marca": "Exemplo",
    "cat": "basico",
    "preco": 36.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Cimento CP II da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "50 kg"
    ],
    "estoque": {
      "Cinza|50 kg": 7
    },
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Cinza · 50 kg"
      },
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Cinza · 50 kg"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "ARGA-AC-II",
    "nome": "Argamassa AC II",
    "marca": "Exemplo",
    "cat": "basico",
    "preco": 24.9,
    "de": 29.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Argamassa AC II da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "20 kg"
    ],
    "estoque": {
      "Cinza|20 kg": 9
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Cinza · 20 kg"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "TINT-ACRI-FOSC",
    "nome": "Tinta acrílica fosca",
    "marca": "Exemplo",
    "cat": "tintas",
    "preco": 289.9,
    "de": 339.9,
    "desenho": "tinta",
    "destaque": true,
    "desc": "Tinta acrílica fosca da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ],
      [
        "Off-white",
        "#EDE6DA"
      ],
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "18 L",
      "3,6 L"
    ],
    "estoque": {
      "Branco|18 L": 2,
      "Branco|3,6 L": 2,
      "Off-white|18 L": 9,
      "Off-white|3,6 L": 9,
      "Cinza|18 L": 7,
      "Cinza|3,6 L": 4
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Recife, PE",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco · 18 L"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Branco · 18 L"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "MASS-CORR",
    "nome": "Massa corrida",
    "marca": "Exemplo",
    "cat": "tintas",
    "preco": 79.9,
    "desenho": "tinta",
    "destaque": true,
    "desc": "Massa corrida da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "25 kg"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Branco · 25 kg"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Branco · 25 kg"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "FURA-DE-IMPA",
    "nome": "Furadeira de impacto 650 W",
    "marca": "Exemplo",
    "cat": "ferramentas",
    "preco": 229.9,
    "de": 279.9,
    "desenho": "ferramenta",
    "destaque": true,
    "desc": "Furadeira de impacto 650 W da Exemplo. Troque este texto pela descrição do produto.",
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
      "Azul|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Azul"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "KIT-CHAV-DE",
    "nome": "Kit chaves de fenda 6 peças",
    "marca": "Exemplo",
    "cat": "ferramentas",
    "preco": 39.9,
    "desenho": "ferramenta",
    "destaque": false,
    "desc": "Kit chaves de fenda 6 peças da Exemplo. Troque este texto pela descrição do produto.",
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
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Vermelho"
      },
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vermelho"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "FIO-FLEX-25",
    "nome": "Fio flexível 2,5 mm (rolo 100 m)",
    "marca": "Exemplo",
    "cat": "eletrica",
    "preco": 219.9,
    "de": 249.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Fio flexível 2,5 mm (rolo 100 m) da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Azul",
        "#2457C5"
      ],
      [
        "Vermelho",
        "#C62A2A"
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
      "Azul|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "TUBO-PVC-100",
    "nome": "Tubo PVC 100 mm (barra 6 m)",
    "marca": "Exemplo",
    "cat": "eletrica",
    "preco": 89.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Tubo PVC 100 mm (barra 6 m) da Exemplo. Troque este texto pela descrição do produto.",
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
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco"
      },
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Branco"
      }
    ]
  }
];
