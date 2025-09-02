import { useQuery } from "@tanstack/react-query";
import getMe from "../../Api/auth/getMe";

function GetMe() {
  return useQuery({
    enabled: false,
    queryKey: ["user"],
    queryFn: () => getMe(),
	
  });
}

export default GetMe;
