import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getEpisodes } from '@/lib/content';
import { site } from '@/data/site';

export async function GET(context: APIContext) {
  const episodes = await getEpisodes();
  return rss({
    title: `${site.name} – episoder`,
    description: site.description,
    site: context.site ?? site.url,
    items: episodes
      .filter((e) => e.data.status === 'publisert')
      .map((e) => ({
        title: e.data.title,
        description: e.data.description,
        link: `/episoder/${e.id}`,
        pubDate: e.data.publishDate,
        categories: e.data.categories,
      })),
    customData: `<language>nb-no</language>`,
  });
}
