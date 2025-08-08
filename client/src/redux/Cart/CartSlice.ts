import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../Types/cart.type";
import {
  addToCart,
  decrementQuantity,
  deleteToCart,
  incrementQuantity,
} from "../../store/Cart/cart.utils";
import { number } from "motion/react";

interface CartStore {
  carts: CartItem[];
}

const initialState: CartStore = {
  carts: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.carts = addToCart(state.carts, action.payload);
    },
    deleteToCart: (state, action: PayloadAction<string>) => {
      state.carts = deleteToCart(state.carts, action.payload);
    },
    allRemoveAction: (state) => {
      state.carts = [];
    },
    incrementQuantityAction: (state, action: PayloadAction<{ id: string }>) => {
      state.carts = incrementQuantity(state.carts, action.payload.id);
    },
    decremenentQuantityAction: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      state.carts = decrementQuantity(state.carts, action.payload.id);
    },
  },
});

export const {
  addToCart: addToCartAction,
  deleteToCart: deleteToCartAction,
  incrementQuantityAction,
  decremenentQuantityAction,
  allRemoveAction,
} = CartSlice.actions;

export default CartSlice.reducer;
