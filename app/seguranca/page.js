import Link from "next/link";
import {
  ArrowRight, KeyRound, MailCheck, Gauge, Cookie, Users, ShieldCheck, Building2, ScrollText, Landmark, Plug,
  LockKeyhole, FileUp, Lock, Paperclip, FileCheck, Coins, Eye, Download, BadgeX, Scale, Clock,
} from "lucide-react";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { SITE, TRUST_LINE } from "@/lib/site";
import { COMPANY } from "@/lib/empresa";

// Tudo aqui precisa ser verdade no produto, conferido no código em 18/11/2026:
// backend/auth.py e routes/auth.py (bcrypt, cookie, papéis, tentativas e código
// por email, confirmação do email, token_version), main.py (HSTS), segredos.py
// (credenciais do banco cifradas), routes/attachments.py, auditoria.py,
// centavos.py e decisão 0010, integracoes/ (Inter, Sicoob, BB), e as páginas
// /privacidade e /termos (exportação, cancelamento sem multa, não vendemos dados).
// Não acrescente hospedagem, backup, certificação ou teste de invasão sem conferir.
// Na página de segurança, não dizer onde ficam os dados. Mudou o sistema, mude aqui.

const TITLE = "Segurança e privacidade";
const DESCRIPTION =
  "Como o Numin protege o dinheiro e os dados da sua empresa: valores exatos, auditoria de cada mudança, empresas isoladas, banco sem senha, acesso protegido e LGPD.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/seguranca" },
  openGraph: { type: "website", locale: "pt_BR", siteName: "Numin", title: TITLE, description: DESCRIPTION, url: "/seguranca" },
};

// Os fatos do topo: curtos, cada um detalhado numa seção abaixo.
const FACTS = [
  { icon: Coins, label: "Valores em centavos exatos" },
  { icon: ScrollText, label: "Toda mudança de dinheiro auditada" },
  { icon: Building2, label: "Cada empresa isolada" },
  { icon: Landmark, label: "Nunca pedimos a senha do banco" },
  { icon: Lock, label: "HTTPS em todo o sistema" },
  { icon: Scale, label: "Dados tratados conforme a LGPD" },
];

const SECTIONS = [
  {
    id: "dados",
    title: "Como seus dados ficam protegidos",
    summary: "O dinheiro bate no centavo, e cada mudança deixa rastro.",
    items: [
      { icon: Coins, title: "Centavos exatos", desc: "Os valores são calculados em centavos inteiros, sem as sobras de arredondamento que fazem um relatório não fechar." },
      { icon: ScrollText, title: "Auditoria com antes e depois", desc: "Pagamentos, faturas, conciliação, contas e lançamentos ficam registrados com quem fez, quando e o valor de antes e o de depois." },
      { icon: Building2, title: "Empresas isoladas", desc: "Os dados de cada organização ficam separados dos de qualquer outra, também nas contas dos relatórios." },
      { icon: Lock, title: "HTTPS em tudo", desc: "Todo o tráfego entre você e o Numin é criptografado por TLS, e o navegador é instruído a nunca usar conexão sem criptografia." },
      { icon: Paperclip, title: "Anexos só da sua empresa", desc: "Notas e comprovantes são entregues só a quem está logado na empresa dona do arquivo." },
      { icon: FileCheck, title: "Arquivos verificados", desc: "O tipo real de cada arquivo enviado é conferido antes de ser aceito: PDF, JPG, PNG ou WebP." },
    ],
  },
  {
    id: "banco",
    title: "Como o Numin fala com o seu banco",
    summary: "Conectado ao banco sem pedir a sua senha.",
    items: [
      { icon: Landmark, title: "Sem senha do banco", desc: "O Numin nunca pede a senha do internet banking, em nenhum momento." },
      { icon: Plug, title: "API oficial", desc: "Inter, Sicoob e Banco do Brasil, com as credenciais e o certificado digital da própria empresa." },
      { icon: LockKeyhole, title: "Credenciais cifradas", desc: "As credenciais da integração ficam cifradas, com a chave guardada separada delas." },
      { icon: FileUp, title: "OFX para os demais", desc: "Com outros bancos, o extrato entra por arquivo, sem conexão nenhuma com a sua conta." },
    ],
  },
  {
    id: "conta",
    title: "Como sua conta fica protegida",
    summary: "Só entra quem deve, e do jeito certo.",
    items: [
      { icon: KeyRound, title: "Senhas em hash", desc: "Guardadas com bcrypt. Ninguém, nem a nossa equipe, consegue ler a sua senha." },
      { icon: MailCheck, title: "E-mail confirmado", desc: "A conta só é criada depois que o dono do e-mail confirma o cadastro." },
      { icon: Gauge, title: "Proteção contra tentativas", desc: "Limite de tentativas de login e, com sinais de ataque, um código extra enviado por e-mail." },
      { icon: Cookie, title: "Sessão protegida", desc: "Cookie fora do alcance de scripts, que expira sem uso. Trocar a senha encerra todas as sessões." },
    ],
  },
  {
    id: "acesso",
    title: "Quem acessa o quê",
    summary: "Cada pessoa vê e faz só o que precisa.",
    items: [
      { icon: Users, title: "Papéis por pessoa", desc: "Administrador, membro ou visualizador, definido para cada pessoa da equipe." },
      { icon: Eye, title: "Contador como visualizador", desc: "O visualizador vê tudo e não altera nada. É o papel certo para o contador." },
      { icon: ShieldCheck, title: "Verificado no servidor", desc: "As permissões valem em toda requisição, e não só escondem botões na tela." },
      { icon: Clock, title: "Último acesso à vista", desc: "Em Membros, o administrador vê quando cada pessoa acessou a empresa pela última vez." },
    ],
  },
];

