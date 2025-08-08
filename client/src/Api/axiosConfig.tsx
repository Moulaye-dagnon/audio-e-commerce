import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:3000",
  //   baseURL: "https://back-odetta-moulaye-d-1bbca60b.koyeb.app",
  withCredentials: true,
});
