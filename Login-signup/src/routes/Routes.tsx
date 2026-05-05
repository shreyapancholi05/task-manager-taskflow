import { useRoutes, Navigate } from "react-router";

import Login from "../Components/Auth/login";
import SignUp from "../Components/Auth/signup";

import Profile from "../Components/Pages/profile";

import DashboardLayout from "../Components/Dashboard/dashboardlayout";
import Dashboard from "../Components/Pages/Dashboard";

import ChangePass from "../Components/Pages/ChangePass";

import Projects from "../Components/Projects/Projects";

import ProjectDetails from "../Components/Projects/ProjectDetails";

import CreateProject from "../Components/Projects/CreateProject";

import Tasks from "../Components/Tasks/Tasks";

import TaskDetails from "../Components/Tasks/TaskDetails";

import CreateTask from "../Components/Tasks/CreateTask";

import ProtectedRoutes from "./ProtectedRoutes";

import PublicRoutes from "./PublicRoutes";

function Routes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },

    {
      element: <PublicRoutes />,

      children: [
        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },

    {
      element: <ProtectedRoutes />,

      children: [
        {
          element: <DashboardLayout />,

          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },

            {
              path: "/profile",
              element: <Profile />,
            },

            {
              path: "/changepassword",
              element: <ChangePass />,
            },

            
            {
              path: "/projects",
              element: <Projects />,
            },

            {
              path: "/projects/:id",
              element: <ProjectDetails />,
            },

            {
              path: "/create-project",
              element: <CreateProject />,
            },

          
            {
              path: "/tasks",
              element: <Tasks />,
            },

            {
              path: "/tasks/:id",
              element: <TaskDetails />,
            },

            {
              path: "/create-task",
              element: <CreateTask />,
            },
          ],
        },
      ],
    },
  ]);

  return element;
}

export default Routes;
