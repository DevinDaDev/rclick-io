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
            'mt-[46px] grid gap-4 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 ' +
            (columns === 4 ? 'grid-cols-4' : 'grid-cols-3')
          }
        >
          {items.map((item) =>
            compact ? (
              <li key={item.title} className="lp-card flex gap-4 rounded-[14px] px-5 py-[18px]">
                <span className="lp-tile h-10 w-10 rounded-[10px]">
                  <Icon name={item.icon} size={19} />
                </span>
                <div>
                  <div className="text-[15px] font-semibold">{item.title}</div>
                  <p className="mt-1 text-[13.5px] leading-[1.5] text-ink-muted">{item.text}</p>
                </div>
              </li>
            ) : (
              <li key={item.title} className="lp-card rounded-[16px] px-6 py-7">
                <span className="lp-tile h-[52px] w-[52px] rounded-full">
                  <Icon name={item.icon} size={22} />
                </span>
                <div className="mt-5 text-[17px] font-semibold tracking-[-0.012em]">{item.title}</div>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-ink-muted text-pretty">{item.text}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
