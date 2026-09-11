import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
    "Números que fazem sentido. Contas a pagar e receber, cartão de crédito, conciliação bancária, fluxo de caixa e relatórios (DRE) em um só lugar.",
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
      "Números que fazem sentido. Contas, cartão, conciliação bancária, fluxo de caixa e relatórios — do lançamento à decisão.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Numin — Controle financeiro para sua empresa",
    description:
      "Números que fazem sentido. Contas, cartão, conciliação, fluxo de caixa e relatórios.",
  },
};

export const viewport = {
  themeColor: "#0079FD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${quicksand.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
