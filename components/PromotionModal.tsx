'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTimes, FaWhatsapp, FaCheck, FaCalendarAlt } from 'react-icons/fa';
import { Promotion } from '@/data/promotions';
import { site } from '@/data/site';

export default function PromotionModal({
    promo,
    onClose,
}: {
    promo: Promotion | null;
    onClose: () => void;
}) {
    if (!promo) return null;

    const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        `Hi Lonely Wild Safaris! I saw the "${promo.title}" promotion on your website and I'd like to ask about it.`
    )}`;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={promo.title}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl w-full max-w-3xl my-8 relative overflow-hidden"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full glass hover:bg-white/20 flex items-center justify-center transition"
                    aria-label="Close"
                >
                    <FaTimes />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Flyer image */}
                    <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[500px] bg-black/40">
                        <Image
                            src={promo.flyer}
                            alt={promo.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain md:object-cover"
                            priority
                        />
                    </div>

                    {/* Details */}
                    <div className="p-6 md:p-8 flex flex-col">
                        {promo.validUntil && (
                            <div className="inline-flex items-center gap-2 text-xs text-amber-400 font-bold mb-3">
                                <FaCalendarAlt size={12} /> Valid until {promo.validUntil}
                            </div>
                        )}

                        <h2 className="text-2xl font-bold mb-2">{promo.title}</h2>
                        <p className="text-sm text-gray-400 mb-4">{promo.subtitle}</p>

                        {promo.price && (
                            <div className="mb-5">
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Price</p>
                                <p className="text-3xl font-extrabold text-amber-400">{promo.price}</p>
                            </div>
                        )}

                        <ul className="space-y-2 mb-6 text-sm text-gray-300">
                            {promo.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <FaCheck className="text-green-500 mt-1 shrink-0" size={12} />
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto space-y-2">
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg font-bold transition"
                            >
                                <FaWhatsapp /> Ask us about it
                            </a>
                            <Link
                                href={`/contact?promo=${promo.id}`}
                                onClick={onClose}
                                className="w-full flex items-center justify-center gap-2 glass hover:bg-white/15 px-4 py-3 rounded-lg font-bold transition"
                            >
                                Contact form
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}