const OWNERSHIP = [
  { icon: Download, title: "Exporte quando quiser", desc: "Lançamentos, fluxo de caixa, DRE e conciliação saem em CSV, que abre no Excel." },
  { icon: BadgeX, title: "Cancele sem multa", desc: "Depois do fim da assinatura, os dados ficam disponíveis por 30 dias para você exportar." },
  { icon: ShieldCheck, title: "Não vendemos seus dados", desc: "Nem os usamos para publicidade. A sua empresa é a controladora; o Numin trata os dados só para prestar o serviço." },
];

const QUESTIONS = [
  {
    q: "O Numin pede a senha do meu banco?",
    a: "Não, nunca. Com Inter, Sicoob e Banco do Brasil a conexão é pela API oficial, com as credenciais e o certificado da empresa. Com os outros bancos, você importa o extrato em OFX.",
  },
  {
    q: "Posso dar acesso ao meu contador sem que ele mude nada?",
    a: "Sim. Convide o contador como visualizador: ele vê lançamentos, relatórios e a DRE, e não consegue alterar nada.",
  },
  {
    q: "Como sei quem mudou um lançamento?",
    a: "Em Configurações, na Auditoria. Cada mudança de dinheiro mostra quem fez, quando e o valor de antes e o de depois.",
  },
  {
    q: "Se eu cancelar, o que acontece com os meus dados?",
    a: "Você cancela sem multa. Os dados ficam disponíveis por 30 dias para exportar em CSV e depois podem ser excluídos, como descrito na Política de Privacidade.",
  },
  {
    q: "Como mantenho a minha conta segura?",
    a: "Use uma senha forte e só sua, convide cada pessoa com o papel adequado, saia do sistema em computadores compartilhados e revogue chaves de API e convites que não usa mais.",
  },
  {
    q: "Encontrei uma falha de segurança. Como aviso?",
    a: `Escreva para ${COMPANY.emailContato} com os detalhes. Analisamos todo relato e pedimos que a falha não seja divulgada antes de corrigida.`,
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function ItemGrid({ items }) {
  return (
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {items.map(({ icon: Icon, title, desc }) => (
        <li key={title}>
          <span className="flex h-10 w-10 items-center justify-center rounded-card bg-white text-brand-600 ring-1 ring-slate-200">
            <Icon size={19} aria-hidden />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-1.5 leading-relaxed text-muted">{desc}</p>
        </li>
      ))}
    </ul>
  );
}

export default function SegurancaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />

      {/* Os fatos no topo; o detalhe de cada um vem nas seções abaixo */}
      <section className="bg-white">
        <div className="container-x pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="max-w-3xl">
            <span className="eyebrow">Segurança</span>
            <h1 className="mt-4 text-4xl font-bold text-ink md:text-6xl">
              Cada centavo registrado. Cada mudança, com quem fez e quando.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Dado financeiro exige cuidado. Veja, sem rodeios, como o Numin protege o dinheiro, a conta e os dados da sua
              empresa.
            </p>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-panel border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {FACTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 bg-white px-5 py-5">
                <Icon size={20} className="shrink-0 text-brand-600" aria-hidden />
                <span className="font-semibold text-ink">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {SECTIONS.map(({ id, title, summary, items }, idx) => (
        <section key={id} id={id} className={`anchor py-20 md:py-24 ${idx % 2 ? "bg-white" : "bg-nuvem"}`}>
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-3xl font-bold text-ink md:text-4xl">{title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{summary}</p>
            </Reveal>
            <Reveal>
              <ItemGrid items={items} />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Seus dados são seus */}
      <section id="seus-dados" className="anchor py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-panel bg-ink px-6 py-12 text-white md:px-14 md:py-14">
              <h2 className="text-3xl font-bold text-white md:text-4xl">Seus dados são seus</h2>
              <ul className="mt-10 grid gap-8 md:grid-cols-3">
                {OWNERSHIP.map(({ icon: Icon, title, desc }) => (
                  <li key={title}>
                    <Icon size={22} className="text-ciano" aria-hidden />
                    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 leading-relaxed text-white/85">{desc}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-10 leading-relaxed text-white/85">
                Para exercer seus direitos pela LGPD ou tirar dúvidas, escreva para{" "}
                <a href={`mailto:${COMPANY.emailPrivacidade}`} className="font-semibold text-white underline underline-offset-4">
                  {COMPANY.emailPrivacidade}
                </a>
                . Incidentes com risco aos titulares são comunicados à ANPD e aos afetados.
              </p>
              <Link href="/privacidade" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-white hover:text-white/80">
                Ler a Política de Privacidade <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Perguntas */}
      <section id="perguntas" className="anchor pb-20 md:pb-28">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-ink">Perguntas sobre segurança</h2>
            <div className="mt-8">
              <Faq items={QUESTIONS} name="seguranca" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA + Rodapé no mesmo bloco azul, como na home */}
      <div className="bg-brand-hero">
        <section className="container-x py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
            Organize o financeiro com tranquilidade
          </h2>
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
