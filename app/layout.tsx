import type { Metadata, Viewport } from 'next'
import { brandFont } from '@/lib/fonts'
import { brand, hero } from '@/content/site'
import './globals.css'

const TITLE = `${brand.name} - ${hero.headlineA} ${hero.headlineB}`

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: TITLE,
    template: `%s - ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  alternates: { canonical: brand.url },
  keywords: brand.keywords,
  authors: [{ name: brand.owner }],
  openGraph: {
    type: 'website',
    url: brand.url,
    siteName: brand.name,
    title: TITLE,
    description: brand.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: brand.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: brand.themeColor,
}

/** Software listing for search engines. Delete if the product is not software. */
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: brand.name,
  applicationCategory: brand.schemaCategory,
  operatingSystem: brand.os,
  description: brand.description,
  url: brand.url,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={brandFont.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  )
}
