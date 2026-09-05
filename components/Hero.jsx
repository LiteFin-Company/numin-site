import { ArrowRight, Clock, ShieldCheck, Eye, Users } from "lucide-react";
import { SITE } from "@/lib/site";

const BENEFITS = [
  { icon: Clock, title: "Menos tempo com planilhas", pos: "-left-3 top-1/3 md:-left-12", delay: "0s" },
  { icon: ShieldCheck, title: "Decisões com segurança", pos: "-right-3 top-24 md:-right-6", delay: "1s" },
  { icon: Users, title: "Fácil para toda a equipe", pos: "-right-3 bottom-24 md:-right-6", delay: "1.5s" },
  { icon: Eye, title: "Clareza do começo ao fim", pos: "-left-3 bottom-8 md:-left-12", delay: "2s" },
];

function FloatCard({ icon: Icon, title, className, delay }) {
  return (
    <div
      className={`floaty absolute flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-2 shadow-[0_14px_32px_-16px_rgba(9,25,54,0.55)] backdrop-blur-md ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
        <Icon size={15} />
      </span>
      <p className="text-xs font-semibold text-white">{title}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="bg-brand-hero relative overflow-hidden">
      {/* soft glass depth */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container-x relative grid items-end gap-12 pt-28 md:grid-cols-[1.2fr_0.8fr] md:pt-36">
        {/* Left — texto */}
        <div className="self-center pb-16 md:pb-24">
          <h1 className="text-[47px] font-bold leading-[1.05] tracking-tight text-white md:text-[59px] lg:text-[71px]">
            O financeiro da sua empresa, simples e sob controle
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white md:text-[19px]">
            Sistema de controle financeiro feito para empresas de serviços. Menos tempo com
            planilhas, mais clareza para decidir.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={SITE.signupUrl} className="btn btn-white btn-lg">
              Começar agora <ArrowRight size={18} />
            </a>
            <a href="#precos" className="btn btn-lg border border-white/40 text-white hover:bg-white/10">
              Ver planos
            </a>
          </div>
          <p className="mt-4 text-[13px] text-white/80">
            Sem cartão de crédito para começar · Cancele quando quiser
          </p>
        </div>

        {/* Right — pessoa + vantagens flutuantes (glass); alinhada à base do hero */}
        <div className="relative ml-auto w-full max-w-lg self-end">
          {/* glow atrás da pessoa */}
          <div aria-hidden className="pointer-events-none absolute inset-x-6 top-6 bottom-0 rounded-full bg-white/10 blur-3xl" />
          {/* Foto da pessoa */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-pessoa.webp"
            alt="Pessoa usando o Numin no celular"
            className="relative block w-full drop-shadow-2xl"
          />
          {BENEFITS.map((b) => (
            <FloatCard key={b.title} icon={b.icon} title={b.title} className={b.pos} delay={b.delay} />
          ))}
        </div>
      </div>
    </section>
  );
}
