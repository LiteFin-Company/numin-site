# numin — site

Site de marketing (landing page) do **numin**, o sistema de controle financeiro para empresas de serviços.

- **Stack:** Next.js 16 (App Router) + Tailwind v4 + Framer Motion
- **App do produto:** https://app.numin.com.br
- **Deploy:** Vercel (auto-deploy a cada push na branch `main`)

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Estrutura

- `app/` — página única (landing) + metadata/OpenGraph
- `components/` — Header, Hero, Footer, Pricing, Faq, Reveal, ContactForm
- `lib/site.js` — conteúdo (nav, funcionalidades, destaques, planos, FAQ)
- `public/` — logos, imagem do hero e prints do produto (WebP)
