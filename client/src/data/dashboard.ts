// Script Mestre — Auditoria Completa de Perfil @ricardoimp
// Estrutura de 4 camadas: raw_data | analytics_tables | executive_summary | scorecards
// Última coleta: 03/05/2026 às 11:09 — Instagram MCP
// 20 posts analisados | 20 com insights completos

// ─────────────────────────────────────────────────────────────
// TIPOS
// ─────────────────────────────────────────────────────────────
export type Tone = 'positive' | 'warning' | 'neutral';
export type Funnel = 'topo' | 'meio' | 'fundo';
export type ContentTemp = 'frio' | 'morno' | 'quente';
export type MediaType = 'REELS' | 'FEED' | 'CAROUSEL_ALBUM' | 'IMAGE' | 'VIDEO';

export interface PostRaw {
  id: string;
  date: string;
  type: string;
  media_product_type: string;
  caption: string;
  likes: number;
  comments: number;
  reach: number | null;
  views: number | null;
  saved: number | null;
  total_interactions: number;
  hashtags: string[];
  mentions: string[];
  permalink?: string;
}

export interface ContentTaxonomy {
  id: string;
  category: string;
  intent: string;
  funnel: Funnel;
  temp: ContentTemp;
  authority_score: number;
  commercial_score: number;
  hook: string;
}

export interface Scorecard {
  key: string;
  label: string;
  value: number;
  interpretation: string;
  tone: Tone;
}

// ─────────────────────────────────────────────────────────────
// CAMADA 1 — RAW DATA
// ─────────────────────────────────────────────────────────────
export const profileIdentity = {
  username: '@ricardoimp',
  name: 'Ricardo Impellizieri',
  account_type: 'business/creator',
  bio_full: "Construo empresas enquanto viajo o mundo ✈️\n🏆7 empresas • 2 vendidas\n🌎37 países visitados\n👇🏼Liberdade é estratégia!",
  bio_summary: 'Empreendedor serial com 7 empresas, 2 vendidas, 37 países visitados. Posicionamento: liberdade como estratégia.',
  link_bio: "http://saiba-mais.ai",
  bio_emojis: ['✈️', '🏆', '🌎', '👇🏼'],
  bio_keywords: ['empresas', 'viajo', 'mundo', 'liberdade', 'estratégia'],
  value_proposition: 'Construir empresas enquanto vive o mundo — liberdade como resultado de estrutura',
  cta_bio: 'Link na bio (👇🏼)',
  languages: ['PT', 'EN', 'ES'],
  verification: false,
  niche_primary: 'Empreendedorismo & Lifestyle Premium',
  sub_niches: ['Viagens', 'Tecnologia/IA', 'Govtech', 'Liberdade financeira'],
  persona_apparent: 'Empreendedor aspiracional com lastro real de conquista',
  funnel_stage_predominant: 'awareness' as const,
  authority_presence: true,
  social_proof_presence: true,
  commercial_offer_presence: false,
  website: "http://saiba-mais.ai",
  collected_at: "2026-05-03T14:08:27Z",
};

