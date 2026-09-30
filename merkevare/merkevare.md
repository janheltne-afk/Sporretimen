# Spørretimen – merkevare

Dette er uttrykket slik det faktisk er på nettsiden i dag, skrevet ned så det
kan brukes andre steder: i video, i slides, i miniatyrbilder, i grafikk.

Alt her er hentet ut av koden, ikke funnet på. Kildefilene står i parentes.
Endrer du uttrykket på nettsiden, skal du endre det her og i `tokens.json`
samtidig – ellers begynner video og nettside å sprike.

---

## Kort oppsummert

Spørretimen ser ut som en trykksak, ikke som en app.

Varmt papir, nær-svart blekk og én dempet bronseaksent. Serif til det som skal
leses, sans til det som skal skimtes. Hårfine linjer i stedet for skygger.
Nesten rette hjørner. God luft. Ingenting beveger seg uten grunn.

På video snus paletten: der er flaten nær-svart og teksten gull og krem. Det er
samme merkevare, sett i mørket.

---

## Navnet

**Spørretimen.** Alltid med ø. «Sporretimen» finnes bare i domenenavnet og i
filnavn, fordi teknikken krever det – aldri i noe en person leser.

To serier:

| Serie | Norsk | Engelsk | Hva |
|---|---|---|---|
| `sporretimen` | Spørretimen | Spørretimen | Samtalene |
| `sporretimen-forklart` | Spørretimen Forklart | Spørretimen Explained | Ideene |

Det er **to podkaster**, ikke én med to navn. De har egne kanaler og egne show.
Forklart har i tillegg en egen engelsk YouTube-kanal. Serien utledes av
formatet – `samtale` hører til Spørretimen, alt annet til Forklart – så den
skrives aldri inn manuelt noe sted (`src/i18n/taxonomy.ts`).

Tagline: *Gode spørsmål. Interessante mennesker. Nye perspektiver.*

---

## Ordmerket

Rent typografisk. Ingen logo, intet symbol, ingen figurmerke (`Logo.astro`).

- Newsreader, vekt 400
- Versaler
- Sperring `0.2em`, med samme verdi trukket fra som negativ høyremarg, så ordet
  står helt i venstrekanten av rutenettet
- Farge: `--ink` på lys flate, `krem` på mørk

Undertittel under navnet, når den trengs: Inter 500, versaler, `0.19em`
sperring, `--ink-faint`.

Det eneste symbolet som finnes, er faviconet: et spørsmålstegn i bronse
(`#d97a2b`) på en avrundet nesten-svart flate (`#1a1613`). Det er et ikon for
nettleserfanen, ikke en logo. **Bruk det ikke som merke i video.**

---

## Farger

### Lys (nettsidens grunntilstand)

| Rolle | Verdi | Hva |
|---|---|---|
| `paper` | `#f6f3ed` | Varm off-white bakgrunn |
| `surface` | `#fffdf9` | Kort og opphøyde flater |
| `surface-2` | `#ede8de` | Nedtonet flate |
| `ink` | `#16130f` | Overskrifter, sterk tekst |
| `ink-soft` | `#4c453c` | Brødtekst |
| `ink-faint` | `#6a635a` | Metadata, bildetekst |
| `line` | `#e0d9cc` | Hårfin ramme |
| `line-strong` | `#c8bfae` | Ramme ved hover, tabellhode |
| `accent` | `#8a5a25` | Dempet bronse |
| `accent-strong` | `#74491a` | Lenker, eyebrow |
| `accent-soft` | `#f0e7d9` | Markert flate |

### Mørk

Samme roller, egne verdier. Aksenten lysner til `#c98d4e` / `#e0a768` – bronse
holder ikke kontrast på mørk flate.

| `paper` | `surface` | `ink` | `ink-soft` | `line` | `accent` |
|---|---|---|---|---|---|
| `#12100d` | `#191612` | `#f2ede4` | `#c5bdb0` | `#2b2621` | `#c98d4e` |

Alle kombinasjoner er kontrollert mot WCAG AA.

### Forsidepaletten – den som gjelder for video

