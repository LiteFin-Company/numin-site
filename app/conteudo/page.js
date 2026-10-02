import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import Footer from "@/components/Footer";
import PostCover from "@/components/PostCover";
import { getAllPosts, formatPostDate } from "@/lib/posts";

const TITLE = "Conteúdo sobre gestão financeira para empresas";
const DESCRIPTION =
  "Guias e artigos do Numin sobre conciliação bancária, fluxo de caixa, DRE e o dia a dia do financeiro de pequenas empresas.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/conteudo" },
  openGraph: { type: "website", locale: "pt_BR", siteName: "Numin", title: TITLE, description: DESCRIPTION, url: "/conteudo" },
};

export default function ConteudoPage() {
  const posts = getAllPosts();

  return (
    <>
      <main className="container-x pt-28 pb-20">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Conteúdo</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Guias para o financeiro da sua empresa
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Conciliação, fluxo de caixa, DRE e as novidades do Numin, explicados de forma prática para quem
            cuida do dinheiro da empresa.
          </p>
        </header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_18px_40px_-24px_rgba(14,51,106,0.45)]"
            >
              {post.cover ? (
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  width={1200}
                  height={660}
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[20/11] w-full object-cover"
                />
              ) : (
                <PostCover icon={post.icon} variant={post.coverVariant} />
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                  {post.category}
                </span>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand-600">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.description}</p>
                <div className="mt-auto flex pt-5 items-center justify-between text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} aria-hidden /> {post.readingMinutes} min
                  </span>
                  <time dateTime={post.date}>{formatPostDate(post.date, "short")}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div className="bg-brand-hero">
        <Footer />
      </div>
    </>
  );
}
