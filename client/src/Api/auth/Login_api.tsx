import { AxiosError } from "axios";
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
    console.log(response.data);

    return response.data;
  } catch (error) {
    const a = error as AxiosError<{
      code: string;
      message: string;
    }>;
    throw new Error(` ${a.response?.data.message}`);
  }
}

export default Login_api;
