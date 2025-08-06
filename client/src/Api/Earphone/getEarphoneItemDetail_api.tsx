import type { AxiosError } from "axios";
import { api } from "../axiosConfig";
import type { headPhoneEarPhoneSpeakerInterfaceDetail } from "../../Types";

async function getEarphoneItemDetail_api(
  slug: string | undefined
): Promise<headPhoneEarPhoneSpeakerInterfaceDetail> {
  try {
    const response = await api(`/earphones/${slug}`);
    return response.data.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}

export default getEarphoneItemDetail_api;
