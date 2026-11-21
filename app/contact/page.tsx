'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { site } from '@/data/site';

export default function ContactPage() {
    const [done, setDone] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire to Formspree / Resend / backend
        setDone(true);
    };

    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="We'd love to help plan your safari — get in touch today."
                image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop"
            />
            <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Contact Details</h2>
                    <a href={`tel:${site.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-amber-400">
                        <FaPhoneAlt className="text-amber-500" /> {site.phone} <span className="text-xs">(24 hr)</span>
                    </a>
                    <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-gray-300 hover:text-amber-400">
                        <FaEnvelope className="text-amber-500" /> {site.email}
                    </a>
                    <p className="flex items-center gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-amber-500" /> {site.address}
                    </p>
                    <a
                        href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-bold"
                    >
                        <FaWhatsapp /> Chat on WhatsApp
                    </a>
                </div>

                <div className="glass rounded-2xl p-8">
                    {done ? (
                        <div className="text-center py-10">
                            <div className="text-5xl mb-4">📩</div>
                            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-gray-400 text-sm">We&apos;ll reply within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <h3 className="font-bold mb-2">Send a Message</h3>
                            <input required placeholder="Your name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                            <input required type="email" placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                            <input placeholder="Phone (optional)" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                            <textarea required rows={4} placeholder="Your message" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                            <button className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded-lg font-bold">
                                <FaPaperPlane size={14} /> Send Message
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}