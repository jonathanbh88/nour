/* =====================================================================
   Nour Catálogo · modelo pronto: Moda feminina
   Baseado no modelo "roupas" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Ateliê Exemplo",
  "slogan": "Moda feminina com caimento de verdade e peças novas toda semana.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "O Ateliê seleciona peças com tecido de qualidade e caimento que valoriza o corpo real. Pelo WhatsApp você tira dúvidas de tamanho, pede fotos extras e recebe sugestões de combinação com atendimento atencioso.",
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
    "p1": "#8C2A5B",
    "p2": "#D0567F",
    "p3": "#F6D365",
    "on3": "#3A2600"
  },
  "tema": "auto",
  "faixa": [
    "Novidades toda semana",
    "Frete grátis acima de R$ 299",
    "Desconto especial no Pix"
  ],
  "banners": [],
  "banner": {
    "selo": "Lançamentos",
    "titulo": "Do trabalho ao fim de semana",
    "texto": "Peças versáteis com caimento que valoriza. Reposição semanal e peças limitadas.",
    "botao": "Ver coleção",
    "categoria": "vestidos",
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
    "Monte o seu look",
    "Peças que combinam entre si e funcionam o ano todo"
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
      "Busto",
      "Cintura",
      "Quadril"
    ],
    [
      "PP",
      "80",
      "62",
      "88"
    ],
    [
      "P",
      "84",
      "66",
      "92"
    ],
    [
      "M",
      "90",
      "72",
      "98"
    ],
    [
      "G",
      "96",
      "78",
      "104"
    ],
    [
      "GG",
      "102",
      "84",
      "110"
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
    "id": "blusas",
    "nome": "Blusas",
    "chamada": "Básicos que salvam qualquer manhã",
    "desenho": "blusa",
    "cor": "#2F6B4F",
    "foto": "https://images.unsplash.com/photo-1542595608-735a52535022?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "vestidos",
    "nome": "Vestidos",
    "chamada": "Um vestido, muitos compromissos",
    "desenho": "vestido",
    "cor": "#9AA1A9",
    "foto": "https://images.pexels.com/photos/7241893/pexels-photo-7241893.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "calcas-saias",
    "nome": "Calças e saias",
    "chamada": "Cintura marcada e caimento leve",
    "desenho": "calca",
    "cor": "#1D1F23",
    "foto": "https://images.unsplash.com/photo-1558072844-b2e8b546d415?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "casacos",
    "nome": "Casacos",
    "chamada": "Alfaiataria que eleva o visual",
    "desenho": "casaco",
    "cor": "#C9AE8C",
    "foto": "https://images.unsplash.com/photo-1552760647-0a848d97bff3?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "acessorios",
    "nome": "Acessórios",
    "chamada": "O detalhe que finaliza o look",
    "desenho": "bolsa",
    "cor": "#6E1F33",
    "foto": "https://images.pexels.com/photos/20591024/pexels-photo-20591024.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "BLUS-BASI-MANG",
    "nome": "Blusa básica manga curta",
    "marca": "Linha Essencial",
    "cat": "blusas",
    "preco": 89.9,
    "de": 119.9,
    "desenho": "blusa",
    "destaque": true,
    "desc": "A blusa básica que você vai querer em todas as cores. Malha macia com elastano, que não marca e mantém a forma depois de várias lavagens. Fica ótima por dentro da calça ou com blazer por cima.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
      ],
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
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Verde|PP": 5,
      "Verde|M": 8,
      "Verde|G": 3,
      "Bege|PP": 9,
      "Bege|P": 2,
      "Bege|M": 8,
      "Bege|G": 5,
      "Bege|GG": 8,
      "Preto|PP": 5,
      "Preto|P": 1,
      "Preto|G": 6,
      "Preto|GG": 9
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Verde · PP"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Verde · PP"
      }
    ],
    "composicao": "Viscose 95%, elastano 5%"
  },
  {
    "id": "p2",
    "sku": "VEST-TIGR-OMBR",
    "nome": "Vestido tigrado ombro único",
    "marca": "Linha Festa",
    "cat": "vestidos",
    "preco": 99.9,
    "de": 139.9,
    "desenho": "vestido",
    "destaque": true,
    "desc": "Vestido de ombro único com estampa tigrada que chama atenção na medida certa. O tecido tem caimento fluido e o recorte assimétrico valoriza colo e ombros. Perfeito para festas, jantares e aniversários.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ],
      [
        "Bege",
        "#D8C3A5"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Cinza|PP": 6,
      "Cinza|P": 6,
      "Cinza|M": 9,
      "Cinza|G": 7,
      "Cinza|GG": 2,
      "Bege|PP": 5,
      "Bege|P": 2,
      "Bege|M": 2,
      "Bege|G": 3,
      "Bege|GG": 6
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Cinza · PP"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Cinza · PP"
      }
    ],
    "selo": "NOVO",
    "composicao": "Poliéster 100%, forro interno"
  },
  {
    "id": "p3",
    "sku": "CALC-LARG-PRET",
    "nome": "Calça larga preta",
    "marca": "Linha Essencial",
    "cat": "calcas-saias",
    "preco": 79.9,
    "de": 109.9,
    "desenho": "calca",
    "destaque": true,
    "desc": "Calça larga de cintura alta que alonga a silhueta e deixa o corpo livre. Tecido com caimento pesado, que não amassa fácil e vai bem do escritório ao passeio. Combina com blusas básicas, cropped e camisas.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Preto|PP": 2,
      "Preto|P": 6,
      "Preto|M": 4,
      "Preto|G": 5,
      "Preto|GG": 1
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto · PP"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto · PP"
      }
    ],
    "composicao": "Poliéster 96%, elastano 4%"
  },
  {
    "id": "p4",
    "sku": "BLUS-LIST-COM",
    "nome": "Blusa listrada com bolso",
    "marca": "Linha Casual",
    "cat": "blusas",
    "preco": 159.9,
    "de": 199.9,
    "desenho": "blusa",
    "destaque": true,
    "desc": "Blusa listrada com bolso frontal, um clássico com ar despojado. Algodão macio e respirável, com modelagem soltinha que fica confortável o dia inteiro. Linda com jeans, saia midi ou calça de alfaiataria.",
    "cores": [
      [
        "Vinho",
        "#6E1F33"
      ],
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Vinho|PP": 9,
      "Vinho|M": 7,
      "Vinho|G": 8,
      "Vinho|GG": 1,
      "Branco|PP": 1,
      "Branco|P": 2,
      "Branco|M": 4,
      "Branco|G": 5,
      "Branco|GG": 5
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Vinho · PP"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Vinho · PP"
      }
    ],
    "composicao": "Algodão 100%"
  },
  {
    "id": "p5",
    "sku": "VEST-MIDI-DE",
    "nome": "Vestido midi de linho",
    "marca": "Linha Festa",
    "cat": "vestidos",
    "preco": 189.9,
    "desenho": "vestido",
    "destaque": true,
    "desc": "Vestido midi de linho, fresco e elegante para os dias quentes. O tecido natural deixa a pele respirar e o comprimento midi funciona do trabalho ao almoço de domingo. Combine com sandália rasteira ou mule.",
    "cores": [
      [
        "Bege",
        "#D8C3A5"
      ],
      [
        "Verde",
        "#2F6B4F"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Bege|PP": 4,
      "Bege|P": 1,
      "Bege|M": 5,
      "Bege|G": 3,
      "Bege|GG": 8,
      "Verde|PP": 1,
      "Verde|P": 5,
      "Verde|M": 4,
      "Verde|G": 9,
      "Verde|GG": 8
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Bege · PP"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege · PP"
      }
    ],
    "composicao": "Linho 55%, viscose 45%"
  },
  {
    "id": "p6",
    "sku": "CASA-DE-ALFA",
    "nome": "Casaco de alfaiataria",
    "marca": "Linha Inverno",
    "cat": "casacos",
    "preco": 249.9,
    "de": 299.9,
    "desenho": "casaco",
    "destaque": false,
    "desc": "Casaco de alfaiataria com ombros estruturados e corte reto que deixa qualquer look mais sofisticado. Forrado, aquece sem pesar e vai por cima de vestido, calça ou jeans. Um investimento que acompanha muitos invernos.",
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
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Bege|PP": 1,
      "Bege|M": 4,
      "Bege|G": 7,
      "Bege|GG": 6,
      "Preto|PP": 6,
      "Preto|P": 3,
      "Preto|M": 6,
      "Preto|G": 1,
      "Preto|GG": 2
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege · PP"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege · PP"
      }
    ],
    "composicao": "Poliéster 70%, viscose 30%, forro em poliéster"
  },
  {
    "id": "p7",
    "sku": "SAIA-MIDI-PLIS",
    "nome": "Saia midi plissada",
    "marca": "Linha Casual",
    "cat": "calcas-saias",
    "preco": 119.9,
    "desenho": "saia",
    "destaque": false,
    "desc": "Saia midi plissada que se movimenta a cada passo e valoriza a cintura. O elástico no cós dá conforto e o plissado é permanente, sem precisar passar. Fica linda com tênis, sandália ou bota.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "Rosa|PP": 9
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Rosa · PP"
      },
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Rosa · PP"
      }
    ],
    "composicao": "Poliéster 100%, cós com elástico"
  },
  {
    "id": "p8",
    "sku": "BOLS-TIRA-MATE",
    "nome": "Bolsa tiracolo matelassê",
    "marca": "Acessórios",
    "cat": "acessorios",
    "preco": 139.9,
    "de": 169.9,
    "desenho": "bolsa",
    "destaque": false,
    "desc": "Bolsa tiracolo matelassê que finaliza o look com charme. Tem espaço para o essencial, alça em corrente ajustável e fecho seguro. Combina com produções do dia a dia e da noite.",
    "cores": [
      [
        "Vinho",
        "#6E1F33"
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
      "Vinho|Único": 9,
      "Preto|Único": 8
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vinho"
      }
    ],
    "composicao": "Material sintético matelassê, alça em corrente metálica"
  }
];
