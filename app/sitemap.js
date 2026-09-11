import { SITE, CONTENT_PAGES, LEGAL_PAGES } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: SITE.url, lastModified, changeFrequency: "weekly", priority: 1 },
    ...CONTENT_PAGES.map((p) => ({ url: `${SITE.url}${p.href}`, lastModified, changeFrequency: "monthly", priority: 0.8 })),
    ...LEGAL_PAGES.map((p) => ({ url: `${SITE.url}${p.href}`, lastModified, changeFrequency: "yearly", priority: 0.3 })),
  ];
}
