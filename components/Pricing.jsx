"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS, SITE } from "@/lib/site";

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
          <motion.span
            className="block h-5 w-5 rounded-full bg-white shadow"
            animate={{ x: annual ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 32 }}
          />
        </button>
        <span className={`flex items-center gap-2 text-sm font-medium ${annual ? "text-ink" : "text-muted"}`}>
          Anual
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">2 meses grátis</span>
        </span>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`card flex flex-col bg-white ${p.highlight ? "border-brand-600 shadow-lg ring-1 ring-brand-600" : ""}`}
          >
            {p.highlight && (
              <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                Mais popular
              </span>
            )}
            <h3 className="text-lg font-bold text-ink">{p.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="tabnum text-3xl font-extrabold text-ink">{annual ? p.priceAnnual : p.price}</span>
              <span className="text-sm text-muted">{p.period}</span>
            </div>
            <p className="mt-1 text-xs text-muted">{annual ? "por mês, cobrado anualmente" : "cobrança mensal"}</p>
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
    </>
  );
}
