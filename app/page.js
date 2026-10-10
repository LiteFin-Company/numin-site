import Image from "next/image";
import FeatureTabs from "@/components/FeatureTabs";
import FeatureList from "@/components/FeatureList";
import FloatCard from "@/components/FloatCard";
import { ArrowRight, Check, Landmark, Lock, RefreshCcw, Scale } from "lucide-react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import { SITE, SECURITY, PLANS, FAQ, BANK_INTEGRATIONS, OFX_FALLBACK } from "@/lib/site";

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

      {/* Funcionalidades: lista com detalhe e print da tela */}
      <section id="funcionalidades" className="section anchor bg-nuvem">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Funcionalidades</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Da rotina financeira à visão do negócio
            </h2>
            <p className="mt-4 text-lg text-muted">Ferramentas que ligam o dia a dia às decisões da sua empresa.</p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-5xl">
            <FeatureList />
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

      {/* Integrações bancárias: caixas empilhadas à esquerda, foto à direita */}
      <section id="integracoes" className="section anchor bg-nuvem">
        <div className="container-x grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Integrações bancárias</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">O extrato chega sozinho para conciliar</h2>
            <p className="mt-4 text-lg text-muted">Conecte o banco da empresa e concilie sem baixar arquivo.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(14,51,106,0.06)]">
                <div className="flex shrink-0 gap-1.5">
                  {BANK_INTEGRATIONS.map((b, i) => (
                    <div key={b.name} className="floaty" style={{ animationDelay: `${i * 1.1}s` }}>
                      <Image
                        src={b.logo}
                        alt={`Logo ${b.name}`}
                        width={40}
                        height={40}
                        unoptimized
                        className="h-10 w-10 rounded-xl ring-1 ring-slate-200 shadow-[0_8px_18px_-10px_rgba(14,51,106,0.5)]"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Integração direta</h3>
                  <p className="mt-0.5 text-sm text-muted">Extrato automático pela API oficial do banco.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(14,51,106,0.06)]">
                <div className="floaty flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100" style={{ animationDelay: "0.5s" }}>
                  <OFX_FALLBACK.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Qualquer outro banco</h3>
                  <p className="mt-0.5 text-sm text-muted">Importe o extrato em OFX.</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted/80">
              Sem senha do internet banking. As marcas exibidas pertencem aos respectivos bancos.
            </p>
          </Reveal>
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
            <Image
              src="/integracoes-foto.webp"
              alt="Mulher sorrindo ao celular, trabalhando no notebook perto da janela"
              width={1200}
              height={1500}
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 448px, 100vw"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_30px_60px_-30px_rgba(14,51,106,0.45)]"
            />
            <FloatCard icon={RefreshCcw} title="Extrato sincronizado" className="flex -right-3 top-10 sm:-right-6" delay="0s" onLight />
            <FloatCard icon={Landmark} title="Sem a senha do seu banco" className="flex -left-3 bottom-12 sm:-left-6" delay="1.4s" onLight />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Conexão via MCP (em breve) */}
      <section id="mcp" className="section anchor">
        <div className="container-x grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">Conexão via MCP</span>
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">Em breve</span>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Pergunte ao seu financeiro</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Conecte o Numin ao Claude, ao ChatGPT ou a outro assistente de IA compatível com MCP e consulte seus números
              conversando.
            </p>
            <ul className="mt-6 space-y-3 text-ink-700">
              {["Compatível com Claude, ChatGPT e outros assistentes com MCP", "Nos planos Profissional e Avançado"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            {/* Conversa de exemplo (valores fictícios) */}
            <div aria-label="Exemplo de conversa com um assistente conectado ao Numin" className="rounded-3xl border border-slate-200 bg-nuvem p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs font-medium text-muted">
                <Image src="/numin-simbolo-cor.svg" alt="" width={18} height={18} unoptimized className="h-[18px] w-[18px]" />
                Assistente conectado ao Numin
              </div>
              <div className="mt-6 flex justify-end">
                <p className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-600 px-4 py-3 text-sm text-white">
                  Como foi o resultado de setembro?
                </p>
              </div>
              <div className="mt-4 max-w-[90%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm leading-relaxed text-ink-700 shadow-[0_1px_2px_rgba(14,51,106,0.08)]">
                Em setembro, a receita foi de <strong className="text-ink">R$ 31.300</strong> e as despesas somaram{" "}
                <strong className="text-ink">R$ 21.467</strong>. O resultado ficou em{" "}
                <strong className="text-positive">R$ 9.833</strong>, com margem de 31%.
              </div>
              <div className="mt-4 flex justify-end">
                <p className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-600 px-4 py-3 text-sm text-white">
                  E o que vence esta semana?
                </p>
              </div>
              <div className="mt-4 flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(14,51,106,0.08)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-300" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-300 [animation-delay:200ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-300 [animation-delay:400ms]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Segurança: foto de um lado, itens do outro */}
      <section id="seguranca" className="section anchor bg-nuvem">
        <div className="container-x grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <Image
                src="/seguranca-pessoa-3.webp"
                alt="Homem sorrindo, sentado diante do notebook numa conversa de trabalho"
                width={1200}
                height={1500}
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 100vw"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_30px_60px_-30px_rgba(14,51,106,0.45)]"
              />
              <FloatCard icon={Lock} title="Conexão criptografada" className="flex -left-3 top-10 sm:-left-6" delay="0s" onLight />
              <FloatCard icon={Scale} title="Dados tratados conforme a LGPD" className="flex -right-3 bottom-12 sm:-right-6" delay="1.4s" onLight />
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">Segurança</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Seu financeiro protegido</h2>
            <p className="mt-4 text-lg text-muted">Do jeito que dado financeiro exige.</p>
            <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {SECURITY.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 ring-1 ring-slate-200">
                      <Icon size={19} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.short}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <a href="/seguranca" className="btn btn-ghost mt-10">
              Ver tudo sobre segurança <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="section anchor">
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">Planos</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Um plano para cada momento da empresa
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
