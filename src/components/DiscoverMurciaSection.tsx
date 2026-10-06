import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';

export default function DiscoverMurciaSection() {
  const { discoverMurcia } = SITE_CONTENT;
  return (
    <section id="discover" className="home-discover">
      <div className="home-discover-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="home-reference-cutout home-reference-coast">
          {/* Original cutout artwork from the supplied design, including frame and brush label. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/reference-coast-cutout.png" alt="Stunning coastline — a tilted photo of the Mediterranean cove with a rough white brush label" width={250} height={200} loading="lazy" />
        </figure>
        <div className="home-discover-copy">
          <div className="eyebrow mb-3">{discoverMurcia.badge}</div>
          <h2 className="display-title"><span className="block">{discoverMurcia.titlePart1}</span><span className="block text-[#00F34A]">{discoverMurcia.titlePart2}</span></h2>
          <p className="text-sm leading-relaxed mt-4 mb-5 text-white/90">{discoverMurcia.description}</p>
          <Link href={discoverMurcia.ctaLink} className="home-primary-button">{discoverMurcia.ctaText}<ArrowRight className="w-4 h-4" /></Link>
        </div>
        <figure className="home-reference-cutout home-reference-golf">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/reference-golf-cutout.png" alt="World class golf — a tilted photo of the green with a rough white brush label" width={200} height={190} loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
