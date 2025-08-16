import React, { useState } from "react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import InputRadioComponent from "../../components/InputRadioComponent/InputRadioComponent";
import { useAppSelector } from "../../redux/hooks";
import CardItem from "../../components/Card-Item-Component/CardItem";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import { useNavigate } from "react-router";
import CheckOutSuccessComponent from "../../components/ChechoutSuccess/CheckOutSuccessComponent";

function CheckOut() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    nom: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    modePaiment: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [ConfirmAchat, setConfirmAchat] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
  };

  const TotalCart = useAppSelector((state) => state.cart.carts);

  return (
    <div className=" relative bg-tertiaire-white py-4  px-6 md:px-10 lg:px-20 xl:px-40">
      <h3
        onClick={() => navigate(-1)}
        className=" mb-6 text-left text-primary-black/50 cursor-pointer"
      >
        Retourner
      </h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" max-w-[1440px] mx-auto flex max-lg:flex-col gap-y-8 lg:gap-y-0 lg:gap-x-7.5"
      >
        <div className=" bg-primary-white lg:max-w-130 xl:max-w-172  rounded-lg shadow-md px-6 py-4 text-left">
          <div className=" font-bold text-3xl uppercase">Facturation</div>
          <section className="my-8">
            <div className=" mb-4 font-bold text-sm text-primary-orange">
              Détails de facturation
            </div>
            <div className=" md:flex items-center justify-between flex-wrap">
              <div className="md:flex-none md:w-[48%]">
                <InputComponent
                  label="Nom"
                  id="nom"
                  type="text"
                  value={inputValue.nom}
                  handleChange={handleChange}
                  name="nom"
                  placeholder="Votre nom"
                />
              </div>
              <div className="md:flex-none w-[48%]">
                <InputComponent
                  label="Email"
                  id="email"
                  type="text"
                  value={inputValue.email}
                  handleChange={handleChange}
                  name="email"
                  placeholder="Votre email"
                />
              </div>
              <div className="md:flex-none w-[48%]">
                <InputComponent
                  label="Telephone"
                  id="phone"
                  type="text"
                  value={inputValue.phone}
                  handleChange={handleChange}
                  name="phone"
                  placeholder="Votre numero de telephone"
                />
              </div>
            </div>
          </section>
          <section className="my-8">
            <div className=" mb-4 font-bold text-sm text-primary-orange">
              Informations sur l'expédition
            </div>
            <div className="md:flex items-center justify-between flex-wrap ">
              <div className="md:flex-none w-full">
                <InputComponent
                  label="Votre adresse"
                  id="address"
                  type="text"
                  value={inputValue.address}
                  handleChange={handleChange}
                  name="address"
                  placeholder="Votre adresse"
                />
              </div>
              <div className="md:flex-none md:w-[48%]">
                <InputComponent
                  label="Zip Code"
                  id="Zip"
                  type="text"
                  value={inputValue.zip}
                  handleChange={handleChange}
                  name="zip"
                  placeholder="Votre zip code"
                />
              </div>
              <div className="md:flex-none md:w-[48%]">
                <InputComponent
                  label="Ville "
                  id="ville"
                  type="text"
                  value={inputValue.city}
                  handleChange={handleChange}
                  name="city"
                  placeholder="Votre ville"
                />
              </div>
              <div className="md:flex-none md:w-[48%]">
                <InputComponent
                  label="Pays"
                  id="pays"
                  type="text"
                  value={inputValue.country}
                  handleChange={handleChange}
                  name="country"
                  placeholder="Votre country"
                />
              </div>
            </div>
          </section>

          <section className="my-8">
            <div className=" mb-4 font-bold text-sm text-primary-orange">
              Détails de paiement
            </div>
            <div className=" flex max-md:flex-col gap-y-6 md:justify-between">
              <div className=" text-xs">Mode de paiement</div>
              <div className=" flex-none w-[48%] flex flex-col gap-y-6 ">
                <InputRadioComponent
                  label="e-Money"
                  id="e-Money"
                  value="e-Money"
                  handleChange={handleChange}
                  name="modePaiment"
                />
                <InputRadioComponent
                  label="Paiement à la livraison"
                  id="cash"
                  value="cash"
                  handleChange={handleChange}
                  name="modePaiment"
                />
              </div>
            </div>
            <div className="md:flex items-center justify-between flex-wrap">
              <div className="md:flex-none md:w-[48%]">
                <InputComponent
                  label="e-Money Numero"
                  id="eMoneyNumber"
                  type="text"
                  value={inputValue.eMoneyNumber}
                  handleChange={handleChange}
                  name="eMoneyNumber"
                  placeholder="Votre e-Money numero"
                />
              </div>
              <div className="md:flex-none md:w-[48%]">
                <InputComponent
                  label="e-Money PIN"
                  id="eMoneyPin"
                  type="text"
                  value={inputValue.eMoneyPin}
                  handleChange={handleChange}
                  name="eMoneyPin"
                  placeholder="Votre e-Money pin"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex-1 max-w-90 bg-primary-white lg:max-h-160 flex flex-col gap-y-8 rounded-lg shadow-md px-6 py-8 text-left">
          <div className=" font-bold text-3xl uppercase ">Résumé</div>
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
            <div className=" flex justify-between items-center mb-2.5">
              <span className=" uppercase text-base text-primary-black/50">
                Totale
              </span>
              <span className="text-lg font-bold">$10000</span>
            </div>
            <div className=" flex justify-between items-center mb-2.5">
              <span className=" uppercase text-base text-primary-black/50">
                EXPÉDITION
              </span>
              <span className="text-lg font-bold">$10000</span>
            </div>
            <div className=" flex justify-between items-center mb-6">
              <span className=" uppercase text-base text-primary-black/50">
                TVA (inclus)
              </span>
              <span className="text-lg font-bold">$10000</span>
            </div>
            <div className=" flex justify-between items-center mb-2.5">
              <span className=" uppercase text-base text-primary-black/50">
                Grand Total
              </span>
              <span className="text-lg font-bold text-primary-orange">
                $10000
              </span>
            </div>
          </div>
          <ButtonComponent
            type="submit"
            name=" Continuer et payer"
            color="orange"
            handleClick={() => setConfirmAchat(true)}
          />
        </div>
      </form>
      {ConfirmAchat && <CheckOutSuccessComponent />}
    </div>
  );
}

export default CheckOut;
