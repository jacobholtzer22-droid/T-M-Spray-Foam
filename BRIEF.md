# Client Brief — T&M

Sources, and only these three:

- **FB** = the Facebook page screenshot pasted on 2026-09-09. Only the region shown: header, bio, Details, Links, Contact info, and one Featured post. The Facebook About tab was never pasted and was never read.
- **PROFILE** = a second business listing pasted on 2026-09-09. **The platform is not named in the paste and I am not guessing which directory it is.** It shows a business name, a star rating, a services list, and an "About us" block. Both the services list and the About us block are visibly truncated, the first by a trailing comma and the second by a "Read more" control.
- **CLIENT** = answers Jacob typed in the session.

Nothing here comes from trade knowledge, from the photos, or from the other client sites in this account.

## Business identity

- Legal name (as registered): **T&M Construction Co** — CLIENT answer 1
- Display name: **T&M Construction & Spray Foam Insulation** — FB page header. CLIENT answer 2 said to use whatever name the Facebook page presents publicly, so the FB string wins. Noting a conflict: PROFILE gives the name as `T&M Construction & Spray Foam Insulation Specialist`, with "Specialist" on the end. Not used, because answer 2 named Facebook as the authority.
- Trade: **Spray foam insulation contractor** — CLIENT answer 3
- Tagline: **Above and beyond for every customer, with products and service that cut your utility costs.** — FB bio, corrected for grammar by Jacob. Owner's meaning, cleaned wording. The FB bio verbatim: `We dedicate are business to go above and beyond for are customers. Providing the best products and service for them. Cut them utility cost!!!`
- Year founded: **UNKNOWN.** Neither source states one. The FB Featured post is dated February 11, 2021, which proves the business existed by then but is not a founding year and is not usable as one.
- License number: **UNKNOWN**
- Insured: **UNKNOWN.** PROFILE's About us mentions "safety" as part of its reputation. That is not a statement of insurance and is not treated as one.

## Platform

- `businessSlug`: **t-m-construction** — CLIENT answer 8
- Domain: **https://tandmconstructionandsprayfoam.com** — FB Links row shows the bare string `tandmconstructionandsprayfoam.com`. The scheme is assumed https because the schema requires it. Whether www or the apex is the primary host is NOT stated and is unresolved.

## Contact

- Phone: **+16186949154** — FB Contact info shows `(618) 694-9154`. Converted to E.164. Confirm before publish.
- Email: **terrellkempfer@gmail.com** — FB Contact info. A personal Gmail address, not a business domain address.
- Published address: **not published.** FB Details shows `Illinois, Mount Vernon, Mount Vernon, IL, United States, 62864`, a city, state, country and ZIP with no street line. CLIENT answer 12 said not published unless a street address is published. `address` is null, so ZIP 62864 has nowhere to live in config and will not appear on the site.
- Latitude / longitude: **UNKNOWN** — CLIENT answer 13

## Services

Four services, all four named in PROFILE's services list, quoted verbatim: `Batt, Rolled or Reflective Insulation Install or Upgrade, Soundproofing Service, Spray Foam Insulation Installation, Injection Insulation Installation,`

**That list ends in a comma, so it is cut off. There may be more services that were not pasted.**

**No source describes what any of these four services includes.** PROFILE's About us block is about the company's pride, workmanship, communication and reputation. It does not say what a job covers, what buildings are served, what materials are used, how long anything takes, or what anything costs. So every `shortDescription` below carries only three facts: the service name from PROFILE, the city from FB, and how to make contact from FB. Nothing else is asserted. Every FAQ answer is bounded the same way.

Ordering note: Spray Foam Insulation Installation is placed first because `services[0]` becomes `primaryService` and drives the homepage and area page titles, and CLIENT answer 3 gives the trade as spray foam insulation. PROFILE lists it third. That ordering is my call, not a fact.

Naming note: the names are directory-checklist strings, not how a person would say them. `Batt, Rolled or Reflective Insulation Install or Upgrade` in particular is long and will read awkwardly in navigation and page titles. I am keeping all four verbatim rather than editing a stated fact. Shortening them is the first thing worth the client's attention.

### Service 1

- Name: **Spray Foam Insulation Installation** — PROFILE services list
- What it includes: **UNKNOWN.** Fallback only: `Spray foam insulation installed in Mount Vernon, Illinois. Call or send the contact form and we will quote your job.`
- Starting price: **not published.** FB shows the price band `$$`, which is not a price.
- Price note: **UNKNOWN**
- Customer questions: 1. Do you install spray foam insulation? 2. What areas do you cover? 3. How do I get a price for my job?

