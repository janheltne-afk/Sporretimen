#!/usr/bin/env python3
"""
Sjekker at merkevare/tokens.json fortsatt stemmer med kildene.

Tokens-fila er det video, slides og grafikk bygges på. Den er en avskrift av
verdier som egentlig bor i stilarkene og i forsideskriptet, og en avskrift
råtner. Denne sjekken leser begge sider og sier fra når de spriker.

    python3 scripts/sjekk-merkevare.py      # eller: npm run sjekk-merkevare

Avslutter med kode 1 hvis noe har glidd fra hverandre.
"""

import json
import re
import sys
from pathlib import Path

ROT = Path(__file__).resolve().parent.parent


def les(sti: str) -> str:
    return (ROT / sti).read_text(encoding="utf-8")


def main() -> int:
    tok = json.loads(les("merkevare/tokens.json"))
    css = les("src/styles/global.css")
    py = les("scripts/lag-forsidebilde.py")
    tax = les("src/i18n/taxonomy.ts")
    fav = les("public/favicon.svg")

    avvik: list[str] = []

    # Stilarket har tre kopier av temaet. Den første :root-blokka er lys,
    # data-theme='dark' er mørk, og media-spørringen speiler den mørke.
    lys_blokk = css[css.index(":root {"):css.index(":root[data-theme='dark']")]
    mork_blokk = css[
        css.index(":root[data-theme='dark']"):css.index("@media (prefers-color-scheme: dark)")
    ]

    def variabel(blokk: str, navn: str) -> str | None:
        m = re.search(rf"--{re.escape(navn)}:\s*([^;]+);", blokk)
        # Kommentaren bak verdien er ikke del av verdien.
        return m.group(1).split("/")[0].strip() if m else None

    # --- Flater, blekk, linjer og aksent ---------------------------------
    for tema, blokk in (("lys", lys_blokk), ("mork", mork_blokk)):
        for navn, verdi in tok["farger"][tema].items():
            faktisk = variabel(blokk, navn)
            if faktisk is None:
                avvik.append(f"farger/{tema}: --{navn} finnes ikke i global.css")
            elif faktisk.lower() != verdi.lower():
                avvik.append(f"farger/{tema}/{navn}: {faktisk} i CSS, {verdi} i tokens")

    # --- Formatfarger ----------------------------------------------------
    css_navn = {
        "samtale": "tag-samtale",
        "laer-noe-nytt": "tag-laer",
        "kort-forklart": "tag-kort",
    }
    for tema, blokk in (("lys", lys_blokk), ("mork", mork_blokk)):
        for fid, base in css_navn.items():
            for rolle, suffiks in (("tekst", ""), ("flate", "-bg")):
                faktisk = variabel(blokk, base + suffiks)
                verdi = tok["farger"]["format"][tema][fid][rolle]
                if faktisk is None or faktisk.lower() != verdi.lower():
                    avvik.append(
                        f"farger/format/{tema}/{fid}/{rolle}: "
                        f"{faktisk or 'mangler'} i CSS, {verdi} i tokens"
                    )

    # --- Forsidepaletten, som ligger som RGB-tupler i forsideskriptet ----
    kart = {
        "grunn": "GRUNN",
        "lys": "LYS",
        "gull": "GULL",
        "krem": "KREM",
        "dempet-gull": "DEMPET_GULL",
        "strek": "STREK",
    }
    for nokkel, konstant in kart.items():
        m = re.search(rf"^{konstant} = \((\d+), (\d+), (\d+)\)", py, re.M)
        if not m:
            avvik.append(f"farger/forside/{nokkel}: {konstant} finnes ikke i skriptet")
            continue
        fra_skript = "#%02x%02x%02x" % tuple(int(x) for x in m.groups())
        verdi = tok["farger"]["forside"][nokkel]
        if fra_skript != verdi.lower():
            avvik.append(
                f"farger/forside/{nokkel}: {fra_skript} i skriptet, {verdi} i tokens"
            )

    # --- Faviconet -------------------------------------------------------
    for nokkel, verdi in tok["farger"]["favicon"].items():
        if verdi.lower() not in fav.lower():
            avvik.append(f"farger/favicon/{nokkel}: {verdi} finnes ikke i favicon.svg")

    # --- Oppsettet på forsidene -----------------------------------------
    konstanter = dict(
        re.findall(r"^(Y_[A-Z_]+|H_[A-Z_]+|TEKST_X|SOLO_X|SOLO_MAKS) = ([\d.]+)", py, re.M)
    )
    med = tok["forsideoppsett"]["med-gjest"]
    uten = tok["forsideoppsett"]["uten-gjest"]
    plassering = [
        ("med-gjest/tekst-x", med["tekst-x"], "TEKST_X"),
        ("med-gjest/ordmerke", med["elementer"]["ordmerke"]["y"], "Y_ORDMERKE"),
        ("med-gjest/tittel", med["elementer"]["tittel"]["y"], "Y_TITTEL"),
        ("med-gjest/undertittel", med["elementer"]["undertittel"]["y"], "Y_UNDERTITTEL"),
        ("med-gjest/stikkord", med["elementer"]["stikkord"]["y"], "Y_STIKKORD"),
        ("uten-gjest/tekst-x", uten["tekst-x"], "SOLO_X"),
        ("uten-gjest/maks-bredde", uten["tekst-maks-bredde"], "SOLO_MAKS"),
        ("uten-gjest/ordmerke", uten["elementer"]["ordmerke"]["y"], "Y_SOLO_ORDMERKE"),
        ("uten-gjest/formatmerke", uten["elementer"]["formatmerke"]["y"], "Y_SOLO_MERKE"),
        ("uten-gjest/tittel", uten["elementer"]["tittel"]["y"], "Y_SOLO_TITTEL"),
    ]
    for navn, verdi, konstant in plassering:
        if konstant not in konstanter:
            avvik.append(f"forsideoppsett/{navn}: {konstant} finnes ikke i skriptet")
        elif abs(float(konstanter[konstant]) - verdi) > 1e-9:
            avvik.append(
                f"forsideoppsett/{navn}: {konstanter[konstant]} i skriptet, {verdi} i tokens"
            )

    for fid, merke in tok["forsideoppsett"]["formatmerke"].items():
        if fid.startswith("$"):
            continue
        if f'"{fid}": "{merke}"' not in py:
            avvik.append(f"forsideoppsett/formatmerke/{fid}: «{merke}» stemmer ikke med skriptet")

    # --- Kanalene. Feil kanal sender folk til feil språk. ----------------
    for sid, serie in tok["serier"].items():
        if sid.startswith("$"):
            continue
        for gruppe in ("kanaler", "kanaler-en"):
            for plattform, url in serie.get(gruppe, {}).items():
                if url not in tax:
                    avvik.append(f"serier/{sid}/{gruppe}/{plattform}: {url} finnes ikke i taxonomy.ts")

    # --- Fontfilene ------------------------------------------------------
    for rolle in ("display", "sans"):
        for fil in tok["typografi"]["familier"][rolle]["filer"]:
            if not (ROT / fil).exists():
                avvik.append(f"typografi/{rolle}: {fil} finnes ikke")

    if avvik:
        print("Merkevaren og kildene har glidd fra hverandre:\n")
        for a in avvik:
            print(f"  {a}")
        print(f"\n{len(avvik)} avvik. Rett opp i merkevare/tokens.json, eller i kilden.")
        return 1

    print("Merkevaren stemmer med kildene.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
