import { NavLink } from "react-router";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function FooterComponent() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-black pt-12.5 pb-9.5 text-primary-white  md:px-10 lg:items-start lg:px-40 ">
      <div className="flex w-full flex-col items-center gap-y-12 md:items-start md:justify-start lg:flex-row lg:justify-between">
        <h1 className="text-xl font-bold  ">audioPhile </h1>
        <div className="">
          <ul className="flex flex-col items-center justify-between  gap-y-4   md:flex-row md:gap-x-10 md:gap-y-0 ">
            <li className="hover:text-primary-orange">
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li className="hover:text-primary-orange">
              <NavLink to={"/headphone"}>Casque</NavLink>
            </li>
            <li className="  hover:text-primary-orange">
              <NavLink to={"/speaker"}>Haut parleur</NavLink>
            </li>
            <li className="hover:text-primary-orange">
              <NavLink to={"/earphone"}>Écouteurs</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="max-w-82 pt-8 pb-8 text-center text-sm opacity-50 md:max-w-full md:pb-20 md:text-left lg:max-w-[80%] xl:max-w-[60%] ">
        L'audiophile est un arrêt tout en un pour répondre à vos besoins audio.
        Nous sommes une petite équipe de mélomanes et de spécialistes du son qui
        se consacrent à vous aider à tirer le meilleur parti de l'audio
        personnel. Venez visiter notre établissement de démonstration - nous
        sommes ouverts 7 jours par semaine.
      </p>
      <div className=" flex  w-full max-w-82 flex-col items-center gap-y-12 text-center md:max-w-full md:flex-row md:justify-between">
        <p className="opacity-50">
          Copyright 2021. Tous droits réservés | Moulaye A Dagnon
        </p>
        <div className="flex items-center justify-center gap-x-4 text-2xl ">
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
