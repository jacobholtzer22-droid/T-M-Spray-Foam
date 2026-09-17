'use client'

import { useEffect } from 'react'
import { trackClickToCallConversion } from '@/lib/ads'

/**
 * Fires the click-to-call conversion for every tel: link on the site from one
 * delegated listener, mounted once in app/layout.tsx.
 *
 * Delegated rather than an onClick on each link for two reasons. Phone.tsx is
 * a server component and cannot take an event handler, and two of the links
 * live in the sealed ContactForm.tsx. A single document listener covers all of
 * them, plus any tel: link added later, without touching any of those files.
 *
 * Capture phase so a handler that stops propagation cannot hide the click. It
 * never calls preventDefault, so the dial is never blocked or delayed.
 */
export default function CallConversionTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      if (!target.closest('a[href^="tel:"]')) return
      trackClickToCallConversion()
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
