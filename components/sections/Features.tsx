import { Icon } from '@/components/Icons'
import { features } from '@/content/site'
import { SectionHeader } from './SectionHeader'

/** Three-column card grid, icon tile beside the title. Collapses to two, then one. */
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
          center
        />

        <ul className="mt-[48px] grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {features.items.map((item) => (
            <li
              key={item.title}
              className="lp-card flex gap-5 rounded-[16px] p-[26px] transition-[border-color,box-shadow] duration-140 hover:border-accent-border hover:shadow-[0_12px_32px_rgba(19,32,56,0.08)]"
            >
              <div className="lp-tile h-[52px] w-[52px]">
                <Icon name={item.icon} size={24} />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.014em]">{item.title}</h3>
                <p className="mt-[8px] text-[15.5px] leading-[1.55] text-ink-muted text-pretty">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
