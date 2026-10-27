/**
 * Faste lister som vises til besøkende: serier, formater og ressurstyper – på
 * begge språk.
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
 *
 * `channels` er seriens egne kanaler. Brukes i bunnteksten, i sameAs og som
 * partOfSeries på episodene.
 */
export const seriesList = [
  {
    id: 'sporretimen',
    label: { no: 'Spørretimen' } as Text,
    channels: {
      youtube: 'https://www.youtube.com/@Spørretimen',
      spotify: 'https://open.spotify.com/show/033Mnzddmlaiq3gU9FWDDa',
      apple: 'https://podcasts.apple.com/no/podcast/sp%C3%B8rretimen/id6795102836',
    },
    kicker: { no: 'Samtalene' } as Text,
    blurb: {
      no: 'Lange samtaler med mennesker med interessante erfaringer, historier, yrker og kunnskap.',
    } as Text,
  },
] as const;

export type SeriesId = (typeof seriesList)[number]['id'];

/** Serien et format hører til. Samtaler er Spørretimen, resten er Forklart. */
export function seriesOf(format: string): SeriesId {
  return 'sporretimen';
}

export function seriesById(lang: Locale, id: string) {
  const s = seriesList.find((x) => x.id === id);
  if (!s) return undefined;
  // Kanalene løses her, så ingen forbruker trenger å vite at en serie kan ha
  // en egen kanal per språk. `channelsEn` overstyrer per plattform.
  const channels =
    lang === 'en' && 'channelsEn' in s ? { ...s.channels, ...s.channelsEn } : s.channels;
  return { id: s.id, label: s.label[lang], kicker: s.kicker[lang], blurb: s.blurb[lang], channels };
}

export const formats = [
  {
    id: 'samtale',
    icon: 'chat',
    label: { no: 'Samtaler' } as Text,
    singular: { no: 'Samtale' } as Text,
    tagline: { no: 'Personlige dybdeintervjuer' } as Text,
    description: {
      no: 'Lengre, personlige samtaler om gjestens bakgrunn, utdanning, arbeidsdag, vendepunkter og råd videre. Det skal føles som en naturlig prat – ikke et stivt jobbintervju.',
    } as Text,
  },
] as const;



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

