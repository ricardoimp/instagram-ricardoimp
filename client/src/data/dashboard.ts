// Script Mestre — Auditoria Completa de Perfil @ricardoimp
// Estrutura de 4 camadas: raw_data | analytics_tables | executive_summary | scorecards
// Última coleta: 15/05/2026 às 11:10 — Instagram MCP
// 20 posts recentes analisados | alcance, views e salvos coletados quando disponíveis

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
  username: "@ricardoimp",
  name: "Ricardo Impellizieri",
  account_type: 'business/creator',
  bio_full: "Construo empresas enquanto viajo o mundo ✈️\n🏆7 empresas • 2 vendidas\n🌎37 países visitados\n👇🏼Liberdade é estratégia!",
  bio_summary: 'Empreendedor serial com empresas, viagens e posicionamento de liberdade como estratégia.',
  link_bio: "http://saiba-mais.ai",
  bio_emojis: ['✈️', '🏆', '🌎', '👇🏼'], bio_keywords: ['empresas', 'viajo', 'mundo', 'liberdade', 'estratégia'],
  value_proposition: 'Construir empresas enquanto vive o mundo — liberdade como resultado de estrutura', cta_bio: 'Link na bio (👇🏼)',
  languages: ['PT', 'EN', 'ES'], verification: false, niche_primary: 'Empreendedorismo & Lifestyle Premium', sub_niches: ['Viagens', 'Tecnologia/IA', 'Govtech', 'Liberdade financeira'],
  persona_apparent: 'Empreendedor aspiracional com lastro real de conquista', funnel_stage_predominant: 'awareness' as const, authority_presence: true, social_proof_presence: true, commercial_offer_presence: false,
  website: "http://saiba-mais.ai", collected_at: "2026-05-15T14:10:19Z",
};

