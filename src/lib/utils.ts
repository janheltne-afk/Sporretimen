/** Små hjelpefunksjoner brukt på tvers av nettsiden. */

import type { Locale } from '@/i18n/config';

const intlLocale = (lang: Locale) => (lang === 'en' ? 'en-GB' : 'nb-NO');

/** Formaterer en dato lesbart, f.eks. «3. mars 2026» / «3 March 2026». */
export function formatDate(date?: Date, lang: Locale = 'no'): string {
  if (!date) return '';
  return new Intl.DateTimeFormat(intlLocale(lang), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Formaterer et annonsert publiseringstidspunkt, f.eks.
 * «Slippes søndag 16. august kl. 07:00». Brukes på kommende episoder der
 * datoen er avklart. Uten dato faller den tilbake til «Publiseres senere».
 */
export function formatRelease(date?: Date, lang: Locale = 'no'): string {
  if (!date) return lang === 'en' ? 'Published later' : 'Publiseres senere';
  const day = new Intl.DateTimeFormat(intlLocale(lang), {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(date);
  const time = new Intl.DateTimeFormat(intlLocale(lang), {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Oslo',
  }).format(date);
  return lang === 'en' ? `Out ${day} at ${time}` : `Slippes ${day} kl. ${time}`;
}

/**
 * Kort variant av `formatRelease` for episodekort, f.eks. «Slippes 16. aug.».
 * Uten dato faller den tilbake til «Kommende».
 */
export function formatReleaseShort(date?: Date, lang: Locale = 'no'): string {
  if (!date) return lang === 'en' ? 'Upcoming' : 'Kommende';
  const day = new Intl.DateTimeFormat(intlLocale(lang), {
    day: 'numeric',
    month: 'short',
  }).format(date);
  return lang === 'en' ? `Out ${day}` : `Slippes ${day}`;
}

/** Henter initialer fra et navn eller en tittel (maks 2 tegn). */
export function initials(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/** Deterministisk fargevalg for plassholdergrafikk basert på en streng. */
const PLACEHOLDER_COLORS = [
  ['#e9d5c0', '#b06a2c'],
  ['#d9e4dd', '#2f6f5e'],
  ['#e2d8ee', '#7a4bb0'],
  ['#e7dcc6', '#9a7b30'],
  ['#dfe1e8', '#4d5b78'],
  ['#efd8cf', '#b5561f'],
];
export function placeholderColor(seed: string): [string, string] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return PLACEHOLDER_COLORS[Math.abs(hash) % PLACEHOLDER_COLORS.length];
}
