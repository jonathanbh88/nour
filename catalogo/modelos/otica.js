/* =====================================================================
   Nour Catálogo · modelo pronto: Ótica
   Baseado no modelo "otica" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Ótica Exemplo",
  "slogan": "Óculos de grau e de sol, lentes e conserto com atendimento de especialista.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Óculos de grau e de sol, lentes e conserto com atendimento de especialista. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#111111",
    "p2": "#B51A00",
    "p3": "#E5E5E5",
    "on3": "#111111"
  },
  "tema": "auto",
  "faixa": [
    "Exame de vista com parceiros",
    "Ajuste e limpeza grátis",
    "Parcele em até 10x"
  ],
  "banners": [],
  "banner": {
    "selo": "Coleção nova",
    "titulo": "Enxergue com estilo",
    "texto": "Armações de grau e óculos de sol com proteção UV400.",
    "botao": "Comprar agora",
    "categoria": "sol",
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
    "id": "sol",
    "nome": "Óculos de sol",
    "chamada": "Proteção UV400",
    "desenho": "oculos",
    "cor": "#1D1F23"
  },
  {
    "id": "grau",
    "nome": "Armações de grau",
    "chamada": "Leves e resistentes",
    "desenho": "oculos",
    "cor": "#7A4A22"
  },
  {
    "id": "lentes",
    "nome": "Lentes de contato",
    "chamada": "Com receita",
    "desenho": "caixa",
    "cor": "#2457C5"
  },
  {
    "id": "acessorios",
    "nome": "Acessórios",
    "chamada": "Estojos e cordões",
    "desenho": "caixa",
    "cor": "#9AA1A9"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "OCUL-DE-SOL",
    "nome": "Óculos de sol aviador",
    "marca": "Exemplo",
    "cat": "sol",
    "preco": 249.9,
    "de": 299.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Óculos de sol aviador da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
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
      "Dourado|Único": 3,
      "Preto|Único": 8
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "OCUL-DE-SOL",
    "nome": "Óculos de sol quadrado",
    "marca": "Exemplo",
    "cat": "sol",
    "preco": 219.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Óculos de sol quadrado da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Tartaruga",
        "#7A4A22"
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
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Preto"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "ARMA-ACET-REDO",
    "nome": "Armação acetato redonda",
    "marca": "Exemplo",
    "cat": "grau",
    "preco": 289.9,
    "de": 349.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Armação acetato redonda da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Tartaruga",
        "#7A4A22"
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
      "Preto|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Tartaruga"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "ARMA-META-FINA",
    "nome": "Armação metal fina",
    "marca": "Exemplo",
    "cat": "grau",
    "preco": 259.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Armação metal fina da Exemplo. Troque este texto pela descrição do produto.",
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
      "Dourado|Único": 1,
      "Prata|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "LENT-DE-CONT",
    "nome": "Lente de contato mensal (caixa)",
    "marca": "Exemplo",
    "cat": "lentes",
    "preco": 149.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Lente de contato mensal (caixa) da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Transparente",
        "#D7E3EA"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Transparente|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Transparente"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "ESTO-RIGI",
    "nome": "Estojo rígido",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Estojo rígido da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
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
      "Preto|Único": 5,
      "Marrom|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "CORD-PARA-OCUL",
    "nome": "Cordão para óculos",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 29.9,
    "desenho": "colar",
    "destaque": false,
    "desc": "Cordão para óculos da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
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
      "Dourado|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Dourado"
      },
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "OCUL-INFA-FLEX",
    "nome": "Óculos infantil flexível",
    "marca": "Exemplo",
    "cat": "grau",
    "preco": 199.9,
    "de": 239.9,
    "desenho": "oculos",
    "destaque": false,
    "desc": "Óculos infantil flexível da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Azul",
        "#2457C5"
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
      "Azul|Único": 5,
      "Rosa|Único": 8
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul"
      }
    ]
  }
];
