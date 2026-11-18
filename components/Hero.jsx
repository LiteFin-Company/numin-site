import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE, TRUST_LINE } from "@/lib/site";
import BrowserFrame from "@/components/BrowserFrame";

// Topo da home: assinatura, o que o Numin faz e o print real do dashboard.
// Sem animação de entrada: título e print são o maior conteúdo da primeira
// tela e precisam aparecer de cara. O print desce até a borda de baixo do
// azul e continua sobre a seção seguinte (ver o -mb da moldura e o pt de #funcionalidades).
export default function Hero() {
  return (
    <section id="top" className="bg-brand-hero relative z-10 overflow-x-clip">
      <div className="container-x relative grid gap-12 pt-36 md:pt-44 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <div className="lg:pb-28">
          <h1 className="text-[44px] font-bold leading-[1.02] text-white sm:text-[56px] lg:text-[68px]">
            {SITE.signature}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white md:text-[19px]">
            Contas a pagar e a receber, cartão de crédito, conciliação bancária, fluxo de caixa e DRE da sua empresa de
            serviços, numa tela só.
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

        <div className="relative -mb-24 md:-mb-32">
          <BrowserFrame className="shadow-float lg:w-[118%]">
            <Image
              src="/funcionalidades/dashboard.webp"
              alt="Dashboard do Numin com saldo de hoje, vencidos, o que vence nos próximos dias, caixa projetado e desempenho do ano"
              width={1600}
              height={1162}
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
