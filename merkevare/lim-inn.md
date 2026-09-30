# Spørretimen – merkevare (til å lime inn)

Denne fila er laget for å limes inn i en chat som ikke har tilgang til
kodebasen. Alle verdier står her, ingen henvisninger til filer.

---

Du skal lage noe som ser ut som **Spørretimen**. Her er hele uttrykket.

## Hva Spørretimen er

Norsk podkast drevet av Jan Sindre Heltne. `www.sporretimen.no`.
Tagline: *Gode spørsmål. Interessante mennesker. Nye perspektiver.*

Navnet skrives **alltid med ø**. «Sporretimen» finnes bare i domenenavn og
filnavn, aldri i noe en person leser.

**To serier, ikke én.** De har egne kanaler og egne show:

| Serie | Innhold | Språk |
|---|---|---|
| Spørretimen | Lange samtaler med gjester | Norsk |
| Spørretimen Forklart / Explained | Forklaringer, bøker, temaer | Norsk og engelsk |

**Fire formater:** Samtaler · Lær noe nytt · Kort forklart · Bøker forklart.
Serien utledes av formatet: samtale → Spørretimen, alt annet → Forklart.

**Tre YouTube-kanaler.** De er ikke utskiftbare:

- `@Spørretimen` – norske samtaler
- `@Spørretimenforklart` – norsk forklart
- `@SpørretimenExplained` – engelsk forklart

Spotify: samtalene og Forklart har hvert sitt show.
Instagram og TikTok: `@sporretimen`.

---

## Uttrykket i én setning

Spørretimen ser ut som en trykksak, ikke som en app. Varmt papir, nær-svart
blekk, én dempet bronseaksent. Hårfine linjer i stedet for skygger. Nesten
rette hjørner. God luft. Ingenting beveger seg uten grunn.

---

## Farger

### Video og forsidebilder – bruk denne

Nettsiden har lys grunntilstand. **Video har det ikke.** Starter du fra den
lyse paletten, ser det ikke ut som Spørretimen.

| Rolle | Hex | Brukes til |
|---|---|---|
| Grunn | `#100e0b` | Flaten |
| Gull | `#e2cb96` | Titler |
| Krem | `#ece6d6` | Ordmerke, undertitler |
| Dempet gull | `#baa376` | Stikkord, småtekst |
| Strek | `#967e58` | Linjer og rammer |
| Lys | `#c98d4e` | Lyskilder, glød bak personer |

Flaten er **ikke ensfarget**. To myke lyskilder i `#c98d4e`, som andeler av
lerretet:

- x 0.10, y 0.28, radius 0.42, styrke 54
- x 0.78, y 0.04, radius 0.46, styrke 30

Uten dem blir bildet dødt. De skal ikke animeres.

### Mørkt grensesnitt, om du trenger flere nivåer

`paper #12100d` · `surface #191612` · `surface-2 #211d18`
`ink #f2ede4` · `ink-soft #c5bdb0` · `ink-faint #928a7e`
`line #2b2621` · `line-strong #3b352d`
`accent #c98d4e` · `accent-strong #e0a768` · `accent-soft #2a2018`

### Lys palett – bare for nettside og trykk

`paper #f6f3ed` · `surface #fffdf9` · `surface-2 #ede8de`
`ink #16130f` · `ink-soft #4c453c` · `ink-faint #6a635a`
`line #e0d9cc` · `line-strong #c8bfae`
`accent #8a5a25` · `accent-strong #74491a` · `accent-soft #f0e7d9`

### Formatfarger

Bare på merkelapper, aldri som flatefyll.
Samtale `#3c5c4e` · Lær noe nytt `#42527a` · Kort forklart `#8a4b26`.
Bøker forklart har ingen egen farge.

---

## Typografi

To familier. Begge er gratis og finnes på Google Fonts.

