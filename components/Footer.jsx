import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="text-white/70">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/numin-horizontal-branco.svg" alt="Numin" className="h-7 w-auto" />
          <p className="mt-4 max-w-xs font-display text-base font-semibold text-white">
            {SITE.shortSignature}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
            Todo o financeiro da sua empresa em um só lugar.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Produto</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white/70 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Comece</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={SITE.appUrl} className="text-white/70 transition-colors hover:text-white">Entrar</a>
            </li>
            <li>
              <a href={SITE.signupUrl} className="text-white/70 transition-colors hover:text-white">Criar conta</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="text-white/70 transition-colors hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {year} Numin. Todos os direitos reservados.</p>
          <p>Controle financeiro para sua empresa.</p>
        </div>
      </div>
    </footer>
  );
}
