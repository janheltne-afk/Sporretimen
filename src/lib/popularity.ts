/**
 * «Populært akkurat nå» på forsiden.
 *
 * Det finnes ingen analytics å hente tall fra ennå, så rekkefølgen styres i
 * dag av `popularityScore` i frontmatter – du setter selv hva som skal løftes
 * frem. Faller ingenting ut av det, brukes nyeste publiserte innhold.
 *
 * Skal dette kobles til reelle tall senere, er det denne ene funksjonen som
 * skal endres: hent tellinger fra analyseverktøyet eller fra
 * `interest_stats` i Supabase, og sorter på dem. Forsiden trenger ikke vite
 * hvor tallene kommer fra.
 */

import type { CollectionEntry } from 'astro:content';

type Episode = CollectionEntry<'episodes'>;

export function popularEpisodes(episodes: Episode[], limit = 3): Episode[] {
  const scored = episodes
    .filter((e) => e.data.popularityScore > 0)
    .sort((a, b) => b.data.popularityScore - a.data.popularityScore);

  if (scored.length >= limit) return scored.slice(0, limit);

  // Fyll opp med nyeste publiserte episoder som ikke alt er med.
  const rest = episodes.filter((e) => e.data.status === 'publisert' && !scored.includes(e));
  return [...scored, ...rest].slice(0, limit);
}
