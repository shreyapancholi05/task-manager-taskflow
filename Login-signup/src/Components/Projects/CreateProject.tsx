import { Formik, Form, Field } from "formik";

import { createProject } from "../../api/projectApi";
import AuthStore from "../../store/AuthStore";

function CreateProject() {
  const handleSubmit = async (values: any) => {
    try {
      await createProject(values);
      console.log(AuthStore.getState().accessToken);
      
      alert("Project created");
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
          <h1 className="text-3xl font-bold text-slate-800">Create Project</h1>

          <p className="text-slate-500 text-sm mt-1">
            Add a new project and manage team workflow
          </p>
        </div>

        <Formik
          initialValues={{
            name: "",
            description: "",
            deadline: "",
            status: "Active",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Project Title
              </label>

              <Field
                name="name"
                placeholder="Enter project title"
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

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Description
              </label>

              <Field
                as="textarea"
                rows={5}
                name="description"
                placeholder="Enter project description"
                className="
                  w-full
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  resize-none
                  
                  transition
                "
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Deadline
              </label>

              <Field
                type="date"
                name="deadline"
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
                  outline-none
                  
                  transition
                  bg-white
                "
              >
                <option>Active</option>
                <option>Pending</option>
                <option>Completed</option>
              </Field>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="
                  bg-slate-800
                  hover:bg-slate-900
                  text-white
                  px-6
                  py-3
                  font-medium
                  shadow-sm
                "
              >
                Create Project
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreateProject;
