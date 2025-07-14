"use client";
import { createContext, useContext, ReactNode } from "react";

interface CartContextType {
  items: Array<{ id: string; quantity: number }>;
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cartValue: CartContextType = {
    items: [],
    addItem: (id: string) => {
      console.log("Add item", id);
    },
    removeItem: (id: string) => {
      console.log("Remove item", id);
    },
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
