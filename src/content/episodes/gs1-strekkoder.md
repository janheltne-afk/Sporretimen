---
title: "Lær noe nytt: GS1 – strekkoden, GTIN og tallene bak hver vare"
format: laer-noe-nytt
status: publisert
publishDate: 2026-09-20T08:00:00+02:00
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - GS1
  - strekkode
  - GTIN
  - EAN
  - SSCC
  - GLN
  - sporbarhet
topics:
  - Hva GS1 er, og hvorfor det finnes
  - Hvordan et GTIN er bygget opp, siffer for siffer
  - Kontrollsifferet – og hvordan du regner det ut selv
  - Landmyten – hva de første sifrene faktisk betyr
  - GTIN-familien – 8, 12, 13 og 14 siffer
  - Nøklene utover GTIN – GLN, SSCC og de andre
  - Symbologiene – EAN-13, ITF-14, GS1-128, DataMatrix
  - Application Identifiers – det som gjør logistikketiketten kraftig
  - Sunrise 2027 og overgangen til 2D
  - Koblingen til RFID
questions:
  - Hva er GS1, og hva gjør organisasjonen?
  - Hva betyr tallene i en strekkode?
  - Hvordan regner man ut kontrollsifferet?
  - Kan man se hvilket land en vare er produsert i ut fra strekkoden?
  - Hva er forskjellen på GTIN-8, GTIN-12, GTIN-13 og GTIN-14?
  - Hva er GLN og SSCC?
  - Hvilke strekkodetyper finnes, og hvor brukes de?
  - Hva er Application Identifiers?
  - Hva er Sunrise 2027?
  - Hvordan henger GS1 og RFID sammen?
takeaways:
  - GS1 tildeler firmaprefikset. Varenumrene lager virksomheten selv.
  - Kontrollsifferet er enkel aritmetikk, og du kan regne det ut i hodet.
  - "Prefikset viser hvor selskapet er registrert, ikke hvor varen er produsert."
  - GTIN er tallet. Strekkoden er bare én av flere måter å bære det på.
  - GS1-128 og Application Identifiers er det som gjør en logistikketikett maskinlesbar.
  - SSCC identifiserer den enkelte pallen, GLN identifiserer stedet.
  - Målet for Sunrise 2027 er at kassa skal kunne lese både 1D og 2D.
  - Nummeret på en RFID-tagg bygger på de samme nøklene.
coverTheme: "GS1"
image: /images/episoder/gs1-strekkoder.jpg
imageAlt: "Spørretimen: GS1 – Lær noe nytt. Jan Sindre Heltne i studio."
description: >-
  Hva betyr tallene i en strekkode? En gjennomgang av GS1-standardene – hvordan
  et GTIN er bygget opp, hvordan kontrollsifferet regnes ut, hva prefikset
  faktisk sier om opprinnelsesland, nøklene utover GTIN, og overgangen til
  2D-koder mot 2027.
featured: false
popularityScore: 0
links:
  youtube: https://youtu.be/ZVob-10Iemw
  spotify: https://open.spotify.com/episode/6eeli2JrFLS0rdsj0zwkw8
sources:
  - title: "GS1 – GS1 General Specifications og standardene for identifikasjonsnøkler"
    url: https://www.gs1.org/standards
  - title: "GS1 – Company Prefix og prefikslista for medlemsorganisasjonene"
    url: https://www.gs1.org/standards/id-keys/company-prefix
  - title: "GS1 – 2D-strekkoder og Sunrise 2027"
    url: https://www.gs1.org/standards/2d-barcodes
related:
  - rfid-forklart
  - incoterms-2020
  - lean-forklart
---

Strekkoden er sannsynligvis den mest brukte standarden i verden, og nesten ingen
vet hvordan den er bygget opp. Den skannes milliarder av ganger i døgnet, og de
tretten sifrene under strekene er ikke tilfeldige – de er et adressesystem.

Denne episoden går gjennom **GS1**, organisasjonen som forvalter det, hva tallene
betyr, og hvorfor det du trodde om de tre første sifrene sannsynligvis er feil.

## Hvorfor det finnes

