import { create } from "zustand";
import type { CartItem } from "../../Types/cart.type";
import { addToCart, deleteToCart } from "./cart.utils";

interface CartStore {
  carts: CartItem[];
  addToCart: (item: CartItem) => void;
  deleteToCart: (id: string) => void;
}

export const useStoreCart = create<CartStore>((set) => ({
  carts: [],
  addToCart: (item: CartItem) =>
    set((state) => ({ carts: addToCart(state.carts, item) })),

  deleteToCart: (itemId: string) =>
    set((state) => ({ carts: deleteToCart(state.carts, itemId) })),
}));
