'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaPaperPlane } from 'react-icons/fa';

export default function MiniEnquiryForm() {
    const router = useRouter();
    const [form, setForm] = useState({ name: '', email: '', interest: 'uganda' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: connect to backend / email service
        router.push(`/booking?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}&interest=${form.interest}`);
    };

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