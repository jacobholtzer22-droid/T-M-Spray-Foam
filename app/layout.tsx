import type { Metadata } from 'next'
import Script from 'next/script'
import type { CSSProperties, ReactNode } from 'react'
import CallConversionTracker from '@/components/CallConversionTracker'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MobileCallBar from '@/components/MobileCallBar'
import { GOOGLE_ADS_TAG_ID } from '@/lib/ads'
import { config } from '@/lib/config'
import { buildTitle, renderTitle, TITLE_TEMPLATE } from '@/lib/seo'
import theme from '@/theme'
import { bodyFont, headingFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(config.domain),
  title: {
    default: renderTitle(buildTitle({ kind: 'home' })),
    template: TITLE_TEMPLATE,
  },
  applicationName: config.displayName,
  robots: { index: true, follow: true },
}

const cssVars = {
  '--c-primary': theme.palette.primary,
  '--c-primary-dark': theme.palette.primaryDark,
  '--c-primary-soft': theme.palette.primarySoft,
  '--c-accent': theme.palette.accent,
  '--c-accent-dark': theme.palette.accentDark,
  '--c-bg': theme.palette.bg,
  '--c-surface': theme.palette.surface,
  '--c-ink': theme.palette.ink,
  '--c-muted': theme.palette.muted,
  '--c-line': theme.palette.line,
  '--c-on-primary': theme.palette.onPrimary,
  '--c-on-accent': theme.palette.onAccent,
  '--radius': `${theme.radius}rem`,
  '--shadow': theme.shadow,
} as CSSProperties

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} style={cssVars}>
      <body className="flex min-h-screen flex-col pb-16 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-site focus:bg-surface focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <CallConversionTracker />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`} strategy="afterInteractive" />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_TAG_ID}');`}
        </Script>
      </body>
    </html>
  )
}
