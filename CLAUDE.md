@AGENTS.md

# Numin — site

Site institucional e de vendas do Numin (`numin.com.br`). Next.js 16 (App Router) + React 19 + Tailwind v4, JavaScript. O app (frontend) e o backend são repositórios separados, irmãos deste em `~/Projetos/numin/`. O processo de trabalho com agentes está em `~/Projetos/numin/backend/docs/processo-agentes.md`.

## Estrutura

- `app/page.js`: a home, landing page única com seções por âncora (`#funcionalidades`, `#precos`...)
- `app/conteudo/`: blog; posts em Markdown em `content/posts/*.md` (front matter lido com `gray-matter`, capa ilustrada por `icon:` em `components/PostCover.jsx`)
- `app/seguranca/`, `app/privacidade/`, `app/termos/`: páginas institucionais
- `app/conciliacao-bancaria/`, `app/fluxo-de-caixa/`, `app/dre/`: artigos antigos, mantidos na mesma URL
- `lib/site.js`: conteúdo compartilhado (navegação, funcionalidades, planos e preços, textos do site); `lib/posts.js`: leitura dos posts
- `app/globals.css`: tokens de cor e fonte em `@theme`, que seguem o app (não há `tailwind.config.js`)

## Como rodar

```bash
export PATH=/opt/homebrew/bin:$PATH   # o Node padrão do nvm é 16; Next 16 precisa de 20+
npm run dev                            # http://localhost:3000
npm run lint                           # eslint (limpo: mantenha assim)
npm run build                          # build estático
```

## Fluxo de trabalho

- Uma tarefa, uma branch, sempre num worktree em `.claude/worktrees/<nome>`. Nunca trabalhe direto na `main`.
- PR no GitHub (`gh pr create`). O merge na `main` é do Rafael, nunca do agente.
- Commits em português, no formato `tipo(área): efeito`. Ex.: `feat(home): funcionalidades em lista com detalhe e print da tela`.
- A tarefa começa por um plano aprovado pelo Rafael, com um exemplo da tela ou do texto.
- Revisão: o agente `revisor-ui-marca` revisa todo diff que muda página, texto ou estilo. Divergência alta trava a entrega e volta ao implementador, no máximo duas vezes.

## Regras do site

- **Marca:** cores e fontes só pelos tokens de `app/globals.css`, que seguem o app (`~/Projetos/numin/frontend/src/styles/global.css`); o logotipo (`public/*.svg`, `app/icon.svg`, favicon, apple-icon, opengraph-image) segue o brand kit e não muda. Plus Jakarta Sans no texto e nos títulos. Texto e botão com contraste AA (4,5:1): botão, link e eyebrow usam `brand-600` ou mais escuro; o azul claro (`brand-400`) nunca é texto; texto secundário é `muted` (o cinza-claro do app, `#8993A4`, não serve como texto).
- **Tagline e assinatura:** "Números que fazem sentido." e "Do número à decisão." nunca na mesma tela.
- **Nunca sugerir IA** (faísca, robô, "assistente inteligente", "agentes de IA"). Exceção: a seção e o recurso "Conexão via MCP" podem citar Claude, ChatGPT e "assistente de IA".
- **Ícones:** `lucide-react`. **Nunca emoji.**
- **Só afirmar o que o app faz.** Funcionalidade, integração ou garantia de segurança no site precisa existir no código do app; o que ainda não existe aparece como "Em breve" (é o caso do MCP). Na página de segurança, não dizer onde ficam os dados.
- **Planos e preços** vivem em `lib/site.js` (`PLANS`); mudança de preço ou de oferta só a pedido do Rafael.
- **Páginas legais** (`privacidade`, `termos`) não mudam sem pedido explícito do Rafael.

## Pendências conhecidas

- `privacidade@numin.com.br` e `contato@numin.com.br` aparecem no site e ainda precisam ser criados.

## Definição de pronto

- [ ] `npm run build` e `npm run lint` verdes
- [ ] Página alterada aberta no navegador, em largura de desktop e de celular
- [ ] Nenhuma afirmação sobre o produto que o app não sustente
- [ ] Nenhuma divergência de severidade alta do revisor em aberto
