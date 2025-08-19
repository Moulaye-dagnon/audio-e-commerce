import icon_headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import icon_earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import icon_speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import MenuItemCard from "../menuItemCard/MenuItemCard";


function MenuWithImages() {
  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-40 my-16 rounded-lg bg-white w-full py-3 md:flex justify-between items-center gap-x-2.5 lg:gap-x-7.5">
      <MenuItemCard
        title="Casque"
        imgScr={icon_headphone}
        url="/headphone"
        //   handleClick={handleClickMenu}
      />
      <MenuItemCard
        title="Haut parleur"
        imgScr={icon_speaker}
        url="/speaker"
        //   handleClick={handleClickMenu}
      />
      <MenuItemCard
        title="Écouteurs"
        imgScr={icon_earphone}
        url="earphone"
        //   handleClick={handleClickMenu}
      />
    </div>
  );
}

export default MenuWithImages;
