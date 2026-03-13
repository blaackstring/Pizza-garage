// ============================================================
// Custom 404 Page — Not Found
// ============================================================

import Link from "next/link";
import { FiHome, FiShoppingBag } from "react-icons/fi";

export default function NotFound() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-cream px-6">
            <div className="text-center max-w-lg">
                {/* Pizza emoji */}
                <div className="text-[140px] mb-4 animate-float">🍕</div>

                {/* 404 */}
                <h1 className="font-heading text-8xl font-bold text-orange mb-4">404</h1>
                <h2 className="font-heading text-3xl font-bold text-dark mb-3">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray text-lg mb-8 leading-relaxed">
                    Looks like this page ran away with the pizza delivery guy.
                    Don&apos;t worry — let&apos;s get you back on track!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="btn-primary text-base !py-4 !px-8">
                        <FiHome /> Go Home
                    </Link>
                    <Link href="/menu" className="btn-secondary text-base !py-4 !px-8">
                        <FiShoppingBag /> View Menu
                    </Link>
                </div>
            </div>
        </section>
    );
}
