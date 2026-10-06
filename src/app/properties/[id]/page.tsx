import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BedDouble, Bath, Maximize2, ArrowLeft, Phone } from 'lucide-react';
import { PROPERTIES_DATA } from '@/data/properties';
import { SITE_CONTENT } from '@/data/site-content';
import PropertyGallery from '@/components/PropertyGallery';

function findProperty(id: string) { return PROPERTIES_DATA.find(p => p.id === id || p.slug === id); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const property = findProperty((await params).id);
  return { title: property ? property.title + ' | Ultimate Murcia' : 'Property not found | Ultimate Murcia', description: property?.description };
}
export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const property = findProperty((await params).id);
  if (!property) notFound();
  const { brand } = SITE_CONTENT;
  const enquiry = '/contact?property=' + encodeURIComponent(property.referenceNumber || property.title);
  return <div className="inner-page">
    <div className="page-shell page-section">
      <Link href="/properties" className="inline-flex gap-2 items-center text-sm text-neutral-600 hover:text-black mb-7"><ArrowLeft size={16} />All properties</Link>
      <div className="mb-8"><p className="text-sm text-emerald-800 font-semibold mb-3">{property.resortName}</p><h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight max-w-4xl leading-tight">{property.title}</h1><p className="text-sm text-neutral-500 mt-3">{property.locationArea}{property.referenceNumber && ' · Ref. ' + property.referenceNumber}</p></div>
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
        <div>
          <PropertyGallery images={property.images} title={property.title} />
          <section className="mt-7"><h2 className="section-heading">About this home</h2><p className="page-copy mt-4">{property.description}</p></section>
          <section className="mt-8"><h2 className="text-xl font-bold">Features</h2><ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-neutral-700 list-disc pl-5 marker:text-emerald-600">{property.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
        </div>
        <aside className="surface-card lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold">Asking price</p>
          <p className="text-4xl font-extrabold tracking-tight mt-2">{new Intl.NumberFormat('en-IE', {style:'currency', currency:property.currency, maximumFractionDigits:0}).format(property.price)}</p>
          <div className="flex flex-wrap gap-5 border-y border-neutral-200 py-5 my-6 text-sm">
            <span className="flex items-center gap-2"><BedDouble size={19} />{property.bedrooms} beds</span><span className="flex items-center gap-2"><Bath size={19} />{property.bathrooms} baths</span>
            {property.buildAreaSqm && <span className="flex items-center gap-2"><Maximize2 size={19} />{property.buildAreaSqm} m²</span>}
          </div>
          <h2 className="text-xl font-bold">Interested in this home?</h2><p className="page-copy mt-3 mb-5">Ask Christine about availability, property details or arranging a viewing.</p>
          <Link href={enquiry} className="action-primary w-full">Enquire about this property</Link>
          <a href={'tel:+' + brand.whatsappNumber} className="action-secondary w-full mt-3"><Phone size={16} />{brand.phone}</a>
          <p className="text-xs text-neutral-500 leading-relaxed mt-6">Details checked on 6 October 2026. Please confirm the current price and availability with the team.</p>
          {property.sourceUrl && <a href={property.sourceUrl} className="inline-block mt-3 text-xs underline underline-offset-4">View original listing ↗</a>}
        </aside>
      </div>
    </div>
  </div>;
}
