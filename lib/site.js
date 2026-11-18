import {
  // Itens que existem no menu do sistema usam o mesmo ícone de lá (app/src/App.jsx).
  LayoutGrid, BookUser, Wallet, CreditCard, RefreshCcw, LineChart,
  Users, Receipt, FileBarChart, ArrowLeftRight, PieChart, ShieldCheck,
  Landmark, KeyRound, ScrollText, Scale, FileUp, Building2, Coins, FileText,
} from "lucide-react";

const TRIAL_DAYS = 7;

export const SITE = {
  name: "Numin",
  url: "https://www.numin.com.br",
  // Guia de marca v6: a tagline acompanha a logo; a assinatura de campanha é do site.
  subtitle: "Controle financeiro inteligente",
  tagline: "Seus números, inteligentes.",
  appUrl: "https://app.numin.com.br",
  // ?cadastro abre o app direto na tela de criar conta
  signupUrl: "https://app.numin.com.br/?cadastro",
  email: "contato@numin.com.br",
  trialDays: TRIAL_DAYS,
  // Preencha com o ID do Formspree (formspree.io/f/XXXX -> "XXXX"); vazio = usa mailto
  formspree: "",
  // Link de agendamento da conversa com os fundadores (ex.: Cal.com, Google
  // Agenda). Vazio = nenhum botão "Conversar com os fundadores" aparece.
  meetingUrl: "",
};

// Linha de confiança, repetida sob os botões de criar conta.
export const TRUST_LINE = `${TRIAL_DAYS} dias grátis · sem cartão · cancele quando quiser, sem multa`;

// Quem faz o Numin (seção da home). A seção só aparece com pelo menos um item.
// Forma de cada item:
//   {
//     name: "Nome Sobrenome",
//     role: "Cofundador, produto",           // papel na empresa
//     photo: "/fundadores/nome.webp",        // arquivo em public/, quadrado
//     bio: "Um parágrafo curto, em primeira pessoa ou terceira.",
//   }
// Não preencha com nada inventado: nomes, fotos e textos vêm do Rafael.
export const FOUNDERS = [];

// Oferta Parceiros Numin (early adopter) — limitada: grátis até uma data e depois preço fixo para sempre.
// As 10 vagas são reais (decisão do Rafael, 18/11/2026).
export const FOUNDER_OFFER = {
  name: "Parceiros Numin",
  plan: "Profissional",
  freeUntil: "31/12/2026",
  paidFrom: "jan/2027",
  price: "R$ 49",
  period: "/mês",
  original: "R$ 189",
  slots: 10,
  cta: "Quero ser parceiro",
  // O que o parceiro ganha e o que pedimos em troca (seção #parceiros).
  gains: [
    { title: "Implantação feita por nós", desc: "A equipe do Numin faz a configuração inicial da sua empresa com você." },
    { title: "Canal direto com os fundadores", desc: "Dúvida, ideia ou problema vai direto para quem decide o que o Numin faz." },
    { title: "Preço travado", desc: "" }, // texto montado com freeUntil, price e paidFrom
  ],
  ask: "Em troca, pedimos feedbacks de melhoria: o que falta, o que atrapalha e o que poderia ser mais simples.",
};

// Segurança (confiança sem prova social) — todas afirmações reais do produto
// Integração direta pela API oficial do banco (o app decide quem é integrável
// em frontend/src/components/BankIntegrationActions.jsx). Logos copiados de
// frontend/public/banks (nome do arquivo lá = ISPB).
export const BANK_INTEGRATIONS = [
  { name: "Banco Inter", logo: "/bancos/inter.svg" },
  { name: "Sicoob", logo: "/bancos/sicoob.svg" },
  { name: "Banco do Brasil", logo: "/bancos/banco-do-brasil.svg" },
];
export const OFX_FALLBACK = {
  icon: FileUp,
  name: "Qualquer outro banco",
  desc: "Importe o extrato OFX, que todo banco disponibiliza.",
};

