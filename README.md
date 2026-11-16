# monicarodrigues.pt

Site pessoal de Mónica Rodrigues | IT Leadership. Astro, em português de Portugal, publicado no GitHub Pages.

## Comandos

- `npm install`: instalar
- `npm run dev`: desenvolvimento em http://localhost:4321
- `npm run build`: gerar o site em `dist/`

## Estrutura

- `src/pages/`: Início, Sobre, Privacidade e cookies, Aviso legal, 404
- `src/layouts/Base.astro`: cabeçalho, rodapé e SEO (título, descrição, canonical, Open Graph, dados estruturados)
- `src/config.js`: nome, redes, email e dados do titular (aviso legal)
- `src/assets/`: fotos e logótipos (otimizados no build)
- `public/`: ficheiros copiados tal como estão: `CNAME`, `robots.txt`, `fonts/`, `files/` (PDFs) e **`talk-evora/`**
- `docs/requisitos-legais.md`: checklist legal (RGPD, cookies, aviso legal, termos, Livro de Reclamações)

## Não partir

- `/talk-evora/` está a ser usado por pessoas: o endereço e a pasta `public/talk-evora/` têm de continuar iguais.
- Os PDFs em `public/files/` mantêm os mesmos caminhos.

## Publicação

O workflow `.github/workflows/deploy.yml` constrói e publica quando se faz push para `master`.
No GitHub: Settings > Pages > Source: **GitHub Actions**, e ativar **Enforce HTTPS**.

## Quando houver multilingue

O português fica na raiz. Outras línguas entram em `/en/` para não mudar os endereços atuais.
