/* =====================================================================
   Nour Catálogo · modelo pronto: Mercadinho
   Baseado no modelo "mercadinho" do Nour Bio Site. Para começar uma loja:
   copie este arquivo para js/dados.js e troque nome, contatos, cores e produtos.
   A explicação de cada campo está no js/dados.js de exemplo.
   ===================================================================== */

window.LOJA = {
  "nome": "Mercadinho Exemplo",
  "slogan": "Hortifrúti fresquinho, carne de qualidade e mercearia com entrega no bairro.",
  "cidade": "Sua cidade · UF",
  "endereco": "Rua do Exemplo, 123 · Centro",
  "whatsapp": "5562999999999",
  "telefone": "(62) 99999-9999",
  "fixo": "",
  "email": "contato@sualoja.com.br",
  "instagram": "sualoja",
  "logo": "",
  "sobre": "Somos o mercadinho da vizinhança: frutas e verduras chegam todo dia e as carnes são cortadas na hora. Monte sua lista pelo WhatsApp e receba as compras em casa, com o cuidado de quem conhece você.",
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
    "p1": "#2B8A3E",
    "p2": "#F08C00",
    "p3": "#FFE066",
    "on3": "#2B2200"
  },
  "tema": "auto",
  "faixa": [
    "Entrega no bairro em até 1 hora",
    "Hortifrúti chega todo dia",
    "Desconto no Pix à vista"
  ],
  "banners": [],
  "banner": {
    "selo": "Ofertas do dia",
    "titulo": "Feira fresca sem sair de casa",
    "texto": "Frutas, verduras, carnes e mercearia com entrega rápida. Monte sua lista pelo WhatsApp.",
    "botao": "Fazer meu pedido",
    "categoria": "hortifruti",
    "imagem": "https://images.pexels.com/photos/35206311/pexels-photo-35206311.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=800",
    "imagemCelular": "https://images.pexels.com/photos/35206311/pexels-photo-35206311.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200"
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
    "Sua feira completa",
    "Escolha por seção e receba tudo em um só pedido"
  ],
  "descontoPix": 5,
  "parcelas": 5,
  "freteGratisAcima": 0,
  "rotulos": {
    "cor": "Tipo",
    "tamanho": "Quantidade"
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
    "id": "hortifruti",
    "nome": "Hortifrúti",
    "chamada": "Escolhido a dedo todo dia",
    "desenho": "flor",
    "cor": "#2F6B4F",
    "foto": "https://images.unsplash.com/photo-1745367228695-a1c7a12df13f?auto=format&fit=crop&w=600&h=600&q=70"
  },
  {
    "id": "carnes",
    "nome": "Carnes e frios",
    "chamada": "Cortadas na hora do seu pedido",
    "desenho": "caixa",
    "cor": "#8C2F1B",
    "foto": "https://images.pexels.com/photos/12884549/pexels-photo-12884549.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "mercearia",
    "nome": "Mercearia",
    "chamada": "O básico da despensa em dia",
    "desenho": "racao",
    "cor": "#F08C00",
    "foto": "https://images.pexels.com/photos/7421198/pexels-photo-7421198.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  },
  {
    "id": "limpeza",
    "nome": "Limpeza",
    "chamada": "Casa cheirosa com menos esforço",
    "desenho": "garrafa",
    "cor": "#2457C5",
    "foto": "https://images.pexels.com/photos/5218014/pexels-photo-5218014.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=600"
  }
];

