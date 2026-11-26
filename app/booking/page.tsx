'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { safaris } from '@/data/safaris';
import { site } from '@/data/site';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';
import EmailButton from '@/components/EmailButton';
import PageHero from '@/components/PageHero';

function BookingInner() {
    const params = useSearchParams();
    const [step, setStep] = useState(1);

    const [form, setForm] = useState({
        safari: params.get('safari') || safaris[0].slug,
        name: params.get('name') || '',
        email: params.get('email') || '',
        phone: '',
        date: '',
        adults: 2,
        children: 0,
        notes: '',
    });

    const selected = safaris.find((s) => s.slug === form.safari) || safaris[0];
    const total = selected.price * form.adults + selected.price * 0.5 * form.children;

    const emailBody =
        `Hello Lonely Wild Safaris! I'd like to make a booking.\n\n` +
        `Safari: ${selected.title}\n` +
        `Date: ${form.date || 'TBC'}\n` +
        `Travellers: ${form.adults} Adult(s), ${form.children} Child(ren)\n` +
        `Estimated Total: $${total.toFixed(0)}\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Notes: ${form.notes || 'None'}`;

    const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(emailBody)}`;
    const emailSubject = `Safari Booking Request – ${selected.title}`;

    return (
        <>
            <PageHero
                title="Book Your Safari"
                subtitle="Three quick steps to secure your spot."
                image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop"
            />

            <section className="max-w-4xl mx-auto px-4 py-16">
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-10">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="flex items-center gap-3">
                            <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${step >= n ? 'bg-amber-600 text-white' : 'bg-white/10 text-gray-500'
                                    }`}
                            >
                                {step > n ? <FaCheck size={12} /> : n}
                            </div>
                            {n < 3 && <div className={`w-12 h-px ${step > n ? 'bg-amber-600' : 'bg-white/10'}`} />}
                        </div>
                    ))}
                    <span className="ml-3 text-xs text-gray-400">
                        {step === 1 ? 'Choose safari' : step === 2 ? 'Your details' : 'Confirm & send'}
                    </span>
                </div>

                <div className="glass rounded-2xl p-6 md:p-8">
                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="space-y-3">
                            {safaris.map((s) => (
                                <label
                                    key={s.slug}
                                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer border transition ${form.safari === s.slug ? 'border-amber-500 bg-amber-500/10' : 'border-white/10 hover:bg-white/5'
                                        }`}
                                >
                                    <div>
                                        <p className="font-bold">{s.title}</p>
                                        <p className="text-xs text-gray-400">{s.duration}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-amber-400 font-bold">${s.price}</p>
                                        <input
                                            type="radio"
                                            name="safari"
                                            checked={form.safari === s.slug}
                                            onChange={() => setForm({ ...form, safari: s.slug })}
                                            className="hidden"
                                        />
                                    </div>
                                </label>
                            ))}
                            <button
                                onClick={() => setStep(2)}
                                className="w-full bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded-lg font-bold mt-4"
                            >
                                Continue
                            </button>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <div className="space-y-3">
                            <input
                                required
                                placeholder="Full name"
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
                                required
                                placeholder="Phone / WhatsApp"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                            />
                            <input
                                required
                                type="date"
                                value={form.date}
                                onChange={(e) => setForm({ ...form, date: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-gray-400">Adults</label>
                                    <input
                                        type="number"
                                        min={1}
                                        value={form.adults}
                                        onChange={(e) => setForm({ ...form, adults: +e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400">Children (2-11)</label>
                                    <input
                                        type="number"
                                        min={0}
                                        value={form.children}
                                        onChange={(e) => setForm({ ...form, children: +e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                            </div>
                            <textarea
                                rows={3}
                                placeholder="Special requests (optional)"
                                value={form.notes}
                                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                            />
                            <div className="flex gap-3 mt-4">
                                <button onClick={() => setStep(1)} className="glass px-4 py-3 rounded-lg font-bold">Back</button>
                                <button onClick={() => setStep(3)} className="flex-1 bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded-lg font-bold">
                                    Review
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                        <div className="space-y-4">
                            <div className="bg-black/30 rounded-lg p-4">
                                <h3 className="font-bold mb-2">{selected.title}</h3>
                                <p className="text-sm text-gray-400 mb-1">{selected.duration}</p>
                                <p className="text-sm text-gray-400">Date: {form.date || 'TBC'}</p>
                                <p className="text-sm text-gray-400">Travellers: {form.adults} adult(s), {form.children} child(ren)</p>
                                <div className="border-t border-white/10 mt-3 pt-3 flex justify-between">
                                    <span className="font-bold">Total</span>
                                    <span className="text-amber-400 font-bold text-lg">${total.toFixed(0)}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={waHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg font-bold w-full"
                                >
                                    <FaWhatsapp /> Send via WhatsApp
                                </a>

                                <div className="w-full pb-4">
                                    <EmailButton
                                        to={site.email}
                                        subject={emailSubject}
                                        body={emailBody}
                                        label="Send Booking via Email"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <button onClick={() => setStep(2)} className="w-full glass px-4 py-3 rounded-lg font-bold mt-2">Back</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default function BookingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}>
            <BookingInner />
        </Suspense>
    );
}