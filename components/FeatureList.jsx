"use client";

import { useState } from "react";
import Image from "next/image";
import { FEATURES } from "@/lib/site";

// Funcionalidades: lista à esquerda; a selecionada mostra título, texto e o
// print da tela à direita. No celular a lista vira uma faixa rolável acima do painel.
export default function FeatureList() {
  const [active, setActive] = useState(0);
  const f = FEATURES[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[15rem_1fr] lg:gap-8">
      <div role="tablist" aria-label="Funcionalidades" aria-orientation="vertical" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
        {FEATURES.map((item, i) => {
          const Icon = item.icon;
          const selected = i === active;
          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              id={`func-tab-${i}`}
              aria-selected={selected}
              aria-controls="func-panel"
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 text-left text-[15px] transition-colors ${
                selected
                  ? "bg-white font-semibold text-ink shadow-[0_1px_3px_rgba(14,51,106,0.12)] ring-1 ring-slate-200"
                  : "font-medium text-muted hover:bg-white/60 hover:text-ink"
              }`}
            >
              <Icon size={18} strokeWidth={1.9} className={selected ? "text-brand-600" : "text-muted"} aria-hidden />
              {item.label}
            </button>
          );
        })}
      </div>

      <div id="func-panel" role="tabpanel" aria-labelledby={`func-tab-${active}`} className="self-start overflow-hidden rounded-3xl bg-white p-6 md:p-8">
        <h3 className="text-xl font-bold tracking-tight text-ink md:text-2xl">{f.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{f.desc}</p>
        <div className="mx-auto mt-6 max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_50px_-28px_rgba(14,51,106,0.45)]">
          {FEATURES.map((item, i) => (
            <Image
              key={item.image}
              src={item.image}
              alt={item.alt}
              width={1600}
              height={1162}
              sizes="(min-width: 640px) 576px, 100vw"
              className={`h-auto w-full ${i === active ? "block" : "hidden"}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
