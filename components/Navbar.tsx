'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Uganda Safaris', href: '/uganda-safaris' },
    { name: 'Outbound', href: '/outbound-travel' },
    { name: 'Air Ticket', href: '/air-ticket' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // "Home" should only be active on exact "/"
    // Other links should be active on their own path AND any nested routes
    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <nav className="fixed w-full z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center shrink-0 bg-white hover:bg-gray-100 px-6 py-2.5 rounded-full transition-all shadow-lg shadow-black/30 group"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="Lonely Wild Safaris"
                            width={240}
                            height={80}
                            priority
                            className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </Link>
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((l) => {
                            const active = isActive(l.href);
                            return (
                                <Link
                                    key={l.name}
                                    href={l.href}
                                    className={`relative text-sm font-medium transition-colors py-2 ${active
                                        ? 'text-amber-400'
                                        : 'text-white hover:text-amber-400'
                                        }`}
                                >
                                    {l.name}
                                    {/* Active underline indicator */}
                                    <span
                                        className={`absolute left-0 -bottom-0.5 h-0.5 bg-amber-500 rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0'
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                        <Link
                            href="/plan-trip"
                            className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-amber-900/30"
                        >
                            Plan Your Trip
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 text-white"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden glass-nav border-t border-white/10">
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        {navLinks.map((l) => {
                            const active = isActive(l.href);
                            return (
                                <Link
                                    key={l.name}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors ${active
                                        ? 'bg-amber-500/15 text-amber-400'
                                        : 'hover:bg-white/10'
                                        }`}
                                >
                                    <span>{l.name}</span>
                                    {active && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                    )}
                                </Link>
                            );
                        })}
                        <Link
                            href="/plan-trip"
                            onClick={() => setOpen(false)}
                            className="block mt-2 text-center bg-amber-600 px-3 py-2 rounded-md font-bold"
                        >
                            Plan Your Trip
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}