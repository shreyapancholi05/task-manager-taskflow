import { Link } from "react-router";
import ProjectCard from "./ProjectCard";
import { useState , useEffect } from "react";
import { getProjects } from "../../api/projectApi";
function Projects() {
  const [projects, setProjects] = useState([]);
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  useEffect(() => {

  const fetchProjects = async () => {

    try {

      const res = await getProjects();

      setProjects(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  fetchProjects();

}, []);

  return (
    <div className="space-y-5">

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        {user.role === "admin" && (
          <Link
            to="/create-project"
            className="bg-slate-700 text-white px-4 py-2 rounded-lg"
          >
            Create Project
          </Link>
        )}
      </div>

      <div className="grid gap-4">

        {projects.map((project) => (
          
    <ProjectCard
      key={project.id}
      project={project}
    />
        ))}

      </div>
    </div>
  );
}

export default Projects;