import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const SLUG = "/conciliacao-bancaria";
const TITLE = "Conciliação bancária: o que é e como fazer passo a passo";
const DESCRIPTION =
  "Entenda o que é conciliação bancária, por que ela importa para a sua empresa e como fazer passo a passo, sem erros e sem perder horas no fim do mês.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    siteName: "Numin",
    title: TITLE,
    description: DESCRIPTION,
    url: SLUG,
  },
};

const FAQS = [
  {
    q: "Com que frequência devo fazer a conciliação bancária?",
    a: "O ideal é semanal, ou até diária se o volume de transações for alto. Quanto menor o intervalo, menos transações acumuladas e mais fácil lembrar a origem de cada uma.",
  },
  {
    q: "Conciliação bancária é obrigação do contador?",
    a: "O contador faz a conciliação contábil, mas quem conhece cada pagamento e recebimento é a própria empresa. Conciliar no dia a dia e entregar o mês fechado deixa o trabalho do contador mais rápido e o seu resultado mais confiável.",
  },
  {
    q: "O que fazer quando o saldo do banco não bate com o do sistema?",
    a: "Procure transações do extrato sem lançamento (tarifas, juros, PIX não registrados) e lançamentos sem transação (pagamentos que não saíram ou foram lançados em duplicidade). Evite criar um lançamento de ajuste só para zerar a diferença.",
  },
  {
    q: "Preciso informar a senha do banco para conciliar no Numin?",
    a: "Não. Você baixa o extrato em arquivo OFX no internet banking e importa no Numin. O Numin não pede a senha do seu banco em momento nenhum.",
  },
];