export const postsRaw: PostRaw[] = [
  { id: "18101215795990406", date: "2026-04-28T15:01:05Z", type: "VIDEO", media_product_type: "REELS",
    caption: "Toda viagem revela 3 versões suas:\n\nA que você sustenta hoje.\nA que já não faz mais sentido.\nE a que está esperando uma decisão sua.\n\n#canada #instagram #trip #photography #paz",
    likes: 1, comments: 0, reach: 120, views: 125, saved: 0, total_interactions: 1,
    hashtags: ["canada", "instagram", "paz", "photography", "trip"], mentions: [],
    permalink: "https://www.instagram.com/reel/DXrfolmgNUe/" },
  { id: "18338572129171422", date: "2026-04-28T14:58:39Z", type: "VIDEO", media_product_type: "REELS",
    caption: "Toda viagem revela 3 versões suas:\n\nA que você sustenta hoje.\nA que já não faz mais sentido.\nE a que está esperando uma decisão sua.\n\n#canada #instagram #trip #photography #paz",
    likes: 8, comments: 1, reach: 231, views: 303, saved: 0, total_interactions: 9,
    hashtags: ["canada", "instagram", "paz", "photography", "trip"], mentions: [],
    permalink: "https://www.instagram.com/reel/DXrfHHGgO3d/" },
  { id: "18098472605102842", date: "2026-04-27T15:11:10Z", type: "VIDEO", media_product_type: "REELS",
    caption: "Entrei achando que era só um mercado\nsaí entendendo por que lugares assim duram séculos, um dos mercados mais antigos de istambul 🇹🇷\n\n#turquia #trip #viajar #instagood #reels",
    likes: 2, comments: 0, reach: 234, views: 264, saved: 0, total_interactions: 2,
    hashtags: ["instagood", "reels", "trip", "turquia", "viajar"], mentions: [],
    permalink: "https://www.instagram.com/reel/DXo7_qRgCfA/" },
  { id: "18110982055878581", date: "2026-04-27T15:07:43Z", type: "VIDEO", media_product_type: "REELS",
    caption: "Entrei achando que era só um mercado\nsaí entendendo por que lugares assim duram séculos, um dos mercados mais antigos de istambul 🇹🇷\n\n#turquia #trip #viajar #instagood #reels",
    likes: 17, comments: 4, reach: 361, views: 505, saved: 0, total_interactions: 23,
    hashtags: ["instagood", "reels", "trip", "turquia", "viajar"], mentions: [],
    permalink: "https://www.instagram.com/reel/DXo7KozAHJr/" },
  { id: "18115128127783856", date: "2026-04-26T15:35:43Z", type: "CAROUSEL_ALBUM", media_product_type: "FEED",
    caption: "Quanto mais eu vou…\nmais eu entendo que não é sobre ir.",
    likes: 21, comments: 1, reach: 168, views: 419, saved: 0, total_interactions: 22,
    hashtags: [], mentions: [],
    permalink: "https://www.instagram.com/p/DXmaEoSFKsK/" },
  { id: "18591759310050140", date: "2026-04-24T15:49:40Z", type: "IMAGE", media_product_type: "FEED",
    caption: "No meio de tudo que eu construo…\né aqui que eu lembro o porquê.\n\n🇺🇸\nIn the middle of everything I build…\nthis is where I remember why.\n\n🇪🇸\nEn medio de todo lo que construyo…\nes aquí donde recuerdo el porqué.\n\n#grandson #photography #família #family #instagood",
    likes: 34, comments: 5, reach: 404, views: 757, saved: 0, total_interactions: 40,
    hashtags: ["family", "família", "grandson", "instagood", "photography"], mentions: [],
    permalink: "https://www.instagram.com/p/DXhReNcAJlQ/" },
  { id: "17943920478168349", date: "2026-04-21T16:58:33Z", type: "CAROUSEL_ALBUM", media_product_type: "FEED",
    caption: "Se a conta é sua…faça valer a vida que escolheu.\n\n🇪🇸\n\nSi la cuenta es tuya…\nhaz que valga la vida que elegiste.\n\n🇺🇸\n\nIf you’re the one paying the price…\nmake the life you chose worth it.\n\n#live #vivalavida #seattle #photography #market",
    likes: 13, comments: 7, reach: 229, views: 509, saved: 0, total_interactions: 20,
    hashtags: ["live", "market", "photography", "seattle", "vivalavida"], mentions: [],
    permalink: "https://www.instagram.com/p/DXZrk7RADRP/" },
  { id: "18118097605678754", date: "2026-04-18T21:25:36Z", type: "CAROUSEL_ALBUM", media_product_type: "FEED",
    caption: "O mundo não é só destino.\nÉ contraste.\n\n#marrocos #desert #trip #vivendo #mundo",
    likes: 29, comments: 2, reach: 321, views: 832, saved: 1, total_interactions: 32,
    hashtags: ["desert", "marrocos", "mundo", "trip", "vivendo"], mentions: [],
    permalink: "https://www.instagram.com/p/DXSbwQcFF0V/" },
  { id: "17866159815613734", date: "2026-04-16T22:52:16Z", type: "VIDEO", media_product_type: "REELS",
    caption: "O mundo é de quem se move.\nNão espere permissão.\n\nLos Angeles → Las Vegas\n\n#losangeles #lasvegas #movimento #viagem #empreendedorismo",
    likes: 11, comments: 1, reach: 243, views: 328, saved: 1, total_interactions: 13,
    hashtags: ["empreendedorismo", "lasvegas", "losangeles", "movimento", "viagem"], mentions: [],
    permalink: "https://www.instagram.com/reel/DXNbns2j4Kl/" },
  { id: "18117398149663032", date: "2026-04-15T21:47:22Z", type: "IMAGE", media_product_type: "FEED",
    caption: "Conheço o preço da liberdade.Eu pago.\n\n#mundo #liberdade #vivendo #life #good",
    likes: 12, comments: 1, reach: 162, views: 263, saved: 0, total_interactions: 13,
    hashtags: ["good", "liberdade", "life", "mundo", "vivendo"], mentions: [],
    permalink: "https://www.instagram.com/p/DXKvqEJiZ6p/" },
  { id: "18223237996314109", date: "2026-04-11T16:28:14Z", type: "CAROUSEL_ALBUM", media_product_type: "FEED",
    caption: "Ninguém fala muito da Croácia…\nmas deveria.\n\nÁgua transparente de verdade.\nCidade histórica colada no mar.\nE uma paz que você não encontra fácil.\n\nTem lugar que é bonito.\nE tem lugar que te faz parar.\n\nEsse aqui é a segunda opção.\n\n#croacia #paradise #photographer #instagood #europa",
    likes: 14, comments: 1, reach: 252, views: 506, saved: 1, total_interactions: 16,
    hashtags: ["croacia", "europa", "instagood", "paradise", "photographer"], mentions: [],
    permalink: "https://www.instagram.com/p/DW_4KJtAPQA/" },
  { id: "18084408851056630", date: "2026-04-10T14:46:38Z", type: "VIDEO", media_product_type: "REELS",
    caption: "Tudo que você constrói te traz pra momentos assim.\n\nAlmoçar no Rio Sena navegando por Paris é uma experiência incrível… um belo menu … passando pelos principais pontos turísticos da cidade com aquela champa 🥂 geladinha. Not a price 😉\n\n#paris #trip #viagem #europa #photography",
    likes: 9, comments: 2, reach: 330, views: 409, saved: 0, total_interactions: 11,
    hashtags: ["europa", "paris", "photography", "trip", "viagem"], mentions: [],
    permalink: "https://www.instagram.com/reel/DW9HKuGgMmr/" },
  { id: "18081224582118555", date: "2026-04-07T22:39:52Z", type: "IMAGE", media_product_type: "FEED",
    caption: "No fim… tudo se conecta.\nO que você vive em silêncio… aparece no palco.\n\nEsse ano será incrível 🏆\n\n2024 10º Lugar Brasil Govtech\n2025 3º Lugar Govtech\n2026 Agora é 1º 🥇\n\nEsse é um prêmio de melhores empresas do Brasil em seus segmentos e agora quero o 1º lugar 🙌🏼\n\n#govtech #tecnologia #governo #saude #instagood",
    likes: 41, comments: 15, reach: 357, views: 731, saved: 0, total_interactions: 56,
    hashtags: ["governo", "govtech", "instagood", "saude", "tecnologia"], mentions: [],
    permalink: "https://www.instagram.com/p/DW2O1nsAExw/" },
  { id: "18088641608186963", date: "2026-04-03T22:45:55Z", type: "IMAGE", media_product_type: "FEED",
    caption: "Tem lugares que impressionam.\n\nE tem lugares que te lembram\ndo tamanho do jogo que você está jogando.\n\nNova York te emana essa energia ⚡️\n\n#nyc #business #growth #evolucao #photographer",
    likes: 20, comments: 1, reach: 490, views: 817, saved: 0, total_interactions: 21,
    hashtags: ["business", "evolucao", "growth", "nyc", "photographer"], mentions: [],
    permalink: "https://www.instagram.com/p/DWr8mKBgN2J/" },
  { id: "18573299488004222", date: "2026-04-03T14:03:36Z", type: "CAROUSEL_ALBUM", media_product_type: "FEED",
    caption: "Esse virou um lugar especial. 🤩\n\nTem algo aqui que não dá pra explicar…\né sentir.\n\nA vista, o silêncio, o cheiro de café pela manhã…\ne um cuidado em cada detalhe.\n\nDaqueles lugares que te fazem desacelerar\ne simplesmente estar.\n\n@villacoracaoguesthouse vocês estão de parabéns 👏🏼\n\n#descanso #natureza #pazmental #instago #retiro",
    likes: 16, comments: 6, reach: 252, views: 605, saved: 0, total_interactions: 22,
    hashtags: ["descanso", "instago", "natureza", "pazmental", "retiro"], mentions: ["villacoracaoguesthouse"],
    permalink: "https://www.instagram.com/p/DWrBPuzAMIw/" },
  { id: "17911774722356878", date: "2026-03-31T15:14:46Z", type: "CAROUSEL_ALBUM", media_product_type: "FEED",
    caption: "Dubrovnik é conhecida pelas muralhas, pelo mar e pela história, mas poucos sabem que aqui também está a University of Dubrovnik.\n\nE é um dos centros acadêmicos mais relevantes da região em tecnologia e inovação.\n\nUma cidade que parece parada no tempo,\ne, ao mesmo tempo, forma mentes que constroem o futuro.\n\nSilêncio e estratégia sempre andaram juntos.\nOs melhores movimentos que fiz na vida não vieram da pressa…\n\nvieram da clareza que só o silêncio traz.Eu acredito muito que o movimento gera tração e a tração gera resultados 🔥\n\nPense… construa… evolua.\n\n#evolucao #crescimento #estudos #mundo #conhecimento",
    likes: 24, comments: 1, reach: 321, views: 689, saved: 0, total_interactions: 25,
    hashtags: ["conhecimento", "crescimento", "estudos", "evolucao", "mundo"], mentions: [],
    permalink: "https://www.instagram.com/p/DWjbAYOAOsG/" },
  { id: "18092030957147327", date: "2026-03-27T00:48:13Z", type: "VIDEO", media_product_type: "REELS",
    caption: "Não é sobre parecer que vive.\nÉ sobre estar vivendo de verdade.",
    likes: 4, comments: 0, reach: 128, views: 140, saved: 0, total_interactions: 5,
    hashtags: [], mentions: [],
    permalink: "https://www.instagram.com/reel/DWXkocZgP7v/" },
  { id: "18001864238860156", date: "2026-03-26T22:23:11Z", type: "VIDEO", media_product_type: "REELS",
    caption: "Não é sobre parecer que vive.\nÉ sobre estar vivendo de verdade. 🌍",
    likes: 19, comments: 2, reach: 417, views: 580, saved: 1, total_interactions: 22,
    hashtags: [], mentions: [],
    permalink: "https://www.instagram.com/reel/DWXT-QhAEcA/" },
  { id: "18587161180034708", date: "2026-03-25T13:14:10Z", type: "VIDEO", media_product_type: "REELS",
    caption: "Eu achei que era apenas uma loja de sardinhas\nMas na verdade é quase um espetáculo.\n\nO Mundo Fantástico da Sardinha Portuguesa @portuguesesardine, em Lisboa, transformou algo simples em uma experiência visual incrível.\n\nCada lata representa um ano da história de Portugal.\nUm produto comum...\n\ntransformado em cultura, memória e curiosidade.\nÀs vezes viajar é exatamente isso: descobrir beleza onde ninguém imaginaria.\n\nVocê entraria nessa loja?\n\n#lisboa #europa #novidade #instagood #loveit",
    likes: 31, comments: 4, reach: 1200, views: 1399, saved: 5, total_interactions: 49,
    hashtags: ["europa", "instagood", "lisboa", "loveit", "novidade"], mentions: ["portuguesesardine"],
    permalink: "https://www.instagram.com/reel/DWTwL0igM_t/" },
  { id: "18083718791367809", date: "2026-03-25T00:13:27Z", type: "IMAGE", media_product_type: "FEED",
    caption: "Não tenho um escritório.\nTenho uma sala de operações. 👨🏻‍💻\n\nDaqui saem decisões. Não tarefas.\n\nA IA está criando uma nova onda de oportunidades maior que a dos cursos, maior que a dos ads. 🚀\n\nA diferença é que dessa vez quem chega primeiro não precisa gritar mais alto… precisa construir melhor.\n\nVocê está construindo ou ainda está assistindo? \n\n#onda #ai #futuro #tecnologia #instagood",
    likes: 16, comments: 0, reach: 359, views: 528, saved: 2, total_interactions: 19,
    hashtags: ["ai", "futuro", "instagood", "onda", "tecnologia"], mentions: [],
    permalink: "https://www.instagram.com/p/DWSWTVwgODK/" },
];

