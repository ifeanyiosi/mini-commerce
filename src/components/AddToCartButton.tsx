// File: src/app/product/[slug]/AddToCartButton.tsx
"use client";

import { useCartStore } from "@/lib/store";
import { toast } from "sonner";
import { useState } from "react";
import { Button } from "./ui/button";
import { BaggageClaim } from "lucide-react";

export default function AddToCartButton({
  productId,
  name,
}: {
  productId: number;
  name: string;
}) {
  const addItem = useCartStore((state) => state.addItem);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClick = async () => {
    setIsLoading(true);

    // Simulate a brief loading state for better UX
    await new Promise((resolve) => setTimeout(resolve, 300));

    for (let i = 0; i < quantity; i++) {
      addItem(productId);
    }

    toast.success(
      `${quantity > 1 ? `${quantity}x ` : ""}${name} added to cart!`,
      {
        duration: 3000,
        style: {
          background: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          border: "1px solid hsl(var(--primary))",
        },
      }
    );

    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <span className="text-foreground font-semibold">Quantity:</span>
        <div className="flex items-center bg-background border border-border/20 rounded-xl overflow-hidden">
          <Button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-foreground hover:bg-muted transition-colors border-r border-border/20"
            disabled={quantity <= 1}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </Button>
          <span className="px-6 py-2 text-foreground font-semibold min-w-[3rem] text-center">
            {quantity}
          </span>
          <Button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-foreground hover:bg-muted transition-colors border-l border-border/20"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleClick}
        disabled={isLoading}
        className="w-full relative overflow-hidden group bg-primary text-primary-foreground py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Button content */}
        <div className="relative flex items-center justify-center space-x-3">
          {isLoading ? (
            <>
              <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
              <span>Adding to Cart...</span>
            </>
          ) : (
            <>
            <BaggageClaim />
              <span>Add to Cart</span>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
            </>
          )}
        </div>

        {/* Ripple effect on click */}
        <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-150">
          <div className="absolute inset-0 bg-white/10 rounded-xl animate-ping"></div>
        </div>
      </Button>

      {/* Additional info */}
      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Free shipping on orders over $50</span>
        </div>
        <span>•</span>
        <div className="flex items-center space-x-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>Secure checkout</span>
        </div>
      </div>
    </div>
  );
}
