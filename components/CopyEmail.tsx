'use client';

import { useState, useEffect } from 'react';
import { FaCopy, FaCheck, FaEnvelope } from 'react-icons/fa';

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const checkMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
        setIsMobile(checkMobile);
        setMounted(true);
    }, []);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = email;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const mailtoLink = `mailto:${email}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    return (
        <span className="inline-flex items-center gap-2 min-w-0">
            <FaEnvelope className="text-amber-500 shrink-0" />
            <a
                href={mounted && isMobile ? mailtoLink : gmailLink}
                target={mounted && isMobile ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="hover:text-amber-500 break-all"
            >
                {email}
            </a>
            <button
                type="button"
                onClick={copy}
                aria-label="Copy email address"
                className="text-gray-400 hover:text-amber-400 transition shrink-0"
            >
                {copied ? (
                    <FaCheck className="text-green-500" size={12} />
                ) : (
                    <FaCopy size={12} />
                )}
            </button>
            {copied && (
                <span className="text-[10px] text-green-400 whitespace-nowrap">
                    Copied!
                </span>
            )}
        </span>
    );
}