// File: src/app/CartIcon.tsx
import { cartTotalItems, useCartStore } from "@/lib/store";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function CartIcon() {
  const itemCount = useCartStore(cartTotalItems);

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
