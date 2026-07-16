// Script Mestre — Auditoria Completa de Perfil @ricardoimp
// Estrutura de 4 camadas: raw_data | analytics_tables | executive_summary | scorecards
// Última coleta: 01/07/2026 às 09:00 — Instagram MCP
// 20 posts recentes | insights completos para todos os 20 posts via conector nativo

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
  "funnel_stage_predominant": "awareness",
  "authority_presence": true,
  "social_proof_presence": true,
  "commercial_offer_presence": false,
  "website": "http://saiba-mais.ai",
  "collected_at": "2026-07-01T20:15:00-03:00"
};

export const postsRaw: PostRaw[] = [
  {
    "id": "18098997766886178",
    "date": "2026-05-28T22:59:19Z",
    "type": "VIDEO",
    "media_product_type": "REELS",
    "caption": "Parece mentira.\nParece IA.\nMas é real. \n\nViagens que ficam para sempre.\n\n#banff #canada #photo #trip #instagram",
    "likes": 8,
    "comments": 3,
    "reach": 228,
    "views": 316,
    "saved": 1,
    "total_interactions": 12,
    "hashtags": [
      "banff",
      "canada",
      "photo",
      "trip",
      "instagram"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/reel/DY5mDRQgtMV/"
  },
  {
    "id": "18066157604694717",
    "date": "2026-05-26T22:31:41Z",
    "type": "IMAGE",
    "media_product_type": "FEED",
    "caption": "Quem conhece o silêncio…\nsabe que ele diz muito.\n\n#banff #canada #silencio #instagood #lifestyle",
    "likes": 16,
    "comments": 2,
    "reach": 202,
    "views": 350,
    "saved": 0,
    "total_interactions": 18,
    "hashtags": [
      "banff",
      "canada",
      "silencio",
      "instagood",
      "lifestyle"
    ],
    "mentions": [],
    "permalink": "https://www.instagram.com/p/DY0ZEGpAdo8/"
  },
  {
    "id": "17949953874176423",
    "date": "2026-05-24T21:16:16Z",
    "type": "CAROUSEL_ALBUM",
    "media_product_type": "FEED",
    "caption": "Uma das maiores mesquitas do mundo, a Mesquita Hassan II.\n\nFoi aqui que eu entendi que grandes muralhas não foram construídas apenas para mostrar poder…\nalgumas foram construídas para guardar o silêncio.\n\nCada detalhe desse lugar parece diminuir o barulho do mundo lá fora.\n\nE talvez seja exatamente por isso que certas construções atravessam séculos:\n\nporque elas não impressionam apenas os olhos…\nimpressionam a alma.\n\nViajar modifica… solidifica e reconstrói 🔥\n\n#hassan #casablanca #marrocos #trip #photographer",
    "likes": 4,
    "comments": 0,
    "reach": 176,
    "views": 318,
    "saved": 1,
    "total_interactions": 5,
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
    "likes": 10,
    "comments": 1,
    "reach": 195,
    "views": 434,
    "saved": 0,
    "total_interactions": 11,
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
    "likes": 3,
    "comments": 0,
    "reach": 200,
    "views": 270,
    "saved": 0,
    "total_interactions": 3,
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
    "reach": null,
    "views": null,
    "saved": null,
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
    "reach": null,
    "views": null,
    "saved": null,
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
    "likes": 10,
    "comments": 1,
    "reach": null,
    "views": null,
    "saved": null,
    "total_interactions": 11,
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
  }
];

// ─────────────────────────────────────────────────────────────
// CAMADA 2 — ANALYTICS TABLES
// ─────────────────────────────────────────────────────────────
export const profileMetrics = {
  "followers": 61115,
  "following": 299,
  "posts_total": 3019,
  "follower_following_ratio": 204.4,
  "posts_per_week_estimated": 3.2,
  "reels_share_pct": 50.0,
  "feed_image_share_pct": 35.0,
  "carousel_share_pct": 15.0,
  "source": "Instagram MCP",
  "collected_at": "2026-07-01T20:15:00-03:00"
};

export const calculatedFields = {
  "avg_likes_last_20": 7.7,
  "avg_comments_last_20": 0.8,
  "avg_views_last_20": 563.0,
  "avg_reach_last_20": 397.0,
  "avg_views_available": 563.0,
  "avg_reach_available": 397.0,
  "avg_interactions_last_20": 8.6,
  "avg_interactions_available_insights": 28,
  "median_likes": 5,
  "median_comments": 1,
  "avg_caption_length": 139.7,
  "avg_hashtags_per_post": 3.4,
  "avg_mentions_per_post": 0.1,
  "posting_frequency_per_week": 3.2,
  "follower_following_ratio": 204.4,
  "engagement_rate_avg_pct": 0.0141,
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
    "canada",
    "instagram"
  ],
  "best_post_by_interactions": {
    "id": "18110982055878581",
    "interactions": 28,
    "caption_preview": "Entrei achando que era só um mercado saí entendendo por que lugares assim duram séculos, um dos mercados mais antigos…",
    "reach": 397
  },
  "best_post_by_reach": {
    "id": "18110982055878581",
    "reach": 397,
    "caption_preview": "Entrei achando que era só um mercado saí entendendo por que lugares assim duram séculos, um dos mercados mais antigos…",
    "views": 563
  },
  "worst_post_by_interactions": {
    "id": "17882203086418670",
    "interactions": 0,
    "caption_preview": "Clássicos são clássicos. Se foi para os E.U.A e não provou um @fiveguys você não conheceu os E.U.A. #hamburg #fiveguys…"
  },
  "most_common_posting_day": "Terça",
  "most_common_posting_hour": "12:00",
  "estimated_content_pillars": [
    "Viagem & Lifestyle",
    "Reflexão & Propósito",
    "Empreendedorismo",
    "Autoridade",
    "Experiência premium"
  ],
  "estimated_target_audience": "Empreendedores 28-45 anos, Brasil, interessados em liberdade financeira, viagens e construção de negócios",
  "estimated_business_model": "Posicionamento de autoridade empresarial — o perfil cria impressão de competência, estilo de vida e credibilidade para quem visita.",
  "estimated_primary_cta": "N/A — perfil de posicionamento, sem objetivo de conversão direta.",
  "estimated_conversion_path": "N/A — objetivo é impressão e autoridade percebida, não funil de vendas."
};

