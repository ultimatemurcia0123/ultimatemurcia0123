import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ResortCard from '@/components/ResortCard';
import ContactCta from '@/components/ContactCta';
import { RESORTS_DATA } from '@/data/resorts';

export const metadata: Metadata = { title: 'Areas & resorts | Ultimate Murcia', description: 'Explore Murcia’s golf resorts and communities, and talk to the team about finding the right area for you.' };
export default function ResortsPage() {
  return <div className="inner-page">
    <PageHero eyebrow="DISCOVER MURCIA" title="Find your" highlight="kind of place." description="Golf communities, coastal towns and space to slow down. Start with these areas, then tell us what matters to you." image="/images/areas-hero-v1.webp" />
    <div className="page-shell page-section space-y-10">
      <section><h2 className="section-heading">Explore the resorts</h2><p className="page-copy mt-3 max-w-2xl">A starting point for your search. We also help with coastal and rural homes across Murcia and Alicante.</p></section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{RESORTS_DATA.map(resort => <ResortCard key={resort.id} resort={resort} />)}</div>
      <ContactCta title="Choosing between areas?" description="Tell us about your daily life, travel plans and budget. We’ll help you narrow down the places to explore." label="Help me choose an area" />
    </div>
  </div>;
}
