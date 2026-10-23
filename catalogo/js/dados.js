/* =====================================================================
   Nour Catálogo · dados da loja
   Este é o único arquivo que precisa mudar para cada cliente.
   Preços em reais, com ponto decimal (ex.: 89.9 = R$ 89,90).
   ===================================================================== */

window.LOJA = {
  nome: 'Ateliê Exemplo',
  slogan: 'Moda feminina com caimento de verdade. Peças novas toda semana.',
  cidade: 'Goiânia · GO',
  endereco: 'Rua dos Exemplos, 123 · Setor Marista',
  whatsapp: '5562999999999',          // só números, com 55 + DDD
  telefone: '(62) 99999-9999',
  email: 'contato@atelieexemplo.com.br',
  instagram: 'atelieexemplo',
  fixo: '(62) 3333-0000',             // telefone fixo no rodapé; vazio = esconde
  sobre: 'O Ateliê Exemplo nasceu para vestir a mulher real: peças com caimento testado, tecido de qualidade e atendimento de verdade pelo WhatsApp.',
  // 0 = domingo ... 6 = sábado (mesmo formato do Cardápio)
  horarios: { 0: [], 1: [['09:00', '18:00']], 2: [['09:00', '18:00']], 3: [['09:00', '18:00']], 4: [['09:00', '18:00']], 5: [['09:00', '18:00']], 6: [['09:00', '13:00']] },
  logo: '',                           // caminho ou link da imagem; vazio = iniciais

  // Mesmo formato de paleta dos modelos do Nour Bio Site:
  // p1 e p2 = cores principais, p3 = destaque, on3 = texto sobre o destaque
  cores: { p1: '#8C2A5B', p2: '#D0567F', p3: '#F6D365', on3: '#3A2600' },
  tema: 'auto',                       // 'auto' segue o celular do cliente; 'claro' ou 'escuro' fixa

  // Faixa rotativa no topo: até 3 frases curtas. Lista vazia esconde a faixa.
  faixa: ['Novas peças toda semana', 'Frete grátis para todo o Brasil acima de R$ 299', 'Desconto no Pix à vista'],

  // Banners do topo: arte pronta em imagem (como nas lojas de referência), trocando sozinhos a cada 6 s.
  // imagem: 1920 × 700 px · imagemCelular: 800 × 1000 px (opcional) · link: '#c-categoria' ou outro endereço.
  // Sem banners em imagem, a página monta o banner abaixo com as cores da loja.
  banners: [
    // { imagem: 'img/banner-colecao.jpg', imagemCelular: 'img/banner-colecao-celular.jpg', link: '#c-vestidos', alt: 'Nova coleção da estação' }
  ],
  banner: {
    selo: 'Lançamentos',
    titulo: 'Nova coleção da estação',
    texto: 'Elegância para todos os momentos, do trabalho ao fim de semana.',
    botao: 'Comprar agora',
    categoria: 'vestidos',            // categoria aberta pelo botão; vazio = todos os produtos
    imagem: ''                        // foto do banner; vazio = desenhos das peças
  },

  beneficios: [
    ['envio', 'Enviamos para todo o Brasil', 'Correios e transportadoras'],
    ['pix', 'Desconto no Pix', 'À vista, direto no WhatsApp'],
    ['seguro', 'Compra segura', 'Atendimento de pessoa real'],
    ['troca', 'Primeira troca grátis', 'Em até 7 dias']
  ],

  categoriasTitulo: ['Compre por categoria', 'Escolha o que combina com você'],

  // Cupons de demonstração (com a loja ligada ao banco, os cupons vêm do painel).
  // tipo: 'pct' (porcentagem), 'valor' (reais) ou 'frete' (frete grátis). minimo: valor mínimo da compra.
  cupons: [{ codigo: 'BEMVINDA10', tipo: 'pct', valor: 10, minimo: 100 }, { codigo: 'FRETEGRATIS', tipo: 'frete', valor: 0, minimo: 150 }],

  descontoPix: 5,                     // % de desconto no Pix; 0 = sem desconto
  parcelas: 5,                        // parcelas sem juros mostradas no produto; 0 = esconde
  freteGratisAcima: 299,              // 0 = não mostra
  rotulos: { cor: 'Cor', tamanho: 'Tamanho' },   // ex.: suplementos usam 'Sabor' e 'Peso'
  tabelaMedidas: [
    ['Tam.', 'Busto', 'Cintura', 'Quadril'],
    ['PP', '80', '62', '88'], ['P', '84', '66', '92'], ['M', '90', '72', '98'], ['G', '96', '78', '104'], ['GG', '102', '84', '110']
  ],

  entrega: [
    ['correios', 'Envio pelos Correios', 'Frete combinado pelo CEP'],
    ['retirada', 'Retirar na loja', 'Sem custo'],
    ['motoboy', 'Motoboy na cidade', 'Combinado no WhatsApp']
  ],
  pagamentos: ['Pix', 'Cartão de crédito', 'Link de pagamento'],

  // Vitrine de ofertas. O título é livre: 'Ofertas da semana', 'Promoção', 'Outlet', 'Queima de estoque'...
  // Entram os produtos com preço "de" maior que o preço atual ou com oferta: true.
  ofertas: { ativo: true, titulo: 'Ofertas da semana', selo: 'Só esta semana', texto: 'Peças selecionadas com até 30% off.' },

  // Cadastro de novidades no fim da página (e-mail marketing) e grupo de promoções no WhatsApp.
  // cadastro: endereço que recebe o contato (lista de e-mail marketing da loja). Vazio = o contato segue pelo WhatsApp.
  novidades: { ativo: true, titulo: 'Receba as últimas novidades', texto: 'Seja a primeira a saber de lançamentos e promoções.', grupoWhatsapp: 'https://chat.whatsapp.com/EXEMPLO', cadastro: '' },

  lojaVerificada: true,
  // Avaliações da loja (de fora dos produtos). origem: 'whatsapp', 'instagram', 'google' ou 'loja'.
  avaliacoes: [
    { nome: 'Rafaela M.', cidade: 'São Paulo, SP', nota: 5, quando: 'há 4 semanas', origem: 'whatsapp', texto: 'Chegou super bem embalado e com bilhetinho. Tecido maravilhoso.' },
    { nome: 'Bianca A.', cidade: 'Rio de Janeiro, RJ', nota: 5, quando: 'há 1 mês', origem: 'instagram', texto: 'Comprei o conjunto e economizei bastante. Entrega rápida para o interior.' },
    { nome: 'Larissa P.', cidade: 'Belo Horizonte, MG', nota: 5, quando: 'há 1 mês', origem: 'google', texto: 'Atendimento nota mil pelo WhatsApp, me ajudaram a escolher o tamanho certo.' }
  ],

  cookies: true,                      // mostra o aviso de cookies (LGPD)
  links: { termos: '', privacidade: '' },   // links das páginas da loja; vazio = esconde
  // White label: quem aparece em "Feito por" no rodapé. Parceiro coloca o nome e a logo dele; sem isso, fica Nour.
  parceiro: { nome: 'Nour', logo: '', link: '' }
};

