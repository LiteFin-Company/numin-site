import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { SITE, TRUST_LINE } from "@/lib/site";
import { NOVIDADES } from "@/content/novidades";

const TITLE = "Novidades";
const DESCRIPTION = "O que mudou no Numin: cada entrega do produto, mais recente primeiro, com o que mudou e por que importa.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/novidades" },
  openGraph: { type: "website", locale: "pt_BR", siteName: "Numin", title: TITLE, description: DESCRIPTION, url: "/novidades" },
};

// "2026-11-17" -> "17 de novembro de 2026", sem depender do fuso de quem gera a página.
const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const dataLonga = (iso) => {
  const [a, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
};

// Agrupa por data, mantendo a ordem do arquivo (mais recente primeiro).
const grupos = NOVIDADES.reduce((acc, item) => {
  const ultimo = acc[acc.length - 1];
  if (ultimo && ultimo.date === item.date) ultimo.items.push(item);
  else acc.push({ date: item.date, items: [item] });
  return acc;
}, []);

export default function NovidadesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="container-x max-w-4xl pb-10 pt-32 md:pt-40">
          <span className="eyebrow">Novidades</span>
          <h1 className="mt-4 text-4xl font-bold text-ink md:text-6xl">O que mudou no Numin</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Cada entrega do produto, mais recente primeiro: o que mudou e por que importa para quem usa.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x max-w-4xl">
          <ol className="space-y-14">
            {grupos.map((g) => (
              <li key={g.date} className="grid gap-6 md:grid-cols-[11rem_1fr] md:gap-10">
                <h2 className="text-base font-semibold tracking-normal text-brand-700 md:sticky md:top-24 md:self-start md:pt-1">
                  <time dateTime={g.date} className="tabnum">{dataLonga(g.date)}</time>
                </h2>
                <ul className="divide-y divide-slate-200 border-t border-slate-200">
                  {g.items.map((item) => (
                    <li key={item.title} className="py-6">
                      <h3 className="text-xl font-bold tracking-tight text-ink">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink-700">{item.what}</p>
                      <p className="mt-2 leading-relaxed text-muted">{item.why}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="bg-brand-hero">
        <section className="container-x py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">Experimente a versão de hoje</h2>
          <div className="mt-8">
            <a href={SITE.signupUrl} className="btn btn-white btn-lg">
              Começar grátis <ArrowRight size={18} aria-hidden />
            </a>
          </div>
          <p className="mt-5 text-sm text-white/85">{TRUST_LINE}</p>
        </section>
        <Footer />
      </div>
    </>
  );
}
