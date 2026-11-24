'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import {
    FaCheck,
    FaChevronLeft,
    FaChevronRight,
    FaWhatsapp,
    FaPaperPlane,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaUsers,
    FaBed,
    FaDollarSign,
    FaChild,
} from 'react-icons/fa';
import { site } from '@/data/site';

// ─── Country groups ───
const countriesAfrica = [
    'Uganda',
    'Kenya',
    'Tanzania',
    'Zanzibar',
    'Rwanda',
    'South Africa',
    'Egypt',
    'Morocco',
    'Mauritius',
    'Seychelles',
];

const countriesInternational = [
    'UAE (Dubai)',
    'UAE (Abu Dhabi)',
    'Malaysia',
    'Singapore',
    'Thailand',
    'Turkey',
    'Qatar',
    'Saudi Arabia',
    'India',
    'China',
    'France',
    'Spain',
    'Italy',
    'Germany',
    'UK',
    'USA',
    'Mexico',
];

const activities = [
    'Adventure Safaris',
    'Mountain Climbing',
    'Cultural / Eco Tours',
    'Trekking / Walking',
    'Gorilla / Chimpanzee',
    'Beach Holidays',
    'Great Migration',
    'Combined Safaris',
    'Special Safaris',
    'Honeymoon Vacation',
    'City Tours',
    'Boat Safaris',
    'Historical Sites',
    'Waterfalls',
    'Fishing',
    'Volunteering',
    'Day Trips',
    'Birding Tour',
];

const travellers = ['Solo', 'Couple', 'Honeymoon', 'Family', 'Group', 'Others'];

// ─── Form state type ───
interface PlanForm {
    countries: string[];
    activities: string[];
    traveller: string;
    days: string;
    budget: string;
    startDate: string;
    adults: number;
    children: number;
    rooms: number;
    fullName: string;
    email: string;
    phone: string;
    country: string;
    extraInfo: string;
}

const initialForm: PlanForm = {
    countries: [],
    activities: [],
    traveller: '',
    days: '',
    budget: '',
    startDate: '',
    adults: 1,
    children: 0,
    rooms: 1,
    fullName: '',
    email: '',
    phone: '',
    country: '',
    extraInfo: '',
};

const stepTitles = [
    'Countries',
    'Activities',
    'Travellers',
    'Duration',
    'Budget',
    'Dates & People',
    'Contact Details',
];

