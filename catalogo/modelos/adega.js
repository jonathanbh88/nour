/* =====================================================================
   Nour Catálogo · modelo pronto: Adega e tabacaria
   Baseado no modelo "adega" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Adega Exemplo",
  "slogan": "Cerveja trincando, vinho certo e destilado para o drink. Só para maiores de 18.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Somos a adega do bairro: bebida bem armazenada, gelada na hora da entrega e preço justo. Faça o pedido pelo WhatsApp, a gente confirma em minutos e leva até você. Venda proibida para menores de 18 anos.",
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
    "Cerveja entregue trincando",
    "Desconto no Pix à vista",
    "Venda só para maiores de 18"
  ],
  "banners": [],
  "banner": {
    "selo": "Fim de semana",
    "titulo": "Cerveja gelada na sua porta",
    "texto": "Fardos, vinhos e destilados com entrega rápida no bairro. Peça pelo WhatsApp.",
    "botao": "Pedir agora",
    "categoria": "cervejas",
    "imagem": "https://images.pexels.com/photos/15945661/pexels-photo-15945661.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/15945661/pexels-photo-15945661.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Escolha sua bebida",
    "Do churrasco ao jantar a dois, tem opção para cada momento"
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
    "chamada": "Sai da geladeira direto para você",
    "desenho": "garrafa",
    "cor": "#C9A227",
    "foto": "https://images.pexels.com/photos/5537952/pexels-photo-5537952.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "vinhos",
    "nome": "Vinhos",
    "chamada": "Rótulos para jantar e presentear",
    "desenho": "vinho",
    "cor": "#5A1424",
    "foto": "https://images.pexels.com/photos/18981467/pexels-photo-18981467.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "destilados",
    "nome": "Destilados",
    "chamada": "A base certa para o seu drink",
    "desenho": "garrafa",
    "cor": "#3A3F46",
    "foto": "https://images.pexels.com/photos/5865312/pexels-photo-5865312.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "tabacaria",
    "nome": "Tabacaria",
    "chamada": "Tudo para a sessão, sem sair de casa",
    "desenho": "caixa",
    "cor": "#6B4128",
    "foto": "https://images.pexels.com/photos/30694805/pexels-photo-30694805.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
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
    "desc": "Seis long necks geladas, prontas para abrir. A garrafa individual mantém a temperatura por mais tempo e facilita servir na mesa ou no cooler. Boa pedida para o jogo, o churrasco ou aquele fim de tarde com os amigos.",
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
    ],
    "composicao": "Fardo com 6 garrafas long neck de 355 ml",
    "fotos": [
      "https://images.pexels.com/photos/5537952/pexels-photo-5537952.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
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
    "desc": "O fardo que rende para a turma toda. São 12 latões entregues gelados, que empilham fácil na geladeira e no isopor. Ideal para churrasco, aniversário e reunião de fim de semana. Reposição frequente para não faltar.",
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
    "selo": "NOVO",
    "composicao": "Fardo com 12 latas de 473 ml",
    "fotos": [
      "https://images.pexels.com/photos/5532831/pexels-photo-5532831.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/5538240/pexels-photo-5538240.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
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
    "desc": "Tinto chileno macio e frutado, fácil de agradar. Tem taninos suaves e notas de frutas vermelhas, ótimo para acompanhar massas, carnes grelhadas e queijos. Vai bem no jantar de casa e também como presente.",
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
    ],
    "composicao": "Garrafa de vidro 750 ml, vinho tinto seco",
    "fotos": [
      "https://images.pexels.com/photos/19419131/pexels-photo-19419131.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/8473211/pexels-photo-8473211.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
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
    "desc": "Rosé leve e refrescante, perfeito para dias quentes. Aroma de frutas vermelhas e final delicado, servido bem gelado. Combina com saladas, peixes, petiscos e aquele almoço sem pressa no fim de semana.",
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
    ],
    "composicao": "Garrafa de vidro 750 ml, vinho rosé",
    "fotos": [
      "https://images.pexels.com/photos/6289/pexels-photo-6289.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/30121094/pexels-photo-30121094.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
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
    "desc": "Gin nacional de perfil cítrico e herbal, feito para o gin tônica de casa. Vai bem com água tônica, gelo e uma casca de limão ou especiarias. Boa escolha para quem está montando o primeiro bar ou quer variar os drinks.",
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
    ],
    "composicao": "Garrafa de vidro 750 ml, destilado de cereais",
    "fotos": [
      "https://images.pexels.com/photos/3557746/pexels-photo-3557746.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
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
    "desc": "Whisky envelhecido por 8 anos, com notas de baunilha, madeira e um toque defumado. Pode ser apreciado puro, com gelo ou em coquetéis clássicos. Uma garrafa que faz bonito no bar de casa e como presente.",
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
    ],
    "composicao": "Garrafa de vidro 1 L, whisky envelhecido 8 anos",
    "fotos": [
      "https://images.pexels.com/photos/16849851/pexels-photo-16849851.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/16849850/pexels-photo-16849850.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
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
    "desc": "Essência de 50 g com aroma marcante e boa durabilidade na sessão. Escolha entre menta, refrescante, e morango, mais adocicado. Embalagem fechada que conserva o sabor. Venda exclusiva para maiores de 18 anos.",
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
    ],
    "composicao": "Pote 50 g, sabores menta ou morango",
    "fotos": [
      "https://images.pexels.com/photos/30694805/pexels-photo-30694805.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/12007437/pexels-photo-12007437.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
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
    "desc": "Carvão de coco em cubos, que acende de forma uniforme e solta pouca cinza. Mantém a brasa estável por mais tempo e não interfere no aroma da essência. Pacote de 1 kg que rende várias sessões.",
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
    ],
    "composicao": "Pacote 1 kg, cubos de casca de coco prensada",
    "fotos": [
      "https://images.pexels.com/photos/9263/pexels-photo-9263.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/30694805/pexels-photo-30694805.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
