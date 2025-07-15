// File: src/app/Cart.tsx
"use client";

import { useProducts } from "@/hooks/useProducts";
import { useCartStore, cartSubtotal } from "@/lib/store";
import Link from "next/link";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cart() {
  const { data: products, isLoading, isError } = useProducts();
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-destructive text-lg mb-2">
            Oops! Something went wrong
          </div>
          <p className="text-muted-foreground">Unable to load your cart</p>
        </div>
      </div>
    );
  }

  const subtotal = cartSubtotal(useCartStore.getState(), products || []);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Your Cart
          </h1>
          <p className="text-muted-foreground">
            {items.length === 0
              ? "Ready to add some sweetness?"
              : `${items.length} item${
                  items.length > 1 ? "s" : ""
                } in your cart`}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground/50" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven&apos;t added any sweet treats yet!
            </p>
            <Link href="/">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl">
                Start Shopping
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const product = products!.find((p) => p.id === item.id);
                return (
                  product && (
                    <div
                      key={item.id}
                      className="group bg-card border border-border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        {/* Product Image */}
                        <div className="flex-shrink-0 self-center">
                          <Image
                            width={100}
                            height={100}
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0 w-full">
                          <h3 className="font-semibold text-lg mb-1 truncate">
                            {product.name}
                          </h3>
                          <p className="text-2xl font-bold text-primary">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex flex-row sm:flex-col gap-3 items-center sm:items-end">
                          <div className="flex items-center bg-muted rounded-full p-1">
                            <Button
                              onClick={() =>
                                updateQuantity(
                                  product.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              className="p-2 hover:bg-background rounded-full"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              onClick={() =>
                                updateQuantity(product.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-background rounded-full"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <Button
                            onClick={() => removeItem(product.id)}
                            className="p-2 text-white hover:text-destructive hover:bg-destructive/10 rounded-full"
                          >
                            <X className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-base">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button asChild>
                  <Link
                    href="/checkout"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                  >
                    Proceed to Checkout
                  </Link>
                </Button>

                <div className="mt-4 text-center">
                  <Link
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    href="/products"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
