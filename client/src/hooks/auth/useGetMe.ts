import { useQuery } from "@tanstack/react-query";
import getMe from "../../Api/auth/getMe";

function useGetMe() {
  return useQuery({
    enabled: false,
    queryKey: ["user"],
    queryFn: () => getMe(),
    retry: 0,
  });
}

export default useGetMe;
