/**
 * Felles oppsett for de to PDF-endepunktene, ett per språk.
 *
 * Ligger for seg selv slik at selve rutefilene blir like korte som de andre
 * rutene, og slik at oppslaget av gjest og serie gjøres ett sted.
 */
import { getEntry } from 'astro:content';
import type { APIRoute, GetStaticPaths } from 'astro';
import { getEpisodes, slugOf } from '@/lib/content';
import { episodePdf } from '@/lib/episode-pdf';
import { entryPath, type Locale } from '@/i18n/config';
import { seriesById, seriesOf } from '@/i18n/taxonomy';

const SITE = 'https://www.sporretimen.no';

export function pdfPaths(lang: Locale): GetStaticPaths {
  return async () => {
    const episodes = await getEpisodes(lang);
    return episodes.map((episode) => ({
      params: { slug: slugOf(episode.id) },
      props: { episode },
    }));
  };
}

export function pdfRoute(lang: Locale): APIRoute {
  return async ({ props }) => {
    const { episode } = props as { episode: Awaited<ReturnType<typeof getEpisodes>>[number] };
    const gjest = episode.data.guest ? await getEntry(episode.data.guest) : undefined;
    const serie = seriesById(lang, seriesOf(episode.data.format));

    const bytes = await episodePdf({
      episode,
      lang,
      gjest: gjest?.data.name,
      url: `${SITE}${entryPath(lang, 'episodes', slugOf(episode.id))}`,
      serie: serie?.label ?? 'Spørretimen',
    });

    // pdf-lib gir en Uint8Array som TypeScript typer som ArrayBufferLike,
    // mens Response vil ha en ren ArrayBuffer. .slice() gir en kopi med sin
    // egen buffer – noen kilobyte per episode, bare under bygg.
    // Bygget er statisk, så filen skrives til disk og serveres av verten ut
    // fra filendelsen – headere herfra gjelder bare `astro preview`. Filnavnet
    // nedlastingen får, settes med download-attributtet på lenka.
    return new Response(bytes.slice().buffer, {
      headers: { 'Content-Type': 'application/pdf' },
    });
  };
}
