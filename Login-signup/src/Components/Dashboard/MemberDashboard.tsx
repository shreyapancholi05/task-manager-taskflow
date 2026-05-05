import DashboardCard from "./DashboardCard";

function MemberDashboard() {
  return (
    <div className="p-5 md:p-7 space-y-7 bg-slate-50 min-h-screen">



      <div className="p-6 ">

        <div className="space-y-1">

          <h1 className="text-3xl font-bold text-slate-800">
            Member Dashboard
          </h1>

          <p className="text-slate-500 text-sm">
            Track your assigned tasks and project progress
          </p>

        </div>

      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="My Tasks"
          value={12}
        />

        <DashboardCard
          title="Completed"
          value={6}
        />

        <DashboardCard
          title="Pending"
          value={4}
        />

        <DashboardCard
          title="Overdue"
          value={2}
        />

      </div>

      {/* Recent Tasks */}

      <div className="bg-white border border-slate-200 shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-xl font-semibold text-slate-800">
              Recent Tasks
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your latest assigned work
            </p>

          </div>

          <button
            className="
              text-indigo-600
              hover:text-indigo-700
              text-sm
              font-medium
            "
          >
            View All
          </button>

        </div>

        <div className="space-y-4">

          <div
            className="
              flex
              items-start
              justify-between
              border
              border-slate-200
              p-4
              hover:bg-slate-50
              transition
            "
          >
            <div>

              <p className="font-medium text-slate-700">
                Complete Authentication UI
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Project: TaskFlow Dashboard
              </p>

            </div>

            <span
              className="
                text-xs
                bg-yellow-100
                text-yellow-700
                px-3
                py-1
              "
            >
              Pending
            </span>

          </div>

          <div
            className="
              flex
              items-start
              justify-between
              border
              border-slate-200
              p-4
              hover:bg-slate-50
              transition
            "
          >
            <div>

              <p className="font-medium text-slate-700">
                Fix Sidebar Responsiveness
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Project: Admin Panel
              </p>

            </div>

            <span
              className="
                text-xs
                bg-blue-100
                text-blue-700
                px-3
                py-1
              "
            >
              In Progress
            </span>

          </div>

          <div
            className="
              flex
              items-start
              justify-between
              border
              border-slate-200
              p-4
              hover:bg-slate-50
              transition
            "
          >
            <div>

              <p className="font-medium text-slate-700">
                API Integration Completed
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Project: Ecommerce Dashboard
              </p>

            </div>

            <span
              className="
                text-xs
                bg-green-100
                text-green-700
                px-3
                py-1
              "
            >
              Done
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MemberDashboard;