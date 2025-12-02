import { useParams } from "react-router";
import useGetDetailEarphone from "../../hooks/Earphone/useGetDetailEarphone";
import DetailProduitComponent from "../../components/DetailProduit/DetailProduitComponent";

import LoaderComponent from "../../components/loader/LoaderComponent";

function EarphoneDetail() {
  //   const User = useAppSelector((state) => state.user.user);
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!User) {
  //       navigate("/login", { state: { redirectFromCick: true } });
  //     }
  //   });
  const { slug } = useParams();

  const {
    isLoading,
    data: item,
    isError,
    error,
  } = useGetDetailEarphone({ slug });

  if (isLoading) return <LoaderComponent />;
  if (isError) return <div>error {error?.message}</div>;
  if (item) return <DetailProduitComponent item={item} />;
}

export default EarphoneDetail;
