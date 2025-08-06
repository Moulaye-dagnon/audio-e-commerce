import { useQuery } from "@tanstack/react-query";
import getSpeakers_api from "../../Api/Speaker/getSpeakers_api";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";

function useGetSpeakers() {
  const { isLoading, isError, error, data } = useQuery<
    headPhoneEarPhoneSpeakerInterface[],
    Error
  >({
    queryKey: ["Speakers"],
    queryFn: getSpeakers_api,
  });
  return { isLoading, isError, error, data };
}

export default useGetSpeakers;
