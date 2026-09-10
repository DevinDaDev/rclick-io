import { brand, faq } from '@/content/site'
import { SectionHeader } from './SectionHeader'

/**
 * FAQ as native <details>. Each row has id `faq-<id>` so footer links can deep-link to
 * it; OpenTargetDetails expands the targeted row on load.
 */
export function Faq() {
  const mailto = `mailto:${brand.contactEmail}`

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="lp-section border-t border-border-section bg-white max-[768px]:px-5 max-[768px]:py-16"
    >
      <div className="lp-rail">
        <SectionHeader id="faq-heading" eyebrow={faq.eyebrow} heading={faq.heading} lede={faq.lede} />

        {faq.callouts.length > 0 && (
          <ul className="mt-[46px] grid grid-cols-2 gap-5 max-[768px]:grid-cols-1">
            {faq.callouts.map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-accent-border bg-accent-tint px-6 pt-[26px] pb-7"
              >
                <h3 className="text-[17px] font-semibold tracking-[-0.012em] text-accent-deep">
                  {item.title}
                </h3>
                <p className="mt-[9px] text-[14.5px] leading-[1.55] text-cta-body text-pretty">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className={(faq.callouts.length > 0 ? 'mt-14' : 'mt-[46px]') + ' border-t border-border-section'}>
          {faq.items.map((item) => (
            <details key={item.id} id={`faq-${item.id}`} className="group border-b border-border-section">
              <summary className="flex cursor-pointer list-none items-baseline gap-4 py-4 text-[15.5px] font-semibold transition-colors duration-140 marker:hidden hover:text-accent">
                <span
                  aria-hidden="true"
                  className="mt-1 text-[13px] text-ink-faint-2 transition-transform group-open:rotate-90"
                >
                  ›
                </span>
                <span className="min-w-0">{item.title}</span>
              </summary>
              <p className="max-w-[760px] pb-5 pl-8 text-[14.5px] leading-[1.55] text-ink-muted text-pretty">
                {item.text}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-border bg-surface-warm px-6 py-6">
          <div>
            <div className="text-[15.5px] font-semibold">{faq.contact.title}</div>
            <p className="mt-1 text-[14.5px] leading-[1.55] text-ink-muted">{faq.contact.text}</p>
          </div>
          <a href={mailto} className="lp-btn lp-btn-secondary">
            {faq.contact.label}
          </a>
        </div>
      </div>
    </section>
  )
}
