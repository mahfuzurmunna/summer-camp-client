// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProiver/Authprovider";
import toast, { Toaster } from "react-hot-toast";
import Sociallogin from "../../Shared/Sociallogin/Sociallogin";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
   let navigate = useNavigate();
  const from = location.state?.from.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);

 

  //  react hook form starts
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("example"));

  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Login Successful", {
          style: {
            backgroundColor: "#FDC153",
            border: "3px solid #ffffff",
            borderRadius: "30px",
            padding: "16px",
            color: "#ffffff",
            fontSize: "20px",
          },
          iconTheme: {
            primary: "#232413",
            secondary: "#FFFAEE",
          },
        });
        return navigate(from,{replace: true} );
      })
      .catch((error) => console.log(error.message));
  };

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

  
  return (
    <div className=" px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8 lg:py-8">
      <div className=" grid justify-items-center ">
        <img src={logo} alt="" className="mb-4" />
        <h2 className="text-3xl mb-4 font-bold">Sign in to you account</h2>
        <div className="p-14 bg-white  shadow-lg rounded-md-xl w-[500px]">
          {/* form starts */}
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="mb-6">
              <label htmlFor="" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border rounded-md p-2 outline-accent"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500"> This field is required</span>
              )}
            </div>
            <div className="mb-6 relative">
              <label htmlFor="" className="block mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border rounded-md p-2 outline-accent"
                {...register("password", {
                  required: true,
                })}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute top-11 right-3 transform  text-gray-400"
              >
                {showPassword ? (
                  <AiFillEye className="h-5 w-5" />
                ) : (
                  <AiFillEyeInvisible className="h-5 w-5" />
                )}
              </button>
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p className="font-medium text-accent cursor-pointer hover:text-amber-400">
                Forgot Password?
              </p>
            </div>
            <p className="text-para text-center mt-6">
              Are you new here?{" "}
              <Link
                to="/register"
                className="text-lg underline text-Primary font-bold"
              >
                Register
              </Link>
            </p>
            <input
              type="submit"
              value="Login"
              className="w-full py-3 bg-accent text-white font-medium rounded-md my-8 cursor-pointer text-lg hover:bg-primary transition duration-200 shadow-md"
            />
            <Toaster />
            <div className="text-center text-para">
              <p>Or Continue With</p>
              <Sociallogin />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
