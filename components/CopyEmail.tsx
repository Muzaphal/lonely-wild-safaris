'use client';

import { useState } from 'react';
import { FaCopy, FaCheck, FaEnvelope } from 'react-icons/fa';

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
        } catch {
            // Fallback for older browsers
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

    return (
        <span className="inline-flex items-center gap-2 min-w-0">
            <FaEnvelope className="text-amber-500 shrink-0" />
            <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
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