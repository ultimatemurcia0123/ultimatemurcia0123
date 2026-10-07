'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  if (!images.length) return <div className="surface-card page-copy">Contact the team for photographs of this property.</div>;
  const changePhoto = (direction: number) => setActive(current => (current + direction + images.length) % images.length);
  return <div role="region" aria-label="Property photographs" onKeyDown={event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); changePhoto(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); changePhoto(1); }
  }}>
    <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-neutral-100 rounded-2xl overflow-hidden">
      <Image src={images[active]} alt={title + ' — photo ' + (active + 1)} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-contain" loading="eager" />
      {images.length > 1 && <>
        <button type="button" aria-label="Previous photograph" onClick={() => changePhoto(-1)} className="gallery-arrow left-3"><ChevronLeft aria-hidden="true" size={22} /></button>
        <button type="button" aria-label="Next photograph" onClick={() => changePhoto(1)} className="gallery-arrow right-3"><ChevronRight aria-hidden="true" size={22} /></button>
      </>}
      <p className="absolute bottom-3 right-3 rounded-full bg-black/75 px-3 py-1.5 text-xs font-semibold text-white tabular-nums" aria-live="polite" aria-atomic="true">Photo {active + 1} of {images.length}</p>
    </div>
    <div className="flex gap-3 overflow-x-auto py-3 px-1" aria-label="Choose a photograph">
      {images.map((src, index) => <button key={src} aria-label={'Show photo ' + (index + 1)} aria-pressed={active === index} onClick={() => setActive(index)} className={'shrink-0 rounded-lg overflow-hidden border-2 ' + (active === index ? 'border-emerald-600' : 'border-transparent')}>
        <Image src={src} alt="" width={96} height={64} sizes="96px" className="w-20 sm:w-24 h-16 object-cover" />
      </button>)}
    </div>
  </div>;
}