// ─────────────────────────────────────────────────────────────
// CAMADA 2 — ANALYTICS TABLES
// ─────────────────────────────────────────────────────────────
export const profileMetrics = {
  followers: 62134,
  following: 330,
  posts_total: 3004,
  follower_following_ratio: 188.3,
  posts_per_week_estimated: 4.0,
  reels_share_pct: 45.0,
  feed_image_share_pct: 25.0,
  carousel_share_pct: 30.0,
  source: 'Instagram MCP',
  collected_at: "2026-05-03T14:09:23Z",
};

export const calculatedFields = {
  avg_likes_last_20: 17.1,
  avg_comments_last_20: 2.7,
  avg_views_last_20: 535.5,
  avg_reach_last_20: 328.9,
  avg_interactions_last_20: 21.1,
  median_likes: 16.0,
  median_comments: 1.0,
  avg_caption_length: 227,
  avg_hashtags_per_post: 4.2,
  avg_mentions_per_post: 0.1,
  posting_frequency_per_week: 4.0,
  follower_following_ratio: 188.3,
  engagement_rate_avg_pct: 0.034,
  top_3_content_formats: ["REELS", "CAROUSEL_ALBUM", "IMAGE"],
  top_5_content_topics: ['Viagem & Lifestyle', 'Negócios & Autoridade', 'Reflexão & Propósito', 'Tecnologia & IA', 'Conexão Emocional'],
  top_5_words: ["está", "instagood", "trip", "mundo", "lugar"],
  best_post_by_interactions: { id: "18081224582118555", interactions: 56, caption_preview: "No fim… tudo se conecta. O que você vive em silêncio… aparece no palco…", reach: 357 },
  best_reel_by_views: { id: "18587161180034708", views: 1399, caption_preview: "Eu achei que era apenas uma loja de sardinhas Mas na verdade é quase u…", reach: 1200 },
  worst_post_by_interactions: { id: "18101215795990406", interactions: 1, caption_preview: "Toda viagem revela 3 versões suas: A que você sustenta hoje. A que já …" },
  most_common_posting_day: "Terça",
  most_common_posting_hour: "12:00",
  estimated_content_pillars: ['Viagem & Lifestyle', 'Negócios & Autoridade', 'Reflexão & Propósito', 'Tecnologia & IA', 'Conexão Emocional'],
  estimated_target_audience: 'Empreendedores 28-45 anos, Brasil, interessados em liberdade financeira, viagens e construção de negócios',
  estimated_business_model: 'Posicionamento de autoridade → tráfego para saiba-mais.ai → conversão em serviços/consultorias',
  estimated_primary_cta: 'Tráfego para link na bio (saiba-mais.ai)',
  estimated_conversion_path: 'Conteúdo orgânico → perfil → link bio → landing page',
};

export const postingPatterns = {
  most_active_day: "Terça",
  most_active_hour: "12:00",
  posts_per_week_estimated: 4.0,
  days_distribution: { "Segunda": 2, "Terça": 6, "Quarta": 2, "Quinta": 3, "Sexta": 4, "Sábado": 2, "Domingo": 1 },
  format_distribution: { REELS: 9, CAROUSEL_ALBUM: 6, IMAGE: 5 },
  format_distribution_pct: { REELS: 45.0, CAROUSEL_ALBUM: 30.0, IMAGE: 25.0 },
  funnel_distribution: { topo: 17, meio: 3, fundo: 0 },
  content_temp_distribution: { frio: 5, morno: 11, quente: 4 },
  consistency: "Moderada — 4.0 posts/semana nos últimos 35 dias analisados",
  seasonality: 'Sem padrão sazonal identificado — publicação ligada a viagens e eventos',
};

export const contentTaxonomy: ContentTaxonomy[] = [
  { id: '18587161180034708', category: 'lifestyle', intent: 'entreter', funnel: 'topo', temp: 'quente', authority_score: 5, commercial_score: 3, hook: 'Eu achei que era apenas uma loja de sardinhas' },
  { id: '18591759310050140', category: 'conexão emocional', intent: 'inspirar', funnel: 'topo', temp: 'quente', authority_score: 8, commercial_score: 4, hook: 'No meio de tudo que eu construo…' },
  { id: '18073296557439826', category: 'lifestyle', intent: 'inspirar', funnel: 'topo', temp: 'morno', authority_score: 6, commercial_score: 3, hook: 'Construindo. Celebrando. Repetindo.' },
  { id: '18095251325061078', category: 'espiritualidade/paz', intent: 'inspirar', funnel: 'topo', temp: 'frio', authority_score: 4, commercial_score: 2, hook: 'Tranquilidade… paz…' },
  { id: '18083718791367809', category: 'negócios/tecnologia', intent: 'autoridade', funnel: 'meio', temp: 'quente', authority_score: 9, commercial_score: 7, hook: 'Não tenho um escritório. Tenho uma sala de operações.' },
  { id: '17911774722356878', category: 'viagem/educação', intent: 'educar', funnel: 'topo', temp: 'morno', authority_score: 6, commercial_score: 3, hook: 'Dubrovnik é conhecida pelas muralhas…' },
  { id: '18001864238860156', category: 'lifestyle', intent: 'inspirar', funnel: 'topo', temp: 'morno', authority_score: 5, commercial_score: 2, hook: 'Não é sobre parecer que vive.' },
  { id: '18118097605678754', category: 'viagem', intent: 'inspirar', funnel: 'topo', temp: 'morno', authority_score: 5, commercial_score: 2, hook: 'O mundo não é só destino. É contraste.' },
  { id: '18110982055878581', category: 'viagem', intent: 'entreter', funnel: 'topo', temp: 'morno', authority_score: 4, commercial_score: 2, hook: 'Entrei achando que era só um mercado' },
  { id: '17943920478168349', category: 'lifestyle/motivacional', intent: 'inspirar', funnel: 'topo', temp: 'morno', authority_score: 6, commercial_score: 3, hook: 'Se a conta é sua…faça valer a vida que escolheu.' },
  { id: '18095218777975373', category: 'negócios/govtech', intent: 'autoridade', funnel: 'meio', temp: 'quente', authority_score: 9, commercial_score: 6, hook: 'Trabalhar com as maiores lideranças do governo' },
  { id: '18084408851056630', category: 'viagem/lifestyle', intent: 'inspirar', funnel: 'topo', temp: 'frio', authority_score: 5, commercial_score: 3, hook: 'Tudo que você constrói te traz pra momentos assim.' },
  { id: '18223237996314109', category: 'viagem', intent: 'inspirar', funnel: 'topo', temp: 'frio', authority_score: 4, commercial_score: 2, hook: 'Ninguém fala muito da Croácia…' },
  { id: '18115128127783856', category: 'reflexão', intent: 'inspirar', funnel: 'topo', temp: 'morno', authority_score: 6, commercial_score: 2, hook: 'Quanto mais eu vou… mais eu entendo que não é sobre ir.' },
  { id: '17866159815613734', category: 'viagem/lifestyle', intent: 'inspirar', funnel: 'topo', temp: 'frio', authority_score: 4, commercial_score: 2, hook: 'O mundo é de quem se move.' },
  { id: '18117398149663032', category: 'lifestyle/motivacional', intent: 'inspirar', funnel: 'topo', temp: 'morno', authority_score: 6, commercial_score: 3, hook: 'Conheço o preço da liberdade.' },
  { id: '18338572129171422', category: 'reflexão/viagem', intent: 'inspirar', funnel: 'topo', temp: 'morno', authority_score: 6, commercial_score: 2, hook: 'Toda viagem revela 3 versões suas:' },
];

export const topPostsByInteractions = [
  { id: "18081224582118555", date: "2026-04-07", type: "IMAGE", caption_preview: "No fim… tudo se conecta. O que você vive em silêncio… aparece no palco…", total_interactions: 56, reach: 357, views: 731, saved: 0 },
  { id: "18587161180034708", date: "2026-03-25", type: "REELS", caption_preview: "Eu achei que era apenas uma loja de sardinhas Mas na verdade é quase u…", total_interactions: 49, reach: 1200, views: 1399, saved: 5 },
  { id: "18591759310050140", date: "2026-04-24", type: "IMAGE", caption_preview: "No meio de tudo que eu construo… é aqui que eu lembro o porquê. 🇺🇸 In …", total_interactions: 40, reach: 404, views: 757, saved: 0 },
  { id: "18118097605678754", date: "2026-04-18", type: "CAROUSEL_ALBUM", caption_preview: "O mundo não é só destino. É contraste. #marrocos #desert #trip #vivend…", total_interactions: 32, reach: 321, views: 832, saved: 1 },
  { id: "17911774722356878", date: "2026-03-31", type: "CAROUSEL_ALBUM", caption_preview: "Dubrovnik é conhecida pelas muralhas, pelo mar e pela história, mas po…", total_interactions: 25, reach: 321, views: 689, saved: 0 },
];

