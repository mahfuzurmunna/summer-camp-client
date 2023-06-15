import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading/Loading";
import { AuthContext } from "../AuthProiver/Authprovider";

// eslint-disable-next-line react/prop-types
const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();

  {
    loading ? <Loading /> : <></>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Privateroute;
