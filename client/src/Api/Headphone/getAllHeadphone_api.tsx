import type { AxiosError } from "axios";
import { api } from "../axiosConfig";
import type { headPhoneEarPhoneSpeakerInterface } from "../../Types";

async function getAllHeadphone_api(): Promise<
  headPhoneEarPhoneSpeakerInterface[]
> {
  try {
    const response = await api("/headphones");
    return response.data.data;
  } catch (error) {
    console.log("api headphones", error);
    throw new Error((error as AxiosError).message);
  }
}

export default getAllHeadphone_api;
