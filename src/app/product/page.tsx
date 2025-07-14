// File: src/app/ProductDetail.tsx
"use client";
import { useCartStore } from "@/lib/store";
import { useProducts } from "@/hooks/useProducts";
import { toast } from "sonner";

export default function ProductDetail({ slug }: { slug: string }) {
  const { data: products, isLoading, isError } = useProducts();
  const addItem = useCartStore((state) => state.addItem);

  if (isLoading)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            Loading amazing product...
          </p>
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center p-8 bg-card border border-border/20 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-destructive"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <p className="text-destructive text-lg font-semibold">
            Error loading product
          </p>
        </div>
      </div>
    );

  const product = products?.find((p) => p.slug === slug);

  if (!product)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center p-8 bg-card border border-border/20 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-lg">Product not found</p>
        </div>
      </div>
    );

  const handleAddToCart = () => {
    addItem(product.id);
    toast.success(`${product.name} added to cart!`, {
      description: "Continue shopping or check your cart",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-card border border-border/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700"
                />

                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-primary text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Premium
                </div>

                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border border-border/20 text-foreground px-4 py-2 rounded-full font-bold shadow-lg">
                  Free Shipping
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.8 out of 5)</span>
                  <span className="text-primary font-semibold">
                    127 reviews
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    ${(product.price * 1.25).toFixed(2)}
                  </span>
                  <div className="bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-semibold">
                    -20% OFF
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Free shipping on orders over $50 • 30-day return policy
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  About this product
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-card border border-border/20 rounded-xl">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">
                    Quality Guaranteed
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-card border border-border/20 rounded-xl">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background relative overflow-hidden group"
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <span className="relative flex items-center justify-center space-x-3">
                    <svg
                      className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6-7h.01M19 19a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </span>
                </button>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-card border border-border/20 text-foreground py-3 px-6 rounded-xl font-semibold hover:bg-muted transition-colors duration-300 flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span>Save</span>
                  </button>

                  <button className="flex-1 bg-card border border-border/20 text-foreground py-3 px-6 rounded-xl font-semibold hover:bg-muted transition-colors duration-300 flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
