import Image from "next/image";
import { ArrowRight, Clock, ShieldCheck, Eye, Users } from "lucide-react";
import { SITE } from "@/lib/site";
import FloatCard from "@/components/FloatCard";

// No celular a foto é estreita e os cards cobririam a pessoa: só aparecem a partir de sm.
const BENEFITS = [
  { icon: Clock, title: "Menos tempo com planilhas", pos: "hidden sm:flex -left-3 top-1/3 md:-left-12", delay: "0s" },
  { icon: ShieldCheck, title: "Decisões com segurança", pos: "hidden sm:flex -right-3 top-24 md:-right-6", delay: "1s" },
  { icon: Users, title: "Fácil para toda a equipe", pos: "hidden sm:flex -right-3 bottom-24 md:-right-6", delay: "1.5s" },
  { icon: Eye, title: "Clareza do começo ao fim", pos: "hidden sm:flex -left-3 bottom-8 md:-left-12", delay: "2s" },
];


export default function Hero() {
  return (
    <section id="top" className="bg-brand-hero relative overflow-hidden">
      {/* soft glass depth */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      {/* Preso ao topo, não ao fundo: se a altura do hero muda enquanto a
          página carrega (fonte, foto), um brilho preso ao fundo se desloca e
          conta como salto de layout. */}
      <div aria-hidden className="pointer-events-none absolute -right-16 top-[25rem] h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container-x relative grid items-end gap-6 pt-28 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:pt-36">
        {/* Left — texto. Sem animação de entrada: título e foto são o maior
            conteúdo da primeira tela e precisam aparecer de cara. */}
        <div className="self-center pb-4 md:pb-24">
          <h1 className="text-[40px] font-bold leading-[1.05] tracking-tight text-white sm:text-[47px] md:text-[59px] lg:text-[71px]">
            O financeiro da sua empresa, simples e sob controle
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white md:text-[19px]">
            Sistema de controle financeiro feito para empresas de serviços. Menos tempo com
            planilhas, mais clareza para decidir.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={SITE.signupUrl} className="btn btn-white btn-lg justify-center">
              Começar grátis <ArrowRight size={18} />
            </a>
            <a href="#precos" className="btn btn-lg justify-center border border-white/40 text-white hover:bg-white/10">
              Ver planos
            </a>
          </div>
        </div>

        {/* Right — pessoa + vantagens flutuantes (glass); alinhada à base do hero */}
        <div className="relative mx-auto w-full max-w-[17rem] self-end sm:max-w-sm md:ml-auto md:mr-0 md:max-w-lg">
          {/* glow atrás da pessoa */}
          <div aria-hidden className="pointer-events-none absolute inset-x-6 top-6 bottom-0 rounded-full bg-white/10 blur-3xl" />
          <Image
            src="/hero-pessoa.webp"
            alt="Pessoa usando o Numin no celular"
            width={1000}
            height={1249}
            sizes="(min-width: 768px) 32rem, 100vw"
            loading="eager"
            fetchPriority="high"
            className="relative block h-auto w-full drop-shadow-2xl"
          />
          {BENEFITS.map((b) => (
            <FloatCard key={b.title} icon={b.icon} title={b.title} className={b.pos} delay={b.delay} />
          ))}
        </div>
      </div>
    </section>
  );
}
