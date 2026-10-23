/* =====================================================================
   Nour Catálogo · modelo pronto: Variedades e utilidades
   Baseado no modelo "variedades" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Tudo Aqui Variedades",
  "slogan": "Utilidades, organização e presentes com preço bom, tudo em um só lugar.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Tudo Aqui Variedades reúne achadinhos para casa, cozinha e presentes, com novidades chegando toda semana. Pelo WhatsApp você confere o estoque, reserva os itens e combina a entrega no bairro.",
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
    "p1": "#E63946",
    "p2": "#F4A261",
    "p3": "#FFE066",
    "on3": "#3A2E00"
  },
  "tema": "auto",
  "faixa": [
    "Novidades toda semana",
    "Entrega rápida no bairro",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Achadinhos",
    "titulo": "Casa organizada gastando pouco",
    "texto": "Utilidades, organização e presentes com preço justo e novidades toda semana.",
    "botao": "Ver achadinhos",
    "categoria": "casa",
    "imagem": "https://images.unsplash.com/photo-1591023960577-c0f250391afb?auto=format&fit=crop&w=1920&h=800&q=70",
    "imagemCelular": "https://images.unsplash.com/photo-1591023960577-c0f250391afb?auto=format&fit=crop&w=900&h=1200&q=70"
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
    "Achadinhos para todo dia",
    "Casa, cozinha, presentes e diversão em um só lugar"
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
    "id": "casa",
    "nome": "Casa",
    "chamada": "Mais espaço e menos bagunça",
    "desenho": "caixa",
    "cor": "#2457C5",
    "foto": "https://images.unsplash.com/photo-1585664428450-1665a336eb19?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "cozinha",
    "nome": "Cozinha",
    "chamada": "Praticidade do preparo à mesa",
    "desenho": "pote",
    "cor": "#E63946",
    "foto": "https://images.unsplash.com/photo-1745426431516-7fcf72dc6415?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "presentes",
    "nome": "Presentes",
    "chamada": "Mimos que cabem no bolso",
    "desenho": "caixa",
    "cor": "#7B1FA2",
    "foto": "https://images.unsplash.com/photo-1511886277144-49a67943f819?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "brinquedos",
    "nome": "Brinquedos",
    "chamada": "Diversão longe das telas",
    "desenho": "bola",
    "cor": "#F2C14E",
    "foto": "https://images.pexels.com/photos/35579565/pexels-photo-35579565.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "KIT-POTE-HERM",
    "nome": "Kit potes herméticos 5 peças",
    "marca": "Tudo Aqui",
    "cat": "cozinha",
    "preco": 49.9,
    "de": 69.9,
    "desenho": "pote",
    "destaque": true,
    "desc": "Mantimentos frescos por mais tempo e despensa organizada: cinco potes com tampa de vedação que conserva grãos, biscoitos e temperos. Material transparente para ver o que tem dentro. Empilháveis, economizam espaço.",
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
      "Transparente|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Transparente"
      }
    ],
    "composicao": "Kit 5 potes, tampa com vedação em silicone",
    "fotos": [
      "https://images.unsplash.com/photo-1569442129998-556ade6c057c?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p2",
    "sku": "ORGA-DE-GAVE",
    "nome": "Organizador de gaveta",
    "marca": "Tudo Aqui",
    "cat": "casa",
    "preco": 24.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Acabe com a bagunça das gavetas: divisórias que separam talheres, maquiagem ou itens de escritório. Fácil de limpar e encaixar. Monte do jeito que precisar e encontre tudo em segundos.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ],
      [
        "Cinza",
        "#9AA1A9"
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
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Branco"
      }
    ],
    "selo": "NOVO",
    "composicao": "Plástico resistente, peças encaixáveis",
    "fotos": [
      "https://images.pexels.com/photos/17301204/pexels-photo-17301204.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/6333856/pexels-photo-6333856.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "GARR-TERM-1",
    "nome": "Garrafa térmica 1 L",
    "marca": "Tudo Aqui",
    "cat": "cozinha",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Café quentinho ou água gelada por horas: a garrafa térmica de 1 litro tem parede dupla e tampa que não vaza. Leve no carro, no trabalho ou no passeio. Cores para escolher a sua favorita.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Verde",
        "#2F6B4F"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Rosa|Único": 7,
      "Verde|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Preto"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ],
    "composicao": "Aço inox, parede dupla, 1 L",
    "fotos": [
      "https://images.pexels.com/photos/3737799/pexels-photo-3737799.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/9160541/pexels-photo-9160541.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "LUMI-DE-MESA",
    "nome": "Luminária de mesa LED",
    "marca": "Tudo Aqui",
    "cat": "casa",
    "preco": 59.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Luz certa para estudar, ler ou trabalhar: luminária LED com haste ajustável e luz que não esquenta. Consome pouca energia e deixa a mesa com visual limpo. Ótimo presente para estudantes.",
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
      "Branco|Único": 8
    },
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Branco"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Branco"
      }
    ],
    "composicao": "LED, haste articulada, cabo USB",
    "fotos": [
      "https://images.pexels.com/photos/34991783/pexels-photo-34991783.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/7193653/pexels-photo-7193653.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "KIT-PRES-AROM",
    "nome": "Kit presente aromatizador",
    "marca": "Tudo Aqui",
    "cat": "presentes",
    "preco": 44.9,
    "de": 54.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Um presente cheiroso e pronto para entregar: aromatizador de varetas com fragrância suave de lavanda e vela decorativa em embalagem caprichada. Perfuma o ambiente por semanas. Ideal para amigo secreto e lembrancinhas.",
    "cores": [
      [
        "Lilás",
        "#B39DDB"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Lilás|Único": 2
    },
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Lilás"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Lilás"
      }
    ],
    "composicao": "Difusor 100 ml com varetas e vela, caixa presente",
    "fotos": [
      "https://images.unsplash.com/photo-1511886277144-49a67943f819?auto=format&fit=crop&w=1000&h=1250&q=70",
      "https://images.unsplash.com/photo-1539002848952-aeb10e58c2ef?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p6",
    "sku": "BOLA-DE-FUTE",
    "nome": "Bola de futebol",
    "marca": "Tudo Aqui",
    "cat": "brinquedos",
    "preco": 39.9,
    "desenho": "bola",
    "destaque": false,
    "desc": "Para a pelada do fim de semana no quintal, na quadra ou na praia. Costura resistente e bom quique, mantém o formato por mais tempo. Um presente simples que garante horas de diversão ao ar livre.",
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
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Branco"
      }
    ],
    "composicao": "Tamanho oficial nº 5, PVC costurado",
    "fotos": [
      "https://images.pexels.com/photos/16493254/pexels-photo-16493254.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/15157518/pexels-photo-15157518.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "QUEB-500-PECA",
    "nome": "Quebra-cabeça 500 peças",
    "marca": "Tudo Aqui",
    "cat": "brinquedos",
    "preco": 34.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Diversão para fazer em família ou relaxar sozinho: quebra-cabeça de 500 peças com encaixe firme e imagem nítida. Estimula a concentração e rende horas longe das telas. Bom presente para todas as idades a partir de 8 anos.",
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
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Azul"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Azul"
      }
    ],
    "composicao": "500 peças em papelão rígido, 48 x 33 cm montado",
    "fotos": [
      "https://images.pexels.com/photos/8386116/pexels-photo-8386116.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/23158268/pexels-photo-23158268.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "CEST-ORGA",
    "nome": "Cesto organizador",
    "marca": "Tudo Aqui",
    "cat": "casa",
    "preco": 29.9,
    "de": 39.9,
    "desenho": "bolsa",
    "destaque": false,
    "desc": "Bonito e funcional, o cesto organizador guarda mantas, brinquedos ou roupas e deixa a casa com cara de decoração. Leve e resistente, pode ficar na sala, quarto ou lavanderia.",
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
      "Bege|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege"
      },
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege"
      }
    ],
    "composicao": "Fibra trançada, 30 x 30 cm",
    "fotos": [
      "https://images.unsplash.com/photo-1496660988113-291c5f308503?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  }
];
