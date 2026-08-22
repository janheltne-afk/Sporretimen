/**
 * Varsler søkemotorer om nytt/endret innhold via IndexNow.
 *
 * Kjør etter at nettsiden er publisert:
 *   npm run indexnow
 *
 * Hvilke søkemotorer lytter?
 *   Bing, Yandex, Naver, Seznam og Yep. Bings indeks driver blant annet
 *   ChatGPT Search og Copilot, og brukes av Perplexity – så dette treffer
 *   AI-søk raskt.
 *
 * Google støtter IKKE IndexNow. Der gjelder fortsatt sitemap + Search Console.
 *
 * VIKTIG: IndexNow er ment for sider som faktisk er endret. Sender man hele
 * nettkartet på nytt hver gang, regnes det som misbruk, og nøkkelen kan bli
 * avvist med HTTP 403. Derfor sammenligner dette skriptet innholdet i `dist`
 * mot forrige kjøring, og sender kun adressene som har endret seg.
 *
 * Tilstanden ligger i `scripts/indexnow-state.json` og er sjekket inn, slik at
 * den overlever bygg på nye maskiner.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const KEY = '755d3feccae34d558cab370115d31977';
const HOST = 'www.sporretimen.no';
const SITEMAP = 'dist/sitemap-0.xml';
const STATE = 'scripts/indexnow-state.json';

const dryRun = process.argv.includes('--dry-run');
const force = process.argv.includes('--force');

const sitemap = await readFile(SITEMAP, 'utf8').catch(() => {
  console.error(`Fant ikke ${SITEMAP}. Kjør «npm run build» først.`);
  process.exit(1);
});

const allUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (allUrls.length === 0) {
  console.error('Ingen adresser funnet i nettkartet.');
  process.exit(1);
}

/** Gjør en adresse om til stien i `dist`, f.eks. /om/ → dist/om/index.html */
function distPathFor(url) {
  const { pathname } = new URL(url);
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  return clean ? `dist/${clean}/index.html` : 'dist/index.html';
}

const previous = JSON.parse(await readFile(STATE, 'utf8').catch(() => '{}'));
const current = {};
const changed = [];

for (const url of allUrls) {
  const html = await readFile(distPathFor(url), 'utf8').catch(() => null);
  if (html === null) {
    console.warn(`Advarsel: fant ingen bygget fil for ${url} – hopper over.`);
    continue;
  }
  const hash = createHash('sha256').update(html).digest('hex').slice(0, 16);
  current[url] = hash;
  if (force || previous[url] !== hash) changed.push(url);
}

// Adresser som er fjernet siden sist, skal ikke meldes inn på nytt.
const removed = Object.keys(previous).filter((u) => !(u in current));
if (removed.length > 0) {
  console.log(`${removed.length} adresse(r) finnes ikke lenger og utelates.`);
}

if (changed.length === 0) {
  console.log('Ingen endrede sider. Ingenting å melde inn.');
  process.exit(0);
}

console.log(`${changed.length} av ${allUrls.length} sider er endret:`);
for (const url of changed) console.log(`  ${url}`);

if (dryRun) {
  console.log('\n--dry-run: ingenting ble sendt, og tilstanden er uendret.');
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: changed,
  }),
});

// 200 = mottatt, 202 = mottatt men nøkkelen valideres fortsatt
if (res.ok) {
  await writeFile(STATE, `${JSON.stringify(current, null, 2)}\n`);
  console.log(`\n✅ Meldt inn ${changed.length} adresse(r). HTTP ${res.status}.`);
} else {
  const detail = await res.text().catch(() => '');
  console.error(`\n❌ IndexNow svarte HTTP ${res.status}: ${detail}`);
  console.error('Tilstanden er ikke oppdatert – prøv igjen ved neste publisering.');
  process.exit(1);
}
