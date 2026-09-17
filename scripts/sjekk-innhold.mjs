/**
 * Innholdspolicy for Spørretimen – kjøres før bygg.
 *
 * Hensikten er at reglene fra den redaksjonelle gjennomgangen holder seg over
 * tid, uten at noen må huske dem. Skriver du en ny bokartikkel og glemmer
 * `book:`, stopper dette skriptet deg.
 *
 * Feil (exit 1)  – brudd som skal rettes før publisering
 * Advarsel       – noe som bør ses på, men ikke stopper bygget
 *
 *   node scripts/sjekk-innhold.mjs
 *   node scripts/sjekk-innhold.mjs --strict   (advarsler teller som feil)
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = 'src/content';
const strict = process.argv.includes('--strict');
const feil = [];
const advarsler = [];

/**
 * Formuleringer som lover at innholdet erstatter originalverket. Det er
 * forskjellen mellom en omtale og en erstatning, og den skal ikke viskes ut
 * i markedsføringen.
 */
const FORBUDTE_LOVNADER = [
  /komplett\s+(sammendrag|referat|gjennomgang)/i,
  /fullstendig\s+(sammendrag|referat|gjengivelse)/i,
  /kapittel[\s-]for[\s-]kapittel/i,
  /hele\s+bok(a|en)\s+(gratis|forklart|på)/i,
  /les\s+hele\s+bok/i,
  /bok(a|en)\s+i\s+kortversjon/i,
  /erstatter\s+bok/i,
  /trenger\s+ikke\s+lese\s+bok/i,
  /complete\s+summary/i,
  /chapter[\s-]by[\s-]chapter/i,
  /(whole|entire)\s+book\s+(free|summarised|summarized)/i,
  /read\s+the\s+(whole|entire)\s+book\s+in/i,
  /replaces?\s+the\s+book/i,
  /no\s+need\s+to\s+read\s+the\s+book/i,
];

/** Ord som antyder kommersiell binding. Skal bare stå når avtalen finnes. */
const KOMMERSIELLE_ORD = [
  /\bsponset av\b/i,
  /\bi samarbeid med\b/i,
  /\bvår partner\b/i,
  /\bannonsørinnhold\b/i,
  /\bsponsored by\b/i,
  /\bin partnership with\b/i,
  /\bour partner\b/i,
];

/** Bombastiske løfter om avkastning. */
const AVKASTNINGSLOVNADER = [
  /garantert avkastning/i,
  /du bør kjøpe\b/i,
  /vil gi deg? \d+\s*(%|prosent)/i,
  /guaranteed returns?/i,
  /you should buy\b/i,
];

/**
 * Er treffet negert? «Det er ikke boka i kortversjon» er en presisering, ikke
 * en lovnad, og skal ikke gi utslag.
 */
const negert = (tekst, indeks) => {
  const foran = tekst.slice(Math.max(0, indeks - 60), indeks).toLowerCase();
  return /\b(ikke|ingen|aldri|not|never|no)\b[^.!?]*$/.test(foran);
};

const frontmatter = (tekst) => {
  const m = tekst.match(/^---\n([\s\S]*?)\n---\n/);
  return m ? { fm: m[1], body: tekst.slice(m[0].length) } : { fm: '', body: tekst };
};
const felt = (fm, navn) => {
  const m = fm.match(new RegExp(`^${navn}:\\s*(.*)$`, 'm'));
  return m ? m[1].trim() : undefined;
};
const harBlokk = (fm, navn) => new RegExp(`^${navn}:`, 'm').test(fm);

async function filer(mappe) {
  const ut = [];
  for (const e of await readdir(join(ROOT, mappe), { withFileTypes: true })) {
    if (e.isDirectory()) ut.push(...(await filer(join(mappe, e.name))));
    else if (e.name.endsWith('.md')) ut.push(join(mappe, e.name));
  }
  return ut;
}

for (const mappe of ['episodes', 'resources', 'scripts', 'guests']) {
  for (const rel of await filer(mappe)) {
    const sti = join(ROOT, rel);
    const tekst = await readFile(sti, 'utf8');
    const { fm, body } = frontmatter(tekst);
    const alt = fm + '\n' + body;

    for (const m of FORBUDTE_LOVNADER) {
      const t = alt.match(m);
      if (t && !negert(alt, t.index)) {
        feil.push(`${rel}: lover at innholdet erstatter verket – «${t[0]}»`);
      }
    }
    for (const m of AVKASTNINGSLOVNADER) {
      const t = alt.match(m);
      if (t && !negert(alt, t.index)) {
        feil.push(`${rel}: løfte om avkastning eller kjøpsanbefaling – «${t[0]}»`);
      }
    }

    // Bokomtaler skal ha henvisning til originalverket.
    if (felt(fm, 'format') === 'boker-forklart' && !harBlokk(fm, 'book')) {
      feil.push(`${rel}: format er boker-forklart, men mangler book: (tittel og forfatter)`);
    }

    // Kommersielle formuleringer uten registrert avtale.
    for (const m of KOMMERSIELLE_ORD) {
      const t = body.match(m);
      if (t && !harBlokk(fm, 'commercial')) {
        advarsler.push(`${rel}: bruker «${t[0]}» uten commercial: i frontmatter – er det en reell avtale?`);
      }
    }

    // Bilder uten registrert opphav.
    if (felt(fm, 'image') && !harBlokk(fm, 'imageCredit')) {
      advarsler.push(`${rel}: har image uten imageCredit – se public/images/RETTIGHETER.md`);
    }
    if (/^\s+source:\s*ukjent\s*$/m.test(fm)) {
      feil.push(`${rel}: imageCredit.source er «ukjent» – slike bilder skal ikke publiseres`);
    }

    // Lange manus som handler om en bok bør ha verket registrert.
    const bokOmtaler = (body.match(/\bbok(a|en|ens)\b|\bbook\b/gi) ?? []).length;
    if (mappe === 'scripts' && body.split(/\s+/).length > 1200 && bokOmtaler >= 3 && !harBlokk(fm, 'book')) {
      advarsler.push(`${rel}: langt manus som omtaler en bok, uten book: i frontmatter`);
    }
  }
}

const skriv = (tittel, liste) => {
  if (!liste.length) return;
  console.log(`\n${tittel}`);
  for (const l of liste) console.log(`  ${l}`);
};

skriv('FEIL', feil);
skriv('ADVARSLER', advarsler);

if (!feil.length && !advarsler.length) {
  console.log('Innholdssjekk: ingenting å bemerke.');
} else {
  console.log(`\n${feil.length} feil, ${advarsler.length} advarsler.`);
}
process.exit(feil.length > 0 || (strict && advarsler.length > 0) ? 1 : 0);
