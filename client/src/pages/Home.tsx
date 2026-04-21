// Design philosophy: editorial executivo cinematográfico.
// Regra do arquivo: leitura mobile first, assimetria controlada, atmosfera premium e decisão estratégica acima de decoração.

import { dashboardData } from '@/data/dashboard';
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
                      <span className="rounded-full border border-white/8 bg-white/6 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-[#d4b08b]">
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

        <section id="metaads" className="space-y-8">
          <SectionHeader
            eyebrow="Camada paga · Meta Ads"
            title="O problema atual da mídia é falta de leitura, não excesso de gasto"
            description="As contas conectadas existem e há pelo menos uma campanha ativa cadastrada. Mas, nos últimos 30 dias, os conectores não retornaram insights do período. Isso impede separar o que está funcionando do que desperdiça orçamento com precisão financeira. Hoje a prioridade é reativar mensuração confiável."
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

      <nav className="fixed inset-x-0 bottom-3 z-50 px-3 lg:hidden">
        <div className="mx-auto grid max-w-xl grid-cols-5 gap-1 rounded-[1.8rem] border border-white/10 bg-black/55 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <a href="#executivo" className="mobile-nav-link"><BarChart3 className="h-4 w-4" /><span>Resumo</span></a>
          <a href="#profundo" className="mobile-nav-link"><Radar className="h-4 w-4" /><span>Análise</span></a>
          <a href="#audiencia" className="mobile-nav-link"><UserRound className="h-4 w-4" /><span>Audiência</span></a>
          <a href="#decisao" className="mobile-nav-link"><Target className="h-4 w-4" /><span>Ação</span></a>
          <a href="#metaads" className="mobile-nav-link"><WalletCards className="h-4 w-4" /><span>Ads</span></a>
        </div>
      </nav>
    </div>
  );
}
