/**
 * Vilkårene for å tipse inn en gjest.
 *
 * Dette er eneste kilde. Både /tips-inn-en-gjest og tipsblokken nederst på
 * /yrker leser herfra, slik at de to stedene ikke kan si forskjellige ting.
 * Skal satsene eller reglene endres, endres de her – ett sted.
 *
 * Satsene er en avtaletekst og et løfte til publikum. Endrer du dem, endrer
 * du noe folk kan ha innrettet seg etter.
 */
import { site } from '@/data/site';

export const tipsRute = '/tips-inn-en-gjest';

export const satser = [
  { belop: '200 kr', vilkar: 'for en godkjent fagperson, for eksempel en brannmann' },
  { belop: '400 kr', vilkar: 'hvis gjesten har minst 50 000 følgere på én enkelt plattform' },
  { belop: '1 000 kr', vilkar: 'hvis gjesten har minst 100 000 følgere på én enkelt plattform' },
] as const;

/** Kortversjonen. Brukes der det ikke er plass til hele teksten. */
export const tipsKort = {
  tittel: 'Kjenner du noen jeg burde snakke med?',
  ingress:
    'Sett oss i kontakt på e-post, med personens samtykke, eller be personen ta kontakt direkte. Blir det et opptak av det, får du en belønning.',
  forbehold:
    'Et navn alene teller ikke. Jeg bestemmer selv hvem jeg kontakter og inviterer, og et tips gir ingen garanti.',
};

/**
 * Hvordan utbetalingen skjer.
 *
 * Beløpsgrensen står med vilje uten tall. Skatteetatens egen side oppgir
 * 1 000 kroner i året for arbeid utenfor hjemmet, mens enkelte andre kilder
 * oppgir 2 000. Så lenge det spriker, sier teksten hva praksisen er – at
 * utbetalingen holdes innenfor grensen – og ikke hva grensen er.
 *
 * Ingenting her skal si at belønningen er skattefri, og ingenting her er
 * skatteråd. Den som mottar en utbetaling, svarer selv for sin egen skatt.
 */
export const utbetaling = [
  'Belønningen utbetales over Vipps.',
  'Samlet utbetaling til samme person holdes innenfor beløpsgrensen som gjelder for utbetaling mellom privatpersoner.',
  'Jeg fører oversikt over hvem som har fått hva, slik at det kan dokumenteres hvis noen spør i ettertid.',
  'Spørretimen er et privat hobbyprosjekt og drives ikke kommersielt.',
] as const;

/**
 * Emnefeltet i e-posten. Tipses det fra et bestemt yrke, står yrket i emnet,
 * slik at henvendelsen er lett å kjenne igjen.
 */
export function tipsMailto(yrke?: string): string {
  const emne = yrke ? `Tips om gjest – ${yrke}` : 'Tips om gjest – Spørretimen';
  return `mailto:${site.email}?subject=${encodeURIComponent(emne)}`;
}

export const tipsTelefon = `tel:${site.phone}`;
