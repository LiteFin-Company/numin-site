import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE, TRUST_LINE } from "@/lib/site";
import BrowserFrame from "@/components/BrowserFrame";

// Topo da home: assinatura, o que o Numin faz e o print real do dashboard,
// com o menu do sistema. Sem animação de entrada: título e print são o maior
// conteúdo da primeira tela e precisam aparecer de cara. O print fica dentro
// da altura do azul, sem descer sobre a seção seguinte.
export default function Hero() {
  return (
    <section id="top" className="bg-brand-hero relative z-10 overflow-x-clip">
      <div className="container-x relative grid gap-12 pb-16 pt-36 md:pb-24 md:pt-44 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <div>
          <h1 className="text-[44px] font-bold leading-[1.02] text-white sm:text-[56px] lg:text-[68px]">
            {SITE.signature}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white md:text-[19px]">
            O Numin é o sistema de gestão financeira para empresas de serviços: contas a pagar e a receber, cartão
            de crédito, conciliação bancária, fluxo de caixa e DRE num só lugar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={SITE.signupUrl} className="btn btn-white btn-lg justify-center">
              Começar grátis <ArrowRight size={18} aria-hidden />
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
          <p className="mt-5 text-sm text-white/85">{TRUST_LINE}</p>
        </div>

        <div className="relative">
          <BrowserFrame className="shadow-float">
            <Image
              src="/feat-dashboard.webp"
              alt="Dashboard do Numin com o menu do sistema, receitas e despesas previstas e realizadas, saldo previsto e gráficos do ano"
              width={1600}
              height={790}
              sizes="(min-width: 1024px) 720px, 100vw"
              loading="eager"
              fetchPriority="high"
              className="block h-auto w-full"
            />
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
