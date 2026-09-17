/**
 * Søket på tvers av nettstedet.
 *
 * Indeksen bygges av integrations/sok-indeks.mjs ut fra de ferdige sidene, og
 * hentes av søkesiden første gang noen skriver noe. All søking skjer i
 * nettleseren – ingenting sendes noe sted, og det er med vilje: personvern-
 * erklæringen sier at nettstedet ikke bruker sporingsverktøy, og et søkefelt
 * som ringer hjem ville gjort den usann.
 *
 * Det er ingen invertert indeks her, bare gjennomsøking av teksten. Med rundt
 * hundre sider og en halv megabyte tekst tar et søk noen få millisekunder, og
 * til gjengjeld kan vi vise hvor i teksten treffet står. Skulle arkivet vokse
 * mye, er det her man bytter til en ordindeks.
 */

export interface Post {
  /** Adressen til siden. */
  u: string;
  /** Hvilken del av nettstedet siden hører til. */
  k: string;
  /** Overskriften på siden. */
  t: string;
  /** Metabeskrivelsen. */
  d: string;
  /** Brødteksten, som løpetekst. */
  b: string;
}

export interface Indeks {
  n: number;
  poster: Post[];
}

export interface Utdrag {
  /** Tekstbitene før, i og etter treffet. Settes inn som tekstnoder. */
  biter: { tekst: string; treff: boolean }[];
  /** Ordet slik det står i teksten, brukt til å hoppe rett dit. */
  ord: string;
}

export interface Resultat {
  post: Post;
  poeng: number;
  utdrag: Utdrag[];
  /** Adresse med tekstfragment, så nettleseren ruller til og merker treffet. */
  href: string;
}

/**
 * Gjør om til søkeform: små bokstaver, og diakritiske tegn slått sammen med
 * grunnbokstaven, slik at «sovn» finner «søvn» og «oko» finner «øko».
 *
 * Hvert tegn byttes mot nøyaktig ett tegn. Det er poenget: posisjonene i den
 * foldede teksten er de samme som i originalen, så et treff kan merkes av i
 * den opprinnelige teksten uten å regne om noe. Derfor blir «æ» til «a» og
 * ikke til «ae», selv om det siste hadde vært riktigere.
 */
const FOLD: Record<string, string> = {
  à: 'a', á: 'a', â: 'a', ã: 'a', ä: 'a', å: 'a', æ: 'a',
  ç: 'c',
  è: 'e', é: 'e', ê: 'e', ë: 'e',
  ì: 'i', í: 'i', î: 'i', ï: 'i',
  ñ: 'n',
  ò: 'o', ó: 'o', ô: 'o', õ: 'o', ö: 'o', ø: 'o',
  ù: 'u', ú: 'u', û: 'u', ü: 'u',
  ý: 'y', ÿ: 'y',
  ß: 's',
  '’': "'", '‘': "'", '“': '"', '”': '"',
  '–': '-', '—': '-',
};

export function fold(tekst: string): string {
  let ut = '';
  for (const tegn of tekst.toLowerCase()) ut += FOLD[tegn] ?? tegn;
  return ut;
}

/** Alle posisjoner der `nål` står i `høystakk`. Begge skal være foldet. */
function posisjoner(høystakk: string, nål: string, maks = 50): number[] {
  const ut: number[] = [];
  let i = høystakk.indexOf(nål);
  while (i !== -1 && ut.length < maks) {
    ut.push(i);
    i = høystakk.indexOf(nål, i + nål.length);
  }
  return ut;
}

/** Utvider et treff til hele ordet det står i. */
function ordGrense(tekst: string, fra: number, lengde: number): [number, number] {
  const erOrd = (c: string) => /[\p{L}\p{N}]/u.test(c);
  let start = fra;
  while (start > 0 && erOrd(tekst[start - 1])) start -= 1;
  let slutt = fra + lengde;
  while (slutt < tekst.length && erOrd(tekst[slutt])) slutt += 1;
  return [start, slutt];
}

const KONTEKST = 90;

