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

**Status: ikke utfylt.** Kolonnen «opphav» må fylles ut av Jan Sindre – den skal
ikke gjettes. Kjør `npm run sjekk-innhold` for å se hvilke bilder som mangler
registrering i frontmatter.

| Fil | Brukt av | Opphav | Kreditering |
| --- | --- | --- | --- |
| `jan-sindre-heltne.jpg` | Forsiden, profilsiden, delebilde | | |
| `gjester/havard-hasund.jpg` | Gjestesiden | | |
| `gjester/john-erik.jpg` | Gjestesiden | | |
| `gjester/sturla.jpg` | Gjestesiden | | |
| `gjester/odin-aadland.jpg` | Gjestesiden | Levert av gjesten | Ikke påkrevd |
| `omslag/havard-hasund.jpg` | Episodeomslag | Utledet av gjestebildet over, `scripts/lag-omslag.py` | |
| `omslag/john-erik.jpg` | Episodeomslag | Utledet av gjestebildet over, `scripts/lag-omslag.py` | |
| `omslag/sturla.jpg` | Episodeomslag | Utledet av gjestebildet over, `scripts/lag-omslag.py` | |
| `omslag/odin-aadland.jpg` | Episodeomslag | Utledet av gjestebildet over, `scripts/lag-omslag.py` | Ikke påkrevd |
| `episoder/odin-hartransplantasjon.jpg` | Episodeomslag og delebilde | Eget opptak, Spørretimen | Ikke påkrevd |
| `episoder/kanada-ekspedisjon.jpg` | Delebilde | | |
| `episoder/lege-episoden.jpg` | Delebilde | | |
| `episoder/paramedisin.jpg` | Delebilde | | |
| `episoder/sturla-artist-business.jpg` | Delebilde | | |
| `episoder/sovn-laer-noe-nytt.jpg` | Delebilde | | |
| `episoder/sovn-kort-forklart.jpg` | Delebilde | | |
| `episoder/memorering-laer-noe-nytt.jpg` | Delebilde | | |
| `episoder/memorering-kort-forklart.jpg` | Delebilde | | |
| `episoder/mikrovaner-laer-noe-nytt.jpg` | Delebilde | | |
| `episoder/laer-noe-nytt-brand.jpg` | Ubrukt | | |
| `episoder/kort-forklart-brand.jpg` | Ubrukt | | |
| `placeholder.jpg` | Plassholder | | |

Merk: omslagene under `omslag/` er behandlede utsnitt av gjestebildene. De
arver rettighetene til originalen – er originalen uavklart, er omslaget det
også.
