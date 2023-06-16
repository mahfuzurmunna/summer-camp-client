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

import Manageuser from "../Pages/Dashboard/Admin/Manageuser";
import Manageclass from "../Pages/Dashboard/Admin/Manageclass";
import Addclass from "../Pages/Dashboard/InstructorDashboard/Addclass";
import Myclass from "../Pages/Dashboard/InstructorDashboard/Myclass";
import Myselectedclasses from "../Pages/Dashboard/Student/Myselectedclasses";
import Myenrolledclass from "../Pages/Dashboard/Student/Myenrolledclass";
import Sendfeedback from "../Pages/Dashboard/Admin/Sendfeedback";




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
        path: "user",
        element: <Manageuser />,
      },
      {
        path: "class",
        element: <Manageclass />,
      },
      {
        path: "myclass",
        element: <Myclass />,
      },
      {
        path: "addclass",
        element: <Addclass />,
      },
      {
        path: "selectedclass",
        element: <Myselectedclasses />,
      },
      {
        path: "enrolledclass",
        element: <Myenrolledclass />,
      },
      {
        path: "feedback/:id",
        element: <Sendfeedback/>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allclasses/sendfeedback/${params.id}`),
      },
    ],
  },
]);

export default router;
