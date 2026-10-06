import Link from 'next/link';
import { Bed, Bath, Maximize2, MapPin, ArrowRight } from 'lucide-react';
import type { Property } from '@/types/property';

export default function PropertyCard({ property }: { property: Property }) {
  const href = '/properties/' + property.id;
  const price = new Intl.NumberFormat('en-IE', { style: 'currency', currency: property.currency, maximumFractionDigits: 0 }).format(property.price);
  return <article className="group bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
    <Link href={href} className="relative aspect-[16/9] overflow-hidden bg-neutral-100 block" aria-label={'View ' + property.title}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <span className="absolute top-3 left-3 bg-[#00F34A] text-black font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full">{property.status === 'sold' ? 'Sold' : property.status === 'under_offer' ? 'Under offer' : 'For sale'}</span>
    </Link>
    <div className="p-4 flex-1 flex flex-col">
      <div className="flex justify-between items-center gap-3"><p className="text-[22px] font-extrabold tracking-tight">{price}</p><Link href={href} aria-label={'Details for ' + property.title} className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[#00F34A]"><ArrowRight size={16} /></Link></div>
      <h3 className="text-sm font-bold mt-2 leading-relaxed"><Link href={href} className="hover:underline">{property.title}</Link></h3>
      <p className="flex items-center gap-1.5 text-xs text-neutral-500 mt-2 mb-4"><MapPin size={14} />{property.resortName}</p>
      <div className="flex flex-wrap gap-4 text-xs text-neutral-600 mt-auto">
        <span className="flex gap-1.5 items-center"><Bed size={16} />{property.bedrooms} {property.bedrooms === 1 ? 'bed' : 'beds'}</span>
        <span className="flex gap-1.5 items-center"><Bath size={16} />{property.bathrooms} {property.bathrooms === 1 ? 'bath' : 'baths'}</span>
        {property.buildAreaSqm && <span className="flex gap-1.5 items-center"><Maximize2 size={16} />{property.buildAreaSqm} m²</span>}
      </div>
    </div>
  </article>;
}
