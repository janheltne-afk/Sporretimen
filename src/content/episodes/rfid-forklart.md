---
title: "Lær noe nytt: RFID – brikker uten batteri, lest på avstand"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - automatisering
tags:
  - RFID
  - EPC
  - NFC
  - logistikk
  - sporing
  - varemottak
  - lagerstyring
topics:
  - De tre delene i et RFID-oppsett
  - Hvordan en brikke uten batteri klarer å svare
  - Frekvensbåndene, og hvorfor valget avgjør alt
  - Passiv, aktiv og semipassiv tagg
  - RFID mot strekkode – hva som faktisk er forskjellen
  - Metall og væske – fysikken som velter prosjekter
  - Lesegrad, og hvorfor den aldri blir hundre prosent
  - RFID, NFC, BLE og UWB – hva som er hva
  - Hva det brukes til i praksis
  - Personvern og kritikken
  - Hvorfor hypen rundt 2005 ikke slo til
questions:
  - Hva er RFID, og hvordan virker det?
  - Hvordan kan en brikke svare uten å ha batteri?
  - Hva er forskjellen på LF, HF og UHF?
  - Hva er forskjellen på passive og aktive tagger?
  - Hva skiller RFID fra en strekkode?
  - Hvorfor virker RFID dårlig på metall og væske?
  - Hvorfor leser man aldri alle taggene?
  - Hva er forskjellen på RFID, NFC, Bluetooth og UWB?
  - Hvor brukes RFID i dag, og hvor har det ikke slått til?
  - Er RFID et personvernproblem?
takeaways:
  - En passiv tagg har ikke batteri – den låner energi fra leseren og svarer med å reflektere signalet.
  - Frekvensvalget avgjør rekkevidde, og det er den viktigste beslutningen i et RFID-prosjekt.
  - "RFID trenger ikke fri sikt, og det er den egentlige forskjellen fra strekkode."
  - UHF er båndet for logistikk – men frekvensen er ikke den samme i Europa og USA.
  - Metall reflekterer og væske absorberer. Fysikken avgjør om prosjektet kan lykkes.
  - Lesegraden blir aldri hundre prosent. Løsningen må tåle det.
  - NFC er en slektning av RFID. Bluetooth og UWB er noe annet.
  - Hypen rundt 2005 sprakk på taggpris og lesesikkerhet, ikke på ideen.
coverTheme: "RFID"
description: >-
  Hvordan kan en brikke uten batteri leses på flere meters avstand? En
  gjennomgang av RFID – de tre delene, frekvensbåndene, passive og aktive
  tagger, forskjellen fra strekkode, hvorfor metall og væske ødelegger, og
  hvorfor teknologien ikke tok over alt likevel.
featured: false
popularityScore: 0
advisory:
  - juss
related:
  - rfid-varetelling
  - gs1-strekkoder
  - lean-forklart
---

Det som overrasker folk mest med RFID, er ikke at en brikke kan leses på
avstand. Det er at den vanligste typen **ikke har batteri i det hele tatt** – og
likevel svarer når den blir spurt.

Dette er et tema jeg har skrevet
[bacheloroppgave](/episoder/rfid-varetelling/) om. Her er gjennomgangen av
hvordan det virker, hva det duger til, og hvor det pleier å skjære seg.

## De tre delene

Et RFID-oppsett er alltid tre ting. Feiler et prosjekt, er det nesten alltid
fordi det tredje leddet ble glemt.

<figure class="fig fig--flow">
  <p class="fig__title">Hele kjeden</p>
  <ol>
    <li><span class="fig__box"><b>Taggen</b><small>En brikke med et unikt nummer og en antenne. Sitter på varen, pallen, verktøyet eller kortet.</small></span></li>
    <li><span class="fig__box"><b>Leseren</b><small>Sender ut radioenergi gjennom en eller flere antenner, og fanger opp svaret.</small></span></li>
    <li><span class="fig__box"><b>Systemet</b><small>Det som gjør nummeret om til noe nyttig: varemottak, lagerbeholdning, sporing.</small></span></li>
  </ol>
  <figcaption>De to første er maskinvare og lar seg kjøpe. Det tredje er integrasjon, og det er der pengene og tiden går. En leser som roper nummer ut i luften uten at noe tar imot dem, har ingen verdi.</figcaption>
