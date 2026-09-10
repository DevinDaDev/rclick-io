import { Icon } from '@/components/Icons'
import { features } from '@/content/site'
import { SectionHeader } from './SectionHeader'

/** Three-column card grid. Collapses to two, then one. */
export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="lp-section bg-white max-[768px]:px-5 max-[768px]:py-16"
    >
      <div className="lp-rail">
        <SectionHeader
          id="features-heading"
          eyebrow={features.eyebrow}
          heading={features.heading}
          lede={features.lede}
        />

        <ul className="mt-[46px] grid grid-cols-3 gap-5 max-[1200px]:gap-4 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {features.items.map((item) => (
            <li
              key={item.title}
              className="lp-card rounded-[14px] px-6 pt-[26px] pb-7 transition-[background-color,border-color] duration-140 hover:border-accent-border hover:bg-surface-hover"
            >
              <div className="grid h-11 w-11 place-items-center rounded-[11px] bg-accent-tint text-accent">
                <Icon name={item.icon} size={21} />
              </div>
              <h3 className="mt-[18px] text-[17px] font-semibold tracking-[-0.012em]">{item.title}</h3>
              <p className="mt-[9px] text-[14.5px] leading-[1.55] text-ink-muted text-pretty">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