Forsidebildene settes i en egen, strammere palett
(`scripts/lag-forsidebilde.py`). **Det er denne, ikke den lyse nettsidepaletten,
du bygger video på.**

| Navn | Verdi | Brukes til |
|---|---|---|
| `grunn` | `#100e0b` | Flaten |
| `gull` | `#e2cb96` | Titler |
| `krem` | `#ece6d6` | Ordmerke, undertitler |
| `dempet-gull` | `#baa376` | Stikkord, småtekst |
| `strek` | `#967e58` | Linjer og rammer |
| `lys` | `#c98d4e` | Lyskilder og glød bak personer |

Flaten er ikke flat: to myke lyskilder, en stor nede til venstre
(x 0.10, y 0.28, r 0.42) og en svakere oppe til høyre (x 0.78, y 0.04, r 0.46).
Uten dem blir bildet dødt.

### Formatfarger

Hvert format har en dempet farge brukt på merkelapper – aldri som flatefyll:

- Samtale: grønn (`#3c5c4e`)
- Lær noe nytt: blå (`#42527a`)
- Kort forklart: rustrød (`#8a4b26`)
- Bøker forklart: ingen egen farge, arver nøytral merkelapp

---

## Typografi

To familier, selvhostet. Ingen tredjepartsforespørsler – det står i
personvernerklæringen, så det er en forpliktelse, ikke en preferanse.

**Newsreader** (serif, 200–800 variabel, normal og kursiv) bærer uttrykket.
Overskrifter, ordmerke, artikkeltekst, titler på forsider.

**Inter** (sans, 100–900 variabel) er grensesnittet. Metadata, merkelapper,
stikkord, tabellhoder, knapper.

### Regler som er lette å bryte

- **Overskrifter settes lett.** 400 på h1/h2, 500 på h3/h4. Aldri 700 på skjerm
  – serifen blir tung i stedet for elegant. *Unntaket er forsidebilder*, der
  tittelen settes i 700 fordi den skal lese på et miniatyrbilde.
- **Negativ knipning på store grader.** h1 `-0.028em`. Uten den faller de store
  gradene fra hverandre.
- **Brødtekst i artikler settes i serifen**, ikke sansen. 1.14rem, linjehøyde
  1.72, maks 40rem bred.
- **Versaler har alltid sperring.** Eyebrow `0.17em`, merkelapp `0.13em`,
  ordmerke `0.2em`. Uklare versaler uten sperring ser ut som en feil.

### Rollene

| Rolle | Familie | Vekt | Sperring | Farge |
|---|---|---|---|---|
| Eyebrow | Inter | 600 | 0.17em | `accent-strong` |
| Merkelapp | Inter | 600 | 0.13em | `ink-soft` + ramme |
| Figurtittel | Inter | 600 | 0.15em | `ink-faint` |
| Ingress | Newsreader | 400 | – | `ink-soft` |
| Artikkeltekst | Newsreader | 400 | – | `ink-soft` |
| Sitat | Newsreader kursiv | 400 | – | `ink`, venstrekant i aksent |

---

## Flater og struktur

- **Radius 2–4 px.** Nesten rette hjørner. Aldri pilleform.
- **1 px linjer bærer dybden.** Skygger finnes i tokens, men brukes nesten
  ikke. Trenger du å skille to flater: legg en linje.
- **Merkelapper har hårfin ramme og gjennomsiktig flate.** Ingen fargede piller.
- **Primærknappen er blekksvart**, ikke farget. Aksenten kommer først ved hover.
- Container 1180 px, smal variant 760 px.

---

## Bevegelse

Prinsippet i CSS-en er formulert slik: *«Ingen bevegelse ved hover – bare rolige
fargeskift.»*

Det gjelder video også. Konkret:

- Tilstandsskift: `0.2s ease`
- Innfelling ved scroll: `0.7s ease`, opacity + 10 px opp
- Ingenting løfter seg, spretter, roterer eller skalerer ved interaksjon
- `prefers-reduced-motion` respekteres overalt

Oversatt til film: **kryssfade og hold, ikke sprett og swipe.** Ingen
fjærdempede animasjoner, ingen elementer som flyr inn fra siden, ingen
kamerazoom på stillbilder. Tekst kommer inn ved å tone opp og flytte seg noen
piksler – det er alt.

