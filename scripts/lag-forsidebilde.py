#!/usr/bin/env python3
"""
Lager episodeforsider i samme oppsett som Odin-bildet: gjesten til venstre,
Jan Sindre til høyre, og tittelen i midten på en varm, nær-svart flate.

Jan Sindre hentes fra sitt eget studioportrett, slik at verten ser lik ut på
alle episodene. Gjesten klippes ut av sitt eget bilde og graderes ned til samme
tone. Mikrofonen er den samme, hentet fra studioportrettet og speilet på
venstresiden.

Teksten settes i nettsidens egne fonter – Newsreader til tittel og undertittel,
Inter til stikkordlinjen – som konverteres fra woff2 ved kjøring.

Krever pillow, rembg, onnxruntime, fonttools og brotli. Modellen
(u2net_human_seg) er den samme som scripts/lag-omslag.py bruker.

    pip install pillow rembg onnxruntime fonttools brotli
    python3 scripts/lag-forsidebilde.py            # alle
    python3 scripts/lag-forsidebilde.py --solo     # bare de uten gjest
    python3 scripts/lag-forsidebilde.py lege-episoden

Odin-episoden er ikke med her. Det bildet er laget for hånd som et ekte
studioopptak, og er bedre enn det dette skriptet kan sette sammen. Ligger et
håndlaget bilde i public/images/episoder, skal det ikke overskrives.

De ferdige filene sjekkes inn, så nettsiden ikke er avhengig av verktøyet.
"""

import sys
import tempfile
from pathlib import Path

from PIL import (Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter,
                 ImageFont, ImageOps)

ROT = Path(__file__).resolve().parent.parent
GJESTEBILDER = ROT / "public/images/gjester"
VERT = ROT / "public/images/jan-sindre-heltne.jpg"
MAAL = ROT / "public/images/episoder"
FONTKILDE = ROT / "public/fonts"

BREDDE, HOYDE = 1280, 720

# Flaten. Samme grunntone som omslagene, litt varmere lys.
GRUNN = (16, 14, 11)
LYS = (201, 141, 78)

GULL = (226, 203, 150)
KREM = (236, 230, 214)
DEMPET_GULL = (186, 163, 118)
STREK = (150, 126, 88)

# Utsnittet av vertportrettet som brukes. Venstre kant er satt slik at
# «Spørretimen»-teksten som ligger i bildet fra før, faller utenfor.
VERT_UTSNITT = (0.42, 0.0, 1.0, 1.0)
MIKROFON_UTSNITT = (0.00, 0.55, 0.36, 1.0)
# «Spørretimen» ligger allerede i vertportrettet, og må vekk før utsnittet
# brukes på nytt. Feltet er målt i bildet.
ORDMERKE_FELT = (0.015, 0.365, 0.505, 0.552)

# Vertens størrelse og plassering. VERT_ANSIKT_I_UTSNITT er hvor ansiktet
# ligger i utsnittet, som andel av bredden.
VERT_HOYDE = 1.04
VERT_ANSIKT_X = 0.885
VERT_ANSIKT_I_UTSNITT = 0.26

EPISODER = {
    "lege-episoden": {
        "gjest": "john-erik",
        "tittel": "LEGEYRKET",
        "undertittel": "John Erik forteller hvordan det faktisk er",
        "stikkord": "studiet • hverdagen • ansvaret",
        "gjest_skala": 1.02,
        "gjest_x": 0.17,
        "gjest_luft": 0.06,
    },
    "paramedisin": {
        "gjest": "havard-hasund",
        "tittel": "AMBULANSEN",
        "undertittel": "Håvard om by, bygd og alt imellom",
        "stikkord": "utdanning • turer • debriefing",
        # Bildet er en selfie der armen tar stor plass. Utsnittet trimmer
        # torsoen, så figuren blir stående som et portrett.
        "gjest_utsnitt": (0.30, 0.09, 0.88, 1.0),
        "gjest_skala": 0.86,
        "gjest_x": 0.150,
        "gjest_luft": 0.13,
    },
    "kanada-ekspedisjon": {
        "gjest": "havard-hasund",
        "tittel": "KANADA",
        "undertittel": "Håvard om turen, ruta og beredskapen",
        "stikkord": "planlegging • risiko • villmark",
        "gjest_utsnitt": (0.30, 0.09, 0.88, 1.0),
        "gjest_skala": 0.86,
        "gjest_x": 0.150,
        "gjest_luft": 0.13,
    },
    "sturla-artist-business": {
        "gjest": "sturla",
        "tittel": "ARTIST OG BEDRIFT",
        "undertittel": "Sturla om musikken som næring",
        "stikkord": "inntekter • rettigheter • publikum",
        "gjest_skala": 1.02,
        "gjest_x": 0.17,
        "gjest_luft": 0.06,
    },
}

