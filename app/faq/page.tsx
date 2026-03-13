"use client";
// ============================================================
// FAQ Page — Accordion-style frequently asked questions
// ============================================================

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
    {
        question: "What are your delivery hours?",
        answer: "We deliver from 9:00 AM to 11:30 PM, seven days a week. Last orders are accepted at 11:00 PM.",
    },
    {
        question: "How long does delivery take?",
        answer: "Typical delivery time is 25-35 minutes. During peak hours, it may take up to 45 minutes. We always strive to get your food to you hot and fresh!",
    },
    {
        question: "Is there a minimum order for free delivery?",
        answer: "Yes! Free delivery is available on all orders over $20. Orders below $20 have a $3.99 delivery fee.",
    },
    {
        question: "Do you cater for events and parties?",
        answer: "Absolutely! We offer catering for events of all sizes. Please contact us at hello@PizzaGarage.com or call 1-800-222-000 for a custom catering quote.",
    },
    {
        question: "Can I customize my pizza?",
        answer: "Yes! You can choose your preferred size (Small/Medium/Large) and add extra toppings and add-ons from the product detail page.",
    },
    {
        question: "Do you have vegetarian options?",
        answer: "Yes, we have a great selection of vegetarian pizzas, sides, and desserts. Look for the green 'Veg' badge on our menu items.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept Cash on Delivery (COD) and Credit/Debit card payments. Online payment is processed securely.",
    },
    {
        question: "Can I cancel or modify my order?",
        answer: "You can modify or cancel your order within 5 minutes of placing it by calling us at 1-800-222-000. After preparation begins, cancellations are not possible.",
    },
    {
        question: "Do you have any loyalty or reward programs?",
        answer: "Yes! Use coupon codes like PIZZA10, WELCOME20, or FEAST15 at checkout for instant discounts. We also run seasonal promotions!",
    },
    {
        question: "How do I contact customer support?",
        answer: "You can reach us via email at support@PizzaGarage.com, phone at 1-800-222-000, or through our Contact Us page.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            {/* Hero */}
            <section className="bg-dark py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-60 h-60 bg-orange/10 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10">
                    <span className="section-subtitle text-orange-light">Help Center</span>
                    <h1 className="font-heading text-5xl font-bold text-white mt-3">
                        Frequently Asked <span className="text-orange">Questions</span>
                    </h1>
                    <p className="text-gray-light mt-4 max-w-lg mx-auto">
                        Find answers to the most common questions about our service.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-custom max-w-3xl">
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-dark pr-4">
                                        {faq.question}
                                    </span>
                                    <FiChevronDown
                                        size={20}
                                        className={`text-orange shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-48" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-6 pb-6">
                                        <p className="text-gray leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still have questions */}
                    <div className="mt-12 bg-orange/10 rounded-2xl p-8 text-center">
                        <p className="text-2xl font-heading font-bold text-dark mb-2">
                            Still have questions?
                        </p>
                        <p className="text-gray mb-4">
                            Can&apos;t find what you&apos;re looking for? Get in touch!
                        </p>
                        <a href="/contact" className="btn-primary">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
