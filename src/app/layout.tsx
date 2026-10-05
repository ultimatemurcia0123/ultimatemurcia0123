import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

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
        url: '/images/design-mockup.jpeg',
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
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#00D26A] selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
