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
    label: { no: 'Økonomi', en: 'Economics' },
    blurb: {
      no: 'Penger, investering, markeder og hvordan økonomien fungerer.',
      en: 'Money, investing, markets and how the economy actually works.',
    },
    subtopics: [
      {
        id: 'privatokonomi',
        label: { no: 'Privatøkonomi', en: 'Personal finance' },
        blurb: {
          no: 'Lønn, sparing, gjeld, budsjett og de valgene som faktisk flytter din egen økonomi.',
          en: 'Pay, saving, debt, budgets and the choices that actually move your own finances.',
        },
      },
      {
        id: 'investering',
        label: { no: 'Investering', en: 'Investing' },
        blurb: {
          no: 'Aksjer, fond, risiko, avkastning og hvordan man tenker langsiktig om sparing.',
          en: 'Shares, funds, risk, return and how to think long term about saving.',
        },
      },
      {
        id: 'mikrookonomi',
        label: { no: 'Mikroøkonomi', en: 'Microeconomics' },
        blurb: {
          no: 'Tilbud, etterspørsel, priser og hvordan enkeltaktører tar økonomiske valg.',
          en: 'Supply, demand, prices and how individual actors make economic choices.',
        },
      },
      {
        id: 'makrookonomi',
        label: { no: 'Makroøkonomi', en: 'Macroeconomics' },
        blurb: {
          no: 'Inflasjon, renter, arbeidsledighet og de store systemene som styrer økonomien.',
          en: 'Inflation, interest rates, unemployment and the large systems steering the economy.',
        },
      },
      {
        id: 'bedriftsokonomi',
        label: { no: 'Bedriftsøkonomi', en: 'Business economics' },
        blurb: {
          no: 'Regnskap, marginer, kontantstrøm og hvordan man leser tallene i en virksomhet.',
          en: 'Accounts, margins, cash flow and how to read the numbers in a business.',
        },
      },
      {
        id: 'eiendom',
        label: { no: 'Eiendom', en: 'Property' },
        blurb: {
          no: 'Bolig, utleie, lån og hva som faktisk avgjør om eiendom lønner seg.',
          en: 'Housing, letting, loans and what actually decides whether property pays off.',
        },
      },
      {
        id: 'atferdsokonomi',
        label: { no: 'Atferdsøkonomi', en: 'Behavioural economics' },
        blurb: {
          no: 'Hvorfor vi tar økonomiske valg som ikke er rasjonelle – og hva vi kan gjøre med det.',
          en: 'Why we make economic choices that are not rational – and what to do about it.',
        },
      },
      {
        id: 'risiko-og-usikkerhet',
        label: { no: 'Risiko & usikkerhet', en: 'Risk & uncertainty' },
        blurb: {
          no: 'Hvordan man tenker om det som kan gå galt – og om det ingen så komme.',
          en: 'How to think about what can go wrong – and about what no one saw coming.',
        },
      },
      {
        id: 'krypto-og-blockchain',
        label: { no: 'Krypto & blockchain', en: 'Crypto & blockchain' },
        blurb: {
          no: 'Bitcoin, blokkjeder og teknologien bak – forklart uten hype.',
          en: 'Bitcoin, blockchains and the technology behind them – explained without the hype.',
        },
      },
    ],
  },
  {
    id: 'teknologi-og-ai',
    icon: 'chip',
    label: { no: 'Teknologi & AI', en: 'Technology & AI' },
    blurb: {
      no: 'Kunstig intelligens, data, automatisering og fremtidens teknologi.',
      en: 'Artificial intelligence, data, automation and the technology ahead of us.',
    },
    subtopics: [
      {
        id: 'kunstig-intelligens',
        label: { no: 'Kunstig intelligens', en: 'Artificial intelligence' },
        blurb: {
          no: 'Hvordan språkmodeller og AI-verktøy faktisk fungerer, og hva de duger til.',
          en: 'How language models and AI tools actually work, and what they are good for.',
        },
      },
      {
        id: 'automatisering',
        label: { no: 'Automatisering', en: 'Automation' },
        blurb: {
          no: 'Hva som lar seg automatisere, hva som ikke gjør det, og hva det betyr for jobbene.',
          en: 'What can be automated, what cannot, and what that means for jobs.',
        },
      },
      {
        id: 'data-og-beslutninger',
        label: { no: 'Data & beslutninger', en: 'Data & decisions' },
        blurb: {
          no: 'Hvordan tall og målinger brukes – og misbrukes – når noe skal bestemmes.',
          en: 'How numbers and measurement are used – and misused – when something must be decided.',
        },
      },
      {
        id: 'fremtidens-arbeidsliv',
        label: { no: 'Fremtidens arbeidsliv', en: 'The future of work' },
        blurb: {
          no: 'Hvordan teknologien endrer hva vi jobber med og hvordan vi jobber.',
          en: 'How technology is changing what we work on and how we work.',
        },
      },
    ],
  },
  {
    id: 'psykologi-og-beslutninger',
    icon: 'head',
    label: { no: 'Psykologi & beslutninger', en: 'Psychology & decisions' },
    blurb: {
      no: 'Hvordan mennesker tenker, velger og tar beslutninger.',
      en: 'How people think, choose and make decisions.',
    },
    subtopics: [
      {
        id: 'tenkning-og-bias',
        label: { no: 'Tenkning & tankefeller', en: 'Thinking & bias' },
        blurb: {
          no: 'Systematiske feil i tenkningen vår, og hvorfor de er så vanskelige å se selv.',
          en: 'Systematic errors in our thinking, and why they are so hard to spot from inside.',
        },
      },
      {
        id: 'vaner',
        label: { no: 'Vaner', en: 'Habits' },
        blurb: {
          no: 'Hvordan vaner oppstår, holder seg og lar seg endre.',
          en: 'How habits form, hold and can be changed.',
        },
      },
      {
        id: 'motivasjon-og-fokus',
        label: { no: 'Motivasjon & fokus', en: 'Motivation & focus' },
        blurb: {
          no: 'Oppmerksomhet, drivkraft og hva som skal til for å stå i noe over tid.',
          en: 'Attention, drive and what it takes to stay with something over time.',
        },
      },
      {
        id: 'personlighet',
        label: { no: 'Personlighet', en: 'Personality' },
        blurb: {
          no: 'Hva personlighet er, hva som faktisk lar seg måle, og hva som bare er merkelapper.',
          en: 'What personality is, what can actually be measured, and what is merely labels.',
        },
      },
      {
        id: 'relasjoner',
        label: { no: 'Relasjoner', en: 'Relationships' },
        blurb: {
          no: 'Hvordan folk faktisk reagerer på hverandre – og hva som får dem til å like deg.',
          en: 'How people actually respond to one another – and what makes them like you.',
        },
      },
      {
        id: 'pavirkning-og-forhandling',
        label: { no: 'Påvirkning & forhandling', en: 'Persuasion & negotiation' },
        blurb: {
          no: 'Mekanismene som får folk til å si ja, og hvordan man forhandler uten å møte på midten.',
          en: 'The mechanisms that make people say yes, and how to negotiate without splitting the difference.',
        },
      },
    ],
  },
  {
    id: 'laering',
    icon: 'book',
    label: { no: 'Læring', en: 'Learning' },
    blurb: {
      no: 'Hukommelse, studieteknikk, bøker og hvordan vi faktisk lærer.',
      en: 'Memory, study technique, books and how we actually learn.',
    },
    subtopics: [
      {
        id: 'hukommelse',
        label: { no: 'Hukommelse', en: 'Memory' },
        blurb: {
          no: 'Husketeknikker, minnepalass og hvorfor hjernen husker bilder bedre enn tall.',
          en: 'Memory techniques, memory palaces and why the brain remembers images better than numbers.',
        },
      },
      {
        id: 'studieteknikk',
        label: { no: 'Studieteknikk', en: 'Study technique' },
        blurb: {
          no: 'Lesing, notater, repetisjon og metodene som faktisk gir læring.',
          en: 'Reading, notes, revision and the methods that actually produce learning.',
        },
      },
      {
        id: 'hoderegning',
        label: { no: 'Hoderegning', en: 'Mental arithmetic' },
        blurb: {
          no: 'Regnesystemer og triks som gjør tall lettere å håndtere uten kalkulator.',
          en: 'Systems and tricks that make numbers easier to handle without a calculator.',
        },
      },
      {
        id: 'ekspertise-og-ovelse',
        label: { no: 'Ekspertise & øvelse', en: 'Expertise & practice' },
        blurb: {
          no: 'Hva som faktisk skiller de beste fra resten – talent, timer, omstendigheter eller noe annet.',
          en: 'What actually separates the best from the rest – talent, hours, circumstance or something else.',
        },
      },
    ],
  },
  {
    id: 'arbeidsliv-og-naeringsliv',
    icon: 'briefcase',
    label: { no: 'Arbeidsliv & næringsliv', en: 'Work & business' },
    blurb: {
      no: 'Karriere, bedrifter, ledelse og hverdagen i arbeidslivet.',
      en: 'Careers, companies, leadership and the reality of working life.',
    },
    subtopics: [
      {
        id: 'karriere',
        label: { no: 'Karriere', en: 'Careers' },
        blurb: {
          no: 'Veien inn i et yrke, utdanningen som kreves og hvordan arbeidsdagen faktisk er.',
          en: 'The road into a profession, the training it takes and what the working day is really like.',
        },
      },
      {
        id: 'ledelse',
        label: { no: 'Ledelse', en: 'Leadership' },
        blurb: {
          no: 'Å lede folk, ta beslutninger og bære ansvar.',
          en: 'Leading people, making decisions and carrying responsibility.',
        },
      },
      {
        id: 'grunderskap',
        label: { no: 'Gründerskap', en: 'Entrepreneurship' },
        blurb: {
          no: 'Å bygge noe selv – fra idé til noe som faktisk bærer.',
          en: 'Building something yourself – from an idea to something that actually holds.',
        },
      },
      {
        id: 'logistikk-og-supply-chain',
        label: { no: 'Logistikk & supply chain', en: 'Logistics & supply chain' },
        blurb: {
          no: 'Varestrømmer, lager og systemene som gjør at ting faktisk kommer frem.',
          en: 'Goods flows, inventory and the systems that get things where they need to be.',
        },
      },
    ],
  },
  {
    id: 'helse',
    icon: 'pulse',
    label: { no: 'Helse', en: 'Health' },
    blurb: {
      no: 'Kropp, søvn, helsevesenet og hva som faktisk påvirker hvordan vi har det.',
      en: 'The body, sleep, the health service and what genuinely affects how we feel.',
    },
    subtopics: [
      {
        id: 'sovn',
        label: { no: 'Søvn', en: 'Sleep' },
        blurb: {
          no: 'Døgnrytme, søvntrykk og hva som faktisk gir bedre netter.',
          en: 'The circadian rhythm, sleep pressure and what actually makes for better nights.',
        },
      },
      {
        id: 'helsevesenet',
        label: { no: 'Helsevesenet', en: 'The health service' },
        blurb: {
          no: 'Hvordan helsetjenesten ser ut innenfra, fra dem som jobber der.',
          en: 'What the health service looks like from the inside, from the people who work there.',
        },
      },
    ],
  },
  {
    id: 'samfunn',
    icon: 'globe',
    label: { no: 'Samfunn', en: 'Society' },
    blurb: {
      no: 'Fenomenene og systemene som påvirker verden rundt oss.',
      en: 'The phenomena and systems shaping the world around us.',
    },
    subtopics: [
      {
        id: 'frivillighet',
        label: { no: 'Frivillighet', en: 'Volunteering' },
        blurb: {
          no: 'Arbeidet folk gjør uten å få betalt for det, og hva det betyr.',
          en: 'The work people do without being paid for it, and what it means.',
        },
      },
      {
        id: 'beredskap',
        label: { no: 'Beredskap', en: 'Preparedness' },
        blurb: {
          no: 'Hvordan samfunnet – og den enkelte – står rustet når noe går galt.',
          en: 'How society – and the individual – is prepared when something goes wrong.',
        },
      },
    ],
  },
  {
    id: 'kultur',
    icon: 'note',
    label: { no: 'Kultur', en: 'Culture' },
    blurb: {
      no: 'Musikk, skaping og businessen bak det som lages.',
      en: 'Music, making things and the business behind what gets made.',
    },
    subtopics: [
      {
        id: 'musikk',
        label: { no: 'Musikk', en: 'Music' },
        blurb: {
          no: 'Livet som artist, rettigheter, konsertøkonomi og veien gjennom bransjen.',
          en: 'Life as an artist, royalties, the economics of touring and the road through the industry.',
        },
      },
    ],
  },
  {
    id: 'friluftsliv',
    icon: 'mountain',
    label: { no: 'Friluftsliv', en: 'The outdoors' },
    blurb: {
      no: 'Turer, ekspedisjoner, risiko og det å klare seg ute.',
      en: 'Trips, expeditions, risk and managing out there.',
    },
    subtopics: [
      {
        id: 'ekspedisjon',
        label: { no: 'Ekspedisjon', en: 'Expeditions' },
        blurb: {
          no: 'Lange turer, planlegging og hva som skjer når hjelpen er langt unna.',
          en: 'Long trips, planning, and what happens when help is a long way off.',
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
