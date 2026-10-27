/**
 * Språkoppsett for Spørretimen.
 *
 * Nettstedet er på norsk. Oppsettet står igjen fordi rutetabellen og
 * `path()` bygger på det, og fordi et nytt språk da kan legges til uten å
 * skrive om hver eneste komponent: legg språket i `locales`, gi hver rute
 * en adresse, og legg til et strengsett i ui.ts.
 */

export const locales = ['no'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'no';

/** Språkkoder brukt i <html lang>, hreflang og Open Graph. */
export const htmlLang: Record<Locale, string> = { no: 'nb' };
export const ogLocale: Record<Locale, string> = { no: 'nb_NO' };

/** Navnet på språket, skrevet på språket selv. */
export const localeName: Record<Locale, string> = { no: 'Norsk' };

/**
 * Stien til hver seksjon, per språk. Engelske adresser bruker engelske ord –
 * det leser bedre og gir et lite løft i søk.
 */
const routes = {
  home: { no: '/' },
  // Samtalesporet. Hele nettstedet er nå podkastsamtalene.
  conversations: { no: '/samtaler' },
  foredrag: { no: '/foredrag' },
  profile: { no: '/jan-sindre-heltne' },
  // Hele arkivet, på tvers av seriene. Adressen er uendret fra før.
  episodes: { no: '/episoder' },
  guests: { no: '/gjester' },
  occupations: { no: '/yrker' },
  about: { no: '/om' },
  contact: { no: '/kontakt' },
  ethics: { no: '/var-varsom' },
  principles: { no: '/redaksjonelle-prinsipper' },
  tipGuest: { no: '/tips-inn-en-gjest' },
  beGuest: { no: '/bli-gjest' },
  privacy: { no: '/personvern' },
  terms: { no: '/vilkar' },
  search: { no: '/sok' },
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

/**
 * Stien til manuset/transkripsjonen for en episode.
 *
 * Teksten har ikke lenger en egen side – den står på episodesiden, under
 * et anker med samme ord som den gamle adressen brukte. Alle som lenket
 * til manuset, lenker dermed fortsatt til riktig sted på siden.
 */
export function transcriptPath(lang: Locale, slug: string): string {
  return `${entryPath(lang, 'episodes', slug)}#${transcriptSegment[lang]}`;
}

/** Ankerets id på episodesiden. Samme ord som den gamle ruten brukte. */
export function transcriptAnchor(lang: Locale): string {
  return transcriptSegment[lang];
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
  | 'guest'
  | 'index'
  | 'page';

/** Oversiktssidene. De lister opp annet innhold og har lite eget. */
const indexKeys = [
  'episodes',
  'conversations',
  'guests',
  'occupations',
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
  if (under('guests')) return 'guest';
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

