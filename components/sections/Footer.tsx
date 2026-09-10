import { LogoMark } from '@/components/Icons'
import { brand, footer } from '@/content/site'

/** Footer link copy uses "mailto:" as a placeholder for the one contact address. */
function resolveHref(href: string) {
  return href === 'mailto:' ? `mailto:${brand.contactEmail}` : href
}

export function Footer() {
  return (
    <footer className="border-t border-border-section bg-surface-warm px-8 pt-[80px] pb-[40px] max-[768px]:px-5 max-[768px]:pt-16 max-[768px]:pb-7">
      <div className="lp-rail">
        <div className="grid grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] gap-14 max-[768px]:grid-cols-1 max-[768px]:gap-8">
          <div>
            <div className="flex items-center gap-[10px]">
              <LogoMark size={24} />
              <span className="text-[17px] font-semibold tracking-[-0.02em]">{brand.name}</span>
            </div>
            <p className="mt-[14px] max-w-[320px] text-[15px] leading-[1.6] text-ink-muted text-pretty">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-[14px] font-semibold text-ink">{column.heading}</h2>
              <div className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={resolveHref(link.href)}
                    className="w-fit text-[15px] text-ink-muted transition-colors duration-140 hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between gap-5 border-t border-border-section pt-[22px] max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2">
          <span className="text-[13px] text-ink-faint">{footer.copyright}</span>
          {footer.reassurance && (
            <span className="text-[13px] text-ink-faint">{footer.reassurance}</span>
          )}
        </div>
      </div>
    </footer>
  )
}
