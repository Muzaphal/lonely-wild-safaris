import PageHero from '@/components/PageHero';

export const metadata = { title: 'Destinations | Lonely Wild Safaris' };

export default function DestinationsPage() {
    return (
        <>
            <PageHero
                title="Destinations"
                subtitle="Uganda · Kenya · Tanzania · Rwanda · Zanzibar"
                image="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=2000&auto=format&fit=crop"
            />
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Zanzibar', 'DR Congo'].map((d) => (
                        <div key={d} className="glass-card rounded-2xl h-48 flex items-center justify-center text-xl font-bold">
                            {d} 🚧
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}