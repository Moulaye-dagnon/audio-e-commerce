import type { CartItem } from "../../Types/cart.type";

export function addToCart(cartItems: CartItem[], newItem: CartItem) {
  console.log("Adding item to cart in function:", newItem.quantity);

  const updatedCart = cartItems.map((item) =>
    item.id === newItem.id
      ? { ...item, quantity: item.quantity + newItem.quantity }
      : item
  );

  const exists = cartItems.some((item) => item.id === newItem.id);

  return exists ? updatedCart : [...cartItems, newItem];
}

export const deleteToCart = (
  CartItems: CartItem[],
  CartItemToRemoveID: string
) => {
  return CartItems.filter((cartItem) => cartItem.id !== CartItemToRemoveID);
};

export const incrementQuantity = (CartItems: CartItem[], id: string) => {
  return CartItems.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
export const decrementQuantity = (CartItems: CartItem[], id: string) => {
  const item = CartItems.find((i) => i.id === id);
  if (item?.quantity == 1) return deleteToCart(CartItems, id);
  return CartItems.map((cartItem) =>
    cartItem.id === item?.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};