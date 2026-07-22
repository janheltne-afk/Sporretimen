/** Små hjelpefunksjoner brukt på tvers av nettsiden. */

/** Formaterer en dato til norsk lesbar tekst, f.eks. "3. mars 2026". */
export function formatDate(date?: Date): string {
  if (!date) return '';
  return new Intl.DateTimeFormat('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
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
