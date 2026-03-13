"use client";
// ============================================================
// Zustand store for cart and auth state management.
// Persisted to localStorage via zustand/middleware.
// ============================================================

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/data/products";

// --------------- CART ---------------

export interface CartItem {
    productId: string;
    name: string;
    image: string;
    size: string;
    price: number;          // price for chosen size
    addOns: string[];
    addOnsTotal: number;
    quantity: number;
}

export interface OrderRecord {
    id: string;
    items: CartItem[];
    subtotal: number;
    discount: number;
    total: number;
    date: string;
    status: "confirmed" | "preparing" | "delivered";
    address: string;
}

export interface UserProfile {
    name: string;
    email: string;
    phone: string;
    addresses: string[];
}

interface StoreState {
    // ----- Cart -----
    cart: CartItem[];
    couponCode: string;
    discount: number;
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: string, size: string) => void;
    updateQuantity: (productId: string, size: string, quantity: number) => void;
    applyCoupon: (code: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    getCartCount: () => number;

    // ----- Auth -----
    isLoggedIn: boolean;
    user: UserProfile | null;
    orders: OrderRecord[];
    login: (email: string, password: string) => boolean;
    register: (name: string, email: string, password: string) => boolean;
    logout: () => void;
    placeOrder: (address: string) => string;
}

// Simple coupon map
const COUPONS: Record<string, number> = {
    PIZZA10: 10,
    WELCOME20: 20,
    FEAST15: 15,
};

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            // ----- Cart State -----
            cart: [],
            couponCode: "",
            discount: 0,

            addToCart: (item) =>
                set((state) => {
                    const existing = state.cart.find(
                        (c) => c.productId === item.productId && c.size === item.size
                    );
                    if (existing) {
                        return {
                            cart: state.cart.map((c) =>
                                c.productId === item.productId && c.size === item.size
                                    ? { ...c, quantity: c.quantity + item.quantity }
                                    : c
                            ),
                        };
                    }
                    return { cart: [...state.cart, item] };
                }),

            removeFromCart: (productId, size) =>
                set((state) => ({
                    cart: state.cart.filter(
                        (c) => !(c.productId === productId && c.size === size)
                    ),
                })),

            updateQuantity: (productId, size, quantity) =>
                set((state) => ({
                    cart:
                        quantity <= 0
                            ? state.cart.filter(
                                (c) => !(c.productId === productId && c.size === size)
                            )
                            : state.cart.map((c) =>
                                c.productId === productId && c.size === size
                                    ? { ...c, quantity }
                                    : c
                            ),
                })),

            applyCoupon: (code) => {
                const upper = code.toUpperCase();
                const disc = COUPONS[upper];
                if (disc) {
                    set({ couponCode: upper, discount: disc });
                } else {
                    set({ couponCode: "", discount: 0 });
                }
            },

            clearCart: () => set({ cart: [], couponCode: "", discount: 0 }),

            getCartTotal: () => {
                const state = get();
                const subtotal = state.cart.reduce(
                    (sum, item) => sum + (item.price + item.addOnsTotal) * item.quantity,
                    0
                );
                return subtotal - (subtotal * state.discount) / 100;
            },

            getCartCount: () => {
                return get().cart.reduce((sum, item) => sum + item.quantity, 0);
            },

            // ----- Auth State -----
            isLoggedIn: false,
            user: null,
            orders: [],

            login: (email, _password) => {
                // Simulated login — always succeeds
                set({
                    isLoggedIn: true,
                    user: {
                        name: email.split("@")[0],
                        email,
                        phone: "",
                        addresses: [],
                    },
                });
                return true;
            },

            register: (name, email, _password) => {
                set({
                    isLoggedIn: true,
                    user: { name, email, phone: "", addresses: [] },
                });
                return true;
            },

            logout: () => set({ isLoggedIn: false, user: null }),

            placeOrder: (address) => {
                const state = get();
                const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
                const subtotal = state.cart.reduce(
                    (sum, item) => sum + (item.price + item.addOnsTotal) * item.quantity,
                    0
                );
                const total = subtotal - (subtotal * state.discount) / 100;

                const order: OrderRecord = {
                    id: orderId,
                    items: [...state.cart],
                    subtotal,
                    discount: state.discount,
                    total,
                    date: new Date().toISOString(),
                    status: "confirmed",
                    address,
                };

                set((s) => ({
                    orders: [order, ...s.orders],
                    cart: [],
                    couponCode: "",
                    discount: 0,
                }));

                return orderId;
            },
        }),
        {
            name: "pizza-store",
        }
    )
);
