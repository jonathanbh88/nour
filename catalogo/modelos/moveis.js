/* =====================================================================
   Nour Catálogo · modelo pronto: Móveis
   Baseado no modelo "moveis" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Casa Exemplo Móveis",
  "slogan": "Móveis para cada canto da casa, com montagem e entrega na cidade.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Na Casa Exemplo você monta a casa do seu jeito, com móveis de qualidade e preço justo. Tire dúvidas de medidas, cores e prazos pelo WhatsApp e receba com entrega agendada e montagem feita pela nossa equipe.",
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
    "p1": "#3B2A1A",
    "p2": "#8B5E34",
    "p3": "#E9D58A",
    "on3": "#3A2A00"
  },
  "tema": "auto",
  "faixa": [
    "Montagem grátis na cidade",
    "Parcele em até 12x no cartão",
    "Entrega agendada no seu horário"
  ],
  "banners": [],
  "banner": {
    "selo": "Casa nova",
    "titulo": "Sua casa pronta sem dor de cabeça",
    "texto": "Móveis para sala, quarto, cozinha e escritório com montagem grátis.",
    "botao": "Ver móveis",
    "categoria": "sala",
    "imagem": "https://images.pexels.com/photos/20390760/pexels-photo-20390760.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/20390760/pexels-photo-20390760.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Compre por ambiente",
    "Tudo o que você precisa, cômodo por cômodo"
  ],
  "descontoPix": 5,
  "parcelas": 10,
  "freteGratisAcima": 299,
  "rotulos": {
    "cor": "Acabamento",
    "tamanho": "Medida"
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
    "id": "sala",
    "nome": "Sala",
    "chamada": "Conforto para receber e relaxar",
    "desenho": "sofa",
    "cor": "#8B5E34",
    "foto": "https://images.pexels.com/photos/6970027/pexels-photo-6970027.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "quarto",
    "nome": "Quarto",
    "chamada": "Noites melhores e tudo no lugar",
    "desenho": "caixa",
    "cor": "#EDE6DA",
    "foto": "https://images.pexels.com/photos/7031207/pexels-photo-7031207.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "cozinha",
    "nome": "Cozinha",
    "chamada": "Espaço para cozinhar e reunir",
    "desenho": "caixa",
    "cor": "#3A3F46",
    "foto": "https://images.pexels.com/photos/7168013/pexels-photo-7168013.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "escritorio",
    "nome": "Escritório",
    "chamada": "Produtividade no home office",
    "desenho": "caixa",
    "cor": "#1D1F23",
    "foto": "https://images.pexels.com/photos/5978423/pexels-photo-5978423.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "SOFA-RETR-3",
    "nome": "Sofá retrátil 3 lugares",
    "marca": "Exemplo",
    "cat": "sala",
    "preco": 1899,
    "de": 2299,
    "desenho": "sofa",
    "destaque": true,
    "desc": "Espaço para a família toda no fim de semana: assento retrátil e encosto reclinável que viram quase uma cama para ver filmes. Espuma de alta densidade e tecido suave, fácil de limpar. Combina com o rack para TV.",
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
      "2,10 m",
      "2,30 m"
    ],
    "estoque": {
      "Cinza|2,30 m": 7,
      "Bege|2,10 m": 2,
      "Bege|2,30 m": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Cinza · 2,10 m"
      },
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Cinza · 2,10 m"
      }
    ],
    "composicao": "Estrutura em madeira, espuma D33, tecido suede",
    "fotos": [
      "https://images.pexels.com/photos/6970000/pexels-photo-6970000.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "RACK-PARA-TV",
    "nome": "Rack para TV até 65\"",
    "marca": "Exemplo",
    "cat": "sala",
    "preco": 599,
    "de": 699,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Organiza a sala e acomoda TVs de até 65 polegadas com folga. Tem nichos para aparelhos e portas para esconder controles e cabos. Acabamento resistente a riscos, fácil de limpar. Chega com montagem gratuita na cidade.",
    "cores": [
      [
        "Madeira",
        "#8B5E34"
      ],
      [
        "Off-white",
        "#EDE6DA"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Madeira"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Madeira"
      }
    ],
    "selo": "NOVO",
    "composicao": "MDP 15 mm com acabamento BP, pés reguláveis",
    "fotos": [
      "https://images.pexels.com/photos/7767067/pexels-photo-7767067.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "GUAR-CASA-6",
    "nome": "Guarda-roupa casal 6 portas",
    "marca": "Exemplo",
    "cat": "quarto",
    "preco": 1499,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Seis portas de bom tamanho para organizar as roupas do casal sem aperto. Por dentro, prateleiras, gavetas e cabideiro dividem o espaço. Corrediças metálicas e puxadores firmes para o uso diário. Montagem inclusa.",
    "cores": [
      [
        "Off-white",
        "#EDE6DA"
      ],
      [
        "Madeira",
        "#8B5E34"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Off-white|Único": 9,
      "Madeira|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Off-white"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Off-white"
      }
    ],
    "composicao": "MDP 15 mm, corrediças metálicas, 6 portas e 4 gavetas",
    "fotos": [
      "https://images.pexels.com/photos/2708106/pexels-photo-2708106.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/6758235/pexels-photo-6758235.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "CAMA-BOX-CASA",
    "nome": "Cama box casal",
    "marca": "Exemplo",
    "cat": "quarto",
    "preco": 1299,
    "de": 1499,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Base box firme e estável para colchões de casal, com tecido que deixa o quarto mais acolhedor. A estrutura reforçada distribui bem o peso e evita ruídos. Ótima escolha para renovar o quarto sem obra.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "Casal",
      "Queen"
    ],
    "estoque": {
      "Cinza|Casal": 8
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Cinza · Casal"
      },
      {
        "nome": "Thiago N.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Cinza · Casal"
      }
    ],
    "composicao": "Base box casal 138 x 188 cm, estrutura em madeira",
    "fotos": [
      "https://images.pexels.com/photos/4217/pexels-photo-4217.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/6956623/pexels-photo-6956623.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "MESA-DE-JANT",
    "nome": "Mesa de jantar 6 lugares",
    "marca": "Exemplo",
    "cat": "cozinha",
    "preco": 1599,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Mesa ampla para reunir seis pessoas no almoço de domingo. Tampo em madeira com acabamento que resiste ao uso diário e pés firmes que não balançam. Fica linda com cadeiras estofadas ou de madeira.",
    "cores": [
      [
        "Madeira",
        "#8B5E34"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Madeira"
      }
    ],
    "composicao": "Tampo em madeira 160 x 90 cm, pés em madeira maciça",
    "fotos": [
      "https://images.pexels.com/photos/8113036/pexels-photo-8113036.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/2088258/pexels-photo-2088258.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "ARMA-DE-COZI",
    "nome": "Armário de cozinha completo",
    "marca": "Exemplo",
    "cat": "cozinha",
    "preco": 1999,
    "de": 2399,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Cozinha organizada de uma vez: aéreos, balcão e paneleiro com bastante espaço para louças e mantimentos. Portas com dobradiças metálicas e acabamento fácil de limpar. Medimos o espaço com você pelo WhatsApp antes da entrega.",
    "cores": [
      [
        "Off-white",
        "#EDE6DA"
      ],
      [
        "Grafite",
        "#3A3F46"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Off-white|Único": 1,
      "Grafite|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Off-white"
      }
    ],
    "composicao": "MDP 15 mm, dobradiças metálicas, 4 peças",
    "fotos": [
      "https://images.pexels.com/photos/4682120/pexels-photo-4682120.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/8583735/pexels-photo-8583735.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "ESCR-COM-GAVE",
    "nome": "Escrivaninha com gavetas",
    "marca": "Exemplo",
    "cat": "escritorio",
    "preco": 449,
    "de": 529,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Compacta e prática para home office ou estudos: tampo com espaço para notebook e gavetas para guardar papéis e cabos. Cabe em quartos e salas pequenas. Combina com a cadeira de escritório da loja.",
    "cores": [
      [
        "Madeira",
        "#8B5E34"
      ],
      [
        "Off-white",
        "#EDE6DA"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Madeira|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Madeira"
      },
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Madeira"
      }
    ],
    "composicao": "MDP 15 mm, 2 gavetas, 120 x 60 cm",
    "fotos": [
      "https://images.pexels.com/photos/10099172/pexels-photo-10099172.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.unsplash.com/photo-1745910020846-3d4d0088d24d?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p8",
    "sku": "CADE-DE-ESCR",
    "nome": "Cadeira de escritório",
    "marca": "Exemplo",
    "cat": "escritorio",
    "preco": 599,
    "desenho": "sofa",
    "destaque": false,
    "desc": "Mais conforto nas horas de trabalho: encosto ergonômico em tela que deixa o corpo ventilado, regulagem de altura e rodízios suaves. Assento estofado para longos períodos sentado. Ideal para home office.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Preto|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Preto"
      }
    ],
    "composicao": "Encosto em tela, assento estofado, base giratória",
    "fotos": [
      "https://images.pexels.com/photos/6044923/pexels-photo-6044923.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/31236091/pexels-photo-31236091.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
