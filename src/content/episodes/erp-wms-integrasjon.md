---
title: "Lær noe nytt: Hvorfor ERP- og WMS-integrasjoner feiler – masteroppgaven"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - automatisering
  - ledelse
tags:
  - ERP
  - WMS
  - systemintegrasjon
  - masterdata
  - API
  - middleware
  - endringsledelse
  - prosjektledelse
  - masteroppgave
topics:
  - Hva ERP og WMS er, og hvorfor de må snakke sammen
  - Hvordan undersøkelsen ble gjort
  - De tekniske årsakene til at integrasjoner feiler
  - Det største tallet er ikke teknisk
  - Forsinkelser – nesten alle prosjekter
  - Hva som faktisk hjelper
  - Scope creep
  - Motsetningen i tallene
  - Det undersøkelsen ikke kan si
questions:
  - Hva er forskjellen på et ERP-system og et WMS?
  - Hvorfor feiler integrasjoner mellom ERP og WMS?
  - Hva er den vanligste tekniske årsaken?
  - Hva er den vanligste årsaken totalt?
  - Hvor ofte blir slike prosjekter forsinket?
  - Hva mener fagfolk selv er de mest effektive tiltakene?
  - Hva er scope creep?
  - Hva er masterdata, og hvorfor velter det prosjekter?
takeaways:
  - "Den mest oppgitte årsaken til at integrasjoner feiler er ikke teknisk. Dårlig definerte forretningsprosesser står øverst med 76,2 prosent."
  - "På teknisk side topper datasynkronisering med 71,4 prosent, fulgt av inkompatible API-er med 66,7 prosent."
  - "Manglende testing før go-live ble oppgitt av 66,7 prosent. Feilen oppdages da i produksjon."
  - "Ni av ti respondenter rapporterte forsinkelser i minst hvert tiende prosjekt."
  - "Det mest anbefalte tiltaket var å involvere sluttbrukerne tidlig – 77,3 prosent."
  - "Opplæring må være en løpende prosess, ikke et punkt som krysses av før go-live."
  - "Flere prosjekter ble gjennomført uten en definert integrasjonsstrategi. Testing, opplæring og endringsledelse ble da løst underveis."
  - "Scope creep ble beskrevet som vanlig, og som en direkte årsak til forsinkelser."
  - "Undersøkelsen har 22 svar og fire intervjuer. Det viser tendenser, ikke tall som kan generaliseres."
coverTheme: "ERP og WMS"
image: /images/episoder/erp-wms-integrasjon.jpg
imageAlt: "Spørretimen: ERP og WMS – Lær noe nytt. Jan Sindre Heltne i studio."
description: >-
  To systemer som må snakke sammen, og et prosjekt som ofte ikke går som
  planlagt. Dette er masteroppgaven min fra 2025 – hva 22 fagfolk og fire
  konsulenter oppgir som årsakene til at ERP-WMS-integrasjoner feiler, hvilke
  tiltak de mener virker, og hvorfor det største tallet ikke er teknisk.
featured: false
popularityScore: 0
sources:
  - title: "Jan Sindre Heltne – «Which technical and process related factors contribute to failures in ERP-WMS integrations, and what strategies can be used to mitigate them?». Masteroppgave LOG950, Master of Science in Logistics, Høgskolen i Molde, 20. mai 2025. Veileder Terje Andersen. På engelsk."
related:
  - rfid-varetelling
  - lean-forklart
  - rfid-forklart
---

Våren 2025 leverte jeg masteroppgave i logistikk ved Høgskolen i Molde. Temaet
var systemintegrasjon, og spørsmålet var praktisk: **hvorfor går det så ofte
galt når et ERP-system og et lagerstyringssystem skal snakke sammen – og hva
gjør de som får det til?**

Veileder var Terje Andersen. Oppgaven er skrevet på engelsk, og denne episoden
er gjennomgangen av hva undersøkelsen faktisk viste.

## De to systemene

Begrepene først, for de blandes ofte.

<figure class="fig fig--compare">
  <p class="fig__title">Ett system for virksomheten, ett for lageret</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">ERP</p>
      <h4>Enterprise Resource Planning</h4>
      <ul>
        <li>Bredt – økonomi, innkjøp, salg, produksjon, personal</li>
        <li>Ser beholdningen på et samlet nivå</li>
        <li>Brukes til planlegging og styring</li>
        <li>Fungerer som kjernen andre systemer kobles til</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">WMS</p>
      <h4>Warehouse Management System</h4>
      <ul>
        <li>Smalt og detaljert – bare lageret</li>
        <li>Lokasjoner, plukk, pakking, plassering</li>
        <li>Sporing i sanntid, og kobling mot automasjon</li>
        <li>Gjør det ERP-et bare har grunnfunksjoner for</li>
      </ul>
    </div>
  </div>
  <figcaption>Forskjellen er omfang og oppløsning, ikke kvalitet. ERP-et vet at det ligger 400 av en vare på lager; WMS-et vet at de ligger på fire lokasjoner, hvilken som skal plukkes først, og hva som står i veien. Problemet oppstår der de overlapper: begge håndterer beholdning og ordre, men fra ulik vinkel. Går ikke dataene sømløst mellom dem, får du to sannheter om samme beholdning – og den ene styrer innkjøp mens den andre styrer plukking.</figcaption>
