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
som helst statisk vert. Anbefalte alternativer for `sporretimen.no`:

- **Netlify**, **Vercel** eller **Cloudflare Pages** – koble til Git-repoet, sett
  byggekommando `npm run build` og publiseringsmappe `dist/`. Legg til domenet
  `sporretimen.no` under domeneinnstillinger.
- Eller last opp innholdet i `dist/` manuelt til en hvilken som helst webhotell/CDN.

Husk å oppdatere domenet i `astro.config.mjs`, `src/data/site.ts` og
`public/robots.txt` hvis det endres.

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
