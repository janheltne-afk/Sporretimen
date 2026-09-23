---
title: "Lær noe nytt: EOQ – hvor mye du bør bestille om gangen, og hvorfor svaret er flatt"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - EOQ
  - lagerstyring
  - bestillingsmengde
  - Ford Harris
  - innkjøp
  - lean
topics:
  - De to kostnadene som trekker hver sin veg
  - Formelen fra 1913, og mannen som ble glemt
  - Et gjennomregnet eksempel
  - Den elegante egenskapen ved optimum
  - Hvorfor kurven er flat – og hva det betyr
  - Det modellen forutsetter
  - Lean-angrepet på selve formelen
  - Koblingen til bullwhip
questions:
  - Hva er EOQ?
  - Hvilke to kostnader veies mot hverandre?
  - Hva er formelen, og hvordan brukes den?
  - Hva skjer om jeg bommer på partistørrelsen?
  - Hva forutsetter modellen?
  - Hvorfor liker lean-folk små partier når EOQ sier store?
  - Hva har EOQ med bullwhip-effekten å gjøre?
takeaways:
  - "EOQ veier kostnaden ved å bestille ofte mot kostnaden ved å ha mye på lager."
  - Formelen er kvadratroten av to ganger etterspørsel ganger bestillingskostnad, delt på lagerkostnad.
  - "I optimum er de to kostnadene nøyaktig like store."
  - Kurven er flat – 25 prosent feil partistørrelse koster bare noen få prosent.
  - "Det betyr at du ikke trenger presise tall for å få en god nok beslutning."
  - Modellen forutsetter jevn etterspørsel og øyeblikkelig levering. Begge deler er usant.
  - "Lean angriper ikke svaret, men inngangsdataene: kutt bestillingskostnaden, så faller EOQ."
coverTheme: "EOQ"
image: /images/episoder/eoq-optimal-bestillingsmengde.jpg
imageAlt: "Spørretimen: EOQ – Lær noe nytt. Jan Sindre Heltne i studio."
description: >-
  Hvor mye bør du bestille om gangen? EOQ-formelen forklart med et
  gjennomregnet eksempel, den elegante egenskapen ved optimum, hvorfor
  kostnadskurven er så flat at presisjon knapt betyr noe – og hva lean gjør med
  hele regnestykket.
featured: false
popularityScore: 0
sources:
  - title: "Ford W. Harris – How Many Parts to Make at Once, Factory, The Magazine of Management 10 (1913)"
  - title: "Donald Erlenkotter – Ford Whitman Harris and the Economic Order Quantity Model, Operations Research 38(6), 1990"
    url: https://pubsonline.informs.org/doi/pdf/10.1287/opre.38.6.937
  - title: "Economic order quantity – oversiktsartikkel"
    url: https://en.wikipedia.org/wiki/Economic_order_quantity
related:
  - mrp-produksjonsplanlegging
  - bullwhip-effekten
  - lean-forklart
---

MRP-episoden endte med et løst spørsmål. Regnestykket der sa at du trengte 1400
skruer – men i praksis bestiller ingen 1400 skruer. Man bestiller en eske, eller
ti esker, eller et helt års forbruk.

Hvor mye bør man egentlig bestille om gangen?

Det spørsmålet har et svar, og det er over hundre år gammelt.

## De to kostnadene

Hele problemet er at to kostnader trekker i hver sin retning.

<figure class="fig fig--compare">
  <p class="fig__title">Bestill ofte, eller bestill mye</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Små, hyppige bestillinger</p>
      <h4>Billig lager, dyr bestilling</h4>
      <ul>
        <li>Lite kapital bundet i varer</li>
        <li>Lite plass i bruk</li>
        <li>Men: mange bestillinger i året</li>
        <li>Hver bestilling koster administrasjon, frakt og omstilling</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Store, sjeldne bestillinger</p>
      <h4>Billig bestilling, dyrt lager</h4>
      <ul>
        <li>Få bestillinger i året</li>
        <li>Rabatter og full lastebil</li>
        <li>Men: mye kapital bundet</li>
        <li>Plass, svinn, forsikring, kurans</li>
      </ul>
    </div>
  </div>
  <figcaption>Legg merke til at ingen av kolonnene er feil. Begge er fornuftige, og de er fornuftige av motsatte grunner. Når to kostnader oppfører seg slik – den ene faller når den andre stiger – finnes det et punkt der summen er lavest. Å finne det punktet er hele EOQ.</figcaption>
</figure>

## Formelen fra 1913

**Ford Whitman Harris** publiserte svaret i 1913, i en artikkel med den nøkterne
tittelen *How Many Parts to Make at Once*, i bladet *Factory*. Han var ingeniør,
oppfinner og senere patentadvokat – og hadde ingen formell utdanning ut over
videregående.

Historien har en merkelig krøll. Formelen ble kjent som **Wilson-formelen**, etter
konsulenten R. H. Wilson, som brukte og analyserte den grundig. Harris' egen
artikkel ble borte, og ble ikke gjenoppdaget før i 1988 – tre kvart århundre
etter at den ble skrevet.

