import axios from "axios";
import AuthStore from "../store/AuthStore";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

API.interceptors.request.use((config) => {
  console.log("🔥 Interceptor running");
  const token = AuthStore.getState().accessToken;
  console.log("token", token);
  

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;