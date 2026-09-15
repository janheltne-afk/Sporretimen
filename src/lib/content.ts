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

/* ------------------------------------------------- serier, temaer, relatert */

import { seriesOf, type SeriesId } from '@/i18n/taxonomy';
import { topicById, topics, type Topic } from '@/data/topics';

type Episode = CollectionEntry<'episodes'>;
type Resource = CollectionEntry<'resources'>;

/** Episodene i ett av de to innholdssporene. */
export async function getSeriesEpisodes(
  lang: Locale,
  series: SeriesId,
  episodes?: Episode[]
): Promise<Episode[]> {
  const list = episodes ?? (await getEpisodes(lang));
  return list.filter((e) => seriesOf(e.data.format) === series);
}

/**
 * Hører innholdet til et hovedtema?
 *
 * Enten fordi det er hovedtemaet, eller fordi ett av undertemaene ligger under
 * det. Det andre er poenget: en samtale om paramedisineryrket har karriere som
 * hovedspor, men hører like fullt hjemme under Helse.
 */
function inTopic(data: { topic: string; subtopics: string[] }, topic: Topic): boolean {
  if (data.topic === topic.id) return true;
  const own = new Set(topic.subtopics.map((s) => s.id));
  return data.subtopics.some((s) => own.has(s));
}

/** Episodene under et hovedtema, inkludert dem som bare har et undertema der. */
export async function episodesForTopic(
  lang: Locale,
  topicId: string,
  episodes?: Episode[]
): Promise<Episode[]> {
  const topic = topicById(topicId);
  if (!topic) return [];
  const list = episodes ?? (await getEpisodes(lang));
  return list.filter((e) => inTopic(e.data, topic));
}

/** Episodene under ett undertema. */
export async function episodesForSubtopic(
  lang: Locale,
  subtopicId: string,
  episodes?: Episode[]
): Promise<Episode[]> {
  const list = episodes ?? (await getEpisodes(lang));
  return list.filter((e) => e.data.subtopics.includes(subtopicId));
}

/** Ressursene under et hovedtema. */
export async function resourcesForTopic(
  lang: Locale,
  topicId: string,
  resources?: Resource[]
): Promise<Resource[]> {
  const topic = topicById(topicId);
  if (!topic) return [];
  const list = resources ?? (await getResources(lang));
  return list.filter((r) => inTopic(r.data, topic));
}

/** Ressursene under ett undertema. */
export async function resourcesForSubtopic(
  lang: Locale,
  subtopicId: string,
  resources?: Resource[]
): Promise<Resource[]> {
  const list = resources ?? (await getResources(lang));
  return list.filter((r) => r.data.subtopics.includes(subtopicId));
}

/** Hvor mye innhold som finnes under hvert hovedtema. */
export async function topicCounts(lang: Locale): Promise<Map<string, number>> {
  const [episodes, resources] = await Promise.all([getEpisodes(lang), getResources(lang)]);
  const counts = new Map<string, number>();
  for (const topic of topics) {
    const n =
      episodes.filter((e) => inTopic(e.data, topic)).length +
      resources.filter((r) => inTopic(r.data, topic)).length;
    counts.set(topic.id, n);
  }
  return counts;
}

/**
 * Relatert innhold, rangert.
 *
 * Prioriteringen følger hvor nær slektskapet er: felles undertema veier mest,
 * så samme hovedtema og samme format, så samme hovedtema, og til slutt samme
 * format. Episoder forfatteren selv har pekt ut i `related` står alltid først.
 */
export async function relatedEpisodes(
  episode: Episode,
  limit = 3,
  episodes?: Episode[]
): Promise<Episode[]> {
  const lang = localeOf(episode.id);
  const list = episodes ?? (await getEpisodes(lang));
  const d = episode.data;
  const picked = d.related.map((r) => r.id);

  const score = (other: Episode): number => {
    if (other.id === episode.id) return -1;
    let s = 0;
    // Håndplukket av forfatteren – skal alltid ligge øverst.
    if (picked.includes(other.id)) s += 100;
    const shared = other.data.subtopics.filter((x) => d.subtopics.includes(x)).length;
    s += shared * 10;
    if (other.data.topic === d.topic) s += 6;
    if (other.data.format === d.format) s += 2;
    if (seriesOf(other.data.format) === seriesOf(d.format)) s += 1;
    // Publiserte episoder er mer nyttige som neste steg enn kommende.
    if (other.data.status === 'publisert') s += 1;
    return s;
  };

  return list
    .map((e) => ({ e, s: score(e) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((x) => x.e);
}

/** Ressursene som hører tematisk sammen med en episode. */
export async function relatedResources(
  episode: Episode,
  limit = 3,
  resources?: Resource[]
): Promise<Resource[]> {
  const lang = localeOf(episode.id);
  const list = resources ?? (await getResources(lang));
  const d = episode.data;
  const direct = list.filter((r) => r.data.episodes.some((e) => e.id === episode.id));
  const nearby = list
    .filter((r) => !direct.includes(r))
    .map((r) => ({
      r,
      s:
        r.data.subtopics.filter((x) => d.subtopics.includes(x)).length * 10 +
        (r.data.topic === d.topic ? 5 : 0),
    }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .map((x) => x.r);
  return [...direct, ...nearby].slice(0, limit);
}
