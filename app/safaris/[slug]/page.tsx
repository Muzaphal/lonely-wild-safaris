import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSafariBySlug, safaris } from '@/data/safaris';
import { site } from '@/data/site';
import { FaCheck, FaTimes, FaWhatsapp } from 'react-icons/fa';
import SafariPaymentButton from '@/components/SafariPaymentButton';

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

export default async function SafariDetailPage({
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

    return (
        <>
            {/* HERO */}
            <section className="relative h-[60vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url("${safari.image}")` }}
                    />
                </div>
                <div className="relative z-20 text-center px-4 max-w-4xl">
                    <div className="inline-block glass px-4 py-1 rounded-full text-sm mb-4">
                        {safari.duration}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl">
                        {safari.title}
                    </h1>
                    <p className="text-gray-200 max-w-2xl mx-auto">{safari.shortDesc}</p>
                </div>
            </section>

            {/* DETAILS */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About This Safari</h2>
                        <p className="text-gray-300 leading-relaxed">{safari.longDesc}</p>
                    </div>

                    {safari.inclusions && (
                        <div className="glass rounded-2xl p-6">
                            <h3 className="font-bold mb-3 text-green-400">Inclusions</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {safari.inclusions.map((i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FaCheck className="text-green-500 mt-1 shrink-0" size={12} /> {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {safari.exclusions && (
                        <div className="glass rounded-2xl p-6">
                            <h3 className="font-bold mb-3 text-red-400">Exclusions</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {safari.exclusions.map((i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FaTimes className="text-red-500 mt-1 shrink-0" size={12} /> {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* STICKY BOOKING CARD */}
                <aside className="lg:sticky lg:top-24 h-fit">
                    <div className="glass rounded-2xl p-6">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">From</p>
                        <p className="text-4xl font-extrabold text-amber-400 mb-1">
                            ${safari.price}
                        </p>
                        <p className="text-xs text-gray-400 mb-6">per person</p>

                        <div className="space-y-3">
                            <Link
                                href={`/booking?safari=${safari.slug}`}
                                className="block text-center bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded-lg font-bold transition"
                            >
                                Book This Safari
                            </Link>
                            <SafariPaymentButton price={safari.price} title={safari.title} />
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg font-bold transition"
                            >
                                <FaWhatsapp /> Ask on WhatsApp
                            </a>
                        </div>
                    </div>
                </aside>
            </section>
        </>
    );
}