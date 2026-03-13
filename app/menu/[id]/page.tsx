"use client";
// ============================================================
// Product Detail Page — Full product view with image area,
// size selector, add-ons, quantity, add-to-cart, tabs for
// ingredients/nutrition/reviews.
// ============================================================

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";
import { useStore, CartItem } from "@/store/store";
import ProductCard from "@/components/ProductCard";
import {
    FiShoppingCart,
    FiMinus,
    FiPlus,
    FiStar,
    FiCheck,
    FiArrowLeft,
} from "react-icons/fi";

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const router = useRouter();
    const product = getProductBySlug(id);
    const addToCart = useStore((s) => s.addToCart);

    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<"ingredients" | "nutrition" | "reviews">("ingredients");
    const [addedToCart, setAddedToCart] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
                <p className="text-6xl mb-4">😕</p>
                <h1 className="text-2xl font-heading font-bold mb-2">Product Not Found</h1>
                <p className="text-gray mb-6">The item you are looking for doesn&apos;t exist.</p>
                <Link href="/menu" className="btn-primary">
                    Back to Menu
                </Link>
            </div>
        );
    }

    const currentPrice = product.sizes[selectedSize]?.price || product.price;
    const addOnsTotal = product.addOns
        .filter((a) => selectedAddOns.includes(a.name))
        .reduce((sum, a) => sum + a.price, 0);
    const totalPrice = (currentPrice + addOnsTotal) * quantity;

    const handleAddToCart = () => {
        const item: CartItem = {
            productId: product.id,
            name: product.name,
            image: product.image,
            size: product.sizes[selectedSize]?.label || "Regular",
            price: currentPrice,
            addOns: selectedAddOns,
            addOnsTotal,
            quantity,
        };
        addToCart(item);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    const toggleAddOn = (name: string) => {
        setSelectedAddOns((prev) =>
            prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
        );
    };

    const categoryEmoji: Record<string, string> = {
        pizza: "🍕",
        fastfood: "🍔",
        desserts: "🍰",
        drinks: "🥤",
    };

    // Related products (same category, different item)
    const related = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-lighter">
                <div className="container-custom px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray">
                        <Link href="/" className="hover:text-orange transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/menu" className="hover:text-orange transition-colors">Menu</Link>
                        <span>/</span>
                        <span className="text-dark font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <section className="section-padding bg-cream">
                <div className="container-custom">
                    {/* Back button */}
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray hover:text-orange transition-colors mb-8"
                    >
                        <FiArrowLeft /> Back
                    </button>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left — Image */}
                        <div className="bg-white rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
                            <div className="text-[200px] animate-float">
                                {categoryEmoji[product.category] || "🍕"}
                            </div>
                            {/* Badges */}
                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                {product.isOnOffer && <span className="badge-offer">Deal</span>}
                                {product.isBestSeller && (
                                    <span className="bg-dark text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Best Seller
                                    </span>
                                )}
                                <span className={product.isVeg ? "badge-veg" : "badge-nonveg"}>
                                    {product.isVeg ? "Veg" : "Non-Veg"}
                                </span>
                            </div>
                        </div>

                        {/* Right — Details */}
                        <div>
                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="stars flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FiStar
                                            key={i}
                                            size={18}
                                            className={
                                                i < Math.round(product.averageRating)
                                                    ? "fill-yellow text-yellow"
                                                    : "text-gray-lighter"
                                            }
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray">
                                    {product.averageRating} ({product.reviews.length} reviews)
                                </span>
                            </div>

                            {/* Name */}
                            <h1 className="font-heading text-4xl font-bold text-dark mb-3">
                                {product.name}
                            </h1>

                            {/* Description */}
                            <p className="text-gray leading-relaxed mb-6">
                                {product.description}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-3 mb-8">
                                <span className="text-3xl font-bold text-orange">
                                    ${totalPrice.toFixed(2)}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-lg text-gray line-through">
                                        ${(product.originalPrice * quantity).toFixed(2)}
                                    </span>
                                )}
                            </div>

                            {/* Size selector */}
                            <div className="mb-6">
                                <p className="font-semibold text-dark mb-3">Select Size</p>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((size, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedSize(i)}
                                            className={`px-6 py-3 rounded-full font-medium transition-all border-2 ${selectedSize === i
                                                    ? "border-orange bg-orange text-white"
                                                    : "border-gray-lighter bg-white text-dark hover:border-orange"
                                                }`}
                                        >
                                            {size.label} — ${size.price.toFixed(2)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Add-ons */}
                            {product.addOns.length > 0 && (
                                <div className="mb-6">
                                    <p className="font-semibold text-dark mb-3">Add-ons</p>
                                    <div className="flex flex-wrap gap-3">
                                        {product.addOns.map((addon) => (
                                            <button
                                                key={addon.name}
                                                onClick={() => toggleAddOn(addon.name)}
                                                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all border-2 ${selectedAddOns.includes(addon.name)
                                                        ? "border-orange bg-orange/10 text-orange"
                                                        : "border-gray-lighter bg-white text-dark hover:border-orange"
                                                    }`}
                                            >
                                                {selectedAddOns.includes(addon.name) && <FiCheck size={14} />}
                                                {addon.name} (+${addon.price.toFixed(2)})
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <div className="flex items-center bg-white border-2 border-gray-lighter rounded-full">
                                    <button
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                        className="w-12 h-12 flex items-center justify-center text-dark hover:text-orange transition-colors"
                                    >
                                        <FiMinus />
                                    </button>
                                    <span className="w-12 text-center font-bold text-lg">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity((q) => q + 1)}
                                        className="w-12 h-12 flex items-center justify-center text-dark hover:text-orange transition-colors"
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className={`btn-primary flex-1 min-w-[200px] text-base !py-4 ${addedToCart ? "!bg-green" : ""
                                        }`}
                                >
                                    {addedToCart ? (
                                        <>
                                            <FiCheck /> Added to Cart!
                                        </>
                                    ) : (
                                        <>
                                            <FiShoppingCart /> Add to Cart — ${totalPrice.toFixed(2)}
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="border-t border-gray-lighter pt-8">
                                <div className="flex gap-1 mb-6 bg-white rounded-full p-1 inline-flex">
                                    {(["ingredients", "nutrition", "reviews"] as const).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize ${activeTab === tab
                                                    ? "bg-orange text-white"
                                                    : "text-gray hover:text-dark"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab content */}
                                <div className="animate-fade-in">
                                    {activeTab === "ingredients" && (
                                        <div className="flex flex-wrap gap-2">
                                            {product.ingredients.map((ing) => (
                                                <span
                                                    key={ing}
                                                    className="px-4 py-2 bg-white rounded-full text-sm text-dark border border-gray-lighter"
                                                >
                                                    {ing}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === "nutrition" && (
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                            {Object.entries(product.nutrition).map(([key, val]) => (
                                                <div
                                                    key={key}
                                                    className="bg-white p-4 rounded-xl text-center"
                                                >
                                                    <p className="text-lg font-bold text-orange">{val}</p>
                                                    <p className="text-xs text-gray capitalize mt-1">{key}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === "reviews" && (
                                        <div className="space-y-4">
                                            {product.reviews.map((review, i) => (
                                                <div key={i} className="bg-white p-5 rounded-xl">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white font-bold">
                                                                {review.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-dark text-sm">
                                                                    {review.name}
                                                                </p>
                                                                <p className="text-xs text-gray">{review.date}</p>
                                                            </div>
                                                        </div>
                                                        <div className="stars flex items-center">
                                                            {Array.from({ length: 5 }).map((_, j) => (
                                                                <FiStar
                                                                    key={j}
                                                                    size={14}
                                                                    className={
                                                                        j < review.rating
                                                                            ? "fill-yellow text-yellow"
                                                                            : "text-gray-lighter"
                                                                    }
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-gray leading-relaxed">
                                                        {review.comment}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    {related.length > 0 && (
                        <div className="mt-20">
                            <h2 className="section-title text-center mb-8">
                                You Might Also Like
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {related.map((p) => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
