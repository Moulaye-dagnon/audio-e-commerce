import ButtonComponent from "../buttonComponent/ButtonComponent";
import { motion } from "motion/react";
import img_header_mobile from "../../assets/home/mobile/image-header.jpg";
import img_header_tablet from "../../assets/home/tablet/image-header.jpg";
import img_header_destop from "../../assets/home/desktop/image-hero.jpg";
function HeaderOverview({ title }: { title?: string }) {
  if (title)
    return (
      <div className=" mt-24 bg-primary-black py-8 md:py-15">
        <h1
          id="Accueil"
          className=" text-center text-[28px] font-bold text-primary-white"
        >
          {title}
        </h1>
      </div>
    );
  return (
    <div
      id="Accueil"
      className=" relative  w-full   bg-secondary-black text-white  "
    >
      <picture>
        <source
          media="(min-width:1024px )"
          srcSet={img_header_destop}
          sizes=""
        />
        <source
          media="(min-width:768px )"
          srcSet={img_header_tablet}
          sizes=""
        />
        <img
          className=" max-h-full w-full object-cover  object-center   "
          src={img_header_mobile}
          alt="person for mobile"
        />
      </picture>

      <motion.div
        initial={{
          opacity: 0,
          y: "-100%",
          filter: "blur(30px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0)",
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className=" absolute top-1/2 left-1/2 w-[80%] max-w-82 -translate-1/2 text-center text-primary-white md:max-w-95 lg:left-40   lg:-translate-x-0   lg:text-left "
      >
        <span className="text-sm opacity-50 ">Nouveau produit</span>
        <h1 className="text-5xl font-bold md:text-6xl lg:mt-4">
          Casque <br /> XX99 Mark II
        </h1>
        <p className="my-6 text-[15px] opacity-75">
          Expérience audio naturel et réaliste et qualité de construction
          exceptionnelle faite pour le passionné de musique.
        </p>
        <div className=" text-center lg:text-left">
          <ButtonComponent
            url="/headphone/xx99-mark-two-headphones"
            name="Voir le produit"
            type="button"
            color="orange"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HeaderOverview;
