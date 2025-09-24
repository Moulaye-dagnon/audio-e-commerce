import clsx from "clsx";
import type { CSSProperties, MouseEventHandler } from "react";
import { NavLink } from "react-router";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  handleClickwithUrl?: MouseEventHandler<HTMLAnchorElement>;
  name: string;
  style?: CSSProperties;
  color: "orange" | "black";
  url?: string;
  disabled?: boolean;
  isAdded?: boolean;
}
export default function ButtonComponent({
  type,
  color,
  handleClick,
  name,
  style = {},
  url,
  handleClickwithUrl,
  disabled,
  isAdded,
}: ButtonProps) {
  if (url)
    return (
      <NavLink
        style={style}
        to={url}
        onClick={handleClickwithUrl}
        className={clsx(
          {
            "  bg-primary-orange border border-primary-orange text-primary-white hover:bg-secondary-orange  ":
              color == "orange",
            " bg-primary-white border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white ":
              color == "black",
            "bg-emerald-200 text-emerald-950": isAdded === true,
          },
          "inline-block cursor-pointer px-8 py-4 text-center "
        )}
      >
        {name}
      </NavLink>
    );
  return (
    <button
      type={type}
      style={style}
      onClick={handleClick}
      disabled={disabled}
      className={clsx(
        {
          "bg-emerald-200 text-emerald-950": isAdded === true,
          "bg-primary-orange border border-primary-orange text-primary-white hover:bg-secondary-orange  ":
            color == "orange",
          " bg-primary-white border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white ":
            color == "black",
        },
        "w-full cursor-pointer px-8 py-4 "
      )}
    >
      {name}
    </button>
  );
}
