import { useMutation, useQueryClient } from "@tanstack/react-query";
import Register_api from "../../Api/auth/Register_api";

export default function useRegisterMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: { name: string; email: string; password: string }) =>
      Register_api(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
