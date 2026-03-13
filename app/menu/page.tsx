"use client";
// ============================================================
// Menu / Shop Page — Category filters, Veg/Non-veg toggle,
// price range, product grid with pagination.
// Wrapped in Suspense for useSearchParams compatibility.
// ============================================================

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { FiFilter, FiX } from "react-icons/fi";

const CATEGORIES = [
    { key: "all", label: "All Items", emoji: "🍽️" },
    { key: "pizza", label: "Pizza", emoji: "🍕" },
    { key: "fastfood", label: "Fast Food", emoji: "🍔" },
    { key: "desserts", label: "Desserts", emoji: "🍰" },
    { key: "drinks", label: "Drinks", emoji: "🥤" },
];

const ITEMS_PER_PAGE = 8;

function MenuContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "all";

    const [category, setCategory] = useState(initialCategory);
    const [vegFilter, setVegFilter] = useState<"all" | "veg" | "nonveg">("all");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
    const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "rating">("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    const filtered = useMemo(() => {
        let result = [...products];

        if (category !== "all") {
            result = result.filter((p) => p.category === category);
        }
        if (vegFilter === "veg") result = result.filter((p) => p.isVeg);
        if (vegFilter === "nonveg") result = result.filter((p) => !p.isVeg);
        result = result.filter(
            (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
        );

        switch (sortBy) {
            case "price-asc": result.sort((a, b) => a.price - b.price); break;
            case "price-desc": result.sort((a, b) => b.price - a.price); break;
            case "rating": result.sort((a, b) => b.averageRating - a.averageRating); break;
        }

        return result;
    }, [category, vegFilter, priceRange, sortBy]);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const resetFilters = () => {
        setCategory("all");
        setVegFilter("all");
        setPriceRange([0, 50]);
        setSortBy("default");
        setCurrentPage(1);
    };

    return (
        <>
            {/* Hero */}
            <section className="bg-dark py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 right-10 w-60 h-60 bg-orange/10 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10">
                    <span className="section-subtitle text-orange-light">Our Menu</span>
                    <h1 className="font-heading text-5xl font-bold text-white mt-3">
                        Explore Our <span className="text-orange">Delicious</span> Menu
                    </h1>
                    <p className="text-gray-light mt-4 max-w-lg mx-auto">
                        From hand-crafted pizzas to decadent desserts — find your perfect meal.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-custom">
                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-3 mb-8 justify-center">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => { setCategory(cat.key); setCurrentPage(1); }}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${category === cat.key
                                        ? "bg-orange text-white shadow-lg"
                                        : "bg-white text-dark hover:bg-orange/10"
                                    }`}
                            >
                                <span>{cat.emoji}</span> {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Filter bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm">
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex bg-gray-lighter rounded-full p-1">
                                {(["all", "veg", "nonveg"] as const).map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => { setVegFilter(opt); setCurrentPage(1); }}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${vegFilter === opt ? "bg-orange text-white" : "text-gray hover:text-dark"
                                            }`}
                                    >
                                        {opt === "all" ? "All" : opt === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
                                    </button>
                                ))}
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-sm text-gray">
                                <span>Price: $0</span>
                                <input
                                    type="range" min={0} max={50} value={priceRange[1]}
                                    onChange={(e) => { setPriceRange([0, Number(e.target.value)]); setCurrentPage(1); }}
                                    className="w-32 accent-orange"
                                />
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                                className="px-4 py-2 rounded-full border border-gray-lighter bg-white text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-orange/30"
                            >
                                <option value="default">Sort: Default</option>
                                <option value="price-asc">Price: Low → High</option>
                                <option value="price-desc">Price: High → Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                            <button onClick={resetFilters} className="text-sm text-gray hover:text-orange transition-colors flex items-center gap-1">
                                <FiX size={14} /> Reset
                            </button>
                            <button onClick={() => setShowMobileFilter(!showMobileFilter)} className="md:hidden p-2 bg-orange/10 text-orange rounded-full">
                                <FiFilter size={18} />
                            </button>
                        </div>
                    </div>

                    {showMobileFilter && (
                        <div className="md:hidden bg-white p-4 rounded-2xl shadow-sm mb-6 flex items-center gap-2 text-sm text-gray">
                            <span>Price: $0</span>
                            <input type="range" min={0} max={50} value={priceRange[1]}
                                onChange={(e) => { setPriceRange([0, Number(e.target.value)]); setCurrentPage(1); }}
                                className="flex-1 accent-orange" />
                            <span>${priceRange[1]}</span>
                        </div>
                    )}

                    <p className="text-sm text-gray mb-6">
                        Showing {paginated.length} of {filtered.length} items
                    </p>

                    {paginated.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {paginated.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-6xl mb-4">😕</p>
                            <p className="text-xl font-semibold text-dark mb-2">No items found</p>
                            <p className="text-gray">Try adjusting your filters or explore a different category.</p>
                            <button onClick={resetFilters} className="btn-primary mt-6">Reset Filters</button>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 rounded-full bg-white text-dark font-medium disabled:opacity-40 hover:bg-orange hover:text-white transition-all"
                            >Prev</button>
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-full font-medium transition-all ${currentPage === i + 1 ? "bg-orange text-white" : "bg-white text-dark hover:bg-orange/10"
                                        }`}
                                >{i + 1}</button>
                            ))}
                            <button
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-full bg-white text-dark font-medium disabled:opacity-40 hover:bg-orange hover:text-white transition-all"
                            >Next</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default function MenuPage() {
    return (
        <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center bg-cream">
                <div className="text-center">
                    <div className="text-6xl animate-float mb-4">🍕</div>
                    <p className="text-gray font-medium">Loading menu...</p>
                </div>
            </div>
        }>
            <MenuContent />
        </Suspense>
    );
}
