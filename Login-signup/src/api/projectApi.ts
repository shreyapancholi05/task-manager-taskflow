import API from "./axios";

export const createProject = (data: any) => {
  return API.post("/projects", data);
};

export const getProjects = () => {
  return API.get("/projects");
};

export const getProjectById = (id: string) => {
  return API.get(`/projects/${id}`);
};