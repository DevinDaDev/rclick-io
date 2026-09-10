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

        <ul className="mt-[52px] grid grid-cols-3 items-stretch gap-[22px] max-[1024px]:mx-auto max-[1024px]:max-w-[520px] max-[1024px]:grid-cols-1">
          {pricingPage.tiers.map((tier) => (
            <li
              key={tier.name}
              className={
                'relative flex min-h-[430px] flex-col rounded-[18px] border p-8 ' +
                (tier.featured
                  ? 'border-accent bg-accent-tint/60 shadow-[0_20px_50px_rgba(26,58,95,0.14)] min-[1024px]:-translate-y-[10px]'
                  : 'border-border-control bg-white shadow-[0_1px_2px_rgba(19,32,56,0.04)]')
              }
            >
              {tier.badge && (
                <span className="absolute -top-[14px] left-6 rounded-full bg-accent px-[14px] py-[6px] text-[12px] font-semibold tracking-[0.05em] text-white uppercase">
                  {tier.badge}
                </span>
              )}
              <div className="text-[16px] font-semibold text-ink-meta">{tier.name}</div>
              <div className="mt-3 text-[36px] leading-[1.08] font-bold tracking-[-0.03em] text-ink text-pretty">
                {tier.price}
              </div>
              <div className="mt-2 text-[14.5px] text-ink-meta-2">{tier.period}</div>
              <div className="mt-1 text-[14.5px] text-ink-faint">{tier.note}</div>

              <a
                href={tier.cta.href}
                className={'lp-btn mt-6 w-full ' + (tier.featured ? 'lp-btn-primary' : 'lp-btn-secondary')}
              >
                {tier.cta.label}
              </a>

              <ul className="mt-7 flex flex-col gap-3 border-t border-border-subtle pt-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[15.5px] text-ink-body">
                    <span className="grid h-[24px] w-[24px] flex-none place-items-center rounded-full bg-accent-tint text-accent">
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
