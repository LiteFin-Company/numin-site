"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-slate-100 bg-white/90 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Numin — início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solid ? "/numin-logo-cor.png?v=2" : "/numin-logo-branca.png?v=2"}
            alt="Numin — Controle financeiro"
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
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

        <div className="hidden items-center gap-3 md:flex">
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
          className={`inline-flex items-center justify-center rounded-lg p-2 md:hidden ${
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
        <div className="border-t border-slate-100 bg-white md:hidden">
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
