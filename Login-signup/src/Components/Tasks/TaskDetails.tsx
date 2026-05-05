function TaskDetails() {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      <h1 className="text-3xl font-bold">
        Build Login API
      </h1>

      <p className="text-gray-600">
        Create authentication APIs using Node.js and MongoDB
      </p>

      <div className="flex gap-3 flex-wrap">

        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
          Pending
        </span>

        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
          High Priority
        </span>

      </div>

      <div className="border-t pt-4 space-y-2">

        <p>
          <span className="font-semibold">
            Assigned To:
          </span>{" "}
          Rahul
        </p>

        <p>
          <span className="font-semibold">
            Project:
          </span>{" "}
          Ecommerce App
        </p>

        <p>
          <span className="font-semibold">
            Deadline:
          </span>{" "}
          20 May 2026
        </p>

      </div>
    </div>
  );
}

export default TaskDetails;