</figure>

## Hvordan jeg undersøkte det

Undersøkelsen kombinerte to kilder. Et digitalt spørreskjema gikk ut gjennom
LinkedIn og fagmiljøer for folk som jobber med ERP og WMS, og ga **22 svar**.
Deretter gjorde jeg **fire semistrukturerte intervjuer** med en ERP-konsulent,
en WMS-konsulent, en løsningsarkitekt og en prosjektleder. Dataene ble samlet
inn mellom mars og mai 2025.

Respondentene var erfarne: 45,5 prosent hadde seks til ti år bak seg, 18,2
prosent over ti år. De fleste hadde bakgrunn fra logistikk og lager, men også
fra distribusjon, industri, næringsmiddel og varehandel – flere fra mer enn én
bransje.

Skjemaet ga bredden. Intervjuene ga dybden, og forklarte hva tallene betydde i
praksis.

## Det største tallet er ikke teknisk

Dette er hovedfunnet, og det overrasket meg selv.

<figure class="fig fig--chart" data-bars>
  <p class="fig__title">Hva respondentene oppgav som årsaker</p>
  <svg class="fig__plot" viewBox="0 0 520 306" role="img" aria-label="Søylediagram over oppgitte årsaker til at integrasjoner feiler. Dårlig definerte prosesser er høyest med 76,2 prosent, deretter datasynkronisering 71,4, inkompatible API-er 66,7, manglende testing 66,7, svak kommunikasjon 61,9, manglende opplæring 57,1, svak masterdatastyring 47,6, endringsmotstand 33,3 og ytelse og forsinkelser 23,8 prosent.">
    <text class="fig__label fig__label--strong" x="196" y="30" text-anchor="end">Dårlig definerte prosesser</text>
    <rect class="fig__bar" x="204" y="18" width="205.7" height="16" rx="2" />
    <text class="fig__label fig__label--strong" x="416" y="30">76,2 %</text>
    <text class="fig__label" x="196" y="60" text-anchor="end">Datasynkronisering</text>
    <rect class="fig__bar fig__bar--muted" x="204" y="48" width="192.8" height="16" rx="2" />
    <text class="fig__label" x="403" y="60">71,4 %</text>
    <text class="fig__label" x="196" y="90" text-anchor="end">Inkompatible API-er</text>
    <rect class="fig__bar fig__bar--muted" x="204" y="78" width="180.1" height="16" rx="2" />
    <text class="fig__label" x="390" y="90">66,7 %</text>
    <text class="fig__label" x="196" y="120" text-anchor="end">Testing mangler før go-live</text>
    <rect class="fig__bar" x="204" y="108" width="180.1" height="16" rx="2" />
    <text class="fig__label" x="390" y="120">66,7 %</text>
    <text class="fig__label" x="196" y="150" text-anchor="end">Svak kommunikasjon</text>
    <rect class="fig__bar" x="204" y="138" width="167.1" height="16" rx="2" />
    <text class="fig__label" x="377" y="150">61,9 %</text>
    <text class="fig__label" x="196" y="180" text-anchor="end">Manglende opplæring</text>
    <rect class="fig__bar" x="204" y="168" width="154.2" height="16" rx="2" />
    <text class="fig__label" x="364" y="180">57,1 %</text>
    <text class="fig__label" x="196" y="210" text-anchor="end">Svak masterdatastyring</text>
    <rect class="fig__bar fig__bar--muted" x="204" y="198" width="128.5" height="16" rx="2" />
    <text class="fig__label" x="338" y="210">47,6 %</text>
    <text class="fig__label" x="196" y="240" text-anchor="end">Endringsmotstand</text>
    <rect class="fig__bar" x="204" y="228" width="89.9" height="16" rx="2" />
    <text class="fig__label" x="300" y="240">33,3 %</text>
    <text class="fig__label" x="196" y="270" text-anchor="end">Ytelse og forsinkelser</text>
    <rect class="fig__bar fig__bar--muted" x="204" y="258" width="64.3" height="16" rx="2" />
    <text class="fig__label" x="274" y="270">23,8 %</text>
    <rect class="fig__bar" x="204" y="286" width="11" height="11" rx="2" />
    <text class="fig__label" x="221" y="296">Prosess</text>
    <rect class="fig__bar fig__bar--muted" x="286" y="286" width="11" height="11" rx="2" />
    <text class="fig__label" x="303" y="296">Teknisk</text>
  </svg>
  <figcaption>Tekniske og prosessrelaterte årsaker ble spurt om i to separate flervalgsspørsmål til de samme 22 respondentene, så søylene er satt sammen her for å vise rangeringen – ikke som ett spørsmål. Poenget står likevel: den mest oppgitte årsaken til at en systemintegrasjon feiler, er at ingen hadde bestemt hvordan arbeidet skulle gå.</figcaption>
