import Image from 'next/image'
import { ArrowRight } from '@/components/Icons'
import { TrustRow } from '@/components/sections/Hero'
import type { PageHero as PageHeroContent } from '@/content/pages'
import { hero as homeHero } from '@/content/site'

/** Inner-page header: photo on the right, eyebrow, H1, lede, buttons, trust row on the left. */
export function PageHero({ hero }: { hero: PageHeroContent }) {
  const image = hero.image ?? homeHero.image
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden border-b border-border-section max-[768px]:min-h-0">
      <Image src={image.src} alt={image.alt} fill preload fetchPriority="high" sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="lp-hero-scrim pointer-events-none absolute inset-0" />

      <div className="lp-rail relative w-full px-8 pt-[76px] pb-[72px] max-[768px]:px-5 max-[768px]:pt-14 max-[768px]:pb-12">
        <div className="max-w-[560px]">
          {hero.eyebrow && <div className="lp-eyebrow">{hero.eyebrow}</div>}
          <h1 className="mt-[14px] text-[50px] leading-[1.06] font-bold tracking-[-0.032em] text-ink text-pretty max-[768px]:text-[36px]">
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-[520px] text-[18px] leading-[1.55] text-ink-body text-pretty">{hero.lede}</p>

          {(hero.cta || hero.secondary) && (
            <div className="mt-8 flex flex-wrap items-center gap-[14px]">
              {hero.cta && (
                <a href={hero.cta.href} className="lp-btn lp-btn-primary">
                  {hero.cta.label}
                  <ArrowRight />
                </a>
              )}
              {hero.secondary && (
                <a href={hero.secondary.href} className="lp-btn lp-btn-secondary">
                  {hero.secondary.label}
                </a>
              )}
            </div>
          )}

          {hero.trust && hero.trust.length > 0 && <TrustRow items={hero.trust} />}
        </div>
      </div>
    </section>
  )
}
