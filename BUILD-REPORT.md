# BUILD-REPORT: t-m-construction (site_update, tracking install)

**Outcome: the `tracking` block was NOT written to `site.config.ts`. No site file changed.** This repo is older than the template's tracking install, so the requested change cannot be made without editing a file CI mode forbids. Details are under item 8. The Google Ads tag and both conversions are **already live** with the exact same IDs, through a hand-built install (commit 8ab90e0).

## 1. `npm run verify` output

```
#   check                                                                                       result  detail
--- ------------------------------------------------------------------------------------------  ------  ------
1   site.config.ts parses against schema                                                        PASS
2   businessSlug and identity are filled in (not the template sample)                           PASS    slug "t-m-construction"
3   businessSlug exists in the live platform database                                           PASS    platform confirmed slug "t-m-construction"
4   components/ContactForm.tsx matches sealed checksum                                          PASS    652101e19b36
5   built HTML posts to the www contact endpoint, never the bare apex                           PASS    endpoint on /contact
6   honeypot hp_7d3a_ref inside hidden wrapper, no "company" field                              PASS
7   content/ contains no bare phone, address, email, or price                                   PASS
8   no placeholder tokens in content/ or site.config.ts                                         PASS
9   every JSON-LD block parses, has @context/@type, all types on allowlist                      PASS
10  Review/aggregateRating only with real, visible reviews                                      PASS
11  every image has a 15+ char alt; no two images share an alt                                  PASS
12  exactly one <h1> per page                                                                   PASS
13  titles unique, 30 to 60 chars as rendered                                                   PASS
14  meta descriptions present, unique, 140 to 160 chars                                         PASS
15  canonical present on every page and matches config.domain                                   PASS
16  sitemap lists every built route and nothing else                                            PASS
17  every internal link resolves to a built route                                               PASS
18  every service area resolves to a state; no area name carries a comma or state abbreviation  PASS    18 areas, primary IL, out of state: Evansville IN, St. Louis MO
19  MDX {config.*} and {area.*} interpolations render, not stripped                             PASS    all interpolated names present in rendered articles

19/19 checks passed across 31 pages.
All checks passed.
```

**Check 22 does not exist in this repo.** `scripts/verify.ts` here only defines checks 0 to 19. INSTRUCTIONS.md says "check 22 must pass", but the gate cannot run that check because this repo does not have it.

## 2. `site.config.ts`

Unchanged from `main` (7cd0e04). The diff is empty.

## 3. Alt-text spot checks

Not applicable: this run did not touch any images.

## 4. Design direction

Not applicable: this run did not change the design.

## 5. Templated-looking things

Not applicable: this run did not change content or components.

## 6. UNRESOLVED

This run found no new unknown facts. The tracking install is blocked by the template version, not by a missing fact (see item 8).

## 7. INVENTED

Nothing. I did not reformat or guess any ID or label.

## 8. Problems with the template / why the instruction was not carried out

1. **The config schema has no `tracking` key.** `lib/config-schema.ts` is `.strict()` and has no `tracking` field. I tested adding the block exactly as given, and `npx tsc --noEmit` failed:
   `site.config.ts(318,3): error TS2353: Object literal may only specify known properties, and 'tracking' does not exist in type ...`
   Check 1 (strict zod parse) would also fail. CI mode forbids editing `lib/config-schema.ts`, so I put `site.config.ts` back unchanged.
2. **These template files are missing:** `components/GoogleTag.tsx` and check 22 in `scripts/verify.ts`. Even with the key accepted, nothing would render from it and nothing would measure it. Adding them means editing `scripts/verify.ts`, which is also forbidden in CI.
3. **The tag is already live by hand.** Commit 8ab90e0 added `lib/ads.ts`, with the same three values as string literals:
   - `GOOGLE_ADS_TAG_ID = 'AW-18443721661'`, loaded in `app/layout.tsx` with gtag.js (afterInteractive)
   - `QUOTE_FORM_SEND_TO = 'AW-18443721661/WnkHCLT11vMcEL2309pE'`, fired from the ContactForm success branch
   - `CLICK_TO_CALL_SEND_TO = 'AW-18443721661/aw2qCLr11vMcEL2309pE'`, fired from `components/CallConversionTracker.tsx`

   I checked the build output: `AW-18443721661` appears in all 32 built HTML files, and both conversion labels are in `out/_next/static/chunks/241-*.js`. **Tracking works on this site right now.** Only the config-driven install is missing.
4. **Recommended fix (human, in the template repo):** port the current AA-Template `tracking` schema key, `components/GoogleTag.tsx`, and check 22 into this repo. Then re-run this tracking install, and in the same change remove the hand-built `lib/ads.ts` / `CallConversionTracker.tsx` / layout `<Script>` tags so gtag does not load twice or double-count conversions. The hand-built install also edited the sealed `components/ContactForm.tsx` and re-sealed `scripts/contact-form.sha256` (652101e19b36). A template sync has to reconcile that checksum on purpose.
5. Until then, re-running this exact tracking-install dispatch will hit the same wall.
