import type { CartItem } from "../Types/cart.type";

export const FinalPriceFunct = (CartItems: CartItem[]) => {
  const Shipping = 50;

  const TotalItemsPrice = CartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const TVA = Math.round(TotalItemsPrice * 0.2);
  const FinalPrice = TotalItemsPrice + Shipping + TVA;
  return { FinalPrice, TVA, TotalItemsPrice };
};
