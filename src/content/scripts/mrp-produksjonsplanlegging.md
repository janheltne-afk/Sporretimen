---
episode: mrp-produksjonsplanlegging
kind: sporsmal
transcriptSource: manuell
worktitle: "MRP i produksjonsplanlegging"
subtitle: "Innspillingsmanus – rekkefølge, overganger og hvor grafikken skal inn"
description: "Manus til Lær noe nytt-episoden om MRP: skillet mellom uavhengig og avhengig etterspørsel, de tre inngangsdataene, eksplosjon og netting, ledetidsforskyvning – og hvorfor en leveranse i uke 8 er besluttet i uke 2."
updated: 2026-10-02
---

*Dette er manuset, skrevet før innspilling. Teksten under er det som skal sies,
og linjene i kursiv er regianvisninger – de leses ikke opp. Når episoden er
spilt inn, erstattes denne teksten av det som faktisk ble sagt.*

*Lengde: regn 16–18 minutter.*

*Denne episoden har ett regnestykke som bærer alt. Bruk god tid på tabellen –
den er hele poenget, og den tåler at du går sakte gjennom én rad om gangen.*

*Hvis du så lean-episoden: den kalte MRP for «skyv»-logikk. Denne episoden er
svaret på hva det faktisk betyr.*

## Åpningen

*(Konkret situasjon først. Ingen definisjon.)*

En kunde ringer i uke fem. De vil ha hundre bokhyller levert i uke åtte.

Du må si nei.

Og det er ikke fordi du er treg, eller fordi noen ikke gidder. Det er fordi svaret
allerede er bestemt – og det står i stykklista, ikke i kalenderen.

I dag skal vi regne oss fram til hvorfor.

## Innsikten alt hviler på

*(Grafikk: uavhengig mot avhengig etterspørsel, side om side.)*

Før MRP styrte de fleste fabrikker delelageret på samme måte som en butikk styrer
hyllene. Se på forbruket, regn ut et snitt, bestill når beholdningen faller under
et bestillingspunkt.

**Joseph Orlicky**, ingeniør i IBM, formulerte tidlig på sekstitallet hvorfor det
er feil for en fabrikk.

Det finnes to slags etterspørsel.

**Uavhengig etterspørsel** er ferdigvaren kunden kjøper. Ingen kan vite sikkert hvor
mange som blir solgt. Den må prognostiseres – du bygger et anslag ut fra historikk
og marked. Hvor mange bokhyller selger vi i uke åtte?

**Avhengig etterspørsel** er delene som går inn i ferdigvaren. Og her er poenget:
behovet følger med sikkerhet av planen.

*(Dette er hele omveltningen. Si den rolig.)*

Skal du lage hundre bokhyller, vet du at du trenger fire hundre hyllebord.

Da er det meningsløst å lage en prognose for hyllebord. Du har allerede svaret.

Å prognostisere avhengig etterspørsel er å kaste bort informasjon du sitter på.

*(Formuler regelen.)*

Prognoser hører hjemme ett sted i kjeden: helt ytterst, der kunden er.

Alt innenfor er aritmetikk.

## De tre inngangsdataene

*(Grafikk: de tre.)*

MRP er ikke et mysterium. Det er en regnemaskin med tre innganger.

**Produksjonsplanen** – hva som skal være ferdig, hvor mye, og hvilken uke.

**Stykklista** – hva ferdigvaren består av, i hvilke antall, og i hvilke nivåer.

**Lagerbeholdningen** – hva du allerede har, hva som er bestilt, og hvor lang
ledetid hver del har.

*(Den viktigste advarselen i hele episoden.)*

Og det tredje punktet er der de fleste innføringer faktisk ryker.

Regnestykket er trivielt. Det er å vite hva som står på lageret som er vanskelig.

Er beholdningstallene feil, produserer MRP feil bestillinger med full selvtillit.
Og det er verre enn ingen plan – fordi ingen tviler på den.

## Stykklista

*(Grafikk: stykklista med nivåer, antall og ledetid.)*

Stykklista er oppskriften, men med nivåer.

En bokhylle består av deler, og noen av de delene består igjen av andre deler.

