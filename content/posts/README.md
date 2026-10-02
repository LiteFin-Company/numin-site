# Posts do blog

Cada arquivo `.md` desta pasta é um post da página **Conteúdo** (`/conteudo`). O nome do arquivo vira o endereço: `meu-post.md` → `/conteudo/meu-post`. Use letras minúsculas, sem acento, com hífens.

## Cabeçalho

Todo post começa com este bloco:

```markdown
---
title: "Título do post"
description: "Resumo de uma ou duas frases. Aparece no card da lista, abaixo do título no post e no Google."
date: 2026-10-02
category: Guia prático
icon: fluxo-de-caixa
draft: false
---
```

- `title`, `description` e `date` são obrigatórios (o build falha sem eles).
- `category` é opcional (padrão: "Artigo"). Exemplos: Guia prático, Novidades, Gestão.
- `icon` escolhe o ícone da capa ilustrada (fundo e formas da marca são automáticos). Opções: `conciliacao`, `fluxo-de-caixa`, `dre`, `banco`, `documento` (padrão), `metas`, `impostos`, `equipe`, `cartao`, `reserva`. Para um ícone novo, inclua-o em `COVER_ICONS` (`components/PostCover.jsx`).
- `cover` (opcional) troca a capa ilustrada por uma imagem em `public/blog/`, de preferência 1200×660, com `coverAlt` descrevendo a imagem.
- `draft: true` esconde o post da lista, do sitemap e do endereço.

## Texto

Depois do cabeçalho, escreva em Markdown: `## Seção`, `### Subseção`, `**negrito**`, listas com `-` ou `1.`, links `[texto](/fluxo-de-caixa)` e imagens `![descrição](/blog/imagem.webp)`.

O tempo de leitura é calculado sozinho. Os posts aparecem do mais novo para o mais antigo.
