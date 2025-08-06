import getHeadphonesItemDetail_api from "../../Api/Headphone/getHeadphonesItemDetail_api";
import type { headPhoneEarPhoneSpeakerInterfaceDetail } from "../../Types";
import { useQuery } from "@tanstack/react-query";

function useGetDetailHeadphone({ slug }: { slug: string | undefined }) {
  const { isLoading, isError, error, data } = useQuery<
    headPhoneEarPhoneSpeakerInterfaceDetail,
    Error
  >({
    queryKey: ["Headphones", slug],
    queryFn: () => getHeadphonesItemDetail_api(slug),
  });
  return { isLoading, isError, error, data };
}

export default useGetDetailHeadphone;
