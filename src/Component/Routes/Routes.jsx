import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Loading from "../Pages/Loading/Loading";
import Class from "../Pages/Class/Class";
import Dashboard from "../Layout/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Privateroute from "./Privateroute";
import Admin from "../Pages/Dashboard/Admin/Admin";
import Manageuser from "../Pages/Dashboard/Admin/Manageuser";
import Manageclass from "../Pages/Dashboard/Admin/Manageclass";
import Addclass from "../Pages/Dashboard/InstructorDashboard/Addclass";
import Myclass from "../Pages/Dashboard/InstructorDashboard/Myclass";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/class",
        element: <Class />,
      },

      {
        path: "/instructor",
        element: <Instructors />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Privateroute>
        <Dashboard />
      </Privateroute>
    ),
    children: [
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "user",
        element: <Manageuser />,
      },
      {
        path: "class",
        element: <Manageclass />,
      },
      {
        path: "myclass",
        element: <Myclass/>,
      },
      {
        path: "addclass",
        element: <Addclass/>,
      },
    ],
  },
]);

export default router;
