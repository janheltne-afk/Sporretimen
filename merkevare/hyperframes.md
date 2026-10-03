# Forklaringsvideoer med HyperFrames: det vi har lært

Denne filen oppsummerer arbeidet med bullwhip-videoen for Spørretimen, fra første flate utkast til 3D-versjonen. Legg den i prosjektmappen eller lim den inn i starten av en ny chat, så slipper vi å finne ut av det samme en gang til.


> **Om forholdet til merkevaren:** paletten og typografien som står i denne
> fila er slik bullwhip-prosjektet faktisk ble bygget. Den stemmer ikke med
> `merkevare/tokens.json`, som er hentet fra forsidebildene som allerede er
> publisert. Se avsnittet nederst før du bruker verdiene herfra på en ny video.

## 1. Kortversjonen

- Spill inn voiceover først. Uten lydfil blir all timing gjetning.
- Åpne med konsekvensen, ikke med tittelen. Navnet på fenomenet kommer som belønning etter 8–10 sekunder.
- Stilen er et skall, ikke tempoet: mørkt, gull og serif, men med harde klipp og én idé per bilde.
- Flat grafikk ser billig ut. Lys, skygge, korn og stor serif-typografi løfter mest for minst arbeid.
- Ekte 3D er mulig med three.js i samme prosjekt, men bare med enkle former. Mennesker, trucker og lastebiler krever ferdige 3D-modeller eller AI-video.
- Lag alltid ett testbilde av en ny stil før hele videoen bygges om.

## 2. Teknisk oppsett

| Del | Valg |
| --- | --- |
| Rammeverk | HyperFrames CLI 0.8.112 (HeyGen, åpen kildekode) |
| Animasjon | GSAP 3.14.2, lokal fil i `assets/gsap.min.js` |
| 3D | three.js 0.147.0, lokal `assets/three.min.js` (siste versjon med vanlig script-fil) |
| Fonter | Newsreader (vanlig og kursiv) og Inter som lokale woff2 i `assets/fonts/` |
| Format | 1080x1920, 30 fps, MP4 |
| Krav | Node.js 22 eller nyere, FFmpeg |

Kommandoer:

- `npx hyperframes init <navn> --example blank --non-interactive --resolution portrait` lager et tomt prosjekt
- `npm run dev` gir forhåndsvisning i nettleser
- `npm run check` kjører lint og kontroll
- `npm run render` lager MP4
- `npm run render:4k` er satt opp for 2160x3840, men aldri kjørt

Alt skal ligge lokalt. Ingen CDN, ingen eksterne fonter eller bilder, ingen nettverkskall.

## 3. Regler for komposisjonen

- Rotelementet har `data-composition-id`, `data-width`, `data-height` og `data-duration`.
- Hver scene er et element med `class="clip"`, `data-start` og `data-duration`.
- Én GSAP-tidslinje laget med `{ paused: true }`, registrert på `window.__timelines["<id>"]`. ID-en må være den samme som `data-composition-id`.
- Alt må være deterministisk: ingen `Math.random()` eller `Date.now()`. Bruk en enkel tallgenerator med fast frø når noe skal se tilfeldig ut.
- Tall som teller: en tween på et vanlig objekt med `onUpdate` som skriver teksten.

Feil vi gikk på, og løsningen:

| Problem | Løsning |
| --- | --- |
| Elementer synlige i første bilde | Sett starttilstand med `gsap.set(...)`, ikke `tl.set(..., 0)` |
| Tekst lekker ut under en maske før den skal vises | Bruk `yPercent: 130` når masken har luft i bunnen, eller skjul hele beholderen til den trengs |
| To tweens på samme verdi overstyrer hverandre | Legg `immediateRender: false` på den siste |
| Tekst overlapper tall eller etiketter | Regn ut bredden før plassering: serif små bokstaver er rundt 0,46 x skriftstørrelse per tegn |
| Symboler som mangler i fonten (for eksempel piler) | Tegn dem som SVG |
| Advarsler om at filen er for stor | Én `index.html` gir advarsler, ikke feil. Del i `compositions/` hvis prosjektet skal vedlikeholdes |

## 4. Lyd

- Hver lyd er ett `<audio>`-element med `src`, `data-start`, `data-duration` og `data-volume`, som barn av rotelementet.
- Lag bare `<audio>` for filer som finnes. En manglende fil kan stoppe sjekken eller rendringen.
- Lydeffekter kan syntetiseres med kode. `tools/make_sfx.py` lager alle filene med numpy og scipy, og gir samme resultat hver gang.
- Syntetiserte lyder er et utkast for å kjenne på rytmen. De erstattes ved å legge en bedre fil inn med samme navn.
- Legg lyd på hendelser som betyr noe: tall som endres, noe som lander, klipp mellom steder. La det være stille mellom.
- Voiceover kan ikke lages her. Den må spilles inn eller hentes fra en talesyntese-tjeneste.

