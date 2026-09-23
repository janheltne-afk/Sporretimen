---
title: "Lær noe nytt: MRP – regnestykket som bestemmer hva fabrikken skal bestille, og når"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - MRP
  - produksjonsplanlegging
  - ERP
  - stykkliste
  - lagerstyring
  - ledetid
topics:
  - Innsikten hele metoden hviler på
  - De tre inngangsdataene
  - Stykklista, og hva en eksplosjon er
  - Et regnestykke fra start til slutt
  - Å regne baklengs fra leveringsdatoen
  - Partistørrelse, og hvorfor man sjelden bestiller nøyaktig behovet
  - Fra MRP til MRP II til ERP
  - Hva metoden ikke kan
questions:
  - Hva er MRP?
  - Hva er forskjellen på avhengig og uavhengig etterspørsel?
  - Hva er en stykkliste, og hva betyr det å eksplodere den?
  - Hvordan regner man ut hva som skal bestilles?
  - Hva er ledetidsforskyvning?
  - Hva er forskjellen på MRP, MRP II og ERP?
  - Hva er svakhetene ved MRP?
takeaways:
  - "Kjerneinnsikten: behovet for deler skal regnes ut, ikke prognostiseres."
  - MRP trenger tre ting – produksjonsplan, stykkliste og lagerbeholdning.
  - "Eksplosjon er å gange seg nedover stykklista, nivå for nivå."
  - Nettobehov er bruttobehov minus det du allerede har.
  - Ledetidsforskyvning er å regne baklengs fra datoen kunden skal ha varen.
  - "Den lengste vegen gjennom stykklista bestemmer hvor tidlig du må begynne."
  - MRP forutsetter fast ledetid og ubegrenset kapasitet. Begge deler er usant.
coverTheme: "MRP"
image: /images/episoder/mrp-produksjonsplanlegging.jpg
imageAlt: "Spørretimen: MRP – Lær noe nytt. Jan Sindre Heltne i studio."
description: >-
  MRP forklart fra bunnen: hvorfor delebehov skal regnes og ikke gjettes, hva en
  stykkliste er, og et fullt regnestykke fra ordre til bestillingsdato – med
  bruttobehov, nettobehov og ledetidsforskyvning.
featured: false
popularityScore: 0
sources:
  - title: "Joseph Orlicky – Material Requirements Planning: The New Way of Life in Production and Inventory Management (1975)"
  - title: "Material requirements planning – oversiktsartikkel"
    url: https://en.wikipedia.org/wiki/Material_requirements_planning
related:
  - erp-wms-integrasjon
  - bullwhip-effekten
  - lean-forklart
---

Du skal levere 100 bokhyller i uke 8. Hver hylle har to sidevanger, fire hyllebord
og 24 skruer. Sidevangene lager du selv, av plater du må kjøpe inn.

Når må du bestille platene?

Det er ikke et gjettespørsmål. Det har et eksakt svar, og å regne det ut er hele
poenget med **MRP** – Material Requirements Planning.

## Innsikten alt hviler på

Før MRP styrte de fleste fabrikker delelageret på samme måte som en butikk styrer
hyllene: se på forbruket, regn ut et snitt, bestill når beholdningen faller under
et bestillingspunkt.

**Joseph Orlicky**, ingeniør i IBM, formulerte tidlig på 1960-tallet hvorfor det
er feil for en fabrikk.

<figure class="fig fig--compare">
  <p class="fig__title">To slags etterspørsel, to helt ulike metoder</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Uavhengig</p>
      <h4>Må prognostiseres</h4>
      <ul>
        <li>Ferdigvaren kunden kjøper</li>
        <li>Ingen kan vite sikkert hvor mange som blir solgt</li>
        <li>Du bygger et anslag ut fra historikk og marked</li>
        <li>Eksempel: hvor mange bokhyller selger vi i uke 8?</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Avhengig</p>
      <h4>Skal regnes ut</h4>
      <ul>
        <li>Delene som går inn i ferdigvaren</li>
        <li>Behovet følger med sikkerhet av planen</li>
        <li>Å prognostisere det er å kaste bort informasjon du har</li>
        <li>Eksempel: 100 hyller krever nøyaktig 400 hyllebord</li>
      </ul>
    </div>
  </div>
  <figcaption>Dette er hele omveltningen, og den er lettere å undervurdere enn å forstå. Skal du lage 100 bokhyller, <em>vet</em> du at du trenger 400 hyllebord. Da er det meningsløst å lage en prognose for hyllebord – du har allerede svaret. Prognoser hører hjemme ett sted i kjeden: helt ytterst, der kunden er. Alt innenfor er aritmetikk.</figcaption>
</figure>

Orlickys bok fra 1975 bar undertittelen *The New Way of Life in Production and
Inventory Management*. Samme år var metoden i bruk i rundt 700 bedrifter.

## De tre inngangsdataene

MRP er ikke et mysterium. Det er en regnemaskin med tre innganger, og kvaliteten
på svaret kan aldri bli bedre enn kvaliteten på de tre.