<figure class="fig fig--rule">
  <p class="fig__claim">EOQ er kvadratroten av to ganger etterspørselen ganger bestillingskostnaden, delt på lagerkostnaden.</p>
  <p class="fig__example"><b>D</b> er etterspørselen per år, i antall enheter.<br /><b>S</b> er hva det koster å utløse én bestilling – administrasjon, frakt, omstilling av maskinen. Merk: per bestilling, ikke per enhet.<br /><b>H</b> er hva det koster å ha én enhet liggende i ett år – kapitalkostnad, plass, svinn, forsikring.<br /><b>Og så:</b> EOQ = √(2DS / H)</p>
</figure>

Det er verdt å stoppe ved kvadratroten et øyeblikk, for den forteller noe: dobler
du etterspørselen, dobler du ikke partiet. Du ganger det med 1,41.

## Et regnestykke

Ta skruene fra bokhyllefabrikken.

<figure class="fig fig--flow">
  <p class="fig__title">Fra tre tall til ett svar</p>
  <ol>
    <li><span class="fig__box"><b>Etterspørsel: 100 000 skruer i året</b><small>D. Hentet fra produksjonsplanen.</small></span></li>
    <li><span class="fig__box"><b>Bestillingskostnad: 500 kroner</b><small>S. Det koster det samme enten du bestiller 100 eller 100 000.</small></span></li>
    <li><span class="fig__box"><b>Lagerkostnad: 1 krone per skrue per år</b><small>H. Kapital, plass og risiko.</small></span></li>
    <li><span class="fig__box"><b>EOQ = √(2 × 100 000 × 500 / 1) = 10 000</b><small>Bestill 10 000 skruer om gangen, altså ti ganger i året.</small></span></li>
  </ol>
  <figcaption>Legg merke til hvor lite som trengs. Tre tall, én kvadratrot. Det vanskelige ved EOQ er ikke matematikken – det er å finne ut hva bestillingskostnaden og lagerkostnaden faktisk er i din egen virksomhet, og de tallene finnes sjelden ferdig i noe system.</figcaption>
</figure>

## Det elegante ved optimum

Regn ut hva de to kostnadene blir ved 10 000, og noe pent skjer.

<figure class="fig fig--rule">
  <p class="fig__claim">I optimum er bestillingskostnaden og lagerkostnaden nøyaktig like store.</p>
  <p class="fig__example"><b>Bestillingskostnad:</b> 100 000 / 10 000 = 10 bestillinger, ganger 500 kroner = <b>5 000 kroner.</b><br /><b>Lagerkostnad:</b> gjennomsnittslageret er halve partiet, altså 5 000 skruer, ganger 1 krone = <b>5 000 kroner.</b><br /><b>Sum: 10 000 kroner i året.</b><br /><b>Og dette er ikke tilfeldig:</b> det gjelder alltid. Er de to kostnadene ulike, er du ikke i optimum – og det gir deg en rask måte å sjekke et svar på uten å regne formelen om igjen.</p>
</figure>

## Kurven er flat

Her kommer den mest nyttige innsikten i hele episoden, og den er nesten alltid
utelatt når EOQ undervises.

<figure class="fig fig--matrix">
  <p class="fig__title">Hva det koster å bomme</p>
  <table>
    <thead><tr><th scope="col">Parti</th><th scope="col">Bestilling</th><th scope="col">Lager</th><th scope="col">Total</th><th scope="col">Mot optimum</th></tr></thead>
    <tbody>
      <tr><th scope="row">2 500</th><td>20 000</td><td>1 250</td><td>21 250</td><td>+112 %</td></tr>
      <tr><th scope="row">5 000</th><td>10 000</td><td>2 500</td><td>12 500</td><td>+25 %</td></tr>
      <tr><th scope="row">7 500</th><td>6 667</td><td>3 750</td><td>10 417</td><td>+4,2 %</td></tr>
      <tr><th scope="row">10 000</th><td>5 000</td><td>5 000</td><td>10 000</td><td>optimum</td></tr>
      <tr><th scope="row">12 500</th><td>4 000</td><td>6 250</td><td>10 250</td><td>+2,5 %</td></tr>
      <tr><th scope="row">15 000</th><td>3 333</td><td>7 500</td><td>10 833</td><td>+8,3 %</td></tr>
      <tr><th scope="row">20 000</th><td>2 500</td><td>10 000</td><td>12 500</td><td>+25 %</td></tr>
    </tbody>
  </table>
  <figcaption>Se på de tre midterste radene. Bommer du 25 prosent i begge retninger, koster det deg mellom 2,5 og 4,2 prosent. Kurven er flat rundt bunnen, og det har en praktisk konsekvens folk sjelden trekker: du trenger <em>ikke</em> presise tall for lagerkostnad og bestillingskostnad. Et grovt anslag gir deg en beslutning som er god nok. Det er først når du bommer med en faktor på fire – 2 500 mot 10 000 – at det virkelig svir.</figcaption>
