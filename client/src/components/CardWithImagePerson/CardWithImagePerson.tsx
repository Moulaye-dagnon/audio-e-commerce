import person_mobile from "../../assets/shared/mobile/image-best-gear.jpg";
import person_tablet from "../../assets/shared/tablet/image-best-gear.jpg";
import person_desktop from "../../assets/shared/desktop/image-best-gear.jpg";
import { motion } from "motion/react";
// interface CardWithImagePersonProps {
//   title: string;
//   description: string;
//   imgScr: string;
// }

function CardWithImagePerson() {
  return (
    <div className="mx-6 mb-30 md:mx-10 lg:mx-20 xl:mx-40 ">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-primary-black lg:flex lg:flex-row-reverse lg:items-center lg:justify-between"
      >
        <picture>
          <source
            media="(min-width:1024px )"
            srcSet={person_desktop}
            sizes=""
          />
          <source media="(min-width:768px )" srcSet={person_tablet} sizes="" />
          <img
            className=" rounded-lg"
            src={person_mobile}
            alt="person for mobile"
          />
        </picture>

        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=" text-center lg:max-w-110 lg:text-left "
        >
          <h3 className=" my-8 text-[28px] font-bold uppercase  md:text-[40]">
            Vous apporter le <br />
            <span className=" text-primary-orange">meilleur</span> équipement
            audio
          </h3>
          <p className=" opacity-50">
            Vous apporter le meilleur équipement audio" description="Situé au
            cœur de New York, l'audiophile est le premier magasin pour les
            écouteurs haut de gamme, les écouteurs, les haut-parleurs et les
            accessoires audio. Nous avons une grande salle d'exposition et des
            salles de démonstration de luxe disponibles pour vous pour naviguer
            et vivre une large gamme de nos produits. Arrêtez-vous dans notre
            magasin pour rencontrer certaines des personnes fantastiques qui
            font de l'audiophile le meilleur endroit pour acheter votre
            équipement audio portable.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CardWithImagePerson;
