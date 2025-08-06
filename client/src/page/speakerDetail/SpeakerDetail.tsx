import { useParams } from "react-router";
import useGetDetailSpeaker from "../../hooks/Speaker/useGetDetailSpeaker";
import DetailProduitComponent from "../../components/DetailProduit/DetailProduitComponent";

function SpeakerDetail() {
  const { slug } = useParams();

  const {
    isLoading,
    data: item,
    isError,
    error,
  } = useGetDetailSpeaker({ slug });

  if (isLoading) return <div>chargement......</div>;
  if (isError) return <div>error {error?.message}</div>;
  if (item) return <DetailProduitComponent item={item} />;
}

export default SpeakerDetail;
