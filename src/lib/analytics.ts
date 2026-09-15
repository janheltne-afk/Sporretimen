/**
 * Hendelseslogg for Spørretimen.
 *
 * Det er ikke koblet til noe analyseverktøy ennå – bevisst, siden
 * personvernerklæringen sier at nettsiden ikke bruker analyseverktøy. Det som
 * ligger her er røret: hendelsene samles ett sted, med faste navn og faste
 * felter, slik at en senere kobling til Plausible, PostHog eller tilsvarende
 * er én funksjon å fylle ut – ikke et søk gjennom alle komponentene.
 *
 * Slik kobles det på senere:
 *   1. Velg verktøy og oppdater personvernerklæringen først.
 *   2. Fyll ut `send()` under.
 * Ingenting annet i kodebasen trenger å endres.
 */

/** Hendelsene nettsiden kjenner. Navnene er stabile – de er et grensesnitt. */
export type EventName =
  | 'content_view'
  | 'video_play'
  | 'spotify_click'
  | 'youtube_click'
  | 'apple_click'
  | 'topic_interest'
  | 'episode_interest'
  | 'lecture_interest'
  | 'related_content_click'
  | 'search'
  | 'contact_click';

/** Kontekst som følger hendelsen. Alle felter er valgfrie. */
export interface EventProps {
  content_id?: string;
  series?: string;
  format?: string;
  topic?: string;
  subtopic?: string;
  slug?: string;
  label?: string;
  lang?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Sender hendelsen videre. Tom med vilje.
 *
 * Hendelsen legges alltid på `window.dataLayer` og sendes som et
 * CustomEvent på document, slik at et verktøy kan lytte uten at koden
 * her vet om det.
 */
function send(name: EventName, props: EventProps): void {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event: name, ...props });
  document.dispatchEvent(new CustomEvent('sporretimen:event', { detail: { name, ...props } }));
}

export function track(name: EventName, props: EventProps = {}): void {
  try {
    send(name, props);
  } catch {
    // En hendelse som ikke kommer frem skal aldri stoppe siden.
  }
}

/**
 * Kobler opp alt som er merket med `data-track` i HTML.
 *
 *   <a data-track="spotify_click" data-track-slug="sturla">…</a>
 *
 * Alle `data-track-*`-attributter blir felter på hendelsen. Dette lar
 * komponentene merke opp lenker uten å importere noe.
 */
export function bindTrackedElements(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-track]').forEach((el) => {
    if (el.dataset.trackBound === '1') return;
    el.dataset.trackBound = '1';
    el.addEventListener('click', () => {
      const name = el.dataset.track as EventName;
      if (!name) return;
      const props: EventProps = {};
      for (const [key, value] of Object.entries(el.dataset)) {
        if (key.startsWith('track') && key !== 'track' && key !== 'trackBound') {
          const field = key.slice(5);
          props[field.charAt(0).toLowerCase() + field.slice(1)] = value;
        }
      }
      track(name, props);
    });
  });
}
