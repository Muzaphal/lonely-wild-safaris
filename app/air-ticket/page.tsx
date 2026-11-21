'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { FaPlane } from 'react-icons/fa';
import { site } from '@/data/site';

export default function AirTicketPage() {
    const [form, setForm] = useState({
        from: '', to: '', date: '', flex: '0',
        cabin: 'Economy', adults: 1, children: 0, infants: 0,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: email / backend
        setSubmitted(true);
    };

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
                        <h2 className="text-2xl font-bold mb-2">Enquiry Received!</h2>
                        <p className="text-gray-400">
                            Our ticketing team will email a quote to <strong>{site.email}</strong> shortly.
                        </p>
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
                                <label className="text-xs text-gray-400">Dates Flexible (± days)</label>
                                <select value={form.flex} onChange={(e) => setForm({ ...form, flex: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500">
                                    <option value="0">Exact date</option>
                                    <option value="1">± 1 day</option>
                                    <option value="2">± 2 days</option>
                                    <option value="3">± 3 days</option>
                                </select>
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
                        <button className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded-lg font-bold">
                            <FaPlane /> Send Enquiry
                        </button>
                    </form>
                )}
            </section>
        </>
    );
}