import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';
import { PaintSplash } from '@/components/decor/Brush';

export default function DiscoverMurciaSection() {
  const { discoverMurcia } = SITE_CONTENT;
  return (
    <section id="discover" className="home-discover">
      <div className="home-discover-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="home-polaroid home-polaroid-coast">
          <PaintSplash className="absolute -left-8 -top-7 w-40 h-24 text-[#00F34A] -z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/lifestyle-coast.webp" alt="Turquoise Mediterranean cove and sandy coastline" width={700} height={525} loading="lazy" />
          <figcaption>Stunning<br />coastline</figcaption>
        </figure>
        <div className="home-discover-copy">
          <div className="eyebrow mb-3">{discoverMurcia.badge}</div>
          <h2 className="display-title"><span className="block">{discoverMurcia.titlePart1}</span><span className="block text-[#00F34A]">{discoverMurcia.titlePart2}</span></h2>
          <p className="text-sm leading-relaxed mt-4 mb-5 text-white/90">{discoverMurcia.description}</p>
          <Link href={discoverMurcia.ctaLink} className="home-primary-button">{discoverMurcia.ctaText}<ArrowRight className="w-4 h-4" /></Link>
        </div>
        <figure className="home-polaroid home-polaroid-golf">
          <PaintSplash className="absolute -right-8 -bottom-8 w-44 h-28 text-[#00F34A] -z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/lifestyle-golf.webp" alt="Palm-lined Mediterranean golf course beneath a blue mountain skyline" width={700} height={525} loading="lazy" />
          <figcaption>World class<br />golf</figcaption>
        </figure>
      </div>
    </section>
  );
}
