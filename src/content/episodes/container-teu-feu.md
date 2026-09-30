---
title: "Lær noe nytt: TEU, FEU og containeren – målene som styrer verdenshandelen"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - container
  - TEU
  - FEU
  - ISO 6346
  - sjøtransport
  - standardisering
topics:
  - Hva TEU faktisk er, og hvorfor det ikke er en container
  - FEU, og hvorfor 40-foteren er den vanlige
  - Høyden som ikke står i navnet
  - De andre typene – reefer, open top, flat rack, tank
  - Nummeret på siden, og hva hver del betyr
  - Størrelses- og typekoden
  - Å fylle på vekt eller på volum
  - Hvorfor standarden var viktigere enn boksen
questions:
  - Hva betyr TEU?
  - Hva er forskjellen på TEU og FEU?
  - Hvor stor er en 20-fots container?
  - Hva er en high cube?
  - Hva betyr bokstavene og tallene på siden av containeren?
  - Hva er forskjellen på å «cube out» og å «weigh out»?
  - Hvorfor er containeren så viktig?
takeaways:
  - "TEU er en måleenhet, ikke en container. Det er en 20-foter regnet om til en tellenhet."
  - En 40-foter er 2 TEU, og kalles FEU. De fleste containere i omløp er 40-fotere.
  - "High cube er en fot høyere enn standard, og telles likevel som samme antall TEU."
  - "Nummeret på siden følger ISO 6346: eierkode, utstyrskode, serienummer og kontrollsiffer."
  - Du går tom for volum eller for vekt – sjelden begge samtidig.
  - Det verdifulle var aldri boksen, men at alle ble enige om målene.
coverTheme: "Containeren"
image: /images/episoder/container-teu-feu.jpg
imageAlt: "Spørretimen: Containeren – Lær noe nytt. Jan Sindre Heltne i studio."
description: >-
  TEU, FEU og containerstandardene forklart: hva måleenheten egentlig teller,
  hvorfor 40-foteren dominerer, hva nummeret på siden betyr, og hvorfor
  standardiseringen var viktigere enn selve boksen.
calculator: teu
featured: false
popularityScore: 0
sources:
  - title: "BIC – Container Identification Number (ISO 6346)"
    url: https://www.bic-code.org/identification-number/
  - title: "BIC – Container Size and Type Code"
    url: https://www.bic-code.org/size-type-code/
  - title: "ISO 6346:2022 – Freight containers: Coding, identification and marking"
    url: https://www.iso.org/standard/83558.html
related:
  - gs1-strekkoder
  - sjoruter-suez-panama-arktis
  - incoterms-2020
---

Du har hørt tallet: et skip tar 24 000 TEU. Men TEU er ikke en container, og et
skip med 24 000 TEU har ikke 24 000 containere om bord.

Denne episoden handler om måleenhetene, om hva som faktisk står skrevet på siden
av en container, og om hvorfor standardiseringen betydde langt mer enn boksen selv.

## TEU er en tellenhet

<figure class="fig fig--rule">
  <p class="fig__claim">TEU står for twenty-foot equivalent unit – en 20-fots container regnet om til en tellenhet.</p>
  <p class="fig__example"><b>Hvorfor det trengs:</b> containere finnes i flere lengder. Skal du oppgi kapasitet, trenger du én felles enhet i stedet for en liste.<br /><b>Hva det betyr i praksis:</b> en 20-foter er 1 TEU. En 40-foter er 2 TEU.<br /><b>Fellen:</b> «24 000 TEU» er ikke antall containere. Er halvparten av plassene fylt med 40-fotere, er antallet bokser langt lavere enn tallet antyder.</p>
</figure>

**FEU** er den samme logikken for 40-foteren – forty-foot equivalent unit. 1 FEU er
2 TEU. I praksis brukes FEU mest i prising, mens TEU brukes til kapasitet.

Og her er det som overrasker folk: selv om alt telles i 20-fots enheter, er
40-foteren den vanlige containeren. Du betaler ikke dobbelt for dobbel lengde,
fordi mye av kostnaden er knyttet til håndteringen av én enhet – ett løft, én
lasteplass, ett dokument.

## Høyden som ikke står i navnet

Navnene sier lengde. De sier ingenting om høyde, og det er her en praktisk
felle ligger.