### Service 2

- Name: **Injection Insulation Installation** — PROFILE services list
- What it includes: **UNKNOWN.** Fallback only: `Injection insulation installed in Mount Vernon, Illinois. Call or send the contact form and we will quote your job.`
- Starting price: **not published**
- Price note: **UNKNOWN**
- Customer questions: 1. Do you install injection insulation? 2. What areas do you cover? 3. How do I get a price for my job?

### Service 3

- Name: **Batt, Rolled or Reflective Insulation Install or Upgrade** — PROFILE services list
- What it includes: **UNKNOWN.** Fallback only: `Batt, rolled and reflective insulation installed or upgraded in Mount Vernon, Illinois. Call or send the contact form for a quote.`
- Starting price: **not published**
- Price note: **UNKNOWN**
- Customer questions: 1. Do you install batt, rolled or reflective insulation? 2. Do you upgrade insulation that is already in place? 3. What areas do you cover?

Note on question 2: answerable only because the service name itself contains the words "Install or Upgrade". The answer confirms that and invites a quote. It says nothing about what an upgrade involves.

### Service 4

- Name: **Soundproofing Service** — PROFILE services list
- What it includes: **UNKNOWN.** Fallback only: `Soundproofing work in Mount Vernon, Illinois. Call or send the contact form and we will quote your job.`
- Starting price: **not published**
- Price note: **UNKNOWN**
- Customer questions: 1. Do you do soundproofing? 2. What areas do you cover? 3. How do I get a price for my job?

### Services 5 to 7, added 2026-09-10

CLIENT, typed in session: "He does house construction kitchen remodeling dmeolition and stuff like that."

- **House Construction**, **Kitchen Remodeling**, **Demolition** are now built. Provenance is that one line and nothing else.
- **"and stuff like that" is not a service list.** Nothing beyond those three names was added. If there are more, they need naming.
- No description exists for any of the three, so they carry the same fallback copy rule as the first four: name, service area, contact, nothing else.
- **There is not one photograph of construction, remodelling or demolition work in the 69 supplied.** Every frame is an insulation job. Resolved 2026-09-10 on CLIENT instruction ("just have more general photos for some of them"): those three pages now draw from a hand-picked set of the most non-specific frames, bare framing, drywall, stripped interiors and in-progress shots, rather than sprayed foam. No photograph claims to show construction, a kitchen or a demolition, because none does. Real photographs of those trades are still the proper fix.
- **A full gallery at `/gallery`** holds all 69 photographs, added 2026-09-10 on CLIENT instruction. Nothing is excluded, so the blurred and dark frames that are kept out of the on-page bands still appear there.
- This makes the shipped `displayName` "T&M Spray Foam" too narrow. See the naming note below.

### Candidate services NOT built

- **Construction / general contracting** — "Construction Co" is in the legal name and "Construction" is in both the FB and PROFILE business names. Neither source lists it as a service or describes any construction work. Not built.
- **Roofing** — FB lists the page category as `Roofing Service`. That is a Facebook category the owner selected, not a statement of work performed, it appears in neither source's service list, and it contradicts CLIENT answer 3. Not built.

## About page copy

PROFILE's About us block, verbatim and complete as pasted, truncated at source by a "Read more" control:

> We take great pride in our experience, expertise, quality, and customer service that we provide to meet the consumer's needs. It is our mission to provide excellent workmanship and complete customer satisfaction from start to completion of a project. In order to understand the needs and expectations of our customers, we take great care to work and communicate with every customer in a professional manner. Our reputation is based on service, safety, and quality, regardless of how large or small the job.

This is the only extended company copy in any source. It is generic directory-profile prose and contains no verifiable claim, no date, no place and no number. It is usable on the About page as the company's own words. It cannot support a service description, a credential, or a years-in-business figure.

## Service areas

- Primary city and state: **Mount Vernon, IL** — FB Details location row, corroborated by CLIENT answer 16
- Radius, in the owner's terms: **roughly 1.25 hours around Mount Vernon, IL, as far west as St. Louis and as far east as Evansville** — CLIENT answer 16, relayed from owner
- Eighteen towns, all CLIENT answer 16:

| Town | County | State |
|---|---|---|
| Mount Vernon (primary) | Jefferson County | IL |
| Salem | Marion County | IL |
| Centralia | Marion County | IL |
| Benton | Franklin County | IL |
| West Frankfort | Franklin County | IL |
| Marion | Williamson County | IL |
| Carbondale | Jackson County | IL |
| Nashville | Washington County | IL |
| Carlyle | Clinton County | IL |
| Breese | Clinton County | IL |
| Belleville | St. Clair County | IL |
| O'Fallon | St. Clair County | IL |
| McLeansboro | Hamilton County | IL |
| Fairfield | Wayne County | IL |
| Carmi | White County | IL |
| Mount Carmel | Wabash County | IL |
| Evansville | Vanderburgh County | IN |
| St. Louis | St. Louis City | MO |

