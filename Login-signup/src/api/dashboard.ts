import API from "./axios";
export const getDashboard = () => {
  return API.get("/dashboard");
};