/**
 * PDF-utgave av episodebeskrivelsen.
 *
 * Filene bygges statisk, én per episode per språk, og ligger på en fast
 * adresse ved siden av episoden: /episoder/<slug>/beskrivelse.pdf. Det gir en
 * ekte fil å laste ned, dele eller skrive ut – uten JavaScript i nettleseren
 * og uten at noe genereres på forespørsel.
 *
 * Innholdet er det samme som står på siden: tittel, hvem den er med,
 * beskrivelsen, hovedtemaer, spørsmål, hovedpunkter og kilder. Ingenting
 * hentes utenfra, og ingenting skrives om – står det ikke i episodefila,
 * kommer det ikke med i PDF-en.
 *
 * Typografien er Helvetica, en av de fjorten standardfontene enhver PDF-leser
 * har. Da slipper vi å legge ved en fontfil, og filene blir små (~5 kB).
 * Sidens egen skrift ville krevd innbygging og subsetting av to fontfiler per
 * dokument, og det er ikke verdt vekten for et tekstark.
 */
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib';
import type { CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/config';

/** A4 i punkter, som er PDF-ens egen enhet. */
const SIDE = { bredde: 595.28, hoyde: 841.89 };
const MARG = { venstre: 56, hoyre: 56, topp: 58, bunn: 56 };
const TEKSTBREDDE = SIDE.bredde - MARG.venstre - MARG.hoyre;

/** Sidens farger, omregnet fra --ink, --ink-soft og --ink-faint. */
const BLEKK = rgb(0.086, 0.075, 0.059);
const BLEKK_MYK = rgb(0.298, 0.271, 0.235);
const BLEKK_SVAK = rgb(0.416, 0.388, 0.353);
const LINJE = rgb(0.85, 0.83, 0.79);

interface Skrifter {
  vanlig: PDFFont;
  halvfet: PDFFont;
  kursiv: PDFFont;
}

/**
 * Tekst PDF-en kan sette. De fjorten standardfontene bruker WinAnsiEncoding,
 * som dekker norsk og engelsk, men ikke alt vi bruker i innholdet: typografiske
 * anførselstegn og tankestreker finnes, mens f.eks. pilene i figurene ikke gjør
 * det. Uoversettelige tegn byttes ut i stedet for å velte hele bygget.
 */
function settbar(tekst: string): string {
  return tekst
    .replace(/\u00a0/g, ' ')
    .replace(/[\u2018\u2019\u201a]/g, "'")
    .replace(/[\u201c\u201d\u201e]/g, '"')
    .replace(/\u2026/g, '...')
    .replace(/[\u2012\u2013\u2014]/g, '\u2013')
    .replace(/\u2212/g, '-')
    .replace(/\u00d7/g, 'x')
    .replace(/[\u2192\u2190\u2191\u2193\u2194\u21bb]/g, '->')
    .replace(/[^\u0020-\u007e\u00a1-\u00ff\u2013\u201e]/g, '');
}

/** Deler en tekst i linjer som får plass innenfor bredden. */
function brekk(tekst: string, font: PDFFont, storrelse: number, bredde: number): string[] {
  const ord = settbar(tekst).split(/\s+/).filter(Boolean);
  const linjer: string[] = [];
  let linje = '';
  for (const o of ord) {
    const forslag = linje ? `${linje} ${o}` : o;
    if (font.widthOfTextAtSize(forslag, storrelse) <= bredde) {
      linje = forslag;
      continue;
    }
    if (linje) linjer.push(linje);
    // Et enkelt ord som er for langt for linja – oftest en lang nettadresse.
    if (font.widthOfTextAtSize(o, storrelse) > bredde) {
      let bit = '';
      for (const tegn of o) {
        if (font.widthOfTextAtSize(bit + tegn, storrelse) > bredde) {
          linjer.push(bit);
          bit = tegn;
        } else {
          bit += tegn;
        }
      }
      linje = bit;
    } else {
      linje = o;
    }
  }
  if (linje) linjer.push(linje);
  return linjer;
}

/**
 * Holder styr på hvor langt ned på siden vi er kommet, og legger til en ny
 * side når det er nødvendig. Alt som skrives, går gjennom denne.
 */
class Ark {
  private doc: PDFDocument;
  private skrifter: Skrifter;
  side: PDFPage;
  y: number;
  sider: PDFPage[] = [];

  constructor(doc: PDFDocument, skrifter: Skrifter) {
    this.doc = doc;
    this.skrifter = skrifter;
    this.side = this.nySide();
    this.y = SIDE.hoyde - MARG.topp;
  }

  private nySide(): PDFPage {
    const s = this.doc.addPage([SIDE.bredde, SIDE.hoyde]);
    this.sider.push(s);
    return s;
  }

  /** Sørger for at det er plass til `hoyde` punkter før det skrives. */
  plass(hoyde: number): void {
    if (this.y - hoyde >= MARG.bunn) return;
    this.side = this.nySide();
    this.y = SIDE.hoyde - MARG.topp;
  }

  luft(punkter: number): void {
    this.y -= punkter;
  }

  strek(): void {
    this.plass(12);
    this.y -= 6;
    this.side.drawLine({
      start: { x: MARG.venstre, y: this.y },
      end: { x: SIDE.bredde - MARG.hoyre, y: this.y },
      thickness: 0.75,
      color: LINJE,
    });
    this.y -= 14;
  }

  /** Skriver et avsnitt med ombrekking. Returnerer ingenting; y flyttes. */
  avsnitt(
    tekst: string,
    valg: {
      font?: keyof Skrifter;
      storrelse?: number;
      farge?: ReturnType<typeof rgb>;
      linjehoyde?: number;
      innrykk?: number;
      /** Tegn som settes i venstremargen på første linje, f.eks. et punkttegn. */
      merke?: string;
    } = {}
  ): void {
    const font = this.skrifter[valg.font ?? 'vanlig'];
    const storrelse = valg.storrelse ?? 10.5;
    const farge = valg.farge ?? BLEKK_MYK;
    const linjehoyde = valg.linjehoyde ?? storrelse * 1.45;
    const innrykk = valg.innrykk ?? 0;
    const x = MARG.venstre + innrykk;
    const linjer = brekk(tekst, font, storrelse, TEKSTBREDDE - innrykk);
    linjer.forEach((linje, i) => {
      this.plass(linjehoyde);
      this.y -= linjehoyde;
      if (i === 0 && valg.merke) {
        this.side.drawText(settbar(valg.merke), {
          x: MARG.venstre,
          y: this.y,
          size: storrelse,
          font: this.skrifter.vanlig,
          color: BLEKK_SVAK,
        });
      }
      this.side.drawText(linje, { x, y: this.y, size: storrelse, font, color: farge });
    });
  }

  /** Seksjonsoverskrift: liten, sperret og i versaler, som på nettsiden. */
  overskrift(tekst: string): void {
    // Det reserveres plass til overskriften pluss én linje under. Ellers kan
    // en overskrift bli stående alene nederst på siden, med innholdet sitt på
    // neste.
    this.plass(50);
    this.y -= 22;
    const ord = settbar(tekst).toUpperCase();
    let x = MARG.venstre;
    // pdf-lib har ingen letter-spacing, så tegnene settes ett og ett.
    for (const tegn of ord) {
      this.side.drawText(tegn, {
        x,
        y: this.y,
        size: 7.5,
        font: this.skrifter.halvfet,
        color: BLEKK_SVAK,
      });
      x += this.skrifter.halvfet.widthOfTextAtSize(tegn, 7.5) + 1.1;
    }
    this.y -= 9;
  }

  /** Punktliste. Punkttegnet er en tankestrek, som i figurene på nettsiden. */
  liste(punkter: string[], nummerert = false): void {
    punkter.forEach((p, i) => {
      this.luft(3);
      this.avsnitt(p, {
        innrykk: 18,
        merke: nummerert ? `${i + 1}.` : '\u2013',
      });
    });
  }
}

/** Datoen slik den vises på episodesiden. */
function datoTekst(dato: Date | undefined, lang: Locale): string | undefined {
  if (!dato) return undefined;
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Oslo',
  }).format(dato);
}

