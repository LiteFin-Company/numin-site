"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeReduced(callback) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

// Vídeo do topo: o app em uso, em laço e sem som. A capa é o primeiro quadro,
// então a tela já aparece antes de o vídeo carregar. Quem prefere menos
// movimento vê só a capa, e o botão pausa e retoma.
export default function HeroVideo({ alt }) {
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED_QUERY).matches, () => false);
  const [userPlaying, setUserPlaying] = useState(null);
  const playing = userPlaying ?? !reduced;
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.play().catch(() => {});
    else video.pause();
  }, [playing]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        poster="/videos/hero.webp"
        width={1440}
        height={900}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className="block h-auto w-full"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={() => setUserPlaying(!playing)}
        aria-label={playing ? "Pausar vídeo" : "Tocar vídeo"}
        className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg backdrop-blur transition hover:bg-ink"
      >
        {playing ? <Pause size={16} aria-hidden /> : <Play size={16} className="translate-x-px" aria-hidden />}
      </button>
    </div>
  );
}
