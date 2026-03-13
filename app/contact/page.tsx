"use client";
// ============================================================
// Contact Us Page — Contact form, map, details
// ============================================================

import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
    };

    const contactInfo = [
        { icon: <FiMapPin size={24} />, title: "Visit Us", detail: "401 Broadway, 24th Floor\nNew York, NY 10013" },
        { icon: <FiPhone size={24} />, title: "Call Us", detail: "1-800-222-000\n+1 234 567 8910" },
        { icon: <FiMail size={24} />, title: "Email Us", detail: "hello@PizzaGarage.com\nsupport@PizzaGarage.com" },
        { icon: <FiClock size={24} />, title: "Opening Hours", detail: "Mon – Sun\n9:00 AM – 11:30 PM" },
    ];

    return (
        <>
            {/* Hero */}
            <section className="bg-dark py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute bottom-0 right-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10">
                    <span className="section-subtitle text-orange-light">Get in Touch</span>
                    <h1 className="font-heading text-5xl font-bold text-white mt-3">
                        Contact <span className="text-orange">Us</span>
                    </h1>
                    <p className="text-gray-light mt-4 max-w-lg mx-auto">
                        Have a question, feedback, or a catering request? We&apos;d love to hear from you!
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative -mt-10 px-6 z-10">
                <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contactInfo.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-orange/10 text-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                                {item.icon}
                            </div>
                            <h3 className="font-heading font-bold text-dark mb-2">{item.title}</h3>
                            <p className="text-sm text-gray whitespace-pre-line">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-custom grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <span className="section-subtitle">Send a Message</span>
                        <h2 className="section-title mb-6">We&apos;d Love to Hear From You</h2>

                        {submitted && (
                            <div className="bg-green/10 text-green p-4 rounded-xl mb-6 font-medium">
                                ✅ Thank you! Your message has been sent. We&apos;ll get back to you soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none bg-white"
                                />
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                    placeholder="Your Email"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none bg-white"
                                />
                            </div>
                            <input
                                type="text"
                                value={form.subject}
                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                required
                                placeholder="Subject"
                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none bg-white"
                            />
                            <textarea
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                                rows={5}
                                placeholder="Your Message"
                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none bg-white resize-none"
                            />
                            <button type="submit" className="btn-primary text-base !py-4 !px-8">
                                <FiSend /> Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden shadow-md h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.209!2d-74.0007!3d40.7193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a59139e23%3A0x2e21b44c82e3f0a5!2s401%20Broadway%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="PizzaGarage Location"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
