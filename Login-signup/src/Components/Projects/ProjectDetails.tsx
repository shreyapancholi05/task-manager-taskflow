import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProjectById } from "../../api/projectApi";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getProjectById(id);
        setProject(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <>
      <div className="m-5 shadow">
        <h2 className="text-2xl  font-semibold mb-10">
          Tasks
        </h2>

        
      </div>
      
      <div className=" p-2 rounded shadow">
        <h1 className="text-xl font-medium">
          {project.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {project.description}
        </p>

        <div className="mt-4 flex gap-3">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {project.status}
          </span>

          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Deadline:{" "}
            {project.deadline
              ? new Date(project.deadline).toDateString()
              : "No deadline"}
          </span>
        </div>
      </div>

     
      
</>
  );
}

export default ProjectDetails;