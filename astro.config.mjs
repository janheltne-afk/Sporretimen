import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Kanonisk nettadresse. Endre denne når produksjonsdomenet er klart.
const SITE = 'https://sporretimen.no';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: undefined,
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
