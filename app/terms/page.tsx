// ============================================================
// Terms & Privacy Policy Page
// ============================================================

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Privacy Policy",
    description: "Read our Terms of Service and Privacy Policy for PizzaGarage.",
};

export default function TermsPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-dark py-20 px-6 text-center">
                <span className="section-subtitle text-orange-light">Legal</span>
                <h1 className="font-heading text-5xl font-bold text-white mt-3">
                    Terms & <span className="text-orange">Privacy Policy</span>
                </h1>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-custom max-w-3xl">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                        {/* Terms */}
                        <div>
                            <h2 className="font-heading text-2xl font-bold text-dark mb-4">
                                Terms of Service
                            </h2>
                            <div className="space-y-4 text-gray leading-relaxed">
                                <p>
                                    Welcome to PizzaGarage. By accessing or using our website and services, you agree
                                    to be bound by these Terms of Service. Please read them carefully.
                                </p>

                                <h3 className="font-heading text-lg font-bold text-dark mt-6">1. Orders & Payments</h3>
                                <p>
                                    All orders placed through our website are subject to availability and confirmation.
                                    Prices are displayed in USD and include applicable taxes. Payment must be made at the
                                    time of order or upon delivery (Cash on Delivery).
                                </p>

                                <h3 className="font-heading text-lg font-bold text-dark mt-6">2. Delivery</h3>
                                <p>
                                    We aim to deliver your order within 25-35 minutes. Delivery times are estimates and
                                    may vary based on location, weather, and order volume. Free delivery is available on
                                    orders over $20.
                                </p>

                                <h3 className="font-heading text-lg font-bold text-dark mt-6">3. Cancellations & Refunds</h3>
                                <p>
                                    Orders can be cancelled within 5 minutes of placement by contacting us directly.
                                    After food preparation begins, cancellations are not accepted. Refunds for quality
                                    issues are handled on a case-by-case basis.
                                </p>

                                <h3 className="font-heading text-lg font-bold text-dark mt-6">4. User Accounts</h3>
                                <p>
                                    You are responsible for maintaining the confidentiality of your account credentials.
                                    You agree to provide accurate information when creating an account.
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-lighter" />

                        {/* Privacy */}
                        <div>
                            <h2 className="font-heading text-2xl font-bold text-dark mb-4">
                                Privacy Policy
                            </h2>
                            <div className="space-y-4 text-gray leading-relaxed">
                                <p>
                                    PizzaGarage respects your privacy. This Privacy Policy explains how we collect, use,
                                    and protect your personal information.
                                </p>

                                <h3 className="font-heading text-lg font-bold text-dark mt-6">1. Information We Collect</h3>
                                <p>
                                    We collect your name, email, phone number, and delivery address when you place an order
                                    or create an account. We also collect browsing data and cookies to improve your experience.
                                </p>

                                <h3 className="font-heading text-lg font-bold text-dark mt-6">2. How We Use Your Information</h3>
                                <p>
                                    Your information is used to process orders, deliver food, send order updates, and
                                    improve our services. We may send promotional emails if you opt in to our newsletter.
                                </p>

                                <h3 className="font-heading text-lg font-bold text-dark mt-6">3. Data Security</h3>
                                <p>
                                    We implement industry-standard security measures to protect your personal data.
                                    Payment information is processed securely and is never stored on our servers.
                                </p>

                                <h3 className="font-heading text-lg font-bold text-dark mt-6">4. Contact</h3>
                                <p>
                                    For any privacy-related questions, please email us at{" "}
                                    <a href="mailto:privacy@PizzaGarage.com" className="text-orange hover:underline">
                                        privacy@PizzaGarage.com
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-light text-center pt-4">
                            Last updated: January 2025
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
