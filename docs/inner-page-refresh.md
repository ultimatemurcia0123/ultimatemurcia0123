# Inner-page quality refresh — 7 October 2026

## Artwork

Generated with the built-in image_gen tool. These are imagined Mediterranean lifestyle scenes used only as decorative page backgrounds, not evidence of a real property, office or resort. Real listing photos remain unchanged.

- `public/images/contact-hero-v1.webp`: Contact, About and the missing-page header; 1774 × 887, approximately 266 KiB.
- `public/images/properties-hero-v1.webp`: property-search header; 1800 × 771, approximately 281 KiB.

Original PNGs are preserved in the local generated_images directory. Project copies were compressed with Sharp. Shared headers use responsive Next.js Image sizing and dark gradients to preserve text contrast.

## Final prompts

### Contact / About

Use case: photorealistic-natural. Asset type: wide website hero background for Ultimate Murcia's contact page. Create an editorial Mediterranean lifestyle photograph, panoramic landscape composition: a quiet shaded limestone terrace in southeastern Spain, olive foliage framing the top right, two understated woven chairs and a small ceramic coffee cup on a table on the right, distant sunlit pale stucco homes and soft blue hills. Warm natural late-afternoon light, muted olive greens, sand, off-white and soft blue. Left half is uncluttered shaded plaster and soft foliage, suitable for white headline overlay; interesting scene primarily on right. Premium but welcoming, realistic materials, no people, no text, no logo, no watermark, no collage. Illustrative imagined location, not a specific property listing. Output landscape 1536x1024 or wider. Save generated asset for use in the website.

### Property search

Use case: photorealistic-natural. Asset type: wide decorative website hero background for a Mediterranean property search page. Create an elegant editorial architecture photograph of an imagined home in Murcia, southeastern Spain: warm ivory modern villa and shaded terrace on right, clear turquoise swimming pool in foreground, mature olive tree and a few palms, pale distant hills, natural early evening sunlight. Restrained warm limestone, olive green and blue palette. Wide landscape framing with the villa on right and uncluttered darker foliage on the left for white headline overlay; no overly tall buildings, no people, no text, logos, watermark, collage or UI. Realistic scale and materials. This is aspirational decorative artwork, not a photo of any real listing. Output panoramic landscape.

## Design and interaction changes

### Areas artwork

`public/images/areas-hero-v1.webp`: shared decorative landscape for the Areas index and individual area headers. Imagined scenery, not a photograph of a specific named resort. Generated with the built-in tool and compressed to 1800px WebP.

Use case: photorealistic-natural. Asset type: decorative panoramic website banner introducing areas and lifestyle in Murcia. An imagined southeastern Spanish Mediterranean landscape, olive trees and one palm in the near right foreground, rolling dry limestone hills, manicured green open space and a small distant cluster of white homes on the right, a soft blue mountain horizon. Morning natural light, editorial travel photography with realistic restrained color. Compose as a wide landscape with spacious shaded foliage on the left for a white headline and landscape details on the right. Warm stone, olive greens, gentle blue sky. No people, logos, labels, watermarks, text, collages, or specific recognizable resort landmarks. Not a depiction of any named resort or listing.

- Consistent photographic headers, typography, spacing and green accents.
- Facebook URL centralized with the other business details; shared inline icon avoids the unsupported Lucide brand export.
- Contact cards and message panel share the site’s card treatment.
- Services next steps and FAQs use existing business statements; no invented testimonials or guarantees.
- Keyboard skip link, global visible focus, mobile navigation Escape handling and active-section styling.
- Mobile fields use 16px text; footer has clearance for the floating contact button; removed continuous WhatsApp ping.
- Property search’s all-homes-for-sale filter excludes rentals; URL filters remain shareable.
- Branded missing-page recovery links.
- Property gallery adds previous/next controls, arrow-key support, a photo count and responsive optimized images.

Review reference: https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md

## Validation

- Production webpack build completed, including TypeScript and static-page generation. Default Turbopack cannot bind its worker port in this local environment; the deployment retains its standard build command.
- Targeted ESLint passed for changed components and pages. Repository-wide lint still has pre-existing errors in the demo admin, resale API routes and resale library.
- Chromium / Playwright: mobile route checks at 390px returned expected status codes, one H1 per page and no horizontal overflow; gallery also checked at 320px.
- Sierra Golf filter returned two cards and preserved the area in the URL.
- Selling enquiries select the selling topic; listing enquiries prefill the property reference. A stubbed window.open verified the WhatsApp draft payload without opening WhatsApp or sending a message.
- Mobile menu Escape closes the menu and restores button focus.
- Gallery next, previous, arrow-key and wraparound behavior passed.
- Services FAQ expands correctly. Desktop Contact and Properties and mobile Contact/Services screenshots were reviewed.
- The final Areas image path replacement was made after the local build started; the deployment build validates those final references.

## Follow-up — 8 October 2026

- Contact drafts now offer copying to another app, reject whitespace-only messages, and select the message for manual copying when clipboard access fails.
- Property cards use responsive Next.js images, respect reduced-motion preferences, show listing-kind badges, and provide a missing-photo fallback.
- Area links have larger touch targets and accessible names identifying the resort.
- Changed-file lint and TypeScript passed. Browser checks verified successful/stubbed clipboard copying, clipboard-denied fallback, whitespace validation, mobile layout and optimized image loading. No enquiry was sent.