</figure>

Det er verdt å stoppe ved det. Dette kalles et integrasjonsprosjekt, og
diskusjonen handler om API-er og datamodeller. Men det respondentene oftest
pekte på, var at forretningsprosessene ikke var definert godt nok før man
begynte å koble systemer sammen.

<figure class="fig fig--rule">
  <p class="fig__claim">To systemer kan ikke enes om en prosess som ikke er bestemt.</p>
  <p class="fig__example"><b>Slik det viste seg i casene:</b> flere av prosjektene ble gjennomført uten en definert integrasjonsstrategi. Konsekvensen var ikke at strategien manglet på papiret – den var at testing, opplæring og endringsledelse ikke ble prioritert, men løst underveis, etter hvert som det brant. Prosjektene varte fra et halvt til ett år, og mange av virksomhetene hadde liten intern IT-kapasitet og var avhengige av eksterne konsulenter. Flere hadde heller ikke gjort en slik integrasjon før.</p>
</figure>

## Det tekniske

Det betyr ikke at teknikken var uskyldig. Tre problemer gikk igjen, og de
henger sammen.

**Datasynkronisering** var den mest oppgitte tekniske årsaken. Uten oppdatering
i sanntid blir beholdningstallene feil, ordrebehandlingen treg, og noen må rette
opp manuelt – som er nettopp det integrasjonen skulle fjerne.

**Inkompatible API-er** ble trukket fram særlig der ERP og WMS kom fra ulike
leverandører. Manglende standardisering, feil i datautvekslingen, og mer
kompleksitet enn prosjektet var planlagt for.

**Masterdata** ble i intervjuene beskrevet som en grunnleggende årsak – ikke en
feil i seg selv, men grunnen til at andre feil oppstår. Er produkt- og
kundedataene ufullstendige eller inkonsistente, gjør lageret feil operasjoner,
eller ingen.

I tillegg nevnte respondentene versjonsavvik mellom systemene, håndtering av
restordrer, transaksjoner som forsvinner, og sikkerhetshull i datautvekslingen.

## Forsinkelsene

Her var svarene påfallende samstemte.

<figure class="fig fig--matrix">
  <p class="fig__title">Hvor ofte blir prosjektene forsinket?</p>
  <table>
    <thead>
      <tr><th scope="col">Svar</th><th scope="col">Andel</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Av og til – 10–30 % av prosjektene</th><td>42,9 %</td></tr>
      <tr><th scope="row">Ofte – 30–50 % av prosjektene</th><td>38,1 %</td></tr>
      <tr><th scope="row">Sjelden – rundt 10 % av prosjektene</th><td>9,5 %</td></tr>
      <tr><th scope="row">Svært ofte – over 60 % av prosjektene</th><td>9,5 %</td></tr>
    </tbody>
  </table>
  <figcaption>Ingen svarte at forsinkelser ikke forekommer. Alle fire informantene i intervjuene hadde også opplevd det selv – noen ganger på grunn av tekniske problemer, andre ganger fordi prosessene ikke var avklart eller opplæringen ikke var gjort før go-live.</figcaption>
</figure>

Og én forklaring kom uoppfordret fra flere av informantene:

<figure class="fig fig--rule">
  <p class="fig__claim">Scope creep – at omfanget vokser underveis – ble beskrevet som vanlig, og som en direkte årsak til at prosjektene skled.</p>
  <p class="fig__example"><b>Hvorfor det er verre her enn ellers:</b> når omfanget endres i et integrasjonsprosjekt, endres ikke bare en leveranse. Det som var testet, må testes igjen, dataene som var kartlagt, må kartlegges igjen, og opplæringen som var planlagt, gjelder nå et annet system enn det brukerne skal få. Det er samme mekanisme som gjør uklart omfang til det nest mest oppgitte suksesskriteriet i undersøkelsen – 59,1 prosent pekte på tydelig definert omfang og kravspesifikasjon.</p>
</figure>