**Newsreader** (serif, variabel 200–800, normal + kursiv) bærer uttrykket:
overskrifter, ordmerke, brødtekst, titler på forsider.

**Inter** (sans, variabel 100–900) er grensesnittet: metadata, merkelapper,
stikkord, tabellhoder, knapper.

### Regler som er lette å bryte

- **Overskrifter settes lett** – vekt 400, ikke 700. Serifen blir tung i
  stedet for elegant. *Unntak:* titler på forsidebilder settes i 700, fordi de
  skal lese som miniatyrbilde.
- **Negativ knipning på store grader** – −0.028em på de største. Uten den
  faller de fra hverandre.
- **Brødtekst settes i serifen**, ikke sansen. Linjehøyde 1.72, maks 40rem.
- **Versaler har alltid sperring.** Uten er det en feil, ikke en stil.

### Roller

| Rolle | Font | Vekt | Sperring | Farge |
|---|---|---|---|---|
| Ordmerke | Newsreader | 400 | 0.2em | Krem |
| Eyebrow | Inter | 600 | 0.17em | Aksent |
| Merkelapp | Inter | 600 | 0.13em | Dempet, hårfin ramme |
| Figurtittel | Inter | 600 | 0.15em | Dempet |
| Ingress | Newsreader | 400 | – | Ink-soft |
| Sitat | Newsreader kursiv | 400 | – | Ink, venstrekant i aksent |

Ordmerket er **rent typografisk**. Ingen logo, ingen figur, intet symbol.
Sperringen legges på høyre side av hvert tegn, med samme verdi trukket fra som
negativ høyremarg, så ordet står i venstrekanten.

---

## Flater

- **Radius 2–4 px.** Nesten rette hjørner. Aldri pilleform.
- **1 px linjer bærer dybden.** Skal du skille to flater: legg en linje, ikke
  en skygge.
- **Merkelapper: hårfin ramme, gjennomsiktig flate.** Ingen fargede piller.
- **Primærknappen er blekksvart**, ikke farget. Aksenten kommer ved hover.

---

## Bevegelse

Regelen fra stilarket: *ingen bevegelse ved hover – bare rolige fargeskift.*
Det gjelder film også.

Ved 30 fps:

| Hva | Sekunder | Frames |
|---|---|---|
| Tilstandsskift | 0.2 s | 6 |
| Innfelling av tekst | 0.7 s | 21 |

- Tekst tones opp og flytter seg **10 px**. Det er hele inngangen.
- **Ingen spring med sprett.** Ease, eller høy demping.
- **Ingen Ken Burns.** Stillbilder står stille.
- **Kutt eller kryssfade** mellom scener. Ingen swipe, wipe eller 3D-vending.
- Figurer bygges ledd for ledd, 6–8 frames mellom.

Et kort som skal leses, står i ro mens det leses: regn 2,5 ord i sekundet,
pluss et halvt sekund i hver ende.

---

## Forsideoppsettet

Målt som andeler av lerretet, så det samme oppsettet gjelder i 1920×1080,
1280×720 og 1080×1920. Punktstørrelsene er oppgitt ved 720 px høyde – skaler
lineært (`px × lerretHøyde / 720`).

### Med gjest

Gjesten til venstre, verten til høyre, teksten sentrert imellom.
Tekstblokk i x 0.50, maks bredde 0.58.

| Element | y | Font | px @720 | Farge |
|---|---|---|---|---|
| Linje | 0.070 | – halvbredde 0.105 | | Strek |
| «Spørretimen» | 0.100 | Newsreader 400 | 46 | Krem |
| Linje | 0.172 | – halvbredde 0.145 | | Strek |
| TITTEL | 0.250 | Newsreader 700 | 92 | Gull |
| Undertittel | 0.430 | Newsreader kursiv | 46 | Krem |
| Linje | 0.545 | – halvbredde 0.145 | | Strek |
| STIKKORD | 0.575 | Inter 600, sperret 3.4px | 19 | Dempet gull |

