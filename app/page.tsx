import { Nav } from '@/components/Nav'
import { OpenTargetDetails } from '@/components/OpenTargetDetails'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Benefits } from '@/components/sections/Benefits'
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection'
import { Faq } from '@/components/sections/Faq'
import { Footer } from '@/components/sections/Footer'

/**
 * The page is a stack of independent sections. To remove one, delete its line here and
 * its link in content/site.ts `nav.links` and `footer.columns`. To reorder, reorder.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <OpenTargetDetails />

      <main>
        <Hero />
        <Features />
        <Benefits />
        <ScreenshotsSection />
        <Faq />
      </main>

      <Footer />
    </>
  )
}