/* Desenhos disponíveis quando o produto ainda não tem foto:
   camiseta, blusa, vestido, calca, saia, casaco, short, regata, moletom, tenis, sandalia, bolsa, bone, pote, garrafa,
   oculos, relogio, anel, colar, perfume, batom, celular, fone, racao, bola, ferramenta, tinta, pneu, flor, vinho,
   caderno, sofa, botijao, caixa */

/* chamada: frase curta que aparece no card da categoria e no topo da página dela */
window.CATEGORIAS = [
  { id: 'blusas', nome: 'Blusas', chamada: 'Leves para o dia a dia', desenho: 'blusa', cor: '#2F6B4F' },
  { id: 'vestidos', nome: 'Vestidos', chamada: 'Para todas as ocasiões', desenho: 'vestido', cor: '#9AA1A9' },
  { id: 'calcas-saias', nome: 'Calças e saias', chamada: 'Cintura alta e caimento perfeito', desenho: 'calca', cor: '#1D1F23' },
  { id: 'casacos', nome: 'Casacos', chamada: 'Alfaiataria que dura', desenho: 'casaco', cor: '#C9AE8C' },
  { id: 'acessorios', nome: 'Acessórios', chamada: 'O toque final do look', desenho: 'bolsa', cor: '#6E1F33' }
];