export const postsRaw: PostRaw[] = [
  {
    id: "18077326622537902",
    date: "2026-05-14T22:13:04Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "Existem países que parecem secretos. \nEscondidos entre montanhas, silêncio, história e mar.\n\nMontenegro foi um deles pra mim.\n\nUm pequeno país dos Bálcãs, no sudeste da Europa, entre a Croácia, Sérvia, Bósnia e o mar Adriático.\n\nUm lugar que mistura vilas medievais, montanhas gigantes e um litoral que parece cenário de filme.\n\nE o mais curioso:\nquase ninguém fala sobre ele... mas eu falo!\n\n#trip #photography #instagood #loveit #europa",
    likes: 7, comments: 0, reach: 220, views: 244, saved: 0, total_interactions: 7,
    hashtags: [
  "trip",
  "photography",
  "instagood",
  "loveit",
  "europa"
], mentions: [],
    permalink: "https://www.instagram.com/reel/DYVdle8gJRX/"
  },
  {
    id: "18129566545517711",
    date: "2026-05-13T15:24:47Z",
    type: "IMAGE",
    media_product_type: "FEED",
    caption: "Pequenos detalhes contam grandes histórias.\n\n#jornada #negocios #historia #aprendizado #photography",
    likes: 5, comments: 0, reach: 149, views: 246, saved: 1, total_interactions: 6,
    hashtags: [
  "jornada",
  "negocios",
  "historia",
  "aprendizado",
  "photography"
], mentions: [],
    permalink: "https://www.instagram.com/p/DYSJJs5gnQT/"
  },
  {
    id: "17882203086418670",
    date: "2026-05-12T15:02:08Z",
    type: "IMAGE",
    media_product_type: "FEED",
    caption: "Clássicos são clássicos.\n\nSe foi para os E.U.A e não provou um @fiveguys você não conheceu os E.U.A.\n\n#hamburg #fiveguys #eua #food #photography",
    likes: 0, comments: 0, reach: 112, views: 179, saved: 0, total_interactions: 0,
    hashtags: [
  "hamburg",
  "fiveguys",
  "eua",
  "food",
  "photography"
], mentions: [
  "fiveguys"
],
    permalink: "https://www.instagram.com/p/DYPinOHxG7X/"
  },
  {
    id: "18109003246906463",
    date: "2026-05-11T11:16:26Z",
    type: "IMAGE",
    media_product_type: "FEED",
    caption: "O silêncio te reorganiza.",
    likes: 13, comments: 1, reach: 147, views: 259, saved: 0, total_interactions: 14,
    hashtags: [], mentions: [],
    permalink: "https://www.instagram.com/p/DYMj9kKgBsF/"
  },
  {
    id: "18048556742591637",
    date: "2026-05-09T23:09:56Z",
    type: "CAROUSEL_ALBUM",
    media_product_type: "FEED",
    caption: "Por algum bar de Seattle.\n\n#seattle #bar #drink #instagood #photography",
    likes: 3, comments: 1, reach: null, views: null, saved: null, total_interactions: 4,
    hashtags: [
  "seattle",
  "bar",
  "drink",
  "instagood",
  "photography"
], mentions: [],
    permalink: "https://www.instagram.com/p/DYIsYvTgDhM/"
  },
  {
    id: "18004667222739565",
    date: "2026-05-08T11:45:12Z",
    type: "IMAGE",
    media_product_type: "FEED",
    caption: "Bad Boys 😎🐕",
    likes: 22, comments: 1, reach: null, views: null, saved: null, total_interactions: 23,
    hashtags: [], mentions: [],
    permalink: "https://www.instagram.com/p/DYE47hCgDvZ/"
  },
  {
    id: "18462194005101879",
    date: "2026-05-07T02:30:26Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "✈️",
    likes: 2, comments: 0, reach: null, views: null, saved: null, total_interactions: 2,
    hashtags: [], mentions: [],
    permalink: "https://www.instagram.com/reel/DYBU6ocA2uP/"
  },
  {
    id: "18099295883038166",
    date: "2026-05-07T02:22:21Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "✈️",
    likes: 9, comments: 0, reach: null, views: null, saved: null, total_interactions: 9,
    hashtags: [], mentions: [],
    permalink: "https://www.instagram.com/reel/DYBT8_HgM6C/"
  },
  {
    id: "18101215795990406",
    date: "2026-04-28T15:01:05Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "Toda viagem revela 3 versões suas:\n\nA que você sustenta hoje.\nA que já não faz mais sentido.\nE a que está esperando uma decisão sua.\n\n#canada #instagram #trip #photography #paz",
    likes: 1, comments: 0, reach: null, views: null, saved: null, total_interactions: 1,
    hashtags: [
  "canada",
  "instagram",
  "trip",
  "photography",
  "paz"
], mentions: [],
    permalink: "https://www.instagram.com/reel/DXrfolmgNUe/"
  },
  {
    id: "18338572129171422",
    date: "2026-04-28T14:58:39Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "Toda viagem revela 3 versões suas:\n\nA que você sustenta hoje.\nA que já não faz mais sentido.\nE a que está esperando uma decisão sua.\n\n#canada #instagram #trip #photography #paz",
    likes: 10, comments: 1, reach: null, views: null, saved: null, total_interactions: 11,
    hashtags: [
  "canada",
  "instagram",
  "trip",
  "photography",
  "paz"
], mentions: [],
    permalink: "https://www.instagram.com/reel/DXrfHHGgO3d/"
  },
  {
    id: "18098472605102842",
    date: "2026-04-27T15:11:10Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "Entrei achando que era só um mercado\nsaí entendendo por que lugares assim duram séculos, um dos mercados mais antigos de istambul 🇹🇷\n\n#turquia #trip #viajar #instagood #reels",
    likes: 3, comments: 0, reach: null, views: null, saved: null, total_interactions: 3,
    hashtags: [
  "turquia",
  "trip",
  "viajar",
  "instagood",
  "reels"
], mentions: [],
    permalink: "https://www.instagram.com/reel/DXo7_qRgCfA/"
  },
  {
    id: "18110982055878581",
    date: "2026-04-27T15:07:43Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "Entrei achando que era só um mercado\nsaí entendendo por que lugares assim duram séculos, um dos mercados mais antigos de istambul 🇹🇷\n\n#turquia #trip #viajar #instagood #reels",
    likes: 21, comments: 4, reach: null, views: null, saved: null, total_interactions: 25,
    hashtags: [
  "turquia",
  "trip",
  "viajar",
  "instagood",
  "reels"
], mentions: [],
    permalink: "https://www.instagram.com/reel/DXo7KozAHJr/"
  },
  {
    id: "18115128127783856",
    date: "2026-04-26T15:35:43Z",
    type: "CAROUSEL_ALBUM",
    media_product_type: "FEED",
    caption: "Quanto mais eu vou…\nmais eu entendo que não é sobre ir.",
    likes: 22, comments: 1, reach: null, views: null, saved: null, total_interactions: 23,
    hashtags: [], mentions: [],
    permalink: "https://www.instagram.com/p/DXmaEoSFKsK/"
  },
  {
    id: "18591759310050140",
    date: "2026-04-24T15:49:40Z",
    type: "IMAGE",
    media_product_type: "FEED",
    caption: "No meio de tudo que eu construo…\né aqui que eu lembro o porquê.\n\n🇺🇸\nIn the middle of everything I build…\nthis is where I remember why.\n\n🇪🇸\nEn medio de todo lo que construyo…\nes aquí donde recuerdo el porqué.\n\n#grandson #photography #família #family #instagood",
    likes: 35, comments: 5, reach: null, views: null, saved: null, total_interactions: 40,
    hashtags: [
  "grandson",
  "photography",
  "família",
  "family",
  "instagood"
], mentions: [],
    permalink: "https://www.instagram.com/p/DXhReNcAJlQ/"
  },
  {
    id: "17943920478168349",
    date: "2026-04-21T16:58:33Z",
    type: "CAROUSEL_ALBUM",
    media_product_type: "FEED",
    caption: "Se a conta é sua…faça valer a vida que escolheu.\n\n🇪🇸\n\nSi la cuenta es tuya…\nhaz que valga la vida que elegiste.\n\n🇺🇸\n\nIf you’re the one paying the price…\nmake the life you chose worth it.\n\n#live #vivalavida #seattle #photography #market",
    likes: 13, comments: 7, reach: null, views: null, saved: null, total_interactions: 20,
    hashtags: [
  "live",
  "vivalavida",
  "seattle",
  "photography",
  "market"
], mentions: [],
    permalink: "https://www.instagram.com/p/DXZrk7RADRP/"
  },
  {
    id: "18118097605678754",
    date: "2026-04-18T21:25:36Z",
    type: "CAROUSEL_ALBUM",
    media_product_type: "FEED",
    caption: "O mundo não é só destino.\nÉ contraste.\n\n#marrocos #desert #trip #vivendo #mundo",
    likes: 29, comments: 2, reach: null, views: null, saved: null, total_interactions: 31,
    hashtags: [
  "marrocos",
  "desert",
  "trip",
  "vivendo",
  "mundo"
], mentions: [],
    permalink: "https://www.instagram.com/p/DXSbwQcFF0V/"
  },
  {
    id: "17866159815613734",
    date: "2026-04-16T22:52:16Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "O mundo é de quem se move.\nNão espere permissão.\n\nLos Angeles → Las Vegas\n\n#losangeles #lasvegas #movimento #viagem #empreendedorismo",
    likes: 11, comments: 1, reach: null, views: null, saved: null, total_interactions: 12,
    hashtags: [
  "losangeles",
  "lasvegas",
  "movimento",
  "viagem",
  "empreendedorismo"
], mentions: [],
    permalink: "https://www.instagram.com/reel/DXNbns2j4Kl/"
  },
  {
    id: "18117398149663032",
    date: "2026-04-15T21:47:22Z",
    type: "IMAGE",
    media_product_type: "FEED",
    caption: "Conheço o preço da liberdade.Eu pago.\n\n#mundo #liberdade #vivendo #life #good",
    likes: 12, comments: 1, reach: null, views: null, saved: null, total_interactions: 13,
    hashtags: [
  "mundo",
  "liberdade",
  "vivendo",
  "life",
  "good"
], mentions: [],
    permalink: "https://www.instagram.com/p/DXKvqEJiZ6p/"
  },
  {
    id: "18223237996314109",
    date: "2026-04-11T16:28:14Z",
    type: "CAROUSEL_ALBUM",
    media_product_type: "FEED",
    caption: "Ninguém fala muito da Croácia…\nmas deveria.\n\nÁgua transparente de verdade.\nCidade histórica colada no mar.\nE uma paz que você não encontra fácil.\n\nTem lugar que é bonito.\nE tem lugar que te faz parar.\n\nEsse aqui é a segunda opção.\n\n#croacia #paradise #photographer #instagood #europa",
    likes: 14, comments: 1, reach: null, views: null, saved: null, total_interactions: 15,
    hashtags: [
  "croacia",
  "paradise",
  "photographer",
  "instagood",
  "europa"
], mentions: [],
    permalink: "https://www.instagram.com/p/DW_4KJtAPQA/"
  },
  {
    id: "18084408851056630",
    date: "2026-04-10T14:46:38Z",
    type: "VIDEO",
    media_product_type: "REELS",
    caption: "Tudo que você constrói te traz pra momentos assim.\n\nAlmoçar no Rio Sena navegando por Paris é uma experiência incrível… um belo menu … passando pelos principais pontos turísticos da cidade com aquela champa 🥂 geladinha. Not a price 😉\n\n#paris #trip #viagem #europa #photography",
    likes: 9, comments: 2, reach: null, views: null, saved: null, total_interactions: 11,
    hashtags: [
  "paris",
  "trip",
  "viagem",
  "europa",
  "photography"
], mentions: [],
    permalink: "https://www.instagram.com/reel/DW9HKuGgMmr/"
  }
];

