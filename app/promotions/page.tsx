'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { promotions, Promotion } from '@/data/promotions';
import { FaTicketAlt, FaExpand } from 'react-icons/fa';
import PromotionModal from '@/components/PromotionModal';

export default function PromotionsPage() {
    const [selected, setSelected] = useState<Promotion | null>(null);

    return (
        <>
            <PageHero
                title="Current Promotions"
                subtitle="Tap a flyer to see the details and ask us about it."
                image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop"
            />

            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                        <FaTicketAlt size={22} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Limited-time offers</h2>
                        <p className="text-sm text-gray-400">
                            Tap a flyer to see the details and ask us about it.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {promotions.map((promo) => (
                        <button
                            key={promo.id}
                            onClick={() => setSelected(promo)}
                            className="group relative glass-card rounded-2xl overflow-hidden aspect-[3/4] text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
                            aria-label={`View ${promo.title}`}
                        >
                            <Image
                                src={promo.flyer}
                                alt={promo.title}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                            {/* Hover icon */}
                            <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <FaExpand size={12} />
                            </div>

                            {/* Bottom info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                {promo.validUntil && (
                                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-black px-2 py-0.5 rounded mb-2">
                                        Until {promo.validUntil}
                                    </span>
                                )}
                                <h3 className="text-white font-bold text-sm leading-tight mb-1">
                                    {promo.title}
                                </h3>
                                {promo.price && (
                                    <p className="text-amber-400 text-xs font-bold">{promo.price}</p>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <PromotionModal promo={selected} onClose={() => setSelected(null)} />
        </>
    );
}