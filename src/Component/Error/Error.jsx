// eslint-disable-next-line no-unused-vars
import Lottie from "lottie-react";
import error from "../../assets/404.json"
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full mx-auto text-center">
      <Lottie animationData={error} loop={true} className="h-[80vh]" />
      <Link to="/">
        <button className="btn-primary"> Back to Home Page</button>
      </Link>
    </div>
  );
};

export default Error;