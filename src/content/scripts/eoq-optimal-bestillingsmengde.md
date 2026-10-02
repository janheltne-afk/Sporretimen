---
episode: eoq-optimal-bestillingsmengde
kind: sporsmal
transcriptSource: manuell
worktitle: "EOQ – optimal bestillingsmengde"
subtitle: "Innspillingsmanus – rekkefølge, overganger og hvor grafikken skal inn"
description: "Manus til Lær noe nytt-episoden om EOQ: de to kostnadene som trekker hver sin vei, formelen fra 1913, hvorfor de to kostnadene er like store i optimum, hvorfor kurven er flat – og hva lean gjør med regnestykket."
updated: 2026-10-02
---

*Dette er manuset, skrevet før innspilling. Teksten under er det som skal sies,
og linjene i kursiv er regianvisninger – de leses ikke opp. Når episoden er
spilt inn, erstattes denne teksten av det som faktisk ble sagt.*

*Lengde: regn 15–17 minutter.*

*Episoden har to høydepunkter: at de to kostnadene er nøyaktig like store i
optimum, og at kurven er flat rundt bunnen. Det andre er det mest nyttige, og
det utelates nesten alltid når EOQ undervises. Ikke kutt det.*

## Åpningen

*(Plukk opp tråden fra MRP-episoden, men formuler det så det også virker for
den som ikke har sett den.)*

Du vet hvor mye du trenger i året. Si hundre tusen skruer.

Spørsmålet er hvor mye du skal ta om gangen.

Og svaret er verken «så mye som mulig» eller «så lite som mulig». Det finnes et
tall, og det har vært kjent siden 1913.

I dag skal vi regne det ut – og se hvorfor det er mindre viktig å treffe det
nøyaktig enn de fleste tror.

## De to kostnadene

*(Grafikk: de to kolonnene, side om side.)*

Hele problemet er at to kostnader trekker i hver sin retning.

**Små, hyppige bestillinger** gir billig lager og dyr bestilling. Lite kapital
bundet i varer, lite plass i bruk. Men mange bestillinger i året – og hver
bestilling koster administrasjon, frakt og omstilling.

**Store, sjeldne bestillinger** gir billig bestilling og dyrt lager. Få
bestillinger, rabatter, full lastebil. Men mye kapital bundet, og plass, svinn,
forsikring og kurans.

*(Poenget med figuren.)*

Og legg merke til at ingen av kolonnene er feil. Begge er fornuftige – og de er
fornuftige av motsatte grunner.

Når to kostnader oppfører seg slik, at den ene faller når den andre stiger, finnes
det et punkt der summen er lavest.

Å finne det punktet er hele EOQ.

## Formelen fra 1913

*(Grafikk: formelen, med D, S og H forklart.)*

**Ford Whitman Harris** publiserte svaret i 1913, i en artikkel med den nøkterne
tittelen «How Many Parts to Make at Once», i bladet *Factory*.

Han var ingeniør, oppfinner og senere patentadvokat – og hadde ingen formell
utdanning ut over videregående.

*(Den morsomme krøllen. Ta den – den er god på video.)*

Og historien har en merkelig krøll.

Formelen ble kjent som **Wilson-formelen**, etter konsulenten R. H. Wilson, som
brukte og analyserte den grundig. Harris' egen artikkel ble borte – og ble ikke
gjenoppdaget før i 1988.

Tre kvart århundre etter at den ble skrevet.

*(Nå formelen. Tre bokstaver.)*

Selve formelen trenger tre tall.

**D** er etterspørselen per år, i antall enheter.

**S** er hva det koster å utløse én bestilling – administrasjon, frakt, omstilling
av maskinen. Og merk: per bestilling, ikke per enhet.

**H** er hva det koster å ha én enhet liggende i ett år – kapitalkostnad, plass,
svinn, forsikring.

Og så: EOQ er kvadratroten av to ganger D ganger S, delt på H.

*(Stopp ved kvadratroten – den forteller noe.)*

Det er verdt å stoppe ved den kvadratroten et øyeblikk, for den sier noe:

