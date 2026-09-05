import {
  Wallet, ArrowLeftRight, CreditCard, RefreshCcw, LineChart, LayoutDashboard,
  Paperclip, Users, ShieldCheck, Repeat, Receipt, FileBarChart, Plug,
} from "lucide-react";

export const SITE = {
  name: "Numin",
  subtitle: "Controle financeiro",
  tagline: "Números que fazem sentido.",
  shortSignature: "Do número à decisão.",
  appUrl: "https://app.numin.com.br",
  signupUrl: "https://app.numin.com.br",
  email: "contato@numin.com.br",
};

export const NAV = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
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
    desc: "DRE (Demonstrativo de Resultados), relatórios por fornecedor e por responsável, e estatísticas por categoria.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard em tempo real",
    desc: "Indicadores, gráficos e resumos de saldos, a pagar e a receber, com navegação por mês.",
  },
  {
    icon: Paperclip,
    title: "Comprovantes e anexos",
    desc: "Anexe notas e comprovantes a cada lançamento e encontre tudo quando precisar.",
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
    icon: RefreshCcw,
    eyebrow: "Menos trabalho manual",
    title: "Conciliação bancária em minutos, não em horas",
    desc: "Importe o extrato do banco e deixe o Numin sugerir as correspondências. Concilie automático ou manual, agrupe vários lançamentos numa transação e crie lançamentos direto do extrato.",
    points: [
      "Importação de extrato do banco",
      "Sugestão automática de categoria",
      "Conciliação de vários lançamentos (1:N)",
      "Exportação do resultado",
    ],
  },
  {
    icon: CreditCard,
    eyebrow: "Cartão sem dor de cabeça",
    title: "Faturas, parcelas e estornos sob controle",
    desc: "Organize as faturas por competência com fechamento e vencimento, registre compras parceladas e lance créditos de cartão sem bagunçar o saldo da conta.",
    points: [
      "Faturas por competência",
      "Compras parceladas automáticas",
      "Pagamento de fatura",
      "Estorno, reembolso, chargeback e cashback",
    ],
  },
  {
    icon: FileBarChart,
    eyebrow: "Decisões com dados",
    title: "Relatórios que mostram a saúde do negócio",
    desc: "Do DRE ao detalhamento por fornecedor e por responsável, tenha a visão gerencial que você precisa para decidir com segurança.",
    points: [
      "DRE — Demonstrativo de Resultados",
      "Relatório por fornecedor",
      "Relatório por responsável",
      "Estatísticas por categoria",
    ],
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Cadastre",
    desc: "Suas contas, receitas e despesas — com parcelamento, recorrência e anexos. Importe o extrato do banco.",
  },
  {
    n: "02",
    title: "Concilie",
    desc: "Bata os lançamentos com o extrato em minutos, com sugestões automáticas e pagamento de faturas.",
  },
  {
    n: "03",
    title: "Decida",
    desc: "Acompanhe o fluxo de caixa e os relatórios (DRE e mais) para tomar decisões com base em dados.",
  },
];

// Planos por tamanho de equipe (2 / 5 / 15). Todas as funcionalidades em todos
// os planos; API pública só no Time e no Escala. Valores ilustrativos.
export const PLANS = [
  {
    name: "Essencial",
    price: "R$ 89",
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
