import PageHero from '@/components/PageHero';

export const metadata = { title: 'About Us | Lonely Wild Safaris' };

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="About Lonely Wild Safaris"
                subtitle="20+ years of crafting remarkable African journeys."
                image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop"
            />
            <section className="max-w-4xl mx-auto px-4 py-20 space-y-8">
                <div className="glass rounded-2xl p-8 md:p-10">
                    <h2 className="text-2xl font-bold mb-4 text-amber-400">Who We Are</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Lonely Wild Safaris is a mid-sized registered and licenced tour and travel outfit located in Kampala, Uganda.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The team has over 20 years of experience in tourism in Uganda, the region and the world. We look forward to crafting your dream African holiday in the savanna and rainforest viewing wildlife, enjoying local and world-class cuisine and being part of the local hospitable communities.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        When it comes to outbound travel we organize leisure and business holidays to any corner of the globe, providing visa assistance to selected countries. Whether you are an individual, family or group, you can look to our experience and professionalism for a remarkable travel indeed!
                    </p>
                </div>

                <div className="glass rounded-2xl p-8 md:p-10">
                    <h2 className="text-2xl font-bold mb-4 text-amber-400">Get in Touch</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Please use the contact page, social media handles, 24-hour phone number or WhatsApp to start planning your trip with us.
                    </p>
                    <p className="text-xl font-bold text-amber-400">Karibu — You are welcome.</p>
                </div>
            </section>
        </>
    );
}