import PageHero from '@/components/PageHero';
import { site } from '@/data/site';

export const metadata = {
    title: 'Terms & Conditions | Lonely Wild Safaris',
    description: 'Terms and conditions for booking safaris and travel services with Lonely Wild Safaris.',
};

const updated = 'November 2026';

export default function TermsPage() {
    return (
        <>
            <PageHero
                title="Terms & Conditions"
                subtitle={`Last updated: ${updated}`}
                image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop"
            />

            <section className="max-w-4xl mx-auto px-4 py-20">
                <div className="glass rounded-2xl p-8 md:p-10 space-y-8 text-sm text-gray-300 leading-relaxed">
                    <p>
                        These Terms & Conditions govern all bookings and travel arrangements made
                        with Lonely Wild Safaris ("we", "us", "our"). By confirming a booking with
                        us, you agree to the terms set out below on behalf of yourself and all
                        members of your travelling party.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">1. Bookings & Confirmation</h2>
                        <p>
                            A booking is confirmed only when we have received your signed booking
                            form and the required deposit. Until then, all quotations are subject to
                            availability and may change without notice. Quoted prices are in US
                            Dollars per person unless stated otherwise.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">2. Payments</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>A 30% deposit is required to confirm your booking, unless stated otherwise.</li>
                            <li>Gorilla and chimpanzee permits and domestic flights require full payment upfront.</li>
                            <li>The balance is due no later than 30 days before departure.</li>
                            <li>We accept credit cards, bank transfers, and mobile money.</li>
                            <li>All bank charges and processing fees are borne by the client.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">3. Cancellations & Refunds</h2>
                        <p className="mb-2">Cancellation fees are calculated from the date we receive written notice:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>60+ days before departure: full refund, less any non-refundable permit or flight costs</li>
                            <li>30–59 days before departure: 50% of the tour cost</li>
                            <li>15–29 days before departure: 75% of the tour cost</li>
                            <li>Less than 15 days before departure: 100% of the tour cost</li>
                        </ul>
                        <p className="mt-2">
                            Gorilla permits, chimpanzee permits, and air tickets are non-refundable
                            once purchased, in line with the policies of the issuing authorities and
                            airlines.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">4. Changes to Itineraries</h2>
                        <p>
                            We reserve the right to modify itineraries due to weather, road
                            conditions, wildlife movements, park closures, political events, or
                            other circumstances beyond our control. Where possible, we will offer an
                            equivalent alternative of similar value. Any additional costs resulting
                            from such changes may be passed on to the client.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">5. Travel Insurance</h2>
                        <p>
                            Comprehensive travel insurance is mandatory for all our trips. Your
                            policy should cover medical expenses, evacuation and repatriation,
                            personal accident, baggage loss, trip cancellation, and delay. We may
                            request proof of insurance before departure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">6. Passports, Visas & Health</h2>
                        <p>
                            It is your responsibility to ensure you hold a valid passport (with at
                            least six months validity beyond your travel dates), any required visas,
                            and the necessary vaccinations (including yellow fever for Uganda). We
                            are happy to provide visa assistance for selected countries, but final
                            responsibility rests with the traveller.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">7. Liability</h2>
                        <p>
                            Lonely Wild Safaris acts as an agent for hotels, airlines, transport
                            providers, and park authorities. We are not liable for injury, loss,
                            delay, or damage arising from circumstances beyond our reasonable
                            control, including but not limited to acts of God, civil unrest, strikes,
                            or wildlife incidents. Our liability is limited to the amount paid for
                            the affected services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">8. Conduct & Responsibility</h2>
                        <p>
                            Travellers are expected to respect wildlife, local communities, park
                            regulations, and their fellow travellers. We reserve the right to remove
                            any client from a tour whose behaviour endangers themselves or others,
                            without refund. Smoking, littering, and off-track driving are prohibited
                            in all national parks.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">9. Photography & Media</h2>
                        <p>
                            We may take photographs or video during our tours for promotional
                            purposes. If you prefer not to appear in our marketing materials, please
                            inform your guide at the start of the trip.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">10. Governing Law</h2>
                        <p>
                            These terms are governed by the laws of the Republic of Uganda. Any
                            disputes arising shall be subject to the exclusive jurisdiction of the
                            Ugandan courts.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">11. Contact</h2>
                        <p>
                            For any questions about these terms, contact us at{' '}
                            <a href={`mailto:${site.email}`} className="text-amber-400 underline">
                                {site.email}
                            </a>{' '}
                            or write to us at {site.address}.
                        </p>
                    </div>

                    <p className="text-xs text-gray-500 border-t border-white/10 pt-6">
                        Lonely Wild Safaris is a registered and licensed tour operator in Uganda.
                        These terms may be updated from time to time; the current version will
                        always be available on this page.
                    </p>
                </div>
            </section>
        </>
    );
}