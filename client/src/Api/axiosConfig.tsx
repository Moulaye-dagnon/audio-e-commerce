import axios from "axios";
export const api = axios.create({
  //   baseURL: "http://localhost:3000",
  baseURL: "https://audio-e-commerce-6rvq.onrender.com",
  withCredentials: true,
});