**Provenance, exactly as Jacob stated it:** the radius and the two endpoints are the owner's. The individual town names are Jacob's selection along the corridors the owner described, not the owner's own list. **Confirm before publish.**

- Per-town notes: **nothing.** Not "thin", not "sparse". Nothing. CLIENT answer 17 is explicit: no population, no landmarks, no climate, no housing stock, no local industry, nothing specific about any town including Mount Vernon. Every one of the eighteen area pages is thin by instruction, and the build report will say so for all eighteen rather than pad any of them.

### Template defect: area pages cannot express a state

Found while checking how these render, before writing anything. Three towns in the list are not in Illinois, and the template has nowhere to put that.

`serviceAreas` entries in `lib/config-schema.ts` carry `slug`, `name` and `county` only, with no state. Every place an area is rendered appends `config.primaryState`, which is a single site-wide value:

- `app/areas/[slug]/page.tsx:44` page H1
- `app/areas/[slug]/page.tsx:35` breadcrumb
- `lib/seo.ts:48` meta title
- `lib/seo.ts:77` meta description

With `primaryState: 'IL'`, Evansville renders as **"Evansville, IL"** and St. Louis as **"St. Louis, IL"** in the H1, the breadcrumb, the browser title and the meta description. Both are factually wrong and would ship as wrong on a live site.

Putting the state into `name` does not work: `name: 'Evansville, IN'` renders "Evansville, IN, IL".

The JSON-LD is not wrong, only vague. `lib/schema.ts:41` emits `{'@type': 'City', name}` with no containing state, so Evansville is ambiguous rather than misplaced.

**RESOLVED 2026-09-09.** Jacob chose option 1. An optional per-area `state` was added to the schema, defaulting to null, and all four render sites now read `area.state ?? config.primaryState`. The JSON-LD now wraps each city in its containing state. A new verify check 18 enforces that every area resolves to a state and that no area name smuggles one in. Illinois pages were proven byte-identical before and after. Patch saved at `area-state.patch` for porting to `aa-site-template`.

**Still to do when the build unblocks:** set `state: 'IN'` on Evansville and `state: 'MO'` on St. Louis in `site.config.ts`. Every Illinois town omits the field. This cannot be done yet because `site.config.ts` still holds the sample identity and cannot be written until the service descriptions arrive.

**Open hole, not fixed, needs a decision.** Area page meta descriptions can be overridden by a `description` in the area's MDX frontmatter, and that string is free text. Nothing stops an area page for Evansville carrying "Evansville, IL" in its frontmatter description. Check 7 scans content for bare phone, address, email and price, not for state abbreviations, and check 18 only inspects config. Writing the eighteen area files by hand is exactly where this would slip through. Extending check 18 to cross-check area MDX frontmatter against the resolved state would close it.

Also worth a glance when the town list is confirmed: Nashville, Marion and Salem are all common US town names whose Illinois versions are not the famous ones. The state suffix matters more than usual here.

## Hours

**UNKNOWN, every day.** FB Details shows only `Closed now`, which reflects the moment the screenshot was taken. PROFILE shows no hours in the pasted region. `hours` is null, so no opening-hours schema and no hours block renders.

## Profile URLs

- Google Business Profile: **UNKNOWN**
- Facebook: **UNKNOWN.** I have the page's contents but not its address. No URL bar in the screenshot, and a Facebook URL cannot be derived from a page name.
- Instagram: **UNKNOWN**
- Yelp: **UNKNOWN**
- The PROFILE listing: **UNKNOWN**, and its platform is not identified either.

The schema requires valid URLs, so all four `profiles` fields are null and no profile links render.

## Reviews

**`reviews` ships empty. No Review schema. No aggregateRating schema.**

PROFILE displays `4.9` and `(8)`. Read carefully, because this is the one place where the sources actively disagree and where the tempting mistake lives:

- FB Details says `Not yet rated (0 reviews)`. PROFILE says 4.9 from 8. Both cannot describe the same review pool, and neither is dated.
- **No review text and no author name was pasted from either source.** `config.reviews` requires author, rating, text, source and url per review. An aggregate score alone cannot populate a single row, so even with sign-off this rating is structurally unusable. It is not a matter of permission.
- Putting 4.9 and 8 into aggregateRating without the underlying reviews rendering on the page is exactly what AGENT.md rule 5 and CLIENT answer 20 forbid. Not done.

