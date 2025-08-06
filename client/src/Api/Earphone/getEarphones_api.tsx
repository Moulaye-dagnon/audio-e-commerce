import type { AxiosError } from "axios";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";
import { api } from "../axiosConfig";

async function getEarphones_api(): Promise<
  headPhoneEarPhoneSpeakerInterface[]
> {
  try {
    const response = await api("/earphones");
    return response.data.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}

export default getEarphones_api;
