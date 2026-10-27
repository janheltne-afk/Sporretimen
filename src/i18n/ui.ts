/**
 * All tekst i grensesnittet, på begge språk.
 *
 * Alt som vises til besøkende og ikke kommer fra innholdsfilene, skal ligge
 * her – aldri skrevet rett inn i en komponent. Da er det ett sted å gå når
 * noe skal endres, og umulig å glemme det ene språket.
 */

import type { Locale, RouteKey } from './config';

/** Menyen. `key` peker inn i rutetabellen, så adressen blir riktig per språk. */
/**
 * Hovedmenyen. Kort med vilje: de seks inngangene folk faktisk leter etter.
 * Alt det sekundære – skjemaene, ressursene, det juridiske – ligger i bunnen.
 */
export const navItems: { key: RouteKey; label: Record<Locale, string> }[] = [
  { key: 'conversations', label: { no: 'Samtaler', en: 'Conversations' } },
  { key: 'guests', label: { no: 'Gjester', en: 'Guests' } },
  { key: 'occupations', label: { no: 'Yrker', en: 'Occupations' } },
  { key: 'about', label: { no: 'Om', en: 'About' } },
];

/** Bunntekstens lenker, gruppert. Her ligger alt som ikke er i hovedmenyen. */
export const footerNav: {
  heading: Record<Locale, string>;
  items: { key: RouteKey; label: Record<Locale, string> }[];
}[] = [
  {
    heading: { no: 'Innhold', en: 'Content' },
    items: [
      { key: 'conversations', label: { no: 'Samtaler', en: 'Conversations' } },
              { key: 'episodes', label: { no: 'Alle episoder', en: 'All episodes' } },
      { key: 'guests', label: { no: 'Gjester', en: 'Guests' } },
      { key: 'occupations', label: { no: 'Yrker', en: 'Occupations' } },
    ],
  },
  {
    heading: { no: 'Delta', en: 'Take part' },
    items: [
      { key: 'suggestGuest', label: { no: 'Foreslå en gjest', en: 'Suggest a guest' } },
      { key: 'beGuest', label: { no: 'Bli gjest', en: 'Be a guest' } },
      { key: 'partner', label: { no: 'Samarbeid', en: 'Collaborate' } },
          { key: 'contact', label: { no: 'Kontakt', en: 'Contact' } },
    ],
  },
  {
    heading: { no: 'Om', en: 'About' },
    items: [
      { key: 'about', label: { no: 'Om Spørretimen', en: 'About Spørretimen' } },
      { key: 'profile', label: { no: 'Jan Sindre Heltne', en: 'Jan Sindre Heltne' } },
      { key: 'ethics', label: { no: 'Vær Varsom', en: 'Editorial standards' } },
      { key: 'principles', label: { no: 'Redaksjonelle prinsipper', en: 'Editorial principles' } },
    ],
  },
];

