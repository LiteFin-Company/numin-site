import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const SLUG = "/fluxo-de-caixa";
const TITLE = "Fluxo de caixa: como fazer e acompanhar previsto x realizado";
const DESCRIPTION =
  "Aprenda a fazer o fluxo de caixa da sua empresa, comparar previsto x realizado e antecipar faltas de dinheiro — e por que a planilha deixa de dar conta.";

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
    q: "Qual a diferença entre fluxo de caixa e DRE?",
    a: "O fluxo de caixa mostra quando o dinheiro entra e sai da conta. A DRE mostra se a empresa teve lucro ou prejuízo no período. Uma empresa pode ter lucro na DRE e ainda assim ficar sem caixa, por isso as duas visões se complementam.",
  },
  {
    q: "Com que antecedência devo projetar o fluxo de caixa?",
    a: "Para a maioria das pequenas empresas, projetar os próximos três meses e revisar toda semana é um bom começo. Quem tem contratos longos ou sazonalidade forte ganha ao olhar mais longe.",
  },
  {
    q: "Planilha de fluxo de caixa funciona?",
    a: "Funciona no começo, com poucos lançamentos e uma pessoa cuidando. Com o crescimento, a digitação dupla, as fórmulas quebradas e a falta de conferência com o banco fazem a planilha perder a confiabilidade.",
  },
  {
    q: "O que é fluxo de caixa previsto x realizado?",
    a: "É a comparação entre o que você planejou receber e pagar e o que de fato entrou e saiu. As diferenças mostram atrasos de clientes, gastos acima do planejado e onde a previsão precisa melhorar.",
  },
];

