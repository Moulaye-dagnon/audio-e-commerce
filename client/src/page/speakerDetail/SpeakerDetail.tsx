import { useNavigate, useParams } from "react-router";
import useGetDetailSpeaker from "../../hooks/Speaker/useGetDetailSpeaker";
import DetailProduitComponent from "../../components/DetailProduit/DetailProduitComponent";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import LoaderComponent from "../../components/loader/LoaderComponent";

function SpeakerDetail() {
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
  } = useGetDetailSpeaker({ slug });

  if (isLoading) return <LoaderComponent />;
  if (isError) return <div>error {error?.message}</div>;
  if (item) return <DetailProduitComponent item={item} />;
}

export default SpeakerDetail;
