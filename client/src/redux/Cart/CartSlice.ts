import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../Types/cart.type";
import {
  addToCart,
  decrementQuantity,
  deleteToCart,
  incrementQuantity,
} from "./Cart.utils";

interface CartStore {
  carts: CartItem[];
  hidden: boolean;
}

const initialState: CartStore = {
  carts: [],
  hidden: true,
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
    OpenCartAction: (state) => {
      state.hidden = false;
    },
    HideCartAction: (state) => {
      state.hidden = true;
    },
    ToggleCardAction: (state) => {
      state.hidden = !state.hidden;
    },
   
  },
});

export const {
  addToCart: addToCartAction,
  deleteToCart: deleteToCartAction,
  incrementQuantityAction,
  decremenentQuantityAction,
  allRemoveAction,
  OpenCartAction,
  HideCartAction,
  ToggleCardAction,
} = CartSlice.actions;

export default CartSlice.reducer;
