'use client';

import { useState } from 'react';
import { FaTimes, FaLock, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

export default function PaymentModal({
    open,
    onClose,
    amount,
    title,
}: {
    open: boolean;
    onClose: () => void;
    amount: number;
    title: string;
}) {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    if (!open) return null;

    const handlePay = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // TODO: integrate Stripe / Flutterwave payment intent here
        setTimeout(() => {
            setLoading(false);
            setDone(true);
        }, 1800);
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4">
            <div className="glass rounded-2xl w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                    aria-label="Close"
                >
                    <FaTimes />
                </button>

                {done ? (
                    <div className="text-center py-8">
                        <div className="text-5xl mb-4">✅</div>
                        <h3 className="text-xl font-bold mb-2">Payment Received!</h3>
                        <p className="text-sm text-gray-400">
                            We&apos;ll email your confirmation shortly.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center gap-2 mb-1">
                            <FaLock className="text-amber-500" />
                            <h3 className="text-lg font-bold">Secure Payment</h3>
                        </div>
                        <p className="text-xs text-gray-400 mb-4">
                            {title} — <span className="text-amber-400 font-bold">${amount}</span> per person
                        </p>

                        <form onSubmit={handlePay} className="space-y-3">
                            <input
                                required
                                placeholder="Cardholder name"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                            />
                            <div className="relative">
                                <input
                                    required
                                    placeholder="Card number"
                                    maxLength={19}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 text-gray-400">
                                    <FaCcVisa size={20} />
                                    <FaCcMastercard size={20} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    required
                                    placeholder="MM / YY"
                                    maxLength={7}
                                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                />
                                <input
                                    required
                                    placeholder="CVC"
                                    maxLength={4}
                                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                />
                            </div>
                            <button
                                disabled={loading}
                                className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-60 px-4 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
                            >
                                {loading ? 'Processing…' : `Pay $${amount}`}
                            </button>
                            <p className="text-[10px] text-center text-gray-500 flex items-center justify-center gap-1">
                                <FaLock size={10} /> Encrypted &amp; secure. Powered by Stripe.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}