Bokhylla monteres på én uke. Den trenger to sidevanger, som produseres selv på to
uker. Hver sidevange trenger én plate, som kjøpes inn med tre ukers ledetid. I
tillegg trenger hylla fire hyllebord, som kjøpes med to ukers ledetid – og
tjuefire skruer, med én uke.

*(Forklar ordet.)*

Å **eksplodere** stykklista er bare å gange seg nedover den, nivå for nivå. Hundre
hyller blir to hundre sidevanger, som igjen blir to hundre plater.

Ordet høres dramatisk ut, men det beskriver bare at ett tall på toppen blir mange
tall nedover – og at antallet vokser fort når stykklista har flere nivåer.

## Regnestykket

*(Grafikk: hele tabellen, bygget opp én rad om gangen. Dette er episodens
kjerne – gå sakte.)*

Nå gjør vi det hele.

Hundre bokhyller skal leveres i uke åtte. På lager har du tjue sidevanger, femti
hyllebord og tusen skruer. Ingen plater.

To operasjoner gjentas på hvert nivå.

**Netting** er å trekke fra det du allerede har. Bruttobehov minus lager gir
nettobehov.

**Ledetidsforskyvning** er å regne baklengs. Skal noe være på plass i uke sju og
har to ukers ledetid, må det bestilles i uke fem.

*(Nå går du gjennom tabellen rad for rad. La hver rad få stå.)*

**Bokhylla.** Hundre i brutto, ingenting på lager, hundre i netto. Den skal være
ferdig i uke åtte, og med én ukes montering må den starte i uke sju.

**Sidevangene.** Hundre hyller krever to hundre sidevanger. Men tjue ligger på
lager, så nettobehovet er hundre og åtti. De må være klare i uke sju, og med to
ukers produksjonstid må de settes i gang i uke fem.

*(Her er den subtile biten. Stopp opp.)*

**Platene.** Og her er det en felle som er lett å gå i.

De hundre og åtti sidevangene krever hundre og åtti plater. Ikke to hundre.

Hvorfor? Fordi de tjue sidevangene du allerede har på lager, inneholder sine plater
fra før. Det er nettingen som sparer deg for tjue plater.

Det er en lett feil å gjøre for hånd, og det er en av grunnene til at man lar en
maskin gjøre det.

Platene må være der i uke fem, og med tre ukers ledetid må de bestilles i uke to.

**Hyllebordene.** Fire hundre i brutto, femti på lager, tre hundre og femti i
netto. Trengs i uke sju, bestilles i uke fem.

**Skruene.** To tusen fire hundre i brutto, tusen på lager, fjorten hundre i netto.
Trengs i uke sju, bestilles i uke seks.

## Svaret

*(Grafikk: den lengste vegen gjennom stykklista, framhevet.)*

Se på siste kolonne.

Platene må bestilles i **uke to**.

*(Dette er episodens punchline. La den stå.)*

En leveranse i uke åtte er i praksis besluttet i uke to.

Regnestykket er tre uker på platene, pluss to uker på å lage sidevangene, pluss én
uke montering. Til sammen seks uker.

Og legg merke til hva som bestemmer: det er **den lengste vegen gjennom stykklista**,
ikke summen av alle delene. Skruene har én ukes ledetid og bestilles i uke seks. De
er aldri problemet.

*(Tilbake til åpningen.)*

Og det er derfor kunden som ringer i uke fem får nei. Det er fysisk umulig å levere
i uke åtte, uansett hvor mye noen presser.

Svaret ligger i stykklista, ikke i innsatsviljen.

*(Dette er hvorfor MRP er mer enn en innkjøpsliste.)*

Det er også derfor MRP er mer enn en innkjøpsliste. Den forteller deg hvilke løfter
du faktisk kan gi.

## Kalkulatoren

*(Henvis til verktøyet her, ikke bare til slutt – det er mest nyttig rett etter
regnestykket.)*

På nettsiden ligger hele denne tabellen som en kalkulator. Du kan skru på antallet,
på leveringsuka og på hva du har på lager, og se hele kjeden flytte seg.

To ting er verdt å prøve.

