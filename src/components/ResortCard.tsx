import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Resort } from '@/types/property';

export default function ResortCard({ resort }: { resort: Resort }) {
  return <article className="surface-card flex flex-col">
    <MapPin size={25} className="text-emerald-700 mb-5" />
    <h3 className="text-xl font-bold tracking-tight"><Link href={'/resorts/' + resort.slug} className="hover:underline">{resort.name}</Link></h3>
    <p className="text-xs text-neutral-500 mt-2">{resort.location}</p>
    <p className="page-copy my-5">{resort.shortDesc}</p>
    <Link href={'/resorts/' + resort.slug} className="mt-auto inline-flex items-center gap-2 text-sm font-bold hover:underline">Explore the area<ArrowRight size={16} /></Link>
  </article>;
}
