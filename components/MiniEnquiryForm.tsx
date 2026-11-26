'use client';

import { useState } from 'react';
import Link from 'next/link';
import EmailButton from '@/components/EmailButton';
import { FaPaperPlane, FaWhatsapp, FaCheck } from 'react-icons/fa';
import { site } from '@/data/site';

export default function MiniEnquiryForm() {
    const [form, setForm] = useState({ name: '', email: '', interest: 'uganda' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    // Map the internal value to a human-readable label
    const interestLabels: Record<string, string> = {
        uganda: 'Uganda Safaris',
        outbound: 'Outbound Travel',
        'air-ticket': 'Air Ticket',
    };

    const messageBody =
        `Hello Lonely Wild Safaris! I'd like a quick quote.\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `I am interested in: ${interestLabels[form.interest] || form.interest}\n\n` +
        `Please get back to me with more details.`;

    const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(messageBody)}`;
    const emailSubject = `Quick Safari Enquiry – ${form.name}`;

    // ─── Success Screen ───
    if (submitted) {
        return (
            <div className="glass rounded-2xl p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Thanks, {form.name.split(' ')[0]}!</h3>
                <p className="text-sm text-gray-400 mb-6">
                    Choose how you&apos;d like to send your enquiry. Our team will reply within 24 hours.
                </p>

                <div className="flex flex-col gap-3">
                    <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg font-bold transition"
                    >
                        <FaWhatsapp size={16} /> Send via WhatsApp
                    </a>
                    <EmailButton
                        to={site.email}
                        subject={emailSubject}
                        body={messageBody}
                        label="Send via Email"
                        className="w-full"
                    />
                </div>

                <button
                    onClick={() => {
                        setForm({ name: '', email: '', interest: 'uganda' });
                        setSubmitted(false);
                    }}
                    className="mt-6 text-xs text-amber-400 hover:text-amber-300 underline"
                >
                    Send another enquiry
                </button>
            </div>
        );
    }

    // ─── Initial Form ───
    return (
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-1">Quick Safari Enquiry</h3>
            <p className="text-xs text-gray-400 mb-4">Get a custom quote in under 24 hours.</p>

            <div className="space-y-3">
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
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                />
                <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                >
                    <option value="uganda">Uganda Safaris</option>
                    <option value="outbound">Outbound Travel</option>
                    <option value="air-ticket">Air Ticket</option>
                </select>
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded-lg font-bold transition"
                >
                    Continue <FaPaperPlane size={14} />
                </button>
            </div>
        </form>
    );
}