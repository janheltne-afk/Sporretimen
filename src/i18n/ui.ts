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
  { key: 'explained', label: { no: 'Forklart', en: 'Explained' } },
  { key: 'topics', label: { no: 'Temaer', en: 'Topics' } },
  { key: 'guests', label: { no: 'Gjester', en: 'Guests' } },
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
      { key: 'explained', label: { no: 'Forklart', en: 'Explained' } },
      { key: 'topics', label: { no: 'Temaer', en: 'Topics' } },
      { key: 'episodes', label: { no: 'Alle episoder', en: 'All episodes' } },
      { key: 'guests', label: { no: 'Gjester', en: 'Guests' } },
      { key: 'resources', label: { no: 'Ressurser', en: 'Resources' } },
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
      { key: 'courses', label: { no: 'Kurs', en: 'Courses' } },
    ],
  },
];

const strings = {
  no: {
    // Nettstedet
    'site.tagline': 'Gode spørsmål. Interessante mennesker. Nye perspektiver.',
    'site.description':
      'Spørretimen utforsker mennesker, ideer og temaer det er verdt å forstå bedre. Gjennom lange samtaler og korte, kildebaserte forklaringer gjør vi kompliserte ting lettere å forstå.',
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
    'footer.rights': 'Alle rettigheter forbeholdt.',
    'footer.ethicsNote':
      'Spørretimen følger presseetiske prinsipper og Vær Varsom-plakaten der det er relevant.',
    'footer.privacy': 'Personvern',
    'footer.terms': 'Vilkår for bruk',

    // Episoder
    'episode.upcoming': 'Kommende',
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

    'search.label': 'Søk',
    'search.placeholder': 'Søk i tittel, gjest, tema eller spørsmål …',

    // Interesse og temaer
    'interest.wantThis': 'Jeg vil høre denne',
    'interest.wantMore': 'Jeg vil høre mer',
    'interest.wantLecture': 'Dette er interessant',
    'interest.voted': 'Interesse registrert',
    'interest.failed': 'Klarte ikke å registrere. Prøv igjen senere.',
    'interest.oneVote': '1 har meldt interesse',
    'interest.manyVotes': '{n} har meldt interesse',
    'interest.episodeHeading': 'Vil du høre denne?',
    'interest.episodeIntro':
      'Denne episoden er ikke spilt inn ennå. Meld interesse, så vet vi hva som bør komme først.',
    'interest.moreHeading': 'Vil du høre mer om dette?',
    'interest.moreIntro':
      'Vi tester stadig nye temaer. Er interessen stor nok, utvikles temaet videre til lengre episoder eller serier.',
    'topic.all': 'Alle temaer',
    'topic.explore': 'Utforsk temaer',
    'topic.subtopics': 'Undertemaer',
    'topic.empty': 'Ingen episoder om dette temaet ennå.',
    'topic.inTopic': 'Innhold om dette temaet',
    'topic.related': 'Relatert innhold',
    'topic.resources': 'Ressurser om temaet',
    'nav.conversations': 'Samtaler',
    'nav.explained': 'Forklart',
    'nav.topics': 'Temaer',
    // Kommentarer
    'comments.heading': 'Kommentarer',
    'comments.intro':
      'Har du tanker om episoden? Skriv gjerne en kommentar. Vi ber om at du bruker navnet ditt og holder en god tone.',
    'comments.name': 'Navn',
    'comments.body': 'Kommentar',
    'comments.send': 'Send kommentar',
    'comments.loading': 'Laster kommentarer …',
    'comments.empty': 'Ingen kommentarer ennå. Bli den første til å si noe!',
    'comments.loadFailed': 'Klarte ikke å laste kommentarer akkurat nå.',
    'comments.sendFailed': 'Klarte ikke å sende kommentaren. Prøv igjen senere.',
    'comments.thanks': 'Takk for kommentaren!',
    'comments.invalid': 'Fyll inn navn og kommentar (minst to tegn).',
    'comments.consent':
      'Navn og kommentar vises åpent under episoden og lagres slik det er beskrevet i',
    'comments.consentLink': 'personvernerklæringen',
    'comments.moderation':
      'Spørretimen forbeholder seg retten til å fjerne kommentarer som er sjikanerende, krenkende eller på annen måte i strid med god skikk.',
  },

  en: {
    'site.tagline': 'Good questions. Interesting people. New perspectives.',
    'site.description':
      'Spørretimen explores people, ideas and subjects worth understanding better. Through long conversations and short, sourced explainers, we make complicated things easier to grasp.',
    'site.subtitle': 'Podcast with',

    'header.home': 'to the front page',
    'header.menu': 'Main menu',
    'header.openMenu': 'Open menu',
    'header.closeMenu': 'Close menu',
    'header.theme': 'Switch between light and dark theme',
    'header.themeShort': 'Switch theme',
    'header.language': 'Read this page in Norwegian',
    'header.languageShort': 'Norsk',
    'header.skip': 'Skip to content',

    'footer.contents': 'Contents',
    'footer.follow': 'Follow Spørretimen',
    'footer.socialsComing':
      'Links to YouTube, Spotify, Apple Podcasts and social media will appear here as soon as the channels are ready.',
    'footer.rights': 'All rights reserved.',
    'footer.ethicsNote':
      'Spørretimen follows Norwegian press ethics and the Code of Ethics of the Norwegian Press where relevant.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms of use',

    'episode.upcoming': 'Upcoming',
    'episode.publishedLater': 'Published later',
    'episode.releases': 'Out',
    'episode.with': 'With',
    'episode.host': 'Host',
    'episode.guest': 'Guest',
    'episode.career': 'Career',
    'episode.allEpisodes': 'All episodes',
    'episode.backToAll': '← All episodes',
    'episode.listenHere': 'Listen to the episode',
    'episode.topics': 'Main topics',
    'episode.questions': 'Questions this episode answers',
    'episode.takeaways': 'Key points',
    'episode.sources': 'Sources and references',
    'episode.related': 'Related episodes',
    'episode.resourcesMentioned': 'Resources mentioned in the episode',
    'episode.resourcesFor': 'Resources for the episode',
    'episode.readTranscript': 'Read the episode as text',
    'episode.readTranscriptDesc':
      'The whole conversation summarised and fact-checked, question by question.',
    'episode.seeScript': 'See the questions and outline',
    'episode.seeScriptDesc':
      'The questions and structure for the episode. Answers are added as we go.',
    'episode.aboutGuest': 'About the guest',
    'episode.transcript': 'Transcript',
    'episode.script': 'Outline',
    'episode.backToEpisode': '← Back to the episode',
    'episode.contents': 'Contents',
    'episode.updated': 'Last updated',

    'guest.backToAll': '← All guests',
    'guest.themes': 'Themes',
    'guest.readAsText': 'Read as text',
    'guest.episodesWith': 'Episodes with',
    'guest.all': 'All guests',

    'filter.format': 'Format',
    'filter.topic': 'Topic',
    'filter.all': 'All',
    'filter.countOne': 'episode',
    'filter.countMany': 'episodes',
    'filter.none': 'No matches. Try a different filter.',

    'resource.from': 'From episode',
    'resource.all': 'All resources',

    'form.submit': 'Send',
    'form.sending': 'Sending …',
    'form.required': 'Please fill in the required fields before sending.',
    'form.error': 'Something went wrong. Try again, or email us directly.',
    'form.mailtoOpened': 'We are opening your email app with the message ready to send.',
    'form.honeypot': 'Leave this field empty',

    'rating.heading': 'What did you think of the episode?',
    'rating.intro': 'Rate the episode from 1 to 6.',
    'rating.loading': 'Loading …',
    'rating.give': 'Give a rating of',
    'rating.failed': 'Could not load ratings right now.',

    'search.label': 'Search',
    'search.placeholder': 'Search titles, guests, topics or questions …',

    // Interest and topics
    'interest.wantThis': 'I want to hear this',
    'interest.wantMore': 'I want to hear more',
    'interest.wantLecture': 'This is interesting',
    'interest.voted': 'Interest registered',
    'interest.failed': 'Could not register that. Please try again later.',
    'interest.oneVote': '1 person is interested',
    'interest.manyVotes': '{n} people are interested',
    'interest.episodeHeading': 'Do you want to hear this one?',
    'interest.episodeIntro':
      'This episode has not been recorded yet. Register your interest, and we will know what should come first.',
    'interest.moreHeading': 'Want to hear more about this?',
    'interest.moreIntro':
      'We are constantly testing new subjects. If there is enough interest, a subject is developed further into longer episodes or a series.',
    'topic.all': 'All topics',
    'topic.explore': 'Explore topics',
    'topic.subtopics': 'Subtopics',
    'topic.empty': 'No episodes on this topic yet.',
    'topic.inTopic': 'Content on this topic',
    'topic.related': 'Related content',
    'topic.resources': 'Resources on this topic',
    'nav.conversations': 'Conversations',
    'nav.explained': 'Explained',
    'nav.topics': 'Topics',
    'comments.heading': 'Comments',
    'comments.intro':
      'Any thoughts on the episode? Feel free to leave a comment. We ask that you use your name and keep a civil tone.',
    'comments.name': 'Name',
    'comments.body': 'Comment',
    'comments.send': 'Post comment',
    'comments.loading': 'Loading comments …',
    'comments.empty': 'No comments yet. Be the first to say something!',
    'comments.loadFailed': 'Could not load comments right now.',
    'comments.sendFailed': 'Could not post the comment. Please try again later.',
    'comments.thanks': 'Thanks for your comment!',
    'comments.invalid': 'Please enter a name and a comment (at least two characters).',
    'comments.consent':
      'Your name and comment appear publicly under the episode and are stored as described in the',
    'comments.consentLink': 'privacy policy',
    'comments.moderation':
      'Spørretimen reserves the right to remove comments that are harassing, offensive or otherwise inappropriate.',
  },
} as const;

export type StringKey = keyof (typeof strings)['no'];

/** Henter en oversetter for ett språk. */
export function useTranslations(lang: Locale) {
  return function t(key: StringKey): string {
    return strings[lang][key] ?? strings.no[key];
  };
}
