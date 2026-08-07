/**
 * Sentral konfigurasjon for Spørretimen.
 *
 * Nesten alt som skal endres ofte – navigasjon, kontaktinfo, lenker til
 * plattformer og sosiale medier, formater og kategorier – ligger her.
 * Endre verdiene her, så oppdateres hele nettsiden.
 */

export const site = {
  name: 'Spørretimen',
  tagline: 'Gode spørsmål. Interessante mennesker. Nye perspektiver.',
  description:
    'Spørretimen er en norsk podcast med personlige samtaler, lærerike Lær noe nytt-episoder og korte forklaringer om yrker, erfaringer og temaer du alltid har ønsket å forstå bedre.',
  url: 'https://www.sporretimen.no',
  host: 'Jan Sindre Heltne',
  locale: 'nb_NO',
  lang: 'no',
  // Standard e-post for henvendelser. Endre til ønsket adresse.
  email: 'post@sporretimen.no',
  // Portrett av programlederen, brukt på forsiden og Om-siden.
  hostImage: '/images/jan-sindre-heltne.jpg',
  // Standard delingsbilde for sosiale medier (Open Graph).
  ogImage: '/images/jan-sindre-heltne.jpg',
  // Standard plassholderomslag for episoder uten eget bilde.
  placeholderImage: '/images/placeholder.jpg',
} as const;

/**
 * Bygger en absolutt, kanonisk URL for en sti på hoveddomenet.
 * Legger alltid på trailing slash slik at canonical matcher sitemap-et
 * (@astrojs/sitemap genererer directory-URL-er med skråstrek til slutt).
 */
export function canonicalUrl(pathname = '/'): string {
  const clean = pathname.split(/[?#]/)[0];
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`;
  return new URL(withSlash, site.url).href;
}

/** Absolutt URL for en ressurs/bilde (uten trailing slash). */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}

/** Bygger BreadcrumbList-structured data fra en liste med navn + sti. */
export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

/**
 * Skjemaoppsett.
 *
 * `endpoint` er adressen skjemaene sender til (POST). Sett den til en tjeneste
 * som Formspree, Netlify Forms, Getform eller en egen funksjon når den er klar.
 * Så lenge `endpoint` er null, åpner skjemaene i stedet en ferdig utfylt
 * e-post til adressen under (fungerer uten backend).
 */
export const forms = {
  endpoint: null as string | null,
  recipient: 'post@sporretimen.no',
} as const;

/**
 * Hovednavigasjon.
 */
export const nav: { label: string; href: string }[] = [
  { label: 'Episoder', href: '/episoder' },
  { label: 'Gjester', href: '/gjester' },
  { label: 'Ressurser', href: '/ressurser' },
  { label: 'Om', href: '/om' },
  { label: 'Vær Varsom', href: '/var-varsom' },
  { label: 'Foreslå en gjest', href: '/foresla-gjest' },
  { label: 'Bli gjest', href: '/bli-gjest' },
  { label: 'Samarbeid', href: '/samarbeid' },
  { label: 'Kontakt', href: '/kontakt' },
];

/**
 * Lenker til plattformer og sosiale medier.
 * PLASSHOLDERE: Sett inn de faktiske adressene når de er klare.
 * `url: null` skjuler lenken automatisk i grensesnittet.
 */
export const socials: { label: string; url: string | null; handle?: string }[] = [
  { label: 'YouTube', url: 'https://www.youtube.com/@Spørretimen', handle: '@Spørretimen' },
  { label: 'Spotify', url: 'https://open.spotify.com/show/033Mnzddmlaiq3gU9FWDDa' },
  { label: 'Apple Podcasts', url: null },
  { label: 'Instagram', url: null, handle: '@sporretimen' },
  { label: 'TikTok', url: null, handle: '@sporretimen' },
  { label: 'Facebook', url: null },
  { label: 'LinkedIn', url: null },
];

/**
 * De tre publiseringsformatene.
 */
export const formats = [
  {
    id: 'samtale',
    label: 'Samtaler',
    singular: 'Samtale',
    tagline: 'Personlige dybdeintervjuer',
    description:
      'Lengre, personlige samtaler om gjestens bakgrunn, utdanning, arbeidsdag, vendepunkter og råd videre. Det skal føles som en naturlig prat – ikke et stivt jobbintervju.',
    icon: 'chat',
  },
  {
    id: 'laer-noe-nytt',
    label: 'Lær noe nytt',
    singular: 'Lær noe nytt',
    tagline: 'Grundige forklaringer',
    description:
      'Lengre forklaringsepisoder der Jan Sindre går i dybden på et tema. Lærerike, praktiske og kildebaserte – forklart så vanlige lyttere kan henge med.',
    icon: 'book',
  },
  {
    id: 'kort-forklart',
    label: 'Kort forklart',
    singular: 'Kort forklart',
    tagline: 'Cirka 5–10 minutter',
    description:
      'Korte episoder som oppsummerer ett konkret tema enkelt og oversiktlig. Lette å finne og lette å høre på når du har begrenset tid.',
    icon: 'bolt',
  },
] as const;

export type FormatId = (typeof formats)[number]['id'];

/**
 * Typer i ressursarkivet.
 */
export const resourceTypes = [
  { id: 'bok', label: 'Bok', plural: 'Bøker', icon: 'book' },
  { id: 'husketeknikk', label: 'Husketeknikk', plural: 'Husketeknikker', icon: 'brain' },
  { id: 'tips', label: 'Tips & triks', plural: 'Tips & triks', icon: 'bulb' },
  { id: 'verktoy', label: 'Verktøy', plural: 'Verktøy', icon: 'tool' },
  { id: 'artikkel', label: 'Artikkel', plural: 'Artikler', icon: 'doc' },
  { id: 'podkast', label: 'Podkast', plural: 'Podkaster', icon: 'mic' },
] as const;

export type ResourceTypeId = (typeof resourceTypes)[number]['id'];

export function resourceTypeById(id: string) {
  return resourceTypes.find((t) => t.id === id);
}

/**
 * Alle typene en ressurs hører til (hovedtype først, så eventuelle
 * tilleggstyper). Brukes til merkelapper og filtrering.
 */
export function allResourceTypes(data: { type: string; alsoTypes?: string[] }): string[] {
  return [data.type, ...(data.alsoTypes ?? [])];
}

/**
 * Statuser for kurs. Interesse fra besøkende brukes til å avgjøre hvilke
 * kurs som prioriteres og får fortgang.
 */
export const courseStatuses = {
  vurderes: {
    label: 'Bygges ved interesse',
    hint: 'Dette kurset finnes ikke ennå – det er et eksempel på hva som kan settes opp. Meld interesse: blir det mange nok, bygges kurset.',
  },
  planlagt: {
    label: 'Planlagt',
    hint: 'Interessen var stor nok – kurset er besluttet og under utvikling. Meld interesse for å få beskjed først.',
  },
  apen: {
    label: 'Påmelding åpen',
    hint: 'Kurset er i gang – meld interesse for å bli kontaktet om plass.',
  },
} as const;

export type CourseStatusId = keyof typeof courseStatuses;

/**
 * Emnekategorier brukt til filtrering av episoder.
 */
export const categories = [
  'Karriere',
  'Økonomi',
  'Helse',
  'Friluftsliv',
  'Musikk',
  'Teknologi',
  'Arbeidsliv',
  'Utdanning',
  'Frivillighet',
] as const;

export type Category = (typeof categories)[number];

/**
 * Slår opp metadata for et format basert på id.
 */
export function formatById(id: string) {
  return formats.find((f) => f.id === id);
}
