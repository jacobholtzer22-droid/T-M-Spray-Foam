import type { SiteConfigInput } from './lib/config-schema'

/**
 * Every business fact for this site lives here and nowhere else.
 *
 * Filled from BRIEF.md on 2026-09-10. Two sources only: a Facebook page
 * screenshot and a second directory listing, both pasted into the build
 * session, plus answers typed by Jacob. Provenance for every field is in
 * BRIEF.md under "Provenance".
 *
 * Unknown facts are null. A null field renders nothing. A guessed value is a defect.
 *
 * READ BEFORE EDITING THE SERVICES:
 * No source describes what any of the four services includes. Every
 * shortDescription and every FAQ answer below is built from exactly three
 * facts: the service name, the service area, and how to make contact. There is
 * no claim about materials, buildings, R-value, lead time, warranty or price
 * anywhere on this site, because nothing states one. Replace this copy with the
 * owner's own words as soon as they exist.
 */
const siteConfig = {
  businessSlug: 't-m-construction',

  legalName: 'T&M Construction Co',
  // Shortened from the Facebook name "T&M Construction & Spray Foam Insulation".
  // The full 39-character string overran verify.ts check 13 (titles cap at 60)
  // on every page of the site. See BRIEF.md for the arithmetic.
  displayName: 'T&M Spray Foam',
  tagline: 'Above and beyond for every customer, with products and service that cut your utility costs.',

  schemaType: 'HomeAndConstructionBusiness',

  phone: '+16186949154',
  email: 'terrellkempfer@gmail.com',

  // Facebook publishes a city, state and ZIP but no street line, so no address
  // is published and the address block and address schema do not render.
  address: null,

  primaryCity: 'Mount Vernon',
  primaryState: 'IL',

  // Radius and the two endpoints are the owner's. The individual towns are
  // Jacob's selection along those corridors. Confirm with the owner before launch.
  // `state` is set only where the town is outside primaryState.
  serviceAreas: [
    { slug: 'mount-vernon', name: 'Mount Vernon', county: 'Jefferson County' },
    { slug: 'salem', name: 'Salem', county: 'Marion County' },
    { slug: 'centralia', name: 'Centralia', county: 'Marion County' },
    { slug: 'benton', name: 'Benton', county: 'Franklin County' },
    { slug: 'west-frankfort', name: 'West Frankfort', county: 'Franklin County' },
    { slug: 'marion', name: 'Marion', county: 'Williamson County' },
    { slug: 'carbondale', name: 'Carbondale', county: 'Jackson County' },
    { slug: 'nashville', name: 'Nashville', county: 'Washington County' },
    { slug: 'carlyle', name: 'Carlyle', county: 'Clinton County' },
    { slug: 'breese', name: 'Breese', county: 'Clinton County' },
    { slug: 'belleville', name: 'Belleville', county: 'St. Clair County' },
    { slug: 'o-fallon', name: "O'Fallon", county: 'St. Clair County' },
    { slug: 'mcleansboro', name: 'McLeansboro', county: 'Hamilton County' },
    { slug: 'fairfield', name: 'Fairfield', county: 'Wayne County' },
    { slug: 'carmi', name: 'Carmi', county: 'White County' },
    { slug: 'mount-carmel', name: 'Mount Carmel', county: 'Wabash County' },
    { slug: 'evansville', name: 'Evansville', county: 'Vanderburgh County', state: 'IN' },
    { slug: 'st-louis', name: 'St. Louis', county: 'St. Louis City', state: 'MO' },
  ],

  services: [
    {
      slug: 'spray-foam-insulation',
      name: 'Spray Foam Insulation',
      shortDescription:
        'Spray foam insulation installed anywhere in the service area, which reaches St. Louis, Missouri and Evansville, Indiana. Call for a quote.',
      priceFrom: null,
      priceNote: null,
      image: 'IMG_6416.jpeg',
      faqs: [
        {
          q: 'Do you install spray foam insulation?',
          a: 'Yes, it is one of the services we offer. Call or send the contact form on this site and we will talk through your building.',
        },
        {
          q: 'Which areas do you cover?',
          a: 'We are based in Mount Vernon, Illinois and work across southern Illinois, plus Evansville, Indiana and St. Louis, Missouri. Call to confirm your location.',
        },
        {
          q: 'How do I get a price for my building?',
          a: 'We do not publish a starting price. Every building is quoted directly, so call or send the contact form and we will get you a number.',
        },
      ],
    },
    {
      slug: 'injection-insulation',
      name: 'Injection Insulation',
      shortDescription:
        'Injection insulation installed anywhere in the service area across southern Illinois. Call or send the contact form and we will quote the job.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Do you install injection insulation?',
          a: 'Yes, it is one of the services we offer. Call or send the contact form and we will go over what your building needs.',
        },
        {
          q: 'What areas do you serve?',
          a: 'We work out of Mount Vernon, Illinois and cover southern Illinois along with Evansville, Indiana and St. Louis, Missouri. Ask us about your town.',
        },
        {
          q: 'How is injection insulation priced?',
          a: 'There is no published starting price. Pricing depends on the job, so call or use the contact form and we will quote it for you.',
        },
      ],
    },
    {
      slug: 'batt-and-roll-insulation',
      name: 'Batt & Roll Insulation',
      shortDescription:
        'Batt, rolled and reflective insulation installed or upgraded anywhere in the service area. Call or send the contact form and we will quote the job.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Do you install batt, rolled or reflective insulation?',
          a: 'Yes. Batt, rolled and reflective insulation are all part of this service. Call or send the contact form and we will talk it through.',
        },
        {
          q: 'Can you upgrade insulation that is already in place?',
          a: 'Upgrades are part of this service as well as new installs. Call or send the contact form and we will take a look at what you have.',
        },
        {
          q: 'Which towns do you work in?',
          a: 'Mount Vernon, Illinois is our base and we cover southern Illinois plus Evansville, Indiana and St. Louis, Missouri. Get in touch to check yours.',
        },
      ],
    },
    {
      slug: 'soundproofing',
      name: 'Soundproofing Service',
      shortDescription:
        'Soundproofing work anywhere in the service area across southern Illinois. Call or send the contact form and we will come and quote the room.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Do you do soundproofing work?',
          a: 'Yes, soundproofing is one of the services we offer. Call or send the contact form and we will talk about the room you have in mind.',
        },
        {
          q: 'How much does soundproofing cost?',
          a: 'No starting price is published. Every room is different, so we quote after we understand the job. Call or send the contact form.',
        },
        {
          q: 'Where do you take soundproofing jobs?',
          a: 'We are based in Mount Vernon, Illinois and travel across southern Illinois plus Evansville, Indiana and St. Louis, Missouri.',
        },
      ],
    },
  ],

  // No source states opening hours. Facebook showed only "Closed now", which is
  // a moment in time, not a schedule. No hours block, no openingHoursSpecification.
  hours: null,

  yearsInBusiness: null,
  licenseNumber: null,
  insured: null,

  // Facebook says "Not yet rated (0 reviews)". The second listing shows an
  // aggregate of 4.9 from 8, with no author and no review text anywhere, so no
  // row can be built. Empty by design. Do not populate from an aggregate score.
  reviews: [],

  // The Facebook page's contents were pasted, its URL was not, and a page URL
  // cannot be derived from a page name. No profile links render.
  profiles: {
    gbp: null,
    facebook: null,
    instagram: null,
    yelp: null,
  },

  faqs: [
    {
      q: 'Which areas do you serve?',
      a: 'We are based in Mount Vernon, Illinois and cover southern Illinois, running west to St. Louis, Missouri and east to Evansville, Indiana.',
    },
    {
      q: 'What insulation work do you do?',
      a: 'Spray foam insulation, injection insulation, batt and roll insulation, and soundproofing. Each one has its own page with more detail.',
    },
    {
      q: 'How do I get a quote?',
      a: 'Call the number at the top of this page or send the contact form. We will get back to you to talk through your building.',
    },
    {
      q: 'Do you work outside Illinois?',
      a: 'Yes. The area reaches St. Louis, Missouri to the west and Evansville, Indiana to the east, both around an hour and a quarter from Mount Vernon.',
    },
  ],

  images: {
    hero: 'IMG_6103.jpg',
    about: 'IMG_5700.jpg',
    gallery: [
      'IMG_5693.jpg',
      'IMG_5724.jpg',
      'IMG_6415.jpeg',
      'IMG_6352.jpeg',
      'IMG_6100.jpg',
      'IMG_8776.jpg',
      'IMG_6591.jpeg',
      'IMG_5723.jpg',
    ],
  },

  // From the Facebook Links row, which shows the bare host. Scheme assumed
  // https because the schema requires it. Whether www or the apex is primary
  // is NOT confirmed. Verify before pointing DNS at this build.
  domain: 'https://tandmconstructionandsprayfoam.com',
} satisfies SiteConfigInput

export default siteConfig
