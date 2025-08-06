import { useQuery } from "@tanstack/react-query";
import getEarphones_api from "../../Api/Earphone/getEarphones_api";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";

function useGetEarphones() {
  const { isLoading, isError, error, data } = useQuery<
    headPhoneEarPhoneSpeakerInterface[],
    Error
  >({
    queryKey: ["Earphones"],
    queryFn: getEarphones_api,
  });
  return { isLoading, isError, error, data };
}

export default useGetEarphones;
