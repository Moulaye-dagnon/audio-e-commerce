import type { AxiosError } from "axios";
import type { UserData } from "../../Types/User";
import { api } from "../axiosConfig";

async function getMe(): Promise<UserData> {
  try {
    const response = await api.get("api/me");
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}

export default getMe;
