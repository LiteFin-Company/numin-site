// Entrada ao rolar feita só em CSS (.reveal em globals.css, com
// animation-timeline: view()). Sem JavaScript e sem esconder conteúdo:
// onde o navegador não suporta, o bloco simplesmente aparece.
export default function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
