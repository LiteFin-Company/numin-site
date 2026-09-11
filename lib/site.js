import {
  Wallet, ArrowLeftRight, CreditCard, RefreshCcw, LineChart, LayoutDashboard,
  Users, ShieldCheck, Repeat, Receipt, FileBarChart, Plug,
  Landmark, FileUp, KeyRound, ScrollText, Lock, Scale,
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
  // Risco zero — exibido perto dos CTAs
  riskReversal: `Teste grátis por ${TRIAL_DAYS} dias · sem cartão de crédito · cancele quando quiser`,
  // Preencha com o ID do Formspree (formspree.io/f/XXXX -> "XXXX"); vazio = usa mailto
  formspree: "",
};

// Oferta de fundador (early adopter) — limitada
export const FOUNDER_OFFER = {
  plan: "Essencial",
  price: "R$ 49,90",
  period: "/mês",
  original: "R$ 89",
  slots: 30,
  note: "para sempre · primeiras 30 empresas",
  cta: "Garantir vaga de fundador",
};

// Segurança (confiança sem prova social) — todas afirmações reais do produto
export const SECURITY = [
  { icon: Landmark, title: "Sem a senha do seu banco", desc: "A conexão é pelo extrato OFX que você baixa e importa. O Numin nunca pede a senha do banco." },
  { icon: KeyRound, title: "Acesso protegido", desc: "Login com autenticação e recuperação de senha." },
  { icon: Users, title: "Permissões por papel", desc: "Administrador, membro e visualizador — cada um acessa só o que deve." },
  { icon: ScrollText, title: "Trilha de auditoria", desc: "Histórico de quem fez o quê, e quando." },
  { icon: Lock, title: "Conexão criptografada", desc: "Todo o tráfego protegido por HTTPS/TLS." },
  { icon: Scale, title: "Privacidade e LGPD", desc: "Tratamento de dados seguindo a LGPD, com política de privacidade pública e canal direto para exercer seus direitos.", href: "/privacidade" },
];

// Links com "/" na frente para funcionarem também fora da home.
export const NAV = [
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Preços", href: "/#precos" },
  { label: "Contato", href: "/#contato" },
];

// Páginas de conteúdo (SEO) e documentos legais — rodapé e sitemap.
export const CONTENT_PAGES = [
  { label: "Conciliação bancária", href: "/conciliacao-bancaria" },
  { label: "Fluxo de caixa", href: "/fluxo-de-caixa" },
  { label: "DRE", href: "/dre" },
];

export const LEGAL_PAGES = [
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Privacidade", href: "/privacidade" },
];

// Full feature set. Todas as funcionalidades estão em todos os planos
// (exceto a API pública, restrita aos planos Time e Escala).
export const FEATURES = [
  {
    icon: Receipt,
    title: "Contas a pagar e a receber",
    desc: "Cadastre receitas e despesas com categorias, clientes e fornecedores. Dê baixa total ou parcial com vários meios de pagamento e acompanhe o status de cada título.",
  },
  {
    icon: Repeat,
    title: "Parcelamento e recorrência",
    desc: "Lançamentos parcelados ou recorrentes automáticos, em lote, com edição ou cancelamento da série inteira — ou só daqui pra frente.",
  },
  {
    icon: Wallet,
    title: "Contas, carteiras e saldos",
    desc: "Corrente, poupança, caixinha, investimento, carteira digital e cartão — todas com saldo atualizado e extrato detalhado.",
  },
  {
    icon: CreditCard,
    title: "Cartão de crédito",
    desc: "Faturas por competência com fechamento e vencimento, pagamento de fatura, compras parceladas e créditos (estorno, reembolso, chargeback e cashback).",
  },
  {
    icon: ArrowLeftRight,
    title: "Transferências entre contas",
    desc: "Movimente dinheiro entre suas contas com registro dedicado, mantendo saldos e relatórios sempre corretos.",
  },
  {
    icon: RefreshCcw,
    title: "Conciliação bancária",
    desc: "Importe o extrato e concilie em minutos: sugestão de categoria, conciliação automática ou manual, vários lançamentos para uma transação e criação direto do extrato.",
  },
  {
    icon: LineChart,
    title: "Fluxo de caixa",
    desc: "Entradas e saídas previstas e realizadas, com planejamento por período para antecipar sobras e faltas.",
  },
  {
    icon: FileBarChart,
    title: "Relatórios gerenciais",
    desc: "DRE (Demonstrativo de Resultados), resultado mensal e relatórios por fornecedor, por cliente e por centro de custo.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard em tempo real",
    desc: "Indicadores, gráficos e resumos de saldos, a pagar e a receber, com navegação por mês.",
  },
  {
    icon: Users,
    title: "Multiempresa e equipe",
    desc: "Várias organizações na mesma conta, convites por e-mail e papéis (administrador, membro, visualizador) com controle de acesso.",
  },
  {
    icon: Plug,
    title: "API pública e integrações",
    desc: "Conecte o Numin a ERPs, automações e outros sistemas com chaves de API e endpoints REST.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e auditoria",
    desc: "Login protegido, recuperação e troca de senha, e trilha de auditoria com o histórico de ações da equipe.",
  },
];