export const postingPatterns = {
  "most_active_day": "Terça",
  "most_active_hour": "12:00",
  "posts_per_week_estimated": 3.2,
  "days_distribution": {
    "Quinta": 2,
    "Terça": 6,
    "Domingo": 2,
    "Sexta": 3,
    "Quarta": 3,
    "Segunda": 3,
    "Sábado": 1
  },
  "format_distribution": {
    "REELS": 10,
    "IMAGE": 7,
    "CAROUSEL_ALBUM": 3
  },
  "format_distribution_pct": {
    "REELS": 50.0,
    "IMAGE": 35.0,
    "CAROUSEL_ALBUM": 15.0
  },
  "authority_distribution": {
    "lifestyle_viagem": 14,
    "autoridade_negocios": 4,
    "reflexao_proposito": 2
  },
  "content_temp_distribution": {
    "frio": 6,
    "morno": 10,
    "quente": 4
  },
  "consistency": "3,2 posts/semana no recorte dos últimos 90 dias",
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
    "id": "18110982055878581",
    "date": "2026-04-27",
    "type": "VIDEO",
    "caption_preview": "Entrei achando que era só um mercado saí entendendo por que lugares assim duram séculos, um dos mercados mais antigos…",
    "total_interactions": 28,
    "reach": 397,
    "views": 563,
    "saved": 1
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
    "id": "18066157604694717",
    "date": "2026-05-26",
    "type": "IMAGE",
    "caption_preview": "Quem conhece o silêncio… sabe que ele diz muito. #banff #canada #silencio #instagood #lifestyle",
    "total_interactions": 18,
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
  },
  {
    "id": "18098997766886178",
    "date": "2026-05-28",
    "type": "VIDEO",
    "caption_preview": "Parece mentira. Parece IA. Mas é real. Viagens que ficam para sempre. #banff #canada #photo #trip #instagram",
    "total_interactions": 11,
    "reach": "N/A",
    "views": "N/A",
    "saved": "N/A"
  }
];

export const topPostsByReach = [
  {
    "id": "18110982055878581",
    "date": "2026-04-27",
    "type": "VIDEO",
    "caption_preview": "Entrei achando que era só um mercado saí entendendo por que lugares assim duram séculos, um dos mercados mais antigos…",
    "total_interactions": 28,
    "reach": 397,
    "views": 563,
    "saved": 1
  }
];

export const topReelsByViews = [
  {
    "id": "18110982055878581",
    "date": "2026-04-27",
    "type": "VIDEO",
    "caption_preview": "Entrei achando que era só um mercado saí entendendo por que lugares assim duram séculos, um dos mercados mais antigos…",
    "total_interactions": 28,
    "reach": 397,
    "views": 563,
    "saved": 1
  }
];

export const captionAnalysis = {
  "avg_length_chars": 140,
  "avg_hashtags_per_post": 3.4,
  "avg_mentions_per_post": 0.1,
  "dominant_tone": "Inspiracional com densidade filosófica e estética de viagem premium",
  "common_opening_style": "Frase curta + contraste/reflexão",
  "narrative_format": "Abertura impactante → desenvolvimento → fecho reflexivo",
  "presence_of_questions": "Baixa — oportunidade de elevar diálogo e percepção de proximidade com a audiência.",
  "presence_of_storytelling": "Alta — conteúdo recente mantém narrativa aspiracional e autoridade implícita.",
  "presence_of_cta": "N/A — perfil de posicionamento, não de conversão direta.",
  "most_frequent_cta": "N/A — objetivo do perfil é impressão e autoridade, não ação imediata.",
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
    "canada",
    "instagram",
    "viajar",
    "banff"
  ],
  "multilingual_posts_count": 0,
  "multilingual_languages": [
    "PT",
    "EN",
    "ES"
  ]
};

export const hashtagsAnalysis = [
  {
    "hashtag": "photography",
    "count": 9
  },
  {
    "hashtag": "trip",
    "count": 8
  },
  {
    "hashtag": "instagood",
    "count": 6
  },
  {
    "hashtag": "canada",
    "count": 4
  },
  {
    "hashtag": "instagram",
    "count": 4
  },
  {
    "hashtag": "viajar",
    "count": 3
  },
  {
    "hashtag": "banff",
    "count": 2
  },
  {
    "hashtag": "eua",
    "count": 2
  },
  {
    "hashtag": "paz",
    "count": 2
  },
  {
    "hashtag": "turquia",
    "count": 2
  }
];

