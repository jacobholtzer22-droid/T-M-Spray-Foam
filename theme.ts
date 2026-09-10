/**
 * Visual theme. This is the one file (with app/fonts.ts) where the agent has
 * real freedom: pick a direction, a palette, and a hero layout so two client
 * sites do not look like the same site with different words. No business facts
 * belong here.
 *
 * Rules the palette must satisfy (AGENT.md Phase 2c): one dark neutral, one
 * warm or cool off-white, exactly one accent used on under 5% of any page. No
 * pure #000000 or #FFFFFF. `onPrimary` sits on `primary`, `onAccent` on
 * `accent`, `ink` on `bg` and `surface`. One radius and one shadow for the
 * whole site; components read them as CSS variables and nothing else.
 */
export type HeroVariant = 'full-bleed' | 'split'

export interface Theme {
  palette: {
    /** The dark neutral. Also the full-dark section background. */
    primary: string
    primaryDark: string
    primarySoft: string
    /** The single accent. Buttons, the call bar, small marks. Under 5% of any page. */
    accent: string
    accentDark: string
    /** The off-white page ground. */
    bg: string
    surface: string
    /** Body text. Never pure black. */
    ink: string
    muted: string
    line: string
    onPrimary: string
    onAccent: string
  }
  /**
   * 'full-bleed': client photo behind a dark scrim, headline and phone CTA
   * left-aligned in the lower third. Needs a photo that can carry it.
   * 'split': large photo one side, oversized type the other. For weaker photos.
   */
  heroVariant: HeroVariant
  /** The ONE corner radius for the site, in rem. 0 for hard edges. */
  radius: number
  /** The ONE shadow for the site, as a CSS box-shadow value. 'none' is valid. */
  shadow: string
}

/**
 * T&M: the "Trade professional" direction from AGENT.md Phase 2b.
 *
 * Why this one. Spray foam is an installed building trade bought on competence,
 * not on beauty, and the 69 client photographs are structure and texture rather
 * than scenery: framing, purlins, roof decks and stud bays. A deep navy-slate
 * grid holds those photographs without competing with them, and the cool base
 * makes the warm cream of the foam read as the subject on every page.
 *
 * One departure from the direction as written, and it is deliberate. Trade
 * professional normally gives visual emphasis to credentials, licensing and
 * response time. T&M has supplied none of those, so there is nothing to
 * emphasise and inventing a badge would be a lie. The weight goes to the work
 * and the phone number instead.
 *
 * Accent is a single brick red, used only on the primary button, the mobile
 * call bar and the eyebrow rule. Blue or red, never both, and well under 5%.
 */
const theme: Theme = {
  palette: {
    primary: '#1B2A38',
    primaryDark: '#121C26',
    primarySoft: '#E7ECF1',
    accent: '#B93A22',
    accentDark: '#962D19',
    bg: '#F4F2ED',
    surface: '#FCFAF6',
    ink: '#1A1E24',
    muted: '#5B6572',
    line: '#DCD8D0',
    onPrimary: '#F4F2ED',
    onAccent: '#F4F2ED',
  },
  heroVariant: 'full-bleed',
  radius: 0.25,
  shadow: '0 1px 3px rgb(18 28 38 / 0.10)',
}

export default theme
