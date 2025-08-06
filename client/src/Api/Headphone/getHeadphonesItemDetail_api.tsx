import type { AxiosError } from "axios";
import { api } from "../axiosConfig";
import type { headPhoneEarPhoneSpeakerInterfaceDetail } from "../../Types";

async function getHeadphonesItemDetail_api(
  slug: string | undefined
): Promise<headPhoneEarPhoneSpeakerInterfaceDetail> {
  try {
    const response = await api(`/headphones/${slug}`);
    return response.data.data;
  } catch (error) {
    console.log("api headphones detail", error);
    throw new Error((error as AxiosError).message);
  }
}

export default getHeadphonesItemDetail_api;
