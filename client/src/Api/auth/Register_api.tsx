import type { User } from "../../Types/User";
import { api } from "../axiosConfig";
import type { AxiosError } from "axios";

async function Register_api(body: {
  name: string;
  email: string;
  password: string;
}): Promise<Omit<User, "redirect">> {
  try {
    const response = await api.post("/api/auth/sign-up/email", body);
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}

export default Register_api;
