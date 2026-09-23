/**
 * Leser episodelengden fra Spotify og skriver den inn i `duration:`.
 *
 * Lengden sto tidligere for hånd, og ble fort feil: memoreringsepisoden var
 * oppført som «Cirka 45 min» og er 36 minutter. Spotifys innebyggingsside
 * oppgir lengden i millisekunder, og det er den eneste maskinlesbare kilden
 * vi har – YouTube gir den ikke ut uten API-nøkkel.
 *
 * Episoder uten Spotify-lenke får ingen varighet. Det er med vilje: en tom
 * linje er bedre enn et tall noen har gjettet.
 *
 *     node scripts/les-varighet.mjs            # skriv inn
 *     node scripts/les-varighet.mjs --sjekk    # bare vis avvik
 */
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';

const ROT = new URL('..', import.meta.url).pathname;
const BARE_SJEKK = process.argv.includes('--sjekk');

/** «Cirka 44 min» / «About 1 h 27 min», avrundet til nærmeste minutt. */
function formater(ms, lang) {
  const min = Math.round(ms / 60000);
  const t = Math.floor(min / 60);
  const rest = min % 60;
  const prefiks = lang === 'en' ? 'About' : 'Cirka';
  if (t === 0) return `${prefiks} ${min} min`;
  return `${prefiks} ${t} ${lang === 'en' ? 'h' : 't'} ${rest} min`;
}

async function varighet(episodeId) {
  const svar = await fetch(`https://open.spotify.com/embed/episode/${episodeId}`, {
    headers: { 'user-agent': 'Mozilla/5.0' },
  });
  if (!svar.ok) return null;
  const treff = (await svar.text()).match(/"duration":(\d+)/);
  return treff ? Number(treff[1]) : null;
}

const filer = [];
for await (const f of glob('src/content/episodes/**/*.md', { cwd: ROT })) filer.push(f);
filer.sort();

let skrevet = 0;
let uendret = 0;
const mangler = [];

for (const rel of filer) {
  const sti = ROT + rel;
  const tekst = await readFile(sti, 'utf8');
  const slutt = tekst.indexOf('\n---\n', 3);
  const fm = tekst.slice(0, slutt);

  const lenke = fm.match(/^\s+spotify: (\S+)/m);
  if (!lenke) {
    if (/^duration:/m.test(fm)) mangler.push(rel);
    continue;
  }

  const id = lenke[1].replace(/\/$/, '').split('/').pop().split('?')[0];
  const ms = await varighet(id);
  if (!ms) {
    console.log(`  ${rel}: klarte ikke lese lengden`);
    continue;
  }

  const lang = rel.includes('/en/') ? 'en' : 'no';
  const ny = formater(ms, lang);
  const gammel = fm.match(/^duration: *"?(.+?)"?$/m);

  if (gammel?.[1] === ny) {
    uendret++;
    continue;
  }

  console.log(`  ${rel}\n      ${gammel?.[1] ?? '(ingen)'}  ->  ${ny}`);
  if (BARE_SJEKK) continue;

  const oppdatert = gammel
    ? tekst.replace(/^duration: *"?.+?"?$/m, `duration: "${ny}"`)
    : tekst.replace(/^(coverTheme:)/m, `duration: "${ny}"\n$1`);
  await writeFile(sti, oppdatert);
  skrevet++;
}

console.log(`\n${skrevet} oppdatert, ${uendret} uendret.`);
if (mangler.length) {
  console.log(`\nHar varighet uten Spotify-lenke – kan ikke kontrolleres:`);
  for (const m of mangler) console.log(`  ${m}`);
}
