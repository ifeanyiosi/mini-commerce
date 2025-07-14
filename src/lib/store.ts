// File: src/lib/store.ts
import { Product } from '@/app/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartItem = {
  id: number
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (id: number) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (id) => set((state) => {
        const existingItem = state.items.find(item => item.id === id)
        return {
          items: existingItem 
            ? state.items.map(item => 
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
              )
            : [...state.items, { id, quantity: 1 }]
        }
      }),
      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),
      updateQuantity: (id, quantity) => set((state) => ({
        items: quantity > 0 
          ? state.items.map(item => 
              item.id === id ? { ...item, quantity } : item
            )
          : state.items.filter(item => item.id !== id)
      })),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'mini-commerce-cart' }
  )
)

export const cartTotalItems = (state: CartState) => 
  state.items.reduce((total, item) => total + item.quantity, 0)

export const cartSubtotal = (state: CartState, products: Product[]) => 
  state.items.reduce((total, item) => {
    const product = products.find(p => p.id === item.id)
    return total + (product ? product.price * item.quantity : 0)
  }, 0)