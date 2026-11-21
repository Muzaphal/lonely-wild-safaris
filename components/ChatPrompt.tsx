'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp, FaTimes, FaCommentDots } from 'react-icons/fa';
import { site } from '@/data/site';

export default function ChatPrompt() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(t);
    }, []);

    if (dismissed || !show) return null;

    const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

    return (
        <div className="fixed bottom-24 right-6 z-40 max-w-xs glass rounded-2xl p-4 animate-[fadeIn_0.5s_ease] shadow-2xl">
            <button
                onClick={() => setDismissed(true)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                aria-label="Close"
            >
                <FaTimes size={14} />
            </button>
            <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <FaCommentDots />
                </div>
                <div>
                    <p className="text-sm font-bold mb-1">Planning a safari?</p>
                    <p className="text-xs text-gray-300 mb-3">
                        Chat with our experts on WhatsApp for a free custom quote.
                    </p>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-full text-xs font-bold transition"
                    >
                        <FaWhatsapp /> Start Chat
                    </a>
                </div>
            </div>
        </div>
    );
}