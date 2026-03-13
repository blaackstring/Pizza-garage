"use client";

import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms & Privacy", href: "/terms" },
];

const CATEGORIES = [
  { label: "Pizza", href: "/menu?category=pizza" },
  { label: "Fast Food", href: "/menu?category=fastfood" },
  { label: "Desserts", href: "/menu?category=desserts" },
  { label: "Drinks", href: "/menu?category=drinks" },
];

const SOCIALS = [
  { icon: <FaFacebookF size={16} />, href: "#", label: "Facebook" },
  { icon: <FaInstagram size={16} />, href: "#", label: "Instagram" },
  { icon: <FaTwitter size={16} />, href: "#", label: "Twitter" },
  { icon: <FaYoutube size={16} />, href: "#", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0C0602", color: "#fff", fontFamily: '"DM Sans", sans-serif' }}
    >
      {/* ── Top divider glow ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #E85D04 40%, #D51A1A 60%, transparent)" }}
      />

      {/* ── Atmospheric background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(232,93,4,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(213,26,26,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ══════════════════════════════════════════
          NEWSLETTER STRIP
      ══════════════════════════════════════════ */}
      <div className="relative z-20 px-4 md:px-12 lg:px-20" style={{ paddingTop: "3.5rem" }}>
        <div
          className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between"
          style={{
            background: "linear-gradient(135deg, #D51A1A 0%, #E85D04 100%)",
            borderRadius: "2rem",
            padding: "3rem 3.5rem",
            gap: "2rem",
            boxShadow: "0 30px 80px -10px rgba(232,93,4,0.35), 0 0 0 1px rgba(255,255,255,0.1) inset",
          }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Big decorative text */}
          <span
            className="absolute right-8 bottom-[-1.5rem] font-black uppercase select-none pointer-events-none hidden lg:block"
            style={{
              fontSize: "7rem",
              color: "rgba(0,0,0,0.12)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            GARAGE
          </span>

          {/* Text */}
          <div className="relative z-10 text-center lg:text-left">
            <p
              className="text-xs font-black tracking-[0.3em] uppercase mb-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Members Only
            </p>
            <h3
              className="font-black leading-tight mb-2"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "#fff",
                letterSpacing: "-0.03em",
              }}
            >
              Join the Garage Club
            </h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", fontWeight: 500 }}>
              Exclusive deals, early drops &amp; secret menu items.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="relative z-10 flex w-full lg:w-auto gap-3 flex-col sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email..."
              required
              className="flex-1 lg:w-80"
              style={{
                padding: "0.9rem 1.4rem",
                borderRadius: "3rem",
                background: "rgba(0,0,0,0.25)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontSize: "0.95rem",
                fontWeight: 600,
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 group transition-all hover:scale-105 active:scale-95"
              style={{
                padding: "0.9rem 2rem",
                borderRadius: "3rem",
                background: "#fff",
                color: "#D51A1A",
                fontWeight: 900,
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                border: "none",
                cursor: "pointer",
              }}
            >
              {subscribed ? "✓ You're in!" : "Sign Me Up"}
              {!subscribed && (
                <FiArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN FOOTER COLUMNS
      ══════════════════════════════════════════ */}
      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-12 lg:px-20"
        style={{ paddingTop: "5rem", paddingBottom: "4rem", gap: "3.5rem" }}
      >

        {/* ── Col 1: Brand ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
          <Link href="/" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
            <div
              className="flex items-center justify-center transition-transform group-hover:rotate-12 duration-500"
              style={{
                width: 52,
                height: 52,
                background: "rgba(232,93,4,0.15)",
                borderRadius: "1rem",
                border: "1px solid rgba(232,93,4,0.3)",
                fontSize: "1.8rem",
              }}
            >
              🍕
            </div>
            <div>
              <div
                className="font-black leading-none"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "1.7rem",
                  color: "#fff",
                  letterSpacing: "-0.03em",
                }}
              >
                Pizza
              </div>
              <div
                className="font-black leading-none"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "1.2rem",
                  color: "#E85D04",
                  letterSpacing: "0.1em",
                }}
              >
                Garage
              </div>
            </div>
          </Link>

          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 500 }}>
            Handcrafted pizzas with a rebellious soul. Serving high-octane flavor in Ghazipur since 2010.
          </p>

          {/* Star rating badge */}
          <div
            className="flex items-center gap-3 w-max"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1rem",
              padding: "0.65rem 1rem",
            }}
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i <= 4 ? "#F59E0B" : "rgba(255,255,255,0.15)"}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", fontWeight: 700 }}>
              4.3 · 3,742 reviews
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#E85D04";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "#E85D04";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(232,93,4,0.35)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Col 2: Explore ── */}
        <div style={{ paddingTop: "0.25rem" }}>
          <FooterColHeader>Explore</FooterColHeader>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 transition-all duration-200"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#E85D04",
                      flexShrink: 0,
                      opacity: 0,
                      transition: "opacity 0.2s, transform 0.2s",
                      transform: "scale(0)",
                    }}
                    className="group-hover:opacity-100 group-hover:scale-100"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Menu ── */}
        <div style={{ paddingTop: "0.25rem" }}>
          <FooterColHeader>The Menu</FooterColHeader>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {CATEGORIES.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 transition-all duration-200"
                  style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "0.92rem", fontWeight: 600 }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  <span
                    style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#E85D04", flexShrink: 0,
                      opacity: 0, transition: "opacity 0.2s, transform 0.2s", transform: "scale(0)",
                    }}
                    className="group-hover:opacity-100 group-hover:scale-100"
                  />
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Order CTA inline */}
            <li style={{ paddingTop: "0.5rem" }}>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 transition-all hover:gap-3"
                style={{
                  color: "#E85D04",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                }}
              >
                View Full Menu <FiArrowRight size={14} />
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Col 4: Contact ── */}
        <div style={{ paddingTop: "0.25rem" }}>
          <FooterColHeader>Get In Touch</FooterColHeader>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Address */}
            <ContactRow icon={<FiMapPin size={15} />}>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 500 }}>
                Nawapura, Prakash Nagar Chauraha,<br />Ward 11, Ghazipur UP 233001
              </span>
            </ContactRow>

            {/* Phone */}
            <ContactRow icon={<FiPhone size={15} />}>
              <a
                href="tel:1800222000"
                style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 800, textDecoration: "none", letterSpacing: "0.03em" }}
                onMouseEnter={e => e.currentTarget.style.color = "#E85D04"}
                onMouseLeave={e => e.currentTarget.style.color = "#fff"}
              >
                1-800-222-000
              </a>
            </ContactRow>

            {/* Email */}
            <ContactRow icon={<FiMail size={15} />}>
              <a
                href="mailto:hello@pizza.garage"
                style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = "#E85D04"}
                onMouseLeave={e => e.currentTarget.style.color = "#fff"}
              >
                hello@pizza.garage
              </a>
            </ContactRow>
          </div>

          {/* Hours card */}
          <div
            style={{
              marginTop: "1.8rem",
              padding: "1.5rem",
              borderRadius: "1.25rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent stripe */}
            <div
              style={{
                position: "absolute",
                left: 0, top: 0, bottom: 0,
                width: 3,
                background: "linear-gradient(180deg, #E85D04, #D51A1A)",
                borderRadius: "3px 0 0 3px",
              }}
            />
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 900,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "0.5rem",
              }}
            >
              Hours
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.02em",
                fontFamily: '"Playfair Display", serif',
              }}
            >
              9:00 AM – 11:30 PM
            </p>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "#E85D04",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: "0.3rem",
              }}
            >
              Open Every Day
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════ */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-12 lg:px-20"
          style={{ padding: "1.5rem 5rem", gap: "1rem" }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            © 2025 Pizza Garage · Handcrafted with Passion
          </p>

          <div className="flex items-center gap-1">
            {/* Heartbeat dot */}
            <span
              className="animate-pulse"
              style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#E85D04", display: "inline-block", marginRight: 8,
              }}
            />
            <Link
              href="/terms"
              style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "#E85D04"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
            >
              Privacy
            </Link>
            <span style={{ color: "rgba(255,255,255,0.15)", margin: "0 0.75rem" }}>·</span>
            <Link
              href="/terms"
              style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "#E85D04"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Shared sub-components ── */
function FooterColHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h4
        style={{
          fontSize: "0.7rem",
          fontWeight: 900,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#E85D04",
          margin: 0,
        }}
      >
        {children}
      </h4>
      <div
        style={{
          marginTop: "0.5rem",
          width: 24,
          height: 2,
          background: "rgba(232,93,4,0.35)",
          borderRadius: 99,
        }}
      />
    </div>
  );
}

function ContactRow({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: "0.6rem",
          background: "rgba(232,93,4,0.1)",
          border: "1px solid rgba(232,93,4,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#E85D04",
          marginTop: 2,
        }}
      >
        {icon}
      </div>
      {children}
    </div>
  );
}