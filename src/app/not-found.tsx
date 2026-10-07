import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function NotFound() {
  return <div className="inner-page">
    <PageHero eyebrow="PAGE NOT FOUND" title="Let’s get you" highlight="back on track." description="This page may have moved, or the address may be incomplete." image="/images/contact-hero-v1.webp" />
    <section className="page-shell page-section">
      <h2 className="section-heading">Your search can continue here.</h2>
      <p className="page-copy mt-4 max-w-xl">Explore our selected properties or talk to the team about the home or area you’re looking for.</p>
      <div className="flex flex-wrap gap-3 mt-6"><Link href="/properties" className="action-primary">Browse properties</Link><Link href="/contact" className="action-secondary">Contact the team</Link></div>
    </section>
  </div>;
}
