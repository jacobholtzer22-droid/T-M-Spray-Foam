# BUILD-REPORT: t-m-construction (site_update, tracking install)

**Result: STOPPED. Not applied. `site.config.ts` is unchanged.**

Instruction: write a `tracking` block (`googleAdsId: 'AW-18443721661'`, `conversions.form`, `conversions.call`) into `site.config.ts` and confirm check 22 passes.

This repo's template does not support that. The block can't be written without breaking the gate or editing a forbidden file:

- `lib/config-schema.ts` ends in `.strict()` and has no `tracking` key. Adding one fails `npx tsc` (`satisfies SiteConfigInput` rejects the extra property) and fails check 1. Adding the key to the schema means editing `lib/config-schema.ts`, which CI mode forbids.
- `components/GoogleTag.tsx` does not exist, so nothing would render from the block.
- `scripts/verify.ts` has no check 22. It has 19 checks, so "check 22 must pass" can't be met in this repo.

**The same tag is already live and hand-installed** (commit 8ab90e0, by Jacob, 2026-09-16):
- `lib/ads.ts` holds `AW-18443721661`, form `AW-18443721661/WnkHCLT11vMcEL2309pE` and call `AW-18443721661/aw2qCLr11vMcEL2309pE`. These are the same three values as in INSTRUCTIONS.md.
- `app/layout.tsx` loads gtag.js. The form conversion fires from `ContactForm.tsx`, and the call conversion fires from `components/CallConversionTracker.tsx`.
- Checked in `./out`: `AW-18443721661` appears in 32/32 HTML files. Both send_to labels are in the built JS chunk.

So the ads tracking these values describe is already working. The only part missing is the config-driven version.

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
Unchanged from main (97bfb45).

## 3–5. Alt checks, design direction, templated-look fixes
Not applicable: this was a tracking-only run, and no images, design or content were touched.

## 6. UNRESOLVED
None new. Nothing was set to null in this run.

## 7. INVENTED
None. I didn't add a `tracking` key, change the schema or add a check.

## 8. Template problems / what a human needs to decide
1. **This repo's template is older than the tracking-install feature.** AGENT.md's CI section (synced from AA-Template main in 7cd0e04/18f4673) describes `tracking` config, `components/GoogleTag.tsx` and check 22. None of them are in this repo's `lib/config-schema.ts`, `components/` or `scripts/verify.ts`. The fix belongs in the template repo: sync the schema, `GoogleTag.tsx` and verify check 22 into this client repo. Then re-run this tracking install.
2. **Avoid a double tag once synced.** This site already loads gtag and fires both conversions by hand (`lib/ads.ts`, `app/layout.tsx`, `CallConversionTracker.tsx`, and the import in the sealed `ContactForm.tsx`). If the template's `GoogleTag.tsx` is added while these stay in place, the tag will load twice and each conversion will be counted twice. Remove the hand install in the same change that adds the config-driven one. `ContactForm.tsx` is sealed, so its `trackQuoteFormConversion` import needs a template-side decision and a re-seal there, not in CI.
3. Until then, no action is needed for ads to work. The live site already sends the exact IDs from this request.
