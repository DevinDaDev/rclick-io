import { Icon } from '@/components/Icons'
import type { IconKey, Item } from '@/content/site'
import { SectionHeader } from '@/components/sections/SectionHeader'

/** Compact icon + title + one-line grid. Four across, then two, then one. */
export function IconGrid({
  id,
  eyebrow,
  heading,
  items,
  columns = 4,
  warm = false,
}: {
  id: string
  eyebrow: string
  heading: string
  items: (Item & { icon: IconKey })[]
  columns?: 3 | 4
  warm?: boolean
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
        <SectionHeader id={`${id}-heading`} eyebrow={eyebrow} heading={heading} />
        <ul
          className={
            'mt-[46px] grid gap-4 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 ' +
            (columns === 4 ? 'grid-cols-4' : 'grid-cols-3')
          }
        >
          {items.map((item) => (
            <li key={item.title} className="lp-card flex gap-4 rounded-[12px] px-5 py-[18px]">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-[10px] bg-accent-tint text-accent">
                <Icon name={item.icon} size={19} />
              </span>
              <div>
                <div className="text-[15px] font-semibold">{item.title}</div>
                <p className="mt-1 text-[13.5px] leading-[1.5] text-ink-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