## Hva som faktisk hjelper

Dette er den delen jeg selv synes er mest nyttig, fordi den er konkret.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">Tiltakene respondentene mente virket best</p>
  <ol>
    <li><span class="fig__box"><b>Involver sluttbrukerne tidlig – 77,3 %</b><small>Det høyest rangerte tiltaket av alle. De som skal bruke systemet, vet hvordan arbeidet faktisk gjøres.</small></span></li>
    <li><span class="fig__box"><b>Grundig forarbeid – 72,7 %</b><small>En ordentlig forstudie som fastslår kravene før prosjektet starter.</small></span></li>
    <li><span class="fig__box"><b>Omfattende pilottesting før go-live – 68,2 %</b><small>I intervjuene ble det konkretisert: enhetstesting, systemtesting og integrasjonstesting, hver for seg.</small></span></li>
    <li><span class="fig__box"><b>Løpende opplæring og støtte – 68,2 %</b><small>Ikke en økt før go-live, men noe som fortsetter etter at systemet er i drift.</small></span></li>
    <li><span class="fig__box"><b>Middleware eller integrasjonsplattform – 40,9 %</b><small>Et mellomlag mellom systemene, i stedet for å koble dem rett sammen.</small></span></li>
  </ol>
  <figcaption>Legg merke til at bare det siste punktet er teknologi. De fire første er arbeidsmåter. Alle fire informantene var dessuten innom det samme om opplæring: at den behandles som et punkt i prosjektplanen som skal krysses av, og ikke som noe som må vare.</figcaption>
</figure>

På spørsmål om hva som er avgjørende for å lykkes, kom et erfarent
innføringsteam høyest med 63,6 prosent, tydelig omfang på 59,1 prosent, og
dokumenterte, standardiserte integrasjonsprosesser på 40,9 prosent.

## En motsetning verdt å nevne

Tallene er ikke helt samstemte, og det bør sies høyt.

I spørreskjemaet var **sterk ledelsesstøtte det lavest rangerte
suksesskriteriet** – bare 18,2 prosent pekte på det. I intervjuene ble
manglende engasjement fra ledelsen trukket fram som en reell årsak til svak
gjennomføringskraft.

Jeg har ikke grunnlag for å si hvilken av dem som er riktig. En mulig forklaring
er at ledelsesstøtte er lett å undervurdere når man krysser av i et skjema, og
lett å se når man forteller om et prosjekt som gikk galt. Men det er en
tolkning, ikke et funn.

## Det undersøkelsen ikke kan si

Dette står i oppgaven, og det hører med her også.

<figure class="fig fig--flow">
  <p class="fig__title">Fire forbehold</p>
  <ol>
    <li><span class="fig__box"><b>22 svar er få</b><small>Nok til å vise tendenser i feltet, ikke nok til å generalisere. Et større utvalg kunne gitt andre vektinger.</small></span></li>
    <li><span class="fig__box"><b>De med meninger svarer</b><small>Den som har sterke erfaringer, godt eller dårlig, er mer villig til å bruke tid på et skjema.</small></span></li>
    <li><span class="fig__box"><b>Fire intervjuer gir dybde, ikke bredde</b><small>Andre bransjer eller andre land kunne pekt på noe annet.</small></span></li>
    <li><span class="fig__box"><b>Alt er selvrapportert</b><small>Jeg observerte ingen prosjekter mens de pågikk. Det er fagfolks beskrivelser av hva som skjedde.</small></span></li>
  </ol>
  <figcaption>Tidspunktet er også et forbehold. Dataene ble samlet inn i en periode der mange virksomheter fortsatt håndterte ettervirkningene av pandemien og en rask digitalisering, og det kan ha påvirket hva respondentene så på som problemer. At funnene likevel stemmer med tidligere forskning, og at skjema og intervjuer peker på det samme, er det som gir dem vekt.</figcaption>
</figure>

## Det jeg tar med meg

At integrasjon er et organisatorisk problem forkledd som et teknisk. Middleware
og standardiserte API-er løser reelle problemer, men de løser ikke at to
avdelinger har ulik oppfatning av hvordan en ordre skal behandles.

Og at rekkefølgen betyr noe. Nesten alle tiltakene respondentene mente virket,
måtte settes i gang før prosjektet startet – forstudien, kravene, brukerne,
teststrategien. Det er vanskelig å hente inn igjen et prosjekt som begynte uten
dem.

*Oppgaven er en undersøkelse av hva fagfolk i feltet oppgir, ikke en måling av
prosjekter. Bedrifter, informanter og alt som kunne identifisere deltakerne er
anonymisert i oppgaven. Innholdet er generell informasjon, ikke en anbefaling for
et konkret prosjekt.*
