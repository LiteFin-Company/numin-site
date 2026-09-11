import Link from "next/link";
import Footer from "@/components/Footer";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/lib/empresa";

export const metadata = {
  title: "Termos de Uso",
  description:
    "Regras de uso do Numin: conta e equipe, teste grátis de 7 dias, planos e pagamento, cancelamento e exportação de dados, API pública e responsabilidades.",
  alternates: { canonical: "/termos" },
};

/* ---------- Peças de texto ---------- */

const linkClass = "font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800";

function Mail({ to }) {
  return (
    <a href={`mailto:${to}`} className={linkClass}>
      {to}
    </a>
  );
}

function A({ href, children }) {
  return (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
}

function PrivacyLink() {
  return (
    <Link href="/privacidade" className={linkClass}>
      Política de Privacidade
    </Link>
  );
}

function H3({ children }) {
  return <h3 className="pt-4 text-lg font-semibold text-ink">{children}</h3>;
}

function List({ children }) {
  return <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">{children}</ul>;
}

function B({ children }) {
  return <strong className="text-ink">{children}</strong>;
}

function Section({ id, n, title, children }) {
  return (
    <section id={id} className="anchor mt-12 border-t border-slate-200 pt-10">
      <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
        <span className="tabnum mr-2 text-brand-600">{n}.</span>
        {title}
      </h2>
      <div className="mt-5 space-y-4 leading-relaxed text-ink-700">{children}</div>
    </section>
  );
}

/* ---------- Conteúdo ---------- */

const SECTIONS = [
  {
    id: "aceite",
    title: "Aceite",
    body: (
      <>
        <p>
          Estes Termos de Uso regulam o uso do Numin, sistema de controle financeiro para empresas oferecido por{" "}
          <B>{COMPANY.razaoSocial}</B>, inscrita no CNPJ sob o nº {COMPANY.cnpj}, com sede em {COMPANY.endereco},{" "}
          {COMPANY.cidadeUf} (“Numin”, “nós”).
        </p>
        <p>
          Ao criar uma conta, aceitar um convite ou usar o Numin, você declara que leu e aceita estes Termos e a{" "}
          <PrivacyLink />. Se você aceita em nome de uma empresa, declara ter poderes para vinculá-la a estes Termos.
          Se não concordar, não use o serviço.
        </p>
      </>
    ),
  },
  {
    id: "definicoes",
    title: "Definições",
    body: (
      <List>
        <li>
          <B>Cliente:</B> a empresa (ou pessoa física) titular de uma organização no Numin, que contrata o serviço.
        </li>
        <li>
          <B>Usuário:</B> a pessoa física com login no Numin, que acessa uma ou mais organizações.
        </li>
        <li>
          <B>Organização:</B> o espaço de trabalho com os dados financeiros de uma empresa. Um mesmo usuário pode
          pertencer a várias organizações.
        </li>
        <li>
          <B>Papéis:</B> administrador, membro e visualizador, que definem o que cada usuário pode fazer em uma
          organização.
        </li>
        <li>
          <B>Dados do Cliente:</B> tudo o que o Cliente e seus usuários inserem no Numin, como lançamentos, contas,
          cartões, contatos, extratos importados e anexos.
        </li>
        <li>
          <B>Assinatura:</B> a contratação paga de um plano, com cobrança mensal ou anual.
        </li>
        <li>
          <B>API pública:</B> a interface que permite a outros sistemas ler e gravar dados no Numin, acessada por
          chaves de API.
        </li>
      </List>
    ),
  },
  {
    id: "servico",
    title: "O serviço",
    body: (
      <>
        <p>
          O Numin é um software oferecido pela internet (SaaS) para organizar o financeiro de empresas. Ele inclui
          contas a pagar e a receber, parcelamento e recorrência, contas bancárias, carteiras e cartões de crédito,
          transferências entre contas, conciliação bancária por importação de extrato, fluxo de caixa, DRE e
          relatórios gerenciais, anexos, centros de custo, multiempresa, equipe com papéis, trilha de auditoria,
          exportação em CSV (listas de lançamentos, fluxo de caixa, DRE e conciliação) e, nos planos que a incluem,
          API pública.
        </p>
        <p>O que o Numin não é e não faz:</p>
        <List>
          <li>
            <B>Não é banco nem instituição de pagamento.</B> Não guarda nem movimenta dinheiro e não inicia pagamentos.
          </li>
          <li>
            <B>Não se conecta à sua conta bancária.</B> A conexão é pelo arquivo OFX que você baixa no seu banco e
            importa no Numin. O Numin nunca pede a senha do seu banco.
          </li>
          <li>
            <B>Não emite nota fiscal nem boleto.</B> A emissão fiscal continua no seu emissor de notas ou com a sua
            contabilidade.
          </li>
          <li>
            <B>Não substitui contador nem consultoria contábil, fiscal ou tributária.</B> Os relatórios são
            gerenciais e não substituem as demonstrações e obrigações contábeis e fiscais da sua empresa.
          </li>
        </List>
        <p>
          O Numin evolui com o tempo: podemos incluir, alterar ou retirar funcionalidades. Não retiraremos uma
          funcionalidade essencial do seu plano sem aviso prévio de pelo menos 30 dias.
        </p>
      </>
    ),
  },
  {
    id: "cadastro",
    title: "Cadastro e conta",
    body: (
      <List>
        <li>Para usar o Numin, você precisa ter 18 anos ou mais e capacidade para contratar.</li>
        <li>
          Os dados do cadastro devem ser verdadeiros, completos e atualizados, incluindo o CNPJ (ou CPF) da
          organização. Você responde pela veracidade do que informar.
        </li>
        <li>
          O login é pessoal e intransferível. Cada pessoa deve ter o seu próprio usuário, e compartilhar um login
          entre várias pessoas não é permitido.
        </li>
        <li>
          Você é responsável por manter a sua senha em sigilo e por tudo o que for feito com o seu login. Se
          suspeitar de uso indevido, troque a senha imediatamente e avise-nos em <Mail to={COMPANY.emailContato} />.
        </li>
        <li>
          O e-mail cadastrado é o nosso canal oficial com você. É por ele que enviamos a redefinição de senha,
          convites e avisos sobre a conta. Mantenha-o atualizado.
        </li>
      </List>
    ),
  },
  {
    id: "equipe",
    title: "Equipe, papéis e convites",
    body: (
      <>
        <p>Cada usuário tem um papel em cada organização:</p>
        <List>
          <li>
            <B>Administrador:</B> faz tudo o que o membro faz e também gerencia a equipe e os papéis, envia convites,
            edita os dados da organização, cria e revoga chaves de API, consulta a trilha de auditoria e pode excluir
            a organização.
          </li>
          <li>
            <B>Membro:</B> cria, edita e exclui lançamentos, contas, contatos e anexos, importa extratos e faz a
            conciliação.
          </li>
          <li>
            <B>Visualizador:</B> apenas consulta os dados, sem alterar nada. É o papel indicado para dar acesso ao
            contador.
          </li>
        </List>
        <p>
          Convites são enviados por e-mail e valem por 7 dias. Ao convidar alguém, o administrador declara ter
          autorização para usar aquele e-mail e para dar a essa pessoa acesso aos dados da organização. O Cliente
          responde pelos atos dos usuários que convida e deve remover o acesso de quem não deve mais tê-lo.
        </p>
        <p>
          Cada plano tem um limite de membros da organização, contados todos os usuários vinculados a ela, qualquer
          que seja o papel. Remover um usuário tira o acesso dele, mas os dados que ele registrou continuam na
          organização.
        </p>
      </>
    ),
  },
  {
    id: "teste-gratis",
    title: "Teste grátis de 7 dias",
    body: (
      <List>
        <li>
          Toda organização nova pode testar o Numin gratuitamente por <B>7 dias</B>, <B>sem cadastrar cartão de
          crédito</B>.
        </li>
        <li>
          Como não pedimos cartão, não há cobrança automática ao fim do teste. Para continuar usando, é preciso
          contratar um plano. Você pode desistir a qualquer momento, sem custo.
        </li>
        <li>
          Se não houver contratação ao fim do teste, o acesso pode ser suspenso. Os dados ficam guardados por 30 dias
          para que você contrate ou os exporte, e depois podem ser excluídos, conforme a{" "}
          <A href="#cancelamento">cláusula de cancelamento</A>.
        </li>
        <li>
          O teste é oferecido uma vez por empresa (CNPJ ou CPF). Podemos encerrá-lo antes do prazo em caso de abuso,
          como a criação repetida de organizações para prolongar o teste.
        </li>
      </List>
    ),
  },
  {
    id: "planos",
    title: "Planos, pagamento e reajuste",
    body: (
      <>
        <H3>Planos</H3>
        <p>Todas as funcionalidades estão em todos os planos. O que muda é o tamanho da equipe e o acesso à API pública:</p>
        <List>
          <li>
            <B>Essencial:</B> até 2 membros.
          </li>
          <li>
            <B>Time:</B> até 5 membros, com API pública.
          </li>
          <li>
            <B>Escala:</B> até 15 membros, com API pública.
          </li>
        </List>
        <p>
          Os preços são os divulgados no site ou informados no momento da contratação, com os tributos incluídos. As
          condições para organizações adicionais são as informadas na contratação.
        </p>
        <H3>Pagamento</H3>
        <List>
          <li>
            A assinatura pode ser mensal ou anual. A anual é paga antecipadamente, com desconto equivalente a 2 meses
            (você paga 10 meses e usa 12).
          </li>
          <li>
            O pagamento é sempre antecipado, por período, pelo meio e pelo processador de pagamentos indicados na
            contratação. Emitimos a nota fiscal referente à assinatura.
          </li>
          <li>
            Para mudar para um plano com limite menor de membros, a organização precisa antes ficar dentro do novo
            limite. As condições de ajuste de valor na mudança de plano são as informadas no momento da mudança.
          </li>
          <li>
            Se um pagamento não for feito, avisaremos por e-mail. Se continuar em aberto por mais de 15 dias após o
            vencimento, o acesso poderá ser suspenso até a regularização. Se a pendência passar de 30 dias, a
            assinatura poderá ser cancelada, com o tratamento dos dados previsto na{" "}
            <A href="#cancelamento">cláusula de cancelamento</A>.
          </li>
        </List>
        <H3>Reajuste</H3>
        <p>
          Os preços podem ser reajustados no máximo uma vez a cada 12 meses, com aviso por e-mail de pelo menos 30
          dias antes da vigência. Se não concordar com o novo preço, você pode cancelar antes que ele passe a valer,
          sem multa.
        </p>
        <H3>Oferta de fundador</H3>
        <List>
          <li>
            As 30 primeiras empresas que contratarem o plano Essencial pela oferta de fundador pagam{" "}
            <B>R$ 49,90 por mês</B>.
          </li>
          <li>
            Esse valor é mantido, sem o reajuste previsto acima, <B>enquanto a assinatura permanecer ativa e sem
            interrupção</B>.
          </li>
          <li>
            O benefício acaba se a assinatura for cancelada, se for suspensa por falta de pagamento ou se a
            organização mudar para outro plano. Nesses casos, valem os preços normais em vigor, e o benefício não
            volta em uma nova contratação.
          </li>
          <li>
            A oferta vale para uma organização por empresa (CNPJ ou CPF), não é transferível e não se acumula com
            outros descontos. As vagas são contadas pela ordem de contratação.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "cancelamento",
    title: "Cancelamento e o que acontece com os dados",
    body: (
      <>
        <List>
          <li>
            Você pode cancelar a assinatura quando quiser, sem multa, pelo próprio sistema, quando essa opção estiver
            disponível, ou pelo e-mail <Mail to={COMPANY.emailContato} />.
          </li>
          <li>
            O acesso continua até o fim do período já pago. Não há devolução proporcional do período em curso, salvo
            quando a lei exigir.
          </li>
          <li>
            <B>Prazo para exportar:</B> depois do fim da assinatura, os dados ficam disponíveis por <B>30 dias</B>. Nesse
            prazo você pode exportar em CSV os lançamentos, o fluxo de caixa, a DRE e a conciliação, e pedir por e-mail
            uma cópia dos demais dados em formato estruturado.
          </li>
          <li>
            Passados os 30 dias, os dados podem ser excluídos definitivamente, o que fazemos em até 90 dias do fim da
            assinatura. As cópias de segurança são substituídas em até 30 dias depois disso. Guardamos por mais tempo
            apenas o que a lei exigir.
          </li>
          <li>
            O administrador também pode excluir a organização a qualquer momento, em Configurações. A exclusão dos
            dados do sistema é imediata, permanente e não pode ser desfeita. Os arquivos dos anexos ficam no provedor
            de armazenamento e são removidos mediante pedido ao e-mail <Mail to={COMPANY.emailPrivacidade} />.
          </li>
        </List>
        <p>
          Recomendamos exportar os seus dados periodicamente, e não só no cancelamento.
        </p>
      </>
    ),
  },
  {
    id: "dados",
    title: "Os dados são do Cliente",
    body: (
      <>
        <p>
          <B>Os Dados do Cliente pertencem ao Cliente.</B> Você nos concede apenas a permissão necessária para prestar
          o serviço: armazenar, processar, fazer cópias de segurança, exibir aos usuários autorizados e enviar aos
          sistemas que você mesmo conectar pela API. Não vendemos os Dados do Cliente e não os usamos para publicidade.
        </p>
        <p>
          Nossa equipe só acessa os Dados do Cliente quando for necessário para suporte que você pedir, para garantir
          a segurança do serviço ou para cumprir obrigação legal.
        </p>
        <p>
          Quanto aos dados pessoais contidos nos Dados do Cliente (por exemplo, de clientes, fornecedores e
          colaboradores cadastrados como contatos), o Cliente é o <B>controlador</B> e o Numin é o <B>operador</B>, nos
          termos da LGPD. O Cliente garante que tem base legal para inserir esses dados, que informa os titulares e
          que não insere dados sensíveis ou desnecessários ao controle financeiro. Quanto aos dados de cadastro e
          de uso da conta, o Numin é o controlador. Os detalhes estão na <PrivacyLink />.
        </p>
      </>
    ),
  },
  {
    id: "uso-aceitavel",
    title: "Uso aceitável e proibições",
    body: (
      <>
        <p>Você concorda em usar o Numin de forma lícita e não:</p>
        <List>
          <li>usá-lo para fraude, lavagem de dinheiro, sonegação ou qualquer atividade ilegal;</li>
          <li>inserir dados de terceiros sem base legal, ou conteúdo ilícito, ofensivo ou que viole direitos de outros;</li>
          <li>enviar vírus, códigos maliciosos ou arquivos que prejudiquem o sistema;</li>
          <li>tentar acessar dados de outras organizações, contas ou áreas restritas do sistema;</li>
          <li>testar a segurança do sistema sem nossa autorização prévia (falhas encontradas devem ser comunicadas a <Mail to={COMPANY.emailContato} />);</li>
          <li>fazer engenharia reversa, copiar ou tentar extrair o código-fonte do Numin;</li>
          <li>acessar o sistema por meios automatizados fora da API pública, ou sobrecarregar a infraestrutura;</li>
          <li>burlar os limites do plano, por exemplo compartilhando um mesmo login entre várias pessoas;</li>
          <li>revender, sublicenciar ou oferecer o Numin a terceiros sem nossa autorização por escrito.</li>
        </List>
      </>
    ),
  },
  {
    id: "api",
    title: "API pública",
    body: (
      <List>
        <li>A API pública está disponível nos planos Time e Escala.</li>
        <li>
          O acesso é feito por chaves de API criadas pelos administradores, cada uma com um nível de permissão e, se
          desejado, uma data de validade. A chave completa é exibida uma única vez, na criação.
        </li>
        <li>
          A chave é uma credencial: guarde-a em sigilo e revogue-a imediatamente se houver suspeita de vazamento.
          Tudo o que for feito com uma chave é atribuído à organização que a criou.
        </li>
        <li>
          O uso da API tem limites de requisições (atualmente, 60 por minuto por chave), que podem ser ajustados para
          proteger o serviço.
        </li>
        <li>
          Ao conectar outro sistema pela API, o Cliente decide quais dados enviar a ele e responde por esse sistema e
          pelo uso que ele fizer dos dados.
        </li>
        <li>
          Podemos evoluir a API. Mudanças que quebrem integrações existentes serão avisadas com pelo menos 30 dias de
          antecedência, salvo quando forem necessárias por segurança ou exigência legal.
        </li>
        <li>Ao mudar para um plano sem API, as chaves de API da organização são desativadas.</li>
      </List>
    ),
  },
  {
    id: "disponibilidade",
    title: "Disponibilidade, manutenção e suporte",
    body: (
      <>
        <p>
          Trabalhamos para manter o Numin disponível e estável, mas não garantimos funcionamento ininterrupto nem livre
          de erros. O serviço depende de internet, de fornecedores de infraestrutura e de outros fatores fora do nosso
          controle.
        </p>
        <List>
          <li>
            Manutenções programadas serão feitas, sempre que possível, em horários de menor uso e com aviso prévio.
          </li>
          <li>Manutenções de emergência, por segurança ou para corrigir falhas, podem ocorrer sem aviso.</li>
          <li>O suporte é prestado por e-mail, em dias úteis.</li>
          <li>Não há garantia de nível de serviço (SLA), salvo se contratada à parte, por escrito.</li>
        </List>
      </>
    ),
  },
  {
    id: "responsabilidade",
    title: "Limitação de responsabilidade",
    body: (
      <>
        <List>
          <li>
            O Numin é uma ferramenta. <B>As decisões financeiras, contábeis, fiscais e de negócio são sempre do
            Cliente</B>, que deve contar com o seu contador ou consultor para questões contábeis, fiscais e tributárias.
          </li>
          <li>
            Os relatórios, a DRE e o fluxo de caixa refletem os dados inseridos e a classificação das categorias
            feita pelo Cliente. Sugestões automáticas do sistema (como a de categoria ou de linha da DRE) devem ser
            conferidas pelo Cliente antes de serem usadas.
          </li>
          <li>
            <B>A conciliação bancária depende do extrato importado.</B> O Numin não confere os dados com o banco:
            se o arquivo OFX estiver incompleto, incorreto ou desatualizado, a conciliação e os saldos também estarão.
          </li>
          <li>
            O Cliente é responsável pela exatidão dos dados que insere e pelo uso que faz dos resultados.
          </li>
        </List>
        <p>Na máxima extensão permitida pela lei, o Numin não responde por:</p>
        <List>
          <li>lucros cessantes, perda de receita ou de oportunidade e outros danos indiretos;</li>
          <li>prejuízos decorrentes de decisões tomadas com base nos dados ou relatórios do sistema;</li>
          <li>erros causados por dados inseridos ou importados incorretamente;</li>
          <li>acessos indevidos causados por falha na guarda de senhas ou chaves de API pelo Cliente ou seus usuários;</li>
          <li>falhas de serviços de terceiros que não estejam sob nosso controle, caso fortuito ou força maior.</li>
        </List>
        <p>
          Em qualquer caso, a responsabilidade total do Numin fica limitada ao valor pago pelo Cliente nos 12 meses
          anteriores ao fato que a originou. Essas limitações não se aplicam a danos causados por dolo ou culpa grave,
          nem afastam responsabilidades que a lei não permita limitar.
        </p>
      </>
    ),
  },
  {
    id: "propriedade-intelectual",
    title: "Propriedade intelectual",
    body: (
      <>
        <p>
          O software, a marca Numin, o logotipo, as telas, os textos, a documentação e a API pertencem ao Numin ou a
          seus licenciantes. Durante a assinatura, concedemos ao Cliente uma licença de uso limitada, não exclusiva,
          intransferível e revogável, apenas para as finalidades destes Termos. Nenhum direito de propriedade é
          transferido.
        </p>
        <p>
          Se você nos enviar sugestões ou comentários, poderemos usá-los para melhorar o Numin, sem obrigação de
          remuneração.
        </p>
      </>
    ),
  },
  {
    id: "suspensao",
    title: "Suspensão e encerramento pelo Numin",
    body: (
      <>
        <p>Podemos suspender ou encerrar o acesso de um usuário ou de uma organização em caso de:</p>
        <List>
          <li>violação destes Termos, em especial das regras de uso aceitável;</li>
          <li>falta de pagamento, conforme a cláusula de <A href="#planos">planos e pagamento</A>;</li>
          <li>risco à segurança do serviço, de outros clientes ou de terceiros;</li>
          <li>suspeita fundada de fraude ou de atividade ilícita;</li>
          <li>ordem judicial ou de autoridade competente.</li>
        </List>
        <p>
          Sempre que possível, avisaremos antes, informaremos o motivo e daremos prazo para correção. Você pode
          contestar pelo e-mail <Mail to={COMPANY.emailContato} />. No encerramento, os dados seguem o previsto na{" "}
          <A href="#cancelamento">cláusula de cancelamento</A>, salvo ordem legal em sentido diferente.
        </p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações destes Termos",
    body: (
      <p>
        Podemos atualizar estes Termos. A data da última atualização fica no topo da página. Mudanças relevantes
        serão avisadas por e-mail ou no sistema com pelo menos 30 dias de antecedência. Se não concordar, você pode
        cancelar a assinatura antes de a mudança entrar em vigor, sem multa. Continuar usando o Numin depois disso
        significa aceitar a nova versão.
      </p>
    ),
  },
  {
    id: "gerais",
    title: "Disposições gerais",
    body: (
      <List>
        <li>Se deixarmos de exigir alguma regra destes Termos, isso não significa renúncia a ela.</li>
        <li>Se alguma cláusula for considerada inválida, as demais continuam valendo.</li>
        <li>
          O Cliente não pode transferir estes Termos a terceiros sem nossa concordância. O Numin pode transferi-los em
          caso de reorganização societária, mantidas as condições para o Cliente.
        </li>
        <li>Estes Termos e a Política de Privacidade formam o acordo completo entre as partes sobre o uso do Numin.</li>
      </List>
    ),
  },
  {
    id: "foro",
    title: "Lei aplicável e foro",
    body: (
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de{" "}
        {COMPANY.foro} para resolver qualquer controvérsia sobre eles, com renúncia a qualquer outro, por mais
        privilegiado que seja, ressalvados os casos em que a lei garanta foro diferente.
      </p>
    ),
  },
  {
    id: "contato",
    title: "Contato",
    body: (
      <>
        <p>Dúvidas sobre estes Termos:</p>
        <div className="rounded-xl bg-nuvem p-5 text-sm leading-relaxed">
          <p className="font-semibold text-ink">{COMPANY.razaoSocial}</p>
          <p>CNPJ {COMPANY.cnpj}</p>
          <p>
            {COMPANY.endereco}, {COMPANY.cidadeUf}
          </p>
          <p className="mt-3">
            E-mail: <Mail to={COMPANY.emailContato} />
          </p>
          <p>
            Privacidade e dados pessoais: <Mail to={COMPANY.emailPrivacidade} />
          </p>
        </div>
      </>
    ),
  },
];

/* ---------- Página ---------- */

export default function TermosPage() {
  return (
    <>
      <div className="container-x">
        <article className="mx-auto max-w-3xl pt-28 pb-20">
          <header>
            <span className="eyebrow">Documentos legais</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">Termos de Uso</h1>
            <p className="mt-4 text-sm text-muted">Última atualização: {LEGAL_LAST_UPDATED}</p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Estas são as regras para usar o {COMPANY.nomeFantasia}: o que oferecemos, o que esperamos de você e o
              que acontece com os seus dados em cada etapa, do teste grátis ao cancelamento.
            </p>
          </header>

          <nav aria-labelledby="sumario-termos" className="mt-8 rounded-2xl border border-slate-200 p-6">
            <p id="sumario-termos" className="font-semibold text-ink">
              Sumário
            </p>
            <ol className="mt-3 space-y-1.5 text-sm sm:columns-2 sm:gap-8">
              {SECTIONS.map((s, i) => (
                <li key={s.id} className="break-inside-avoid">
                  <a href={`#${s.id}`} className="text-ink-700 hover:text-brand-700 hover:underline">
                    <span className="tabnum mr-1.5 text-brand-600">{i + 1}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {SECTIONS.map((s, i) => (
            <Section key={s.id} id={s.id} n={i + 1} title={s.title}>
              {s.body}
            </Section>
          ))}
        </article>
      </div>
      <div className="bg-brand-hero">
        <Footer />
      </div>
    </>
  );
}