Doble antallet hyller. Bestillingsukene flytter seg **ikke i det hele tatt** –
ledetidene er de samme enten det gjelder hundre eller ti tusen.

Flytt så leveringsuka én uke fram. Da flytter hele kjeden seg med.

Det er ledetidene, ikke volumet, som bestemmer når du må bestemme deg.

## Partistørrelse

*(Grafikk: nøyaktig behov mot partier.)*

I eksempelet bestilte vi nøyaktig nettobehovet. Tre hundre og femti hyllebord,
fjorten hundre skruer.

I virkeligheten gjør man sjelden det.

Skruer kjøpes i esker på fem hundre, ikke fjorten hundre stykk. Det gir rabatt ved
større kvantum og færre omstillinger i produksjonen – men også mer lager og mer
bundet kapital.

*(Koblingen til bullwhip. Viktig.)*

Og legg merke til hva som skjer med bestillingsmønsteret: partistørrelser gjør at
bestillingene ikke lenger ligner på forbruket.

Det er nøyaktig mekanismen bak bullwhip-effekten, sett fra innsiden av fabrikken.

MRP løser ikke det problemet. Den er en av kildene til det.

## Fra MRP til MRP II til ERP

*(Grafikk: de tre generasjonene.)*

Metoden vokste i to steg, og navnene forvirrer fordi bokstavene ligner.

**MRP** er Orlickys metode fra seksti- og syttitallet. Den svarer på hva som skal
bestilles og når, og ser bare på materialer.

**MRP II** kom med Oliver Wight i 1983. Den tar med kapasitet, maskiner, folk og
penger. Samme forkortelse, større spørsmål.

**ERP** er når planleggingen blir én modul blant mange, ved siden av økonomi,
innkjøp, salg og personal.

*(Poenget som overrasker.)*

Og det er verdt å merke seg at MRP ikke forsvant.

Regnestykket vi nettopp gikk gjennom kjører fortsatt. Hver natt. Inne i ethvert
ERP-system som styrer produksjon.

Det har bare fått mange lag med grensesnitt utenpå seg.

## Hva metoden ikke kan

*(Grafikk: de to antakelsene mot virkeligheten. Ikke kutt denne delen.)*

Og til slutt det ærlige forbeholdet, for MRP har to forutsetninger som begge er
usanne.

**Fast ledetid.** Ledetid varierer med hvor travelt det er. Et verksted som er
fullt, bruker lengre tid. Men MRP regner med samme tall uansett.

**Ubegrenset kapasitet.** Klassisk MRP spør ikke om maskinen har ledig tid. Den
lager planen, og oppdager ikke at den er umulig. Det var nettopp dette MRP II
skulle rette opp.

Og så er det et tredje problem, som fagfolk kaller **nervøsitet**: en liten endring
i produksjonsplanen kan velte om på hundrevis av bestillingsdatoer nedover i
stykklista. Flytt leveransen én uke, og alt under flytter seg med.

Det er samme familie som bullwhip-effekten. En liten bevegelse på toppen, store
utslag lenger ned.

## Oppsummering

*(Grafikk: punktene.)*

Seks ting å ta med seg.

At delebehov skal regnes ut, ikke gjettes. Prognoser hører hjemme ytterst i kjeden,
der kunden er.

At MRP trenger tre ting – og at det tredje, riktige lagertall, er det som oftest
svikter.

At eksplosjon bare betyr å gange seg nedover stykklista, og netting å trekke fra
det du har.

At ledetidsforskyvning er å regne baklengs fra datoen kunden skal ha varen.

At den lengste vegen gjennom stykklista avgjør hvor tidlig du må begynne – i
eksempelet seks uker, altså bestilling i uke to for levering i uke åtte.

Og at metoden forutsetter fast ledetid og ubegrenset kapasitet, og at begge deler
er usant.

## Avslutningen

*(Tilbake til kunden fra åpningen.)*

Så: kunden ringer i uke fem og vil ha hundre bokhyller i uke åtte.

Nå vet du hvorfor svaret er nei – og du kan vise dem regnestykket i stedet for å
bare si det.

Tabellen og kalkulatoren ligger på sporretimen.no.

*(Sluttkort.)*
