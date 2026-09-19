# Tokani website revamp — delivery record

## Baseline and source of truth

- Inspected production and GitHub main: `62082f8bce3b5b2d472c72ee0ed6351917b70e88`.
- Brand: supplied Tokani Brand Guidelines v1.1 and Our Story. Retain approved logo, Inter, white/black, brown and Fiji blue. Darkened action blue is used for readable white button text.
- Baseline: two sitemap URLs, no homepage canonical, desktop homepage measured at 14,759px at 1363px viewport, header navigation hidden below 880px without replacement.
- Vatudei evidence: `Tokanitech/vatudei-website-build`, main `3ace9585e98b3d0dd7446a4b298ce97203921a68`, `src/App.jsx`, `src/data.js`, README. Public build inspected at https://vatudei-website-build.vercel.app. Screenshot captured 19 September 2026.
- Vatudei has a service-navigation interface and appointment placeholders. User's later decision is enquiry-only, appointment scheduling deferred. Portfolio accurately labels it in development. No changes were made to Vatudei's own repository.

## Delivered

- Fourteen public pages: Home, Services, three service detail pages, Products, Our Work, About, Contact, Privacy and four case studies.
- Mobile navigation, keyboard focus and Escape dismissal; persistent contact entry; skip link; reduced-motion support.
- Shared navigation/footer/content components and short, evidence-based portfolio copy.
- CRM wording stays provider-neutral. Existing package prices retained; quotations explicitly define inclusions, licensing, renewals and support.
- Unravel URL retained. Existing homepage section anchors retained. Legacy .html paths redirect to new destinations.
- Unique titles/descriptions, canonical URLs, Open Graph, organisation and breadcrumb markup, Article markup for case studies, expanded sitemap, preview noindex/robots rules.
- Local Inter fonts and responsive Next.js image optimisation; non-critical images load lazily.
- Contact input validation, body-size cap, origin check, honeypot, email timeouts, no personal information in delivery error logs, confirmation failure isolation. No distributed rate limiter is claimed; configure platform rate limiting if abuse warrants it.
- Opt-in Vercel analytics events for delivered enquiries and contact-link clicks. Disabled by default. Events do not include form content. Query strings stripped from analytics page URLs.
- Removed old standalone HTML/CSS/JS and payload-unpack workflows; unified scripts and read-only CI checks.

## Content decisions and evidence limits

| Item | Treatment |
|---|---|
| CRM | Generic wording throughout public pages. |
| Yavu / Tubu prices | Existing FJD 500 / FJD 1,650 retained, not newly costed or approved commercial changes. Exact licences, domains and support still require quotation. |
| Qaqa | From FJD 2,500 for small defined scope, not a promise for a complete multi-tenant platform. |
| TravelOps | In development. Operators / Organisations naming from approved product direction; no assertion all listed workflow areas are complete. |
| Careers and Quote My Job | Public URLs returned 200 with matching product titles. Offline/privacy/count claims removed because not independently verified in this task. |
| FNU | Explicit Tokani demonstration, not an official platform or institutional endorsement. |
| Client outcomes | Delivered design/content scope only. No unsupported revenue, booking or ranking gains. |
| Unravel | Conservative launch-preparation status; final operational arrangements still need confirmation. |
| Vatudei | In-development project, screenshot of actual current build; appointment booking and production delivery not claimed. |
| Founder | Desmond Bale, Founder, with established sales/travel/customer-service context. No fabricated credentials. |
| Privacy | Operational notice aligned with current code; no claim of legal certification or a newly approved fixed retention period. |

## Search intent map (no keyword volume estimates claimed)

| Route | Main customer intent |
|---|---|
| / | Websites and business systems in Fiji; Tokani brand discovery |
| /services | Compare service stages and starting scope |
| /services/website-development | Website development for Fiji SMEs |
| /services/crm-workflows | CRM setup and customer follow-up for Fiji businesses |
| /services/custom-systems | Custom business software, workflows and applications |
| /products | Discover Tokani tools and development status |
| /our-work | Evaluate delivery examples |
| /case-studies/* | Examine a specific project, scope and status |
| /about | Understand the business, founder and working approach |
| /contact | Start an enquiry |

## External steps still outstanding

1. Search Console property access: no connector or authenticated performance data supplied. Verify domain ownership, sitemap submission, indexed pages and exclusions after release. Record impressions, clicks, queries and landing pages as baseline.
2. Analytics: select/enable measurement only after agreeing it with the owner; requires Vercel Web Analytics setup and NEXT_PUBLIC_ENABLE_ANALYTICS=true. Custom events can depend on Vercel plan support. Privacy page reflects the configured flag. Verify event receipt before reporting results.
3. Email: unit tests use a mocked provider; do not mistake them for live delivery proof. A real end-to-end send requires explicit permission to send a test message and a nominated test recipient. Keep RESEND_API_KEY and CONTACT_FROM_EMAIL in Vercel, never in git.
4. Public listing/local SEO: business address and eligibility have not been verified for a Google Business Profile. Do not create a listing or publish an invented street address.
5. Performance: prior PageSpeed API attempt returned quota exhausted. No Lighthouse or real-user Core Web Vitals score is claimed without a successful measurement.
6. Recheck search performance after release and sufficient data. No scheduled automation has been created.

## Release checklist

Verification completed on 19 September 2026: lint, TypeScript, production build, 10 mocked contact tests and 21 rendered-page checks all pass. Next.js and its ESLint configuration updated to 16.3.5, with patched transitive dependencies; npm audit reports zero known vulnerabilities. This is a dependency audit result, not a claim of comprehensive security certification. Browser preview review and live delivery are separate release checks.

- Review preview desktop/mobile and important page routes.
- CI: lint, contact failure tests, production build, typecheck, rendered-page checks.
- Confirm prices/inclusions and conservative product/client status language.
- Merge reviewed PR and verify Vercel production deployment.
- Confirm production canonical URLs, sitemap, robots, redirects and form behaviour.
- Complete authorised delivery and analytics tests and Search Console checks.
