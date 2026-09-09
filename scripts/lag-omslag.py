#!/usr/bin/env python3
"""
Lager episodeomslag: gjesten klippet ut av sitt eget bilde og satt på en varm,
mørk flate – samme tone som resten av nettsiden.

Bakgrunnen i kildebildene er telefonbilder i dagslys. Å bare gjøre dem mørkere
gir et mørkt landskap, ikke et studioportrett, så personen klippes ut og
graderes til å passe flaten hun eller han settes på:

  - eksponeringen dempes og kontrasten mykes opp
  - fargene trekkes mot varmt og av-mettes, så dagslyset ikke skriker
  - lyset faller av mot bunnen, så personen kommer ut av mørket i stedet for
    å ligge oppå det som et klistremerke
  - et svakt varmt motlys bak skulderen binder personen til flaten

Teksten legges ikke inn i bildet. Den settes i nettsidens egen typografi oppå
omslaget, så den er skarp i alle størrelser og lesbar for skjermlesere.

Krever pillow, rembg og onnxruntime. Modellen (u2net_human_seg, ca. 176 MB)
lastes ned til ~/.rembg første gang og ligger utenfor repoet.

    pip install pillow rembg onnxruntime
    python3 scripts/lag-omslag.py

Nye gjester legges inn i GJESTER under. Kjør, se på resultatet, og juster
skala/x/luft til figuren står riktig – hodet skal aldri kuttes i toppen.
De ferdige filene sjekkes inn, så nettsiden ikke er avhengig av verktøyet.
"""

from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter
from rembg import new_session, remove

ROT = Path(__file__).resolve().parent.parent
KILDE = ROT / "public/images/gjester"
MAAL = ROT / "public/images/omslag"

BREDDE, HOYDE = 1600, 900

# Flaten personen settes på. Samme verdier som platen i Cover.astro.
GRUNN = (18, 15, 13)
LYS = (201, 141, 78)

# Plassering av figuren i rammen:
#   skala    – figurens høyde i andel av rammehøyden (over 1 = kuttes i bunn)
#   x        – midten av figuren, i andel av rammebredden
#   luft     – tomrom over hodet, i andel av rammehøyden
# Et portrett tåler å kuttes ved brystet, men aldri i toppen av hodet.
GJESTER = {
    "sturla": {"skala": 1.02, "x": 0.68, "luft": 0.10},
    "havard-hasund": {"skala": 0.96, "x": 0.67, "luft": 0.12},
    "john-erik": {"skala": 1.06, "x": 0.68, "luft": 0.09},
}


