import { getCollection, type CollectionEntry } from 'astro:content';

/** Alle episoder som ikke er markert som draft. */
export async function getEpisodes(): Promise<CollectionEntry<'episodes'>[]> {
  const all = await getCollection('episodes', ({ data }) => !data.draft);
  return all.sort(byRecency);
}

/** Sortering: publiserte (nyest først), deretter kommende. */
function byRecency(a: CollectionEntry<'episodes'>, b: CollectionEntry<'episodes'>) {
  const aPub = a.data.status === 'publisert';
  const bPub = b.data.status === 'publisert';
  if (aPub !== bPub) return aPub ? -1 : 1;
  const at = a.data.publishDate?.getTime() ?? 0;
  const bt = b.data.publishDate?.getTime() ?? 0;
  if (at !== bt) return bt - at;
  return a.data.title.localeCompare(b.data.title, 'nb');
}

/** Alle gjester som ikke er draft, sortert etter `order` og navn. */
export async function getGuests(): Promise<CollectionEntry<'guests'>[]> {
  const all = await getCollection('guests', ({ data }) => !data.draft);
  return all.sort(
    (a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name, 'nb')
  );
}

/** Alle ressurser som ikke er draft, sortert etter order og tittel. */
export async function getResources(): Promise<CollectionEntry<'resources'>[]> {
  const all = await getCollection('resources', ({ data }) => !data.draft);
  return all.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'nb')
  );
}

/** Ressurser som er knyttet til en gitt episode. */
export async function resourcesForEpisode(
  episodeId: string,
  resources?: CollectionEntry<'resources'>[]
): Promise<CollectionEntry<'resources'>[]> {
  const list = resources ?? (await getResources());
  return list.filter((r) => r.data.episodes.some((e) => e.id === episodeId));
}

/** Alle kurs som ikke er draft, sortert etter order og tittel. */
export async function getCourses(): Promise<CollectionEntry<'courses'>[]> {
  const all = await getCollection('courses', ({ data }) => !data.draft);
  return all.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'nb')
  );
}

/** Alle manus som ikke er draft. */
export async function getScripts(): Promise<CollectionEntry<'scripts'>[]> {
  return getCollection('scripts', ({ data }) => !data.draft);
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
  const list = episodes ?? (await getEpisodes());
  return list.filter((e) => e.data.guest?.id === guestId);
}
