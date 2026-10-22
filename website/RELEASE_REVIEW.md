# Pre-deployment release review — 22 Oct 2026

Status: NOT APPROVED FOR PUBLIC LAUNCH.

## Visual QA
- Existing Playwright mobile overflow and route smoke tests passed in CI on prior revision.
- No actual screenshot comparison to an approved Figma design has been completed.
- Editorial CSS artwork is original placeholder art, not a documentary photograph.
- Required: desktop/tablet/mobile screenshots, keyboard review, contrast and cross-browser review.

## Buyer enquiries
- Client-side copyable draft remains available.
- Server route POST /api/enquiries uses Resend with secret server-only environment settings.
- A truthful 503 is returned until RESEND_API_KEY, ENQUIRY_FROM_EMAIL and ENQUIRY_TO_EMAIL are configured.
- Server revalidates required fields, constraints, quantity, percentages, category and origin.
- Honeypot blocks basic bots. This alone is not abuse protection.
- REQUIRED BEFORE PUBLIC LAUNCH: distributed rate limiting, CAPTCHA or equivalent anti-abuse, a tested receiving inbox, sender-domain verification, retention notice, privacy policy, and consent/legal review.
- Never claim delivery unless the provider accepts a request. Acceptance does not guarantee inbox arrival.

## Content verification
- Illustrative categories and no asserted available inventory.
- FSSAI: https://fssai.gov.in/business/registration
- APEDA rice export guide: https://apeda.gov.in/Requirement_Export_Rice
- APEDA rice RCAC FAQ: https://apeda.gov.in/FAQs_Related_RCAC
- Legal references are guidance only; verify effective rules against each transaction/date.

## Security review
- No secret values committed. Runtime keys must remain only in deployment environment.
- Request size, JSON field type/length, category/quantity/percentage, email, origin validated in server route.
- No user-supplied HTML rendered; plain-text email only.
- Remaining: production-level bot/rate defense, abuse telemetry, privacy and retention controls, secure domain settings, negative API tests and real provider delivery test.

## Status gate
- [x] Prior production build and basic Chromium desktop/mobile tests passed.
- [ ] Latest build and tests after email route
- [ ] Browser screenshots visually approved
- [ ] Business identity and legal documents approved
- [ ] Real email credentials, verified domain and recipient configured/tested
- [ ] Distributed anti-spam/rate limit
- [ ] Privacy disclosure approved
- [ ] Deployment authorization
