import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const SLUG = "/dre";
const TITLE = "DRE: o que é e como fazer o demonstrativo de resultado";
const DESCRIPTION =
  "Entenda o que é a DRE (Demonstrativo de Resultado do Exercício), como montar uma DRE gerencial para pequenas empresas e como usá-la para decidir.";

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
    q: "Qual a diferença entre DRE contábil e DRE gerencial?",
    a: "A DRE contábil é elaborada pelo contador seguindo as normas contábeis, para fins legais e fiscais. A DRE gerencial é feita pela própria empresa, com o nível de detalhe que ajuda a decidir, e costuma ser acompanhada todo mês.",
  },
  {
    q: "Pequena empresa precisa de DRE?",
    a: "Mesmo quando a DRE contábil fica a cargo do contador, a DRE gerencial é o jeito mais direto de saber se o negócio está dando lucro, quais despesas pesam mais e se o preço cobrado cobre os custos.",
  },
  {
    q: "Com que frequência devo olhar a DRE?",
    a: "Mensalmente, logo depois de conciliar o mês. Olhar também o acumulado do ano ajuda a separar um mês ruim de uma tendência.",
  },
  {
    q: "O Numin substitui o contador na DRE?",
    a: "Não. O Numin gera a DRE gerencial a partir dos seus lançamentos. A contabilidade oficial continua com o contador, que pode acessar o Numin como visualizador ou receber a DRE exportada em CSV.",
  },
];

const RELATED = [
  {
    href: "/fluxo-de-caixa",
    title: "Fluxo de caixa: como fazer e acompanhar previsto x realizado",
    desc: "Lucro na DRE não garante dinheiro na conta. Veja como projetar o caixa.",
  },
  {
    href: "/conciliacao-bancaria",
    title: "Conciliação bancária: o que é e como fazer passo a passo",
    desc: "A DRE só é confiável se os lançamentos baterem com o banco.",
  },
];

