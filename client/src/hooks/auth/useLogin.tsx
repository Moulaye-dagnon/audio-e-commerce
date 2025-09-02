import { useMutation } from "@tanstack/react-query";
import Login_api from "../../Api/auth/Login_api";
import GetMe from "./useGetMe";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/user/UserSlice";

export default function useLogin() {
  const dispatch = useAppDispatch();
  const { refetch, data } = GetMe();
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => Login_api(body),
    onSuccess: async () => {
    //   refetch();
    //   dispatch(addUser(data));
    //   console.log(data);
    },
  });
}
