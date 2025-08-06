import ButtonComponent from "../buttonComponent/ButtonComponent";
import image_speaker_zx7_mobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import image_speaker_zx7_tablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import image_speaker_zx7_desktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import { motion } from "motion/react";
interface CardWithImageFullCardProps {
  title: string;
  url?: string;
}
function CardWithImageFullCard({ title, url }: CardWithImageFullCardProps) {
  return (
    <div
      id="CardWithImageFullCard-container"
      className=" relative w-full  rounded-lg mb-8 overflow-hidden"
    >
      <picture>
        <source
          media="(min-width:1024px )"
          srcSet={image_speaker_zx7_desktop}
          sizes=""
        />
        <source
          media="(min-width:768px )"
          srcSet={image_speaker_zx7_tablet}
          sizes=""
        />
        <motion.img
          whileHover={{
            scale: 1.5,
          }}
          transition={{
            duration: 1,
          }}
          className=" w-full max-h-full object-center  object-cover   "
          src={image_speaker_zx7_mobile}
          alt="person for mobile"
        />
      </picture>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          filter: "blur(30px)",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          filter: "blur(0)",
        }}
        transition={{
          duration: 1,
        }}
        className=" absolute  top-1/2 -translate-y-1/2 left-5 lg:left-40 rounded-lg "
      >
        <h3 className=" text-[28px] max-w-60 font-bold  text-primary-black mb-8 uppercase">
          {title}
        </h3>
        <ButtonComponent
          url={url ? url : undefined}
          type="button"
          name="Voir produit"
          color="black"
        />
      </motion.div>
    </div>
  );
}

export default CardWithImageFullCard;
