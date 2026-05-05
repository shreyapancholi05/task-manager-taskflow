import { useEffect, useState } from "react";

import { getTasks } from "../../api/taskApi";

import TaskCard from "./TaskCard";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTasks = async () => {

      try {

        const res = await getTasks();

        setTasks(res.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    fetchTasks();

  }, []);

  if (loading) {
    return (
      <div className="p-5">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-5">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Tasks
        </h1>

      </div>

      {tasks.length === 0 ? (

        <p>No tasks found</p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {tasks.map((task: any) => (

            <TaskCard
              key={task.id}
              task={task}
            />

          ))}

        </div>

      )}
    </div>
  );
}

export default Tasks;