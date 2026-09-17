/**
 * Bygger søkeindeksen ut fra de ferdige sidene i dist/.
 *
 * Grunnen til å lese HTML-en i stedet for innholdssamlingene: indeksen blir da
 * et speil av det som faktisk er publisert. Statiske sider (om, personvern,
 * vilkår) kommer med uten at noen må huske å legge dem til, innhold som ikke
 * har fått en rute – foredragene, de norske kursene uten engelsk motstykke –
 * kommer ikke med, og enhver adresse i indeksen er garantert en side som
 * finnes. Prisen er at dette kjører på HTML og ikke på Markdown, og at
 * uttrekket derfor må være forsiktig.
 *
 * Ett indeksfil per språk, slik at ingen laster ned tekst på et språk de ikke
 * leser. Filene hentes først når noen åpner søkesiden.
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Hvor indeksen havner, per språk. Må stemme med sokIndeksUrl i src/lib/sok.ts. */
const UTFIL = { no: 'sok-indeks.json', en: join('en', 'search-index.json') };

/** Sider som aldri skal kunne søkes opp, uansett hva de inneholder. */
const UTELATT = [/^404\//, /^en\/404\//];

/**
 * Seksjoner som ikke tas med i søket.
 *
 * Oversiktssidene inneholder tittelen til alt de lister opp, og ville derfor
 * gitt treff på nesten hvilket som helst søk – og dyttet ned den siden treffet
 * faktisk står på. Hver oppføring på dem har uansett sin egen side.
 */
const UTELATTE_SEKSJONER = new Set(['index']);

/** Finner alle index.html-filer under en mappe. */
async function finnSider(rot) {
  const ut = [];
  async function gå(mappe) {
    for (const post of await readdir(mappe, { withFileTypes: true })) {
      const full = join(mappe, post.name);
      if (post.isDirectory()) await gå(full);
      else if (post.name === 'index.html') ut.push(full);
    }
  }
  await gå(rot);
  return ut;
}

/** Innholdet i det første elementet med gitt tagg. */
function taggInnhold(html, tagg) {
  const m = new RegExp(`<${tagg}\\b[^>]*>([\\s\\S]*?)</${tagg}>`, 'i').exec(html);
  return m ? m[1] : '';
}

const ENTITETER = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  aring: 'å',
  oslash: 'ø',
  aelig: 'æ',
  Aring: 'Å',
  Oslash: 'Ø',
  AElig: 'Æ',
  hellip: '…',
  mdash: '—',
  ndash: '–',
  rsquo: '’',
  lsquo: '‘',
  ldquo: '“',
  rdquo: '”',
};

function avkod(tekst) {
  return tekst
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (hel, navn) => ENTITETER[navn] ?? hel);
}

/**
 * Gjør HTML om til lesbar løpetekst.
 *
 * Alt som ikke er brødtekst fjernes først: skript, stil, svg, og de tre
 * panelene som gjentar seg på hver eneste side (skip-lenke, brødsmuler og
 * «relatert innhold»). Uten det ville hvert dokument fått med seg de samme
 * ordene, og søket ville gitt treff på alt.
 */
function tilTekst(html) {
  let t = html
    .replace(/<(script|style|svg|template|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    // Gjentatt navigasjon i bunnen av innholdssidene.
    .replace(/<(nav|aside)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    // Elementer merket som navigasjon, f.eks. «← Alle episoder». De står
    // øverst på siden og ville ellers innledet hvert eneste utdrag.
    .replace(/<(\w+)\b[^>]*\bdata-search-skip\b[^>]*>[\s\S]*?<\/\1>/gi, ' ');
  // Blokkslutt blir avsnittsskille, slik at ord ikke klistrer seg sammen.
  t = t.replace(/<\/(p|div|section|article|li|h[1-6]|tr|figcaption|blockquote|dd|dt)>/gi, '\n');
  t = t.replace(/<br\s*\/?>/gi, '\n');
  t = t.replace(/<[^>]+>/g, ' ');
  return avkod(t)
    .replace(/[ \t ]+/g, ' ')
    .replace(/\s*\n\s*/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function metaInnhold(html, navn) {
  const m = new RegExp(
    `<meta[^>]*name=["']${navn}["'][^>]*content=["']([^"']*)["']`,
    'i'
  ).exec(html);
  return m ? avkod(m[1]) : '';
}

export default function sokIndeks() {
  return {
    name: 'sporretimen-sok-indeks',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const rot = fileURLToPath(dir);
        const sider = await finnSider(rot);
        const treff = { no: [], en: [] };
        let hoppet = 0;

        for (const fil of sider) {
          const html = await readFile(fil, 'utf8');
          const rel = relative(rot, fil).split(sep).join('/');
          if (UTELATT.some((r) => r.test(rel))) continue;

          // Omdirigeringene i astro.config lager små HTML-stubber uten
          // innhold. De er ikke sider, og skal ikke telles som hoppet over.
          if (/<meta[^>]*http-equiv=["']refresh["']/i.test(html)) continue;

          const main = taggInnhold(html, 'main');
          if (!main) {
            hoppet += 1;
            continue;
          }
          // Sider uten nøkkel er bevisst holdt utenfor (noindex).
          const kind = /<main\b[^>]*\bdata-search-kind="([a-z]+)"/i.exec(html)?.[1];
          if (!kind || UTELATTE_SEKSJONER.has(kind)) continue;

          const lang = /<html[^>]*\blang="en"/i.test(html) ? 'en' : 'no';
          const url = '/' + rel.replace(/index\.html$/, '');
          const tittel = avkod(taggInnhold(main, 'h1').replace(/<[^>]+>/g, ' '))
            .replace(/\s+/g, ' ')
            .trim();
          const tekst = tilTekst(main);

          treff[lang].push({
            u: url,
            k: kind,
            t: tittel || avkod(taggInnhold(html, 'title')).split('–')[0].trim(),
            d: metaInnhold(html, 'description'),
            b: tekst,
          });
        }

        for (const [lang, poster] of Object.entries(treff)) {
          poster.sort((a, b) => a.u.localeCompare(b.u));
          const ut = join(rot, UTFIL[lang]);
          await mkdir(dirname(ut), { recursive: true });
          await writeFile(ut, JSON.stringify({ n: poster.length, poster }));
          const kb = Math.round(Buffer.byteLength(JSON.stringify({ n: poster.length, poster })) / 1024);
          logger.info(`søkeindeks ${lang}: ${poster.length} sider, ${kb} kB → /${UTFIL[lang]}`);
        }
        if (hoppet) logger.warn(`søkeindeks: ${hoppet} sider uten <main> ble hoppet over`);
      },
    },
  };
}