<figure class="fig fig--flow">
  <p class="fig__title">Det regnestykket trenger</p>
  <ol>
    <li><span class="fig__box"><b>Produksjonsplanen</b><small>Hva som skal være ferdig, hvor mye, og hvilken uke. På engelsk master production schedule.</small></span></li>
    <li><span class="fig__box"><b>Stykklista</b><small>Hva ferdigvaren består av, i hvilke antall, og i hvilke nivåer. Bill of materials.</small></span></li>
    <li><span class="fig__box"><b>Lagerbeholdningen</b><small>Hva du allerede har, hva som er bestilt, og hvor lang ledetid hver del har.</small></span></li>
  </ol>
  <figcaption>Det tredje punktet er der de fleste innføringer faktisk ryker. Regnestykket er trivielt; det er å vite hva som står på lageret som er vanskelig. Er beholdningstallene feil, produserer MRP feil bestillinger med full selvtillit – og det er verre enn ingen plan, fordi ingen tviler på den.</figcaption>
</figure>

## Stykklista, og hva en eksplosjon er

Stykklista er oppskriften, men med nivåer. En bokhylle består av deler, og noen av
de delene består igjen av andre deler.

<figure class="fig fig--matrix">
  <p class="fig__title">Stykkliste for én bokhylle</p>
  <table>
    <thead><tr><th scope="col">Nivå</th><th scope="col">Del</th><th scope="col">Antall</th><th scope="col">Ledetid</th></tr></thead>
    <tbody>
      <tr><th scope="row">0</th><td>Bokhylle (monteres)</td><td>1</td><td>1 uke</td></tr>
      <tr><th scope="row">1</th><td>Sidevange (produseres selv)</td><td>2</td><td>2 uker</td></tr>
      <tr><th scope="row">2</th><td>Plate (kjøpes)</td><td>1 per sidevange</td><td>3 uker</td></tr>
      <tr><th scope="row">1</th><td>Hyllebord (kjøpes)</td><td>4</td><td>2 uker</td></tr>
      <tr><th scope="row">1</th><td>Skrue (kjøpes)</td><td>24</td><td>1 uke</td></tr>
    </tbody>
  </table>
  <figcaption>Å <em>eksplodere</em> stykklista er å gange seg nedover den, nivå for nivå. 100 hyller blir 200 sidevanger, som igjen blir 200 plater. Ordet høres dramatisk ut, men det beskriver bare at ett tall på toppen blir mange tall nedover – og at antallet vokser fort når stykklista har flere nivåer.</figcaption>
</figure>

## Regnestykket, fra start til slutt

Nå gjør vi det hele. **100 bokhyller skal leveres i uke 8.** På lager har du 20
sidevanger, 50 hyllebord og 1000 skruer. Ingen plater.

To operasjoner gjentas på hvert nivå:

**Netting.** Trekk fra det du allerede har. Bruttobehov minus lager gir nettobehov.

**Ledetidsforskyvning.** Regn baklengs. Skal noe være på plass i uke 7 og har to
ukers ledetid, må det bestilles i uke 5.

<figure class="fig fig--matrix">
  <p class="fig__title">Hele utregningen</p>
  <table>
    <thead><tr><th scope="col">Del</th><th scope="col">Brutto</th><th scope="col">På lager</th><th scope="col">Netto</th><th scope="col">Trengs uke</th><th scope="col">Bestilles uke</th></tr></thead>
    <tbody>
      <tr><th scope="row">Bokhylle</th><td>100</td><td>0</td><td>100</td><td>8</td><td>7</td></tr>
      <tr><th scope="row">Sidevange</th><td>200</td><td>20</td><td>180</td><td>7</td><td>5</td></tr>
      <tr><th scope="row">Plate</th><td>180</td><td>0</td><td>180</td><td>5</td><td>2</td></tr>
      <tr><th scope="row">Hyllebord</th><td>400</td><td>50</td><td>350</td><td>7</td><td>5</td></tr>
      <tr><th scope="row">Skrue</th><td>2400</td><td>1000</td><td>1400</td><td>7</td><td>6</td></tr>
    </tbody>
  </table>
  <figcaption>Følg én rad om gangen. 100 hyller krever 200 sidevanger, men 20 ligger på lager, så 180 må lages. De 180 krever 180 plater – ikke 200, fordi de 20 sidevangene du alt har, allerede inneholder sine plater. Det er nettingen som sparer deg for 20 plater, og den feilen er lett å gjøre for hånd.</figcaption>
</figure>

## Svaret, og hvorfor det overrasker

Se på siste kolonne. Platene må bestilles i **uke 2**.

<figure class="fig fig--rule">
  <p class="fig__claim">En leveranse i uke 8 er i praksis besluttet i uke 2.</p>
  <p class="fig__example"><b>Regnestykket:</b> 3 uker på platene, pluss 2 uker på å lage sidevangene, pluss 1 uke montering. Til sammen seks uker.<br /><b>Det er den lengste vegen gjennom stykklista som bestemmer</b>, ikke summen av alle delene. Skruene har én ukes ledetid og bestilles i uke 6 – de er aldri problemet.<br /><b>Konsekvensen:</b> kommer det inn en hasteordre i uke 5, er det fysisk umulig å levere i uke 8, uansett hvor mye noen presser. Svaret ligger i stykklista, ikke i innsatsviljen.<br /><b>Og derfor er MRP mer enn en innkjøpsliste:</b> den forteller deg hvilke løfter du faktisk kan gi.</p>
