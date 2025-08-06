import { useParams } from "react-router";
import useGetDetailHeadphone from "../../hooks/Headphone/useGetDetailHeadphone";
import DetailProduitComponent from "../../components/DetailProduit/DetailProduitComponent";

function HeadphoneDetail() {
  const { slug } = useParams();

  const {
    isLoading,
    data: item,
    isError,
    error,
  } = useGetDetailHeadphone({ slug });

  if (isLoading) return <div>chargement......</div>;
  if (isError) return <div>error {error?.message}</div>;
  if (item) return <DetailProduitComponent item={item} />;
}

export default HeadphoneDetail;
