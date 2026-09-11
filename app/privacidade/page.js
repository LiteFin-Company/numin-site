import Link from "next/link";
import Footer from "@/components/Footer";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/lib/empresa";

export const metadata = {
  title: "Política de Privacidade",
  description:
    "Como o Numin trata dados pessoais, conforme a LGPD: quais dados, para quê, com quem compartilhamos, por quanto tempo guardamos e como exercer seus direitos.",
  alternates: { canonical: "/privacidade" },
};

/* ---------- Peças de texto ---------- */

function Mail({ to }) {
  return (
    <a
      href={`mailto:${to}`}
      className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
    >
      {to}
    </a>
  );
}

function A({ href, children }) {
  return (
    <a href={href} className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800">
      {children}
    </a>
  );
}

function H3({ children }) {
  return <h3 className="pt-4 text-lg font-semibold text-ink">{children}</h3>;
}

function List({ children }) {
  return <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">{children}</ul>;
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

function InfoCard({ title, rows }) {
  return (
    <div className="rounded-xl border border-slate-200 p-5">
      <p className="font-semibold text-ink">{title}</p>
      <dl className="mt-3 space-y-2 text-sm leading-relaxed">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-3">
            <dt className="font-medium text-muted">{label}</dt>
            <dd className="text-ink-700">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ---------- Conteúdo ---------- */

const BASES_LEGAIS = [
  {
    title: "Criar e manter sua conta, autenticar o acesso e prestar o serviço contratado",
    dados: "Nome, e-mail, senha (guardada só como hash), organizações às quais você pertence e seu papel em cada uma, dados cadastrais da organização.",
    base: "Execução de contrato ou de procedimentos preliminares a ele (art. 7º, V).",
  },
  {
    title: "Identificar a empresa contratante, cobrar a assinatura e cumprir obrigações fiscais",
    dados: "Razão social, nome fantasia, CNPJ ou CPF, endereço, e-mail, telefone e dados de cobrança da assinatura.",
    base: "Execução de contrato (art. 7º, V) e cumprimento de obrigação legal ou regulatória (art. 7º, II).",
  },
  {
    title: "Enviar e-mails de serviço",
    dados: "E-mail do destinatário, nome da organização, nome de quem enviou o convite e o link de acesso. Inclui redefinição de senha, convite para uma organização, aviso de inclusão em organização e comunicados sobre a conta, os planos e estes documentos.",
    base: "Execução de contrato (art. 7º, V). Para a pessoa convidada que ainda não tem conta, legítimo interesse (art. 7º, IX) em entregar o convite feito pelo administrador da organização.",
  },
  {
    title: "Proteger as contas e o serviço",
    dados: "Endereço IP, data e hora, ações realizadas e identificação do usuário. Usados para limitar tentativas de login, cadastro e recuperação de senha, investigar incidentes e prevenir fraudes.",
    base: "Legítimo interesse (art. 7º, IX), sempre limitado ao necessário para a segurança.",
  },
  {
    title: "Guardar registros de acesso à aplicação",
    dados: "Endereço IP e data e hora de acesso.",
    base: "Cumprimento de obrigação legal (art. 7º, II): o art. 15 do Marco Civil da Internet (Lei nº 12.965/2014) exige a guarda desses registros por 6 meses.",
  },
  {
    title: "Responder a contatos e prestar suporte",
    dados: "Nome, e-mail, empresa e o conteúdo da mensagem que você nos enviar.",
    base: "Procedimentos preliminares ou execução de contrato (art. 7º, V) e legítimo interesse (art. 7º, IX) em responder a quem nos procura.",
  },
  {
    title: "Defender direitos",
    dados: "Os dados estritamente necessários ao caso.",
    base: "Exercício regular de direitos em processo judicial, administrativo ou arbitral (art. 7º, VI).",
  },
  {
    title: "Tratar os dados financeiros e de terceiros que o cliente insere no sistema",
    dados: "Lançamentos, contas, cartões, contatos, extratos, anexos e demais registros descritos na seção “Dados que o cliente insere no sistema”.",
    base: "Definida pelo cliente, que é o controlador desses dados. O Numin atua como operador e trata esses dados apenas conforme as instruções do cliente (art. 39).",
  },
];

const SUBOPERADORES = [
  {
    title: "Render",
    rows: [
      ["O que faz", "Hospeda a API, o banco de dados PostgreSQL e a aplicação web (app.numin.com.br)."],
      ["Dados", "Todos os dados do sistema: conta, organização, dados inseridos pelo cliente e registros técnicos."],
      ["Onde", "Estados Unidos."],
    ],
  },
  {
    title: "Cloudinary",
    rows: [
      ["O que faz", "Armazena os arquivos anexados aos lançamentos (notas, comprovantes)."],
      ["Dados", "O arquivo, seu nome original e o identificador da organização."],
      ["Onde", "Estados Unidos."],
    ],
  },
  {
    title: "Resend",
    rows: [
      ["O que faz", "Envia os e-mails de serviço (redefinição de senha, convites e avisos)."],
      ["Dados", "E-mail do destinatário e o conteúdo da mensagem (nome da organização, nome de quem convidou e link de acesso)."],
      ["Onde", "Estados Unidos."],
    ],
  },
  {
    title: "Vercel",
    rows: [
      ["O que faz", "Hospeda este site institucional (numin.com.br)."],
      ["Dados", "Dados técnicos da visita necessários para entregar as páginas: endereço IP, navegador e página acessada."],
      ["Onde", "Estados Unidos e rede global de distribuição."],
    ],
  },
  {
    title: "Google Fonts e cdnjs (Cloudflare)",
    rows: [
      ["O que faz", "Fornecem a fonte tipográfica e os ícones que o navegador baixa ao abrir o sistema."],
      ["Dados", "Endereço IP e informações do navegador. Nenhum dado da sua conta ou da sua empresa é enviado."],
      ["Onde", "Estados Unidos e rede global de distribuição."],
    ],
  },
];

const SECTIONS = [
  {
    id: "quem-somos",
    title: "Quem somos e como falar conosco",
    body: (
      <>
        <p>
          O Numin é operado por <strong className="text-ink">{COMPANY.razaoSocial}</strong>, inscrita no CNPJ
          sob o nº {COMPANY.cnpj}, com sede em {COMPANY.endereco}, {COMPANY.cidadeUf} (“Numin”, “nós”).
        </p>
        <p>
          O encarregado pelo tratamento de dados pessoais (DPO) é <strong className="text-ink">{COMPANY.encarregado}</strong>.
          Para qualquer assunto sobre privacidade e proteção de dados, escreva para{" "}
          <Mail to={COMPANY.emailPrivacidade} />. Para os demais assuntos, use <Mail to={COMPANY.emailContato} />.
        </p>
        <p>
          Esta Política vale para o site institucional (numin.com.br), para o sistema (app.numin.com.br) e para a
          API pública (api.numin.com.br). Ela deve ser lida junto com os{" "}
          <Link href="/termos" className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800">
            Termos de Uso
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "controlador-operador",
    title: "Controlador e operador: os dois papéis do Numin",
    body: (
      <>
        <p>A LGPD distingue quem decide sobre o tratamento (controlador) de quem trata em nome de outro (operador). O Numin tem os dois papéis, conforme o dado:</p>
        <H3>Como controlador</H3>
        <p>
          Decidimos como tratar os dados necessários para oferecer e administrar o serviço: o cadastro e a conta de
          cada usuário, os dados cadastrais da organização contratante, os dados de cobrança, os registros de acesso
          e segurança, as mensagens que você nos envia e os dados técnicos de visita ao site.
        </p>
        <H3>Como operador</H3>
        <p>
          Os dados financeiros e operacionais que o cliente insere no sistema pertencem ao cliente, que é o seu
          controlador. Isso inclui os lançamentos, as contas e os cartões, os extratos importados, os anexos e os
          cadastros de clientes, fornecedores e demais contatos, que muitas vezes são pessoas físicas. Tratamos esses
          dados apenas para prestar o serviço, conforme as instruções do cliente e os Termos de Uso. Não os usamos
          para finalidades próprias, não os vendemos e não os usamos para publicidade.
        </p>
        <p>
          Cabe ao cliente, como controlador, ter uma base legal para inserir esses dados, informar os titulares e
          atender aos pedidos deles. Se um titular nos procurar diretamente sobre esses dados, encaminharemos o pedido
          ao cliente e o ajudaremos a responder.
        </p>
      </>
    ),
  },
  {
    id: "dados-conta",
    title: "Dados que coletamos para a conta e a organização",
    body: (
      <>
        <H3>Cadastro do usuário</H3>
        <List>
          <li>Nome e e-mail, informados no cadastro ou ao aceitar um convite. Você pode alterá-los no seu perfil.</li>
          <li>
            Senha. Guardamos apenas o seu hash (bcrypt), nunca a senha em si. Nem a nossa equipe consegue lê-la.
          </li>
          <li>
            Pedidos de redefinição de senha. O link enviado por e-mail vale por 1 hora, e guardamos só uma versão
            cifrada (hash) do código.
          </li>
          <li>As organizações a que você pertence e o seu papel em cada uma (administrador, membro ou visualizador).</li>
        </List>
        <H3>Cadastro da organização</H3>
        <List>
          <li>
            Nome ou razão social, CNPJ (ou CPF, quando a organização é de pessoa física) e segmento de atuação,
            pedidos no cadastro.
          </li>
          <li>Nome fantasia, e-mail, telefone e endereço, opcionais e editáveis pelo administrador.</li>
        </List>
        <H3>Convites</H3>
        <p>
          Quando um administrador convida alguém, registramos o e-mail convidado, o papel oferecido, quem convidou e
          a situação do convite. O convite vale por 7 dias, e o código do link é guardado apenas como hash.
        </p>
        <H3>Registros de uso e segurança</H3>
        <List>
          <li>
            Trilha de auditoria: para cada criação, alteração ou exclusão, registramos o usuário, a ação, o registro
            afetado, os dados alterados, o endereço IP e a data e hora. Só administradores da organização veem essa
            trilha.
          </li>
          <li>Endereço IP das requisições, usado para limitar tentativas de login, cadastro e recuperação de senha.</li>
          <li>Registros técnicos do servidor (data e hora, endereço acessado, erros), usados para operar e corrigir o serviço.</li>
          <li>
            Chaves de API: nome, prefixo, nível de permissão, validade e data do último uso. A chave completa é
            mostrada uma única vez, na criação, e depois guardamos apenas o seu hash.
          </li>
        </List>
        <H3>Cobrança da assinatura</H3>
        <p>
          Os dados necessários para cobrar a assinatura são tratados por um processador de pagamentos, informado no
          momento da contratação. O Numin não guarda o número completo nem o código de segurança do seu cartão de
          crédito.
        </p>
        <H3>Contato e suporte</H3>
        <p>
          O formulário de contato do site não envia nem armazena nada: ele só abre o seu programa de e-mail com a
          mensagem preenchida. Se você enviar essa mensagem, ou escrever diretamente para nós, trataremos o seu nome,
          e-mail, empresa e o conteúdo da mensagem para responder.
        </p>
      </>
    ),
  },
  {
    id: "dados-cliente",
    title: "Dados que o cliente insere no sistema",
    body: (
      <>
        <p>
          Estes são os dados que tratamos como operador, em nome do cliente (veja{" "}
          <A href="#controlador-operador">Controlador e operador</A>):
        </p>
        <List>
          <li>
            <strong className="text-ink">Contas e carteiras:</strong> nome, banco, agência, número da conta, tipo,
            saldo inicial e chave PIX.
          </li>
          <li>
            <strong className="text-ink">Cartões de crédito:</strong> bandeira, últimos 4 dígitos, limite e dias de
            fechamento e vencimento. O sistema não pede, e não deve receber, o número completo, o código de
            segurança nem a senha do cartão.
          </li>
          <li>
            <strong className="text-ink">Lançamentos:</strong> receitas, despesas, pagamentos e recebimentos,
            transferências, créditos de cartão (estorno, reembolso, chargeback e cashback), parcelamentos,
            categorias, centros de custo e planejamento de fluxo de caixa, com descrições, valores, datas, status,
            responsável, número de nota fiscal e observações.
          </li>
          <li>
            <strong className="text-ink">Contatos (clientes, fornecedores e outros):</strong> nome ou razão social,
            nome fantasia, CPF ou CNPJ, e-mail, telefone, endereço, banco, agência, conta, chave PIX e observações.
          </li>
          <li>
            <strong className="text-ink">Extratos bancários:</strong> o arquivo OFX que você baixa no seu banco e
            importa no Numin. Lemos o arquivo e guardamos apenas as transações (data, descrição, valor e o
            identificador da transação) e o saldo informado. O arquivo em si não é armazenado.{" "}
            <strong className="text-ink">O Numin nunca pede a senha do seu banco</strong> e não se conecta à sua
            conta bancária.
          </li>
          <li>
            <strong className="text-ink">Anexos:</strong> notas e comprovantes em PDF, JPG, PNG ou WebP, de até 10 MB
            cada, que podem conter dados pessoais de terceiros.
          </li>
        </List>
        <p>
          Campos de texto livre (descrição, observações) e anexos aceitam qualquer conteúdo. Pedimos que o cliente
          não insira dados pessoais sensíveis (como dados de saúde) nem dados que não sejam necessários ao controle
          financeiro.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Para que usamos os dados e com qual base legal",
    body: (
      <>
        <p>
          Cada tratamento tem uma finalidade definida e uma base legal do art. 7º da LGPD. Não usamos o consentimento
          como base para nenhum dos tratamentos abaixo, e não tomamos decisões automatizadas que afetem os seus
          interesses.
        </p>
        <div className="space-y-3 pt-2">
          {BASES_LEGAIS.map((b) => (
            <InfoCard key={b.title} title={b.title} rows={[["Dados", b.dados], ["Base legal", b.base]]} />
          ))}
        </div>
        <p>
          Hoje o Numin não envia e-mails de marketing. Se passar a enviar, você poderá cancelar o recebimento a
          qualquer momento, pelo próprio e-mail.
        </p>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "Com quem compartilhamos",
    body: (
      <>
        <p>
          <strong className="text-ink">Não vendemos nem alugamos dados pessoais.</strong> Compartilhamos dados apenas
          com os fornecedores que operam a infraestrutura do Numin (suboperadores), na medida necessária para o
          serviço funcionar:
        </p>
        <div className="space-y-3 pt-2">
          {SUBOPERADORES.map((s) => (
            <InfoCard key={s.title} title={s.title} rows={s.rows} />
          ))}
        </div>
        <p>Além deles, os dados podem ser acessados ou compartilhados:</p>
        <List>
          <li>
            Com as pessoas que o próprio cliente autoriza: membros e visualizadores convidados para a organização
            (por exemplo, o contador) veem os dados dela conforme o papel que receberam.
          </li>
          <li>
            Com os sistemas que o cliente conecta pela API pública, usando as chaves de API que ele mesmo cria. Esse
            envio é decidido e controlado pelo cliente.
          </li>
          <li>Com o processador de pagamentos da assinatura, apenas os dados necessários para a cobrança.</li>
          <li>
            Com autoridades públicas, quando houver obrigação legal ou ordem judicial, limitado ao que for exigido.
          </li>
          <li>
            Em caso de reorganização societária (fusão, aquisição ou venda de ativos), com quem vier a operar o
            Numin, que ficará obrigado por esta Política.
          </li>
        </List>
        <p>
          Os suboperadores só podem usar os dados para prestar o serviço ao Numin e estão sujeitos a obrigações
          contratuais de confidencialidade e segurança.
        </p>
      </>
    ),
  },
  {
    id: "transferencia-internacional",
    title: "Transferência internacional de dados",
    body: (
      <>
        <p>
          Os fornecedores listados em <A href="#compartilhamento">Com quem compartilhamos</A> guardam e processam dados
          fora do Brasil, principalmente nos Estados Unidos. Por isso, os dados tratados no Numin são objeto de
          transferência internacional.
        </p>
        <p>
          Essa transferência é feita com base nas hipóteses do art. 33 da LGPD, em especial por meio de cláusulas-padrão
          contratuais aprovadas pela Autoridade Nacional de Proteção de Dados (Resolução CD/ANPD nº 19/2024) ou de
          outro mecanismo que a lei admita, e com fornecedores que adotam medidas de segurança compatíveis com as
          descritas nesta Política.
        </p>
      </>
    ),
  },
  {
    id: "retencao",
    title: "Por quanto tempo guardamos e como excluímos",
    body: (
      <>
        <List>
          <li>
            <strong className="text-ink">Conta e organização:</strong> enquanto a conta existir e a assinatura estiver
            ativa.
          </li>
          <li>
            <strong className="text-ink">Lançamentos excluídos:</strong> receitas, despesas, transferências e créditos
            de cartão excluídos deixam de aparecer no sistema, mas continuam guardados até a exclusão da organização,
            para manter o histórico e a trilha de auditoria consistentes.
          </li>
          <li>
            <strong className="text-ink">Após o cancelamento ou o fim do teste grátis:</strong> os dados ficam
            disponíveis por 30 dias para exportação. Depois disso, podem ser excluídos definitivamente, o que fazemos
            em até 90 dias contados do fim da assinatura ou do teste.
          </li>
          <li>
            <strong className="text-ink">Cópias de segurança (backups):</strong> podem manter os dados por até 30 dias
            depois da exclusão, até serem substituídas. Não são usadas para nenhuma outra finalidade.
          </li>
          <li>
            <strong className="text-ink">Registros de acesso:</strong> 6 meses, conforme o Marco Civil da Internet, ou
            mais, se houver ordem de autoridade.
          </li>
          <li>
            <strong className="text-ink">Dados de cobrança e fiscais da assinatura:</strong> pelo prazo exigido pela
            legislação fiscal e para defesa de direitos (em regra, 5 anos).
          </li>
          <li>
            <strong className="text-ink">Links de redefinição de senha e convites:</strong> expiram em 1 hora e 7 dias,
            respectivamente.
          </li>
          <li>
            <strong className="text-ink">Mensagens de contato e suporte:</strong> pelo tempo necessário para o
            atendimento e para eventual defesa de direitos.
          </li>
        </List>
        <H3>Exclusão pelo próprio cliente</H3>
        <p>
          O administrador pode excluir uma organização a qualquer momento, em Configurações, confirmando o nome dela.
          A exclusão é permanente e remove do banco de dados os lançamentos, pagamentos, transferências, contas e
          cartões, contatos, extratos importados, registros de anexos, categorias, centros de custo, planejamento de
          fluxo de caixa, chaves de API, convites, trilha de auditoria e os vínculos de todos os membros.
        </p>
        <p>
          Os arquivos dos anexos ficam guardados no provedor de armazenamento (veja{" "}
          <A href="#compartilhamento">Com quem compartilhamos</A>) e não são apagados automaticamente com a
          organização. Para removê-los, peça pelo e-mail <Mail to={COMPANY.emailPrivacidade} />. Um anexo excluído
          individualmente no sistema, em um lançamento ainda existente, é apagado também do provedor de armazenamento.
        </p>
        <p>
          Para excluir a última organização da sua conta ou a sua própria conta de usuário, peça pelo e-mail{" "}
          <Mail to={COMPANY.emailPrivacidade} />. Antes de excluir, recomendamos exportar o que precisar (veja{" "}
          <A href="#direitos">Seus direitos</A>).
        </p>
        <p>
          Guardaremos por mais tempo apenas o que a lei exigir ou o que for necessário para defender direitos, e só
          pelo prazo necessário.
        </p>
      </>
    ),
  },
  {
    id: "direitos",
    title: "Seus direitos",
    body: (
      <>
        <p>Como titular de dados pessoais, você tem direito, nos termos do art. 18 da LGPD, a:</p>
        <List>
          <li>confirmar se tratamos dados seus;</li>
          <li>acessar os seus dados;</li>
          <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;</li>
          <li>pedir a portabilidade dos dados a outro fornecedor;</li>
          <li>pedir a eliminação dos dados tratados com base no consentimento, quando for o caso;</li>
          <li>saber com quem compartilhamos os seus dados;</li>
          <li>ser informado sobre a possibilidade de não consentir e sobre as consequências disso, quando o consentimento for a base legal;</li>
          <li>revogar o consentimento, quando for o caso;</li>
          <li>opor-se a um tratamento feito com base em outra hipótese legal, se ele descumprir a LGPD;</li>
          <li>peticionar à Autoridade Nacional de Proteção de Dados (ANPD).</li>
        </List>
        <H3>Como exercer</H3>
        <p>Parte desses direitos você exerce direto no sistema:</p>
        <List>
          <li>alterar nome e e-mail no seu perfil e trocar a senha;</li>
          <li>alterar os dados da organização (administradores);</li>
          <li>
            exportar em CSV a lista de lançamentos, o fluxo de caixa, a DRE e a conciliação bancária;
          </li>
          <li>excluir lançamentos, contatos, anexos e a própria organização.</li>
        </List>
        <p>
          Para os demais pedidos, escreva para <Mail to={COMPANY.emailPrivacidade} />. Podemos pedir informações para
          confirmar a sua identidade antes de atender, para proteger os seus dados. Respondemos em até 15 dias.
        </p>
        <p>
          Se o pedido for sobre dados que um cliente do Numin inseriu no sistema (por exemplo, se você é cliente ou
          fornecedor de uma empresa que usa o Numin), o controlador é essa empresa. Encaminharemos o pedido a ela e a
          ajudaremos a responder.
        </p>
      </>
    ),
  },
  {
    id: "seguranca",
    title: "Segurança",
    body: (
      <>
        <p>Adotamos medidas técnicas e administrativas para proteger os dados, entre elas:</p>
        <List>
          <li>tráfego criptografado por HTTPS/TLS em todo o sistema;</li>
          <li>senhas guardadas só como hash (bcrypt); códigos de convite, de redefinição de senha e chaves de API guardados só como hash;</li>
          <li>sessões com prazo de validade, encerradas em todos os dispositivos quando a senha é trocada ou redefinida;</li>
          <li>limite de tentativas de login, cadastro e recuperação de senha;</li>
          <li>controle de acesso por papel, verificado no servidor, e separação dos dados de cada organização;</li>
          <li>verificação do tipo real dos arquivos anexados;</li>
          <li>trilha de auditoria das ações da equipe.</li>
        </List>
        <p>
          Nenhum sistema é totalmente imune a incidentes. Se ocorrer um incidente de segurança que possa causar risco
          ou dano relevante aos titulares, comunicaremos a ANPD e os afetados, conforme o art. 48 da LGPD. Quando
          envolver dados que tratamos como operador, avisaremos o cliente sem demora para que ele possa cumprir as
          suas obrigações.
        </p>
        <p>
          Você também faz parte da segurança: use uma senha forte e só sua, não compartilhe o acesso, saia do sistema
          em computadores compartilhados e revogue chaves de API que não usa mais.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies e armazenamento no navegador",
    body: (
      <>
        <H3>Site institucional</H3>
        <p>
          Este site não usa cookies e não usa ferramentas de análise de audiência, de publicidade ou de rastreamento.
        </p>
        <H3>Sistema</H3>
        <p>
          O sistema não usa cookies. Para funcionar, ele guarda no armazenamento local do navegador (localStorage e
          sessionStorage) apenas o necessário:
        </p>
        <List>
          <li>
            <strong className="text-ink">Sessão:</strong> o código de acesso (token) e dados básicos para exibir a
            tela (seu nome, e-mail, organização atual, seu papel e a lista das suas organizações). Isso mantém você
            conectado ao recarregar a página e é apagado quando você clica em “Sair”. A sessão expira sozinha em 7 dias.
          </li>
          <li>
            <strong className="text-ink">Preferência de exibição:</strong> se você escolheu ocultar os valores no
            dashboard.
          </li>
          <li>
            <strong className="text-ink">Convite em andamento:</strong> o código do convite, guardado só enquanto a
            aba estiver aberta, para não se perder durante o cadastro.
          </li>
        </List>
        <p>
          Esses dados ficam só no seu navegador e são estritamente necessários para o serviço funcionar. Ao abrir o
          sistema, o navegador também baixa a fonte tipográfica e os ícones de Google Fonts e cdnjs (veja{" "}
          <A href="#compartilhamento">Com quem compartilhamos</A>).
        </p>
      </>
    ),
  },
  {
    id: "menores",
    title: "Crianças e adolescentes",
    body: (
      <>
        <p>
          O Numin é um serviço para empresas, destinado a maiores de 18 anos. Não coletamos intencionalmente dados de
          crianças ou adolescentes como usuários. Se soubermos que isso aconteceu, excluiremos os dados.
        </p>
        <p>
          Se o cliente cadastrar no sistema dados de uma criança ou adolescente (por exemplo, como contato), ele é o
          responsável, como controlador, por fazê-lo no melhor interesse do titular e conforme o art. 14 da LGPD.
        </p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações desta Política",
    body: (
      <p>
        Podemos atualizar esta Política para refletir mudanças no serviço, nos fornecedores ou na lei. A data da
        última atualização fica no topo da página. Quando a mudança for relevante, avisaremos por e-mail ou por aviso
        no sistema com antecedência razoável antes de ela entrar em vigor.
      </p>
    ),
  },
  {
    id: "contato",
    title: "Contato",
    body: (
      <>
        <p>Dúvidas, pedidos ou reclamações sobre privacidade:</p>
        <div className="rounded-xl bg-nuvem p-5 text-sm leading-relaxed">
          <p className="font-semibold text-ink">{COMPANY.razaoSocial}</p>
          <p>CNPJ {COMPANY.cnpj}</p>
          <p>
            {COMPANY.endereco}, {COMPANY.cidadeUf}
          </p>
          <p className="mt-3">Encarregado (DPO): {COMPANY.encarregado}</p>
          <p>
            E-mail: <Mail to={COMPANY.emailPrivacidade} />
          </p>
        </div>
        <p>
          Se não ficar satisfeito com a nossa resposta, você pode recorrer à Autoridade Nacional de Proteção de Dados
          (ANPD), em gov.br/anpd.
        </p>
      </>
    ),
  },
];

/* ---------- Página ---------- */

export default function PrivacidadePage() {
  return (
    <>
      <div className="container-x">
        <article className="mx-auto max-w-3xl pt-28 pb-20">
          <header>
            <span className="eyebrow">Documentos legais</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">Política de Privacidade</h1>
            <p className="mt-4 text-sm text-muted">Última atualização: {LEGAL_LAST_UPDATED}</p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Esta Política explica como o {COMPANY.nomeFantasia} trata dados pessoais, conforme a Lei Geral de
              Proteção de Dados Pessoais (Lei nº 13.709/2018, “LGPD”): quais dados, de onde vêm, para que usamos, com
              quem compartilhamos, por quanto tempo guardamos e como você exerce os seus direitos.
            </p>
          </header>

          <div className="mt-8 rounded-2xl bg-nuvem p-6">
            <p className="font-semibold text-ink">Em resumo</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-ink-700 marker:text-brand-400">
              <li>Os dados financeiros que a sua empresa coloca no Numin são dela. Nós os tratamos só para prestar o serviço.</li>
              <li>Não vendemos dados e não os usamos para publicidade.</li>
              <li>A conexão com o banco é pelo arquivo OFX que você importa. Nunca pedimos a senha do seu banco.</li>
              <li>O site não usa cookies nem rastreamento. O sistema guarda no navegador só o necessário para manter você conectado.</li>
              <li>Você pode exportar os seus dados e excluir a sua organização.</li>
            </ul>
            <p className="mt-3 text-sm text-muted">Este resumo não substitui o texto completo abaixo.</p>
          </div>

          <nav aria-labelledby="sumario-privacidade" className="mt-8 rounded-2xl border border-slate-200 p-6">
            <p id="sumario-privacidade" className="font-semibold text-ink">
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
