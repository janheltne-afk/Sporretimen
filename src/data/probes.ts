/**
 * «Hva vil du lære mer om?» på forsiden.
 *
 * Dette er temaer som kan bli episoder – de trenger ikke ha innhold ennå.
 * Hvert punkt peker på et undertema i registeret, slik at stemmene her og
 * stemmene på temasidene teller sammen. Bytt ut lista fritt; forsiden leser
 * bare det som står her.
 */
import type { Locale } from '@/i18n/config';

export interface Probe {
  /** Undertema-id fra src/data/topics.ts. Stemmer lagres under denne. */
  subtopic: string;
  label: Record<Locale, string>;
  blurb: Record<Locale, string>;
}

export const probes: Probe[] = [
  {
    subtopic: 'fremtidens-arbeidsliv',
    label: { no: 'AI i arbeidslivet' },
    blurb: {
      no: 'Hva som faktisk endrer seg i jobbene, og hva som bare høres ut som det.',
    },
  },
  {
    subtopic: 'makrookonomi',
    label: { no: 'Hvordan forstå økonomien' },
    blurb: {
      no: 'Renter, inflasjon og styringsrenten – forklart uten forkunnskaper.',
    },
  },
  {
    subtopic: 'tenkning-og-bias',
    label: { no: 'Psykologien bak gode beslutninger' },
    blurb: {
      no: 'Hvorfor vi tar feil på samme måte hver gang, og hva som faktisk hjelper.',
    },
  },
  {
    subtopic: 'krypto-og-blockchain',
    label: { no: 'Bitcoin og blockchain' },
    blurb: {
      no: 'Hva teknologien faktisk gjør, forklart uten hype og uten forakt.',
    },
  },
  {
    subtopic: 'hukommelse',
    label: { no: 'Hukommelse og læring' },
    blurb: {
      no: 'Teknikkene som virker, og hvorfor hjernen husker bilder bedre enn tall.',
    },
  },
  {
    subtopic: 'data-og-beslutninger',
    label: { no: 'Data og beslutninger' },
    blurb: {
      no: 'Hvordan tall brukes – og misbrukes – når noe skal bestemmes.',
    },
  },
];
