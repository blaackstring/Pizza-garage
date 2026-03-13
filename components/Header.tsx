"use client";
// ============================================================
// Header / Navbar — Sticky, transparent on scroll-top,
// solid on scroll. Mobile hamburger menu. Cart badge.
// ============================================================

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiPhone } from "react-icons/fi";
import { useStore } from "@/store/store";

const NAV_LINKS: any[] = [
    // { label: "Home", href: "/" },
    // { label: "Menu", href: "/menu" },
    // { label: "About", href: "/about" },
    // { label: "Contact", href: "/contact" },
    // { label: "FAQ", href: "/faq" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const cartCount = useStore((s) => s.getCartCount());
    const isLoggedIn = useStore((s) => s.isLoggedIn);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Main navbar */}
            <header
                className={`sticky top-2 z-50 border-0 text-white shadow-none outline-none ${scrolled
                    ? ""
                    : ""
                    }`}
            >
                <div className="container-custom border-none flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-3xl">🍕</span>
                        <div>
                            <span className={`hero-main-header-text text font-bold transition-colors ${scrolled ? 'text-white group-hover:text-orange-light' : 'text-white group-hover:text-orange-light'}`}>
                                Pizza
                            </span>
                            <span className="font-heading text-2xl ml-5 font-bold hero-script-text">
                                Garage
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {/* {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link-hover relative font-semibold tracking-widest py-5 hover:scale-110 transition-all duration-300 ${scrolled ? 'text-white hover:text-orange-light' : 'text-white hover:text-orange-light'}`}
                            >
                                {link.label}
                            </Link>
                        ))} */}
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-4">
                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="relative p-2 hover:bg-orange/10 rounded-full transition-colors"
                        >
                            <FiShoppingCart size={22} className="text-white transition-colors" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Order online CTA */}
                        <Link href="/menu" className="hidden md:inline-flex btn-primary text-sm !py-3 !px-6">
                            Order Online
                        </Link>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`lg:hidden p-2 hover:bg-orange/10 rounded-full transition-colors text-white`}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 border-t border-gray-lighter" : "max-h-0"
                        }`}
                >
                    <nav className="flex flex-col px-6 py-4 gap-1 bg-white">
                        {/* {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="py-3 px-4 text-dark font-medium hover:bg-orange/10 hover:text-orange rounded-lg transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))} */}
                        <div className="flex gap-3 mt-3 pt-3 border-t border-gray-lighter">
                            {isLoggedIn ? (
                                <Link href="/account" className="btn-secondary flex-1 text-center text-sm !py-3" onClick={() => setMobileOpen(false)}>
                                    My Account
                                </Link>
                            ) : (
                                <Link href="/login" className="btn-secondary flex-1 text-center text-sm !py-3" onClick={() => setMobileOpen(false)}>
                                    Login
                                </Link>
                            )}
                            <Link href="/menu" className="btn-primary flex-1 text-center text-sm !py-3" onClick={() => setMobileOpen(false)}>
                                Order Now
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
