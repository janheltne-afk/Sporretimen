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
 * Enkeltsider uten motstykke på det andre språket (manusene) setter
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
  // De to innholdssporene, hver med sin egen oversiktsside.
  conversations: { no: '/samtaler', en: '/en/conversations' },
  explained: { no: '/forklart', en: '/en/explained' },
  // Temabiblioteket. Undersidene ligger under, se topicPath().
  topics: { no: '/temaer', en: '/en/topics' },
  foredrag: { no: '/foredrag', en: '/en/talks' },
  profile: { no: '/jan-sindre-heltne', en: '/en/jan-sindre-heltne' },
  // Hele arkivet, på tvers av seriene. Adressen er uendret fra før.
  episodes: { no: '/episoder', en: '/en/episodes' },
  guests: { no: '/gjester', en: '/en/guests' },
  resources: { no: '/ressurser', en: '/en/resources' },
  about: { no: '/om', en: '/en/about' },
  contact: { no: '/kontakt', en: '/en/contact' },
  ethics: { no: '/var-varsom', en: '/en/editorial-standards' },
  principles: { no: '/redaksjonelle-prinsipper', en: '/en/editorial-principles' },
  suggestGuest: { no: '/foresla-gjest', en: '/en/suggest-a-guest' },
  beGuest: { no: '/bli-gjest', en: '/en/be-a-guest' },
  partner: { no: '/samarbeid', en: '/en/collaborate' },
  privacy: { no: '/personvern', en: '/en/privacy' },
  terms: { no: '/vilkar', en: '/en/terms' },
  search: { no: '/sok', en: '/en/search' },
} as const;

export type RouteKey = keyof typeof routes;

/** Undersiden med manus/transkripsjon, som henger under en episode. */
const transcriptSegment: Record<Locale, string> = { no: 'manus', en: 'transcript' };

/** Filnavnet på PDF-utgaven av episodebeskrivelsen. */
const pdfSegment: Record<Locale, string> = { no: 'beskrivelse.pdf', en: 'description.pdf' };

/** Undersiden der episoden vises som presentasjon. */
const presentationSegment: Record<Locale, string> = { no: 'presentasjon', en: 'presentation' };

/** Stien til en seksjon, med skråstrek til slutt. */
export function path(lang: Locale, key: RouteKey): string {
  const p = routes[key][lang];
  return p.endsWith('/') ? p : `${p}/`;
}

/** Stien til en enkelt oppføring i en seksjon, f.eks. en episode. */
export function entryPath(lang: Locale, key: RouteKey, slug: string): string {
  return `${path(lang, key)}${slug}/`;
}

/**
 * Stien til en temaside, eventuelt til et undertema under den.
 * /temaer/okonomi/ og /temaer/okonomi/makrookonomi/
 */
export function topicPath(lang: Locale, topicId: string, subtopicId?: string): string {
  const base = entryPath(lang, 'topics', topicId);
  return subtopicId ? `${base}${subtopicId}/` : base;
}

/** Stien til manuset/transkripsjonen for en episode. */
export function transcriptPath(lang: Locale, slug: string): string {
  return `${entryPath(lang, 'episodes', slug)}${transcriptSegment[lang]}/`;
}

/**
 * Hvilken del av nettstedet en adresse hører til. Brukes av søket, som får
 * nøkkelen lagt ut i HTML-en og grupperer treffene etter den.
 *
 * Utledes av den samme rutetabellen som resten, slik at en ny seksjon ikke
 * kan bli liggende usortert i søkeresultatene uten at det er et bevisst valg.
 */
export type SearchKind =
  | 'episode'
  | 'transcript'
  | 'resource'
  | 'guest'
  | 'topic'
  | 'index'
  | 'page';

/** Oversiktssidene. De lister opp annet innhold og har lite eget. */
const indexKeys = [
  'episodes',
  'conversations',
  'explained',
  'guests',
  'resources',
  'topics',
] as const satisfies readonly RouteKey[];

export function searchKindOf(lang: Locale, pathname: string): SearchKind {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/' || clean === routes.home[lang]) return 'index';

  // Roten i en seksjon er oversikten; alt under den er selve innholdet.
  if (indexKeys.some((key) => clean === routes[key][lang])) return 'index';

  const under = (key: RouteKey) => clean.startsWith(`${routes[key][lang]}/`);
  if (under('episodes')) {
    return clean.endsWith(`/${transcriptSegment[lang]}`) ? 'transcript' : 'episode';
  }
  if (under('resources')) return 'resource';
  if (under('guests')) return 'guest';
  if (under('topics')) return 'topic';
  return 'page';
}

/** Stien til PDF-en med episodebeskrivelsen. Uten skråstrek til slutt – det er en fil. */
export function episodePdfPath(lang: Locale, slug: string): string {
  return `${entryPath(lang, 'episodes', slug)}${pdfSegment[lang]}`;
}

/** Stien til presentasjonsutgaven av en episode. */
export function presentationPath(lang: Locale, slug: string): string {
  return `${entryPath(lang, 'episodes', slug)}${presentationSegment[lang]}/`;
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
      // ... og for presentasjonen, som har sitt eget ord på hvert språk
      const presFrom = presentationSegment[lang];
      if (rest.endsWith(`/${presFrom}`)) {
        rest = `${rest.slice(0, -presFrom.length)}${presentationSegment[other]}`;
      }
      // ... og filnavnet på PDF-en, som er en fil og ikke skal ha skråstrek
      const pdfFrom = pdfSegment[lang];
      if (rest.endsWith(`/${pdfFrom}`)) {
        return `${routes[key][other]}${rest.slice(0, -pdfFrom.length)}${pdfSegment[other]}`;
      }
      const target = `${routes[key][other]}${rest}`;
      return target.endsWith('/') ? target : `${target}/`;
    }
  }

  return path(other, 'home');
}
