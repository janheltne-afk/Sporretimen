---
name: sporretimen-merkevare
description: Spørretimens visuelle og redaksjonelle uttrykk – farger, typografi, forsideoppsett, bevegelsesregler, serier og formater. Bruk denne når du lager noe som skal se ut som Spørretimen, uansett medium: Remotion-video, miniatyrbilder, forsidebilder, slides, grafikk, sosiale medier eller nye sider på nettstedet. Trigger også på "brand", "branding", "merkevare", "profil", "designsystem", "tokens", "thumbnail", "tittelkort", "intro", "outro", "nedre tredjedel".
---

# Spørretimens uttrykk

## Gjør dette først

Les `merkevare/tokens.json` fra prosjektroten. **Importer verdiene derfra –
skriv dem aldri av.** Filene er sannheten; alt annet, inkludert denne skillen,
er forklaring.

```js
import tokens from './merkevare/tokens.json';
```

Deretter, etter hva du skal lage:

| Oppgave | Les også |
|---|---|
| Video, animasjon, Remotion | `merkevare/remotion.md` |
| Stillbilder, forsider, slides | `merkevare/merkevare.md` |
| Figurer og diagrammer | `src/styles/figurer.css` |
| Noe på selve nettstedet | `src/styles/global.css` |

## De sju reglene som er lette å bryte

1. **Video er mørk.** Nettsiden har lys grunntilstand, video har ikke. Bruk
   `farger.forside` – ikke den lyse paletten.
2. **Serif til det som leses, sans til det som skimtes.** Newsreader bærer
   uttrykket; Inter er metadata og merkelapper.
3. **Overskrifter settes lett** – 400, ikke 700. Unntaket er titler på
   forsidebilder, som settes i 700 for å lese som miniatyrbilde.
4. **Versaler har alltid sperring.** 0.13–0.2em avhengig av rolle.
5. **Linjer, ikke skygger.** 1 px. Radius 2–4 px. Aldri piller, aldri fylte
   fargede flater bak merkelapper.
6. **Ingenting spretter.** 0.2 s tilstandsskift, 0.7 s innfelling, ease. Ingen
   spring med oversving, ingen Ken Burns, ingen swipe mellom scener.
7. **Ø-en.** Navnet er «Spørretimen». Sjekk at fonten renderer ø før du sjekker
   noe annet. Bruk `-latin-`-woff2-filene, ikke `-latin-ext-`.

## Struktur du må ha riktig

**To serier, ikke én.** `samtale` → Spørretimen. Alt annet → Spørretimen
Forklart / Explained. De har egne kanaler og egne show.

**Tre kanaler.** Norsk samtale, norsk forklart og engelsk forklart er tre
forskjellige YouTube-kanaler. Hent dem fra `tokens.serier`, og bruk `kanaler-en`
for engelsk innhold – ellers sender du engelske seere til norsk innhold.

**Fire formater.** `samtale`, `laer-noe-nytt`, `kort-forklart`,
`boker-forklart`. Formatmerkene har fast tekst; samtaler har ingen merkeboks.

**Åtte figurtyper.** compare, flow, cycle, scale, rings, matrix, chart, rule.
Finn ikke opp nye. Passer ikke poenget i én av de åtte, er det som regel
poenget som ikke er skarpt nok.

## Forsideoppsettet

To varianter, begge målt som andeler av lerretet, så de skalerer fritt:

- **Med gjest** – gjest til venstre, vert til høyre, sentrert tekst imellom
- **Uten gjest** – alt venstrestilt, ingen personer

Alle koordinater og punktstørrelser ligger i `tokens.forsideoppsett`.
Punktstørrelsene er oppgitt ved 720 px høyde; skaler lineært.

Verten hentes alltid fra `public/images/jan-sindre-heltne.jpg`, slik at han ser
lik ut overalt. Referanseimplementasjonen er `scripts/lag-forsidebilde.py` –
les den før du bygger et nytt tittelkort.

## Stemmen

Forklar, ikke imponer. Kildebasert. Konkret framfor abstrakt. Åpen om
usikkerhet. Ingen klikkagn – tittelen sier hva episoden handler om.

**Dikt aldri opp kilder, sitater, biografiske opplysninger eller hva en gjest
har sagt.** Mangler kilden, marker teksten for gjennomgang i stedet for å finne
på en referanse. Dette gjelder også tekst i grafikk og video.

## Når noe mangler

Er en verdi ikke i `tokens.json`, finn den i kilden den kommer fra
(`global.css`, `figurer.css`, `lag-forsidebilde.py`, `taxonomy.ts`) og **legg
den inn i tokens.json samtidig**. Ellers begynner video og nettside å sprike.
