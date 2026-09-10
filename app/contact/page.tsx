import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Icon, MailIcon } from '@/components/Icons'
import { Footer } from '@/components/sections/Footer'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { PageHero } from '@/components/pages/PageHero'
import { ContactForm } from '@/components/pages/ContactForm'
import { ClosingCta } from '@/components/pages/ClosingCta'
import { brand, primaryAction } from '@/content/site'
import { contactPage } from '@/content/pages'

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.hero.lede,
}

export default function ContactPage() {
  const { aside, quick } = contactPage
  const mailto = `mailto:${brand.contactEmail}`

  return (
    <>
      <Nav />
      <main>
        <PageHero hero={contactPage.hero} />

        <section className="lp-section bg-white max-[768px]:px-5 max-[768px]:py-16">
          <div className="lp-rail grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-8 max-[1024px]:grid-cols-1">
            <div className="rounded-[20px] border border-border bg-surface-warm p-[34px] max-[768px]:p-6">
              <h2 className="text-[30px] leading-[1.12] font-semibold tracking-[-0.028em]">{aside.heading}</h2>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-ink-muted text-pretty">{aside.text}</p>

              <a
                href={mailto}
                className="mt-6 flex items-center gap-4 rounded-[14px] border border-accent-border bg-white px-5 py-4 transition-colors duration-140 hover:border-accent"
              >
                <span className="lp-tile h-11 w-11">
                  <MailIcon size={21} />
                </span>
                <span>
                  <span className="block text-[13px] text-ink-meta">{aside.emailLabel}</span>
                  <span className="block text-[17px] font-semibold text-ink">{brand.contactEmail}</span>
                </span>
              </a>

              <ul className="mt-6 flex flex-col gap-5">
                {aside.facts.map((f) => (
                  <li key={f.title} className="flex items-center gap-4">
                    <span className="lp-tile h-11 w-11 bg-white">
                      <Icon name={f.icon} size={20} />
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold">{f.title}</span>
                      <span className="block text-[13.5px] text-ink-muted">{f.text}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4 rounded-[14px] bg-accent-tint px-5 py-4">
                <span className="lp-tile h-11 w-11 bg-white">
                  <Icon name={aside.tip.icon} size={20} />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-accent-deep">{aside.tip.title}</span>
                  <span className="mt-1 block text-[13.5px] leading-[1.5] text-cta-body">{aside.tip.text}</span>
                </span>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section aria-labelledby="quick-heading" className="lp-section border-t border-border-section bg-surface-warm max-[768px]:px-5 max-[768px]:py-16">
          <div className="lp-rail">
            <SectionHeader id="quick-heading" eyebrow={quick.eyebrow} heading={quick.heading} lede={quick.lede} />
            <ul className="mt-10 grid grid-cols-2 gap-5 max-[768px]:grid-cols-1">
              {quick.items.map((q) => (
                <li key={q.title} className="lp-card flex gap-5 rounded-[16px] p-6">
                  <span className="lp-tile h-12 w-12">
                    <Icon name={q.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-[16.5px] font-semibold tracking-[-0.012em]">{q.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-muted text-pretty">{q.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ClosingCta
          content={{
            eyebrow: contactPage.closing.eyebrow,
            heading: contactPage.closing.heading,
            text: contactPage.closing.text,
            button: primaryAction.label,
            href: mailto,
            secondary: null,
            note: contactPage.closing.note,
          }}
          className="border-t border-border-section"
        />
      </main>
      <Footer />
    </>
  )
}
