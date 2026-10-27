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
  { id: 'helse', label: { no: 'Helse og omsorg', en: 'Health and care' } },
  { id: 'beredskap', label: { no: 'Nød og beredskap', en: 'Emergency services' } },
  { id: 'bygg', label: { no: 'Bygg og anlegg', en: 'Construction' } },
  { id: 'handverk', label: { no: 'Håndverk', en: 'Trades' } },
  { id: 'transport', label: { no: 'Transport og logistikk', en: 'Transport and logistics' } },
  { id: 'sjo', label: { no: 'Sjø og havbruk', en: 'Sea and aquaculture' } },
  { id: 'natur', label: { no: 'Natur, dyr og landbruk', en: 'Nature, animals and farming' } },
  { id: 'mat', label: { no: 'Mat og drikke', en: 'Food and drink' } },
  { id: 'skole', label: { no: 'Skole og utdanning', en: 'Education' } },
  { id: 'teknologi', label: { no: 'Teknologi', en: 'Technology' } },
  { id: 'kultur', label: { no: 'Kunst og kultur', en: 'Arts and culture' } },
  { id: 'media', label: { no: 'Media', en: 'Media' } },
  { id: 'handel', label: { no: 'Handel og service', en: 'Retail and service' } },
  { id: 'offentlig', label: { no: 'Offentlig sektor og juss', en: 'Public sector and law' } },
  { id: 'naringsliv', label: { no: 'Økonomi og næringsliv', en: 'Business and finance' } },
  { id: 'industri', label: { no: 'Industri og energi', en: 'Industry and energy' } },
  { id: 'idrett', label: { no: 'Idrett', en: 'Sport' } },
];

