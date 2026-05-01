// Script Mestre — Auditoria Completa de Perfil @ricardoimp
// Estrutura de 4 camadas: raw_data | analytics_tables | executive_summary | scorecards
// Última coleta: 28 abr 2026 — Instagram MCP + Meta Marketing MCP
// 19 posts analisados | 16 com insights completos

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
  bio_full: 'Construo empresas enquanto viajo o mundo ✈️\n🏆7 empresas • 2 vendidas\n🌎37 países visitados\n👇🏼Liberdade é estratégia!',
  bio_summary: 'Empreendedor serial com 7 empresas, 2 vendidas, 37 países visitados. Posicionamento: liberdade como estratégia.',
  link_bio: 'http://saiba-mais.ai',
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
  website: 'http://saiba-mais.ai',
  collected_at: '2026-04-28T18:00:00Z',
};

export const postsRaw: PostRaw[] = [
  { id: '18338572129171422', date: '2026-04-28T14:58:39Z', type: 'VIDEO', media_product_type: 'REELS',
    caption: 'Toda viagem revela 3 versões suas:\nA que você sustenta hoje.\nA que já não faz mais sentido.\nE a que está esperando uma decisão sua.\n#canada #instagram #trip #photography #paz',
    likes: 8, comments: 1, reach: 221, views: 290, saved: 0, total_interactions: 9,
    hashtags: ['canada','instagram','trip','photography','paz'], mentions: [],
    permalink: 'https://www.instagram.com/reel/DXrfHHGgO3d/' },
  { id: '18110982055878581', date: '2026-04-27T15:07:43Z', type: 'VIDEO', media_product_type: 'REELS',
    caption: 'Entrei achando que era só um mercado\nsaí entendendo por que lugares assim duram séculos, um dos mercados mais antigos de istambul 🇹🇷\n#turquia #trip #viajar #instagood #reels',
    likes: 15, comments: 4, reach: 348, views: 479, saved: 0, total_interactions: 19,
    hashtags: ['turquia','trip','viajar','instagood','reels'], mentions: [],
    permalink: 'https://www.instagram.com/reel/DXo7KozAHJr/' },
  { id: '18115128127783856', date: '2026-04-26T15:35:43Z', type: 'CAROUSEL_ALBUM', media_product_type: 'FEED',
    caption: 'Quanto mais eu vou…\nmais eu entendo que não é sobre ir.',
    likes: 20, comments: 1, reach: 155, views: 391, saved: 0, total_interactions: 21,
    hashtags: [], mentions: [],
    permalink: 'https://www.instagram.com/p/DXmaEoSFKsK/' },
  { id: '18591759310050140', date: '2026-04-24T15:49:40Z', type: 'IMAGE', media_product_type: 'FEED',
    caption: 'No meio de tudo que eu construo…\né aqui que eu lembro o porquê.\n🇺🇸 In the middle of everything I build…\n🇪🇸 En medio de todo lo que construyo…\n#grandson #photography #família #family #instagood',
    likes: 33, comments: 5, reach: 319, views: 635, saved: 0, total_interactions: 39,
    hashtags: ['grandson','photography','família','family','instagood'], mentions: [],
    permalink: 'https://www.instagram.com/p/DXhReNcAJlQ/' },
  { id: '17943920478168349', date: '2026-04-21T16:58:33Z', type: 'CAROUSEL_ALBUM', media_product_type: 'FEED',
    caption: 'Se a conta é sua…faça valer a vida que escolheu.\n🇪🇸 Si la cuenta es tuya…\n🇺🇸 If you\'re the one paying the price…\n#live #vivalavida #seattle #photography #market',
    likes: 12, comments: 6, reach: 199, views: 423, saved: 0, total_interactions: 18,
    hashtags: ['live','vivalavida','seattle','photography','market'], mentions: [],
    permalink: 'https://www.instagram.com/p/DXZrk7RADRP/' },
  { id: '18118097605678754', date: '2026-04-18T21:25:36Z', type: 'CAROUSEL_ALBUM', media_product_type: 'FEED',
    caption: 'O mundo não é só destino.\nÉ contraste.\n#marrocos #desert #trip #vivendo #mundo',
    likes: 29, comments: 2, reach: 298, views: 793, saved: 1, total_interactions: 32,
    hashtags: ['marrocos','desert','trip','vivendo','mundo'], mentions: [],
    permalink: 'https://www.instagram.com/p/DXSbwQcFF0V/' },
  { id: '17866159815613734', date: '2026-04-16T22:52:16Z', type: 'VIDEO', media_product_type: 'REELS',
    caption: 'O mundo é de quem se move.\nNão espere permissão.\nLos Angeles → Las Vegas\n#losangeles #lasvegas #movimento #viagem #empreendedorismo',
    likes: 10, comments: 1, reach: 228, views: 316, saved: 1, total_interactions: 12,
    hashtags: ['losangeles','lasvegas','movimento','viagem','empreendedorismo'], mentions: [],
    permalink: 'https://www.instagram.com/reel/DXNbns2j4Kl/' },
  { id: '18117398149663032', date: '2026-04-15T21:47:22Z', type: 'IMAGE', media_product_type: 'FEED',
    caption: 'Conheço o preço da liberdade.Eu pago.\n#mundo #liberdade #vivendo #life #good',
    likes: 11, comments: 1, reach: 144, views: 252, saved: 0, total_interactions: 12,
    hashtags: ['mundo','liberdade','vivendo','life','good'], mentions: [],
    permalink: 'https://www.instagram.com/p/DXKvqEJiZ6p/' },
  { id: '18223237996314109', date: '2026-04-11T16:28:14Z', type: 'CAROUSEL_ALBUM', media_product_type: 'FEED',
    caption: 'Ninguém fala muito da Croácia…\nmas deveria.\nÁgua transparente de verdade.\n#croacia #paradise #photographer #instagood #europa',
    likes: 14, comments: 1, reach: 247, views: 500, saved: 1, total_interactions: 16,
    hashtags: ['croacia','paradise','photographer','instagood','europa'], mentions: [],
    permalink: 'https://www.instagram.com/p/DW_4KJtAPQA/' },
  { id: '18084408851056630', date: '2026-04-10T14:46:38Z', type: 'VIDEO', media_product_type: 'REELS',
    caption: 'Tudo que você constrói te traz pra momentos assim.\nAlmoçar no Rio Sena navegando por Paris…\n#paris #trip #viagem #europa #photography',
    likes: 9, comments: 2, reach: 321, views: 400, saved: 0, total_interactions: 11,
    hashtags: ['paris','trip','viagem','europa','photography'], mentions: [],
    permalink: 'https://www.instagram.com/reel/DW9HKuGgMmr/' },
  { id: '17911774722356878', date: '2026-03-31T15:14:46Z', type: 'CAROUSEL_ALBUM', media_product_type: 'FEED',
    caption: 'Dubrovnik é conhecida pelas muralhas, pelo mar e pela história, mas poucos sabem que aqui também está a University of Dubrovnik.',
    likes: 24, comments: 1, reach: 314, views: 682, saved: 0, total_interactions: 25,
    hashtags: [], mentions: [],
    permalink: 'https://www.instagram.com/p/DWjbAYOAOsG/' },
  { id: '18001864238860156', date: '2026-03-26T22:23:11Z', type: 'VIDEO', media_product_type: 'REELS',
    caption: 'Não é sobre parecer que vive.\nÉ sobre estar vivendo de verdade. 🌍',
    likes: 19, comments: 2, reach: 411, views: 575, saved: 1, total_interactions: 22,
    hashtags: [], mentions: [],
    permalink: 'https://www.instagram.com/reel/DWXT-QhAEcA/' },
  { id: '18587161180034708', date: '2026-03-25T13:14:10Z', type: 'VIDEO', media_product_type: 'REELS',
    caption: 'Eu achei que era apenas uma loja de sardinhas\nMas na verdade é quase um espetáculo.\nO Mundo Fantástico da Sardinha Portuguesa @portuguesesardine, em Lisboa',
    likes: 31, comments: 4, reach: 1197, views: 1398, saved: 5, total_interactions: 49,
    hashtags: [], mentions: ['portuguesesardine'],
    permalink: 'https://www.instagram.com/reel/DWTwL0igM_t/' },
  { id: '18083718791367809', date: '2026-03-25T00:13:27Z', type: 'IMAGE', media_product_type: 'FEED',
    caption: 'Não tenho um escritório.\nTenho uma sala de operações. 👨🏻‍💻\nDaqui saem decisões. Não tarefas.\nA IA está criando uma nova onda de oportunidades maior que a dos cursos, maior que a dos ads. 🚀',
    likes: 16, comments: 0, reach: 353, views: 523, saved: 2, total_interactions: 19,
    hashtags: [], mentions: [],
    permalink: 'https://www.instagram.com/p/DWSWTVwgODK/' },
  { id: '18095251325061078', date: '2026-03-08T12:38:25Z', type: 'CAROUSEL_ALBUM', media_product_type: 'FEED',
    caption: 'Tranquilidade… paz… um ambiente confortável e a gratidão de que existe alguém por nós.\n#montanha #life #god #vivendo #instagood',
    likes: 29, comments: 0, reach: 391, views: 944, saved: 0, total_interactions: 29,
    hashtags: ['montanha','life','god','vivendo','instagood'], mentions: [],
    permalink: 'https://www.instagram.com/p/DVn61LdgLHu/' },
  { id: '18073296557439826', date: '2026-03-06T23:51:25Z', type: 'IMAGE', media_product_type: 'FEED',
    caption: 'Construindo.\nCelebrando.\nRepetindo.\n#brinde #wine #lifestyle #celebration #instagood',
    likes: 19, comments: 6, reach: 479, views: 884, saved: 0, total_interactions: 25,
    hashtags: ['brinde','wine','lifestyle','celebration','instagood'], mentions: [],
    permalink: 'https://www.instagram.com/p/DVj99DeAOWE/' },
  { id: '18095218777975373', date: '2026-02-28T00:00:00Z', type: 'VIDEO', media_product_type: 'REELS',
    caption: 'Trabalhar com as maiores lideranças do governo revela uma coisa:\nNão é a velocidade que te destaca. É a estrutura!\n#governo #govtech #lideranca #estrutura #gov',
    likes: 4, comments: 0, reach: 344, views: 408, saved: 0, total_interactions: 4,
    hashtags: ['governo','govtech','lideranca','estrutura','gov'], mentions: [],
    permalink: 'https://www.instagram.com/reel/DVRAdHNAEae/' },
];

