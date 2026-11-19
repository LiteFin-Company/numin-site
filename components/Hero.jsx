import { ArrowRight } from "lucide-react";
import { SITE, TRUST_LINE_SEM_PRAZO } from "@/lib/site";
import HeroVideo from "@/components/HeroVideo";

// Topo da home: o que o Numin é, o que faz e um vídeo do app em uso. Sem
// animação de entrada: título e tela são o maior conteúdo da primeira tela e
// precisam aparecer de cara. A tela vai sem moldura de navegador, com os cantos
// arredondados, e começa na altura do título.
export default function Hero() {
  return (
    <section id="top" className="bg-brand-hero relative z-10 overflow-x-clip">
      <div className="container-x relative grid gap-12 pb-16 pt-36 md:pb-24 md:pt-44 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        <div>
          <p className="mb-4 text-[14px] font-semibold text-ciano-texto md:text-[15px]">
            Software financeiro para empresas de serviços
          </p>
          <h1 className="text-[38px] font-bold leading-[1.05] text-white sm:text-[48px] lg:text-[58px]">
            Gestão financeira simples para o seu negócio.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white md:text-[19px]">
            Saiba quanto tem, quanto vai entrar e se o mês deu lucro, sem planilha. Menos tempo
            com o financeiro e mais segurança para decidir.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={SITE.signupUrl} className="btn btn-white btn-lg justify-center">
              Testar {SITE.trialDays} dias grátis <ArrowRight size={18} aria-hidden />
            </a>
            {SITE.meetingUrl ? (
              <a href={SITE.meetingUrl} className="btn btn-lg justify-center border border-white/40 text-white hover:bg-white/10">
                Conversar com os fundadores
              </a>
            ) : (
              <a href="#precos" className="btn btn-lg justify-center border border-white/40 text-white hover:bg-white/10">
                Ver planos
              </a>
            )}
          </div>
          <p className="mt-5 text-sm text-white/85">{TRUST_LINE_SEM_PRAZO}</p>
        </div>

        <div className="overflow-hidden rounded-panel shadow-float-azul lg:mt-2">
          <HeroVideo alt="O Numin em uso: dashboard com saldo e caixa projetado, cadastro de uma receita, fluxo de caixa do ano e DRE" />
        </div>
      </div>
    </section>
  );
}
