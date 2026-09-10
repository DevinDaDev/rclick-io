import { brand, faq } from '@/content/site'
import { FaqCards } from '@/components/pages/FaqCards'
import { SectionHeader } from './SectionHeader'

/** Homepage FAQ. Early-access callout on the left, card rows on the right. */
export function Faq() {
  const mailto = `mailto:${brand.contactEmail}`

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="lp-section border-t border-border-section bg-surface-warm max-[768px]:px-5 max-[768px]:py-16"
    >
      <div className="lp-rail grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start gap-[56px] max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
        <div>
          <SectionHeader id="faq-heading" eyebrow={faq.eyebrow} heading={faq.heading} lede={faq.lede} />

          {faq.callouts.length > 0 && (
            <ul className="mt-8 flex flex-col gap-4">
              {faq.callouts.map((item) => (
                <li key={item.title} className="rounded-[16px] border border-accent-border bg-accent-tint px-7 py-[26px]">
                  <h3 className="text-[17.5px] font-semibold tracking-[-0.012em] text-accent-deep">{item.title}</h3>
                  <p className="mt-[8px] text-[15.5px] leading-[1.55] text-cta-body text-pretty">{item.text}</p>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[16px] border border-border-control bg-white px-7 py-6">
            <div>
              <div className="text-[17px] font-semibold">{faq.contact.title}</div>
              <p className="mt-1 text-[15px] leading-[1.55] text-ink-muted">{faq.contact.text}</p>
            </div>
            <a href={mailto} className="lp-btn lp-btn-secondary">
              {faq.contact.label}
            </a>
          </div>
        </div>

        <FaqCards items={faq.items} />
      </div>
    </section>
  )
}