export default function PlanTripPage() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<PlanForm>(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [countryTab, setCountryTab] = useState<'africa' | 'intl'>('africa');

    const toggleArray = (key: 'countries' | 'activities', value: string) => {
        setForm((f) => {
            const arr = f[key];
            return {
                ...f,
                [key]: arr.includes(value)
                    ? arr.filter((v) => v !== value)
                    : [...arr, value],
            };
        });
    };

    const canProceed = () => {
        switch (step) {
            case 0:
                return form.countries.length > 0;
            case 1:
                return form.activities.length > 0;
            case 2:
                return form.traveller !== '';
            case 3:
                return form.days.trim() !== '';
            case 4:
                return true;
            case 5:
                return form.startDate !== '';
            case 6:
                return (
                    form.fullName.trim() !== '' &&
                    form.email.trim() !== '' &&
                    form.phone.trim() !== ''
                );
            default:
                return true;
        }
    };

    const next = () => {
        if (step < stepTitles.length - 1 && canProceed()) {
            setStep(step + 1);
            window.scrollTo({ top: 200, behavior: 'smooth' });
        }
    };

    const back = () => {
        if (step > 0) {
            setStep(step - 1);
            window.scrollTo({ top: 200, behavior: 'smooth' });
        }
    };

    // Build the WhatsApp text once
    const buildMessage = () =>
        `Hello Lonely Wild Safaris! I'd like to plan a safari.\n\n` +
        `Countries: ${form.countries.join(', ') || '—'}\n` +
        `Activities: ${form.activities.join(', ') || '—'}\n` +
        `Traveller type: ${form.traveller || '—'}\n` +
        `Days: ${form.days || '—'}\n` +
        `Budget: ${form.budget || '—'}\n` +
        `Start date: ${form.startDate || '—'}\n` +
        `Adults: ${form.adults} · Children: ${form.children} · Rooms: ${form.rooms}\n` +
        `Name: ${form.fullName}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Country: ${form.country}\n` +
        `Notes: ${form.extraInfo}`;

    // Reset everything back to a fresh form
    const resetForm = () => {
        setForm(initialForm);
        setStep(0);
        setSubmitted(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: replace with real API call / email service
        console.log('Plan form submitted:', form);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        buildMessage()
    )}`;

    const emailSubject = `Safari Enquiry – ${form.fullName || 'New client'}`;
    const emailBody = buildMessage();

    // Gmail web compose (works everywhere — no email client needed)
    const gmailComposeUrl =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(site.email)}` +
        `&su=${encodeURIComponent(emailSubject)}` +
        `&body=${encodeURIComponent(emailBody)}`;

    // Optional native mailto fallback for users who prefer a local email app
    const mailtoUrl =
        `mailto:${site.email}` +
        `?subject=${encodeURIComponent(emailSubject)}` +
        `&body=${encodeURIComponent(emailBody)}`;

    // ─── Success screen ───
    if (submitted) {
        return (
            <>
                <PageHero
                    title="Thank You!"
                    subtitle="Your safari enquiry is ready to send."
                    image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop"
                />
                <section className="max-w-2xl mx-auto px-4 py-20">
                    <div className="glass rounded-2xl p-10 text-center">
                        <div className="text-6xl mb-4">🦁</div>
                        <h2 className="text-2xl font-bold mb-3">
                            Thanks, {form.fullName.split(' ')[0] || 'traveler'}!
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Choose how you&apos;d like to send your enquiry — we&apos;ll reply
                            within 24 hours with a tailored itinerary.
                        </p>

                        {/* Delivery options */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold transition"
                            >
                                <FaWhatsapp /> Send via WhatsApp
                            </a>
                            <a
                                href={gmailComposeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-bold transition"
                            >
                                <FaEnvelope /> Send via Email
                            </a>
                        </div>

                        {/* Native mail app fallback */}
                        <p className="text-xs text-gray-500 mb-6">
                            Email opens Gmail compose in a new tab.{' '}
                            <a
                                href={mailtoUrl}
                                className="text-amber-400 hover:text-amber-300 underline"
                            >
                                Use your default email app instead
                            </a>
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 border-t border-white/10">
                            <button
                                onClick={resetForm}
                                className="inline-flex items-center justify-center gap-2 glass hover:bg-white/15 px-6 py-3 rounded-lg font-bold transition"
                            >
                                Start a New Enquiry
                            </button>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 glass hover:bg-white/15 px-6 py-3 rounded-lg font-bold transition"
                            >
                                Back to Home
                            </Link>
                        </div>

                        <p className="text-xs text-gray-500 mt-4">
                            The form will reset automatically when you click “Start a New
                            Enquiry.”
                        </p>
                    </div>
                </section>
            </>
        );
    }

    const activeCountryList =
        countryTab === 'africa' ? countriesAfrica : countriesInternational;

    return (
        <>
            <PageHero
                title="Create My Safari"
                subtitle="Tell us your dream safari — we'll design it."
                image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop"
            />

            <section className="max-w-4xl mx-auto px-4 py-16">
                {/* Progress bar */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                            Step {step + 1} of {stepTitles.length}
                        </span>
                        <span className="text-xs text-gray-400">{stepTitles[step]}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-amber-500 transition-all duration-500 ease-out"
                            style={{
                                width: `${((step + 1) / stepTitles.length) * 100}%`,
                            }}
                        />
                    </div>
                    <div className="hidden sm:flex justify-between mt-3">
                        {stepTitles.map((t, i) => (
                            <div
                                key={t}
                                className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition ${i < step
                                    ? 'bg-amber-600 text-white'
                                    : i === step
                                        ? 'bg-amber-500 text-black ring-2 ring-amber-500/40'
                                        : 'bg-white/10 text-gray-500'
                                    }`}
                            >
                                {i < step ? <FaCheck size={10} /> : i + 1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form card */}
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-10">
                    {/* ─── STEP 1 ─── */}
                    {step === 0 && (
                        <div>
                            <h2 className="text-xl font-bold mb-1">
                                1. What country/countries do you want to visit?
                            </h2>
                            <p className="text-sm text-gray-400 mb-6">
                                Select one or more destinations — mix African safaris with an
                                international stopover.
                            </p>

                            <div className="flex gap-2 mb-5 border-b border-white/10 pb-3">
                                {[
                                    {
                                        key: 'africa' as const,
                                        label: '🌍 Africa & Islands',
                                        count: countriesAfrica.length,
                                    },
                                    {
                                        key: 'intl' as const,
                                        label: '🌐 International',
                                        count: countriesInternational.length,
                                    },
                                ].map((tab) => (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        onClick={() => setCountryTab(tab.key)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${countryTab === tab.key
                                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                            }`}
                                    >
                                        {tab.label}
                                        <span className="ml-2 text-xs opacity-60">
                                            ({tab.count})
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex justify-end gap-2 mb-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setForm((f) => ({
                                            ...f,
                                            countries: Array.from(
                                                new Set([...f.countries, ...activeCountryList])
                                            ),
                                        }));
                                    }}
                                    className="text-xs text-amber-400 hover:text-amber-300"
                                >
                                    Select all in tab
                                </button>
                                <span className="text-gray-600">·</span>
                                <button
                                    type="button"
                                    onClick={() => setForm((f) => ({ ...f, countries: [] }))}
                                    className="text-xs text-gray-400 hover:text-white"
                                >
                                    Clear all
                                </button>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {activeCountryList.map((c) => {
                                    const active = form.countries.includes(c);
                                    return (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => toggleArray('countries', c)}
                                            className={`flex items-center justify-between px-4 py-3 rounded-lg border transition text-sm font-medium ${active
                                                ? 'border-amber-500 bg-amber-500/15 text-amber-300'
                                                : 'border-white/10 hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <FaMapMarkerAlt size={12} /> {c}
                                            </span>
                                            {active && <FaCheck size={12} />}
                                        </button>
                                    );
                                })}
                            </div>

                            {form.countries.length > 0 && (
                                <div className="mt-5 pt-4 border-t border-white/10">
                                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                                        Selected ({form.countries.length})
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {form.countries.map((c) => (
                                            <span
                                                key={c}
                                                className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs"
                                            >
                                                {c}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleArray('countries', c)}
                                                    className="hover:text-white"
                                                    aria-label={`Remove ${c}`}
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* ─── STEP 2 ─── */}
                    {step === 1 && (
                        <div>
                            <h2 className="text-xl font-bold mb-1">
                                2. What do you want to do?
                            </h2>
                            <p className="text-sm text-gray-400 mb-6">
                                Choose all that interest you.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                {activities.map((a) => {
                                    const active = form.activities.includes(a);
                                    return (
                                        <button
                                            key={a}
                                            type="button"
                                            onClick={() => toggleArray('activities', a)}
                                            className={`px-3 py-2.5 rounded-lg border transition text-xs font-medium text-left ${active
                                                ? 'border-amber-500 bg-amber-500/15 text-amber-300'
                                                : 'border-white/10 hover:bg-white/5'
                                                }`}
                                        >
                                            {active ? '✓ ' : ''}
                                            {a}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* ─── STEP 3 ─── */}
                    {step === 2 && (
                        <div>
                            <h2 className="text-xl font-bold mb-1">
                                3. Who are you travelling with?
                            </h2>
                            <p className="text-sm text-gray-400 mb-6">
                                This helps us tailor the experience.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {travellers.map((t) => {
                                    const active = form.traveller === t;
                                    return (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setForm({ ...form, traveller: t })}
                                            className={`px-4 py-3 rounded-lg border transition text-sm font-medium ${active
                                                ? 'border-amber-500 bg-amber-500/15 text-amber-300'
                                                : 'border-white/10 hover:bg-white/5'
                                                }`}
                                        >
                                            {t}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* ─── STEP 4 ─── */}
                    {step === 3 && (
                        <div>
                            <h2 className="text-xl font-bold mb-1">
                                4. How many days do you want to travel?
                            </h2>
                            <p className="text-sm text-gray-400 mb-6">
                                A rough number is fine — we can refine it.
                            </p>
                            <input
                                type="number"
                                min={1}
                                max={60}
                                value={form.days}
                                onChange={(e) => setForm({ ...form, days: e.target.value })}
                                placeholder="e.g. 7"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                            />
                        </div>
                    )}

                    {/* ─── STEP 5 ─── */}
                    {step === 4 && (
                        <div>
                            <h2 className="text-xl font-bold mb-1">
                                5. Do you have a budget per person in mind?
                            </h2>
                            <p className="text-sm text-gray-400 mb-6">
                                Optional — helps us suggest the right tier.
                            </p>
                            <div className="relative">
                                <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" />
                                <input
                                    type="text"
                                    value={form.budget}
                                    onChange={(e) =>
                                        setForm({ ...form, budget: e.target.value })
                                    }
                                    placeholder="e.g. 2,500 – 4,000 USD per person"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-3">
                                Leave blank if you&apos;re flexible — we&apos;ll suggest
                                options across tiers.
                            </p>
                        </div>
                    )}

                    {/* ─── STEP 6 ─── */}
                    {step === 5 && (
                        <div>
                            <h2 className="text-xl font-bold mb-1">
                                6. When do you want to travel?
                            </h2>
                            <p className="text-sm text-gray-400 mb-6">
                                Tell us your dates and group size.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                        <FaCalendarAlt className="text-amber-500" /> Travel Start
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        value={form.startDate}
                                        onChange={(e) =>
                                            setForm({ ...form, startDate: e.target.value })
                                        }
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    <div>
                                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                            <FaUsers className="text-amber-500" /> Adults
                                        </label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={form.adults}
                                            onChange={(e) =>
                                                setForm({ ...form, adults: +e.target.value })
                                            }
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                            <FaChild className="text-amber-500" /> Children
                                        </label>
                                        <input
                                            type="number"
                                            min={0}
                                            value={form.children}
                                            onChange={(e) =>
                                                setForm({ ...form, children: +e.target.value })
                                            }
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                            <FaBed className="text-amber-500" /> Rooms
                                        </label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={form.rooms}
                                            onChange={(e) =>
                                                setForm({ ...form, rooms: +e.target.value })
                                            }
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ─── STEP 7 ─── */}
                    {step === 6 && (
                        <div>
                            <h2 className="text-xl font-bold mb-1">7. Contact Details</h2>
                            <p className="text-sm text-gray-400 mb-6">
                                We&apos;ll email your custom itinerary within 24 hours.
                            </p>

                            <div className="space-y-3">
                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                        value={form.fullName}
                                        onChange={(e) =>
                                            setForm({ ...form, fullName: e.target.value })
                                        }
                                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                                    <input
                                        required
                                        type="email"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                                <div className="relative">
                                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                                    <input
                                        required
                                        type="tel"
                                        placeholder="Phone (with country code)"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({ ...form, phone: e.target.value })
                                        }
                                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                                <div className="relative">
                                    <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm" />
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        value={form.country}
                                        onChange={(e) =>
                                            setForm({ ...form, country: e.target.value })
                                        }
                                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                                <textarea
                                    rows={4}
                                    placeholder="Extra Info — anything else we should know?"
                                    value={form.extraInfo}
                                    onChange={(e) =>
                                        setForm({ ...form, extraInfo: e.target.value })
                                    }
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 resize-none"
                                />
                            </div>

                            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 space-y-1">
                                <p className="text-amber-400 font-bold uppercase tracking-wider mb-2">
                                    Your Safari Summary
                                </p>
                                <p>
                                    <strong className="text-gray-300">Countries:</strong>{' '}
                                    {form.countries.join(', ') || '—'}
                                </p>
                                <p>
                                    <strong className="text-gray-300">Activities:</strong>{' '}
                                    {form.activities.join(', ') || '—'}
                                </p>
                                <p>
                                    <strong className="text-gray-300">Group:</strong>{' '}
                                    {form.traveller || '—'} · {form.adults} adult(s),{' '}
                                    {form.children} child(ren), {form.rooms} room(s)
                                </p>
                                <p>
                                    <strong className="text-gray-300">Duration:</strong>{' '}
                                    {form.days || '—'} day(s) ·{' '}
                                    <strong className="text-gray-300">Budget:</strong>{' '}
                                    {form.budget || 'flexible'}
                                </p>
                                <p>
                                    <strong className="text-gray-300">Start date:</strong>{' '}
                                    {form.startDate || '—'}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Nav buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mt-8 pt-6 border-t border-white/10">
                        <button
                            type="button"
                            onClick={back}
                            disabled={step === 0}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass hover:bg-white/15 disabled:opacity-40 disabled:cursor-not-allowed px-5 py-3 rounded-lg font-bold transition"
                        >
                            <FaChevronLeft size={12} /> Back
                        </button>

                        {step < stepTitles.length - 1 ? (
                            <button
                                type="button"
                                onClick={next}
                                disabled={!canProceed()}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-bold transition"
                            >
                                Continue <FaChevronRight size={12} />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={!canProceed()}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-bold transition"
                            >
                                Submit Enquiry <FaPaperPlane size={12} />
                            </button>
                        )}
                    </div>
                </form>

                {/* Help footer */}
                <div className="mt-6 text-center text-xs text-gray-500">
                    Prefer to talk?{' '}
                    <a
                        href={`https://wa.me/${site.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 inline-flex items-center gap-1"
                    >
                        <FaWhatsapp /> Chat with a specialist
                    </a>{' '}
                    or email{' '}
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300"
                    >
                        {site.email}
                    </a>
                </div>
            </section>
        </>
    );
}