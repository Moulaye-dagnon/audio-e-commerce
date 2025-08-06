import { NavLink } from "react-router";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function FooterComponent() {
  return (
    <div className="bg-primary-black text-primary-white pt-12.5 pb-9.5 flex justify-center items-center flex-col  md:px-10 lg:px-40 lg:items-start mt-30">
      <div className="w-full flex flex-col items-center md:justify-start gap-y-12 md:items-start lg:flex-row lg:justify-between">
        <h1 className="text-xl font-bold  ">audioPhile </h1>
        <div className="">
          <ul className="flex justify-between flex-col md:flex-row  items-center   gap-y-4 md:gap-y-0 md:gap-x-10 ">
            <li className="hover:text-primary-orange">
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li className="hover:text-primary-orange">
              <NavLink to={"/headphone"}>Casque</NavLink>
            </li>
            <li className="hover:text-primary-orange">
              <NavLink to={"/speaker"}>Haut parleur</NavLink>
            </li>
            <li className="hover:text-primary-orange">
              <NavLink to={"/earphone"}>Écouteurs</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm max-w-82 md:max-w-full text-center md:text-left opacity-50 pt-8 pb-8 md:pb-20 lg:max-w-[80%] xl:max-w-[60%] ">
        L'audiophile est un arrêt tout en un pour répondre à vos besoins audio.
        Nous sommes une petite équipe de mélomanes et de spécialistes du son qui
        se consacrent à vous aider à tirer le meilleur parti de l'audio
        personnel. Venez visiter notre établissement de démonstration - nous
        sommes ouverts 7 jours par semaine.
      </p>
      <div className=" w-full  text-center max-w-82 md:max-w-full flex flex-col md:flex-row md:justify-between items-center gap-y-12">
        <p className="opacity-50">
          Copyright 2021. Tous droits réservés | Moulaye A Dagnon
        </p>
        <div className="flex justify-center items-center gap-x-4 text-2xl ">
          <a className="hover:text-primary-orange" href="/">
            <IoLogoFacebook />
          </a>
          <a className="hover:text-primary-orange" href="/">
            <FaTwitter />
          </a>
          <a className="hover:text-primary-orange" href="/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
