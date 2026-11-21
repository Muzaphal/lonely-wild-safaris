import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { safaris } from '@/data/safaris';

export const metadata = { title: 'Outbound Travel | Lonely Wild Safaris' };

export default function OutboundPage() {
    const outbound = safaris.filter((s) => s.category === 'outbound');

    return (
        <>
            <PageHero
                title="Outbound Travel Packages"
                subtitle="Leisure & business holidays to any corner of the globe — plus visa assistance."
                image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
            />
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {outbound.map((s) => (
                        <Link key={s.slug} href={`/safaris/${s.slug}`} className="glass-card rounded-2xl overflow-hidden group">
                            <div className="relative h-56 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url("${s.image}")` }}
                                />
                                <div className="absolute bottom-3 left-3 glass px-3 py-1 rounded-full text-xs font-bold">
                                    {s.duration}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                                <p className="text-xs text-gray-400 mb-4 line-clamp-2">{s.shortDesc}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-400 font-bold">From ${s.price} pp</span>
                                    <span className="text-xs text-amber-500">Details →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}