// Cada item é um fato do produto, conferido no código do app (backend e
// frontend) em 18/11/2026. Não acrescente hospedagem, backup, certificação ou
// teste de invasão sem conferir antes. Mudou o sistema, mude aqui.
export const SECURITY = [
  { icon: Coins, title: "Cada centavo exato", short: "Valores calculados em centavos inteiros, sem arredondamento perdido na soma." },
  { icon: ScrollText, title: "Toda mudança registrada", short: "Pagamentos, faturas, conciliação e lançamentos ficam na auditoria com o valor de antes e o de depois, quem fez e quando." },
  { icon: Building2, title: "Empresas isoladas", short: "Os dados de cada empresa ficam separados dos de qualquer outra." },
  { icon: Landmark, title: "Sem a senha do seu banco", short: "Conexão pela API oficial do banco ou pelo extrato OFX. O Numin nunca pede a senha do internet banking." },
  { icon: Users, title: "Cada pessoa no seu papel", short: "Administrador, membro ou visualizador. O contador entra como visualizador: vê tudo e não altera nada." },
  { icon: KeyRound, title: "Acesso protegido", short: "Senhas guardadas em hash, e-mail confirmado no cadastro e HTTPS em todo o sistema." },
  { icon: Scale, title: "LGPD", short: "Política de privacidade pública e um canal direto para exercer seus direitos.", href: "/privacidade" },
];

// Links com "/" na frente para funcionarem também fora da home.
export const NAV = [
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Integrações", href: "/#integracoes" },
  { label: "Segurança", href: "/#seguranca" },
  { label: "Planos", href: "/#precos" },
  { label: "Conteúdo", href: "/conteudo" },
];

// Páginas de conteúdo (SEO) e documentos legais — rodapé e sitemap.
export const CONTENT_PAGES = [
  { label: "Todos os conteúdos", href: "/conteudo" },
  { label: "Conciliação bancária", href: "/conciliacao-bancaria" },
  { label: "Fluxo de caixa", href: "/fluxo-de-caixa" },
  { label: "DRE", href: "/dre" },
];

// Coluna "Produto" do rodapé: âncoras das seções da home.
export const FOOTER_PRODUCT = [
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Integrações bancárias", href: "/#integracoes" },
  { label: "Segurança", href: "/seguranca" },
  { label: "Parceiros Numin", href: "/#parceiros" },
  { label: "Planos e preços", href: "/#precos" },
  { label: "Novidades", href: "/novidades" },
];

export const LEGAL_PAGES = [
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Privacidade", href: "/privacidade" },
];

