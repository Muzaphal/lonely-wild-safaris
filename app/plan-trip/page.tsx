import PageHero from '@/components/PageHero';

export const metadata = { title: 'Plan Your Trip | Lonely Wild Safaris' };

export default function PlanTripPage() {
    return (
        <>
            <PageHero
                title="Plan Your Trip"
                subtitle="Tell us your dream safari — we'll design it."
                image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop"
            />
            <section className="max-w-3xl mx-auto px-4 py-20">
                <div className="glass rounded-2xl p-10">
                    <h2 className="text-2xl font-bold mb-4">Safari Enquiry Form</h2>
                    <p className="text-gray-400">
                        🚧 Multi-step form coming soon: travel dates, party size, budget, interests, contact details.
                    </p>
                </div>
            </section>
        </>
    );
}