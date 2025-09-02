import CardItem from "../Card-Item-Component/CardItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import { motion } from "motion/react";
import { allRemoveAction, HideCartAction } from "../../redux/Cart/CartSlice";
import { scrollUpFunct } from "../../utils/scrollUpFunct";
export function CartDropdown() {
  const TotalCart = useAppSelector((state) => state.cart.carts);
  const dispatch = useAppDispatch();
  const handlerHideCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) return;
    dispatch(HideCartAction());
    scrollUpFunct();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="   absolute no-doc-scrool   inset-0 pt-32  z-10  bg-primary-black/40 backdrop-blur-sm flex  md:justify-end md:px-10  "
      onClick={(e) => handlerHideCard(e)}
    >
      <div className=" flex w-[90%] max-w-94.5 mx-auto md:mx-0  max-h-100  flex-col bg-primary-white rounded-lg p-4 ">
        <div className="mb-4  flex justify-between items-center">
          <h4 className=" text-lg font-bold ">CART ({TotalCart.length})</h4>
          <p
            onClick={() => dispatch(allRemoveAction())}
            className=" cursor-pointer underline text-primary-black/50 text-base"
          >
            Tous supprimer
          </p>
        </div>
        {TotalCart.length ? (
          <>
            <div className=" mb-4 flex h-72 w-full flex-col overflow-auto">
              {TotalCart.map((item) => (
                <CardItem
                  key={item.id}
                  id={item.id}
                  PageType="cartDropdownComponent"
                />
              ))}
            </div>

            <div className=" flex justify-between items-center mb-6">
              <span className=" uppercase text-base text-primary-black/50">
                Totale
              </span>
              <span className="text-lg font-bold">$10000</span>
            </div>
            <ButtonComponent
              type="button"
              name=" Aller a la caisse"
              color="orange"
              url="/checkout"
              disabled={TotalCart.length === 0}
              handleClickwithUrl={() => dispatch(HideCartAction())}
            />
          </>
        ) : (
          <div className="m-auto justify-items-center text-xl">
            Votre panier est vide
          </div>
        )}
      </div>
    </motion.div>
  );
}
