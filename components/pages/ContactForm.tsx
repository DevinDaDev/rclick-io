'use client'

import { useState } from 'react'
import { brand } from '@/content/site'
import { contactPage } from '@/content/pages'

/**
 * Plain HTML form. With `form.action` set (Formspree, Basin, etc.) it posts there and
 * shows a thank-you. With no action it builds a mailto: link from the fields, so the
 * message reaches the inbox either way and nothing is silently dropped.
 */
export function ContactForm() {
  const { form } = contactPage
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const el = event.currentTarget
    const data = new FormData(el)

    if (!form.action) {
      event.preventDefault()
      const subject = encodeURIComponent(`Website message from ${data.get('name') ?? ''}`)
      const body = encodeURIComponent(
        `${data.get('message') ?? ''}\n\n— ${data.get('name')} · ${data.get('email')} · ${data.get('company') ?? ''}`,
      )
      window.location.href = `mailto:${brand.contactEmail}?subject=${subject}&body=${body}`
      return
    }

    event.preventDefault()
    setState('sending')
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      setState(res.ok ? 'sent' : 'error')
      if (res.ok) el.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="lp-card rounded-[16px] p-[30px]">
        <div className="text-[17px] font-semibold">Thanks. It landed.</div>
        <p className="mt-2 text-[14.5px] text-ink-muted">We reply from a human inbox, usually within one working day.</p>
      </div>
    )
  }

  const input =
    'w-full rounded-[9px] border border-border-control bg-white px-[14px] py-[11px] text-[15px] text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none'

  return (
    <form onSubmit={onSubmit} action={form.action || undefined} method="POST" className="lp-card rounded-[16px] p-[30px] max-[768px]:p-6">
      <h2 className="text-[20px] font-semibold tracking-[-0.02em]">{form.heading}</h2>

      <div className="mt-5 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
        <label className="flex flex-col gap-1.5 text-[13px] font-medium text-ink-body">
          {form.fields.name}
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className="flex flex-col gap-1.5 text-[13px] font-medium text-ink-body">
          {form.fields.email}
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-1.5 text-[13px] font-medium text-ink-body">
        {form.fields.company}
        <input name="company" autoComplete="organization" className={input} />
      </label>

      <label className="mt-4 flex flex-col gap-1.5 text-[13px] font-medium text-ink-body">
        {form.fields.message}
        <textarea name="message" required rows={5} className={input + ' resize-y'} />
      </label>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[13px] text-ink-faint">{form.privacy}</p>
        <button type="submit" disabled={state === 'sending'} className="lp-btn lp-btn-primary disabled:opacity-60">
          {state === 'sending' ? 'Sending…' : form.submit}
        </button>
      </div>

      {state === 'error' && (
        <p className="mt-4 text-[13.5px] text-[#a83a2c]">
          That did not send. Email us directly at{' '}
          <a className="underline" href={`mailto:${brand.contactEmail}`}>
            {brand.contactEmail}
          </a>
          .
        </p>
      )}
    </form>
  )
}
