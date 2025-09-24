import CardWithImageSpeakers from "../../components/CardWithImageSpeakers/CardWithImageSpeakers";
import useGetHeadphones from "../../hooks/Headphone/useGetHeadphones";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";
import HeaderOverview from "../../components/HeaderOverview/HeaderOverview";
import { useEffect } from "react";
import { scrollUpFunct } from "../../utils/scrollUpFunct";
import LoaderComponent from "../../components/loader/LoaderComponent";

const Headphone = () => {
  const { isLoading, isError, data } = useGetHeadphones();
  useEffect(() => {
    scrollUpFunct();
  }, [data]);
  if (isLoading) return <LoaderComponent />;
  if (isError) return <div>error </div>;
  return (
    <>
      <HeaderOverview title="Casque" />
      <div className=" px-6 md:px-10 lg:px-41">
        {data?.map((item: headPhoneEarPhoneSpeakerInterface, index) => {
          if ((index + 1) % 2 != 0) {
            return (
              <CardWithImageSpeakers
                key={item.id}
                title={item.name}
                description={item.description}
                srcMobile={item.image.mobile}
                srcTablet={item.image.tablet}
                srcDesktop={item.image.desktop}
                HomePage={false}
                New={item.new}
                url={`/headphone/${item.slug}`}
              />
            );
          } else {
            return (
              <CardWithImageSpeakers
                key={item.id}
                title={item.name}
                description={item.description}
                srcMobile={item.image.mobile}
                srcTablet={item.image.tablet}
                srcDesktop={item.image.desktop}
                HomePage={false}
                New={item.new}
                Reverse={true}
                url={`/headphone/${item.slug}`}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Headphone;
