'use client';

import { useState, useEffect } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Detect mobile only after mounting to avoid hydration mismatch
    useEffect(() => {
        const checkMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
        setIsMobile(checkMobile);
        setMounted(true);
    }, []);

    const mailtoLink =
        `mailto:${to}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    const gmailLink =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(to)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    const handleDesktopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isMobile) {
            e.preventDefault();
            window.open(gmailLink, '_blank', 'noopener,noreferrer');
        }
        // On mobile, we do NOTHING here. We let the native <a href="mailto:"> take over.
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
            {/* 
        We use a real <a> tag. 
        If mobile: href is "mailto:..." (OS intercepts this perfectly).
        If desktop: href is Gmail link, but we intercept the click to open in a new tab.
      */}
            <a
                href={mounted && isMobile ? mailtoLink : gmailLink}
                target={mounted && isMobile ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={handleDesktopClick}
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