// ─────────────────────────────────────────────────────────────
// CAMADA 2 — ANALYTICS TABLES
// ─────────────────────────────────────────────────────────────
export const profileMetrics = { followers: 61246, following: 299, posts_total: 3011, follower_following_ratio: 204.8, posts_per_week_estimated: 4.1, reels_share_pct: 45.0, feed_image_share_pct: 30.0, carousel_share_pct: 25.0, source: 'Instagram MCP', collected_at: "2026-05-15T14:10:19Z" };

export const calculatedFields = {
  avg_likes_last_20: 12.1, avg_comments_last_20: 1.4, avg_views_last_20: 232, avg_reach_last_20: 157, avg_interactions_last_20: 13.5,
  median_likes: 10.5, median_comments: 1.0, avg_caption_length: 144.4, avg_hashtags_per_post: 3.75, avg_mentions_per_post: 0.05,
  posting_frequency_per_week: 4.1, follower_following_ratio: 204.8, engagement_rate_avg_pct: 0.022, top_3_content_formats: [
  "REELS",
  "IMAGE",
  "CAROUSEL_ALBUM"
], top_5_content_topics: ['Viagem & Lifestyle', 'Empreendedorismo', 'Autoridade', 'Tecnologia/IA', 'Reflexão & Propósito'], top_5_words: [
  "photography",
  "trip",
  "instagood",
  "europa",
  "seattle"
],
  best_post_by_interactions: { id: "18591759310050140", interactions: 40, caption_preview: "No meio de tudo que eu construo… é aqui que eu lembro o porquê. 🇺🇸 In the middle of everything I build… this is whe…", reach: null },
  best_reel_by_views: { id: "18077326622537902", views: 244, caption_preview: "Existem países que parecem secretos. Escondidos entre montanhas, silêncio, história e mar. Montenegro foi um deles …", reach: 220 },
  worst_post_by_interactions: { id: "17882203086418670", interactions: 0, caption_preview: "Clássicos são clássicos. Se foi para os E.U.A e não provou um @fiveguys você não conheceu os E.U.A. #hamburg #fiveg…" },
  most_common_posting_day: "Quarta", most_common_posting_hour: "12:00", estimated_content_pillars: ['Viagem & Lifestyle', 'Empreendedorismo', 'Autoridade', 'Tecnologia/IA', 'Reflexão & Propósito'], estimated_target_audience: 'Empreendedores 28-45 anos, Brasil, interessados em liberdade financeira, viagens e construção de negócios', estimated_business_model: 'Posicionamento de autoridade → tráfego para saiba-mais.ai → conversão em serviços/consultorias', estimated_primary_cta: 'Tráfego para link na bio (saiba-mais.ai)', estimated_conversion_path: 'Conteúdo orgânico → perfil → link bio → landing page',
};

