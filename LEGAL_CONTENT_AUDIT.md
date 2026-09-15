# Juridisk risiko- og innholdsrevisjon – sporretimen.no

Gjennomført 15. september 2026.

**Dette er risikoreduksjon, ikke juridisk rådgivning, og ikke en godkjenning.**
Flere av punktene under krever at du selv tar stilling til noe jeg ikke kan
avgjøre – særlig rettigheter til bilder og avtaler jeg ikke kjenner til.
Punktene merket 🔴 bør du gå gjennom før du markedsfører nettstedet bredere.

---

## Sammendrag

| | Antall |
| --- | --- |
| Sider gjennomgått | 207 |
| Innholdsfiler gjennomgått | 103 |
| Innholdsfiler endret | 84 |
| Kodefiler endret | 10 |
| 🔴 Høy risiko | 3 |
| 🟠 Middels risiko | 6 |
| 🟢 Lav / lukket | 9 |

---

## 🔴 HØY RISIKO

### H1 – Fire tredjeparts logoer i delebildet for Sturla-episoden

- **Rute:** `/episoder/sturla-artist-business/`, `/en/episodes/sturla-artist-business/`
- **Fil:** `public/images/episoder/sturla-artist-business.jpg`
- **Problem:** Bildet har logoene til **Idol**, **X Factor**, **The Voice** og
  **Melodi Grand Prix** gjengitt i originalform, på rad øverst i bildet.
- **Hvorfor det kan være problematisk:** Dette er registrerte varemerker, og
  logoene er selvstendige åndsverk. Plasseringen – fire logoer på rad, over
  navnet – leser visuelt som en tilknytnings- eller partnerbanner. Bildet
  brukes som `og:image`, så det vises ved deling på Facebook, LinkedIn og X, og
  i Googles bildesøk. Episoden handler reelt om Sturlas deltakelse i disse
  programmene, noe som er legitim redaksjonell sammenheng, men logoene i
  originalform er ikke nødvendige for å formidle det.
- **Hva jeg endret:** Ingenting. Jeg har ikke slettet bildet eller fjernet
  referansen, fordi det er en design- og merkevarebeslutning, og fordi du kan
  ha en avtale jeg ikke kjenner til.
- **Menneskelig kontroll:** **Ja.** Tre alternativer: (a) bytt ut bildet med
  en variant uten logoer, (b) behold det, men fjern `image:`-feltet fra
  frontmatter så det ikke brukes som delebilde, (c) behold som det er, hvis du
  mener bruken er forsvarlig redaksjonelt. Selve episodesiden viser uansett en
  typografisk plate, ikke dette bildet.

### H2 – Manuset om Atomic Habits fulgte bokens struktur uten motforestillinger

- **Rute:** `/episoder/mikrovaner-laer-noe-nytt/manus/`
- **Fil:** `src/content/scripts/mikrovaner-laer-noe-nytt.md`
- **Problem:** Manuset på ~1 900 ord gikk gjennom James Clears rammeverk i
  bokens egen rekkefølge – de fire reglene, 1 %-regelen, systemer framfor mål,
  identitet, habit stacking, to-minuttersregelen, «aldri bom to ganger» – og
  beskrev seg selv som **«en gjengivelse av hovedideene i James Clears bok»**.
  Det var ingen kritikk, ingen begrensninger og ingen henvisning til
  originalverket utover en lenke til ressursarkivet.
- **Hvorfor det kan være problematisk:** Selve teksten er original: den er på
  norsk, i egne ord, med egne eksempler (500 kroner i måneden, TikTok,
  masteroppgaven, snusen, godteriet øverst i skapet). Ideer er ikke vernet,
  bare uttrykk. Men ordet «gjengivelse» er en selvbeskrivelse som peker feil
  vei, og en gjennomgang uten motforestillinger fungerer som en erstatning
  framfor en omtale.