Den første strekkoden ble skannet i en butikk i 1974. Ideen var eldre – et
patent på en strekkodeliknende symbolikk ble tatt ut av **Norman Joseph
Woodland** og **Bernard Silver** allerede i 1952 – men det som manglet, var en
avtale om hva tallene skulle bety.

Det er den avtalen som er poenget. En strekkode er verdiløs hvis to selskaper
kan bruke samme nummer på ulike varer. Derfor finnes **GS1**: en global,
ikke-kommersiell standardorganisasjon med nasjonale medlemsorganisasjoner,
deriblant GS1 Norway. Amerikansk UPC kom først, europeisk EAN fulgte i 1977, og
de to organisasjonene ble til GS1 i 2005.

## Hvordan tallet er bygget opp

Det sentrale begrepet er **GTIN** – Global Trade Item Number. Det er tallet.
Strekkoden er bare én av flere måter å bære det på.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">7001234567898, delt opp</p>
  <ol>
    <li><span class="fig__box"><b>700 — GS1-prefiks</b><small>Sier hvilken GS1-organisasjon som tildelte prefikset. 700–709 hører til GS1 Norway.</small></span></li>
    <li><span class="fig__box"><b>…1234 — firmaprefiks</b><small>Tildelt virksomheten av GS1. Prefikset er kortere for den som trenger mange varenummer, og lengre for den som trenger få.</small></span></li>
    <li><span class="fig__box"><b>…56789 — varenummer</b><small>Dette bestemmer virksomheten helt selv. GS1 er ikke involvert i hvilken vare som får hvilket nummer.</small></span></li>
    <li><span class="fig__box"><b>8 — kontrollsiffer</b><small>Regnes ut fra de tolv foregående. Fanger de fleste skannefeil og tastefeil.</small></span></li>
  </ol>
  <figcaption>Merk hvordan lengden på firmaprefikset og varenummeret varierer omvendt: et kort firmaprefiks gir plass til mange varer, et langt gir plass til få. Det er derfor du ikke kan lese ut av koden hvor det ene slutter og det andre begynner – bare den som tildelte prefikset, vet det.</figcaption>
</figure>

## Kontrollsifferet

Dette kan du regne ut selv, og det er verdt å kunne: det avslører en feiltastet
kode på noen sekunder.

<figure class="fig fig--rule">
  <p class="fig__claim">Gang sifrene vekselvis med 3 og 1 fra høyre, legg sammen, og se hvor langt du har til neste tier.</p>
  <p class="fig__example"><b>700123456789 →</b> fra høyre: 9×3 + 8×1 + 7×3 + 6×1 + 5×3 + 4×1 + 3×3 + 2×1 + 1×3 + 0×1 + 0×3 + 7×1 = 27+8+21+6+15+4+9+2+3+0+0+7 = <b>102</b>. Neste tier er 110, og differansen er <b>8</b>. Hele koden blir <b>7001234567898</b>. Går summen opp i 10 allerede, er kontrollsifferet 0.</p>
</figure>

Samme regel gjelder for alle GS1-nøklene, uansett lengde – du begynner alltid
med vekt 3 på sifferet lengst til høyre i kroppen, og veksler innover.

## Landmyten

Dette er den utbredte misforståelsen, og den dukker opp i innkjøp,
markedsføring og forbrukerdebatt med jevne mellomrom.

<figure class="fig fig--rule">
  <p class="fig__claim">Prefikset viser hvilken GS1-organisasjon selskapet er registrert hos. Det sier ingenting om hvor varen er produsert.</p>
  <p class="fig__example"><b>Hvorfor det blir feil:</b> et norsk selskap med prefiks i 700-serien kan få varene produsert i Kina, Polen eller Italia – koden er den samme. Og et utenlandsk selskap kan selge en vare laget i Norge under sitt eget prefiks. GS1 sier dette uttrykkelig selv: prefikset identifiserer ikke opprinnelsesland. Skal du vite hvor noe er laget, må du se på opprinnelsesmerkingen, ikke på strekkoden.</p>
</figure>

