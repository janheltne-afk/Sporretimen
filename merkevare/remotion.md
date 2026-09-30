# Spørretimen i video

Hvordan merkevaren brukes når den settes i bevegelse. Tallene her er
oversettelser av det som allerede ligger i `tokens.json` – de er ikke nye valg.

---

## Utgangspunktet: video er mørk

Nettsiden har lys grunntilstand. Video har det ikke. Forsidebildene er allerede
satt i den mørke paletten, og en videomal som starter lys, vil ikke se ut som
Spørretimen.

Bruk `farger.forside` som grunnpalett:

```js
import tokens from '../merkevare/tokens.json';

const { grunn, gull, krem, "dempet-gull": dempetGull, strek, lys } =
  tokens.farger.forside;
```

Trenger du flere nivåer enn de seks – en litt lysere flate, en svakere strek –
hent dem fra `farger.mork`. De to palettene er bygget rundt samme varme
nær-svarte tone og går sammen.

---

## Lerret

| Bruk | Oppløsning | Sideforhold |
|---|---|---|
| YouTube, hovedformat | 1920×1080 | 16:9 |
| Shorts, TikTok, Reels | 1080×1920 | 9:16 |
| Miniatyrbilde | 1280×720 | 16:9 |

30 fps. Forsideoppsettet er målt i andeler, ikke piksler, så det samme
oppsettet gjelder på alle tre – gang andelen med lerretets bredde og høyde.

**Trygg sone:** hold tekst innenfor 90 % av bredden i 16:9. I 9:16 må du regne
med at de nederste ~18 % dekkes av grensesnitt i TikTok og Reels – legg
ingenting som skal leses der.

---

## Grunnflaten

Flaten er ikke ensfarget. To myke lyskilder gjør den levende:

```js
// Andeler av lerretet. Fra scripts/lag-forsidebilde.py.
const lyskilder = [
  { x: 0.10, y: 0.28, r: 0.42, styrke: 54 },
  { x: 0.78, y: 0.04, r: 0.46, styrke: 30 },
];
```

I CSS blir det to radiale gradienter i `lys`-fargen lagt over `grunn` med lav
opasitet. De skal **ikke** animeres. En pustende bakgrunn er ikke dette
uttrykket.

---

## Tittelkort

Bygg det på forsideoppsettet – da er miniatyrbildet og åpningen av videoen
samme bilde, og det er hele poenget.

**Med gjest** (`forsideoppsett.med-gjest`): ordmerket øverst mellom to korte
linjer, tittelen i gull under, undertittel i kursiv, stikkordlinje nederst.
Personene står på hver sin side.

**Uten gjest** (`forsideoppsett.uten-gjest`): alt venstrestilt. Sperret
ordmerke, linje, formatmerke i ramme, stor tittel i gull.

Punktstørrelsene i tokens er oppgitt ved 720 px høyde. Skaler lineært:
`px = tokens_px * (lerretHoyde / 720)`.

Tittelen krymper for å passe – i Remotion betyr det `fitText` fra
`@remotion/layout-utils`, ikke manuell prøving.

---

## Bevegelse

CSS-en sier det rett ut: *ingen bevegelse ved hover, bare rolige fargeskift*.
Det er en holdning, ikke en teknisk begrensning, og den gjelder film også.

### Oversatt til frames ved 30 fps

| Fra CSS | Sekunder | Frames |
|---|---|---|
| Tilstandsskift | 0.2 s | 6 |
| Innfelling | 0.7 s | 21 |
| Skip-lenke | 0.15 s | 5 |

### Reglene

- **Tekst tones opp og flytter seg 10 px.** Det er innfellingen fra nettsiden,
  og den er den eneste inngangen tekst trenger.
- **Ingen `spring()` med sprett.** Bruk `interpolate` med `Easing.ease`, eller
  `spring` med `damping` høyt nok til at den ikke svinger over.
