import { Icon } from '@/components/Icons'
import type { IconKey, Item } from '@/content/site'
import { SectionHeader } from '@/components/sections/SectionHeader'

/**
 * Icon + title + one-line grid. `compact` puts the icon beside the text (feature lists);
 * default stacks a round icon above the text (values).
 */
export function IconGrid({
  id,
  eyebrow,
  heading,
  lede,
  items,
  columns = 4,
  warm = false,
  compact = false,
}: {
  id: string
  eyebrow: string
  heading: string
  lede?: string
  items: (Item & { icon: IconKey })[]
  columns?: 3 | 4
  warm?: boolean
  compact?: boolean
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={
        'lp-section border-t border-border-section max-[768px]:px-5 max-[768px]:py-16 ' +
        (warm ? 'bg-surface-warm' : 'bg-white')
      }
    >
      <div className="lp-rail">
        <SectionHeader id={`${id}-heading`} eyebrow={eyebrow} heading={heading} lede={lede} />
        <ul
          className={
            'mt-[44px] grid gap-5 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 ' +
            (columns === 4 ? 'grid-cols-4' : 'grid-cols-3')
          }
        >
          {items.map((item) =>
            compact ? (
              <li key={item.title} className="lp-card flex min-h-[110px] gap-4 rounded-[14px] p-[22px]">
                <span className="lp-tile h-11 w-11 rounded-[11px]">
                  <Icon name={item.icon} size={21} />
                </span>
                <div>
                  <div className="text-[16px] font-semibold">{item.title}</div>
                  <p className="mt-1 text-[14.5px] leading-[1.5] text-ink-muted">{item.text}</p>
                </div>
              </li>
            ) : (
              <li key={item.title} className="lp-card min-h-[220px] rounded-[16px] p-7">
                <span className="lp-tile h-[56px] w-[56px] rounded-full">
                  <Icon name={item.icon} size={24} />
                </span>
                <div className="mt-[22px] text-[18px] font-semibold tracking-[-0.012em]">{item.title}</div>
                <p className="mt-2 text-[15.5px] leading-[1.55] text-ink-muted text-pretty">{item.text}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
