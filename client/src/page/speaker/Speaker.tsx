import CardWithImageSpeakers from "../../components/CardWithImageSpeakers/CardWithImageSpeakers";

import useGetSpeakers from "../../hooks/Speaker/useGetSpeakers";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";

function Speaker() {
  const { isLoading, isError, data } = useGetSpeakers();

  if (isLoading) return <div>Chargement...</div>;
  if (isError) return <div>error </div>;
  return (
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
  );
}

export default Speaker;
