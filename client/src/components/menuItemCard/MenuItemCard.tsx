interface MenuItemCardProps {
  title: string;
  imgScr: string;
  url: string;
  handleClick?: MouseEventHandler<HTMLElement>;
}
import type { MouseEventHandler } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router";

function MenuItemCard({ title, imgScr, url, handleClick }: MenuItemCardProps) {
  return (
    <div className=" max-w-87.5  first:max-md:mt-10 last:max-md:mb-10 my-16 lg:my-0   w-full pt-20.5 pb-5.5 bg-tertiaire-white rounded-sm relative flex justify-between items-center flex-col  ">
      <h2 className="text-[15px] font-bold text-center mb-4">{title}</h2>
      <div className=" w-30 md:w-36 absolute -top-1/5 left-1/2  -translate-x-1/2">
        <img src={imgScr} alt="" />
      </div>
      <button className=" hover:text-primary-orange flex justify-center items-center gap-x-2">
        <NavLink onClick={handleClick} to={url}>
          Voir
        </NavLink>
        <span>
          <IoIosArrowForward color="#d87d4a" />
        </span>
      </button>
    </div>
  );
}

export default MenuItemCard;
