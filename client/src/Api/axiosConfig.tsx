import axios from "axios";
export const api = axios.create({
  baseURL: "https://audio-e-commerce-6rvq.onrender.com",
  //   baseURL: "https://back-odetta-moulaye-d-1bbca60b.koyeb.app",
  withCredentials: true,
});
