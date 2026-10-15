/**
 * TikTok-videoene som vises i karusellen på /forklart og /en/explained.
 *
 * Videoene ligger hos TikTok. Vi laster dem ikke ned og lagrer dem ikke her –
 * karusellen viser et lokalt plakatbilde, og TikToks egen spiller lastes først
 * når noen trykker på play.
 *
 * SLIK LEGGER DU TIL EN VIDEO
 *   1. Åpne videoen på tiktok.com og kopier adressen.
 *   2. Legg et nytt objekt i `tiktokVideos` under. Rekkefølgen i lista er
 *      rekkefølgen i karusellen – flytt linjene for å endre den.
 *   3. Legg plakatbildet i public/images/tiktok/ og pek på det med `thumbnail`.
 *      Står `thumbnail` tomt, tegner karusellen et merkevarekort med tittelen
 *      i stedet. Det er helt greit, men et ekte bilde selger bedre.
 *
 * Ingenting annet må endres. Komponenten leser bare det som står her.
 *
 * SENERE: AUTOMATISK HENTING
 *   `tiktokVideos` er med vilje bare en funksjon av data. Skal lista hentes fra
 *   TikTok Display API i stedet, byttes eksporten ut med noe som returnerer de
 *   samme `TikTokVideo`-objektene ved bygging. Karusellen trenger ingen endring.
 *   Se docs/tiktok-synk.md for hva som kreves av tilganger.
 */
import type { Locale } from '@/i18n/config';

/** Kontoen videoene hentes fra. Brukes til lenken «Se alle på TikTok». */
export const tiktokHandle = 'sporretimen.forklart';
export const tiktokProfileUrl = `https://www.tiktok.com/@${tiktokHandle}`;

/**
 * Kategoriene i filterraden, i den rekkefølgen de vises.
 * «Alle» legges til automatisk og skal ikke stå her.
 */
export const tiktokCategories = [
  { id: 'okonomi', label: { no: 'Økonomi', en: 'Economics' } },
  { id: 'logistikk', label: { no: 'Logistikk og Supply Chain', en: 'Logistics and supply chain' } },
  { id: 'teknologi', label: { no: 'Teknologi', en: 'Technology' } },
  { id: 'ledelse', label: { no: 'Ledelse', en: 'Leadership' } },
  { id: 'annet', label: { no: 'Annet', en: 'Other' } },
] as const satisfies readonly { id: string; label: Record<Locale, string> }[];

export type TikTokCategory = (typeof tiktokCategories)[number]['id'];

export interface TikTokVideo {
  /** Kort, stabil id. Brukes i markup og som nøkkel – ikke TikToks video-id. */
  id: string;
  /** Tittelen som står under videoen. Begge språk. */
  title: Record<Locale, string>;
  category: TikTokCategory;
  /** Full adresse til videoen på tiktok.com. Video-id leses ut av denne. */
  tiktokUrl: string;
  /** Lokalt plakatbilde, f.eks. '/images/tiktok/ebitda.jpg'. Valgfritt. */
  thumbnail?: string;
  /** Publiseringsdato (ISO). Brukes ikke til sortering, bare som notat. */
  publishedAt?: string;
}

/**
 * Lista er tom til de ekte adressene er lagt inn. Karusellen viser ingenting
 * når den er tom – ingen plassholdere, ingen oppdiktede video-id-er.
 *
 * Mal, med en ekte adresse i stedet for VIDEO_ID:
 *
 *   {
 *     id: 'ebitda',
 *     title: { no: 'Hva er EBITDA?', en: 'What is EBITDA?' },
 *     category: 'okonomi',
 *     tiktokUrl: 'https://www.tiktok.com/@sporretimen.forklart/video/VIDEO_ID',
 *     thumbnail: '/images/tiktok/ebitda.jpg',
 *     publishedAt: '2026-10-12',
 *   },
 */
export const tiktokVideos: TikTokVideo[] = [];

/**
 * Henter video-id-en ut av en TikTok-adresse.
 * Godtar /video/<id>, /photo/<id>, og adresser med spørringsstreng.
 * Returnerer null hvis adressen ikke inneholder en id – da hopper
 * karusellen over videoen i stedet for å lage en ødelagt spiller.
 */
export function tiktokVideoId(url: string): string | null {
  const match = /\/(?:video|photo)\/(\d{6,})/.exec(url);
  return match ? match[1] : null;
}

/** Videoene som faktisk kan spilles av, i oppgitt rekkefølge. */
export function playableVideos(): (TikTokVideo & { videoId: string })[] {
  return tiktokVideos.flatMap((video) => {
    const videoId = tiktokVideoId(video.tiktokUrl);
    return videoId ? [{ ...video, videoId }] : [];
  });
}

/** Kategoriene som har minst én video, slik at tomme filtre ikke vises. */
export function usedCategories(videos: TikTokVideo[]): TikTokCategory[] {
  const used = new Set(videos.map((v) => v.category));
  return tiktokCategories.map((c) => c.id).filter((id) => used.has(id));
}
