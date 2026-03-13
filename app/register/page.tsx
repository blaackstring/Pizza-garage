"use client";
// ============================================================
// Register Page
// ============================================================

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/store/store";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export default function RegisterPage() {
    const router = useRouter();
    const register = useStore((s) => s.register);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        register(name, email, password);
        router.push("/account");
    };

    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-cream px-6 py-12">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <span className="text-5xl">🍕</span>
                    <h1 className="font-heading text-3xl font-bold text-dark mt-4">
                        Create Account
                    </h1>
                    <p className="text-gray mt-2">
                        Join PizzaParlor and start ordering!
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
                            <label className="block text-sm font-medium text-dark mb-1">Full Name</label>
                            <div className="relative">
                                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" />
                                <input
                                    type="text" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark mb-1">Email</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" />
                                <input
                                    type="email" value={email}
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
                                    type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark mb-1">Confirm Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" />
                                <input
                                    type="password" value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-lighter focus:border-orange focus:outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full mt-6 text-base !py-4">
                        Create Account <FiArrowRight />
                    </button>

                    <p className="text-center text-sm text-gray mt-6">
                        Already have an account?{" "}
                        <Link href="/login" className="text-orange font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}
