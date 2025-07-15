// File: src/components/ProductCard.tsx
import Link from "next/link";
import { Product } from "@/app/types";
import { useCartStore } from "@/lib/store";
import { showSuccessToast } from "@/lib/toastUtils";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product.id);
    showSuccessToast(`${product.name} added to cart!`);
  };

  return (
    <div className="group relative bg-card border border-border/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:rotate-1 backdrop-blur-sm">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

      {/* Floating badge */}
      <div className="absolute top-3 right-3 bg-gradient-to-r from-accent to-primary text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        Hot Deal
      </div>

      <Link href={`/product/${product.slug}`} className="block">
        {/* Image container with overlay effects */}
        <div className="relative overflow-hidden">
          <Image
            height={224}
            width={300}
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Floating price tag */}
          <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm border border-border/20 text-foreground px-3 py-1 rounded-full font-bold text-sm shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            ${product.price.toFixed(2)}
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 relative z-10">
          <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating stars (placeholder) */}
          <div className="flex items-center mb-3">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-muted-foreground text-sm ml-2">(4.5)</span>
          </div>

          {/* Price display */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                $99.99
              </span>
            </div>
            <div className="bg-destructive/10 text-destructive px-2 py-1 rounded-full text-xs font-semibold">
              -20%
            </div>
          </div>
        </div>
      </Link>

      {/* Add to cart button */}
      <div className="p-6 pt-0 relative z-10">
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary  text-primary-foreground py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background relative overflow-hidden group/button"
        >
          {/* Button shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000"></div>

          <span className="relative flex items-center justify-center space-x-2">
            <svg
              className="w-5 h-5 transform group-hover/button:scale-110 transition-transform duration-300"
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
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
    </div>
  );
}
