# Automatisk henting av TikTok-videoer

Karusellen på `/forklart` leser i dag en håndplukket liste i
`src/data/tiktok.ts`. Dette notatet beskriver hva som skal til for å bytte den
lista mot automatisk henting fra TikTok, og hvorfor det ikke er gjort ennå.

Ingenting her er satt i verk. Det er en kravliste, ikke en oppskrift som er
prøvd ut.

## Hvorfor ikke nå

Automatisk henting krever en godkjent TikTok-app og en innlogging du må gjøre
selv. Begge deler er avklaringer, ikke kode. Til de er på plass, er en manuell
liste både raskere og mer forutsigbar.

Uoffisiell skraping av profilsiden er ikke et alternativ. Det bryter TikToks
vilkår, det knekker uten varsel, og det ville lagt en ustabil avhengighet midt
i en side som ellers er statisk.

## Hva TikTok krever

Kildene er TikToks egen dokumentasjon, lest 15. oktober 2026:
[Display API – Get Started](https://developers.tiktok.com/doc/display-api-get-started/)
og [Embed Player](https://developers.tiktok.com/doc/embed-player).

| Krav | Hva det betyr |
| --- | --- |
| Utviklerkonto | Konto i TikTok Developer Portal. |
| Godkjent app | Både Login Kit og et TikTok API-produkt må godkjennes. Det er en søknad med behandlingstid, ikke et avkryssingsfelt. |
| Rettigheter | `user.info.basic` og `video.list`. |
| Innlogging | Du må logge inn med TikTok-kontoen og godkjenne tilgangen. Det kan ikke gjøres av et skript uten en person til stede første gang. |
| Nøkler | Klientnøkkel og -hemmelighet, og et oppfriskingstoken. |
| Endepunkt | `POST /v2/video/list/` med tilgangstokenet. Nyeste video først, sidevis med `cursor` og `has_more`. |

Levetider i TikToks eget eksempel: tilgangstokenet varer 24 timer,
oppfriskingstokenet omtrent 365 dager. Oppfriskingstokenet må altså fornyes
minst én gang i året, ellers stopper synkroniseringen.

TikTok dokumenterer ingen takstgrense på denne siden. De anbefaler selv å hente
videoene hver tolvte time.

## Hvordan det kobles inn

`src/data/tiktok.ts` er med vilje bare data. Alt karusellen trenger, er en
liste med `TikTokVideo`-objekter. Byttet gjøres på ett sted:

1. Et byggeskript henter videolista fra Display API og skriver den til en
   JSON-fil i `src/data/`.
2. `tiktokVideos` leser den fila i stedet for å ha lista skrevet inn.
3. Skriptet kjøres i Vercels byggesteg, før `astro build`.

Komponenten endres ikke. Den vet ikke hvor lista kommer fra.

Hentingen skjer ved bygging, ikke i nettleseren. Da ligger ingen nøkler i
frontend, og nettstedet er fortsatt statisk. Vercel bygger ved hver utgivelse,
så en ny video dukker opp ved neste bygg – eller ved et planlagt bygg, om du
vil ha det oftere.

## Nøkler

Klientnøkkel, klienthemmelighet og oppfriskingstoken legges som
miljøvariabler i Vercel. De skal ikke stå i repoet, og de skal ikke sendes til
nettleseren. Byggeskriptet er det eneste som leser dem.

Repoet er offentlig. En nøkkel som havner i en fil her, er publisert.

## Det TikTok ikke sier noe om

Dokumentasjonen svarer ikke på om private eller begrensede videoer holdes
utenfor `video/list`. Det må prøves ut før synkroniseringen slås på, slik at
ikke noe havner på nettstedet som ikke skulle vært der.

Den sier heller ikke noe om takstgrenser. Antar vi at det finnes en, bør
skriptet tåle å feile uten å velte bygget: feiler hentingen, skal forrige
liste brukes videre.

## Begrensninger i selve avspilleren

Disse gjelder allerede i dag, uavhengig av synkronisering:

- **Fjernede videoer.** En video som er slettet på TikTok, kan ikke spilles av
  i innbyggingen. Karusellen fanger opp feilkode 1001 og viser et kort med
  lenke til TikTok i stedet.
- **Ingen egne miniatyrbilder fra TikTok.** Plakatbildene våre er lokale.
  TikToks oEmbed gir en bildeadresse, men de adressene er signerte og slutter
  å virke etter en tid, så de egner seg ikke til et statisk nettsted.
- **Avspilling må startes av brukeren.** Vi laster spilleren først ved klikk.
  Det er et bevisst valg av hensyn til personvern og ytelse, ikke en
  begrensning hos TikTok.
- **Noen nettlesere i Kina** kan blokkere TikToks spiller og falle tilbake til
  nettleserens egen.
