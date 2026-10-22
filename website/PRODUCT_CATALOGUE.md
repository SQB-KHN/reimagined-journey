# Product catalogue module — initial implementation

## Scope
- Browse three rice product families at `/products`.
- Open per-category buyer requirement pages at `/products/[slug]`.
- Reusable typed product data in `src/data/rice.ts`.
- Each specification is intentionally **To be agreed for each lot**, not an invented measurement.
- Link to the existing contact-form prototype with a category query parameter; this parameter is not yet prefilled by the contact page.

## Commercial gates before publishing any real SKU
1. Confirm specific variety / trade description and sourcing evidence.
2. Allocate internal lot ID and owner; record provenance.
3. Capture sampling methodology, laboratory or inspection evidence where required.
4. Define quality maximums/minimums, packaging, tolerances and acceptance criteria.
5. Agree applicable buyer/import-country standards and documentary requirements.
6. Approve offer, lot quantity, validity window, price basis and delivery/payment terms.

## Next backlog
- Connect category and grade selections to buyer-enquiry draft form.
- Introduce CMS or data import for actual verified lot records.
- Add product photographs only with appropriate ownership and truthful captions.
- Add printable buyer specification sheet and an inspection checklist.
- Run TypeScript build and end-to-end browser testing; none has been verified yet.