interface Tekster {
  serie: string;
  med: string;
  kommende: string;
  temaer: string;
  sporsmal: string;
  punkter: string;
  kilder: string;
  bok: string;
  hentet: string;
  forbehold: Record<'helse' | 'okonomi' | 'juss', string>;
}

const TEKST: Record<Locale, Tekster> = {
  no: {
    serie: 'Spørretimen',
    med: 'Med',
    kommende: 'Kommende episode',
    temaer: 'Hovedtemaer',
    sporsmal: 'Spørsmål episoden besvarer',
    punkter: 'Hovedpunkter',
    kilder: 'Kilder og referanser',
    bok: 'Boken episoden handler om',
    hentet: 'Hentet fra',
    forbehold: {
      helse: 'Innholdet er allmenn informasjon, ikke individuelle helseråd.',
      okonomi: 'Innholdet er allmenn informasjon, ikke individuell økonomisk rådgivning.',
      juss: 'Innholdet er allmenn informasjon, ikke juridisk rådgivning.',
    },
  },
  en: {
    serie: 'Spørretimen',
    med: 'With',
    kommende: 'Upcoming episode',
    temaer: 'Main topics',
    sporsmal: 'Questions this episode answers',
    punkter: 'Key points',
    kilder: 'Sources and references',
    bok: 'The book this episode is about',
    hentet: 'From',
    forbehold: {
      helse: 'This is general information, not individual health advice.',
      okonomi: 'This is general information, not individual financial advice.',
      juss: 'This is general information, not legal advice.',
    },
  },
};

