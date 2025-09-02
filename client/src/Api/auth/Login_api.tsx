import type { AxiosError } from "axios";
import type { User } from "../../Types/User";
import { api } from "../axiosConfig";

async function Login_api({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> {
  try {
    const response = await api.post("/api/auth/sign-in/email/", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}

export default Login_api;