- **Hva jeg endret:**
  - «en gjengivelse av hovedideene» → fjernet.
  - Ny innledning som sier rett ut at dette er et utvalg av ideene han selv
    bruker, med egne eksempler, og at det **ikke** er boka i kortversjon.
  - «Hele boka koker ned til fire huskeregler» → «Rammeverket alt det andre
    henger på er fire huskeregler».
  - Ny seksjon **«Hva boka ikke gir svar på»**: tynn forskningsdekning, at
    habit stacking er Gollwitzers *implementation intentions*, at
    identitetsdelen er svakest belagt, at boka ikke dekker avhengighet, og at
    den forutsetter slakk i livet.
  - Ny seksjon **«Hvem den passer for»**, med to alternative kilder.
  - `book:`-metadata lagt til, så siden nå viser en ordentlig henvisning til
    originalverket med forfatter, år, originaltittel og lenke til
    jamesclear.com.
  - `advisory: helse` lagt til.
- **Menneskelig kontroll:** **Ja.** Strukturen følger fortsatt bokens
  rekkefølge. Vurder om rekkefølgen bør brytes opp, eller om noen av de mest
  gjenkjennelige listene bør kortes ned.

### H3 – Bilderettigheter er ikke dokumentert for noe bilde

- **Rute:** Hele nettstedet
- **Fil:** `public/images/` (19 filer)
- **Problem:** Det finnes ingen registrering av hvor bildene kommer fra.
  `LES-MEG.md` beskrev bare anbefalte størrelser.
- **Hvorfor det kan være problematisk:** Uten dokumentasjon kan ingen avgjøre
  om et bilde kan brukes, og kreditering som er påkrevd blir ikke gjort.
- **Hva jeg endret:**
  - `public/images/RETTIGHETER.md` – et register med kategorier (`egen`,
    `gjest`, `lisens`, `cc`, `presse`, `ukjent`) og en tabell med alle 19
    filene. **Kolonnen «opphav» er tom og må fylles ut av deg.**
  - `imageCredit`-felt i innholdsmodellen for episoder, gjester og ressurser.
  - `Avatar.astro` viser «Foto: …» automatisk når kreditering er satt.
  - `scripts/sjekk-innhold.mjs` varsler om bilder uten registrering, og gir
    **feil** hvis opphav er satt til `ukjent`.
- **Menneskelig kontroll:** **Ja.** Jeg har bevisst ikke gjettet på opphav.
  24 advarsler står åpne til registeret er fylt ut.

---

## 🟠 MIDDELS RISIKO

### M1 – Statistisk påstand om selvmordsrate uten kilde

- **Rute:** `/episoder/havard-paramedisiner/manus/`
- **Fil:** `src/content/scripts/havard-paramedisiner.md`, avsnittet om debriefing
- **Problem:** «Håvard forteller at … man da så at selvmordsraten blant folk
  som jobbet i nødetatene var høy sammenlignet med resten av befolkningen.»
- **Vurdering:** Attribusjonen er riktig gjort – påstanden tilskrives gjesten,
  ikke Spørretimen. Men det er en statistisk påstand om et sensitivt tema uten
  kilde.
- **Hva jeg endret:** Ingenting i teksten. `advisory: helse` er lagt til, så
  siden viser forbeholdet om at dette er generell informasjon.
- **Menneskelig kontroll:** Ja. Vurder å legge inn en kilde (STAMI eller
  Folkehelseinstituttet har tall på yrkesgrupper), eller å presisere at dette
  er gjestens inntrykk fra sin egen tid i tjenesten.

### M2 – Ni manus er merket «transkribert» uten at det er oppgitt hvordan

- **Rute:** `/episoder/*/manus/`
- **Fil:** `src/content/scripts/*.md`
- **Problem:** Sidene omtaler tekstene som transkripsjoner, men sier ikke om
  de er automatisk generert, redigert eller skrevet for hånd.
