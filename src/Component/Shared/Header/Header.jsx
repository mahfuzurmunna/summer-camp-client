// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdEmail, MdFacebook, MdPhone } from "react-icons/md";
import { AuthContext } from "../../AuthProiver/Authprovider";
import logo from "../../../assets/logo.png";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleLogout = () => {
  //   logOutUser()
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // };
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
      <div className="hidden md:flex items-center justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto my-4">
        <Link to='/'>
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
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <li>Dashboard</li>
              </NavLink>
              <li className="hidden lg:flex lg:items-center gap-3">
                {/* <img
        src={user.photoURL}
        className="rounded-full p-1 w-14 h-14 ring-2 ring-primary"
        aria-label={user.displayName}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={user.displayName}
      /> */}
                <NavLink to="/">
                  <button onClick={handleLogout} className="btn-primary">
                    Sign Out
                  </button>
                </NavLink>
              </li>
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
      </div>
    </div>
  );
};

export default Header;
