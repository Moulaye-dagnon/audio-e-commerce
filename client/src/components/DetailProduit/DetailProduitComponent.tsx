import { useEffect, useState } from "react";
import type { headPhoneEarPhoneSpeakerInterfaceDetail } from "../../Types";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import CardWithOnlyImageAndButton from "../CardWithOnlyImageAndButton/CardWithOnlyImageAndButton";
import type { CartItem } from "../../Types/cart.type";
import { CartSlice } from "../../redux/Cart/CartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { motion } from "motion/react";
import { scrollUpFunct } from "../../utils/scrollUpFunct";
function DetailProduitComponent({
  item,
}: {
  item: headPhoneEarPhoneSpeakerInterfaceDetail;
}) {
  
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const handleChangeQuantity = (action: "increment" | "decrement") => {
    if (action === "increment") setQuantity((prev) => prev + 1);
    if (action === "decrement")
      setQuantity((prev) => (prev >= 1 ? prev - 1 : 1));
  };
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const itemToAdd: CartItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: quantity,
    };

    dispatch(CartSlice.actions.addToCart(itemToAdd));
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
    setQuantity(1);
  };
  useEffect(() => {
    scrollUpFunct();
  }, [item]);

  return (
    <div className=" rounded-lg px-6 pt-40 pb-14 md:px-10 lg:px-20  xl:px-40">
      <div className="  flex items-center justify-between gap-x-16 text-center max-md:flex-col   lg:gap-x-28">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 720 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg bg-tertiaire-white  "
        >
          <picture>
            {item?.image.desktop && (
              <source
                media="(min-width:1024px )"
                srcSet={item?.image.desktop}
                sizes=""
              />
            )}
            {item?.image.tablet && (
              <source
                media="(min-width:768px )"
                srcSet={item?.image.tablet}
                sizes=""
              />
            )}
            <img
              className=" rounded-lg object-cover   "
              src={item?.image.mobile}
              alt="produit"
            />
          </picture>
        </motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" mt-8 flex max-w-[80%] flex-col items-center justify-center gap-y-8 md:mt-0 md:items-start   "
        >
          {item?.new && (
            <span className=" text-sm text-primary-orange">
              Nouveau produit
            </span>
          )}
          <h3 className="max-w-87 text-center text-[28px]   font-bold uppercase md:text-left md:text-[40px]  ">
            {item?.name}
          </h3>
          <p className=" opacity-75 md:text-left">{item?.description}</p>

          <span className=" text-lg font-bold "> $ {item?.price}</span>
          <div className="flex items-center justify-center gap-x-4">
            <div className=" flex items-center justify-between gap-x-7 bg-tertiaire-white px-8 py-4">
              <span
                onClick={() => handleChangeQuantity("decrement")}
                className=" cursor-pointer opacity-50 "
              >
                -
              </span>
              <span className=" text-sm"> {quantity} </span>
              <span
                onClick={() => handleChangeQuantity("increment")}
                className=" cursor-pointer opacity-50 "
              >
                +
              </span>
            </div>
            <ButtonComponent
              handleClick={handleAddToCart}
              name={isAdded ? "Ajouté" : "Ajouter"}
              type="button"
              color="orange"
              isAdded={isAdded}
            />
            {isAdded && (
              <motion.div
                className="md bg-gray-light fixed top-0 right-0 z-32 rounded-md  opacity-50 lg:right-15"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  scale: 0.2,
                  transition: {
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <picture>
                  {item?.image.desktop && (
                    <source
                      media="(min-width:1024px )"
                      srcSet={item?.image.desktop}
                      sizes=""
                    />
                  )}
                  {item?.image.tablet && (
                    <source
                      media="(min-width:768px )"
                      srcSet={item?.image.tablet}
                      sizes=""
                    />
                  )}
                  <img
                    src={item?.image.mobile}
                    alt="product image"
                    className="h-35 w-35 md:h-48 lg:h-35"
                  />
                </picture>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <div className=" mt-20 flex max-lg:flex-col max-md:gap-y-20  lg:mt-57 lg:gap-x-35  ">
        <div className="max-w-150">
          <h2 className="mb-8 text-3xl font-bold">CARACTÉRISTIQUES</h2>
          <p className=" text-base opacity-50">{item?.features}</p>
        </div>
        <div className=" md:flex md:gap-x-35 lg:block">
          <h4 className=" mb-6 text-2xl font-bold md:text-3xl">
            Dans la boîte
          </h4>
          <div>
            {item?.includes.map((i, index) => (
              <div key={index} className=" flex items-center gap-x-5 ">
                <span className="text-base text-primary-orange">
                  {i.quantity}x
                </span>
                <span className=" opacity-50">{i.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-28 md:flex md:items-center md:justify-center md:gap-x-5 ">
        <div className=" flex flex-col gap-y-3 max-md:mb-3 md:gap-y-5.5">
          <div>
            <picture>
              {item?.gallery.first && (
                <source
                  media="(min-width:1024px )"
                  srcSet={item?.gallery.first.desktop}
                  sizes=""
                />
              )}
              {item?.gallery.first.tablet && (
                <source
                  media="(min-width:768px )"
                  srcSet={item?.gallery.first.tablet}
                  sizes=""
                />
              )}
              <img
                className=" rounded-lg object-contain   "
                src={item?.gallery.first.mobile}
                alt="produit"
              />
            </picture>
          </div>
          <div>
            <picture>
              {item?.gallery.second.desktop && (
                <source
                  media="(min-width:1024px )"
                  srcSet={item?.gallery.second.desktop}
                  sizes=""
                />
              )}
              {item?.gallery.second.tablet && (
                <source
                  media="(min-width:768px )"
                  srcSet={item?.gallery.second.tablet}
                  sizes=""
                />
              )}
              <img
                className=" rounded-lg object-contain   "
                src={item?.gallery.second.mobile}
                alt="produit"
              />
            </picture>
          </div>
        </div>
        <div>
          <div>
            <picture>
              {item?.gallery.third.desktop && (
                <source
                  media="(min-width:1024px )"
                  srcSet={item?.gallery.third.desktop}
                  sizes=""
                />
              )}
              {item?.gallery.third.tablet && (
                <source
                  media="(min-width:768px )"
                  srcSet={item?.gallery.third.tablet}
                  sizes=""
                />
              )}
              <img
                className=" rounded-lg object-contain   "
                src={item?.gallery.third.mobile}
                alt="produit"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="mt-30">
        <h4 className=" text-center text-2xl font-bold ">
          Vous pouvez aussi aimer
        </h4>
        <div className="mt-14 flex items-center justify-center gap-y-14 max-md:flex-col md:gap-x-2.5 md:gap-y-0 lg:gap-x-8">
          {item?.others.map((i) => {
            return (
              <CardWithOnlyImageAndButton
                url={item.slug}
                Title={i.name}
                imageMobile={i.image.mobile}
                imageTablet={i.image.tablet}
                ImageDesktop={i.image.desktop}
                altText="produit"
                key={i.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailProduitComponent;
