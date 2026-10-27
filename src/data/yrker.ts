/**
 * Yrkesoversikten på /yrker og /en/occupations.
 *
 * Tanken er enkel: Spørretimen skal snakke med folk i alle slags yrker.
 * Siden viser hele lista. De yrkene det finnes en samtale om, står i farger
 * med bilde av gjesten. Resten står grå – de er ledige, og hvem som helst
 * kan tipse om noen.
 *
 * SLIK LEGGER DU TIL ET YRKE
 *   Legg et objekt i `yrker` under riktig kategori. Bare `id`, `label` og
 *   `kategori` er påkrevd. Rekkefølgen i lista er rekkefølgen på siden.
 *
 * SLIK MARKERER DU AT ET YRKE ER DEKKET
 *   Sett `episode` til slugen på episoden og `gjest` til gjestens id.
 *   Da henter siden tittel og bilde selv. Ikke sett `episode` før episoden
 *   faktisk ligger ute – et yrke som står i farger uten at samtalen finnes,
 *   er et løfte vi ikke holder.
 *
 * Et yrke kan være dekket av en episode som handler om noe annet enn jobben.
 * Da skal det stå grått. Oversikten svarer på «har du snakket med en slik
 * om jobben?», ikke «har du hatt en slik som gjest?».
 */
import type { Locale } from '@/i18n/config';

export type Tekst = Record<Locale, string>;

export interface Yrkeskategori {
  id: string;
  label: Tekst;
}

export interface Yrke {
  id: string;
  label: Tekst;
  kategori: string;
  /** Slug på episoden som handler om dette yrket. Utelates til den finnes. */
  episode?: string;
  /** Gjestens id i innholdssamlingen `guests`. Gir bilde på kortet. */
  gjest?: string;
}

export const yrkeskategorier: Yrkeskategori[] = [
  { id: 'helse', label: { no: 'Helse og omsorg' } },
  { id: 'beredskap', label: { no: 'Nød og beredskap' } },
  { id: 'bygg', label: { no: 'Bygg og anlegg' } },
  { id: 'handverk', label: { no: 'Håndverk' } },
  { id: 'transport', label: { no: 'Transport og logistikk' } },
  { id: 'sjo', label: { no: 'Sjø og havbruk' } },
  { id: 'natur', label: { no: 'Natur, dyr og landbruk' } },
  { id: 'mat', label: { no: 'Mat og drikke' } },
  { id: 'skole', label: { no: 'Skole og utdanning' } },
  { id: 'teknologi', label: { no: 'Teknologi' } },
  { id: 'kultur', label: { no: 'Kunst og kultur' } },
  { id: 'media', label: { no: 'Media' } },
  { id: 'handel', label: { no: 'Handel og service' } },
  { id: 'offentlig', label: { no: 'Offentlig sektor og juss' } },
  { id: 'naringsliv', label: { no: 'Økonomi og næringsliv' } },
  { id: 'industri', label: { no: 'Industri og energi' } },
  { id: 'idrett', label: { no: 'Idrett' } },
];

