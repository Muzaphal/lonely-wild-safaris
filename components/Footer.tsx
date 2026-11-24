import Image from 'next/image';
import Link from 'next/link';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPhoneAlt,
} from 'react-icons/fa';
import CopyEmail from './CopyEmail';
import { site } from '@/data/site';

// Cache the year so Next.js doesn't treat it as an unstable value
async function getCurrentYear() {
    'use cache';
    return new Date().getFullYear();
}

export default async function Footer() {
    const year = await getCurrentYear();

    return (
        <footer className="border-t border-white/10 bg-black/50 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <Link
                        href="/"
                        className="inline-flex items-center bg-white hover:bg-gray-100 px-4 py-1.5 rounded-full transition-all shadow-md shadow-black/30 group mb-4"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="Lonely Wild Safaris"
                            width={160}
                            height={50}
                            priority
                            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </Link>
                    <p className="text-sm text-gray-400">
                        Curated safaris across East Africa. Authentic, responsible,
                        unforgettable.
                    </p>
                    <div className="flex gap-4 mt-4 text-gray-400">
                        <a href="#" className="hover:text-amber-500" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-amber-500" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-amber-500" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Explore */}
                <div>
                    <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">
                        Explore
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <Link href="/uganda-safaris" className="hover:text-amber-500">
                                Uganda Safaris
                            </Link>
                        </li>
                        <li>
                            <Link href="/outbound-travel" className="hover:text-amber-500">
                                Outbound Travel
                            </Link>
                        </li>
                        <li>
                            <Link href="/air-ticket" className="hover:text-amber-500">
                                Air Ticket Enquiry
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-amber-500">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">
                        Support
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <Link href="/contact" className="hover:text-amber-500">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/booking" className="hover:text-amber-500">
                                Book a Safari
                            </Link>
                        </li>
                        <li>
                            <Link href="/faqs" className="hover:text-amber-500">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-amber-500">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-amber-500">
                                Terms
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">
                        Get in Touch
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-amber-500 shrink-0" />
                            <a
                                href={`tel:${site.phone.replace(/\s/g, '')}`}
                                className="hover:text-amber-500"
                            >
                                {site.phone}
                            </a>
                        </li>
                        <li>
                            <CopyEmail email={site.email} />
                        </li>
                        <li>{site.address}</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 text-center py-6 text-xs text-gray-500">
                © {year} Lonely Wild Safaris. All rights reserved.
            </div>
        </footer>
    );
}