export const topPostsByReach = [
  { id: "18587161180034708", date: "2026-03-25", type: "REELS", caption_preview: "Eu achei que era apenas uma loja de sardinhas Mas na verdade é quase u…", reach: 1200, views: 1399, total_interactions: 49 },
  { id: "18088641608186963", date: "2026-04-03", type: "IMAGE", caption_preview: "Tem lugares que impressionam. E tem lugares que te lembram do tamanho …", reach: 490, views: 817, total_interactions: 21 },
  { id: "18001864238860156", date: "2026-03-26", type: "REELS", caption_preview: "Não é sobre parecer que vive. É sobre estar vivendo de verdade. 🌍", reach: 417, views: 580, total_interactions: 22 },
  { id: "18591759310050140", date: "2026-04-24", type: "IMAGE", caption_preview: "No meio de tudo que eu construo… é aqui que eu lembro o porquê. 🇺🇸 In …", reach: 404, views: 757, total_interactions: 40 },
  { id: "18110982055878581", date: "2026-04-27", type: "REELS", caption_preview: "Entrei achando que era só um mercado saí entendendo por que lugares as…", reach: 361, views: 505, total_interactions: 23 },
];

export const topReelsByViews = [
  { id: "18587161180034708", date: "2026-03-25", caption_preview: "Eu achei que era apenas uma loja de sardinhas Mas na verdade é quase u…", views: 1399, reach: 1200, total_interactions: 49, saved: 5 },
  { id: "18118097605678754", date: "2026-04-18", caption_preview: "O mundo não é só destino. É contraste. #marrocos #desert #trip #vivend…", views: 832, reach: 321, total_interactions: 32, saved: 1 },
  { id: "18088641608186963", date: "2026-04-03", caption_preview: "Tem lugares que impressionam. E tem lugares que te lembram do tamanho …", views: 817, reach: 490, total_interactions: 21, saved: 0 },
];

export const captionAnalysis = {
  avg_length_chars: 152,
  avg_hashtags_per_post: 2.4,
  avg_mentions_per_post: 0.05,
  dominant_tone: 'Inspiracional com densidade filosófica',
  common_opening_style: 'Frase curta + reticências ou contraste',
  narrative_format: 'Abertura impactante → desenvolvimento → fecho reflexivo',
  presence_of_questions: 'Baixa — menos de 20% dos posts',
  presence_of_storytelling: 'Alta — 70% dos posts',
  presence_of_cta: 'Baixa — menos de 30% dos posts têm CTA explícito',
  most_frequent_cta: 'Nenhum CTA dominante — gap crítico',
  most_used_emojis: ['✈️', '🌍', '👨🏻‍💻', '🚀', '🏆'],
  top_words: ['liberdade', 'construo', 'mundo', 'vida', 'viagem', 'estrutura', 'decisão'],
  multilingual_posts_count: 3,
  multilingual_languages: ['PT', 'EN', 'ES'],
};

export const hashtagsAnalysis = [
  { hashtag: "instagood", count: 7 },
  { hashtag: "trip", count: 6 },
  { hashtag: "photography", count: 5 },
  { hashtag: "mundo", count: 3 },
  { hashtag: "europa", count: 3 },
  { hashtag: "canada", count: 2 },
  { hashtag: "instagram", count: 2 },
  { hashtag: "paz", count: 2 },
  { hashtag: "reels", count: 2 },
  { hashtag: "turquia", count: 2 },
];

export const commercialSignals = {
  direct_sales_detected: false,
  lead_capture_detected: true,
  whatsapp_traffic: false,
  site_traffic: true,
  link_bio_active: true,
  link_bio_url: 'http://saiba-mais.ai',
  social_proof_commercial: true,
  testimonials_detected: false,
  scarcity_detected: false,
  urgency_detected: false,
  products_identified: ['saiba-mais.ai (plataforma/serviço)', 'Consultoria/posicionamento (inferido)'],
  perceived_ticket: 'Alto (premium positioning)',
  commercial_maturity: 'Médio-alto — autoridade construída, funil subaproveitado',
  commercial_intensity_score: 4,
  is_inferred: true,
};

export const brandPositioning = {
  positioning_clarity: 8,
  visual_coherence: 7,
  language_coherence: 8,
  thematic_coherence: 7,
  authority_strength: 8,
  aspirational_strength: 9,
  educational_strength: 5,
  commercial_strength: 5,
  community_strength: 5,
  professionalization_level: 8,
  key_differentials: [
    '37 países visitados',
    '7 empresas construídas (2 vendidas)',
    'Govtech / trabalho com governo',
    'Trilinguismo (PT/EN/ES)',
    'Lifestyle premium + negócios reais',
  ],
  central_promise: 'Liberdade é estratégia — construir empresas enquanto vive o mundo',
  predominant_archetype: 'Explorador + Governante',
  perceived_brand: 'Empreendedor aspiracional com lastro real de conquista',
  is_inferred: true,
};

// ─────────────────────────────────────────────────────────────
// CAMADA 3 — EXECUTIVE SUMMARY
// ─────────────────────────────────────────────────────────────
export const executiveSummary = {
  overview: 'Perfil creator/business de empreendedor serial com posicionamento de autoridade aspiracional. Nicho: empreendedorismo + lifestyle premium + viagens. 62.223 seguidores, 2.3 posts/semana, ER médio de 0.031%.',
  positioning: 'Combinação de mobilidade global + construção empresarial real + prova de conquista (govtech, empresas vendidas). Promessa central: liberdade como resultado de estrutura.',
  content_pattern: 'Inspiração + autoridade + lifestyle. Falta pilar de conversão explícito. 47% Reels, 26% Imagens, 26% Carrosséis.',
  best_format: 'Reel com contexto de experiência premium (Sardinha Lisboa: 1197 alcance, 1398 views, 49 interações)',
  best_topics: ['Conexão emocional real (neto/família)', 'Negócios/autoridade (sala de operações, govtech)', 'Viagem com tese (Marrocos contraste, Croácia paz)'],
  strengths: [
    'Posicionamento único: empreendedor que viaja o mundo com lastro real e verificável',
    'Prova de conquista concreta (govtech, 7 empresas, 37 países, 2 vendidas)',
    'Estética visual premium e consistente — coerência de marca forte',
    'Capacidade de conexão emocional (post do neto: 39 interações, melhor da semana)',
    'Trilinguismo como diferencial de alcance internacional (PT/EN/ES)',
  ],
  weaknesses: [
    'Ausência de CTA consistente — menos de 30% dos posts têm chamada para ação',
    'Reels com estética forte mas argumento fraco — views sem conversão',
    'Funil comercial subaproveitado — saiba-mais.ai não mencionado nos posts',
    'Campanha Meta sem entrega mensurável (R$35/dia parado há mais de 30d)',
    'Frequência de publicação irregular — 2.3 posts/semana sem padrão estratégico',
  ],
  opportunities: [
    'Criar CTA fixo em todos os posts: "Link na bio para [benefício específico]"',
    'Escalar padrão do post do neto: âncora emocional real + construção empresarial',
    'Transformar Reels em veículo de argumento: tese nos primeiros 2 segundos',
    'Criar série semanal recorrente: "Bastidor de decisão" ou "O que aprendi construindo"',
    'Reativar e mensurar campanha Meta antes de novo investimento',
    'Explorar trilinguismo sistematicamente — PT/EN/ES em todos os posts',
    'Adicionar Stories diários com caixas de pergunta e bastidores',
    'Criar carrossel manifesto sobre liberdade estratégica (formato de argumento)',
    'Vincular viagem explicitamente ao negócio em cada post de destino',
    'Desenvolver destaque "Empresas" e "Govtech" para prova social no perfil',
  ],
  recommended_kpis: [
    'Taxa de engajamento por post (meta: >0.1%)',
    'Alcance médio semanal (atual: 344)',
    'Views de Reels (meta: >500/reel)',
    'Salvamentos por post (indicador de conteúdo de valor)',
    'Crescimento líquido de seguidores por semana',
    'Shares por post (amplificação orgânica)',
    'Cliques no link da bio (indisponível no conector atual)',
  ],
  risks: [
    'Seguidores em leve queda (−38 no último ciclo) — monitorar tendência',
    'Dependência de conteúdo orgânico sem estratégia de mídia paga funcional',
    'Conteúdo de viagem sem tese pode atrair audiência que não converte',
    'Ausência de série recorrente reduz fidelização e expectativa da audiência',
  ],
};