export const yrker: Yrke[] = [
  // Helse og omsorg
  { id: 'lege', label: { no: 'Lege' }, kategori: 'helse', episode: 'john-erik-legeyrket', gjest: 'john-erik' },
  { id: 'sykepleier', label: { no: 'Sykepleier' }, kategori: 'helse' },
  { id: 'jordmor', label: { no: 'Jordmor' }, kategori: 'helse' },
  { id: 'psykolog', label: { no: 'Psykolog' }, kategori: 'helse' },
  { id: 'tannlege', label: { no: 'Tannlege' }, kategori: 'helse' },
  { id: 'fysioterapeut', label: { no: 'Fysioterapeut' }, kategori: 'helse' },
  { id: 'helsefagarbeider', label: { no: 'Helsefagarbeider' }, kategori: 'helse' },
  { id: 'bioingenior', label: { no: 'Bioingeniør' }, kategori: 'helse' },
  { id: 'farmasoyt', label: { no: 'Farmasøyt' }, kategori: 'helse' },
  { id: 'veterinaer', label: { no: 'Veterinær' }, kategori: 'helse' },

  // Nød og beredskap
  { id: 'paramedisiner', label: { no: 'Paramedisiner' }, kategori: 'beredskap', episode: 'havard-paramedisiner', gjest: 'havard-hasund' },
  { id: 'brannkonstabel', label: { no: 'Brannkonstabel' }, kategori: 'beredskap' },
  { id: 'politi', label: { no: 'Politibetjent' }, kategori: 'beredskap' },
  { id: 'redningsmann', label: { no: 'Redningsmann' }, kategori: 'beredskap' },
  { id: 'ambulansefly', label: { no: 'Ambulanseflyger' }, kategori: 'beredskap' },
  { id: 'operator-113', label: { no: 'AMK-operatør' }, kategori: 'beredskap' },
  { id: 'fengselsbetjent', label: { no: 'Fengselsbetjent' }, kategori: 'beredskap' },
  { id: 'soldat', label: { no: 'Yrkessoldat' }, kategori: 'beredskap' },

  // Bygg og anlegg
  { id: 'tomrer', label: { no: 'Tømrer' }, kategori: 'bygg' },
  { id: 'murer', label: { no: 'Murer' }, kategori: 'bygg' },
  { id: 'anleggsmaskinforer', label: { no: 'Anleggsmaskinfører' }, kategori: 'bygg' },
  { id: 'kranforer', label: { no: 'Kranfører' }, kategori: 'bygg' },
  { id: 'byggingenior', label: { no: 'Byggingeniør' }, kategori: 'bygg' },
  { id: 'arkitekt', label: { no: 'Arkitekt' }, kategori: 'bygg' },
  { id: 'stillasbygger', label: { no: 'Stillasbygger' }, kategori: 'bygg' },
  { id: 'landmaler', label: { no: 'Landmåler' }, kategori: 'bygg' },

  // Håndverk
  { id: 'elektriker', label: { no: 'Elektriker' }, kategori: 'handverk' },
  { id: 'rorlegger', label: { no: 'Rørlegger' }, kategori: 'handverk' },
  { id: 'bilmekaniker', label: { no: 'Bilmekaniker' }, kategori: 'handverk' },
  { id: 'sveiser', label: { no: 'Sveiser' }, kategori: 'handverk' },
  { id: 'maler', label: { no: 'Maler' }, kategori: 'handverk' },
  { id: 'frisor', label: { no: 'Frisør' }, kategori: 'handverk' },
  { id: 'urmaker', label: { no: 'Urmaker' }, kategori: 'handverk' },
  { id: 'gullsmed', label: { no: 'Gullsmed' }, kategori: 'handverk' },
  { id: 'skredder', label: { no: 'Skredder' }, kategori: 'handverk' },
  { id: 'glassblaser', label: { no: 'Glassblåser' }, kategori: 'handverk' },

  // Transport og logistikk
  { id: 'lastebilsjafor', label: { no: 'Lastebilsjåfør' }, kategori: 'transport' },
  { id: 'bussjafor', label: { no: 'Bussjåfør' }, kategori: 'transport' },
  { id: 'flyger', label: { no: 'Flyger' }, kategori: 'transport' },
  { id: 'flyvertinne', label: { no: 'Kabinansatt' }, kategori: 'transport' },
  { id: 'flygeleder', label: { no: 'Flygeleder' }, kategori: 'transport' },
  { id: 'lokforer', label: { no: 'Lokfører' }, kategori: 'transport' },
  { id: 'truckforer', label: { no: 'Truckfører' }, kategori: 'transport' },
  { id: 'logistikkplanlegger', label: { no: 'Logistikkplanlegger' }, kategori: 'transport' },
  { id: 'havnearbeider', label: { no: 'Havnearbeider' }, kategori: 'transport' },
  { id: 'budbilsjafor', label: { no: 'Budbilsjåfør' }, kategori: 'transport' },

  // Sjø og havbruk
  { id: 'fisker', label: { no: 'Fisker' }, kategori: 'sjo' },
  { id: 'los', label: { no: 'Los' }, kategori: 'sjo' },
  { id: 'skipsfarer', label: { no: 'Skipsfører' }, kategori: 'sjo' },
  { id: 'maskinist', label: { no: 'Maskinist' }, kategori: 'sjo' },
  { id: 'oppdretter', label: { no: 'Røkter i oppdrett' }, kategori: 'sjo' },
  { id: 'dykker', label: { no: 'Yrkesdykker' }, kategori: 'sjo' },

  // Natur, dyr og landbruk
  { id: 'bonde', label: { no: 'Bonde' }, kategori: 'natur' },
  { id: 'skogsarbeider', label: { no: 'Skogsarbeider' }, kategori: 'natur' },
  { id: 'reindriftsutover', label: { no: 'Reindriftsutøver' }, kategori: 'natur' },
  { id: 'gartner', label: { no: 'Gartner' }, kategori: 'natur' },
  { id: 'naturforvalter', label: { no: 'Naturforvalter' }, kategori: 'natur' },
  { id: 'dyrepleier', label: { no: 'Dyrepleier' }, kategori: 'natur' },
  { id: 'birokter', label: { no: 'Birøkter' }, kategori: 'natur' },

  // Mat og drikke
  { id: 'kokk', label: { no: 'Kokk' }, kategori: 'mat' },
  { id: 'baker', label: { no: 'Baker' }, kategori: 'mat' },
  { id: 'slakter', label: { no: 'Slakter' }, kategori: 'mat' },
  { id: 'bartender', label: { no: 'Bartender' }, kategori: 'mat' },
  { id: 'servitor', label: { no: 'Servitør' }, kategori: 'mat' },
  { id: 'brygger', label: { no: 'Brygger' }, kategori: 'mat' },

  // Skole og utdanning
  { id: 'laerer', label: { no: 'Lærer' }, kategori: 'skole' },
  { id: 'barnehagelaerer', label: { no: 'Barnehagelærer' }, kategori: 'skole' },
  { id: 'forsker', label: { no: 'Forsker' }, kategori: 'skole' },
  { id: 'bibliotekar', label: { no: 'Bibliotekar' }, kategori: 'skole' },
  { id: 'spesialpedagog', label: { no: 'Spesialpedagog' }, kategori: 'skole' },
  { id: 'yrkesfaglaerer', label: { no: 'Yrkesfaglærer' }, kategori: 'skole' },

  // Teknologi
  { id: 'utvikler', label: { no: 'Utvikler' }, kategori: 'teknologi' },
  { id: 'datasikkerhet', label: { no: 'Sikkerhetsanalytiker' }, kategori: 'teknologi' },
  { id: 'datatekniker', label: { no: 'Datatekniker' }, kategori: 'teknologi' },
  { id: 'spillutvikler', label: { no: 'Spillutvikler' }, kategori: 'teknologi' },
  { id: 'robotikkingenior', label: { no: 'Robotikkingeniør' }, kategori: 'teknologi' },
  { id: 'droneoperator', label: { no: 'Droneoperatør' }, kategori: 'teknologi' },

  // Kunst og kultur
  { id: 'artist', label: { no: 'Artist og låtskriver' }, kategori: 'kultur', episode: 'sturla-artist-business', gjest: 'sturla' },
  { id: 'skuespiller', label: { no: 'Skuespiller' }, kategori: 'kultur' },
  { id: 'danser', label: { no: 'Danser' }, kategori: 'kultur' },
  { id: 'forfatter', label: { no: 'Forfatter' }, kategori: 'kultur' },
  { id: 'illustrator', label: { no: 'Illustratør' }, kategori: 'kultur' },
  { id: 'lyddesigner', label: { no: 'Lyddesigner' }, kategori: 'kultur' },
  { id: 'museumskonservator', label: { no: 'Konservator' }, kategori: 'kultur' },
  { id: 'tatovor', label: { no: 'Tatovør' }, kategori: 'kultur' },

  // Media
  { id: 'journalist', label: { no: 'Journalist' }, kategori: 'media' },
  { id: 'fotograf', label: { no: 'Fotograf' }, kategori: 'media' },
  { id: 'filmklipper', label: { no: 'Filmklipper' }, kategori: 'media' },
  { id: 'programleder', label: { no: 'Programleder' }, kategori: 'media' },
  { id: 'innholdsprodusent', label: { no: 'Innholdsprodusent' }, kategori: 'media' },

  // Handel og service
  { id: 'butikkmedarbeider', label: { no: 'Butikkmedarbeider' }, kategori: 'handel' },
  { id: 'eiendomsmegler', label: { no: 'Eiendomsmegler' }, kategori: 'handel' },
  { id: 'reiseleder', label: { no: 'Reiseleder' }, kategori: 'handel' },
  { id: 'resepsjonist', label: { no: 'Resepsjonist' }, kategori: 'handel' },
  { id: 'renholder', label: { no: 'Renholder' }, kategori: 'handel' },
  { id: 'vaktmester', label: { no: 'Vaktmester' }, kategori: 'handel' },
  { id: 'begravelsesagent', label: { no: 'Begravelsesagent' }, kategori: 'handel' },

  // Offentlig sektor og juss
  { id: 'advokat', label: { no: 'Advokat' }, kategori: 'offentlig' },
  { id: 'dommer', label: { no: 'Dommer' }, kategori: 'offentlig' },
  { id: 'saksbehandler', label: { no: 'Saksbehandler' }, kategori: 'offentlig' },
  { id: 'barnevernspedagog', label: { no: 'Barnevernspedagog' }, kategori: 'offentlig' },
  { id: 'tolk', label: { no: 'Tolk' }, kategori: 'offentlig' },
  { id: 'diplomat', label: { no: 'Diplomat' }, kategori: 'offentlig' },
  { id: 'politiker', label: { no: 'Heltidspolitiker' }, kategori: 'offentlig' },

  // Økonomi og næringsliv
  { id: 'revisor', label: { no: 'Revisor' }, kategori: 'naringsliv' },
  { id: 'regnskapsforer', label: { no: 'Regnskapsfører' }, kategori: 'naringsliv' },
  { id: 'grunder', label: { no: 'Gründer' }, kategori: 'naringsliv' },
  { id: 'selger', label: { no: 'Selger' }, kategori: 'naringsliv' },
  { id: 'innkjoper', label: { no: 'Innkjøper' }, kategori: 'naringsliv' },
  { id: 'bankradgiver', label: { no: 'Bankrådgiver' }, kategori: 'naringsliv' },
  { id: 'forsikringsradgiver', label: { no: 'Forsikringsrådgiver' }, kategori: 'naringsliv' },

  // Industri og energi
  // Episoden sier at han jobbet skift på et smelteverk, ikke hva stillingen
  // het. Etiketten holder seg til det, og påstår ingen formell tittel.
  { id: 'smelteverksarbeider', label: { no: 'Smelteverksarbeider' }, kategori: 'industri', episode: 'sturla-artist-business', gjest: 'sturla' },
  { id: 'prosessoperator', label: { no: 'Prosessoperatør' }, kategori: 'industri' },
  { id: 'cnc-operator', label: { no: 'CNC-operatør' }, kategori: 'industri' },
  { id: 'automatiker', label: { no: 'Automatiker' }, kategori: 'industri' },
  { id: 'energimontor', label: { no: 'Energimontør' }, kategori: 'industri' },
  { id: 'vindtekniker', label: { no: 'Vindturbinteknikker' }, kategori: 'industri' },
  { id: 'laborant', label: { no: 'Laborant' }, kategori: 'industri' },

  // Idrett
  { id: 'proffutover', label: { no: 'Profesjonell utøver' }, kategori: 'idrett' },
  { id: 'trener', label: { no: 'Trener' }, kategori: 'idrett' },
  { id: 'dommer-idrett', label: { no: 'Idrettsdommer' }, kategori: 'idrett' },
  { id: 'fysisk-trener', label: { no: 'Fysisk trener' }, kategori: 'idrett' },
];

/** Yrkene i én kategori, i oppgitt rekkefølge. */
export function yrkerIKategori(kategori: string): Yrke[] {
  return yrker.filter((y) => y.kategori === kategori);
}

/** Hvor mange yrker som er dekket av en samtale, og hvor mange som finnes. */
export function yrkestall(): { dekket: number; totalt: number } {
  return { dekket: yrker.filter((y) => y.episode).length, totalt: yrker.length };
}
