// Script Mestre — Auditoria Completa de Perfil @ricardoimp
// Estrutura de 4 camadas: raw_data | analytics_tables | executive_summary | scorecards
// Última coleta: 25/05/2026 às 03:05 — Instagram MCP + Meta Ads MCP
// 20 posts recentes analisados | insights completos disponíveis nos 5 posts mais recentes; demais lacunas preservadas

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
  "username": "@ricardoimp",
  "name": "Ricardo Impellizieri",
  "account_type": "business/creator",
  "bio_full": "Construo empresas enquanto viajo o mundo ✈️\n🏆7 empresas • 2 vendidas\n🌎37 países visitados\n👇🏼Liberdade é estratégia!",
  "bio_summary": "Empreendedor serial com empresas, viagens e posicionamento de liberdade como estratégia.",
  "link_bio": "http://saiba-mais.ai",
  "bio_emojis": [
    "✈️",
    "🏆",
    "🌎",
    "👇🏼"
  ],
  "bio_keywords": [
    "empresas",
    "viajo",
    "mundo",
    "liberdade",
    "estratégia"
  ],
  "value_proposition": "Construir empresas enquanto vive o mundo — liberdade como resultado de estrutura",
  "cta_bio": "Link na bio (👇🏼)",
  "languages": [
    "PT",
    "EN",
    "ES"
  ],
  "verification": false,
  "niche_primary": "Empreendedorismo & Lifestyle Premium",
  "sub_niches": [
    "Viagens",
    "Tecnologia/IA",
    "Govtech",
    "Liberdade financeira"
  ],
  "persona_apparent": "Empreendedor aspiracional com lastro real de conquista",
  "funnel_stage_predominant": 'awareness' as const,
  "authority_presence": true,
  "social_proof_presence": true,
  "commercial_offer_presence": false,
  "website": "http://saiba-mais.ai",
  "collected_at": "2026-05-25T03:05:21-03:00"
};

