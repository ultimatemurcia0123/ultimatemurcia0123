import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Barlow_Condensed, Permanent_Marker, Kalam } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

// Body copy
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

// Big punchy italic headlines ("MORE THAN A HOME")
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

// Hand-written marker stickers ("Life in Murcia")
const marker = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  weight: '400',
  display: 'swap',
});

const handwriting = Kalam({ subsets: ['latin'], weight: '400', variable: '--font-handwriting', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ultimatemurcia.com'),
  title: 'Ultimate Murcia Property Sales | More Than A Home • Costa Cálida & Golf Specialists',
  description:
    'Exceptional properties. A brighter lifestyle. We help you buy or sell in Murcia and Costa Cálida. Luxury golf resort villas, lagoon residences, and coastal apartments.',
  keywords: [
    'Murcia property sales',
    'Costa Calida real estate',
    'Santa Rosalia Lake and Life Resort villas',
    'La Torre Golf Resort apartments',
    'Hacienda Riquelme property',
    'Roda Golf Resort',
    'Altaona Golf Resort',
    'Spain golf property for sale',
  ],
  authors: [{ name: 'Ultimate Murcia Property Sales' }],
  openGraph: {
    title: 'Ultimate Murcia Property Sales | More Than A Home',
    description:
      'Exceptional properties. A brighter lifestyle. Luxury villas, penthouses, and golf resorts in Murcia, Spain.',
    url: 'https://ultimatemurcia.com',
    siteName: 'Ultimate Murcia Property Sales',
    images: [
      {
        url: '/images/hero-reference-v2.webp',
        width: 1200,
        height: 630,
        alt: 'Ultimate Murcia Property Sales',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${barlow.variable} ${marker.variable} ${handwriting.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#00D26A] selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
