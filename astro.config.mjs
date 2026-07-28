import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Kanonisk nettadresse (hoveddomene med www). Alt av sitemap, canonical,
// Open Graph og JSON-LD utledes herfra.
const SITE = 'https://www.sporretimen.no';

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