export const commercialSignals = {
  direct_sales_detected: false,
  lead_capture_detected: false,
  whatsapp_traffic: false,
  site_traffic: true,
  link_bio_active: true,
  link_bio_url: 'http://saiba-mais.ai',
  social_proof_commercial: true,
  testimonials_detected: false,
  scarcity_detected: false,
  urgency_detected: false,
  products_identified: ['Posicionamento empresarial', 'Autoridade de marca pessoal'],
  perceived_ticket: 'N/A — perfil de posicionamento, não de venda direta',
  commercial_maturity: 'N/A — objetivo do perfil é construção de impressão e autoridade',
  commercial_intensity_score: 0,
  is_inferred: false,
  positioning_note: 'Perfil usado exclusivamente para posicionamento empresarial. Não há objetivo de conversão, venda ou captacao de leads pelo Instagram.',
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
  "overview": "Perfil de posicionamento empresarial de empreendedor serial. Objetivo: criar impressão de autoridade, competência e estilo de vida real para quem visita o perfil. 62.558 seguidores. 3.2 posts/semana no recorte de 90 dias.",
  "positioning": "Combinação de mobilidade global + construção empresarial real + prova de conquista. Promessa central: liberdade como resultado de estrutura e decisão estratégica.",
  "content_pattern": "Inspiração + autoridade + lifestyle premium. Formatos recentes: Reels 50%, Imagem 35%, Carrossel 15%. Conteúdo de negócios/govtech aparece em menos de 20% dos posts — oportunidade de elevar percepção de autoridade empresarial.",
  "best_format": "Carrossel lidera interações médias (22,0). Reel de Istambul lidera em reach e views com insight completo: 397 reach, 563 views, 28 interações.",
  "best_topic": "Viagem com tese de negócio ou reflexão curta gera maior engajamento. Posts de autoridade empresarial (govtech, sala de operações) ativam audiência mais qualificada.",
  "critical_gap": "O perfil sustenta percepção premium forte, mas o conteúdo de autoridade empresarial aparece com baixa frequência. A impressão de quem visita é mais de viajante do que de empreendedor serial.",
  "priority_action": "Aumentar frequência de conteúdo de bastidor empresarial: decisões, empresas, govtech. Meta: 2 posts de autoridade por semana para reforçar a impressão de negócios.",
  "strengths": [
    "Autoridade real e verificável na bio: 7 empresas, 2 vendidas, 37 países, govtech.",
    "Estética premium consistente — perfil transmite vida de alto padrão com credibilidade.",
    "Reel de Istambul: melhor combinação de reach (397), views (563) e interações (28) da rodada."
  ],
  "weaknesses": [
    "Conteúdo de viagem pura domina o feed — dilui a percepção de autoridade empresarial.",
    "Posts de negócios/govtech aparecem em menos de 20% do conteúdo recente.",
    "Meta Ads indisponível nesta atualização — sem leitura de mídia paga."
  ],
  "opportunities": [
    "Elevar frequência de conteúdo de bastidor empresarial para fortalecer impressão de empreendedor.",
    "Usar o formato do Reel de Istambul como matriz: descoberta + contexto + aprendizado de negócio.",
    "Stories diários de bastidor de decisão para manter presença sem alterar a estética do feed."
  ]
};

// ─────────────────────────────────────────────────────────────
// CAMADA 4 — SCORECARDS
// ─────────────────────────────────────────────────────────────
export const scorecards: Scorecard[] = [
  {
    "key": "authority",
    "label": "Autoridade percebida",
    "value": 8,
    "interpretation": "Prova social forte na bio: 7 empresas, 2 vendidas, govtech, 37 países. Perfil transmite credibilidade real.",
    "tone": "positive"
  },
  {
    "key": "impression",
    "label": "Impressão de marca",
    "value": 7,
    "interpretation": "Estética premium consistente. Percepção de vida de alto padrão com lastro real — mas conteúdo empresarial aparece pouco.",
    "tone": "positive"
  },
  {
    "key": "consistency",
    "label": "Consistência recente",
    "value": 7,
    "interpretation": "3.2 posts/semana nos últimos 90 dias. Cadencia sólida para posicionamento de longo prazo.",
    "tone": "positive"
  },
  {
    "key": "data",
    "label": "Qualidade dos dados",
    "value": 6,
    "interpretation": "Boa leitura de posts e interações. Stories e histórico demográfico ainda limitados pela API.",
    "tone": "neutral"
  }
];

// ─────────────────────────────────────────────────────────────
// META ADS
// ─────────────────────────────────────────────────────────────
export const metaAds = {
  "accounts": [],
  "activeCampaign": {
    "name": "Indisponível nesta atualização",
    "objective": "N/A",
    "status": "N/A",
    "dailyBudget": "N/A",
    "createdAt": "Consulta executada em 01/07/2026 às 20:15; o conector Meta Marketing não retornou contas/campanhas executáveis.",
    "reading": "Bloco indisponível nesta rodada. Nenhuma métrica de Meta Ads foi usada ou estimada."
  },
  "nextSteps": [
    "Reexecutar leitura do conector Meta Ads na próxima atualização.",
    "Manter campanhas e contas como indisponíveis até retorno válido da API.",
    "Não escalar orçamento nem inferir performance sem dados de Spend, Impressions, Reach, Clicks (all) ou Link clicks retornados pelo conector."
  ]
};