- **Ingen Ken Burns.** Stillbilder står stille. Sakte zoom på et fotografi er
  et annet program enn dette.
- **Kutt eller kryssfade mellom scener.** Ingen swipe, ingen wipe, ingen
  3D-vending.
- **Figurer bygges opp ledd for ledd**, med samme innfelling per ledd og
  6–8 frames mellom. De hopper ikke fram.

Et kort som skal leses, skal stå i ro mens det leses. Regn omtrent 2,5 ord i
sekundet, og legg til et halvt sekund i hver ende.

---

## Figurer på skjerm

De åtte figurtypene fra nettsiden er også videovokabularet:

`compare` · `flow` · `cycle` · `scale` · `rings` · `matrix` · `chart` · `rule`

De er allerede definert som semantisk HTML med CSS i `src/styles/figurer.css`,
og Remotion rendrer HTML. **Gjenbruk stilarket i stedet for å tegne figurene på
nytt** – da er figuren i videoen bokstavelig talt den samme figuren som i
artikkelen.

Det krever at `--ink`, `--line` og resten peker på de mørke verdiene. Sett
`data-theme="dark"` på rota i komposisjonen, så gjelder `farger.mork`
automatisk.

---

## Typografi i video

Fontene ligger i `public/fonts/` som variable woff2. De er selvhostet, og det
er en forpliktelse i personvernerklæringen – **last dem ikke fra Google Fonts i
en Remotion-mal.** Last dem lokalt med `@remotion/fonts`:

```js
import { loadFont } from '@remotion/fonts';
import { staticFile } from 'remotion';

await loadFont({
  family: 'Newsreader',
  url: staticFile('fonts/newsreader-latin-wght-normal.woff2'),
});
```

To ting som ofte glipper:

1. **Bruk `-latin-`-filene, ikke `-latin-ext-`.** Ext-filene mangler vanlige
   latinske tegn og gir tomme ruter. (Dette gikk galt én gang i
   forsideskriptet.)
2. **Æ, Ø og Å må testes.** Ordmerket er «Spørretimen». Renderer du et utkast,
   se på ø-en før du ser på noe annet.

Tittelen på forsider settes i 700 – tyngre enn på nettsiden, fordi den skal
lese som miniatyrbilde. Løpende tekst i video følger nettsidens regel og settes
lett.

---

## Nedre tredjedel og merkelapper

Bruk merkelappen fra nettsiden: Inter 600, versaler, `0.13em` sperring, hårfin
ramme i `strek`, gjennomsiktig flate. Ikke en fylt pille, ikke en avrundet
boks, ikke en farget banner.

Formatmerket har fast tekst: `LÆR NOE NYTT`, `BØKER FORKLART`, `KORT FORKLART`.

Gjestenavn i nedre tredjedel: navnet i Newsreader 500 i `krem`, rollen under i
Inter 600 sperret i `dempet-gull`. Samme hierarki som på forsidene.

---

## Utrullingstekst

Avslutningsskjermen skal gi kanalen som faktisk finnes for det språket
videoen er på. De er ikke de samme:

| Språk | Kanal |
|---|---|
| Norsk, samtaler | `@Spørretimen` |
| Norsk, forklart | `@Spørretimenforklart` |
| Engelsk, forklart | `@SpørretimenExplained` |

Hent dem fra `tokens.serier`, ikke fra hukommelsen. Feltet `kanaler-en`
overstyrer per plattform.

---

## Sjekkliste før render

- [ ] Grunnflaten har begge lyskildene
- [ ] Ø-en i ordmerket renderer
- [ ] Ingen font hentes over nett
- [ ] Ingenting spretter
- [ ] Tekst står i ro lenge nok til å leses
- [ ] Kanallenken stemmer med språket
- [ ] Tittelkortet og miniatyrbildet er samme bilde
- [ ] 9:16: ingenting å lese i nederste 18 %
