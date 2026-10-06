# Content audit — 6 October 2026

## Scope and sources

Mapped the existing Ultimate Murcia website and read these 12 public pages with Firecrawl. This was a bounded review of business content, service descriptions, area information and selected listings, not an import of the entire property catalogue. Some Firecrawl responses were cached from 5 October.

- https://ultimatemurcia.com/
- https://ultimatemurcia.com/about-us
- https://ultimatemurcia.com/service-referrals
- https://ultimatemurcia.com/contact
- https://ultimatemurcia.com/about-our-area
- https://ultimatemurcia.com/santa-rosalia-lake-life-resort
- https://ultimatemurcia.com/testimonials/
- https://ultimatemurcia.com/golf-resort-property/
- https://ultimatemurcia.com/all-properties-card-v2/
- https://ultimatemurcia.com/property/sierra-golf-south-facing-villa/
- https://ultimatemurcia.com/property/beautiful-2-bedroom-apartment-in-condado-de-alhama/
- https://ultimatemurcia.com/property/3-bedroom-2-bathroom-villa-pool-golf/

## Changes

- Kept the approved homepage artwork. Normal inner-page headings are straight, with shorter black banners, readable copy and restrained green accents.
- Replaced inflated Services copy with property finding, selling enquiries and independent service referrals. The original About page supports a free property finding service; this does not imply that every buying cost or third-party service is free.
- Removed mortgage approval timings, lending percentages, currency savings, legal/visa guarantees, direct property-management claims, universal buyer commission promises and unsupported seller offers.
- Standardized public contacts: Christine; +34 711 093 154; info@ultimatemurcia.com; La Torre Golf Resort, 30709 Murcia, Spain.
- Removed invented customer quotes and linked the original published feedback instead.
- Replaced six invented property records with three sourced listing snapshots and 14 original property photos, locally optimized as WebP. Unknown build area and reference numbers are omitted. Summaries avoid investment-return claims.
- Removed generated listing-photo overrides and fake carousel/favourite controls. Preserved the surrounding homepage art direction.
- Property filters submit real query parameters, including rental and new-build requests. Empty selections lead to an enquiry or the appropriate original collection; they do not pretend that the three imported homes cover the full catalogue.
- Property and area details now have one clear enquiry route. Invalid records use Next.js notFound.
- Removed unverified resort statistics and unrelated interiors advertised as community galleries. Area cards are simple, factual introductions; decorative artwork is not presented as a resort photo gallery.
- Replaced the fake contact success state with clearly labelled email/WhatsApp drafts. The user reviews and sends in their own app. No message is submitted or stored by this local form.
- Removed the nonfunctional language selector, duplicate navigation destinations, broken policy links and public demo-admin link.

## Listing provenance

The photos retain their original content, with resizing and WebP compression only. Filename-to-source mapping is in listing-image-sources.json.

| Local ID | Original reference | Asking price | Published details |
| --- | --- | --- | --- |
| prop-1 | Not published on the fetched page | €235,000 | Sierra Golf villa, 2 beds, 1 bath, 75 m², 270 m² plot |
| prop-2 | UMPS-CON2A | €129,500 | Condado apartment, 2 beds, 1 bath, 50 m² |
| prop-3 | UMPS-SG-32 | €224,950 | Sierra Golf semi-detached villa, 3 beds, 2 baths; build area not supplied |

## Practical limits

These listings are a dated selection, not an automatically synchronized feed. Public copy says when they were checked, asks users to confirm availability and links to the original listing/collection. Connecting a full live feed is separate work.

The contact page intentionally opens the user's email/WhatsApp app; it does not claim server delivery. No external message was sent during this audit.

This task does not configure deployment, production privacy terms or the existing demo admin/backend. The admin is no longer linked from the public navigation.

## Checks

TypeScript and targeted ESLint passed. Local route/filter and Chromium desktop/mobile checks are recorded in the work session. No Playwright was used.
