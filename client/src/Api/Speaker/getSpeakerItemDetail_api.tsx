import type { AxiosError } from "axios";
import { api } from "../axiosConfig";
import type { headPhoneEarPhoneSpeakerInterfaceDetail } from "../../Types";

async function getSpeakerItemDetail_api(
  slug: string | undefined
): Promise<headPhoneEarPhoneSpeakerInterfaceDetail> {
  try {
    const response = await api(`/speakers/${slug}`);
    return response.data.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}

export default getSpeakerItemDetail_api;
