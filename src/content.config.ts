import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Innholdsmodell for Spørretimen.
 *
 * For å legge til en ny EPISODE: lag en ny .md-fil i `src/content/episodes/`.
 * For å legge til en ny GJEST:  lag en ny .md-fil i `src/content/guests/`.
 *
 * Filnavnet (uten .md) blir adressen (slug). Feltene under valideres
 * automatisk ved bygg, slik at det er vanskelig å publisere noe halvferdig.
 */

const platformLinks = z
  .object({
    youtube: z.string().url().optional(),
    spotify: z.string().url().optional(),
    apple: z.string().url().optional(),
    // Fritt felt for andre plattformer (Podme, Pocket Casts, RSS ...)
    annet: z.string().url().optional(),
  })
  .partial()
  .optional();

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: () =>
    z.object({
      title: z.string(),
      // Format avgjør hvilken «type» episoden er.
      format: z.enum(['samtale', 'masterclass', 'kort-forklart']),
      // status: bruk 'kommende' for planlagte episoder som ikke er publisert ennå.
      status: z.enum(['publisert', 'kommende']).default('kommende'),
      // Referanse til en gjest (valgfritt – Masterclass/Kort forklart kan stå alene).
      guest: reference('guests').optional(),
      categories: z.array(z.string()).default([]),
      // Publiseringsdato. Kan utelates for kommende episoder.
      publishDate: z.coerce.date().optional(),
      // Varighet som lesbar tekst, f.eks. "58 min" eller "7 min".
      duration: z.string().optional(),
      description: z.string(),
      // Bilde/omslag. Utelates → nettsiden viser en pen plassholder.
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      links: platformLinks,
      // Kilder og referanser vist nederst i episoden.
      sources: z
        .array(
          z.object({
            title: z.string(),
            url: z.string().url().optional(),
          })
        )
        .default([]),
      // Relaterte episoder (slugs). Brukes for tematisk tredeling.
      related: z.array(reference('episodes')).default([]),
      featured: z.boolean().default(false),
      // Skjul en episode uten å slette den.
      draft: z.boolean().default(false),
    }),
});

const guests = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guests' }),
  schema: () =>
    z.object({
      name: z.string(),
      // Yrke eller rolle, f.eks. "Lege" eller "Revisor i PwC".
      role: z.string(),
      // Kort introduksjon vist på gjestekort og gjesteside.
      intro: z.string(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      // Temaer samtalen(e) handler om.
      themes: z.array(z.string()).default([]),
      // Geografisk tilknytning (valgfritt).
      region: z.string().optional(),
      // status: 'planlagt' = aktuell/ikke bekreftet, 'bekreftet' = avtalt.
      status: z.enum(['planlagt', 'bekreftet']).default('planlagt'),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { episodes, guests };
