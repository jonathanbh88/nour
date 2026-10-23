/* =====================================================================
   Nour Catálogo · modelo pronto: Joias e relógios
   Baseado no modelo "relojoaria" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Joalheria Exemplo",
  "slogan": "Alianças, joias em ouro 18k e relógios com certificado de garantia.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Joalheria Exemplo trabalha com joias em ouro 18k e relógios com certificado de garantia. Pelo WhatsApp você tira dúvidas, envia a medida do dedo e combina a gravação das alianças com atendimento personalizado.",
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
    "p1": "#7A5C3E",
    "p2": "#B49575",
    "p3": "#F1E3C8",
    "on3": "#3A2A10"
  },
  "tema": "auto",
  "faixa": [
    "Ouro 18k com certificado",
    "Gravação grátis nas alianças",
    "Parcele em até 10x"
  ],
  "banners": [],
  "banner": {
    "selo": "Para sempre",
    "titulo": "Alianças em ouro 18k com gravação grátis",
    "texto": "Escolha o modelo, envie a medida pelo WhatsApp e receba com certificado de garantia.",
    "botao": "Ver alianças",
    "categoria": "aliancas",
    "imagem": "https://images.pexels.com/photos/20858959/pexels-photo-20858959.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/20858959/pexels-photo-20858959.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Joias para cada momento",
    "Do pedido de casamento ao presente do dia a dia"
  ],
  "descontoPix": 5,
  "parcelas": 10,
  "freteGratisAcima": 299,
  "rotulos": {
    "cor": "Material",
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
    "id": "aliancas",
    "nome": "Alianças",
    "chamada": "Seu nome gravado sem custo",
    "desenho": "anel",
    "cor": "#C9A227",
    "foto": "https://images.pexels.com/photos/2219195/pexels-photo-2219195.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "aneis",
    "nome": "Anéis",
    "chamada": "Brilho para usar sozinho ou junto",
    "desenho": "anel",
    "cor": "#D9A08B",
    "foto": "https://images.pexels.com/photos/1449657/pexels-photo-1449657.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "colares",
    "nome": "Colares",
    "chamada": "Detalhes que completam o visual",
    "desenho": "colar",
    "cor": "#C9A227",
    "foto": "https://images.pexels.com/photos/7134458/pexels-photo-7134458.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "relogios",
    "nome": "Relógios",
    "chamada": "Pontualidade com elegância",
    "desenho": "relogio",
    "cor": "#3A3F46",
    "foto": "https://images.pexels.com/photos/20118030/pexels-photo-20118030.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "PAR-DE-ALIA",
    "nome": "Par de alianças tradicionais 4 mm",
    "marca": "Exemplo",
    "cat": "aliancas",
    "preco": 1890,
    "de": 2290,
    "desenho": "anel",
    "destaque": true,
    "desc": "Par de alianças tradicionais de 4 mm em ouro 18k, com acabamento polido e anatômico, confortável para usar todos os dias. Acompanham certificado de garantia e gravação interna grátis com nomes ou data. Envie as medidas pelo WhatsApp para produzirmos o par.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "14",
      "16",
      "18",
      "20",
      "22",
      "24"
    ],
    "estoque": {
      "Dourado|16": 7,
      "Dourado|18": 8,
      "Dourado|20": 3,
      "Dourado|22": 4,
      "Dourado|24": 4
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado · 14"
      },
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado · 14"
      }
    ],
    "composicao": "Ouro 18k, 4 mm, acabamento polido (par)",
    "fotos": [
      "https://images.pexels.com/photos/6927690/pexels-photo-6927690.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/2219195/pexels-photo-2219195.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "ANEL-SOLI",
    "nome": "Anel solitário",
    "marca": "Exemplo",
    "cat": "aneis",
    "preco": 890,
    "desenho": "anel",
    "destaque": true,
    "desc": "Anel solitário com uma pedra central em destaque, clássico e delicado, perfeito para o pedido de noivado. O aro fino valoriza o brilho da pedra e combina com aliança e aparador. Disponível em dourado e prata, com certificado de garantia.",
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
      "12",
      "14",
      "16",
      "18"
    ],
    "estoque": {
      "Dourado|12": 7,
      "Dourado|16": 9,
      "Dourado|18": 2,
      "Prata|12": 5,
      "Prata|16": 7,
      "Prata|18": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado · 12"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Dourado · 12"
      }
    ],
    "selo": "NOVO",
    "composicao": "Aro em ouro 18k ou prata 925 com zircônia",
    "fotos": [
      "https://images.pexels.com/photos/630757/pexels-photo-630757.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/1449657/pexels-photo-1449657.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "COLA-VENE-45",
    "nome": "Colar veneziana 45 cm",
    "marca": "Exemplo",
    "cat": "colares",
    "preco": 590,
    "de": 690,
    "desenho": "colar",
    "destaque": true,
    "desc": "Colar veneziana de 45 cm, uma corrente clássica com elos finos que caem bem sozinhos ou com pingente. O comprimento fica na altura do colo e combina com decotes variados. Um presente que dura e acompanha qualquer ocasião.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Ouro 18k, corrente veneziana 45 cm",
    "fotos": [
      "https://images.pexels.com/photos/12194265/pexels-photo-12194265.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/8123210/pexels-photo-8123210.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "RELO-MASC-ACO",
    "nome": "Relógio masculino aço",
    "marca": "Exemplo",
    "cat": "relogios",
    "preco": 459,
    "de": 559,
    "desenho": "relogio",
    "destaque": true,
    "desc": "Relógio masculino em aço, com visual sóbrio que vai do trabalho ao fim de semana. A pulseira ajustável e a caixa resistente aguentam o uso diário. Acompanha garantia e é uma boa opção de presente para Dia dos Pais ou aniversário.",
    "cores": [
      [
        "Prata",
        "#B8BCC2"
      ],
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Prata"
      },
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Prata"
      }
    ],
    "composicao": "Caixa e pulseira em aço, resistente a respingos",
    "fotos": [
      "https://images.pexels.com/photos/16739804/pexels-photo-16739804.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/2799535/pexels-photo-2799535.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "RELO-FEMI-ROSE",
    "nome": "Relógio feminino rosé",
    "marca": "Exemplo",
    "cat": "relogios",
    "preco": 399,
    "desenho": "relogio",
    "destaque": true,
    "desc": "Relógio feminino em tom rosé, delicado e elegante, que funciona como joia no pulso. O mostrador limpo facilita a leitura e a pulseira se ajusta com conforto. Combina com pulseiras e anéis dourados e acompanha garantia.",
    "cores": [
      [
        "Rosé",
        "#D9A08B"
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
      "Rosé|Único": 2,
      "Dourado|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Rosé"
      }
    ],
    "composicao": "Caixa em aço com banho rosé, pulseira ajustável",
    "fotos": [
      "https://images.pexels.com/photos/1228514/pexels-photo-1228514.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "BRIN-DE-PERO",
    "nome": "Brinco de pérola",
    "marca": "Exemplo",
    "cat": "colares",
    "preco": 290,
    "desenho": "anel",
    "destaque": false,
    "desc": "Brinco de pérola clássico, que ilumina o rosto e vai bem do dia a dia a festas e casamentos. A tarraxa firme dá segurança e o tamanho é confortável para usar o dia todo. Disponível em dourado e prata, um presente que nunca sai de moda.",
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
      "Prata|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Dourado"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Pérola cultivada com base em ouro 18k ou prata 925",
    "fotos": [
      "https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/2876035/pexels-photo-2876035.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "ANEL-APAR",
    "nome": "Anel aparador",
    "marca": "Exemplo",
    "cat": "aneis",
    "preco": 390,
    "de": 450,
    "desenho": "anel",
    "destaque": false,
    "desc": "Anel aparador pensado para acompanhar o solitário ou a aliança, dando mais brilho e protegendo as peças no dedo. Também fica lindo usado sozinho, no estilo minimalista. Envie a medida do dedo pelo WhatsApp para confirmar o tamanho.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "12",
      "14",
      "16",
      "18"
    ],
    "estoque": {
      "Dourado|12": 8
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado · 12"
      }
    ],
    "composicao": "Ouro 18k com zircônias",
    "fotos": [
      "https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/3912486/pexels-photo-3912486.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "PULS-RIVI",
    "nome": "Pulseira riviera",
    "marca": "Exemplo",
    "cat": "colares",
    "preco": 690,
    "de": 790,
    "desenho": "colar",
    "destaque": false,
    "desc": "Pulseira riviera com uma fileira contínua de pedras que brilham a cada movimento do pulso. O fecho de segurança evita que ela abra sem querer. Perfeita para festas, formaturas e casamentos, e também como presente especial.",
    "cores": [
      [
        "Prata",
        "#B8BCC2"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Prata|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Prata"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "Brasília, DF",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Prata"
      }
    ],
    "composicao": "Prata 925 com zircônias, fecho de segurança",
    "fotos": [
      "https://images.pexels.com/photos/12026051/pexels-photo-12026051.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/12495610/pexels-photo-12495610.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
