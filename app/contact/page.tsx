'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CopyEmail from '@/components/CopyEmail';
import EmailButton from '@/components/EmailButton';
import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaPaperPlane,
} from 'react-icons/fa';
import { site } from '@/data/site';

function ContactInner() {
    const params = useSearchParams();
    const [done, setDone] = useState(false);
    const [sending, setSending] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
        const promo = params.get('promo');
        if (promo) {
            setForm((f) =>
                f.message
                    ? f
                    : {
                        ...f,
                        message: `Hi, I'm interested in the "${promo}" promotion. Please send me more details.`,
                    }
            );
        }
    }, [params]);

    const waText = encodeURIComponent(
        `New enquiry from ${form.name}\n` +
        `Email: ${form.email}\n` +
        (form.phone ? `Phone: ${form.phone}\n` : '') +
        `\nMessage:\n${form.message}`
    );
    const waHref = `https://wa.me/${site.whatsappNumber}?text=${waText}`;

    const emailSubject = `Website Enquiry – ${form.name || 'New client'}`;
    const emailBody =
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        (form.phone ? `Phone: ${form.phone}\n` : '') +
        `\nMessage:\n${form.message}`;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        // For now: open WhatsApp with the message so nothing is lost
        window.open(waHref, '_blank', 'noopener,noreferrer');
        setTimeout(() => {
            setSending(false);
            setDone(true);
        }, 600);
    };

    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="We'd love to help plan your safari — get in touch today."
                image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop"
            />

            <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
                {/* Contact details */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Contact Details</h2>

                    <a
                        href={`tel:${site.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition"
                    >
                        <FaPhoneAlt className="text-amber-500 shrink-0" />
                        <span>
                            {site.phone}{' '}
                            <span className="text-xs text-gray-500">(24 hr)</span>
                        </span>
                    </a>

                    <div className="text-gray-300">
                        <CopyEmail email={site.email} />
                    </div>

                    <p className="flex items-center gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-amber-500 shrink-0" />
                        {site.address}
                    </p>

                    <a
                        href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
                            site.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-bold transition"
                    >
                        <FaWhatsapp /> Chat on WhatsApp
                    </a>

                    <p className="text-xs text-gray-500 pt-3 border-t border-white/10">
                        Click the email address to open your email app. Use the copy button
                        to paste it into any email service.
                    </p>
                </div>

                {/* Contact form */}
                <div className="glass rounded-2xl p-8">
                    {done ? (
                        <div className="text-center py-8">
                            <div className="text-5xl mb-4">📩</div>
                            <h3 className="text-xl font-bold mb-2">Message Ready to Send!</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Choose your preferred delivery method below.
                            </p>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={waHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-bold transition"
                                >
                                    <FaWhatsapp /> Send via WhatsApp
                                </a>
                                <EmailButton
                                    to={site.email}
                                    subject={emailSubject}
                                    body={emailBody}
                                    label="Send via Email"
                                    className="w-full"
                                />
                            </div>

                            <button
                                onClick={() => {
                                    setForm({ name: '', email: '', phone: '', message: '' });
                                    setDone(false);
                                }}
                                className="mt-6 text-xs text-amber-400 hover:text-amber-300 underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <h3 className="font-bold mb-2">Send a Message</h3>

                            <input
                                required
                                type="text"
                                placeholder="Your name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                            />
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone (optional)"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                            />
                            <textarea
                                required
                                rows={5}
                                placeholder="Your message"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 resize-none"
                            />
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 px-4 py-3 rounded-lg font-bold transition"
                            >
                                <FaPaperPlane size={14} />
                                {sending ? 'Preparing…' : 'Send Message'}
                            </button>
                            <p className="text-[10px] text-center text-gray-500">
                                We&apos;ll never share your details.
                            </p>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}

export default function ContactPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-gray-400">Loading contact page…</p>
                </div>
            }
        >
            <ContactInner />
        </Suspense>
    );
}