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

function HeaderMenuComponent() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenu = () => setOpenMenu((c: boolean) => !c);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        {
          "max-lg:bg-primary-black/35 absolute max-lg:inset-0":
            openMenu == true,
        },
        " lg:static "
      )}
    >
      <div className=" w-full px-6 md:px-10 lg:px-40  flex justify-between items-center border-b border-primary-white/50 py-9 text-primary-white font-bold bg-primary-black">
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setOpenMenu((c) => !c)}
          className="lg:hidden w-4"
        >
          {openMenu ? (
            <IoCloseOutline size={"100%"} color="#fff" />
          ) : (
            <LuMenu size={"100%"} color="#fff" />
          )}
        </motion.div>

        <div>AudioPhile </div>

        <div className="hidden lg:block">
          <ul className="flex justify-between gap-x-8.5">
            <li className="hover:text-primary-orange">
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
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
          initial={{
            rotate: 360,
          }}
          // animate={{ rotate: 360 }}
          whileInView={{
            rotate: 0,
          }}
          transition={{ duration: 1 }}
        >
          <LuShoppingCart />
        </motion.div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden rounded-lg bg-white w-full px-6 md:px-10 py-3 md:flex justify-between items-center gap-x-2.5"
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
