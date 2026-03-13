import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ============================================================
// Google Fonts — Playfair Display for headings, Inter for body
// ============================================================
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// ============================================================
// SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: {
    default: "PizzaParlor — The True Taste of Italy | Order Online",
    template: "%s | PizzaParlor",
  },
  description:
    "Order delicious hand-made pizzas, burgers, desserts & more from PizzaParlor. Fast delivery, fresh ingredients, and unbeatable taste. Order online now!",
  keywords: [
    "pizza delivery",
    "order pizza online",
    "pizza parlor",
    "Italian food",
    "fast food delivery",
    "best pizza near me",
  ],
  openGraph: {
    title: "PizzaParlor — The True Taste of Italy",
    description: "Hand-crafted pizzas with the freshest ingredients, delivered to your door.",
    type: "website",
    locale: "en_US",
    siteName: "PizzaParlor",
  },
};

// ============================================================
// Root Layout
// ============================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