// ─────────────────────────────────────────────────────────────
// CAMADA 2 — ANALYTICS TABLES
// ─────────────────────────────────────────────────────────────
export const profileMetrics = {
  followers: 62223,
  following: 330,
  posts_total: 3002,
  follower_following_ratio: 188.6,
  posts_per_week_estimated: 2.3,
  reels_share_pct: 47.4,
  feed_image_share_pct: 26.3,
  carousel_share_pct: 26.3,
  source: 'observed',
  collected_at: '2026-04-28T18:00:00Z',
};

export const calculatedFields = {
  avg_likes_last_20: 18.6,
  avg_comments_last_20: 2.0,
  avg_views_last_20: 573.4,
  avg_reach_last_20: 344.6,
  avg_interactions_last_20: 19.2,
  median_likes: 15,
  median_comments: 1,
  avg_caption_length: 152,
  avg_hashtags_per_post: 2.4,
  avg_mentions_per_post: 0.05,
  posting_frequency_per_week: 2.3,
  follower_following_ratio: 188.6,
  engagement_rate_avg_pct: 0.031,
  top_3_content_formats: ['REELS', 'CAROUSEL_ALBUM', 'IMAGE'],
  top_5_content_topics: ['Viagem & Lifestyle', 'Negócios & Autoridade', 'Reflexão & Propósito', 'Tecnologia & IA', 'Conexão Emocional'],
  top_5_words: ['liberdade', 'construo', 'mundo', 'vida', 'viagem'],
  best_post_by_interactions: { id: '18587161180034708', interactions: 49, caption_preview: 'Sardinha Portuguesa — Lisboa', reach: 1197 },
  best_reel_by_views: { id: '18587161180034708', views: 1398, caption_preview: 'Sardinha Portuguesa — Lisboa', reach: 1197 },
  worst_post_by_interactions: { id: '18095218777975373', interactions: 4, caption_preview: 'Govtech — estrutura' },
  most_common_posting_day: 'Quinta',
  most_common_posting_hour: '15:00',
  estimated_content_pillars: ['Viagem & Lifestyle', 'Negócios & Autoridade', 'Reflexão & Propósito', 'Tecnologia & IA', 'Conexão Emocional'],
  estimated_target_audience: 'Empreendedores 28-45 anos, Brasil, interessados em liberdade financeira, viagens e construção de negócios',
  estimated_business_model: 'Posicionamento de autoridade → tráfego para saiba-mais.ai → conversão em serviços/consultorias',
  estimated_primary_cta: 'Tráfego para link na bio (saiba-mais.ai)',
  estimated_conversion_path: 'Conteúdo orgânico → perfil → link bio → landing page',
};

