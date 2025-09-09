interface MenuItemCardProps {
  title: string;
  imgScr: string;
  url: string;
  handleClick?: MouseEventHandler<HTMLElement>;
}
import type { MouseEventHandler } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router";
import { motion } from "motion/react";
function MenuItemCard({ title, imgScr, url, handleClick }: MenuItemCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.7 }}
      className=" relative mx-auto  my-16 flex w-full max-w-87.5   flex-col items-center justify-between rounded-sm bg-tertiaire-white pt-20.5 pb-5.5 first:max-md:mt-10 last:max-md:mb-10 lg:my-0  "
    >
      <h2 className="mb-4 text-center text-[15px] font-bold">{title}</h2>
      <div className=" absolute -top-1/5 left-1/2 w-30 -translate-x-1/2  md:w-36">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          src={imgScr}
          alt=""
        />
      </div>
      <button className=" flex items-center justify-center gap-x-2 hover:text-primary-orange">
        <NavLink onClick={handleClick} to={url}>
          Voir
        </NavLink>
        <span>
          <IoIosArrowForward color="#d87d4a" />
        </span>
      </button>
    </motion.div>
  );
}

export default MenuItemCard;
