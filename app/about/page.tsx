// ============================================================
// About Us Page — Story, Mission, Team
// ============================================================

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about PizzaGarage — our story, mission, and the passionate team behind the best pizza in town.",
};

const team = [
    { name: "Marco Rossi", role: "Head Chef", emoji: "👨‍🍳" },
    { name: "Sophia Chen", role: "Pastry Chef", emoji: "👩‍🍳" },
    { name: "Antonio Bianchi", role: "Pizza Master", emoji: "🧑‍🍳" },
    { name: "Elena Garcia", role: "Manager", emoji: "👩‍💼" },
];

const stats = [
    { value: "2010", label: "Founded" },
    { value: "15+", label: "Years of Passion" },
    { value: "50K+", label: "Happy Customers" },
    { value: "100K+", label: "Pizzas Made" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-dark py-24 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-20 w-72 h-72 bg-orange/10 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10">
                    <span className="section-subtitle text-orange-light">Our Story</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-3">
                        About <span className="text-orange">PizzaGarage</span>
                    </h1>
                    <p className="text-gray-light mt-4 max-w-xl mx-auto text-lg">
                        From a small family kitchen in New York to your favorite pizza destination.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-white">
                <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="section-subtitle">Since 2010</span>
                        <h2 className="section-title">The Amazing Pasta & Pizza Parlor</h2>
                        <p className="text-gray leading-relaxed mb-4">
                            What started as a small family recipe shared at weekend gatherings has
                            grown into one of New York&apos;s most beloved pizza destinations. Our founder,
                            Marco Rossi, brought his grandmother&apos;s authentic Italian recipes from
                            Naples and combined them with the finest local ingredients.
                        </p>
                        <p className="text-gray leading-relaxed mb-6">
                            Every pizza we craft tells a story — from the carefully fermented dough
                            that rises for 48 hours to the hand-picked San Marzano tomatoes imported
                            from Italy. We believe that great food brings people together, and every
                            slice should be a moment of joy.
                        </p>
                        <Link href="/menu" className="btn-primary">
                            Explore Our Menu <FiArrowRight />
                        </Link>
                    </div>
                    <div className="bg-gradient-to-br from-orange/10 to-cream rounded-3xl p-12 flex items-center justify-center">
                        <div className="text-[180px] animate-float">🍕</div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-dark py-16">
                <div className="container-custom px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-4xl font-bold text-orange font-heading">{stat.value}</p>
                                <p className="text-gray-light mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="section-padding bg-cream">
                <div className="container-custom text-center max-w-3xl mx-auto">
                    <span className="section-subtitle">Our Mission</span>
                    <h2 className="section-title">Crafted with Passion, Delivered with Love</h2>
                    <p className="text-gray leading-relaxed text-lg">
                        Our mission is simple — to deliver the most authentic, delicious, and
                        unforgettable pizza experience, using only premium ingredients, traditional
                        recipes, and modern innovation. Every order is prepared fresh, with care
                        and passion that you can taste in every bite.
                    </p>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="section-subtitle">Our Team</span>
                        <h2 className="section-title">Meet the Experts</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="bg-cream rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-6xl mb-4">{member.emoji}</div>
                                <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                                <p className="text-sm text-orange font-medium mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-orange py-16 text-center px-6">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Taste the Difference?
                </h2>
                <p className="text-white/80 max-w-lg mx-auto mb-8">
                    Experience the true taste of Italy, crafted with love and delivered fresh to your door.
                </p>
                <Link href="/menu" className="btn-dark text-base !py-4 !px-8">
                    Order Now <FiArrowRight />
                </Link>
            </section>
        </>
    );
}