**Candidate for Jacob's decision:** PROFILE has a "Reviews" tab that was not opened. If it holds reviews with named authors and real text, paste them with the listing URL and they become eligible. Until then, nothing.

Also noted and unused: FB's Featured post of February 11, 2021 reads `Here's what where up to today!! Thanks Janet Miller for the...` and is cut off. Janet Miller is a third party thanked in a post, not a reviewer. Not used anywhere.

## Photos

- Location: `public/images/originals/`, 69 JPEG files. The landscaping sample images that shipped with the template are gone.
- Owner notes on specific photos: **UNKNOWN.**
  - The five frames from the "Donation job to the community" folder are IMG_8714, IMG_8715, IMG_8716, IMG_8717 and IMG_8773. Neither source describes that job. Per CLIENT answer 21 it stays UNKNOWN, no donation or community section is built, and those frames are treated as ordinary job photos.
  - Two visibly different foam finishes appear across the set. Per CLIENT answer 21 they are NOT classified, NOT named as open-cell or closed-cell, and no product type, R-value or price claim is inferred from them. Alt text describes colour and surface only.
  - **Photos cannot be assigned to services.** With four services now in play and no source telling me which photo shows which service, I will not label any image as spray foam versus injection versus batt work. Alt text describes what is visibly in frame and stops there.
  - No before-and-after pairs are confirmed. Some frames show bare framing and some show similar spaces insulated, but no source says any two are the same building, so no before-and-after treatment is used.

## Brand notes

- Brand colours: **none** — CLIENT answer 22
- Existing logo: **none** — CLIENT answer 23. The FB profile picture is a personal photograph of two people, not a logo.
- Words the owner uses: CLIENT answer 24 asks to mirror the owner's wording. Available corpus is the FB bio, one truncated FB post caption, and PROFILE's About us block. The About us block is the only substantial piece and reads as directory boilerplate rather than a distinctive voice.
- Words the owner avoids: **UNKNOWN**
- Sites liked or disliked: **UNKNOWN**

## Provenance

```
businessSlug: 't-m-construction'                        <- CLIENT answer 8
legalName: 'T&M Construction Co'                        <- CLIENT answer 1
displayName: 'T&M Construction & Spray Foam Insulation' <- FB page header (PROFILE says "...Specialist"; FB wins per answer 2)
tagline: 'Above and beyond for every customer, with products and service that cut your utility costs.'
                                                        <- FB bio, corrected for grammar by Jacob
schemaType: 'HomeAndConstructionBusiness'               <- CLIENT instruction
phone: '+16186949154'                                   <- FB Contact info "(618) 694-9154", converted
email: 'terrellkempfer@gmail.com'                       <- FB Contact info
address: null                                           <- FB Details gives city/state/ZIP, no street line
primaryCity: 'Mount Vernon'                             <- FB Details location row
primaryState: 'IL'                                      <- FB Details location row
primaryState: 'IL'                                      <- FB Details location row
serviceAreas: 18 towns with counties                    <- CLIENT answer 16, relayed from owner. Radius and the
                                                           St. Louis / Evansville endpoints are the owner's; the
                                                           individual town names are Jacob's selection along those
                                                           corridors. Confirm before publish.
serviceAreas[*].state: 'IN' Evansville, 'MO' St. Louis  <- CLIENT answer 16. All 16 Illinois towns omit the field
                                                           and fall back to primaryState. Schema support added
                                                           2026-09-09; see Template defect above.
area page bodies: no local specifics                    <- CLIENT answer 17: nothing, for all 18 towns
services[0].name: 'Spray Foam Insulation Installation'  <- PROFILE services list
services[1].name: 'Injection Insulation Installation'   <- PROFILE services list
services[2].name: 'Batt, Rolled or Reflective Insulation Install or Upgrade'
                                                        <- PROFILE services list