</figure>

Dette er verdt å si høyt, fordi det snur et vanlig innvendingsargument. «Vi vet
ikke hva lagerkostnaden vår egentlig er» er ikke en grunn til å la være å bruke
EOQ. Det er en grunn til å bruke et anslag og gå videre.

## Hva modellen forutsetter

Formelen er så enkel fordi den antar bort mye. Forutsetningene er verdt å kunne,
for de sier hvor modellen ikke passer.

<figure class="fig fig--matrix">
  <p class="fig__title">Fire antakelser</p>
  <table>
    <thead><tr><th scope="col">Antakelse</th><th scope="col">Når den brister</th></tr></thead>
    <tbody>
      <tr><th scope="row">Jevn, kjent etterspørsel</th><td>Sesongvarer, kampanjer, trender. Alt som svinger.</td></tr>
      <tr><th scope="row">Øyeblikkelig levering</th><td>Ledetid finnes. Den håndteres med bestillingspunkt, ikke av EOQ.</td></tr>
      <tr><th scope="row">Fast pris per enhet</th><td>Kvantumsrabatter gjør kurven hakkete, og optimum kan hoppe.</td></tr>
      <tr><th scope="row">Ingen begrensning på plass eller kapital</th><td>Lageret har en vegg, og budsjettet en grense.</td></tr>
    </tbody>
  </table>
  <figcaption>Det er lett å avfeie modellen på grunn av disse. Men husk den flate kurven: selv når forutsetningene er grovt brutt, gir EOQ som regel et parti som er nærmere riktig enn magefølelsen til den som bestiller. Modellen er en retning, ikke en fasit.</figcaption>
</figure>

## Lean-angrepet

Her blir det interessant, og det er her EOQ møter Toyota.

EOQ tar bestillingskostnaden som et faktum og finner det beste partiet gitt den.
Lean-tradisjonen gjør noe helt annet: den nekter å godta tallet, og angriper det.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">Hva som skjer med EOQ når bestillingskostnaden kuttes</p>
  <ol>
    <li><span class="fig__box"><b>S = 500 kr → EOQ = 10 000</b><small>Ti bestillinger i året. Total kostnad 10 000 kroner.</small></span></li>
    <li><span class="fig__box"><b>S = 125 kr → EOQ = 5 000</b><small>Tjue bestillinger. Total kostnad 5 000 kroner.</small></span></li>
    <li><span class="fig__box"><b>S = 50 kr → EOQ = 3 162</b><small>Over tretti bestillinger. Total kostnad 3 162 kroner.</small></span></li>
    <li><span class="fig__box"><b>S = 5 kr → EOQ = 1 000</b><small>Hundre bestillinger i året, og kostnaden nede i en tidel.</small></span></li>
  </ol>
  <figcaption>Et kutt fra 500 til 50 kroner får EOQ til å falle 68 prosent. Dette er hele poenget med omstillingsarbeid i lean: bruker du en dag på å gjøre en maskinomstilling fra fire timer til ti minutter, har du ikke bare spart de timene – du har flyttet optimum, og gjort små partier lønnsomme. Lean og EOQ er ikke uenige. Lean endrer én av inngangsdataene, og lar formelen gi et nytt svar.</figcaption>
</figure>

## Og koblingen til bullwhip

Til slutt en påminnelse om at hver optimering har en pris et annet sted.

Store partier er akkurat det bullwhip-episoden pekte på som årsak nummer to: når
du bestiller i esker og paller i stedet for etter forbruk, ser leverandøren
svingninger som ikke finnes. EOQ gir deg det billigste partiet **for deg**, målt
på dine to kostnader.

Det regnestykket inneholder ikke hva partiet koster leddet over. Og det er
nettopp derfor mindre og hyppigere leveranser dukker opp som tiltak mot bullwhip –
det er den samme avveiningen, sett fra kjeden i stedet for fra lageret.

## Hva som er verdt å ta med

At EOQ veier bestillingskostnad mot lagerkostnad, og at begge er reelle.

At formelen er kvadratroten av to ganger etterspørsel ganger bestillingskostnad,
delt på lagerkostnad.

At de to kostnadene er like store i optimum, og at det er en rask kontroll.

At kurven er flat: 25 prosent feil koster noen få prosent, så grove anslag holder.

At modellen antar jevn etterspørsel og øyeblikkelig levering, og at ingen av
delene stemmer.

Og at lean ikke er uenig i formelen – den kutter bestillingskostnaden, og lar
svaret bli mindre av seg selv.

*Tallene i eksempelet er valgt for å gi runde svar, og er regnet ut på forhånd slik
at de kan kontrolleres for hånd. Den historiske framstillingen bygger på Harris'
artikkel fra 1913 og på Erlenkotters gjennomgang i Operations Research fra 1990.*
