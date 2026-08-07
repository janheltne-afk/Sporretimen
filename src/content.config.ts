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
      format: z.enum(['samtale', 'laer-noe-nytt', 'kort-forklart']),
      // status: bruk 'kommende' for planlagte episoder som ikke er publisert ennå.
      status: z.enum(['publisert', 'kommende']).default('kommende'),
      // Referanse til en gjest (valgfritt – Lær noe nytt / Kort forklart kan stå alene).
      guest: reference('guests').optional(),
      categories: z.array(z.string()).default([]),
      // Yrket episoden handler om (for karriere-episoder), f.eks. «Lege».
      // Knyttes til episoden, ikke gjesten – én gjest kan dekke flere yrker.
      yrke: z.string().optional(),
      // Hovedtemaer episoden dekker (vises som synlig HTML + brukes i SEO).
      topics: z.array(z.string()).default([]),
      // Konkrete spørsmål episoden besvarer (godt for søk og AI-svar).
      questions: z.array(z.string()).default([]),
      // Hovedpunkter / viktigste poenger fra episoden.
      takeaways: z.array(z.string()).default([]),
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

/**
 * Manus / spørsmål til en episode.
 *
 * Legg en .md-fil i `src/content/scripts/`. Bruk samme filnavn som episoden
 * (f.eks. `john-erik-legeyrket.md`) for oversiktens skyld, og pek på episoden
 * med `episode:`-feltet. Selve manuset skrives som vanlig Markdown i brødteksten.
 *
 * Når du senere transkriberer og legger inn svar, skriv svaret rett under
 * spørsmålet – gjerne som et sitat (linje som begynner med `>`), så vises det
 * tydelig atskilt fra spørsmålet. Endre da `kind` til `transkribert`.
 */
const scripts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/scripts' }),
  schema: () =>
    z.object({
      episode: reference('episodes'),
      // 'sporsmal' = kun spørsmål, 'transkribert' = svar er lagt inn.
      kind: z.enum(['sporsmal', 'transkribert']).default('sporsmal'),
      // Valgfri arbeidstittel vist øverst på manus-siden.
      worktitle: z.string().optional(),
      // Undertittel vist under tittelen (typisk for transkriberte episoder).
      subtitle: z.string().optional(),
      // Metabeskrivelse for søk/deling. Faller tilbake til episodens beskrivelse.
      description: z.string().optional(),
      updated: z.coerce.date().optional(),
      draft: z.boolean().default(false),
    }),
});

/**
 * Ressursarkiv – husketeknikker, bokanbefalinger, tips og verktøy nevnt i
 * podkasten (eller som utfyller den).
 *
 * Legg en .md-fil i `src/content/resources/`. Brødteksten er stedet for lengre
 * notater (f.eks. notater fra en bok eller hvordan en teknikk fungerer).
 */
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: () =>
    z.object({
      title: z.string(),
      // Hovedtype – styrer hovedmerkelappen. Se `resourceTypes` i src/data/site.ts.
      type: z.enum(['bok', 'husketeknikk', 'tips', 'verktoy', 'artikkel', 'podkast']),
      // Valgfrie tilleggstyper. Ressursen dukker da opp under flere filtre –
      // f.eks. en husketeknikk-ressurs som også består av bøker.
      alsoTypes: z
        .array(z.enum(['bok', 'husketeknikk', 'tips', 'verktoy', 'artikkel', 'podkast']))
        .default([]),
      // Angi at ressursen er på et annet språk enn norsk (f.eks. «Engelsk»).
      language: z.string().optional(),
      // Forfatter (mest aktuelt for bøker).
      author: z.string().optional(),
      // Kort oppsummering vist på kort og øverst på ressurssiden.
      summary: z.string(),
      // Ekstern lenke (kjøp/les/verktøy). Valgfritt.
      url: z.string().url().optional(),
      // Episoder ressursen er nevnt i (kobles begge veier).
      episodes: z.array(reference('episodes')).default([]),
      // Tema-tagger (Helse, Karriere, Friluftsliv ...).
      categories: z.array(z.string()).default([]),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

/**
 * Kurs – egne kurstilbud, adskilt fra Lær noe nytt-episodene (som kun er et
 * episodearkiv). Kursene settes opp her, og besøkende kan melde interesse.
 * Interessen brukes til å prioritere hvilke kurs som får fortgang.
 *
 * Legg en .md-fil i `src/content/courses/`. Brødteksten beskriver kurset.
 */
const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: () =>
    z.object({
      title: z.string(),
      // Kort oppsummering vist på kurskortet.
      summary: z.string(),
      // Status i prosessen:
      //  'vurderes'  – idé; interesse avgjør om det prioriteres
      //  'planlagt'  – besluttet, under utvikling
      //  'apen'      – påmelding/gjennomføring er i gang
      status: z.enum(['vurderes', 'planlagt', 'apen']).default('vurderes'),
      // Temaer kurset dekker.
      topics: z.array(z.string()).default([]),
      // Antatt format/omfang, f.eks. «Digitalt, 4 samlinger» (valgfritt).
      format: z.string().optional(),
      // Hvem kurset passer for (valgfritt).
      audience: z.string().optional(),
      // Læringsutbytte – hva du sitter igjen med.
      outcomes: z.array(z.string()).default([]),
      // Kursinnhold som moduler/deler, i rekkefølge.
      curriculum: z
        .array(
          z.object({
            title: z.string(),
            description: z.string().optional(),
          })
        )
        .default([]),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { episodes, guests, scripts, resources, courses };
