# Buyer enquiry privacy and security launch gate

**NOT A PUBLISHED PRIVACY POLICY.** This is an implementation checklist pending business identity/legal review.

Data collected if delivery is later enabled: buyer name, company, email, optional phone, rice order specifications, volume and delivery destination. Intended purpose: responding to a buyer's commercial enquiry. The email provider and inbox would process/store the submitted information, so the existing on-page 'no storage' language applies ONLY while delivery is disabled.

Before enabling: identify legal controller/business contact, select appropriate legal basis, determine retention/deletion schedule, publish privacy notice describing recipient/provider and cross-border processing where relevant, test inbox and deletion requests. Never include credentials in repo.

Release gate: configure a durable, shared per-IP or proof-of-human rate limiter on POST /api/enquiries, monitor abuse, and verify origin/host restrictions via trusted deployment headers. The route remains OFF unless ENABLE_ENQUIRY_DELIVERY=true. Mere configuration of the flag is not sufficient to authorize public traffic until these release gates are met.

Visual captures are generated as CI artifacts for manual review; automated overflow checks are not visual-design approval.
