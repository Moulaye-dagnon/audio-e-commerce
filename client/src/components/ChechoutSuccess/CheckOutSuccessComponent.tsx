import ButtonComponent from "../buttonComponent/ButtonComponent";
import { useAppSelector } from "../../redux/hooks";
import CardItem from "../Card-Item-Component/CardItem";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FinalPriceFunct } from "../../utils/GetFinalPrice";
function CheckOutSuccessComponent() {
  const TotalCart = useAppSelector((state) => state.cart.carts);
  const { FinalPrice } = FinalPriceFunct(TotalCart);

  const [dropdownProduct, setDropdownProduct] = useState(false);

  return (
    <div className=" no-doc-scrool fixed  inset-0 bottom-0 z-10 flex items-center  justify-center bg-primary-black/40 px-6 pt-10 backdrop-blur-sm md:top-0">
      <div className="rounded-lg bg-primary-white p-8">
        <div>logo</div>
        <div className=" mb-4 text-2xl font-bold uppercase">
          Merci pour votre commande
        </div>
        <div className="mb-6 text-base text-primary-black/50 ">
          Vous recevrez sous peu une confirmation par e-mail.
        </div>
        <div className=" mb-6 flex justify-center rounded-lg  max-md:flex-col">
          <motion.div
            initial={false}
            animate="open"
            transition={{ duration: 0.3 }}
            className=" flex flex-col items-center divide-y divide-primary-black/10 rounded-lg bg-secondary-white  p-6"
          >
            <AnimatePresence>
              {dropdownProduct ? (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit={"closed"}
                  variants={{
                    open: {
                      opacity: 1,
                      height: "auto",
                      maxHeight: "288px",
                      overflowY: "auto",
                    },
                    closed: {
                      opacity: 0,
                      height: 0,
                    },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className=" w-full "
                >
                  {TotalCart.map((item) => (
                    <CardItem
                      key={item.id}
                      id={item.id}
                      PageType="checkoutSuccessComponent"
                    />
                  ))}
                </motion.div>
              ) : (
                <CardItem
                  key={TotalCart[0]?.id}
                  id={TotalCart[0]?.id}
                  PageType="checkoutSuccessComponent"
                />
              )}
            </AnimatePresence>
            {TotalCart.length > 1 && (
              <span
                onClick={() => setDropdownProduct((prev) => !prev)}
                className=" inline-block cursor-pointer py-3 text-center text-sm font-bold text-primary-black/50"
              >
                et {TotalCart.length - 1} autres article(s)
              </span>
            )}
          </motion.div>
          <div className="   flex flex-col   justify-center gap-y-2 bg-primary-black px-6 py-4">
            <span className="text-primary-white/50">GRAND TOTAL</span>
            <span className="font-bold text-primary-white">{FinalPrice}</span>
          </div>
        </div>
        <ButtonComponent
          name="Retour à l'accueil"
          url="/"
          color="orange"
          type="button"
        />
      </div>
    </div>
  );
}

export default CheckOutSuccessComponent;
