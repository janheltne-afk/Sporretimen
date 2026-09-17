---
title: "Lær noe nytt: Å telle 160 000 varer – bacheloroppgaven om RFID"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - automatisering
tags:
  - RFID
  - varetelling
  - lagerstyring
  - UHF
  - SAP
  - ERP
  - LEAN
  - bacheloroppgave
  - casestudie
topics:
  - Lageret oppgaven handlet om, i tall
  - Hvorfor en varetelling tar to til tre måneder
  - Hva pilottesten fra 2019 faktisk viste
  - Hvorfor samme tagg blir lest sju til ti ganger
  - Metall, jording og brikkene som sluttet å svare
  - Aktiv eller passiv – de to scenarioene
  - Det oppgaven ikke klarte å svare på
  - Hva konklusjonen sa, og hva den ikke sa
questions:
  - Hvor lang tid tar en årlig varetelling på et stort lager?
  - Hva viste pilottesten av passiv UHF-RFID?
  - Hvorfor må et RFID-tellesystem filtrere bort dobbeltlesinger?
  - Hvorfor slutter en vanlig RFID-tagg å virke på metall?
  - Hva er forskjellen på aktiv og passiv RFID i praksis?
  - Hvorfor ble aktiv RFID forkastet?
  - Hva er problemet med å telle multipakninger?
  - Hva konkluderte oppgaven med?
takeaways:
  - "Lageret hadde 12 000 materialnummer og opp mot 160 000 artikler, med en lagerverdi på opp til 500 millioner kroner."
  - "Den årlige tellingen tok to til tre måneder med to årsverk – ikke fordi arbeidet var dårlig, men fordi metoden var manuell."
  - "Rundt 80 prosent av lageret var sikkerhetslager. Mye av det som ble telt, hadde stått stille i flere år."
  - "Piloten leste passive UHF-tagger på seks til åtte meter gjennom reolene – på papp, tre og plast."
  - "Samme tagg ble lest sju til ti ganger per telling. Systemet måtte filtrere lesingene ned til én vare."
  - "Tagger klistret rett på metall fikk jording og sluttet å svare. Det var pilotens eneste reelle problem."
  - "Aktiv RFID ble forkastet på kostnad og batteribytte, ikke på teknikk."
  - "Multipakninger lot seg ikke løse. Ingen merker hver enkelt skrue."
  - "Konklusjonen var at det kunne lønne seg, med forbehold – ikke at det ville lønne seg."
coverTheme: "RFID i praksis"
description: >-
  En årlig varetelling som tar to til tre måneder med to årsverk. Kan RFID kutte
  den? Dette er bacheloroppgaven min fra 2020 – lageret i tall, hva pilottesten
  faktisk viste, hvorfor tagger på metall sluttet å svare, og hva vi ikke klarte
  å svare på.
featured: false
popularityScore: 0
sources:
  - title: "Jan Sindre Heltne og Stian Lunde – «Bruk av RFID-teknologi for effektivisering av varetellingen på lageret». Bacheloroppgave SCM600, Bachelor i logistikk og Supply Chain Management, Høgskolen i Molde, 2. juni 2020. Veileder Bjørn Jæger."
related:
  - rfid-forklart
  - lean-forklart
  - gs1-strekkoder
---

Våren 2020 skrev jeg bacheloroppgave sammen med **Stian Lunde** ved Høgskolen i
Molde. Temaet var RFID, men problemstillingen var smalere enn det: kunne
teknologien gjøre noe med den årlige varetellingen på et stort lager?

Fokusbedriften var **ConocoPhillips**, og lageret var forsyningsbasen i Tananger
utenfor Stavanger, som leverer til Ekofisk og Eldfisk. Jeg hadde tatt fagbrev i
logistikk der før studiet, og kjente lageret fra innsiden – som er både styrken
og svakheten ved en slik oppgave. Veileder var Bjørn Jæger.

Denne episoden er gjennomgangen av hva vi faktisk fant. Skal du ha teknologien
forklart fra grunnen av, ligger det i [egen
episode](/episoder/rfid-forklart/) – her handler det om ett konkret lager, ett
konkret problem, og hva som skjedde da noen prøvde.

