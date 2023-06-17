// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdEmail, MdFacebook, MdPhone } from "react-icons/md";
import { AuthContext } from "../../AuthProiver/Authprovider";
import logo from "../../../assets/logo.png";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOutUser()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* nav upper info */}
      <div className="bg-primary h-14">
        <div className="hidden md:flex items-center justify-between max-w-screen-2xl mx-auto pt-4">
          <div className="flex gap-8">
            <span className="flex items-center gap-3">
              <MdEmail className="text-accent text-xl" />
              <p className="text-white">email@tokomoo.com</p>
            </span>
            <span className="flex items-center  gap-3">
              <MdPhone className="text-accent text-xl" />
              <p className="text-white">(205) 555-0100</p>
            </span>
          </div>

          <div className="flex gap-8">
            <MdFacebook className="text-white text-2xl" />
            <FaTwitter className="text-white text-2xl" />
            <FaYoutube className="text-white text-2xl" />
          </div>
        </div>
      </div>

      {/* nav */}
      <div className="lg:px-4 lg:py-6  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">
        <div className=" relative flex items-center justify-between">
          <Link to="/">
            <div className="flex gap-3 items-center">
              <img src={logo} alt="" />
              <p className="text-3xl font-bold">Melodia</p>
            </div>
          </Link>

          <ul className="lg:flex text-xl hidden gap-8 lg:items-center ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/instructor"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <li>Instructors</li>
            </NavLink>
            <NavLink
              to="/class"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <li>Classes</li>
            </NavLink>
            <span className="py-6 bg-slate-400 px-[.5px]"></span>
            {/* profile login and dashboard */}

            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  <li>Dashboard</li>
                </NavLink>
                <li className="hidden lg:flex lg:items-center gap-3">
                  <img
                    src={user.photoURL}
                    className="rounded-full p-1 w-14 h-14 ring-2 ring-primary"
                    aria-label={user.displayName}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                  />
                  <NavLink to="/">
                    <button onClick={handleLogout} className="btn-primary">
                      Sign Out
                    </button>
                  </NavLink>
                </li>
                <Tooltip id="my-tooltip" />
              </>
            ) : (
              <li className="hidden lg:inline-block">
                <NavLink to="/login">
                  <button className="btn-primary">Login</button>
                </NavLink>
              </li>
            )}
          </ul>
          {/* profile login and dashboard */}

          {/* mobile version */}

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-primary" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full ">
                <div className="p-10 bg-primary border rounded h-[100vh] shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <Link to="/">
                      <div className="flex gap-3 items-center">
                        <img src={logo} alt="" />
                        <p className="text-xl text-white font-bold">Melodia</p>
                      </div>
                    </Link>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 bg-bg transition duration-200 rounded bg-white hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="mt-12">
                    <ul className="space-y-4 text-center">
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active2" : "default2"
                          }
                        >
                          Home
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/instructor"
                          className={({ isActive }) =>
                            isActive ? "active2" : "default2"
                          }
                        >
                          Instrutors
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/class"
                          className={({ isActive }) =>
                            isActive ? "active2" : "default2"
                          }
                        >
                          Classes
                        </NavLink>
                      </li>
                      <hr className="bg-white w-1/3 mx-auto" />
                      <li>
                        {user ? (
                          <>
                            <NavLink
                              to="/dashboard"
                              className={({ isActive }) =>
                                isActive ? "active2" : "default2"
                              }
                            >
                              Dashboard
                            </NavLink>
                            <li className="flex flex-col items-center gap-4 mt-6">
                              <img
                                src={user.photoURL}
                                className="rounded-full p-1 w-14 h-14 ring-2 ring-primary"
                                aria-label={user.displayName}
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                              />
                              <NavLink to="/">
                                <button
                                  onClick={handleLogout}
                                  className="btn-secondary "
                                >
                                  Sign Out
                                </button>
                              </NavLink>
                            </li>
                            <Tooltip id="my-tooltip" />
                          </>
                        ) : (
                          <li className="hidden lg:inline-block">
                            <NavLink to="/login">
                              <button className="btn-primary">Login</button>
                            </NavLink>
                          </li>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
