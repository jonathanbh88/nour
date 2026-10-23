/* =====================================================================
   Nour Catálogo · modelo pronto: Pet shop
   Baseado no modelo "pet" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Patas Pet Shop",
  "slogan": "Ração, petiscos e cuidados para cães e gatos, com entrega no bairro.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Patas Pet Shop é a loja do bairro para quem trata o pet como família. Peça ração, petiscos e acessórios pelo WhatsApp, tire dúvidas sobre a melhor opção para seu cão ou gato e receba em casa no mesmo dia.",
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
    "p1": "#EA580C",
    "p2": "#5B3B8C",
    "p3": "#FFD166",
    "on3": "#3A2A00"
  },
  "tema": "auto",
  "faixa": [
    "Entrega no mesmo dia no bairro",
    "Frete grátis acima de R$ 150",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Cães e gatos",
    "titulo": "Tudo para o seu pet sem sair de casa",
    "texto": "Ração, petiscos e acessórios com entrega rápida aqui no bairro.",
    "botao": "Comprar para meu pet",
    "categoria": "racoes",
    "imagem": "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1920&h=800&q=70",
    "imagemCelular": "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=900&h=1200&q=70"
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
    "Cuide de quem cuida de você",
    "Alimentação, diversão e higiene para cães e gatos"
  ],
  "descontoPix": 5,
  "parcelas": 5,
  "freteGratisAcima": 0,
  "rotulos": {
    "cor": "Sabor",
    "tamanho": "Peso"
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
    "id": "racoes",
    "nome": "Rações",
    "chamada": "Nutrição para cada fase do pet",
    "desenho": "racao",
    "cor": "#EA580C",
    "foto": "https://images.unsplash.com/photo-1591946559594-8c6d3b7391eb?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "petiscos",
    "nome": "Petiscos",
    "chamada": "Recompensa na hora do adestramento",
    "desenho": "racao",
    "cor": "#8C2F1B",
    "foto": "https://images.unsplash.com/photo-1592468257342-8375cb556a69?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "brinquedos",
    "nome": "Brinquedos",
    "chamada": "Menos tédio, mais brincadeira",
    "desenho": "bola",
    "cor": "#2457C5",
    "foto": "https://images.unsplash.com/photo-1477884143921-51d0a574ee09?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "higiene",
    "nome": "Higiene",
    "chamada": "Pet limpo e casa cheirosa",
    "desenho": "garrafa",
    "cor": "#92D0B7",
    "foto": "https://images.pexels.com/photos/6131158/pexels-photo-6131158.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "RACA-PREM-CAES",
    "nome": "Ração premium cães adultos",
    "marca": "Patas",
    "cat": "racoes",
    "preco": 159.9,
    "de": 189.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Alimentação completa para cães adultos, pensada para auxiliar na saúde da pele, do pelo e da digestão. Grãos crocantes de tamanho médio e ingredientes selecionados. Entregamos em casa, sem precisar carregar peso.",
    "cores": [
      [
        "Frango",
        "#E3B04B"
      ],
      [
        "Carne",
        "#8C2F1B"
      ]
    ],
    "tamanhos": [
      "1 kg",
      "3 kg",
      "10 kg"
    ],
    "estoque": {
      "Frango|1 kg": 1,
      "Frango|3 kg": 8,
      "Frango|10 kg": 5,
      "Carne|3 kg": 1,
      "Carne|10 kg": 7
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Frango · 1 kg"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Frango · 1 kg"
      }
    ],
    "composicao": "Saco 15 kg, sabores frango ou carne",
    "fotos": [
      "https://images.unsplash.com/photo-1591946559594-8c6d3b7391eb?auto=format&fit=crop&w=1000&h=1250&q=70",
      "https://images.unsplash.com/photo-1567664148167-0899e482142d?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p2",
    "sku": "RACA-GATO-CAST",
    "nome": "Ração gatos castrados",
    "marca": "Patas",
    "cat": "racoes",
    "preco": 129.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Fórmula para gatos castrados, com teor de gordura controlado para auxiliar na manutenção do peso. Contribui para a saúde urinária e tem alta palatabilidade. Consulte o veterinário para a quantidade ideal.",
    "cores": [
      [
        "Frango",
        "#E3B04B"
      ],
      [
        "Carne",
        "#8C2F1B"
      ]
    ],
    "tamanhos": [
      "1 kg",
      "3 kg"
    ],
    "estoque": {
      "Frango|1 kg": 7,
      "Frango|3 kg": 1,
      "Carne|1 kg": 6
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Frango · 1 kg"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Frango · 1 kg"
      }
    ],
    "selo": "NOVO",
    "composicao": "Saco 10,1 kg, sabores frango ou carne",
    "fotos": [
      "https://images.unsplash.com/photo-1548366086-7f1b76106622?auto=format&fit=crop&w=1000&h=1250&q=70",
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p3",
    "sku": "PETI-BIFI",
    "nome": "Petisco bifinho",
    "marca": "Patas",
    "cat": "petiscos",
    "preco": 14.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "O petisco que faz o rabo abanar: bifinhos macios, fáceis de partir em pedaços pequenos para treino e recompensa. Embalagem com fecho que mantém o sabor. Ofereça com moderação, como complemento da ração.",
    "cores": [
      [
        "Carne",
        "#8C2F1B"
      ],
      [
        "Frango",
        "#E3B04B"
      ]
    ],
    "tamanhos": [
      "65 g"
    ],
    "estoque": {
      "Carne|65 g": 2,
      "Frango|65 g": 9
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Carne · 65 g"
      }
    ],
    "composicao": "Pacote 500 g, sabores carne ou frango",
    "fotos": [
      "https://images.unsplash.com/photo-1592468257342-8375cb556a69?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p4",
    "sku": "OSSO-DE-COUR",
    "nome": "Osso de couro",
    "marca": "Patas",
    "cat": "petiscos",
    "preco": 19.9,
    "de": 24.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Ajuda a gastar energia e a distrair cães que gostam de roer, poupando chinelos e móveis. Feito de couro natural prensado e firme. Ofereça sempre com supervisão e escolha o tamanho adequado ao porte do seu cão.",
    "cores": [
      [
        "Natural",
        "#CFD6DC"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Natural|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Natural"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Natural"
      }
    ],
    "composicao": "Couro bovino natural, tamanho 4 a 5 polegadas",
    "fotos": [
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p5",
    "sku": "BOLI-RESI",
    "nome": "Bolinha resistente",
    "marca": "Patas",
    "cat": "brinquedos",
    "preco": 24.9,
    "desenho": "bola",
    "destaque": true,
    "desc": "Bolinha maciça e resistente a mordidas para brincar de buscar no quintal ou no parque. Quica bem, é fácil de lavar e tem cores vivas que o cão encontra rápido. Ideal para cães de porte pequeno e médio.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ],
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Azul|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Vermelho"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Vermelho"
      }
    ],
    "composicao": "Borracha atóxica maciça, 6 cm de diâmetro",
    "fotos": [
      "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p6",
    "sku": "ARRA-PARA-GATO",
    "nome": "Arranhador para gatos",
    "marca": "Patas",
    "cat": "brinquedos",
    "preco": 89.9,
    "de": 119.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "O gato afia as unhas no lugar certo e deixa o sofá em paz. Tem poste revestido com corda de sisal, base estável e plataforma para descansar. Uma dica: borrife um pouco de catnip para atrair o bichano.",
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
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Bege"
      }
    ],
    "composicao": "Sisal natural, base em MDF revestida, 50 cm",
    "fotos": [
      "https://images.unsplash.com/photo-1569146078232-07ab26678542?auto=format&fit=crop&w=1000&h=1250&q=70",
      "https://images.unsplash.com/photo-1503756506745-833f21a1d537?auto=format&fit=crop&w=1000&h=1250&q=70"
    ]
  },
  {
    "id": "p7",
    "sku": "SHAM-NEUT",
    "nome": "Shampoo neutro",
    "marca": "Patas",
    "cat": "higiene",
    "preco": 29.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "Banho em casa com cuidado: shampoo de fórmula neutra e suave, pensado para todos os tipos de pelo. Limpa sem ressecar e deixa um cheiro leve de menta. Indicado para cães e gatos a partir de 3 meses.",
    "cores": [
      [
        "Menta",
        "#92D0B7"
      ]
    ],
    "tamanhos": [
      "500 ml"
    ],
    "estoque": {
      "Menta|500 ml": 4
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Menta · 500 ml"
      },
      {
        "nome": "Fernanda S.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Menta · 500 ml"
      }
    ],
    "composicao": "Frasco 500 ml, pH neutro",
    "fotos": [
      "https://images.pexels.com/photos/6131158/pexels-photo-6131158.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "TAPE-HIGI-30",
    "nome": "Tapete higiênico 30 un.",
    "marca": "Patas",
    "cat": "higiene",
    "preco": 59.9,
    "de": 69.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Praticidade no dia a dia: tapetes com alta absorção que retêm o líquido e ajudam a controlar o odor. Base impermeável protege o chão. Ótimos para filhotes em adaptação e para apartamentos.",
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
      "Branco|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Branco"
      },
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Branco"
      }
    ],
    "composicao": "Pacote com 30 unidades, 60 x 60 cm",
    "fotos": [
      "https://images.pexels.com/photos/5255614/pexels-photo-5255614.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
