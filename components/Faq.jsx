import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/site";

// <details> nativo: abre e fecha sem JavaScript. O name em comum faz o grupo
// se comportar como sanfona — abrir uma pergunta fecha a anterior.
export default function Faq() {
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {FAQ.map((item, i) => (
        <details key={item.q} name="faq" open={i === 0} className="faq-item group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-base font-semibold text-ink">{item.q}</span>
            <ChevronDown
              size={20}
              className="shrink-0 text-brand-600 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p className="pb-5 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
