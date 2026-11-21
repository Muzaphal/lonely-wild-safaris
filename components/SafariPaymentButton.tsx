'use client';

import { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import PaymentModal from './PaymentModal';

export default function SafariPaymentButton({
    price,
    title,
}: {
    price: number;
    title: string;
}) {
    const [payOpen, setPayOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setPayOpen(true)}
                className="w-full flex items-center justify-center gap-2 glass hover:bg-white/15 px-4 py-3 rounded-lg font-bold transition"
            >
                <FaCreditCard /> Pay by Card
            </button>
            <PaymentModal
                open={payOpen}
                onClose={() => setPayOpen(false)}
                amount={price}
                title={title}
            />
        </>
    );
}