Dobler du etterspørselen, dobler du ikke partiet. Du ganger det med 1,41.

## Regnestykket

*(Grafikk: de tre tallene, og svaret.)*

Ta skruene.

Etterspørsel: hundre tusen skruer i året. Det er D, hentet fra produksjonsplanen.

Bestillingskostnad: fem hundre kroner. Det er S – og det koster det samme enten du
bestiller hundre eller hundre tusen.

Lagerkostnad: én krone per skrue per år. Det er H.

*(Regn det ut høyt.)*

To ganger hundre tusen ganger fem hundre, delt på én. Det er hundre millioner.
Kvadratroten av hundre millioner er ti tusen.

Bestill ti tusen skruer om gangen. Altså ti ganger i året.

*(Si det som er lett å overse.)*

Og legg merke til hvor lite som trengs. Tre tall, én kvadratrot.

Det vanskelige ved EOQ er ikke matematikken. Det er å finne ut hva
bestillingskostnaden og lagerkostnaden faktisk er i din egen virksomhet – og de
tallene finnes sjelden ferdig i noe system.

## Det elegante

*(Grafikk: de to kostnadene ved 10 000. Dette er det første høydepunktet.)*

Regn nå ut hva de to kostnadene blir ved ti tusen, og noe pent skjer.

**Bestillingskostnaden:** hundre tusen delt på ti tusen er ti bestillinger. Ganger
fem hundre kroner. Fem tusen kroner.

**Lagerkostnaden:** gjennomsnittslageret er halve partiet, altså fem tusen skruer.
Ganger én krone. Fem tusen kroner.

*(Pause.)*

Nøyaktig like store.

Og det er ikke tilfeldig. Det gjelder alltid.

Er de to kostnadene ulike, er du ikke i optimum – og det gir deg en rask måte å
sjekke et svar på, uten å regne formelen om igjen.

Samlet: ti tusen kroner i året.

## Kurven er flat

*(Grafikk: følsomhetstabellen. Dette er det andre høydepunktet, og det
viktigste i hele episoden.)*

Og nå kommer den mest nyttige innsikten, som nesten alltid utelates når EOQ
undervises.

Hva koster det å bomme?

*(Gå gjennom de tre midterste radene. Ikke hele tabellen.)*

Bestiller du sju tusen fem hundre i stedet for ti tusen – altså tjuefem prosent
for lite – koster det deg fire komma to prosent.

Bestiller du tolv tusen fem hundre, altså tjuefem prosent for mye, koster det deg
to og en halv prosent.

*(Poenget. La det stå.)*

Kurven er flat rundt bunnen.

Og det har en praktisk konsekvens folk sjelden trekker: du trenger **ikke** presise
tall for lagerkostnad og bestillingskostnad. Et grovt anslag gir deg en beslutning
som er god nok.

Det er først når du bommer med en faktor på fire – to tusen fem hundre mot ti tusen
– at det virkelig svir. Da er du hundre og tolv prosent over.

*(Snu innvendingen.)*

Og dette er verdt å si høyt, fordi det snur et vanlig argument.

«Vi vet ikke hva lagerkostnaden vår egentlig er» er ikke en grunn til å la være å
bruke EOQ.

Det er en grunn til å bruke et anslag og gå videre.

## Kalkulatoren

*(Henvis til verktøyet her, mens den flate kurven er fersk.)*

På nettsiden ligger dette som en kalkulator. Du legger inn dine egne tre tall, og
den gir deg partiet og hvordan kostnaden fordeler seg.

Den har også et felt for partiet du faktisk bestiller i dag, og sier hva avviket
koster deg.

Prøv å sette det til sju tusen fem hundre, og så til tolv tusen fem hundre. Du vil
se at totalen knapt rører seg.

## Hva modellen forutsetter

*(Grafikk: de fire antakelsene.)*

Formelen er så enkel fordi den antar bort mye. Fire ting.

**Jevn, kjent etterspørsel.** Brister ved sesongvarer, kampanjer og trender – alt
som svinger.