/* Cada produto:
   cores: [nome, hex] · tamanhos: lista · estoque: { 'Cor|Tamanho': quantidade }
   (combinação fora do estoque = esgotada). fotos: ['link1', 'link2'] — a 2ª aparece ao passar o mouse.
   sku: código base; o código de cada variação é SKU-COR-TAMANHO.
   de: preço antigo (riscado). destaque: aparece em "Mais vendidos". */
window.PRODUTOS = [
  { id: 'b1', sku: 'BLU-BASICA', nome: 'Blusa básica manga curta', marca: 'Linha Essencial', cat: 'blusas', preco: 89.9, de: 119.9, desenho: 'blusa', destaque: true,
    desc: 'Malha de viscose com elastano, toque gelado e caimento leve. Modelagem reta.', composicao: '95% viscose, 5% elastano',
    cores: [['Verde', '#2F6B4F'], ['Bege', '#D8C3A5'], ['Preto', '#1D1F23']], tamanhos: ['PP', 'P', 'M', 'G', 'GG'],
    estoque: { 'Verde|P': 4, 'Verde|M': 6, 'Verde|G': 2, 'Bege|PP': 1, 'Bege|P': 3, 'Bege|M': 5, 'Bege|G': 4, 'Bege|GG': 2, 'Preto|P': 7, 'Preto|M': 8, 'Preto|G': 6, 'Preto|GG': 3 },
    avaliacoes: [{ nome: 'Camila R.', nota: 5, texto: 'Tecido muito gostoso e não amassa. Já comprei nas três cores.', variacao: 'Verde · M', quando: 'há 2 semanas' }, { nome: 'Fernanda S.', nota: 5, texto: 'Serviu certinho seguindo a tabela de medidas.', variacao: 'Preto · P', quando: 'há 2 semanas' }] },
  { id: 'v1', sku: 'VES-TIGRADO', nome: 'Vestido tigrado ombro único', marca: 'Linha Festa', cat: 'vestidos', preco: 99.9, de: 139.9, desenho: 'vestido', destaque: true, selo: 'NOVO',
    desc: 'Vestido midi de ombro único com estampa tigrada e fenda lateral.', composicao: '100% poliéster',
    cores: [['Cinza', '#9AA1A9'], ['Bege', '#D8C3A5']], tamanhos: ['P', 'M', 'G'],
    estoque: { 'Cinza|P': 2, 'Cinza|M': 3, 'Cinza|G': 1, 'Bege|M': 2 },
    avaliacoes: [{ nome: 'Juliana P.', nota: 5, texto: 'Usei num casamento e recebi muito elogio. Chegou em 3 dias.', variacao: 'Cinza · M', quando: 'há 2 semanas' }] },
  { id: 'c1', sku: 'CAL-LARGA', nome: 'Calça larga preta', marca: 'Linha Essencial', cat: 'calcas-saias', preco: 79.9, de: 109.9, desenho: 'calca', destaque: true,
    desc: 'Calça pantalona de cintura alta com elástico atrás e bolsos laterais.', composicao: '96% poliéster, 4% elastano',
    cores: [['Preto', '#1D1F23']], tamanhos: ['PP', 'P', 'M', 'G', 'GG'],
    estoque: { 'Preto|PP': 2, 'Preto|P': 5, 'Preto|M': 9, 'Preto|G': 4 },
    avaliacoes: [{ nome: 'Patrícia L.', nota: 4, texto: 'Muito bonita. O comprimento ficou um pouco grande para mim, que tenho 1,58.', variacao: 'Preto · P', quando: 'há 2 semanas' }] },
  { id: 'b2', sku: 'BLU-LISTRADA', nome: 'Blusa listrada com bolso', marca: 'Linha Casual', cat: 'blusas', preco: 159.9, de: 199.9, desenho: 'blusa', destaque: true,
    desc: 'Tricô leve listrado com bolso aplicado e gola careca.', composicao: '70% algodão, 30% poliamida',
    cores: [['Vinho', '#6E1F33'], ['Branco', '#F2F2EE']], tamanhos: ['P', 'M', 'G'],
    estoque: { 'Vinho|P': 3, 'Vinho|M': 2, 'Branco|M': 4, 'Branco|G': 1 },
    avaliacoes: [{ nome: 'Aline G.', nota: 5, texto: 'Qualidade excelente, igual às fotos.', variacao: 'Vinho · M', quando: 'há 2 semanas' }] },
  { id: 'v2', sku: 'VES-LINHO', nome: 'Vestido midi de linho', marca: 'Linha Festa', cat: 'vestidos', preco: 189.9, desenho: 'vestido', destaque: true,
    desc: 'Linho com viscose, alças finas reguláveis e amarração nas costas.', composicao: '55% linho, 45% viscose',
    cores: [['Bege', '#D8C3A5'], ['Verde', '#2F6B4F']], tamanhos: ['PP', 'P', 'M', 'G'],
    estoque: { 'Bege|PP': 1, 'Bege|P': 3, 'Bege|M': 2, 'Verde|P': 2, 'Verde|M': 1 },
    avaliacoes: [{ nome: 'Mariana C.', nota: 5, texto: 'O linho é de ótima qualidade. Atendimento pelo WhatsApp foi rápido.', variacao: 'Bege · P', quando: 'há 2 semanas' }] },
  { id: 'k1', sku: 'CAS-ALFAIATARIA', nome: 'Casaco de alfaiataria', marca: 'Linha Inverno', cat: 'casacos', preco: 249.9, de: 299.9, desenho: 'casaco',
    desc: 'Blazer alongado com forro, ombreira leve e dois botões.', composicao: '65% poliéster, 35% viscose',
    cores: [['Bege', '#C9AE8C'], ['Preto', '#1D1F23']], tamanhos: ['P', 'M', 'G'],
    estoque: { 'Bege|P': 2, 'Bege|M': 2, 'Preto|M': 3, 'Preto|G': 2 },
    avaliacoes: [{ nome: 'Renata F.', nota: 5, texto: 'Caimento perfeito, parece de loja de shopping.', variacao: 'Preto · M', quando: 'há 2 semanas' }] },
  { id: 's1', sku: 'SAI-PLISSADA', nome: 'Saia midi plissada', marca: 'Linha Casual', cat: 'calcas-saias', preco: 119.9, desenho: 'saia',
    desc: 'Saia plissada com cós de elástico e forro curto.', composicao: '100% poliéster',
    cores: [['Rosa', '#E58FAE'], ['Preto', '#1D1F23']], tamanhos: ['P', 'M', 'G'],
    estoque: { 'Rosa|P': 3, 'Rosa|M': 3, 'Preto|M': 2 },
    avaliacoes: [] },
  { id: 'b3', sku: 'BLU-OMBRO', nome: 'Blusa ombro a ombro', marca: 'Linha Casual', cat: 'blusas', preco: 69.9, de: 89.9, desenho: 'blusa',
    desc: 'Blusa ciganinha com elástico no decote e mangas bufantes.', composicao: '100% viscose',
    cores: [['Branco', '#F2F2EE'], ['Rosa', '#E58FAE']], tamanhos: ['P', 'M', 'G'],
    estoque: {},
    avaliacoes: [{ nome: 'Bruna A.', nota: 4, texto: 'Linda, só acho que podia ter mais cores.', variacao: 'Branco · P', quando: 'há 2 semanas' }] },
  { id: 'a1', sku: 'BOL-TIRACOLO', nome: 'Bolsa tiracolo matelassê', marca: 'Acessórios', cat: 'acessorios', preco: 139.9, de: 169.9, desenho: 'bolsa', selo: 'ÚLTIMAS',
    desc: 'Bolsa pequena em matelassê com corrente dourada removível.', composicao: 'Material sintético',
    cores: [['Vinho', '#6E1F33'], ['Preto', '#1D1F23']], tamanhos: ['Único'],
    estoque: { 'Vinho|Único': 1, 'Preto|Único': 2 },
    avaliacoes: [{ nome: 'Larissa M.', nota: 5, texto: 'Acabamento impecável.', variacao: 'Preto', quando: 'há 2 semanas' }] }
];
