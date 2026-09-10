import { Inter_Tight } from 'next/font/google'

/*
  Self-hosted at build time by next/font, so the page makes no runtime font request.
  To change the typeface, swap the import and the constructor. Keep the `variable` name:
  globals.css reads --font-brand.
*/
export const brandFont = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-brand',
  display: 'swap',
})
