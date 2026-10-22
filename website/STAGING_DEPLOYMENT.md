# Staging deployment runbook

**Status:** STAGING CANDIDATE — NOT APPROVED FOR PUBLIC PRODUCTION.
**Project:** SQB-KHN/reimagined-journey (development branch feat/rice-trade-website-foundation)
**Application root directory:** `website/`
**Framework:** Next.js 15 / Node.js 22

## Recommended first deployment: access-controlled Vercel preview

1. Connect the existing GitHub repository to Vercel through an authorised account.
2. Set **Root Directory** to `website`. Framework preset: Next.js. Build command: `npm run build`; output setting: framework default.
3. Deploy branch `feat/rice-trade-website-foundation` to a **preview**, not the production domain.
4. Restrict preview access using the hosting platform's deployment protection / authentication controls. Do not share an unprotected preview containing an enquiry form as a production release.
5. Keep `ENABLE_ENQUIRY_DELIVERY` unset or `false` in staging. Do **not** configure live emailing until review gates are completed.
6. Verify the routes `/`, `/products`, `/products/basmati-rice`, `/approach`, `/quality`, `/compliance`, `/insights`, `/contact`.
7. Compare screenshots at desktop 1440px, tablet 768px, mobile 375px; check menu wrapping, readability, focus states and horizontal overflow.
8. Review SEO metadata, source content, business identity, privacy notices, contact channels, factual product claims.
9. Sign off the release checklist; only then discuss production merge, public domain/DNS and enabling enquiry delivery.

## Environment variables

| Name | Preview | Public production |
|---|---|---|
| ENABLE_ENQUIRY_DELIVERY | false (or unset) | false until security/privacy and inbox acceptance |
| RESEND_API_KEY | unset | secret; only once approved |
| ENQUIRY_FROM_EMAIL | unset | verified sender; only once approved |
| ENQUIRY_TO_EMAIL | unset | monitored inbox; only once approved |

Never commit email credentials to GitHub. Never paste secrets in PR comments.

## Production blocking issues

- Delivery protection currently relies on an environment flag and request checks, **not** a distributed rate limiter. Do not turn on delivery merely by setting the flag.
- Verify business identity and legal/privacy disclosure (controller, purpose, retention, contact, subprocessors).
- Verify product claims, licenses/certifications, rice tolerances and trade requirements before publication.
- Complete manual screenshot comparison and keyboard review.
- Demonstrate actual inbox receipt using a test message after security hardening.
- Require latest full CI green for the exact deployed SHA.

## Rollback

If a staging preview behaves unexpectedly, disable access or rollback to the previously tested preview through the hosting dashboard. Do not merge to `main` or attach a public domain until accepted.
