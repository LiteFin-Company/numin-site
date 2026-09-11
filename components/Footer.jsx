import { NAV, SITE, CONTENT_PAGES, LEGAL_PAGES } from "@/lib/site";
import { COMPANY } from "@/lib/empresa";

// Campos da empresa ainda não preenchidos vêm como "[A PREENCHER: …]" e não
// aparecem no rodapé.
const filled = (v) => Boolean(v) && !v.startsWith("[");
const legalName = [
  filled(COMPANY.razaoSocial) && COMPANY.razaoSocial,
  filled(COMPANY.cnpj) && `CNPJ ${COMPANY.cnpj}`,
].filter(Boolean).join(" · ");

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-white/75 transition-colors hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white/75">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/numin-horizontal-branco.svg" alt="Numin" className="h-7 w-auto" />
          <p className="mt-4 max-w-xs font-display text-base font-semibold text-white">
            {SITE.shortSignature}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">
            Todo o financeiro da sua empresa em um só lugar.
          </p>
        </div>

        <FooterColumn title="Produto" links={NAV} />
        <FooterColumn title="Conteúdo" links={CONTENT_PAGES} />
        <FooterColumn
          title="Comece"
          links={[
            { label: "Entrar", href: SITE.appUrl },
            { label: "Criar conta", href: SITE.signupUrl },
            { label: SITE.email, href: `mailto:${SITE.email}` },
          ]}
        />
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/70 sm:flex-row">
          <div className="text-center sm:text-left">
            <p>© {year} Numin. Todos os direitos reservados.</p>
            {legalName && <p className="mt-1">{legalName}</p>}
          </div>
          <nav aria-label="Documentos legais" className="flex gap-5">
            {LEGAL_PAGES.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
