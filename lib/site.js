import {
  // Itens que existem no menu do sistema usam o mesmo ícone de lá (app/src/App.jsx).
  LayoutGrid, TrendingUp, TrendingDown, BookUser, Wallet, CreditCard, RefreshCcw, LineChart,
  Users, Receipt, FileBarChart, ArrowLeftRight, PieChart, ShieldCheck,
  Landmark, KeyRound, ScrollText, Lock, Scale, FileUp,
} from "lucide-react";

const TRIAL_DAYS = 7;

export const SITE = {
  name: "Numin",
  url: "https://www.numin.com.br",
  subtitle: "Controle financeiro",
  tagline: "Números que fazem sentido.",
  shortSignature: "Do número à decisão.",
  appUrl: "https://app.numin.com.br",
  // ?cadastro abre o app direto na tela de criar conta
  signupUrl: "https://app.numin.com.br/?cadastro",
  email: "contato@numin.com.br",
  trialDays: TRIAL_DAYS,
  // Preencha com o ID do Formspree (formspree.io/f/XXXX -> "XXXX"); vazio = usa mailto
  formspree: "",
};

// Oferta Parceiros Numin (early adopter) — limitada: grátis até uma data e depois preço fixo para sempre
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

export const SECURITY = [
  { icon: Landmark, title: "Sem a senha do seu banco", short: "API oficial do banco ou extrato OFX.", desc: "A conexão é pela API oficial do banco, com as credenciais da empresa, ou pelo extrato OFX. O Numin nunca pede a senha do internet banking." },
  { icon: KeyRound, title: "Acesso protegido", short: "Login seguro e recuperação de senha.", desc: "Login com autenticação e recuperação de senha." },
  { icon: Users, title: "Permissões por papel", short: "Cada pessoa acessa só o que deve.", desc: "Administrador, membro e visualizador — cada um acessa só o que deve." },
  { icon: ScrollText, title: "Trilha de auditoria", short: "Quem fez o quê, e quando.", desc: "Histórico de quem fez o quê, e quando." },
  { icon: Lock, title: "Conexão criptografada", short: "Todo o tráfego em HTTPS/TLS.", desc: "Todo o tráfego protegido por HTTPS/TLS." },
  { icon: Scale, title: "Privacidade e LGPD", short: "Política pública e canal direto.", desc: "Tratamento de dados seguindo a LGPD, com política de privacidade pública e canal direto para exercer seus direitos.", href: "/privacidade" },
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
  { label: "Planos e preços", href: "/#precos" },
];

export const LEGAL_PAGES = [
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Privacidade", href: "/privacidade" },
];

