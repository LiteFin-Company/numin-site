"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import BrowserFrame from "@/components/BrowserFrame";

// Vídeo de uma funcionalidade, na moldura do navegador. Toca em repetição só
// enquanto está na tela; com "reduzir movimento" ligado, fica o poster até o
// visitante apertar o play. O poster sempre aparece: nada espera o vídeo.
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb) => {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function FeatureVideo({ src, alt }) {
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED_QUERY).matches, () => false);
  // null = o visitante ainda não escolheu: toca, a menos que ele prefira menos movimento.
  const [userPlaying, setUserPlaying] = useState(null);
  const [inView, setInView] = useState(false);
  const playing = userPlaying ?? !reduced;
  const rootRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing && inView) video.play().catch(() => {});
    else video.pause();
  }, [playing, inView]);

  return (
    <div ref={rootRef} className="relative">
      <BrowserFrame className="shadow-float">
        <video
          ref={videoRef}
          poster={`${src}.webp`}
          width={1440}
          height={762}
          muted
          loop
          playsInline
          preload={inView ? "auto" : "none"}
          aria-label={alt}
          className="block h-auto w-full"
        >
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
        </video>
      </BrowserFrame>
      <button
        type="button"
        onClick={() => setUserPlaying(!playing)}
        aria-label={playing ? "Pausar vídeo" : "Tocar vídeo"}
        className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-ink/80 text-white transition-colors hover:bg-ink"
      >
        {playing ? <Pause size={18} aria-hidden /> : <Play size={18} className="translate-x-px" aria-hidden />}
      </button>
    </div>
  );
}
