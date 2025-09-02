import { useMutation, useQueryClient } from "@tanstack/react-query";
import Login_api from "../../Api/auth/Login_api";

export default function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => Login_api(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      //   refetch();
      //   dispatch(addUser(data));
      //   console.log(data);
    },
  });
}
