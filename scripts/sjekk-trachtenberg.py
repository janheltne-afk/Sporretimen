#!/usr/bin/env python3
"""
Kontrollerer regnestykkene i Trachtenberg-episoden.

Episoden skriver ut en regel for hvert siffer fra 2 til 12, med et eksempel.
Skrivefeil i en slik regel er vanskelig å se, men lett å avsløre maskinelt.
Skriptet gjør to ting:

  1. Kjører hver regel slik den er formulert i episoden, på alle tall opp til
     20 000, og sammenligner med vanlig multiplikasjon.
  2. Plukker ut hvert «a × b = c» i episodefilen og regner etter.

Kjør:  python3 scripts/sjekk-trachtenberg.py
Skriptet avslutter med kode 1 hvis noe ikke stemmer.
"""

import re
import sys
from pathlib import Path

EPISODE = Path(__file__).resolve().parent.parent / (
    "src/content/episodes/gangetriks-trachtenberg.md"
)


def halve(x: int) -> int:
    """Halvparten rundet ned – slik «halve» er definert i systemet."""
    return x // 2


# Reglene, som de står i episoden. `rolle` er posisjonen i tallet:
# 'siste' = ytterste siffer til høyre, 'ledende' = den ledende nullen.
REGLER = {
    2: lambda d, n, rolle: 2 * d,
    3: lambda d, n, rolle: (
        2 * (10 - d) + (5 if d % 2 else 0) if rolle == "siste"
        else halve(n) - 2 if rolle == "ledende"
        else 2 * (9 - d) + (5 if d % 2 else 0) + halve(n)
    ),
    4: lambda d, n, rolle: (
        (10 - d) + (5 if d % 2 else 0) if rolle == "siste"
        else halve(n) - 1 if rolle == "ledende"
        else (9 - d) + (5 if d % 2 else 0) + halve(n)
    ),
    5: lambda d, n, rolle: halve(n) + (5 if d % 2 else 0),
    6: lambda d, n, rolle: d + halve(n) + (5 if d % 2 else 0),
    7: lambda d, n, rolle: 2 * d + halve(n) + (5 if d % 2 else 0),
    8: lambda d, n, rolle: (
        2 * (10 - d) if rolle == "siste"
        else n - 2 if rolle == "ledende"
        else 2 * (9 - d) + n
    ),
    9: lambda d, n, rolle: (
        10 - d if rolle == "siste"
        else n - 1 if rolle == "ledende"
        else 9 - d + n
    ),
    11: lambda d, n, rolle: d + n,
    12: lambda d, n, rolle: 2 * d + n,
}


def gang(tall: int, faktor: int) -> int:
    """Ganger med Trachtenberg-regelen for `faktor`, høyre mot venstre."""
    sifre = [0, 0] + [int(c) for c in str(tall)]
    lengde = len(sifre)
    svar, mente = [], 0

    for i in range(lengde - 1, -1, -1):
        siffer = sifre[i]
        nabo = sifre[i + 1] if i + 1 < lengde else 0
        if i == lengde - 1:
            rolle = "siste"
        elif i == 1:
            rolle = "ledende"
        elif i == 0:
            rolle = "utenfor"
        else:
            rolle = "midten"

        verdi = 0 if rolle == "utenfor" else REGLER[faktor](siffer, nabo, rolle)
        verdi += mente
        if verdi < 0:
            raise ValueError(f"negativt mellomresultat for {tall} × {faktor}")
        svar.append(verdi % 10)
        mente = verdi // 10

    if mente:
        raise ValueError(f"mente til overs for {tall} × {faktor}")
    return int("".join(str(s) for s in reversed(svar)).lstrip("0") or "0")


def sjekk_regler(opp_til: int = 20_000) -> list[str]:
    feil = []
    for faktor in sorted(REGLER):
        avvik = 0
        for tall in range(1, opp_til + 1):
            try:
                if gang(tall, faktor) != tall * faktor:
                    avvik += 1
            except ValueError:
                avvik += 1
            if avvik:
                feil.append(f"regelen for {faktor} feiler, første gang på {tall}")
                break
        else:
            print(f"  × {faktor:<2} regelen stemmer for alle tall opp til {opp_til:,}"
                  .replace(",", " "))
    return feil


def sjekk_eksempler() -> list[str]:
    tekst = EPISODE.read_text(encoding="utf-8")
    # Tusenskille i teksten er hardt mellomrom
    tall = lambda s: int(s.replace(" ", "").replace(" ", ""))
    mønster = re.compile(r"(\d[\d  ]*?)\s*×\s*(\d[\d  ]*?)\s*=\s*(\d[\d  ]*)")

    feil, antall = [], 0
    for treff in mønster.finditer(tekst):
        a, b, c = (tall(g) for g in treff.groups())
        antall += 1
        if a * b != c:
            feil.append(f"«{a} × {b} = {c}» skulle vært {a * b}")
    print(f"  {antall} regnestykker i episoden kontrollert")
    return feil


if __name__ == "__main__":
    print("Reglene:")
    feil = sjekk_regler()
    print("Eksemplene:")
    feil += sjekk_eksempler()

    if feil:
        print("\nFEIL:")
        for f in feil:
            print(f"  - {f}")
        sys.exit(1)
    print("\nAlt stemmer.")
