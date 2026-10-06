import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PropertyCard from '@/components/PropertyCard';
import { PROPERTIES_DATA } from '@/data/properties';
import { RESORTS_DATA } from '@/data/resorts';

export const metadata: Metadata = { title: 'Properties | Ultimate Murcia', description: 'Browse a selection of homes in Murcia and enquire directly with the Ultimate Murcia team.' };
export default async function PropertiesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const value = (key: string) => typeof params[key] === 'string' ? params[key] as string : '';
  const query = value('q').trim();
  const resort = value('resort');
  const type = value('type');
  const bedrooms = value('bedrooms');
  const maxPrice = value('maxPrice');
  const kind = value('kind') || (value('newBuild') === 'true' ? 'new-build' : value('rental') === 'true' ? 'rental' : '');
  const sort = value('sort');
  const pool = value('pool') === 'yes';
  const properties = PROPERTIES_DATA.filter(p =>
    (!query || (p.title + ' ' + p.referenceNumber + ' ' + p.resortName).toLowerCase().includes(query.toLowerCase())) &&
    (!resort || p.resortId === resort) && (!type || p.type === type) &&
    (!Number(bedrooms) || p.bedrooms >= Number(bedrooms)) &&
    (!(Number(maxPrice) > 0) || p.price <= Number(maxPrice)) &&
    (!kind || p.listingKind === kind) && (!pool || p.hasPrivatePool || p.hasCommunalPool)
  ).sort((a,b) => sort === 'price-asc' ? a.price-b.price : sort === 'price-desc' ? b.price-a.price : 0);
  const areas = [...RESORTS_DATA.map(r => ({id:r.id,name:r.name})), {id:'los-alcazares',name:'Los Alcázares'}, {id:'roda-golf',name:'Roda Golf Resort'}, {id:'altaona-golf',name:'Altaona Golf Resort'}];
  const originalUrl = kind === 'rental' ? 'https://ultimatemurcia.com/rental-property/' : kind === 'new-build' ? 'https://ultimatemurcia.com/new-build-property/' : 'https://ultimatemurcia.com/all-properties-card-v2/';
  return <div className="inner-page">
    <PageHero eyebrow="FIND YOUR NEXT HOME" title="A place to" highlight="call your own." description="Explore selected homes in Murcia. Tell us what you’re looking for if you’d like a wider search." />
    <div className="page-shell page-section space-y-8">
      <form action="/properties" className="surface-card" key={JSON.stringify(params)}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div><label htmlFor="property-area" className="field-label">Area</label><select id="property-area" name="resort" defaultValue={resort} className="form-field"><option value="">Any area</option>{areas.map(area => <option key={area.id} value={area.id}>{area.name}</option>)}</select></div>
          <div><label htmlFor="property-type" className="field-label">Property type</label><select id="property-type" name="type" defaultValue={type} className="form-field"><option value="">Any type</option><option value="villa">Villa</option><option value="semi-detached">Semi-detached</option><option value="apartment">Apartment</option><option value="townhouse">Townhouse</option><option value="penthouse">Penthouse</option></select></div>
          <div><label htmlFor="property-beds" className="field-label">Bedrooms</label><select id="property-beds" name="bedrooms" defaultValue={bedrooms} className="form-field"><option value="">Any</option>{[1,2,3,4,5].map(n => <option key={n} value={n}>{n}+ bedrooms</option>)}</select></div>
          <div><label htmlFor="property-price" className="field-label">Maximum price (€)</label><input id="property-price" name="maxPrice" type="number" min="0" step="1" placeholder="No maximum" defaultValue={maxPrice} className="form-field" /></div>
        </div>
        <details className="mt-5" open={Boolean(query || kind || pool || sort)}>
          <summary className="text-sm font-semibold cursor-pointer">More options</summary>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div><label htmlFor="property-query" className="field-label">Name or reference</label><input id="property-query" name="q" defaultValue={query} className="form-field" placeholder="Search properties" /></div>
            <div><label htmlFor="property-kind" className="field-label">Looking for</label><select id="property-kind" name="kind" defaultValue={kind} className="form-field"><option value="">All homes for sale</option><option value="resale">Resale</option><option value="new-build">New build</option><option value="rental">Rental</option></select></div>
            <div><label htmlFor="property-sort" className="field-label">Sort by</label><select id="property-sort" name="sort" defaultValue={sort} className="form-field"><option value="">Featured order</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select></div>
          </div>
          <label className="inline-flex items-center gap-2 mt-4 text-sm"><input type="checkbox" name="pool" value="yes" defaultChecked={pool} className="accent-emerald-600 w-4 h-4" />Private or communal pool</label>
        </details>
        <div className="flex gap-5 items-center mt-5"><button className="action-primary" type="submit">Apply filters</button><Link href="/properties" className="text-sm font-semibold underline underline-offset-4">Clear filters</Link></div>
      </form>
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3"><div><h2 className="section-heading">{properties.length} {properties.length === 1 ? 'property' : 'properties'} in this selection</h2><p className="text-xs text-neutral-500 mt-2">Details checked on 6 October 2026. Ask us to confirm current availability.</p></div><a href={originalUrl} className="text-sm font-semibold underline underline-offset-4">Browse the full collection ↗</a></div>
      {properties.length ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{properties.map(property => <PropertyCard key={property.id} property={property} />)}</div> : <section className="surface-card text-center py-12"><h3 className="text-xl font-bold">No matches in this selection</h3><p className="page-copy mt-3 mb-6 max-w-lg mx-auto">Try changing your filters, browse the full collection or ask the team to help with your search.</p><Link href="/contact" className="action-primary">Help me find a property</Link></section>}
    </div>
  </div>;
}