Stikkordene skilles med ` • `. Tittel og undertittel krymper for å passe.

### Uten gjest

Alt venstrestilt, ingen personer. Tekst fra x 0.065, maks bredde 0.56.

| Element | y | Font | px @720 | Farge |
|---|---|---|---|---|
| S P Ø R R E T I M E N | 0.115 | Newsreader 600, sperret 5.5px | 40 | Krem |
| Linje | 0.215 | | | Strek |
| Formatmerke i ramme | 0.250 | Inter 600, sperret 3.6px | 22 | Gull |
| TITTEL | 0.430 | Newsreader 700 | 122 | Gull |
| Linje | 0.730 | | | Strek |
| Undertittel | 0.765 | | | Krem |
| Liten linje | 0.860 | | | Dempet gull |

Formatmerket har rammehøyde 0.110 og luft 26×16 px. Fast tekst:
`LÆR NOE NYTT`, `BØKER FORKLART`, `KORT FORKLART`.
**Samtaler har ingen merkeboks** – der står menneskene i bildet i stedet.

---

## Lerret

| Bruk | Oppløsning |
|---|---|
| YouTube | 1920×1080 |
| Shorts, TikTok, Reels | 1080×1920 |
| Miniatyrbilde | 1280×720 |

30 fps. Hold tekst innenfor 90 % av bredden. I 9:16 dekkes nederste ~18 % av
grensesnittet – legg ingenting som skal leses der.

---

## Bilder

Omslag kommer fra ulike kilder og bindes sammen av en svak gradering:
`saturate(0.8) brightness(0.9)` på mørk flate, med et slør i `#0b0908` @ 12 %.

Personer klippes ut, graderes ned til samme tone og får en svak glød i
`#c98d4e` bak seg – 30 px uskarp, 14 % styrke – så de ikke står som utklipp.

Verten hentes alltid fra det **samme** studioportrettet, så han ser lik ut på
hver eneste episode. Mikrofonen er den samme, speilvendt.

---

## Figurer

Forklaringsinnholdet har åtte figurtyper og ikke flere:

`compare` (spalter mot hverandre) · `flow` (steg med piler) · `cycle`
(runddans) · `scale` (akse med merker) · `rings` (konsentriske ringer) ·
`matrix` (to ganger to) · `chart` (kurve) · `rule` (regel med eksempel under)

Alle har en bildetekst med én setning som forklarer hva man ser.

**Finn ikke opp nye figurtyper.** Passer ikke poenget i én av de åtte, er det
som regel poenget som ikke er skarpt nok ennå.

---

## Stemmen

- **Forklar, ikke imponer.** Fagtermer introduseres, ikke forutsettes.
- **Kildebasert.** Tall og påstander skal kunne spores.
- **Skill mellom erfaring, forklaring og faktum.** Verten er ikke ekspert på
  alt, og det skal ikke se sånn ut.
- **Vær åpen om usikkerhet.** «Dette er omdiskutert» er en gyldig setning.
- **Ingen klikkagn.** Tittelen sier hva episoden handler om.
- **Konkret framfor abstrakt.** Et eksempel slår en definisjon.

**Dikt aldri opp kilder, sitater, biografiske opplysninger, bokinnhold eller
hva en gjest har sagt.** Mangler kilden, marker teksten for gjennomgang i
stedet for å finne på en referanse. Det gjelder tekst i grafikk og video også.

---

## Sjekkliste

- [ ] Mørk palett, ikke den lyse
- [ ] Begge lyskildene på grunnflaten
- [ ] Ø-en i «Spørretimen» renderer
- [ ] Ingenting spretter
- [ ] Tekst står i ro lenge nok til å leses
- [ ] Riktig kanal for språket
- [ ] Tittelkort og miniatyrbilde er samme bilde
- [ ] 9:16: ingenting å lese i nederste 18 %