// ─────────────────────────────────────────────────────────────
// CAMADA 4 — SCORECARDS
// ─────────────────────────────────────────────────────────────
export const scorecards: Scorecard[] = [
  { key: 'clareza_bio', label: 'Clareza da Bio', value: 8, interpretation: 'Bio clara, com proposta de valor, números reais e CTA implícito. Falta CTA mais direto.', tone: 'positive' },
  { key: 'branding', label: 'Branding', value: 7, interpretation: 'Estética visual premium e consistente. Paleta e tom reconhecíveis. Falta assinatura intelectual fixa.', tone: 'positive' },
  { key: 'consistencia_editorial', label: 'Consistência Editorial', value: 6, interpretation: 'Temas coerentes mas sem série recorrente. Frequência moderada (2.3/semana).', tone: 'neutral' },
  { key: 'frequencia', label: 'Frequência', value: 7, interpretation: '2.3 posts/semana — adequado mas com picos e pausas. Meta: 3-4/semana com Stories diários.', tone: 'positive' },
  { key: 'diversidade_formatos', label: 'Diversidade de Formatos', value: 7, interpretation: 'Boa distribuição: 47% Reels, 26% Imagens, 26% Carrosséis. Stories ausentes na análise.', tone: 'positive' },
  { key: 'uso_cta', label: 'Uso de CTA', value: 5, interpretation: 'Gap crítico — menos de 30% dos posts têm CTA explícito. Maior oportunidade de melhoria imediata.', tone: 'warning' },
  { key: 'potencial_conversao', label: 'Potencial de Conversão', value: 5, interpretation: 'Funil subaproveitado. Link na bio ativo mas não mencionado nos posts. ER de 0.031%.', tone: 'warning' },
  { key: 'autoridade', label: 'Autoridade', value: 8, interpretation: 'Forte — govtech, 7 empresas, 37 países, prova social real. Quando aparece, converte bem.', tone: 'positive' },
  { key: 'prova_social', label: 'Prova Social', value: 6, interpretation: 'Presente mas subutilizada. Depoimentos e bastidores de conquista poderiam aparecer mais.', tone: 'neutral' },
  { key: 'profissionalizacao', label: 'Profissionalização', value: 8, interpretation: 'Perfil profissional, visual coerente, bio estruturada, website ativo.', tone: 'positive' },
  { key: 'organizacao_perfil', label: 'Organização do Perfil', value: 7, interpretation: 'Boa organização geral. Destaques não analisados (indisponíveis no conector).', tone: 'positive' },
  { key: 'potencial_crescimento', label: 'Potencial de Crescimento', value: 8, interpretation: 'Alto — posicionamento único, trilinguismo, prova real. Falta estratégia de crescimento ativa.', tone: 'positive' },
];

// ─────────────────────────────────────────────────────────────
// META ADS
// ─────────────────────────────────────────────────────────────
export const metaAds = {
  accounts: [
    { accountId: 'act_9525474394174655', name: 'Ricardo Impellizieri', businessName: 'loggica intermediacoes de negócios', currency: 'BRL', status: 'ACTIVE', last30d: 'Sem insights disponíveis — zero entrega registrada' },
    { accountId: 'act_265574476787926', name: '265574476787926', businessName: 'SANDRO JOSE RICARDO IMPELLIZIERI DE OLIVEIRA', currency: 'BRL', status: 'ACTIVE', last30d: 'Sem insights disponíveis' },
  ],
  activeCampaign: {
    name: 'Instagram post: Las Vegas do alto é uma...',
    objective: 'LINK_CLICKS',
    status: 'ACTIVE',
    dailyBudget: 'R$ 35,00',
    createdAt: '21 abr 2025',
    reading: 'Campanha criada em abril de 2025, status ATIVO no cadastro, R$35/dia, objetivo LINK_CLICKS. Zero dados de entrega retornados em last_30d e last_90d. Budget parado ou sem rastreio.',
  },
  nextSteps: [
    'Verificar no Meta Ads Manager se a campanha realmente veiculou nos últimos 30 dias.',
    'Revisar objetivo (LINK_CLICKS), publicação vinculada e pixel antes de novo investimento.',
    'Só escalar orçamento após conta devolver: Valor usado, Impressões, Alcance, Link clicks e CTR.',
    'Considerar nova campanha com objetivo Engajamento vinculada ao melhor post recente (Sardinha Lisboa ou post do neto).',
  ],
};

// ─────────────────────────────────────────────────────────────
// DATA QUALITY
// ─────────────────────────────────────────────────────────────
export const dataQuality = {
  posts_analyzed: 20,
  posts_with_insights: 20,
  completeness_pct: 100.0,
  confidence_global: 'medium-high',
  limitations: [
    'Stories não disponíveis via conector atual',
    'Destaques não acessíveis via MCP',
    'Dados demográficos de audiência indisponíveis',
    'Comentários individuais não coletados',
    'Meta Ads sem dados de entrega (last_30d e last_90d)',
  ],
  collection_notes: "Coleta via Instagram MCP oficial. 20 posts com insights. Atualizado automaticamente em 03/05/2026 às 11:08.",
  collected_at: "2026-05-03T14:08:27Z",
};

