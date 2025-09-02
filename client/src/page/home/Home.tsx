import HeaderOverview from "../../components/HeaderOverview/HeaderOverview";
import MenuItemCard from "../../components/menuItemCard/MenuItemCard";
import icon_headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import icon_earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import icon_speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import CardWithImageSpeakers from "../../components/CardWithImageSpeakers/CardWithImageSpeakers";
import icon_card_speaker_mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import icon_card_speaker_tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import icon_card_speaker_desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import CardWithImageFullCard from "../../components/CardWithImageFullCard/CardWithImageFullCard";

import image_earphone_mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import image_earphone_tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import image_earphone_desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { scrollUpFunct } from "../../utils/scrollUpFunct";

function Home() {
  const [isHover, setHover] = useState(false);
  useEffect(() => {
    scrollUpFunct();
  }, []);
  useEffect(() => {
    if (isHover) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isHover]);

  return (
    <>
      <HeaderOverview />
      <main className="px-6 md:px-10 lg:px-20 xl:px-40  ">
        <div className=" my-16 rounded-lg bg-white w-full py-3 md:flex justify-between items-center gap-x-2.5 lg:gap-x-7.5">
          <MenuItemCard
            title="Casque"
            imgScr={icon_headphone}
            url="/headphone"
          />
          <MenuItemCard
            title="Haut parleur"
            imgScr={icon_speaker}
            url="/speaker"
          />
          <MenuItemCard
            title="Écouteurs"
            imgScr={icon_earphone}
            url="earphone"
          />
        </div>
        <CardWithImageSpeakers
          title="Haut-parleur ZX9"
          description="Passez à des haut-parleurs premium qui sont conçus phénoménalement conçus pour offrir un son vraiment remarquable."
          srcMobile={icon_card_speaker_mobile}
          srcTablet={icon_card_speaker_tablet}
          srcDesktop={icon_card_speaker_desktop}
          HomePage={true}
          url="/speaker/zx9-speaker"
        />
        <CardWithImageFullCard
          title="Haut-parleur ZX7"
          url="/speaker/zx7-speaker"
        />
        <div className=" relative flex max-md:flex-col gap-y-8 mb-30 md:gap-x-2.5 md:gap-y-0 lg:justify-between  ">
          <AnimatePresence>
            {isHover && (
              <motion.div
                initial={{ opacity: 0, scale: 0, filter: "blur(30px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
                whileInView={{ opacity: 1, filter: "blur(0)" }}
                exit={{ opacity: 0, scale: 0, filter: "blur(30px)" }}
                transition={{
                  duration: 1,
                }}
                className=" fixed top-0 left-0 inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60"
              >
                <div
                  onMouseLeave={() => setHover(false)}
                  className=" cursor-pointer peer lg:flex-none lg:w-[49.5%]"
                >
                  <picture>
                    <source
                      media="(min-width:1024px )"
                      srcSet={image_earphone_desktop}
                      sizes=""
                    />
                    <source
                      media="(min-width:768px )"
                      srcSet={image_earphone_tablet}
                      sizes=""
                    />
                    <img
                      className=" rounded-lg w-full  "
                      src={image_earphone_mobile}
                      alt="person for mobile"
                    />
                  </picture>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onClick={() => setHover(true)}
            className=" cursor-pointer overflow-hidden lg:flex-none lg:w-[49.5%]"
          >
            <picture>
              <source
                media="(min-width:1024px )"
                srcSet={image_earphone_desktop}
                sizes=""
              />
              <source
                media="(min-width:768px )"
                srcSet={image_earphone_tablet}
                sizes=""
              />
              <motion.img
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.5,
                }}
                className=" rounded-lg w-full  "
                src={image_earphone_mobile}
                alt="person for mobile"
              />
            </picture>
          </div>
          <motion.div
            initial={{ x: "100%", opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:flex-none lg:w-[49.5%] w-full pl-6 lg:pl-25 bg-tertiaire-white rounded-lg py-10 md:flex md:flex-col md:justify-center md:items-start"
          >
            <h3 className=" text-[28px] max-w-60 font-bold  text-primary-black mb-8 uppercase">
              Écouteurs YX1
            </h3>
            <ButtonComponent
              url="/earphone/yx1-earphones"
              type="button"
              name="Voir produit"
              color="black"
            />
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default Home;
