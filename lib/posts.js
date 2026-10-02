import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Posts do blog: um arquivo .md por post em content/posts (o nome do arquivo é
// o slug, a URL fica /conteudo/<slug>). Ver content/posts/README.md.
const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const WORDS_PER_MINUTE = 200;

// Artigos que já existiam como páginas próprias. Entram na lista do blog, mas
// continuam nas URLs de sempre para não perder posição no Google.
const PAGE_ARTICLES = [
  {
    href: "/conciliacao-bancaria",
    icon: "conciliacao",
    title: "Conciliação bancária: o que é e como fazer passo a passo",
    description:
      "Entenda o que é conciliação bancária, por que ela importa para a sua empresa e como fazer passo a passo, sem erros e sem perder horas no fim do mês.",
    date: "2026-09-11",
    category: "Guia prático",
    readingMinutes: 5,
  },
  {
    href: "/fluxo-de-caixa",
    icon: "fluxo-de-caixa",
    title: "Fluxo de caixa: como fazer e acompanhar previsto x realizado",
    description:
      "Aprenda a fazer o fluxo de caixa da sua empresa, comparar previsto x realizado e antecipar faltas de dinheiro — e por que a planilha deixa de dar conta.",
    date: "2026-09-11",
    category: "Guia prático",
    readingMinutes: 5,
  },
  {
    href: "/dre",
    icon: "dre",
    title: "DRE: o que é e como fazer o demonstrativo de resultado",
    description:
      "Entenda o que é a DRE (Demonstrativo de Resultado do Exercício), como montar uma DRE gerencial para pequenas empresas e como usá-la para decidir.",
    date: "2026-09-11",
    category: "Guia prático",
    readingMinutes: 5,
  },
];

function readPostFile(file) {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8"));
  for (const field of ["title", "description", "date"]) {
    if (!data[field]) throw new Error(`content/posts/${file}: falta "${field}" no cabeçalho`);
  }
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    href: `/conteudo/${slug}`,
    title: data.title,
    description: data.description,
    // gray-matter transforma AAAA-MM-DD em Date; a lista e o sitemap usam o texto.
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    category: data.category || "Artigo",
    icon: data.icon || "documento",
    cover: data.cover || null,
    coverAlt: data.coverAlt || "",
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    content,
  };
}

function markdownPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map(readPostFile)
    .filter((p) => !p.draft);
}

/** Todos os itens da página Conteúdo (posts em Markdown + artigos antigos), do mais novo para o mais antigo. */
export function getAllPosts() {
  return [...markdownPosts(), ...PAGE_ARTICLES]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p, i) => ({ ...p, coverVariant: i }));
}

/** Slugs dos posts em Markdown — as rotas /conteudo/<slug>. */
export function getPostSlugs() {
  return markdownPosts().map((p) => p.slug);
}

/** Um post em Markdown com o corpo já em HTML, ou null se não existir. */
export function getPost(slug) {
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return null;
  return { ...post, html: marked.parse(post.content) };
}

export function formatPostDate(iso, month = "long") {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("pt-BR", { day: "numeric", month, year: "numeric" });
}
