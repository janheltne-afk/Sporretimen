# Bilderettigheter

Denne lista skal holdes oppdatert. Hensikten er at ingen bilder ligger på
nettstedet uten at det er avklart hvor de kommer fra, og at kreditering blir
gjort der den er påkrevd.

## Kategorier

| Kode | Betydning | Kreditering |
| --- | --- | --- |
| `egen` | Laget av Spørretimen | Ikke påkrevd |
| `gjest` | Levert eller godkjent av personen på bildet | Etter avtale |
| `lisens` | Kjøpt eller lisensiert (oppgi leverandør) | Etter lisensvilkår |
| `cc` | Creative Commons e.l. | **Påkrevd**, med lisensnavn |
| `presse` | Pressebilde med dokumentert tillatelse | Som oppgitt av avsender |
| `ukjent` | Opphav ikke avklart | **Skal ikke publiseres** |

Det at et bilde finnes på Google, Instagram, Facebook, TikTok, Wikipedia, i en
avis eller på en annen nettside betyr ikke at det kan brukes her.

## Slik registreres det i innholdet

Sett `imageCredit` i frontmatter på gjesten, episoden eller ressursen:

```yaml
imageCredit:
  source: gjest          # egen | gjest | lisens | cc | presse | ukjent
  credit: "Ola Nordmann" # navnet som skal krediteres, om påkrevd
  license: "CC BY-SA 4.0"
  licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/
```

Er `credit` satt, vises «Foto: …» under bildet automatisk.

## Registeret

**Status: delvis utfylt.** Jan Sindre har godkjent alt som viser ham selv –
vertportrettet og alle forsidene som er satt sammen av det. Gjestebildene og
plassholderen står fortsatt åpne, og skal ikke gjettes. Kjør
`npm run sjekk-innhold` for å se hva som mangler registrering i frontmatter.

| Fil | Brukt av | Opphav | Kreditering |
| --- | --- | --- | --- |
| `jan-sindre-heltne.jpg` | Forsiden, profilsiden, delebilde | Eget portrett, godkjent av Jan Sindre | Ikke påkrevd |
| `gjester/havard-hasund.jpg` | Gjestesiden | | |
| `gjester/john-erik.jpg` | Gjestesiden | | |
| `gjester/sturla.jpg` | Gjestesiden | | |
| `gjester/odin-aadland.jpg` | Gjestesiden | Levert av gjesten | Ikke påkrevd |
| `omslag/havard-hasund.jpg` | Episodeomslag | Utledet av gjestebildet over, `scripts/lag-omslag.py` | |
| `omslag/john-erik.jpg` | Episodeomslag | Utledet av gjestebildet over, `scripts/lag-omslag.py` | |
| `omslag/sturla.jpg` | Episodeomslag | Utledet av gjestebildet over, `scripts/lag-omslag.py` | |
| `omslag/odin-aadland.jpg` | Episodeomslag | Utledet av gjestebildet over, `scripts/lag-omslag.py` | Ikke påkrevd |
| `episoder/odin-hartransplantasjon.jpg` | Episodeomslag og delebilde | Eget opptak, Spørretimen | Ikke påkrevd |
| `episoder/kanada-ekspedisjon.jpg` | Episodeforside og delebilde | Satt sammen av vertportrettet og gjestebildet, `scripts/lag-forsidebilde.py` | Ikke påkrevd |
| `episoder/lege-episoden.jpg` | Episodeforside og delebilde | Satt sammen av vertportrettet og gjestebildet, `scripts/lag-forsidebilde.py` | Ikke påkrevd |
| `episoder/paramedisin.jpg` | Episodeforside og delebilde | Satt sammen av vertportrettet og gjestebildet, `scripts/lag-forsidebilde.py` | Ikke påkrevd |
| `episoder/sturla-artist-business.jpg` | Episodeforside og delebilde | Satt sammen av vertportrettet og gjestebildet, `scripts/lag-forsidebilde.py` | Ikke påkrevd |
| `episoder/`-forsider uten gjest (49 filer) | Episodeforside og delebilde | Satt sammen av vertportrettet alene, `scripts/lag-forsidebilde.py --solo` | Ikke påkrevd |
| `episoder/sovn-laer-noe-nytt.jpg` | Episodeforside og delebilde | Eldre forside i annen stil, viser verten | Ikke påkrevd |
| `episoder/sovn-kort-forklart.jpg` | Ubrukt | Eldre forside i annen stil, viser verten | Ikke påkrevd |
| `episoder/memorering-laer-noe-nytt.jpg` | Ubrukt (episoden bruker et annet omslag) | Eldre forside i annen stil, viser verten | Ikke påkrevd |
| `episoder/memorering-kort-forklart.jpg` | Ubrukt | Eldre forside i annen stil, viser verten | Ikke påkrevd |
| `episoder/mikrovaner-laer-noe-nytt.jpg` | Episodeforside og delebilde | Eldre forside i annen stil, viser verten | Ikke påkrevd |
| `episoder/laer-noe-nytt-brand.jpg` | Ubrukt | | |
| `episoder/kort-forklart-brand.jpg` | Ubrukt | | |
| `placeholder.jpg` | Plassholder | **Ikke avklart** – viser ingen person, så den falt utenfor godkjenningen | |

Merk: omslagene under `omslag/` er behandlede utsnitt av gjestebildene. De
arver rettighetene til originalen – er originalen uavklart, er omslaget det
også.
