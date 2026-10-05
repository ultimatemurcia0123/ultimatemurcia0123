/**
 * Central image registry.
 *
 * Every photo / illustration used on the site lives in /public/images and is
 * referenced from here. To swap a picture, drop a new file into /public/images
 * and change the path below — no component code needs to change.
 */
export const IMAGES = {
  hero: {
    garden: '/images/hero-garden.webp',
    villa: '/images/hero-reference-v2.webp',
  },
  mascot: {
    point: '/images/mascot/mascot-point-v2.webp',
    // Extra poses fall back to the main artwork until dedicated art is added.
    wave: '/images/mascot/mascot-point-v2.webp',
    keys: '/images/mascot/mascot-point-v2.webp',
    golf: '/images/mascot/mascot-point-v2.webp',
  },
  discover: {
    coast: '/images/discover-coast.webp',
    golf: '/images/discover-golf.webp',
  },
  howWeHelp: '/images/how-we-help-villa.webp',
  properties: {
    p1: '/images/prop-1.webp',
    p2: '/images/prop-2.webp',
    p3: '/images/prop-3.webp',
    p4: '/images/prop-4.webp',
    p5: '/images/prop-5.webp',
    p6: '/images/prop-6.webp',
  },
  interiors: {
    living: '/images/interior-living.webp',
    dining: '/images/interior-dining.webp',
    lounge: '/images/interior-lounge.webp',
    bedroom: '/images/interior-bedroom.webp',
    bath: '/images/interior-bath.webp',
    kitchen: '/images/interior-kitchen.webp',
  },
  resorts: {
    santaRosalia: '/images/resort-santa-rosalia.webp',
    laTorre: '/images/resort-la-torre.webp',
    haciendaRiquelme: '/images/resort-hacienda-riquelme.webp',
    elValle: '/images/resort-el-valle.webp',
    condado: '/images/resort-condado.webp',
    sierraGolf: '/images/resort-sierra-golf.webp',
  },
} as const;
