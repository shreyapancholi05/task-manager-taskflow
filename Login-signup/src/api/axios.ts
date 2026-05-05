import axios from "axios";
import AuthStore from "../store/AuthStore";

const API = axios.create({
  baseURL: "http://localhost:5000/api", 
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