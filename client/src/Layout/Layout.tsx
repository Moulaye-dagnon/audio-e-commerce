import { Outlet, useLocation } from "react-router";
import icon_headphone from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import icon_earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import icon_speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

import HeaderMenuComponent from "../components/headerMenu/HeaderMenuComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import CardWithImagePerson from "../components/CardWithImagePerson/CardWithImagePerson";
import MenuItemCard from "../components/menuItemCard/MenuItemCard";
import { CartDropdown } from "../components/Cart-Component/Cart-Dropdown-Component";
import { AnimatePresence } from "motion/react";
import clsx from "clsx";
import { useAppSelector } from "../redux/hooks";
function Layout() {
  const HideCard = useAppSelector((state) => state.cart.hidden);
  const location = useLocation();

  return (
    <div className=" relative  mx-auto ">
      <nav id="header">
        <HeaderMenuComponent />
      </nav>
      <AnimatePresence>{!HideCard && <CartDropdown />}</AnimatePresence>
      <Outlet />
      <footer
        className={clsx({
          " mt-30 ": location.pathname !== "/checkout",
        })}
      >
        {location.pathname !== "/checkout" && (
          <>
            <div className="px-6 md:px-10 lg:px-20 xl:px-40 my-16 rounded-lg bg-white w-full py-3 md:flex justify-between items-center gap-x-2.5 lg:gap-x-7.5">
              <MenuItemCard
                title="Casque"
                imgScr={icon_headphone}
                url="/headphone"
                //   handleClick={handleClickMenu}
              />
              <MenuItemCard
                title="Haut parleur"
                imgScr={icon_speaker}
                url="/speaker"
                //   handleClick={handleClickMenu}
              />
              <MenuItemCard
                title="Écouteurs"
                imgScr={icon_earphone}
                url="earphone"
                //   handleClick={handleClickMenu}
              />
            </div>
            <CardWithImagePerson />
          </>
        )}

        <FooterComponent />
      </footer>
    </div>
  );
}

export default Layout;
