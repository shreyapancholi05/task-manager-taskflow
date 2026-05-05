import { Link } from "react-router";

interface ProjectCardProps {
  project: {
    _id: string | number;
    title: string;
    description?: string;
    status: string;
    deadline: string;
  };
}

function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project._id}`}
      className="
        bg-white
        border
        border-gray-200
        rounded
        p-5
        shadow-sm
        hover:shadow-md
        transition
        block
      "
    >
      <div className="flex justify-between items-start gap-4">

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-800">
            {project.title}
          </h2>

          <p className="text-sm text-gray-500 line-clamp-2">
            {project.description}
          </p>

          <p className="text-sm text-gray-400">
            Deadline: {project.deadline}
          </p>
        </div>

        <span
          className="
            bg-indigo-100
            text-indigo-700
            text-xs
            px-3
            py-1
            rounded-full
            whitespace-nowrap
          "
        >
          {project.status}
        </span>

      </div>
    </Link>
  );
}

export default ProjectCard;