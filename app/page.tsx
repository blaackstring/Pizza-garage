"use client";
// ============================================================
// Home Page — Hero, Categories, Why Choose Us, Best Pizzas,
// Offers & Deals, Testimonials, Newsletter CTA.
// ============================================================

import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiTruck,
  FiClock,
  FiAward,
  FiHeart,
  FiStar,
} from "react-icons/fi";
import {
  getBestSellers,
  getOffers,
  testimonials,
} from "@/data/products";
import ProductCard from "@/components/ProductCard";
import InteractivePizzaSection from "@/components/InteractivePizzaSection";
import IceCreamSection from "@/components/IceCreamSection";
import VideoScrollSection from "@/components/VideoScrollSection";
import LocationSection from "@/components/LocationSection";



// Category data for the strip
const categories = [
  { name: "Pizza", emoji: "🍕", href: "/menu?category=pizza" },
  { name: "Burgers", emoji: "🍔", href: "/menu?category=fastfood" },
  { name: "Desserts", emoji: "🍰", href: "/menu?category=desserts" },
  { name: "Drinks", emoji: "🥤", href: "/menu?category=drinks" },
  { name: "Fries", emoji: "🍟", href: "/menu?category=fastfood" },
  { name: "Salads", emoji: "🥗", href: "/menu?category=pizza" },
];

const whyChooseUs = [
  {
    icon: <FiAward size={32} />,
    title: "Premium Quality",
    desc: "Only the freshest, hand-picked ingredients sourced from premium local and Italian suppliers.",
  },
  {
    icon: <FiTruck size={32} />,
    title: "Fast Delivery",
    desc: "Hot pizza at your doorstep in under 30 minutes. Guaranteed freshness on every order.",
  },
  {
    icon: <FiClock size={32} />,
    title: "Open Late",
    desc: "Craving late-night pizza? We're open 9 AM – 11:30 PM, seven days a week.",
  },
  {
    icon: <FiHeart size={32} />,
    title: "Made with Love",
    desc: "Every pizza is hand-crafted by our expert chefs with passion and decades of experience.",
  },
];

export default function Home() {
  const bestSellers = getBestSellers();
  const offers = getOffers();

  return (
    <>
      {/* ═══════════════════ HERO — Pizzao Style ═══════════════════ */}
      <section className="hero-pizzao ">
        {/* Decorative floating ingredients */}
        <div className="hero-deco hero-deco--tomato-tl scale-200" aria-hidden="true">
          <Image src="/images/tomatoes.webp" alt="" width={480} height={480} className="hero-deco-img" />
        </div>
        <div className="hero-deco hero-deco--chili-left scale-300 rotate-34" aria-hidden="true">
          <Image src="/images/chilli.png" alt="" width={480} height={480} className="hero-deco-img" />
        </div>
        <div className="hero-deco hero-deco--pepper-right scale-300 rotate-334" aria-hidden="true">
          <Image src="/images/chilli.png" alt="" width={480} height={480} className="hero-deco-img hero-deco-flip" />
        </div>
        <div className="hero-deco hero-deco--tomato-br scale-200" aria-hidden="true">
          <Image src="/images/tomatoes.webp" alt="" width={480} height={480} className="hero-deco-img" />
        </div>

        {/* Hero text */}
        <div className="hero-text-container">
          <p className="hero-script-text">Original</p>
          <h1 className="hero-main-text">Italian</h1>
        </div>

        {/* Rotating pizza */}
        <div className="hero-pizza-wrapper">
          <Image
            src="/images/hero_section_pizza.webp"
            alt="Delicious Italian pizza rotating"
            width={700}
            height={700}
            priority
            className="hero-pizza-img"
          />
          {/* Today Offer badge */}
          <div className="hero-today-offer">
            <span>Today</span>
            <span>Offer</span>
          </div>
        </div>

        {/* Order button */}
        <Link href="/menu" className="hero-order-btn">
          <span className="arrow-circle">
            <FiArrowRight size={16} />
          </span>
          Order
        </Link>
      </section>

      {/* ═══════════════════ INTERACTIVE PIZZA SECTION ═══════════════════ */}
      <InteractivePizzaSection />

      {/* ═══════════════════ ICE CREAM SECTION ═══════════════════ */}
      <IceCreamSection />

      {/* ═══════════════════ VIDEO SCROLL SECTION ═══════════════════ */}
      <VideoScrollSection />

      {/* ═══════════════════ LOCATION SECTION ═══════════════════ */}
      <LocationSection />
    </>
  );
}
