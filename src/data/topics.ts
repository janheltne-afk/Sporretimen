/**
 * Temaregisteret for Spørretimen.
 *
 * Hvert innhold har ett hovedtema og kan ha undertemaer under det. Registeret
 * her er eneste sted temaene defineres: etiketter på begge språk, kort
 * beskrivelse, og hvilke undertemaer som hører til.
 *
 * Slugen er den samme på norsk og engelsk. Det er bevisst: språkknappen og
 * hreflang parer sider ved å bytte ut seksjonen i adressen (/temaer/ →
 * /en/topics/), og da må siste ledd være likt på begge språk.
 *
 * Nye temaer legges til ved å utvide lista. Rekkefølgen her er rekkefølgen de
 * vises i. Ingenting annet i koden trenger å endres.
 */

import type { Locale } from '@/i18n/config';

type Text = Record<Locale, string>;

export interface Subtopic {
  id: string;
  label: Text;
  blurb: Text;
}

export interface Topic {
  id: string;
  /** Navn på ikonet i `topicIcons` (src/data/topic-icons.ts). */
  icon: string;
  label: Text;
  blurb: Text;
  subtopics: Subtopic[];
}

export const topics: Topic[] = [
  {
    id: 'okonomi',
    icon: 'coins',
    label: { no: 'Økonomi' },
    blurb: {
      no: 'Penger, investering, markeder og hvordan økonomien fungerer.',
    },
    subtopics: [
      {
        id: 'privatokonomi',
        label: { no: 'Privatøkonomi' },
        blurb: {
          no: 'Lønn, sparing, gjeld, budsjett og de valgene som faktisk flytter din egen økonomi.',
        },
      },
      {
        id: 'investering',
        label: { no: 'Investering' },
        blurb: {
          no: 'Aksjer, fond, risiko, avkastning og hvordan man tenker langsiktig om sparing.',
        },
      },
      {
        id: 'mikrookonomi',
        label: { no: 'Mikroøkonomi' },
        blurb: {
          no: 'Tilbud, etterspørsel, priser og hvordan enkeltaktører tar økonomiske valg.',
        },
      },
      {
        id: 'makrookonomi',
        label: { no: 'Makroøkonomi' },
        blurb: {
          no: 'Inflasjon, renter, arbeidsledighet og de store systemene som styrer økonomien.',
        },
      },
      {
        id: 'bedriftsokonomi',
        label: { no: 'Bedriftsøkonomi' },
        blurb: {
          no: 'Regnskap, marginer, kontantstrøm og hvordan man leser tallene i en virksomhet.',
        },
      },
      {
        id: 'eiendom',
        label: { no: 'Eiendom' },
        blurb: {
          no: 'Bolig, utleie, lån og hva som faktisk avgjør om eiendom lønner seg.',
        },
      },
      {
        id: 'atferdsokonomi',
        label: { no: 'Atferdsøkonomi' },
        blurb: {
          no: 'Hvorfor vi tar økonomiske valg som ikke er rasjonelle – og hva vi kan gjøre med det.',
        },
      },
      {
        id: 'risiko-og-usikkerhet',
        label: { no: 'Risiko & usikkerhet' },
        blurb: {
          no: 'Hvordan man tenker om det som kan gå galt – og om det ingen så komme.',
        },
      },
      {
        id: 'krypto-og-blockchain',
        label: { no: 'Krypto & blockchain' },
        blurb: {
          no: 'Bitcoin, blokkjeder og teknologien bak – forklart uten hype.',
        },
      },
    ],
  },
  {
    id: 'teknologi-og-ai',
    icon: 'chip',
    label: { no: 'Teknologi & AI' },
    blurb: {
      no: 'Kunstig intelligens, data, automatisering og fremtidens teknologi.',
    },
    subtopics: [
      {
        id: 'kunstig-intelligens',
        label: { no: 'Kunstig intelligens' },
        blurb: {
          no: 'Hvordan språkmodeller og AI-verktøy faktisk fungerer, og hva de duger til.',
        },
      },
      {
        id: 'automatisering',
        label: { no: 'Automatisering' },
        blurb: {
          no: 'Hva som lar seg automatisere, hva som ikke gjør det, og hva det betyr for jobbene.',
        },
      },
      {
        id: 'data-og-beslutninger',
        label: { no: 'Data & beslutninger' },
        blurb: {
          no: 'Hvordan tall og målinger brukes – og misbrukes – når noe skal bestemmes.',
        },
      },
      {
        id: 'fremtidens-arbeidsliv',
        label: { no: 'Fremtidens arbeidsliv' },
        blurb: {
          no: 'Hvordan teknologien endrer hva vi jobber med og hvordan vi jobber.',
        },
      },
    ],
  },
  {
    id: 'psykologi-og-beslutninger',
    icon: 'head',
    label: { no: 'Psykologi & beslutninger' },
    blurb: {
      no: 'Hvordan mennesker tenker, velger og tar beslutninger.',
    },
    subtopics: [
      {
        id: 'tenkning-og-bias',
        label: { no: 'Tenkning & tankefeller' },
        blurb: {
          no: 'Systematiske feil i tenkningen vår, og hvorfor de er så vanskelige å se selv.',
        },
      },
      {
        id: 'vaner',
        label: { no: 'Vaner' },
        blurb: {
          no: 'Hvordan vaner oppstår, holder seg og lar seg endre.',
        },
      },
      {
        id: 'motivasjon-og-fokus',
        label: { no: 'Motivasjon & fokus' },
        blurb: {
          no: 'Oppmerksomhet, drivkraft og hva som skal til for å stå i noe over tid.',
        },
      },
      {
        id: 'personlighet',
        label: { no: 'Personlighet' },
        blurb: {
          no: 'Hva personlighet er, hva som faktisk lar seg måle, og hva som bare er merkelapper.',
        },
      },
      {
        id: 'relasjoner',
        label: { no: 'Relasjoner' },
        blurb: {
          no: 'Hvordan folk faktisk reagerer på hverandre – og hva som får dem til å like deg.',
        },
      },
      {
        id: 'pavirkning-og-forhandling',
        label: { no: 'Påvirkning & forhandling' },
        blurb: {
          no: 'Mekanismene som får folk til å si ja, og hvordan man forhandler uten å møte på midten.',
        },
      },
    ],
  },
  {
    id: 'laering',
    icon: 'book',
    label: { no: 'Læring' },
    blurb: {
      no: 'Hukommelse, studieteknikk, bøker og hvordan vi faktisk lærer.',
    },
    subtopics: [
      {
        id: 'hukommelse',
        label: { no: 'Hukommelse' },
        blurb: {
          no: 'Husketeknikker, minnepalass og hvorfor hjernen husker bilder bedre enn tall.',
        },
      },
      {
        id: 'studieteknikk',
        label: { no: 'Studieteknikk' },
        blurb: {
          no: 'Lesing, notater, repetisjon og metodene som faktisk gir læring.',
        },
      },
      {
        id: 'hoderegning',
        label: { no: 'Hoderegning' },
        blurb: {
          no: 'Regnesystemer og triks som gjør tall lettere å håndtere uten kalkulator.',
        },
      },
      {
        id: 'ekspertise-og-ovelse',
        label: { no: 'Ekspertise & øvelse' },
        blurb: {
          no: 'Hva som faktisk skiller de beste fra resten – talent, timer, omstendigheter eller noe annet.',
        },
      },
    ],
  },
  {
    id: 'arbeidsliv-og-naeringsliv',
    icon: 'briefcase',
    label: { no: 'Arbeidsliv & næringsliv' },
    blurb: {
      no: 'Karriere, bedrifter, ledelse og hverdagen i arbeidslivet.',
    },
    subtopics: [
      {
        id: 'karriere',
        label: { no: 'Karriere' },
        blurb: {
          no: 'Veien inn i et yrke, utdanningen som kreves og hvordan arbeidsdagen faktisk er.',
        },
      },
      {
        id: 'ledelse',
        label: { no: 'Ledelse' },
        blurb: {
          no: 'Å lede folk, ta beslutninger og bære ansvar.',
        },
      },
      {
        id: 'grunderskap',
        label: { no: 'Gründerskap' },
        blurb: {
          no: 'Å bygge noe selv – fra idé til noe som faktisk bærer.',
        },
      },
      {
        id: 'logistikk-og-supply-chain',
        label: { no: 'Logistikk & supply chain' },
        blurb: {
          no: 'Varestrømmer, lager og systemene som gjør at ting faktisk kommer frem.',
        },
      },
    ],
  },
  {
    id: 'helse',
    icon: 'pulse',
    label: { no: 'Helse' },
    blurb: {
      no: 'Kropp, søvn, helsevesenet og hva som faktisk påvirker hvordan vi har det.',
    },
    subtopics: [
      {
        id: 'sovn',
        label: { no: 'Søvn' },
        blurb: {
          no: 'Døgnrytme, søvntrykk og hva som faktisk gir bedre netter.',
        },
      },
      {
        id: 'helsevesenet',
        label: { no: 'Helsevesenet' },
        blurb: {
          no: 'Hvordan helsetjenesten ser ut innenfra, fra dem som jobber der.',
        },
      },
    ],
  },
  {
    id: 'samfunn',
    icon: 'globe',
    label: { no: 'Samfunn' },
    blurb: {
      no: 'Fenomenene og systemene som påvirker verden rundt oss.',
    },
    subtopics: [
      {
        id: 'frivillighet',
        label: { no: 'Frivillighet' },
        blurb: {
          no: 'Arbeidet folk gjør uten å få betalt for det, og hva det betyr.',
        },
      },
      {
        id: 'beredskap',
        label: { no: 'Beredskap' },
        blurb: {
          no: 'Hvordan samfunnet – og den enkelte – står rustet når noe går galt.',
        },
      },
    ],
  },
  {
    id: 'kultur',
    icon: 'note',
    label: { no: 'Kultur' },
    blurb: {
      no: 'Musikk, skaping og businessen bak det som lages.',
    },
    subtopics: [
      {
        id: 'musikk',
        label: { no: 'Musikk' },
        blurb: {
          no: 'Livet som artist, rettigheter, konsertøkonomi og veien gjennom bransjen.',
        },
      },
    ],
  },
  {
    id: 'friluftsliv',
    icon: 'mountain',
    label: { no: 'Friluftsliv' },
    blurb: {
      no: 'Turer, ekspedisjoner, risiko og det å klare seg ute.',
    },
    subtopics: [
      {
        id: 'ekspedisjon',
        label: { no: 'Ekspedisjon' },
        blurb: {
          no: 'Lange turer, planlegging og hva som skjer når hjelpen er langt unna.',
        },
      },
    ],
  },
];

/* ------------------------------------------------------------------ oppslag */

const byId = new Map(topics.map((t) => [t.id, t]));

/** Hovedtemaet med en gitt id. */
export function topicById(id: string): Topic | undefined {
  return byId.get(id);
}

/** Et undertema, sammen med hovedtemaet det hører til. */
export function subtopicById(id: string): { topic: Topic; subtopic: Subtopic } | undefined {
  for (const topic of topics) {
    const subtopic = topic.subtopics.find((s) => s.id === id);
    if (subtopic) return { topic, subtopic };
  }
  return undefined;
}

/** Etiketten til et hovedtema på ett språk. */
export function topicLabel(lang: Locale, id: string): string | undefined {
  return byId.get(id)?.label[lang];
}

/** Etiketten til et undertema på ett språk. */
export function subtopicLabel(lang: Locale, id: string): string | undefined {
  return subtopicById(id)?.subtopic.label[lang];
}

/** Alle gyldige tema-id-er – brukes til validering ved bygg. */
export const topicIds: string[] = topics.map((t) => t.id);

/** Alle gyldige undertema-id-er. */
export const subtopicIds: string[] = topics.flatMap((t) => t.subtopics.map((s) => s.id));
