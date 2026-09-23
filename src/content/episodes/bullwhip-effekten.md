---
title: "Lær noe nytt: Bullwhip-effekten – hvorfor små svingninger i butikk blir store kriser i fabrikken"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - bullwhip
  - lagerstyring
  - forsyningskjede
  - etterspørsel
  - prognoser
  - dagligvare
topics:
  - Hva effekten er, og hvor navnet kommer fra
  - Bleiene som avslørte den
  - De fire årsakene
  - Sikkerhetsmargin på toppen av sikkerhetsmargin
  - Bestillinger i hele paller
  - Kampanjen som ser ut som etterspørsel
  - Å bestille mer enn du trenger, fordi alle andre gjør det
  - Hva som faktisk demper den
questions:
  - Hva er bullwhip-effekten?
  - Hvorfor blir svingningene større lenger opp i kjeden?
  - Hva var Procter & Gamble-eksempelet?
  - Hvorfor forsterker kampanjer effekten?
  - Hva skjedde med dopapir i 2020?
  - Hvordan kan man dempe effekten?
  - Hva har dette med lean å gjøre?
takeaways:
  - "Bullwhip-effekten er at bestillingene svinger mer enn salget, og at svingningen vokser oppover i kjeden."
  - "Procter & Gamble fant at bleiebestillingene svingte mer enn babyene kunne forklare."
  - Lee, Padmanabhan og Whang pekte på fire årsaker – og alle fire er rasjonelle valg.
  - Hvert ledd legger på sin egen sikkerhetsmargin, og marginene ganges sammen.
  - Kampanjer skaper et etterspørselstopp som er flytting av kjøp, ikke nytt forbruk.
  - "Ved knapphet bestiller alle mer enn de trenger, og gjør knappheten verre."
  - Det som demper effekten er delt informasjon, ikke bedre gjetting i hvert ledd.
coverTheme: "Bullwhip-effekten"
image: /images/episoder/bullwhip-effekten.jpg
imageAlt: "Spørretimen: Bullwhip-effekten – Lær noe nytt. Jan Sindre Heltne i studio."
description: >-
  Hvorfor en liten endring i butikkhylla blir en stor svingning i fabrikken:
  bullwhip-effekten forklart, med bleiene som avslørte den, de fire årsakene,
  dopapiret i 2020 – og hva som faktisk demper den.
featured: false
popularityScore: 0
sources:
  - title: "Hau L. Lee, V. Padmanabhan og Seungjin Whang – Information Distortion in a Supply Chain: The Bullwhip Effect, Management Science 43(4), 1997"
    url: https://pubsonline.informs.org/doi/10.1287/mnsc.43.4.546
  - title: "Jay W. Forrester – Industrial Dynamics (1961), der fenomenet først ble beskrevet"
related:
  - lean-forklart
  - erp-wms-integrasjon
  - container-teu-feu
---

En butikk selger litt flere pakker enn vanlig én uke. Ikke mye – noen få prosent.

Fire ledd lenger opp står en fabrikk og bygger ut kapasitet, eller en leverandør
sitter med et lager de ikke blir kvitt.

Det er **bullwhip-effekten**: bestillingene svinger mer enn salget, og svingningen
blir større for hvert ledd oppover. Som en pisk, der en liten bevegelse i
håndtaket blir et smell i tuppen.

## Bleiene som avslørte den

Navnet kom på 1990-tallet, men fenomenet ble beskrevet allerede av **Jay
Forrester** i *Industrial Dynamics* i 1961. Gjennombruddet kom med en artikkel av
**Hau Lee, V. Padmanabhan og Seungjin Whang** i *Management Science* i 1997, og
den åpner med et eksempel som er blitt stående.

<figure class="fig fig--rule">
  <p class="fig__claim">Procter &amp; Gamble fant at bleiebestillingene fra distributørene svingte mer enn forbruket kunne forklare.</p>
  <p class="fig__example"><b>Hvorfor det er et så godt eksempel:</b> bleieforbruk er omtrent det mest forutsigbare som finnes. Antall babyer endrer seg ikke fra uke til uke, og en baby bruker omtrent like mange bleier hver dag.<br /><b>Likevel svingte bestillingene kraftig.</b> Variasjonen kom ikke fra markedet. Den ble skapt inne i forsyningskjeden selv.<br /><b>Samme artikkel:</b> hos Hewlett-Packard svingte forhandlernes bestillinger til skriverdivisjonen langt mer enn kundenes etterspørsel – og bestillingene videre til kretskortdivisjonen svingte enda mer.</p>
</figure>

Det siste er selve poenget. Det er ikke bare at svingningen finnes. Den **vokser**
for hvert ledd du går oppover.

## De fire årsakene

Artikkelen peker på fire kilder: **demand signal processing, rationing game, order
batching og price variations.** Det viktigste ved dem er noe som overrasker: ingen
av dem forutsetter at noen gjør en feil. Alle fire er rasjonelle valg for det
enkelte leddet.