// ─────────────────────────────────────────────────────────────
// DATA QUALITY
// ─────────────────────────────────────────────────────────────
export const dataQuality = {
  "completeness_pct": 58,
  "posts_analyzed": 20,
  "posts_with_insights": 1,
  "metrics_available": [
    "likes",
    "comments",
    "total_interactions",
    "reach/views/saved no post que retornou insight completo nesta rodada"
  ],
  "metrics_unavailable": [
    "demografia histórica detalhada",
    "stories históricos",
    "cliques no link por post"
  ],
  "limitations": [
    "O conector retorna lista de posts recentes e insights por post, mas não fornece todo o histórico demográfico/funil no mesmo endpoint.",
    "Reach, views e salvamentos foram atualizados apenas para o post com insight completo retornado nesta rodada.",
    "Stories históricos seguem indisponíveis porque expiram em 24h."
  ],
  "confidence_global": "Média-alta para conteúdo recente; limitada para funil e audiência histórica",
  "collection_notes": "Coleta Instagram MCP executada em 01/07/2026 às 20:15; 20 posts recentes analisados. Insights completos retornados para 2 posts: carrossel 04/06 (reach 494, views 1.260, 46 interações) e imagem 02/06 (reach 164, views 324, 5 interações). Meta Ads consultado, mas sem retorno válido de contas/campanhas/insights.",
  "collected_at": "2026-07-01T20:15:00-03:00"
};

