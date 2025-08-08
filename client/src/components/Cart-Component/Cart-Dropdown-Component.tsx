import { useNavigate } from "react-router";
import CardItem from "../Card-Item-Component/CardItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import { motion } from "motion/react";
import { allRemoveAction } from "../../redux/Cart/CartSlice";
export function CartDropdown() {
  const TotalCart = useAppSelector((state) => state.cart.carts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className=" absolute top-20 md:top-22 pt-10 bottom-0 inset-x-0 z-10  bg-primary-black/40 backdrop-blur-sm flex md:justify-end md:px-10  "
    >
      <div className=" flex w-[90%] max-w-94.5 mx-auto md:mx-0  h-115  flex-col bg-primary-white rounded-lg p-4 ">
        <div className="mb-4  flex justify-between items-center">
          <h4 className=" text-lg font-bold ">CART ({TotalCart.length})</h4>
          <p
            onClick={() => dispatch(allRemoveAction())}
            className=" underline text-primary-black/50 text-base"
          >
            Tous supprimer
          </p>
        </div>
        {TotalCart.length ? (
          <div className=" mb-4 flex h-72 w-full flex-col overflow-auto">
            {TotalCart.map((item) => (
              <CardItem key={item.id} id={item.id} />
            ))}
          </div>
        ) : (
          <div className="m-auto justify-items-center text-xl">
            Votre panier est vide
          </div>
        )}
        <div className=" flex justify-between items-center mb-6">
          <span className=" uppercase text-base text-primary-black/50">
            {" "}
            Totale
          </span>
          <span className="text-lg font-bold">$10000</span>
        </div>
        <ButtonComponent
          type="button"
          name=" Aller a la caisse"
          color="orange"
        />
      </div>
    </motion.div>
  );
}
