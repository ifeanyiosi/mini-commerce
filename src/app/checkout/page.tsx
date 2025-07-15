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
import Image from "next/image";

export default function CheckoutPage() {
  const { data: products, isLoading, isError } = useProducts();
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Something went wrong
          </h2>
          <p className="text-muted-foreground">
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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href="/cart" className="hover:text-primary transition-colors">
              Cart
            </Link>
            <span>→</span>
            <span className="text-foreground font-medium">Checkout</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Checkout
          </h1>
          <p className="text-muted-foreground">
            Review your order and complete your purchase
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Order Summary
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  {items.length} {items.length === 1 ? "item" : "items"} in your
                  cart
                </p>
              </div>

              <div className="p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Add some items to your cart to continue
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
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
                            className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <div className="relative">
                              <Image
                                width={65}
                                height={65}
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                              />
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                                {item.quantity}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-foreground truncate">
                                {product.name}
                              </h3>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-muted-foreground text-sm">
                                  ${product.price.toFixed(2)} × {item.quantity}
                                </span>
                                <span className="font-semibold text-foreground">
                                  ${(product.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}

                    {/* Price Breakdown */}
                    <div className="border-t border-border pt-4 mt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-muted-foreground">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Shipping</span>
                          <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-border">
                          <span className="text-lg font-semibold text-foreground">
                            Total
                          </span>
                          <span className="text-2xl font-bold text-foreground">
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
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-primary" />
                Payment Information
              </h2>
              <div className="bg-[var(--toast-warning-bg)] text-[var(--toast-warning-text)] border border-current border-opacity-20 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  <span className="font-medium">Demo Mode</span>
                </div>
                <p className="mt-1">
                  This is a demonstration checkout. No payment will be
                  processed.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden sticky top-6">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-semibold text-foreground">
                  Complete Order
                </h2>
              </div>
              <div className="p-6">
                <button
                  onClick={handlePlaceOrder}
                  disabled={items.length === 0 || isPlacingOrder}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
