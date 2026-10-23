/* =====================================================================
   Nour Catálogo · modelo pronto: Papelaria e presentes
   Baseado no modelo "papelaria" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Papel & Cor",
  "slogan": "Papelaria bonita e personalizada para estudar, trabalhar e presentear.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Papel & Cor reúne cadernos, canetas e presentes escolhidos com carinho, muitos deles personalizados com o seu nome. Pelo WhatsApp você monta o pedido, aprova a arte antes da produção e combina a entrega.",
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
    "p2": "#7B1FA2",
    "p3": "#FFEB3B",
    "on3": "#3A3000"
  },
  "tema": "auto",
  "faixa": [
    "Personalizamos com o seu nome",
    "Embalagem para presente sem custo",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Volta às aulas",
    "titulo": "Material que dá vontade de estudar",
    "texto": "Cadernos, estojos e canetas em cores lindas, com opção personalizada.",
    "botao": "Montar meu kit",
    "categoria": "cadernos",
    "imagem": "https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Encontre o que combina com você",
    "Do caderno ao presente, tudo com cor e capricho"
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
    "id": "cadernos",
    "nome": "Cadernos",
    "chamada": "Organização com estilo o ano todo",
    "desenho": "caderno",
    "cor": "#C2185B",
    "foto": "https://images.pexels.com/photos/7718812/pexels-photo-7718812.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "escrita",
    "nome": "Escrita",
    "chamada": "Anotações mais bonitas e claras",
    "desenho": "caderno",
    "cor": "#2457C5",
    "foto": "https://images.pexels.com/photos/27496670/pexels-photo-27496670.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "presentes",
    "nome": "Presentes",
    "chamada": "Mimos prontos para presentear",
    "desenho": "caixa",
    "cor": "#7B1FA2",
    "foto": "https://images.pexels.com/photos/4397882/pexels-photo-4397882.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "personalizados",
    "nome": "Personalizados",
    "chamada": "Feitos com o seu nome",
    "desenho": "caderno",
    "cor": "#F2C14E",
    "foto": "https://images.pexels.com/photos/6312196/pexels-photo-6312196.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CADE-CAPA-DURA",
    "nome": "Caderno capa dura 10 matérias",
    "marca": "Papel & Cor",
    "cat": "cadernos",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "caderno",
    "destaque": true,
    "desc": "Dez matérias para o ano letivo inteiro em um só caderno. Capa dura resistente, folhas de boa gramatura que não marcam do outro lado e divisórias coloridas. Pode ser personalizado com nome na capa.",
    "cores": [
      [
        "Rosa",
        "#E58FAE"
      ],
      [
        "Azul",
        "#2457C5"
      ],
      [
        "Lilás",
        "#B39DDB"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Rosa|Único": 8,
      "Azul|Único": 4,
      "Lilás|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Rosa"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Rosa"
      }
    ],
    "composicao": "Capa dura, 200 folhas 75 g/m², espiral",
    "fotos": [
      "https://images.pexels.com/photos/7718812/pexels-photo-7718812.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "PLAN-ANUA",
    "nome": "Planner anual",
    "marca": "Papel & Cor",
    "cat": "cadernos",
    "preco": 59.9,
    "desenho": "caderno",
    "destaque": true,
    "desc": "Planeje o ano com calma: visão mensal, páginas semanais e espaço para metas e anotações. Capa resistente e elástico para manter tudo fechado na bolsa. Ótimo presente para quem ama organização.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
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
      "Rosa|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Verde"
      },
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Verde"
      }
    ],
    "selo": "NOVO",
    "composicao": "Capa dura, miolo 90 g/m², fechamento com elástico",
    "fotos": [
      "https://images.pexels.com/photos/5240008/pexels-photo-5240008.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/4110453/pexels-photo-4110453.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "KIT-MARC-PAST",
    "nome": "Kit marca-texto pastel",
    "marca": "Papel & Cor",
    "cat": "escrita",
    "preco": 29.9,
    "de": 34.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Destaque o que importa sem pesar no visual: marca-textos em tons pastel com ponta chanfrada para traço fino ou grosso. Tinta de secagem rápida que não borra a maioria das canetas. Combina com o planner anual.",
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
      "Lilás|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Lilás"
      }
    ],
    "composicao": "Kit com 6 marca-textos, ponta chanfrada",
    "fotos": [
      "https://images.pexels.com/photos/6192519/pexels-photo-6192519.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "ESTO-GRAN",
    "nome": "Estojo grande",
    "marca": "Papel & Cor",
    "cat": "escrita",
    "preco": 34.9,
    "desenho": "bolsa",
    "destaque": true,
    "desc": "Cabe tudo: canetas, lápis, marca-textos e régua organizados em compartimentos. Zíper firme e tecido fácil de limpar. Pode levar o nome bordado ou estampado para não se perder na escola.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
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
      "Preto|Único": 5,
      "Rosa|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ],
    "composicao": "Poliéster resistente, 3 compartimentos com zíper",
    "fotos": [
      "https://images.pexels.com/photos/3731255/pexels-photo-3731255.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "CANE-PERS",
    "nome": "Caneca personalizada",
    "marca": "Papel & Cor",
    "cat": "personalizados",
    "preco": 39.9,
    "desenho": "pote",
    "destaque": true,
    "desc": "A caneca que vira presente cheio de significado: estampamos nome, frase ou foto com impressão que não desbota. Pode ir ao micro-ondas e à lava-louças. Você aprova a arte pelo WhatsApp antes de produzir.",
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
      "Branco|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco"
      }
    ],
    "composicao": "Cerâmica branca 325 ml, sublimação",
    "fotos": [
      "https://images.pexels.com/photos/11075707/pexels-photo-11075707.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/4065905/pexels-photo-4065905.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "CHAV-COM-NOME",
    "nome": "Chaveiro com nome",
    "marca": "Papel & Cor",
    "cat": "personalizados",
    "preco": 19.9,
    "de": 24.9,
    "desenho": "anel",
    "destaque": false,
    "desc": "Pequeno e charmoso, o chaveiro com nome é ótimo para lembrancinha, presente de amigo secreto ou para identificar a mochila. Acabamento em metal com banho dourado ou prateado. Fazemos em quantidade para eventos.",
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
      "Prata|Único": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado"
      },
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Metal com banho dourado ou prateado",
    "fotos": [
      "https://images.pexels.com/photos/15862192/pexels-photo-15862192.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/15679981/pexels-photo-15679981.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "KIT-PRES-PAPE",
    "nome": "Kit presente papelaria",
    "marca": "Papel & Cor",
    "cat": "presentes",
    "preco": 89.9,
    "de": 109.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Presente pronto e caprichado: caderno, canetas, marca-texto e adesivos em embalagem decorada. Basta escolher a cor e, se quiser, incluir um cartão com sua mensagem. Ideal para aniversários e professores.",
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
      "Rosa|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Rosa"
      }
    ],
    "composicao": "Caderno, 3 canetas, marca-texto, adesivos e caixa",
    "fotos": [
      "https://images.pexels.com/photos/6119143/pexels-photo-6119143.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/1303080/pexels-photo-1303080.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "CAPA-PARA-KIND",
    "nome": "Capa para Kindle",
    "marca": "Papel & Cor",
    "cat": "presentes",
    "preco": 49.9,
    "desenho": "caderno",
    "destaque": false,
    "desc": "Proteja seu leitor digital com estilo: capa com fechamento magnético, interior macio que evita riscos e encaixe firme. Leve e fina, cabe em qualquer bolsa. Confirme o modelo do seu aparelho antes de pedir.",
    "cores": [
      [
        "Verde",
        "#2F6B4F"
      ],
      [
        "Bege",
        "#D8C3A5"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Verde|Único": 2,
      "Bege|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Verde"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Verde"
      }
    ],
    "composicao": "Tecido texturizado, interior em microfibra",
    "fotos": [
      "https://images.pexels.com/photos/59143/pexels-photo-59143.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
