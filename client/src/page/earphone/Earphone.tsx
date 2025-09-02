import { useEffect } from "react";
import CardWithImageSpeakers from "../../components/CardWithImageSpeakers/CardWithImageSpeakers";
import HeaderOverview from "../../components/HeaderOverview/HeaderOverview";
import LoaderComponent from "../../components/loader/LoaderComponent";
import useGetEarphones from "../../hooks/Earphone/useGetEarphones";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";
import { scrollUpFunct } from "../../utils/scrollUpFunct";

function Earphone() {
  const { isLoading, isError, data } = useGetEarphones();
  useEffect(() => {
    scrollUpFunct();
  }, [data]);

  if (isLoading) return <LoaderComponent />;
  if (isError) return <div>error </div>;
  return (
    <>
      <HeaderOverview title="Ecouteur" />
      <div className=" px-6">
        {data?.map((item: headPhoneEarPhoneSpeakerInterface, index) => (
          <CardWithImageSpeakers
            key={index}
            title={item.name}
            description={item.description}
            srcMobile={item.image.mobile}
            srcTablet={item.image.tablet}
            srcDesktop={item.image.desktop}
            HomePage={false}
            New={item.new}
            url={`/earphone/${item.slug}`}
          />
        ))}
      </div>
    </>
  );
}

export default Earphone;
