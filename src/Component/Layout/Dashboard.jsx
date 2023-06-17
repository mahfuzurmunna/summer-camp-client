// eslint-disable-next-line no-unused-vars
import React from "react";

import { BsFillBookmarkStarFill, BsClipboardCheckFill } from "react-icons/bs";
import {
  MdAssignmentAdd,
  MdClass,
  MdSupervisedUserCircle,
  MdFileOpen,
} from "react-icons/md";

import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import MyAdmin from "../../Custom Hooks/MyAdmin";
import MyInstructor from "../../Custom Hooks/MyInstructor";

const Dashboard = () => {
  const [isAdmin] = MyAdmin();
  const [isInstructor] = MyInstructor();
  console.log(isInstructor, "this is instructor or not");
  return (
    <div className="drawer lg:drawer-open text-primary">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side bg-slate-100 ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full border-2 rounded-xl text-base-content space-y-6">
          <li className="mb-4">
            <Link to="/">
              <div className="flex gap-3 items-center">
                <img src={logo} alt="" />
                <p className="text-3xl font-bold text-primary">Melodia</p>
              </div>
            </Link>
          </li>
          <span className="text-slate-400 text-base p-3 font-medium border-b-2">
            MAIN MENU
          </span>
          {/* admin pages */}
          {isAdmin && (
            <>
              <li>
                <Link
                  to="/dashboard/class"
                  className="text-xl font-semibold hover:bg-slate-200 rounded-lg p-3"
                >
                  {" "}
                  <span className="text-2xl">
                    <MdClass />
                  </span>
                  Manage Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/user"
                  className="text-xl font-semibold hover:bg-slate-200 rounded-lg p-3"
                >
                  {" "}
                  <span className="text-2xl">
                    <MdSupervisedUserCircle />
                  </span>
                  Manage Users
                </Link>
              </li>
            </>
          )}

          {/* instructor pages */}

          {isInstructor && (
            <>
              <li>
                <Link
                  to="/dashboard/addclass"
                  className="text-xl font-semibold hover:bg-slate-200 rounded-lg p-3"
                >
                  {" "}
                  <span className="text-2xl">
                    <MdAssignmentAdd />
                  </span>
                  Add a Class
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myclass"
                  className="text-xl font-semibold hover:bg-slate-200 rounded-lg p-3"
                >
                  {" "}
                  <span className="text-2xl">
                    <BsFillBookmarkStarFill />
                  </span>
                  My Classes
                </Link>
              </li>
            </>
          )}
          {/* student pages */}
          {!isAdmin &&
            !isInstructor && (
              <>
                <li>
                  <Link
                    to="/dashboard/selectedclass"
                    className="text-xl font-semibold hover:bg-slate-200 rounded-lg p-3"
                  >
                    {" "}
                    <span className="text-2xl">
                      <BsClipboardCheckFill />
                    </span>
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/enrolledclass"
                    className="text-xl font-semibold hover:bg-slate-200 rounded-lg p-3"
                  >
                    {" "}
                    <span className="text-2xl">
                      <MdFileOpen />
                    </span>
                    My Enrolled Classes
                  </Link>
                </li>
              </>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
