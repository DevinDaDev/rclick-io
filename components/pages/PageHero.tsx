import type { PageHero as PageHeroContent } from '@/content/pages'

/** Inner-page header: eyebrow, H1, lede, optional button. Warm surface, hairline below. */
export function PageHero({ hero }: { hero: PageHeroContent }) {
  return (
    <section className="border-b border-border-section bg-surface-warm px-8 pt-[84px] pb-[72px] max-[768px]:px-5 max-[768px]:pt-14 max-[768px]:pb-12">
      <div className="lp-rail max-w-[760px]">
        {hero.eyebrow && <div className="lp-eyebrow">{hero.eyebrow}</div>}
        <h1 className="mt-[14px] text-[48px] leading-[1.1] font-bold tracking-[-0.03em] text-ink text-pretty max-[768px]:text-[34px]">
          {hero.heading}
        </h1>
        <p className="lp-lede max-w-[640px] text-[18px]">{hero.lede}</p>
        {hero.cta && (
          <div className="mt-8">
            <a href={hero.cta.href} className="lp-btn lp-btn-primary">
              {hero.cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
