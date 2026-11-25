'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import EmailButton from '@/components/EmailButton';
import { FaPlane, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { site } from '@/data/site';

export default function AirTicketPage() {
    const [form, setForm] = useState({
        from: '', to: '', date: '', returnDate: '',
        cabin: 'Economy', adults: 1, children: 0, infants: 0,
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        // Simulate a brief loading state before showing the success screen
        setTimeout(() => {
            setSending(false);
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 600);
    };

    // ─── Build the message strings for WhatsApp and Email ───
    const messageBody =
        `Hello Lonely Wild Safaris! I'd like to enquire about an air ticket.\n\n` +
        `Departure City: ${form.from}\n` +
        `Arrival City: ${form.to}\n` +
        `Travel Date: ${form.date}\n` +
        `Return Date: ${form.returnDate}\n` +
        `Cabin Class: ${form.cabin}\n` +
        `Passengers: ${form.adults} Adult(s), ${form.children} Child(ren), ${form.infants} Infant(s)\n\n` +
        `Please send me a quote.`;

    const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(messageBody)}`;
    const emailSubject = `Air Ticket Enquiry – ${form.from} to ${form.to}`;

    return (
        <>
            <PageHero
                title="Air Ticket Enquiry"
                subtitle="We find the best fares — economy to first class."
                image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
            />
            <section className="max-w-3xl mx-auto px-4 py-20">
                {submitted ? (
                    <div className="glass rounded-2xl p-10 text-center">
                        <div className="text-5xl mb-4">✈️</div>
                        <h2 className="text-2xl font-bold mb-3">Enquiry Ready to Send!</h2>
                        <p className="text-gray-300 mb-6">
                            Choose how you&apos;d like to send your request. Our ticketing team will reply with a quote shortly.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold transition w-full sm:w-auto"
                            >
                                <FaWhatsapp /> Send via WhatsApp
                            </a>
                            <EmailButton
                                to={site.email}
                                subject={emailSubject}
                                body={messageBody}
                                label="Send via Email"
                                className="w-full sm:w-auto"
                            />
                        </div>

                        <button
                            onClick={() => {
                                setForm({
                                    from: '', to: '', date: '', returnDate: '',
                                    cabin: 'Economy', adults: 1, children: 0, infants: 0,
                                });
                                setSubmitted(false);
                            }}
                            className="text-xs text-amber-400 hover:text-amber-300 underline"
                        >
                            Start a new enquiry
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-10 space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-400">Departure City</label>
                                <input required value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Arrival City</label>
                                <input required value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-400">Travel Date</label>
                                <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Return Date</label>
                                <input type="date" value={form.returnDate} onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-400">Cabin Class</label>
                            <select value={form.cabin} onChange={(e) => setForm({ ...form, cabin: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500">
                                <option>Economy</option>
                                <option>Business</option>
                                <option>First Class</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { key: 'adults', label: 'Adults', min: 1 },
                                { key: 'children', label: 'Children (2-11)', min: 0 },
                                { key: 'infants', label: 'Infants (<2)', min: 0 },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="text-xs text-gray-400">{f.label}</label>
                                    <input
                                        type="number"
                                        min={f.min}
                                        value={(form as any)[f.key]}
                                        onChange={(e) => setForm({ ...form, [f.key]: +e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            disabled={sending}
                            className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 px-4 py-3 rounded-lg font-bold transition"
                        >
                            <FaPlane /> {sending ? 'Preparing...' : 'Continue'}
                        </button>
                    </form>
                )}
            </section>
        </>
    );
}