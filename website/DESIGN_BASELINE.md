# Website design baseline — Phase 1 (proposal v0.1)

**Status: proposed for visual approval; not a claim of Figma parity or completed testing.**
**Reference:** Atmos (https://atmos.earth/) for its editorial rhythm, commanding type, art direction and section storytelling. Do not copy its layout, assets, logos or texts.
**Working identity:** Field & Grain — placeholder until real business name is approved.
**Commercial objective:** Help domestic wholesalers and international buyers understand product acceptance, procurement discipline and compliance preparation, then enquire with a defined specification.

## Art direction
- Modern, editorial, restrained—not an agricultural marketplace template and not a fabricated large exporter persona.
- Ample negative space; big, warm serif headlines complemented by clean sans-serif interface typography.
- Distinct chapters: (1) purpose, (2) buyer requirements, (3) operating disciplines, (4) technical quality, (5) knowledge, (6) enquiry.
- Imagery: authentic rice cultivation, paddy at harvest, grain sampling, mills, warehouses and freight; use only licensed or original images with accurate captions. Avoid fake certifications, export badges and generic global-trade photo clichés.
- Visual motifs: real grain/landscape geometries used sparingly; no imitation of Atmos artwork.

## Design tokens
| Token | Proposed value | Usage |
|---|---|---|
| Background | #F4F0E8 | warm paper |
| Ink | #242A22 | headlines/body |
| Deep green | #344B36 | high-contrast sections |
| Clay | #B65C35 | accents |
| Soft field | #E5E8DC | background sections |
| Border | #D8D2C5 | subtle separators |
| Display face | Georgia fallback initially | replace with licensed editorial serif later |
| Body face | system sans initially | readability/performance |

## Page hierarchy
1. **Homepage:** one clear proposition, three measurable disciplines, featured research, buyer CTA.
2. **Our approach:** specification → supplier/lot verification → agreement → dispatch and complaint handling.
3. **Quality:** identity, moisture, broken%, foreign matter, length/grade, packaging, sampling and acceptance; no invented numeric thresholds.
4. **Trade insights:** publish verified, sourced commercial articles; draft teasers must be labelled as drafts until published.
5. **Compliance:** educational framework for Indian trade and destination market checks; explicitly distinguish required vs applicable vs planned.
6. **Contact:** lead capture scoped to requested product, volume, destination and logistics; the current form is copy-only and must not be presented as a working submission.

## Homepage wireframe (desktop)
```
[Brand]       Approach   Quality   Insights   Compliance    [Discuss supply]
──────────────────────────────────────────────────────────────────────────
01 / BUYER CONFIDENCE                                  INDIA / RICE / TRADE
[Oversized editorial claim]           [Original documentary rice visual]
[2-line supporting argument]
[Understand our approach →]
──────────────────────────────────────────────────────────────────────────
02 / WHY IT MATTERS     Rice is a commodity. Confidence is not.
03 / OUR PROCESS        Define          Verify          Deliver
04 / FEATURE            Inspection / quality spec editorial feature
05 / KNOWLEDGE          Three articles with author/date/sources when live
06 / ENQUIRY            Product · grade · quantity · destination → contact
[Information footer]    legal and business identity once verified
```

## Responsive behavior
- **Desktop (≥1200px):** 12-column structure, hero split ~55/45, readable body measure, no inaccessible hover-only functionality.
- **Tablet (768–1199px):** stack hero, preserve image significance, scalable headings.
- **Mobile (360–767px):** headline legible without horizontal scrolling, mobile-appropriate navigation, 44px target sizing, touch-friendly links; test at 375px.
- Honor reduced-motion preferences if transitions are added. Keep semantic landmarks and visible focus.

## Evidence and commercial acceptance rules
- Never present planned suppliers, lab tests, certifications, export approvals, warehouses, coverage, volumes or customers as established facts.
- Do not list a specific rice variety, rate or tolerance as currently offered without a verified lot and owner approval.
- Each technical article needs source references, last-reviewed date and an actionable buyer/business deliverable.
- For export standards, confirm destination, product, version/date and authority before claiming a requirement.

## Phase 1 acceptance criteria
- [ ] Brand and typographic direction approved.
- [ ] Desktop and mobile screenshots reviewed against approved reference.
- [ ] Navigation and information hierarchy approved by buyer persona.
- [ ] Placeholder claims/illustrations identified and approved or replaced.
- [ ] All six key pages visually consistent.
- [ ] Phase 2 implementation issues recorded with owners.

## Scope decisions
- Do **not** connect live databases, process payments, fabricate metrics, or deploy to production in Phase 1.
- Keep all work on `feat/rice-trade-website-foundation` and PR #3 until reviewed.
