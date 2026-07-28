# Spørretimen

Nettside for podcasten **Spørretimen** – _gode spørsmål, interessante mennesker, nye perspektiver._

Bygget med [Astro](https://astro.build): en rask, innholdsdrevet nettside som lages
som statiske HTML-filer. Det gir god SEO, høy hastighet, universell utforming og en
struktur som er enkel å vedlikeholde og bygge videre på.

---

## Kom i gang

```bash
npm install       # installer avhengigheter
npm run dev       # start utviklingsserver på http://localhost:4321
npm run build     # bygg produksjonsversjon til dist/
npm run preview   # forhåndsvis produksjonsbygget lokalt
```

Krever Node.js 18.20+, 20.3+ eller 22+.

---

## Slik legger du til innhold

Alt innhold ligger som enkle Markdown-filer i `src/content/`. Du trenger ikke å
røre kode for å publisere nye episoder eller gjester.

### Ny episode

Lag en ny fil i `src/content/episodes/`, f.eks. `min-nye-episode.md`. Filnavnet blir
adressen (`/episoder/min-nye-episode`).

```markdown
---
title: "Tittel på episoden"
format: samtale            # samtale | masterclass | kort-forklart
status: kommende           # kommende | publisert
guest: john-erik           # filnavn på en gjest (valgfritt)
categories:
  - Karriere
  - Helse
yrke: Lege                 # valgfritt – yrket episoden handler om (karriere-episoder).
                           # Vises som «Karriere · <yrke>» på episodekortet, og
                           # samles under Karriere-filteret. Knyttes til episoden,
                           # ikke gjesten (én gjest kan dekke flere yrker).
publishDate: 2026-09-01    # valgfritt – utelat for kommende episoder
duration: "Cirka 55 min"
description: >-
  Kort ingress som vises på episodekort og i delinger.
image: /images/episoder/min-episode.jpg   # valgfritt – ellers vises en plassholder
links:                     # valgfritt – vises som knapper når de er satt
  youtube: https://youtube.com/...
  spotify: https://open.spotify.com/...
  apple: https://podcasts.apple.com/...
sources:                   # valgfritt – kilder og referanser
  - title: "Kilde 1"
    url: https://...
related:                   # valgfritt – slugs til relaterte episoder
  - sovn-masterclass
featured: false            # true = kan løftes frem på forsiden
---

Her skriver du episodeteksten / show notes i vanlig Markdown.
```

> **Publiseringsflyt:** Sett `status: kommende` mens episoden planlegges. Når den er
> ute, endre til `status: publisert`, legg til `publishDate` og fyll inn `links`.
> Bare publiserte episoder tas med i RSS-feeden (`/rss.xml`).

### Ny gjest

Lag en ny fil i `src/content/guests/`, f.eks. `ola-nordmann.md`:

```markdown
---
name: Ola Nordmann
role: Yrke eller rolle
intro: Én til to setninger som vises på gjestekort.
themes:
  - Tema 1
  - Tema 2
region: Ålesund            # valgfritt
status: planlagt           # planlagt | bekreftet
image: /images/gjester/ola.jpg   # valgfritt – ellers vises initialer
featured: false
order: 100                 # lavere tall vises først
---

Lengre tekst om gjesten i Markdown.
```

Episoder kobles automatisk til gjesten via `guest:`-feltet, og vises på gjestens
side.

### Ny ressurs (ressursarkiv)

Ressursarkivet (`/ressurser`) samler husketeknikker, bokanbefalinger, tips og
verktøy nevnt i episodene. Lag en fil i `src/content/resources/`:

```markdown
---
title: Boktittel eller ressursnavn
type: bok            # bok | husketeknikk | tips | verktoy | artikkel | podkast
author: Forfatter    # mest aktuelt for bøker (valgfritt)
language: Engelsk    # valgfritt – vis at ressursen er på et annet språk
summary: Kort oppsummering vist på kort og øverst på ressurssiden.
url: https://...     # ekstern lenke (kjøp/les/verktøy) – valgfritt
episodes:            # episoder ressursen er nevnt i (kobles begge veier)
  - john-erik-legeyrket
categories:          # tema-tagger
  - Utdanning
featured: false
---

Brødteksten er stedet for lengre notater – f.eks. notater/hovedpoeng fra en bok
eller hvordan en teknikk fungerer.
```

Ressursen dukker automatisk opp i arkivet, filtrerbart på type, og under
«Ressurser nevnt i episoden» på hver koblet episode.

### Nytt kurs (kursmodulen)

Kursene (`/kurs`) er egne tilbud, adskilt fra Masterclass-episodene (som kun er
et episodearkiv). Besøkende melder interesse per kurs, og interessen brukes til å
prioritere hvilke kurs som får fortgang.

Kopier malen `src/content/courses/eksempel-kurs.md` til en ny fil (filnavnet blir
adressen), fyll inn feltene og sett `draft: false`:

- `status: vurderes` – idé; interesse avgjør prioritering
- `status: planlagt` – besluttet og under utvikling
- `status: apen` – påmelding/gjennomføring i gang

Interessemeldingene sendes via skjemaoppsettet (`forms` i `src/data/site.ts`) med
kursnavnet i emnefeltet, så du kan telle interessen per kurs i innboksen eller
skjematjenesten.

### Manus og spørsmål til en episode

Hver episode kan ha et **manus** (spørsmål/disposisjon) som vises på en egen,
ryddig side: `/episoder/<slug>/manus`. Manuset lenkes automatisk fra episodesiden
(et eget panel), fra gjestens infokort på episodesiden, og fra gjestens egen side.

Lag en fil i `src/content/scripts/` med **samme filnavn som episoden**, f.eks.
`john-erik-legeyrket.md`:

```markdown
---
episode: john-erik-legeyrket   # peker på episoden (filnavn uten .md)
kind: sporsmal                 # sporsmal | transkribert
worktitle: "Valgfri arbeidstittel vist øverst på manus-siden"
updated: 2026-08-01            # valgfritt
---

## Introduksjon
Programlederens introtekst …

## Del 1: Oppvekst og bakgrunn
1. Første spørsmål?
2. Neste spørsmål?
```

- `##`-overskrifter blir automatisk til en innholdsfortegnelse på siden.
- Nummererte lister blir spørsmålene.

**Slik legger du inn svar / transkripsjon senere:** skriv svaret rett under
spørsmålet som et sitat (en linje som begynner med `>`), så vises det tydelig
atskilt fra spørsmålet:

```markdown
1. Hvordan var det å vokse opp i Alta?
   > Svar: John Erik forteller at …
```

Når svarene er lagt inn, endre `kind: sporsmal` til `kind: transkribert` – da
oppdateres merkelappene og teksten på siden automatisk.

> Manus-sidene er satt til `noindex` (holdes utenfor søkemotorer) fordi de er
> arbeidsdokumenter. Vil du at de skal kunne dukke opp i søk, fjern `noindex` i
> `src/pages/episoder/[slug]/manus.astro`.

### Bilder

Legg bildefiler i `public/images/` og referer til dem med absolutt sti, f.eks.
`/images/gjester/ola.jpg`. Utelater du `image`, viser nettsiden en pen, fargelagt
plassholder automatisk – siden fungerer altså fint før de faktiske bildene finnes.

---

## Konfigurasjon

Alt som endres ofte ligger i **`src/data/site.ts`**:

- **`site`** – navn, tagline, beskrivelse, e-post, domene
- **`nav`** – hovedmenyen
- **`socials`** – lenker til YouTube, Spotify, sosiale medier (sett `url: null` for å
  skjule en lenke til den er klar)
- **`formats`** – de tre formatene (Samtaler, Masterclass, Kort forklart)
- **`categories`** – emnekategorier for filtrering
- **`forms`** – hvor kontakt-/forslagsskjemaene sender data (se under)

Domenet settes også i `astro.config.mjs` (`site`) og i `public/robots.txt`.

---

## Skjemaer (kontakt, foreslå gjest, bli gjest)

Skjemaene fungerer **uten backend** ut av boksen: da åpnes brukerens e-postklient
med en ferdig utfylt melding til adressen i `forms.recipient`.

For å ta imot innsendinger automatisk, sett `forms.endpoint` i `src/data/site.ts` til
en skjematjeneste. Alle disse tar imot en `POST` med JSON:

- **[Formspree](https://formspree.io)** – `endpoint: 'https://formspree.io/f/DITT_ID'`
- **[Getform](https://getform.io)**, **[Basin](https://usebasin.com)** eller
  **Netlify Forms**
- En egen serverløs funksjon (f.eks. en Supabase Edge Function) som skriver til en
  database – nyttig når nyhetsbrev/medlemskap skal bygges senere.

Skjemaene har innebygd validering og en enkel spam-felle (honeypot).

---

## Teknisk løsning

| Område | Valg |
| --- | --- |
| Rammeverk | Astro 5 (statisk output, minimal JavaScript) |
| Innhold | Markdown via Astros content collections (`src/content.config.ts`) |
| Styling | Ren CSS med designtokens (`src/styles/global.css`), lys/mørk modus |
| SEO | Per-side metadata, Open Graph, JSON-LD (`PodcastSeries`, `PodcastEpisode`, `Person`), `sitemap-index.xml`, `robots.txt`, RSS |
| Ytelse | Statiske sider, inlinet kritisk CSS, late-lastede bilder, nesten ingen JS |
| Tilgjengelighet | Semantisk HTML, hopp-til-innhold, synlig fokus, `prefers-reduced-motion`, tastaturvennlig meny |
| Fonter | Systemfonter (ingen eksterne kall → raskere og mer robust) |

### Struktur

```
src/
├── content/            # Episoder og gjester (Markdown) – rediger her
│   ├── episodes/
│   └── guests/
├── content.config.ts   # Innholdsmodell (feltdefinisjoner + validering)
├── data/site.ts        # Sentral konfigurasjon
├── layouts/            # Sidemal (BaseLayout)
├── components/         # Gjenbrukbare komponenter (kort, header, skjema ...)
├── pages/              # Sidene og rutene
│   ├── index.astro         # Forside
│   ├── episoder/           # Oversikt + [slug] detaljside
│   ├── gjester/            # Oversikt + [slug] detaljside
│   ├── om.astro
│   ├── foresla-gjest.astro
│   ├── bli-gjest.astro
│   ├── samarbeid.astro
│   ├── kontakt.astro
│   ├── 404.astro
│   └── rss.xml.ts
├── lib/                # Hjelpefunksjoner
└── styles/global.css   # Designsystem
```

---

## Publisering

`npm run build` lager en helt statisk nettside i `dist/`. Den kan legges på hvilken
som helst statisk vert. Anbefalte alternativer for `www.sporretimen.no`:

- **Vercel**, **Netlify** eller **Cloudflare Pages** – koble til Git-repoet, sett
  byggekommando `npm run build` og publiseringsmappe `dist/`. Legg til både
  `sporretimen.no` og `www.sporretimen.no` under domeneinnstillinger, og la
  `sporretimen.no` videresende permanent til hoveddomenet `www.sporretimen.no`.
- Eller last opp innholdet i `dist/` manuelt til en hvilken som helst webhotell/CDN.

Hoveddomenet (med `www`) er satt ett sted: `SITE` i `astro.config.mjs` og `url` i
`src/data/site.ts` (pluss `Sitemap:`-linjen i `public/robots.txt`). Derfra utledes
alle canonical-URL-er, sitemap, Open Graph og JSON-LD automatisk.

---

## Videre utvikling

Strukturen er lagd for å vokse uten å bygges på nytt:

- **Nyhetsbrev / medlemskap** – skjemakomponenten og `forms.endpoint` kan kobles mot
  en e-post- eller betalingstjeneste.
- **Betalt Masterclass-arkiv** – legg til et `access: 'medlem'`-felt i
  `content.config.ts` og skjul/lås innhold basert på det.
- **Artikler og guider** – legg til en ny content collection etter samme mønster som
  `episodes`/`guests`.
- **Sponsorlogoer, kommende opptak, arrangementer** – nye seksjoner/sider bygges av
  eksisterende komponenter.

---

## Redaksjonelle prinsipper

Nettsiden er lagd i tråd med føringene for podcasten: nysgjerrig framfor belærende,
gjestene i sentrum, forståelig fagstoff, ansvarlig behandling av helseopplysninger,
ingen identifiserbare pasienthistorier, og et tydelig skille mellom personlige
erfaringer, faglige forklaringer og dokumenterte fakta.

Eksempelinnholdet (episoder og gjester) er basert på **planlagte** gjester og temaer
og er merket som _kommende_/_planlagt_. Det inneholder ingen oppdiktede publiserte
episoder, lyttertall, sponsoravtaler eller bekreftede avtaler. Sosiale medier-lenker
er plassholdere til de faktiske adressene er klare.