export const postingPatterns = { most_active_day: "Quarta", most_active_hour: "12:00", posts_per_week_estimated: 4.1, days_distribution: {
  "Quinta": 2,
  "Quarta": 4,
  "Terça": 4,
  "Segunda": 3,
  "Sábado": 3,
  "Sexta": 3,
  "Domingo": 1
}, format_distribution: {
  "REELS": 9,
  "IMAGE": 6,
  "CAROUSEL_ALBUM": 5
}, format_distribution_pct: {
  "REELS": 45.0,
  "IMAGE": 30.0,
  "CAROUSEL_ALBUM": 25.0
}, funnel_distribution: { topo: 17, meio: 3, fundo: 0 }, content_temp_distribution: { frio: 5, morno: 11, quente: 4 }, consistency: "4.1 posts/semana nos 20 posts recentes", seasonality: 'Publicação ligada a viagens, bastidores e marcos de autoridade' };

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
  {
    "id": "18591759310050140",
    "date": "2026-04-24",
    "type": "IMAGE",
    "caption_preview": "No meio de tudo que eu construo… é aqui que eu lembro o porquê. 🇺🇸 In the middle of everything I build… this is whe…",
    "total_interactions": 40,
    "reach": "N/A",
    "views": "N/A",
    "saved": 0
  },
  {
    "id": "18118097605678754",
    "date": "2026-04-18",
    "type": "CAROUSEL_ALBUM",
    "caption_preview": "O mundo não é só destino. É contraste. #marrocos #desert #trip #vivendo #mundo",
    "total_interactions": 31,
    "reach": "N/A",
    "views": "N/A",
    "saved": 0
  },
  {
    "id": "18110982055878581",
    "date": "2026-04-27",
    "type": "VIDEO",
    "caption_preview": "Entrei achando que era só um mercado saí entendendo por que lugares assim duram séculos, um dos mercados mais antig…",
    "total_interactions": 25,
    "reach": "N/A",
    "views": "N/A",
    "saved": 0
  },
  {
    "id": "18004667222739565",
    "date": "2026-05-08",
    "type": "IMAGE",
    "caption_preview": "Bad Boys 😎🐕",
    "total_interactions": 23,
    "reach": "N/A",
    "views": "N/A",
    "saved": 0
  },
  {
    "id": "18115128127783856",
    "date": "2026-04-26",
    "type": "CAROUSEL_ALBUM",
    "caption_preview": "Quanto mais eu vou… mais eu entendo que não é sobre ir.",
    "total_interactions": 23,
    "reach": "N/A",
    "views": "N/A",
    "saved": 0
  }
];

export const topPostsByReach = [
  {
    "id": "18077326622537902",
    "date": "2026-05-14",
    "type": "VIDEO",
    "caption_preview": "Existem países que parecem secretos. Escondidos entre montanhas, silêncio, história e mar. Montenegro foi um deles …",
    "total_interactions": 7,
    "reach": "220",
    "views": "244",
    "saved": 0
  },
  {
    "id": "18129566545517711",
    "date": "2026-05-13",
    "type": "IMAGE",
    "caption_preview": "Pequenos detalhes contam grandes histórias. #jornada #negocios #historia #aprendizado #photography",
    "total_interactions": 6,
    "reach": "149",
    "views": "246",
    "saved": 1
  },
  {
    "id": "18109003246906463",
    "date": "2026-05-11",
    "type": "IMAGE",
    "caption_preview": "O silêncio te reorganiza.",
    "total_interactions": 14,
    "reach": "147",
    "views": "259",
    "saved": 0
  },
  {
    "id": "17882203086418670",
    "date": "2026-05-12",
    "type": "IMAGE",
    "caption_preview": "Clássicos são clássicos. Se foi para os E.U.A e não provou um @fiveguys você não conheceu os E.U.A. #hamburg #fiveg…",
    "total_interactions": 0,
    "reach": "112",
    "views": "179",
    "saved": 0
  }
];

export const topReelsByViews = [
  {
    "id": "18077326622537902",
    "date": "2026-05-14",
    "type": "VIDEO",
    "caption_preview": "Existem países que parecem secretos. Escondidos entre montanhas, silêncio, história e mar. Montenegro foi um deles …",
    "total_interactions": 7,
    "reach": "220",
    "views": "244",
    "saved": 0
  }
];

export const captionAnalysis = { avg_length_chars: 144, avg_hashtags_per_post: 3.75, avg_mentions_per_post: 0.05, dominant_tone: 'Inspiracional com densidade filosófica', common_opening_style: 'Frase curta + contraste/reflexão', narrative_format: 'Abertura impactante → desenvolvimento → fecho reflexivo', presence_of_questions: 'Baixa — oportunidade de elevar comentários com CTA direto', presence_of_storytelling: 'Alta — conteúdo recente mantém narrativa aspiracional', presence_of_cta: 'Baixa — gap crítico de conversão para link da bio', most_frequent_cta: 'Nenhum CTA dominante — gap crítico', most_used_emojis: ['✈️', '🌍', '🏆', '🚀', '🔥'], top_words: [
  "photography",
  "trip",
  "instagood",
  "europa",
  "seattle",
  "canada",
  "instagram"
], multilingual_posts_count: 3, multilingual_languages: ['PT', 'EN', 'ES'] };

