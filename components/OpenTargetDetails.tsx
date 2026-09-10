'use client'

import { useEffect } from 'react'

/**
 * The footer's Legal links point at individual FAQ entries. Those are <details>, so
 * following the link would scroll to a closed row and answer nothing - the browser only
 * auto-expands a <details> when the fragment targets something inside it, and here the id
 * is on the element itself.
 *
 * Opens the targeted entry on load and on every hash change. No effect on anything else.
 */
export function OpenTargetDetails() {
  useEffect(() => {
    const open = () => {
      const id = window.location.hash.slice(1)
      if (!id) return

      const target = document.getElementById(id)
      if (target instanceof HTMLDetailsElement) {
        target.open = true
        target.scrollIntoView({ block: 'center' })
      }
    }

    open()
    window.addEventListener('hashchange', open)
    return () => window.removeEventListener('hashchange', open)
  }, [])

  return null
}