- **Hva jeg endret:** Nytt felt `transcriptSource` med tre verdier
  (`manuell`, `redigert`, `automatisk`). Er den satt til `automatisk`, viser
  siden «Transkripsjonen er automatisk generert og kan inneholde feil» øverst.
  **Jeg har ikke satt verdien på noen av filene**, fordi jeg ikke vet hvordan
  de er laget – og et forbehold som ikke stemmer er verre enn ingen.
- **Menneskelig kontroll:** Ja. Sett feltet på de ni filene.

### M3 – Bokomtaler manglet henvisning til originalverket

- **Rute:** 21 bokepisoder × 2 språk
- **Problem:** Sidene omtalte bøker uten å oppgi forfatter, utgivelsesår eller
  hvor boka kan finnes, utover i brødteksten.
- **Hva jeg endret:** `book:`-metadata på alle 42 filene, og en `BookMeta`-blokk
  nederst på siden. Utgiver er ikke satt på noen – jeg gjetter ikke. År er
  utelatt på **Omgitt av dårlige sjefer** og **Omgitt av løgnere**, som jeg
  ikke har kunnet bekrefte.
- **Menneskelig kontroll:** Nei, men fyll gjerne inn utgiver og de to årene.

### M4 – «Alle rettigheter forbeholdt» i bunnteksten

- **Fil:** `src/i18n/ui.ts`
- **Problem:** Formuleringen er for bred på et nettsted som omtaler andres
  verk, gjengir gjesters uttalelser og viser gjestebilder.
- **Hva jeg endret:** → «Eget innhold er opphavsrettslig beskyttet.
  Tredjeparts materiale tilhører sine rettighetshavere.» Tilsvarende på engelsk.

### M5 – Ingen struktur for merking av kommersielt innhold

- **Problem:** Det finnes ingen sponsoravtaler i dag – `/samarbeid` sier det
  eksplisitt – men det fantes heller ingen måte å merke dem på.
- **Hva jeg endret:** `commercial`-felt i innholdsmodellen (`annonse`,
  `sponset`, `samarbeid` + partner + notat) og `CommercialLabel.astro`, som
  vises **øverst på siden, før innholdet**. `sjekk-innhold.mjs` varsler hvis
  ord som «sponset av» eller «i samarbeid med» dukker opp i brødteksten uten
  at en avtale er registrert.

### M6 – Helse-, økonomi- og jussforbehold var håndskrevet prosa

- **Problem:** Forbeholdene sto som kursiv tekst nederst i hver Markdown-fil,
  i 28 varianter. Uensartet, lett å glemme, og umulig å endre ett sted.
- **Hva jeg endret:** `advisory`-felt (`helse`, `okonomi`, `juss`) og
  `Advisory.astro`. 28 prosalinjer er omskrevet eller fjernet der de nå sa det
  samme som komponenten; det spesifikke er beholdt (f.eks. «ikke en erstatning
  for kvalifisert opplæring i friluftsliv, førstehjelp eller elvepadling»).
  Forbeholdene vises nå bare der de er relevante – ikke på alle sider.

---

## 🟢 LAV RISIKO / INGEN ÅPENBAR PROBLEMSTILLING

