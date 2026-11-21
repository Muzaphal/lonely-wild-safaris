'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export interface FaqItem {
    q: string;
    a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div key={i} className="glass rounded-xl overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold hover:bg-white/5 transition"
                            aria-expanded={isOpen}
                        >
                            <span>{item.q}</span>
                            <FaChevronDown
                                className={`text-amber-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                    }`}
                                size={14}
                            />
                        </button>
                        <div
                            className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-5 pb-5 text-sm text-gray-300 leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}