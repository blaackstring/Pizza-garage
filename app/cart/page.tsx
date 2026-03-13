"use client";
// ============================================================
// Cart Page — Item list, quantity controls, coupon code,
// order summary, and checkout CTA.
// ============================================================

import Link from "next/link";
import { useStore } from "@/store/store";
import { FiMinus, FiPlus, FiTrash2, FiArrowRight, FiTag, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";

export default function CartPage() {
    const cart = useStore((s) => s.cart);
    const removeFromCart = useStore((s) => s.removeFromCart);
    const updateQuantity = useStore((s) => s.updateQuantity);
    const applyCoupon = useStore((s) => s.applyCoupon);
    const couponCode = useStore((s) => s.couponCode);
    const discount = useStore((s) => s.discount);
    const getCartTotal = useStore((s) => s.getCartTotal);

    const [couponInput, setCouponInput] = useState(couponCode);
    const [couponError, setCouponError] = useState("");

    const subtotal = cart.reduce(
        (sum, item) => sum + (item.price + item.addOnsTotal) * item.quantity,
        0
    );
    const discountAmount = (subtotal * discount) / 100;
    const deliveryFee = subtotal >= 20 ? 0 : 3.99;
    const total = subtotal - discountAmount + deliveryFee;

    const handleApplyCoupon = () => {
        if (!couponInput.trim()) return;
        applyCoupon(couponInput.trim());
        // Check if the coupon was valid by checking if discount changed
        const disc = useStore.getState().discount;
        if (disc > 0) {
            setCouponError("");
        } else {
            setCouponError("Invalid coupon code. Try PIZZA10, WELCOME20, or FEAST15.");
        }
    };

    const categoryEmoji: Record<string, string> = {
        pizza: "🍕",
        fastfood: "🍔",
        desserts: "🍰",
        drinks: "🥤",
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream px-6">
                <div className="text-8xl mb-6">🛒</div>
                <h1 className="font-heading text-3xl font-bold text-dark mb-3">
                    Your Cart is Empty
                </h1>
                <p className="text-gray text-center max-w-md mb-8">
                    Looks like you haven&apos;t added anything yet. Browse our delicious menu and find something you love!
                </p>
                <Link href="/menu" className="btn-primary text-base !py-4 !px-8">
                    <FiShoppingBag /> Browse Menu
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="bg-dark py-16 px-6 text-center">
                <span className="section-subtitle text-orange-light">Your Cart</span>
                <h1 className="font-heading text-4xl font-bold text-white mt-3">
                    Shopping Cart
                </h1>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={`${item.productId}-${item.size}`}
                                    className="bg-white rounded-2xl p-6 flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {/* Image */}
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-orange-light/20 to-orange/10 flex items-center justify-center text-4xl shrink-0">
                                        🍕
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-heading font-bold text-dark text-lg truncate">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-gray mt-0.5">
                                            Size: {item.size}
                                            {item.addOns.length > 0 && (
                                                <> • Add-ons: {item.addOns.join(", ")}</>
                                            )}
                                        </p>
                                        <p className="text-orange font-bold mt-1">
                                            ${((item.price + item.addOnsTotal) * item.quantity).toFixed(2)}
                                        </p>
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex items-center border-2 border-gray-lighter rounded-full">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.productId, item.size, item.quantity - 1)
                                            }
                                            className="w-9 h-9 flex items-center justify-center text-dark hover:text-orange transition-colors"
                                        >
                                            <FiMinus size={14} />
                                        </button>
                                        <span className="w-8 text-center font-bold text-sm">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.productId, item.size, item.quantity + 1)
                                            }
                                            className="w-9 h-9 flex items-center justify-center text-dark hover:text-orange transition-colors"
                                        >
                                            <FiPlus size={14} />
                                        </button>
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeFromCart(item.productId, item.size)}
                                        className="p-2 text-gray hover:text-red transition-colors"
                                        aria-label="Remove item"
                                    >
                                        <FiTrash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
                                <h2 className="font-heading text-xl font-bold text-dark mb-6">
                                    Order Summary
                                </h2>

                                {/* Coupon */}
                                <div className="mb-6">
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <FiTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" size={16} />
                                            <input
                                                type="text"
                                                value={couponInput}
                                                onChange={(e) => setCouponInput(e.target.value)}
                                                placeholder="Coupon code"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none text-sm"
                                            />
                                        </div>
                                        <button
                                            onClick={handleApplyCoupon}
                                            className="px-5 py-3 bg-dark text-white rounded-xl font-medium text-sm hover:bg-dark-lighter transition-colors"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {couponError && (
                                        <p className="text-red text-xs mt-2">{couponError}</p>
                                    )}
                                    {discount > 0 && (
                                        <p className="text-green text-xs mt-2 font-medium">
                                            ✅ Coupon {couponCode} applied! {discount}% off
                                        </p>
                                    )}
                                </div>

                                {/* Totals */}
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between text-gray">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-green">
                                            <span>Discount ({discount}%)</span>
                                            <span>-${discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-gray">
                                        <span>Delivery</span>
                                        <span>
                                            {deliveryFee === 0 ? (
                                                <span className="text-green font-medium">Free</span>
                                            ) : (
                                                `$${deliveryFee.toFixed(2)}`
                                            )}
                                        </span>
                                    </div>
                                    <div className="border-t border-gray-lighter pt-3 flex justify-between font-bold text-dark text-base">
                                        <span>Total</span>
                                        <span className="text-orange">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Link
                                    href="/checkout"
                                    className="btn-primary w-full text-center mt-6 text-base !py-4"
                                >
                                    Proceed to Checkout <FiArrowRight />
                                </Link>

                                <Link
                                    href="/menu"
                                    className="block text-center text-sm text-gray hover:text-orange transition-colors mt-4"
                                >
                                    ← Continue Shopping
                                </Link>

                                {/* Free delivery note */}
                                {subtotal < 20 && (
                                    <div className="mt-4 p-3 bg-orange/10 rounded-xl text-center">
                                        <p className="text-xs text-orange font-medium">
                                            🚚 Add ${(20 - subtotal).toFixed(2)} more for free delivery!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