## 5. Tempo og fortelling

- Ingen tittelkort og ingen logo først. Start midt i en konkret situasjon.
- De første 8–10 sekundene: noe nytt skjer hvert 0,5–1,5 sekund.
- Etter åpningen: ingen komposisjon står stille i mer enn 2–3 sekunder.
- Én idé per bilde, og lite tekst om gangen.
- Hver setning skal utløse noe som skjer i bildet, ikke bare ny tekst.
- Veksle mellom raske sekvenser og korte pauser. Pausen gjør neste bevegelse sterkere.
- Avslutt der du begynte, og vis det større systemet bak.
- Avsenderen vises kort helt til slutt.

Strukturen som fungerte for bullwhip-videoen (58,5 sekunder):

1. Åpning med hylla som tømmes og ordren som vokser (0–9,6 s)
2. Mekanismen, ledd for ledd (til 26,5 s)
3. Fem årsaker på under tre sekunder hver (til 40,5 s)
4. Konsekvensene (til 49,2 s)
5. Tilbake til hylla, ut til hele kjeden, navnet og avsender

## 6. Visuell stil

Palett:

| Rolle | Farge |
| --- | --- |
| Bakgrunn | `#090807` til `#24211c`, lysest i midten |
| Tekst | `#efe8d9` |
| Dempet tekst | `#8f8777` |
| Gull | `#d2b274`, med gradient fra `#ecd29a` til `#957842` på flater |

Typografi:

- Overskrifter i Newsreader, vekt 500, sperring -0,028em, 104–250 px.
- Linjen som bærer poenget står i gull kursiv.
- Store tall i Newsreader med tabellsifre, 200–330 px.
- Små etiketter i Inter 600, versaler, sperring 0,22em, 24–30 px.
- Venstrestilt, ikke midtstilt. Vanlige bokstaver i overskrifter, ikke versaler.

Det som ga mest «dyrt» uttrykk:

- Vignett og filmkorn over hele bildet (`assets/grain.png`, blandet som overlay)
- Gradienter og indre lys på alle flater, ingen helt flate fyll
- Skygger under objekter og glød på gull-linjer
- Få, store elementer med mye luft

Trygge soner i stående format: hold tekst unna de øverste 200 px, de nederste 380 px og høyre kant under midten.

Filmkorn gjør videoen tyngre å komprimere. Render med `--crf 23`, ellers blir filen rundt 40 MB i stedet for 16 MB.

## 7. 3D med three.js

Slik henger det sammen:

- Ett `<canvas>` i en egen clip som varer hele videoen, bak alle de andre scenene.
- Én funksjon `World.render(t)` setter kamera, lys og objekter ut fra tiden. En tween på et klokkeobjekt kaller den i `onUpdate`.
- Grafikk og tekst ligger som vanlig HTML oppå. Der grafikken trenger ro, legges en mørk flate med `backdrop-filter: blur()` mellom.
- Rendereren må ha `preserveDrawingBuffer: true`, ellers blir bildene svarte.
- `renderer.setPixelRatio(window.devicePixelRatio)` er lagt inn for 4K, men ikke testet.

Det vi lærte om bildet:

| Tema | Lærdom |
| --- | --- |
| Lys | Start lavt. Hovedlys 34–70, eksponering rundt 1,0. Første forsøk med 120 ble helt utbrent |
| Kamera | Stående format er smalt: 36 graders synsfelt gir bare 2,6 m bredde på 7 m avstand. Trekk kameraet 8–13 m unna store ting |
| Tåke | Tett tåke (0,075) i nærbilder, tynn (0,014) i bilder som skal vise hele kjeden |
| Skygger | Slå bare på lyskasterne som er nær kameraet, ellers går rendringen tregt |
| Bølge mot kamera | Skal noe vokse langs en akse, må det vokse mot kameraet. Sett fra feil ende opphever perspektivet veksten |
| Materialer | Metall, plastfolie med klarlakk og et miljøkart gir mye. Tekstur på emballasjen tegnes på et canvas |

Begrensninger:

- Alt er bygget av bokser, avrundede bokser og rør. Det gir stilisert 3D, ikke fotorealisme.
- Rendring uten skjermkort tar 5–7 sekunder per bilde. 58 sekunder tar rundt to timer. Med skjermkort bør det gå langt raskere.

## 8. Arbeidsflyten som fungerte

1. Skriv komposisjonen og kjør lint.
2. Ta stillbilder på utvalgte tidspunkter og sett dem sammen til ett oversiktsbilde. Det avslører overlapp og feil plassering raskt.
3. Rett, og render først når stillbildene er riktige.
4. Mål lyden etter rendring: at den finnes, og at det er stille mellom effektene.

