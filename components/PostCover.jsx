import {
  RefreshCcw, LineChart, FileBarChart, Landmark, FileText, Target, Receipt, Users, CreditCard, PiggyBank,
} from "lucide-react";

// Ícone do tema de cada post (campo "icon" no cabeçalho do .md). Nomes em
// português para quem escreve o post não precisar conhecer a biblioteca.
export const COVER_ICONS = {
  conciliacao: RefreshCcw,
  "fluxo-de-caixa": LineChart,
  dre: FileBarChart,
  banco: Landmark,
  documento: FileText,
  metas: Target,
  impostos: Receipt,
  equipe: Users,
  cartao: CreditCard,
  reserva: PiggyBank,
};

const BLUE = "var(--color-brand-500)";
const NAVY = "var(--color-brand-900)";
const MIST = "var(--color-brand-300)";
const SKY = "var(--color-brand-100)";

// Quatro arranjos das formas da marca, distribuídos pela posição na lista
// (getAllPosts, lib/posts.js). Com quatro, nenhum card repete o vizinho do
// lado nem o de cima, seja a grade de 2 ou de 3 colunas.
function Shapes({ variant }) {
  if (variant === 3) {
    return (
      <>
        <path d="M0 0 H120 A120 120 0 0 1 0 120 Z" fill={MIST} />
        <path d="M250 220 V150 A75 75 0 0 1 400 150 V220 Z" fill={BLUE} />
        <circle cx="325" cy="150" r="40" fill="none" stroke={SKY} strokeWidth="2" />
        <line x1="40" y1="190" x2="200" y2="190" stroke={BLUE} strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
        <circle cx="350" cy="40" r="14" fill={NAVY} />
      </>
    );
  }
  if (variant === 1) {
    return (
      <>
        <path d="M0 220 V150 A90 90 0 0 1 180 150 V220 Z" fill={BLUE} />
        <circle cx="330" cy="70" r="74" fill="none" stroke={NAVY} strokeWidth="2" />
        <path d="M300 220 V178 A42 42 0 0 1 384 178 V220 Z" fill={MIST} />
        {Array.from({ length: 5 }, (_, r) =>
          Array.from({ length: 6 }, (_, c) => (
            <circle key={`${r}-${c}`} cx={222 + c * 12} cy={24 + r * 12} r="2" fill={BLUE} opacity="0.45" />
          )),
        )}
      </>
    );
  }
  if (variant === 2) {
    return (
      <>
        <path d="M400 0 V140 A140 140 0 0 1 260 0 Z" fill={BLUE} />
        <circle cx="70" cy="190" r="62" fill="none" stroke={MIST} strokeWidth="28" />
        <line x1="20" y1="40" x2="190" y2="40" stroke={NAVY} strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
        <path d="M150 220 V196 A26 26 0 0 1 202 196 V220 Z" fill={NAVY} />
      </>
    );
  }
  return (
    <>
      <path d="M200 220 A110 110 0 0 1 420 220" fill="none" stroke={BLUE} strokeWidth="44" />
      <path d="M232 220 A78 78 0 0 1 388 220" fill="none" stroke={NAVY} strokeWidth="2" />
      <path d="M28 220 V170 A40 40 0 0 1 108 170 V220 Z" fill={MIST} />
      <line x1="236" y1="60" x2="392" y2="60" stroke={NAVY} strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
      <circle cx="80" cy="46" r="20" fill="none" stroke={BLUE} strokeWidth="2" strokeDasharray="3 5" />
    </>
  );
}

/** Capa ilustrada do post: fundo da marca, formas geométricas e o ícone do tema. Decorativa (aria-hidden). */
export default function PostCover({ icon, variant = 0, className = "" }) {
  const Icon = COVER_ICONS[icon] || FileText;
  return (
    <div aria-hidden className={`relative aspect-[20/11] overflow-hidden ${className}`} style={{ background: SKY }}>
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <Shapes variant={variant % 4} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[46%] aspect-[4/5] items-center justify-center rounded-2xl bg-white shadow-[0_18px_40px_-16px_rgba(14,51,106,0.45)]">
          <span className="absolute -right-3 -top-3 h-[28%] aspect-square rounded-full border-4 border-white bg-brand-500" />
          <Icon className="h-[42%] w-[42%] text-brand-600" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
}