<figure class="fig fig--matrix">
  <p class="fig__title">Fire årsaker, og hvordan de ser ut i praksis</p>
  <table>
    <thead><tr><th scope="col">Årsak</th><th scope="col">Slik den ser ut i en butikkjede</th></tr></thead>
    <tbody>
      <tr><th scope="row">Prognose på prognose</th><td>Hvert ledd lager sin egen prognose ut fra bestillingene fra leddet under – ikke ut fra faktisk salg.</td></tr>
      <tr><th scope="row">Bestilling i puljer</th><td>Man bestiller hele paller eller hele biler, ikke det man solgte.</td></tr>
      <tr><th scope="row">Kampanjer</th><td>Prisen svinger, og kjøpene flyttes i tid.</td></tr>
      <tr><th scope="row">Spill om knapphet</th><td>Når noe er utsolgt, bestiller alle mer enn de trenger for å få nok.</td></tr>
    </tbody>
  </table>
  <figcaption>At alle fire er rasjonelle, er grunnen til at effekten er så vanskelig å bli kvitt. Du kan ikke fjerne den ved å be folk slutte å være dumme. Hvert ledd oppfører seg fornuftig ut fra det det ser – problemet er at det ikke ser nok.</figcaption>
</figure>

## Margin på margin

Den første årsaken er den mest undervurderte, og den lar seg regne på.

Hvert ledd legger på en sikkerhetsmargin for å unngå å gå tomt. Det er fornuftig.
Problemet er at leddet over ikke ser salget – det ser *bestillingen*, som allerede
inneholder marginen. Så legger det på sin egen.

<figure class="fig fig--flow">
  <p class="fig__title">Ti prosent ekstra, fire ganger</p>
  <ol>
    <li><span class="fig__box"><b>Butikken selger 100</b><small>Det faktiske forbruket. Det eneste ekte tallet i hele kjeden.</small></span></li>
    <li><span class="fig__box"><b>Butikken bestiller 110</b><small>Litt ekstra, i tilfelle det tar seg opp.</small></span></li>
    <li><span class="fig__box"><b>Grossisten bestiller 121</b><small>Ser 110, legger på ti prosent.</small></span></li>
    <li><span class="fig__box"><b>Produsenten planlegger 133</b><small>Ser 121, legger på ti prosent.</small></span></li>
    <li><span class="fig__box"><b>Råvareleverandøren får 146</b><small>Førtiseks prosent over det som faktisk ble solgt.</small></span></li>
  </ol>
  <figcaption>Regnestykket er 1,1 opphøyd i fire, altså 1,46. Ingen har gjort noe galt. Hvert ledd la på en helt forsvarlig margin. Men marginene <em>ganges</em>, de legges ikke sammen – og det er derfor forsterkningen blir så kraftig med bare noen få ledd. Og går salget ned igjen neste uke, går hele kjeden i revers med samme kraft.</figcaption>
</figure>

## Bestillinger i hele paller

Den andre årsaken er fysisk, og den er innebygget i måten varer fraktes på.

En butikk som selger fire pakker om dagen, bestiller ikke fire pakker. Den
bestiller en kartong, eller venter til den kan fylle en pall, fordi frakten koster
det samme enten bilen er full eller halvfull.

<figure class="fig fig--compare">
  <p class="fig__title">Hva leverandøren ser</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Det som skjer i butikken</p>
      <h4>Jevnt salg</h4>
      <ul>
        <li>Fire pakker mandag</li>
        <li>Fire pakker tirsdag</li>
        <li>Fire pakker onsdag</li>
        <li>Helt forutsigbart</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Det leverandøren ser</p>
      <h4>Null, null, hele pallen</h4>
      <ul>
        <li>Ingenting på flere dager</li>
        <li>Så en stor bestilling</li>
        <li>Så ingenting igjen</li>
        <li>Ser ut som voldsom variasjon</li>
      </ul>
    </div>
  </div>
  <figcaption>Fra leverandørens side er dette umulig å skille fra ekte svingninger i etterspørselen. Og har mange butikker samme bestillingsdag, treffer alle puljene samtidig. Da får leverandøren en topp som ikke finnes i virkeligheten – den er laget av kalenderen, ikke av kundene.</figcaption>
</figure>

## Kampanjen som ser ut som etterspørsel

Den tredje årsaken er den mest gjenkjennelige i norsk dagligvare, og den er
selvpåført.

<figure class="fig fig--cycle">
  <p class="fig__title">Kampanjesyklusen</p>
  <ol>
    <li><span class="fig__step">1</span><b>Kampanje</b><small>Prisen settes ned. Salget skyter i været.</small></li>
    <li><span class="fig__step">2</span><b>Kundene hamstrer</b><small>Folk kjøper tre pakker i stedet for én, fordi det lønner seg.</small></li>
    <li><span class="fig__step">3</span><b>Butikken fyller opp</b><small>Og kjeden bestiller stort inn mot kampanjen.</small></li>
    <li><span class="fig__step">4</span><b>Etterpå: stillhet</b><small>Skapene hjemme er fulle. Salget faller under normalt.</small></li>
    <li><span class="fig__step">5</span><b>Prognosen forvirres</b><small>Neste kampanje planlegges ut fra tall som inneholder forrige kampanje.</small></li>
  </ol>
  <figcaption>Det avgjørende er at en kampanje sjelden skaper nytt forbruk. Ingen spiser mer knekkebrød fordi det var på tilbud – de kjøper det de uansett ville kjøpt, bare tidligere og billigere. Toppen er altså <em>flytting av kjøp i tid</em>, ikke vekst. Men i salgstallene ser de to helt like ut, og det er der prognosen ryker.</figcaption>
