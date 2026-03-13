"use client";
// ============================================================
// Login Page
// ============================================================

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/store/store";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export default function LoginPage() {
    const router = useRouter();
    const login = useStore((s) => s.login);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        login(email, password);
        router.push("/account");
    };

    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-cream px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <span className="text-5xl">🍕</span>
                    <h1 className="font-heading text-3xl font-bold text-dark mt-4">
                        Welcome Back
                    </h1>
                    <p className="text-gray mt-2">
                        Login to your PizzaGarage account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
                    {error && (
                        <div className="bg-red/10 text-red text-sm p-3 rounded-xl mb-4">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-dark mb-1">Email</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark mb-1">Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full mt-6 text-base !py-4">
                        Sign In <FiArrowRight />
                    </button>

                    <p className="text-center text-sm text-gray mt-6">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-orange font-semibold hover:underline">
                            Create Account
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}