## Lageret, i tall

Tallene er halve svaret på hvorfor dette er vanskelig.

<figure class="fig fig--matrix">
  <p class="fig__title">Forsyningsbasen i Tananger, slik den var i 2020</p>
  <table>
    <thead>
      <tr><th scope="col">Størrelse</th><th scope="col">Tall</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Materialnummer</th><td>12 000 ulike</td></tr>
      <tr><th scope="row">Artikler</th><td>opp mot 160 000</td></tr>
      <tr><th scope="row">Lagerverdi</th><td>opp til 500 millioner kroner</td></tr>
      <tr><th scope="row">Andel sikkerhetslager</th><td>rundt 80 prosent</td></tr>
      <tr><th scope="row">Omløp</th><td>rundt 20 prosent</td></tr>
      <tr><th scope="row">Årlig telling</th><td>2–3 måneder, to årsverk</td></tr>
    </tbody>
  </table>
  <figcaption>De to siste radene henger sammen. Når fire femdeler av lageret er kritiske komponenter som ligger der for å kunne sendes ut den dagen noe knekker offshore, teller man år etter år varer som ikke har flyttet seg. Noen leverandører har sluttet å produsere delen, og da kjøper man et par ekstra og setter dem på hyllen. Der kan de stå i flere år.</figcaption>
</figure>

## Papiret

Det som overrasket meg mest da jeg skulle beskrive dagens situasjon, var hvor
lite av problemet som handlet om folk.

Lageret brukte SAP. Men arbeidet ute i reolene gikk på papir: plukklister
skrevet ut på A4, lokasjoner og materialnummer notert med penn, og så lagt inn i
systemet på kontoret etterpå. Hver bestilling ga et nytt ark som skulle
arkiveres.

<figure class="fig fig--rule">
  <p class="fig__claim">Feilene kom ikke av slurv. De kom av avstanden mellom hyllen og tastaturet.</p>
  <p class="fig__example"><b>Det vi fant:</b> L-varehuset hadde minimalt med feil – i tellingen, ved mottak, ved retur fra offshore, ved lokasjonsendringer. De ansatte vi intervjuet fortalte at korrigeringer var sjeldne, og at man da lette opp årsaken i stedet for bare å rette tallet. Arbeidet var ikke dårlig utført. Men når en lagerarbeider har flere oppgaver å gjøre ute før han er tilbake på kontoret, øker muligheten for menneskelig feil – uten at noen har gjort noe galt.</p>
</figure>

Det er en viktig forskjell, og den er lett å miste når man skriver om
effektivisering. Vi lette ikke etter noen som gjorde en dårlig jobb. Vi lette
etter arbeid som ikke trengte å gjøres.

## Pilottesten

Her var vi heldige. Sommeren 2019, altså et halvår før vi begynte, hadde
selskapet allerede kjørt en pilottest på passive UHF-tagger. Vi fikk tilgang til
den, og kunne bygge videre på funnene i stedet for å gjette.

Oppsettet var enkelt og ganske fysisk: et RFID-lesehode ble montert fast på en
palle, slik at gaffeltrucken kunne heise det oppover i reolen og lese etter
tagger på varene. Lageret har 24 reoler. Bekymringen på forhånd var at varene
ligger tett i pallene, og at leseren ikke ville nå gjennom.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">Pilotoppsettet</p>
  <ol>
    <li><span class="fig__box"><b>Taggene</b><small>Passive UHF-tagger festet på en stor variasjon av varer i reolene.</small></span></li>
    <li><span class="fig__box"><b>Lesehodet på pallen</b><small>Montert fast, heist opp og ned i reolen av gaffeltruck.</small></span></li>
    <li><span class="fig__box"><b>Et eget tellesystem</b><small>Måtte bygges fra grunnen. Registrerte tagger mot materialnummer og lokasjon, og fortalte lesehodet hvilken lokasjon som skulle telles.</small></span></li>
    <li><span class="fig__box"><b>Filtrering</b><small>Trakk de mange lesingene av samme tagg ned til én vare, og viste «at shelf» mot «in stock».</small></span></li>
  </ol>
  <figcaption>Det tredje leddet er poenget. Taggene og leseren kunne kjøpes. Tellesystemet fantes ikke, og måtte lages – selv for en pilot som bare skulle svare på ett spørsmål. Det er dette som pleier å bli undervurdert i RFID-prosjekter.</figcaption>
