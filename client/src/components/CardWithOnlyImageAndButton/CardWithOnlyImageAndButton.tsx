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
      <div className="rounded-lg bg-tertiaire-white  ">
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
      <div className=" mx-auto mt-8 flex max-w-[80%] flex-col items-center justify-center gap-y-8     ">
        <h3 className="max-w-87 text-center    text-[24px] font-bold uppercase  ">
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
