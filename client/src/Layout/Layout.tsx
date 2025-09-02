import { Outlet, useLocation } from "react-router";

import HeaderMenuComponent from "../components/headerMenu/HeaderMenuComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import CardWithImagePerson from "../components/CardWithImagePerson/CardWithImagePerson";
import { CartDropdown } from "../components/Cart-Component/Cart-Dropdown-Component";
import { AnimatePresence } from "motion/react";
import clsx from "clsx";
import { useAppSelector } from "../redux/hooks";
import MenuWithImages from "../components/MenuWithImages/MenuWithImages";
function Layout() {
  const HideCard = useAppSelector((state) => state.cart.hidden);
  const location = useLocation();

  return (
    <div className=" relative  mx-auto overflow-hidden">
      <HeaderMenuComponent />
      <AnimatePresence>{!HideCard && <CartDropdown />}</AnimatePresence>
      <Outlet />
      <footer
        className={clsx({
          " mt-30 ": location.pathname !== "/checkout",
        })}
      >
        {location.pathname !== "/checkout" && (
          <>
            <MenuWithImages />
            <CardWithImagePerson />
          </>
        )}

        <FooterComponent />
      </footer>
    </div>
  );
}

export default Layout;