// Produto (seção #funcionalidades da home): quatro blocos com o vídeo da tela
// (public/videos/*, gravados no sistema com dados fictícios) e o resultado
// para quem usa. Os vídeos tocam só com o bloco na tela e sem "reduzir movimento".
export const PRODUCT_BLOCKS = [
  {
    icon: Receipt,
    label: "Contas a pagar e a receber",
    video: "/videos/receitas",
    alt: "Vídeo: cadastro de uma receita parcelada no Numin, que aparece na lista do mês com vencimento e status",
    title: "Nada vence sem você saber",
    desc: "Despesas e receitas com vencimento, categoria e contato. Você vê na hora o que está em aberto, o que atrasou e o que já foi pago.",
    points: ["Baixa total ou parcial", "Parcelamento e recorrência", "Recibo de cada recebimento em PDF"],
  },
  {
    icon: RefreshCcw,
    label: "Conciliação bancária",
    video: "/videos/conciliacao",
    alt: "Vídeo: conciliação do extrato no Numin, confirmando as sugestões e criando a tarifa bancária até o mês ficar 100% conciliado",
    title: "O extrato confere com o que foi lançado",
    desc: "O extrato chega pelo banco ou por OFX. O Numin sugere a correspondência de cada linha, você confirma e cria o que faltou direto do extrato.",
    points: ["Sugestão de correspondência", "Uma linha do banco para vários lançamentos", "Aviso quando o saldo do extrato muda"],
  },
  {
    icon: LineChart,
    label: "Fluxo de caixa",
    video: "/videos/fluxo",
    alt: "Vídeo: fluxo de caixa do Numin com receitas e despesas por mês e o previsto dos próximos meses",
    title: "O caixa dos próximos meses, antes de faltar",
    desc: "Previsto e realizado mês a mês, por categoria. O dashboard avisa em que dia o saldo fica negativo, contando só o que já está lançado.",
    points: ["Previsto e realizado", "Projeção dos próximos 30 dias", "Saldo de hoje separado do agendado"],
  },
  {
    icon: FileBarChart,
    label: "Relatórios e DRE",
    video: "/videos/relatorios",
    alt: "Vídeo: DRE do Numin até o lucro líquido, resultado mês a mês e desempenho por cliente",
    title: "Saiba se o mês deu lucro",
    desc: "DRE gerencial até o lucro líquido, resultado mês a mês e relatórios por categoria, cliente, fornecedor e centro de custo.",
    points: ["DRE com análise vertical por linha", "Relatórios por categoria, cliente e fornecedor", "Exportação em CSV para o contador"],
  },
];

// Grade compacta abaixo dos blocos: o resto do produto, sem prints.
// Itens que existem no menu do sistema usam o mesmo ícone de lá.
export const FEATURES = [
  { icon: LayoutGrid, label: "Dashboard", desc: "Saldo de hoje, vencidos, o que vence em 7 dias e o caixa projetado." },
  { icon: Wallet, label: "Contas e saldos", desc: "Contas, carteiras e cartões lado a lado, com o total consolidado." },
  { icon: CreditCard, label: "Cartão de crédito", desc: "Fatura com fechamento, vencimento e pagamento pela conta da empresa." },
  { icon: ArrowLeftRight, label: "Transferências", desc: "Dinheiro entre contas sem inflar receitas nem despesas." },
  { icon: PieChart, label: "Centro de custo", desc: "Rateio por percentual e o resultado de cada área." },
  { icon: BookUser, label: "Clientes e fornecedores", desc: "Um cadastro só, ligado aos lançamentos e aos relatórios." },
  { icon: ShieldCheck, label: "Equipe e permissões", desc: "Administrador, membro ou visualizador, com auditoria." },
  { icon: FileText, label: "Recibos", desc: "Recibo de cada recebimento para baixar em PDF ou imprimir." },
];

// Planos por tamanho de equipe (2 / 5 / 10). Todas as funcionalidades em todos
// os planos; API pública só no Profissional e no Avançado. Valores ilustrativos.
export const PLANS = [
  {
    name: "Essencial",
    price: "R$ 89",
    priceAnnual: "R$ 74",
    period: "/mês",
    tagline: "Para a empresa que está organizando o financeiro.",
    features: [
      "Até 2 membros",
      "1 conta com integração bancária",
      "Controle financeiro completo",
      "Centro de custo, relatórios e auditoria",
      "Suporte por e-mail",
    ],
    cta: "Começar agora",
    highlight: false,
  },
  {
    name: "Profissional",
    price: "R$ 189",
    priceAnnual: "R$ 158",
    period: "/mês",
    tagline: "Para equipes que trabalham o financeiro juntas.",
    features: [
      "Até 5 membros",
      "Até 3 contas com integração bancária",
      "Tudo do Essencial",
      { text: "Conexão via MCP", soon: true },
      "Suporte por e-mail",
    ],
    cta: "Assinar Profissional",
    highlight: true,
  },
  {
    name: "Avançado",
    price: "R$ 389",
    priceAnnual: "R$ 324",
    period: "/mês",
    tagline: "Para operações maiores, conectadas a outros sistemas.",
    features: [
      "Até 15 membros",
      "Integração bancária ilimitada",
      "Tudo do Profissional",
      "API pública",
      "Suporte prioritário",
    ],
    cta: "Assinar Avançado",
    highlight: false,
  },
];