</figure>

## Partistørrelse

I eksempelet bestilte vi nøyaktig nettobehovet: 350 hyllebord, 1400 skruer. I
virkeligheten gjør man sjelden det.

<figure class="fig fig--compare">
  <p class="fig__title">Hvorfor man avviker fra behovet</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Bestill nøyaktig behovet</p>
      <h4>Minst mulig lager</h4>
      <ul>
        <li>Ingen overflødig kapital bundet</li>
        <li>Ingen deler som blir liggende</li>
        <li>Men: mange små bestillinger</li>
        <li>Og: full pris per enhet</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Bestill i partier</p>
      <h4>Færre, større bestillinger</h4>
      <ul>
        <li>Skruer kjøpes i esker på 500, ikke 1400 stykk</li>
        <li>Rabatt ved større kvantum</li>
        <li>Færre omstillinger i produksjonen</li>
        <li>Men: mer lager, og mer bundet kapital</li>
      </ul>
    </div>
  </div>
  <figcaption>Legg merke til hva som skjer med bestillingsmønsteret her: partistørrelser gjør at bestillingene ikke lenger ligner på forbruket. Det er nøyaktig mekanismen bak bullwhip-effekten, sett fra innsiden av fabrikken. MRP løser ikke det problemet – den er en av kildene til det.</figcaption>
</figure>

## Fra MRP til MRP II til ERP

Metoden vokste i to tydelige steg, og navnene forvirrer fordi bokstavene ligner.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">Tre generasjoner</p>
  <ol>
    <li><span class="fig__box"><b>MRP – materialer</b><small>Orlicky, 1960- og 70-tallet. Svarer på hva som skal bestilles og når. Ser bare på materialer.</small></span></li>
    <li><span class="fig__box"><b>MRP II – produksjonsressurser</b><small>Oliver Wight, 1983. Tar med kapasitet, maskiner, folk og penger. Manufacturing Resource Planning – samme forkortelse, større spørsmål.</small></span></li>
    <li><span class="fig__box"><b>ERP – hele virksomheten</b><small>Planleggingen blir én modul blant mange, ved siden av økonomi, innkjøp, salg og personal.</small></span></li>
  </ol>
  <figcaption>Det er verdt å merke seg at MRP ikke forsvant. Regnestykket i tabellen over kjører fortsatt, hver natt, inne i ethvert ERP-system som styrer produksjon. Det har bare fått mange lag med grensesnitt utenpå seg. Mer om hva som skjer når ERP-et skal snakke med lagersystemet, ligger i egen episode.</figcaption>
</figure>

## Hva metoden ikke kan

Til slutt det ærlige forbeholdet, for MRP har to forutsetninger som begge er
usanne.

<figure class="fig fig--matrix">
  <p class="fig__title">To antakelser, og hva de koster</p>
  <table>
    <thead><tr><th scope="col">Antakelse</th><th scope="col">Virkeligheten</th></tr></thead>
    <tbody>
      <tr><th scope="row">Fast ledetid</th><td>Ledetid varierer med hvor travelt det er. Et verksted som er fullt, bruker lengre tid – men MRP regner med samme tall uansett.</td></tr>
      <tr><th scope="row">Ubegrenset kapasitet</th><td>Klassisk MRP spør ikke om maskinen har ledig tid. Den lager planen, og oppdager ikke at den er umulig. Det var nettopp dette MRP II skulle rette opp.</td></tr>
    </tbody>
  </table>
  <figcaption>Legg til et tredje problem, som fagfolk kaller <em>nervøsitet</em>: en liten endring i produksjonsplanen kan velte om på hundrevis av bestillingsdatoer nedover i stykklista. Flytt leveransen én uke, og alt under flytter seg med. Det er samme familie som bullwhip-effekten – en liten bevegelse på toppen, store utslag lenger ned.</figcaption>
</figure>

## Hva som er verdt å ta med

At delebehov skal regnes ut, ikke gjettes. Prognoser hører hjemme ytterst i kjeden,
der kunden er.

At MRP trenger tre ting, og at det tredje – riktige lagertall – er det som
oftest svikter.

At eksplosjon bare betyr å gange seg nedover stykklista, og netting å trekke fra
det du har.

At ledetidsforskyvning er å regne baklengs fra datoen kunden skal ha varen.

At den lengste vegen gjennom stykklista avgjør hvor tidlig du må begynne – i
eksempelet seks uker, altså bestilling i uke 2 for levering i uke 8.

Og at metoden forutsetter fast ledetid og ubegrenset kapasitet, og at begge deler
er usant.

*Regneeksempelet er konstruert for å vise metoden, og tallene er valgt så de lar
seg kontrollere for hånd. Den historiske framstillingen bygger på Orlickys bok fra
1975 og på standard oversiktslitteratur om MRP og MRP II.*