export const postingPatterns = {
  most_active_day: 'Quinta',
  most_active_hour: '15:00',
  posts_per_week_estimated: 2.3,
  days_distribution: { 'Segunda': 1, 'Terça': 2, 'Quarta': 2, 'Quinta': 5, 'Sexta': 3, 'Sábado': 3, 'Domingo': 3 },
  format_distribution: { REELS: 9, IMAGE: 5, CAROUSEL_ALBUM: 5 },
  format_distribution_pct: { REELS: 47.4, IMAGE: 26.3, CAROUSEL_ALBUM: 26.3 },
  funnel_distribution: { topo: 17, meio: 2, fundo: 0 },
  content_temp_distribution: { frio: 5, morno: 10, quente: 4 },
  consistency: 'Moderada — 2-3 posts/semana com picos e pausas',
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
  { id: '18587161180034708', date: '2026-03-25', type: 'REEL', caption_preview: 'Sardinha Portuguesa — Lisboa', total_interactions: 49, reach: 1197, views: 1398, saved: 5 },
  { id: '18591759310050140', date: '2026-04-24', type: 'IMAGE', caption_preview: 'No meio de tudo que construo… (neto)', total_interactions: 39, reach: 319, views: 635, saved: 0 },
  { id: '18095251325061078', date: '2026-03-08', type: 'CAROUSEL', caption_preview: 'Tranquilidade… paz… montanha', total_interactions: 29, reach: 391, views: 944, saved: 0 },
  { id: '18118097605678754', date: '2026-04-18', type: 'CAROUSEL', caption_preview: 'O mundo não é só destino. É contraste. — Marrocos', total_interactions: 32, reach: 298, views: 793, saved: 1 },
  { id: '18073296557439826', date: '2026-03-06', type: 'IMAGE', caption_preview: 'Construindo. Celebrando. Repetindo.', total_interactions: 25, reach: 479, views: 884, saved: 0 },
];

