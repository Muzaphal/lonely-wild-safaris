'use client';

import { useState } from 'react';
import { FaEnvelope, FaCheck, FaCopy } from 'react-icons/fa';

interface EmailButtonProps {
    to: string;
    subject: string;
    body: string;
    label?: string;
    className?: string;
}

export default function EmailButton({
    to,
    subject,
    body,
    label = 'Send via Email',
    className = '',
}: EmailButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Simple mobile detection
        const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

        if (isMobile) {
            // FORCE mailto on mobile. This is the ONLY way to open the app chooser.
            // Do NOT fall back to the Gmail web link here.
            const mailto =
                `mailto:${to}` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;
        } else {
            // Desktop: Use Gmail web compose (works reliably here)
            const gmail =
                `https://mail.google.com/mail/?view=cm&fs=1` +
                `&to=${encodeURIComponent(to)}` +
                `&su=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;
            window.open(gmail, '_blank', 'noopener,noreferrer');
        }
    };

    const copyAll = async () => {
        const full = `To: ${to}\nSubject: ${subject}\n\n${body}`;
        try {
            await navigator.clipboard.writeText(full);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = full;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="inline-flex flex-col items-center gap-1">
            <a
                href="#"
                onClick={handleClick}
                className={`inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-bold transition ${className}`}
            >
                <FaEnvelope /> {label}
            </a>
            <button
                type="button"
                onClick={copyAll}
                className="text-[10px] text-gray-400 hover:text-amber-400 inline-flex items-center gap-1 transition"
            >
                {copied ? (
                    <>
                        <FaCheck className="text-green-500" size={9} /> Copied!
                    </>
                ) : (
                    <>
                        <FaCopy size={9} /> Copy instead
                    </>
                )}
            </button>
        </div>
    );
}