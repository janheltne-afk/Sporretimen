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
 */
import { readFile } from 'node:fs/promises';

const KEY = 'd9e9170191720b537807ec0d1ed7f81e';
const HOST = 'www.sporretimen.no';
const SITEMAP = 'dist/sitemap-0.xml';

const sitemap = await readFile(SITEMAP, 'utf8').catch(() => {
  console.error(`Fant ikke ${SITEMAP}. Kjør «npm run build» først.`);
  process.exit(1);
});

const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('Ingen adresser funnet i sitemap.');
  process.exit(1);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
};

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

// 200 = mottatt, 202 = mottatt men nøkkelen valideres fortsatt
if (res.ok) {
  console.log(`✅ Sendte ${urlList.length} adresser til IndexNow (HTTP ${res.status}).`);
} else {
  console.error(`❌ IndexNow svarte HTTP ${res.status}: ${await res.text()}`);
  process.exit(1);
}
