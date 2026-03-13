"use client";
// ============================================================
// Checkout Page — Customer form, delivery/pickup,
// order summary, payment method, and place order.
// ============================================================

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/store/store";
import { FiArrowLeft, FiTruck, FiHome, FiCreditCard, FiDollarSign } from "react-icons/fi";

export default function CheckoutPage() {
    const router = useRouter();
    const cart = useStore((s) => s.cart);
    const discount = useStore((s) => s.discount);
    const couponCode = useStore((s) => s.couponCode);
    const placeOrder = useStore((s) => s.placeOrder);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        notes: "",
    });
    const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
    const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const subtotal = cart.reduce(
        (sum, item) => sum + (item.price + item.addOnsTotal) * item.quantity,
        0
    );
    const discountAmount = (subtotal * discount) / 100;
    const deliveryFee = deliveryMethod === "delivery" ? (subtotal >= 20 ? 0 : 3.99) : 0;
    const total = subtotal - discountAmount + deliveryFee;

    const validateForm = () => {
        const errs: Record<string, string> = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email.trim()) errs.email = "Email is required";
        if (!form.phone.trim()) errs.phone = "Phone is required";
        if (deliveryMethod === "delivery") {
            if (!form.address.trim()) errs.address = "Address is required";
            if (!form.city.trim()) errs.city = "City is required";
            if (!form.zip.trim()) errs.zip = "ZIP code is required";
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        const address = deliveryMethod === "delivery"
            ? `${form.address}, ${form.city} ${form.zip}`
            : "Pickup";
        const orderId = placeOrder(address);
        router.push(`/order-confirmation?id=${orderId}`);
    };

    const updateField = (field: string, value: string) => {
        setForm((f) => ({ ...f, [field]: value }));
        if (errors[field]) {
            setErrors((e) => ({ ...e, [field]: "" }));
        }
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream">
                <div className="text-6xl mb-4">🛒</div>
                <h1 className="font-heading text-2xl font-bold mb-2">Cart is empty</h1>
                <p className="text-gray mb-6">Add items to your cart before checking out.</p>
                <Link href="/menu" className="btn-primary">Browse Menu</Link>
            </div>
        );
    }

    const inputClass = (field: string) =>
        `w-full px-4 py-3 rounded-xl border-2 ${errors[field] ? "border-red" : "border-gray-lighter"
        } focus:border-orange focus:outline-none text-sm`;

    return (
        <>
            {/* Hero */}
            <section className="bg-dark py-16 px-6 text-center">
                <span className="section-subtitle text-orange-light">Checkout</span>
                <h1 className="font-heading text-4xl font-bold text-white mt-3">
                    Complete Your Order
                </h1>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <Link href="/cart" className="flex items-center gap-2 text-gray hover:text-orange transition-colors mb-8">
                        <FiArrowLeft /> Back to Cart
                    </Link>

                    <form onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Left — Form */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Customer Details */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <h2 className="font-heading text-xl font-bold text-dark mb-6">
                                        Customer Details
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-1">Full Name *</label>
                                            <input
                                                type="text" value={form.name}
                                                onChange={(e) => updateField("name", e.target.value)}
                                                className={inputClass("name")}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <p className="text-red text-xs mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-1">Email *</label>
                                            <input
                                                type="email" value={form.email}
                                                onChange={(e) => updateField("email", e.target.value)}
                                                className={inputClass("email")}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <p className="text-red text-xs mt-1">{errors.email}</p>}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-dark mb-1">Phone *</label>
                                            <input
                                                type="tel" value={form.phone}
                                                onChange={(e) => updateField("phone", e.target.value)}
                                                className={inputClass("phone")}
                                                placeholder="+1 234 567 8900"
                                            />
                                            {errors.phone && <p className="text-red text-xs mt-1">{errors.phone}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Delivery Method */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <h2 className="font-heading text-xl font-bold text-dark mb-6">
                                        Delivery Method
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setDeliveryMethod("delivery")}
                                            className={`p-5 rounded-xl border-2 flex items-center gap-4 transition-all ${deliveryMethod === "delivery"
                                                    ? "border-orange bg-orange/5"
                                                    : "border-gray-lighter hover:border-orange"
                                                }`}
                                        >
                                            <FiTruck size={24} className={deliveryMethod === "delivery" ? "text-orange" : "text-gray"} />
                                            <div className="text-left">
                                                <p className="font-semibold text-dark">Delivery</p>
                                                <p className="text-xs text-gray">Delivered to your door</p>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setDeliveryMethod("pickup")}
                                            className={`p-5 rounded-xl border-2 flex items-center gap-4 transition-all ${deliveryMethod === "pickup"
                                                    ? "border-orange bg-orange/5"
                                                    : "border-gray-lighter hover:border-orange"
                                                }`}
                                        >
                                            <FiHome size={24} className={deliveryMethod === "pickup" ? "text-orange" : "text-gray"} />
                                            <div className="text-left">
                                                <p className="font-semibold text-dark">Pickup</p>
                                                <p className="text-xs text-gray">Collect from our store</p>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Address fields (delivery only) */}
                                    {deliveryMethod === "delivery" && (
                                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-dark mb-1">Address *</label>
                                                <input
                                                    type="text" value={form.address}
                                                    onChange={(e) => updateField("address", e.target.value)}
                                                    className={inputClass("address")}
                                                    placeholder="123 Main Street, Apt 4"
                                                />
                                                {errors.address && <p className="text-red text-xs mt-1">{errors.address}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-1">City *</label>
                                                <input
                                                    type="text" value={form.city}
                                                    onChange={(e) => updateField("city", e.target.value)}
                                                    className={inputClass("city")}
                                                    placeholder="New York"
                                                />
                                                {errors.city && <p className="text-red text-xs mt-1">{errors.city}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-1">ZIP Code *</label>
                                                <input
                                                    type="text" value={form.zip}
                                                    onChange={(e) => updateField("zip", e.target.value)}
                                                    className={inputClass("zip")}
                                                    placeholder="10013"
                                                />
                                                {errors.zip && <p className="text-red text-xs mt-1">{errors.zip}</p>}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Payment Method */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <h2 className="font-heading text-xl font-bold text-dark mb-6">
                                        Payment Method
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("cod")}
                                            className={`p-5 rounded-xl border-2 flex items-center gap-4 transition-all ${paymentMethod === "cod"
                                                    ? "border-orange bg-orange/5"
                                                    : "border-gray-lighter hover:border-orange"
                                                }`}
                                        >
                                            <FiDollarSign size={24} className={paymentMethod === "cod" ? "text-orange" : "text-gray"} />
                                            <div className="text-left">
                                                <p className="font-semibold text-dark">Cash on Delivery</p>
                                                <p className="text-xs text-gray">Pay when you receive</p>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("card")}
                                            className={`p-5 rounded-xl border-2 flex items-center gap-4 transition-all ${paymentMethod === "card"
                                                    ? "border-orange bg-orange/5"
                                                    : "border-gray-lighter hover:border-orange"
                                                }`}
                                        >
                                            <FiCreditCard size={24} className={paymentMethod === "card" ? "text-orange" : "text-gray"} />
                                            <div className="text-left">
                                                <p className="font-semibold text-dark">Credit / Debit Card</p>
                                                <p className="text-xs text-gray">Secure online payment</p>
                                            </div>
                                        </button>
                                    </div>

                                    {paymentMethod === "card" && (
                                        <div className="mt-4 p-4 bg-orange/5 rounded-xl text-center">
                                            <p className="text-sm text-gray">
                                                💳 Card payment is simulated. No real charges will be made.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Special notes */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <h2 className="font-heading text-xl font-bold text-dark mb-4">
                                        Special Instructions
                                    </h2>
                                    <textarea
                                        value={form.notes}
                                        onChange={(e) => updateField("notes", e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none text-sm resize-none"
                                        rows={3}
                                        placeholder="Any special requests? (e.g. extra napkins, ring the bell)"
                                    />
                                </div>
                            </div>

                            {/* Right — Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
                                    <h2 className="font-heading text-xl font-bold text-dark mb-6">
                                        Order Summary
                                    </h2>

                                    {/* Items */}
                                    <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                                        {cart.map((item) => (
                                            <div
                                                key={`${item.productId}-${item.size}`}
                                                className="flex justify-between items-center text-sm"
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium text-dark truncate">{item.name}</p>
                                                    <p className="text-xs text-gray">{item.size} × {item.quantity}</p>
                                                </div>
                                                <p className="font-medium text-dark ml-3">
                                                    ${((item.price + item.addOnsTotal) * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Totals */}
                                    <div className="space-y-2 text-sm border-t border-gray-lighter pt-4">
                                        <div className="flex justify-between text-gray">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        {discount > 0 && (
                                            <div className="flex justify-between text-green">
                                                <span>Discount ({couponCode} {discount}%)</span>
                                                <span>-${discountAmount.toFixed(2)}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-gray">
                                            <span>Delivery</span>
                                            <span>{deliveryFee === 0 ? <span className="text-green">Free</span> : `$${deliveryFee.toFixed(2)}`}</span>
                                        </div>
                                        <div className="border-t border-gray-lighter pt-3 flex justify-between font-bold text-dark text-lg">
                                            <span>Total</span>
                                            <span className="text-orange">${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Place order */}
                                    <button
                                        type="submit"
                                        className="btn-primary w-full text-center mt-6 text-base !py-4"
                                    >
                                        Place Order — ${total.toFixed(2)}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