const RELATED = [
  {
    href: "/fluxo-de-caixa",
    title: "Fluxo de caixa: como fazer e acompanhar previsto x realizado",
    desc: "Com o extrato conciliado, o saldo inicial do seu fluxo de caixa passa a ser real.",
  },
  {
    href: "/dre",
    title: "DRE: o que é e como fazer o demonstrativo de resultado",
    desc: "Transações bem categorizadas na conciliação viram uma DRE gerencial confiável.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const h2 = "mt-14 text-2xl font-bold tracking-tight text-ink md:text-3xl";
const p = "mt-4 text-lg leading-relaxed text-ink-700";

export default function ConciliacaoBancariaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <article className="container-x max-w-3xl pt-28 pb-20">
        <header>
          <span className="eyebrow">Guia prático</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Conciliação bancária: o que é e como fazer
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted">
            Se o saldo do sistema diz uma coisa e o banco diz outra, alguma decisão da sua empresa
            está sendo tomada com o número errado. A conciliação bancária existe para acabar com essa
            diferença. Veja o que é, por que importa e como fazer, passo a passo.
          </p>
        </header>

        <h2 className={h2}>O que é conciliação bancária</h2>
        <p className={p}>
          Conciliação bancária é a conferência entre o que a empresa registrou no controle financeiro
          e o que de fato aconteceu na conta bancária. Cada transação do extrato (um PIX recebido,
          um boleto pago, uma tarifa) precisa corresponder a um lançamento no seu sistema, e cada
          lançamento dado como pago ou recebido precisa aparecer no extrato.
        </p>
        <p className={p}>
          Quando tudo bate, o saldo do sistema é igual ao saldo do banco e você sabe que os seus
          relatórios refletem a realidade. Quando não bate, a diferença aponta um erro, um esquecimento
          ou uma movimentação que ninguém autorizou.
        </p>

        <h2 className={h2}>Por que a conciliação bancária importa para a empresa</h2>
        <p className={p}>
          Em empresas de serviços, o dinheiro entra de muitas formas: mensalidades, projetos
          fechados, consultorias avulsas, cada cliente pagando de um jeito. Sem conciliação, é comum
          achar que um cliente pagou quando não pagou, ou cobrar de novo quem já pagou. Conciliar
          regularmente traz alguns ganhos concretos:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            "Saldo confiável: você decide contratar, investir ou segurar gastos olhando o número real.",
            "Inadimplência visível: o que não entrou no banco fica claro, e a cobrança começa cedo.",
            "Menos surpresa: tarifas, juros e débitos automáticos deixam de passar despercebidos.",
            "Relatórios corretos: fluxo de caixa e DRE só são confiáveis se a base estiver conciliada.",
            "Fechamento mais rápido com o contador, que recebe o mês já conferido.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="text-lg leading-relaxed text-ink-700">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className={h2}>Como fazer conciliação bancária, passo a passo</h2>
        <p className={p}>
          O processo é o mesmo em planilha ou em sistema. O que muda é quanto dele você faz à mão.
        </p>
        <ol className="mt-5 list-decimal space-y-4 pl-6 text-lg leading-relaxed text-ink-700 marker:font-semibold marker:text-brand-600">
          <li>
            <strong className="text-ink">Baixe o extrato do período.</strong> No internet banking,
            exporte o extrato da conta, de preferência em OFX, formato que os sistemas financeiros
            conseguem ler.
          </li>
          <li>
            <strong className="text-ink">Confira o saldo inicial.</strong> O saldo de abertura do
            extrato deve ser igual ao saldo final da última conciliação. Se não for, resolva essa
            diferença antes de seguir.
          </li>
          <li>
            <strong className="text-ink">Bata cada transação com um lançamento.</strong> Compare
            valor, data e favorecido. Um recebimento de R$ 1.500 de um cliente deve corresponder ao
            título a receber desse cliente, não a qualquer outro de mesmo valor.
          </li>
          <li>
            <strong className="text-ink">Trate o que está no banco e não no sistema.</strong>{" "}
            Tarifas, juros, estornos e pagamentos esquecidos viram lançamentos novos, cada um com a
            categoria certa.
          </li>
          <li>
            <strong className="text-ink">Trate o que está no sistema e não no banco.</strong> Um
            pagamento dado como feito que não aparece no extrato pode ter falhado, estar agendado ou
            ter sido lançado em duplicidade.
          </li>
          <li>
            <strong className="text-ink">Resolva os agrupamentos.</strong> Um único PIX pode quitar
            três notas de um cliente. Nesse caso, uma transação do extrato corresponde a vários
            lançamentos, e a soma deles precisa ser exatamente o valor da transação.
          </li>
          <li>
            <strong className="text-ink">Identifique transferências entre contas.</strong> Dinheiro
            que sai da conta corrente para a poupança não é despesa nem receita. Registre como
            transferência para não distorcer os relatórios.
          </li>
          <li>
            <strong className="text-ink">Confira o saldo final.</strong> Ao terminar, o saldo do
            sistema tem que ser igual ao do extrato. Esse é o sinal de que o período está fechado.
          </li>
        </ol>

        <div className="card mt-12 bg-nuvem">
          <p className="font-display text-xl font-semibold text-ink">
            Concilie o extrato em minutos, não em horas
          </p>
          <p className="mt-2 text-muted">
            Importe o OFX e deixe o Numin sugerir as correspondências para você só confirmar.
          </p>
          <a href={SITE.signupUrl} className="btn btn-primary mt-5">
            Começar grátis <ArrowRight size={16} />
          </a>
          <p className="mt-3 text-sm text-muted">{SITE.riskReversal}</p>
        </div>

        <h2 className={h2}>Erros comuns na conciliação bancária</h2>
        <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-relaxed text-ink-700">
          <li>
            <strong className="text-ink">Deixar tudo para o fim do mês.</strong> Com centenas de
            transações acumuladas, fica difícil lembrar o que era cada uma.
          </li>
          <li>
            <strong className="text-ink">Conciliar só pelo valor.</strong> Dois clientes podem pagar
            o mesmo valor no mesmo dia. Confira também o favorecido e a data.
          </li>
          <li>
            <strong className="text-ink">Jogar tudo em “outros”.</strong> Tarifas e juros sem
            categoria somem dos relatórios e o custo real da operação fica escondido.
          </li>
          <li>
            <strong className="text-ink">Forçar o saldo com um lançamento de ajuste.</strong> A
            diferença continua existindo, só fica invisível.
          </li>
          <li>
            <strong className="text-ink">Misturar contas pessoais e da empresa.</strong> Gastos
            pessoais na conta da empresa confundem a conciliação e o resultado.
          </li>
        </ul>

        <h2 className={h2}>Como o Numin ajuda na conciliação bancária</h2>
        <p className={p}>
          No Numin, você baixa o extrato em OFX no seu banco e importa na conta correspondente, sem
          informar senha de banco. A partir daí, o sistema compara cada transação com os lançamentos
          em aberto e sugere as correspondências. As sugestões de confiança alta e média podem ser
          confirmadas em lote, com um clique; em qualquer uma delas você pode trocar o lançamento
          sugerido ou ignorar a transação.
        </p>
        <p className={p}>
          Transações que ainda não têm lançamento, como tarifas, podem virar lançamentos direto do
          extrato, com sugestão de categoria. Um recebimento que quita vários títulos pode ser
          conciliado com todos eles de uma vez, desde que a soma bata exatamente. E, se a transação
          for uma transferência entre as suas contas já cadastrada no Numin, com o mesmo valor, basta
          vinculá-la a essa transferência para não distorcer receitas e despesas.
        </p>

        <figure className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-30px_rgba(19,48,89,0.35)]">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <div className="ml-2 flex-1">
                <div className="mx-auto w-fit rounded border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] text-slate-400">
                  app.numin.com.br
                </div>
              </div>
            </div>
            <Image
              src="/feat-conciliacao.webp"
              width={1600}
              height={792}
              sizes="(min-width: 768px) 720px, calc(100vw - 48px)"
              alt="Tela de conciliação do Numin com o progresso do mês, transações do extrato pendentes e sugestões de lançamento de alta confiança para confirmar"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-muted">
            Conciliação no Numin: extrato importado, sugestões de correspondência e confirmação em lote.
          </figcaption>
        </figure>

        <h2 className={h2}>Perguntas frequentes sobre conciliação bancária</h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="card">
              <h3 className="text-lg font-semibold text-ink">{f.q}</h3>
              <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>

        <aside className="mt-14">
          <h2 className="text-xl font-bold tracking-tight text-ink">Leia também</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="card card-hover block">
                <span className="font-display text-lg font-semibold text-ink">{r.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">{r.desc}</span>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-muted">
            Quer saber quanto custa?{" "}
            <Link href="/#precos" className="font-semibold text-brand-600 hover:text-brand-700">
              Veja os planos do Numin
            </Link>
            .
          </p>
        </aside>

        <section className="card mt-14 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Feche o mês com o saldo batendo
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
            Contas a pagar e a receber, conciliação, fluxo de caixa e DRE em um só lugar.
          </p>
          <div className="mt-7">
            <a href={SITE.signupUrl} className="btn btn-primary btn-lg">
              Começar grátis <ArrowRight size={18} />
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">{SITE.riskReversal}</p>
        </section>
      </article>

      <div className="bg-brand-hero">
        <Footer />
      </div>
    </>
  );
}
