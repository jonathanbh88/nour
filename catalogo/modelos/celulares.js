/* =====================================================================
   Nour Catálogo · modelo pronto: Celulares e acessórios
   Baseado no modelo "celular" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Conecta Celulares",
  "slogan": "Acessórios para o seu celular com garantia e película aplicada na hora.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Conecta Celulares reúne capinhas, carregadores, fones e películas para os principais modelos. Mande o modelo do seu aparelho no WhatsApp e a gente confirma a compatibilidade antes de fechar o pedido.",
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
    "p1": "#111827",
    "p2": "#C8A24A",
    "p3": "#F4E3B5",
    "on3": "#3A2A00"
  },
  "tema": "auto",
  "faixa": [
    "Película aplicada na hora na loja",
    "Garantia em todos os acessórios",
    "Desconto especial no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Proteção e energia",
    "titulo": "Seu celular protegido e sempre carregado",
    "texto": "Capinhas, carregadores turbo e fones com garantia. Confira o modelo pelo WhatsApp.",
    "botao": "Escolher acessórios",
    "categoria": "capinhas",
    "imagem": "https://images.pexels.com/photos/374117/pexels-photo-374117.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/374117/pexels-photo-374117.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Encontre o acessório certo",
    "Proteção, carga e som para o seu aparelho"
  ],
  "descontoPix": 5,
  "parcelas": 5,
  "freteGratisAcima": 299,
  "rotulos": {
    "cor": "Cor",
    "tamanho": "Modelo"
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
    "id": "capinhas",
    "nome": "Capinhas",
    "chamada": "Proteção sem perder o estilo",
    "desenho": "celular",
    "cor": "#5B3B8C",
    "foto": "https://images.pexels.com/photos/374117/pexels-photo-374117.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "carregadores",
    "nome": "Carregadores",
    "chamada": "Carga rápida para o dia a dia",
    "desenho": "caixa",
    "cor": "#F2F2EE",
    "foto": "https://images.pexels.com/photos/4097206/pexels-photo-4097206.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "fones",
    "nome": "Fones",
    "chamada": "Som bom em qualquer lugar",
    "desenho": "fone",
    "cor": "#1D1F23",
    "foto": "https://images.pexels.com/photos/7417547/pexels-photo-7417547.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "peliculas",
    "nome": "Películas",
    "chamada": "Tela protegida contra riscos",
    "desenho": "celular",
    "cor": "#9AA1A9",
    "foto": "https://images.pexels.com/photos/8947766/pexels-photo-8947766.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CAPI-ANTI",
    "nome": "Capinha anti-impacto",
    "marca": "Conecta",
    "cat": "capinhas",
    "preco": 49.9,
    "de": 69.9,
    "desenho": "celular",
    "destaque": true,
    "desc": "Capinha anti-impacto pensada para proteger o celular nas quedas do dia a dia. Tem cantos reforçados, borda elevada sobre a câmera e a tela e botões com bom toque. Informe o modelo do seu aparelho no WhatsApp para garantir o encaixe.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Transparente",
        "#D7E3EA"
      ],
      [
        "Roxo",
        "#5B3B8C"
      ]
    ],
    "tamanhos": [
      "iPhone 15",
      "iPhone 14",
      "Galaxy S24",
      "Galaxy A55",
      "Moto G84"
    ],
    "estoque": {
      "Preto|iPhone 15": 5,
      "Preto|iPhone 14": 2,
      "Preto|Galaxy S24": 2,
      "Preto|Galaxy A55": 5,
      "Preto|Moto G84": 1,
      "Transparente|iPhone 15": 6,
      "Transparente|iPhone 14": 5,
      "Transparente|Galaxy S24": 9,
      "Transparente|Galaxy A55": 1,
      "Transparente|Moto G84": 5,
      "Roxo|iPhone 15": 7,
      "Roxo|iPhone 14": 7,
      "Roxo|Moto G84": 4
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Preto · iPhone 15"
      }
    ],
    "composicao": "TPU flexível com cantos reforçados",
    "fotos": [
      "https://images.pexels.com/photos/18403791/pexels-photo-18403791.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/7742554/pexels-photo-7742554.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "CAPI-DE-SILI",
    "nome": "Capinha de silicone aveludada",
    "marca": "Conecta",
    "cat": "capinhas",
    "preco": 59.9,
    "desenho": "celular",
    "destaque": true,
    "desc": "Capinha de silicone com toque aveludado, que dá firmeza na mão e não escorrega. O interior em microfibra ajuda a evitar riscos na traseira do aparelho. Combina com a película de vidro 3D para uma proteção completa.",
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
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "iPhone 15",
      "iPhone 14",
      "Galaxy S24",
      "Galaxy A55",
      "Moto G84"
    ],
    "estoque": {
      "Rosa|iPhone 15": 2,
      "Rosa|iPhone 14": 1,
      "Rosa|Galaxy S24": 9,
      "Rosa|Galaxy A55": 8,
      "Rosa|Moto G84": 7,
      "Azul|iPhone 15": 2,
      "Azul|iPhone 14": 7,
      "Azul|Moto G84": 2,
      "Preto|iPhone 15": 8,
      "Preto|iPhone 14": 8,
      "Preto|Galaxy A55": 2,
      "Preto|Moto G84": 9
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Rosa · iPhone 15"
      }
    ],
    "selo": "NOVO",
    "composicao": "Silicone com interior em microfibra",
    "fotos": [
      "https://images.pexels.com/photos/9558940/pexels-photo-9558940.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/7742552/pexels-photo-7742552.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "CARR-TURB-25",
    "nome": "Carregador turbo 25 W",
    "marca": "Conecta",
    "cat": "carregadores",
    "preco": 89.9,
    "de": 119.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Carregador turbo de 25 W para recarregar o celular em menos tempo nos aparelhos compatíveis com carga rápida. Tem saída USB-C e proteção contra sobrecarga e superaquecimento. Ideal para usar junto com o cabo USB-C reforçado de 2 m.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "USB-C"
    ],
    "estoque": {
      "Branco|USB-C": 7
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Branco · USB-C"
      }
    ],
    "composicao": "Fonte 25 W, saída USB-C, bivolt",
    "fotos": [
      "https://images.pexels.com/photos/4097206/pexels-photo-4097206.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/3921630/pexels-photo-3921630.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "CABO-USB--REFO",
    "nome": "Cabo USB-C reforçado 2 m",
    "marca": "Conecta",
    "cat": "carregadores",
    "preco": 39.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Cabo USB-C de 2 m com revestimento reforçado, que dá alcance para usar o celular carregando no sofá ou na cama. As pontas têm proteção extra contra dobras, onde os cabos comuns costumam quebrar. Funciona com carregadores turbo compatíveis.",
    "cores": [
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
      "Único"
    ],
    "estoque": {
      "Branco|Único": 5,
      "Preto|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco"
      }
    ],
    "composicao": "Cabo USB-C 2 m com revestimento trançado",
    "fotos": [
      "https://images.pexels.com/photos/3921711/pexels-photo-3921711.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/4195332/pexels-photo-4195332.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "FONE-BLUE-COM",
    "nome": "Fone bluetooth com estojo",
    "marca": "Conecta",
    "cat": "fones",
    "preco": 149.9,
    "de": 199.9,
    "desenho": "fone",
    "destaque": true,
    "desc": "Fone bluetooth sem fio com estojo de carregamento, para ouvir música e atender ligações sem cabo enrolando. O estojo recarrega os fones várias vezes ao longo do dia e cabe no bolso. Uma boa opção de presente para quem vive no celular.",
    "cores": [
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
      "Único"
    ],
    "estoque": {
      "Branco|Único": 3,
      "Preto|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Branco"
      }
    ],
    "composicao": "Bluetooth, estojo com bateria recarregável",
    "fotos": [
      "https://images.pexels.com/photos/7417547/pexels-photo-7417547.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/8380433/pexels-photo-8380433.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "FONE-COM-FIO",
    "nome": "Fone com fio P2",
    "marca": "Conecta",
    "cat": "fones",
    "preco": 29.9,
    "desenho": "fone",
    "destaque": false,
    "desc": "Fone com fio e conector P2, simples e prático para quem não quer se preocupar com bateria. Tem microfone para chamadas e cabo leve que não pesa no ouvido. Bom para deixar na mochila como reserva.",
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
      "Preto|Único": 2
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Recife, PE",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Preto"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ],
    "composicao": "Conector P2 3,5 mm, cabo 1,2 m com microfone",
    "fotos": [
      "https://images.pexels.com/photos/6251/pexels-photo-6251.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/9781032/pexels-photo-9781032.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "PELI-DE-VIDR",
    "nome": "Película de vidro 3D",
    "marca": "Conecta",
    "cat": "peliculas",
    "preco": 29.9,
    "de": 39.9,
    "desenho": "celular",
    "destaque": false,
    "desc": "Película de vidro 3D que cobre a tela inteira, inclusive as bordas curvas, e ajuda a proteger contra riscos e pequenos impactos. Mantém o toque sensível e a imagem nítida. Aplicamos na hora na loja, sem bolhas.",
    "cores": [
      [
        "Transparente",
        "#D7E3EA"
      ]
    ],
    "tamanhos": [
      "iPhone 15",
      "iPhone 14",
      "Galaxy S24",
      "Galaxy A55",
      "Moto G84"
    ],
    "estoque": {
      "Transparente|iPhone 15": 5
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Transparente · iPhone 15"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Transparente · iPhone 15"
      }
    ],
    "composicao": "Vidro temperado 9H com bordas 3D",
    "fotos": [
      "https://images.pexels.com/photos/30909364/pexels-photo-30909364.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/8947766/pexels-photo-8947766.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "PELI-DE-PRIV",
    "nome": "Película de privacidade",
    "marca": "Conecta",
    "cat": "peliculas",
    "preco": 49.9,
    "desenho": "celular",
    "destaque": false,
    "desc": "Película de privacidade que escurece a tela para quem olha de lado, deixando suas mensagens e senhas longe de olhares curiosos. Para quem está de frente, a imagem segue nítida. Ideal para usar no ônibus, no metrô e no trabalho.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ]
    ],
    "tamanhos": [
      "iPhone 15",
      "iPhone 14",
      "Galaxy S24",
      "Galaxy A55",
      "Moto G84"
    ],
    "estoque": {
      "Preto|iPhone 15": 3,
      "Preto|Galaxy S24": 1,
      "Preto|Galaxy A55": 4,
      "Preto|Moto G84": 9
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto · iPhone 15"
      }
    ],
    "composicao": "Vidro temperado com filtro de privacidade",
    "fotos": [
      "https://images.pexels.com/photos/27522927/pexels-photo-27522927.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/8947493/pexels-photo-8947493.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
