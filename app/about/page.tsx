import type { Metadata } from 'next'
import Image from 'next/image'
import { Nav } from '@/components/Nav'
import { CheckGlyph } from '@/components/Icons'
import { Footer } from '@/components/sections/Footer'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { PageHero } from '@/components/pages/PageHero'
import { IconGrid } from '@/components/pages/IconGrid'
import { ClosingCta } from '@/components/pages/ClosingCta'
import { aboutPage, closing } from '@/content/pages'

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.hero.lede,
}

export default function AboutPage() {
  const { story, values, philosophy, team } = aboutPage

  return (
    <>
      <Nav />
      <main>
        <PageHero hero={aboutPage.hero} />

        {/* story: text left, image right */}
        <section aria-labelledby="story-heading" className="lp-section bg-white max-[768px]:px-5 max-[768px]:py-16">
          <div className="lp-rail grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-[72px] max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
            <div>
              <SectionHeader id="story-heading" eyebrow={story.eyebrow} heading={story.heading} />
              <div className="mt-6 flex flex-col gap-4 text-[16.5px] leading-[1.65] text-ink-muted text-pretty">
                {story.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[18px] border border-border shadow-[0_18px_44px_rgba(19,32,56,0.10)]">
              <Image
                src={story.image.src}
                alt={story.image.alt}
                width={1180}
                height={760}
                sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        <IconGrid id="values" eyebrow={values.eyebrow} heading={values.heading} lede={values.lede} items={values.items} warm />

        {/* philosophy: image left, checklist right */}
        <section aria-labelledby="philosophy-heading" className="lp-section border-t border-border-section bg-white max-[768px]:px-5 max-[768px]:py-16">
          <div className="lp-rail grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-[72px] max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
            <div className="overflow-hidden rounded-[18px] border border-border shadow-[0_18px_44px_rgba(19,32,56,0.10)] max-[1024px]:order-2">
              <Image
                src={philosophy.image.src}
                alt={philosophy.image.alt}
                width={1180}
                height={760}
                sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
                className="block h-auto w-full"
              />
            </div>
            <div>
              <SectionHeader id="philosophy-heading" eyebrow={philosophy.eyebrow} heading={philosophy.heading} lede={philosophy.text} />
              <ul className="mt-7 flex flex-col gap-[14px]">
                {philosophy.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[15.5px] font-medium text-ink-body">
                    <span className="lp-check">
                      <CheckGlyph size={12} strokeWidth={3.2} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {team && (
          <section aria-labelledby="team-heading" className="lp-section border-t border-border-section bg-white max-[768px]:px-5 max-[768px]:py-16">
            <div className="lp-rail">
              <SectionHeader id="team-heading" eyebrow={team.eyebrow} heading={team.heading} />
              <ul className="mt-[46px] grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
                {team.people.map((p) => (
                  <li key={p.name + p.role} className="lp-card rounded-[14px] p-6">
                    <div aria-hidden="true" className="grid h-14 w-14 place-items-center rounded-full bg-accent-tint text-[18px] font-semibold text-accent">
                      {p.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                    </div>
                    <div className="mt-4 text-[16px] font-semibold">{p.name}</div>
                    <div className="text-[13.5px] text-ink-meta">{p.role}</div>
                    <p className="mt-3 text-[14.5px] leading-[1.55] text-ink-muted">{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <ClosingCta content={{ ...closing, note: 'Same checks.\nFewer distractions.' }} className="border-t border-border-section" />
      </main>
      <Footer />
    </>
  )
}
