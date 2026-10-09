// Selo de vidro que flutua sobre fotos (topo da home e seção de segurança).
// `className` traz a posição e a exibição (ex.: "flex -left-3 top-1/3").
// `onLight`: mesmo selo com o vidro tingido de marinho, para ficar legível
// sobre foto ou fundo claros (no topo da home o fundo azul já dá o contraste).
export default function FloatCard({ icon: Icon, title, className = "", delay, onLight = false }) {
  const glass = onLight ? "border-white/30 bg-ink/45" : "border-white/25 bg-white/10";
  return (
    <div
      className={`floaty absolute items-center gap-2 rounded-xl border ${glass} px-3 py-2 shadow-[0_14px_32px_-16px_rgba(8,33,74,0.55)] backdrop-blur-md ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
        <Icon size={15} />
      </span>
      <p className="text-xs font-semibold text-white">{title}</p>
    </div>
  );
}
