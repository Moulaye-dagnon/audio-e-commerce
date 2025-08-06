import type { CardWithOnlyImageAndButtonPropsType } from "../../Types";
import ButtonComponent from "../buttonComponent/ButtonComponent";

function CardWithOnlyImageAndButton({
  imageMobile,
  imageTablet,
  ImageDesktop,
  altText,
  Title,
  url,
}: CardWithOnlyImageAndButtonPropsType) {
  return (
    <div className="  text-center ">
      <div className="bg-tertiaire-white rounded-lg  ">
        <picture>
          <source media="(min-width:1024px )" srcSet={ImageDesktop} sizes="" />
          <source media="(min-width:768px )" srcSet={imageTablet} sizes="" />
          <img
            className=" rounded-lg object-cover   "
            src={imageMobile}
            alt={altText}
          />
        </picture>
      </div>
      <div className=" mt-8 max-w-[80%] mx-auto flex flex-col justify-center items-center gap-y-8     ">
        <h3 className="max-w-87 text-center    uppercase text-[24px] font-bold  ">
          {Title}
        </h3>

        <ButtonComponent
          url={url}
          name="Ajouter"
          type="button"
          color="orange"
        />
      </div>
    </div>
  );
}

export default CardWithOnlyImageAndButton;