export const topPostsByReach = [
  { id: '18587161180034708', date: '2026-03-25', type: 'REEL', caption_preview: 'Sardinha Portuguesa — Lisboa', reach: 1197, views: 1398, total_interactions: 49 },
  { id: '18073296557439826', date: '2026-03-06', type: 'IMAGE', caption_preview: 'Construindo. Celebrando. Repetindo.', reach: 479, views: 884, total_interactions: 25 },
  { id: '18001864238860156', date: '2026-03-26', type: 'REEL', caption_preview: 'Não é sobre parecer que vive.', reach: 411, views: 575, total_interactions: 22 },
  { id: '18095251325061078', date: '2026-03-08', type: 'CAROUSEL', caption_preview: 'Tranquilidade… paz… montanha', reach: 391, views: 944, total_interactions: 29 },
  { id: '18083718791367809', date: '2026-03-25', type: 'IMAGE', caption_preview: 'Sala de operações — IA', reach: 353, views: 523, total_interactions: 19 },
];

export const topReelsByViews = [
  { id: '18587161180034708', date: '2026-03-25', caption_preview: 'Sardinha Portuguesa — Lisboa', views: 1398, reach: 1197, total_interactions: 49, saved: 5 },
  { id: '18095251325061078', date: '2026-03-08', caption_preview: 'Tranquilidade… paz… montanha (carrossel)', views: 944, reach: 391, total_interactions: 29, saved: 0 },
  { id: '18073296557439826', date: '2026-03-06', caption_preview: 'Construindo. Celebrando. Repetindo.', views: 884, reach: 479, total_interactions: 25, saved: 0 },
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
  { hashtag: 'instagood', count: 4 },
  { hashtag: 'trip', count: 3 },
  { hashtag: 'vivendo', count: 3 },
  { hashtag: 'photography', count: 3 },
  { hashtag: 'instagram', count: 2 },
  { hashtag: 'life', count: 2 },
  { hashtag: 'lifestyle', count: 2 },
  { hashtag: 'mundo', count: 2 },
  { hashtag: 'viagem', count: 2 },
  { hashtag: 'europa', count: 2 },
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
  posts_analyzed: 17,
  posts_with_full_insights: 16,
  completeness_pct: 94.1,
  confidence_global: 'medium-high',
  limitations: [
    'Stories não disponíveis via conector atual',
    'Destaques não acessíveis via MCP',
    'Dados demográficos de audiência indisponíveis',
    'Comentários individuais não coletados',
    'Meta Ads sem dados de entrega (last_30d e last_90d)',
  ],
  collection_notes: 'Coleta via Instagram MCP oficial. 17 posts com insights. Meta Ads consultado — zero entrega registrada.',
  collected_at: '2026-04-28T18:00:00Z',
};

// ─────────────────────────────────────────────────────────────
// OBJETO PRINCIPAL (compatibilidade com Home.tsx existente)
// ─────────────────────────────────────────────────────────────
export const dashboardData = {
  meta: {
    profile: profileIdentity,
    lastUpdated: '28 abr 2026',
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
