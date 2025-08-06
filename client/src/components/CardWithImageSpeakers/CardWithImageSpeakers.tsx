import clsx from "clsx";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import type { CardWithImageSpeakersPropsType } from "../../Types";

function CardWithImageSpeakers({
  title,
  description,
  srcMobile,
  srcTablet,
  srcDesktop,
  HomePage,
  New,
  Reverse,
  url,
}: CardWithImageSpeakersPropsType) {
  return (
    <div
      className={clsx(
        {
          "bg-primary-orange mb-8 border border-primary-orange text-primary-white":
            HomePage == true,
        },

        " py-14 lg:pb-0   rounded-lg"
      )}
    >
      <div
        className={clsx(
          {
            "lg:flex-row-reverse ": Reverse == true,
            "lg:flex-row": Reverse == undefined,
          },
          "  text-center flex justify-center items-center flex-col  lg:gap-x-28 lg:items-start"
        )}
      >
        <div
          className={clsx({
            "bg-tertiaire-white rounded-lg ": HomePage === false,
          })}
        >
          <picture>
            {srcDesktop && (
              <source
                media="(min-width:1024px )"
                srcSet={srcDesktop}
                sizes=""
              />
            )}
            {srcTablet && (
              <source media="(min-width:768px )" srcSet={srcTablet} sizes="" />
            )}
            <img
              className={clsx(
                {
                  "max-w-32 md:max-w-49 lg:max-w-97": HomePage === true,
                },
                " rounded-lg   "
              )}
              src={srcMobile}
              alt="person for mobile"
            />
          </picture>
        </div>
        <div
          className={clsx(
            {
              "max-w-87": HomePage == true,
              "max-w-[80%]": HomePage == false,
            },
            "  flex flex-col justify-center items-center gap-y-8 mt-8 lg:mt-0 lg:items-start  "
          )}
        >
          {New && (
            <span className=" text-primary-orange text-sm">
              Nouveau produit
            </span>
          )}
          <h3
            className={clsx(
              { "max-w-60": HomePage == true, "max-w-87": HomePage == false },
              " text-center lg:text-left   uppercase text-[28px] md:text-[40px] font-bold  "
            )}
          >
            {title}
          </h3>
          <p className=" opacity-75 lg:text-left">{description}</p>
          <ButtonComponent
            type="button"
            url={url ? url : undefined}
            name="Voir produit"
            color={HomePage ? "black" : "orange"}
          />
        </div>
      </div>
    </div>
  );
}

export default CardWithImageSpeakers;
