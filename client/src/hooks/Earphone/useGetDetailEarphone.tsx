import getEarphoneItemDetail_api from "../../Api/Earphone/getEarphoneItemDetail_api";
import type { headPhoneEarPhoneSpeakerInterfaceDetail } from "../../Types";
import { useQuery } from "@tanstack/react-query";

function useGetDetailEarphone({ slug }: { slug: string | undefined }) {
  const { isLoading, isError, error, data } = useQuery<
    headPhoneEarPhoneSpeakerInterfaceDetail,
    Error
  >({
    queryKey: ["Earphones", slug],
    queryFn: () => getEarphoneItemDetail_api(slug),
  });
  return { isLoading, isError, error, data };
}

export default useGetDetailEarphone;