</figure>

Resultatet: taggene ble lest på **seks til åtte meter** på papp, tre og plast.
Det var mer enn nok til å lese gjennom reolene, og i testen ble alle de
registrerte taggene funnet.

## Den som leses sju ganger

Dette er detaljen jeg husker best, fordi den ikke stod i noen av lærebøkene vi
hadde lest først.

<figure class="fig fig--rule">
  <p class="fig__claim">Et lesehode teller ikke varer. Det registrerer signaler – og det registrerer det samme signalet om og om igjen.</p>
  <p class="fig__example"><b>Slik det faktisk ser ut:</b> så lenge lesehodet er innenfor rekkevidde av en tagg, leser det taggen på nytt. I piloten ble samme ID lest sju til ti ganger per telling. Hver tagg har sin egen ID, så jobben til tellesystemet var å skille ut dobbeltlesingene, slik at én tagg lest ti ganger ble bokført som én vare. Uten den filtreringen hadde lageret «vokst» med en faktor på åtte hver gang noen telte.</p>
</figure>

Det er en fin påminnelse om hva teknologien egentlig leverer. Den gir deg ikke
en beholdning. Den gir deg en strøm av observasjoner, og noen må bestemme hva de
betyr.

## Metallet

Piloten hadde ett reelt problem, og det var fysikk.

Brikkene som var levert, var *non-metal tags*. Klistret man en slik tagg rett på
en metallboks, fikk brikken jording, og da klarte den ikke å svare når lesehodet
prøvde å vekke den. Varer i metallemballasje ble altså usynlige.

Løsningen leverandørene bruker, er en **flagtag** – en tagg som sitter litt
løsere fra overflaten, slik at den ikke får kontakt med metallet. Vi la det inn
som reserveløsning i oppgaven.

Og her skal jeg være ærlig om en svakhet: vi tok en forutsetning om at
kombitaggene vi anbefalte, ville fungere. Det var nettopp dette som var
problemet i piloten. Vi skrev det inn som et forbehold, men vi testet det ikke.

## De to scenarioene

Valget stod mellom aktiv og passiv RFID, og det var ikke teknikken som avgjorde.

<figure class="fig fig--compare">
  <p class="fig__title">Aktiv eller passiv, for dette lageret</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Scenario 1</p>
      <h4>Aktiv RFID</h4>
      <ul>
        <li>Batteri i taggen, rekkevidde på flere hundre meter</li>
        <li>Ville i praksis gitt et «live» lager til enhver tid</li>
        <li>Dyrere brikker – og lageret har opp mot 150 000 artikler</li>
        <li>Alle batterier må byttes etter noen år</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Scenario 2</p>
      <h4>Passiv UHF</h4>
      <ul>
        <li>Ingen batteri – taggen vekkes av leserens radiobølger</li>
        <li>Mindre, billigere, og lang levetid</li>
        <li>Seks til åtte meter er nok inne i en reol</li>
        <li>Merkes omtrent som en strekkodeetikett gjør i dag</li>
      </ul>
    </div>
  </div>
  <figcaption>Aktiv RFID falt på regnestykket, ikke på ytelsen. Et lager med 150 000 artikler er 150 000 batterier som en dag skal skiftes, og da er arbeidstiden dyrere enn brikkene. Det siste kulepunktet til høyre var dessuten et argument i seg selv: varene merkes allerede med strekkode i dag, så selve merkejobben er en post som finnes i prosessen fra før.</figcaption>
</figure>