/** Bygger et lesbart utdrag rundt et treff, med treffet markert. */
function lagUtdrag(tekst: string, fra: number, lengde: number): Utdrag {
  const [tStart, tSlutt] = ordGrense(tekst, fra, lengde);

  let start = Math.max(0, tStart - KONTEKST);
  let slutt = Math.min(tekst.length, tSlutt + KONTEKST);
  // Ikke begynn eller slutt midt i et ord.
  if (start > 0) {
    const mellomrom = tekst.indexOf(' ', start);
    if (mellomrom !== -1 && mellomrom < tStart) start = mellomrom + 1;
  }
  if (slutt < tekst.length) {
    const mellomrom = tekst.lastIndexOf(' ', slutt);
    if (mellomrom !== -1 && mellomrom > tSlutt) slutt = mellomrom;
  }

  const rydd = (s: string) => s.replace(/\s+/g, ' ');
  const biter: Utdrag['biter'] = [];
  const før = rydd(tekst.slice(start, tStart));
  if (før) biter.push({ tekst: (start > 0 ? '… ' : '') + før, treff: false });
  else if (start > 0) biter.push({ tekst: '… ', treff: false });
  biter.push({ tekst: tekst.slice(tStart, tSlutt), treff: true });
  const etter = rydd(tekst.slice(tSlutt, slutt));
  if (etter) biter.push({ tekst: etter + (slutt < tekst.length ? ' …' : ''), treff: false });
  else if (slutt < tekst.length) biter.push({ tekst: ' …', treff: false });

  return { biter, ord: tekst.slice(tStart, tSlutt) };
}

/**
 * Adressen til siden, med et tekstfragment så nettleseren ruller ned til
 * treffet og merker det. Nettlesere som ikke støtter det, åpner bare siden.
 * Bindestrek, komma og ampersand må kodes, siden de skiller feltene i
 * fragmentet fra hverandre.
 */
function medTekstfragment(url: string, ord: string): string {
  if (!ord) return url;
  const kodet = encodeURIComponent(ord)
    .replace(/-/g, '%2D')
    .replace(/,/g, '%2C')
    .replace(/&/g, '%26');
  return `${url}#:~:text=${kodet}`;
}

/** Deler søketeksten i ord. Anførselstegn holder en frase samlet. */
export function deleSøk(q: string): { ord: string[]; frase: string } {
  const foldet = fold(q).trim();
  const sitert = /^"(.+)"$/.exec(foldet);
  if (sitert) return { ord: [sitert[1].trim()], frase: sitert[1].trim() };
  const ord = [...new Set(foldet.split(/\s+/).filter(Boolean))];
  return { ord, frase: ord.length > 1 ? foldet : '' };
}

export interface SøkValg {
  /** Hvor mange treff som returneres. */
  maks?: number;
  /** Hvor mange utdrag hvert treff vises med. */
  utdragPerTreff?: number;
}

export function søk(poster: Post[], q: string, valg: SøkValg = {}): Resultat[] {
  const { maks = 40, utdragPerTreff = 2 } = valg;
  const { ord, frase } = deleSøk(q);
  if (!ord.length || ord.every((o) => o.length < 2)) return [];

  const ut: Resultat[] = [];

  for (const post of poster) {
    const tittelF = fold(post.t);
    const beskrivelseF = fold(post.d);
    const kroppF = fold(post.b);

    // Alle ordene må finnes et sted på siden.
    const alle = ord.every(
      (o) => tittelF.includes(o) || beskrivelseF.includes(o) || kroppF.includes(o)
    );
    if (!alle) continue;

    let poeng = 0;
    for (const o of ord) {
      if (tittelF.includes(o)) poeng += 60;
      if (beskrivelseF.includes(o)) poeng += 12;
      // Flere forekomster teller, men med avtagende utbytte.
      poeng += Math.min(posisjoner(kroppF, o, 12).length, 12) * 2;
    }
    // En sammenhengende frase er et mye sterkere signal enn spredte ord.
    if (frase) {
      if (tittelF.includes(frase)) poeng += 120;
      if (kroppF.includes(frase)) poeng += 40;
    }

    // Utdrag: helst rundt frasen, ellers rundt det mest særpregede ordet.
    const lengst = [...ord].sort((a, b) => b.length - a.length)[0];
    const nål = frase && kroppF.includes(frase) ? frase : lengst;
    let steder = posisjoner(kroppF, nål, utdragPerTreff);
    let kilde = post.b;
    if (!steder.length) {
      // Bare treff i tittel eller beskrivelse – vis beskrivelsen i stedet.
      steder = posisjoner(beskrivelseF, nål, 1);
      kilde = post.d;
    }

    const utdrag = steder.map((i) => lagUtdrag(kilde, i, nål.length));
    ut.push({
      post,
      poeng,
      utdrag,
      href: medTekstfragment(post.u, utdrag[0]?.ord ?? ''),
    });
  }

  ut.sort((a, b) => b.poeng - a.poeng || a.post.t.localeCompare(b.post.t));
  return ut.slice(0, maks);
}
