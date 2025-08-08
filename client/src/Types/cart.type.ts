export type Item = {
  id: string;
  name: string;
  price: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  //quantity?: number;
};
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  quantity: number;
}