export interface PdfKontekst {
  episode: CollectionEntry<'episodes'>;
  lang: Locale;
  /** Gjestens navn, slått opp av kalleren – denne fila leser ikke samlinger. */
  gjest?: string;
  /** Full nettadresse til episoden, som står nederst i dokumentet. */
  url: string;
  /** Navnet på serien episoden hører til, f.eks. «Spørretimen Forklart». */
  serie: string;
}

/** Bygger PDF-en og gir tilbake de ferdige bytene. */
export async function episodePdf(ctx: PdfKontekst): Promise<Uint8Array> {
  const { episode, lang, gjest, url, serie } = ctx;
  const d = episode.data;
  const T = TEKST[lang];

  const doc = await PDFDocument.create();
  const skrifter: Skrifter = {
    vanlig: await doc.embedFont(StandardFonts.Helvetica),
    halvfet: await doc.embedFont(StandardFonts.HelveticaBold),
    kursiv: await doc.embedFont(StandardFonts.HelveticaOblique),
  };

  doc.setTitle(settbar(d.title));
  doc.setSubject(settbar(d.description));
  doc.setAuthor('Spørretimen');
  doc.setCreator('sporretimen.no');
  doc.setProducer('sporretimen.no');
  if (d.publishDate) doc.setCreationDate(d.publishDate);

  const ark = new Ark(doc, skrifter);

  // Toppen: serien, så tittelen, så en linje med dato, varighet og gjest.
  ark.avsnitt(serie, { font: 'halvfet', storrelse: 8.5, farge: BLEKK_SVAK, linjehoyde: 11 });
  ark.luft(10);
  ark.avsnitt(d.title, {
    font: 'halvfet',
    storrelse: 19,
    farge: BLEKK,
    linjehoyde: 25,
  });

  const detaljer = [
    d.status === 'kommende' ? T.kommende : datoTekst(d.publishDate, lang),
    d.duration,
    gjest ? `${T.med} ${gjest}` : undefined,
  ].filter(Boolean) as string[];
  if (detaljer.length) {
    ark.luft(8);
    ark.avsnitt(detaljer.join('  \u00b7  '), {
      storrelse: 9.5,
      farge: BLEKK_SVAK,
      linjehoyde: 13,
    });
  }

  ark.strek();
  ark.avsnitt(d.description, { storrelse: 11, linjehoyde: 16.5 });

  if (d.book) {
    ark.overskrift(T.bok);
    const bok = [d.book.title, d.book.author].join(' \u2013 ');
    ark.avsnitt(bok, { font: 'halvfet', storrelse: 10.5, farge: BLEKK });
    const under = [d.book.originalTitle, d.book.publisher, d.book.year?.toString()].filter(
      Boolean
    ) as string[];
    if (under.length) ark.avsnitt(under.join(', '), { storrelse: 9.5, farge: BLEKK_SVAK });
  }

  if (d.topics.length) {
    ark.overskrift(T.temaer);
    ark.liste(d.topics);
  }

  if (d.questions.length) {
    ark.overskrift(T.sporsmal);
    ark.liste(d.questions);
  }

  if (d.takeaways.length) {
    ark.overskrift(T.punkter);
    ark.liste(d.takeaways);
  }

  if (d.sources.length) {
    ark.overskrift(T.kilder);
    for (const kilde of d.sources) {
      ark.luft(3);
      ark.avsnitt(kilde.title, { innrykk: 18, merke: '\u2013' });
      if (kilde.url) {
        ark.avsnitt(kilde.url, { innrykk: 18, storrelse: 9, farge: BLEKK_SVAK });
      }
    }
  }

  // Forbeholdene som vises på siden, skal følge med filen.
  if (d.advisory.length) {
    ark.luft(14);
    for (const a of d.advisory) {
      ark.avsnitt(T.forbehold[a], { font: 'kursiv', storrelse: 9, farge: BLEKK_SVAK });
    }
  }

  // Bunnlinje på hver side: hvor filen kommer fra, og sidetall når det er
  // mer enn én side. Skrives til slutt, når vi vet hvor mange sider det ble.
  const antall = ark.sider.length;
  ark.sider.forEach((side, i) => {
    side.drawLine({
      start: { x: MARG.venstre, y: MARG.bunn - 16 },
      end: { x: SIDE.bredde - MARG.hoyre, y: MARG.bunn - 16 },
      thickness: 0.75,
      color: LINJE,
    });
    side.drawText(settbar(`${T.hentet} ${url}`), {
      x: MARG.venstre,
      y: MARG.bunn - 30,
      size: 8,
      font: skrifter.vanlig,
      color: BLEKK_SVAK,
    });
    if (antall > 1) {
      const tall = `${i + 1}/${antall}`;
      const bredde = skrifter.vanlig.widthOfTextAtSize(tall, 8);
      side.drawText(tall, {
        x: SIDE.bredde - MARG.hoyre - bredde,
        y: MARG.bunn - 30,
        size: 8,
        font: skrifter.vanlig,
        color: BLEKK_SVAK,
      });
    }
  });

  return doc.save();
}
