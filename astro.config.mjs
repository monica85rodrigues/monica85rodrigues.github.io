import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { AVISO_LEGAL_COMPLETO } from './src/config.js';

// Site em português na raiz. Se um dia houver inglês, entra em /en/ e os endereços atuais não mudam.
export default defineConfig({
  site: 'https://monicarodrigues.pt',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && (AVISO_LEGAL_COMPLETO || !page.includes('/aviso-legal')),
      // /talk-evora/ vive em public/ (HTML à parte), por isso entra no sitemap à mão
      customPages: ['https://monicarodrigues.pt/talk-evora/'],
    }),
  ],
});