</figure>

## Spillet om knapphet

Den fjerde årsaken er den som gjør kriser verre, og den er den mest menneskelige.

Når noe er i ferd med å bli utsolgt, og leverandøren begynner å fordele det som
finnes, lønner det seg å bestille mer enn du trenger. Får du bare halvparten av
det du ber om, ber du om det dobbelte.

<figure class="fig fig--rule">
  <p class="fig__claim">Dopapiret i 2020 er skolebokeksempelet, og det handlet ikke om at noen gikk tom for papir.</p>
  <p class="fig__example"><b>Det som faktisk endret seg:</b> folk var hjemme hele døgnet i stedet for på jobb og skole. Forbruket flyttet seg fra storpakninger på arbeidsplasser til vanlige pakker i butikk. Samlet forbruk endret seg lite.<br /><b>Det som utløste smellet:</b> tomme hyller ble filmet og delt. Folk kjøpte to pakker i stedet for én. Butikkene bestilte ekstra. Kjedene bestilte ekstra på toppen.<br /><b>Hvorfor det er bullwhip og ikke bare panikk:</b> hvert ledd reagerte på <em>bestillingene</em> fra leddet under, ikke på forbruket. Og bestillingene inneholdt allerede alle de andres frykt.<br /><b>Og baksiden:</b> da det roet seg, satt kjedene med lager de ikke ble kvitt, fordi kundene hadde fulle skap.</p>
</figure>

Det samme mønsteret gjentok seg med halvledere i årene etter: bilprodusenter kuttet
bestillinger da pandemien startet, og da etterspørselen tok seg opp igjen, sto de
bakerst i køen – og bestilte da mer enn de trengte for å sikre seg.

## Hva som faktisk demper den

Her er den viktigste innsikten, og den går på tvers av hva man skulle tro.

<figure class="fig fig--compare">
  <p class="fig__title">To måter å møte problemet på</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Virker dårlig</p>
      <h4>Gjett bedre i hvert ledd</h4>
      <ul>
        <li>Bedre prognosemodell hos hver enkelt</li>
        <li>Større sikkerhetslager for å tåle svingningen</li>
        <li>Flinkere innkjøpere</li>
        <li>Problemet: alle gjetter fortsatt på feil tall</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Virker</p>
      <h4>Del det ekte tallet</h4>
      <ul>
        <li>Kassadata deles oppover i kjeden</li>
        <li>Alle planlegger mot faktisk salg, ikke mot bestillinger</li>
        <li>Mindre og hyppigere leveranser i stedet for store puljer</li>
        <li>Jevne priser framfor store kampanjer</li>
        <li>Fordeling etter historisk salg, så det ikke lønner seg å overbestille</li>
      </ul>
    </div>
  </div>
  <figcaption>Poenget er at bullwhip ikke er et prognoseproblem. Det er et <em>informasjonsproblem</em>. Så lenge hvert ledd bare ser bestillingen fra leddet under, planlegger de mot et tall som allerede er forvrengt – og da hjelper det ikke hvor god modellen er. Walmart er det mest kjente eksempelet på det motsatte: å dele kassadata oppover med leverandørene, slik at alle ser det samme.</figcaption>
</figure>

## Koblingen til lean

Til slutt en nyanse som er verdt å ha med, fordi de to temaene henger tett sammen.

Lean fjerner lager med vilje, for at problemer skal bli synlige. Bullwhip-effekten
er nettopp et problem som blir mer smertefullt når bufferne er borte: uten lager
forplanter en falsk topp seg umiddelbart gjennom hele kjeden.

Det er ikke et argument mot lean. Men det forklarer hvorfor lean og delt
informasjon må komme sammen. Fjerner du lageret uten å dele tallene, har du
fjernet støtdemperen og beholdt humpene.

## Hva som er verdt å ta med

At bullwhip-effekten er at bestillingene svinger mer enn salget, og at svingningen
vokser for hvert ledd oppover.

At Procter & Gamble oppdaget den på bleier – det mest forutsigbare produktet som
finnes.

At de fire årsakene alle er rasjonelle, og at det er derfor effekten er så
seiglivet.

At sikkerhetsmarginer ganges sammen, ikke legges sammen.

At en kampanjetopp er flytting av kjøp i tid, ikke ny etterspørsel.

Og at løsningen ikke er å gjette bedre, men å dele det ekte tallet.

*Framstillingen bygger på Lee, Padmanabhan og Whangs artikkel i Management
Science fra 1997, der Procter & Gamble- og Hewlett-Packard-eksemplene og de fire
årsakene er hentet fra. Regneeksemplet med ti prosent er en illustrasjon, ikke tall
fra en bestemt kjede.*
