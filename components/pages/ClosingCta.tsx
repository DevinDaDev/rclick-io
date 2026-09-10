import { closing } from '@/content/pages'

/** The band that ends every inner page. Copy in content/pages.ts `closing`. */
export function ClosingCta() {
  return (
    <section className="border-t border-border-section bg-white px-8 py-[90px] max-[768px]:px-5 max-[768px]:py-16">
      <div className="lp-rail rounded-[18px] border border-accent-border bg-accent-tint px-12 py-[52px] text-center max-[768px]:px-6 max-[768px]:py-9">
        <h2 className="text-[32px] leading-[1.16] font-semibold tracking-[-0.026em] text-accent-deep text-pretty max-[768px]:text-[28px]">
          {closing.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[16px] leading-[1.55] text-cta-body text-pretty">
          {closing.text}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-[14px]">
          <a href={closing.href} className="lp-btn lp-btn-primary">
            {closing.button}
          </a>
          {closing.secondary && (
            <a href={closing.secondary.href} className="lp-btn lp-btn-secondary">
              {closing.secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
