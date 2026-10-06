import Link from "next/link";
import {
  ArrowRight, KeyRound, MailCheck, Gauge, Cookie, Users, ShieldCheck, Building2, ScrollText,
  Landmark, Plug, LockKeyhole, FileUp, Lock, Paperclip, FileCheck, DatabaseBackup, Scale, UserCheck, Bug,
} from "lucide-react";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { COMPANY } from "@/lib/empresa";

// Tudo aqui precisa ser verdade no produto. Cada item cita o que o sistema
// faz hoje (backend/auth.py, segredos.py, routes/attachments.py) e o que a
// Política de Privacidade já declara. Mudou o sistema, mude esta página.

const TITLE = "Segurança e privacidade";
const DESCRIPTION =
  "Como o Numin protege os dados financeiros da sua empresa: acesso à conta, permissões, integração bancária sem senha do banco, dados, arquivos e LGPD.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/seguranca" },
  openGraph: { type: "website", locale: "pt_BR", siteName: "Numin", title: TITLE, description: DESCRIPTION, url: "/seguranca" },
};

const HIGHLIGHTS = [
  { icon: Landmark, label: "Sem a senha do seu banco" },
  { icon: Lock, label: "HTTPS em todo o sistema" },
  { icon: Scale, label: "Dados tratados conforme a LGPD" },
];

const PILLARS = [
  {
    id: "acesso",
    title: "Acesso à conta",
    summary: "Só entra quem deve, e do jeito certo.",
    items: [
      { icon: KeyRound, title: "Senhas em hash", desc: "Guardadas com bcrypt. Ninguém, nem a nossa equipe, consegue ler a sua senha." },
      { icon: MailCheck, title: "E-mail confirmado", desc: "A conta só é criada depois que o dono do e-mail confirma o cadastro." },
      { icon: Gauge, title: "Proteção contra ataques", desc: "Limite de tentativas e, com sinais de ataque, um código extra enviado por e-mail." },
      { icon: Cookie, title: "Sessão protegida", desc: "Cookie fora do alcance de scripts, com validade. Trocar a senha encerra todas as sessões." },
    ],
  },
  {
    id: "permissoes",
    title: "Permissões e histórico",
    summary: "Cada pessoa vê e faz só o que precisa.",
    items: [
      { icon: Users, title: "Papéis por pessoa", desc: "Administrador, membro e visualizador, definidos para cada pessoa da equipe." },
      { icon: ShieldCheck, title: "Verificado no servidor", desc: "As permissões valem em toda requisição, e não só escondem botões na tela." },
      { icon: Building2, title: "Empresas isoladas", desc: "Os dados de cada organização ficam separados dos de qualquer outra." },
      { icon: ScrollText, title: "Trilha de auditoria", desc: "Histórico de quem fez o quê, e quando." },
    ],
  },
  {
    id: "bancos",
    title: "Integração bancária",
    summary: "Conectado ao seu banco sem pedir a sua senha.",
    items: [
      { icon: Landmark, title: "Sem senha do banco", desc: "O Numin nunca pede a senha do internet banking, em nenhum momento." },
      { icon: Plug, title: "API oficial", desc: "Inter, Sicoob e Banco do Brasil, com as credenciais e o certificado digital da própria empresa." },
      { icon: LockKeyhole, title: "Credenciais cifradas", desc: "Guardadas com AES e a chave fora do banco de dados: uma cópia do banco, sozinha, não abre nada." },
      { icon: FileUp, title: "OFX para os demais", desc: "Com outros bancos, o extrato entra por arquivo, sem conexão nenhuma com a sua conta." },
    ],
  },
  {
    id: "dados",
    title: "Dados e arquivos",
    summary: "Protegidos no caminho e guardados com cuidado.",
    items: [
      { icon: Lock, title: "HTTPS em tudo", desc: "Todo o tráfego entre você e o Numin é criptografado por TLS." },
      { icon: Paperclip, title: "Anexos privados", desc: "Notas e comprovantes só são entregues por link autenticado, nunca por endereço público." },
      { icon: FileCheck, title: "Arquivos verificados", desc: "O tipo real de cada arquivo enviado é conferido antes de ser aceito." },
      { icon: DatabaseBackup, title: "Cópias de segurança", desc: "Backups do banco de dados, mantidos por até 30 dias." },
    ],
  },
];

