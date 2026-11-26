import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
    FaArrowLeft,
    FaStar,
    FaClock,
    FaUsers,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaCheck,
    FaTimes,
    FaWhatsapp,
    FaChevronRight,
} from 'react-icons/fa';
import { getSafariBySlug, safaris } from '@/data/safaris';
import { site } from '@/data/site';
import EmailButton from '@/components/EmailButton';

// Pre-build every safari page at build time
export async function generateStaticParams() {
    return safaris.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const safari = getSafariBySlug(slug);
    if (!safari) return { title: 'Safari Not Found' };
    return { title: `${safari.title} | Lonely Wild Safaris` };
}

const tierColor: Record<string, string> = {
    Luxury: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    'Mid-range': 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    Budget: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
};

// ─── Inner component that reads the URL params ───
async function SafariDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const safari = getSafariBySlug(slug);

    if (!safari) notFound();

    const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        `Hi! I'm interested in the ${safari.title} package.`
    )}`;

    // Fallbacks so the layout always renders nicely
    const rating = safari.rating ?? 4.8;
    const reviews = safari.reviews ?? 0;
    const maxGroup = safari.maxGroup ?? 15;
    const bestTime = safari.bestTime ?? 'Year-round';
    const location = safari.location ?? 'Uganda';
    const categoryLabel =
        safari.categoryLabel ??
        (safari.category === 'uganda'
            ? 'Wildlife Safari'
            : safari.category === 'outbound'
                ? 'Holiday Package'
                : 'Special Safari');

    const overview = safari.overview ?? safari.longDesc;

    return (
        <>
            {/* ═══════════ HERO ═══════════ */}
            <section className="relative h-[70vh] flex items-end justify-start pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={safari.image}
                        alt={safari.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 pb-12 w-full">
                    {/* Back link */}
                    <Link
                        href={
                            safari.category === 'outbound'
                                ? '/outbound-travel'
                                : '/uganda-safaris'
                        }
                        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-amber-400 transition mb-6"
                    >
                        <FaArrowLeft size={12} /> Back to{' '}
                        {safari.category === 'outbound'
                            ? 'Outbound Travel'
                            : 'Uganda Safaris'}
                    </Link>

                    {/* Category badge */}
                    <div className="inline-block glass px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                        {categoryLabel}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-2xl max-w-3xl">
                        {safari.title}
                    </h1>

                    {/* Quick facts row */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-200">
                        {rating > 0 && (
                            <span className="flex items-center gap-1 text-amber-400 font-semibold">
                                <FaStar size={12} /> {rating.toFixed(1)} / 5.0
                                {reviews > 0 && (
                                    <span className="text-gray-400 font-normal">
                                        ({reviews} reviews)
                                    </span>
                                )}
                            </span>
                        )}
                        <span className="flex items-center gap-1.5">
                            <FaClock size={12} className="text-amber-400" />
                            {safari.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FaUsers size={12} className="text-amber-400" />
                            {maxGroup} people maximum
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FaCalendarAlt size={12} className="text-amber-400" />
                            Best: {bestTime}
                        </span>
                    </div>
                </div>
            </section>

            {/* ═══════════ MAIN CONTENT ═══════════ */}
            <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
                {/* ─── Left: content ─── */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Overview */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            Overview
                            <span className="h-px flex-1 bg-white/10" />
                        </h2>
                        <div className="text-gray-300 leading-relaxed space-y-4">
                            {overview.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Main Attractions */}
                    {safari.attractions && safari.attractions.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Main Attractions
                                <span className="h-px flex-1 bg-white/10" />
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-2">
                                {safari.attractions.map((a) => (
                                    <li
                                        key={a}
                                        className="flex items-start gap-2 text-sm text-gray-300"
                                    >
                                        <FaCheck
                                            className="text-amber-500 mt-1 shrink-0"
                                            size={11}
                                        />
                                        <span>{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Activities & Experiences */}
                    {safari.activities && safari.activities.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Activities &amp; Experiences
                                <span className="h-px flex-1 bg-white/10" />
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-2">
                                {safari.activities.map((a) => (
                                    <li
                                        key={a}
                                        className="flex items-start gap-2 text-sm text-gray-300"
                                    >
                                        <FaCheck
                                            className="text-amber-500 mt-1 shrink-0"
                                            size={11}
                                        />
                                        <span>{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Travel Tips */}
                    {safari.tips && safari.tips.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Travel Tips
                                <span className="h-px flex-1 bg-white/10" />
                            </h2>
                            <ul className="glass rounded-2xl p-5 space-y-2">
                                {safari.tips.map((t) => (
                                    <li
                                        key={t}
                                        className="flex items-start gap-2 text-sm text-gray-300"
                                    >
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Inclusions / Exclusions */}
                    {(safari.inclusions || safari.exclusions) && (
                        <div className="grid sm:grid-cols-2 gap-5">
                            {safari.inclusions && (
                                <div className="glass rounded-2xl p-5">
                                    <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                                        <FaCheck size={12} /> Inclusions
                                    </h3>
                                    <ul className="space-y-1.5 text-sm text-gray-300">
                                        {safari.inclusions.map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <FaCheck
                                                    className="text-green-500 mt-1 shrink-0"
                                                    size={10}
                                                />
                                                <span>{i}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {safari.exclusions && (
                                <div className="glass rounded-2xl p-5">
                                    <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                                        <FaTimes size={12} /> Exclusions
                                    </h3>
                                    <ul className="space-y-1.5 text-sm text-gray-300">
                                        {safari.exclusions.map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <FaTimes
                                                    className="text-red-500 mt-1 shrink-0"
                                                    size={10}
                                                />
                                                <span>{i}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Accommodations */}
                    {safari.accommodations && safari.accommodations.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Accommodations
                                <span className="h-px flex-1 bg-white/10" />
                            </h2>
                            <div className="space-y-2">
                                {safari.accommodations.map((acc) => (
                                    <div
                                        key={acc.name}
                                        className="flex items-center justify-between glass rounded-lg px-4 py-3"
                                    >
                                        <span className="text-sm text-gray-200">{acc.name}</span>
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${tierColor[acc.tier] ?? tierColor.Budget
                                                }`}
                                        >
                                            {acc.tier}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Getting There */}
                    {safari.gettingThere && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Getting There
                                <span className="h-px flex-1 bg-white/10" />
                            </h2>
                            <p className="text-sm text-gray-300 leading-relaxed glass rounded-2xl p-5">
                                {safari.gettingThere}
                            </p>
                        </div>
                    )}
                </div>

                {/* ─── Right: sticky sidebar ─── */}
                <aside className="lg:sticky lg:top-24 h-fit space-y-4">
                    {/* Quick Information */}
                    <div className="glass rounded-2xl p-6">
                        <h3 className="font-bold text-lg mb-4">Quick Information</h3>
                        <dl className="space-y-4 text-sm">
                            <div>
                                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                    <FaMapMarkerAlt size={10} className="text-amber-500" />{' '}
                                    Location
                                </dt>
                                <dd className="text-gray-200">{location}</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                    <FaClock size={10} className="text-amber-500" /> Duration
                                </dt>
                                <dd className="text-gray-200">{safari.duration}</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                    <FaUsers size={10} className="text-amber-500" /> Group Size
                                </dt>
                                <dd className="text-gray-200">{maxGroup} people maximum</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                    <FaCalendarAlt size={10} className="text-amber-500" /> Best
                                    Time to Visit
                                </dt>
                                <dd className="text-gray-200">{bestTime}</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Booking card */}
                    <div className="glass rounded-2xl p-6">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                            From
                        </p>
                        <p className="text-4xl font-extrabold text-amber-400 mb-1">
                            ${safari.price}
                        </p>
                        <p className="text-xs text-gray-400 mb-6">per person</p>

                        <div className="space-y-5">
                            <Link
                                href={`/booking?safari=${safari.slug}`}
                                className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded-lg font-bold transition"
                            >
                                Book This Safari <FaChevronRight size={12} />
                            </Link>

                            <div className="w-full pb-4">
                                <EmailButton
                                    to={site.email}
                                    subject={`Booking Enquiry: ${safari.title}`}
                                    body={`Hello Lonely Wild Safaris,\n\nI am interested in booking the "${safari.title}" safari.\n\nPlease send me more information regarding availability and payment.\n\nThank you.`}
                                    label="Ask via Email"
                                    className="w-full"
                                />
                            </div>

                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg font-bold transition"
                            >
                                <FaWhatsapp /> Ask on WhatsApp
                            </a>
                        </div>

                        <p className="text-[10px] text-center text-gray-500 mt-4">
                            Free cancellation up to 60 days before departure
                        </p>
                    </div>
                </aside>
            </section>
        </>
    );
}

// ─── Page wrapper with Suspense ───
export default function SafariDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="glass rounded-2xl p-8 text-center max-w-md w-full">
                        <div className="animate-pulse space-y-4">
                            <div className="h-8 bg-white/10 rounded-full w-24 mx-auto" />
                            <div className="h-4 bg-white/10 rounded w-full" />
                            <div className="h-4 bg-white/10 rounded w-3/4 mx-auto" />
                            <p className="text-sm text-gray-400 pt-2">
                                Loading safari details…
                            </p>
                        </div>
                    </div>
                </div>
            }
        >
            <SafariDetails params={params} />
        </Suspense>
    );
}