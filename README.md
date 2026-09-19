# Tokani Technologies

Corporate website for Tokani Technologies, built with Next.js App Router and deployed through Vercel.

## Development

Use Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

Copy `.env.example` to `.env.local` when configuring email. Never commit credentials.

## Verification

```sh
npm run lint
npm test
npm run build
npm run typecheck
npm start
# In a second terminal:
npm run test:site
```

`npm test` checks enquiry validation and email failure handling without sending any real email. `test:site` checks the running production server (default http://localhost:3000, override TEST_BASE_URL).

## Deployment

Vercel uses the standard `npm run build`. Preview deployments carry noindex and disallow crawling; production uses canonical URLs under https://www.tokani.com.fj.

Required email configuration: RESEND_API_KEY. Optional CONTACT_FROM_EMAIL defaults to Tokani Technologies <askme@tokani.com.fj>. Recipients are server-controlled. General enquiries go to askme@tokani.com.fj.

NEXT_PUBLIC_ENABLE_ANALYTICS is false by default. Enable only with the agreed Vercel Analytics setup; no form contents are collected in custom events.

See [delivery record](docs/revamp-delivery.md) for source evidence, content decisions, external dependencies and release checks.