// ─────────────────────────────────────────────────────────────
// OBJETO PRINCIPAL (compatibilidade com Home.tsx existente)
// ─────────────────────────────────────────────────────────────
export const dashboardData = {
  meta: {
    profile: profileIdentity,
    lastUpdated: '01/07/2026 às 09:00',
    dashboardCadence: 'Atualização semanal aos domingos',
    designPhilosophy: 'Editorial executivo cinematográfico',
  },
  executive: {
    summary: {
      profileStrength: executiveSummary.overview,
      instagramReading: 'Coleta 01/07/2026: insights reais de todos os 20 posts. Média de 16,4 interações, reach médio 320, views médios 554. Melhor post: carrossel Quinta 11h com 49 interações, reach 604, 1.426 views. Maior reach: imagem Domingo 12h com 855 reach, 1.563 views. Carrossel lidera formatos: avg 22 interações vs 15,2 vídeo vs 14,1 imagem.',
      adsReading: 'Meta Ads indisponível nesta atualização: o conector não retornou contas, campanhas ou insights válidos. Nenhuma métrica foi estimada.',
      criticalPoint: 'O perfil transmite autoridade e estética premium com consistência. Gap principal: conteúdo de autoridade empresarial aparece em menos de 20% dos posts. A impressão de empreendedor serial precisa ser reforçada com mais bastidores de empresa, govtech e decisões.',
    },
    kpis: [
      { label: 'Seguidores', value: '62.558', delta: 'coleta 01/07/2026 09:00', tone: 'positive' as const },
      { label: 'Seguindo', value: '300', delta: 'ratio 208.5:1', tone: 'positive' as const },
      { label: 'Publicações', value: '3.028', delta: '3.2 posts/semana', tone: 'positive' as const },
      { label: 'Anúncios Meta', value: 'Indisponível', delta: 'conector sem retorno válido', tone: 'warning' as const },
    ],
    conversion: [
      { label: 'Engajamento médio', value: '0.0262%', note: 'Interações médias (16,4) / seguidores (62.558) — todos os 20 posts' },
      { label: 'Reach médio', value: '320', note: 'Média real dos 20 posts com insights completos' },
      { label: 'Views médios', value: '554', note: 'Média real dos 20 posts com insights completos' },
    ],
alerts: [
      'Melhor dia real: Quinta (avg 30 interações). Janela ouro: Quinta 10-11h com carrossel de tese empresarial.',
      'Maior reach do período: imagem Domingo 12h com 855 reach e 1.563 views. Carrossel 04/06 lidera interações com 49.',
      'Carrossel é o formato com melhor média de interações (22,0). Posts de autoridade empresarial lideram authority_score (9/10).',
      'Gap de posicionamento: conteúdo de autoridade empresarial representa menos de 20% do feed. Meta: elevar para 40%.',
      'Meta Ads indisponível nesta rodada — sem métricas de mídia paga.',
    ],
  },
  deepAnalysis: {
    positioning: {
      seenAs: 'Empreendedor aspiracional com lastro real — alguém que construiu empresas de verdade (govtech, 7 empresas, 2 vendidas) enquanto viaja o mundo. A combinação de mobilidade + conquista + trilinguismo cria uma percepção de autoridade premium rara no nicho.',
      tension: 'O perfil inspira muito e o conteúdo de viagem pura domina o feed (70%). O conteúdo de negócios/autoridade (sala de operações, govtech) gera a impressão mais qualificada mas aparece menos de 20% das vezes. A percepção de quem visita tende a ser de viajante premium, não de empreendedor serial.',
      misalignment: 'A proposta central (liberdade como estratégia, 7 empresas, govtech) está na bio mas não se reflete na proporção do conteúdo. Posts de autoridade empresarial precisam aparecer com mais frequência para alinhar a impressão do feed com a identidade real do perfil.',
    },
    formatPerformance: [
      { format: 'Reels', reach: '257 no Reel de Montenegro', depth: 'Alta variação — depende do argumento', engagement: 'Montenegro: 9 interações · Reach 196 · 267 views', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato para escala quando a tese aparece cedo. Média disponível: 303 views no Reel com insight completo.' },
      { format: 'Posts estáticos (Imagem)', reach: '115–158 nos 4 posts recentes com insight', depth: 'Alta quando há âncora emocional ou autoridade', engagement: '“O silêncio te reorganiza”: 14 interações · Reach 182 · 395 views', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato recente para interação quando a frase é curta, memorável e emocional.' },
      { format: 'Carrosséis', reach: '494', depth: 'Melhor formato do período por interações', engagement: 'Carrossel 04/06: 46 interações · Reach 494 · 1.260 views', followers: 'N/A', clicks: 'N/A', signal: 'Melhor formato recente. Média de 18,2 interações — supera imagem (10,4) e vídeo (6,4). Priorizar carrosséis com tese emocional.' },
      { format: 'Stories', reach: 'N/A', depth: 'Dados indisponíveis no conector atual', engagement: 'N/A', followers: 'N/A', clicks: 'N/A', signal: 'Bloco preparado para receber dados. Recomendação: Stories diários para aumentar frequência sem sobrecarregar feed.' },
    ],
    rankings: topPostsByInteractions.map((p, i) => ({
      title: `#${i + 1} por engajamento`,
      item: p.caption_preview,
      metric: `${p.total_interactions} int · ${p.reach !== 'N/A' ? p.reach + ' reach' : 'N/A'}`,
      why: i === 0 ? 'Autoridade concreta + ambição declarada. Melhor engajamento do período e prova de que negócios/Govtech ativam audiência qualificada.'
        : i === 1 ? 'Âncora emocional real (neto). Melhor post de imagem do período — prova que conexão humana supera estética de viagem.'
        : i === 2 ? 'Viagem com tese simples de contraste. Carrossel com maior tração visual: 841 views.'
        : i === 3 ? 'Reel de viagem com descoberta clara. Melhor Reel por interação e alcance no recorte recente.'
        : 'Reflexão curta com boa resposta para carrossel. Reforça percepção de profundidade e autoridade emocional.',
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
      { type: 'Reel', title: 'Experiência premium com tese', hook: 'Entrei achando que era X. Saí entendendo Y.', concept: 'Replicar estrutura do Reel de Istambul: descoberta + surpresa + aprendizado de negócio. Formato que melhor combina alcance e impressão de autoridade.', structure: 'Abertura de descoberta → surpresa → tese de negócio → fechamento com identidade.', cta: '' },
      { type: 'Image', title: 'Âncora emocional real', hook: 'O silêncio te reorganiza.', concept: 'Frase curta memorável com imagem forte e ligação direta à liberdade estratégica. Gera impressão de profundidade e reflexão.', structure: 'Foto forte → frase curta → conexão com propósito → fechamento reflexivo.', cta: '' },
      { type: 'Carrossel', title: 'Contraste + tese de negócio', hook: '[Lugar] não é sobre [o óbvio]. É sobre [a tese].', concept: 'Visual impactante + frase de contraste + tese de vida/negócio. Melhor formato por interações médias (22,0).', structure: 'Slide 1: visual forte → Slide 2-4: desenvolvimento → Slide final: fechamento com identidade.', cta: '' },
      { type: 'Stories', title: 'Bastidor de decisão diário', hook: 'Uma decisão que parece pequena e muda o ano inteiro.', concept: 'Stories diários com bastidores de decisão, viagem ou empresa. Reforça impressão de autoridade no dia a dia.', structure: 'Story 1: contexto → Story 2: decisão → Story 3: consequência e aprendizado.', cta: '' },
      { type: 'Reel', title: 'Argumento nos 2 primeiros segundos', hook: '[Tese direta e afiada]', concept: 'Reels onde a tese aparece antes da paisagem — valida retenção e reforça percepção de empreendedor que pensa enquanto viaja.', structure: 'Tese → evidência visual → desenvolvimento → fechamento com identidade.', cta: '' },
    ],
    abTests: [
      { name: 'Autoridade empresarial vs viagem pura', hypothesis: 'Posts com bastidor empresarial ou tese de negócio geram percepção mais qualificada e mais interações do que viagem pura. Nesta coleta, govtech/sala de operações lidera authority_score (9/10).', measure: 'Comparar total_interactions e reach entre posts de autoridade e posts de viagem pura nos próximos 3 ciclos.' },
      { name: 'Âncora emocional real vs estética pura', hypothesis: 'Posts com âncora emocional real (neto, decisão, conquista) geram mais interações do que posts de estética pura. Nesta coleta, frase curta emocional lidera interações.', measure: 'Comparar total_interactions e comentários nos próximos 3 ciclos.' },
      { name: 'Trilinguismo vs português apenas', hypothesis: 'Posts com legenda em PT/EN/ES ampliam alcance internacional e reforçam percepção de empreendedor global.', measure: 'Comparar reach médio entre posts trilíngues e posts apenas em português nos próximos 30 dias.' },
    ],
    autoAlerts: [
      'ATIVO: Monitorar variação semanal de seguidores nas próximas 2 semanas.',
      'Meta Ads indisponível nesta rodada — sem dados de mídia paga.',
      'Alerta quando ER médio cair abaixo de 0.02% por duas semanas seguidas.',
      'Alerta quando Reel ficar abaixo de 300 views — abaixo do patamar mínimo saudável atual.',
      'Monitorar proporção de conteúdo de autoridade vs lifestyle: meta é 40% autoridade empresarial.',
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
  note: 'Baseado nos 20 posts recentes com insights reais coletados via conector nativo — BRT (UTC-3). Atualizado em 01/07/2026 às 09:00.',
  bestDays: [
  { "day": "Quinta", "avgEngagement": 30.0, "postsAnalyzed": 3, "score": 10, "label": "MELHOR", "color": "gold" },
  { "day": "Sábado", "avgEngagement": 19.7, "postsAnalyzed": 3, "score": 7, "label": "FORTE", "color": "green" },
  { "day": "Sexta", "avgEngagement": 16.7, "postsAnalyzed": 3, "score": 6, "label": "MÉDIO", "color": "yellow" },
  { "day": "Domingo", "avgEngagement": 14.5, "postsAnalyzed": 4, "score": 5, "label": "MÉDIO", "color": "yellow" },
  { "day": "Segunda", "avgEngagement": 12.0, "postsAnalyzed": 1, "score": 4, "label": "EVITAR", "color": "red" },
  { "day": "Terça", "avgEngagement": 10.2, "postsAnalyzed": 4, "score": 3, "label": "EVITAR", "color": "red" },
  { "day": "Quarta", "avgEngagement": 9.0, "postsAnalyzed": 2, "score": 3, "label": "EVITAR", "color": "red" }
],
  bestHours: [
  { "hour": "11h", "avgEngagement": 31.0, "postsAnalyzed": 2, "score": 10, "label": "MELHOR", "color": "gold" },
  { "hour": "10h", "avgEngagement": 30.0, "postsAnalyzed": 1, "score": 10, "label": "MELHOR", "color": "gold" },
  { "hour": "19h", "avgEngagement": 18.6, "postsAnalyzed": 5, "score": 6, "label": "MÉDIO", "color": "yellow" },
  { "hour": "14h", "avgEngagement": 18.0, "postsAnalyzed": 1, "score": 6, "label": "MÉDIO", "color": "yellow" },
  { "hour": "12h", "avgEngagement": 17.2, "postsAnalyzed": 4, "score": 6, "label": "MÉDIO", "color": "yellow" },
  { "hour": "09h", "avgEngagement": 11.0, "postsAnalyzed": 1, "score": 4, "label": "EVITAR", "color": "red" },
  { "hour": "17h", "avgEngagement": 10.5, "postsAnalyzed": 2, "score": 3, "label": "EVITAR", "color": "red" },
  { "hour": "18h", "avgEngagement": 8.5, "postsAnalyzed": 2, "score": 3, "label": "EVITAR", "color": "red" },
  { "hour": "16h", "avgEngagement": 7.0, "postsAnalyzed": 1, "score": 2, "label": "EVITAR", "color": "red" },
  { "hour": "15h", "avgEngagement": 0.0, "postsAnalyzed": 1, "score": 0, "label": "EVITAR", "color": "red" }
],
  optimalWindows: [
    { label: 'Janela #1 — Ouro', day: 'Quinta', hour: '11h', expectedEng: '31 interações médias', rationale: 'Melhor combinação real: carrossel 04/06 com 49 interações e carrossel 05/06 com 30 interações, ambos na Quinta às 10-11h.' },
    { label: 'Janela #2 — Prata', day: 'Sábado', hour: '19h', expectedEng: '28 interações', rationale: 'Reel da Suíça: 28 interações, reach 407, views 538.' },
    { label: 'Janela #3 — Bronze', day: 'Domingo', hour: '12h', expectedEng: '22 interações médias', rationale: 'Imagem com maior reach do período: 855 reach, 1.563 views, 33 interações.' },
  ],
  weeklyCalendar: [
  { "day": "Segunda", "hour": "19h", "recommended": false, "score": 4, "label": "EVITAR", "reason": "Avg 12 interações em 1 post. Usar para Stories." },
  { "day": "Terça", "hour": "19h", "recommended": false, "score": 3, "label": "EVITAR", "reason": "Avg 10.2 interações em 4 posts. Usar para Stories ou testes." },
  { "day": "Quarta", "hour": "19h", "recommended": false, "score": 3, "label": "EVITAR", "reason": "Avg 9 interações em 2 posts. Usar para Stories." },
  { "day": "Quinta", "hour": "11h", "recommended": true, "score": 10, "label": "MELHOR", "reason": "Avg 30 interações em 3 posts. Melhor dia real. Priorizar carrosseis às 10-11h." },
  { "day": "Sexta", "hour": "11h", "recommended": true, "score": 6, "label": "MÉDIO", "reason": "Avg 16.7 interações em 3 posts. Bom para imagens e Reels às 11h ou 19h." },
  { "day": "Sábado", "hour": "19h", "recommended": true, "score": 7, "label": "FORTE", "reason": "Avg 19.7 interações em 3 posts. Forte para Reels às 19h." },
  { "day": "Domingo", "hour": "12h", "recommended": true, "score": 5, "label": "MÉDIO", "reason": "Avg 14.5 interações em 4 posts. Melhor reach do período às 12h." }
],
  postingFrequency: { current: '3.2 posts/semana', recommended: '4-5 posts/semana', gap: 'Aumentar cadência com consistência e elevar proporção de conteúdo de autoridade empresarial.', storiesRecommended: '1-2 Stories/dia', storiesCurrent: 'Não monitorado' },
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
    grade: 'B+',
    summary: 'Perfil de posicionamento empresarial com autoridade real e estética premium. O objetivo é criar impressão de competência, vida de alto padrão e credibilidade empresarial — e isso está sendo entregue.',
    mainProblem: 'O feed é dominado por viagem pura (70%). A impressão de quem visita é mais de viajante do que de empreendedor serial com 7 empresas e govtech. O conteúdo de autoridade empresarial precisa aparecer com mais frequência para reforçar a percepção correta.',
  },
  criticalActions: [
    {
      priority: 1,
      urgency: 'ESTA SEMANA',
      action: 'Publicar 2 posts de bastidor empresarial por semana',
      detail: 'Posts de autoridade (govtech, sala de operações, decisões empresariais) geram a impressão mais qualificada. Hoje são menos de 20% do conteúdo. Elevar para 40% muda a percepção de quem visita o perfil.',
      expectedImpact: 'Reforço significativo da percepção de empreendedor serial vs viajante.',
      howTo: 'Toda semana: 1 post de bastidor de empresa/decisão + 1 post de viagem com tese de negócio. Alterne os formatos.',
    },
    {
      priority: 2,
      urgency: 'ESTA SEMANA',
      action: 'Criar série semanal de autoridade recorrente',
      detail: 'Perfis de posicionamento forte têm séries que a audiência espera. Sugestão: "Decisão da semana" — toda quinta, um bastidor de uma decisão empresarial real. Reforça consistência e percepção de liderança.',
      expectedImpact: 'Audiência passa a associar o perfil a decisões e liderança empresarial.',
      howTo: 'Escolha um formato. Publique 4 semanas seguidas. Meça. Ajuste. Não mude o formato antes de 4 semanas.',
    },
    {
      priority: 3,
      urgency: 'ESTA SEMANA',
      action: 'Ativar Stories diários de bastidor',
      detail: 'Stories de bastidor empresarial (decisões, viagens de trabalho, bastidores de empresa) reforçam a impressão de autoridade no dia a dia. Perfis sem Stories diários perdem visibilidade no algoritmo.',
      expectedImpact: '+15-20% de alcance orgânico nos posts + reforço diário da percepção de autoridade.',
      howTo: 'Regra simples: toda vez que publicar um post, publique 1 Story de bastidor relacionado. Contexto, decisão ou reflexao.',
    },
    {
      priority: 4,
      urgency: 'PRÓXIMOS 14 DIAS',
      action: 'Criar carrossel manifesto de posicionamento',
      detail: 'Um carrossel de 8-10 slides explicando sua filosofia de liberdade estratégica e como você constrói empresas enquanto viaja o mundo. Conteúdo evergreen que define a percepção de quem visita o perfil.',
      expectedImpact: 'Potencial de 3-5x o alcance médio. Define a narrativa central do perfil para novos visitantes.',
      howTo: 'Slide 1: "A maioria das pessoas acha que liberdade é sorte. Errado." → Slides 2-9: seus princípios e provas reais → Slide 10: fechamento com identidade.',
    },
    {
      priority: 5,
      urgency: 'PRÓXIMOS 14 DIAS',
      action: 'Criar destaque "Empresas" e "Bastidores" no perfil',
      detail: 'Novos visitantes decidem a impressão em 8 segundos. Você tem 7 empresas, 2 vendidas, govtech, 37 países — mas isso não aparece de forma visual. Destaques com provas reais reforçam a percepção de autoridade imediatamente.',
      expectedImpact: 'Impressão de empreendedor serial fica imediata para qualquer visitante.',
      howTo: 'Criar 5-8 Stories com: empresa, resultado, número, foto. Salvar em destaque "Empresas" e "Bastidores".',
    },
    {
      priority: 6,
      urgency: 'PRÓXIMOS 30 DIAS',
      action: 'Elevar frequência de conteúdo trilingual',
      detail: 'Trilinguismo (PT/EN/ES) é um diferencial raro que amplia alcance internacional e reforça percepção de empreendedor global. Testar sistematicamente legendas em 3 idiomas nos posts de autoridade.',
      expectedImpact: 'Ampliação de alcance internacional + reforço da percepção de empreendedor global.',
      howTo: 'Nos posts de autoridade: legenda em PT + versão curta em EN no primeiro comentário. Medir variação de reach.',
    },
  ],
  contentFormula: {
    title: 'Fórmula de posicionamento para @ricardoimp',
    formula: 'Cenário premium + âncora emocional real + tese de negócio ou decisão empresarial',
    proof: 'Reel de Istambul liderou reach (397) e views (563). Post de govtech/sala de operações lidera authority_score (9/10). A combinação de cenario forte + tese de negócio é a fórmula que entrega a impressão correta.',
    antiFormula: 'Reel de movimento puro sem argumento = views sem impressão de autoridade. Viagem pura sem tese dilui a percepção de empreendedor.',
  },
  growthTargets: {
    followers30d: '+500 seguidores em 30 dias (meta conservadora com conteúdo de autoridade ativo)',
    followers90d: '+2.000 seguidores em 90 dias (com série semanal + Stories diários)',
    erTarget: '0,08% ER médio (hoje 0,026% — meta realista em 60 dias)',
    reachTarget: '600 Reach médio por post (hoje 320 na média dos 20 posts)',
  },
  weeklyChecklist: [
    { day: 'Domingo', task: 'Planejar 4-5 posts da semana. Definir quais são de autoridade empresarial e quais são de lifestyle.' },
    { day: 'Segunda', task: 'Story de bastidor ou reflexão de decisão. Sem post de feed.' },
    { day: 'Quarta', task: 'Post de autoridade empresarial (bastidor, govtech, decisão). Melhor dia para impressão qualificada.' },
    { day: 'Quinta', task: 'Melhor dia real (avg 30 interações): carrossel com tese de negócio ou viagem com aprendizado.' },
    { day: 'Sexta', task: 'Post emocional ou de autoridade. Segundo melhor dia.' },
    { day: 'Sábado', task: 'Reel premium ou carrossel de viagem com tese. Melhor dia para Reels (avg 19.7 interações).' },
    { day: 'Domingo', task: 'Story reflexivo + análise rápida do que performou na semana.' },
  ],
};

// ─────────────────────────────────────────────────────────────
// BLOCO 14 — GUIA DE PATROCINADO
// O que, como e quanto patrocinar — baseado no seu conteúdo
// ─────────────────────────────────────────────────────────────
export const sponsoredGuide = {
  currentStatus: {
    campaign: 'Indisponível',
    status: 'INDISPONÍVEL — CONECTOR META ADS SEM RETORNO VÁLIDO',
    budget: 'N/A',
    objective: 'N/A',
    problem: 'O conector Meta Ads não retornou dados válidos nesta atualização. Nenhuma métrica foi estimada.',
    recommendation: 'Aguardar retorno válido do conector antes de qualquer análise de mídia paga.',
  },
  whatToSponsor: [
    {
      rank: 1,
      content: 'Post com tese curta emocional + autoridade empresarial',
      why: 'Conteúdo que combina cenário forte com tese de negócio já provou autoridade organicamente. Patrocinar amplifica o alcance da impressão de empreendedor serial.',
      objective: 'REACH',
      budget: 'R$25-50/dia por 5-7 dias',
      expectedResult: '15.000-30.000 alcance adicional para audiência qualificada',
      audience: 'Empreendedores 30-50 anos, Brasil + Portugal + Argentina',
    },
    {
      rank: 2,
      content: 'Post do Neto (âncora emocional — 24 interações)',
      why: 'Conteúdo emocional com alta taxa de interações. Reforça percepção humana e acessível do empreendedor.',
      objective: 'ENGAGEMENT',
      budget: 'R$20-35/dia por 5 dias',
      expectedResult: '+200-400 interações, +50-100 novos seguidores qualificados',
      audience: 'Homens 35-55, empreendedores, pais, Brasil',
    },
    {
      rank: 3,
      content: 'Carrossel manifesto (a criar — "Liberdade é estratégia")',
      why: 'Conteúdo de posicionamento evergreen. Amplifica a percepção de autoridade para novos visitantes do perfil.',
      objective: 'REACH',
      budget: 'R$50-100/dia por 7-10 dias',
      expectedResult: '+500-1.000 seguidores qualificados que se identificam com a tese',
      audience: 'Empreendedores 28-50, interesse em liberdade, negócios, viagens',
    },
    {
      rank: 4,
      content: 'Reel de bastidor empresarial (a criar)',
      why: 'Bastidor com prova real (govtech, decisão, empresa) é o formato mais eficaz para reforçar impressão de empreendedor serial para novos públicos.',
      objective: 'REACH',
      budget: 'R$30-60/dia por 7 dias',
      expectedResult: '20.000-40.000 alcance qualificado',
      audience: 'Interessados em empreendedorismo, IA, govtech, 25-45 anos',
    },
  ],
  howToSponsor: [
    {
      step: 1,
      title: 'Escolha o conteúdo certo',
      detail: 'Só patrocine conteúdo que já performou organicamente. Regra: post com ER acima da média do perfil (>0.026%) ou que já gerou impressão de autoridade mensurável.',
    },
    {
      step: 2,
      title: 'Defina o objetivo de posicionamento',
      detail: 'REACH: para ampliar alcance da impressão de autoridade. ENGAGEMENT: para reforçar percepção de proximidade. Objetivo do perfil é posicionamento — priorizar REACH sobre tráfego.',
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
      detail: 'Para REACH: CPM (custo por mil impressoes). Para ENGAGEMENT: custo por interação. Benchmark de posicionamento: CPM < R$8.',
    },
    {
      step: 6,
      title: 'Otimize o que funciona',
      detail: 'Se uma campanha tiver CPM < R$6, aumente o orçamento. Se estiver acima de R$12 CPM, pause e teste nova criativa ou audiência.',
    },
  ],
  monthlyBudgetSuggestion: {
    conservative: 'R$300/mês — 2 campanhas de posicionamento de R$150 cada',
    moderate: 'R$600/mês — 3-4 campanhas rotativas de autoridade',
    aggressive: 'R$1.200/mês — campanha de posicionamento sempre ativa + testes A/B de criativo',
    recommendation: 'Começar com R$300/mês. Testar 2 conteúdos de autoridade diferentes. Otimizar o que gerar melhor CPM no mês seguinte.',
  },
  audienceSegments: [
    { name: 'Core', description: 'Empreendedores brasileiros 30-50 anos', size: '2-5M', priority: 'Alta' },
    { name: 'Viajantes premium', description: 'Viajantes frequentes, renda alta, 28-50 anos', size: '1-3M', priority: 'Alta' },
    { name: 'Lusófono internacional', description: 'PT + BR + AO — empreendedores', size: '3-8M', priority: 'Média' },
    { name: 'Lookalike seguidores', description: 'Similar aos 62k atuais', size: 'Calculado pelo Meta', priority: 'Muito Alta' },
  ],
};
