/**
 * Faste lister som vises til besøkende: formater, ressurstyper, kursstatuser
 * og emnekategorier – på begge språk.
 *
 * Id-ene er de samme på tvers av språk (`samtale`, `bok`, `apen` …), så
 * innholdsfilene bruker samme verdi uansett språk. Bare etikettene skifter.
 *
 * Kategorier er unntaket: de står som ren tekst i frontmatter, så norske
 * filer bruker de norske ordene og engelske filer de engelske. `categoryId`
 * kobler dem sammen når det trengs.
 */

import type { Locale } from './config';

type Text = Record<Locale, string>;

export const formats = [
  {
    id: 'samtale',
    icon: 'chat',
    label: { no: 'Samtaler', en: 'Conversations' } as Text,
    singular: { no: 'Samtale', en: 'Conversation' } as Text,
    tagline: { no: 'Personlige dybdeintervjuer', en: 'Personal, in-depth interviews' } as Text,
    description: {
      no: 'Lengre, personlige samtaler om gjestens bakgrunn, utdanning, arbeidsdag, vendepunkter og råd videre. Det skal føles som en naturlig prat – ikke et stivt jobbintervju.',
      en: 'Longer, personal conversations about a guest’s background, education, working day, turning points and advice. It should feel like a real conversation – not a stiff job interview.',
    } as Text,
  },
  {
    id: 'laer-noe-nytt',
    icon: 'book',
    label: { no: 'Lær noe nytt', en: 'Learn something new' } as Text,
    singular: { no: 'Lær noe nytt', en: 'Learn something new' } as Text,
    tagline: { no: 'Grundige forklaringer', en: 'Thorough explainers' } as Text,
    description: {
      no: 'Lengre forklaringsepisoder der Jan Sindre går i dybden på et tema. Lærerike, praktiske og kildebaserte – forklart så vanlige lyttere kan henge med.',
      en: 'Longer explainer episodes where Jan Sindre goes deep on a single subject. Informative, practical and sourced – explained so any listener can follow.',
    } as Text,
  },
  {
    id: 'kort-forklart',
    icon: 'bolt',
    label: { no: 'Kort forklart', en: 'Briefly explained' } as Text,
    singular: { no: 'Kort forklart', en: 'Briefly explained' } as Text,
    tagline: { no: 'Cirka 5–10 minutter', en: 'Roughly 5–10 minutes' } as Text,
    description: {
      no: 'Korte episoder som oppsummerer ett konkret tema enkelt og oversiktlig. Lette å finne og lette å høre på når du har begrenset tid.',
      en: 'Short episodes that sum up one concrete subject simply and clearly. Easy to find and easy to listen to when time is short.',
    } as Text,
  },
] as const;

export const resourceTypes = [
  { id: 'bok', icon: 'book', label: { no: 'Bok', en: 'Book' }, plural: { no: 'Bøker', en: 'Books' } },
  {
    id: 'husketeknikk',
    icon: 'brain',
    label: { no: 'Husketeknikk', en: 'Memory technique' },
    plural: { no: 'Husketeknikker', en: 'Memory techniques' },
  },
  {
    id: 'tips',
    icon: 'bulb',
    label: { no: 'Tips & triks', en: 'Tips & tricks' },
    plural: { no: 'Tips & triks', en: 'Tips & tricks' },
  },
  { id: 'verktoy', icon: 'tool', label: { no: 'Verktøy', en: 'Tool' }, plural: { no: 'Verktøy', en: 'Tools' } },
  {
    id: 'artikkel',
    icon: 'doc',
    label: { no: 'Artikkel', en: 'Article' },
    plural: { no: 'Artikler', en: 'Articles' },
  },
  {
    id: 'podkast',
    icon: 'mic',
    label: { no: 'Podkast', en: 'Podcast' },
    plural: { no: 'Podkaster', en: 'Podcasts' },
  },
] as const;

export const courseStatuses = {
  vurderes: {
    label: { no: 'Bygges ved interesse', en: 'Built if there is interest' },
    hint: {
      no: 'Dette kurset finnes ikke ennå – det er et eksempel på hva som kan settes opp. Meld interesse: blir det mange nok, bygges kurset.',
      en: 'This course does not exist yet – it is an example of what could be set up. Register your interest: if enough people do, the course gets built.',
    },
  },
  planlagt: {
    label: { no: 'Planlagt', en: 'Planned' },
    hint: {
      no: 'Interessen var stor nok – kurset er besluttet og under utvikling. Meld interesse for å få beskjed først.',
      en: 'Interest was high enough – the course is decided and in development. Register your interest to hear first.',
    },
  },
  apen: {
    label: { no: 'Påmelding åpen', en: 'Enrolment open' },
    hint: {
      no: 'Kurset er i gang – meld interesse for å bli kontaktet om plass.',
      en: 'The course is running – register your interest to be contacted about a place.',
    },
  },
} as const;

/** Emnekategoriene, i samme rekkefølge på begge språk. */
const categoryPairs = [
  { no: 'Karriere', en: 'Career' },
  { no: 'Økonomi', en: 'Finance' },
  { no: 'Helse', en: 'Health' },
  { no: 'Friluftsliv', en: 'Outdoors' },
  { no: 'Musikk', en: 'Music' },
  { no: 'Teknologi', en: 'Technology' },
  { no: 'Arbeidsliv', en: 'Working life' },
  { no: 'Utdanning', en: 'Education' },
  { no: 'Frivillighet', en: 'Volunteering' },
] as const;

export function categories(lang: Locale): string[] {
  return categoryPairs.map((c) => c[lang]);
}

export function formatById(lang: Locale, id: string) {
  const f = formats.find((x) => x.id === id);
  if (!f) return undefined;
  return {
    id: f.id,
    icon: f.icon,
    label: f.label[lang],
    singular: f.singular[lang],
    tagline: f.tagline[lang],
    description: f.description[lang],
  };
}

export function formatList(lang: Locale) {
  return formats.map((f) => formatById(lang, f.id)!);
}

export function resourceTypeById(lang: Locale, id: string) {
  const r = resourceTypes.find((x) => x.id === id);
  if (!r) return undefined;
  return { id: r.id, icon: r.icon, label: r.label[lang], plural: r.plural[lang] };
}

export function resourceTypeList(lang: Locale) {
  return resourceTypes.map((r) => resourceTypeById(lang, r.id)!);
}

export function courseStatus(lang: Locale, id: keyof typeof courseStatuses) {
  const s = courseStatuses[id];
  return { label: s.label[lang], hint: s.hint[lang] };
}

/** Alle typene en ressurs hører til (hovedtype først, så tilleggstyper). */
export function allResourceTypes(data: { type: string; alsoTypes?: string[] }): string[] {
  return [data.type, ...(data.alsoTypes ?? [])];
}