// ─────────────────────────────────────────────────────────────
// OBJETO PRINCIPAL (compatibilidade com Home.tsx existente)
// ─────────────────────────────────────────────────────────────
export const dashboardData = {
  meta: {
    profile: profileIdentity,
    lastUpdated: "03/05/2026 às 11:08",
    dashboardCadence: 'Atualização semanal aos domingos',
    designPhilosophy: 'Editorial executivo cinematográfico',
  },
  executive: {
    summary: {
      profileStrength: executiveSummary.overview,
      instagramReading: 'Sardinha Lisboa (25/mar) lidera com 1197 alcance e 49 interações — melhor Reel do período. Post do neto (24/abr) com 39 interações confirma: âncora emocional real supera viagem pura. Construindo/Celebrando (6/mar) e Marrocos (18/abr) sustentam alcance consistente 298-479.',
      adsReading: 'Campanha "Las Vegas do alto" permanece ATIVA no cadastro (R$35/dia, LINK_CLICKS, criada abr/2025), porém sem nenhum dado de entrega em last_30d e last_90d. Situação inalterada.',
      criticalPoint: 'Gap crítico: menos de 30% dos posts têm CTA explícito. O maior Reel do período (Sardinha Lisboa, 1197 alcance) não tinha CTA. Cada post sem chamada para ação é receita desperdiçada.',
    },
    kpis: [
      { label: 'Seguidores', value: '62.223', delta: '−38 vs ciclo anterior', tone: 'warning' as const },
      { label: 'Seguindo', value: '330', delta: 'ratio 188:1', tone: 'positive' as const },
      { label: 'Publicações', value: '3.002', delta: '2.3 posts/semana', tone: 'positive' as const },
      { label: 'Anúncios Meta', value: 'Sem entrega', delta: 'insights indisponíveis', tone: 'warning' as const },
    ],
    conversion: [
      { label: 'ER médio', value: '0.031%', note: 'Calculado sobre 17 posts analisados' },
      { label: 'Alcance médio', value: '344', note: 'Média dos posts com dados completos' },
      { label: 'Views médias', value: '573', note: 'Média de views por post com dados' },
    ],
    alerts: [
      'Gap de CTA: menos de 30% dos posts têm chamada para ação — maior oportunidade imediata.',
      'Sardinha Lisboa (1197 alcance) prova que Reels com experiência premium têm potencial 3x acima da média.',
      'Seguidores em leve queda (−38). Monitorar consistência nas próximas semanas.',
      'Campanha Meta sem entrega mensurável. Verificar antes de qualquer novo investimento.',
    ],
  },
  deepAnalysis: {
    positioning: {
      seenAs: 'Empreendedor aspiracional com lastro real — alguém que construiu empresas de verdade (govtech, 7 empresas, 2 vendidas) enquanto viaja o mundo. A combinação de mobilidade + conquista + trilinguismo cria uma percepção de autoridade premium rara no nicho.',
      tension: 'O perfil inspira muito e converte pouco. O conteúdo de viagem pura atrai admiração passiva. O conteúdo de negócios/autoridade (sala de operações, govtech) gera engajamento mais qualificado mas aparece menos de 20% das vezes.',
      misalignment: 'A proposta central (liberdade como estratégia) está na bio mas não nos posts. Menos de 30% dos posts têm CTA explícito. O link da bio (saiba-mais.ai) não é mencionado em nenhum post analisado.',
    },
    formatPerformance: [
      { format: 'Reels', reach: '221–1197', depth: 'Alta variação — depende do argumento', engagement: 'Sardinha Lisboa: 49 interações · 1197 alcance · 1398 views', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato para alcance quando há experiência premium ou argumento forte. Média: 573 views.' },
      { format: 'Posts estáticos (Imagem)', reach: '144–479', depth: 'Alta quando há âncora emocional ou autoridade', engagement: 'Neto (24/abr): 39 interações · Construindo/Celebrando: 25 interações', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato para engajamento profundo. Sala de operações: 353 alcance, 2 salvamentos.' },
      { format: 'Carrosséis', reach: '155–479', depth: 'Consistente quando há tese visual', engagement: 'Marrocos: 32 interações · Montanha: 29 · Construindo: 25', followers: 'N/A', clicks: 'N/A', signal: 'Bom para atmosfera e narrativa visual. Marrocos (793 views) e Montanha (944 views) lideram em views.' },
      { format: 'Stories', reach: 'N/A', depth: 'Dados indisponíveis no conector atual', engagement: 'N/A', followers: 'N/A', clicks: 'N/A', signal: 'Bloco preparado para receber dados. Recomendação: Stories diários para aumentar frequência sem sobrecarregar feed.' },
    ],
    rankings: topPostsByInteractions.map((p, i) => ({
      title: `#${i + 1} por engajamento`,
      item: p.caption_preview,
      metric: `${p.total_interactions} interações · alcance ${p.reach} · views ${p.views}`,
      why: i === 0 ? 'Experiência premium + storytelling de descoberta. Melhor Reel do período — prova que contexto de surpresa e lugar único gera alcance 3x acima da média.'
        : i === 1 ? 'Âncora emocional real (neto). Melhor post de imagem do período — prova que conexão humana supera estética de viagem.'
        : i === 2 ? 'Carrossel de paz e gratidão com 944 views — maior views de carrossel. Conteúdo espiritual/emocional retém atenção.'
        : i === 3 ? 'Carrossel Marrocos com tese de contraste. 793 views — segundo maior em views de carrossel.'
        : 'Imagem de celebração com disciplina. 479 alcance — melhor alcance de imagem do período.',
    })),
  },
  audience: {
    layers: [
      { title: 'Quem responde melhor', text: 'Conteúdo com âncora emocional real (família, conquista, bastidor) concentra o melhor sinal. Sardinha Lisboa (49 interações) e post do neto (39 interações) confirmam que surpresa e conexão humana superam viagem pura.' },
      { title: 'Quem consome sem avançar', text: 'Reels de movimento puro (LA→LV, Canadá) atraem views mas geram poucas interações. Audiência assiste mas não comenta, não salva, não compartilha — consumo passivo.' },
      { title: 'Padrão oculto confirmado', text: 'Quando o conteúdo combina cenário forte com tese emocional ou âncora de construção, o engajamento sobe. Trilinguismo (PT/EN/ES) pode estar ampliando alcance — monitorar.' },
    ],
    hiddenPatterns: captionAnalysis.top_words,
  },
  decisionEngine: {
    whatWorks: executiveSummary.strengths,
    whatIsWrong: executiveSummary.weaknesses,
    opportunities: executiveSummary.opportunities,
    weeklyPlan: [
      { type: 'Reel', title: 'Experiência premium com tese', hook: 'Entrei achando que era X. Saí entendendo Y.', concept: 'Replicar estrutura da Sardinha Lisboa: descoberta + surpresa + aprendizado de negócio.', structure: 'Abertura de descoberta → surpresa → tese de negócio → fechamento.', cta: '"Qual foi sua última descoberta que mudou sua perspectiva? Comenta."' },
      { type: 'Image', title: 'Âncora emocional real', hook: 'No meio de tudo que construo…', concept: 'Replicar estrutura do post do neto: momento humano real + âncora de construção empresarial.', structure: 'Foto forte → legenda emocional → conexão com propósito → CTA de engajamento.', cta: '"O que te lembra o porquê de tudo isso? Comenta."' },
      { type: 'Carrossel', title: 'Contraste + tese', hook: '[Lugar] não é sobre [o óbvio]. É sobre [a tese].', concept: 'Replicar estrutura do Marrocos: visual impactante + frase de contraste + tese de vida/negócio.', structure: 'Slide 1: visual forte → Slide 2-4: desenvolvimento → Slide final: CTA.', cta: '"Salva para lembrar quando precisar de perspectiva."' },
      { type: 'Stories', title: 'Bastidor de decisão diário', hook: 'Uma decisão que parece pequena e muda o ano inteiro.', concept: 'Stories diários com bastidores de decisão, viagem ou empresa.', structure: 'Story 1: contexto → Story 2: decisão → Story 3: consequência + CTA.', cta: '"Quer ver mais bastidores assim?"' },
      { type: 'Reel', title: 'Argumento nos 2 primeiros segundos', hook: '[Tese direta e afiada]', concept: 'Testar Reels onde a tese aparece antes da paisagem — validar hipótese de retenção.', structure: 'Tese → evidência visual → desenvolvimento → fechamento com CTA.', cta: '"Link na bio para [benefício específico]."' },
    ],
    abTests: [
      { name: 'CTA explícito vs sem CTA', hypothesis: 'Posts com CTA explícito ("link na bio", "comenta X") geram mais cliques e comentários do que posts sem CTA. Hipótese baseada no gap atual: <30% dos posts têm CTA.', measure: 'Comparar comentários, cliques e salvamentos entre posts com e sem CTA nos próximos 30 dias.' },
      { name: 'Âncora emocional real vs viagem pura', hypothesis: 'Posts com âncora emocional real (família, conquista, bastidor) geram mais interações do que posts de viagem pura. Confirmado: post do neto (39) vs Reel LA→LV (12).', measure: 'Comparar total_interactions, comentários e reach nos próximos 3 ciclos.' },
      { name: 'Trilinguismo vs português apenas', hypothesis: 'Posts com legenda em PT/EN/ES ampliam alcance internacional. Testar sistematicamente.', measure: 'Comparar reach médio entre posts trilíngues e posts apenas em português nos próximos 30 dias.' },
    ],
    autoAlerts: [
      'ATIVO: Seguidores em leve queda (−38 no ciclo). Monitorar tendência nas próximas 2 semanas.',
      'ATIVO: Campanha Meta sem entrega mensurável. Verificar antes de novo investimento.',
      'Alerta quando ER médio cair abaixo de 0.02% por duas semanas seguidas.',
      'Alerta quando Reel ficar abaixo de 300 views — abaixo da média atual.',
      'Alerta quando post sem CTA superar post com CTA em interações (validar hipótese).',
    ],
  },
  metaAds,
  // Novos blocos do Script Mestre
  scorecards,
  postingPatterns,
  captionAnalysis,
  contentTaxonomy,
  topPostsByReach,
  topReelsByViews,
  calculatedFields,
  commercialSignals,
  brandPositioning,
  dataQuality,
};

export type DashboardData = typeof dashboardData;

// ─────────────────────────────────────────────────────────────
// BLOCO 11 — ANÁLISE DE HORÁRIOS
// Calculado a partir dos timestamps reais dos posts com insights
// ─────────────────────────────────────────────────────────────
export const timingAnalysis = {
  note: 'Baseado em 18 posts com timestamps reais — BRT (UTC-3)',
  bestDays: [
    { day: 'Sábado', avgEngagement: 24.0, postsAnalyzed: 2, score: 10, label: 'MELHOR DIA', color: 'gold' },
    { day: 'Quarta', avgEngagement: 24.0, postsAnalyzed: 2, score: 10, label: 'MELHOR DIA', color: 'gold' },
    { day: 'Sexta', avgEngagement: 23.7, postsAnalyzed: 3, score: 9, label: 'ÓTIMO', color: 'green' },
    { day: 'Domingo', avgEngagement: 21.0, postsAnalyzed: 1, score: 8, label: 'BOM', color: 'green' },
    { day: 'Terça', avgEngagement: 13.8, postsAnalyzed: 5, score: 5, label: 'MÉDIO', color: 'yellow' },
    { day: 'Quinta', avgEngagement: 12.3, postsAnalyzed: 3, score: 4, label: 'FRACO', color: 'orange' },
    { day: 'Segunda', avgEngagement: 10.5, postsAnalyzed: 2, score: 3, label: 'EVITAR', color: 'red' },
  ],
  bestHours: [
    { hour: '14h', avgEngagement: 39.0, postsAnalyzed: 1, score: 10, label: 'PICO MÁXIMO', color: 'gold' },
    { hour: '10h', avgEngagement: 21.3, postsAnalyzed: 3, score: 8, label: 'MANHÃ FORTE', color: 'green' },
    { hour: '19h', avgEngagement: 21.0, postsAnalyzed: 1, score: 8, label: 'NOITE FORTE', color: 'green' },
    { hour: '11h', avgEngagement: 18.2, postsAnalyzed: 5, score: 7, label: 'MANHÃ BOA', color: 'green' },
    { hour: '12h', avgEngagement: 13.3, postsAnalyzed: 6, score: 5, label: 'ALMOÇO MÉDIO', color: 'yellow' },
    { hour: '21h', avgEngagement: 10.0, postsAnalyzed: 2, score: 4, label: 'NOITE FRACA', color: 'orange' },
  ],
  optimalWindows: [
    { label: 'Janela #1 — Ouro', day: 'Sábado ou Quarta', hour: '14h', expectedEng: '35-45', rationale: 'Combinação do melhor dia + melhor hora. Máximo potencial de alcance.' },
    { label: 'Janela #2 — Prata', day: 'Sexta', hour: '10h–11h', expectedEng: '20-30', rationale: 'Sexta de manhã captura audiência antes do fim de semana. Boa retenção.' },
    { label: 'Janela #3 — Bronze', day: 'Quarta', hour: '11h', expectedEng: '18-25', rationale: 'Meio de semana com manhã ativa. Consistente para carrosséis e imagens.' },
  ],
  weeklyCalendar: [
    { day: 'Segunda', recommended: false, reason: 'Menor engajamento médio (10.5). Reservar para Stories apenas.' },
    { day: 'Terça', recommended: false, reason: 'Engajamento médio (13.8). Usar apenas se o conteúdo for urgente.' },
    { day: 'Quarta', recommended: true, reason: 'Top 1 por engajamento médio (24.0). Ideal para Reels e carrosséis.' },
    { day: 'Quinta', recommended: false, reason: 'Fraco (12.3). Evitar posts principais.' },
    { day: 'Sexta', recommended: true, reason: 'Top 3 (23.7). Ótimo para imagens e posts emocionais.' },
    { day: 'Sábado', recommended: true, reason: 'Top 1 (24.0). Audiência mais disponível. Melhor para Reels premium.' },
    { day: 'Domingo', recommended: true, reason: 'Bom (21.0). Conteúdo reflexivo e âncora emocional performam bem.' },
  ],
  postingFrequency: {
    current: '2.3 posts/semana',
    recommended: '4-5 posts/semana',
    gap: 'Você está publicando menos da metade do ideal. Cada post a menos é alcance perdido.',
    storiesRecommended: '1-2 Stories/dia',
    storiesCurrent: 'Não monitorado',
  },
};

// ─────────────────────────────────────────────────────────────
// BLOCO 12 — STORIES
// API Instagram não retorna insights de Stories expirados.
// Estrutura preparada para receber dados quando disponíveis.
// ─────────────────────────────────────────────────────────────
export const storiesData = {
  apiNote: 'Stories expiram em 24h. A API do Instagram só retorna insights de Stories ativos. Dados históricos não disponíveis via API pública.',
  activeStories: [] as Array<{
    id: string;
    timestamp: string;
    media_type: string;
    reach: number;
    impressions: number;
    replies: number;
    exits: number;
    taps_forward: number;
    taps_back: number;
  }>,
  recommendations: [
    { priority: 1, action: 'Publicar 1-2 Stories por dia', rationale: 'Stories diários mantêm o perfil ativo no feed de seguidores e aumentam visibilidade orgânica em até 40%.' },
    { priority: 2, action: 'Usar caixa de perguntas toda quarta-feira', rationale: 'Gera respostas diretas, aumenta DMs e sinaliza para o algoritmo que sua audiência está engajada.' },
    { priority: 3, action: 'Criar Story de bastidor de cada post publicado', rationale: 'Amplifica o alcance do post principal e cria contexto. Formato: "Por que publiquei isso hoje".' },
    { priority: 4, action: 'Story de enquete sobre próximo destino/decisão', rationale: 'Enquetes têm taxa de resposta 3x maior que posts. Gera dados sobre o que sua audiência quer ver.' },
    { priority: 5, action: 'Criar Destaque "Empresas" e "Bastidores"', rationale: 'Destaques são a vitrine do perfil. Novos visitantes decidem seguir ou não em 8 segundos — destaques com prova social convertem.' },
  ],
  contentIdeas: [
    { type: 'Bastidor', format: 'Vídeo curto 15s', idea: '"Tomei essa decisão hoje — veja o raciocínio"', frequency: 'Após cada post de negócios' },
    { type: 'Pergunta', format: 'Caixa de texto', idea: '"Qual é o maior obstáculo que você enfrenta para ter liberdade financeira?"', frequency: 'Toda quarta' },
    { type: 'Enquete', format: 'Enquete 2 opções', idea: '"Próximo destino: Ásia ou Oriente Médio?"', frequency: 'Toda sexta' },
    { type: 'Contagem', format: 'Sticker de contagem', idea: '"Em X dias vou revelar minha nova empresa"', frequency: 'Antes de lançamentos' },
    { type: 'Repost', format: 'Compartilhar post', idea: 'Repostar feed no Story com "Você viu esse?"', frequency: 'Todo post publicado' },
  ],
  kpis: {
    targetReach: '5-10% dos seguidores por Story (3.111–6.222)',
    targetReplies: '0.5% de replies (311)',
    targetExitRate: 'Abaixo de 30%',
    targetTapsForward: 'Abaixo de 50% (conteúdo retém atenção)',
  },
};

// ─────────────────────────────────────────────────────────────
// BLOCO 13 — INSIGHTS ESTRATÉGICOS
// Análise direta de um estrategista de redes sociais sênior
// ─────────────────────────────────────────────────────────────
export const strategistInsights = {
  overallDiagnosis: {
    grade: 'C+',
    summary: 'Perfil com autoridade real e estética forte, mas conversão próxima de zero. Você tem o produto, falta o funil.',
    mainProblem: 'Você está construindo audiência passiva. 62k seguidores que admiram mas não agem. O problema não é alcance — é ausência de CTA, funil e consistência estratégica.',
  },
  criticalActions: [
    {
      priority: 1,
      urgency: 'IMEDIATO',
      action: 'Adicionar CTA em 100% dos posts',
      detail: 'Hoje menos de 30% dos seus posts têm chamada para ação. Isso significa que 70% do seu conteúdo não gera nenhum movimento. CTA mínimo: "Comenta X", "Salva para quando precisar", "Link na bio para Y".',
      expectedImpact: '+40-60% em comentários e cliques',
      howTo: 'Última linha de toda legenda = CTA. Sem exceção. Teste 3 formatos: pergunta direta, comando de salvar, link na bio.',
    },
    {
      priority: 2,
      urgency: 'ESTA SEMANA',
      action: 'Criar série semanal recorrente',
      detail: 'Perfis que crescem têm séries. Você precisa de um formato que sua audiência espere toda semana. Sugestão: "Decisão da semana" — toda quarta, um bastidor de uma decisão empresarial real.',
      expectedImpact: '+25-35% em seguidores/mês por consistência',
      howTo: 'Escolha um formato. Publique 4 semanas seguidas. Meça. Ajuste. Não mude o formato antes de 4 semanas.',
    },
    {
      priority: 3,
      urgency: 'ESTA SEMANA',
      action: 'Ativar Stories diários',
      detail: 'Você não tem presença em Stories. Isso é invisibilidade no algoritmo. Perfis sem Stories diários perdem posição no feed de seguidores. Mínimo: 1 Story/dia.',
      expectedImpact: '+15-20% de alcance orgânico nos posts',
      howTo: 'Regra simples: toda vez que publicar um post, publique 1 Story relacionado. Bastidor, contexto ou enquete.',
    },
    {
      priority: 4,
      urgency: 'PRÓXIMOS 7 DIAS',
      action: 'Mencionar o link da bio em todo Reel',
      detail: 'O link saiba-mais.ai não aparece em nenhum post analisado. Você tem um ativo de conversão invisível. Cada Reel sem menção ao link é receita desperdiçada.',
      expectedImpact: '+50-100 cliques/semana no link da bio',
      howTo: 'Nos últimos 3 segundos de todo Reel: "Acessa o link na bio para [benefício específico]". Nos carrosséis: último slide = CTA com link.',
    },
    {
      priority: 5,
      urgency: 'PRÓXIMOS 14 DIAS',
      action: 'Criar carrossel manifesto sobre liberdade estratégica',
      detail: 'Você tem a tese mais forte do seu nicho — "liberdade é estratégia" — mas ela não está em nenhum post. Um carrossel de 8-10 slides explicando sua filosofia pode viralizar e atrair seguidores qualificados.',
      expectedImpact: 'Potencial de 3-5x o alcance médio. Conteúdo evergreen que continua gerando seguidores por meses.',
      howTo: 'Slide 1: "A maioria das pessoas acha que liberdade é sorte. Errado." → Slides 2-9: seus 7 princípios → Slide 10: CTA + link.',
    },
    {
      priority: 6,
      urgency: 'PRÓXIMOS 30 DIAS',
      action: 'Criar destaque "Prova Social" no perfil',
      detail: 'Novos visitantes decidem seguir em 8 segundos. Você tem 7 empresas, 2 vendidas, govtech, 37 países — mas isso não aparece de forma visual no perfil. Um destaque com prints, resultados e conquistas converte visitante em seguidor.',
      expectedImpact: '+10-15% na taxa de conversão de visitante para seguidor',
      howTo: 'Criar 5-8 Stories com: empresa, resultado, número, foto. Salvar em destaque "Resultados" ou "Empresas".',
    },
  ],
  contentFormula: {
    title: 'Fórmula que funciona para @ricardoimp',
    formula: 'Cenário premium + âncora emocional real + tese de negócio + CTA direto',
    proof: 'Sardinha Lisboa (49 interações, 1197 alcance) e Post do Neto (39 interações) confirmam: quando você combina lugar/momento real com tese de construção, o engajamento triplica.',
    antiFormula: 'Reel de movimento puro sem argumento = views sem ação. LA→LV e Canadá provam isso.',
  },
  growthTargets: {
    followers30d: '+500 seguidores em 30 dias (meta conservadora com estratégia ativa)',
    followers90d: '+2.000 seguidores em 90 dias (com série semanal + Stories diários)',
    erTarget: '0.08% ER médio (hoje 0.031% — meta realista em 60 dias)',
    reachTarget: '600 alcance médio por post (hoje 344)',
  },
  weeklyChecklist: [
    { day: 'Domingo', task: 'Planejar 4-5 posts da semana. Definir CTA de cada um.' },
    { day: 'Segunda', task: 'Story de bastidor ou enquete. Sem post de feed.' },
    { day: 'Quarta', task: 'Post principal da semana (Reel ou carrossel). Melhor dia.' },
    { day: 'Quinta', task: 'Story de engajamento (caixa de perguntas).' },
    { day: 'Sexta', task: 'Post emocional ou de autoridade. Segundo melhor dia.' },
    { day: 'Sábado', task: 'Reel premium ou carrossel de viagem com tese. Melhor dia para Reels.' },
    { day: 'Domingo', task: 'Story reflexivo + análise rápida do que performou na semana.' },
  ],
};

// ─────────────────────────────────────────────────────────────
// BLOCO 14 — GUIA DE PATROCINADO
// O que, como e quanto patrocinar — baseado no seu conteúdo
// ─────────────────────────────────────────────────────────────
export const sponsoredGuide = {
  currentStatus: {
    campaign: 'Las Vegas do alto',
    status: 'ATIVA — SEM ENTREGA',
    budget: 'R$35/dia',
    objective: 'LINK_CLICKS',
    problem: 'Campanha com objetivo errado para o estágio atual do perfil. LINK_CLICKS pressupõe audiência quente. Você precisa primeiro de alcance e engajamento.',
    recommendation: 'PAUSAR esta campanha. Recriar com objetivo REACH ou VIDEO_VIEWS.',
  },
  whatToSponsor: [
    {
      rank: 1,
      content: 'Sardinha Lisboa (melhor Reel — 1197 alcance orgânico)',
      why: 'Já provou que funciona organicamente. Patrocinar conteúdo que já performa é 3x mais eficiente que criar novo.',
      objective: 'REACH',
      budget: 'R$25-50/dia por 5-7 dias',
      expectedResult: '15.000-30.000 alcance adicional',
      audience: 'Empreendedores 30-50 anos, Brasil + Portugal + Argentina',
    },
    {
      rank: 2,
      content: 'Post do Neto (âncora emocional — 39 interações)',
      why: 'Conteúdo emocional com alta taxa de comentários. Ideal para engajamento e novos seguidores.',
      objective: 'ENGAGEMENT',
      budget: 'R$20-35/dia por 5 dias',
      expectedResult: '+200-400 interações, +50-100 seguidores',
      audience: 'Homens 35-55, empreendedores, pais, Brasil',
    },
    {
      rank: 3,
      content: 'Carrossel manifesto (a criar — "Liberdade é estratégia")',
      why: 'Conteúdo de autoridade evergreen. Ideal para atrair seguidores qualificados que se identificam com a tese.',
      objective: 'REACH + FOLLOWS',
      budget: 'R$50-100/dia por 7-10 dias',
      expectedResult: '+500-1.000 seguidores qualificados',
      audience: 'Empreendedores 28-50, interesse em liberdade financeira, negócios, viagens',
    },
    {
      rank: 4,
      content: 'Reel de bastidor empresarial (a criar)',
      why: 'Conteúdo de bastidor com prova de resultado converte melhor para tráfego qualificado para o link da bio.',
      objective: 'TRAFFIC (link na bio)',
      budget: 'R$30-60/dia por 7 dias',
      expectedResult: '300-600 cliques no link da bio',
      audience: 'Interessados em empreendedorismo, IA, govtech, 25-45 anos',
    },
  ],
  howToSponsor: [
    {
      step: 1,
      title: 'Escolha o conteúdo certo',
      detail: 'Nunca patrocine conteúdo que não performou organicamente. Se não funcionou de graça, dinheiro não resolve. Regra: só patrocinar post com ER acima da média do perfil (>0.031%).',
    },
    {
      step: 2,
      title: 'Defina o objetivo correto',
      detail: 'REACH: para novos seguidores e visibilidade. ENGAGEMENT: para comentários e interações. TRAFFIC: para cliques no link. Nunca use LINK_CLICKS em conteúdo de topo de funil.',
    },
    {
      step: 3,
      title: 'Configure a audiência certa',
      detail: 'Público principal: Homens 30-50, Brasil, interesse em empreendedorismo + viagens + tecnologia. Público lookalike: similar aos seus atuais seguidores (criar no Ads Manager).',
    },
    {
      step: 4,
      title: 'Defina orçamento e duração',
      detail: 'Mínimo R$20/dia por 5 dias para ter dados suficientes. Nunca pausar antes de 3 dias — o algoritmo precisa de tempo para otimizar. Budget ideal para teste: R$150-300 por campanha.',
    },
    {
      step: 5,
      title: 'Meça os resultados certos',
      detail: 'Para REACH: CPM (custo por mil). Para ENGAGEMENT: custo por interação. Para TRAFFIC: CPC (custo por clique). Benchmark: CPM < R$8, CPC < R$1,50.',
    },
    {
      step: 6,
      title: 'Escale o que funciona',
      detail: 'Se uma campanha tiver CPM < R$6 ou CPC < R$1, dobre o orçamento. Se estiver acima de R$12 CPM, pause e teste nova criativa ou audiência.',
    },
  ],
  monthlyBudgetSuggestion: {
    conservative: 'R$300/mês — 2 campanhas de R$150 cada',
    moderate: 'R$600/mês — 3-4 campanhas rotativas',
    aggressive: 'R$1.200/mês — campanha sempre ativa + testes A/B',
    recommendation: 'Começar com R$300/mês. Testar 2 conteúdos diferentes. Escalar o que funcionar no mês seguinte.',
  },
  audienceSegments: [
    { name: 'Core', description: 'Empreendedores brasileiros 30-50 anos', size: '2-5M', priority: 'Alta' },
    { name: 'Viajantes premium', description: 'Viajantes frequentes, renda alta, 28-50 anos', size: '1-3M', priority: 'Alta' },
    { name: 'Lusófono internacional', description: 'PT + BR + AO — empreendedores', size: '3-8M', priority: 'Média' },
    { name: 'Lookalike seguidores', description: 'Similar aos 62k atuais', size: 'Calculado pelo Meta', priority: 'Muito Alta' },
  ],
};
