import { Screenshots } from '@/components/Screenshots'
import { screenshots } from '@/content/site'
import { SectionHeader } from './SectionHeader'

export function ScreenshotsSection() {
  return (
    <section
      id="screenshots"
      aria-labelledby="screenshots-heading"
      className="lp-section bg-white max-[768px]:px-5 max-[768px]:py-16"
    >
      <div className="lp-rail">
        <SectionHeader
          id="screenshots-heading"
          eyebrow={screenshots.eyebrow}
          heading={screenshots.heading}
        />
        <Screenshots />
      </div>
    </section>
  )
}
