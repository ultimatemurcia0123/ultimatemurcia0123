import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactCta from '@/components/ContactCta';
import PropertyCard from '@/components/PropertyCard';
import { RESORTS_DATA } from '@/data/resorts';
import { PROPERTIES_DATA } from '@/data/properties';

function findResort(slug: string) { return RESORTS_DATA.find(r => r.slug === slug || r.id === slug); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resort = findResort((await params).slug);
  return { title: (resort?.name || 'Area not found') + ' | Ultimate Murcia', description: resort?.shortDesc };
}
export default async function ResortPage({ params }: { params: Promise<{ slug: string }> }) {
  const resort = findResort((await params).slug);
  if (!resort) notFound();
  const properties = PROPERTIES_DATA.filter(p => p.resortId === resort.id);
  return <div className="inner-page">
    <PageHero eyebrow={resort.location} title={resort.name} description={resort.tagline}>
      <Link href="/resorts" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white"><ArrowLeft size={16} />All areas</Link>
    </PageHero>
    <div className="page-shell page-section space-y-12">
      <section className="grid md:grid-cols-[1.4fr_1fr] gap-10">
        <div><h2 className="section-heading">Get to know the area</h2><p className="page-copy mt-4">{resort.fullDesc}</p><Link href={'/contact?area=' + encodeURIComponent(resort.name)} className="inline-block font-semibold text-sm mt-5 underline underline-offset-4">Ask about living here</Link></div>
        <aside className="surface-card"><h2 className="text-lg font-bold">Worth exploring</h2><ul className="mt-4 space-y-3 text-sm text-neutral-600 list-disc pl-5 marker:text-emerald-600">{resort.features.map(feature => <li key={feature}>{feature}</li>)}</ul></aside>
      </section>
      <section><h2 className="section-heading mb-5">Homes in {resort.name}</h2>
        {properties.length ? <><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{properties.map(property => <PropertyCard key={property.id} property={property} />)}</div><p className="text-xs text-neutral-500 mt-4">Selected listings checked on 6 October 2026. Contact us for current availability.</p></> : <p className="page-copy">No homes from this area are included in our current selection. Ask the team what is available and we’ll help with your search.</p>}
      </section>
      <ContactCta title="Could this be your next home?" description="Ask about the area, arrange a viewing or talk through the kind of property you’re looking for." href={'/contact?area=' + encodeURIComponent(resort.name)} label="Enquire about this area" />
    </div>
  </div>;
}
