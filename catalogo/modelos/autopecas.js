/* =====================================================================
   Nour Catálogo · modelo pronto: Autopeças e oficina
   Baseado no modelo "autopecas" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Auto Peças Exemplo",
  "slogan": "Peças, óleo, baterias e pneus com instalação na nossa oficina.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Peças, óleo, baterias e pneus com instalação na nossa oficina. Atendimento de pessoa real pelo WhatsApp.",
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
    "p2": "#D62828",
    "p3": "#F6D365",
    "on3": "#2A2000"
  },
  "tema": "auto",
  "faixa": [
    "Instalação na hora",
    "Garantia em todas as peças",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Revisão em dia",
    "titulo": "Peças com instalação na hora",
    "texto": "Óleo, freios, baterias e pneus com garantia.",
    "botao": "Comprar agora",
    "categoria": "freios",
    "imagem": ""
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
    "Compre por categoria",
    "Encontre o que você procura"
  ],
  "descontoPix": 5,
  "parcelas": 5,
  "freteGratisAcima": 299,
  "rotulos": {
    "cor": "Marca",
    "tamanho": "Aplicação"
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
    "id": "freios",
    "nome": "Freios",
    "chamada": "Pastilhas e discos",
    "desenho": "caixa",
    "cor": "#D62828"
  },
  {
    "id": "oleo",
    "nome": "Óleo e filtros",
    "chamada": "Troca na hora",
    "desenho": "garrafa",
    "cor": "#C9A227"
  },
  {
    "id": "baterias",
    "nome": "Baterias",
    "chamada": "Teste grátis",
    "desenho": "caixa",
    "cor": "#1D1F23"
  },
  {
    "id": "pneus",
    "nome": "Pneus",
    "chamada": "Com alinhamento",
    "desenho": "pneu",
    "cor": "#3A3F46"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "PAST-DE-FREI",
    "nome": "Pastilha de freio dianteira",
    "marca": "Exemplo",
    "cat": "freios",
    "preco": 129.9,
    "de": 159.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Pastilha de freio dianteira da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "Gol/Voyage",
      "Onix",
      "HB20",
      "Uno"
    ],
    "estoque": {
      "Cinza|Gol/Voyage": 6,
      "Cinza|Onix": 7,
      "Cinza|HB20": 4,
      "Cinza|Uno": 3
    },
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Cinza · Gol/Voyage"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Cinza · Gol/Voyage"
      }
    ]
  },
  {
    "id": "p2",
    "sku": "DISC-DE-FREI",
    "nome": "Disco de freio (par)",
    "marca": "Exemplo",
    "cat": "freios",
    "preco": 289.9,
    "desenho": "pneu",
    "destaque": true,
    "desc": "Disco de freio (par) da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
      ]
    ],
    "tamanhos": [
      "Gol/Voyage",
      "Onix",
      "HB20"
    ],
    "estoque": {
      "Cinza|Gol/Voyage": 4,
      "Cinza|Onix": 4,
      "Cinza|HB20": 9
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Cinza · Gol/Voyage"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Cinza · Gol/Voyage"
      }
    ],
    "selo": "NOVO"
  },
  {
    "id": "p3",
    "sku": "OLEO-SINT-5W30",
    "nome": "Óleo sintético 5W30",
    "marca": "Exemplo",
    "cat": "oleo",
    "preco": 49.9,
    "de": 59.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Óleo sintético 5W30 da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Dourado",
        "#C9A227"
      ]
    ],
    "tamanhos": [
      "1 L"
    ],
    "estoque": {
      "Dourado|1 L": 6
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Salvador, BA",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Dourado · 1 L"
      }
    ]
  },
  {
    "id": "p4",
    "sku": "FILT-DE-OLEO",
    "nome": "Filtro de óleo",
    "marca": "Exemplo",
    "cat": "oleo",
    "preco": 29.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Filtro de óleo da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "Gol/Voyage",
      "Onix",
      "HB20",
      "Uno"
    ],
    "estoque": {
      "Azul|Gol/Voyage": 9,
      "Azul|Onix": 8,
      "Azul|HB20": 4,
      "Azul|Uno": 8
    },
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Azul · Gol/Voyage"
      }
    ]
  },
  {
    "id": "p5",
    "sku": "BATE-60-AH",
    "nome": "Bateria 60 Ah",
    "marca": "Exemplo",
    "cat": "baterias",
    "preco": 459.9,
    "de": 529.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Bateria 60 Ah da Exemplo. Troque este texto pela descrição do produto.",
    "cores": [
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
        "nome": "Aline G.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Preto"
      }
    ]
  },
  {
    "id": "p6",
    "sku": "BATE-MOTO-5",
    "nome": "Bateria moto 5 Ah",
    "marca": "Exemplo",
    "cat": "baterias",
    "preco": 189.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Bateria moto 5 Ah da Exemplo. Troque este texto pela descrição do produto.",
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
        "nome": "Juliana P.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Preto"
      }
    ]
  },
  {
    "id": "p7",
    "sku": "PNEU-ARO-14",
    "nome": "Pneu aro 14 175/70",
    "marca": "Exemplo",
    "cat": "pneus",
    "preco": 329.9,
    "de": 379.9,
    "desenho": "pneu",
    "destaque": false,
    "desc": "Pneu aro 14 175/70 da Exemplo. Troque este texto pela descrição do produto.",
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
      "Preto|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Diego F.",
        "cidade": "Curitiba, PR",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Preto"
      }
    ]
  },
  {
    "id": "p8",
    "sku": "PNEU-MOTO-ARO",
    "nome": "Pneu moto aro 18",
    "marca": "Exemplo",
    "cat": "pneus",
    "preco": 219.9,
    "desenho": "pneu",
    "destaque": false,
    "desc": "Pneu moto aro 18 da Exemplo. Troque este texto pela descrição do produto.",
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
      "Preto|Único": 9
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Preto"
      }
    ]
  }
];
