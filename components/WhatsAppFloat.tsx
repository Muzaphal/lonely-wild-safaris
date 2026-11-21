'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { site } from '@/data/site';

export default function WhatsAppFloat() {
    const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 group"
        >
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
            <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-900/50 transition-all">
                <FaWhatsapp size={28} />
            </span>
            <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Chat with us
            </span>
        </a>
    );
}