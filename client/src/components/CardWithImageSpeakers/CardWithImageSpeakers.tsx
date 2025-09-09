import clsx from "clsx";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import type { CardWithImageSpeakersPropsType } from "../../Types";
import { motion } from "motion/react";
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

        " rounded-lg py-14   lg:pb-0"
      )}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.5 }}
        className={clsx(
          {
            "lg:flex-row-reverse ": Reverse == true,
            "lg:flex-row": Reverse == undefined,
          },
          "  flex flex-col items-center justify-center text-center  lg:items-start lg:gap-x-28"
        )}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
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
        </motion.div>
        <div
          className={clsx(
            {
              "max-w-87": HomePage == true,
              "max-w-[80%]": HomePage == false,
            },
            "  mt-8 flex flex-col items-center justify-center gap-y-8 lg:mt-0 lg:items-start  "
          )}
        >
          {New && (
            <span className=" text-sm text-primary-orange">
              Nouveau produit
            </span>
          )}
          <h3
            className={clsx(
              { "max-w-60": HomePage == true, "max-w-87": HomePage == false },
              " text-center text-[28px]   font-bold uppercase md:text-[40px] lg:text-left  "
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
      </motion.div>
    </div>
  );
}

export default CardWithImageSpeakers;
