/**
 * Google Ads conversion tracking for this site. Every tag value lives here as
 * a string literal, never an env var: these values are public, and a
 * NEXT_PUBLIC_ variable would be baked in at build time anyway, so an env var
 * only adds a way for a deploy to ship with the tag silently missing.
 *
 * Verified from the Google Ads UI on 2026-09-16, account 3524038917.
 */
export const GOOGLE_ADS_TAG_ID = 'AW-18443721661'

/** Conversion action "Quote form submit". */
export const QUOTE_FORM_SEND_TO = 'AW-18443721661/WnkHCLT11vMcEL2309pE'

/** Conversion action "Click to call". */
export const CLICK_TO_CALL_SEND_TO = 'AW-18443721661/aw2qCLr11vMcEL2309pE'

/**
 * Calls window.gtag if, and only if, it exists and does not throw. An ad
 * blocker can remove gtag entirely, stub it, or replace it with something that
 * throws. None of those may break the form submit or stop a phone link from
 * dialling, so every tracking call goes through here and nothing else touches
 * window.gtag directly.
 */
function safeGtag(...args: unknown[]): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: unknown }).gtag
  if (typeof gtag !== 'function') return
  try {
    ;(gtag as (...a: unknown[]) => void)(...args)
  } catch {
    // Tracking is never allowed to affect the page.
  }
}

/** Fire only after the contact endpoint has confirmed the submission. */
export function trackQuoteFormConversion(): void {
  safeGtag('event', 'conversion', { 'send_to': QUOTE_FORM_SEND_TO, 'value': 1.0, 'currency': 'USD' })
}

/** Fired by components/CallConversionTracker.tsx for any tel: link click. */
export function trackClickToCallConversion(): void {
  safeGtag('event', 'conversion', { 'send_to': CLICK_TO_CALL_SEND_TO, 'value': 1.0, 'currency': 'USD' })
}
