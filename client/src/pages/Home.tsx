// Design philosophy: editorial executivo cinematográfico.
// Regra do arquivo: leitura mobile first, assimetria controlada, atmosfera premium e decisão estratégica acima de decoração.

import { dashboardData, scorecards, postingPatterns, captionAnalysis, contentTaxonomy, topPostsByReach, topReelsByViews, calculatedFields, commercialSignals, brandPositioning, dataQuality, timingAnalysis, storiesData, strategistInsights, sponsoredGuide } from '@/data/dashboard';
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  ChevronRight,
  CircleAlert,
  Eye,
  Flag,
  Globe,
  Instagram,
  Layers3,
  LucideIcon,
  Radar,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  WalletCards,
  Award,
  BookOpen,
  Hash,
  ShoppingBag,
  Star,
  TrendingDown,
  Video,
  Clock,
  Camera,
  Lightbulb,
  Megaphone,
  Calendar,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Users,
  Play,
  Zap,
} from 'lucide-react';

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="space-y-3">
      <span className="section-eyebrow">{eyebrow}</span>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-white/68 sm:text-base">
          {description}
        </p>
      </div>
    </header>
  );
}

function NavPill({ href, label, icon: Icon }: { href: string; label: string; icon: LucideIcon }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/72 uppercase transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}

function KpiCard({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: 'positive' | 'warning' | 'neutral';
}) {
  const toneClass =
    tone === 'positive'
      ? 'text-emerald-300'
      : tone === 'warning'
        ? 'text-amber-300'
        : 'text-white/58';

  return (
    <article className="metric-card">
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/46">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <strong className="text-2xl font-semibold text-white sm:text-3xl">{value}</strong>
        <span className={`text-right text-xs font-medium ${toneClass}`}>{delta}</span>
      </div>
    </article>
  );
}

function InsightCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: LucideIcon;
}) {
  return (
    <article className="panel p-5 sm:p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#d4b08b]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/66">{body}</p>
    </article>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="panel p-5 sm:p-6">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#d4b08b]" />
            <p className="text-sm leading-6 text-white/68">{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  const { meta, executive, deepAnalysis, audience, decisionEngine, metaAds } = dashboardData;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,149,109,0.2),transparent_24%),radial-gradient(circle_at_top_right,rgba(82,114,155,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_20%)]" />

      <header className="relative isolate overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028404213/LkCuUVQj5dD8X6sS2j8YC5/hero-editorial-dashboard-ekxfkjRMSYa7eCYb2dKGbo.webp)',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.3),rgba(5,7,10,0.82)_45%,#05070a_100%)]" />

        <div className="relative container py-6 sm:py-8 lg:py-10">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/7">
                <Instagram className="h-4.5 w-4.5 text-[#d4b08b]" />
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/46">Painel privado</p>
                <p className="text-sm font-medium text-white">{meta.profile.username}</p>
              </div>
            </div>

            <div className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-right backdrop-blur-md">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/46">Última atualização</p>
              <p className="text-sm font-medium text-white">{meta.lastUpdated}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl space-y-6">
              <span className="section-eyebrow">{meta.designPhilosophy}</span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                  Inteligência de crescimento para transformar o seu Instagram em uma{' '}
                  <span className="text-[#d4b08b]">máquina de autoridade</span>.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Este dashboard junta leitura de posicionamento, sinais do conteúdo recente e o estado real da mídia paga.
                  O foco não é mostrar números soltos. O foco é decidir o que escala percepção, o que trava resultado e o que precisa ser corrigido agora.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <NavPill href="#executivo" label="Resumo" icon={BarChart3} />
                <NavPill href="#profundo" label="Análise" icon={Radar} />
                <NavPill href="#audiencia" label="Audiência" icon={UserRound} />
                <NavPill href="#decisao" label="Ação" icon={Target} />
                <NavPill href="#horarios" label="Horários" icon={Clock} />
                <NavPill href="#stories" label="Stories" icon={Camera} />
                <NavPill href="#insights" label="Insights" icon={Lightbulb} />
                <NavPill href="#patrocinado" label="Patrocinado" icon={Megaphone} />
                <NavPill href="#metaads" label="Meta Ads" icon={WalletCards} />
              </div>
            </div>

            <article className="glass-frame overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-6">
              <div
                className="mb-5 h-44 rounded-[1.6rem] border border-white/10 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg,rgba(3,4,6,0.15),rgba(3,4,6,0.68)), url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028404213/LkCuUVQj5dD8X6sS2j8YC5/insight-card-visual-2iyn35dLDq47CCyDwpLjRB.webp)',
                }}
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white/86">Leitura central</p>
                  <span className="rounded-full border border-amber-400/20 bg-amber-300/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-amber-200">
                    mobile first
                  </span>
                </div>
                <p className="text-base leading-7 text-white/74">{executive.summary.criticalPoint}</p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-2xl border border-white/8 bg-white/6 p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/44">Cadência</p>
                    <p className="mt-2 text-sm font-medium text-white">{meta.dashboardCadence}</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/6 p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/44">Leitura</p>
                    <p className="mt-2 text-sm font-medium text-white">Dados reais + lacunas visíveis</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </header>

      <main className="relative container space-y-24 py-10 sm:space-y-28 sm:py-12 lg:py-16">
        <section id="executivo" className="space-y-8">
          <SectionHeader
            eyebrow="1 · Resumo executivo"
            title="Leitura rápida do que sustenta sua autoridade agora"
            description="A fotografia atual é clara: o perfil tem densidade de repertório e estética forte, mas a maior alavanca recente veio de prova concreta de resultado. Nos anúncios Meta, o problema não é custo. O problema é ausência de leitura confiável no período."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {executive.kpis.map((item) => (
              <KpiCard key={item.label} {...item} />
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Leitura executiva</h3>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Perfil</p>
                  <p className="mt-3 text-sm leading-6 text-white/72">{executive.summary.profileStrength}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Instagram</p>
                  <p className="mt-3 text-sm leading-6 text-white/72">{executive.summary.instagramReading}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Meta Ads</p>
                  <p className="mt-3 text-sm leading-6 text-white/72">{executive.summary.adsReading}</p>
                </div>
              </div>
            </article>

            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <CircleAlert className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Taxas críticas do sistema</h3>
              </div>
              <div className="mt-5 space-y-3">
                {executive.conversion.map((item) => (
                  <div key={item.label} className="rounded-[1.3rem] border border-white/8 bg-white/4 px-4 py-3.5">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-medium text-white">{item.label}</p>
                      <span className="text-sm font-semibold text-amber-200">{item.value}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/56">{item.note}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="panel overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028404213/LkCuUVQj5dD8X6sS2j8YC5/pattern-topography-panel-NMihaPU8Do6oMGJfgvLWhK.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="relative">
              <div className="flex items-center gap-3">
                <Flag className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Alertas que exigem decisão</h3>
              </div>
              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                {executive.alerts.map((alert) => (
                  <div key={alert} className="rounded-[1.4rem] border border-white/8 bg-black/28 p-4 backdrop-blur-sm">
                    <p className="text-sm leading-6 text-white/72">{alert}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="profundo" className="space-y-8">
          <SectionHeader
            eyebrow="2 · O que está acontecendo"
            title="O conteúdo sobe quando a narrativa vira prova"
            description="A análise recente mostra uma diferença clara entre imagem bonita e imagem que reposiciona. Quando o conteúdo traz conquista, estrutura ou tensão real, ele ganha densidade. Quando fica apenas na contemplação, ele sustenta aura, mas perde potência estratégica."
          />

          <div className="grid gap-4 xl:grid-cols-4">
            {deepAnalysis.formatPerformance.map((format) => (
              <article key={format.format} className="panel p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{format.format}</h3>
                  <Layers3 className="h-4.5 w-4.5 text-[#d4b08b]" />
                </div>
                <div className="mt-5 space-y-3 text-sm leading-6 text-white/68">
                  <p><span className="text-white/92">Alcance:</span> {format.reach}</p>
                  <p><span className="text-white/92">Profundidade:</span> {format.depth}</p>
                  <p><span className="text-white/92">Engajamento:</span> {format.engagement}</p>
                  <p><span className="text-white/92">Leitura:</span> {format.signal}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Ranking inteligente</h3>
              </div>
              <div className="mt-5 space-y-4">
                {deepAnalysis.rankings.map((ranking, index) => (
                  <div key={ranking.title} className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/38">#{index + 1} · {ranking.title}</p>
                        <h4 className="mt-2 text-base font-semibold text-white">{ranking.item}</h4>
                      </div>
                      <span className="shrink-0 max-w-[120px] rounded-full border border-white/8 bg-white/6 px-3 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-[#d4b08b] text-right leading-tight">
                        {ranking.metric}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/68">{ranking.why}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Diagnóstico de posicionamento</h3>
              </div>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Como você está sendo visto</p>
                  <p className="mt-3 text-sm leading-6 text-white/72">{deepAnalysis.positioning.seenAs}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Tensão principal</p>
                  <p className="mt-3 text-sm leading-6 text-white/72">{deepAnalysis.positioning.tension}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Desalinhamento</p>
                  <p className="mt-3 text-sm leading-6 text-white/72">{deepAnalysis.positioning.misalignment}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="audiencia" className="space-y-8">
          <SectionHeader
            eyebrow="3 · O que isso significa"
            title="Sua audiência reage melhor quando o lifestyle carrega tese"
            description="A percepção aspiracional existe. O que falta é elevar a taxa de conversão simbólica do conteúdo: sair de admiração passiva para desejo de proximidade qualificada. Os sinais recentes indicam que isso acontece quando o conteúdo conecta viagem, estrutura, conquista e visão."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {audience.layers.map((layer) => (
              <InsightCard key={layer.title} title={layer.title} body={layer.text} icon={Globe} />
            ))}
          </div>

          <ListPanel title="Padrões ocultos já detectados" items={audience.hiddenPatterns} />
        </section>

        <section id="decisao" className="space-y-8">
          <SectionHeader
            eyebrow="4 · O que fazer agora"
            title="O painel deixa de ler e passa a decidir"
            description="A melhor próxima semana não é a mais barulhenta. É a que organiza uma assinatura mais nítida: liberdade com estrutura, viagem com argumento, prova com elegância."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <ListPanel title="O que funciona" items={decisionEngine.whatWorks} />
            <ListPanel title="O que está errado" items={decisionEngine.whatIsWrong} />
            <ListPanel title="Oportunidades imediatas" items={decisionEngine.opportunities} />
          </div>

          <article className="panel p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-[#d4b08b]" />
              <h3 className="text-base font-semibold text-white">Plano de ação da semana</h3>
            </div>
            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              {decisionEngine.weeklyPlan.map((item) => (
                <article key={item.title} className="rounded-[1.6rem] border border-white/8 bg-white/4 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/8 bg-white/6 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-[#d4b08b]">
                      {item.type}
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/36" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-white/68">
                    <p><span className="text-white/92">Gancho:</span> {item.hook}</p>
                    <p><span className="text-white/92">Conceito:</span> {item.concept}</p>
                    <p><span className="text-white/92">Estrutura:</span> {item.structure}</p>
                    <p><span className="text-white/92">CTA:</span> {item.cta}</p>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Testes A/B</h3>
              </div>
              <div className="mt-5 space-y-4">
                {decisionEngine.abTests.map((test) => (
                  <div key={test.name} className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                    <h4 className="text-sm font-semibold text-white">{test.name}</h4>
                    <p className="mt-3 text-sm leading-6 text-white/68"><span className="text-white/92">Hipótese:</span> {test.hypothesis}</p>
                    <p className="mt-2 text-sm leading-6 text-white/68"><span className="text-white/92">Medir:</span> {test.measure}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <CircleAlert className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Alertas automáticos</h3>
              </div>
              <div className="mt-5 space-y-3">
                {decisionEngine.autoAlerts.map((alert) => (
                  <div key={alert} className="rounded-[1.35rem] border border-white/8 bg-white/4 px-4 py-3.5">
                    <p className="text-sm leading-6 text-white/68">{alert}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ── BLOCO 5: SCORECARDS ── */}
        <section id="scorecards" className="space-y-8">
          <SectionHeader
            eyebrow="5 · Scorecards de perfil"
            title="12 dimensões que revelam onde você está forte e onde há gap"
            description="Cada score foi calculado com base nos dados reais coletados via MCP. Scores abaixo de 6 indicam oportunidades prioritárias. Scores acima de 7 são ativos a proteger e amplificar."
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {scorecards.map((sc) => {
              const barColor = sc.tone === 'positive' ? 'bg-emerald-400' : sc.tone === 'warning' ? 'bg-amber-400' : 'bg-white/40';
              const textColor = sc.tone === 'positive' ? 'text-emerald-300' : sc.tone === 'warning' ? 'text-amber-300' : 'text-white/58';
              return (
                <article key={sc.key} className="panel p-5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/44">{sc.label}</p>
                    <span className={`text-2xl font-bold ${textColor}`}>{sc.value}<span className="text-sm font-normal text-white/30">/10</span></span>
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-white/8">
                    <div className={`h-1.5 rounded-full ${barColor} transition-all`} style={{ width: `${sc.value * 10}%` }} />
                  </div>
                  <p className="mt-3 text-xs leading-5 text-white/56">{sc.interpretation}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── BLOCO 6: PADRÕES DE PUBLICAÇÃO ── */}
        <section id="padroes" className="space-y-8">
          <SectionHeader
            eyebrow="6 · Padrões de publicação"
            title="Quando, como e com que frequência o perfil publica"
            description="Análise dos últimos 19 posts coletados. Identificação de dias, horários, formatos e distribuição de temperatura de conteúdo (frio, morno, quente)."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Dia mais ativo</h3>
              </div>
              <p className="mt-4 text-3xl font-bold text-white">{postingPatterns.most_active_day}</p>
              <p className="mt-2 text-sm text-white/56">Horário: {postingPatterns.most_active_hour}</p>
            </article>
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Frequência</h3>
              </div>
              <p className="mt-4 text-3xl font-bold text-white">{postingPatterns.posts_per_week_estimated}</p>
              <p className="mt-2 text-sm text-white/56">posts por semana</p>
            </article>
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <Video className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Formatos</h3>
              </div>
              <div className="mt-4 space-y-2">
                {Object.entries(postingPatterns.format_distribution_pct).map(([fmt, pct]) => (
                  <div key={fmt}>
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>{fmt}</span><span>{pct}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/8">
                      <div className="h-1.5 rounded-full bg-[#d4b08b]" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <Flag className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Temperatura</h3>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Frio</span>
                  <span className="text-blue-300 font-medium">{postingPatterns.content_temp_distribution.frio}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Morno</span>
                  <span className="text-amber-300 font-medium">{postingPatterns.content_temp_distribution.morno}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Quente</span>
                  <span className="text-red-300 font-medium">{postingPatterns.content_temp_distribution.quente}</span>
                </div>
                <p className="mt-3 text-xs text-white/44">{postingPatterns.consistency}</p>
              </div>
            </article>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Análise de legendas</h3>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { label: 'Comprimento médio', value: `${captionAnalysis.avg_length_chars} caracteres` },
                  { label: 'Hashtags por post', value: String(captionAnalysis.avg_hashtags_per_post) },
                  { label: 'Tom dominante', value: captionAnalysis.dominant_tone },
                  { label: 'Estilo de abertura', value: captionAnalysis.common_opening_style },
                  { label: 'Storytelling', value: captionAnalysis.presence_of_storytelling },
                  { label: 'CTA presente', value: captionAnalysis.presence_of_cta },
                  { label: 'CTA mais frequente', value: captionAnalysis.most_frequent_cta },
                  { label: 'Posts multilíngues', value: `${captionAnalysis.multilingual_posts_count} (${captionAnalysis.multilingual_languages.join('/')})` },
                ].map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4 rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="text-right text-sm font-medium text-white max-w-[55%]">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Hash className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Top hashtags usadas</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[{hashtag:'instagood',count:4},{hashtag:'trip',count:3},{hashtag:'vivendo',count:3},{hashtag:'photography',count:3},{hashtag:'instagram',count:2},{hashtag:'life',count:2},{hashtag:'lifestyle',count:2},{hashtag:'mundo',count:2},{hashtag:'viagem',count:2},{hashtag:'europa',count:2}].map((h) => (
                  <span key={h.hashtag} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-white/72">
                    <span className="text-[#d4b08b]">#</span>{h.hashtag}
                    <span className="ml-1 rounded-full bg-white/10 px-1.5 py-0.5 text-[0.6rem] text-white/50">{h.count}x</span>
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Palavras-chave recorrentes</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {captionAnalysis.top_words.map((w) => (
                    <span key={w} className="rounded-full border border-[#d4b08b]/20 bg-[#d4b08b]/8 px-3 py-1 text-xs text-[#d4b08b]">{w}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── BLOCO 7: TAXONOMIA DE CONTEÚDO ── */}
        <section id="taxonomia" className="space-y-8">
          <SectionHeader
            eyebrow="7 · Taxonomia de conteúdo"
            title="Classificação editorial de cada post analisado"
            description="Cada post foi classificado por categoria, intenção, temperatura e funil. Use esta tabela para identificar padrões e gaps na sua estratégia de conteúdo."
          />
          <article className="panel overflow-x-auto p-5 sm:p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8 text-left">
                  <th className="pb-3 pr-4 text-[0.68rem] uppercase tracking-[0.18em] text-white/40 font-normal">Hook</th>
                  <th className="pb-3 pr-4 text-[0.68rem] uppercase tracking-[0.18em] text-white/40 font-normal">Categoria</th>
                  <th className="pb-3 pr-4 text-[0.68rem] uppercase tracking-[0.18em] text-white/40 font-normal">Intenção</th>
                  <th className="pb-3 pr-4 text-[0.68rem] uppercase tracking-[0.18em] text-white/40 font-normal">Funil</th>
                  <th className="pb-3 pr-4 text-[0.68rem] uppercase tracking-[0.18em] text-white/40 font-normal">Temp</th>
                  <th className="pb-3 text-[0.68rem] uppercase tracking-[0.18em] text-white/40 font-normal">Autoridade</th>
                </tr>
              </thead>
              <tbody>
                {contentTaxonomy.map((item) => (
                  <tr key={item.id} className="border-b border-white/4 hover:bg-white/3 transition-colors">
                    <td className="py-3 pr-4 text-white/72 max-w-[200px] truncate">{item.hook}</td>
                    <td className="py-3 pr-4 text-white/60">{item.category}</td>
                    <td className="py-3 pr-4">
                      <span className="rounded-full border border-white/8 bg-white/6 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-white/60">{item.intent}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className={`rounded-full px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.14em] ${
                        item.funnel === 'meio' ? 'bg-amber-400/15 text-amber-300' : 'bg-white/6 text-white/50'
                      }`}>{item.funnel}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className={`rounded-full px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.14em] ${
                        item.temp === 'quente' ? 'bg-red-400/15 text-red-300' : item.temp === 'morno' ? 'bg-amber-400/10 text-amber-200' : 'bg-blue-400/10 text-blue-300'
                      }`}>{item.temp}</span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 rounded-full bg-white/8">
                          <div className="h-1.5 rounded-full bg-[#d4b08b]" style={{ width: `${item.authority_score * 10}%` }} />
                        </div>
                        <span className="text-xs text-white/44">{item.authority_score}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>

        {/* ── BLOCO 8: TOP POSTS POR ALCANCE ── */}
        <section id="topconteudo" className="space-y-8">
          <SectionHeader
            eyebrow="8 · Top conteúdo por interações disponíveis"
            title="Os posts e Reels que mais geraram resposta mensurável nesta coleta"
            description="Ranking baseado nos dados reais disponíveis nesta rodada: likes e comentários. Alcance, views e salvamentos por post não retornaram pelo conector e ficam explicitamente marcados como indisponíveis."
          />
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-[#d4b08b]" />
               <h3 className="text-base font-semibold text-white">Top posts por interações disponíveis</h3>            </div>
              <div className="mt-5 space-y-3">
                {topPostsByReach.map((p, i) => (
                  <div key={p.id} className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[0.68rem] font-bold text-[#d4b08b]">#{i+1}</span>
                        <p className="text-sm font-medium text-white">{p.caption_preview}</p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-emerald-300">{p.total_interactions}</span>
                    </div>
                    <div className="mt-2 flex gap-4 text-xs text-white/44">
                      <span>Views: {p.views}</span>
                      <span>Interações disponíveis: {p.total_interactions}</span>
                      <span>{p.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Video className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Top Reels por interações disponíveis</h3>
              </div>
              <div className="mt-5 space-y-3">
                {topReelsByViews.map((p, i) => (
                  <div key={p.id} className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[0.68rem] font-bold text-[#d4b08b]">#{i+1}</span>
                        <p className="text-sm font-medium text-white">{p.caption_preview}</p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-purple-300">{p.total_interactions}</span>
                    </div>
                    <div className="mt-2 flex gap-4 text-xs text-white/44">
                      <span>Alcance: {p.reach}</span>
                      <span>Interações: {p.total_interactions}</span>
                      {p.saved > 0 && <span className="text-amber-300">Salvamentos: {p.saved}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Campos calculados</p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div><p className="text-white/50">ER médio</p><p className="font-semibold text-white">{calculatedFields.engagement_rate_avg_pct}%</p></div>
                  <div><p className="text-white/50">Alcance médio</p><p className="font-semibold text-white">{calculatedFields.avg_reach_last_20}</p></div>
                  <div><p className="text-white/50">Views médias</p><p className="font-semibold text-white">{calculatedFields.avg_views_last_20}</p></div>
                  <div><p className="text-white/50">Likes médios</p><p className="font-semibold text-white">{calculatedFields.avg_likes_last_20}</p></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── BLOCO 9: SINAIS COMERCIAIS + MARCA ── */}
        <section id="comercial" className="space-y-8">
          <SectionHeader
            eyebrow="9 · Sinais comerciais e posicionamento de marca"
            title="O que o perfil comunica sobre intenção de venda e identidade"
            description="Análise dos sinais de monetização detectados, maturidade do funil comercial e avaliação das dimensões de marca. Dados baseados em observação e inferência dos posts coletados."
          />
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Sinais comerciais detectados</h3>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { label: 'Link na bio ativo', value: commercialSignals.link_bio_active ? 'Sim' : 'Não', active: commercialSignals.link_bio_active },
                  { label: 'Captação de leads', value: commercialSignals.lead_capture_detected ? 'Detectada' : 'Não detectada', active: commercialSignals.lead_capture_detected },
                  { label: 'Tráfego para site', value: commercialSignals.site_traffic ? 'Sim' : 'Não', active: commercialSignals.site_traffic },
                  { label: 'Venda direta', value: commercialSignals.direct_sales_detected ? 'Detectada' : 'Não detectada', active: commercialSignals.direct_sales_detected },
                  { label: 'WhatsApp como canal', value: commercialSignals.whatsapp_traffic ? 'Sim' : 'Não', active: commercialSignals.whatsapp_traffic },
                  { label: 'Escassez/urgência', value: commercialSignals.scarcity_detected ? 'Detectada' : 'Não detectada', active: commercialSignals.scarcity_detected },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                    <p className="text-sm text-white/68">{item.label}</p>
                    <span className={`text-sm font-medium ${item.active ? 'text-emerald-300' : 'text-white/40'}`}>{item.value}</span>
                  </div>
                ))}
                <div className="rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                  <p className="text-sm text-white/60">Maturidade comercial</p>
                  <p className="mt-1 text-sm font-medium text-amber-200">{commercialSignals.commercial_maturity}</p>
                </div>
                <div className="rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                  <p className="text-sm text-white/60">Produtos identificados</p>
                  {commercialSignals.products_identified.map((p) => (
                    <p key={p} className="mt-1 text-sm font-medium text-white">{p}</p>
                  ))}
                </div>
              </div>
            </article>
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Posicionamento de marca</h3>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { label: 'Clareza de posicionamento', value: brandPositioning.positioning_clarity },
                  { label: 'Coerência visual', value: brandPositioning.visual_coherence },
                  { label: 'Coerência de linguagem', value: brandPositioning.language_coherence },
                  { label: 'Força aspiracional', value: brandPositioning.aspirational_strength },
                  { label: 'Força de autoridade', value: brandPositioning.authority_strength },
                  { label: 'Força comercial', value: brandPositioning.commercial_strength },
                  { label: 'Força educativa', value: brandPositioning.educational_strength },
                  { label: 'Força de comunidade', value: brandPositioning.community_strength },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <p className="w-48 shrink-0 text-xs text-white/56">{item.label}</p>
                    <div className="flex-1 h-1.5 rounded-full bg-white/8">
                      <div className="h-1.5 rounded-full bg-[#d4b08b]" style={{ width: `${item.value * 10}%` }} />
                    </div>
                    <span className="text-xs font-medium text-white/60 w-6 text-right">{item.value}</span>
                  </div>
                ))}
                <div className="mt-4 rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Promessa central</p>
                  <p className="mt-2 text-sm font-medium text-white">{brandPositioning.central_promise}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Arquétipo</p>
                  <p className="mt-2 text-sm font-medium text-white">{brandPositioning.predominant_archetype}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── BLOCO 10: DATA QUALITY ── */}
        <section id="qualidade" className="space-y-8">
          <SectionHeader
            eyebrow="10 · Qualidade dos dados"
            title="Transparência sobre o que foi coletado, calculado e inferido"
            description="Este painel segue o princípio de transparência analítica: todo dado tem fonte, nível de confiança e marcação de origem (observado, calculado ou inferido)."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Cobertura da coleta</h3>
              </div>
              <div className="mt-5 space-y-3">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">{dataQuality.completeness_pct}%</p>
                  <p className="mt-1 text-sm text-white/50">completude dos dados</p>
                </div>
                <div className="h-2 w-full rounded-full bg-white/8">
                  <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${dataQuality.completeness_pct}%` }} />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-2xl border border-white/6 bg-white/4 p-3 text-center">
                    <p className="text-xl font-bold text-white">{dataQuality.posts_analyzed}</p>
                    <p className="text-xs text-white/44">Posts analisados</p>
                  </div>
                  <div className="rounded-2xl border border-white/6 bg-white/4 p-3 text-center">
                    <p className="text-xl font-bold text-white">{dataQuality.posts_with_insights}</p>
                    <p className="text-xs text-white/44">Com insights completos</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <TrendingDown className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Limitações conhecidas</h3>
              </div>
              <div className="mt-5 space-y-2">
                {dataQuality.limitations.map((lim) => (
                  <div key={lim} className="flex items-start gap-2 rounded-2xl border border-white/6 bg-white/4 px-3 py-2.5">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <p className="text-xs leading-5 text-white/60">{lim}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Notas de coleta</h3>
              </div>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Confiança global</p>
                  <p className="mt-2 text-sm font-semibold text-emerald-300">{dataQuality.confidence_global}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Notas</p>
                  <p className="mt-2 text-xs leading-5 text-white/60">{dataQuality.collection_notes}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Coletado em</p>
                  <p className="mt-2 text-sm font-medium text-white">{new Date(dataQuality.collected_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── BLOCO: HORÁRIOS ── */}
        <section id="horarios" className="space-y-8">
          <SectionHeader
            eyebrow="Horários · Timing estratégico"
            title="Quando publicar para maximizar alcance e engajamento"
            description="Análise baseada nos timestamps reais dos posts com maior engajamento. Os dados são do seu perfil — não benchmarks genéricos."
          />

          {/* ── Card: Melhor Momento Agora (tempo real) ── */}
          {(() => {
            const now = new Date();
            const diasPT = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
            const diaAtual = diasPT[now.getDay()];
            const horaAtual = now.getHours();
            const bestDay = timingAnalysis.bestDays[0];
            const bestHour = timingAnalysis.bestHours[0];
            const optWindow = timingAnalysis.optimalWindows[0];
            const bestHourNum = bestHour ? parseInt(String(bestHour.hour).replace('h','').split(':')[0]) : -1;
            const isNowBestDay = bestDay ? diaAtual.toLowerCase().startsWith(bestDay.day.toLowerCase().slice(0,3)) : false;
            const isNowBestHour = bestHourNum >= 0 && Math.abs(horaAtual - bestHourNum) <= 1;
            const isIdeal = isNowBestDay && isNowBestHour;
            const isGood = isNowBestDay || isNowBestHour;
            const borderClass = isIdeal ? 'border-emerald-400/40 bg-emerald-400/6' : isGood ? 'border-amber-400/30 bg-amber-400/5' : 'border-[#d4b08b]/20 bg-[#d4b08b]/4';
            const statusLabel = isIdeal ? '🟢 AGORA É O MOMENTO IDEAL — PUBLIQUE JÁ' : isGood ? '🟡 BOM MOMENTO — QUASE LÁ' : '📅 PRÓXIMO MELHOR MOMENTO';
            const statusColor = isIdeal ? 'text-emerald-300' : isGood ? 'text-amber-300' : 'text-[#d4b08b]';
            return (
              <article className={`rounded-[1.6rem] border p-5 sm:p-6 ${borderClass}`}>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[#d4b08b]" />
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] font-semibold text-[#d4b08b]">Melhor Momento — Agora</span>
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wide ${statusColor}`}>{statusLabel}</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.2rem] border border-white/8 bg-white/4 p-4 text-center">
                    <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/40 mb-2">Hoje (BRT)</p>
                    <p className="text-2xl font-black text-white">{diaAtual}</p>
                    <p className={`mt-1 text-xs font-semibold ${isNowBestDay ? 'text-emerald-300' : 'text-white/40'}`}>
                      {isNowBestDay ? '✓ Dia top' : `Top: ${bestDay?.day ?? '—'}`}
                    </p>
                  </div>
                  <div className="rounded-[1.2rem] border border-white/8 bg-white/4 p-4 text-center">
                    <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/40 mb-2">Hora atual (BRT)</p>
                    <p className="text-2xl font-black text-white">{String(horaAtual).padStart(2,'0')}h</p>
                    <p className={`mt-1 text-xs font-semibold ${isNowBestHour ? 'text-emerald-300' : 'text-white/40'}`}>
                      {isNowBestHour ? '✓ Hora top' : `Top: ${bestHour?.hour ?? '—'}`}
                    </p>
                  </div>
                  <div className="rounded-[1.2rem] border border-[#d4b08b]/20 bg-[#d4b08b]/8 p-4 text-center">
                    <p className="text-[0.62rem] uppercase tracking-[0.18em] text-[#d4b08b]/60 mb-2">Janela #1 recomendada</p>
                    <p className="text-base font-black text-white leading-tight">{optWindow?.day ?? '—'}</p>
                    <p className="text-[#d4b08b] font-bold text-sm mt-1">{optWindow?.hour ?? '—'}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.1rem] border border-white/6 bg-white/3 px-4 py-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.16em] text-white/36 mb-1">Melhor dia geral</p>
                    <p className="text-sm font-bold text-white">{bestDay?.day ?? '—'} <span className="text-[#d4b08b] font-normal text-xs">· eng. médio {bestDay?.avgEngagement.toFixed(1) ?? '—'}</span></p>
                  </div>
                  <div className="rounded-[1.1rem] border border-white/6 bg-white/3 px-4 py-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.16em] text-white/36 mb-1">Melhor hora geral</p>
                    <p className="text-sm font-bold text-white">{bestHour?.hour ?? '—'} <span className="text-[#d4b08b] font-normal text-xs">· {bestHour?.label ?? ''}</span></p>
                  </div>
                </div>
                <p className="mt-3 text-[0.68rem] text-white/32 text-center">Baseado em {timingAnalysis.bestDays.reduce((a,d)=>a+d.postsAnalyzed,0)} posts · Atualiza em tempo real com o relógio do seu dispositivo</p>
              </article>
            );
          })()}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {timingAnalysis.bestDays.slice(0,3).map((d) => (
              <article key={d.day} className="panel p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-[#d4b08b]" />
                    <h3 className="text-base font-semibold text-white">{d.day}</h3>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] font-medium ${
                    d.color === 'gold' ? 'bg-amber-400/15 text-amber-200 border border-amber-400/20' :
                    d.color === 'green' ? 'bg-emerald-400/15 text-emerald-300 border border-emerald-400/20' :
                    'bg-white/6 text-white/60 border border-white/8'
                  }`}>{d.label}</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-white">{d.avgEngagement.toFixed(1)}</p>
                <p className="mt-1 text-xs text-white/44">eng. médio · {d.postsAnalyzed} posts analisados</p>
              </article>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Melhores horários (BRT)</h3>
              </div>
              <div className="mt-5 space-y-3">
                {timingAnalysis.bestHours.map((h) => (
                  <div key={h.hour} className="flex items-center gap-4 rounded-[1.4rem] border border-white/8 bg-white/4 px-4 py-3">
                    <span className="text-lg font-bold text-[#d4b08b] w-12 shrink-0">{h.hour}</span>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-white/60 mb-1">
                        <span>{h.label}</span>
                        <span>eng. {h.avgEngagement.toFixed(1)}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/8">
                        <div className="h-1.5 rounded-full bg-[#d4b08b]" style={{ width: `${(h.score/10)*100}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Janelas ideais de publicação</h3>
              </div>
              <div className="mt-5 space-y-4">
                {timingAnalysis.optimalWindows.map((w) => (
                  <div key={w.label} className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#d4b08b] font-medium">{w.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{w.day} · {w.hour}</p>
                    <p className="mt-1 text-xs text-white/56">{w.rationale}</p>
                    <p className="mt-2 text-xs font-medium text-emerald-300">Eng. esperado: {w.expectedEng}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <article className="panel p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#d4b08b]" />
              <h3 className="text-base font-semibold text-white">Calendário semanal recomendado</h3>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-7">
              {timingAnalysis.weeklyCalendar.map((d) => (
                <div key={d.day} className={`rounded-[1.2rem] border p-3 text-center ${
                  d.recommended ? 'border-emerald-400/20 bg-emerald-400/8' : 'border-white/6 bg-white/3'
                }`}>
                  <p className={`text-xs font-semibold ${
                    d.recommended ? 'text-emerald-300' : 'text-white/40'
                  }`}>{d.day.slice(0,3)}</p>
                  <p className="mt-1 text-[0.6rem] text-white/44 leading-4">{d.reason.slice(0,30)}...</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-amber-400/20 bg-amber-400/8 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-amber-300">Frequência atual</p>
                <p className="mt-2 text-lg font-bold text-white">{timingAnalysis.postingFrequency.current}</p>
                <p className="mt-1 text-xs text-white/56">{timingAnalysis.postingFrequency.gap}</p>
              </div>
              <div className="rounded-[1.4rem] border border-emerald-400/20 bg-emerald-400/8 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-emerald-300">Meta recomendada</p>
                <p className="mt-2 text-lg font-bold text-white">{timingAnalysis.postingFrequency.recommended}</p>
                <p className="mt-1 text-xs text-white/56">+ {timingAnalysis.postingFrequency.storiesRecommended}</p>
              </div>
            </div>
          </article>
        </section>

        {/* ── BLOCO: STORIES ── */}
        <section id="stories" className="space-y-8">
          <SectionHeader
            eyebrow="Stories · Monitoramento"
            title="Stories diários são o motor invisível do algoritmo"
            description="A API do Instagram só retorna insights de Stories ativos (últimas 24h). Dados históricos não estão disponíveis. O bloco abaixo mostra o plano estratégico e as recomendações baseadas no seu perfil."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <Camera className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-sm font-semibold text-white">Status atual</h3>
              </div>
              <p className="mt-4 text-2xl font-bold text-amber-300">Não monitorado</p>
              <p className="mt-2 text-xs text-white/44">Stories expiram em 24h. Dados históricos indisponíveis via API.</p>
            </article>
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-sm font-semibold text-white">Meta de alcance</h3>
              </div>
              <p className="mt-4 text-lg font-bold text-white">{storiesData.kpis.targetReach}</p>
              <p className="mt-2 text-xs text-white/44">5-10% dos seguidores por Story</p>
            </article>
            <article className="panel p-5">
              <div className="flex items-center gap-3">
                <Play className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-sm font-semibold text-white">Exit rate alvo</h3>
              </div>
              <p className="mt-4 text-lg font-bold text-white">{storiesData.kpis.targetExitRate}</p>
              <p className="mt-2 text-xs text-white/44">Conteúdo que retém atenção</p>
            </article>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Recomendações estratégicas</h3>
              </div>
              <div className="mt-5 space-y-3">
                {storiesData.recommendations.map((r) => (
                  <div key={r.priority} className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#d4b08b]/20 px-2 py-0.5 text-[0.65rem] font-bold text-[#d4b08b]">#{r.priority}</span>
                      <p className="text-sm font-semibold text-white">{r.action}</p>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/56">{r.rationale}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Ideias de conteúdo para Stories</h3>
              </div>
              <div className="mt-5 space-y-3">
                {storiesData.contentIdeas.map((idea) => (
                  <div key={idea.type} className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#d4b08b]">{idea.type}</span>
                      <span className="text-[0.6rem] text-white/40">{idea.frequency}</span>
                    </div>
                    <p className="mt-1 text-sm text-white/80">{idea.idea}</p>
                    <p className="mt-1 text-[0.68rem] text-white/40">{idea.format}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ── BLOCO: INSIGHTS ESTRATÉGICOS ── */}
        <section id="insights" className="space-y-8">
          <SectionHeader
            eyebrow="Insights · Estrategista"
            title="O que está errado, o que funciona e o que fazer agora"
            description="Análise direta de um estrategista de redes sociais sênior. Sem rodeios. Baseado exclusivamente nos seus dados reais."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="panel p-5 sm:col-span-1">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Nota geral do perfil</p>
              <p className="mt-4 text-6xl font-bold text-[#d4b08b]">{strategistInsights.overallDiagnosis.grade}</p>
              <p className="mt-3 text-sm leading-6 text-white/68">{strategistInsights.overallDiagnosis.summary}</p>
            </article>
            <article className="panel p-5 sm:col-span-2">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-300" />
                <h3 className="text-base font-semibold text-white">Problema principal</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-white/80">{strategistInsights.overallDiagnosis.mainProblem}</p>
              <div className="mt-5 rounded-[1.4rem] border border-[#d4b08b]/20 bg-[#d4b08b]/6 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#d4b08b]">Fórmula que funciona para você</p>
                <p className="mt-2 text-sm font-semibold text-white">{strategistInsights.contentFormula.formula}</p>
                <p className="mt-2 text-xs text-white/56">{strategistInsights.contentFormula.proof}</p>
              </div>
            </article>
          </div>
          <article className="panel p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-[#d4b08b]" />
              <h3 className="text-base font-semibold text-white">6 ações críticas — em ordem de prioridade</h3>
            </div>
            <div className="mt-5 space-y-4">
              {strategistInsights.criticalActions.map((a) => (
                <div key={a.priority} className={`rounded-[1.4rem] border p-4 sm:p-5 ${
                  a.urgency === 'IMEDIATO' ? 'border-red-400/20 bg-red-400/6' :
                  a.urgency === 'ESTA SEMANA' ? 'border-amber-400/20 bg-amber-400/6' :
                  'border-white/8 bg-white/4'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d4b08b]/20 text-xs font-bold text-[#d4b08b]">{a.priority}</span>
                      <h4 className="text-sm font-semibold text-white">{a.action}</h4>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.16em] font-medium ${
                      a.urgency === 'IMEDIATO' ? 'bg-red-400/20 text-red-300' :
                      a.urgency === 'ESTA SEMANA' ? 'bg-amber-400/20 text-amber-300' :
                      'bg-white/8 text-white/50'
                    }`}>{a.urgency}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/68">{a.detail}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/6 px-3 py-2">
                      <p className="text-[0.6rem] uppercase tracking-[0.16em] text-emerald-400/80">Impacto esperado</p>
                      <p className="mt-1 text-xs font-medium text-emerald-300">{a.expectedImpact}</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/4 px-3 py-2">
                      <p className="text-[0.6rem] uppercase tracking-[0.16em] text-white/40">Como fazer</p>
                      <p className="mt-1 text-xs text-white/60">{a.howTo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Metas de crescimento</h3>
              </div>
              <div className="mt-5 space-y-3">
                {Object.entries(strategistInsights.growthTargets).map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-3 rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                    <p className="text-xs text-white/50 capitalize">{k.replace(/([A-Z])/g,' $1').toLowerCase()}</p>
                    <p className="text-right text-xs font-medium text-emerald-300 max-w-[55%]">{v}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Checklist semanal</h3>
              </div>
              <div className="mt-5 space-y-2">
                {strategistInsights.weeklyChecklist.map((item) => (
                  <div key={item.day} className="flex items-start gap-3 rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                    <span className="shrink-0 text-[0.68rem] font-bold text-[#d4b08b] w-14">{item.day}</span>
                    <p className="text-xs leading-5 text-white/60">{item.task}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ── BLOCO: PATROCINADO ── */}
        <section id="patrocinado" className="space-y-8">
          <SectionHeader
            eyebrow="Patrocinado · Guia de mídia paga"
            title="O que patrocinar, como configurar e quanto investir"
            description="Recomendações baseadas no seu conteúdo real. Campanha atual com problema identificado. Plano de ação para transformar R$35/dia em resultado mensurável."
          />
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="panel p-5 sm:p-6 border-red-400/20">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-300" />
                <h3 className="text-base font-semibold text-white">Campanha atual — problema identificado</h3>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { label: 'Campanha', value: sponsoredGuide.currentStatus.campaign },
                  { label: 'Status', value: sponsoredGuide.currentStatus.status },
                  { label: 'Budget', value: sponsoredGuide.currentStatus.budget },
                  { label: 'Objetivo', value: sponsoredGuide.currentStatus.objective },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between gap-3 rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                    <p className="text-xs text-white/50">{item.label}</p>
                    <p className="text-xs font-medium text-white">{item.value}</p>
                  </div>
                ))}
                <div className="rounded-[1.4rem] border border-red-400/20 bg-red-400/8 p-4">
                  <p className="text-xs font-semibold text-red-300">Problema</p>
                  <p className="mt-1 text-xs leading-5 text-white/68">{sponsoredGuide.currentStatus.problem}</p>
                  <p className="mt-2 text-xs font-semibold text-amber-300">{sponsoredGuide.currentStatus.recommendation}</p>
                </div>
              </div>
            </article>
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Budget mensal sugerido</h3>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { label: 'Conservador', value: sponsoredGuide.monthlyBudgetSuggestion.conservative, color: 'text-white/70' },
                  { label: 'Moderado', value: sponsoredGuide.monthlyBudgetSuggestion.moderate, color: 'text-amber-300' },
                  { label: 'Agressivo', value: sponsoredGuide.monthlyBudgetSuggestion.aggressive, color: 'text-emerald-300' },
                ].map((b) => (
                  <div key={b.label} className="flex justify-between gap-3 rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                    <p className="text-xs text-white/50">{b.label}</p>
                    <p className={`text-xs font-semibold ${b.color}`}>{b.value}</p>
                  </div>
                ))}
                <div className="rounded-[1.4rem] border border-[#d4b08b]/20 bg-[#d4b08b]/6 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#d4b08b]">Recomendação</p>
                  <p className="mt-2 text-xs leading-5 text-white/68">{sponsoredGuide.monthlyBudgetSuggestion.recommendation}</p>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40 mb-3">Segmentos de audiência</p>
                <div className="space-y-2">
                  {sponsoredGuide.audienceSegments.map((seg) => (
                    <div key={seg.name} className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/4 px-4 py-2">
                      <Users className="h-3.5 w-3.5 shrink-0 text-[#d4b08b]" />
                      <div className="flex-1">
                        <p className="text-xs font-medium text-white">{seg.name}</p>
                        <p className="text-[0.6rem] text-white/44">{seg.description} · {seg.size}</p>
                      </div>
                      <span className={`text-[0.6rem] font-medium ${
                        seg.priority === 'Muito Alta' ? 'text-emerald-300' :
                        seg.priority === 'Alta' ? 'text-amber-300' : 'text-white/40'
                      }`}>{seg.priority}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
          <article className="panel p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <Megaphone className="h-5 w-5 text-[#d4b08b]" />
              <h3 className="text-base font-semibold text-white">O que patrocinar — ranking por potencial</h3>
            </div>
            <div className="mt-5 space-y-4">
              {sponsoredGuide.whatToSponsor.map((item) => (
                <div key={item.rank} className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d4b08b]/20 text-xs font-bold text-[#d4b08b]">#{item.rank}</span>
                      <h4 className="text-sm font-semibold text-white">{item.content}</h4>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/8 bg-white/6 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-white/60">{item.objective}</span>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-white/60">{item.why}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/6 bg-white/4 px-3 py-2">
                      <p className="text-[0.6rem] uppercase text-white/40">Budget</p>
                      <p className="mt-0.5 text-xs font-medium text-amber-300">{item.budget}</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/6 px-3 py-2">
                      <p className="text-[0.6rem] uppercase text-emerald-400/80">Resultado esperado</p>
                      <p className="mt-0.5 text-xs font-medium text-emerald-300">{item.expectedResult}</p>
                    </div>
                    <div className="rounded-2xl border border-white/6 bg-white/4 px-3 py-2">
                      <p className="text-[0.6rem] uppercase text-white/40">Audiência</p>
                      <p className="mt-0.5 text-xs text-white/60">{item.audience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <article className="panel p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-[#d4b08b]" />
              <h3 className="text-base font-semibold text-white">Como patrocinar — passo a passo</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sponsoredGuide.howToSponsor.map((step) => (
                <div key={step.step} className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4b08b]/20 text-xs font-bold text-[#d4b08b]">{step.step}</span>
                    <p className="text-xs font-semibold text-white">{step.title}</p>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-white/56">{step.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="metaads" className="space-y-8">
          <SectionHeader
            eyebrow="Camada paga · Meta Ads"
            title="A mídia voltou a ter leitura, mas o gasto precisa validação"
            description="Nos últimos 30 dias, a conta Notifica retornou 36.188 Impressões e 671 Cliques (todos). O ponto crítico é o Valor usado aparecer como R$0 na API; antes de escalar, valide cobrança, objetivo e rastreamento no Ads Manager."
          />

          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            {metaAds.accounts.map((account) => (
              <article key={account.accountId} className="panel p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{account.name}</h3>
                  <span className="rounded-full border border-white/8 bg-white/6 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-white/60">
                    {account.status}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-sm leading-6 text-white/68">
                  <p><span className="text-white/92">Business:</span> {account.businessName}</p>
                  <p><span className="text-white/92">Conta:</span> {account.accountId}</p>
                  <p><span className="text-white/92">Moeda:</span> {account.currency}</p>
                  <p><span className="text-white/92">Últimos 30 dias:</span> {account.last30d}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <WalletCards className="h-5 w-5 text-[#d4b08b]" />
                <h3 className="text-base font-semibold text-white">Campanha ativa identificada</h3>
              </div>
              <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-white/4 p-4 sm:p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Campanha</p>
                <h4 className="mt-2 text-lg font-semibold text-white">{metaAds.activeCampaign.name}</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-black/24 p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Objetivo</p>
                    <p className="mt-2 text-sm font-medium text-white">{metaAds.activeCampaign.objective}</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/24 p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Status</p>
                    <p className="mt-2 text-sm font-medium text-white">{metaAds.activeCampaign.status}</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/24 p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">Budget diário</p>
                    <p className="mt-2 text-sm font-medium text-white">{metaAds.activeCampaign.dailyBudget}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-white/68">{metaAds.activeCampaign.reading}</p>
              </div>
            </article>

            <ListPanel title="Próximos passos acionáveis em mídia paga" items={metaAds.nextSteps} />
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-black/24">
        <div className="container py-8 sm:py-10">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-eyebrow">Sistema de inteligência do perfil</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Direção escolhida: editorial executivo cinematográfico.</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/66">
                A lógica visual deste painel segue uma regra simples: toda escolha precisa reforçar poder silencioso, clareza estratégica e densidade de percepção. Por isso o layout privilegia contraste, hierarquia forte, leitura rápida no mobile e blocos que já conduzem ação.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-white/70 backdrop-blur-md">
              <p><span className="text-white">Perfil:</span> {meta.profile.name}</p>
              <p><span className="text-white">Website:</span> {meta.profile.website}</p>
              <p><span className="text-white">Próxima atualização:</span> domingo</p>
            </div>
          </div>
        </div>
      </footer>

      <nav className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.5)]">
          <div className="flex overflow-x-auto scrollbar-hide">
            <a href="#executivo" className="mobile-nav-link flex-shrink-0"><BarChart3 className="h-4 w-4" /><span>Resumo</span></a>
            <a href="#profundo" className="mobile-nav-link flex-shrink-0"><Radar className="h-4 w-4" /><span>Análise</span></a>
            <a href="#audiencia" className="mobile-nav-link flex-shrink-0"><UserRound className="h-4 w-4" /><span>Audiência</span></a>
            <a href="#decisao" className="mobile-nav-link flex-shrink-0"><Target className="h-4 w-4" /><span>Ação</span></a>
            <a href="#horarios" className="mobile-nav-link flex-shrink-0"><Clock className="h-4 w-4" /><span>Horários</span></a>
            <a href="#stories" className="mobile-nav-link flex-shrink-0"><Camera className="h-4 w-4" /><span>Stories</span></a>
            <a href="#insights" className="mobile-nav-link flex-shrink-0"><Lightbulb className="h-4 w-4" /><span>Insights</span></a>
            <a href="#patrocinado" className="mobile-nav-link flex-shrink-0"><Megaphone className="h-4 w-4" /><span>Patrocinado</span></a>
            <a href="#metaads" className="mobile-nav-link flex-shrink-0"><WalletCards className="h-4 w-4" /><span>Meta Ads</span></a>
          </div>
        </div>
      </nav>
    </div>
  );
}
