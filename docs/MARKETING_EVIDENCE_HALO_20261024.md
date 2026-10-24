# ATHENA · Evidence-first conversion experiment
**Prepared:** 2026-10-24 · **Status:** Proposed changes in draft PR. No ad budget, no new product, no impersonation, no fake customer claims.

## The original video's applicable method
Sabri Suby emphasizes market-language research (Halo), attention, specific offer, compelling headline, a clear CTA, and testing. We use only the parts that can be implemented with zero cash outlay and real product facts. False scarcity, income guarantees and fabricated testimonials are excluded.

Video: https://www.youtube.com/watch?v=HsjuAvqs3zU

## Existing truth / fixed product
- Offer: ATHENA ΦOS Offline Research & Decision Toolkit V1
- Price: EUR 9.90 once, verified current live Stripe Payment Link (not a subscription)
- Free entry: two-option comparison in the owned GitHub Pages site; no login/data upload
- Paid difference: four-option offline workbook, JSON/CSV exports, DE/EN/TR instructions (workbook UI in English)
- Checkout: https://buy.stripe.com/aFacN54VSbtY5WP3QJ6Na2i
- Product details: https://hypnotic-aura-878t7t3.shipstatic.com/
- Post-payment URL is shareable and not buyer-specific. No verified end-to-end purchaser delivery test.
- No independently verified paid customer acquisition / recognized revenue as of this report.

## Halo research: signals, not fabricated buyer research
Public, qualitative and **non-representative** online discussions:
- https://www.reddit.com/r/productivity/comments/18tax8z — people describe 'too many options' and decision fatigue (2023).
- https://www.reddit.com/r/SideProject/comments/1rusfvl — choosing between many tools can delay actual work (2026).
- https://www.reddit.com/r/SideProject/comments/1tk7mrj — business software selection across teams can be tedious using spreadsheets (2026).
These are *hypothesis-generation sources*, **not** ATHENA reviews, permission to contact their authors, evidence of purchase intent, or proof of demand. Distinct product segments (consumer versus enterprise teams) must not be lumped together as one verified customer group.

Hypothesis A (DE): A practical “Vergleiche vier Angebote” headline yields more relevant product-page engagement than an abstract “make better decisions” headline. Evidence: untested.
Hypothesis B (EN): Directly explaining CSV/JSON and one-time price reduces confusion about the upgrade. Evidence: untested.
Control: current live pages; treatment: this branch. Do not describe as an A/B test unless comparable attributable traffic and checkout metrics are instrumented.

## Current zero-cost channel
Two scheduled owner-side social posts already exist in Metricool/Bluesky on 24 and 25 Oct 2026, both PENDING when last checked. Do not schedule duplicates or misstate them as published. They link to the existing free ATHENA demo, which internally links to the product guides. No third-party posts or ad spend initiated by this branch.

## Strict causal measurement
- Views: UNKNOWN without first-party privacy-respecting aggregate analytics.
- Product-guide → checkout clicks: UNKNOWN; page contains no tracking pixel or customer cookies.
- Verified checkout sessions: no site-side reconciliation.
- Provider-confirmed paid orders: must be read from Stripe independently, not inferred from server logs or button clicks.
- Buyer-specific delivery: UNVERIFIED.
- Repeat purchase / testimonials: NOT PRESENT.
Never divide unknown visits by zero or display '100% conversion'.

## Review gates
1. Run `node --test tests/offer_integrity.mjs`.
2. Inspect diff; review seller documents, legal pages, actual download rights and payment-provider configuration.
3. Merge only after safe release review; GitHub Pages URLs continue to serve the current main branch until then.
4. After release, validate HTTP reachability plus actual page contents before claiming publication. A successful git commit or PR is not a live marketing conversion.
5. Observe owner-approved social post status; do not mass-message cold contacts, scrape identities, spend, or post without permission.
