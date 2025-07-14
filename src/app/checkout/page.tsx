// File: src/app/checkout/page.tsx
"use client";

import { useCartStore, cartSubtotal } from "@/lib/store";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Info,
  Package,
  CreditCard,
  ShoppingCart,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";

export default function CheckoutPage() {
  const { data: products, isLoading, isError } = useProducts();
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Something went wrong
          </h2>
          <p className="text-slate-600">
            Unable to load products. Please try again.
          </p>
        </div>
      </div>
    );
  }

  const subtotal = cartSubtotal(useCartStore.getState(), products || []);
  const shipping = 5.99;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      clearCart();
      router.push("/checkout-success");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href="/cart" className="hover:text-primary transition-colors">
              Cart
            </Link>
            <span>→</span>
            <span className="text-slate-800 font-medium">Checkout</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Checkout
          </h1>
          <p className="text-slate-600">
            Review your order and complete your purchase
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Order Summary
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {items.length} {items.length === 1 ? "item" : "items"} in your
                  cart
                </p>
              </div>

              <div className="p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800 mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Add some items to your cart to continue
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Browse Products
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => {
                      const product = products!.find((p) => p.id === item.id);
                      return (
                        product && (
                          <div
                            key={item.id}
                            className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                          >
                            <div className="relative">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                              />
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center font-medium">
                                {item.quantity}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-slate-800 truncate">
                                {product.name}
                              </h3>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-slate-600 text-sm">
                                  ${product.price.toFixed(2)} × {item.quantity}
                                </span>
                                <span className="font-semibold text-slate-800">
                                  ${(product.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}

                    {/* Price Breakdown */}
                    <div className="border-t border-slate-200 pt-4 mt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-slate-600">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Shipping</span>
                          <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                          <span className="text-lg font-semibold text-slate-800">
                            Total
                          </span>
                          <span className="text-2xl font-bold text-slate-800">
                            ${total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-primary" />
                Payment Information
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-800">
                  <Info className="w-5 h-5" />
                  <span className="font-medium">Demo Mode</span>
                </div>
                <p className="text-amber-700 mt-1">
                  This is a demonstration checkout. No payment will be
                  processed.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-6">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-800">
                  Complete Order
                </h2>
              </div>
              <div className="p-6">
                <button
                  onClick={handlePlaceOrder}
                  disabled={items.length === 0 || isPlacingOrder}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPlacingOrder ? "Placing Order..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
