import PageHero from '@/components/PageHero';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import Link from 'next/link';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { site } from '@/data/site';

export const metadata = {
    title: 'FAQs | Lonely Wild Safaris',
    description: 'Frequently asked questions about booking safaris with Lonely Wild Safaris.',
};

const bookingFaqs: FaqItem[] = [
    {
        q: 'How do I book a safari with Lonely Wild Safaris?',
        a: 'Simply fill out the enquiry form on our Contact page, send us a WhatsApp message, or use our interactive booking page. We will respond within 24 hours with a tailored itinerary and quote. Once you approve, a deposit confirms your booking.',
    },
    {
        q: 'What deposit is required to confirm a booking?',
        a: 'We typically require a 30% deposit to secure your safari, with the balance due before departure. For gorilla trekking permits and domestic flights, full payment may be required upfront as these are purchased in advance on your behalf.',
    },
    {
        q: 'Can I pay by credit card?',
        a: 'Yes. Every activity on our site can be paid for by credit card through our secure payment platform. We also accept bank transfers and mobile money. Full payment details are provided on your invoice.',
    },
    {
        q: 'What is your cancellation policy?',
        a: 'Cancellations made 60+ days before departure receive a full refund minus any non-refundable permit or flight costs. Cancellations within 30–59 days incur a 50% charge, and within 30 days the deposit is non-refundable. Full terms are included with every booking confirmation.',
    },
    {
        q: 'Do you organise custom or private safaris?',
        a: 'Absolutely. Every itinerary we offer can be customised for private groups, families, honeymooners, or solo travellers. Tell us your interests, budget, and travel dates, and we will craft a bespoke journey just for you.',
    },
];

const travelFaqs: FaqItem[] = [
    {
        q: 'When is the best time to visit Uganda?',
        a: 'Uganda is a year-round destination. The dry seasons (December–February and June–September) are best for gorilla trekking and game viewing. The wet seasons offer lush scenery, fewer crowds, and lower prices.',
    },
    {
        q: 'Do I need a visa to visit Uganda?',
        a: 'Most nationalities require a visa, which can be applied for online through the Uganda e-Visa portal. We provide visa assistance for Uganda and selected outbound destinations — just ask our team.',
    },
    {
        q: 'What vaccinations do I need?',
        a: 'Yellow fever vaccination is required for entry into Uganda. We also recommend routine vaccinations and malaria prophylaxis. Please consult your travel doctor at least 6 weeks before departure.',
    },
    {
        q: 'Is it safe to travel in Uganda?',
        a: 'Yes. Uganda is one of Africa\'s safest safari destinations. Our guides are experienced, our vehicles are well-maintained, and we follow all park regulations. We monitor conditions closely and prioritise your safety at all times.',
    },
    {
        q: 'What should I pack for a safari?',
        a: 'Lightweight neutral-coloured clothing, a warm layer for early mornings, comfortable walking shoes, a hat, sunscreen, insect repellent, binoculars, and a camera. We provide a detailed packing list with every confirmed booking.',
    },
];

const paymentFaqs: FaqItem[] = [
    {
        q: 'What currency are your prices in?',
        a: 'All prices on our website are quoted in US Dollars (USD) per person. We can also quote in Ugandan Shillings or Euros on request.',
    },
    {
        q: 'Are park fees included in the price?',
        a: 'Yes — all national park entry fees, gorilla and chimpanzee permits, and ranger fees are included in the quoted price unless explicitly stated otherwise in the itinerary.',
    },
    {
        q: 'What is not included in the safari price?',
        a: 'International flights, visas, travel insurance, personal expenses, tips, and alcoholic beverages are generally excluded. Each itinerary page lists specific inclusions and exclusions.',
    },
];

export default function FaqsPage() {
    return (
        <>
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Everything you need to know before booking your adventure."
                image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop"
            />

            <section className="max-w-4xl mx-auto px-4 py-20 space-y-14">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-amber-400">Booking & Payments</h2>
                    <FaqAccordion items={bookingFaqs} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-6 text-amber-400">Travel & Safety</h2>
                    <FaqAccordion items={travelFaqs} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-6 text-amber-400">Pricing</h2>
                    <FaqAccordion items={paymentFaqs} />
                </div>

                {/* Still have questions */}
                <div className="glass rounded-2xl p-8 text-center">
                    <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
                    <p className="text-gray-400 text-sm mb-6">
                        Our team is available 24 hours a day to help you plan the perfect safari.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold transition"
                        >
                            <FaWhatsapp /> Chat on WhatsApp
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 glass hover:bg-white/15 px-6 py-3 rounded-lg font-bold transition"
                        >
                            <FaEnvelope /> Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}