# Episoder uten gjest får en enklere forside: Jan Sindre til høyre, og
# tittelen venstrestilt. Tittel og format hentes fra episodefilen, så bare
# undertekstlinjen står her. Bokepisodene får bok og forfatter automatisk.
SOLO_UNDERTEKST = {
    "erp-wms-integrasjon": "Da to systemer skulle snakke sammen",
    "ten-t-transportnettet": "EUs transportnett, og Norges plass i det",
    "kabotasje-godstransport": "Reglene for utenlandske lastebiler i Norge",
    "sjoruter-suez-panama-arktis": "Suez, Panama og rutene over toppen",
    "container-teu-feu": "Målene som styrer verdenshandelen",
    "tolltariffen-varenummer": "Hvordan en vare blir en kode",
    "kjore-og-hviletid": "Fartsskriveren, kortet og timene",
    "f1-logistikk-dhl": "Å flytte et sirkus 24 ganger i året",
    "ford-samlebandet": "Det begynte i slakteriet",
    "taylor-og-tps": "Stoppeklokka, snora og menneskene",
    "fokus-laer-noe-nytt": "Hvorfor oppmerksomhet er ferskvare",
    "gangetabellen": "Slik fester den for godt",
    "gangetriks-trachtenberg": "Regnetriksene fra en fange i Berlin",
    "gs1-strekkoder": "Hva strekkoden faktisk sier",
    "hoderegning-deling": "Del store tall uten kalkulator",
    "hoderegning-pluss-minus": "Legg sammen og trekk fra i hodet",
    "hoderegning-prosent": "Prosent uten penn og papir",
    "incoterms-2020": "Hvem betaler, og hvem har risikoen",
    "lean-forklart": "Å fjerne alt som ikke skaper verdi",
    "logiske-feilslutninger": "Feilene som høres riktige ut",
    "rfid-forklart": "Brikkene som teller for deg",
    "rfid-varetelling": "Fra 14 dager til to timer",
}

FORMATMERKE = {
    "laer-noe-nytt": "LÆR NOE NYTT",
    "boker-forklart": "BØKER FORKLART",
    "kort-forklart": "KORT FORKLART",
}

# Tekstblokken, som andel av bredde og høyde. Målt på Odin-bildet.
TEKST_X = 0.500
Y_STREK_OVER = 0.070
Y_ORDMERKE = 0.100
Y_STREK_UNDER = 0.172
Y_TITTEL = 0.250
Y_UNDERTITTEL = 0.430
Y_STREK_LAV = 0.545
Y_STIKKORD = 0.575


def fonter() -> dict:
    """Henter nettsidens fonter ut av woff2 og setter dem i faste vekter."""
    from fontTools.ttLib import TTFont
    from fontTools.varLib import instancer

    ut = Path(tempfile.mkdtemp(prefix="sporretimen-fonter-"))
    spec = {
        "serif-700": ("newsreader-latin-wght-normal.woff2", 700),
        "serif-600": ("newsreader-latin-wght-normal.woff2", 600),
        "serif-400": ("newsreader-latin-wght-normal.woff2", 400),
        "kursiv-400": ("newsreader-latin-wght-italic.woff2", 400),
        "sans-600": ("inter-latin-wght-normal.woff2", 600),
    }
    stier = {}
    for navn, (fil, vekt) in spec.items():
        f = TTFont(FONTKILDE / fil)
        f.flavor = None
        f = instancer.instantiateVariableFont(f, {"wght": vekt})
        sti = ut / f"{navn}.ttf"
        f.save(sti)
        stier[navn] = sti
    return stier


