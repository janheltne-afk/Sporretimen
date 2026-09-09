import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/config';

/**
 * Innhold på to språk.
 *
 * Norske filer ligger rett i innholdsmappene. Engelske ligger i en `en/`-mappe
 * under samme sted, med samme filnavn. Astro gir dem da id-er som `en/sturla`,
 * og språket kan leses rett ut av id-en.
 */

/** Språket til en oppføring, utledet av id-en. */
export function localeOf(id: string): Locale {
  return id.startsWith('en/') ? 'en' : 'no';
}

/** Id-en uten språkprefiks – adressen oppføringen får på sitt eget språk. */
export function slugOf(id: string): string {
  return id.startsWith('en/') ? id.slice(3) : id;
}

/** Id-en til samme oppføring på et gitt språk. */
export function idFor(lang: Locale, slug: string): string {
  return lang === 'en' ? `en/${slug}` : slug;
}

const inLocale = (lang: Locale) => (id: string) => localeOf(id) === lang;

/** Alle episoder på ett språk som ikke er markert som draft. */
export async function getEpisodes(lang: Locale = 'no'): Promise<CollectionEntry<'episodes'>[]> {
  const all = await getCollection('episodes', ({ data }) => !data.draft);
  return all.filter((e) => inLocale(lang)(e.id)).sort(byRecency(lang));
}

/** Sortering: publiserte (nyest først), deretter kommende. */
function byRecency(lang: Locale) {
  const collator = lang === 'en' ? 'en' : 'nb';
  return (a: CollectionEntry<'episodes'>, b: CollectionEntry<'episodes'>) => {
    const aPub = a.data.status === 'publisert';
    const bPub = b.data.status === 'publisert';
    if (aPub !== bPub) return aPub ? -1 : 1;
    const at = a.data.publishDate?.getTime() ?? 0;
    const bt = b.data.publishDate?.getTime() ?? 0;
    if (at !== bt) return bt - at;
    return a.data.title.localeCompare(b.data.title, collator);
  };
}

const byOrderThen = (lang: Locale, field: 'name' | 'title') => (a: any, b: any) =>
  a.data.order - b.data.order ||
  String(a.data[field]).localeCompare(String(b.data[field]), lang === 'en' ? 'en' : 'nb');

/** Alle gjester på ett språk som ikke er draft. */
export async function getGuests(lang: Locale = 'no'): Promise<CollectionEntry<'guests'>[]> {
  const all = await getCollection('guests', ({ data }) => !data.draft);
  return all.filter((g) => inLocale(lang)(g.id)).sort(byOrderThen(lang, 'name'));
}

/** Alle ressurser på ett språk som ikke er draft. */
export async function getResources(lang: Locale = 'no'): Promise<CollectionEntry<'resources'>[]> {
  const all = await getCollection('resources', ({ data }) => !data.draft);
  return all.filter((r) => inLocale(lang)(r.id)).sort(byOrderThen(lang, 'title'));
}

/** Ressurser som er knyttet til en gitt episode. */
export async function resourcesForEpisode(
  episodeId: string,
  resources?: CollectionEntry<'resources'>[]
): Promise<CollectionEntry<'resources'>[]> {
  const list = resources ?? (await getResources(localeOf(episodeId)));
  return list.filter((r) => r.data.episodes.some((e) => e.id === episodeId));
}

/** Alle kurs på ett språk som ikke er draft. */
export async function getCourses(lang: Locale = 'no'): Promise<CollectionEntry<'courses'>[]> {
  const all = await getCollection('courses', ({ data }) => !data.draft);
  return all.filter((c) => inLocale(lang)(c.id)).sort(byOrderThen(lang, 'title'));
}

/** Alle manus som ikke er draft. */
export async function getScripts(lang?: Locale): Promise<CollectionEntry<'scripts'>[]> {
  const all = await getCollection('scripts', ({ data }) => !data.draft);
  return lang ? all.filter((s) => inLocale(lang)(s.id)) : all;
}

/** Manuset som hører til en gitt episode, hvis det finnes. */
export async function scriptForEpisode(
  episodeId: string,
  scripts?: CollectionEntry<'scripts'>[]
): Promise<CollectionEntry<'scripts'> | undefined> {
  const list = scripts ?? (await getScripts());
  return list.find((s) => s.data.episode.id === episodeId);
}

/** Episodene en gitt gjest deltar i. */
export async function episodesForGuest(
  guestId: string,
  episodes?: CollectionEntry<'episodes'>[]
): Promise<CollectionEntry<'episodes'>[]> {
  const list = episodes ?? (await getEpisodes(localeOf(guestId)));
  return list.filter((e) => e.data.guest?.id === guestId);
}
