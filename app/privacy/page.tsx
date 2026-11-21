import PageHero from '@/components/PageHero';
import { site } from '@/data/site';

export const metadata = {
    title: 'Privacy Policy | Lonely Wild Safaris',
    description: 'How Lonely Wild Safaris collects, uses, and protects your personal data.',
};

const updated = 'November 2026';

export default function PrivacyPage() {
    return (
        <>
            <PageHero
                title="Privacy Policy"
                subtitle={`Last updated: ${updated}`}
                image="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop"
            />

            <section className="max-w-4xl mx-auto px-4 py-20">
                <div className="glass rounded-2xl p-8 md:p-10 space-y-8 text-sm text-gray-300 leading-relaxed">
                    <p>
                        Lonely Wild Safaris ("we", "us", "our") is committed to protecting your
                        privacy. This policy explains what information we collect, how we use it,
                        and the rights you have over your personal data. By using our website and
                        services, you consent to the practices described here.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">1. Information We Collect</h2>
                        <p className="mb-2">We may collect the following information when you enquire or book with us:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name, email address, phone number, and WhatsApp contact</li>
                            <li>Travel dates, destinations, and preferences</li>
                            <li>Passport details (required for gorilla permits and air tickets)</li>
                            <li>Payment information (processed securely by our payment provider)</li>
                            <li>Any special requirements (dietary, medical, accessibility)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>To respond to your enquiries and prepare quotes</li>
                            <li>To secure permits, accommodation, and flights on your behalf</li>
                            <li>To process payments and issue invoices and confirmations</li>
                            <li>To send important updates about your trip</li>
                            <li>To improve our services and website experience</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">3. Payment Security</h2>
                        <p>
                            All credit card payments are processed through secure, PCI-compliant
                            payment gateways. We do not store your full card details on our servers.
                            Transaction data is encrypted in transit and at rest.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">4. Sharing Your Information</h2>
                        <p>
                            We only share personal data with trusted third parties necessary to
                            deliver your trip — for example, hotels, park authorities (for permits),
                            airlines, and payment processors. We never sell your data. Third parties
                            are required to keep your information confidential and use it only for
                            the purpose for which it was shared.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">5. Cookies & Analytics</h2>
                        <p>
                            Our website may use cookies and analytics tools to understand how
                            visitors use our site. This helps us improve functionality and content.
                            You can disable cookies in your browser settings, though some features
                            may not work as intended.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">6. Data Retention</h2>
                        <p>
                            We retain your personal data only as long as necessary to fulfil the
                            purposes outlined in this policy, comply with legal obligations, resolve
                            disputes, and enforce our agreements. Booking records are typically kept
                            for seven years for accounting and legal purposes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">7. Your Rights</h2>
                        <p className="mb-2">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Access a copy of the personal data we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your data (subject to legal retention requirements)</li>
                            <li>Withdraw consent for marketing communications at any time</li>
                            <li>Lodge a complaint with your local data protection authority</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-3">8. Contact Us</h2>
                        <p>
                            For any privacy-related questions or to exercise your rights, please
                            contact us at{' '}
                            <a href={`mailto:${site.email}`} className="text-amber-400 underline">
                                {site.email}
                            </a>{' '}
                            or write to us at {site.address}.
                        </p>
                    </div>

                    <p className="text-xs text-gray-500 border-t border-white/10 pt-6">
                        Lonely Wild Safaris is a registered and licensed tour operator in Uganda.
                        This policy may be updated from time to time; the latest version will
                        always be published on this page.
                    </p>
                </div>
            </section>
        </>
    );
}