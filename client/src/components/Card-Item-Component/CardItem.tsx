import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decremenentQuantityAction,
  incrementQuantityAction,
} from "../../redux/Cart/CartSlice";

function CardItem({
  id,
  PageType,
}: {
  id: string;
  PageType:
    | "checkoutPage"
    | "checkoutSuccessComponent"
    | "cartDropdownComponent";
}) {
  const dispatch = useAppDispatch();
  const Item = useAppSelector((state) =>
    state.cart.carts.find((item) => item.id === id)
  );
  const handleChangeQuantity = (action: "increment" | "decrement") => {
    if (action === "increment") dispatch(incrementQuantityAction({ id }));
    if (action === "decrement") dispatch(decremenentQuantityAction({ id }));
  };
  return (
    <div className="my-1 flex h-28 w-full items-center justify-between first:mt-0 last:mb-0">
      <div className="w-20">
        <img src={Item?.image.mobile} alt="" />
      </div>
      <div className=" flex-1  px-4 flex items-start flex-col gap-y-2">
        <div className=" text-base font-bold">{Item?.name.slice(0, 13)}</div>
        <div className="text-sm text-primary-black/50">$ {Item?.price}</div>
      </div>
      {PageType === "cartDropdownComponent" && (
        <div className=" flex-none w-32  bg-tertiaire-white flex justify-between items-center px-3 py-2 gap-x-3">
          <span
            onClick={() => handleChangeQuantity("decrement")}
            className=" opacity-50 cursor-pointer "
          >
            -
          </span>
          <span className=" text-sm"> {Item?.quantity} </span>
          <span
            onClick={() => handleChangeQuantity("increment")}
            className=" opacity-50 cursor-pointer"
          >
            +
          </span>
        </div>
      )}

      {PageType === "checkoutPage" && (
        <div className="  bg-tertiaire-white px-3 py-2 ">
          x<span className=" text-sm"> {Item?.quantity} </span>
        </div>
      )}
    </div>
  );
}

export default CardItem;