const STRUCTURE = [
  ["Receita bruta", "Tudo o que a empresa faturou com a venda de serviços e produtos."],
  ["(−) Deduções", "Impostos sobre o faturamento, cancelamentos e descontos concedidos."],
  ["(=) Receita líquida", "O que de fato fica para a empresa depois das deduções."],
  ["(−) Custos", "Gastos diretamente ligados à entrega do serviço, como terceiros e materiais."],
  ["(=) Lucro bruto", "Quanto sobra da receita depois de pagar a entrega."],
  ["(−) Despesas operacionais", "Folha, pró-labore, aluguel, software, marketing e administrativo."],
  ["(=) Resultado operacional", "Mostra se a operação em si se sustenta."],
  ["(±) Resultado financeiro", "Juros, tarifas bancárias e rendimentos de aplicações."],
  ["(=) Resultado líquido", "O lucro ou prejuízo do período."],
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

export default function DrePage() {
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
            DRE: o que é e como fazer o demonstrativo de resultado
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted">
            Faturar bem não é o mesmo que ter lucro. A DRE mostra, linha a linha, quanto da receita
            sobra depois de pagar tudo, e onde o dinheiro está ficando pelo caminho.
          </p>
        </header>

        <h2 className={h2}>O que é DRE (Demonstrativo de Resultado do Exercício)</h2>
        <p className={p}>
          A DRE, sigla de Demonstrativo de Resultado do Exercício, é um relatório que parte da
          receita da empresa em um período e vai subtraindo deduções, custos e despesas até chegar ao
          resultado final: lucro ou prejuízo.
        </p>
        <p className={p}>
          Existem duas versões. A <strong className="text-ink">DRE contábil</strong> é elaborada pelo
          contador, segue as normas contábeis e é usada para fins legais e fiscais. A{" "}
          <strong className="text-ink">DRE gerencial</strong> é feita pela própria empresa, com as
          categorias que fazem sentido para o negócio, e serve para tomar decisões no dia a dia. Este
          guia trata da gerencial, a que o dono do negócio acompanha todo mês.
        </p>

        <h2 className={h2}>A estrutura básica da DRE</h2>
        <p className={p}>
          Os nomes das linhas variam, mas a lógica é sempre a mesma: da receita ao resultado, em
          cascata.
        </p>
        <div className="card mt-6 p-0">
          <dl className="divide-y divide-slate-100">
            {STRUCTURE.map(([term, desc]) => (
              <div key={term} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[14rem_1fr] sm:gap-4">
                <dt
                  className={`font-semibold ${term.startsWith("(=)") ? "text-brand-700" : "text-ink"}`}
                >
                  {term}
                </dt>
                <dd className="text-muted">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h2 className={h2}>Por que a DRE importa para a empresa</h2>
        <p className={p}>
          Sem DRE, a sensação de que o mês foi bom costuma vir do saldo bancário, e o saldo engana: um
          recebimento atrasado que caiu agora ou um fornecedor que ainda não foi pago inflam o caixa
          sem dizer nada sobre o resultado.
        </p>
        <p className={p}>
          A DRE responde às perguntas que importam: a empresa está dando lucro? Qual serviço traz mais
          receita? A folha está pesando demais? O preço cobre os custos? Em empresas de serviços, onde
          pessoas são o maior custo, acompanhar a margem mês a mês é a diferença entre crescer com
          lucro e crescer no prejuízo.
        </p>

        <h2 className={h2}>Como fazer uma DRE gerencial, passo a passo</h2>
        <ol className="mt-5 list-decimal space-y-4 pl-6 text-lg leading-relaxed text-ink-700 marker:font-semibold marker:text-brand-600">
          <li>
            <strong className="text-ink">Monte um plano de categorias.</strong> Defina categorias
            de receita e despesa e diga a qual linha da DRE cada uma pertence: “Aluguel” é despesa
            operacional, “Tarifas bancárias” é resultado financeiro.
          </li>
          <li>
            <strong className="text-ink">Categorize todos os lançamentos.</strong> Cada receita e
            despesa do período precisa de uma categoria. Lançamento sem categoria é lançamento fora
            da DRE.
          </li>
          <li>
            <strong className="text-ink">Concilie antes de fechar.</strong> Confira os lançamentos
            com o extrato para não deixar tarifas de fora nem contar um pagamento duas vezes.
          </li>
          <li>
            <strong className="text-ink">Some por linha.</strong> Agrupe os valores das categorias em
            cada linha da estrutura e calcule os subtotais: receita líquida, lucro bruto, resultado
            operacional e resultado líquido.
          </li>
          <li>
            <strong className="text-ink">Calcule as proporções.</strong> Divida cada linha pela
            receita. Saber que a folha representa 45% da receita diz mais do que o valor absoluto.
          </li>
          <li>
            <strong className="text-ink">Compare.</strong> Coloque o mês ao lado do planejado e dos
            meses anteriores. É a variação que aponta o problema.
          </li>
        </ol>

        <div className="card mt-12 bg-nuvem">
          <p className="font-display text-xl font-semibold text-ink">Saiba se está dando lucro</p>
          <p className="mt-2 text-muted">
            A DRE sai pronta das categorias dos seus lançamentos, sem planilha paralela.
          </p>
          <a href={SITE.signupUrl} className="btn btn-primary mt-5">
            Começar grátis <ArrowRight size={16} />
          </a>
          <p className="mt-3 text-sm text-muted">{SITE.riskReversal}</p>
        </div>

        <h2 className={h2}>Erros comuns ao montar a DRE</h2>
        <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-relaxed text-ink-700">
          <li>
            <strong className="text-ink">Confundir DRE com fluxo de caixa.</strong> A DRE mede
            resultado; o fluxo de caixa mede dinheiro disponível. As duas são necessárias.
          </li>
          <li>
            <strong className="text-ink">Categorias genéricas demais.</strong> Uma linha “despesas
            gerais” com metade dos gastos não ajuda a decidir nada.
          </li>
          <li>
            <strong className="text-ink">Tratar transferências como receita ou despesa.</strong>{" "}
            Dinheiro movido entre contas da própria empresa não é resultado.
          </li>
          <li>
            <strong className="text-ink">Esquecer o pró-labore.</strong> Se o trabalho dos sócios
            não entra como custo, o lucro parece maior do que é.
          </li>
          <li>
            <strong className="text-ink">Olhar só uma vez por ano.</strong> Quando a DRE anual
            chega, os meses ruins já passaram sem correção.
          </li>
        </ul>

        <h2 className={h2}>Como o Numin ajuda a montar a DRE</h2>
        <p className={p}>
          No Numin, cada categoria de receita e despesa está ligada a uma linha da DRE. Uma
          organização nova já começa com um plano de categorias padrão, que você pode ajustar ao seu
          negócio. A partir daí, a DRE é montada automaticamente com os lançamentos que você cadastra
          e concilia no dia a dia, sem planilha paralela.
        </p>
        <p className={p}>
          O relatório mostra o previsto e o realizado lado a lado, com a variação em reais e em
          percentual e o peso de cada linha sobre a receita. Os lançamentos são agrupados pela data
          de vencimento; no cartão, pelo vencimento da fatura. Além da DRE, há relatórios de
          resultado mensal, por fornecedor, por cliente e por centro de custo. Para o fechamento com
          o contador, você exporta a DRE em CSV ou dá a ele acesso como visualizador, que vê tudo sem
          alterar nada.
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
              src="/feat-relatorios.webp"
              width={1600}
              height={794}
              sizes="(min-width: 768px) 720px, calc(100vw - 48px)"
              alt="DRE no Numin com receitas e despesas por categoria, colunas de previsto, realizado, variação em reais e em percentual e análise vertical"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-muted">
            DRE no Numin: previsto x realizado, variação e peso de cada linha sobre a receita.
          </figcaption>
        </figure>

        <h2 className={h2}>Perguntas frequentes sobre DRE</h2>
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
            Do lançamento à DRE, sem planilha
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
            Contas a pagar e a receber, conciliação, fluxo de caixa e relatórios em um só lugar.
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
