"use client";

import { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaMotorcycle, FaDirections } from "react-icons/fa";

export default function LocationSection() {
  const [mapHovered, setMapHovered] = useState(false);

  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFE8D0 0%, #FFF5EC 45%, #FFFFFF 100%)",
        padding: "5rem 3rem",
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(232,93,4,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Warm glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -160, left: -160,
          width: 600, height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,93,4,0.08) 0%, transparent 65%)",
        }}
      />

      <div
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{ maxWidth: 1400, gap: "4rem" }}
      >

        {/* ── LEFT: Map ── */}
        <div
          className="relative group"
          onMouseEnter={() => setMapHovered(true)}
          onMouseLeave={() => setMapHovered(false)}
        >
          {/* Offset shadow */}
          <div
            className="absolute transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            style={{
              inset: 0,
              background: "rgba(232,93,4,0.15)",
              transform: "translate(10px, 10px)",
              borderRadius: "2.5rem",
            }}
          />

          <div
            className="relative w-full overflow-hidden transition-transform duration-500 group-hover:scale-[1.012]"
            style={{
              height: "clamp(380px, 52vw, 600px)",
              borderRadius: "2.5rem",
              border: "2.5px solid rgba(232,93,4,0.2)",
              boxShadow: "0 24px 60px rgba(232,93,4,0.12), 0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Pizza%20Garage,%20Nawapura,%20Ghazipur&t=k&z=19&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* Live badge */}
            <div
              className="absolute flex items-center gap-2"
              style={{
                top: 16, left: 16,
                background: "#E85D04",
                color: "#fff",
                padding: "0.4rem 1rem",
                borderRadius: "3rem",
                fontSize: "0.7rem",
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                boxShadow: "0 4px 16px rgba(232,93,4,0.4)",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              <span
                className="animate-pulse"
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#7FFF6A",
                  boxShadow: "0 0 6px #7FFF6A",
                  display: "inline-block",
                }}
              />
              Live Map
            </div>

            {/* Hover card */}
            <div
              className="absolute transition-all duration-500"
              style={{
                bottom: 0, left: 0, right: 0,
                padding: "1rem",
                transform: mapHovered ? "translateY(0)" : "translateY(110%)",
                opacity: mapHovered ? 1 : 0,
                transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              <div
                className="flex flex-col sm:flex-row items-center"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: "1.4rem",
                  border: "1px solid rgba(232,93,4,0.15)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                  padding: "1rem 1.2rem",
                  gap: "1rem",
                }}
              >
                <div className="flex items-center flex-1 w-full" style={{ gap: "0.75rem" }}>
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 44, height: 44,
                      background: "#E85D04",
                      borderRadius: "0.75rem",
                      boxShadow: "0 4px 14px rgba(232,93,4,0.4)",
                    }}
                  >
                    <FaDirections size={18} color="#fff" />
                  </div>
                  <div>
                    <p className="font-black" style={{ color: "#1a0800", fontSize: "0.95rem" }}>Pizza Garage</p>
                    <div className="flex items-center" style={{ gap: "0.5rem", marginTop: 3 }}>
                      <span
                        className="font-bold"
                        style={{
                          background: "#dcfce7", color: "#15803d",
                          fontSize: "0.7rem", borderRadius: "3rem",
                          padding: "2px 8px",
                        }}
                      >
                        ETA: 3 min
                      </span>
                      <span style={{ color: "#9ca3af", fontSize: "0.75rem" }}>Fastest route</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/maps?q=Pizza%20Garage,%20Nawapura,%20Ghazipur"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 w-full sm:w-auto flex items-center justify-center font-black text-white transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: "#E85D04",
                    borderRadius: "3rem",
                    padding: "0.6rem 1.5rem",
                    fontSize: "0.85rem",
                    boxShadow: "0 6px 18px rgba(232,93,4,0.35)",
                    textDecoration: "none",
                  }}
                >
                  Start Route
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Info Panel ── */}
        <div
          className="relative flex flex-col"
          style={{
            background: "#fff",
            borderRadius: "2.5rem",
            border: "1.5px solid rgba(232,93,4,0.12)",
            boxShadow: "0 32px 80px rgba(232,93,4,0.1), 0 8px 32px rgba(0,0,0,0.06)",
            padding: "2.5rem",
            gap: "1.4rem",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0, left: "2.5rem", right: "2.5rem",
              height: 3,
              background: "linear-gradient(90deg, #E85D04, #D51A1A)",
              borderRadius: "0 0 3px 3px",
            }}
          />

          {/* Eyebrow */}
          <p
            className="font-black uppercase"
            style={{
              color: "#E85D04",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              marginTop: "0.4rem",
            }}
          >
            Find Us
          </p>

          {/* Title */}
          <h2
            className="font-black leading-none"
            style={{
              fontFamily: '"Playfair Display", "Georgia", serif',
              fontSize: "clamp(3rem, 5.5vw, 5rem)",
              color: "#1a0800",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Pizza<br />Garage
          </h2>

          {/* Subtitle pill */}
          <div
            className="flex items-center w-fit"
            style={{
              background: "#FFF5EC",
              border: "1.5px solid rgba(232,93,4,0.18)",
              borderRadius: "3rem",
              padding: "0.4rem 1rem",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: 13 }}>🍴</span>
            <span
              className="font-bold"
              style={{ color: "#7a3a10", fontSize: "0.82rem", letterSpacing: "0.03em" }}
            >
              Pizza · Fast Food · Shakes · Beverages
            </span>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(232,93,4,0.1)", borderRadius: 99 }} />

          {/* Rating cards */}
          <div className="grid grid-cols-2" style={{ gap: "1rem" }}>

            {/* Dining */}
            <div
              className="flex flex-col transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "#FFF8F5",
                borderRadius: "1.4rem",
                border: "1.5px solid rgba(232,93,4,0.14)",
                boxShadow: "0 4px 16px rgba(232,93,4,0.07)",
                padding: "1.2rem",
                gap: "0.4rem",
              }}
            >
              <div className="flex items-center" style={{ gap: "0.4rem" }}>
                <FaStar style={{ color: "#F59E0B", fontSize: 12 }} />
                <span className="font-black uppercase" style={{ color: "#E85D04", fontSize: "0.65rem", letterSpacing: "0.2em" }}>
                  Dining
                </span>
              </div>
              <div className="flex items-baseline" style={{ gap: "0.25rem", marginTop: 4 }}>
                <span className="font-black" style={{ fontSize: "2.6rem", color: "#1a0800", lineHeight: 1, letterSpacing: "-0.04em" }}>
                  3.1
                </span>
                <span className="font-bold" style={{ color: "#c4a090", fontSize: "0.85rem" }}>/5</span>
              </div>
              <p className="font-semibold" style={{ color: "#b08070", fontSize: "0.72rem" }}>10 ratings</p>
            </div>

            {/* Delivery */}
            <div
              className="flex flex-col transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "#F0FDF4",
                borderRadius: "1.4rem",
                border: "1.5px solid rgba(34,197,94,0.2)",
                boxShadow: "0 4px 16px rgba(34,197,94,0.07)",
                padding: "1.2rem",
                gap: "0.4rem",
              }}
            >
              <div className="flex items-center" style={{ gap: "0.4rem" }}>
                <FaMotorcycle style={{ color: "#22c55e", fontSize: 12 }} />
                <span className="font-black uppercase" style={{ color: "#15803d", fontSize: "0.65rem", letterSpacing: "0.2em" }}>
                  Delivery
                </span>
              </div>
              <div className="flex items-baseline" style={{ gap: "0.25rem", marginTop: 4 }}>
                <span className="font-black" style={{ fontSize: "2.6rem", color: "#1a0800", lineHeight: 1, letterSpacing: "-0.04em" }}>
                  4.3
                </span>
                <span className="font-bold" style={{ color: "#86efac", fontSize: "0.85rem" }}>/5</span>
              </div>
              <p className="font-semibold" style={{ color: "#16a34a", fontSize: "0.72rem" }}>3,742 ratings</p>
            </div>
          </div>

          {/* Address */}
          <div
            className="flex items-start"
            style={{
              background: "#FFF8F5",
              borderRadius: "1.2rem",
              border: "1.5px solid rgba(232,93,4,0.1)",
              padding: "1rem 1.2rem",
              gap: "0.9rem",
            }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: 38, height: 38,
                background: "rgba(232,93,4,0.1)",
                border: "1px solid rgba(232,93,4,0.2)",
                borderRadius: "0.7rem",
                marginTop: 2,
              }}
            >
              <FaMapMarkerAlt style={{ color: "#E85D04", fontSize: 14 }} />
            </div>
            <div>
              <p
                className="font-black uppercase"
                style={{
                  color: "rgba(90,40,10,0.4)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  marginBottom: "0.35rem",
                }}
              >
                Our Location
              </p>
              <p className="font-semibold" style={{ color: "#3a1a08", fontSize: "0.88rem", lineHeight: 1.65 }}>
                Nawapura, Prakash Nagar Chauraha, Ward 11,<br />
                Vikas Bhawan Road, Ghazipur
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://maps.google.com/maps?q=Pizza%20Garage,%20Nawapura,%20Ghazipur"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between font-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            style={{
              background: "linear-gradient(135deg, #E85D04, #D51A1A)",
              color: "#fff",
              borderRadius: "3rem",
              padding: "1rem 1.5rem",
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              boxShadow: "0 12px 32px rgba(232,93,4,0.35)",
              textDecoration: "none",
              gap: "0.75rem",
            }}
          >
            <span>Get Directions</span>
            <span
              className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
              style={{
                width: 34, height: 34,
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
              }}
            >
              <svg width="14" height="14" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}