def grunnflate() -> Image.Image:
    """Varm, nær-svart flate med et mykt lys til venstre og oppe til høyre."""
    flate = Image.new("RGB", (BREDDE, HOYDE), GRUNN)
    liten = Image.new("L", (BREDDE // 8, HOYDE // 8), 0)
    tegn = ImageDraw.Draw(liten)
    for cx, cy, r, styrke in ((0.10, 0.28, 0.42, 54), (0.78, 0.04, 0.46, 30)):
        px, py = int(liten.width * cx), int(liten.height * cy)
        radius = int(liten.width * r)
        for i in range(radius, 0, -2):
            verdi = int(styrke * (1 - i / radius) ** 2.6)
            if verdi:
                tegn.ellipse(
                    [px - i, py - i * 1.15, px + i, py + i * 1.15],
                    fill=max(verdi, liten.getpixel((px, py)) if i == radius else 0),
                )
    maske = liten.resize((BREDDE, HOYDE), Image.LANCZOS).filter(
        ImageFilter.GaussianBlur(50)
    )
    flate.paste(Image.new("RGB", (BREDDE, HOYDE), LYS), (0, 0), maske)
    return flate


def graderes(bilde: Image.Image, lysstyrke: float = 0.74) -> Image.Image:
    """Demper dagslyset og trekker fargene mot flatens varme tone."""
    har_alfa = bilde.mode == "RGBA"
    alfa = bilde.getchannel("A") if har_alfa else None
    rgb = bilde.convert("RGB")
    rgb = ImageEnhance.Brightness(rgb).enhance(lysstyrke)
    rgb = ImageEnhance.Color(rgb).enhance(0.66)
    rgb = ImageEnhance.Contrast(rgb).enhance(1.05)
    r, g, b = rgb.split()
    r = r.point(lambda v: min(255, int(v * 1.06 + 5)))
    g = g.point(lambda v: min(255, int(v * 1.0 + 2)))
    b = b.point(lambda v: int(v * 0.87))
    rgb = Image.merge("RGB", (r, g, b))
    if har_alfa:
        rgb.putalpha(alfa)
    return rgb


def bunnfall(person: Image.Image, fra: float = 0.60) -> Image.Image:
    """Lar lyset falle av mot bunnen, så figuren kommer ut av mørket."""
    h = person.height
    fade = Image.new("L", (1, h), 255)
    piksler = fade.load()
    start = int(h * fra)
    for y in range(start, h):
        andel = (y - start) / max(1, h - start)
        piksler[0, y] = int(255 * max(0.0, 1 - andel**1.7))
    fade = fade.resize((person.width, h))
    ut = person.copy()
    ut.putalpha(ImageChops.multiply(person.getchannel("A"), fade))
    return ut


def kantmyking(bilde: Image.Image, venstre: int = 0, hoyre: int = 0,
               topp: int = 0, bunn: int = 0) -> Image.Image:
    """Mykner kantene på et rektangulært utsnitt, så det glir inn i flaten."""
    b, h = bilde.size
    maske = Image.new("L", (b, h), 255)
    tegn = ImageDraw.Draw(maske)
    for i in range(venstre):
        tegn.line([(i, 0), (i, h)], fill=int(255 * (i / max(1, venstre)) ** 1.4))
    for i in range(hoyre):
        tegn.line([(b - 1 - i, 0), (b - 1 - i, h)],
                  fill=int(255 * (i / max(1, hoyre)) ** 1.4))
    for i in range(topp):
        tegn.line([(0, i), (b, i)], fill=int(255 * (i / max(1, topp)) ** 1.4))
    for i in range(bunn):
        tegn.line([(0, h - 1 - i), (b, h - 1 - i)],
                  fill=int(255 * (i / max(1, bunn)) ** 1.4))
    ut = bilde.convert("RGBA")
    ut.putalpha(maske)
    return ut


def utsnitt(bilde: Image.Image, boks) -> Image.Image:
    b, h = bilde.size
    x0, y0, x1, y1 = boks
    return bilde.crop((int(b * x0), int(h * y0), int(b * x1), int(h * y1)))


def legg_inn_vert(flate: Image.Image) -> Image.Image:
    """Jan Sindre til høyre, hentet fra sitt eget studioportrett."""
    person = utsnitt(vertkilde(), VERT_UTSNITT)
    mal_h = int(HOYDE * VERT_HOYDE)
    person = person.resize(
        (max(1, int(person.width * mal_h / person.height)), mal_h), Image.LANCZOS
    )
    person = graderes(person, 1.04)
    person = kantmyking(person, venstre=120, topp=30, bunn=0)
    # Ansiktet plasseres der det skal stå, så tittelen alltid får samme klaring.
    x = int(BREDDE * VERT_ANSIKT_X - person.width * VERT_ANSIKT_I_UTSNITT)
    flate = flate.convert("RGBA")
    flate.alpha_composite(person, (x, HOYDE - person.height))
    return flate.convert("RGB")


def vertkilde() -> Image.Image:
    """Vertportrettet med det innbakte ordmerket klonet bort."""
    kilde = Image.open(VERT).convert("RGB")
    b, h = kilde.size
    x0, y0, x1, y1 = ORDMERKE_FELT
    x0, y0, x1, y1 = int(b * x0), int(h * y0), int(b * x1), int(h * y1)
    hoyde = y1 - y0
    # Bakgrunnen over ordmerket er jevn, så feltet fylles med et speilvendt
    # bånd derfra. Deretter mykes overgangen med en lett uskarphet.
    band = kilde.crop((x0, y0 - hoyde, x1, y0)).transpose(Image.FLIP_TOP_BOTTOM)
    kilde.paste(band, (x0, y0))
    luft = 14
    felt = (max(0, x0 - luft), max(0, y0 - luft),
            min(b, x1 + luft), min(h, y1 + luft))
    kilde.paste(kilde.crop(felt).filter(ImageFilter.GaussianBlur(7)), felt[:2])
    return kilde


def morkere_enn_omgivelsene(bilde: Image.Image, styrke: float = 22.0,
                            gulv: int = 4) -> Image.Image:
    """
    Maske for et mørkt motiv på en lysere flate.

    Mikrofonen er svart mot en mørk grå vegg. Forskjellen er for liten til at
    en terskel fungerer, men den er tydelig nok lokalt: hver piksel måles mot
    en kraftig uskarp utgave av bildet selv, og det som er mørkere enn sine
    egne omgivelser, blir stående. Veggen faller ut, mikrofonen blir igjen.
    """
    lys = ImageOps.grayscale(bilde)
    omgivelser = lys.filter(ImageFilter.GaussianBlur(45))
    diff = ImageChops.subtract(omgivelser, lys)
    # Gulvet luker bort veggteksturen, så bare selve mikrofonen blir stående.
    maske = diff.point(lambda v: min(255, int(max(0, v - gulv) * styrke)))
    maske = maske.point(lambda v: int(255 * (v / 255) ** 1.5))
    return maske.filter(ImageFilter.GaussianBlur(2))


def legg_inn_mikrofon(flate: Image.Image, x_senter: float, skala: float,
                      speil: bool) -> Image.Image:
    """Samme mikrofon som i studioportrettet, i forgrunnen."""
    mik = utsnitt(vertkilde(), MIKROFON_UTSNITT)
    mal_h = int(HOYDE * skala)
    mik = mik.resize(
        (max(1, int(mik.width * mal_h / mik.height)), mal_h), Image.LANCZOS
    )
    if speil:
        mik = mik.transpose(Image.FLIP_LEFT_RIGHT)
    maske = morkere_enn_omgivelsene(mik)
    mik = graderes(mik, 1.30).convert("RGBA")
    mik.putalpha(maske)
    x = int(BREDDE * x_senter - mik.width / 2)
    flate = flate.convert("RGBA")
    flate.alpha_composite(mik, (x, HOYDE - mik.height))
    return flate.convert("RGB")


def legg_inn_gjest(flate: Image.Image, navn: str, innstilling: dict, sess) -> Image.Image:
    from rembg import remove

    gjestebilde = Image.open(GJESTEBILDER / f"{navn}.jpg").convert("RGB")
    if innstilling.get("gjest_utsnitt"):
        gjestebilde = utsnitt(gjestebilde, innstilling["gjest_utsnitt"])
    utklipp = remove(
        gjestebilde,
        session=sess,
        alpha_matting=True,
        alpha_matting_foreground_threshold=250,
        alpha_matting_background_threshold=15,
        alpha_matting_erode_size=6,
    ).convert("RGBA")
    boks = utklipp.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    if boks:
        utklipp = utklipp.crop(boks)

    mal_h = int(HOYDE * innstilling["gjest_skala"])
    person = utklipp.resize(
        (max(1, int(utklipp.width * mal_h / utklipp.height)), mal_h), Image.LANCZOS
    )
    person = bunnfall(graderes(person))

    x = int(BREDDE * innstilling["gjest_x"] - person.width / 2)
    y = int(HOYDE * innstilling["gjest_luft"])

    glod = person.getchannel("A").filter(ImageFilter.GaussianBlur(30))
    glod = glod.point(lambda v: int(v * 0.14))
    lag = Image.new("RGBA", (BREDDE, HOYDE), (0, 0, 0, 0))
    lag.paste(Image.new("RGB", person.size, LYS), (x, y), glod)
    flate = Image.alpha_composite(flate.convert("RGBA"), lag)
    flate.alpha_composite(person, (x, y))
    return flate.convert("RGB")


def sperret(tegn, xy, tekst, font, fyll, sperring):
    """Skriver tekst med ekstra luft mellom bokstavene, sentrert om xy."""
    bredder = [tegn.textlength(t, font=font) for t in tekst]
    total = sum(bredder) + sperring * max(0, len(tekst) - 1)
    x = xy[0] - total / 2
    for t, b in zip(tekst, bredder):
        tegn.text((x, xy[1]), t, font=font, fill=fyll)
        x += b + sperring


def passer(tegn, tekst, sti, maks_bredde, start, minste=30):
    """Finner største punktstørrelse som holder teksten innenfor bredden."""
    for storrelse in range(start, minste - 1, -2):
        font = ImageFont.truetype(str(sti), storrelse)
        if tegn.textlength(tekst, font=font) <= maks_bredde:
            return font
    return ImageFont.truetype(str(sti), minste)


def legg_inn_tekst(flate: Image.Image, innstilling: dict, f: dict) -> Image.Image:
    lag = Image.new("RGBA", (BREDDE, HOYDE), (0, 0, 0, 0))
    tegn = ImageDraw.Draw(lag)
    midt = BREDDE * TEKST_X
    maks = int(BREDDE * 0.58)

    for y, halvbredde in ((Y_STREK_OVER, 0.105), (Y_STREK_UNDER, 0.145),
                          (Y_STREK_LAV, 0.145)):
        tegn.line(
            [(midt - BREDDE * halvbredde, HOYDE * y),
             (midt + BREDDE * halvbredde, HOYDE * y)],
            fill=STREK + (150,), width=1,
        )

    ordmerke = ImageFont.truetype(str(f["serif-400"]), 46)
    tegn.text((midt, HOYDE * Y_ORDMERKE), "Spørretimen", font=ordmerke,
              fill=KREM, anchor="ma")

    tittel = passer(tegn, innstilling["tittel"], f["serif-700"], maks, 92)
    tegn.text((midt, HOYDE * Y_TITTEL), innstilling["tittel"], font=tittel,
              fill=GULL, anchor="ma")

    under = passer(tegn, innstilling["undertittel"], f["kursiv-400"], maks, 46)
    tegn.text((midt, HOYDE * Y_UNDERTITTEL), innstilling["undertittel"],
              font=under, fill=KREM, anchor="ma")

    stikkord = ImageFont.truetype(str(f["sans-600"]), 19)
    sperret(tegn, (midt, HOYDE * Y_STIKKORD), innstilling["stikkord"].upper(),
            stikkord, DEMPET_GULL, 3.4)

    return Image.alpha_composite(flate.convert("RGBA"), lag).convert("RGB")


SOLO_X = 0.065
SOLO_MAKS = 0.56
Y_SOLO_ORDMERKE = 0.115
Y_SOLO_STREK = 0.215
Y_SOLO_MERKE = 0.250
H_SOLO_MERKE = 0.110
Y_SOLO_TITTEL = 0.430
Y_SOLO_STREK_LAV = 0.730
Y_SOLO_UNDER = 0.765
Y_SOLO_LITEN = 0.860


def les_episode(slug: str) -> dict:
    """Henter tittel, format og bokopplysninger ut av episodefilen."""
    import re

    sti = ROT / "src/content/episodes" / f"{slug}.md"
    tekst = sti.read_text(encoding="utf-8")
    fm = tekst[: tekst.index("\n---\n", 3)]

    def felt(navn, kilde=fm):
        treff = re.search(rf'^ *{navn}: *"?(.+?)"?$', kilde, re.M)
        return treff.group(1).strip() if treff else ""

    bokblokk = re.search(r"^book:\n((?:  .+\n)+)", fm, re.M)
    bok = bokblokk.group(1) if bokblokk else ""
    return {
        "tittel": felt("coverTheme"),
        "format": felt("format"),
        "bok": felt("title", bok),
        "forfatter": felt("author", bok),
    }


def undertekst(slug: str, data: dict) -> tuple:
    """Returnerer linjen i kursiv, og den lille sperrede linjen under."""
    if slug in SOLO_UNDERTEKST:
        return SOLO_UNDERTEKST[slug], ""
    return data["bok"], data["forfatter"]


def merkeboks(tegn, x, y, tekst, font, sperring=3.6):
    """Rammen rundt formatnavnet, slik den er på de eldre forsidene."""
    bredder = [tegn.textlength(t, font=font) for t in tekst]
    innhold = sum(bredder) + sperring * max(0, len(tekst) - 1)
    luft_x, luft_y = 26, 16
    hoyde = HOYDE * H_SOLO_MERKE
    tegn.rectangle([x, y, x + innhold + luft_x * 2, y + hoyde],
                   outline=STREK + (210,), width=2)
    tx = x + luft_x
    ty = y + (hoyde - font.size) / 2 - luft_y * 0.12
    for t, b in zip(tekst, bredder):
        tegn.text((tx, ty), t, font=font, fill=GULL)
        tx += b + sperring


def sperret_venstre(tegn, xy, tekst, font, fyll, sperring):
    """Som sperret(), men forankret i venstre kant."""
    x, y = xy
    for t in tekst:
        tegn.text((x, y), t, font=font, fill=fyll)
        x += tegn.textlength(t, font=font) + sperring


def legg_inn_solotekst(flate: Image.Image, data: dict, under: str, liten: str,
                       f: dict) -> Image.Image:
    lag = Image.new("RGBA", (BREDDE, HOYDE), (0, 0, 0, 0))
    tegn = ImageDraw.Draw(lag)
    x = BREDDE * SOLO_X
    maks = int(BREDDE * SOLO_MAKS)

    ordmerke = ImageFont.truetype(str(f["serif-600"]), 40)
    sperret_venstre(tegn, (x, HOYDE * Y_SOLO_ORDMERKE), "SPØRRETIMEN",
                    ordmerke, KREM, 5.5)

    tegn.line([(x, HOYDE * Y_SOLO_STREK), (x + maks, HOYDE * Y_SOLO_STREK)],
              fill=STREK + (170,), width=1)

    merke = ImageFont.truetype(str(f["sans-600"]), 22)
    merkeboks(tegn, x, HOYDE * Y_SOLO_MERKE,
              FORMATMERKE.get(data["format"], "SPØRRETIMEN"), merke)

    tittel = passer(tegn, data["tittel"].upper(), f["serif-700"], maks, 122)
    tegn.text((x, HOYDE * Y_SOLO_TITTEL), data["tittel"].upper(), font=tittel,
              fill=GULL, anchor="la")

    tegn.line([(x, HOYDE * Y_SOLO_STREK_LAV),
               (x + maks * 0.62, HOYDE * Y_SOLO_STREK_LAV)],
              fill=STREK + (150,), width=1)

    if under:
        under_font = passer(tegn, under, f["kursiv-400"], maks, 42, minste=22)
        tegn.text((x, HOYDE * Y_SOLO_UNDER), under, font=under_font,
                  fill=KREM, anchor="la")
    if liten:
        liten_font = ImageFont.truetype(str(f["sans-600"]), 19)
        sperret_venstre(tegn, (x, HOYDE * Y_SOLO_LITEN), liten.upper(),
                        liten_font, DEMPET_GULL, 3.2)

    return Image.alpha_composite(flate.convert("RGBA"), lag).convert("RGB")


def lag_solo(slug: str, sess, f: dict) -> Path:
    data = les_episode(slug)
    if not data["tittel"]:
        raise SystemExit(f"{slug}: mangler coverTheme, som brukes som tittel")
    flate = grunnflate()
    flate = legg_inn_vert(flate)
    flate = legg_inn_mikrofon(flate, 0.80, 0.42, speil=False)
    under, liten = undertekst(slug, data)
    flate = legg_inn_solotekst(flate, data, under, liten, f)
    ferdig = vignett(flate)
    MAAL.mkdir(parents=True, exist_ok=True)
    ut = MAAL / f"{slug}.jpg"
    ferdig.save(ut, quality=88, optimize=True, progressive=True)
    return ut


def uten_bilde() -> list:
    """Episodene som ennå ikke har et forsidebilde."""
    import re

    funnet = []
    for sti in sorted((ROT / "src/content/episodes").glob("*.md")):
        tekst = sti.read_text(encoding="utf-8")
        fm = tekst[: tekst.index("\n---\n", 3)]
        if not re.search(r"^image:", fm, re.M):
            funnet.append(sti.stem)
    return funnet


def vignett(bilde: Image.Image) -> Image.Image:
    liten = Image.new("L", (BREDDE // 8, HOYDE // 8), 0)
    ImageDraw.Draw(liten).ellipse(
        [-liten.width * 0.20, -liten.height * 0.34,
         liten.width * 1.20, liten.height * 1.34],
        fill=255,
    )
    maske = liten.resize((BREDDE, HOYDE), Image.LANCZOS).filter(
        ImageFilter.GaussianBlur(70)
    )
    return Image.composite(bilde, ImageEnhance.Brightness(bilde).enhance(0.78), maske)


def lag(navn: str, innstilling: dict, sess, f: dict) -> Path:
    flate = grunnflate()
    flate = legg_inn_vert(flate)
    flate = legg_inn_gjest(flate, innstilling["gjest"], innstilling, sess)
    flate = legg_inn_mikrofon(flate, 0.80, 0.42, speil=False)
    flate = legg_inn_mikrofon(flate, 0.09, 0.40, speil=True)
    flate = legg_inn_tekst(flate, innstilling, f)
    ferdig = vignett(flate)
    MAAL.mkdir(parents=True, exist_ok=True)
    ut = MAAL / f"{navn}.jpg"
    ferdig.save(ut, quality=88, optimize=True, progressive=True)
    return ut


def main() -> None:
    argumenter = sys.argv[1:]
    if argumenter == ["--solo"]:
        med_gjest, solo = [], uten_bilde()
    elif argumenter:
        med_gjest = [a for a in argumenter if a in EPISODER]
        solo = [a for a in argumenter if a not in EPISODER]
    else:
        med_gjest, solo = list(EPISODER), uten_bilde()

    f = fonter()
    # Utklippsmodellen trengs bare når en gjest skal klippes ut. Solo-forsidene
    # bruker bare vertportrettet, og skal kunne lages uten rembg installert.
    sess = None
    if med_gjest:
        from rembg import new_session

        sess = new_session("u2net_human_seg")
    for navn in med_gjest:
        ut = lag(navn, EPISODER[navn], sess, f)
        print(f"  {ut.relative_to(ROT)}  {ut.stat().st_size // 1024} kB")
    for slug in solo:
        ut = lag_solo(slug, sess, f)
        print(f"  {ut.relative_to(ROT)}  {ut.stat().st_size // 1024} kB")


if __name__ == "__main__":
    main()