const RELATED = [
  {
    href: "/conciliacao-bancaria",
    title: "Conciliação bancária: o que é e como fazer passo a passo",
    desc: "O realizado do fluxo de caixa só é confiável se o extrato estiver conciliado.",
  },
  {
    href: "/dre",
    title: "DRE: o que é e como fazer o demonstrativo de resultado",
    desc: "Caixa positivo não é o mesmo que lucro. Veja como medir o resultado.",
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

export default function FluxoDeCaixaPage() {
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
            Fluxo de caixa: como fazer e acompanhar o previsto x realizado
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted">
            Muita empresa lucrativa já passou aperto porque o dinheiro acabou antes de o cliente
            pagar. O fluxo de caixa é a ferramenta que mostra esse aperto com semanas de antecedência,
            enquanto ainda dá tempo de agir.
          </p>
        </header>

        <h2 className={h2}>O que é fluxo de caixa</h2>
        <p className={p}>
          Fluxo de caixa é o registro, organizado no tempo, de todo o dinheiro que entra e sai da
          empresa. Ele responde a uma pergunta simples: em cada dia, semana ou mês, quanto vai ter na
          conta?
        </p>
        <p className={p}>
          Ele tem duas partes. O <strong className="text-ink">realizado</strong> é o que já
          aconteceu: recebimentos e pagamentos efetivos. O <strong className="text-ink">previsto</strong>{" "}
          é o que está programado: contas a pagar com vencimento, clientes que devem pagar,
          mensalidades recorrentes. Comparar os dois, o chamado{" "}
          <strong className="text-ink">previsto x realizado</strong>, é o que transforma o fluxo de
          caixa de um registro histórico em uma ferramenta de planejamento.
        </p>

        <h2 className={h2}>Por que o fluxo de caixa importa para a empresa</h2>
        <p className={p}>
          Lucro e caixa são coisas diferentes. Uma empresa de serviços pode fechar um projeto grande
          em março, receber em maio e ter de pagar salários, aluguel e impostos em abril. No papel,
          março foi ótimo. Na conta, abril pode ficar no vermelho.
        </p>
        <p className={p}>
          Com o fluxo de caixa em dia, você vê esse buraco antes de ele chegar e pode negociar prazos,
          antecipar uma cobrança, adiar uma compra ou simplesmente decidir com calma. Ele também
          mostra quando há sobra de caixa, o momento certo para investir, contratar ou formar reserva.
        </p>

        <h2 className={h2}>Como fazer fluxo de caixa, passo a passo</h2>
        <ol className="mt-5 list-decimal space-y-4 pl-6 text-lg leading-relaxed text-ink-700 marker:font-semibold marker:text-brand-600">
          <li>
            <strong className="text-ink">Defina o período e o horizonte.</strong> Acompanhe por mês
            e, se o caixa for apertado, também por semana. Projete pelo menos os próximos três meses.
          </li>
          <li>
            <strong className="text-ink">Parta do saldo real.</strong> O saldo inicial deve ser o do
            banco, depois da conciliação. Começar de um número errado compromete toda a projeção.
          </li>
          <li>
            <strong className="text-ink">Liste as entradas previstas.</strong> Contas a receber com
            data esperada, contratos recorrentes e parcelas de clientes. Use a data em que o dinheiro
            deve cair, não a data da venda.
          </li>
          <li>
            <strong className="text-ink">Liste as saídas previstas.</strong> Despesas fixas (folha,
            pró-labore, aluguel, software), variáveis, impostos, parcelas e a fatura do cartão na data
            de vencimento.
          </li>
          <li>
            <strong className="text-ink">Organize por categoria.</strong> Agrupar entradas e saídas
            em categorias como “serviços prestados” ou “marketing” mostra de onde vem e para onde vai
            o dinheiro.
          </li>
          <li>
            <strong className="text-ink">Calcule o saldo projetado.</strong> Saldo inicial + entradas
            − saídas, período a período. Qualquer mês negativo é um alerta.
          </li>
          <li>
            <strong className="text-ink">Registre o realizado e compare.</strong> Ao fim de cada
            período, confronte o previsto com o que aconteceu e entenda as diferenças.
          </li>
          <li>
            <strong className="text-ink">Aja sobre o que encontrou.</strong> Cobre atrasados, corte
            gastos que estouraram e ajuste as próximas previsões.
          </li>
        </ol>

        <h2 className={h2}>Planilha de fluxo de caixa: quando é hora de sair dela</h2>
        <p className={p}>
          A planilha é um ótimo ponto de partida, mas cobra um preço conforme a empresa cresce. Cada
          pagamento é digitado duas vezes, uma no banco e outra na planilha. Uma fórmula arrastada
          errado muda o saldo sem ninguém perceber. Duas pessoas editando geram versões diferentes. E,
          principalmente, nada garante que o realizado da planilha é o mesmo que o do banco.
        </p>
        <p className={p}>
          Se você gasta mais tempo mantendo a planilha do que analisando os números, ou já desconfiou
          de algum saldo dela, é hora de mudar para um sistema.
        </p>

        <div className="card mt-12 bg-nuvem">
          <p className="font-display text-xl font-semibold text-ink">
            Enxergue o caixa antes de faltar
          </p>
          <p className="mt-2 text-muted">
            Previsto x realizado por período, a partir dos lançamentos que você já faz.
          </p>
          <a href={SITE.signupUrl} className="btn btn-primary mt-5">
            Começar grátis <ArrowRight size={16} />
          </a>
          <p className="mt-3 text-sm text-muted">{SITE.riskReversal}</p>
        </div>

        <h2 className={h2}>Erros comuns no fluxo de caixa</h2>
        <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-relaxed text-ink-700">
          <li>
            <strong className="text-ink">Confundir faturamento com recebimento.</strong> Um serviço
            vendido hoje só vira caixa quando o cliente paga.
          </li>
          <li>
            <strong className="text-ink">Esquecer despesas que não são mensais.</strong> Impostos
            trimestrais, 13º salário e renovações anuais pegam de surpresa quem só olha o mês.
          </li>
          <li>
            <strong className="text-ink">Lançar o cartão na data da compra.</strong> O dinheiro sai
            no vencimento da fatura, e é essa data que importa para o caixa.
          </li>
          <li>
            <strong className="text-ink">Não atualizar a previsão.</strong> Um fluxo de caixa feito
            em janeiro e esquecido não avisa nada em abril.
          </li>
          <li>
            <strong className="text-ink">Misturar dinheiro pessoal e da empresa.</strong> Retiradas
            dos sócios devem ser registradas como pró-labore ou distribuição, não somar às despesas
            sem critério.
          </li>
        </ul>

        <h2 className={h2}>Como o Numin ajuda no fluxo de caixa</h2>
        <p className={p}>
          No Numin, o fluxo de caixa é montado a partir das contas a pagar e a receber que você já
          cadastra no dia a dia, sem digitação duplicada. Lançamentos parcelados e recorrentes são
          gerados automaticamente, então mensalidades de clientes e despesas fixas aparecem nos meses
          seguintes sem você ter de repeti-las.
        </p>
        <p className={p}>
          A visão consolida entradas e saídas por categoria, mês a mês. O previsto reúne todas as
          receitas e despesas não canceladas; o realizado, as que já foram pagas ou recebidas. Ao
          conciliar essas baixas com o extrato do banco, você garante que o realizado é o mesmo que
          está na conta. No cartão de crédito, cada compra entra no fluxo na data de vencimento da
          fatura em que caiu, que é quando o dinheiro realmente sai.
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
              src="/feat-fluxo.webp"
              width={1600}
              height={789}
              sizes="(min-width: 768px) 720px, calc(100vw - 48px)"
              alt="Fluxo de caixa do Numin com receitas e despesas por categoria mês a mês, mostrando valores realizados e previstos e o total de cada linha"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-muted">
            Fluxo de caixa no Numin: realizado e previsto por categoria, mês a mês.
          </figcaption>
        </figure>

        <h2 className={h2}>Perguntas frequentes sobre fluxo de caixa</h2>
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
            Troque a planilha por um caixa que se atualiza sozinho
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
