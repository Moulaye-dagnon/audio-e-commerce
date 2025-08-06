import getSpeakerItemDetail_api from "../../Api/Speaker/getSpeakerItemDetail_api";
import type { headPhoneEarPhoneSpeakerInterfaceDetail } from "../../Types";
import { useQuery } from "@tanstack/react-query";

function useGetDetailSpeaker({ slug }: { slug: string | undefined }) {
  const { isLoading, isError, error, data } = useQuery<
    headPhoneEarPhoneSpeakerInterfaceDetail,
    Error
  >({
    queryKey: ["Speakers", slug],
    queryFn: () => getSpeakerItemDetail_api(slug),
  });
  return { isLoading, isError, error, data };
}

export default useGetDetailSpeaker;
