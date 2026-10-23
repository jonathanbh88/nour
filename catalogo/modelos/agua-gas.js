/* =====================================================================
   Nour Catálogo · modelo pronto: Água e gás
   Baseado no modelo "agua" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Gás & Água Exemplo",
  "slogan": "Acabou o gás ou a água? Chama no WhatsApp que a gente leva rapidinho.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Entregamos gás de cozinha e água mineral no bairro, com botijões dentro da validade e lacre conferido. Peça pelo WhatsApp, combine o pagamento e receba em casa. Atendemos também sábado e domingo.",
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
    "p1": "#0B5CAD",
    "p2": "#F41007",
    "p3": "#DBC200",
    "on3": "#1A1800"
  },
  "tema": "auto",
  "faixa": [
    "Entrega em até 40 minutos",
    "Pix ou cartão na entrega",
    "Aberto sábado e domingo"
  ],
  "banners": [],
  "banner": {
    "selo": "Entrega rápida",
    "titulo": "Gás e água sem sair de casa",
    "texto": "Mande um WhatsApp, a gente leva o botijão ou o galão até a sua porta.",
    "botao": "Pedir pelo WhatsApp",
    "categoria": "gas",
    "imagem": "https://images.pexels.com/photos/12203654/pexels-photo-12203654.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/12203654/pexels-photo-12203654.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "O que você precisa hoje?",
    "Gás, água e acessórios com entrega no bairro"
  ],
  "descontoPix": 5,
  "parcelas": 5,
  "freteGratisAcima": 0,
  "rotulos": {
    "cor": "Tipo",
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
    "id": "gas",
    "nome": "Gás de cozinha",
    "chamada": "Botijão lacrado, entregue na hora",
    "desenho": "botijao",
    "cor": "#F41007",
    "foto": "https://images.pexels.com/photos/35382734/pexels-photo-35382734.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "agua",
    "nome": "Água mineral",
    "chamada": "Água fresca para a família toda",
    "desenho": "garrafa",
    "cor": "#0B5CAD",
    "foto": "https://images.pexels.com/photos/10376368/pexels-photo-10376368.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "acessorios",
    "nome": "Acessórios",
    "chamada": "Instalação mais segura e prática",
    "desenho": "caixa",
    "cor": "#3A3F46",
    "foto": "https://images.pexels.com/photos/5532838/pexels-photo-5532838.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "GAS-DE-COZI",
    "nome": "Gás de cozinha P13 (troca)",
    "marca": "Exemplo",
    "cat": "gas",
    "preco": 119.9,
    "desenho": "botijao",
    "destaque": true,
    "desc": "Troca do botijão vazio por um cheio, sem complicação. O entregador leva o P13 lacrado e confere a instalação na hora, se você quiser. É só deixar o vazio separado e pedir pelo WhatsApp.",
    "cores": [
      [
        "Vermelho",
        "#C62A2A"
      ]
    ],
    "tamanhos": [
      "Único"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas.",
        "quando": "há 3 semanas",
        "variacao": "Vermelho"
      },
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Vermelho"
      }
    ],
    "composicao": "Botijão P13 com 13 kg de GLP, lacre de fábrica",
    "fotos": [
      "https://images.pexels.com/photos/35382734/pexels-photo-35382734.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/3722212/pexels-photo-3722212.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "GAS-P13-COM",
    "nome": "Gás P13 com botijão",
    "marca": "Exemplo",
    "cat": "gas",
    "preco": 329.9,
    "desenho": "botijao",
    "destaque": true,
    "desc": "Para quem ainda não tem botijão ou precisa de um reserva. Você leva o vasilhame P13 novo e já cheio, pronto para usar. Ideal para mudança, casa nova ou para não ficar sem gás no meio do almoço.",
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
      "Vermelho|Único": 1
    },
    "avaliacoes": [
      {
        "nome": "Juliana P.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Vermelho"
      },
      {
        "nome": "Camila R.",
        "cidade": "Goiânia, GO",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Vermelho"
      }
    ],
    "selo": "NOVO",
    "composicao": "Botijão P13 novo com 13 kg de GLP",
    "fotos": [
      "https://images.pexels.com/photos/35382734/pexels-photo-35382734.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/13772355/pexels-photo-13772355.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "AGUA-MINE-GALA",
    "nome": "Água mineral galão 20 L (troca)",
    "marca": "Exemplo",
    "cat": "agua",
    "preco": 14.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Galão de 20 L de água mineral na troca pelo seu vazio. Entregamos com lacre e dentro da validade, direto na sua cozinha. Prático para quem quer água sempre à mão sem carregar peso.",
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
      "Azul|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Azul"
      }
    ],
    "composicao": "Galão retornável 20 L, água mineral natural",
    "fotos": [
      "https://images.pexels.com/photos/11860562/pexels-photo-11860562.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/17217504/pexels-photo-17217504.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "GALA-20-L",
    "nome": "Galão 20 L com vasilhame",
    "marca": "Exemplo",
    "cat": "agua",
    "preco": 39.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Galão de 20 L já cheio, com vasilhame incluso. Bom para quem está começando a usar galão ou quer ter um extra em casa ou no escritório. Nas próximas vezes, é só pedir a troca.",
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
      "Azul|Único": 3
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul"
      }
    ],
    "composicao": "Vasilhame 20 L em policarbonato com água mineral",
    "fotos": [
      "https://images.pexels.com/photos/6642422/pexels-photo-6642422.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/2101147/pexels-photo-2101147.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "FARD-AGUA-500",
    "nome": "Fardo água 500 ml (12 un.)",
    "marca": "Exemplo",
    "cat": "agua",
    "preco": 19.9,
    "de": 24.9,
    "desenho": "garrafa",
    "destaque": true,
    "desc": "Doze garrafinhas de 500 ml para levar na bolsa, na marmita ou no carro. Formato prático para academia, escola e trabalho. Entregamos o fardo fechado, fácil de guardar na geladeira.",
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
      "Azul|Único": 2
    },
    "avaliacoes": [
      {
        "nome": "Mariana C.",
        "cidade": "Goiânia, GO",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Azul"
      },
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul"
      }
    ],
    "composicao": "Fardo com 12 garrafas PET de 500 ml",
    "fotos": [
      "https://images.pexels.com/photos/15524063/pexels-photo-15524063.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/10376368/pexels-photo-10376368.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "REGI-DE-GAS",
    "nome": "Registro de gás com mangueira",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 59.9,
    "de": 69.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Kit com registro e mangueira para trocar a instalação do fogão com mais segurança. Peças com selo do Inmetro e fácil encaixe no botijão P13. Lembre de verificar a validade da mangueira impressa no corpo dela.",
    "cores": [
      [
        "Cinza",
        "#9AA1A9"
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
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Cinza"
      }
    ],
    "composicao": "Registro em zamac com mangueira PVC 1,2 m, padrão Inmetro",
    "fotos": [
      "https://images.pexels.com/photos/16679542/pexels-photo-16679542.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/5532838/pexels-photo-5532838.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "SUPO-PARA-GALA",
    "nome": "Suporte para galão",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 29.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Suporte firme para deixar o galão de 20 L em pé e servir sem esforço. Ocupa pouco espaço na bancada ou no chão da cozinha. Combina com a bomba elétrica para quem prefere tirar o galão do chão.",
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
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Branco"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Branco"
      }
    ],
    "composicao": "Suporte em plástico resistente para galão 20 L",
    "fotos": [
      "https://images.pexels.com/photos/17217504/pexels-photo-17217504.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "BOMB-ELET-PARA",
    "nome": "Bomba elétrica para galão",
    "marca": "Exemplo",
    "cat": "acessorios",
    "preco": 49.9,
    "de": 59.9,
    "desenho": "caixa",
    "destaque": false,
    "desc": "Bomba elétrica que encaixa no gargalo do galão e serve água com um toque. Recarrega via USB e dispensa virar o galão pesado. Prática para cozinha, escritório e para quem mora sozinho.",
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
      "Preto|Único": 5
    },
    "avaliacoes": [
      {
        "nome": "Rafael T.",
        "cidade": "Curitiba, PR",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Preto"
      }
    ],
    "composicao": "Bomba em plástico ABS, bateria recarregável via USB",
    "fotos": [
      "https://images.pexels.com/photos/6642422/pexels-photo-6642422.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