Praktiske detaljer fra dette miljøet:

- Rendreren finner ikke Chrome selv. Sett `HYPERFRAMES_BROWSER_PATH` til en installert Chromium.
- Sett `HYPERFRAMES_SKIP_SKILLS=1` for å unngå nettverkskall ved oppstart.
- En kommando kan ikke vare mer enn 300 sekunder. Start rendring i bakgrunnen og sjekk senere.
- Stillbilder tas raskest med Playwright direkte: last `index.html`, kjør `tidslinje.seek(t, false)` og ta skjermbilde. Uten `false` kjøres ikke `onUpdate`, og 3D-bildet står stille.
- Test en ny stil med tre sekunder eller noen stillbilder før alt bygges om.

Det som ikke kan kontrolleres her: bevegelse i sanntid og hvordan lyden høres ut. Det må du bedømme selv.

## 9. Versjonene vi laget

| Versjon | Hva | Lengde |
| --- | --- | --- |
| Eksempel | «Rentes rente», første test av verktøyet | 23 s |
| v1 | Bullwhip som rolig, redaksjonell gjennomgang i tolv scener | 94,5 s |
| v2 | Bygget om for tempo: harde klipp, toalettpapir-åpning, 75 lydeffekter | 58,5 s |
| v3 | Samme klipp, ny stil med lys, dybde, korn og serif-typografi | 58,5 s |
| 3D | Samme struktur, med butikk, grossist og fabrikk som ekte 3D-verden | 58,5 s, bare åpningen er rendret |

## 10. Åpne punkter

- Voiceover er ikke spilt inn. Scenetidene må flyttes etter opptaket.
- Covid-nyansen står ikke på skjermen: at tomme hyller også skyldtes hamstring, skift i etterspørsel og kapasitet. Den må inn i voiceover eller bildetekst.
- Tallene i videoen (110, 125, 160, 220 og kronebeløpet) er illustrasjoner, ikke tall fra 2020.
- Avsenderen står som «Spørretimen Explained» på en norsk video.
- 4K-rendring og hele 3D-videoen er ikke kjørt.
- 3D-sluttbildet, der kameraet trekker ut til hele kjeden, er ikke kontrollert.

## 11. Mal for neste prompt

```
Start med /hyperframes. Les hyperframes-laerdom.md først og følg den.

TEMA: <hva videoen skal forklare>
BUDSKAP: <den ene setningen seeren skal sitte igjen med>
ÅPNING: <en konkret situasjon som viser konsekvensen>
LENGDE: <sekunder>
VOICEOVER: <filnavn i assets/, eller «finnes ikke ennå»>
TALL OG FAKTA: <oppgi dem selv, og si hvilke som er illustrasjoner>
FORBEHOLD: <det som må sies for at eksempelet skal være riktig>
STIL: <flat redaksjonell (v3) eller 3D>
AVSENDER: <Spørretimen Forklart eller Explained>

Lag først ett testbilde av åpningen og vent på godkjenning før resten bygges.
```


---

## Tillegg: avvik mot merkevaretokenene

*Lagt til ved innlegging i repoet, 3. oktober 2026. Dette er ikke en del av
originalnotatet.*

Fargene i `bullwhip-3d/index.html` er sammenlignet med `merkevare/tokens.json`.
**Ingen av de seks rollene stemmer:**

| Rolle | Videoprosjektet | tokens.json | 
| --- | --- | --- |
| Bakgrunn | `#090807` | `#100e0b` |
| Tekst | `#efe8d9` | `#ece6d6` |
| Gull | `#d2b274` | `#e2cb96` |
| Dempet | `#8f8777` | `#baa376` |
| Gull-gradient | `#ecd29a` → `#957842` | finnes ikke |

Tokenene er hentet fra `scripts/lag-forsidebilde.py`, altså fra miniatyrbildene
som alt ligger publisert på 49 episoder. En seer ser først gullet i
miniatyrbildet, og deretter et annet gull når videoen starter.

**Anbefaling:** flytt videoen til tokenverdiene, ikke omvendt. Gradientparet er
derimot et reelt behov videoen har og forsidene ikke, og bør legges inn i
tokens.json i stedet for å leve bare her.

Typografien stemmer bedre: knipningen på `-0,028em` er den samme som på
nettstedet. Sperringen på `0,22em` er en tredje verdi ved siden av eyebrow
(`0,17em`) og merkelapp (`0,13em`), og bør samles.

**Og én feil som bør rettes før videoen publiseres:** avsenderkortet signerer
med «Explained» på en norsk video (`index.html`, linje 840). Forklart og
Explained er to forskjellige kanaler med hvert sitt publikum.
