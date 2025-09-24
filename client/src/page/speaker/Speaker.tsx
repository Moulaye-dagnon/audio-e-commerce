import { useEffect } from "react";
import CardWithImageSpeakers from "../../components/CardWithImageSpeakers/CardWithImageSpeakers";
import HeaderOverview from "../../components/HeaderOverview/HeaderOverview";

import useGetSpeakers from "../../hooks/Speaker/useGetSpeakers";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";
import { scrollUpFunct } from "../../utils/scrollUpFunct";
import LoaderComponent from "../../components/loader/LoaderComponent";

function Speaker() {
  const { isLoading, isError, data } = useGetSpeakers();
  useEffect(() => {
    scrollUpFunct();
  }, [data]);
  if (isLoading) return <LoaderComponent />;
  if (isError) return <div>error </div>;
  return (
    <>
      <HeaderOverview title="Casque" />
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
            url={`/speaker/${item.slug}`}
          />
        ))}
      </div>
    </>
  );
}

export default Speaker;
