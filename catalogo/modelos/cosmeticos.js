/* =====================================================================
   Nour Catálogo · modelo pronto: Cosméticos e perfumaria
   Baseado no modelo "cosmeticos" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Beleza Exemplo",
  "slogan": "Perfumes, maquiagem e cuidados com a pele com nota fiscal e procedência.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Perfumes, maquiagem e cuidados com a pele com nota fiscal e procedência. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#B0123A",
    "p2": "#E8467C",
    "p3": "#F7D6E0",
    "on3": "#4A0A1D"
  },
  "tema": "auto",
  "faixa": [
    "Produtos originais com nota fiscal",
    "Frete grátis acima de R$ 199",
    "Amostra grátis em todo pedido"
  ],
  "banners": [],
  "banner": {
    "selo": "Kits presente",
    "titulo": "Beleza que dá vontade de usar",
    "texto": "Perfumes, maquiagem e skincare com procedência.",
    "botao": "Comprar agora",
    "categoria": "perfumes",
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
    "tamanho": "Volume"
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
    "id": "perfumes",
    "nome": "Perfumes",
    "chamada": "Femininos e masculinos",
    "desenho": "perfume",
    "cor": "#E8467C"
  },
  {
    "id": "maquiagem",
    "nome": "Maquiagem",
    "chamada": "Batons, bases e mais",
    "desenho": "batom",
    "cor": "#B0123A"
  },
  {
    "id": "skincare",
    "nome": "Skincare",
    "chamada": "Cuidados com a pele",
    "desenho": "garrafa",
    "cor": "#92D0B7"
  },
  {
    "id": "kits",
    "nome": "Kits presente",
    "chamada": "Prontos para presentear",
    "desenho": "caixa",
    "cor": "#C9A227"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "PERF-FEMI-FLOR",
    "nome": "Perfume feminino floral",
    "marca": "Exemplo",
    "cat": "perfumes",
    "preco": 189.9,
    "de": 229.9,
    "desenho": "perfume",
    "destaque": true,
    "desc": "Perfume feminino floral da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ]
    ],
    "tamanhos": [
      "50 ml",
      "100 ml"
    ],
    "estoque": {
      "Rosa|50 ml": 6,
      "Rosa|100 ml": 1
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Rosa · 50 ml"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "PERF-MASC-AMAD",
    "nome": "Perfume masculino amadeirado",
    "marca": "Exemplo",
    "cat": "perfumes",
    "preco": 199.9,
    "desenho": "perfume",
    "destaque": true,
    "desc": "Perfume masculino amadeirado da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Marrom",
        "#6B4128"
      ]
    ],
    "tamanhos": [
      "50 ml",
      "100 ml"
    ],
    "estoque": {
      "Marrom|100 ml": 6
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Marrom · 50 ml"
      },
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Marrom · 50 ml"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "BATO-MATT",
    "nome": "Batom matte",
    "marca": "Exemplo",
    "cat": "maquiagem",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "batom",
    "destaque": true,
    "desc": "Batom matte da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ],
      [
        "Nude",
        "#D9A98B"
      ],
      [
        "Vinho",
        "#6E1F33"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Vermelho|Único": 8,
      "Nude|Único": 7,
      "Vinho|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Vermelho"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "BASE-LIQU",
    "nome": "Base líquida",
    "marca": "Exemplo",
    "cat": "maquiagem",
    "preco": 69.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Base líquida da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Bege",
        "#D8C3A5"
      ],
      [
        "Nude",
        "#D9A98B"
      ],
      [
        "Marrom",
        "#6B4128"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Bege|Único": 1,
      "Nude|Único": 3,
      "Marrom|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Bege"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "SERU-VITA-C",
    "nome": "Sérum vitamina C",
    "marca": "Exemplo",
    "cat": "skincare",
    "preco": 89.9,
    "de": 109.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Sérum vitamina C da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Laranja",
        "#EF6C1A"
      ]
    ],
    "tamanhos": [
      "30 ml"
    ],
    "estoque": {
      "Laranja|30 ml": 5
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Laranja · 30 ml"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "CREM-HIDR-CORP",
    "nome": "Creme hidratante corporal",
    "marca": "Exemplo",
    "cat": "skincare",
    "preco": 49.9,
    "desenho": "pote",
    "destaque": false,
    "desc": "Creme hidratante corporal da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Menta",
        "#92D0B7"
      ]
    ],
    "tamanhos": [
      "200 ml",
      "400 ml"
    ],
    "estoque": {
      "Menta|200 ml": 4,
      "Menta|400 ml": 3
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Menta · 200 ml"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "KIT-PRES-PERF",
    "nome": "Kit presente perfume e creme",
    "marca": "Exemplo",
    "cat": "kits",
    "preco": 229.9,
    "de": 279.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Kit presente perfume e creme da Exemplo. Troque este texto pela descrição do produto.",
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
      "Rosa|Único": 2
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Rosa"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Rosa"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "KIT-SKIN-BASI",
    "nome": "Kit skincare básico",
    "marca": "Exemplo",
    "cat": "kits",
    "preco": 149.9,
    "de": 189.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Kit skincare básico da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Menta",
        "#92D0B7"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Menta|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Menta"
      }
    ]
  }
];
