/* =====================================================================
   Nour Catálogo · modelo pronto: Moda masculina
   Baseado no modelo "roupas" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Maré Surf",
  "slogan": "Seu estilo, suas ondas. Camisetas, bermudas e conjuntos para o verão inteiro.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Seu estilo, suas ondas. Camisetas, bermudas e conjuntos para o verão inteiro. Atendimento de pessoa real pelo WhatsApp.",
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
    "p1": "#1D4FD8",
    "p2": "#0EA5E9",
    "p3": "#FDE68A",
    "on3": "#3A2A00"
  },
  "tema": "auto",
  "faixa": [
    "Novidades toda semana",
    "Enviamos para todo o Brasil",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Verão 2026",
    "titulo": "Moda surf",
    "texto": "Camisetas, bermudas e conjuntos para quem vive na praia.",
    "botao": "Comprar agora",
    "categoria": "camisetas",
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
  "tabelaMedidas": [
    [
      "Tam.",
      "Tórax",
      "Comprimento"
    ],
    [
      "P",
      "96",
      "70"
    ],
    [
      "M",
      "102",
      "72"
    ],
    [
      "G",
      "108",
      "74"
    ],
    [
      "GG",
      "114",
      "76"
    ]
  ],
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
    "id": "camisetas",
    "nome": "Camisetas",
    "chamada": "Algodão premium",
    "desenho": "camiseta",
    "cor": "#2F6B4F"
  },
  {
    "id": "regatas",
    "nome": "Regatas",
    "chamada": "Leves e frescas",
    "desenho": "regata",
    "cor": "#F2F2EE"
  },
  {
    "id": "bermudas",
    "nome": "Bermudas",
    "chamada": "Jeans e tactel",
    "desenho": "short",
    "cor": "#1D2B4F"
  },
  {
    "id": "moletons",
    "nome": "Moletons",
    "chamada": "Para as noites frias",
    "desenho": "moletom",
    "cor": "#6B4128"
  },
  {
    "id": "acessorios",
    "nome": "Acessórios",
    "chamada": "Bonés e mais",
    "desenho": "bone",
    "cor": "#D8C3A5"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CAMI-BASI-PREM",
    "nome": "Camiseta básica premium",
    "marca": "Maré",
    "cat": "camisetas",
    "preco": 76,
    "de": 99.9,
    "desenho": "camiseta",
    "destaque": true,
    "desc": "Camiseta básica premium da Maré. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Marinho",
        "#1D2B4F"
      ],
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
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Marinho|P": 9,
      "Marinho|M": 5,
      "Marinho|G": 1,
      "Branco|P": 7,
      "Branco|M": 9,
      "Branco|G": 3,
      "Branco|GG": 6,
      "Preto|P": 3,
      "Preto|M": 9,
      "Preto|G": 3,
      "Preto|GG": 1
    },
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Marinho · P"
      },
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Marinho · P"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "BERM-JEAN-DEST",
    "nome": "Bermuda jeans destroyed",
    "marca": "Maré",
    "cat": "bermudas",
    "preco": 120,
    "de": 159.9,
    "desenho": "short",
    "destaque": true,
    "desc": "Bermuda jeans destroyed da Maré. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Azul|P": 1,
      "Azul|M": 4,
      "Azul|G": 5,
      "Azul|GG": 9
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Azul · P"
      },
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Azul · P"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "REGA-ESTA-ONDA",
    "nome": "Regata estampa ondas",
    "marca": "Maré",
    "cat": "regatas",
    "preco": 60,
    "desenho": "regata",
    "destaque": true,
    "desc": "Regata estampa ondas da Maré. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ],
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Branco|G": 9,
      "Branco|GG": 6,
      "Azul|P": 7,
      "Azul|M": 9,
      "Azul|G": 1,
      "Azul|GG": 1
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Branco · P"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Branco · P"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "MOLE-CANG-SURF",
    "nome": "Moletom canguru surf",
    "marca": "Maré",
    "cat": "moletons",
    "preco": 189.9,
    "de": 229.9,
    "desenho": "moletom",
    "destaque": true,
    "desc": "Moletom canguru surf da Maré. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Marrom",
        "#6B4128"
      ],
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Marrom|P": 7,
      "Marrom|M": 1,
      "Marrom|GG": 3,
      "Cinza|P": 6,
      "Cinza|M": 8,
      "Cinza|G": 2,
      "Cinza|GG": 3
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Marrom · P"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Marrom · P"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "CAMI-OVER",
    "nome": "Camiseta oversized",
    "marca": "Maré",
    "cat": "camisetas",
    "preco": 89.9,
    "de": 109.9,
    "desenho": "camiseta",
    "destaque": true,
    "desc": "Camiseta oversized da Maré. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
      ],
      [
        "Off-white",
        "#EDE6DA"
      ]
    ],
    "tamanhos": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Verde|P": 1,
      "Verde|M": 4,
      "Verde|G": 5,
      "Verde|GG": 1,
      "Off-white|P": 2,
      "Off-white|G": 2,
      "Off-white|GG": 6
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Verde · P"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "BERM-TACT-ESTA",
    "nome": "Bermuda tactel estampada",
    "marca": "Maré",
    "cat": "bermudas",
    "preco": 79.9,
    "de": 99.9,
    "desenho": "short",
    "destaque": false,
    "desc": "Bermuda tactel estampada da Maré. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Marinho",
        "#1D2B4F"
      ],
      [
        "Laranja",
        "#EF6C1A"
      ]
    ],
    "tamanhos": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Marinho|P": 9,
      "Marinho|M": 8,
      "Marinho|G": 4,
      "Marinho|GG": 1,
      "Laranja|P": 2,
      "Laranja|G": 4,
      "Laranja|GG": 8
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Marinho · P"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "BONE-ABA-CURV",
    "nome": "Boné aba curva",
    "marca": "Maré",
    "cat": "acessorios",
    "preco": 69.9,
    "desenho": "bone",
    "destaque": false,
    "desc": "Boné aba curva da Maré. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Bege",
        "#D8C3A5"
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
      "Bege|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Bege"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Bege"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "CONJ-DRY-FIT",
    "nome": "Conjunto dry fit",
    "marca": "Maré",
    "cat": "camisetas",
    "preco": 200,
    "de": 279.9,
    "desenho": "camiseta",
    "destaque": false,
    "desc": "Conjunto dry fit da Maré. Troque este texto pela descrição do produto.",
    "cores": [
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
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Vermelho|P": 5,
      "Vermelho|M": 7,
      "Vermelho|G": 6,
      "Vermelho|GG": 1,
      "Preto|P": 8,
      "Preto|M": 9,
      "Preto|G": 4,
      "Preto|GG": 6
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Vermelho · P"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vermelho · P"
      }
    ]
  }
];
