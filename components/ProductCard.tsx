"use client";
// ============================================================
// ProductCard — Reusable card for menu grid and home page.
// Shows image placeholder, name, price, badge, rating, add-to-cart.
// ============================================================

import Link from "next/link";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { Product } from "@/data/products";
import { useStore, CartItem } from "@/store/store";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const addToCart = useStore((s) => s.addToCart);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const item: CartItem = {
            productId: product.id,
            name: product.name,
            image: product.image,
            size: product.sizes[0]?.label || "Regular",
            price: product.price,
            addOns: [],
            addOnsTotal: 0,
            quantity: 1,
        };
        addToCart(item);
    };

    // Category emoji
    const categoryEmoji: Record<string, string> = {
        pizza: "🍕",
        fastfood: "🍔",
        desserts: "🍰",
        drinks: "🥤",
    };

    return (
        <Link href={`/menu/${product.slug}`} className="block">
            <div className="card group cursor-pointer">
                {/* Image area */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
                    <div className="w-full h-full flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                        {categoryEmoji[product.category] || "🍕"}
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.isOnOffer && (
                            <span className="badge-offer">Deal</span>
                        )}
                        {product.isBestSeller && (
                            <span className="bg-dark text-white text-xs font-bold px-3 py-1 rounded-full">
                                Best Seller
                            </span>
                        )}
                    </div>

                    {/* Veg badge */}
                    <div className="absolute top-3 right-3">
                        <span className={product.isVeg ? "badge-veg" : "badge-nonveg"}>
                            {product.isVeg ? "Veg" : "Non-Veg"}
                        </span>
                    </div>

                    {/* Quick add to cart */}
                    <button
                        onClick={handleAddToCart}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-orange text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-dark shadow-lg"
                        aria-label="Add to cart"
                    >
                        <FiShoppingCart size={18} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                        <div className="stars flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FiStar
                                    key={i}
                                    size={14}
                                    className={
                                        i < Math.round(product.averageRating)
                                            ? "fill-yellow text-yellow"
                                            : "text-white/20"
                                    }
                                />
                            ))}
                        </div>
                        <span className="text-xs text-white/50 ml-1">
                            ({product.reviews.length})
                        </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-orange-300 transition-colors mb-1">
                        {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mb-3 line-clamp-2">
                        {product.shortDescription}
                    </p>

                    {/* Price & CTA Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-orange">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-sm text-white/40 line-through">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="text-sm font-semibold text-orange-300 hover:text-orange transition-colors flex items-center gap-1"
                        >
                            <FiShoppingCart size={14} />
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
