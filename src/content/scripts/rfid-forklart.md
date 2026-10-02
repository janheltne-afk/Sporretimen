---
episode: rfid-forklart
kind: sporsmal
transcriptSource: manuell
worktitle: "RFID forklart"
subtitle: "Innspillingsmanus – rekkefølge, overganger og hvor grafikken skal inn"
description: "Manus til Lær noe nytt-episoden om RFID: hvordan en brikke uten batteri svarer, hvorfor frekvensvalget avgjør alt, hva metall og væske gjør med lesegraden, og hvorfor hypen fra 2000-tallet ikke slo til."
updated: 2026-10-02
---

*Dette er manuset, skrevet før innspilling. Teksten under er det som skal sies,
og linjene i kursiv er regianvisninger – de leses ikke opp. Når episoden er
spilt inn, erstattes denne teksten av det som faktisk ble sagt.*

*Lengde: regn 17–19 minutter.*

*Blir den for lang: kutt delen om NFC, BLE og UWB og nevn at den står i
artikkelen. Ikke kutt fysikkdelen eller lesegraden – de to er det som skiller
episoden fra en produktbrosjyre.*

*Har du en RFID-tagg eller et adgangskort liggende, hold det opp i åpningen.
Det er et godt rekvisitt, og det gjorde seg bra i strekkodeepisoden.*

## Åpningen

*(Hold opp en tagg hvis du har en. Start med gåten.)*

Den her har ikke batteri.

Den sender ingenting. Den har ingen strømkilde i det hele tatt.

Likevel kan en leser flere meter unna hente ut et unikt nummer fra den – gjennom
emballasje, uten å se den, og sammen med hundre andre samtidig.

I dag skal vi se på hvordan det går an, hvorfor valget av frekvens avgjør mer enn
alt annet, og hvorfor teknologien som skulle erstatte strekkoden for tjue år siden
– ikke gjorde det.

## De tre delene

*(Grafikk: tagg, leser, system.)*

Et RFID-oppsett er alltid tre ting.

**Taggen.** En brikke med et unikt nummer og en antenne. Sitter på varen, pallen,
verktøyet eller kortet.

**Leseren.** Sender ut radioenergi gjennom en eller flere antenner, og fanger opp
svaret.

**Systemet.** Det som gjør nummeret om til noe nyttig – varemottak,
lagerbeholdning, sporing.

*(Den viktigste advarselen, og den kommer tidlig med vilje.)*

De to første er maskinvare, og de lar seg kjøpe.

Det tredje er integrasjon. Og det er der pengene og tiden går.

Feiler et RFID-prosjekt, er det nesten alltid fordi det tredje leddet ble glemt. En
leser som roper nummer ut i luften uten at noe tar imot dem, har ingen verdi.

## Hvordan brikken svarer

*(Grafikk: backscatter. Dette er den fine delen av teknologien – ta deg tid.)*

Så tilbake til gåten fra åpningen.

Leseren sender ut en radiobølge. Antennen på taggen fanger opp nok energi fra den
bølgen til å vekke brikken.

*(Her er poenget.)*

Men brikken svarer ikke ved å sende noe selv. Den har ikke kraft til det.

Den svarer ved å skru refleksjonen sin av og på i et mønster.

Leseren ser endringen i sitt eget signal, og leser mønsteret som tall.

*(Bildet som får det til å sitte.)*

Taggen er altså et speil som blinker. Ikke en sender.

Prinsippet heter **backscatter**, og det er derfor rekkevidden er asymmetrisk:
leseren må ha nok kraft til å nå taggen, **og** til at det svake refleksjonssvaret
kommer helt tilbake.

Dobler du avstanden, trenger du langt mer enn dobbel kraft.

## Frekvensbåndene

*(Grafikk: de tre båndene. Dette er den viktigste beslutningen i et prosjekt.)*

Og nå til valget som avgjør mest, og som ofte tas uten at noen forstår konsekvensen.

**LF**, lavfrekvent, rundt 125 kilohertz. Rekkevidde på centimetre. Hører hjemme på
øremerker på dyr, bilnøkler og adgangsbrikker. Tåler nærhet til metall og væske
bedre enn de andre.

**HF**, 13,56 megahertz. Opp mot en meter. Kort, pass, bibliotekbøker, betaling. NFC
er en nær slektning i dette båndet.

**UHF**, rundt 860 til 960 megahertz. Flere meter. Dette er logistikkbåndet –
varemottak, lagerbeholdning, pallelesing, butikk. Og det kan lese mange tagger
raskt.

