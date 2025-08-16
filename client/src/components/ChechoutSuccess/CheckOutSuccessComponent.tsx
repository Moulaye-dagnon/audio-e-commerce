import ButtonComponent from "../buttonComponent/ButtonComponent";
import { useAppSelector } from "../../redux/hooks";
import CardItem from "../Card-Item-Component/CardItem";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
function CheckOutSuccessComponent() {
  const TotalCart = useAppSelector((state) => state.cart.carts);
  const [dropdownProduct, setDropdownProduct] = useState(false);

  return (
    <div className=" fixed no-doc-scrool  md:top-0 pt-10 bottom-0 inset-x-0 z-10  bg-primary-black/40 backdrop-blur-sm flex justify-center items-center px-6">
      <div className="bg-primary-white p-8 rounded-lg">
        <div>logo</div>
        <div className=" uppercase font-bold text-2xl mb-4">
          Merci pour votre commande
        </div>
        <div className="text-base text-primary-black/50 mb-6 ">
          Vous recevrez sous peu une confirmation par e-mail.
        </div>
        <div className=" mb-6 flex max-md:flex-col justify-center  rounded-lg">
          <motion.div
            initial={false}
            animate="open"
            transition={{ duration: 0.3 }}
            className=" divide-y divide-primary-black/10 p-6 bg-secondary-white rounded-lg flex flex-col  items-center"
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
            <span
              onClick={() => setDropdownProduct((prev) => !prev)}
              className=" text-center py-3 inline-block font-bold text-sm text-primary-black/50 cursor-pointer"
            >
              et {TotalCart.length - 1} autres article(s)
            </span>
          </motion.div>
          <div className="   flex flex-col   justify-end px-6 py-4 gap-y-2 bg-primary-black">
            <span className="text-primary-white/50">GRAND TOTAL</span>
            <span className="text-primary-white font-bold">1000</span>
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