**Øyeblikkelig levering.** Ledetid finnes. Den håndteres med bestillingspunkt, ikke
av EOQ.

**Fast pris per enhet.** Kvantumsrabatter gjør kurven hakkete, og optimum kan
hoppe.

**Ingen begrensning på plass eller kapital.** Lageret har en vegg, og budsjettet en
grense.

*(Men – og dette er viktig.)*

Det er lett å avfeie modellen på grunn av disse.

Men husk den flate kurven: selv når forutsetningene er grovt brutt, gir EOQ som
regel et parti som er nærmere riktig enn magefølelsen til den som bestiller.

Modellen er en retning, ikke en fasit.

## Lean-angrepet

*(Grafikk: de fire linjene der S kuttes. Dette er episodens beste del.)*

Og her blir det interessant, for det er her EOQ møter Toyota.

EOQ tar bestillingskostnaden som et faktum, og finner det beste partiet gitt den.

Lean-tradisjonen gjør noe helt annet. Den nekter å godta tallet, og angriper det.

*(Gå gjennom de fire linjene.)*

Med bestillingskostnad på fem hundre kroner er EOQ ti tusen. Ti bestillinger i
året, og total kostnad ti tusen kroner.

Kutt den til hundre og tjuefem, og EOQ faller til fem tusen. Tjue bestillinger,
total kostnad fem tusen.

Kutt til femti kroner, og EOQ er tre tusen ett hundre og sekstito. Over tretti
bestillinger i året.

Og med fem kroner: tusen enheter om gangen, hundre bestillinger i året, og
kostnaden nede i en tidel av der vi startet.

*(Poenget. Dette er hele koblingen mellom de to tradisjonene.)*

Et kutt fra fem hundre til femti kroner får EOQ til å falle sekstiåtte prosent.

Og det er hele poenget med omstillingsarbeid i lean. Bruker du en dag på å gjøre en
maskinomstilling fra fire timer til ti minutter, har du ikke bare spart de timene.

Du har flyttet optimum, og gjort små partier lønnsomme.

*(Konklusjonen, som overrasker mange.)*

Lean og EOQ er altså ikke uenige.

Lean endrer én av inngangsdataene, og lar formelen gi et nytt svar.

## Koblingen til bullwhip

*(Kort. En påminnelse, ikke en ny del.)*

Til slutt en påminnelse om at hver optimering har en pris et annet sted.

Store partier er akkurat det bullwhip-episoden pekte på som årsak nummer to: når du
bestiller i esker og paller i stedet for etter forbruk, ser leverandøren svingninger
som ikke finnes.

EOQ gir deg det billigste partiet **for deg**, målt på dine to kostnader.

Det regnestykket inneholder ikke hva partiet koster leddet over.

Og det er nettopp derfor mindre og hyppigere leveranser dukker opp som tiltak mot
bullwhip. Det er den samme avveiningen – sett fra kjeden i stedet for fra lageret.

## Oppsummering

*(Grafikk: punktene.)*

Seks ting å ta med seg.

At EOQ veier bestillingskostnad mot lagerkostnad, og at begge er reelle.

At formelen er kvadratroten av to ganger etterspørsel ganger bestillingskostnad,
delt på lagerkostnad.

At de to kostnadene er like store i optimum, og at det er en rask kontroll.

At kurven er flat – tjuefem prosent feil koster noen få prosent, så grove anslag
holder.

At modellen antar jevn etterspørsel og øyeblikkelig levering, og at ingen av
delene stemmer.

Og at lean ikke er uenig i formelen – den kutter bestillingskostnaden, og lar
svaret bli mindre av seg selv.

## Avslutningen

*(Tilbake til åpningen.)*

Så: hundre tusen skruer i året. Hvor mange om gangen?

Ti tusen. Men like viktig – om du bestiller sju tusen eller tolv tusen, koster det
deg noen få prosent.

Det er en av de sjeldne gangene der matematikken sier at du ikke trenger å være
presis.

Kalkulatoren ligger på sporretimen.no.

*(Sluttkort.)*
