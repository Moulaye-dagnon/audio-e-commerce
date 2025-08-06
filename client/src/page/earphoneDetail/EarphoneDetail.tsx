import { useParams } from "react-router";
import useGetDetailEarphone from "../../hooks/Earphone/useGetDetailEarphone";
import DetailProduitComponent from "../../components/DetailProduit/DetailProduitComponent";

function EarphoneDetail() {
  const { slug } = useParams();

  const {
    isLoading,
    data: item,
    isError,
    error,
  } = useGetDetailEarphone({ slug });

  if (isLoading) return <div>chargement......</div>;
  if (isError) return <div>error {error?.message}</div>;
  if (item) return <DetailProduitComponent item={item} />;
}

export default EarphoneDetail;
