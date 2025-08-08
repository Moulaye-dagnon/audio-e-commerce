import React from "react";
import ButtonComponent from "../buttonComponent/ButtonComponent";

function CheckOutSuccessComponent() {
  return (
    <div className=" fixed no-doc-scrool top-20 md:top-22 pt-10 bottom-0 inset-x-0 z-10  bg-primary-black/40 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-primary-white p-8 rounded-lg">
        <div>logo</div>
        <div className=" uppercase font-bold text-2xl mb-4">
          Merci pour votre commande
        </div>
        <div className="text-base text-primary-black/50 mb-6 ">
          Vous recevrez sous peu une confirmation par e-mail.
        </div>
        <div className=" mb-6">
          <div></div>
          <div className="flex flex-col  justify-start px-6 py-4 gap-y-2 bg-primary-black">
            <span className="text-primary-white/50">GRAND TOTAL</span>
            <span className="text-primary-white font-bold">1000</span>
          </div>
        </div>
        <ButtonComponent
          name="Retour à l'accueil"
          url="/home"
          color="orange"
          type="button"
        />
      </div>
    </div>
  );
}

export default CheckOutSuccessComponent;
