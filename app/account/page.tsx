"use client";
// ============================================================
// Account Page — Profile, Order History, Addresses
// ============================================================

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/store/store";
import { FiUser, FiPackage, FiMapPin, FiLogOut } from "react-icons/fi";
import { useState } from "react";

export default function AccountPage() {
    const router = useRouter();
    const isLoggedIn = useStore((s) => s.isLoggedIn);
    const user = useStore((s) => s.user);
    const orders = useStore((s) => s.orders);
    const logout = useStore((s) => s.logout);

    const [activeTab, setActiveTab] = useState<"profile" | "orders" | "addresses">("profile");

    if (!isLoggedIn || !user) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream">
                <p className="text-6xl mb-4">🔒</p>
                <h1 className="font-heading text-2xl font-bold mb-2">Please Login</h1>
                <p className="text-gray mb-6">You must be logged in to view your account.</p>
                <Link href="/login" className="btn-primary">Login</Link>
            </div>
        );
    }

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    const tabs = [
        { key: "profile" as const, label: "Profile", icon: <FiUser /> },
        { key: "orders" as const, label: "Orders", icon: <FiPackage /> },
        { key: "addresses" as const, label: "Addresses", icon: <FiMapPin /> },
    ];

    return (
        <>
            <section className="bg-dark py-16 px-6 text-center">
                <span className="section-subtitle text-orange-light">My Account</span>
                <h1 className="font-heading text-4xl font-bold text-white mt-3">
                    Welcome, <span className="text-orange">{user.name}</span>
                </h1>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <p className="text-center font-semibold text-dark">{user.name}</p>
                                <p className="text-center text-sm text-gray mb-6">{user.email}</p>

                                <nav className="space-y-1">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.key}
                                            onClick={() => setActiveTab(tab.key)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.key
                                                    ? "bg-orange text-white"
                                                    : "text-gray hover:bg-orange/10 hover:text-orange"
                                                }`}
                                        >
                                            {tab.icon} {tab.label}
                                        </button>
                                    ))}
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red hover:bg-red/10 transition-all mt-4"
                                    >
                                        <FiLogOut /> Logout
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3">
                            {activeTab === "profile" && (
                                <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-in">
                                    <h2 className="font-heading text-2xl font-bold mb-6">Profile Details</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-dark">Name</label>
                                            <p className="mt-1 px-4 py-3 bg-cream rounded-xl">{user.name}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-dark">Email</label>
                                            <p className="mt-1 px-4 py-3 bg-cream rounded-xl">{user.email}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-dark">Phone</label>
                                            <p className="mt-1 px-4 py-3 bg-cream rounded-xl">{user.phone || "Not set"}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-dark">Member Since</label>
                                            <p className="mt-1 px-4 py-3 bg-cream rounded-xl">2025</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "orders" && (
                                <div className="animate-fade-in">
                                    <h2 className="font-heading text-2xl font-bold mb-6">Order History</h2>
                                    {orders.length === 0 ? (
                                        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                                            <p className="text-5xl mb-4">📦</p>
                                            <p className="text-lg font-semibold text-dark mb-2">No orders yet</p>
                                            <p className="text-gray mb-6">Your order history will appear here.</p>
                                            <Link href="/menu" className="btn-primary">Start Ordering</Link>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {orders.map((order) => (
                                                <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm">
                                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                                        <div>
                                                            <p className="font-bold text-dark">{order.id}</p>
                                                            <p className="text-sm text-gray">{new Date(order.date).toLocaleDateString()}</p>
                                                        </div>
                                                        <span className={`px-4 py-1 rounded-full text-sm font-medium ${order.status === "confirmed" ? "bg-green/10 text-green" :
                                                                order.status === "preparing" ? "bg-orange/10 text-orange" :
                                                                    "bg-blue-100 text-blue-600"
                                                            }`}>
                                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-gray space-y-1">
                                                        {order.items.map((item, i) => (
                                                            <p key={i}>{item.name} × {item.quantity} ({item.size})</p>
                                                        ))}
                                                    </div>
                                                    <div className="mt-3 pt-3 border-t border-gray-lighter flex justify-between">
                                                        <span className="text-sm text-gray">Total</span>
                                                        <span className="font-bold text-orange">${order.total.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === "addresses" && (
                                <div className="animate-fade-in">
                                    <h2 className="font-heading text-2xl font-bold mb-6">Saved Addresses</h2>
                                    {user.addresses.length === 0 ? (
                                        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                                            <p className="text-5xl mb-4">📍</p>
                                            <p className="text-lg font-semibold text-dark mb-2">No saved addresses</p>
                                            <p className="text-gray">Addresses will be saved from your orders.</p>
                                        </div>
                                    ) : (
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {user.addresses.map((addr, i) => (
                                                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                                                    <FiMapPin className="text-orange mb-2" />
                                                    <p className="text-dark">{addr}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
