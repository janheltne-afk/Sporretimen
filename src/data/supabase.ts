/**
 * Tilkobling til Supabase (interessemarkeringer).
 *
 * Nøkkelen under er en *publiserbar* nøkkel som er laget for å ligge åpent i
 * nettleseren. Sikkerheten ligger i databasens Row Level Security:
 * publikum kan legge til en stemme, men ikke endre eller slette noe.
 *
 * Verdiene kan overstyres med miljøvariabler i Vercel:
 *   PUBLIC_SUPABASE_URL
 *   PUBLIC_SUPABASE_KEY
 */
export const supabase = {
  url: import.meta.env.PUBLIC_SUPABASE_URL ?? 'https://yelpirendmxwnvsjlpzc.supabase.co',
  key:
    import.meta.env.PUBLIC_SUPABASE_KEY ??
    'sb_publishable_ns9O2Mp_aljHt_sfTXMIfg_Ow-hQgrC',
} as const;
