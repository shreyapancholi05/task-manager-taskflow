import { Link } from "react-router";

function TaskCard({ task }: any) {

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-3">

      <div className="flex justify-between items-start">

        <h2 className="text-lg font-semibold">
          {task.title}
        </h2>

        <span
          className={`
            text-xs px-2 py-1 rounded-full
            ${
              task.status === "Done"
                ? "bg-green-100 text-green-700"
                : task.status === "In Progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          {task.status}
        </span>

      </div>

      <p className="text-sm text-gray-600 line-clamp-2">
        {task.description}
      </p>

      <div className="space-y-1 text-sm">

        <p>
          <span className="font-medium">
            Priority:
          </span>{" "}
          {task.priority || "Low"}
        </p>

        <p>
          <span className="font-medium">
            Assigned:
          </span>{" "}
          {task.assignedTo?.name || "No User"}
        </p>

        <p>
          <span className="font-medium">
            Project:
          </span>{" "}
          {task.project?.name || "No Project"}
        </p>

      </div>

      <Link
        to={`/tasks/${task._id}`}
        className="inline-block text-sm text-blue-600 hover:underline"
      >
        View Details
      </Link>

    </div>
  );
}

export default TaskCard;