Det finnes noen prefikser som betyr noe annet enn en medlemsorganisasjon.
**978 og 979** er bøker – der ligger ISBN inne i GTIN-et. **977** er
tidsskrifter. Og serier som **02** og **20–29** er satt av til intern bruk i en
butikk eller kjede, typisk for varer som veies i kassa. Møter du en slik kode,
er den bare gyldig innenfor den virksomheten som lagde den.

## GTIN-familien

<figure class="fig fig--matrix">
  <p class="fig__title">Fire lengder, fire bruksområder</p>
  <table>
    <thead>
      <tr><th scope="col">Nøkkel</th><th scope="col">Siffer</th><th scope="col">Brukes på</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">GTIN-13</th><td>13</td><td>Standarden i Europa. Den koden du ser på nesten alt i butikk. Bæres av EAN-13.</td></tr>
      <tr><th scope="row">GTIN-12</th><td>12</td><td>Den amerikanske UPC-formen. Fortsatt vanlig i Nord-Amerika.</td></tr>
      <tr><th scope="row">GTIN-8</th><td>8</td><td>Små pakninger der det ikke er plass til en full kode – tyggegummi, kosmetikk.</td></tr>
      <tr><th scope="row">GTIN-14</th><td>14</td><td>Ytteremballasje og kartonger. Det første sifferet angir hvilket nivå av pakning det er.</td></tr>
    </tbody>
  </table>
  <figcaption>Alle fire er samme slags nøkkel, og systemer lagrer dem ofte utfylt til fjorten siffer med nuller foran. Det er verdt å vite når to systemer ikke finner hverandres varer: ofte er det bare utfyllingen som er ulik.</figcaption>
</figure>

## Nøklene utover GTIN

GTIN identifiserer en vare. GS1 har nøkler for de andre tingene man trenger å
peke på, og de to første her er de som faktisk brukes mest i logistikk.

<figure class="fig fig--matrix">
  <p class="fig__title">De nøklene du møter</p>
  <table>
    <thead>
      <tr><th scope="col">Nøkkel</th><th scope="col">Identifiserer</th><th scope="col">Typisk bruk</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">GLN</th><td>Et sted eller en part</td><td>Lager, butikk, avdeling, juridisk enhet. Brukes i EDI-meldinger for å si hvem og hvor.</td></tr>
      <tr><th scope="row">SSCC</th><td>Én bestemt forsendelsesenhet</td><td>Atten siffer på palleetiketten. Hver pall er unik, også om innholdet er identisk.</td></tr>
      <tr><th scope="row">GRAI</th><td>Returnerbar transportenhet</td><td>Paller, kasser, bur – emballasje som skal tilbake.</td></tr>
      <tr><th scope="row">GIAI</th><td>En enkelt eiendel</td><td>Verktøy, maskiner, IT-utstyr som skal følges over tid.</td></tr>
    </tbody>
  </table>
  <figcaption>SSCC er den som gjør sporing mulig i praksis. Et GTIN sier «dette er en kasse melk», mens et SSCC sier «dette er nøyaktig denne pallen, sendt denne dagen, fra dette lageret» – og det er det siste du trenger når noe skal tilbakekalles.</figcaption>
</figure>

## Symbologiene

Strekkode er ikke én ting. Hvilket mønster som brukes, avhenger av hvor koden
skal leses og hvor mye den skal bære.

