/* =====================================================================
   Nour Catálogo · modelo pronto: Floricultura
   Baseado no modelo "floricultura" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Flor de Lis",
  "slogan": "Flores frescas montadas na hora, com entrega no mesmo dia.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Flor de Lis monta cada buquê e arranjo no dia da entrega, com flores selecionadas pela manhã. Pelo WhatsApp você escolhe o modelo, a mensagem do cartão e o horário, e a gente cuida do resto.",
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
    "p1": "#C2185B",
    "p2": "#93042B",
    "p3": "#EBCEB7",
    "on3": "#4A1020"
  },
  "tema": "auto",
  "faixa": [
    "Pedido até 14h, entrega no mesmo dia",
    "Cartão com sua mensagem sem custo",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Entrega hoje",
    "titulo": "Flores frescas para dizer o que sente",
    "texto": "Buquês e arranjos montados na hora, com cartão e entrega no mesmo dia.",
    "botao": "Escolher flores",
    "categoria": "buques",
    "imagem": "https://images.pexels.com/photos/947914/pexels-photo-947914.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/947914/pexels-photo-947914.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Escolha o presente certo",
    "Buquês, arranjos, cestas e plantas para cada momento"
  ],
  "descontoPix": 5,
  "parcelas": 5,
  "freteGratisAcima": 0,
  "rotulos": {
    "cor": "Cor",
    "tamanho": "Tamanho"
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
    "id": "buques",
    "nome": "Buquês",
    "chamada": "Para surpreender na porta de casa",
    "desenho": "flor",
    "cor": "#E81968",
    "foto": "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "arranjos",
    "nome": "Arranjos",
    "chamada": "Deixam qualquer mesa mais bonita",
    "desenho": "flor",
    "cor": "#F2C14E",
    "foto": "https://images.pexels.com/photos/13788170/pexels-photo-13788170.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "cestas",
    "nome": "Cestas",
    "chamada": "Presente completo, pronto para entregar",
    "desenho": "bolsa",
    "cor": "#8B5E34",
    "foto": "https://images.pexels.com/photos/36431075/pexels-photo-36431075.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "plantas",
    "nome": "Plantas",
    "chamada": "Verde que dura muito mais",
    "desenho": "flor",
    "cor": "#2F6B4F",
    "foto": "https://images.pexels.com/photos/4484184/pexels-photo-4484184.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "BUQU-12-ROSA",
    "nome": "Buquê 12 rosas",
    "marca": "Flor de Lis",
    "cat": "buques",
    "preco": 189.9,
    "de": 229.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "O clássico que nunca erra: doze rosas selecionadas no dia, com folhagens e acabamento em papel e laço. As hastes vão hidratadas para durar mais no vaso. Ideal para aniversário, pedido de namoro ou para pedir desculpas.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ],
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Vermelho|Único": 3,
      "Branco|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Vermelho"
      }
    ],
    "composicao": "12 rosas nacionais, folhagens, papel e laço de cetim",
    "fotos": [
      "https://images.pexels.com/photos/11166470/pexels-photo-11166470.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/16485482/pexels-photo-16485482.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "BUQU-5-ROSA",
    "nome": "Buquê 5 rosas",
    "marca": "Flor de Lis",
    "cat": "buques",
    "preco": 99.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Delicado e cheio de significado, o buquê de cinco rosas cabe em qualquer ocasião. Montado na hora com folhagens e papel de presente, chega acompanhado de cartão com a sua mensagem. Perfeito para um carinho sem data especial.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
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
      "Vermelho|Único": 2,
      "Rosa|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vermelho"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vermelho"
      }
    ],
    "selo": "NOVO",
    "composicao": "5 rosas nacionais, folhagens, papel e laço",
    "fotos": [
      "https://images.pexels.com/photos/33791891/pexels-photo-33791891.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/4421053/pexels-photo-4421053.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "ARRA-DE-GIRA",
    "nome": "Arranjo de girassóis",
    "marca": "Flor de Lis",
    "cat": "arranjos",
    "preco": 149.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Girassóis trazem luz para qualquer ambiente. O arranjo é montado em base pronta para colocar sobre a mesa, sem precisar de vaso. Ótimo para parabenizar uma conquista, alegrar um escritório ou desejar boa recuperação.",
    "cores": [
      [
        "Amarelo",
        "#F2C14E"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Amarelo|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Amarelo"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Amarelo"
      }
    ],
    "composicao": "Girassóis, folhagens e base com espuma floral",
    "fotos": [
      "https://images.pexels.com/photos/8737344/pexels-photo-8737344.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/5568/pexels-photo-5568.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "ARRA-ORQU",
    "nome": "Arranjo orquídea",
    "marca": "Flor de Lis",
    "cat": "arranjos",
    "preco": 169.9,
    "de": 199.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Elegante e duradoura, a orquídea pode florir por semanas com poucos cuidados: basta regar uma vez por semana e deixar em local claro, sem sol direto. Vai em cachepô decorativo, pronta para presentear.",
    "cores": [
      [
        "Lilás",
        "#B39DDB"
      ],
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Lilás|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Lilás"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Lilás"
      }
    ],
    "composicao": "Orquídea Phalaenopsis em vaso com cachepô",
    "fotos": [
      "https://images.pexels.com/photos/5714450/pexels-photo-5714450.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/13030170/pexels-photo-13030170.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "CEST-CAFE-DA",
    "nome": "Cesta café da manhã",
    "marca": "Flor de Lis",
    "cat": "cestas",
    "preco": 219.9,
    "de": 259.9,
    "desenho": "bolsa",
    "destaque": true,
    "desc": "Para começar o dia de alguém com carinho: cesta com café, pães, frios, frutas e doces, decorada com flores. Montamos na madrugada e entregamos pela manhã no horário combinado. Inclui cartão com sua mensagem.",
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
      "Bege|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Bege"
      }
    ],
    "composicao": "Cesta com itens de café da manhã, flores e cartão",
    "fotos": [
      "https://images.unsplash.com/photo-1744638628542-12578d73179b?auto=format&fit=crop&w=1000&h=1250&q=70",
      "https://images.pexels.com/photos/1843244/pexels-photo-1843244.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "CEST-ENCA-DOS",
    "nome": "Cesta encanto dos namorados",
    "marca": "Flor de Lis",
    "cat": "cestas",
    "preco": 289.9,
    "desenho": "bolsa",
    "destaque": false,
    "desc": "A cesta pensada para o Dia dos Namorados: rosas vermelhas, chocolates, espumante sem álcool e mimos selecionados. Chega com embalagem caprichada e cartão escrito à mão. Reserve com antecedência, a produção é limitada.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Vermelho|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Vermelho"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Vermelho"
      }
    ],
    "composicao": "Cesta com rosas, chocolates, bebida e cartão",
    "fotos": [
      "https://images.pexels.com/photos/30592535/pexels-photo-30592535.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/20046322/pexels-photo-20046322.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "KIT-SUCU",
    "nome": "Kit suculentas",
    "marca": "Flor de Lis",
    "cat": "plantas",
    "preco": 59.9,
    "de": 69.9,
    "desenho": "flor",
    "destaque": false,
    "desc": "Um pedacinho de natureza que quase não dá trabalho: o kit reúne suculentas variadas em vasinhos individuais. Precisam de pouca água e bastante luz. Ótimas para decorar a mesa de trabalho ou como lembrança de evento.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Verde|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Verde"
      }
    ],
    "composicao": "3 suculentas variadas em vasos de 6 cm",
    "fotos": [
      "https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p8",
    "sku": "VASO-DE-LIRI",
    "nome": "Vaso de lírio da paz",
    "marca": "Flor de Lis",
    "cat": "plantas",
    "preco": 79.9,
    "desenho": "flor",
    "destaque": false,
    "desc": "O lírio da paz é uma planta de interior bonita e fácil de manter, com folhas verdes brilhantes e flores brancas. Gosta de meia-sombra e rega moderada. Um presente que acompanha a casa por muito tempo.",
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
        "nome": "Camila R.",
        "cidade": "Recife, PE",
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
    "composicao": "Spathiphyllum em vaso nº 15 com cachepô",
    "fotos": [
      "https://images.pexels.com/photos/1471600/pexels-photo-1471600.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/2092553/pexels-photo-2092553.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
