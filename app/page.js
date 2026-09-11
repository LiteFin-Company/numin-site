import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import { FEATURES, HIGHLIGHTS, STEPS, SITE, SECURITY, PLANS, FAQ } from "@/lib/site";

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
      <section id="funcionalidades" className="section anchor">
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

      {/* Como funciona — três passos ligados por uma linha */}
      <section className="section bg-nuvem">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Como funciona</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Seu financeiro organizado em poucos passos
            </h2>
          </Reveal>
          <div className="relative mt-14">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 hidden h-0.5 bg-linear-to-r from-brand-200 via-brand-400 to-brand-200 md:block"
            />
            <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.n}>
                    <Reveal className="text-center">
                      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-[0_8px_24px_-8px_rgba(0,121,253,0.35)] ring-1 ring-brand-100">
                        <Icon size={28} />
                        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                          {s.n}
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
                      <p className="mx-auto mt-2 max-w-xs text-muted">{s.desc}</p>
                      <span className="mt-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                        {s.tag}
                      </span>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="section">
        <div className="container-x space-y-20 md:space-y-28">
          {HIGHLIGHTS.map((h, idx) => {
            const Icon = h.icon;
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={h.title}>
                <div className={`grid items-center gap-10 ${reversed ? "md:grid-cols-[1.15fr_0.85fr]" : "md:grid-cols-[0.85fr_1.15fr]"}`}>
                  <div className={reversed ? "md:order-2" : ""}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={24} />
                    </div>
                    <span className="eyebrow mt-5 block">{h.eyebrow}</span>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">{h.title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted">{h.desc}</p>
                    <ul className="mt-6 space-y-3">
                      {h.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check size={13} strokeWidth={3} />
                          </span>
                          <span className="text-ink-700">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reversed ? "md:order-1" : ""}>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-30px_rgba(14,51,106,0.35)]">
                      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                        <div className="ml-2 flex-1">
                          <div className="mx-auto w-fit rounded border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] text-slate-500">
                            app.numin.com.br
                          </div>
                        </div>
                      </div>
                      <Image
                        src={h.media}
                        alt={h.alt}
                        width={h.mediaSize[0]}
                        height={h.mediaSize[1]}
                        sizes="(min-width: 1280px) 680px, (min-width: 768px) 55vw, 100vw"
                        className="block h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Segurança */}
      <section className="section bg-nuvem">
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
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="section anchor">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
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

      {/* Contato */}
      <section id="contato" className="section anchor bg-nuvem">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Contato</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Vamos conversar</h2>
            <p className="mt-4 text-lg text-muted">
              Tire suas dúvidas sobre planos, funcionalidades e integrações.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-14 max-w-xl">
            <div className="card bg-white">
              <h3 className="text-xl font-bold text-ink">Envie uma mensagem</h3>
              <p className="mt-1 text-sm text-muted">Preencha e abriremos seu email com tudo pronto para enviar.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
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
              <p className="mt-4 text-sm text-white/80">{SITE.riskReversal}</p>
            </Reveal>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