// Organização (empresa) a mais, com os mesmos recursos e limites do plano.
export const ORG_ADDON = { Essencial: "R$ 49", Profissional: "R$ 79", Avançado: "R$ 129" };

export const FAQ = [
  { q: "Preciso de cartão de crédito para testar?", a: `Não. Você cria a conta, usa todas as funcionalidades por ${TRIAL_DAYS} dias sem cadastrar cartão e só assina se fizer sentido.` },
  { q: "O Numin conecta direto com o meu banco?", a: "Com Banco Inter, Sicoob e Banco do Brasil, sim: a conta da empresa se conecta pela API oficial do banco e o extrato chega sozinho para conciliar (1 conta no Essencial, até 3 no Profissional e ilimitadas no Avançado). Com qualquer outro banco, você baixa o arquivo OFX e importa no Numin. Nos dois casos o sistema sugere as correspondências e você só confirma. Não pedimos a senha do seu banco em momento nenhum." },
  { q: "O Numin emite nota fiscal ou boleto?", a: "Não. O Numin cuida do controle financeiro — contas a pagar e a receber, conciliação, fluxo de caixa e relatórios. A emissão fiscal continua no seu emissor de notas ou com a sua contabilidade." },
  { q: "O Numin substitui meu contador?", a: "Não substitui: organiza. Você entrega ao contador um financeiro fechado, com DRE e exportação em CSV quando precisar — e pode dar acesso a ele como visualizador, que vê tudo sem alterar nada." },
  { q: "Qual a diferença entre os planos?", a: "O controle financeiro completo está em todos os planos. O que muda é o tamanho da equipe (2, 5 ou 15 membros), quantas contas têm integração bancária direta (1, até 3 ou ilimitadas) e as conexões: a conexão via MCP entra a partir do Profissional e a API pública, no Avançado." },
  { q: "O Numin serve para mais de uma empresa?", a: "Sim. Cada plano inclui uma organização, e você pode adicionar outras na mesma conta por R$ 49, R$ 79 ou R$ 129 por mês, conforme o plano. Cada organização adicional tem os mesmos recursos e limites do plano." },
  { q: "O que é a conexão via MCP?", a: "É uma forma de conectar o Numin ao Claude, ao ChatGPT ou a outro assistente de IA compatível com MCP (Model Context Protocol), para consultar seus números conversando. Vai estar disponível em breve nos planos Profissional e Avançado." },
  { q: "Posso cancelar quando quiser?", a: "Sim, sem multa. Antes de cancelar, exporte em CSV os lançamentos, o fluxo de caixa, a DRE e a conciliação. Depois do fim da assinatura, os dados ainda ficam disponíveis por 30 dias para exportação." },
  { q: "O que é o programa Parceiros Numin?", a: `São ${FOUNDER_OFFER.slots} vagas para empresas que querem começar com a gente. O parceiro ganha a implantação feita pela nossa equipe, um canal direto com os fundadores e o plano ${FOUNDER_OFFER.plan} grátis até ${FOUNDER_OFFER.freeUntil} e por ${FOUNDER_OFFER.price}${FOUNDER_OFFER.period} para sempre a partir de ${FOUNDER_OFFER.paidFrom}. Em troca, pedimos feedbacks de melhoria.` },
  { q: "Meus dados ficam seguros?", a: "Sim. Senhas guardadas em hash, permissões por papel conferidas no servidor, dados de cada empresa isolados e uma trilha de auditoria com quem mudou o quê, quando, e o valor de antes e o de depois. O tratamento dos dados segue a LGPD, como descrito na nossa Política de Privacidade." },
];
