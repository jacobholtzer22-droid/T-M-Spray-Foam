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
    // Added 2026-09-10 from CLIENT: "he does house construction, kitchen
    // remodeling, demolition and stuff like that". Three names, no description
    // of any of them, and "stuff like that" is not a service list, so nothing
    // beyond these three is built. Same fallback copy rule as the four above.
    // NOTE: there is not a single photograph of construction, remodelling or
    // demolition work in the 69 supplied. All of them are insulation jobs.
    // These three pages therefore carry no service image.
    {
      slug: 'house-construction',
      name: 'House Construction',
      shortDescription:
        'House construction taken on across the service area, which runs from Mount Vernon out to St. Louis and Evansville. Call to talk through your build.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Do you take on house construction?',
          a: 'Yes, house construction is one of the things we do. Call or send the contact form and we will talk through what you have in mind.',
        },
        {
          q: 'What areas do you build in?',
          a: 'We work out of Mount Vernon, Illinois and cover southern Illinois along with Evansville, Indiana and St. Louis, Missouri. Ask us about your site.',
        },
        {
          q: 'How is a build priced?',
          a: 'No starting price is published. Every build is different, so we quote it directly. Call or send the contact form to get that started.',
        },
      ],
    },
    {
      slug: 'kitchen-remodeling',
      name: 'Kitchen Remodeling',
      shortDescription:
        'Kitchen remodeling anywhere in the service area across southern Illinois. Call or send the contact form and we will come and look at the room.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Do you remodel kitchens?',
          a: 'Yes, kitchen remodeling is one of the things we do. Call or send the contact form and we will talk about the room you have in mind.',
        },
        {
          q: 'How much does a kitchen remodel cost?',
          a: 'No starting price is published. Every kitchen is different, so we quote after we have seen it. Call or send the contact form.',
        },
        {
          q: 'Which towns do you remodel in?',
          a: 'Mount Vernon, Illinois is our base and we cover southern Illinois plus Evansville, Indiana and St. Louis, Missouri. Get in touch to check yours.',
        },
      ],
    },
    {
      slug: 'demolition',
      name: 'Demolition',
      shortDescription:
        'Demolition work anywhere in the service area, which reaches St. Louis, Missouri and Evansville, Indiana. Call or send the contact form for a quote.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Do you do demolition work?',
          a: 'Yes, demolition is one of the things we do. Call or send the contact form and tell us what needs taking out.',
        },
        {
          q: 'What areas do you cover for demolition?',
          a: 'We are based in Mount Vernon, Illinois and travel across southern Illinois plus Evansville, Indiana and St. Louis, Missouri.',
        },
        {
          q: 'How do I get a demolition quote?',
          a: 'Call or send the contact form with the address and what needs to come out. Nothing is priced from a rate card, so we quote the job itself.',
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
      q: 'What kind of work do you do?',
      a: 'Insulation, soundproofing, house construction, kitchen remodeling and demolition. Each service has its own page with more detail.',
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

  /**
   * gallery is the curated pool for the whole site, not just the homepage.
   * The homepage shows the first nine; service and area pages each show a
   * rotating window of six so a visitor moving between towns does not see the
   * same six photographs every time. Ordered best first.
   *
   * Excluded from the 69 supplied: the motion-blurred frames (6592, 6593,
   * 6778, 6779, 7960), the blown-out one (6780) and the dim one (6223).
   */
  images: {
    hero: 'IMG_6103.jpg',
    about: 'IMG_5700.jpg',
    gallery: [
      'IMG_5693.jpg', 'IMG_5724.jpg', 'IMG_6415.jpeg', 'IMG_6352.jpeg', 'IMG_6100.jpg',
      'IMG_8776.jpg', 'IMG_6591.jpeg', 'IMG_5723.jpg', 'IMG_5697.jpg', 'IMG_6120.jpg',
      'IMG_5824.jpg', 'IMG_6222.jpg', 'IMG_8775.jpg', 'IMG_6416.jpeg', 'IMG_5719.jpg',
      'IMG_6101.jpg', 'IMG_6355.jpeg', 'IMG_8716.jpg', 'IMG_5698.jpg', 'IMG_6245.jpeg',
      'IMG_5722.jpg', 'IMG_6351.jpeg', 'IMG_8714.jpg', 'IMG_6102.jpg', 'IMG_5696.jpg',
      'IMG_6251.jpeg', 'IMG_5817.jpg', 'IMG_6219.jpg',
      'IMG_8717.jpg', 'IMG_6350.jpeg', 'IMG_5721.jpg', 'IMG_6250.jpeg', 'IMG_5699.jpg',
      'IMG_6227.jpeg', 'IMG_8711.jpg', 'IMG_6249.jpeg', 'IMG_5822.jpg', 'IMG_6122.jpg',
      'IMG_8773.jpg', 'IMG_6248.jpeg', 'IMG_5823.jpg', 'IMG_6252.jpeg', 'IMG_5720.jpg',
      'IMG_6226.jpeg', 'IMG_7958.jpeg', 'IMG_5827.jpg', 'IMG_6594.jpeg', 'IMG_5818.jpg',
    ],
  },

  // From the Facebook Links row, which shows the bare host. Scheme assumed
  // https because the schema requires it. Whether www or the apex is primary
  // is NOT confirmed. Verify before pointing DNS at this build.
  domain: 'https://tandmconstructionandsprayfoam.com',
} satisfies SiteConfigInput

export default siteConfig
