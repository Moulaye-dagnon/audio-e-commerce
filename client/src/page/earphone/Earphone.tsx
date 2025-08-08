import CardWithImageSpeakers from "../../components/CardWithImageSpeakers/CardWithImageSpeakers";
import HeaderOverview from "../../components/HeaderOverview/HeaderOverview";
import useGetEarphones from "../../hooks/Earphone/useGetEarphones";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";

function Earphone() {
  const { isLoading, isError, data } = useGetEarphones();

  if (isLoading) return <div>Chargement...</div>;
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
          />
        ))}
      </div>
    </>
  );
}

export default Earphone;
