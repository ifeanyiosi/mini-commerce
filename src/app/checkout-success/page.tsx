// File: src/app/CheckoutSuccess.tsx
"use client";
import { useEffect } from "react";
import { useCartStore } from "@/lib/store";
import Link from "next/link";
import {
  CheckCircle,
  Package,
  Mail,
  ArrowLeft,
  Home,
  Receipt,
} from "lucide-react";

export default function CheckoutSuccess() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    // Clear cart on successful checkout
    clearCart();
  }, [clearCart]);

  const orderId = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Success Animation Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--toast-success-bg)] rounded-full mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-[var(--toast-success-text)]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thank you for your purchase. Your order has been confirmed and is
            being processed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[var(--toast-success-bg)] to-[var(--toast-success-bg)]/50 p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <Receipt className="w-5 h-5 text-[var(--toast-success-text)]" />
              <h2 className="text-xl font-semibold text-foreground">
                Order Confirmation
              </h2>
            </div>
            <div className="bg-card rounded-xl p-4 border-2 border-[var(--toast-success-text)]/30">
              <p className="text-sm text-muted-foreground mb-1">Order ID</p>
              <p className="text-2xl font-bold text-foreground font-mono">
                #{orderId}
              </p>
            </div>
          </div>

          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* What's Next */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  What happens next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Order Processing
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;re preparing your items for shipment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-background text-xs font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Shipping</p>
                      <p className="text-sm text-muted-foreground">
                        Your order will be shipped within 2-3 business days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-background text-xs font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Estimated delivery in 5-7 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Confirmation */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email Confirmation
                </h3>
                <div className="bg-[var(--toast-info-bg)] text-[var(--toast-info-text)] border border-current border-opacity-20 rounded-xl p-4">
                  <p className="text-sm mb-2">
                    A confirmation email has been sent to your registered email
                    address with:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Order details and receipt</li>
                    <li>• Tracking information</li>
                    <li>• Estimated delivery date</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:from-primary/90 hover:to-primary transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Continue Shopping
            </button>
          </Link>

          <Link href="#" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border-2 border-border text-foreground px-8 py-4 rounded-xl font-medium hover:bg-muted hover:border-primary/50 transition-colors flex items-center justify-center gap-2">
              <Package className="w-5 h-5" />
              View My Orders
            </button>
          </Link>
        </div>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
            <h3 className="font-semibold text-foreground mb-3">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions about your order, our support team is
              here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <Receipt className="w-4 h-4" />
                Order FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