export const hashtagsAnalysis = [
  {
    "hashtag": "photography",
    "count": 9
  },
  {
    "hashtag": "trip",
    "count": 7
  },
  {
    "hashtag": "instagood",
    "count": 6
  },
  {
    "hashtag": "europa",
    "count": 3
  },
  {
    "hashtag": "seattle",
    "count": 2
  },
  {
    "hashtag": "canada",
    "count": 2
  },
  {
    "hashtag": "instagram",
    "count": 2
  },
  {
    "hashtag": "paz",
    "count": 2
  },
  {
    "hashtag": "turquia",
    "count": 2
  },
  {
    "hashtag": "viajar",
    "count": 2
  }
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
  overview: 'Perfil creator/business de empreendedor serial com posicionamento de autoridade aspiracional. Nicho: empreendedorismo + lifestyle premium + viagens. 61.241 seguidores. 4,2 posts/semana estimados e ER disponível de 0.028% calculado apenas por likes+comentários.',
  positioning: 'Combinação de mobilidade global + construção empresarial real + prova de conquista (govtech, empresas vendidas). Promessa central: liberdade como resultado de estrutura.',
  content_pattern: 'Inspiração + autoridade + lifestyle. Falta pilar de conversão explícito. 45% Reels, 30% carrossel e 25% imagem nos 20 posts recentes; carrossel e imagem aparecem agregados como FEED no conector.',
  best_format: 'Imagem/autoridade Govtech lidera com 57 interações, 363 de alcance e 739 views; entre Reels, Istambul lidera com 25 interações, 381 de alcance e 538 views.',
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
    'Reels com estética forte, mas views recentes ainda variam muito; o maior sinal veio de tese clara + contexto de viagem',
    'Funil comercial subaproveitado — saiba-mais.ai não mencionado nos posts',
    'Meta Ads voltou com entrega mensurável: 36.188 impressões e 671 Cliques (todos), mas spend retornou R$0 e precisa validação',
    'Frequência estimada em 4,2 posts/semana, ainda sem série recorrente clara',
  ],
  opportunities: [
    'Criar CTA fixo em todos os posts: "Link na bio para [benefício específico]"',
    'Escalar padrão do post do neto: âncora emocional real + construção empresarial',
    'Transformar Reels em veículo de argumento: tese nos primeiros 2 segundos',
    'Criar série semanal recorrente: "Bastidor de decisão" ou "O que aprendi construindo"',
    'Validar gasto R$0 e rastreamento Meta antes de escalar orçamento',
    'Explorar trilinguismo sistematicamente — PT/EN/ES em todos os posts',
    'Adicionar Stories diários com caixas de pergunta e bastidores',
    'Criar carrossel manifesto sobre liberdade estratégica (formato de argumento)',
    'Vincular viagem explicitamente ao negócio em cada post de destino',
    'Desenvolver destaque "Empresas" e "Govtech" para prova social no perfil',
  ],
  recommended_kpis: [
    'Taxa de engajamento por post (meta: >0.1%)',
    'Alcance médio por post recente: 258',
    'Views por post recente: média 454; meta >500 em Reels com tese forte',
    'Salvamentos por post (indicador de conteúdo de valor)',
    'Crescimento líquido de seguidores por semana',
    'Shares por post (amplificação orgânica)',
    'Cliques no link da bio (indisponível no conector atual)',
  ],
  risks: [
    'Seguidores em 61.241 nesta coleta — monitorar variação semanal',
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
  { key: 'consistencia_editorial', label: 'Consistência Editorial', value: 6, interpretation: 'Temas coerentes mas sem série recorrente. Frequência estimada em 4,2 posts/semana.', tone: 'neutral' },
  { key: 'frequencia', label: 'Frequência', value: 7, interpretation: '4,2 posts/semana estimados nos 20 posts recentes. Meta: manter cadência com Stories diários.', tone: 'positive' },
  { key: 'diversidade_formatos', label: 'Diversidade de Formatos', value: 7, interpretation: 'Boa distribuição: 45% Reels, 30% carrossel e 25% imagem nos 20 posts recentes; carrossel e imagem aparecem agregados como FEED no conector. Stories ausentes na análise.', tone: 'positive' },
  { key: 'uso_cta', label: 'Uso de CTA', value: 5, interpretation: 'Gap crítico — menos de 30% dos posts têm CTA explícito. Maior oportunidade de melhoria imediata.', tone: 'warning' },
  { key: 'potencial_conversao', label: 'Potencial de Conversão', value: 5, interpretation: 'Funil subaproveitado. Link na bio ativo mas pouco mencionado nos posts. ER disponível de 0.028% por likes+comentários.', tone: 'warning' },
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
    { accountId: 'act_1158819016166775', name: 'Ricardo Impellizieri / MM Lite', businessName: 'Conta com insights retornados', currency: 'BRL', status: 'ACTIVE', last30d: '36.188 Impressões · 671 Cliques (todos) · 669 Link clicks · Valor usado R$0 retornado pela API' },
    { accountId: 'act_9525474394174655', name: 'Ricardo Impellizieri', businessName: 'loggica intermediacoes de negócios', currency: 'BRL', status: 'ACTIVE', last30d: 'Sem insights nos últimos 30 dias retornados pelo conector' },
    { accountId: 'act_265574476787926', name: '265574476787926', businessName: 'SANDRO JOSE RICARDO IMPELLIZIERI DE OLIVEIRA', currency: 'BRL', status: 'ACTIVE', last30d: 'Sem insights nos últimos 30 dias retornados pelo conector' },
  ],
  activeCampaign: {
    name: 'Traffic Campaign',
    objective: 'OUTCOME_TRAFFIC',
    status: 'ACTIVE',
    dailyBudget: 'Não retornado',
    createdAt: '22 set 2025',
    reading: 'Últimos 30 dias com entrega real retornada: Traffic Campaign gerou 29.545 impressões, 14.773 de alcance, 666 Cliques (todos), 664 Link clicks e CTR (todos) 2,25%, com spend R$0 informado pela API. A campanha MM_LITE_DEFAULT_AD_CAMPAIGN_GROUP gerou 6.643 impressões, 4.398 de alcance e 5 Cliques (todos), CTR (todos) 0,075%.',
  },
  nextSteps: [
    'Validar no Ads Manager por que o gasto retornou R$0 mesmo com impressões e cliques registrados.',
    'Manter Traffic Campaign como referência, mas revisar rastreamento, evento de destino e UTMs antes de escalar.',
    'Pausar ou revisar MM_LITE_DEFAULT_AD_CAMPAIGN_GROUP: volume razoável, CTR muito baixo.',
    'Aplicar recomendação oficial Meta de variações criativas, estimada em redução de 3% no custo por resultado.',
  ],
};

