import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { OpenTargetDetails } from '@/components/OpenTargetDetails'
import { Footer } from '@/components/sections/Footer'
import { PageHero } from '@/components/pages/PageHero'
import { PricingTiers } from '@/components/pages/PricingTiers'
import { FaqList } from '@/components/pages/FaqList'
import { ClosingCta } from '@/components/pages/ClosingCta'
import { pricingPage } from '@/content/pages'

export const metadata: Metadata = {
  title: pricingPage.title,
  description: pricingPage.hero.lede,
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <OpenTargetDetails />
      <main>
        <PageHero hero={pricingPage.hero} />
        <PricingTiers />
        <FaqList
          id="pricing-faq"
          eyebrow={pricingPage.faq.eyebrow}
          heading={pricingPage.faq.heading}
          items={pricingPage.faq.items}
        />
        <ClosingCta />
      </main>
      <Footer />
    </>
  )
}