*(Detaljen som faktisk har praktisk betydning.)*

Men merk spennet i UHF. Europa bruker rundt 865 til 868 megahertz. USA rundt 902
til 928.

Utstyr og tagger kjøpt for det ene markedet kan yte merkbart dårligere i det andre.
Det er verdt å vite når varene, leserne eller leverandøren krysser en landegrense.

## Med og uten batteri

*(Grafikk: passiv mot aktiv.)*

Tre varianter, og regelen er enklere enn den høres ut.

**Passiv** har ingen strømkilde. Koster lite – ofte øre eller kroner per tagg. Kan
limes på som en etikett, og varer i praksis evig. Til gjengjeld kortere rekkevidde,
og den krever at leseren er sterk.

**Aktiv** har eget batteri. Koster langt mer, men sender selv og kan nå titalls til
hundretalls meter. Kan ha sensorer – temperatur, støt, fukt. Men batteriet tar
slutt, og det må planlegges for.

Og så finnes en mellomting, **semipassiv**, der batteriet driver brikken og
sensorene, men svaret fortsatt sendes som refleksjon.

*(Regelen.)*

Regelen er enkel nok: passivt på varer. Aktivt på det som er verdt å holde øye med
i seg selv – containere, kjøretøy, dyrt utstyr.

## RFID mot strekkode

*(Grafikk: de to side om side. Koble til GS1-episoden her.)*

Den vanligste misforståelsen er at RFID er «en bedre strekkode».

Det er en annen slags ting, med andre styrker og andre kostnader.

**Strekkoden** krever fri sikt og riktig vinkel. Én om gangen. Men den koster nesten
ingenting – den trykkes. Og leser du den, er svaret riktig.

**RFID** trenger ikke fri sikt. Den leser gjennom emballasje, og mange tagger i én
operasjon. Men den koster per tagg, hver gang.

*(De to viktigste forskjellene.)*

Fri sikt er den egentlige forskjellen. En pall kan leses uten å åpnes. En butikkhylle
kan telles med en håndleser i stedet for én vare om gangen.

Men så er det en til, som er lett å overse: strekkoden identifiserer som regel
**varetypen**. RFID kan identifisere **den enkelte gjenstanden**.

Det er forskjellen mellom å vite at du har tolv av denne modellen – og å vite hvilke
tolv.

*(Og baksiden.)*

Til gjengjeld: leser du ikke alle, vet du ikke hvilke som mangler. Vi kommer tilbake
til det.

Nummeret som ligger på taggen er for øvrig som regel bygget etter de samme
standardene som strekkoden. Det er tema i episoden om GS1, hvis du vil se den først.

## Fysikken som velter prosjekter

*(Grafikk: metall og væske. Dette er den enkeltopplysningen som sparer mest tid.)*

Og her er opplysningen som sparer mest tid, og som altfor ofte kommer for sent i et
prosjekt.

Metall reflekterer radiobølger. Væske absorberer dem.

Begge deler ødelegger for UHF.

*(Konkret.)*

En tagg limt rett på en stålreol eller en malingsspann oppfører seg helt annerledes
enn den gjorde på testbordet.

Det finnes tagger laget for metall, med avstandsstykke eller egen jordplate – men de
koster mer, og de må velges bevisst.

Væske er verre. Vann absorberer energien i UHF-båndet, så en pall med drikkevarer
skjermer taggene i midten.

*(Den fine detaljen som binder det sammen.)*

Det er forresten også derfor LF fortsatt brukes på dyr. Det båndet bryr seg mindre
om at det sitter på noe som for det meste er vann.

## Lesegraden blir aldri hundre prosent

*(Ingen grafikk nødvendig. Dette er en holdning, ikke en tabell.)*

Og så noe som er viktigere enn det høres ut.

Et RFID-oppsett er sannsynlighet. Ikke sikkerhet.

En tagg kan ligge i en skyggesone. Den kan stå feil vei i forhold til antennen.
Eller den kan bli overdøvet av alle de andre taggene som svarer samtidig.

*(Omformuleringen som er hele poenget.)*

Derfor er spørsmålet aldri «leser vi alt?».

Spørsmålet er «hva gjør vi når vi ikke gjorde det?».

Gode løsninger leser samme sending flere ganger fra flere vinkler, sammenligner mot
det som var forventet, og sier fra om avviket.

En lesegrad under hundre prosent er ikke en feil som skal skjules. Det er et vilkår
løsningen må håndtere.

## De fire som blandes sammen

