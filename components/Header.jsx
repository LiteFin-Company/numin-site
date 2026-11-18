"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV, SITE, FOUNDER_OFFER } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Só a home tem o hero azul atrás do header. Nas outras páginas o fundo é
  // branco, então o header já nasce sólido.
  const onHome = usePathname() === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !onHome || scrolled || open;
  // Faixa dos Parceiros: só na home, no topo da página. Some ao rolar e com o
  // menu do celular aberto; não fica presa na tela.
  const showStrip = onHome && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-slate-100 bg-white/90 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      {showStrip && (
        <div className="bg-ink text-white">
          <p className="container-x flex min-h-9 items-center justify-center gap-x-2 py-2 text-center text-[13px] leading-snug">
            <span>
              <strong className="font-semibold">{FOUNDER_OFFER.name}:</strong>{" "}
              <span className="hidden sm:inline">
                {FOUNDER_OFFER.slots} empresas com implantação feita por nós e preço travado.
              </span>
              <span className="sm:hidden">{FOUNDER_OFFER.slots} vagas com preço travado.</span>
            </span>
            <a href="#parceiros" className="inline-flex shrink-0 items-center gap-1 font-semibold text-ciano underline-offset-4 hover:underline">
              Saiba mais <ArrowRight size={14} aria-hidden />
            </a>
          </p>
        </div>
      )}
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Numin — início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solid ? "/numin-horizontal-cor.svg" : "/numin-horizontal-branco.svg"}
            alt="Numin — Controle financeiro inteligente"
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Menu principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                solid ? "text-slate-600 hover:text-brand-700" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.appUrl}
            className={`text-sm font-semibold transition-colors ${
              solid ? "text-slate-700 hover:text-brand-700" : "text-white/90 hover:text-white"
            }`}
          >
            Entrar
          </a>
          <a href={SITE.signupUrl} className={`btn ${solid ? "btn-primary" : "btn-white"}`}>
            Começar agora
          </a>
        </div>

        <button
          className={`inline-flex items-center justify-center rounded-lg p-2 lg:hidden ${
            solid ? "text-slate-700" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4" aria-label="Menu mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href={SITE.appUrl} className="btn btn-ghost">Entrar</a>
              <a href={SITE.signupUrl} className="btn btn-primary">Começar agora</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