services[3].name: 'Soundproofing Service'               <- PROFILE services list
services[*].shortDescription: fallback                  <- NOT SOURCED. Name + city + contact only, no facts added
services[*].faqs: fallback                              <- NOT SOURCED. Answers bounded to name, city, contact
services[*].priceFrom: null                             <- not published; FB "$$" is a band, not a price
services[*].priceNote: null                             <- not stated
hours: null                                             <- FB shows "Closed now" only; PROFILE shows none
yearsInBusiness: null                                   <- not stated in either source
licenseNumber: null                                     <- not stated
insured: null                                           <- not stated ("safety" in About us is not an insurance claim)
reviews: []                                             <- FB "0 reviews" vs PROFILE "4.9 (8)"; no author or text anywhere
profiles.gbp: null                                      <- not stated
profiles.facebook: null                                 <- page contents pasted, page URL not pasted
profiles.instagram: null                                <- not stated
profiles.yelp: null                                     <- not stated
domain: 'https://tandmconstructionandsprayfoam.com'     <- FB Links row; scheme assumed, host form unconfirmed
About page body                                         <- PROFILE "About us" block, verbatim
images.*: chosen in build Phase 3                       <- from the 69 files in originals/
```

## Build authorised with fallback service copy

**CLIENT instruction, 2026-09-10: "build it now."** Jacob needs a live URL to show the owner before the meeting, and accepted that the four service pages ship with invention-free fallback copy until the owner supplies real descriptions.

What that means concretely: every service `shortDescription` and every service FAQ answer is built from exactly three facts, the service name, Mount Vernon, and how to make contact. No claim about materials, buildings, R-value, lead time, warranty or price appears anywhere on the site, because no source states one. **These four descriptions are the first thing to replace after the meeting.**

### Service names were shortened, and this was forced, not chosen

`scripts/verify.ts` check 13 caps every rendered `<title>` at 60 characters. Titles are assembled by `lib/seo.ts` as `{service} in {town}, {state} | {displayName}`. With the Facebook display name at 39 characters and the directory service names at up to 55, every single page title on the site overran the cap, some by more than 30 characters. The check is fatal and AGENT.md forbids weakening it.

The longest town in the list, West Frankfort at 14 characters, sets the budget: `len(service) + len(town) + len(displayName) + 11 <= 60`.

| Field | Source string | Shipped | Why |
|---|---|---|---|
| displayName | `T&M Construction & Spray Foam Insulation` (FB header, 39) | `T&M Spray Foam` (14) | 39 overran every title. Full name is preserved in `legalName` and in the JSON-LD. |
| Service 1 | `Spray Foam Insulation Installation` (34) | `Spray Foam Insulation` (21) | dropped the redundant "Installation" |
| Service 2 | `Injection Insulation Installation` (33) | `Injection Insulation` (20) | dropped the redundant "Installation" |
| Service 3 | `Batt, Rolled or Reflective Insulation Install or Upgrade` (55) | `Batt & Roll Insulation` (22) | "reflective" and "upgrade" survive in the description, which has no length cap |
| Service 4 | `Soundproofing Service` (21) | `Soundproofing Service` | verbatim, already fitted |

**This deviates from CLIENT answer 2**, which said to use whichever name the Facebook page presents publicly. That name cannot be used as `displayName` without failing the build gate. Worth Jacob's sign-off, and easy to revisit: if the owner wants the long name in the header, the fix is a shorter primary service name, not a longer title cap.

## Confirm before publish — stale-source risk

FB's only dated content is **February 11, 2021**. PROFILE carries no date at all. Everything below could be years out of date.

- **Phone** `(618) 694-9154`. Confirm it still rings the right person.
- **Service list.** Four services taken from a directory checklist that may be stale, and the list was truncated mid-sentence so there may be more.
- **Service area, the whole list.** The owner gave a radius of roughly 1.25 hours and two endpoints, St. Louis and Evansville. The eighteen individual town names are Jacob's selection along those corridors, not the owner's list. Every town needs the owner's yes before publish.
- **Hours.** None captured. Client should supply them.
- **Email** `terrellkempfer@gmail.com`, a personal Gmail.
- **Domain** `tandmconstructionandsprayfoam.com`. Confirm it is free to point at this build, and whether www or the apex is primary. Something may already be live there.
- **The 4.9 rating.** Not used. Do not let it appear later without the underlying reviews.

## UNKNOWN

Every one of these is null in config, and the section that depends on it does not render.

- Year founded / years in business
- License number
- Insured status
- Street address, latitude, longitude
- What any of the four services actually includes
- Starting prices and price notes
- Hours, all seven days
- Anything specific about any of the eighteen towns, by instruction, not by omission
- Whether the owner endorses the eighteen specific town names
- Whether the truncated service list holds more services
- Google Business Profile URL, Facebook URL, Instagram URL, Yelp URL, PROFILE listing URL
- Which platform PROFILE is
- Reviews, including any behind PROFILE's unopened Reviews tab
- What the "Donation job to the community" photos show
- What the two foam finishes are
- Which service any given photo depicts
- Whether any photos are before-and-after pairs of one building
- Brand colours, logo, owner's vocabulary, reference sites
- Whether construction or roofing are services offered
