// components/product/ProductDetails.tsx
"use client";
import Image from "next/image";


import AddToCartButton from "./AddToCartButton";
import ProductFeatures from "./ProductFeatures";
import { Product } from "@/app/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            <div className="relative bg-card border border-border/20 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-gradient-to-r from-accent to-primary text-accent-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg animate-pulse">
                ⚡ Best Seller
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-background/90 backdrop-blur-sm border border-border/20 text-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full font-semibold shadow-lg text-xs md:text-sm">
                🚚 Free Shipping
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight bg-gradient-to-r from-foreground to-primary bg-clip-text">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-muted-foreground">(4.9)</span>
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">247 reviews</span>
                <span className="text-primary">•</span>
                <span className="text-accent font-semibold">In Stock</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-3xl md:text-5xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg md:text-xl text-muted-foreground line-through">
                  ${(product.price * 1.3).toFixed(2)}
                </span>
                <div className="bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-bold">
                  Save 23%
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                💳 4 interest-free payments of{" "}
                <span className="font-semibold text-foreground">
                  ${(product.price / 4).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Product Details
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <ProductFeatures />

            {/* Add to Cart */}
            <div className="bg-card border border-border/20 rounded-2xl p-6 space-y-4">
              <AddToCartButton product={product} />
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-background border border-border/20 text-foreground py-3 px-6 rounded-xl font-semibold hover:bg-muted transition hover:scale-105">
                  Add to Wishlist
                </button>
                <button className="flex-1 bg-background border border-border/20 text-foreground py-3 px-6 rounded-xl font-semibold hover:bg-muted transition hover:scale-105">
                  Share Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
