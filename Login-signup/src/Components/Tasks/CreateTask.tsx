import { Formik, Form, Field } from "formik";

import { useNavigate } from "react-router";

import { createTask } from "../../api/taskApi";

function CreateTask() {

  const navigate = useNavigate();
const handleSubmit = async (values: any) => {
  try {
    const payload: any = {
      title: values.title,
      description: values.description,
      status: values.status,
      priority: values.priority,
      dueDate: values.dueDate,
    };

    
    if (values.assignedTo) {
      payload.assignedTo = values.assignedTo;
    }

    if (values.project) {
      payload.project = values.project;
    }

    await createTask(payload);

    alert("Task created successfully");
    navigate("/tasks");

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="min-h-screen bg-slate-50 p-5 md:p-7">

      <div
        className="
          max-w-2xl
          mx-auto
          bg-white
          border
          border-slate-200
          shadow-sm
          p-6 md:p-8
        "
      >

      

        <div className="mb-7">

          <h1 className="text-3xl font-bold text-slate-800">
            Create Task
          </h1>

          <p className="text-slate-500 text-sm mt-1">
            Assign tasks and manage team productivity
          </p>

        </div>

        <Formik
          initialValues={{
            title: "",
            description: "",
            status: "Todo",
            priority: "Low",
            dueDate: "",
            assignedTo: "",
            project: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">


            <div className="space-y-2">

              <label className="text-sm font-medium text-slate-700">
                Task Title
              </label>

              <Field
                name="title"
                placeholder="Enter task title"
                className="
                  w-full
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  focus:border-slate-700
                  transition
                "
              />

            </div>

           

            <div className="space-y-2">

              <label className="text-sm font-medium text-slate-700">
                Description
              </label>

              <Field
                as="textarea"
                rows={5}
                name="description"
                placeholder="Enter task description"
                className="
                  w-full
                  border
                  border-slate-300
                  px-4
                  py-3
                  resize-none
                  outline-none
                  
                  transition
                "
              />

            </div>

        
            <div className="space-y-2">

              <label className="text-sm font-medium text-slate-700">
                Status
              </label>

              <Field
                as="select"
                name="status"
                className="
                  w-full
                  border
                  border-slate-300
                  px-4
                  py-3
                  bg-white
                  outline-none
                  
                "
              >
                <option value="Todo">
                  Todo
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Done">
                  Done
                </option>

              </Field>

            </div>

           
            <div className="space-y-2">

              <label className="text-sm font-medium text-slate-700">
                Priority
              </label>

              <Field
                as="select"
                name="priority"
                className="
                  w-full
                  border
                  border-slate-300
                  px-4
                  py-3
                  bg-white
                  outline-none
                  
                "
              >
                <option value="Low">
                  Low
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="High">
                  High
                </option>

              </Field>

            </div>

         

            <div className="space-y-2">

              <label className="text-sm font-medium text-slate-700">
                Due Date
              </label>

              <Field
                type="date"
                name="dueDate"
                className="
                  w-full
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  transition
                "
              />

            </div>


            <div className="pt-2">

              <button
                type="submit"
                className="
                  bg-slate-800
                  hover:bg-slate-900
                  transition
                  text-white
                  px-6
                  py-3
                  font-medium
                  shadow-sm
                "
              >
                Create Task
              </button>

            </div>

          </Form>
        </Formik>

      </div>

    </div>
  );
}

export default CreateTask;