// Funcionalidades do produto (seção da home): lista à esquerda e, ao
// selecionar, título, texto e o print da tela (public/funcionalidades/*.webp,
// capturados no sistema com dados fictícios). O que varia por plano está em PLANS.
export const FEATURES = [
  {
    icon: LayoutGrid,
    label: "Dashboard",
    title: "O pulso do negócio numa tela.",
    desc: "Saldo de hoje, vencidos, o que vence nos próximos dias, caixa projetado e o desempenho do ano, num relance.",
    image: "/funcionalidades/dashboard.webp",
    alt: "Dashboard do Numin com saldo, vencidos, caixa projetado e desempenho do ano",
  },
  {
    icon: TrendingDown,
    label: "Contas a pagar",
    title: "Nenhum pagamento esquecido.",
    desc: "Lance despesas com vencimento, categoria e fornecedor, com parcelamento e recorrência. Dê baixa total ou parcial e veja na hora o que está em aberto ou atrasado.",
    image: "/funcionalidades/pagar.webp",
    alt: "Lista de despesas do mês no Numin com vencimentos, valores e status",
  },
  {
    icon: TrendingUp,
    label: "Contas a receber",
    title: "Saiba o que vai entrar no caixa.",
    desc: "Acompanhe as receitas por cliente, com mensalidades recorrentes, projetos parcelados e o status de cada recebimento.",
    image: "/funcionalidades/receber.webp",
    alt: "Lista de receitas do mês no Numin por cliente e status",
  },
  {
    icon: Wallet,
    label: "Contas e saldos",
    title: "Todos os saldos em um só lugar.",
    desc: "Contas correntes, carteiras e cartões da empresa lado a lado, com o saldo de cada uma e o total consolidado.",
    image: "/funcionalidades/contas.webp",
    alt: "Contas da empresa no Numin com saldos e cartão de crédito",
  },
  {
    icon: CreditCard,
    label: "Cartão de crédito",
    title: "A fatura do cartão sob controle.",
    desc: "Compras lançadas no mês certo, fatura com fechamento e vencimento, limite e o pagamento direto da conta da empresa.",
    image: "/funcionalidades/cartao.webp",
    alt: "Fatura do cartão de crédito no Numin com as compras do período",
  },
  {
    icon: ArrowLeftRight,
    label: "Transferências",
    title: "Dinheiro entre contas, sem confusão.",
    desc: "Registre transferências entre as contas da empresa sem inflar receitas e despesas. Os saldos das duas contas se ajustam na hora.",
    image: "/funcionalidades/transferencias.webp",
    alt: "Transferências entre contas no Numin com origem, destino e valor",
  },
  {
    icon: RefreshCcw,
    label: "Conciliação bancária",
    title: "O extrato batido em minutos.",
    desc: "Importe o extrato ou receba direto do banco. O Numin sugere a correspondência de cada transação e você confirma tudo de uma vez.",
    image: "/funcionalidades/conciliacao.webp",
    alt: "Tela de conciliação do Numin com sugestões de alta confiança para confirmar",
  },
  {
    icon: LineChart,
    label: "Fluxo de caixa",
    title: "Enxergue o caixa antes de faltar.",
    desc: "Previsto e realizado mês a mês, por categoria, para antecipar sobras e faltas e planejar com segurança.",
    image: "/funcionalidades/fluxo.webp",
    alt: "Fluxo de caixa do Numin com gráfico mensal e tabela por categoria",
  },
  {
    icon: FileBarChart,
    label: "Relatórios e DRE",
    title: "Saiba se está dando lucro.",
    desc: "DRE gerencial com previsto, realizado e variação, além de relatórios por cliente, fornecedor e centro de custo.",
    image: "/funcionalidades/relatorios.webp",
    alt: "DRE do Numin com receitas, deduções e despesas por linha",
  },
  {
    icon: PieChart,
    label: "Centro de custo",
    title: "Saiba o que cada área custa e rende.",
    desc: "Distribua receitas e despesas entre centros de custo, com rateio por percentual, e compare o resultado de cada um.",
    image: "/funcionalidades/centro-custo.webp",
    alt: "Relatório por centro de custo no Numin com despesa, receita e resultado",
  },
  {
    icon: BookUser,
    label: "Clientes e fornecedores",
    title: "Cadastro único de contatos.",
    desc: "Clientes, fornecedores, sócios e funcionários num só cadastro, ligado aos lançamentos e aos relatórios.",
    image: "/funcionalidades/contatos.webp",
    alt: "Cadastro de contatos do Numin com clientes e fornecedores",
  },
  {
    icon: ShieldCheck,
    label: "Equipe e permissões",
    title: "Cada pessoa no seu papel.",
    desc: "Convide a equipe e o contador como administrador, membro ou visualizador. Cada um acessa só o que deve, com trilha de auditoria.",
    image: "/funcionalidades/equipe.webp",
    alt: "Membros e convites da organização no Numin com papéis de acesso",
  },
];

