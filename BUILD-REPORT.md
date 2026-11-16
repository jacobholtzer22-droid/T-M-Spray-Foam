# BUILD-REPORT: t-m-construction (site_update, tracking install with template sync)

**Result: STOPPED. Not applied. No source file changed.** `site.config.ts`, `lib/config-schema.ts`, `scripts/verify.ts`, `app/layout.tsx` and `components/` are byte-identical to the checked-out base.

INSTRUCTIONS.md says not to stop with "not installed". I stopped anyway, for three reasons. Any one of them alone would block a correct install:

1. **Two of the four Part 1 steps edit files that AGENT.md forbids in CI "without exception".** Step 3 edits `lib/config-schema.ts` and step 4 edits `scripts/verify.ts`. AGENT.md's CI section says a change that needs one of these files is not made in CI; it is reported here and the human decides in the template repo. INSTRUCTIONS.md is a dispatch payload, and AGENT.md says it relaxes no rule. The change itself looks correct: an optional schema key and an added check that strengthen the gate rather than weaken it. Even so, the rule is written to stop the client-repo agent from editing the gate at all, so I did not make that call myself.
2. **The verify check 22 snippet is truncated.** It stops inside the `for (const p of pages...)` loop. It never closes the loop or the `if (t?.googleAdsId)` block, and it never calls `record(...)` for check 22. "Exactly as the template has it" cannot be met from what was sent. Finishing it would mean writing my own version of a gate check. This repo also has only 19 checks, so there is no check 21 to place it after.
3. **Following the instructions literally would double-count every conversion on a live ad campaign.** This site already has a working hand install of the same tag (commit 8ab90e0):
   - `app/layout.tsx:59-64` loads gtag.js and runs `gtag('config','AW-18443721661')`.
   - `components/CallConversionTracker.tsx` fires `AW-18443721661/aw2qCLr11vMcEL2309pE` on every tel: click.
   - The sealed `components/ContactForm.tsx:28,82` imports and fires `trackQuoteFormConversion()` (`AW-18443721661/WnkHCLT11vMcEL2309pE`) after a 2xx.

   INSTRUCTIONS.md says to keep every other layout line as it is. Adding `GoogleTag` would then load gtag twice and fire each call conversion twice: once from CallConversionTracker and once from GoogleTag's document listener. It would also fire each form conversion twice: once from ContactForm and once from GoogleTag's `main [role="status"]` observer. Smart bidding would optimize against inflated numbers. Part of the duplicate can't be removed in CI: the form conversion fires from inside `ContactForm.tsx`, which is sealed (absolute rule 4, check 4).

**Current state (no action needed for ads to work):** `AW-18443721661` is in 32 of 32 built HTML files in `./out`. Both send_to labels are the exact values in INSTRUCTIONS.md. Form and call conversions are firing today.

## 1. npm run verify (unchanged tree)
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

## 2. site.config.ts
Unchanged from the checked-out base (c72e5e5). No `tracking` key was added. The schema is `.strict()` and has no such key, so adding it fails `tsc` and check 1.

## 3–5. Alt checks, design direction, templated-look fixes
Not applicable. This was a tracking-only run, and no images, design or content were touched.

## 6. UNRESOLVED
None new. Nothing was set to null in this run.

## 7. INVENTED
None. I did not write the missing tail of check 22, and I did not change any tag value.

## 8. Template problems / what a human needs to decide
1. **Do the sync in AA-Template (or by a human in this repo), not by the CI agent.** It needs `lib/config-schema.ts` (the `tracking` key), `scripts/verify.ts` (check 22, plus checks 20–21 if they are meant to be there too), `components/GoogleTag.tsx` and `app/layout.tsx`. Send the **complete** check 22. The copy in INSTRUCTIONS.md is cut off mid-loop and has no `record(22, ...)`.
2. **Remove the hand install in the same change**, or the conversions double-count:
   - delete the gtag `<Script>` pair in `app/layout.tsx` (lines 59–64) and its `GOOGLE_ADS_TAG_ID` import
   - delete `<CallConversionTracker />` and `components/CallConversionTracker.tsx`
   - remove `trackQuoteFormConversion` from `components/ContactForm.tsx` and re-seal it from the template. Its `role="status"` thank-you is what `GoogleTag` watches for, so the form conversion still fires.
   - delete `lib/ads.ts` once nothing imports it
   Note one small behaviour change: the hand install sends `value: 1.0, currency: 'USD'` with each conversion, and the template `GoogleTag` sends neither. Check that the conversion actions in Google Ads use a default value, or the reported conversion value drops to zero.
3. After that sync lands on main, re-dispatch this tracking install. It is then a one-key change to `site.config.ts` and check 22 can pass.
4. AGENT.md's CI section and INSTRUCTIONS.md contradict each other here: INSTRUCTIONS.md orders edits to forbidden files, and AGENT.md says that is never done in CI. If the platform intends to let `site_update` runs sync template files, AGENT.md needs an explicit carve-out. Until it has one, every run like this will stop the same way.