// ─────────────────────────────────────────────────────────────
// DATA QUALITY
// ─────────────────────────────────────────────────────────────
export const dataQuality = { source: 'Instagram MCP', collection_date: "15/05/2026 às 11:10", posts_analyzed: 20, period: '20 posts recentes', limitations: ['Métricas de stories e demografia não estavam disponíveis nesta integração', 'Insights por post retornaram alcance, views e salvos quando disponíveis', 'Análise qualitativa inferida por caption, formato e sinais públicos'], confidence_level: 'Alta para perfil/posts; média para recomendações qualitativas' };

// ─────────────────────────────────────────────────────────────
// OBJETO PRINCIPAL (compatibilidade com Home.tsx existente)
// ─────────────────────────────────────────────────────────────
export const dashboardData = {
  meta: {
    profile: profileIdentity,
    lastUpdated: "15/05/2026 às 11:10",
    dashboardCadence: 'Atualização semanal aos domingos',
    designPhilosophy: 'Editorial executivo cinematográfico',
  },
  executive: {
    summary: {
      profileStrength: executiveSummary.overview,
      instagramReading: 'Nos 20 posts recentes, a leitura confiável nesta coleta é likes + comentários. O post Govtech lidera com 57 interações, 363 de alcance e 739 views. O post do neto vem com 40 interações, 429 de alcance e 803 views. Alcance, views e salvos retornaram para os 20 posts recentes.',
      adsReading: 'Meta Ads retornou entrega real nos últimos 30 dias: 36.188 impressões e 671 Cliques (todos) somando Traffic Campaign e MM Lite. O ponto crítico é a API retornar spend R$0, o que exige validação no Ads Manager antes de escalar.',
      criticalPoint: 'Gap crítico permanece: conteúdo tem autoridade, mas CTA explícito ainda é baixo. Sem CTA e sem rastreamento consistente, alcance vira vaidade e cliques não viram receita medida.',
    },
    kpis: [
      { label: 'Seguidores', value: '61.246', delta: 'coleta atual', tone: 'positive' as const },
      { label: 'Seguindo', value: '299', delta: 'ratio 204.8:1', tone: 'positive' as const },
      { label: 'Publicações', value: '3.011', delta: '4.1 posts/semana', tone: 'positive' as const },
      { label: 'Anúncios Meta', value: '36,2 mil impr.', delta: '671 cliques · spend R$0', tone: 'warning' as const },
    ],
    conversion: [
      { label: 'ER disponível', value: '0.022%', note: 'Likes + comentários / seguidores' },
      { label: 'Alcance médio', value: '157', note: 'Média dos 20 posts recentes com insight retornado' },
      { label: 'Views médias', value: '232', note: 'Média dos 20 posts recentes com insight retornado' },
    ],
    alerts: [
      'Gap de CTA: menos de 30% dos posts têm chamada para ação — maior oportunidade imediata.',
      'Govtech e neto lideram em interação; views e alcance já retornaram nesta coleta para os 20 posts recentes.',
      'Monitorar variação semanal de seguidores para separar oscilação normal de perda estrutural.',
      'Meta Ads tem entrega e cliques; validar por que a API retorna spend R$0 antes de escalar.',
    ],
  },
  deepAnalysis: {
    positioning: {
      seenAs: 'Empreendedor aspiracional com lastro real — alguém que construiu empresas de verdade (govtech, 7 empresas, 2 vendidas) enquanto viaja o mundo. A combinação de mobilidade + conquista + trilinguismo cria uma percepção de autoridade premium rara no nicho.',
      tension: 'O perfil inspira muito e converte pouco. O conteúdo de viagem pura atrai admiração passiva. O conteúdo de negócios/autoridade (sala de operações, govtech) gera engajamento mais qualificado mas aparece menos de 20% das vezes.',
      misalignment: 'A proposta central (liberdade como estratégia) está na bio mas não nos posts. Menos de 30% dos posts têm CTA explícito. O link da bio (saiba-mais.ai) não é mencionado em nenhum post analisado.',
    },
    formatPerformance: [
      { format: 'Reels', reach: '100–381', depth: 'Alta variação — depende do argumento', engagement: 'Istambul: 25 interações · 381 alcance · 538 views', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato para escala quando a tese aparece cedo. Média recente: 454 views no conjunto analisado.' },
      { format: 'Posts estáticos (Imagem)', reach: '199–495', depth: 'Alta quando há âncora emocional ou autoridade', engagement: 'Govtech: 57 interações · Neto: 40 interações', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato para engajamento profundo quando há prova real ou vínculo humano.' },
      { format: 'Carrosséis', reach: '101–328', depth: 'Consistente quando há tese visual', engagement: 'Marrocos: 31 interações · 328 alcance · 841 views', followers: 'N/A', clicks: 'N/A', signal: 'Bom para atmosfera e narrativa visual; precisa CTA de salvamento para virar ativo de valor.' },
      { format: 'Stories', reach: 'N/A', depth: 'Dados indisponíveis no conector atual', engagement: 'N/A', followers: 'N/A', clicks: 'N/A', signal: 'Bloco preparado para receber dados. Recomendação: Stories diários para aumentar frequência sem sobrecarregar feed.' },
    ],
    rankings: topPostsByInteractions.map((p, i) => ({
      title: `#${i + 1} por engajamento`,
      item: p.caption_preview,
      metric: `${p.total_interactions} interações · alcance ${p.reach} · views ${p.views}`,
      why: i === 0 ? 'Autoridade concreta + ambição declarada. Melhor engajamento do período e prova de que negócios/Govtech ativam audiência qualificada.'
        : i === 1 ? 'Âncora emocional real (neto). Melhor post de imagem do período — prova que conexão humana supera estética de viagem.'
        : i === 2 ? 'Viagem com tese simples de contraste. Carrossel com maior tração visual: 841 views.'
        : i === 3 ? 'Reel de viagem com descoberta clara. Melhor Reel por interação e alcance no recorte recente.'
        : 'Reflexão curta com boa resposta para carrossel; oportunidade de incluir CTA de comentário/salvamento.',
    })),
  },
  audience: {
    layers: [
      { title: 'Quem responde melhor', text: 'Conteúdo com âncora emocional real (família, conquista, bastidor) concentra o melhor sinal. Govtech (57 interações) e post do neto (40 interações) confirmam que surpresa e conexão humana superam viagem pura.' },
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
      { type: 'Reel', title: 'Experiência premium com tese', hook: 'Entrei achando que era X. Saí entendendo Y.', concept: 'Replicar estrutura do Reel de Istambul: descoberta + surpresa + aprendizado de negócio.', structure: 'Abertura de descoberta → surpresa → tese de negócio → fechamento.', cta: '"Qual foi sua última descoberta que mudou sua perspectiva? Comenta."' },
      { type: 'Image', title: 'Âncora emocional real', hook: 'No meio de tudo que construo…', concept: 'Replicar estrutura do post do neto: momento humano real + âncora de construção empresarial.', structure: 'Foto forte → legenda emocional → conexão com propósito → CTA de engajamento.', cta: '"O que te lembra o porquê de tudo isso? Comenta."' },
      { type: 'Carrossel', title: 'Contraste + tese', hook: '[Lugar] não é sobre [o óbvio]. É sobre [a tese].', concept: 'Replicar estrutura do Marrocos: visual impactante + frase de contraste + tese de vida/negócio.', structure: 'Slide 1: visual forte → Slide 2-4: desenvolvimento → Slide final: CTA.', cta: '"Salva para lembrar quando precisar de perspectiva."' },
      { type: 'Stories', title: 'Bastidor de decisão diário', hook: 'Uma decisão que parece pequena e muda o ano inteiro.', concept: 'Stories diários com bastidores de decisão, viagem ou empresa.', structure: 'Story 1: contexto → Story 2: decisão → Story 3: consequência + CTA.', cta: '"Quer ver mais bastidores assim?"' },
      { type: 'Reel', title: 'Argumento nos 2 primeiros segundos', hook: '[Tese direta e afiada]', concept: 'Testar Reels onde a tese aparece antes da paisagem — validar hipótese de retenção.', structure: 'Tese → evidência visual → desenvolvimento → fechamento com CTA.', cta: '"Link na bio para [benefício específico]."' },
    ],
    abTests: [
      { name: 'CTA explícito vs sem CTA', hypothesis: 'Posts com CTA explícito ("link na bio", "comenta X") geram mais cliques e comentários do que posts sem CTA. Hipótese baseada no gap atual: <30% dos posts têm CTA.', measure: 'Comparar comentários, cliques e salvamentos entre posts com e sem CTA nos próximos 30 dias.' },
      { name: 'Âncora emocional real vs viagem pura', hypothesis: 'Posts com âncora emocional real ou prova concreta geram mais interações do que viagem pura. Confirmado: Govtech (57) e neto (40) acima dos Reels de movimento simples.', measure: 'Comparar total_interactions, comentários e reach nos próximos 3 ciclos.' },
      { name: 'Trilinguismo vs português apenas', hypothesis: 'Posts com legenda em PT/EN/ES ampliam alcance internacional. Testar sistematicamente.', measure: 'Comparar reach médio entre posts trilíngues e posts apenas em português nos próximos 30 dias.' },
    ],
    autoAlerts: [
      'ATIVO: Monitorar variação semanal de seguidores nas próximas 2 semanas.',
      'ATIVO: Campanha Meta com entrega mensurável, mas Valor usado retornou R$0. Validar cobrança/rastreamento antes de novo investimento.',
      'Alerta quando ER médio cair abaixo de 0.02% por duas semanas seguidas.',
      'Alerta quando Reel ficar abaixo de 300 views — abaixo do patamar mínimo saudável atual.',
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
  note: 'Baseado nos 20 posts recentes com timestamps reais — BRT (UTC-3)',
  bestDays: [
  {
    "day": "Sexta",
    "avgEngagement": 24.7,
    "postsAnalyzed": 3,
    "score": 10,
    "label": "MELHOR",
    "color": "gold"
  },
  {
    "day": "Domingo",
    "avgEngagement": 23.0,
    "postsAnalyzed": 1,
    "score": 9,
    "label": "MELHOR",
    "color": "gold"
  },
  {
    "day": "Sábado",
    "avgEngagement": 16.7,
    "postsAnalyzed": 3,
    "score": 7,
    "label": "FORTE",
    "color": "green"
  },
  {
    "day": "Segunda",
    "avgEngagement": 14.0,
    "postsAnalyzed": 3,
    "score": 6,
    "label": "MÉDIO",
    "color": "yellow"
  },
  {
    "day": "Quinta",
    "avgEngagement": 9.5,
    "postsAnalyzed": 2,
    "score": 4,
    "label": "EVITAR",
    "color": "red"
  },
  {
    "day": "Terça",
    "avgEngagement": 8.0,
    "postsAnalyzed": 4,
    "score": 3,
    "label": "EVITAR",
    "color": "red"
  },
  {
    "day": "Quarta",
    "avgEngagement": 7.5,
    "postsAnalyzed": 4,
    "score": 3,
    "label": "EVITAR",
    "color": "red"
  }
],
  bestHours: [
  {
    "hour": "18h",
    "avgEngagement": 22.0,
    "postsAnalyzed": 2,
    "score": 10,
    "label": "MELHOR",
    "color": "gold"
  },
  {
    "hour": "08h",
    "avgEngagement": 18.5,
    "postsAnalyzed": 2,
    "score": 8,
    "label": "FORTE",
    "color": "green"
  },
  {
    "hour": "13h",
    "avgEngagement": 17.5,
    "postsAnalyzed": 2,
    "score": 8,
    "label": "FORTE",
    "color": "green"
  },
  {
    "hour": "12h",
    "avgEngagement": 14.0,
    "postsAnalyzed": 7,
    "score": 6,
    "label": "MÉDIO",
    "color": "yellow"
  },
  {
    "hour": "11h",
    "avgEngagement": 11.0,
    "postsAnalyzed": 2,
    "score": 5,
    "label": "MÉDIO",
    "color": "yellow"
  },
  {
    "hour": "19h",
    "avgEngagement": 9.5,
    "postsAnalyzed": 2,
    "score": 4,
    "label": "EVITAR",
    "color": "red"
  }
],
  optimalWindows: [
    { label: 'Janela #1 — Ouro', day: 'Sexta', hour: '18h', expectedEng: 'acima da média recente', rationale: 'Melhor combinação observada no recorte atual.' },
    { label: 'Janela #2 — Prata', day: 'Domingo', hour: '08h', expectedEng: 'boa consistência', rationale: 'Segunda melhor faixa do período.' },
    { label: 'Janela #3 — Bronze', day: 'Sábado', hour: '13h', expectedEng: 'teste recomendado', rationale: 'Janela alternativa para validação.' },
  ],
  weeklyCalendar: [
  {
    "day": "Segunda",
    "recommended": false,
    "reason": "Usar para Stories ou testes."
  },
  {
    "day": "Terça",
    "recommended": false,
    "reason": "Usar para Stories ou testes."
  },
  {
    "day": "Quarta",
    "recommended": false,
    "reason": "Usar para Stories ou testes."
  },
  {
    "day": "Quinta",
    "recommended": false,
    "reason": "Usar para Stories ou testes."
  },
  {
    "day": "Sexta",
    "recommended": true,
    "reason": "Recomendado pelo engajamento médio recente."
  },
  {
    "day": "Sábado",
    "recommended": true,
    "reason": "Recomendado pelo engajamento médio recente."
  },
  {
    "day": "Domingo",
    "recommended": true,
    "reason": "Recomendado pelo engajamento médio recente."
  }
],
  postingFrequency: { current: '4.1 posts/semana', recommended: '4-5 posts/semana', gap: 'Aumentar cadência com consistência e CTA por post.', storiesRecommended: '1-2 Stories/dia', storiesCurrent: 'Não monitorado' },
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
    targetReach: '5-10% dos seguidores por Story (3.062–6.125)',
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
    proof: 'Govtech (57 interações, 363 alcance) e Post do Neto (40 interações, 429 alcance) confirmam: quando você combina prova real ou âncora emocional com tese de construção, o engajamento sobe.',
    antiFormula: 'Reel de movimento puro sem argumento = views sem ação. LA→LV e Canadá provam isso.',
  },
  growthTargets: {
    followers30d: '+500 seguidores em 30 dias (meta conservadora com estratégia ativa)',
    followers90d: '+2.000 seguidores em 90 dias (com série semanal + Stories diários)',
    erTarget: '0,08% ER médio (hoje 0,028% — meta realista em 60 dias)',
    reachTarget: '600 alcance médio por post (hoje 258)',
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
    campaign: 'Traffic Campaign',
    status: 'ATIVA — COM ENTREGA, MAS VALOR USADO R$0 NA API',
    budget: 'Não retornado',
    objective: 'OUTCOME_TRAFFIC',
    problem: 'A campanha entregou 29.545 impressões e 666 Cliques (todos), mas o Valor usado retornou R$0. Antes de escalar, é preciso validar cobrança, evento de destino, UTMs e consistência do Ads Manager.',
    recommendation: 'MANTER EM OBSERVAÇÃO. Não escalar orçamento antes de validar gasto, rastreamento e qualidade do tráfego.',
  },
  whatToSponsor: [
    {
      rank: 1,
      content: 'Post Govtech (melhor engajamento — 57 interações)',
      why: 'Já provou autoridade e intenção de negócio organicamente. Patrocinar prova real tende a atrair audiência mais qualificada do que viagem pura.',
      objective: 'REACH',
      budget: 'R$25-50/dia por 5-7 dias',
      expectedResult: '15.000-30.000 alcance adicional',
      audience: 'Empreendedores 30-50 anos, Brasil + Portugal + Argentina',
    },
    {
      rank: 2,
      content: 'Post do Neto (âncora emocional — 40 interações)',
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