export const HIGHLIGHTS = [
  {
    icon: Receipt,
    tab: "Contas a pagar e receber",
    video: "/videos/receitas",
    alt: "Vídeo: cadastro de uma receita parcelada no Numin, que aparece na lista do mês com vencimento e status",
    eyebrow: "O dia a dia sob controle",
    title: "Tudo o que entra e sai, sob controle",
    desc: "Cadastre receitas e despesas com baixa total ou parcial, vencimentos e status. Nunca perca um pagamento ou um recebimento.",
    points: [
      "Contas a pagar e a receber",
      "Baixa total ou parcial",
      "Vencimentos e status (em aberto, atrasado, pago)",
      "Parcelamento e recorrência",
    ],
  },
  {
    icon: RefreshCcw,
    tab: "Conciliação bancária",
    video: "/videos/conciliacao",
    alt: "Vídeo: conciliação do extrato no Numin, confirmando as sugestões e criando a tarifa bancária até o mês ficar 100% conciliado",
    eyebrow: "Menos trabalho manual",
    title: "Concilie o extrato em minutos, não em horas",
    desc: "Importe o extrato do banco e deixe o Numin sugerir as correspondências. Concilie automático ou manual e crie lançamentos direto do extrato.",
    points: [
      "Importação de extrato do banco",
      "Sugestão automática de categoria",
      "Conciliação de vários lançamentos (1:N)",
      "Criação direto do extrato",
    ],
  },
  {
    icon: LineChart,
    tab: "Fluxo de caixa",
    video: "/videos/fluxo",
    alt: "Vídeo: fluxo de caixa do Numin com receitas e despesas por mês e o previsto dos próximos meses",
    eyebrow: "Decisões com antecedência",
    title: "Enxergue o caixa antes de faltar",
    desc: "Previsto vs. realizado por período, para antecipar sobras e faltas e planejar com segurança.",
    points: [
      "Previsto vs. realizado",
      "Planejamento por período",
      "Antecipe sobras e faltas",
      "Visão consolidada por categoria",
    ],
  },
  {
    icon: FileBarChart,
    tab: "Relatórios",
    video: "/videos/relatorios",
    alt: "Vídeo: DRE do Numin até o lucro líquido, resultado mês a mês e desempenho por cliente",
    eyebrow: "Decisões com dados",
    title: "Saiba se está dando lucro",
    desc: "DRE, resultado mês a mês e relatórios por fornecedor, cliente e centro de custo — a visão gerencial para decidir.",
    points: [
      "DRE — Demonstrativo de Resultados, com exportação em CSV",
      "Resultado mensal",
      "Relatórios por fornecedor e por cliente",
      "Centros de custo",
    ],
  },
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
  { q: "O Numin conecta direto com o meu banco?", a: "Com Banco Inter, Sicoob e Banco do Brasil, sim: a conta da empresa se conecta pela API oficial do banco e o extrato chega sozinho para conciliar (1 conta no Essencial, até 3 no Profissional e ilimitadas no Avançado). Com qualquer outro banco, você baixa o arquivo OFX e importa no Numin. Nos dois casos o sistema sugere as correspondências e você concilia o mês em minutos. Não pedimos a senha do seu banco em momento nenhum." },
  { q: "O Numin emite nota fiscal ou boleto?", a: "Não. O Numin cuida do controle financeiro — contas a pagar e a receber, conciliação, fluxo de caixa e relatórios. A emissão fiscal continua no seu emissor de notas ou com a sua contabilidade." },
  { q: "O Numin substitui meu contador?", a: "Não substitui: organiza. Você entrega ao contador um financeiro fechado, com DRE e exportação em CSV quando precisar — e pode dar acesso a ele como visualizador, que vê tudo sem alterar nada." },
  { q: "Qual a diferença entre os planos?", a: "O controle financeiro completo está em todos os planos. O que muda é o tamanho da equipe (2, 5 ou 15 membros), quantas contas têm integração bancária direta (1, até 3 ou ilimitadas) e as conexões: a conexão via MCP entra a partir do Profissional e a API pública, no Avançado." },
  { q: "O Numin serve para mais de uma empresa?", a: "Sim. Cada plano inclui uma organização, e você pode adicionar outras na mesma conta por R$ 49, R$ 79 ou R$ 129 por mês, conforme o plano. Cada organização adicional tem os mesmos recursos e limites do plano." },
  { q: "O que é a conexão via MCP?", a: "É uma forma de conectar o Numin ao Claude, ao ChatGPT ou a outro assistente de IA compatível com MCP (Model Context Protocol), para consultar seus números conversando. Vai estar disponível em breve nos planos Profissional e Avançado." },
  { q: "Meus dados ficam seguros?", a: "Sim. Acesso protegido por autenticação, controle de permissões por papel e trilha de auditoria das ações da equipe. O tratamento dos dados segue a LGPD, como descrito na nossa Política de Privacidade." },
];
