import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import { SITE } from "@/lib/site";

// Fonte do guia de marca (Archivo), do título ao texto corrido.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Cada página declara a própria canônica (alternates.canonical); aqui fica só
// o que vale para o site inteiro — por isso o openGraph não tem url.
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Numin — Controle financeiro para sua empresa",
    template: "%s — Numin",
  },
  description:
    "Seus números, inteligentes. Contas a pagar e receber, cartão de crédito, conciliação bancária, fluxo de caixa e relatórios (DRE) em um só lugar.",
  keywords: [
    "controle financeiro",
    "conciliação bancária",
    "contas a pagar",
    "contas a receber",
    "fluxo de caixa",
    "DRE",
    "gestão financeira",
    "financeiro empresarial",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Numin",
    title: "Numin — Controle financeiro para sua empresa",
    description:
      "Contas a pagar e a receber, cartão de crédito, conciliação bancária, fluxo de caixa e DRE da sua empresa num só lugar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Numin — Controle financeiro para sua empresa",
    description:
      "Contas a pagar e a receber, cartão de crédito, conciliação bancária, fluxo de caixa e DRE da sua empresa num só lugar.",
  },
};

export const viewport = {
  // Cobalto (brand-600 em app/globals.css); metadata não lê CSS.
  themeColor: "#0040F0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        {/* Vercel Analytics: contagem de visitas sem cookies (script e envio no próprio domínio). */}
        <Analytics />
      </body>
    </html>
  );
}
