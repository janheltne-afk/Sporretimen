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
    'Spørretimen er en samtalepodkast om folk og jobbene deres. Lange, personlige samtaler med mennesker i alle slags yrker – om hvordan arbeidsdagen faktisk ser ut, hva som førte dem dit, og hva de har lært underveis.',
  url: 'https://www.sporretimen.no',
  host: 'Jan Sindre Heltne',
  locale: 'nb_NO',
  lang: 'no',
  // Standard e-post for henvendelser. Endre til ønsket adresse.
  email: 'post@sporretimen.no',
  // Telefon. `phone` er i internasjonalt format og brukes i tel:-lenker,
  // `phoneDisplay` er slik nummeret skrives for folk.
  phone: '+4799338406',
  phoneDisplay: '993 38 406',
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
  { label: 'Episoder', href: '/episoder/' },
  { label: 'Gjester', href: '/gjester/' },
  { label: 'Ressurser', href: '/ressurser/' },
  { label: 'Om', href: '/om/' },
  { label: 'Vær Varsom', href: '/var-varsom/' },
  { label: 'Foreslå en gjest', href: '/foresla-gjest/' },
  { label: 'Bli gjest', href: '/bli-gjest/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

/**
 * Lenker til plattformer og sosiale medier.
 * PLASSHOLDERE: Sett inn de faktiske adressene når de er klare.
 * `url: null` skjuler lenken automatisk i grensesnittet.
 */
export const socials: {
  label: string;
  url: string | null;
  handle?: string;
  /**
   * Kanalen finnes bare for ett språk. Uten feltet vises lenken på begge.
   */
  lang?: 'no' | 'en';
}[] = [
  { label: 'YouTube', url: 'https://www.youtube.com/@Spørretimen', handle: '@Spørretimen' },
  { label: 'Spotify', url: 'https://open.spotify.com/show/033Mnzddmlaiq3gU9FWDDa' },
  {
    label: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/no/podcast/sp%C3%B8rretimen/id6795102836',
  },
  { label: 'Instagram', url: 'https://www.instagram.com/sporretimen/', handle: '@sporretimen' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@sporretimen', handle: '@sporretimen' },
  { label: 'Facebook', url: null },
  { label: 'LinkedIn', url: null },
];

/**
 * Kanallenkene for ett språk. Kanaler merket med `lang` hører til ett språk,
 * mens de uten felt gjelder begge. Alle steder som viser eller lenker til kanaler,
 * skal gå gjennom denne, ellers sender engelske sider folk til norsk innhold.
 */
export function socialsFor(lang: 'no' | 'en') {
  return socials.filter((s) => s.url && (!s.lang || s.lang === lang));
}

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
] as const;

export type FormatId = (typeof formats)[number]['id'];





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

/**
 * Finnerlønnen på yrkessiden.
 *
 * Dette er en finnerlønn, ikke en konkurranse: alle som tipser om noen det
 * faktisk blir en samtale med, får den samme takken. Det er med vilje. En
 * trekning blant innsenderne ville vært en markedsføringskonkurranse med
 * egne regler om vilkår, trekningstidspunkt og hvem som kan delta.
 *
 * `belonning` er det eneste du trenger å endre om du vil love noe konkret.
 * Står det et beløp eller en gjenstand her, er det et løfte til publikum –
 * skriv bare det du faktisk kommer til å gi.
 */
export const finnerlonn = {
  eyebrow: { no: 'Finnerlønn' },
  tittel: {
    no: 'Kjenner du noen med en jobb vi ikke har hørt om?',
  },
  ingress: {
    no: 'De grå yrkene over er ledige. Tipser du om noen, og det blir en samtale av det, får du finnerlønn.',
  },
  trinn: [
    {
      no: 'Trykk på et grått yrke, eller skriv det selv i skjemaet.',
    },
    {
      no: 'Fortell hvem det er og hvordan vi når deg.',
    },
    {
      no: 'Blir det en samtale av det, tar vi kontakt med deg først.',
    },
  ],
  belonning: {
    no: 'Finnerlønnen avtales direkte med deg, og du får en takk i episoden hvis du vil.',
  },
  vilkar: {
    no: 'Alle som tipser om noen det blir en samtale med, får finnerlønn – det er ingen trekning. Du må ha lov til å dele kontaktopplysningene du sender inn, og personen selv bestemmer om hen vil være med. Opplysningene brukes bare til å ta kontakt, og slettes om det ikke blir noe av.',
  },
} as const;
