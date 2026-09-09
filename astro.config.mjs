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
      // Bevisst uten `i18n`. Den innebygde språkkoblingen parer sider som bare
      // skiller seg med et språkprefiks, mens våre engelske adresser også
      // oversetter seksjonen (/episoder/ → /en/episodes/). Da finner den ingen
      // par, og hreflang ville blitt stående tomt eller feil. Koblingen ligger
      // derfor i <head> på hver side, utledet av alternatePath().
      i18n: undefined,
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
