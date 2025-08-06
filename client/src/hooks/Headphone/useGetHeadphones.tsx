import { useQuery } from "@tanstack/react-query";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";
import getAllHeadphone_api from "../../Api/Headphone/getAllHeadphone_api";

function useGetHeadphones() {
  const { isLoading, isError, error, data } = useQuery<
    headPhoneEarPhoneSpeakerInterface[],
    Error
  >({
    queryKey: ["Headphones"],
    queryFn: () => getAllHeadphone_api(),
  });
  return { isLoading, isError, error, data };
}

export default useGetHeadphones;
