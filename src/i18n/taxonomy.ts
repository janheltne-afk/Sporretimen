/**
 * Faste lister som vises til besøkende: serier, formater, ressurstyper og
 * kursstatuser – på begge språk.
 *
 * Id-ene er de samme på tvers av språk (`samtale`, `bok`, `apen` …), så
 * innholdsfilene bruker samme verdi uansett språk. Bare etikettene skifter.
 *
 * Temaene ligger for seg selv i src/data/topics.ts, siden de har undertemaer
 * og egne sider.
 */

import type { Locale } from './config';

type Text = Record<Locale, string>;

/**
 * De to innholdssporene. Serien utledes av formatet – `samtale` hører til
 * Spørretimen, alt annet til Spørretimen Forklart – så den lagres ikke i
 * frontmatter. Ett sted å endre, ingen mulighet for at de spriker.
 */
export const seriesList = [
  {
    id: 'sporretimen',
    label: { no: 'Spørretimen', en: 'Spørretimen' } as Text,
    kicker: { no: 'Samtalene', en: 'The conversations' } as Text,
    blurb: {
      no: 'Lange samtaler med mennesker med interessante erfaringer, historier, yrker og kunnskap.',
      en: 'Long conversations with people who carry interesting experience, stories, professions and knowledge.',
    } as Text,
  },
  {
    id: 'sporretimen-forklart',
    label: { no: 'Spørretimen Forklart', en: 'Spørretimen Explained' } as Text,
    kicker: { no: 'Ideene', en: 'The ideas' } as Text,
    blurb: {
      no: 'Økonomi, teknologi, psykologi, bøker og andre temaer forklart forståelig.',
      en: 'Economics, technology, psychology, books and other subjects explained so they make sense.',
    } as Text,
  },
] as const;

export type SeriesId = (typeof seriesList)[number]['id'];

/** Serien et format hører til. Samtaler er Spørretimen, resten er Forklart. */
export function seriesOf(format: string): SeriesId {
  return format === 'samtale' ? 'sporretimen' : 'sporretimen-forklart';
}

export function seriesById(lang: Locale, id: string) {
  const s = seriesList.find((x) => x.id === id);
  if (!s) return undefined;
  return { id: s.id, label: s.label[lang], kicker: s.kicker[lang], blurb: s.blurb[lang] };
}

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
  {
    id: 'boker-forklart',
    icon: 'books',
    label: { no: 'Bøker forklart', en: 'Books explained' } as Text,
    singular: { no: 'Bøker forklart', en: 'Books explained' } as Text,
    tagline: { no: 'Ideene, ikke bokanmeldelsen', en: 'The ideas, not the review' } as Text,
    description: {
      no: 'Episoder som tar for seg ideene i en bok – hva den faktisk hevder, hva som er verdt å ta med seg, og hva som er omdiskutert. Ikke et sammendrag kapittel for kapittel.',
      en: 'Episodes that take on the ideas in a book – what it actually argues, what is worth carrying away, and what is disputed. Not a chapter-by-chapter summary.',
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
