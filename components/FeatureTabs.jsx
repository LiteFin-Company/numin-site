"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight, Check, Pause, Play } from "lucide-react";
import { HIGHLIGHTS, SITE } from "@/lib/site";

// Mostruário das funcionalidades: abas no topo, texto de um lado e o vídeo do
// outro. O vídeo da aba ativa toca quando a seção está na tela; ao terminar,
// passa para a próxima aba. Clicar numa aba ou pausar interrompe o avanço
// automático. Com "reduzir movimento" ligado, nada toca sozinho (fica o poster).
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb) => {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  // null = o visitante ainda não escolheu: toca, a menos que ele prefira menos movimento.
  const [userPlaying, setUserPlaying] = useState(null);
  const [auto, setAuto] = useState(true);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED_QUERY).matches, () => false);
  const playing = userPlaying ?? !reduced;
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const h = HIGHLIGHTS[active];
  const total = HIGHLIGHTS.length;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Toca só com a seção visível e sem pausa do visitante.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing && inView) video.play().catch(() => {});
    else video.pause();
  }, [playing, inView, active]);

  function select(i) {
    setActive(i);
    setProgress(0);
    setAuto(false);
    if (!reduced) setUserPlaying(true);
  }

  function onEnded() {
    if (auto) {
      setActive((i) => (i + 1) % total);
      setProgress(0);
    } else {
      // Sem avanço automático, a aba escolhida repete.
      const video = videoRef.current;
      if (video) { video.currentTime = 0; video.play().catch(() => {}); }
    }
  }

  function togglePlay() {
    setUserPlaying(!playing);
    setAuto(false);
  }

  return (
    <div ref={rootRef}>
      <div className="flex justify-center">
        <div role="tablist" aria-label="Funcionalidades do Numin" className="flex max-w-full gap-1 overflow-x-auto rounded-2xl bg-slate-100 p-1.5">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            const selected = i === active;
            return (
              <button
                key={item.tab}
                type="button"
                role="tab"
                id={`feature-tab-${i}`}
                aria-selected={selected}
                aria-controls="feature-panel"
                onClick={() => select(i)}
                className={`relative flex shrink-0 items-center gap-2 overflow-hidden rounded-xl px-4 py-3 text-sm font-medium transition-colors md:px-5 ${
                  selected ? "bg-white text-ink shadow-sm" : "text-muted hover:text-ink"
                }`}
              >
                <Icon size={17} aria-hidden />
                {item.tab}
                {selected && auto && !reduced && (
                  <span aria-hidden className="absolute inset-x-3 bottom-1 h-0.5 overflow-hidden rounded-full bg-brand-100">
                    <span className="block h-full bg-brand-500 transition-[width] duration-300 ease-linear" style={{ width: `${progress * 100}%` }} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="feature-panel"
        role="tabpanel"
        aria-labelledby={`feature-tab-${active}`}
        className="mt-8 grid overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-[0.72fr_1.6fr]"
      >
        <div className="flex flex-col bg-brand-50 p-8 md:p-10">
          <h3 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{h.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{h.desc}</p>
          <ul className="mt-6 space-y-2.5">
            {h.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-ink-700">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check size={11} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a href={SITE.signupUrl} className="mt-8 inline-flex items-center gap-2 font-semibold text-ink hover:text-brand-600">
            Começar grátis <ArrowRight size={18} />
          </a>
          <p className="mt-auto pt-10 text-sm tabular-nums text-muted">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        <div className="relative bg-[linear-gradient(135deg,var(--color-brand-100)_0%,#ffffff_45%,var(--color-brand-50)_100%)] p-6 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{h.tab}</span>
          <p className="mt-1 font-display text-xl font-bold tracking-tight text-ink md:text-2xl">{h.eyebrow}</p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-30px_rgba(14,51,106,0.45)]">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <div className="ml-2 flex-1">
                <div className="mx-auto w-fit rounded border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] text-slate-500">
                  app.numin.com.br
                </div>
              </div>
            </div>
            <video
              key={h.video}
              ref={videoRef}
              poster={`${h.video}.webp`}
              width={1440}
              height={762}
              muted
              playsInline
              preload={inView ? "auto" : "none"}
              aria-label={h.alt}
              onEnded={onEnded}
              onTimeUpdate={(e) => setProgress(e.currentTarget.duration ? e.currentTarget.currentTime / e.currentTarget.duration : 0)}
              className="block h-auto w-full"
            >
              <source src={`${h.video}.webm`} type="video/webm" />
              <source src={`${h.video}.mp4`} type="video/mp4" />
            </video>
          </div>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausar vídeo" : "Tocar vídeo"}
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg backdrop-blur transition hover:bg-ink md:bottom-6 md:right-6"
          >
            {playing ? <Pause size={18} /> : <Play size={18} className="translate-x-px" />}
          </button>
        </div>
      </div>
    </div>
  );
}