---

## Bilder

Omslagene kommer fra ulike kilder. En felles, svak gradering binder dem sammen:

- Lys: `saturate(0.84) contrast(0.97)`, slør `#6b4a22` @ 7 %
- Mørk: `saturate(0.8) brightness(0.9)`, slør `#0b0908` @ 12 %

Personer klippes ut og graderes ned til samme tone, og får en svak glød i
`lys`-fargen bak seg (30 px uskarp, 14 % styrke) så de ikke står som utklipp.

Verten hentes alltid fra det samme studioportrettet
(`public/images/jan-sindre-heltne.jpg`), slik at han ser lik ut på hver eneste
episode. Mikrofonen er den samme, hentet fra det samme portrettet og speilet.

Formater: forsidebilde 1280×720, portrett 1200×1200.

---

## Forsideoppsettet

To oppsett. Begge er målt som andeler, så de skalerer til 1920×1080 uten
omregning. Alle tall står i `tokens.json` under `forsideoppsett`.

### Med gjest

Gjesten til venstre, verten til høyre, teksten i midten mellom dem.

```
  ────────────
   Spørretimen          ← Newsreader 400, krem
  ────────────
    TITTELEN            ← Newsreader 700, gull, versaler
  undertittel i kursiv  ← Newsreader kursiv, krem
  ────────────
  S T I K K O R D       ← Inter 600, dempet gull, • mellom
```

### Uten gjest

Alt venstrestilt, ingen personer i bildet.

```
S P Ø R R E T I M E N
─────────────────────
┌──────────────┐
│ LÆR NOE NYTT │        ← formatmerke i ramme
└──────────────┘

TITTELEN                ← Newsreader 700, gull, versaler, stor
─────────────────────
undertittel
liten linje
```

Formatmerkene er faste: `LÆR NOE NYTT`, `BØKER FORKLART`, `KORT FORKLART`.
Samtaler har ingen merkeboks – der står menneskene i bildet i stedet.

---

## Figurvokabular

Forklaringsinnholdet har åtte figurtyper og ikke flere
(`src/styles/figurer.css`):

`compare` · `flow` · `cycle` · `scale` · `rings` · `matrix` · `chart` · `rule`

Alle har en bildetekst med én setning som forklarer hva man ser.

**Finn ikke opp nye figurtyper i video.** Hvis noe ikke passer i én av de åtte,
er det som regel et tegn på at poenget ikke er skarpt nok ennå.

---

## Stemmen

Fra de redaksjonelle prinsippene og fra hvordan innholdet faktisk er skrevet:

- **Forklar, ikke imponer.** Fagtermer introduseres, ikke forutsettes.
- **Kildebasert.** Tall og påstander skal kunne spores. Mangler kilden,
  markeres teksten for gjennomgang – den fylles ikke med en omtrentlig
  referanse.
- **Skill mellom erfaring, forklaring og faktum.** Verten er ikke ekspert på
  alt, og det skal ikke se sånn ut.
- **Vær åpen om usikkerhet.** «Dette er omdiskutert» er en gyldig setning.
- **Ingen klikkagn.** Titlene sier hva episoden handler om.
- **Konkret framfor abstrakt.** Et eksempel slår en definisjon.

Om språk: samtalene er på norsk. Forklart publiseres på norsk og engelsk. Der
det ikke finnes en engelsk innspilling, står det tydelig at opptaket er på
norsk.

---

## Filene

| Fil | Hva |
|---|---|
| `merkevare/tokens.json` | Maskinlesbare tokens – **importer denne, ikke skriv av tabellene** |
| `merkevare/merkevare.md` | Dette dokumentet |
| `merkevare/remotion.md` | Hvordan uttrykket brukes i video |
| `src/styles/global.css` | Kilden for farger, typografi, struktur |
| `src/styles/figurer.css` | Kilden for figurvokabularet |
| `scripts/lag-forsidebilde.py` | Kilden for forsidepaletten og oppsettet |
| `src/i18n/taxonomy.ts` | Kilden for serier, formater og etiketter |