def grunnflate() -> Image.Image:
    """Varm, nær-svart flate med et mykt lys oppe til høyre."""
    flate = Image.new("RGB", (BREDDE, HOYDE), GRUNN)

    # Lyskjeglen tegnes i lav oppløsning og skaleres opp – det gir en jevn
    # overgang uten synlige trinn.
    liten = Image.new("L", (BREDDE // 8, HOYDE // 8), 0)
    tegn = ImageDraw.Draw(liten)
    cx, cy = int(liten.width * 0.74), int(liten.height * 0.06)
    radius = int(liten.width * 0.58)
    for i in range(radius, 0, -2):
        verdi = int(46 * (1 - i / radius) ** 2.6)
        tegn.ellipse([cx - i, cy - i * 1.15, cx + i, cy + i * 1.15], fill=verdi)
    maske = liten.resize((BREDDE, HOYDE), Image.LANCZOS).filter(
        ImageFilter.GaussianBlur(45)
    )
    flate.paste(Image.new("RGB", (BREDDE, HOYDE), LYS), (0, 0), maske)
    return flate


def graderes(person: Image.Image) -> Image.Image:
    """Demper dagslyset og trekker fargene mot flatens varme tone."""
    rgb = person.convert("RGB")

    rgb = ImageEnhance.Brightness(rgb).enhance(0.80)
    rgb = ImageEnhance.Color(rgb).enhance(0.62)
    rgb = ImageEnhance.Contrast(rgb).enhance(1.06)

    # Varm tone: løft rødt litt, hold tilbake blått.
    r, g, b = rgb.split()
    r = r.point(lambda v: min(255, int(v * 1.06 + 6)))
    g = g.point(lambda v: min(255, int(v * 1.0 + 2)))
    b = b.point(lambda v: int(v * 0.86))
    rgb = Image.merge("RGB", (r, g, b))

    rgb.putalpha(person.getchannel("A"))
    return rgb


def bunnfall(person: Image.Image, fra: float = 0.46) -> Image.Image:
    """Lar lyset falle av mot bunnen, så personen kommer ut av mørket."""
    h = person.height
    fade = Image.new("L", (1, h), 255)
    piksler = fade.load()
    start = int(h * fra)
    for y in range(start, h):
        andel = (y - start) / max(1, h - start)
        piksler[0, y] = int(255 * max(0.0, 1 - andel**1.5))
    fade = fade.resize((person.width, h))

    alfa = ImageChops.multiply(person.getchannel("A"), fade)
    ut = person.copy()
    ut.putalpha(alfa)
    return ut


def motlys(flate: Image.Image, person: Image.Image, boks) -> Image.Image:
    """Svakt varmt lys bak skulderen, så figuren ikke står helt løsrevet."""
    glod = person.getchannel("A").filter(ImageFilter.GaussianBlur(28))
    glod = glod.point(lambda v: int(v * 0.13))
    lag = Image.new("RGBA", flate.size, (0, 0, 0, 0))
    lys = Image.new("RGB", person.size, LYS)
    lag.paste(lys, boks, glod)
    return Image.alpha_composite(flate.convert("RGBA"), lag).convert("RGB")


def vignett(bilde: Image.Image) -> Image.Image:
    """Diskret nedtoning i kantene."""
    liten = Image.new("L", (BREDDE // 8, HOYDE // 8), 0)
    tegn = ImageDraw.Draw(liten)
    tegn.ellipse(
        [-liten.width * 0.18, -liten.height * 0.30,
         liten.width * 1.18, liten.height * 1.30],
        fill=255,
    )
    maske = liten.resize((BREDDE, HOYDE), Image.LANCZOS).filter(
        ImageFilter.GaussianBlur(60)
    )
    morkt = ImageEnhance.Brightness(bilde).enhance(0.80)
    return Image.composite(bilde, morkt, maske)


def beskjaer_til_person(person: Image.Image) -> Image.Image:
    """Klipper bort tom plass rundt figuren."""
    boks = person.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    return person.crop(boks) if boks else person


def lag_omslag(navn: str, innstilling: dict, sess) -> Path:
    kilde = KILDE / f"{navn}.jpg"
    utklipp = remove(
        Image.open(kilde),
        session=sess,
        alpha_matting=True,
        alpha_matting_foreground_threshold=250,
        alpha_matting_background_threshold=15,
        alpha_matting_erode_size=6,
    )
    person = beskjaer_til_person(utklipp.convert("RGBA"))

    mal_h = int(HOYDE * innstilling["skala"])
    mal_b = max(1, int(person.width * mal_h / person.height))
    person = person.resize((mal_b, mal_h), Image.LANCZOS)

    person = bunnfall(graderes(person))

    x = int(BREDDE * innstilling["x"] - person.width / 2)
    y = int(HOYDE * innstilling["luft"])

    flate = grunnflate()
    flate = motlys(flate, person, (x, y))
    flate = flate.convert("RGBA")
    flate.alpha_composite(person, (x, y))
    ferdig = vignett(flate.convert("RGB"))

    MAAL.mkdir(parents=True, exist_ok=True)
    ut = MAAL / f"{navn}.jpg"
    ferdig.save(ut, quality=88, optimize=True, progressive=True)
    return ut


def main() -> None:
    sess = new_session("u2net_human_seg")
    for navn, innstilling in GJESTER.items():
        ut = lag_omslag(navn, innstilling, sess)
        print(f"  {ut.relative_to(ROT)}  {ut.stat().st_size // 1024} kB")


if __name__ == "__main__":
    main()
