import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import PostCover from "@/components/PostCover";
import { SITE } from "@/lib/site";
import { getAllPosts, getPost, getPostSlugs, formatPostDate } from "@/lib/posts";

// Só existem as páginas geradas no build: slug desconhecido é 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: post.href },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      siteName: "Numin",
      title: post.title,
      description: post.description,
      url: post.href,
      publishedTime: post.date,
      ...(post.cover ? { images: [{ url: post.cover, alt: post.coverAlt }] } : {}),
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.href !== post.href)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE.url}${post.href}`,
    publisher: { "@type": "Organization", name: "Numin", url: SITE.url },
    ...(post.cover ? { image: `${SITE.url}${post.cover}` } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <article className="container-x max-w-3xl pt-28 pb-20">
        <Link href="/conteudo" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
          <ArrowLeft size={16} /> Conteúdo
        </Link>

        <header className="mt-6">
          <span className="eyebrow">{post.category}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted">{post.description}</p>
          <p className="mt-4 text-sm text-muted">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingMinutes} min de leitura
          </p>
        </header>

        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.coverAlt}
            width={1200}
            height={660}
            priority
            sizes="(min-width: 768px) 720px, calc(100vw - 48px)"
            className="mt-10 h-auto w-full rounded-2xl border border-slate-200"
          />
        ) : (
          <PostCover icon={post.icon} variant={post.coverVariant} className="mt-10 rounded-2xl" />
        )}

        {/* HTML gerado no build a partir do Markdown do repositório (conteúdo nosso, não do usuário). */}
        <div className="post-body mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

        {related.length > 0 && (
          <aside className="mt-14">
            <h2 className="text-xl font-bold tracking-tight text-ink">Leia também</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="card card-hover block">
                  <span className="font-display text-lg font-semibold text-ink">{r.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">{r.description}</span>
                </Link>
              ))}
            </div>
          </aside>
        )}

        <section className="card mt-14 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Do lançamento à DRE, sem planilha</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
            Contas a pagar e a receber, conciliação, fluxo de caixa e relatórios em um só lugar.
          </p>
          <div className="mt-7">
            <a href={SITE.signupUrl} className="btn btn-primary btn-lg">
              Começar grátis <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </article>

      <div className="bg-brand-hero">
        <Footer />
      </div>
    </>
  );
}