window.PRODUTOS = [
  {
    "id": "p1",
    "sku": "CEST-DE-FRUT",
    "nome": "Cesta de frutas da estação",
    "marca": "Exemplo",
    "cat": "hortifruti",
    "preco": 39.9,
    "de": 49.9,
    "desenho": "bolsa",
    "destaque": true,
    "desc": "Cesta com frutas da estação escolhidas uma a uma, no ponto certo para a semana. A seleção muda conforme a época, com o que está mais saboroso e com melhor preço. Boa para lanche da família e também como presente.",
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
      "Verde|Único": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Verde"
      }
    ],
    "composicao": "Cesta com cerca de 3 kg de frutas variadas da estação",
    "fotos": [
      "https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p2",
    "sku": "KIT-VERD-ORGA",
    "nome": "Kit verduras orgânicas",
    "marca": "Exemplo",
    "cat": "hortifruti",
    "preco": 24.9,
    "desenho": "flor",
    "destaque": true,
    "desc": "Kit de verduras orgânicas para a salada da semana. Folhas frescas de produtores da região, lavadas e embaladas com cuidado. Pensado para quem quer comer melhor sem perder tempo na feira.",
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
      "Verde|Único": 8
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Verde"
      },
      {
        "nome": "Rafael T.",
        "cidade": "Florianópolis, SC",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Verde"
      }
    ],
    "selo": "NOVO",
    "composicao": "Kit com 5 itens: alfaces, rúcula, couve e cheiro-verde",
    "fotos": [
      "https://images.pexels.com/photos/102123/pexels-photo-102123.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/10850844/pexels-photo-10850844.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p3",
    "sku": "PICA",
    "nome": "Picanha",
    "marca": "Exemplo",
    "cat": "carnes",
    "preco": 79.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Picanha macia com capa de gordura na medida, ideal para o churrasco. Peça inteira ou fatiada em bifes, do jeito que você pedir pelo WhatsApp. Vai bem na brasa, na chapa ou no forno.",
    "cores": [
      [
        "Carne",
        "#8C2F1B"
      ]
    ],
    "tamanhos": [
      "1 kg"
    ],
    "estoque": {
      "Carne|1 kg": 7
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Carne · 1 kg"
      },
      {
        "nome": "Bruno A.",
        "cidade": "Belo Horizonte, MG",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Carne · 1 kg"
      }
    ],
    "composicao": "Peça bovina resfriada, preço por kg",
    "fotos": [
      "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/5892851/pexels-photo-5892851.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p4",
    "sku": "FRAN-INTE",
    "nome": "Frango inteiro",
    "marca": "Exemplo",
    "cat": "carnes",
    "preco": 19.9,
    "desenho": "caixa",
    "destaque": true,
    "desc": "Frango inteiro resfriado, prático para assar no forno ou na churrasqueira. Rende bem para a família e pode ser cortado em partes se você preferir. Uma opção econômica para o almoço de domingo.",
    "cores": [
      [
        "Frango",
        "#E3B04B"
      ]
    ],
    "tamanhos": [
      "1 kg"
    ],
    "estoque": {
      "Frango|1 kg": 1
    },
    "avaliacoes": [
      {
        "nome": "Fernanda S.",
        "cidade": "Brasília, DF",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Frango · 1 kg"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Frango · 1 kg"
      }
    ],
    "composicao": "Frango inteiro resfriado, peça de 2 a 2,5 kg",
    "fotos": [
      "https://images.pexels.com/photos/10842249/pexels-photo-10842249.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/5769384/pexels-photo-5769384.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p5",
    "sku": "ARRO-TIPO-1",
    "nome": "Arroz tipo 1",
    "marca": "Exemplo",
    "cat": "mercearia",
    "preco": 29.9,
    "de": 34.9,
    "desenho": "racao",
    "destaque": true,
    "desc": "Arroz tipo 1 de grãos inteiros e soltinhos depois de cozidos. Rende bem e não empapa, perfeito para o prato do dia a dia. Pacote de 5 kg que garante a despensa por um bom tempo.",
    "cores": [
      [
        "Branco",
        "#F2F2EE"
      ]
    ],
    "tamanhos": [
      "5 kg"
    ],
    "estoque": {},
    "avaliacoes": [
      {
        "nome": "Bruno A.",
        "cidade": "Salvador, BA",
        "nota": 4,
        "texto": "Chegou rápido e muito bem embalado.",
        "quando": "há 1 semana",
        "variacao": "Branco · 5 kg"
      }
    ],
    "composicao": "Pacote 5 kg, arroz branco agulhinha tipo 1",
    "fotos": [
      "https://images.pexels.com/photos/8108145/pexels-photo-8108145.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/8956718/pexels-photo-8956718.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p6",
    "sku": "CAFE-TORR-E",
    "nome": "Café torrado e moído",
    "marca": "Exemplo",
    "cat": "mercearia",
    "preco": 19.9,
    "de": 24.9,
    "desenho": "racao",
    "destaque": false,
    "desc": "Café torrado e moído de sabor encorpado e aroma marcante. Moagem média que funciona bem no coador de pano, de papel e na cafeteira elétrica. Para começar o dia ou receber visita com um cafezinho fresco.",
    "cores": [
      [
        "Marrom",
        "#6B4128"
      ]
    ],
    "tamanhos": [
      "500 g"
    ],
    "estoque": {
      "Marrom|500 g": 8
    },
    "avaliacoes": [
      {
        "nome": "Aline G.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Marrom · 500 g"
      }
    ],
    "composicao": "Pacote a vácuo 500 g, café tradicional",
    "fotos": [
      "https://images.pexels.com/photos/4301516/pexels-photo-4301516.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/30899952/pexels-photo-30899952.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p7",
    "sku": "KIT-LIMP-DA",
    "nome": "Kit limpeza da casa",
    "marca": "Exemplo",
    "cat": "limpeza",
    "preco": 49.9,
    "de": 59.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "Kit com o essencial para deixar a casa limpa e cheirosa. Reúne detergente, desinfetante, água sanitária e multiuso, cada um para uma tarefa. Prático para abastecer o mês ou para quem está montando casa nova.",
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
      "Azul|Único": 6
    },
    "avaliacoes": [
      {
        "nome": "Lucas M.",
        "cidade": "Belo Horizonte, MG",
        "nota": 5,
        "texto": "Entrega dentro do prazo e tudo certinho.",
        "quando": "há 2 meses",
        "variacao": "Azul"
      }
    ],
    "composicao": "Kit com 4 itens: detergente, desinfetante, água sanitária e multiuso",
    "fotos": [
      "https://images.pexels.com/photos/5218014/pexels-photo-5218014.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/28576626/pexels-photo-28576626.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  },
  {
    "id": "p8",
    "sku": "SABA-LIQU",
    "nome": "Sabão líquido",
    "marca": "Exemplo",
    "cat": "limpeza",
    "preco": 29.9,
    "desenho": "garrafa",
    "destaque": false,
    "desc": "Sabão líquido que dissolve fácil e limpa bem na máquina ou no tanque. Fórmula pensada para tirar sujeira do dia a dia e deixar as roupas perfumadas. Rende mais lavagens que o sabão em pó tradicional.",
    "cores": [
      [
        "Azul",
        "#2457C5"
      ]
    ],
    "tamanhos": [
      "3 L"
    ],
    "estoque": {
      "Azul|3 L": 5
    },
    "avaliacoes": [
      {
        "nome": "Patrícia L.",
        "cidade": "São Paulo, SP",
        "nota": 5,
        "texto": "Qualidade muito boa pelo preço. Já quero comprar de novo.",
        "quando": "há 1 mês",
        "variacao": "Azul · 3 L"
      },
      {
        "nome": "Mariana C.",
        "cidade": "Recife, PE",
        "nota": 5,
        "texto": "Produto igual às fotos. Recomendo a loja.",
        "quando": "há 2 semanas",
        "variacao": "Azul · 3 L"
      }
    ],
    "composicao": "Frasco 3 L, lava-roupas líquido",
    "fotos": [
      "https://images.pexels.com/photos/5591578/pexels-photo-5591578.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
      "https://images.pexels.com/photos/5591956/pexels-photo-5591956.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250"
    ]
  }
];