const strings = {
  no: {
    // Nettstedet
    'site.tagline': 'Gode spørsmål. Interessante mennesker. Nye perspektiver.',
    'site.description':
      'Spørretimen er en samtalepodkast om folk og jobbene deres. Lange, personlige samtaler med mennesker i alle slags yrker – om hvordan arbeidsdagen faktisk ser ut, hva som førte dem dit, og hva de har lært underveis.',
    'site.subtitle': 'Podkast med',

    // Toppen
    'header.home': 'til forsiden',
    'header.menu': 'Hovedmeny',
    'header.openMenu': 'Åpne meny',
    'header.closeMenu': 'Lukk meny',
    'header.theme': 'Bytt mellom lyst og mørkt tema',
    'header.themeShort': 'Bytt tema',
    'header.language': 'Les denne siden på engelsk',
    'header.languageShort': 'English',
    'header.skip': 'Hopp til innhold',

    // Bunnen
    'footer.contents': 'Innhold',
    'footer.follow': 'Følg Spørretimen',
    'footer.socialsComing':
      'Lenker til YouTube, Spotify, Apple Podcasts og sosiale medier kommer her så snart kanalene er klare.',
    'footer.rights': 'Eget innhold er opphavsrettslig beskyttet. Tredjeparts materiale tilhører sine rettighetshavere.',
    'footer.ethicsNote':
      'Spørretimen følger presseetiske prinsipper og Vær Varsom-plakaten der det er relevant.',
    'footer.principles': 'Redaksjonelle prinsipper',
    'footer.privacy': 'Personvern',
    'footer.terms': 'Vilkår for bruk',

    // Episoder
    'episode.upcoming': 'Kommende',
    'episode.recordingLanguage': 'Opptaket er på norsk. Denne siden er den engelske utgaven.',
    'episode.publishedLater': 'Publiseres senere',
    'episode.releases': 'Slippes',
    'episode.with': 'Med',
    'episode.host': 'Programleder',
    'episode.guest': 'Gjest',
    'episode.career': 'Karriere',
    'episode.allEpisodes': 'Alle episoder',
    'episode.backToAll': '← Alle episoder',
    'episode.listenHere': 'Hør episoden her',
    'episode.topics': 'Hovedtemaer',
    'episode.questions': 'Spørsmål episoden besvarer',
    'episode.takeaways': 'Hovedpunkter',
    'episode.sources': 'Kilder og referanser',
    'episode.related': 'Relaterte episoder',
    'episode.resourcesMentioned': 'Ressurser nevnt i episoden',
    'episode.resourcesFor': 'Ressurser til episoden',
    'episode.readTranscript': 'Les episoden i tekst',
    'episode.readTranscriptDesc':
      'Hele samtalen oppsummert og faktasjekket, spørsmål for spørsmål.',
    'episode.seeScript': 'Se manus og spørsmål',
    'episode.seeScriptDesc':
      'Spørsmålene og disposisjonen for episoden. Svar legges inn etter hvert.',
    'episode.aboutGuest': 'Om gjesten',
    'episode.transcript': 'Transkripsjon',
    'episode.script': 'Manus',
    'episode.backToEpisode': '← Tilbake til episoden',
    'episode.contents': 'Innhold',
    'episode.updated': 'Sist oppdatert',
    'episode.pdf': 'Last ned beskrivelsen som PDF',
    'episode.pdfDesc': 'Ett ark med temaer, spørsmål, hovedpunkter og kilder.',
    'episode.deck': 'Vis som presentasjon',
    'episode.deckDesc': 'Fullskjerm, én del om gangen. Piltaster eller sveip.',

    // Gjester
    'guest.backToAll': '← Alle gjester',
    'guest.themes': 'Temaer',
    'guest.readAsText': 'Les i tekst',
    'guest.episodesWith': 'Episoder med',
    'guest.all': 'Alle gjester',

    // Filtre
    'filter.format': 'Format',
    'filter.topic': 'Tema',
    'filter.all': 'Alle',
    'filter.countOne': 'episode',
    'filter.countMany': 'episoder',
    'filter.none': 'Ingen treff. Prøv et annet filter.',

    // Ressurser
    'resource.from': 'Fra episode',
    'resource.all': 'Alle ressurser',

    // Skjema
    'form.submit': 'Send inn',
    'form.sending': 'Sender …',
    'form.required': 'Fyll ut de påkrevde feltene før du sender.',
    'form.error': 'Noe gikk galt. Prøv igjen, eller send oss en e-post direkte.',
    'form.mailtoOpened': 'Vi åpner e-postprogrammet ditt med forslaget klart til å sendes.',
    'form.honeypot': 'La dette feltet stå tomt',

    // Terningkast
    'rating.heading': 'Hva synes du om episoden?',
    'rating.intro': 'Gi episoden et terningkast fra 1 til 6.',
    'rating.loading': 'Laster …',
    'rating.give': 'Gi terningkast',
    'rating.failed': 'Klarte ikke å hente terningkast akkurat nå.',

    'header.search': 'Søk',
    'search.label': 'Søk',
    'search.placeholder': 'Søk i tittel, gjest, tema eller spørsmål …',
    // Søkesiden
    'search.eyebrow': 'Søk',
    'search.title': 'Søk i alt innhold',
    'search.lead':
      'Søk på tvers av episoder, transkripsjoner, gjester og sidene ellers. Du får se hvor i teksten ordet står.',
    'search.metaDescription':
      'Søk i hele Spørretimen – episoder, transkripsjoner, gjester og yrker.',
    'search.submit': 'Søk',
    'search.hint':
      'Søket dekker hele teksten, også transkripsjonene. Sett anførselstegn rundt en frase for å søke på den samlet.',
    'search.loading': 'Henter innholdet …',
    'search.error': 'Klarte ikke å hente innholdet. Prøv å laste siden på nytt.',
    'search.none': 'Ingen treff på «{q}».',
    'search.oneResult': 'Ett treff på «{q}».',
    'search.manyResults': '{n} treff på «{q}».',
    'search.noscript':
      'Søket kjører i nettleseren og trenger JavaScript. Uten det kan du bla i arkivet under Samtaler og Yrker.',
    'search.kind.episode': 'Episode',
    'search.kind.transcript': 'Transkripsjon',
    'search.kind.guest': 'Gjest',
    'search.kind.page': 'Side',

    // Interesse og temaer
    'interest.wantThis': 'Jeg vil høre denne',
    'interest.voted': 'Notert',
    'interest.failed': 'Klarte ikke å notere det. Prøv igjen senere.',
    'interest.oneVote': '1 vil høre denne',
    'interest.manyVotes': '{n} vil høre denne',
    'interest.episodeHeading': 'Vil du høre denne?',
    'interest.episodeIntro':
      'Denne episoden er ikke spilt inn ennå. Si fra om du vil høre den, så vet vi hva som bør komme først.',
    'topic.all': 'Alle temaer',
    'topic.explore': 'Utforsk temaer',
    'topic.subtopics': 'Undertemaer',
    'topic.empty': 'Ingen episoder om dette temaet ennå.',
    'topic.inTopic': 'Innhold om dette temaet',
    'topic.related': 'Relatert innhold',
    'topic.resources': 'Ressurser om temaet',
    'nav.conversations': 'Samtaler',
    'nav.explained': 'Forklart',
    // Kommentarer
  },

} as const;

export type StringKey = keyof (typeof strings)['no'];

/** Henter en oversetter for ett språk. */
export function useTranslations(lang: Locale) {
  return function t(key: StringKey): string {
    return strings[lang][key] ?? strings.no[key];
  };
}
