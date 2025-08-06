import clsx from "clsx";
import type { CSSProperties, MouseEventHandler } from "react";
import { NavLink } from "react-router";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  name: string;
  style?: CSSProperties;
  color: "orange" | "black";
  url?: string;
}
export default function ButtonComponent({
  type,
  color,
  handleClick,
  name,
  style = {},
  url,
}: ButtonProps) {
  if (url)
    return (
      <NavLink
        style={style}
        to={url}
        className={clsx(
          {
            "bg-primary-orange border border-primary-orange text-primary-white hover:bg-secondary-orange  ":
              color == "orange",
            " bg-primary-white border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white ":
              color == "black",
          },
          "px-8 py-4 inline-block cursor-pointer "
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
      className={clsx(
        {
          "bg-primary-orange border border-primary-orange text-primary-white hover:bg-secondary-orange  ":
            color == "orange",
          " bg-primary-white border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white ":
            color == "black",
        },
        "px-8 py-4 cursor-pointer "
      )}
    >
      {name}
    </button>
  );
}
