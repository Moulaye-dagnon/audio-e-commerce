import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { LuShoppingCart } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

import MenuItemCard from "../menuItemCard/MenuItemCard";
import icon_headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import icon_earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import icon_speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import { useState } from "react";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { OpenCartAction } from "../../redux/Cart/CartSlice";

function HeaderMenuComponent() {
  const TotalCart = useAppSelector((state) => state.cart.carts);
  const dispatch = useAppDispatch();

  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenu = () => setOpenMenu((c: boolean) => !c);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        {
          "max-lg:bg-primary-black/35  max-lg:inset-0 ": openMenu == true,
        },
        " fixed inset-x-0 top-0 z-30   "
      )}
    >
      <div className=" flex w-full items-center justify-between  border-b border-primary-white/50 bg-primary-black px-6 py-9 font-bold text-primary-white md:px-10 lg:px-40">
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setOpenMenu((c) => !c)}
          className="w-4 lg:hidden"
        >
          {openMenu ? (
            <IoCloseOutline size={"100%"} color="#fff" />
          ) : (
            <LuMenu size={"100%"} color="#fff" />
          )}
        </motion.div>

        <div>
          <NavLink to={"/"}>AudioPhile</NavLink>
        </div>

        <div className="hidden lg:block">
          <ul className="flex justify-between gap-x-8.5">
            <li className="hover:text-primary-orange">
              <NavLink to={"/headphone"}>Casque</NavLink>
            </li>
            <li className="hover:text-primary-orange">
              <NavLink to={"/speaker"}>Haut parleur</NavLink>
            </li>
            <li className="hover:text-primary-orange">
              <NavLink to={"/earphone"}>Écouteurs</NavLink>
            </li>
          </ul>
        </div>
        <motion.div
          onClick={() => dispatch(OpenCartAction())}
          initial={{
            rotate: 360,
          }}
          // animate={{ rotate: 360 }}
          whileInView={{
            rotate: 0,
          }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <LuShoppingCart />
          {TotalCart.length > 0 && (
            <span className=" absolute  -top-4 right-0 w-5 rounded-full bg-primary-orange text-center text-[10px] text-primary-white  ">
              {TotalCart.length}
            </span>
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full items-center justify-between gap-x-2.5 rounded-lg bg-white px-6 py-3 md:flex md:px-10 lg:hidden"
          >
            <MenuItemCard
              title="Casque"
              imgScr={icon_headphone}
              url="/headphone"
              handleClick={handleClickMenu}
            />
            <MenuItemCard
              title="Haut parleur"
              imgScr={icon_speaker}
              url="/speaker"
              handleClick={handleClickMenu}
            />
            <MenuItemCard
              title="Écouteurs"
              imgScr={icon_earphone}
              url="earphone"
              handleClick={handleClickMenu}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default HeaderMenuComponent;