*(Grafikk: tabellen. Kutt denne delen hvis episoden blir for lang.)*

Fire teknologier blandes stadig sammen – også av folk som selger dem.

**RFID** i UHF-båndet: passive tagger lest på flere meter, mange om gangen.

**NFC**: nær slektning i HF-båndet, med toveiskommunikasjon på et par centimeter.
Betaling med telefon, adgangskort, taggen du skanner på en plakat.

**BLE**: Bluetooth med lavt strømforbruk. Egen sender og eget batteri.

**UWB**: bredbånd som måler avstand ved gangtid i stedet for signalstyrke. Posisjon
på desimeternivå.

*(Skillelinjen som gjør det enkelt å huske.)*

Den praktiske skillelinjen: RFID og NFC forteller at noe **er her**. BLE og UWB
forteller **hvor** det er – men krever batteri i hver enhet.

Skal du telle tusen varer, er RFID svaret. Skal du finne én tralle i en hall, er det
sannsynligvis ikke det.

## Hva det faktisk brukes til

*(Grafikk eller bare oppramsing.)*

Det som har lyktes best, er butikk med mange varianter og høye krav til
beholdningsnøyaktighet. Klær særlig – der samme modell finnes i mange størrelser og
farger, og der det å vite hva som faktisk ligger i butikken er verdt penger.

Ellers: varemottak uten å åpne pallen. Utstyrs- og verktøysporing. Tekstilhåndtering
i hotell og sykehus. Bibliotek, øremerking av dyr, adgangskontroll, bomringer,
skipass og tidtaking i idrett.

*(Og det motsatte, som er like opplysende.)*

Der det **ikke** har slått til, er like lærerikt: dagligvare med lav margin per
enhet, der taggkostnaden spiser gevinsten. Og alt som er for mye metall eller for
mye væske.

## Personvern

*(Ro ned her. Dette er en vurdering, ikke en advarsel.)*

En tagg svarer til den som spør. Og den vet ikke hvem som spør.

Det er teknologiens natur, og det er utgangspunktet for innvendingene.

Bekymringen har to deler. Den ene er at en tagg som blir sittende på en vare etter
kjøpet, i prinsippet kan leses av andre senere. Standardene for passiv UHF har
mekanismer for å deaktivere en tagg permanent – men de må faktisk brukes.

Den andre er at flere lesinger av samme nummer over tid blir et mønster. Og et
mønster som kan knyttes til en person, er noe annet enn et lagernummer.

*(Den praktiske grensen.)*

Og nettopp der ligger vurderingen: så lenge nummeret bare følger en pall, er det
varedata.

Kan det knyttes til en person – et adgangskort, et kundeforhold, et kjøretøy – er du
i personvernregelverket. Og da må bruken vurderes før den settes i drift, ikke
etterpå.

## Hvorfor hypen ikke slo til

*(Dette er en god avslutning, fordi den er ærlig.)*

Rundt midten av to tusen-tallet ble RFID omtalt som det som skulle erstatte
strekkoden i løpet av få år.

Store kjeder stilte krav til leverandørene om at pallene skulle merkes, og bransjen
snakket om femøres-taggen som forutsetningen for at det skulle lønne seg.

Det gikk ikke slik.

*(Tre grunner. Den tredje er den mest interessante.)*

Taggene kostet mer og lenger enn ventet. Lesegraden i virkelige omgivelser var
dårligere enn i demoen.

Og gevinsten havnet ofte hos en annen part i kjeden enn den som betalte for taggene.

*(Konklusjonen.)*

Teknologien var ikke feil. Regnestykket og forventningene var det.

Det som faktisk har skjedd siden, er stillere og mer solid. Taggene er blitt
billigere, leserne bedre, standardene modne – og bruken har funnet de stedene der
regnestykket går opp, i stedet for alle steder på én gang.

## Oppsummering

*(Grafikk: punktene.)*

Fire ting å ta med seg.

At teknologien er elegant – men at prosjektet står og faller på integrasjonen, ikke
på maskinvaren.

At frekvensvalget avgjør mer enn noe annet.

At metall og væske må avklares tidlig, med test i de faktiske omgivelsene og ikke på
et bord.

Og at en lesegrad under hundre prosent ikke er en feil som skal skjules, men et
vilkår løsningen må håndtere.

*(Siste setning – tilbake til taggen i hånda.)*

Og at en liten brikke uten batteri kan svare på flere meters avstand, ved å blinke
med sin egen refleksjon.

*(Sluttkort.)*
