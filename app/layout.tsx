import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lonely Wild Safaris | Authentic African Adventures',
  description:
    'Registered & licensed tour operator in Kampala, Uganda. 20+ years crafting dream African holidays — Uganda safaris, outbound travel & visa assistance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white min-h-screen antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}