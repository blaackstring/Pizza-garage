"use client";
// ============================================================
// Order Confirmation Page — Success screen with order ID,
// summary, and continue shopping CTA.
// Wrapped in Suspense for useSearchParams.
// ============================================================

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useStore } from "@/store/store";
import { FiCheckCircle, FiShoppingBag, FiHome } from "react-icons/fi";

function OrderContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("id") || "UNKNOWN";
    const orders = useStore((s) => s.orders);
    const order = orders.find((o) => o.id === orderId);

    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-cream px-6">
            <div className="text-center max-w-lg animate-fade-in-up">
                <div className="w-24 h-24 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheckCircle className="text-green" size={48} />
                </div>

                <h1 className="font-heading text-4xl font-bold text-dark mb-3">
                    Order Confirmed!
                </h1>
                <p className="text-gray text-lg mb-2">
                    Thank you for your order. Your delicious food is on its way!
                </p>

                <div className="bg-white rounded-2xl p-6 shadow-sm mt-8 mb-6">
                    <p className="text-sm text-gray mb-1">Order Number</p>
                    <p className="text-2xl font-bold text-orange font-heading">{orderId}</p>

                    {order && (
                        <div className="mt-4 space-y-2 text-sm text-left">
                            <div className="flex justify-between text-gray">
                                <span>Items</span>
                                <span>{order.items.length}</span>
                            </div>
                            <div className="flex justify-between text-gray">
                                <span>Delivery to</span>
                                <span className="text-right max-w-[200px]">{order.address}</span>
                            </div>
                            <div className="flex justify-between font-bold text-dark border-t border-gray-lighter pt-2 mt-2">
                                <span>Total Paid</span>
                                <span className="text-orange">${order.total.toFixed(2)}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex justify-center gap-8 mb-8">
                    {["Confirmed", "Preparing", "On the Way"].map((step, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${i === 0 ? "bg-green text-white" : "bg-gray-lighter text-gray"
                                }`}>{i + 1}</div>
                            <span className={`text-xs ${i === 0 ? "text-green font-medium" : "text-gray"}`}>{step}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/menu" className="btn-primary"><FiShoppingBag /> Order Again</Link>
                    <Link href="/" className="btn-secondary"><FiHome /> Go Home</Link>
                </div>

                <p className="text-xs text-gray mt-6">
                    You will receive an email confirmation shortly. Estimated delivery: 25-35 minutes.
                </p>
            </div>
        </section>
    );
}

export default function OrderConfirmationPage() {
    return (
        <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center bg-cream">
                <div className="text-center">
                    <div className="text-6xl animate-float mb-4">📦</div>
                    <p className="text-gray font-medium">Loading order details...</p>
                </div>
            </div>
        }>
            <OrderContent />
        </Suspense>
    );
}
