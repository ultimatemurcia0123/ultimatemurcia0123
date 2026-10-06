# Homepage reference artwork

Created with the built-in image generation tool from the user's `website1.jpeg` reference. Optimized to WebP using Sharp. These are generated design-preview assets; the property listing data and detail-page photographs remain separate.

| Asset | Use |
| --- | --- |
| `public/images/hero-garden.webp` | Continuous villa, pool, mascot and foliage scene |
| `public/images/preview-villa.webp` | First homepage property card |
| `public/images/preview-terrace.webp` | Second card and services-section backdrop |
| `public/images/preview-pool.webp` | Third homepage property card |
| `public/images/lifestyle-coast.webp` | Coastline polaroid |
| `public/images/lifestyle-golf.webp` | Golf polaroid |

## Prompt set

All generations referenced the supplied website mockup. No interface text or controls were baked into the assets.

Hero: Create a wide 2:1 hero scene matching the reference: cream-white angular villa on the left, overhead palms, blue infinity pool, sea and mountain horizon, deep navy sky with central space for HTML headings. Place the same smiling blue-eyed woman with orange-blonde and pink curled hair and white blouse on the far right, pointing left, cropped at the right edge. Blend her lower torso and arm naturally behind dense tropical leaves and pink flowering bushes. Character occupies only the rightmost 20 percent. Match the reference's photographic scenery and illustrated character. No text, logos, scribbles, paint, UI, buttons, cards or borders.

Property assets: Generate separate full-bleed 16:9 luxury architecture photographs matching each reference card's viewpoint and rich sunny palette. First: single-storey angular white villa, turquoise pool foreground, palms, vivid blue sky. Second: cream covered terrace, beige outdoor seating and dining furniture, balcony, sea and mountain panorama. Third: wide single-storey glass villa, bright pool, tall palms framing both sides. No prices, badges, hearts, buttons, frames or watermarks.

Coast: Standalone 4:3 travel photograph matching the reference's lower-left photo: curved sandy Mediterranean cove, clear turquoise water, rocky tan hills and distant blue mountains, seen from a hillside on a bright sunny day. No frame, text, labels, paint strokes, UI, logo or watermark.

Golf: Standalone 4:3 travel photograph matching the reference's lower-right photo: manicured green golf course, putting green, palms and Mediterranean villas, blue mountain ridge and clear sky. Match the reference's viewpoint and sunny green and blue palette. No frame, text, labels, paint strokes, UI, logo or watermark.

The mascot and foliage are one composition on the homepage so responsive image sizing cannot separate them. Mobile moves the scenery below the main copy to preserve legibility.

## Reference fidelity revision

- `public/images/discover-palms.webp`: built-in image generation, reference-guided 3:1 nearly black tropical palm scene with cream villa edge and subtle green brush accents, empty dark center, no text or UI.
- `public/images/help-architecture.webp`: built-in image generation, reference-guided portrait photo of an angular cream villa canopy, warm recessed lights, glass walls, beige sofa and palms; no text or UI.
- `public/images/sun-golf-lettering.webp`: built-in image generation, recreate the reference's white stacked SUN / GOLF / SEA / A BRIGHTER / TOMORROW lettering and neon green dry-brush marks on transparent background.
- `public/images/life-murcia-lettering.svg`: hand-drawn vector letter strokes for LIFE / IN / MURCIA with green underline. Generated variants were rejected for poor small-size legibility.
- BrandLogo uses fine triangular sunburst rays and a compact wordmark matching the supplied logo's proportions.

The homepage now follows the four sections shown in the supplied mockup. Resort guides, testimonials and sales calls to action remain available through the site's other pages.

## October 2026 layout refinement

- Discover now uses `reference-coast-cutout.png` and `reference-golf-cutout.png`, original supplied design crops including their paper edges, lettering and brush marks. These are tracked public assets, copied from the local raw artwork folder. They replace the generated standalone travel photos in this section.
- Both hero annotations use the same Kalam handwriting font, live text and green SVG accents. Sun/golf/sea lettering sits above the mascot’s pointing hand.
- Search, benefits, header and footer use neutral black. Hero headings have layered shadows for depth; section heights, card spacing and the services photo boundary were adjusted against the reference at 1024px.
- Compared using Chromium CLI screenshots, without Playwright. Original low-resolution cutouts and newly generated architecture mean the result is a close reconstruction rather than a pixel-identical export.

Wide desktop correction after reviewing `howitlooks1.png`: capped the hero composition at 1120px, headline at 108px, and stage at 440px above 1100px viewport width. Preserved the scene’s 2:1 aspect ratio and moved the annotation toward the pointing hand. Checked at 1536×864 with Chromium CLI; the previous 1024px check missed the wide-screen scaling issue.
