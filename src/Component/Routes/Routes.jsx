import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Loading from "../Pages/Loading/Loading";
import Class from "../Pages/Class/Class";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Privateroute from "./Privateroute";

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
        path: "/dashboard",
        element: (
          <Privateroute>
            <Dashboard />
          </Privateroute>
        ),
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
]);

export default router;
