import DashboardCard from "./DashboardCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getDashboard } from "../../api/dashboard";

function AdminDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDashboard();
      setData(res.data);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-5 md:p-7 space-y-7 bg-slate-50 min-h-screen">
      <div className=" p-6  mb-2">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

            <p className="text-slate-500 text-sm">
              Manage projects, tasks and team productivity
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/create-project")}
              className="
                bg-slate-800
                hover:bg-slate-900
                transition
                text-white
                px-5
                py-2.5
                font-medium
                shadow-sm
                rounded
              "
            >
              + Create Project
            </button>

            <button
              onClick={() => navigate("/create-task")}
              className="
                bg-slate-800
                hover:bg-slate-900
                transition
                text-white
                px-5
                py-2.5
                font-medium
                shadow-sm
                rounded
              "
            >
              + Create Task
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-2">
        <DashboardCard title="Total Projects" value={data.totalProjects} />
        <DashboardCard title="Total Tasks" value={data.totalTasks} />
        <DashboardCard title="Completed Tasks" value={data.completedTasks} />
        <DashboardCard title="Pending Tasks" value={data.pendingTasks} />
        <DashboardCard title="Overdue Tasks" value={data.overdueTasks} />
        <DashboardCard title="Team Members" value={data.teamMembers} />
      </div>

      <div className="bg-white border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Recent Activity
            </h2>

            <div className="space-y-4">
              {data.recentActivity?.map((item, i) => (
                <div key={i} className="border p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
