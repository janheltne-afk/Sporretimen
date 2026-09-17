import { pdfPaths, pdfRoute } from '@/lib/episode-pdf-route';

export const getStaticPaths = pdfPaths('no');
export const GET = pdfRoute('no');