<figure class="fig fig--matrix">
  <p class="fig__title">De vanlige typene</p>
  <table>
    <thead><tr><th scope="col">Type</th><th scope="col">Hva den er</th><th scope="col">TEU</th></tr></thead>
    <tbody>
      <tr><th scope="row">20' standard</th><td>Grunnenheten. Tung last som ikke tar stor plass.</td><td>1</td></tr>
      <tr><th scope="row">40' standard</th><td>Dobbel lengde, samme høyde.</td><td>2</td></tr>
      <tr><th scope="row">40' high cube</th><td>Som over, men en fot høyere. Mer volum, samme gulvflate.</td><td>2</td></tr>
      <tr><th scope="row">45' high cube</th><td>Lengre igjen. Brukes en del i Europa.</td><td>2 (regnes ofte slik)</td></tr>
    </tbody>
  </table>
  <figcaption>Legg merke til høyre kolonne. En high cube gir mer volum, men teller likevel som to TEU. Det er én av grunnene til at TEU-tall er en grov størrelse: to skip med samme TEU-kapasitet kan ta ulik mengde gods, avhengig av hva slags bokser som faktisk står der.</figcaption>
</figure>

Regnestykket er lett å gjøre selv, og det er først når du gjør det at tallet
slutter å være abstrakt. Skriv inn en blanding og se hva den blir i TEU – og
hvor mange bokser det faktisk er.

<form class="kalk" data-kalkulator="teu">
  <p class="kalk__title">Regn om en blanding til TEU</p>
  <div class="kalk__rows">
    <label class="kalk__row"><span class="kalk__navn">20' standard</span><span class="kalk__faktor">1 TEU</span><input class="kalk__inn" type="number" min="0" step="1" value="1000" inputmode="numeric" data-teu="1" /></label>
    <label class="kalk__row"><span class="kalk__navn">40' standard</span><span class="kalk__faktor">2 TEU</span><input class="kalk__inn" type="number" min="0" step="1" value="2000" inputmode="numeric" data-teu="2" /></label>
    <label class="kalk__row"><span class="kalk__navn">40' high cube</span><span class="kalk__faktor">2 TEU</span><input class="kalk__inn" type="number" min="0" step="1" value="1500" inputmode="numeric" data-teu="2" /></label>
    <label class="kalk__row"><span class="kalk__navn">45' high cube</span><span class="kalk__faktor">2 TEU</span><input class="kalk__inn" type="number" min="0" step="1" value="0" inputmode="numeric" data-teu="2" /></label>
  </div>
  <div class="kalk__ut" aria-live="polite">
    <p class="kalk__tall"><b data-ut="teu">8 000</b><small>TEU</small></p>
    <p class="kalk__tall"><b data-ut="bokser">4 500</b><small>bokser</small></p>
    <p class="kalk__tall"><b data-ut="snitt">1,78</b><small>TEU per boks</small></p>
  </div>
  <p class="kalk__skip"><span>Og et skip med kapasitet</span><input class="kalk__inn" type="number" min="0" step="100" value="24000" inputmode="numeric" data-skip aria-label="Skipets kapasitet i TEU" /><span>TEU:</span></p>
  <p class="kalk__note" data-ut="melding">Et skip på 24 000 TEU tar omtrent 13 500 bokser med denne blandingen.</p>
</form>

Legg merke til hva som skjer når du skrur opp andelen 40-fotere: TEU-tallet står
stille, men antallet bokser faller. Det er hele grunnen til at et skip på
24 000 TEU aldri har 24 000 containere om bord.

Ved siden av de tørre boksene finnes egne typer for last som ikke passer i en
lukket kasse: **reefer** med eget kjøleanlegg, **open top** for last som må heises
inn ovenfra, **flat rack** for det som er for bredt eller for høyt, og **tank** for
væske. Alle bruker de samme ytre målene i hjørnene, og det er hele poenget – de
kan håndteres av det samme utstyret.

## Nummeret på siden

Hver container har et unikt nummer, og det er bygget opp etter en standard:
ISO 6346. Det er elleve tegn, og hver del har en jobb.

