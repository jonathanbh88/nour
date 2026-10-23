/* =====================================================================
   Nour Catálogo · modelo pronto: Acessórios e bijuterias
   Baseado no modelo "acessorios" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Brilho Acessórios",
  "slogan": "Semijoias, bolsas e óculos que deixam qualquer look pronto em segundos.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Brilho seleciona semijoias banhadas, bolsas e óculos para o seu dia a dia e para as ocasiões especiais. Escolha pelo catálogo e finalize pelo WhatsApp: tiramos dúvidas, mandamos fotos extras e ajudamos a montar presentes.",
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
    "p1": "#0B4F8A",
    "p2": "#02B5FE",
    "p3": "#FFD6E0",
    "on3": "#3A0F1E"
  },
  "tema": "auto",
  "faixa": [
    "Peças novas toda semana",
    "Frete grátis acima de R$ 149",
    "Embalagem de presente inclusa"
  ],
  "banners": [],
  "banner": {
    "selo": "Novidades",
    "titulo": "Semijoias que brilham o dia inteiro",
    "texto": "Brincos, colares, bolsas e óculos escolhidos a dedo. Peça pelo WhatsApp.",
    "botao": "Ver novidades",
    "categoria": "brincos",
    "imagem": "https://images.pexels.com/photos/7679654/pexels-photo-7679654.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/7679654/pexels-photo-7679654.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Encontre o seu brilho",
    "Do básico de todo dia ao detalhe que chama atenção"
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
    "id": "brincos",
    "nome": "Brincos",
    "chamada": "Leves para usar do trabalho à festa",
    "desenho": "anel",
    "cor": "#C9A227",
    "foto": "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "colares",
    "nome": "Colares",
    "chamada": "Combine em camadas e crie seu estilo",
    "desenho": "colar",
    "cor": "#C9A227",
    "foto": "https://images.pexels.com/photos/19869445/pexels-photo-19869445.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "bolsas",
    "nome": "Bolsas",
    "chamada": "Cabe tudo e ainda completa o look",
    "desenho": "bolsa",
    "cor": "#6E1F33",
    "foto": "https://images.pexels.com/photos/20591024/pexels-photo-20591024.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "oculos",
    "nome": "Óculos de sol",
    "chamada": "Estilo com proteção UV400",
    "desenho": "oculos",
    "cor": "#1D1F23",
    "foto": "https://images.pexels.com/photos/27353350/pexels-photo-27353350.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "BRIN-ARGO-MEDI",
    "nome": "Brinco argola média",
    "marca": "Brilho",
    "cat": "brincos",
    "preco": 49.9,
    "de": 69.9,
    "desenho": "anel",
    "destaque": true,
    "desc": "A argola média que combina com tudo, do jeans ao vestido de festa. Banhada com acabamento polido, é leve para usar o dia inteiro sem pesar na orelha. Peça curinga para quem quer um básico que valoriza o rosto.",
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
      "Dourado|Único": 2,
      "Prata|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado"
      },
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Metal banhado a ouro 18k ou ródio, fecho click",
    "fotos": [
      "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/18597841/pexels-photo-18597841.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "COLA-PONT-DE",
    "nome": "Colar ponto de luz",
    "marca": "Brilho",
    "cat": "colares",
    "preco": 59.9,
    "desenho": "colar",
    "destaque": true,
    "desc": "Delicado e elegante, o ponto de luz ilumina o colo sem exageros. A corrente fina tem regulagem de tamanho e o zircônia lapidado reflete a luz em qualquer ângulo. Uma ótima opção de presente para datas especiais.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ],
      [
        "Prata",
        "#B8BCC2"
      ],
      [
        "Rosé",
        "#D9A08B"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Dourado|Único": 3,
      "Prata|Único": 3,
      "Rosé|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Dourado"
      }
    ],
    "selo": "NOVO",
    "composicao": "Metal banhado, zircônia, corrente 40 cm com extensor",
    "fotos": [
      "https://images.pexels.com/photos/4595723/pexels-photo-4595723.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/7134458/pexels-photo-7134458.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "BOLS-TIRA-MATE",
    "nome": "Bolsa tiracolo matelassê",
    "marca": "Brilho",
    "cat": "bolsas",
    "preco": 139.9,
    "de": 169.9,
    "desenho": "bolsa",
    "destaque": true,
    "desc": "Bolsa tiracolo matelassê que deixa as mãos livres e o visual arrumado. Tem espaço para celular, carteira e chaves, alça em corrente ajustável e fecho seguro. Vai do almoço de domingo ao jantar sem precisar trocar.",
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
      "Vinho|Único": 5,
      "Preto|Único": 5
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
    "composicao": "Material sintético matelassê, alça em corrente metálica",
    "fotos": [
      "https://images.pexels.com/photos/20591024/pexels-photo-20591024.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "OCUL-GATI",
    "nome": "Óculos gatinho",
    "marca": "Brilho",
    "cat": "oculos",
    "preco": 89.9,
    "de": 119.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "O formato gatinho alonga o olhar e deixa qualquer produção mais charmosa. Lentes com proteção UV400 e armação leve, confortável para o uso prolongado. Combina com looks de praia e de cidade.",
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
      "Preto|Único": 6,
      "Tartaruga|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ],
    "composicao": "Armação em acetato, lentes com proteção UV400",
    "fotos": [
      "https://images.pexels.com/photos/1864848/pexels-photo-1864848.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/4952482/pexels-photo-4952482.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "BRIN-EAR-CUFF",
    "nome": "Brinco ear cuff",
    "marca": "Brilho",
    "cat": "brincos",
    "preco": 39.9,
    "desenho": "anel",
    "destaque": true,
    "desc": "O ear cuff dá um ar moderno sem precisar furar a orelha: é só encaixar e ajustar. Peça leve, com acabamento polido, que fica linda sozinha ou junto de argolas pequenas. Ótima para montar composições criativas.",
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
      "Prata|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Metal banhado a ouro 18k ou ródio, ajustável",
    "fotos": [
      "https://images.pexels.com/photos/8093082/pexels-photo-8093082.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/3214241/pexels-photo-3214241.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "CHOK-DE-PERO",
    "nome": "Choker de pérolas",
    "marca": "Brilho",
    "cat": "colares",
    "preco": 69.9,
    "de": 89.9,
    "desenho": "colar",
    "destaque": false,
    "desc": "Choker de pérolas que traz um toque clássico e feminino para o look. Ajusta-se bem ao pescoço e tem fecho com extensor para o caimento ideal. Perfeita com decotes retos e camisas abertas, e uma escolha certeira para presentear.",
    "cores": [
      [
        "Off-white",
        "#EDE6DA"
      ],
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Off-white|Único": 1,
      "Dourado|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Off-white"
      },
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Off-white"
      }
    ],
    "composicao": "Pérolas sintéticas, fecho banhado com extensor",
    "fotos": [
      "https://images.pexels.com/photos/9421389/pexels-photo-9421389.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/922567/pexels-photo-922567.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "BOLS-DE-PRAI",
    "nome": "Bolsa de praia palha",
    "marca": "Brilho",
    "cat": "bolsas",
    "preco": 99.9,
    "desenho": "bolsa",
    "destaque": false,
    "desc": "A bolsa de palha que é a cara do verão: espaçosa para toalha, protetor e garrafinha. Trama firme, alças reforçadas e forro interno para organizar os itens menores. Vai da praia à feirinha com o mesmo charme.",
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
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Bege"
      }
    ],
    "composicao": "Palha natural trançada, forro em tecido",
    "fotos": [
      "https://images.pexels.com/photos/8093198/pexels-photo-8093198.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/12043866/pexels-photo-12043866.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "OCUL-AVIA",
    "nome": "Óculos aviador",
    "marca": "Brilho",
    "cat": "oculos",
    "preco": 99.9,
    "de": 129.9,
    "desenho": "oculos",
    "destaque": false,
    "desc": "Clássico que nunca sai de moda, o aviador valoriza todos os formatos de rosto. Armação metálica fina, plaquetas ajustáveis e lentes com proteção UV400. Ideal para dirigir, viajar e para os dias de sol forte.",
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
      "Dourado|Único": 7,
      "Preto|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Armação metálica, lentes com proteção UV400",
    "fotos": [
      "https://images.pexels.com/photos/1548027/pexels-photo-1548027.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/13982235/pexels-photo-13982235.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
