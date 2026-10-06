import { SITE, CONTENT_PAGES, LEGAL_PAGES } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: SITE.url, lastModified, changeFrequency: "weekly", priority: 1 },
    ...CONTENT_PAGES.map((p) => ({ url: `${SITE.url}${p.href}`, lastModified, changeFrequency: "monthly", priority: 0.8 })),
    // Posts em Markdown (os artigos antigos já entram por CONTENT_PAGES).
    ...getAllPosts()
      .filter((p) => p.slug)
      .map((p) => ({ url: `${SITE.url}${p.href}`, lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.7 })),
    { url: `${SITE.url}/seguranca`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    ...LEGAL_PAGES.map((p) => ({ url: `${SITE.url}${p.href}`, lastModified, changeFrequency: "yearly", priority: 0.3 })),
  ];
}
