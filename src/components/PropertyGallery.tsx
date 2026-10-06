'use client';
import { useState } from 'react';

export default function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  return <div>
    <div className="aspect-[4/3] sm:aspect-[16/10] bg-neutral-100 rounded-2xl overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={images[active]} alt={title + ' — photo ' + (active + 1)} className="w-full h-full object-contain" fetchPriority="high" />
    </div>
    <div className="flex gap-3 overflow-x-auto py-3" aria-label="Property photographs">
      {images.map((src, index) => <button key={src} aria-label={'Show photo ' + (index + 1)} aria-pressed={active === index} onClick={() => setActive(index)} className={'shrink-0 rounded-lg overflow-hidden border-2 ' + (active === index ? 'border-emerald-600' : 'border-transparent')}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" loading="lazy" className="w-20 sm:w-24 h-16 object-cover" />
      </button>)}
    </div>
  </div>;
}
