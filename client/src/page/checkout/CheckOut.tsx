import { InputComponent } from "../../components/InputComponent/InputComponent";
import InputRadioComponent from "../../components/InputRadioComponent/InputRadioComponent";
import { useAppSelector } from "../../redux/hooks";
import CardItem from "../../components/Card-Item-Component/CardItem";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import { useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { CheckoutSchema, type CheckoutType } from "../../Types/checkout.type";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FinalPriceFunct } from "../../utils/GetFinalPrice";
import CheckOutSuccessComponent from "../../components/ChechoutSuccess/CheckOutSuccessComponent";

function CheckOut() {
  const navigate = useNavigate();

  const User = useAppSelector((state) => state.user.user);
  useEffect(() => {
    if (!User) {
      navigate("/login", { state: { redirectFromCick: true } });
    }
  });
  const [modePaiment, setModePaiment] = useState<"e-Money" | "cash">("cash");
  const [ConfirmAchat, setConfirmAchat] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CheckoutType>({
    resolver: zodResolver(CheckoutSchema),
  });
  const handleModePaiment = (type: "e-Money" | "cash") => {
    setModePaiment(type);
  };
  const OnSubmit: SubmitHandler<CheckoutType> = (data) => {
    console.log(data);
    reset();
  };

  const TotalCart = useAppSelector((state) => state.cart.carts);
  const { FinalPrice, TVA, TotalItemsPrice } = FinalPriceFunct(TotalCart);
  return (
    <div className=" relative mt-10 bg-tertiaire-white px-6  py-4 md:px-10 lg:px-20 xl:px-40">
      <h3
        onClick={() => navigate(-1)}
        className=" mb-6 cursor-pointer text-left text-primary-black/50"
      >
        Retourner
      </h3>
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className=" mx-auto flex max-w-[1440px] gap-y-8 max-lg:flex-col lg:gap-x-7.5 lg:gap-y-0  "
      >
        <div className=" rounded-lg bg-primary-white px-6 py-4 text-left  shadow-md lg:w-[65%]  lg:flex-none xl:max-w-172">
          <div className=" text-3xl font-bold uppercase">Facturation</div>
          <section className="my-8">
            <div className=" mb-4 text-sm font-bold text-primary-orange">
              Détails de facturation
            </div>
            <div className=" flex-wrap items-center justify-between md:flex">
              <div className="md:w-[48%] md:flex-none">
                <InputComponent<CheckoutType>
                  label="Nom"
                  id="nom"
                  type="text"
                  register={register}
                  name="nom"
                  placeholder="Votre nom"
                  error={errors.nom}
                />
              </div>
              <div className="md:w-[48%] md:flex-none">
                <InputComponent<CheckoutType>
                  label="Email"
                  id="email"
                  type="text"
                  register={register}
                  name="email"
                  placeholder="Votre email"
                  error={errors.email}
                />
              </div>
              <div className="md:w-[48%] md:flex-none">
                <InputComponent<CheckoutType>
                  label="Telephone"
                  id="phone"
                  type="text"
                  register={register}
                  name="phone"
                  placeholder="Votre numero de telephone"
                  error={errors.phone}
                />
              </div>
            </div>
          </section>
          <section className="my-8">
            <div className=" mb-4 text-sm font-bold text-primary-orange">
              Informations sur l'expédition
            </div>
            <div className="flex-wrap items-center justify-between md:flex ">
              <div className="w-full md:flex-none">
                <InputComponent<CheckoutType>
                  label="Votre adresse"
                  id="address"
                  type="text"
                  register={register}
                  name="address"
                  placeholder="Votre adresse"
                  error={errors.address}
                />
              </div>
              <div className="md:w-[48%] md:flex-none">
                <InputComponent<CheckoutType>
                  label="Zip Code"
                  id="Zip"
                  type="text"
                  register={register}
                  name="zip"
                  placeholder="Votre zip code"
                  error={errors.zip}
                />
              </div>
              <div className="md:w-[48%] md:flex-none">
                <InputComponent<CheckoutType>
                  label="Ville "
                  id="ville"
                  type="text"
                  register={register}
                  name="city"
                  placeholder="Votre ville"
                  error={errors.city}
                />
              </div>
              <div className="md:w-[48%] md:flex-none">
                <InputComponent<CheckoutType>
                  label="Pays"
                  id="pays"
                  type="text"
                  register={register}
                  name="country"
                  placeholder="Votre country"
                  error={errors.country}
                />
              </div>
            </div>
          </section>

          <section className="my-8">
            <div className=" mb-4 text-sm font-bold text-primary-orange">
              Détails de paiement
            </div>
            <div className=" flex gap-y-6 max-md:flex-col md:justify-between">
              <div className=" text-xs">Mode de paiement</div>
              <div className=" flex w-[48%] flex-none flex-col gap-y-6 ">
                <InputRadioComponent<CheckoutType>
                  label="e-Money"
                  id="e-Money"
                  value={"e-Money"}
                  Onclick={() => handleModePaiment("e-Money")}
                  name="modePaiment"
                  register={register}
                  error={errors.modePaiment}
                />
                <InputRadioComponent<CheckoutType>
                  label="Paiement à la livraison"
                  id="cash"
                  value={"cash"}
                  name="modePaiment"
                  Onclick={() => handleModePaiment("cash")}
                  register={register}
                  error={errors.modePaiment}
                />
              </div>
            </div>
            {modePaiment == "e-Money" && (
              <div className="flex-wrap items-center justify-between md:flex">
                <div className="md:w-[48%] md:flex-none">
                  <InputComponent<CheckoutType>
                    label="e-Money Numero"
                    id="eMoneyNumber"
                    type="text"
                    register={register}
                    name="eMoneyNumber"
                    placeholder="Votre e-Money numero"
                    error={
                      "eMoneyNumber" in errors
                        ? errors?.eMoneyNumber
                        : undefined
                    }
                  />
                </div>
                <div className="md:w-[48%] md:flex-none">
                  <InputComponent<CheckoutType>
                    label="e-Money PIN"
                    id="eMoneyPin"
                    type="text"
                    register={register}
                    name="eMoneyPin"
                    placeholder="Votre e-Money pin"
                    error={
                      "eMoneyPin" in errors ? errors?.eMoneyPin : undefined
                    }
                  />
                </div>
              </div>
            )}
          </section>
        </div>
        <div className="flex w-full flex-1 flex-col   gap-y-8 rounded-lg bg-primary-white px-6 py-8 text-left shadow-md lg:max-h-160 lg:w-[31%] lg:flex-none">
          <div className=" text-3xl font-bold uppercase ">Résumé</div>
          {TotalCart.length ? (
            <div className=" mb-4 flex h-72 w-full flex-col overflow-auto">
              {TotalCart.map((item) => (
                <CardItem key={item.id} id={item.id} PageType="checkoutPage" />
              ))}
            </div>
          ) : (
            <div className="m-auto justify-items-center text-xl">
              Votre panier est vide
            </div>
          )}
          <div>
            <div className=" mb-2.5 flex items-center justify-between">
              <span className=" text-base text-primary-black/50 uppercase">
                Totale
              </span>
              <span className="text-lg font-bold">${TotalItemsPrice}</span>
            </div>
            <div className=" mb-2.5 flex items-center justify-between">
              <span className=" text-base text-primary-black/50 uppercase">
                EXPÉDITION
              </span>
              <span className="text-lg font-bold">$50</span>
            </div>
            <div className=" mb-6 flex items-center justify-between">
              <span className=" text-base text-primary-black/50 uppercase">
                TVA (inclus)
              </span>
              <span className="text-lg font-bold">${TVA}</span>
            </div>
            <div className=" mb-2.5 flex items-center justify-between">
              <span className=" text-base text-primary-black/50 uppercase">
                Grand Total
              </span>
              <span className="text-lg font-bold text-primary-orange">
                ${FinalPrice}
              </span>
            </div>
          </div>
          <ButtonComponent
            type="submit"
            name=" Continuer et payer"
            color="orange"
            disabled={isSubmitting}
            handleClick={() => setConfirmAchat(true)}
          />
        </div>
      </form>
      {ConfirmAchat && <CheckOutSuccessComponent />}
    </div>
  );
}

export default CheckOut;
