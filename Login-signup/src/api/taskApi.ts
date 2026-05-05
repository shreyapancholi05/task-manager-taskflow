import API from "./axios";

export const createTask = (data: any) => {
  return API.post("/tasks", data);
};

export const getTasks = () => {
  return API.get("/tasks");
};

export const getTaskById = (id: string) => {
  return API.get(`/tasks/${id}`);
};