import { Link } from "react-router";

function Sidebar() {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <div className="flex flex-col text-sm  text-neutral-50 h-full pt-4 px-3 bg-slate-900 gap-1">

      <Link
        to="/dashboard"
        className="border-b border-gray-500 py-3 pl-5 hover:text-blue-600 transition">
        Dashboard
      </Link>

      <Link
        to="/projects"
        className="border-b border-gray-500 py-3 pl-5 hover:text-blue-600 transition"
      >
        Projects
      </Link>

      <Link
        to="/tasks"
        className="border-b border-gray-500 py-3 pl-5 hover:text-blue-600 transition"
      >
        Tasks
      </Link>

      {user.role === "admin" && (
        <Link
          to="/create-project"
          className="border-b border-gray-500 py-3 pl-5 hover:text-blue-600 transition"
        >
          Create Project
        </Link>
      )}

      {user.role === "admin" && (
        <Link
          to="/create-task"
          className="border-b border-gray-500 py-3 pl-5 hover:text-blue-600 transition"
        >
          Create Task
        </Link>
      )}

      <Link
        to="/profile"
        className="border-b border-gray-500 py-3 pl-5 hover:text-blue-600 transition"
      >
        Profile
      </Link>

      <Link
        to="/changepassword"
        className="py-3 pl-5 hover:text-blue-600 transition"
      >
        Change Password
      </Link>

    </div>
  );
}

export default Sidebar;