</figure>

## Hvordan en brikke uten batteri svarer

Dette er den fine delen av teknologien, og verdt å forstå før man leser videre.

<figure class="fig fig--rule">
  <p class="fig__claim">Taggen låner energi fra leseren, og svarer med å endre hvordan den reflekterer signalet.</p>
  <p class="fig__example"><b>Prinsippet heter backscatter:</b> leseren sender ut en radiobølge. Antennen på taggen fanger opp nok energi til å vekke brikken. Brikken svarer ikke ved å sende noe selv – den har ikke kraft til det – men ved å skru refleksjonen sin av og på i et mønster. Leseren ser endringen i sitt eget signal, og leser mønsteret som tall. Taggen er altså et speil som blinker, ikke en sender.</p>
</figure>

Det er også derfor rekkevidden er asymmetrisk: leseren må ha nok kraft til å nå
taggen *og* til at det svake refleksjonssvaret kommer tilbake. Doble avstanden,
og du trenger langt mer enn dobbel kraft.

## Frekvensbåndene

Dette er den viktigste beslutningen i et RFID-prosjekt, og den tas ofte uten at
noen forstår konsekvensen.

<figure class="fig fig--matrix">
  <p class="fig__title">Tre bånd, tre bruksområder</p>
  <table>
    <thead>
      <tr><th scope="col">Bånd</th><th scope="col">Rekkevidde</th><th scope="col">Der det hører hjemme</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">LF<br />ca. 125–134 kHz</th><td>Centimetre</td><td>Øremerker på dyr, bilnøkler, adgangsbrikker. Tåler nærhet til metall og væske bedre enn de andre.</td></tr>
      <tr><th scope="row">HF<br />13,56 MHz</th><td>Opp mot en meter</td><td>Kort, pass, bibliotekbøker, betaling. NFC er en nær slektning i dette båndet.</td></tr>
      <tr><th scope="row">UHF<br />ca. 860–960 MHz</th><td>Flere meter</td><td>Logistikk: varemottak, lagerbeholdning, pallelesing, butikk. Kan lese mange tagger raskt.</td></tr>
    </tbody>
  </table>
  <figcaption>UHF er båndet for varestrømmer, og det er der den store gevinsten ligger. Men merk spennet: Europa bruker rundt 865–868 MHz, USA rundt 902–928 MHz. Utstyr og tagger kjøpt for det ene markedet kan yte merkbart dårligere i det andre – noe å vite om når varene, leserne eller leverandøren krysser en landegrense.</figcaption>
</figure>

## Passiv, aktiv og semipassiv

<figure class="fig fig--compare">
  <p class="fig__title">Med og uten eget batteri</p>
  <div class="fig__cols">
    <div class="fig__col" data-accent>
      <p class="fig__lead">Passiv</p>
      <h4>Ingen strømkilde</h4>
      <ul>
        <li>Koster lite – ofte øre eller kroner per tagg</li>
        <li>Kan limes på som en etikett</li>
        <li>Varer i praksis evig</li>
        <li>Kortere rekkevidde, og krever at leseren er sterk</li>
      </ul>
    </div>
    <div class="fig__col">
      <p class="fig__lead">Aktiv</p>
      <h4>Eget batteri</h4>
      <ul>
        <li>Koster langt mer per enhet</li>
        <li>Sender selv, og kan nå titalls til hundretalls meter</li>
        <li>Kan ha sensorer – temperatur, støt, fukt</li>
        <li>Batteriet tar slutt, og må planlegges for</li>
      </ul>
    </div>
  </div>
  <figcaption>Det finnes også en mellomting, semipassiv: batteriet driver brikken og eventuelle sensorer, men svaret sendes fortsatt som refleksjon. Regelen er enkel nok – passivt på varer, aktivt på det som er verdt å holde øye med i seg selv: containere, kjøretøy, dyrt utstyr.</figcaption>
