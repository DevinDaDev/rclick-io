import { CheckGlyph } from '@/components/Icons'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { pricingPage } from '@/content/pages'

/** Centered intro, then three tier cards. The featured tier gets an accent border and badge. */
export function PricingTiers() {
  const { intro } = pricingPage
  return (
    <section className="lp-section bg-white max-[768px]:px-5 max-[768px]:py-16">
      <div className="lp-rail">
        <SectionHeader id="plans-heading" eyebrow={intro.eyebrow} heading={intro.heading} lede={intro.lede} center />

        <ul className="mt-[52px] grid grid-cols-3 items-start gap-6 max-[1024px]:mx-auto max-[1024px]:max-w-[520px] max-[1024px]:grid-cols-1">
          {pricingPage.tiers.map((tier) => (
            <li
              key={tier.name}
              className={
                'relative rounded-[18px] border bg-white p-[30px] ' +
                (tier.featured
                  ? 'border-accent shadow-[0_18px_44px_rgba(19,32,56,0.10)]'
                  : 'border-border')
              }
            >
              {tier.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[11.5px] font-semibold tracking-[0.05em] text-white uppercase">
                  {tier.badge}
                </span>
              )}
              <div className="text-[15px] font-semibold text-ink-meta">{tier.name}</div>
              <div className="mt-3 text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-ink text-pretty">
                {tier.price}
              </div>
              <div className="mt-2 text-[13.5px] text-ink-meta-2">{tier.period}</div>
              <div className="mt-1 text-[13.5px] text-ink-faint">{tier.note}</div>

              <a
                href={tier.cta.href}
                className={'lp-btn mt-6 w-full ' + (tier.featured ? 'lp-btn-primary' : 'lp-btn-secondary')}
              >
                {tier.cta.label}
              </a>

              <ul className="mt-7 flex flex-col gap-3 border-t border-border-subtle pt-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14.5px] text-ink-body">
                    <span className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full bg-accent-tint text-accent">
                      <CheckGlyph size={11} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {pricingPage.footnote && (
          <p className="mt-8 text-center text-[13px] text-ink-faint">{pricingPage.footnote}</p>
        )}
      </div>
    </section>
  )
}
