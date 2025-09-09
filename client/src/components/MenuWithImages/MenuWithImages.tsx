import icon_headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import icon_earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import icon_speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import MenuItemCard from "../menuItemCard/MenuItemCard";

function MenuWithImages() {
  return (
    <div className="  my-16 w-full items-center justify-between gap-x-2.5 rounded-lg bg-white px-6 py-3 md:flex md:px-10 lg:gap-x-7.5 lg:px-20 xl:px-40">
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
