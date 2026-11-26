'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CopyEmail from '@/components/CopyEmail';
import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaPaperPlane,
    FaCheck,
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

        // Detect mobile
        const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

        if (isMobile) {
            // On mobile, use mailto to trigger the native app chooser
            const mailto = `mailto:${site.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailto;
        } else {
            // On desktop, open Gmail web compose
            const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            window.open(gmail, '_blank', 'noopener,noreferrer');
        }

        // Show a success screen after a brief delay
        setTimeout(() => {
            setSending(false);
            setDone(true);
        }, 1000);
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
                        On mobile, clicking the email address opens your email app.
                        On desktop, it opens Gmail. Use the copy button to paste it manually.
                    </p>
                </div>

                {/* Contact form */}
                <div className="glass rounded-2xl p-8">
                    {done ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email App Opened!</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Please hit <strong>Send</strong> in your email app to complete your message.
                                (If nothing opened, use the buttons below).
                            </p>

                            <div className="flex flex-col gap-3">
                                {/* Fallback buttons in case the email app didn't open */}
                                <a
                                    href={`mailto:${site.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                                    className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 px-5 py-3 rounded-lg font-bold transition w-full"
                                >
                                    <FaPaperPlane /> Try Email Again
                                </a>
                                <a
                                    href={waHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-bold transition w-full"
                                >
                                    <FaWhatsapp /> Send via WhatsApp instead
                                </a>
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
                                {sending ? 'Opening Email…' : 'Send Message'}
                            </button>
                            <p className="text-[10px] text-center text-gray-500">
                                This will open your email app with the message pre-filled.
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