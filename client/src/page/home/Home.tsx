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
        <div className=" my-16 w-full items-center justify-between gap-x-2.5 rounded-lg bg-white py-3 md:flex lg:gap-x-7.5">
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
        <div className=" relative mb-30 flex gap-y-8 max-md:flex-col md:gap-x-2.5 md:gap-y-0 lg:justify-between  ">
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
                className=" fixed inset-0 top-0 left-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
              >
                <div
                  onMouseLeave={() => setHover(false)}
                  className=" peer cursor-pointer lg:w-[49.5%] lg:flex-none"
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
                      className=" w-full rounded-lg  "
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
            className=" cursor-pointer overflow-hidden lg:w-[49.5%] lg:flex-none"
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
                className=" w-full rounded-lg  "
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
            className="w-full rounded-lg bg-tertiaire-white py-10 pl-6 md:flex md:flex-col md:items-start md:justify-center lg:w-[49.5%] lg:flex-none lg:pl-25"
          >
            <h3 className=" mb-8 max-w-60 text-[28px]  font-bold text-primary-black uppercase">
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
