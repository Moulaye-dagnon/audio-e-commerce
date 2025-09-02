import { useNavigate, useParams } from "react-router";
import useGetDetailEarphone from "../../hooks/Earphone/useGetDetailEarphone";
import DetailProduitComponent from "../../components/DetailProduit/DetailProduitComponent";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

function EarphoneDetail() {
  const User = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!User) {
      navigate("/login", { state: { redirectFromCick: true } });
    }
  });
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
