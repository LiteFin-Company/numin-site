import Image from "next/image";
import FeatureTabs from "@/components/FeatureTabs";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import { FEATURES, SITE, SECURITY, PLANS, FAQ, BANK_INTEGRATIONS, OFX_FALLBACK } from "@/lib/site";

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />

      <Hero />

      {/* Funcionalidades */}
      <section id="funcionalidades" className="section anchor bg-nuvem">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Funcionalidades</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Uma ferramenta, todo o seu financeiro
            </h2>
            <p className="mt-4 text-lg text-muted">
              Do dia a dia operacional à visão gerencial.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} className="h-full">
                  <div className="card card-hover h-full p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_8px_24px_rgba(0,121,253,0.26)]">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destaques: abas com texto e vídeo de cada funcionalidade */}
      <section id="destaques" className="section anchor">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Na prática</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Veja o Numin funcionando</h2>
          </Reveal>
          <div className="mt-12">
            <FeatureTabs />
          </div>
        </div>
      </section>

      {/* Integrações bancárias */}
      <section id="integracoes" className="section anchor bg-nuvem">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Integrações bancárias</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              O extrato chega sozinho para conciliar
            </h2>
            <p className="mt-4 text-lg text-muted">Conecte o banco da empresa e concilie sem baixar arquivo.</p>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col items-center rounded-3xl bg-white px-8 pb-10 pt-12 text-center shadow-[0_1px_2px_rgba(14,51,106,0.06)]">
                <div className="flex h-24 items-center justify-center gap-5">
                  {BANK_INTEGRATIONS.map((b, i) => (
                    <div key={b.name} className="floaty" style={{ animationDelay: `${i * 1.1}s` }}>
                      <Image
                        src={b.logo}
                        alt={`Logo ${b.name}`}
                        width={64}
                        height={64}
                        unoptimized
                        className="h-16 w-16 rounded-2xl ring-1 ring-slate-200 shadow-[0_14px_28px_-14px_rgba(14,51,106,0.45)]"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="mt-8 text-xl font-semibold text-ink">Integração direta</h3>
                <p className="mt-2 text-muted">Extrato automático pela API oficial do banco.</p>
              </div>
            </Reveal>
            <Reveal className="h-full">
              <div className="flex h-full flex-col items-center rounded-3xl bg-white px-8 pb-10 pt-12 text-center shadow-[0_1px_2px_rgba(14,51,106,0.06)]">
                <div className="flex h-24 items-center justify-center">
                  <div className="floaty flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 shadow-[0_14px_28px_-14px_rgba(14,51,106,0.35)]" style={{ animationDelay: "0.5s" }}>
                    <OFX_FALLBACK.icon size={28} />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-ink">Qualquer outro banco</h3>
                <p className="mt-2 text-muted">Importe o extrato em OFX.</p>
              </div>
            </Reveal>
          </div>
          <p className="mt-8 text-center text-xs text-muted/80">
            Sem senha do internet banking. As marcas exibidas pertencem aos respectivos bancos.
          </p>
        </div>
      </section>

      {/* Segurança */}
      <section id="seguranca" className="section anchor">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Segurança</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Seu financeiro protegido
            </h2>
            <p className="mt-4 text-lg text-muted">
              Controle de acesso, histórico e conexão segura — do jeito que dado financeiro exige.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY.map((s) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} className="h-full">
                  <div className="card h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                    {s.href && (
                      <a href={s.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                        Ler a política <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <a href="/seguranca" className="btn btn-ghost">
              Ver tudo sobre segurança <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="section anchor bg-nuvem">
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">Planos</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Um plano para cada tamanho de equipe
            </h2>
            <p className="mt-4 text-lg text-muted">
              Todas as funcionalidades em todos os planos. O que muda é quanta gente trabalha junto.
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
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                Assuma o controle do financeiro da sua empresa
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
                Comece hoje e tenha suas contas, cartão e caixa organizados em um só lugar.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={SITE.signupUrl} className="btn btn-white btn-lg">
                  Começar grátis <ArrowRight size={18} />
                </a>
                <a href="#precos" className="btn btn-lg border border-white/20 text-white hover:bg-white/10">
                  Ver planos
                </a>
              </div>
            </Reveal>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
