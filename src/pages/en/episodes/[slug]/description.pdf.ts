import { pdfPaths, pdfRoute } from '@/lib/episode-pdf-route';

export const getStaticPaths = pdfPaths('en');
export const GET = pdfRoute('en');