</figure>

## RFID mot strekkode

Den vanligste misforståelsen er at RFID er «en bedre strekkode». Det er en annen
slags ting, med andre styrker og andre kostnader.

<figure class="fig fig--compare">
  <p class="fig__title">To måter å identifisere en vare</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Strekkode</p>
      <h4>Billig og sikker</h4>
      <ul>
        <li>Krever fri sikt og riktig vinkel</li>
        <li>Én om gangen</li>
        <li>Koster nesten ingenting – den trykkes</li>
        <li>Leser du den, er svaret riktig</li>
        <li>Identifiserer som regel varetypen</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">RFID</p>
      <h4>Rask og usynlig</h4>
      <ul>
        <li>Trenger ikke fri sikt – leser gjennom emballasje</li>
        <li>Mange tagger i én operasjon</li>
        <li>Koster per tagg, hver gang</li>
        <li>Leser du ikke alle, vet du ikke hvilke som mangler</li>
        <li>Kan identifisere den enkelte gjenstanden</li>
      </ul>
    </div>
  </div>
  <figcaption>Fri sikt er den egentlige forskjellen. En pall kan leses uten å åpnes, og en butikkhylle kan telles med en håndleser i stedet for én vare om gangen. Det siste kulepunktet til høyre er også verdt å merke seg: det er forskjellen mellom å vite at du har «tolv av denne modellen» og å vite hvilke tolv.</figcaption>
</figure>

Nummeret som ligger på taggen, er dessuten som regel bygget etter de samme
standardene som strekkoden. Det er tema i [Lær noe nytt om GS1 og
strekkoder](/episoder/gs1-strekkoder/).

## Fysikken som velter prosjekter

Her er den enkeltopplysningen som sparer mest tid, og som ofte kommer for sent
i et prosjekt.

<figure class="fig fig--rule">
  <p class="fig__claim">Metall reflekterer radiobølger. Væske absorberer dem. Begge ødelegger for UHF.</p>
  <p class="fig__example"><b>Hva det betyr i praksis:</b> en tagg limt rett på en stålreol eller en malingsspann oppfører seg helt annerledes enn den gjorde på testbordet. Det finnes tagger laget for metall, med avstandsstykke eller egen jordplate, men de koster mer og må velges bevisst. Væske er verre: vann absorberer energien i UHF-båndet, så en pall med drikkevarer skjermer taggene i midten. Det er også derfor LF fortsatt brukes på dyr – det båndet bryr seg mindre om at det sitter på noe som for det meste er vann.</p>
</figure>

## Lesegraden blir aldri hundre prosent

Et RFID-oppsett er sannsynlighet, ikke sikkerhet. En tagg kan ligge i en
skyggesone, stå feil vei i forhold til antennen, eller bli overdøvet av de
andre taggene som svarer samtidig.

Derfor er spørsmålet aldri «leser vi alt?», men «hva gjør vi når vi ikke
gjorde det?». Gode løsninger leser samme sending flere ganger fra flere
vinkler, sammenligner mot det som var forventet, og sier fra om avviket – i
stedet for å late som tellingen er komplett. Et anlegg som er bygget på at
lesegraden er hundre prosent, gir feil svar uten å varsle om det, og det er
verre enn å ikke måle.

## RFID, NFC, BLE og UWB

De fire blandes stadig sammen, også av folk som selger dem.

