import PageHero from '@/components/PageHero';

export const metadata = { title: 'Safaris | Lonely Wild Safaris' };

export default function SafarisPage() {
    return (
        <>
            <PageHero
                title="Our Safaris"
                subtitle="From gorilla trekking to migration crossings — find your adventure."
                image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop"
            />
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="glass rounded-2xl p-10 text-center">
                    <h2 className="text-2xl font-bold mb-3">Safari Packages</h2>
                    <p className="text-gray-400">
                        🚧 Full safari listing with filters (country, duration, price, type) coming next.
                        This page will reuse the card component from the homepage.
                    </p>
                </div>
            </section>
        </>
    );
}