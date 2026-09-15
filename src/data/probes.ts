/**
 * «Hva vil du lære mer om?» på forsiden.
 *
 * Dette er temaer vi tester interessen for – de trenger ikke ha innhold ennå.
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
    label: { no: 'AI i arbeidslivet', en: 'AI at work' },
    blurb: {
      no: 'Hva som faktisk endrer seg i jobbene, og hva som bare høres ut som det.',
      en: 'What is actually changing in the jobs, and what only sounds like it.',
    },
  },
  {
    subtopic: 'makrookonomi',
    label: { no: 'Hvordan forstå økonomien', en: 'Making sense of the economy' },
    blurb: {
      no: 'Renter, inflasjon og styringsrenten – forklart uten forkunnskaper.',
      en: 'Interest rates, inflation and the policy rate – explained with no prior knowledge.',
    },
  },
  {
    subtopic: 'tenkning-og-bias',
    label: { no: 'Psykologien bak gode beslutninger', en: 'The psychology of good decisions' },
    blurb: {
      no: 'Hvorfor vi tar feil på samme måte hver gang, og hva som faktisk hjelper.',
      en: 'Why we get things wrong the same way every time, and what actually helps.',
    },
  },
  {
    subtopic: 'krypto-og-blockchain',
    label: { no: 'Bitcoin og blockchain', en: 'Bitcoin and blockchain' },
    blurb: {
      no: 'Hva teknologien faktisk gjør, forklart uten hype og uten forakt.',
      en: 'What the technology actually does, explained without hype and without contempt.',
    },
  },
  {
    subtopic: 'hukommelse',
    label: { no: 'Hukommelse og læring', en: 'Memory and learning' },
    blurb: {
      no: 'Teknikkene som virker, og hvorfor hjernen husker bilder bedre enn tall.',
      en: 'The techniques that work, and why the brain remembers images better than numbers.',
    },
  },
  {
    subtopic: 'data-og-beslutninger',
    label: { no: 'Data og beslutninger', en: 'Data and decisions' },
    blurb: {
      no: 'Hvordan tall brukes – og misbrukes – når noe skal bestemmes.',
      en: 'How numbers are used – and misused – when something has to be decided.',
    },
  },
];
