import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { topicIds, subtopicIds } from '@/data/topics';

/**
 * Innholdsmodell for Spørretimen.
 *
 * For å legge til en ny EPISODE: lag en ny .md-fil i `src/content/episodes/`.
 * For å legge til en ny GJEST:  lag en ny .md-fil i `src/content/guests/`.
 *
 * Filnavnet (uten .md) blir adressen (slug). Feltene under valideres
 * automatisk ved bygg, slik at det er vanskelig å publisere noe halvferdig.
 */

/**
 * Tema og undertema valideres mot registeret i src/data/topics.ts. Skriver du
 * en id som ikke finnes, stopper bygget – i stedet for at innholdet stille
 * forsvinner fra temasidene.
 */
const topicField = z
  .string()
  .refine((v) => topicIds.includes(v), (v) => ({
    message: `Ukjent tema "${v}". Gyldige: ${topicIds.join(', ')}`,
  }));

const subtopicsField = z
  .array(
    z.string().refine((v) => subtopicIds.includes(v), (v) => ({
      message: `Ukjent undertema "${v}". Se src/data/topics.ts`,
    }))
  )
  .default([]);

/**
 * Verket en Bøker forklart-episode omtaler.
 *
 * Formålet er dobbelt: siden kan vise en ordentlig henvisning til
 * originalverket, og structured data kan peke på boken som et selvstendig
 * verk med sin egen forfatter. Sett bare felt du faktisk vet – utgiver og år
 * skal ikke gjettes.
 */
const bookRef = z.object({
  title: z.string(),
  author: z.string(),
  publisher: z.string().optional(),
  year: z.number().optional(),
  // Lenke til forlag, forfatter eller bokhandel – ikke til en piratkopi.
  sourceUrl: z.string().url().optional(),
  // Originaltittel når episoden bruker en oversatt tittel.
  originalTitle: z.string().optional(),
});

/**
 * Forbehold som vises på siden. Styres av innholdet, ikke av forfatteren:
 * er det helsestoff, settes 'helse', og komponenten vises automatisk.
 * Lista er tom på de aller fleste sidene, og skal være det.
 */
const advisories = z.array(z.enum(['helse', 'okonomi', 'juss'])).default([]);

/**
 * Merking av kommersielt innhold. Settes bare når det faktisk foreligger en
 * avtale. Merket vises øverst på siden, ikke nederst.
 */
const commercial = z
  .object({
    kind: z.enum(['annonse', 'sponset', 'samarbeid']),
    // Hvem avtalen er med. Vises i merket.
    partner: z.string(),
    // Kort forklaring av hva avtalen innebærer.
    note: z.string().optional(),
  })
  .optional();

/** Opphav til et bilde, slik at ukjent opphav ikke går upåaktet hen. */
const imageCredit = z
  .object({
    // 'egen' = laget av Spørretimen, 'gjest' = levert av gjesten,
    // 'lisens' = kjøpt/lisensiert, 'cc' = Creative Commons,
    // 'presse' = pressebilde med dokumentert tillatelse,
    // 'ukjent' = opphav ikke avklart. Sistnevnte skal ikke publiseres.
    source: z.enum(['egen', 'gjest', 'lisens', 'cc', 'presse', 'ukjent']),
    // Navnet som skal krediteres, der det er relevant.
    credit: z.string().optional(),
    // Lisensen, f.eks. «CC BY-SA 4.0», med lenke.
    license: z.string().optional(),
    licenseUrl: z.string().url().optional(),
  })
  .optional();

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
      // Format avgjør hvilken «type» episoden er. Serien utledes av formatet:
      // samtale → Spørretimen, alt annet → Spørretimen Forklart (se seriesOf).
      format: z.enum(['samtale', 'laer-noe-nytt', 'kort-forklart', 'boker-forklart']),
      // status: bruk 'kommende' for planlagte episoder som ikke er publisert ennå.
      status: z.enum(['publisert', 'kommende']).default('kommende'),
      // Referanse til en gjest (valgfritt – Lær noe nytt / Kort forklart kan stå alene).
      guest: reference('guests').optional(),
      // Hovedtema. Avgjør hvilken temaside episoden havner på.
      topic: topicField,
      // Undertemaer under hovedtemaet. Gir finere inndeling og bedre
      // «relatert innhold».
      subtopics: subtopicsField,
      // Frie stikkord på tvers av temaene. Vises ikke som filtre, men brukes
      // i søk og som siste kriterium for relatert innhold.
      tags: z.array(z.string()).default([]),
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
      // Bilde/omslag. Brukes som delebilde på Facebook, X og lignende, og
      // vises på selve nettsiden bare når `coverStyle` er satt til "bilde".
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      // Hvordan omslaget vises på nettsiden:
      // "plate"  – gjestebilde eller flate satt i sidens egen typografi
      // "bilde"  – filen i `image`, for omslag som holder mål på egen hånd
      coverStyle: z.enum(['plate', 'bilde']).default('plate'),
      // Kort temalinje på omslaget, f.eks. "Kanada-ekspedisjonen".
      // Utelates → første kategori brukes.
      coverTheme: z.string().optional(),
      // Verket episoden omtaler. Påkrevd i praksis for formatet
      // 'boker-forklart' – se sjekken i scripts/sjekk-innhold.mjs.
      book: bookRef.optional(),
      // Forbehold som skal vises (helse, økonomi, juss).
      advisory: advisories,
      // Kommersiell merking. Utelates når det ikke finnes en avtale.
      commercial,
      // Opphav til `image`.
      imageCredit,
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
      /**
       * Manuell vekt for «Populært akkurat nå» på forsiden, 0 = ikke med.
       * Ligger i frontmatter fordi det ennå ikke finnes analytics å hente
       * tallene fra. Se src/lib/popularity.ts for hvordan seksjonen kobles
       * til reelle data senere.
       */
      popularityScore: z.number().default(0),
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
      imageCredit,
      // Mørkt, behandlet portrett brukt som episodeomslag.
      // Lages av scripts/lag-omslag.py ut fra `image`.
      cover: z.string().optional(),
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
      /**
       * Hvordan teksten er blitt til:
       *   'manuell'    – skrevet eller kontrollert av et menneske
       *   'redigert'   – automatisk transkribert, deretter gjennomgått
       *   'automatisk' – automatisk transkribert, ikke kontrollert
       * Settes den til 'automatisk', vises et forbehold om at teksten kan
       * inneholde feil. Utelates feltet, sier siden ingenting – vi påstår
       * ikke noe vi ikke vet.
       */
      transcriptSource: z.enum(['manuell', 'redigert', 'automatisk']).optional(),
      // Verket manuset omtaler, hvis det handler om en bok.
      book: bookRef.optional(),
      advisory: advisories,
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
      // Hovedtema og undertemaer, samme registre som episodene.
      topic: topicField,
      subtopics: subtopicsField,
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      imageCredit,
      advisory: advisories,
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { episodes, guests, scripts, resources };
