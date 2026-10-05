import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ultimate Murcia Property Sales | Luxury Golf Resorts & Costa Cálida Real Estate',
  description:
    'Reliable, licensed, and AIPP-approved estate agents in Murcia, Spain. Discover luxury golf villas, lagoon residences in Santa Rosalía, and apartments across Costa Cálida.',
  keywords: [
    'Murcia property sales',
    'Costa Calida real estate',
    'Santa Rosalia Lake and Life Resort villas',
    'La Torre Golf Resort apartments',
    'Hacienda Riquelme property',
    'El Valle Golf villas',
    'Spain golf property for sale',
  ],
  authors: [{ name: 'Ultimate Murcia Property Sales' }],
  openGraph: {
    title: 'Ultimate Murcia Property Sales | Costa Cálida Real Estate',
    description:
      'Discover villas, penthouses, and resort properties in Murcia, Spain with our AIPP-approved team.',
    url: 'https://ultimatemurcia.com',
    siteName: 'Ultimate Murcia Property Sales',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-[#faf8f5] text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