<figure class="fig fig--flow">
  <p class="fig__title">De fire delene</p>
  <ol>
    <li><span class="fig__box"><b>Eierkode – tre bokstaver</b><small>Identifiserer eier eller hovedoperatør. Kodene er registrert hos BIC, som har ført registeret siden 1970.</small></span></li>
    <li><span class="fig__box"><b>Utstyrskode – én bokstav</b><small>U for fraktcontainere, J for avtakbart tilleggsutstyr, Z for tilhengere og chassis.</small></span></li>
    <li><span class="fig__box"><b>Serienummer – seks siffer</b><small>Eieren velger selv.</small></span></li>
    <li><span class="fig__box"><b>Kontrollsiffer – ett siffer</b><small>Regnes ut fra de ti foregående, og avslører feillesing og feiltasting.</small></span></li>
  </ol>
  <figcaption>Kjenner du GS1-episoden igjen her, er det ikke tilfeldig. Prinsippet er nøyaktig det samme: en utsteder deler ut et prefiks, eieren fyller ut resten selv, og et kontrollsiffer på slutten gjør at systemene fanger opp tastefeil. Selve utregningen for containere er en annen enn i GS1 og er spesifisert i ISO 6346 – BIC har en kalkulator for den.</figcaption>
</figure>

Under nummeret står ofte en **størrelses- og typekode** på fire tegn. Det første
sier noe om lengden, det andre om høyden, og de to siste om hvilken type container
det er. Det er den koden et terminalsystem leser for å vite om boksen er en tørr
40-fots high cube eller en reefer.

## Vekt eller volum

Dette er den mest praktiske delen av episoden, og den gjelder alle som noen gang
har bestilt en container.

<figure class="fig fig--compare">
  <p class="fig__title">To måter å gå tom på</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Cube out</p>
      <h4>Full på volum</h4>
      <ul>
        <li>Containeren er full, men langt under vektgrensen</li>
        <li>Typisk lett og voluminøst: puter, emballasje, plast</li>
        <li>Her lønner høyde seg – high cube gir mer for samme løft</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Weigh out</p>
      <h4>Full på vekt</h4>
      <ul>
        <li>Vektgrensen er nådd med containeren halvtom</li>
        <li>Typisk tungt og kompakt: væske, metall, stein, maskindeler</li>
        <li>Her er 20-foteren ofte riktig valg</li>
      </ul>
    </div>
  </div>
  <figcaption>Det er dette som forklarer hvorfor tung last ofte går i 20-fotere mens lett last går i 40-fotere: du får ikke bruk for lengden hvis du uansett når vektgrensen først. En erfaren speditør vet hvilken av de to som binder, før containeren bestilles.</figcaption>
</figure>

Vektgrensene er ikke bare et spørsmål om hva containeren tåler. De henger også
sammen med hva kranene, chassisene og vegnettet på begge sider tåler – og
vegvekt er en nasjonal regel, ikke en internasjonal.

## Hvorfor standarden var viktigere enn boksen

Til slutt det egentlige poenget, som er det samme som i strekkodeepisoden.

<figure class="fig fig--compare">
  <p class="fig__title">Før og etter</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Stykkgods</p>
      <h4>Alt håndteres for seg</h4>
      <ul>
        <li>Sekker, kasser og tønner lastes enkeltvis</li>
        <li>Mange hender per tonn</li>
        <li>Lang liggetid i havn</li>
        <li>Svinn og skade underveis</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Container</p>
      <h4>Alt håndteres likt</h4>
      <ul>
        <li>Én boks, ett løft, uansett innhold</li>
        <li>Samme hjørnebeslag over hele verden</li>
        <li>Skip, tog og bil bruker samme enhet</li>
        <li>Forseglet fra avsender til mottaker</li>
      </ul>
    </div>
  </div>
  <figcaption>En stålkasse er ikke en oppfinnelse noen kan ta patent på. Det verdifulle var enigheten: at hjørnene sitter på nøyaktig samme sted på hver eneste container i verden, slik at et hvilket som helst løfteåk passer. Uten den avtalen er en container bare en dyr kasse.</figcaption>
</figure>

## Hva som er verdt å ta med

At TEU er en tellenhet og ikke en container, og at et TEU-tall derfor sier mindre
enn det ser ut til.

At 40-foteren er den vanlige, og at prisen ikke er det dobbelte av en 20-foter.

At high cube gir volum, ikke flere TEU.

At nummeret på siden er en eierkode, et serienummer og et kontrollsiffer – samme
idé som i strekkoden.

Og at du enten går tom for plass eller for vekt, og at det avgjør hvilken boks du
skal bestille.

*Containerstandardene forvaltes av ISO, og eierkodene av BIC. Denne episoden
forklarer hvordan systemet er bygget opp og gjengir ikke standardteksten. For
bindende detaljer gjelder ISO 6346 og de tilhørende standardene.*