export const yrker: Yrke[] = [
  // Helse og omsorg
  { id: 'lege', label: { no: 'Lege', en: 'Doctor' }, kategori: 'helse', episode: 'john-erik-legeyrket', gjest: 'john-erik' },
  { id: 'sykepleier', label: { no: 'Sykepleier', en: 'Nurse' }, kategori: 'helse' },
  { id: 'jordmor', label: { no: 'Jordmor', en: 'Midwife' }, kategori: 'helse' },
  { id: 'psykolog', label: { no: 'Psykolog', en: 'Psychologist' }, kategori: 'helse' },
  { id: 'tannlege', label: { no: 'Tannlege', en: 'Dentist' }, kategori: 'helse' },
  { id: 'fysioterapeut', label: { no: 'Fysioterapeut', en: 'Physiotherapist' }, kategori: 'helse' },
  { id: 'helsefagarbeider', label: { no: 'Helsefagarbeider', en: 'Health care worker' }, kategori: 'helse' },
  { id: 'bioingenior', label: { no: 'Bioingeniør', en: 'Biomedical scientist' }, kategori: 'helse' },
  { id: 'farmasoyt', label: { no: 'Farmasøyt', en: 'Pharmacist' }, kategori: 'helse' },
  { id: 'veterinaer', label: { no: 'Veterinær', en: 'Veterinarian' }, kategori: 'helse' },

  // Nød og beredskap
  { id: 'paramedisiner', label: { no: 'Paramedisiner', en: 'Paramedic' }, kategori: 'beredskap', episode: 'havard-paramedisiner', gjest: 'havard-hasund' },
  { id: 'brannkonstabel', label: { no: 'Brannkonstabel', en: 'Firefighter' }, kategori: 'beredskap' },
  { id: 'politi', label: { no: 'Politibetjent', en: 'Police officer' }, kategori: 'beredskap' },
  { id: 'redningsmann', label: { no: 'Redningsmann', en: 'Rescue crew' }, kategori: 'beredskap' },
  { id: 'ambulansefly', label: { no: 'Ambulanseflyger', en: 'Air ambulance pilot' }, kategori: 'beredskap' },
  { id: 'operator-113', label: { no: 'AMK-operatør', en: 'Emergency dispatcher' }, kategori: 'beredskap' },
  { id: 'fengselsbetjent', label: { no: 'Fengselsbetjent', en: 'Prison officer' }, kategori: 'beredskap' },
  { id: 'soldat', label: { no: 'Yrkessoldat', en: 'Soldier' }, kategori: 'beredskap' },

  // Bygg og anlegg
  { id: 'tomrer', label: { no: 'Tømrer', en: 'Carpenter' }, kategori: 'bygg' },
  { id: 'murer', label: { no: 'Murer', en: 'Bricklayer' }, kategori: 'bygg' },
  { id: 'anleggsmaskinforer', label: { no: 'Anleggsmaskinfører', en: 'Heavy equipment operator' }, kategori: 'bygg' },
  { id: 'kranforer', label: { no: 'Kranfører', en: 'Crane operator' }, kategori: 'bygg' },
  { id: 'byggingenior', label: { no: 'Byggingeniør', en: 'Civil engineer' }, kategori: 'bygg' },
  { id: 'arkitekt', label: { no: 'Arkitekt', en: 'Architect' }, kategori: 'bygg' },
  { id: 'stillasbygger', label: { no: 'Stillasbygger', en: 'Scaffolder' }, kategori: 'bygg' },
  { id: 'landmaler', label: { no: 'Landmåler', en: 'Surveyor' }, kategori: 'bygg' },

  // Håndverk
  { id: 'elektriker', label: { no: 'Elektriker', en: 'Electrician' }, kategori: 'handverk' },
  { id: 'rorlegger', label: { no: 'Rørlegger', en: 'Plumber' }, kategori: 'handverk' },
  { id: 'bilmekaniker', label: { no: 'Bilmekaniker', en: 'Car mechanic' }, kategori: 'handverk' },
  { id: 'sveiser', label: { no: 'Sveiser', en: 'Welder' }, kategori: 'handverk' },
  { id: 'maler', label: { no: 'Maler', en: 'Painter and decorator' }, kategori: 'handverk' },
  { id: 'frisor', label: { no: 'Frisør', en: 'Hairdresser' }, kategori: 'handverk' },
  { id: 'urmaker', label: { no: 'Urmaker', en: 'Watchmaker' }, kategori: 'handverk' },
  { id: 'gullsmed', label: { no: 'Gullsmed', en: 'Goldsmith' }, kategori: 'handverk' },
  { id: 'skredder', label: { no: 'Skredder', en: 'Tailor' }, kategori: 'handverk' },
  { id: 'glassblaser', label: { no: 'Glassblåser', en: 'Glassblower' }, kategori: 'handverk' },

  // Transport og logistikk
  { id: 'lastebilsjafor', label: { no: 'Lastebilsjåfør', en: 'Truck driver' }, kategori: 'transport' },
  { id: 'bussjafor', label: { no: 'Bussjåfør', en: 'Bus driver' }, kategori: 'transport' },
  { id: 'flyger', label: { no: 'Flyger', en: 'Airline pilot' }, kategori: 'transport' },
  { id: 'flyvertinne', label: { no: 'Kabinansatt', en: 'Cabin crew' }, kategori: 'transport' },
  { id: 'flygeleder', label: { no: 'Flygeleder', en: 'Air traffic controller' }, kategori: 'transport' },
  { id: 'lokforer', label: { no: 'Lokfører', en: 'Train driver' }, kategori: 'transport' },
  { id: 'truckforer', label: { no: 'Truckfører', en: 'Forklift operator' }, kategori: 'transport' },
  { id: 'logistikkplanlegger', label: { no: 'Logistikkplanlegger', en: 'Logistics planner' }, kategori: 'transport' },
  { id: 'havnearbeider', label: { no: 'Havnearbeider', en: 'Dockworker' }, kategori: 'transport' },
  { id: 'budbilsjafor', label: { no: 'Budbilsjåfør', en: 'Courier' }, kategori: 'transport' },

  // Sjø og havbruk
  { id: 'fisker', label: { no: 'Fisker', en: 'Fisher' }, kategori: 'sjo' },
  { id: 'los', label: { no: 'Los', en: 'Maritime pilot' }, kategori: 'sjo' },
  { id: 'skipsfarer', label: { no: 'Skipsfører', en: 'Ship captain' }, kategori: 'sjo' },
  { id: 'maskinist', label: { no: 'Maskinist', en: 'Marine engineer' }, kategori: 'sjo' },
  { id: 'oppdretter', label: { no: 'Røkter i oppdrett', en: 'Fish farmer' }, kategori: 'sjo' },
  { id: 'dykker', label: { no: 'Yrkesdykker', en: 'Commercial diver' }, kategori: 'sjo' },

  // Natur, dyr og landbruk
  { id: 'bonde', label: { no: 'Bonde', en: 'Farmer' }, kategori: 'natur' },
  { id: 'skogsarbeider', label: { no: 'Skogsarbeider', en: 'Forestry worker' }, kategori: 'natur' },
  { id: 'reindriftsutover', label: { no: 'Reindriftsutøver', en: 'Reindeer herder' }, kategori: 'natur' },
  { id: 'gartner', label: { no: 'Gartner', en: 'Gardener' }, kategori: 'natur' },
  { id: 'naturforvalter', label: { no: 'Naturforvalter', en: 'Nature manager' }, kategori: 'natur' },
  { id: 'dyrepleier', label: { no: 'Dyrepleier', en: 'Veterinary nurse' }, kategori: 'natur' },
  { id: 'birokter', label: { no: 'Birøkter', en: 'Beekeeper' }, kategori: 'natur' },

  // Mat og drikke
  { id: 'kokk', label: { no: 'Kokk', en: 'Chef' }, kategori: 'mat' },
  { id: 'baker', label: { no: 'Baker', en: 'Baker' }, kategori: 'mat' },
  { id: 'slakter', label: { no: 'Slakter', en: 'Butcher' }, kategori: 'mat' },
  { id: 'bartender', label: { no: 'Bartender', en: 'Bartender' }, kategori: 'mat' },
  { id: 'servitor', label: { no: 'Servitør', en: 'Waiter' }, kategori: 'mat' },
  { id: 'brygger', label: { no: 'Brygger', en: 'Brewer' }, kategori: 'mat' },

  // Skole og utdanning
  { id: 'laerer', label: { no: 'Lærer', en: 'Teacher' }, kategori: 'skole' },
  { id: 'barnehagelaerer', label: { no: 'Barnehagelærer', en: 'Preschool teacher' }, kategori: 'skole' },
  { id: 'forsker', label: { no: 'Forsker', en: 'Researcher' }, kategori: 'skole' },
  { id: 'bibliotekar', label: { no: 'Bibliotekar', en: 'Librarian' }, kategori: 'skole' },
  { id: 'spesialpedagog', label: { no: 'Spesialpedagog', en: 'Special needs educator' }, kategori: 'skole' },
  { id: 'yrkesfaglaerer', label: { no: 'Yrkesfaglærer', en: 'Vocational teacher' }, kategori: 'skole' },

  // Teknologi
  { id: 'utvikler', label: { no: 'Utvikler', en: 'Software developer' }, kategori: 'teknologi' },
  { id: 'datasikkerhet', label: { no: 'Sikkerhetsanalytiker', en: 'Security analyst' }, kategori: 'teknologi' },
  { id: 'datatekniker', label: { no: 'Datatekniker', en: 'IT technician' }, kategori: 'teknologi' },
  { id: 'spillutvikler', label: { no: 'Spillutvikler', en: 'Game developer' }, kategori: 'teknologi' },
  { id: 'robotikkingenior', label: { no: 'Robotikkingeniør', en: 'Robotics engineer' }, kategori: 'teknologi' },
  { id: 'droneoperator', label: { no: 'Droneoperatør', en: 'Drone operator' }, kategori: 'teknologi' },

  // Kunst og kultur
  { id: 'artist', label: { no: 'Artist og låtskriver', en: 'Artist and songwriter' }, kategori: 'kultur', episode: 'sturla-artist-business', gjest: 'sturla' },
  { id: 'skuespiller', label: { no: 'Skuespiller', en: 'Actor' }, kategori: 'kultur' },
  { id: 'danser', label: { no: 'Danser', en: 'Dancer' }, kategori: 'kultur' },
  { id: 'forfatter', label: { no: 'Forfatter', en: 'Author' }, kategori: 'kultur' },
  { id: 'illustrator', label: { no: 'Illustratør', en: 'Illustrator' }, kategori: 'kultur' },
  { id: 'lyddesigner', label: { no: 'Lyddesigner', en: 'Sound designer' }, kategori: 'kultur' },
  { id: 'museumskonservator', label: { no: 'Konservator', en: 'Museum conservator' }, kategori: 'kultur' },
  { id: 'tatovor', label: { no: 'Tatovør', en: 'Tattoo artist' }, kategori: 'kultur' },

  // Media
  { id: 'journalist', label: { no: 'Journalist', en: 'Journalist' }, kategori: 'media' },
  { id: 'fotograf', label: { no: 'Fotograf', en: 'Photographer' }, kategori: 'media' },
  { id: 'filmklipper', label: { no: 'Filmklipper', en: 'Film editor' }, kategori: 'media' },
  { id: 'programleder', label: { no: 'Programleder', en: 'Presenter' }, kategori: 'media' },
  { id: 'innholdsprodusent', label: { no: 'Innholdsprodusent', en: 'Content producer' }, kategori: 'media' },

  // Handel og service
  { id: 'butikkmedarbeider', label: { no: 'Butikkmedarbeider', en: 'Shop assistant' }, kategori: 'handel' },
  { id: 'eiendomsmegler', label: { no: 'Eiendomsmegler', en: 'Estate agent' }, kategori: 'handel' },
  { id: 'reiseleder', label: { no: 'Reiseleder', en: 'Tour guide' }, kategori: 'handel' },
  { id: 'resepsjonist', label: { no: 'Resepsjonist', en: 'Receptionist' }, kategori: 'handel' },
  { id: 'renholder', label: { no: 'Renholder', en: 'Cleaner' }, kategori: 'handel' },
  { id: 'vaktmester', label: { no: 'Vaktmester', en: 'Caretaker' }, kategori: 'handel' },
  { id: 'begravelsesagent', label: { no: 'Begravelsesagent', en: 'Funeral director' }, kategori: 'handel' },

  // Offentlig sektor og juss
  { id: 'advokat', label: { no: 'Advokat', en: 'Lawyer' }, kategori: 'offentlig' },
  { id: 'dommer', label: { no: 'Dommer', en: 'Judge' }, kategori: 'offentlig' },
  { id: 'saksbehandler', label: { no: 'Saksbehandler', en: 'Caseworker' }, kategori: 'offentlig' },
  { id: 'barnevernspedagog', label: { no: 'Barnevernspedagog', en: 'Child welfare officer' }, kategori: 'offentlig' },
  { id: 'tolk', label: { no: 'Tolk', en: 'Interpreter' }, kategori: 'offentlig' },
  { id: 'diplomat', label: { no: 'Diplomat', en: 'Diplomat' }, kategori: 'offentlig' },
  { id: 'politiker', label: { no: 'Heltidspolitiker', en: 'Full-time politician' }, kategori: 'offentlig' },

  // Økonomi og næringsliv
  { id: 'revisor', label: { no: 'Revisor', en: 'Auditor' }, kategori: 'naringsliv' },
  { id: 'regnskapsforer', label: { no: 'Regnskapsfører', en: 'Accountant' }, kategori: 'naringsliv' },
  { id: 'grunder', label: { no: 'Gründer', en: 'Founder' }, kategori: 'naringsliv' },
  { id: 'selger', label: { no: 'Selger', en: 'Salesperson' }, kategori: 'naringsliv' },
  { id: 'innkjoper', label: { no: 'Innkjøper', en: 'Buyer' }, kategori: 'naringsliv' },
  { id: 'bankradgiver', label: { no: 'Bankrådgiver', en: 'Bank adviser' }, kategori: 'naringsliv' },
  { id: 'forsikringsradgiver', label: { no: 'Forsikringsrådgiver', en: 'Insurance adviser' }, kategori: 'naringsliv' },

  // Industri og energi
  { id: 'prosessoperator', label: { no: 'Prosessoperatør', en: 'Process operator' }, kategori: 'industri' },
  { id: 'cnc-operator', label: { no: 'CNC-operatør', en: 'CNC machinist' }, kategori: 'industri' },
  { id: 'automatiker', label: { no: 'Automatiker', en: 'Automation technician' }, kategori: 'industri' },
  { id: 'energimontor', label: { no: 'Energimontør', en: 'Power line technician' }, kategori: 'industri' },
  { id: 'vindtekniker', label: { no: 'Vindturbinteknikker', en: 'Wind turbine technician' }, kategori: 'industri' },
  { id: 'laborant', label: { no: 'Laborant', en: 'Laboratory technician' }, kategori: 'industri' },

  // Idrett
  { id: 'proffutover', label: { no: 'Profesjonell utøver', en: 'Professional athlete' }, kategori: 'idrett' },
  { id: 'trener', label: { no: 'Trener', en: 'Coach' }, kategori: 'idrett' },
  { id: 'dommer-idrett', label: { no: 'Idrettsdommer', en: 'Sports referee' }, kategori: 'idrett' },
  { id: 'fysisk-trener', label: { no: 'Fysisk trener', en: 'Strength and conditioning coach' }, kategori: 'idrett' },
];

/** Yrkene i én kategori, i oppgitt rekkefølge. */
export function yrkerIKategori(kategori: string): Yrke[] {
  return yrker.filter((y) => y.kategori === kategori);
}

/** Hvor mange yrker som er dekket av en samtale, og hvor mange som finnes. */
export function yrkestall(): { dekket: number; totalt: number } {
  return { dekket: yrker.filter((y) => y.episode).length, totalt: yrker.length };
}
