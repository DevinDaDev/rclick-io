import Image from 'next/image'
import { ArrowRight } from '@/components/Icons'
import { TrustRow } from '@/components/sections/Hero'
import type { PageHero as PageHeroContent } from '@/content/pages'
import { hero as homeHero } from '@/content/site'

/**
 * Inner-page header. Photo background with a scrim; copy left, product window right.
 * `hero.window` shows an app screen in a window card. Without one, `hero.photo` shows
 * a framed photo instead, so the right half is never empty.
 */
export function PageHero({ hero }: { hero: PageHeroContent }) {
  const image = hero.image ?? homeHero.image
  const visual = hero.window ? 'window' : hero.photo ? 'photo' : 'none'
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden border-b border-border-section max-[768px]:min-h-0">
      <Image src={image.src} alt={image.alt} fill preload fetchPriority="high" sizes="100vw" className="object-cover object-[center_58%]" />
      <div aria-hidden="true" className="lp-hero-scrim pointer-events-none absolute inset-0" />

      <div
        className={
          'lp-rail relative grid w-full items-center gap-16 px-8 pt-[64px] pb-[64px] max-[1024px]:grid-cols-1 max-[1024px]:gap-12 max-[768px]:px-5 max-[768px]:pt-14 max-[768px]:pb-12 ' +
          (visual === 'none' ? 'grid-cols-1' : 'grid-cols-[0.9fr_1.1fr]')
        }
      >
        <div className="max-w-[620px]">
          {hero.eyebrow && <div className="lp-eyebrow">{hero.eyebrow}</div>}
          <h1 className="mt-[14px] text-[clamp(44px,4.7vw,68px)] leading-[1.02] font-bold tracking-[-0.034em] text-ink text-pretty">
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-[560px] text-[20px] leading-[1.55] text-ink-body text-pretty">{hero.lede}</p>

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

        {visual === 'window' && hero.window && (
          <div className="w-full overflow-hidden rounded-[14px] border border-window-border bg-white shadow-[0_34px_80px_rgba(19,32,56,0.24),0_3px_8px_rgba(19,32,56,0.08)]">
            <Image
              src={hero.window.src}
              alt={hero.window.alt}
              width={1180}
              height={760}
              loading="eager"
              sizes="(min-width: 1024px) 660px, calc(100vw - 40px)"
              className="block h-auto w-full"
            />
          </div>
        )}

        {visual === 'photo' && hero.photo && (
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[20px] border border-border shadow-[0_34px_80px_rgba(19,32,56,0.20)]">
            <Image src={hero.photo.src} alt={hero.photo.alt} fill sizes="(min-width: 1024px) 660px, calc(100vw - 40px)" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  )
}