<figure class="fig fig--matrix">
  <p class="fig__title">Hva som er hva</p>
  <table>
    <thead>
      <tr><th scope="col">Teknologi</th><th scope="col">Kort fortalt</th><th scope="col">Typisk bruk</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">RFID (UHF)</th><td>Passive tagger lest på flere meter, mange om gangen</td><td>Varemottak, lagerbeholdning, butikk</td></tr>
      <tr><th scope="row">NFC</th><td>Nær slektning i HF-båndet, med toveiskommunikasjon på et par centimeter</td><td>Betaling med telefon, adgangskort, taggen du skanner på en plakat</td></tr>
      <tr><th scope="row">BLE</th><td>Bluetooth med lavt strømforbruk. Egen sender og eget batteri.</td><td>Sporing av utstyr innendørs, sensorer, telefontilkobling</td></tr>
      <tr><th scope="row">UWB</th><td>Bredbånd som måler avstand ved gangtid, ikke signalstyrke</td><td>Posisjon på desimeternivå – der det ikke holder å vite «i nærheten»</td></tr>
    </tbody>
  </table>
  <figcaption>Den praktiske skillelinjen: RFID og NFC forteller at noe <i>er her</i>. BLE og UWB forteller <i>hvor</i> det er, men krever batteri i hver enhet. Skal du telle tusen varer, er RFID svaret. Skal du finne én tralle i en hall, er det sannsynligvis ikke det.</figcaption>
</figure>

## Hva det faktisk brukes til

Det som har lyktes best, er butikk med mange varianter og høy krav til
beholdningsnøyaktighet – klær særlig, der samme modell finnes i mange
størrelser og farger, og der det å vite hva som faktisk ligger i butikken er
verdt penger.

Ellers: varemottak uten å åpne pallen, utstyrs- og verktøysporing,
tekstilhåndtering i hotell og sykehus, bibliotek, øremerking av dyr,
adgangskontroll, bomringer, skipass og tidtaking i idrett.

Der det *ikke* har slått til, er like opplysende: dagligvare med lav margin per
enhet, der taggkostnaden spiser gevinsten, og alt som er for mye metall eller
for mye væske.

## Personvern

En tagg svarer til den som spør, og den vet ikke hvem som spør. Det er
teknologiens natur, og det er utgangspunktet for innvendingene.

Bekymringen har to deler. Den ene er at en tagg som blir sittende på en vare
etter kjøpet, i prinsippet kan leses av andre senere. Standardene for passiv
UHF har mekanismer for å deaktivere en tagg permanent, men de må faktisk brukes.
Den andre er at flere lesinger av samme nummer over tid blir et mønster – og et
mønster som kan knyttes til en person, er noe annet enn et lagernummer.

Nettopp der ligger det du må vurdere: så lenge nummeret bare følger en pall,
er det varedata. Kan det knyttes til en person – et adgangskort, et
kundeforhold, et kjøretøy – er du i personvernregelverket, og da må bruken
vurderes før den settes i drift, ikke etterpå.

## Hvorfor hypen ikke slo til

Rundt midten av 2000-tallet ble RFID omtalt som det som skulle erstatte
strekkoden i løpet av få år. Store kjeder stilte krav til leverandørene sine om
at pallene skulle merkes, og bransjen snakket om «femøres-taggen» som forutsetningen
for at det skulle lønne seg.

Det gikk ikke slik, og grunnene er verdt å kjenne: taggene kostet mer og lenge
enn ventet, lesegraden i virkelige omgivelser var dårligere enn i demoen, og
gevinsten havnet ofte hos en annen part i kjeden enn den som betalte for
taggene. Teknologien var ikke feil. Regnestykket og forventningene var det.

Det som faktisk har skjedd siden, er stillere og mer solid: taggene er blitt
billigere, leserne bedre, standardene modne – og bruken har funnet de stedene
der regnestykket går opp, i stedet for alle steder på én gang.

## Hva som er verdt å ta med

At teknologien er elegant, men at prosjektet står og faller på integrasjonen.
At frekvensvalget avgjør mer enn noe annet. At metall og væske må avklares
tidlig, med test i de faktiske omgivelsene og ikke på et bord. Og at en
lesegrad under hundre prosent ikke er en feil som skal skjules, men et vilkår
løsningen må håndtere.

*Innholdet er en teknisk gjennomgang, ikke en anbefaling om utstyr eller
leverandør. Personvernvurderingen av en konkret løsning må gjøres i den
sammenhengen den skal brukes.*