export default function SegurancaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-x relative max-w-4xl pb-16 pt-32 text-center md:pt-36">
          <span className="eyebrow">Segurança</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-6xl">Seus dados financeiros protegidos</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Dado financeiro exige cuidado. Veja, sem rodeios, como o Numin protege o acesso à sua conta, as suas
            informações e a conexão com o seu banco.
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700"
              >
                <Icon size={16} aria-hidden /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <main>
        {PILLARS.map(({ id, title, summary, items }, idx) => (
          <section key={id} id={id} className={`anchor py-20 md:py-24 ${idx % 2 ? "bg-white" : "bg-nuvem"}`}>
            <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <span className="font-display text-sm font-bold text-brand-600">{String(idx + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{summary}</p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map(({ icon: Icon, title: itemTitle, desc }) => (
                  <Reveal key={itemTitle} className="h-full">
                    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_18px_40px_-24px_rgba(14,51,106,0.45)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_8px_20px_-8px_rgba(0,121,253,0.6)]">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-ink">{itemTitle}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section id="lgpd" className="anchor py-20 md:py-24">
          <div className="container-x max-w-5xl">
            <Reveal>
              <div className="rounded-3xl bg-ink px-8 py-12 text-white md:px-14 md:py-14">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Scale size={24} />
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">LGPD e os seus direitos</h2>
                <div className="mt-6 grid gap-6 text-white/85 md:grid-cols-3">
                  <p className="leading-relaxed">
                    <strong className="block font-semibold text-white">Os dados são da sua empresa.</strong>
                    Nos cadastros e lançamentos, a sua empresa é a controladora e o Numin é o operador: tratamos esses dados
                    só para prestar o serviço.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="block font-semibold text-white">Canal direto.</strong>
                    Para exercer seus direitos ou tirar dúvidas, escreva para{" "}
                    <a href={`mailto:${COMPANY.emailPrivacidade}`} className="font-semibold text-white underline underline-offset-4">
                      {COMPANY.emailPrivacidade}
                    </a>
                    .
                  </p>
                  <p className="leading-relaxed">
                    <strong className="block font-semibold text-white">Transparência.</strong>
                    Incidentes com risco aos titulares são comunicados à ANPD e aos afetados. Ao cancelar, você tem 30 dias
                    para exportar seus dados.
                  </p>
                </div>
                <Link
                  href="/privacidade"
                  className="mt-8 inline-flex items-center gap-1.5 font-semibold text-white hover:text-white/80"
                >
                  Ler a Política de Privacidade <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Reveal className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
                  <UserCheck size={24} className="text-brand-600" aria-hidden />
                  <h2 className="mt-4 text-xl font-bold tracking-tight text-ink">Você também faz parte da segurança</h2>
                  <ul className="mt-4 space-y-2 leading-relaxed text-muted">
                    <li>Use uma senha forte e só sua; convide cada pessoa com o papel adequado.</li>
                    <li>Saia do sistema em computadores compartilhados.</li>
                    <li>Revogue chaves de API e convites que não usa mais.</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
                  <Bug size={24} className="text-brand-600" aria-hidden />
                  <h2 className="mt-4 text-xl font-bold tracking-tight text-ink">Encontrou uma falha?</h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    Se você acredita ter encontrado uma vulnerabilidade, escreva para{" "}
                    <a href={`mailto:${COMPANY.emailContato}`} className="font-semibold text-brand-600 hover:text-brand-700">
                      {COMPANY.emailContato}
                    </a>{" "}
                    com os detalhes. Analisamos todo relato e pedimos que a falha não seja divulgada antes de corrigida.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* CTA + Rodapé no mesmo bloco azul, como na home */}
      <div className="bg-brand-hero">
        <section className="container-x py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Organize o financeiro com tranquilidade
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Contas a pagar e a receber, conciliação, fluxo de caixa e relatórios em um só lugar.
          </p>
          <div className="mt-8">
            <a href={SITE.signupUrl} className="btn btn-white btn-lg">
              Começar grátis <ArrowRight size={18} />
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
