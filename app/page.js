import Image from "next/image";
import { ArrowRight, Check, Handshake } from "lucide-react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FeatureList from "@/components/FeatureList";
import PartnerForm from "@/components/PartnerForm";
import {
  SITE, SECURITY, PLANS, FAQ, BANK_INTEGRATIONS, OFX_FALLBACK, FOUNDER_OFFER, FOUNDERS,
  TRUST_LINE,
} from "@/lib/site";
import { COMPANY } from "@/lib/empresa";

export const metadata = {
  alternates: { canonical: "/" },
};

// "R$ 1.234,56" -> "1234.56", o formato que o schema.org espera.
const toPrice = (brl) => brl.replace(/[^\d,]/g, "").replace(",", ".");

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organizacao`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/apple-icon.png`,
      email: SITE.email,
    },
    {
      "@type": "SoftwareApplication",
      name: SITE.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE.url,
      description:
        "Controle financeiro para empresas: contas a pagar e a receber, cartão de crédito, conciliação bancária, fluxo de caixa e DRE em um só lugar.",
      publisher: { "@id": `${SITE.url}/#organizacao` },
      offers: PLANS.map((p) => ({ "@type": "Offer", name: p.name, price: toPrice(p.price), priceCurrency: "BRL" })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const STEPS = [
  {
    title: "Crie a conta",
    desc: "Sem cartão. A empresa já nasce com um plano de contas pronto, que você ajusta quando quiser.",
  },
  {
    title: "Traga o extrato",
    desc: "Conecte Inter, Sicoob ou Banco do Brasil pela API oficial, ou importe o OFX de qualquer outro banco.",
  },
  {
    title: "Feche o primeiro mês",
    desc: "Concilie o extrato com o que foi lançado e veja o fluxo de caixa e a DRE do mês.",
  },
];

function TalkToFounders({ className = "" }) {
  if (!SITE.meetingUrl) return null;
  return (
    <a href={SITE.meetingUrl} className={className}>
      Conversar com os fundadores
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />

      <Hero />

      {/* Funcionalidades: lista com detalhe e print da tela */}
      <section id="funcionalidades" className="section anchor bg-nuvem">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Funcionalidades</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Seu financeiro em um só lugar
            </h2>
            <p className="mt-4 text-lg text-muted">Contas a pagar e receber, cartão, conciliação e relatórios para você saber sempre como está o caixa.</p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-5xl">
            <FeatureList />
          </div>
        </div>
      </section>

      {/* Integrações bancárias: caixas à esquerda, print da conciliação à direita */}
      <section id="integracoes" className="section anchor">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Integrações bancárias</span>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">O extrato chega sozinho para conciliar</h2>
            <p className="mt-4 text-lg text-muted">Conecte o banco da empresa e concilie sem baixar arquivo.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-5 rounded-card border border-slate-200 bg-white p-5">
                <div className="flex shrink-0 gap-1.5">
                  {BANK_INTEGRATIONS.map((b) => (
                    <Image
                      key={b.name}
                      src={b.logo}
                      alt={`Logo ${b.name}`}
                      width={40}
                      height={40}
                      unoptimized
                      className="h-10 w-10 rounded-xl ring-1 ring-slate-200"
                    />
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Integração direta</h3>
                  <p className="mt-0.5 text-sm text-muted">Extrato automático pela API oficial do banco.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 rounded-card border border-slate-200 bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <OFX_FALLBACK.icon size={20} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Qualquer outro banco</h3>
                  <p className="mt-0.5 text-sm text-muted">Importe o extrato em OFX.</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted">
              Sem senha do internet banking. As marcas exibidas pertencem aos respectivos bancos.
            </p>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-panel border border-slate-200 bg-white shadow-float">
              <Image
                src="/funcionalidades/conciliacao.webp"
                alt="Tela de conciliação do Numin com as linhas do extrato e as sugestões de correspondência para confirmar"
                width={1600}
                height={1162}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="block h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Segurança: fatos do produto, conferidos no código do app (lib/site.js, SECURITY) */}
      <section id="seguranca" className="section anchor bg-nuvem">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Segurança</span>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
              Cada centavo registrado. Cada mudança, com quem fez e quando.
            </h2>
            <p className="mt-4 text-lg text-muted">O que o Numin faz com o dinheiro e os dados da sua empresa, sem rodeios.</p>
            <a href="/seguranca" className="btn btn-ghost mt-8">
              Ver tudo sobre segurança <ArrowRight size={16} aria-hidden />
            </a>
          </Reveal>
          <Reveal>
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {SECURITY.map(({ icon: Icon, title, short, href }) => (
                <li key={title} className="flex gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-brand-600 ring-1 ring-slate-200">
                    <Icon size={19} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {short}
                      {href && (
                        <>
                          {" "}
                          <a href={href} className="font-semibold text-brand-600 hover:text-brand-700">
                            Ler a política
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Como começar: três passos, sem prometer tempo que não medimos */}
      <section id="comecar" className="section anchor">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Como começar</span>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Do cadastro ao primeiro mês fechado</h2>
          </Reveal>
          <Reveal>
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((step, i) => (
                <li key={step.title} className="border-t-2 border-brand-600 pt-6">
                  <span className="tabnum text-sm font-bold text-brand-700">Passo {i + 1}</span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.desc}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="mt-12 flex flex-col items-start gap-3">
            <a href={SITE.signupUrl} className="btn btn-primary btn-lg">
              Começar grátis <ArrowRight size={18} aria-hidden />
            </a>
            <p className="text-sm text-muted">{TRUST_LINE}</p>
          </Reveal>
        </div>
      </section>

      {/* Parceiros Numin: dez vagas reais. À esquerda a oferta e o botão; à direita, o que vem junto e o que pedimos. */}
      <section id="parceiros" className="anchor bg-ink py-20 text-white md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold text-ciano">
              <Handshake size={18} aria-hidden />
              <span className="tabnum">
                {FOUNDER_OFFER.name} · {FOUNDER_OFFER.slots} vagas
              </span>
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              <span className="tabnum">{FOUNDER_OFFER.freeMonths}</span> meses grátis. Depois,{" "}
              <span className="tabnum whitespace-nowrap">
                {FOUNDER_OFFER.price}
                {FOUNDER_OFFER.period}
              </span>{" "}
              para sempre.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Plano {FOUNDER_OFFER.plan} para as <span className="tabnum">{FOUNDER_OFFER.slots}</span> primeiras empresas. Preço normal:{" "}
              <span className="tabnum whitespace-nowrap">
                {FOUNDER_OFFER.original}
                {FOUNDER_OFFER.period}
              </span>
              .
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PartnerForm className="btn btn-white btn-lg justify-center" />
              <TalkToFounders className="btn btn-lg justify-center border border-white/30 text-white hover:bg-white/10" />
            </div>
          </Reveal>
          <Reveal className="rounded-panel border border-white/15 p-7 md:p-9">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ciano">Você ganha</h3>
            <ul className="mt-5 space-y-4">
              {FOUNDER_OFFER.gains.map((gain) => (
                <li key={gain} className="flex items-center gap-3 text-lg font-medium text-white">
                  <Check size={20} className="shrink-0 text-ciano" aria-hidden /> {gain}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 border-t border-white/15 pt-7 text-sm font-semibold uppercase tracking-[0.14em] text-ciano">Em troca</h3>
            <p className="mt-3 leading-relaxed text-white/85">{FOUNDER_OFFER.ask}</p>
          </Reveal>
        </div>
      </section>

      {/* Quem faz o Numin: só aparece com FOUNDERS preenchido em lib/site.js */}
      {FOUNDERS.length > 0 && (
        <section id="quem-faz" className="section anchor">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Quem faz o Numin</span>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Gente que você pode chamar pelo nome</h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {FOUNDERS.map((f) => (
                <Reveal key={f.name}>
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <Image
                      src={f.photo}
                      alt={`Foto de ${f.name}`}
                      width={160}
                      height={160}
                      className="h-32 w-32 shrink-0 rounded-panel object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-ink">{f.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-brand-700">{f.role}</p>
                      <p className="mt-3 leading-relaxed text-muted">{f.bio}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-12 text-sm text-muted">
              O Numin é feito pela {COMPANY.razaoSocial}, <span className="tabnum">CNPJ {COMPANY.cnpj}</span>, em{" "}
              {COMPANY.cidadeUf.split(",")[0]}.
            </p>
          </div>
        </section>
      )}

      {/* Preços */}
      <section id="precos" className={`section anchor ${FOUNDERS.length > 0 ? "bg-nuvem" : ""}`}>
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Planos</span>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
              Preço aberto. Teste sem cartão. Cancele quando quiser.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Controle financeiro completo em todos os planos. O que muda é a equipe e as conexões.
            </p>
          </Reveal>

          <Pricing />

          <Reveal className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center text-2xl font-bold tracking-tight text-ink">Perguntas frequentes</h3>
            <div className="mt-8">
              <Faq />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA + Rodapé — um único bloco azul contínuo */}
      <div className="bg-brand-hero">
        <section>
          <div className="container-x py-16 text-center md:py-20">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
                Feche o próximo mês no Numin, com a gente ao lado.
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={SITE.signupUrl} className="btn btn-white btn-lg">
                  Começar grátis <ArrowRight size={18} aria-hidden />
                </a>
                {SITE.meetingUrl ? (
                  <TalkToFounders className="btn btn-lg border border-white/30 text-white hover:bg-white/10" />
                ) : (
                  <a href="#precos" className="btn btn-lg border border-white/30 text-white hover:bg-white/10">
                    Ver planos
                  </a>
                )}
              </div>
              <p className="mt-5 text-sm text-white/85">{TRUST_LINE}</p>
            </Reveal>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
