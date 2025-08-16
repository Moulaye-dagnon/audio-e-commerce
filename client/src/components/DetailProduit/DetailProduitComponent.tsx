import { useEffect, useState } from "react";
import type { headPhoneEarPhoneSpeakerInterfaceDetail } from "../../Types";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import CardWithOnlyImageAndButton from "../CardWithOnlyImageAndButton/CardWithOnlyImageAndButton";
import { useStoreCart } from "../../store/Cart/cart";
import type { CartItem } from "../../Types/cart.type";
import { CartSlice } from "../../redux/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

function DetailProduitComponent({
  item,
}: {
  item: headPhoneEarPhoneSpeakerInterfaceDetail;
}) {
  //   const carts = useStoreCart((state) => state.carts);
  //   const addToCart = useStoreCart((state) => state.addToCart);
  const [quantity, setQuantity] = useState(0);
  const handleChangeQuantity = (action: "increment" | "decrement") => {
    if (action === "increment") setQuantity((prev) => prev + 1);
    if (action === "decrement")
      setQuantity((prev) => (prev >= 1 ? prev - 1 : 1));
  };
  const dispatch = useAppDispatch();
  const Cart = useAppSelector((state) => state.cart.carts);
  const handleAddToCart = () => {
    const itemToAdd: CartItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: quantity,
    };

    // if (quantity > 0) {
    //   addToCart(itemToAdd);
    //   setQuantity(0); // Reset quantity after adding to cart
    //   console.log("Adding to cart:", itemToAdd.name, "Quantity:", quantity);
    //   console.log("itemToAdd to add:", { ...itemToAdd });

    //   //setQuantity(1);
    //   console.log("Current cart:", carts);
    dispatch(CartSlice.actions.addToCart(itemToAdd));
    console.log(CartSlice.actions.addToCart(itemToAdd));
    console.log("Current cart:", Cart);

    // {type: "counter/increment"}
  };
  //   useEffect(() => {
  //     console.log("Cart updated:", Cart);
  //   }, [Cart]);

  return (
    <div className=" py-14 px-6 md:px-10 lg:px-20 xl:px-40  rounded-lg">
      <div className="  text-center flex justify-between items-center max-md:flex-col gap-x-16   lg:gap-x-28">
        <div className="bg-tertiaire-white rounded-lg  ">
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
        </div>
        <div className=" max-w-[80%] flex flex-col justify-center items-center gap-y-8 mt-8 md:mt-0 md:items-start   ">
          {item?.new && (
            <span className=" text-primary-orange text-sm">
              Nouveau produit
            </span>
          )}
          <h3 className="max-w-87 text-center md:text-left   uppercase text-[28px] md:text-[40px] font-bold  ">
            {item?.name}
          </h3>
          <p className=" opacity-75 md:text-left">{item?.description}</p>

          <span className=" text-lg font-bold "> $ {item?.price}</span>
          <div className="flex justify-center items-center gap-x-4">
            <div className=" bg-tertiaire-white flex justify-between items-center px-8 py-4 gap-x-7">
              <span
                onClick={() => handleChangeQuantity("decrement")}
                className=" opacity-50 cursor-pointer "
              >
                -
              </span>
              <span className=" text-sm"> {quantity} </span>
              <span
                onClick={() => handleChangeQuantity("increment")}
                className=" opacity-50 cursor-pointer "
              >
                +
              </span>
            </div>
            <ButtonComponent
              handleClick={handleAddToCart}
              name="Ajouter"
              type="button"
              color="orange"
            />
          </div>
        </div>
      </div>

      <div className=" flex max-lg:flex-col lg:gap-x-35 max-md:gap-y-20  mt-20 lg:mt-57  ">
        <div className="max-w-150">
          <h2 className="font-bold text-3xl mb-8">CARACTÉRISTIQUES</h2>
          <p className=" opacity-50 text-base">{item?.features}</p>
        </div>
        <div className=" md:flex lg:block md:gap-x-35">
          <h4 className=" text-2xl md:text-3xl font-bold mb-6">
            Dans la boîte
          </h4>
          <div>
            {item?.includes.map((i, index) => (
              <div key={index} className=" flex gap-x-5 items-center ">
                <span className="text-primary-orange text-base">
                  {i.quantity}x
                </span>
                <span className=" opacity-50">{i.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-28 md:flex md:gap-x-5 md:items-center md:justify-center ">
        <div className=" flex gap-y-3 max-md:mb-3 flex-col md:gap-y-5.5">
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
        <h4 className=" text-2xl font-bold text-center ">
          Vous pouvez aussi aimer
        </h4>
        <div className="mt-14 flex justify-center gap-y-14 md:gap-y-0 md:gap-x-2.5 lg:gap-x-8 items-center max-md:flex-col">
          {item?.others.map((i) => {
            return (
              <CardWithOnlyImageAndButton
                url={i.slug}
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
