import { Caveat, Inter_Tight } from 'next/font/google'

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

/** Handwritten asides on the CTA bands. Also self-hosted at build time. */
export const handFont = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-hand',
  display: 'swap',
})
