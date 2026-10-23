/* =====================================================================
   Nour Catálogo · modelo pronto: Ótica
   Baseado no modelo "otica" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Ótica Exemplo",
  "slogan": "Óculos de grau e de sol, lentes e ajustes com atendimento de especialista.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "A Ótica Exemplo tem armações de grau, óculos de sol com proteção UV400, lentes de contato e acessórios. Mande sua receita ou tire dúvidas pelo WhatsApp e receba orientação para escolher o modelo que combina com seu rosto.",
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
    "p1": "#111111",
    "p2": "#B51A00",
    "p3": "#E5E5E5",
    "on3": "#111111"
  },
  "tema": "auto",
  "faixa": [
    "Exame de vista com parceiros",
    "Ajuste e limpeza grátis",
    "Parcele em até 10x"
  ],
  "banners": [],
  "banner": {
    "selo": "Coleção nova",
    "titulo": "Óculos de sol com proteção UV400",
    "texto": "Modelos aviador e quadrado para proteger os olhos com estilo. Tire dúvidas no WhatsApp.",
    "botao": "Ver óculos de sol",
    "categoria": "sol",
    "imagem": "https://images.pexels.com/photos/5766564/pexels-photo-5766564.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/5766564/pexels-photo-5766564.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Escolha seus próximos óculos",
    "Grau, sol, lentes e acessórios"
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
    "id": "sol",
    "nome": "Óculos de sol",
    "chamada": "Olhos protegidos com estilo",
    "desenho": "oculos",
    "cor": "#1D1F23",
    "foto": "https://images.pexels.com/photos/4952482/pexels-photo-4952482.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "grau",
    "nome": "Armações de grau",
    "chamada": "Conforto para usar o dia inteiro",
    "desenho": "oculos",
    "cor": "#7A4A22",
    "foto": "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "lentes",
    "nome": "Lentes de contato",
    "chamada": "Liberdade sem armação",
    "desenho": "caixa",
    "cor": "#2457C5",
    "foto": "https://images.pexels.com/photos/15897969/pexels-photo-15897969.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "acessorios",
    "nome": "Acessórios",
    "chamada": "Cuide bem dos seus óculos",
    "desenho": "caixa",
    "cor": "#9AA1A9",
    "foto": "https://images.pexels.com/photos/5843495/pexels-photo-5843495.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "OCUL-DE-SOL",
    "nome": "Óculos de sol aviador",
    "marca": "Exemplo",
    "cat": "sol",
    "preco": 249.9,
    "de": 299.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Óculos de sol aviador com lentes de proteção UV400, que ajudam a proteger os olhos dos raios UVA e UVB. A armação metálica é leve e as plaquetas ajustáveis deixam o uso confortável. Um clássico que combina com qualquer formato de rosto.",
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
      "Dourado|Único": 3,
      "Preto|Único": 8
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Armação em metal, lentes com proteção UV400",
    "fotos": [
      "https://images.pexels.com/photos/1548027/pexels-photo-1548027.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/735273/pexels-photo-735273.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "OCUL-DE-SOL",
    "nome": "Óculos de sol quadrado",
    "marca": "Exemplo",
    "cat": "sol",
    "preco": 219.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Óculos de sol quadrado com proteção UV400, de visual marcante e atual. A armação em acetato é resistente e tem bom encaixe no rosto. Disponível em preto e tartaruga, vai bem do dia a dia à praia.",
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
      "Preto|Único": 2
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Preto"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ],
    "selo": "NOVO",
    "composicao": "Armação em acetato, lentes com proteção UV400",
    "fotos": [
      "https://images.pexels.com/photos/4952482/pexels-photo-4952482.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/1260284/pexels-photo-1260284.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "ARMA-ACET-REDO",
    "nome": "Armação acetato redonda",
    "marca": "Exemplo",
    "cat": "grau",
    "preco": 289.9,
    "de": 349.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Armação redonda em acetato, com estilo retrô e ótimo encaixe para rostos quadrados e retangulares. O material é resistente e as hastes têm dobradiças reforçadas. Envie sua receita pelo WhatsApp e orientamos a escolha das lentes.",
    "cores": [
      [
        "Tartaruga",
        "#7A4A22"
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
      "Preto|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Tartaruga"
      }
    ],
    "composicao": "Acetato com dobradiças metálicas",
    "fotos": [
      "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/29191795/pexels-photo-29191795.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "ARMA-META-FINA",
    "nome": "Armação metal fina",
    "marca": "Exemplo",
    "cat": "grau",
    "preco": 259.9,
    "desenho": "oculos",
    "destaque": true,
    "desc": "Armação de metal fina e leve, discreta no rosto e confortável para usar o dia inteiro. As plaquetas ajustáveis ajudam a encaixar bem no nariz. Disponível em dourado e prata, combina com o estojo rígido para guardar com segurança.",
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
      "Dourado|Único": 1,
      "Prata|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado"
      },
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Metal leve com plaquetas ajustáveis",
    "fotos": [
      "https://images.pexels.com/photos/13430491/pexels-photo-13430491.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/2530391/pexels-photo-2530391.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "LENT-DE-CONT",
    "nome": "Lente de contato mensal (caixa)",
    "marca": "Exemplo",
    "cat": "lentes",
    "preco": 149.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Caixa de lentes de contato de descarte mensal, para quem quer enxergar bem sem armação no rosto. Vendida mediante receita oftalmológica, com o grau indicado pelo seu médico. Mande a foto da receita no WhatsApp para separarmos a sua.",
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
      "Transparente|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Transparente"
      }
    ],
    "composicao": "Caixa com 6 lentes de descarte mensal",
    "fotos": [
      "https://images.pexels.com/photos/15897969/pexels-photo-15897969.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/16022189/pexels-photo-16022189.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "ESTO-RIGI",
    "nome": "Estojo rígido",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Estojo rígido que protege os óculos contra quedas, pressão na bolsa e riscos. O interior forrado evita atrito nas lentes e o fecho é firme. Cabe óculos de grau e a maioria dos modelos de sol.",
    "cores": [
      [
        "Preto",
        "#1D1F23"
      ],
      [
        "Marrom",
        "#6B4128"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {
      "Preto|Único": 5,
      "Marrom|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Gustavo B.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto"
      }
    ],
    "composicao": "Estojo rígido com forro interno macio",
    "fotos": [
      "https://images.pexels.com/photos/8134428/pexels-photo-8134428.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "CORD-PARA-OCUL",
    "nome": "Cordão para óculos",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 29.9,
    "desenho": "colar",
    "destaque": false,
    "desc": "Cordão para óculos que mantém a armação sempre à mão, sem risco de esquecer ou deixar cair. As ponteiras se ajustam à maioria das hastes. Prático para quem tira e coloca os óculos várias vezes ao dia.",
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
      "Dourado|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Dourado"
      },
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Dourado"
      }
    ],
    "composicao": "Cordão com ponteiras de silicone ajustáveis",
    "fotos": [
      "https://images.pexels.com/photos/5843495/pexels-photo-5843495.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "OCUL-INFA-FLEX",
    "nome": "Óculos infantil flexível",
    "marca": "Exemplo",
    "cat": "grau",
    "preco": 199.9,
    "de": 239.9,
    "desenho": "oculos",
    "destaque": false,
    "desc": "Óculos infantil com armação flexível, que dobra sem quebrar e aguenta a rotina agitada das crianças. É leve no rosto e tem hastes que se ajustam bem atrás da orelha. Envie a receita pelo WhatsApp e ajudamos a escolher o tamanho certo.",
    "cores": [
      [
        "Azul",
        "#2457C5"
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
      "Azul|Único": 5,
      "Rosa|Único": 8
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul"
      }
    ],
    "composicao": "Armação em material flexível e leve",
    "fotos": [
      "https://images.pexels.com/photos/12703/pexels-photo-12703.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
