/**
 * Språkoppsett for Spørretimen.
 *
 * Nettsiden finnes på norsk (uten prefiks) og engelsk (under /en/). Det er
 * bevisst to sett med ferdig bygde sider, ikke en knapp som bytter tekst i
 * nettleseren: søkemotorer og AI-søk indekserer bare HTML som faktisk ligger
 * på en egen adresse.
 *
 * Norske adresser er uendret, slik at det som allerede er indeksert består.
 */

/**
 * Skrus på når de engelske sidene faktisk finnes. Så lenge den er av, vises
 * ingen språkknapp – en knapp som fører til en side som ikke er bygget ennå
 * er verre enn ingen knapp, både for besøkende og for søkemotorer.
 *
 * Enkeltsider uten motstykke på det andre språket (manusene, kursene) setter
 * `noAlternate` på BaseLayout i stedet, og står da uten knapp og uten hreflang.
 */
export const englishReady = true;

export const locales = ['no', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'no';

/** Språkkoder brukt i <html lang>, hreflang og Open Graph. */
export const htmlLang: Record<Locale, string> = { no: 'nb', en: 'en' };
export const ogLocale: Record<Locale, string> = { no: 'nb_NO', en: 'en_US' };

/** Navnet på språket, skrevet på språket selv. */
export const localeName: Record<Locale, string> = { no: 'Norsk', en: 'English' };

/**
 * Stien til hver seksjon, per språk. Engelske adresser bruker engelske ord –
 * det leser bedre og gir et lite løft i søk.
 */
const routes = {
  home: { no: '/', en: '/en' },
  episodes: { no: '/episoder', en: '/en/episodes' },
  guests: { no: '/gjester', en: '/en/guests' },
  resources: { no: '/ressurser', en: '/en/resources' },
  courses: { no: '/kurs', en: '/en/courses' },
  about: { no: '/om', en: '/en/about' },
  contact: { no: '/kontakt', en: '/en/contact' },
  ethics: { no: '/var-varsom', en: '/en/editorial-standards' },
  suggestGuest: { no: '/foresla-gjest', en: '/en/suggest-a-guest' },
  beGuest: { no: '/bli-gjest', en: '/en/be-a-guest' },
  partner: { no: '/samarbeid', en: '/en/collaborate' },
  privacy: { no: '/personvern', en: '/en/privacy' },
  terms: { no: '/vilkar', en: '/en/terms' },
} as const;

export type RouteKey = keyof typeof routes;

/** Undersiden med manus/transkripsjon, som henger under en episode. */
const transcriptSegment: Record<Locale, string> = { no: 'manus', en: 'transcript' };

/** Stien til en seksjon, med skråstrek til slutt. */
export function path(lang: Locale, key: RouteKey): string {
  const p = routes[key][lang];
  return p.endsWith('/') ? p : `${p}/`;
}

/** Stien til en enkelt oppføring i en seksjon, f.eks. en episode. */
export function entryPath(lang: Locale, key: RouteKey, slug: string): string {
  return `${path(lang, key)}${slug}/`;
}

/** Stien til manuset/transkripsjonen for en episode. */
export function transcriptPath(lang: Locale, slug: string): string {
  return `${entryPath(lang, 'episodes', slug)}${transcriptSegment[lang]}/`;
}

/**
 * Finner språket ut fra adressen. Alt under /en/ er engelsk, resten norsk.
 */
export function localeFromUrl(url: URL): Locale {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'no';
}

/**
 * Samme side på det andre språket. Brukes av språkknappen og av hreflang.
 *
 * Oversettelsen av selve adressen gjøres ved å slå opp seksjonen i tabellen
 * over, slik at /episoder/sturla/ blir /en/episodes/sturla/ – og ikke bare får
 * et /en/ foran seg.
 */
export function alternatePath(lang: Locale, current: string): string {
  const other: Locale = lang === 'no' ? 'en' : 'no';
  const clean = current.replace(/\/+$/, '') || '/';

  // Lengst treff først, ellers ville /om matchet før /om-noe-annet
  const keys = (Object.keys(routes) as RouteKey[])
    .filter((k) => k !== 'home')
    .sort((a, b) => routes[b][lang].length - routes[a][lang].length);

  for (const key of keys) {
    const base = routes[key][lang];
    if (clean === base || clean.startsWith(`${base}/`)) {
      let rest = clean.slice(base.length);
      // Oversett også det siste leddet for manus/transkripsjon
      const from = transcriptSegment[lang];
      const to = transcriptSegment[other];
      if (rest.endsWith(`/${from}`)) rest = `${rest.slice(0, -from.length)}${to}`;
      const target = `${routes[key][other]}${rest}`;
      return target.endsWith('/') ? target : `${target}/`;
    }
  }

  return path(other, 'home');
}