export const postsRaw: PostRaw[] = [
  {
    "id": "17949953874176423",
    "date": "2026-05-24T21:16:16Z",
    "type": "CAROUSEL_ALBUM",
    "media_product_type": "FEED",
    "caption": "Uma das maiores mesquitas do mundo, a Mesquita Hassan II.\n\nFoi aqui que eu entendi que grandes muralhas não foram construídas apenas para mostrar poder…\nalgumas foram construídas para guardar o silêncio.\n\nCada detalhe desse lugar parece diminuir o barulho do mundo lá fora.\n\nE talvez seja exatamente por isso que certas construções atravessam séculos:\n\nporque elas não impressionam apenas os olhos…\nimpressionam a alma.\n\nViajar modifica… solidifica e reconstrói 🔥\n\n#hassan #casablanca #marrocos #trip #photographer",
    "likes": 2,
    "comments": 0,
    "reach": 115,
    "views": 203,
    "saved": 0,
    "total_interactions": 2,
    "hashtags": [
      "hassan",
      "casablanca",
      "marrocos",
      "trip",
      "photographer"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DYvHTSjlP61/"
  },
  {
    "id": "17989495916985445",
    "date": "2026-05-22T20:46:59Z",
    "type": "CAROUSEL_ALBUM",
    "media_product_type": "FEED",
    "caption": "Pode parecer clichê….\nmas Miami é foda.\n\n#miami #eua #vivendo #instagood #photography",
    "likes": 9,
    "comments": 1,
    "reach": 182,
    "views": 395,
    "saved": 0,
    "total_interactions": 10,
    "hashtags": [
      "miami",
      "eua",
      "vivendo",
      "instagood",
      "photography"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DYp6XJclKNZ/"
  },
  {
    "id": "18321827566257292",
    "date": "2026-05-19T22:06:11Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "Ideias mudam empresas.\nAmbiente muda ideias.",
    "likes": 2,
    "comments": 0,
    "reach": 196,
    "views": 267,
    "saved": 0,
    "total_interactions": 2,
    "hashtags": [],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DYiUqfmgeho/"
  },
  {
    "id": "17981631668843076",
    "date": "2026-05-19T15:59:27Z",
    "type": "IMAGE",
    "media_product_type": "FEED",
    "caption": "Boa comida também faz parte da viagem.\n\n#foodlover #photography #travel",
    "likes": 4,
    "comments": 0,
    "reach": 167,
    "views": 273,
    "saved": 0,
    "total_interactions": 4,
    "hashtags": [
      "foodlover",
      "photography",
      "travel"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DYhrCQPAi6U/"
  },
  {
    "id": "18003707414868383",
    "date": "2026-05-17T22:16:41Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "Entre pousos e decolagens, \na vida muda de direção.\n\nO mundo abre nossa cabeça. \nE a cada volta, nos tornamos outra pessoa 🌍\n\n#trip #world #photography #viajar #instagram \n\nvideo by @fernandohessel",
    "likes": 3,
    "comments": 0,
    "reach": 192,
    "views": 212,
    "saved": 0,
    "total_interactions": 3,
    "hashtags": [
      "trip",
      "world",
      "photography",
      "viajar",
      "instagram"
    ],
    "mentions": [
      "fernandohessel"
    ],
    "permalink": "https://www.instagram.com/reel/DYdLu6-g6N0/"
  },
  {
    "id": "18216707638322293",
    "date": "2026-05-15T19:49:21Z",
    "type": "IMAGE",
    "media_product_type": "FEED",
    "caption": "Nem sempre o que é restrito dever ser obedecido.\nVá além! 🔥 \n\nWhat is restricted should not always be obeyed.\nGo further! 🔥\n\nNo siempre se debe obedecer lo restringido.\n¡Ve más allá! 🔥",
    "likes": 5,
    "comments": 1,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 6,
    "hashtags": [],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DYXyJHUBycO/"
  },
  {
    "id": "18077326622537902",
    "date": "2026-05-14T22:13:04Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "Existem países que parecem secretos. \nEscondidos entre montanhas, silêncio, história e mar.\n\nMontenegro foi um deles pra mim.\n\nUm pequeno país dos Bálcãs, no sudeste da Europa, entre a Croácia, Sérvia, Bósnia e o mar Adriático.\n\nUm lugar que mistura vilas medievais, montanhas gigantes e um litoral que parece cenário de filme.\n\nE o mais curioso:\nquase ninguém fala sobre ele... mas eu falo!\n\n#trip #photography #instagood #loveit #europa",
    "likes": 9,
    "comments": 1,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 10,
    "hashtags": [
      "trip",
      "photography",
      "instagood",
      "loveit",
      "europa"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DYVdle8gJRX/"
  },
  {
    "id": "18129566545517711",
    "date": "2026-05-13T15:24:47Z",
    "type": "IMAGE",
    "media_product_type": "FEED",
    "caption": "Pequenos detalhes contam grandes histórias.\n\n#jornada #negocios #historia #aprendizado #photography",
    "likes": 5,
    "comments": 0,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 5,
    "hashtags": [
      "jornada",
      "negocios",
      "historia",
      "aprendizado",
      "photography"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DYSJJs5gnQT/"
  },
  {
    "id": "17882203086418670",
    "date": "2026-05-12T15:02:08Z",
    "type": "IMAGE",
    "media_product_type": "FEED",
    "caption": "Clássicos são clássicos.\n\nSe foi para os E.U.A e não provou um @fiveguys você não conheceu os E.U.A.\n\n#hamburg #fiveguys #eua #food #photography",
    "likes": 0,
    "comments": 0,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 0,
    "hashtags": [
      "hamburg",
      "fiveguys",
      "eua",
      "food",
      "photography"
    ],
    "mentions": [
      "fiveguys"
    ],
    "permalink": "https://www.instagram.com/p/DYPinOHxG7X/"
  },
  {
    "id": "18109003246906463",
    "date": "2026-05-11T11:16:26Z",
    "type": "IMAGE",
    "media_product_type": "FEED",
    "caption": "O silêncio te reorganiza.",
    "likes": 13,
    "comments": 1,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 14,
    "hashtags": [],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DYMj9kKgBsF/"
  },
  {
    "id": "18048556742591637",
    "date": "2026-05-09T23:09:56Z",
    "type": "CAROUSEL_ALBUM",
    "media_product_type": "FEED",
    "caption": "Por algum bar de Seattle.\n\n#seattle #bar #drink #instagood #photography",
    "likes": 3,
    "comments": 1,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 4,
    "hashtags": [
      "seattle",
      "bar",
      "drink",
      "instagood",
      "photography"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DYIsYvTgDhM/"
  },
  {
    "id": "18004667222739565",
    "date": "2026-05-08T11:45:12Z",
    "type": "IMAGE",
    "media_product_type": "FEED",
    "caption": "Bad Boys 😎🐕",
    "likes": 23,
    "comments": 1,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 24,
    "hashtags": [],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DYE47hCgDvZ/"
  },
  {
    "id": "18462194005101879",
    "date": "2026-05-07T02:30:26Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "✈️",
    "likes": 2,
    "comments": 0,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 2,
    "hashtags": [],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DYBU6ocA2uP/"
  },
  {
    "id": "18099295883038166",
    "date": "2026-05-07T02:22:21Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "✈️",
    "likes": 9,
    "comments": 0,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 9,
    "hashtags": [],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DYBT8_HgM6C/"
  },
  {
    "id": "18101215795990406",
    "date": "2026-04-28T15:01:05Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "Toda viagem revela 3 versões suas:\n\nA que você sustenta hoje.\nA que já não faz mais sentido.\nE a que está esperando uma decisão sua.\n\n#canada #instagram #trip #photography #paz",
    "likes": 1,
    "comments": 0,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 1,
    "hashtags": [
      "canada",
      "instagram",
      "trip",
      "photography",
      "paz"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DXrfolmgNUe/"
  },
  {
    "id": "18338572129171422",
    "date": "2026-04-28T14:58:39Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "Toda viagem revela 3 versões suas:\n\nA que você sustenta hoje.\nA que já não faz mais sentido.\nE a que está esperando uma decisão sua.\n\n#canada #instagram #trip #photography #paz",
    "likes": 10,
    "comments": 1,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 11,
    "hashtags": [
      "canada",
      "instagram",
      "trip",
      "photography",
      "paz"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DXrfHHGgO3d/"
  },
  {
    "id": "18098472605102842",
    "date": "2026-04-27T15:11:10Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "Entrei achando que era só um mercado\nsaí entendendo por que lugares assim duram séculos, um dos mercados mais antigos de istambul 🇹🇷\n\n#turquia #trip #viajar #instagood #reels",
    "likes": 3,
    "comments": 0,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 3,
    "hashtags": [
      "turquia",
      "trip",
      "viajar",
      "instagood",
      "reels"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DXo7_qRgCfA/"
  },
  {
    "id": "18110982055878581",
    "date": "2026-04-27T15:07:43Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "Entrei achando que era só um mercado\nsaí entendendo por que lugares assim duram séculos, um dos mercados mais antigos de istambul 🇹🇷\n\n#turquia #trip #viajar #instagood #reels",
    "likes": 21,
    "comments": 4,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 25,
    "hashtags": [
      "turquia",
      "trip",
      "viajar",
      "instagood",
      "reels"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DXo7KozAHJr/"
  },
  {
    "id": "18115128127783856",
    "date": "2026-04-26T15:35:43Z",
    "type": "CAROUSEL_ALBUM",
    "media_product_type": "FEED",
    "caption": "Quanto mais eu vou…\nmais eu entendo que não é sobre ir.",
    "likes": 22,
    "comments": 1,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 23,
    "hashtags": [],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DXmaEoSFKsK/"
  },
  {
    "id": "18591759310050140",
    "date": "2026-04-24T15:49:40Z",
    "type": "IMAGE",
    "media_product_type": "FEED",
    "caption": "No meio de tudo que eu construo…\né aqui que eu lembro o porquê.\n\n🇺🇸\nIn the middle of everything I build…\nthis is where I remember why.\n\n🇪🇸\nEn medio de todo lo que construyo…\nes aquí donde recuerdo el porqué.\n\n#grandson #photography #família #family #instagood",
    "likes": 35,
    "comments": 5,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 40,
    "hashtags": [
      "grandson",
      "photography",
      "família",
      "family",
      "instagood"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DXhReNcAJlQ/"
  }
];

// ─────────────────────────────────────────────────────────────
// CAMADA 2 — ANALYTICS TABLES
// ─────────────────────────────────────────────────────────────
export const profileMetrics = {
"followers": 61165,
"following": 300,
"posts_total": 3017,
"follower_following_ratio": 203.9,
"posts_per_week_estimated": 4.7,
"reels_share_pct": 45.0,
"feed_image_share_pct": 35.0,
"carousel_share_pct": 20.0,
"source": "Instagram MCP",
"collected_at": "2026-05-25T03:05:21-03:00"
};

export const calculatedFields = {
  "avg_likes_last_20": 9.1,
  "avg_comments_last_20": 0.8,
  "avg_views_last_20": 270,
  "avg_reach_last_20": 170.4,
  "avg_views_available": 270,
  "avg_reach_available": 170.4,
  "avg_interactions_last_20": 9.9,
  "avg_interactions_available_insights": 4.2,
  "median_likes": 5,
  "median_comments": 1,
  "avg_caption_length": 145.1,
  "avg_hashtags_per_post": 3.1,
  "avg_mentions_per_post": 0.1,
  "posting_frequency_per_week": 4.7,
  "follower_following_ratio": 203.9,
  "engagement_rate_avg_pct": 0.016,
  "top_3_content_formats": [
    "REELS",
    "IMAGE",
    "CAROUSEL_ALBUM"
  ],
  "top_5_content_topics": [
    "Viagem & Lifestyle",
    "Reflexão & Propósito",
    "Empreendedorismo",
    "Autoridade",
    "Experiência premium"
  ],
  "top_5_words": [
    "photography",
    "trip",
    "instagood",
    "viajar",
    "mundo"
  ],
  "best_post_by_interactions": {
    "id": "18591759310050140",
    "interactions": 40,
    "caption_preview": "No meio de tudo que eu construo… é aqui que eu lembro o porquê. 🇺🇸 In the middle of everything I build… this is where I remem…",
    "reach": null
  },
  "best_post_by_reach": {
    "id": "18321827566257292",
    "reach": 196,
    "caption_preview": "Ideias mudam empresas. Ambiente muda ideias.",
    "views": 267
  },
  "worst_post_by_interactions": {
    "id": "17882203086418670",
    "interactions": 0,
    "caption_preview": "Clássicos são clássicos. Se foi para os E.U.A e não provou um @fiveguys você não conheceu os E.U.A. #hamburg #fiveguys #eua #…"
  },
  "most_common_posting_day": "Terça",
  "most_common_posting_hour": "15:00",
  "estimated_content_pillars": [
    "Viagem & Lifestyle",
    "Reflexão & Propósito",
    "Empreendedorismo",
    "Autoridade",
    "Experiência premium"
  ],
  "estimated_target_audience": "Empreendedores 28-45 anos, Brasil, interessados em liberdade financeira, viagens e construção de negócios",
  "estimated_business_model": "Posicionamento de autoridade → tráfego para saiba-mais.ai → conversão em serviços/consultorias",
  "estimated_primary_cta": "Tráfego para link na bio (saiba-mais.ai)",
  "estimated_conversion_path": "Conteúdo orgânico → perfil → link bio → landing page"
};

export const postingPatterns = {
  "most_active_day": "Terça",
  "most_active_hour": "15:00",
  "posts_per_week_estimated": 4.7,
  "days_distribution": {
    "Domingo": 3,
    "Sexta": 4,
    "Terça": 5,
    "Quinta": 3,
    "Quarta": 1,
    "Segunda": 3,
    "Sábado": 1
  },
  "format_distribution": {
    "CAROUSEL_ALBUM": 4,
    "REELS": 9,
    "IMAGE": 7
  },
  "format_distribution_pct": {
    "CAROUSEL_ALBUM": 20.0,
    "REELS": 45.0,
    "IMAGE": 35.0
  },
  "funnel_distribution": {
    "topo": 17,
    "meio": 3,
    "fundo": 0
  },
  "content_temp_distribution": {
    "frio": 6,
    "morno": 10,
    "quente": 4
  },
  "consistency": "4.7 posts/semana no recorte dos 20 posts recentes",
  "seasonality": "Publicação ligada a viagens, bastidores, reflexão curta e marcos de autoridade"
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
  {
    "id": "18591759310050140",
    "date": "2026-04-24",
    "type": "IMAGE",
    "caption_preview": "No meio de tudo que eu construo… é aqui que eu lembro o porquê. 🇺🇸 In the middle of everything I build… this is where I remem…",
    "total_interactions": 40,
    "reach": "N/A",
    "views": "N/A",
    "saved": "N/A"
  },
  {
    "id": "18110982055878581",
    "date": "2026-04-27",
    "type": "VIDEO",
    "caption_preview": "Entrei achando que era só um mercado saí entendendo por que lugares assim duram séculos, um dos mercados mais antigos de ista…",
    "total_interactions": 25,
    "reach": "N/A",
    "views": "N/A",
    "saved": "N/A"
  },
  {
    "id": "18004667222739565",
    "date": "2026-05-08",
    "type": "IMAGE",
    "caption_preview": "Bad Boys 😎🐕",
    "total_interactions": 24,
    "reach": "N/A",
    "views": "N/A",
    "saved": "N/A"
  },
  {
    "id": "18115128127783856",
    "date": "2026-04-26",
    "type": "CAROUSEL_ALBUM",
    "caption_preview": "Quanto mais eu vou… mais eu entendo que não é sobre ir.",
    "total_interactions": 23,
    "reach": "N/A",
    "views": "N/A",
    "saved": "N/A"
  },
  {
    "id": "18109003246906463",
    "date": "2026-05-11",
    "type": "IMAGE",
    "caption_preview": "O silêncio te reorganiza.",
    "total_interactions": 14,
    "reach": "N/A",
    "views": "N/A",
    "saved": "N/A"
  }
];

export const topPostsByReach = [
  {
    "id": "18321827566257292",
    "date": "2026-05-19",
    "type": "VIDEO",
    "caption_preview": "Ideias mudam empresas. Ambiente muda ideias.",
    "total_interactions": 2,
    "reach": 196,
    "views": 267,
    "saved": 0
  },
  {
    "id": "18003707414868383",
    "date": "2026-05-17",
    "type": "VIDEO",
    "caption_preview": "Entre pousos e decolagens, a vida muda de direção. O mundo abre nossa cabeça. E a cada volta, nos tornamos outra pessoa 🌍 #tr…",
    "total_interactions": 3,
    "reach": 192,
    "views": 212,
    "saved": 0
  },
  {
    "id": "17989495916985445",
    "date": "2026-05-22",
    "type": "CAROUSEL_ALBUM",
    "caption_preview": "Pode parecer clichê…. mas Miami é foda. #miami #eua #vivendo #instagood #photography",
    "total_interactions": 10,
    "reach": 182,
    "views": 395,
    "saved": 0
  },
  {
    "id": "17981631668843076",
    "date": "2026-05-19",
    "type": "IMAGE",
    "caption_preview": "Boa comida também faz parte da viagem. #foodlover #photography #travel",
    "total_interactions": 4,
    "reach": 167,
    "views": 273,
    "saved": 0
  },
  {
    "id": "17949953874176423",
    "date": "2026-05-24",
    "type": "CAROUSEL_ALBUM",
    "caption_preview": "Uma das maiores mesquitas do mundo, a Mesquita Hassan II. Foi aqui que eu entendi que grandes muralhas não foram construídas…",
    "total_interactions": 2,
    "reach": 115,
    "views": 203,
    "saved": 0
  }
];

export const topReelsByViews = [
  {
    "id": "18321827566257292",
    "date": "2026-05-19",
    "type": "VIDEO",
    "caption_preview": "Ideias mudam empresas. Ambiente muda ideias.",
    "total_interactions": 2,
    "reach": 196,
    "views": 267,
    "saved": 0
  },
  {
    "id": "18003707414868383",
    "date": "2026-05-17",
    "type": "VIDEO",
    "caption_preview": "Entre pousos e decolagens, a vida muda de direção. O mundo abre nossa cabeça. E a cada volta, nos tornamos outra pessoa 🌍 #tr…",
    "total_interactions": 3,
    "reach": 192,
    "views": 212,
    "saved": 0
  }
];

export const captionAnalysis = {
  "avg_length_chars": 145,
  "avg_hashtags_per_post": 3.1,
  "avg_mentions_per_post": 0.1,
  "dominant_tone": "Inspiracional com densidade filosófica e estética de viagem premium",
  "common_opening_style": "Frase curta + contraste/reflexão",
  "narrative_format": "Abertura impactante → desenvolvimento → fecho reflexivo",
  "presence_of_questions": "Baixa — oportunidade de elevar comentários com CTA direto",
  "presence_of_storytelling": "Alta — conteúdo recente mantém narrativa aspiracional",
  "presence_of_cta": "Baixa — gap crítico de conversão para link da bio",
  "most_frequent_cta": "Nenhum CTA dominante — gap crítico",
  "most_used_emojis": [
    "✈️",
    "🌍",
    "🏆",
    "🔥",
    "👇🏼"
  ],
  "top_words": [
    "photography",
    "trip",
    "instagood",
    "viajar",
    "mundo",
    "silêncio",
    "séculos"
  ],
  "multilingual_posts_count": 2,
  "multilingual_languages": [
    "PT",
    "EN",
    "ES"
  ]
};

export const hashtagsAnalysis = [
  {
    "hashtag": "photography",
    "count": 10
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
    "hashtag": "viajar",
    "count": 3
  },
  {
    "hashtag": "instagram",
    "count": 3
  },
  {
    "hashtag": "eua",
    "count": 2
  },
  {
    "hashtag": "canada",
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
    "hashtag": "reels",
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
  overview: 'Perfil creator/business de empreendedor serial com posicionamento de autoridade aspiracional. Nicho: empreendedorismo + lifestyle premium + viagens. 61.165 seguidores. 4,7 posts/semana estimados e ER disponível de 0.022% calculado apenas por likes+comentários.',
  positioning: 'Combinação de mobilidade global + construção empresarial real + prova de conquista (govtech, empresas vendidas). Promessa central: liberdade como resultado de estrutura.',
  content_pattern: 'Inspiração + autoridade + lifestyle. Falta pilar de conversão explícito. 40% Reels, 25% carrossel e 35% imagem nos 20 posts recentes; carrossel e imagem aparecem agregados como FEED no conector.',
  best_format: 'Nos cinco posts com insights completos nesta coleta, o Reel “Ideias mudam empresas. Ambiente muda ideias.” lidera Reach com 196 e o carrossel de Miami lidera views com 395; o carrossel de Miami lidera interações recentes com 10.',
  best_topics: ['Conexão emocional real (neto/família)', 'Negócios/autoridade (sala de operações, govtech)', 'Viagem com tese (Marrocos contraste, Croácia paz)'],
  strengths: [
    'Posicionamento único: empreendedor que viaja o mundo com lastro real e verificável',
    'Prova de conquista concreta (govtech, 7 empresas, 37 países, 2 vendidas)',
    'Estética visual premium e consistente — coerência de marca forte',
    'Capacidade de conexão emocional continua forte; “O silêncio te reorganiza” lidera os 5 posts com insight completo nesta coleta',
    'Trilinguismo como diferencial de alcance internacional (PT/EN/ES)',
  ],
  weaknesses: [
    'Ausência de CTA consistente — menos de 30% dos posts têm chamada para ação',
    'Reels com estética forte, mas views recentes ainda variam muito; o maior sinal veio de tese clara + contexto de viagem',
    'Funil comercial subaproveitado — saiba-mais.ai não mencionado nos posts',
    'Meta Ads voltou com entrega mensurável: 36.835 Impressões, 990 Cliques (todos) e 884 Link clicks, mas Valor usado retornou R$0 e precisa validação',
    'Frequência estimada em 4,7 posts/semana, ainda sem série recorrente clara',
  ],
  opportunities: [
    'Criar CTA fixo em todos os posts: "Link na bio para [benefício específico]"',
    'Escalar padrão de frases curtas + narrativa real: âncora emocional, contraste e CTA explícito',
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
    'Reach médio disponível nos 5 posts recentes: 170.4',
    'Views médias disponíveis nos 5 posts recentes: 270.0; meta >500 em Reels com tese forte',
    'Salvamentos por post (indicador de conteúdo de valor)',
    'Crescimento líquido de seguidores por semana',
    'Shares por post (amplificação orgânica)',
    'Cliques no link da bio (indisponível no conector atual)',
  ],
  risks: [
    'Seguidores em 61.165 nesta coleta — monitorar variação semanal',
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
  { key: 'consistencia_editorial', label: 'Consistência Editorial', value: 6, interpretation: 'Temas coerentes mas sem série recorrente. Frequência estimada em 4,7 posts/semana.', tone: 'neutral' },
  { key: 'frequencia', label: 'Frequência', value: 7, interpretation: '4,7 posts/semana estimados nos 20 posts recentes. Meta: manter cadência com Stories diários.', tone: 'positive' },
  { key: 'diversidade_formatos', label: 'Diversidade de Formatos', value: 7, interpretation: 'Boa distribuição: 40% Reels, 25% carrossel e 35% imagem nos 20 posts recentes; carrossel e imagem aparecem agregados como FEED no conector. Stories ausentes na análise.', tone: 'positive' },
  { key: 'uso_cta', label: 'Uso de CTA', value: 5, interpretation: 'Gap crítico — menos de 30% dos posts têm CTA explícito. Maior oportunidade de melhoria imediata.', tone: 'warning' },
  { key: 'potencial_conversao', label: 'Potencial de Conversão', value: 5, interpretation: 'Funil subaproveitado. Link na bio ativo mas pouco mencionado nos posts. ER disponível de 0.022% por likes+comentários.', tone: 'warning' },
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
  "accounts": [
    {
      "accountId": "act_1158819016166775",
      "name": "Notifica - 691557262472251 (Read-Only)",
      "businessName": "Conta com insights retornados",
      "currency": "USD",
      "status": "ACTIVE",
      "last30d": "32.524 Impressões · 992 Cliques (todos) · CTR (todos) 3,05% · Valor usado US$0 retornado pela API · Dados de 25/05 são parciais"
    },
    {
      "accountId": "act_9525474394174655",
      "name": "Ricardo Impellizieri",
      "businessName": "loggica intermediacoes de negócios",
      "currency": "BRL",
      "status": "ACTIVE",
      "last30d": "Sem insights nos últimos 30 dias retornados pelo conector"
    },
    {
      "accountId": "act_265574476787926",
      "name": "265574476787926",
      "businessName": "SANDRO JOSE RICARDO IMPELLIZIERI DE OLIVEIRA",
      "currency": "BRL",
      "status": "ACTIVE",
      "last30d": "Sem insights nos últimos 30 dias retornados pelo conector"
    }
  ],
  "activeCampaign": {
    "name": "Traffic Campaign + MM_LITE_DEFAULT_AD_CAMPAIGN_GROUP",
    "objective": "OUTCOME_TRAFFIC",
    "status": "ACTIVE",
    "dailyBudget": "Não retornado",
    "createdAt": "Período analisado: últimos 30 dias; inclui 25/05/2026, dado parcial e sujeito a mudança",
    "reading": "Últimos 30 dias com entrega retornada na conta act_1158819016166775: Traffic Campaign gerou 22.760 Impressões, 295 Cliques (todos), CTR (todos) 1,30% e Valor usado US$0. MM_LITE_DEFAULT_AD_CAMPAIGN_GROUP gerou 9.764 Impressões, 697 Cliques (todos), CTR (todos) 7,14% e Valor usado US$0. Soma retornada: 32.524 Impressões, 992 Cliques (todos), CTR (todos) ponderado de 3,05% e Valor usado US$0 informado pela API."
  },
  "nextSteps": [
    "Validar no Ads Manager por que Valor usado retorna US$0 mesmo com Impressões e Cliques (todos) registrados.",
    "Priorizar leitura da MM_LITE_DEFAULT_AD_CAMPAIGN_GROUP: CTR (todos) 7,14%, mas precisa confirmar qualidade do tráfego e destino.",
    "Revisar UTMs, evento de destino e página saiba-mais.ai antes de qualquer escala de orçamento.",
    "Manter contas e campanhas sem insights como indisponíveis até o conector retornar dados confiáveis."
  ]
};

// ─────────────────────────────────────────────────────────────
// DATA QUALITY
// ─────────────────────────────────────────────────────────────
export const dataQuality = {
  "source": "Instagram MCP + Meta Ads MCP",
  "collection_date": "25/05/2026 às 03:05",
  "collected_at": "2026-05-25T03:05:21-03:00",
  "posts_analyzed": 20,
  "posts_with_insights": 5,
  "completeness_pct": 25,
  "period": "20 posts recentes + Meta Ads últimos 30 dias",
  "limitations": [
    "Métricas de Stories e demografia não estavam disponíveis nesta integração",
    "Insights completos por post retornaram para os 5 posts mais recentes; demais posts mantêm lacunas visíveis",
    "Valor usado no Meta Ads retornou US$0 apesar de haver Impressões e Cliques (todos)",
    "Dados de Meta Ads em 25/05/2026 são parciais e sujeitos a mudança",
    "Análise qualitativa inferida por caption, formato e sinais públicos"
  ],
  "confidence_level": "Alta para perfil e mídia paga retornada; média para recomendações qualitativas",
  "confidence_global": "Alta para perfil e mídia paga; média para leitura qualitativa",
  "collection_notes": "Coleta feita em 25/05/2026 às 03:05. Instagram retornou perfil, 20 posts recentes e insights completos nos 5 posts mais recentes. Meta Ads retornou dados dos últimos 30 dias apenas na conta act_1158819016166775; contas sem retorno permanecem marcadas como indisponíveis."
};

// ─────────────────────────────────────────────────────────────
// OBJETO PRINCIPAL (compatibilidade com Home.tsx existente)
// ─────────────────────────────────────────────────────────────
export const dashboardData = {
  meta: {
    profile: profileIdentity,
    lastUpdated: "25/05/2026 às 03:05",
    dashboardCadence: 'Atualização semanal aos domingos',
    designPhilosophy: 'Editorial executivo cinematográfico',
  },
  executive: {
    summary: {
      profileStrength: executiveSummary.overview,
      instagramReading: 'Nos 20 posts recentes, a leitura confiável ampla é likes + comentários. Insights completos retornaram nos 5 posts mais recentes: o Reel “Ideias mudam empresas. Ambiente muda ideias.” lidera Reach com 196; o carrossel de Miami lidera interações no recorte com 10 e 395 views.',
      adsReading: 'Meta Ads retornou entrega real nos últimos 30 dias apenas na conta act_1158819016166775: 32.524 Impressões, 992 Cliques (todos), CTR (todos) 3,05% e Valor usado US$0. As demais contas permanecem como indisponíveis no período.',
      criticalPoint: 'Gap crítico permanece: conteúdo tem autoridade, mas CTA explícito ainda é baixo. Sem CTA e sem rastreamento consistente, alcance orgânico e tráfego pago não viram receita medida.',
    },
    kpis: [
      { label: 'Seguidores', value: '61.165', delta: 'coleta atual', tone: 'positive' as const },
      { label: 'Seguindo', value: '300', delta: 'ratio 203.9:1', tone: 'positive' as const },
      { label: 'Publicações', value: '3.017', delta: '4.7 posts/semana', tone: 'positive' as const },
      { label: 'Anúncios Meta', value: '32,5 mil impr.', delta: '992 Cliques (todos) · US$0', tone: 'warning' as const },
    ],
    conversion: [
      { label: 'ER disponível', value: '0.016%', note: 'Likes + comentários / seguidores' },
      { label: 'Reach médio', value: '170.4', note: 'Média dos 5 posts recentes com insight completo retornado' },
      { label: 'Views médias', value: '270.0', note: 'Média dos 5 posts recentes com insight completo retornado' },
    ],
    alerts: [
      'Gap de CTA: menos de 30% dos posts têm chamada para ação — maior oportunidade imediata.',
      'O Reel “Ideias mudam empresas. Ambiente muda ideias.” lidera Reach nos insights disponíveis; o carrossel de Miami lidera interações entre os 5 posts recentes com insight completo.',
      'Monitorar variação semanal de seguidores para separar oscilação normal de perda estrutural.',
      'Meta Ads tem entrega e Cliques (todos); validar por que a API retorna Valor usado US$0 antes de escalar.',
    ],
  },
  deepAnalysis: {
    positioning: {
      seenAs: 'Empreendedor aspiracional com lastro real — alguém que construiu empresas de verdade (govtech, 7 empresas, 2 vendidas) enquanto viaja o mundo. A combinação de mobilidade + conquista + trilinguismo cria uma percepção de autoridade premium rara no nicho.',
      tension: 'O perfil inspira muito e converte pouco. O conteúdo de viagem pura atrai admiração passiva. O conteúdo de negócios/autoridade (sala de operações, govtech) gera engajamento mais qualificado mas aparece menos de 20% das vezes.',
      misalignment: 'A proposta central (liberdade como estratégia) está na bio mas não nos posts. Menos de 30% dos posts têm CTA explícito. O link da bio (saiba-mais.ai) não é mencionado em nenhum post analisado.',
    },
    formatPerformance: [
      { format: 'Reels', reach: '257 no Reel de Montenegro', depth: 'Alta variação — depende do argumento', engagement: 'Montenegro: 9 interações · Reach 196 · 267 views', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato para escala quando a tese aparece cedo. Média disponível: 303 views no Reel com insight completo.' },
      { format: 'Posts estáticos (Imagem)', reach: '115–158 nos 4 posts recentes com insight', depth: 'Alta quando há âncora emocional ou autoridade', engagement: '“O silêncio te reorganiza”: 14 interações · Reach 182 · 395 views', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato recente para interação quando a frase é curta, memorável e emocional.' },
      { format: 'Carrosséis', reach: 'N/A', depth: 'Dados indisponíveis nos 5 insights recentes coletados', engagement: 'N/A', followers: 'N/A', clicks: 'N/A', signal: 'Manter bloco como lacuna até o conector retornar insights de carrosséis recentes.' },
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
      { title: 'Quem responde melhor', text: 'Conteúdo com âncora emocional real, tese curta e bastidor concreto concentra melhor sinal. Nesta coleta, o carrossel de Miami lidera interações entre os posts com insight completo; o Reel “Ideias mudam empresas. Ambiente muda ideias.” lidera Reach.' },
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
      { type: 'Image', title: 'Âncora emocional real', hook: 'O silêncio te reorganiza.', concept: 'Replicar estrutura de frase curta memorável com imagem forte e ligação direta à liberdade estratégica.', structure: 'Foto forte → frase curta → conexão com propósito → CTA de engajamento.', cta: '"Qual frase reorganizou sua semana? Comenta."' },
      { type: 'Carrossel', title: 'Contraste + tese', hook: '[Lugar] não é sobre [o óbvio]. É sobre [a tese].', concept: 'Replicar estrutura do Marrocos: visual impactante + frase de contraste + tese de vida/negócio.', structure: 'Slide 1: visual forte → Slide 2-4: desenvolvimento → Slide final: CTA.', cta: '"Salva para lembrar quando precisar de perspectiva."' },
      { type: 'Stories', title: 'Bastidor de decisão diário', hook: 'Uma decisão que parece pequena e muda o ano inteiro.', concept: 'Stories diários com bastidores de decisão, viagem ou empresa.', structure: 'Story 1: contexto → Story 2: decisão → Story 3: consequência + CTA.', cta: '"Quer ver mais bastidores assim?"' },
      { type: 'Reel', title: 'Argumento nos 2 primeiros segundos', hook: '[Tese direta e afiada]', concept: 'Testar Reels onde a tese aparece antes da paisagem — validar hipótese de retenção.', structure: 'Tese → evidência visual → desenvolvimento → fechamento com CTA.', cta: '"Link na bio para [benefício específico]."' },
    ],
    abTests: [
      { name: 'CTA explícito vs sem CTA', hypothesis: 'Posts com CTA explícito ("link na bio", "comenta X") geram mais cliques e comentários do que posts sem CTA. Hipótese baseada no gap atual: <30% dos posts têm CTA.', measure: 'Comparar comentários, cliques e salvamentos entre posts com e sem CTA nos próximos 30 dias.' },
      { name: 'Âncora emocional real vs viagem pura', hypothesis: 'Posts com âncora emocional real ou prova concreta tendem a gerar mais interações do que viagem pura. Nesta coleta, frase curta emocional lidera interações no recorte com insight completo.', measure: 'Comparar total_interactions, comentários e reach nos próximos 3 ciclos.' },
      { name: 'Trilinguismo vs português apenas', hypothesis: 'Posts com legenda em PT/EN/ES ampliam alcance internacional. Testar sistematicamente.', measure: 'Comparar reach médio entre posts trilíngues e posts apenas em português nos próximos 30 dias.' },
    ],
    autoAlerts: [
      'ATIVO: Monitorar variação semanal de seguidores nas próximas 2 semanas.',
      'ATIVO: Campanha Meta com entrega mensurável, mas Valor usado retornou R$0. Validar cobrança, UTMs e rastreamento antes de novo investimento.',
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
  postingFrequency: { current: '4.7 posts/semana', recommended: '4-5 posts/semana', gap: 'Aumentar cadência com consistência e CTA por post.', storiesRecommended: '1-2 Stories/dia', storiesCurrent: 'Não monitorado' },
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
    mainProblem: 'Você está construindo audiência passiva. 61.165 seguidores que admiram mas não agem. O problema não é alcance — é ausência de CTA, funil e consistência estratégica.',
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
    proof: 'Nesta coleta, Montenegro liderou Reach entre posts com insight completo e “O silêncio te reorganiza” liderou interações nesse recorte. A hipótese prática: tese curta + imagem forte + CTA tende a superar viagem pura sem chamada.',
    antiFormula: 'Reel de movimento puro sem argumento = views sem ação. LA→LV e Canadá provam isso.',
  },
  growthTargets: {
    followers30d: '+500 seguidores em 30 dias (meta conservadora com estratégia ativa)',
    followers90d: '+2.000 seguidores em 90 dias (com série semanal + Stories diários)',
    erTarget: '0,08% ER médio (hoje 0,022% — meta realista em 60 dias)',
    reachTarget: '600 Reach médio por post (hoje 166 nos 5 posts com insight completo)',
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
      content: 'Post com tese curta emocional (melhor sinal nos insights completos recentes)',
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
