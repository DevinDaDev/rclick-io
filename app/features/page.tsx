import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import { PageHero } from '@/components/pages/PageHero'
import { AltRows } from '@/components/pages/AltRows'
import { IconGrid } from '@/components/pages/IconGrid'
import { ClosingCta } from '@/components/pages/ClosingCta'
import { featuresPage } from '@/content/pages'

export const metadata: Metadata = {
  title: featuresPage.title,
  description: featuresPage.hero.lede,
}

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero hero={featuresPage.hero} />
        <AltRows rows={featuresPage.rows} />
        <IconGrid
          id="all-features"
          eyebrow={featuresPage.all.eyebrow}
          heading={featuresPage.all.heading}
          lede={featuresPage.all.lede}
          items={featuresPage.all.items}
          compact
        />
        <ClosingCta />
      </main>
      <Footer />
    </>
  )
}