| # | Område | Funn |
| --- | --- | --- |
| L1 | Markedsføring av bokinnhold | Ingen treff på «komplett sammendrag», «kapittel for kapittel», «hele boka gratis» e.l. – verken i tekst, titler, metabeskrivelser, Open Graph eller structured data. |
| L2 | Personopplysninger | Ingen private telefonnumre, adresser, fødselsdatoer eller personnumre. Eneste e-postadresse på nettstedet er redaksjonsadressen. |
| L3 | Attribusjon av gjesteutsagn | Gjennomgående korrekt allerede. Sturla-manuset bruker «Slik han selv forklarer det» der det gjelder Sonys vurderinger; legemanuset bruker «Håvard forteller at». Ingen gjesteutsagn er skrevet om til objektive fakta. |
| L4 | Kriminalitet, rus, utroskap o.l. | Ingen påstander om navngitte personer i disse kategoriene. |
| L5 | Falske partnerskap | Ingen bruk av «i samarbeid med», «partner» eller «sponset av» uten dekning. `/samarbeid` slår eksplisitt fast at det ikke finnes betalte avtaler. |
| L6 | Plattformlogoer | YouTube, Spotify og Apple Podcasts brukes som lenker til eget innhold. Standard praksis; hver plattform har egne merkevareretningslinjer, men ingen bruk her antyder tilknytning. |
| L7 | Løfter om avkastning | Ingen treff på «garantert avkastning», «du bør kjøpe» eller lignende. Investeringsbøkene er gjennomgående merket som gjennomganger, ikke anbefalinger. |
| L8 | Analyseverktøy og sporing | Ingen analyseverktøy i drift. `src/lib/analytics.ts` er et rør uten mottaker, og personvernerklæringen sier korrekt at nettstedet ikke bruker analyseverktøy. |
| L9 | Diktede kilder | Alle kildehenvisninger peker på reelle verk. Der jeg var usikker på et årstall (to av Eriksons bøker), er året utelatt framfor gjettet. |

---

## Nye komponenter

| Komponent | Vises når |
| --- | --- |
| `Advisory.astro` | `advisory` eller `book` er satt. Fem varianter: bok, helse, økonomi, juss, transkripsjon. |
| `BookMeta.astro` | `book` er satt. Henvisning til originalverket. |
| `CommercialLabel.astro` | `commercial` er satt. Øverst på siden. |
| `CorrectionNotice.astro` | Episoder, manus, ressurser og gjestesider. |
| `PrinciplesPage.astro` | `/redaksjonelle-prinsipper` og `/en/editorial-principles`. |

Ingen av dem vises på alle sider. De aktiveres av innholdstypen.

## Nye sider

- `/redaksjonelle-prinsipper` og `/en/editorial-principles`

Siden forklarer hvordan fakta, gjesters uttalelser, analyse og mening holdes
fra hverandre, hvordan kilder brukes, hvordan bøker og andres verk omtales,
hvordan bilder håndteres, hvordan kommersielt innhold vil bli merket, hvordan
transkripsjoner behandles, og hvordan man melder feil. Den **lover ikke** at
alt innhold er korrekt. Den ligger i bunnteksten sammen med Vær Varsom-siden.

## Forberedt for framtiden

- `scripts/sjekk-innhold.mjs` kjører automatisk før hvert bygg (`prebuild`).
  Den stopper bygget ved formuleringer som lover at innholdet erstatter et
  verk, ved løfter om avkastning, ved bokomtaler uten `book:`, og ved bilder
  merket `ukjent`. Den varsler om manglende bildekreditering og om
  kommersielle formuleringer uten registrert avtale. Negasjoner gir ikke
  utslag: «Det er ikke boka i kortversjon» er nettopp det vi vil at det skal
  stå.

## Det du bør se på selv

1. **Logoene i Sturla-bildet** (H1) – din beslutning.
2. **Fyll ut `public/images/RETTIGHETER.md`** (H3) – 19 filer, ingen kan
   avklares av meg.
3. **Sett `transcriptSource` på de ni manusene** (M2).
4. **Kilde på selvmordsrate-påstanden** (M1).
5. **Strukturen i Atomic Habits-manuset** (H2) – vurder om den fortsatt
   følger boka for tett.
6. **Utgivelsesår** for *Omgitt av dårlige sjefer* og *Omgitt av løgnere*.
7. **Utgiver** på bokmetadataene, hvis du vil ha det med.

## Det jeg ikke har gjort

- Ikke slettet innhold. Det eneste som er fjernet er 28 generiske
  forbeholdslinjer som nå sies av en komponent i stedet.
- Ikke gjettet på rettighetshavere, samtykker, lisenser eller bildeopphav.
- Ikke lagt forbehold på sider der temaet ikke er berørt.
- Ikke endret betydningen i noe gjestesitat.
