import { Check, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { FEATURES, HIGHLIGHTS, STEPS, PLANS, SITE } from "@/lib/site";

const FAQ = [
  { q: "Preciso de cartão de crédito para testar?", a: "Não. Você pode criar sua conta e começar a organizar o financeiro sem cadastrar cartão." },
  { q: "Qual a diferença entre os planos?", a: "Todas as funcionalidades estão em todos os planos. O que muda é o tamanho da equipe (2, 5 ou 15 membros) — e a API pública, disponível nos planos Time e Escala." },
  { q: "O Numin serve para mais de uma empresa?", a: "Sim. Você gerencia várias organizações na mesma conta, com usuários e permissões, em qualquer plano." },
  { q: "Meus dados ficam seguros?", a: "Sim. Acesso protegido por autenticação, controle de permissões por papel e trilha de auditoria das ações da equipe." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Funcionalidades */}
      <section id="funcionalidades" className="section anchor">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Funcionalidades</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Uma ferramenta, todo o seu financeiro
            </h2>
            <p className="mt-4 text-lg text-muted">
              Do dia a dia operacional à visão gerencial.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card card-hover">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section bg-nuvem">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Como funciona</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Simples de começar, poderoso no dia a dia
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative">
                <span className="font-display text-4xl font-bold text-brand-200">{s.n}</span>
                <h3 className="mt-2 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-muted">{s.desc}</p>
              </div>
            ))}
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
              <div key={h.title} className="grid items-center gap-10 md:grid-cols-2">
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
                  <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-slate-200 bg-nuvem shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/numin-simbolo.png" alt="" aria-hidden="true" className="h-24 w-auto opacity-90" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="section anchor bg-nuvem">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Planos</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Um plano para cada tamanho de equipe
            </h2>
            <p className="mt-4 text-lg text-muted">
              Todas as funcionalidades em todos os planos. O que muda é quanta gente trabalha junto.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={`card flex flex-col bg-white ${p.highlight ? "border-brand-600 shadow-lg ring-1 ring-brand-600" : ""}`}>
                {p.highlight && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Mais popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="tabnum text-3xl font-extrabold text-ink">{p.price}</span>
                  {p.period && <span className="text-sm text-muted">{p.period}</span>}
                </div>
                <p className="mt-3 text-sm text-muted">{p.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="text-ink-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={SITE.signupUrl} className={`btn btn-lg mt-8 w-full ${p.highlight ? "btn-primary" : "btn-ghost"}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center text-2xl font-bold tracking-tight text-ink">Perguntas frequentes</h3>
            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {FAQ.map((item) => (
                <div key={item.q} className="py-6">
                  <h4 className="text-base font-semibold text-ink">{item.q}</h4>
                  <p className="mt-2 text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section anchor bg-nuvem">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Contato</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Vamos conversar</h2>
            <p className="mt-4 text-lg text-muted">
              Tire suas dúvidas sobre planos, funcionalidades e integrações.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-xl">
            <div className="card bg-white">
              <h3 className="text-xl font-bold text-ink">Envie uma mensagem</h3>
              <p className="mt-1 text-sm text-muted">Preencha e abriremos seu email com tudo pronto para enviar.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Rodapé — um único bloco azul contínuo */}
      <div className="bg-brand-hero">
        <section>
          <div className="container-x py-16 text-center md:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Assuma o controle do financeiro da sua empresa
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Comece hoje e tenha suas contas, cartão e caixa organizados em um só lugar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={SITE.signupUrl} className="btn btn-white btn-lg">
                Começar agora <ArrowRight size={18} />
              </a>
              <a href="#precos" className="btn btn-lg border border-white/20 text-white hover:bg-white/10">
                Ver planos
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
