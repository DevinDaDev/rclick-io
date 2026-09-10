import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Icon } from '@/components/Icons'
import { Footer } from '@/components/sections/Footer'
import { PageHero } from '@/components/pages/PageHero'
import { ContactForm } from '@/components/pages/ContactForm'
import { contactPage } from '@/content/pages'

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.hero.lede,
}

export default function ContactPage() {
  const methods = contactPage.methods.filter((m) => m.value)

  return (
    <>
      <Nav />
      <main>
        <PageHero hero={contactPage.hero} />

        <section className="lp-section bg-white max-[768px]:px-5 max-[768px]:py-16">
          <div className="lp-rail grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[64px] max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
            <div>
              <ul className="flex flex-col gap-4">
                {methods.map((m) => (
                  <li key={m.label}>
                    <a
                      href={m.href}
                      className="lp-card flex items-center gap-4 rounded-[12px] px-5 py-4 transition-[border-color,background-color] duration-140 hover:border-accent-border hover:bg-surface-hover"
                    >
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-[10px] bg-accent-tint text-accent">
                        <Icon name={m.icon} size={19} />
                      </span>
                      <span>
                        <span className="block text-[13px] text-ink-meta">{m.label}</span>
                        <span className="block text-[15.5px] font-semibold text-ink">{m.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {contactPage.offices.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-[13px] font-semibold tracking-[0.06em] text-ink-meta uppercase">
                    {contactPage.offices.length === 1 ? 'Office' : 'Offices'}
                  </h2>
                  <ul className="mt-4 grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
                    {contactPage.offices.map((o) => (
                      <li key={o.city}>
                        <div className="text-[15.5px] font-semibold">{o.city}</div>
                        <address className="mt-1 text-[14.5px] leading-[1.55] text-ink-muted not-italic">
                          {o.lines.map((l) => (
                            <div key={l}>{l}</div>
                          ))}
                        </address>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
