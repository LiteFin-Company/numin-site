"use client";

import { useState } from "react";
import { Building2, Check, Sparkles } from "lucide-react";
import { PLANS, SITE, FOUNDER_OFFER, ORG_ADDON } from "@/lib/site";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Toggle mensal / anual */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <span className={`text-sm font-medium ${!annual ? "text-ink" : "text-muted"}`}>Mensal</span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Alternar cobrança mensal ou anual"
          onClick={() => setAnnual((a) => !a)}
          className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full px-1 transition-colors duration-200 ${annual ? "bg-brand-600" : "bg-slate-300"}`}
        >
          <span
            className={`block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${annual ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
        <span className={`flex items-center gap-2 text-sm font-medium ${annual ? "text-ink" : "text-muted"}`}>
          Anual
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">2 meses grátis</span>
        </span>
      </div>

      {/* Oferta Parceiros Numin */}
      <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-center text-sm text-ink">
        <Sparkles size={16} className="shrink-0 text-brand-600" />
        <span>
          <b>{FOUNDER_OFFER.name}:</b> as {FOUNDER_OFFER.slots} primeiras empresas usam o{" "}
          <b>{FOUNDER_OFFER.plan}</b> <b>grátis até {FOUNDER_OFFER.freeUntil}</b> e depois pagam{" "}
          <b className="whitespace-nowrap">{FOUNDER_OFFER.price}{FOUNDER_OFFER.period}</b>, para sempre.
        </span>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {PLANS.map((p) => {
          const isFounder = p.name === FOUNDER_OFFER.plan;
          return (
            <div
              key={p.name}
              className={`card flex flex-col bg-white ${
                isFounder || p.highlight ? "border-brand-600 shadow-lg ring-1 ring-brand-600" : "shadow-sm"
              }`}
            >
              {isFounder ? (
                <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles size={12} /> {FOUNDER_OFFER.name} · {FOUNDER_OFFER.slots} vagas
                </span>
              ) : p.highlight ? (
                <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Recomendado
                </span>
              ) : null}

              <h3 className="text-lg font-bold text-ink">{p.name}</h3>

              {isFounder ? (
                <>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-ink">Grátis</span>
                    <span className="text-sm text-muted">até {FOUNDER_OFFER.freeUntil}</span>
                  </div>
                  <div className="mt-3 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3">
                    <p className="text-xs font-medium text-brand-700">A partir de {FOUNDER_OFFER.paidFrom}</p>
                    <p className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
                      <span className="tabnum text-xl font-extrabold text-ink">
                        {FOUNDER_OFFER.price}
                        <span className="text-sm font-semibold text-muted">{FOUNDER_OFFER.period}</span>
                      </span>
                      <span className="text-sm font-semibold text-brand-700">para sempre</span>
                      <span className="tabnum text-sm text-muted line-through">{FOUNDER_OFFER.original}</span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="tabnum text-3xl font-extrabold text-ink">{annual ? p.priceAnnual : p.price}</span>
                    <span className="text-sm text-muted">{p.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{annual ? "por mês, cobrado anualmente" : "cobrança mensal"}</p>
                </>
              )}

              <p className="mt-3 text-sm text-muted">{p.tagline}</p>
              <ul className="mb-6 mt-6 space-y-3">
                {p.features.map((f) => {
                  // Item pode ser texto ou { text, soon } para recurso ainda não lançado.
                  const text = typeof f === "string" ? f : f.text;
                  return (
                    <li key={text} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="text-ink-700">
                        {text}
                        {f.soon && (
                          <span className="ml-2 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">Em breve</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-auto flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-muted">
                <Building2 size={16} className="shrink-0 text-brand-600" aria-hidden />
                <span>
                  Empresa adicional: <span className="font-semibold text-ink">+ {ORG_ADDON[p.name]}/mês</span>
                </span>
              </p>
              <a
                href={SITE.signupUrl}
                className={`btn btn-lg mt-5 w-full ${isFounder || p.highlight ? "btn-primary" : "btn-ghost"}`}
              >
                {isFounder ? FOUNDER_OFFER.cta : p.cta}
              </a>
            </div>
          );
        })}
      </div>

    </>
  );
}