Vi endte på passiv UHF – samme type som i piloten – og anbefalte at
lokasjonene i reolene også fikk egne tagger. Et lesehode vet nemlig ikke hvor
det selv er. Det vet bare hva som svarte. Med lokasjonstagger på hyllene kan man
si at *denne* varen lå nærmest *den* hyllen, og da kan man finne igjen noe som er
satt på feil plass uten å lete gjennom et halvt lager.

## Det vi ikke fikk svar på

Dette er delen jeg ville lagt mest vekt på hvis jeg skulle skrevet oppgaven i
dag, for den avgjør om regnestykket holder.

<figure class="fig fig--flow">
  <p class="fig__title">Tre åpne spørsmål</p>
  <ol>
    <li><span class="fig__box"><b>Merkejobben</b><small>Alle artiklene må merkes før man kan telle med RFID. Vi klarte ikke å estimere hvor lang tid det tar å merke en reol, og dermed ikke hva engangskostnaden faktisk blir.</small></span></li>
    <li><span class="fig__box"><b>Multipakninger</b><small>En eske med 100 deler bokføres som 100 stk i SAP, men settes på hyllen med delene i esken. Ingen merker hver enkelt skrue.</small></span></li>
    <li><span class="fig__box"><b>Strøm og nett</b><small>Løsningen er avhengig av begge. Ved brudd trengs reservestrøm og lokal lagring – ellers står tellingen.</small></span></li>
  </ol>
  <figcaption>Det midterste punktet er det mest interessante, for det forsvinner ikke med bedre teknologi. En mulighet vi skisserte, var å merke taggen med en notis om at innholdet må telles manuelt, eller å behandle en uåpnet pakke som hel og bare telle den som er åpnet. Begge er arbeidsrutiner, ikke teknikk.</figcaption>
</figure>

## Hva konklusjonen sa

Og like viktig: hva den ikke sa.

<figure class="fig fig--rule">
  <p class="fig__claim">Konklusjonen var betinget. At det kunne lønne seg, og at selskapet kunne vurdere å investere – ikke at gevinsten var regnet ut.</p>
  <p class="fig__example"><b>Det konkrete anslaget:</b> tellingen slik den var, med to ansatte i to til tre måneder, kunne erstattes av én ansatt som kjører gaffeltruck fra reol til reol. Den frigjorte tiden var hovedargumentet – ikke fordi telling i seg selv er verdifullt, men fordi de ansatte da kan bruke tiden på å oppdage feil tidlig. Under besøket vårt stoppet en oppmerksom ansatt en aktiv bestilling som ikke lenger var nødvendig. Det er den typen inngrep som betaler for seg selv, og som krever at noen har tid.</p>
</figure>

Forutsetningen vi var tydeligst på, var ERP-siden: SAP må kunne hente og endre
informasjon på taggene fortløpende, ellers fungerer ikke resten. Det er det
samme poenget som i RFID-episoden – leseren og taggen er den enkle delen.

## Det oppgaven lærte meg

Om RFID: at fysikken bestemmer, og at den bestemmer tidlig. Metall og væske er
ikke detaljer man løser til slutt.

Om metode: at det å kjenne en bedrift fra innsiden gir tilgang og forståelse, og
samtidig en slagside man må skrive åpent om. Vi hadde begge jobbet der. Det stod
i oppgaven, og det burde det.

Og om tidspunkt: oppgaven ble skrevet våren 2020, da høgskolene stengte. Den
ble til over videosamtaler, uten åpent bibliotek, og med et næringsliv som var
vanskelig å få tak i midt i en pandemi. At vi i det hele tatt fikk komme på
besøk i Stavanger, var mer enn vi kunne regne med.

*Oppgaven er skrevet sammen med Stian Lunde, og er hans arbeid like mye som
mitt. Den er en casestudie av ett lager på ett tidspunkt – tallene og rutinene
beskriver situasjonen i 2020, og sier ingenting om hvordan lageret drives i dag.
Det er heller ingen anbefaling om å kjøpe noe: vurderingen gjaldt ett konkret
lager, med forbeholdene som står i oppgaven.*
