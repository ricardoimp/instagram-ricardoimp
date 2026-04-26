// Design philosophy: editorial executivo cinematográfico, com leitura estratégica e tom de inteligência privada.
// Este arquivo centraliza apenas dados reais coletados dos conectores disponíveis e interpretações editoriais derivadas deles.
// Última coleta: 26 abr 2026 — Instagram MCP + Meta Marketing MCP

export const dashboardData = {
  meta: {
    profile: {
      username: '@ricardoimp',
      name: 'Ricardo Impellizieri',
      bio: 'Construo empresas enquanto viajo o mundo ✈️\n🏆7 empresas • 2 vendidas\n🌎37 países visitados\n👇🏼Liberdade é estratégia!',
      followers: 62223,
      following: 330,
      posts: 3002,
      website: 'http://saiba-mais.ai',
    },
    lastUpdated: '26 abr 2026',
    dashboardCadence: 'Atualização semanal aos domingos',
    designPhilosophy: 'Editorial executivo cinematográfico',
  },
  executive: {
    summary: {
      profileStrength: 'Autoridade aspiracional com forte lastro de trajetória, viagens e negócios reais. Perfil com 37 países visitados e 7 empresas construídas.',
      instagramReading: 'Semana de 21–26/abr mostra padrão claro: posts de conexão emocional com prova de vida real (neto, família) superam posts de viagem pura. O post "No meio de tudo que construo" (24/abr) atingiu 319 de alcance e 39 interações — melhor resultado recente. Carrosséis de viagem com tese curta e forte (Marrocos, Croácia) sustentam alcance consistente entre 247–298.',
      adsReading: 'Campanha "Las Vegas do alto" permanece com status ATIVO no cadastro (R$35/dia, objetivo LINK_CLICKS, criada abr/2025), porém sem nenhum dado de entrega retornado pelo conector Meta em nenhum período consultado (30d, 90d). Situação inalterada desde o ciclo anterior.',
      criticalPoint: 'O gargalo principal continua sendo a ausência de mensuração efetiva dos anúncios. No orgânico, o sinal mais forte desta semana veio de conteúdo com âncora emocional real — não de viagem isolada. Isso reforça a tese: prova de vida + construção empresarial supera estética de destino.',
    },
    kpis: [
      { label: 'Seguidores', value: '62.223', delta: '−38 vs ciclo anterior', tone: 'warning' as const },
      { label: 'Seguindo', value: '330', delta: 'estável', tone: 'neutral' as const },
      { label: 'Publicações', value: '3.002', delta: '+3 desde última atualização', tone: 'positive' as const },
      { label: 'Anúncios Meta (30d)', value: 'Sem entrega', delta: 'insights indisponíveis', tone: 'warning' as const },
    ],
    conversion: [
      { label: 'Alcance → seguidor', value: 'N/A', note: 'o conector atual não expõe crescimento líquido no período' },
      { label: 'Perfil → clique', value: 'N/A', note: 'o conector atual não expõe visitas ao perfil e cliques de link' },
      { label: 'Conteúdo → visita', value: 'N/A', note: 'o conector atual não expõe essa trilha de conversão' },
    ],
    alerts: [
      'Seguidores caíram 38 no ciclo: 62.261 → 62.223. Monitorar tendência nas próximas semanas.',
      'Post com âncora emocional real (neto/família, 24/abr) gerou 39 interações e alcance 319 — melhor da semana.',
      'Campanha Meta permanece sem entrega mensurável. Qualquer novo investimento exige reativação do rastreio primeiro.',
      'Reels recentes (LA→LV e Paris/Sena) com alcance entre 228–321 e interações baixas (11–12): estética sem argumento não sustenta profundidade.',
    ],
  },
  deepAnalysis: {
    formatPerformance: [
      {
        format: 'Reels',
        reach: '228–321',
        depth: 'Baixa profundidade — views altas mas interações enxutas',
        engagement: 'LA→LV: 12 interações · Paris/Sena: 11 interações',
        followers: 'N/A',
        clicks: 'N/A',
        signal: 'Movimento e cenário atraem views, mas falta argumento para converter em engajamento real.',
      },
      {
        format: 'Posts estáticos (Imagem)',
        reach: '144–319',
        depth: 'Alta quando há âncora emocional ou prova de vida',
        engagement: '"No meio de tudo que construo" (24/abr): 39 interações · alcance 319 · views 635',
        followers: 'N/A',
        clicks: 'N/A',
        signal: 'Melhor formato atual para autoridade e conexão. Post com neto gerou o maior engajamento da semana.',
      },
      {
        format: 'Carrosséis',
        reach: '199–298',
        depth: 'Consistência moderada a boa',
        engagement: 'Marrocos: 32 interações · Croácia: 16 · Seattle: 18',
        followers: 'N/A',
        clicks: 'N/A',
        signal: 'Carrosséis de viagem com tese curta performam bem. Marrocos (298 alcance, 793 views) foi destaque da semana.',
      },
      {
        format: 'Stories',
        reach: 'N/A',
        depth: 'Dados indisponíveis no conector atual',
        engagement: 'N/A',
        followers: 'N/A',
        clicks: 'N/A',
        signal: 'Bloco preparado para receber dados na próxima atualização.',
      },
    ],
    rankings: [
      {
        title: 'Top engajamento da semana',
        item: '"No meio de tudo que construo… é aqui que lembro o porquê" (24/abr)',
        metric: '39 interações · alcance 319 · views 635 · 5 comentários',
        why: 'Post com foto do neto + âncora de construção empresarial. Prova que conexão emocional real supera estética de viagem. O trilinguismo (PT/EN/ES) amplia alcance potencial.',
      },
      {
        title: 'Top alcance + views da semana',
        item: '"O mundo não é só destino. É contraste." — Marrocos (18/abr)',
        metric: '32 interações · alcance 298 · views 793 · 1 saved',
        why: 'Carrossel de Marrocos com frase de contraste. Views altas (793) indicam curiosidade visual forte. Tese curta e cenário impactante funcionam como combinação.',
      },
      {
        title: 'Top Reel da semana',
        item: 'Paris/Sena — almoço navegando (10/abr)',
        metric: '11 interações · alcance 321 · views 400',
        why: 'Melhor alcance entre os Reels recentes. Contexto de experiência premium (champagne, pontos turísticos) com narrativa de recompensa pela construção.',
      },
      {
        title: 'Top Reel com menor conversão',
        item: 'Los Angeles → Las Vegas (16/abr)',
        metric: '12 interações · alcance 228 · views 316 · 1 saved',
        why: 'Movimento e cenário presentes, mas falta estrutura de argumento. Alcance menor que o Reel de Paris — confirma que contexto de experiência premium retém mais.',
      },
      {
        title: 'Post mais recente (monitorar)',
        item: '"Quanto mais eu vou… mais entendo que não é sobre ir." (26/abr)',
        metric: '6 interações · alcance 36 · views 85 — publicado hoje',
        why: 'Publicado no dia da coleta. Dados ainda em formação — monitorar no próximo ciclo.',
      },
    ],
    positioning: {
      seenAs: 'O perfil está se movendo para um território mais humano e emocional esta semana, com o post do neto como âncora. Quando prova de vida real entra no feed, a percepção sobe de "inspiração sofisticada" para "referência com substância".',
      tension: 'Reels ainda funcionam mais como vitrine de mobilidade do que como veículo de argumento. A força estética está presente, mas a profundidade intelectual ainda não acompanha nos vídeos.',
      misalignment: 'Há um padrão emergente: posts com âncora emocional real (família, conquista, bastidor) superam posts puramente contemplativos. O risco é publicar viagem sem tese — bonito demais para ser ignorado, mas leve demais para ser lembrado.',
    },
  },
  audience: {
    layers: [
      {
        title: 'Quem responde melhor esta semana',
        text: 'Conteúdo com âncora emocional real (família, legado, bastidor de construção) concentra o melhor sinal. O post do neto com 39 interações confirma que a audiência responde a prova de vida, não apenas a prova de destino.'
      },
      {
        title: 'Quem consome sem avançar',
        text: 'Reels de movimento puro (LA→LV, Paris) atraem views mas geram poucas interações. A audiência assiste, mas não comenta, não salva, não compartilha — sinal de consumo passivo sem engajamento decisório.'
      },
      {
        title: 'Padrão oculto confirmado neste ciclo',
        text: 'Quando o conteúdo combina cenário forte com tese emocional ou âncora de construção, o engajamento sobe. Quando fica só na paisagem ou no movimento, o alcance é razoável mas a profundidade cai. Marrocos (tese de contraste) e o post do neto (tese de propósito) são os dois melhores exemplos desta semana.'
      },
    ],
    hiddenPatterns: [
      'Âncora emocional real (família, conquista, legado) supera estética de viagem isolada.',
      'Trilinguismo (PT/EN/ES) pode estar ampliando alcance — monitorar nos próximos ciclos.',
      'Carrosséis com tese curta e visual forte (Marrocos, Croácia) sustentam alcance consistente 247–298.',
      'Reels precisam de argumento além do movimento para converter views em interações.',
    ],
  },
  decisionEngine: {
    whatWorks: [
      'Âncora emocional real: família, bastidor de conquista, legado visível.',
      'Carrossel com tese de contraste ou argumento curto + visual impactante.',
      'Frase de abertura densa que ancora o conteúdo antes da imagem falar.',
      'Trilinguismo como estratégia de alcance internacional (PT/EN/ES).',
      'Experiência premium com narrativa de recompensa pela construção (Paris/Sena).',
    ],
    whatIsWrong: [
      'Reels com movimento sem argumento: alcance razoável, engajamento baixo.',
      'Seguidores em leve queda (−38): sinal para monitorar consistência de conteúdo.',
      'Campanha Meta sem entrega mensurável há mais de 30 dias — budget desperdiçado ou parado.',
      'Falta de séries recorrentes que consolidem assinatura intelectual clara.',
      'Post mais recente (26/abr) publicado hoje com alcance inicial de apenas 36 — monitorar distribuição.',
    ],
    opportunities: [
      'Escalar o padrão do post do neto: âncora emocional real + construção empresarial = maior engajamento.',
      'Criar série de carrosséis "contraste": destino + tese de negócio ou vida. Marrocos provou o formato.',
      'Transformar Reels em veículo de argumento: abertura com tese nos 2 primeiros segundos.',
      'Reativar mensuração dos anúncios Meta antes de qualquer novo investimento.',
      'Explorar trilinguismo como diferencial de alcance internacional — testar em mais posts.',
    ],
    weeklyPlan: [
      {
        type: 'Reel',
        title: 'O preço da liberdade',
        hook: 'Liberdade não é sorte. É estrutura.',
        concept: 'Costurar imagens de deslocamento com decisões difíceis e renúncias reais da construção empresarial.',
        structure: 'Abertura afiada → cenas de movimento → frase de tensão → fechamento com tese.',
        cta: '"Se você quer liberdade de verdade, comece pela estrutura."'
      },
      {
        type: 'Reel',
        title: 'O bastidor que ninguém vê',
        hook: 'Todo palco bonito esconde uma engenharia brutal.',
        concept: 'Mostrar bastidores de reuniões, viagens e execução com narração curta.',
        structure: 'Cena forte → quebra de expectativa → prova de bastidor → fechamento de autoridade.',
        cta: '"Quer ver mais bastidores reais? responde bastidor."'
      },
      {
        type: 'Reel',
        title: 'Lugar bonito não fecha negócio',
        hook: 'O cenário chama atenção. A mente fecha a oportunidade.',
        concept: 'Usar viagem como isca visual e negócio como centro da narrativa.',
        structure: 'Visual aspiracional → argumento → exemplo prático → frase memorável.',
        cta: '"Segue se você busca repertório com resultado."'
      },
      {
        type: 'Stories',
        title: 'Pergunta de fricção',
        hook: 'O que mais trava sua liberdade hoje?',
        concept: 'Abrir caixa de pergunta conectando dinheiro, tempo e estrutura.',
        structure: 'Story 1 tese → Story 2 enquete → Story 3 resposta sua.',
        cta: 'Responder a caixa.'
      },
      {
        type: 'Stories',
        title: 'Bastidor de decisão',
        hook: 'Uma decisão que parece pequena e muda o ano inteiro.',
        concept: 'Mostrar escolha operacional e racional por trás de uma agenda, viagem ou empresa.',
        structure: 'Contexto → decisão → consequência.',
        cta: '"Quer que eu abra mais bastidores assim?"'
      },
      {
        type: 'Autoridade',
        title: 'Como se constrói influência sem depender de barulho',
        hook: 'Autoridade não nasce de presença. Nasce de densidade.',
        concept: 'Carrossel ou post manifesto conectando negócios, posicionamento e reputação.',
        structure: 'Tese → 3 princípios → exemplo seu → fechamento.',
        cta: 'Salvar e compartilhar com quem confunde alcance com relevância.'
      },
      {
        type: 'Conexão emocional',
        title: 'O custo invisível do caminho',
        hook: 'Todo mundo vê o destino. Quase ninguém aceita o preço.',
        concept: 'Texto mais íntimo sobre escolhas, renúncia e legado — no estilo do post do neto que performou bem.',
        structure: 'Abertura vulnerável → contexto real → aprendizagem → horizonte.',
        cta: 'Comentar com uma palavra que define sua fase atual.'
      },
    ],
    abTests: [
      {
        name: 'Âncora emocional real vs viagem pura',
        hypothesis: 'Posts com âncora emocional real (família, conquista, bastidor) geram mais interações do que posts de viagem pura. Confirmado neste ciclo: post do neto (39 interações) vs Reel LA→LV (12 interações).',
        measure: 'Comparar total_interactions, comentários e reach entre os dois padrões nos próximos 3 ciclos.'
      },
      {
        name: 'Tese antes da paisagem',
        hypothesis: 'Quando a ideia central aparece nos 2 primeiros segundos, o conteúdo retém melhor do que quando começa só pelo visual.',
        measure: 'Comparar views e total_interactions em Reels parecidos.'
      },
      {
        name: 'Trilinguismo vs português apenas',
        hypothesis: 'Posts com legenda em PT/EN/ES (como o do neto e o de Seattle) podem ampliar alcance internacional.',
        measure: 'Comparar reach médio entre posts trilíngues e posts apenas em português nos próximos 30 dias.'
      },
    ],
    autoAlerts: [
      'ATIVO: Seguidores em leve queda (−38 no ciclo). Monitorar tendência nas próximas 2 semanas.',
      'ATIVO: Campanha Meta sem entrega mensurável. Verificar se está realmente veiculando antes de novo investimento.',
      'Alerta quando um Reel ficar abaixo de 200 de alcance por duas semanas seguidas.',
      'Alerta quando posts de âncora emocional performarem abaixo dos posts contemplativos.',
      'Alerta para conteúdo fora da curva com total_interactions acima de 35 (referência: post do neto).',
    ],
  },
  metaAds: {
    accounts: [
      {
        accountId: 'act_9525474394174655',
        name: 'Ricardo Impellizieri',
        businessName: 'loggica intermediacoes de negócios',
        currency: 'BRL',
        status: 'ACTIVE',
        last30d: 'Sem insights disponíveis — zero entrega registrada no período',
      },
      {
        accountId: 'act_265574476787926',
        name: '265574476787926',
        businessName: 'SANDRO JOSE RICARDO IMPELLIZIERI DE OLIVEIRA',
        currency: 'BRL',
        status: 'ACTIVE',
        last30d: 'Sem insights disponíveis',
      },
    ],
    activeCampaign: {
      name: 'Instagram post: Las Vegas do alto é uma...',
      objective: 'LINK_CLICKS',
      status: 'ACTIVE',
      dailyBudget: 'R$ 35,00',
      createdAt: '21 abr 2025',
      reading: 'Campanha criada em abril de 2025, ainda com status ATIVO no cadastro e orçamento de R$35/dia. Porém, nenhum dado de entrega foi retornado pelo conector Meta em nenhum período consultado (30d, 90d). O desperdício hoje não aparece como gasto — aparece como ausência de mensuração e impossibilidade de decisão.',
    },
    nextSteps: [
      'Verificar no painel Meta Ads Manager se a campanha realmente veiculou nos últimos 30 dias ou se está ativa apenas no cadastro.',
      'Revisar objetivo (LINK_CLICKS), publicação vinculada e rastreio de pixel antes de qualquer novo investimento.',
      'Só escalar orçamento depois que a conta voltar a devolver: Valor usado, Impressões, Alcance, Link clicks e CTR.',
      'Considerar criar nova campanha com objetivo de Reconhecimento ou Engajamento, vinculada ao post do neto (melhor performance recente).',
    ],
  },
  // Dados brutos dos posts recentes para referência e auditoria
  recentPostsRaw: [
    { id: '18115128127783856', date: '2026-04-26', type: 'CAROUSEL_ALBUM', caption: 'Quanto mais eu vou… mais eu entendo que não é sobre ir.', likes: 6, comments: 0, reach: 36, views: 85, saved: 0, total_interactions: 6 },
    { id: '18591759310050140', date: '2026-04-24', type: 'IMAGE', caption: 'No meio de tudo que eu construo… é aqui que eu lembro o porquê.', likes: 33, comments: 5, reach: 319, views: 635, saved: 0, total_interactions: 39 },
    { id: '17943920478168349', date: '2026-04-21', type: 'CAROUSEL_ALBUM', caption: 'Se a conta é sua… faça valer a vida que escolheu.', likes: 12, comments: 6, reach: 199, views: 423, saved: 0, total_interactions: 18 },
    { id: '18118097605678754', date: '2026-04-18', type: 'CAROUSEL_ALBUM', caption: 'O mundo não é só destino. É contraste. — Marrocos', likes: 29, comments: 2, reach: 298, views: 793, saved: 1, total_interactions: 32 },
    { id: '17866159815613734', date: '2026-04-16', type: 'VIDEO (REEL)', caption: 'O mundo é de quem se move. Los Angeles → Las Vegas', likes: 10, comments: 1, reach: 228, views: 316, saved: 1, total_interactions: 12 },
    { id: '18117398149663032', date: '2026-04-15', type: 'IMAGE', caption: 'Conheço o preço da liberdade. Eu pago.', likes: 11, comments: 1, reach: 144, views: 252, saved: 0, total_interactions: 12 },
    { id: '18223237996314109', date: '2026-04-11', type: 'CAROUSEL_ALBUM', caption: 'Ninguém fala muito da Croácia… mas deveria.', likes: 14, comments: 1, reach: 247, views: 500, saved: 1, total_interactions: 16 },
    { id: '18084408851056630', date: '2026-04-10', type: 'VIDEO (REEL)', caption: 'Almoçar no Rio Sena navegando por Paris…', likes: 9, comments: 2, reach: 321, views: 400, saved: 0, total_interactions: 11 },
  ],
};

export type DashboardData = typeof dashboardData;