<figure class="fig fig--matrix">
  <p class="fig__title">Hvilken kode hvor</p>
  <table>
    <thead>
      <tr><th scope="col">Symbologi</th><th scope="col">Bærer</th><th scope="col">Hvor den brukes</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">EAN-13 / UPC-A</th><td>Bare et GTIN</td><td>Kassa i butikk. Bygget for å leses raskt og sikkert, og ikke for mer.</td></tr>
      <tr><th scope="row">EAN-8 / UPC-E</th><td>Et kort GTIN</td><td>Små pakninger.</td></tr>
      <tr><th scope="row">ITF-14</th><td>Et GTIN-14</td><td>Bølgepapp og kartonger, der trykket er grovt og strekene må være robuste.</td></tr>
      <tr><th scope="row">GS1-128</th><td>Flere opplysninger samtidig</td><td>Logistikketiketten på pallen: SSCC, GTIN, batch, dato, antall.</td></tr>
      <tr><th scope="row">GS1 DataBar</th><td>GTIN pluss litt mer</td><td>Ferskvarer og kuponger, der dato og vekt må med på liten plass.</td></tr>
      <tr><th scope="row">GS1 DataMatrix</th><td>Mye, på svært liten flate</td><td>Legemidler og medisinsk utstyr, der serienummer og utløpsdato kreves.</td></tr>
      <tr><th scope="row">QR med GS1 Digital Link</th><td>Alt det over, pluss en nettadresse</td><td>Det som er i ferd med å komme på forbrukerpakninger.</td></tr>
    </tbody>
  </table>
  <figcaption>Legg merke til den første raden. EAN-13 kan bare bære varenummeret – ingen dato, ingen batch, ingen serie. Det er derfor et tilbakekall ikke kan styres fra butikkassa alene, og hvorfor logistikken trenger GS1-128.</figcaption>
</figure>

## Application Identifiers

Dette er mekanismen som gjør en GS1-128-etikett maskinlesbar uten avtale på
forhånd, og den er enklere enn den ser ut.

<figure class="fig fig--rule">
  <p class="fig__claim">Hvert felt innledes med en kode i parentes som sier hva det neste tallet betyr.</p>
  <p class="fig__example"><b>(01) 07001234567898 (10) A4472 (17) 271231</b> leses som: varen er GTIN 07001234567898, batch A4472, best før 31. desember 2027. <b>(00)</b> er SSCC, <b>(21)</b> er serienummer, <b>(37)</b> er antall. Parentesene trykkes for menneskeøyet – i selve strekkoden ligger det et skilletegn i stedet.</p>
</figure>

Det er denne oppbygningen som gjør at en mottaker kan skanne en ukjent
leverandørs palleetikett og forstå den umiddelbart. Datoformatet er verdt å
merke seg: seks siffer, ÅÅMMDD.

## Sunrise 2027

GS1 driver nå en global overgang fra 1D til 2D. Målet er at butikkassene innen
utgangen av 2027 skal kunne lese både tradisjonelle strekkoder og
GS1-godkjente 2D-koder – i praksis GS1 DataMatrix og QR med GS1 Digital Link.

Poenget er kapasiteten. En 2D-kode kan bære batch, utløpsdato og serienummer i
tillegg til varenummeret, og kan samtidig være en lenke til produktinformasjon.
Det gir tilbakekall som treffer den enkelte batchen framfor hele varelinjen, og
holdbarhetsstyring i kassa.

Overgangen er lagt opp som sameksistens, ikke som et bytte: anbefalingen er å
sette 2D-koden på ved siden av den eksisterende, og de gamle kodene skal
fortsatt kunne brukes etter 2027. Det er verdt å ha med når noen presenterer
datoen som en frist.

## Koblingen til RFID

Nummeret på en RFID-tagg er ikke en annen slags identitet – det er som regel
samme nøkkel, i et annet format. I EPC-standardene bygges taggnummeret på
GTIN-et, med et serienummer lagt til, slik at hver enkelt gjenstand får sin egen
identitet framfor bare sin varetype.

Det er den praktiske broen mellom de to: strekkoden sier hva noe er, og RFID
kan i tillegg si hvilken av dem det er. Mer om selve teknologien i [Lær noe nytt
om RFID](/episoder/rfid-forklart/).

## Hva som er verdt å ta med

At strekkoden er en avtale, ikke en teknologi – og at avtalen er det verdifulle.
At de første sifrene ikke forteller hvor varen er laget. At GTIN er tallet og
symbologien bare emballasjen rundt det. At SSCC er det som gjør sporing mulig.
Og at kontrollsifferet er noe du kan regne ut i hodet, neste gang et tall ser
mistenkelig ut.

*GS1, GTIN og de øvrige standardnavnene tilhører GS1. Denne episoden forklarer
hvordan standardene fungerer og gjengir ikke spesifikasjonsteksten. For
bindende detaljer gjelder GS1s egne publikasjoner.*
