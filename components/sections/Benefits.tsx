import { CheckGlyph } from '@/components/Icons'
import { benefits } from '@/content/site'
import { SectionHeader } from './SectionHeader'

/** Checklist left, stat card right. Card is optional: set benefits.card = null. */
export function Benefits() {
  const card = benefits.card

  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="lp-section border-y border-border-section bg-surface-warm max-[768px]:px-5 max-[768px]:py-16"
    >
      <div
        className={
          'lp-rail grid items-center gap-[72px] max-[1024px]:grid-cols-1 max-[1024px]:gap-12 ' +
          (card ? 'grid-cols-[minmax(0,1fr)_minmax(0,1fr)]' : 'grid-cols-1')
        }
      >
        <div>
          <SectionHeader
            id="benefits-heading"
            eyebrow={benefits.eyebrow}
            heading={benefits.heading}
            lede={benefits.lede}
          />

          <ul className="mt-8 flex flex-col gap-[18px]">
            {benefits.items.map((item) => (
              <li key={item.title} className="flex gap-[13px]">
                <span className="mt-px grid h-[22px] w-[22px] flex-[0_0_22px] place-items-center rounded-full bg-accent text-white">
                  <CheckGlyph size={12} strokeWidth={3.2} />
                </span>
                <div>
                  <div className="text-[15.5px] font-semibold">{item.title}</div>
                  <p className="mt-1 text-[14.5px] leading-[1.55] text-ink-muted text-pretty">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {card && (
          <div className="lp-card rounded-2xl p-[30px] shadow-[0_12px_34px_rgba(28,30,26,0.07)]">
            <div className="text-[13.5px] font-semibold text-ink-meta">{card.label}</div>

            <dl className="mt-[18px] grid grid-cols-2 gap-3">
              {card.stats.map((stat) => (
                <div
                  key={stat.caption}
                  className="flex flex-col-reverse gap-1.5 rounded-[11px] border border-border px-[17px] py-4"
                >
                  <dt className="text-[12.5px] text-ink-meta-2">{stat.caption}</dt>
                  <dd className="tabular text-[26px] leading-none font-semibold tracking-[-0.02em]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-[22px] flex flex-col gap-[11px] border-t border-border-subtle pt-[18px]">
              {card.days.map((row) => (
                <li key={row.day} className="flex items-center gap-3">
                  <span className="w-[34px] text-[12px] text-ink-meta">{row.day}</span>
                  <span
                    className="h-2 flex-1 overflow-hidden rounded-[5px] bg-border-subtle"
                    role="img"
                    aria-label={`${row.day}: ${row.count}`}
                  >
                    <span
                      className="block h-full rounded-[5px] bg-accent-bar"
                      style={{ width: `${row.pct}%` }}
                    />
                  </span>
                  <span className="tabular w-[52px] text-right text-[12px] text-ink-faint-2">
                    {row.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