export const HIGHLIGHTS = [
  {
    icon: Receipt,
    media: "/feat-contas.webp",
    mediaSize: [1600, 793],
    alt: "Tela de receitas do Numin com vencimentos, valores e status de cada lançamento",
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
    media: "/feat-conciliacao.webp",
    mediaSize: [1600, 792],
    alt: "Tela de conciliação bancária do Numin com sugestões de correspondência para confirmar",
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
    media: "/feat-fluxo.webp",
    mediaSize: [1600, 789],
    alt: "Fluxo de caixa do Numin com receitas e despesas previstas e realizadas por mês",
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
    media: "/feat-relatorios.webp",
    mediaSize: [1600, 794],
    alt: "DRE do Numin com previsto, realizado e variação por linha",
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

export const STEPS = [
  {
    n: "01",
    icon: FileUp,
    title: "Cadastre",
    desc: "Suas contas, receitas e despesas — com parcelamento, recorrência e anexos. Importe o extrato do banco.",
    tag: "Contas, lançamentos e extrato OFX",
  },
  {
    n: "02",
    icon: RefreshCcw,
    title: "Concilie",
    desc: "Bata os lançamentos com o extrato em minutos, com sugestões automáticas e pagamento de faturas.",
    tag: "Sugestões automáticas",
  },
  {
    n: "03",
    icon: FileBarChart,
    title: "Decida",
    desc: "Acompanhe o fluxo de caixa e os relatórios (DRE e mais) para tomar decisões com base em dados.",
    tag: "Fluxo de caixa e DRE",
  },
];

// Planos por tamanho de equipe (2 / 5 / 15). Todas as funcionalidades em todos
// os planos; API pública só no Time e no Escala. Valores ilustrativos.
export const PLANS = [
  {
    name: "Essencial",
    price: "R$ 89",
    priceAnnual: "R$ 74",
    period: "/mês",
    tagline: "Para quem está organizando o financeiro pela primeira vez.",
    features: [
      "Até 2 membros",
      "Todas as funcionalidades",
      "Conciliação, cartão, fluxo de caixa e relatórios",
      "Suporte por e-mail",
    ],
    cta: "Começar agora",
    highlight: false,
  },
  {
    name: "Time",
    price: "R$ 189",
    priceAnnual: "R$ 158",
    period: "/mês",
    tagline: "Para equipes que trabalham o financeiro juntas.",
    features: [
      "Até 5 membros",
      "Todas as funcionalidades",
      "API pública para integrações",
      "Suporte por e-mail",
    ],
    cta: "Assinar Time",
    highlight: true,
  },
  {
    name: "Escala",
    price: "R$ 389",
    priceAnnual: "R$ 324",
    period: "/mês",
    tagline: "Para operações maiores, com mais gente no financeiro.",
    features: [
      "Até 15 membros",
      "Todas as funcionalidades",
      "API pública para integrações",
      "Suporte por e-mail",
    ],
    cta: "Assinar Escala",
    highlight: false,
  },
];

export const FAQ = [
  { q: "Preciso de cartão de crédito para testar?", a: `Não. Você cria a conta, usa todas as funcionalidades por ${TRIAL_DAYS} dias sem cadastrar cartão e só assina se fizer sentido.` },
  { q: "O Numin conecta direto com o meu banco?", a: "A conexão é pelo extrato: você baixa o arquivo OFX no seu banco e importa no Numin. O sistema sugere as correspondências e você concilia o mês em minutos. Não pedimos a senha do seu banco em momento nenhum." },
  { q: "O Numin emite nota fiscal ou boleto?", a: "Não. O Numin cuida do controle financeiro — contas a pagar e a receber, conciliação, fluxo de caixa e relatórios. A emissão fiscal continua no seu emissor de notas ou com a sua contabilidade." },
  { q: "O Numin substitui meu contador?", a: "Não substitui: organiza. Você entrega ao contador um financeiro fechado, com DRE e exportação em CSV quando precisar — e pode dar acesso a ele como visualizador, que vê tudo sem alterar nada." },
  { q: "Qual a diferença entre os planos?", a: "Todas as funcionalidades estão em todos os planos. O que muda é o tamanho da equipe (2, 5 ou 15 membros) — e a API pública, disponível nos planos Time e Escala." },
  { q: "O Numin serve para mais de uma empresa?", a: "Sim. Você gerencia várias organizações na mesma conta, com usuários e permissões, em qualquer plano." },
  { q: "Meus dados ficam seguros?", a: "Sim. Acesso protegido por autenticação, controle de permissões por papel e trilha de auditoria das ações da equipe. O tratamento dos dados segue a LGPD, como descrito na nossa Política de Privacidade." },
];
