// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProiver/Authprovider";

import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { registerUser, updateUserData, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  //  react hook form starts
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  // form submit function
  const onSubmit = (data) => {
    const { email, password } = data;
    registerUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
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

        console.log(loggedUser, "this is lgged user");
        updateUserData(data.name, data.photo)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, photo:data.photo, role: 'student' };
            console.log("user profile info updated");
            fetch("http://localhost:5000/allusers" , {
              method: "POST",
              headers:{
                'content-type' : 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  navigate("/");
                }
              });
           
          })
          .catch((error) => console.log(error.message));

        console.log(loggedUser.displayName);
      })
      .catch((error) => console.log(error.message));
  };

  //  google authentication
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate("/");
      })
      .catch((error) => console.log(error.message));
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
                Enter Your Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full border rounded-md p-2 outline-accent"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {" "}
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border rounded-md p-2 outline-accent"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {" "}
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                })}
                className="w-full border rounded-md p-2 outline-accent"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm">
                  Password needs minimum eight characters, at least one capital
                  letter and one number
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="" className="block mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full border rounded-md p-2 outline-accent"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {" "}
                  Password didnt match
                </span>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="" className="block mb-2">
                Photo URL
              </label>
              <input
                type="text"
                className="w-full border rounded-md p-2 outline-accent"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500"> Photo URL is required</span>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="" className="block mb-2">
                Select Gender
              </label>

              <select
                className="w-full select select-bordered rounded-md p-2 outline-accent"
                name=""
                id=""
                defaultValue="Select Gender"
                {...register("gender")}
              >
                <option value="Select Gender" disabled>
                  {" "}
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <p className="text-para text-center mt-6">
              Already have an account?
              <Link
                to="/login"
                className="text-lg underline text-Primary font-bold"
              >
                <> </> Login
              </Link>
            </p>
            <input
              type="submit"
              value="Register"
              className="w-full py-3 bg-accent text-white font-medium rounded-md my-8 cursor-pointer text-lg hover:bg-primary transition duration-200 shadow-md"
            />
            <Toaster />
            <div className="text-center text-para">
              <p>Or Continue With</p>
              <button
                onClick={handleGoogleLogin}
                className="w-full border-2 rounded-md py-3 flex items-center justify-center cursor-pointer my-6 gap-4 lg:text-xl"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.5899 4.20998C31.8008 8.64667 20.7714 17.0676 13.1219 28.236C5.47233 39.4044 1.60586 52.7314 2.09037 66.2596C2.57488 79.7879 7.38483 92.8042 15.8137 103.397C24.2426 113.989 35.8461 121.6 48.9199 125.11C59.5192 127.845 70.624 127.965 81.2799 125.46C90.9331 123.292 99.8578 118.654 107.18 112C114.801 104.863 120.332 95.7848 123.18 85.74C126.274 74.8165 126.825 63.3294 124.79 52.16H65.2699V76.85H99.7399C99.051 80.7879 97.5748 84.5463 95.3994 87.9003C93.2241 91.2543 90.3945 94.135 87.0799 96.37C82.8713 99.1553 78.1262 101.029 73.1499 101.87C68.1594 102.798 63.0405 102.798 58.0499 101.87C52.9915 100.825 48.2063 98.7376 43.9999 95.74C37.2414 90.9559 32.1667 84.1592 29.4999 76.32C26.7888 68.3338 26.7888 59.6762 29.4999 51.69C31.3982 46.0921 34.5363 40.9953 38.6799 36.78C43.4219 31.8675 49.4253 28.3559 56.0315 26.6307C62.6377 24.9055 69.5915 25.0333 76.1299 27C81.2379 28.5672 85.9089 31.3068 89.7699 35C93.6566 31.1333 97.5366 27.2566 101.41 23.37C103.41 21.28 105.59 19.29 107.56 17.15C101.665 11.6652 94.7465 7.39702 87.1999 4.58998C73.457 -0.40012 58.4197 -0.534225 44.5899 4.20998Z"
                    fill="white"
                  />
                  <path
                    d="M44.5898 4.20996C58.4184 -0.537472 73.4557 -0.406898 87.1998 4.57996C94.7477 7.40607 101.663 11.6948 107.55 17.2C105.55 19.34 103.44 21.34 101.4 23.42C97.5198 27.2933 93.6431 31.1533 89.7698 35C85.9087 31.3067 81.2378 28.5672 76.1298 27C69.5935 25.0264 62.64 24.8912 56.032 26.6094C49.424 28.3275 43.4169 31.8326 38.6698 36.74C34.5261 40.9553 31.388 46.0521 29.4898 51.65L8.75977 35.6C16.1798 20.8856 29.0273 9.6302 44.5898 4.20996Z"
                    fill="#E33629"
                  />
                  <path
                    d="M3.25999 51.5001C4.37339 45.9778 6.22325 40.63 8.75999 35.6001L29.49 51.6901C26.7789 59.6763 26.7789 68.3339 29.49 76.3201C22.5833 81.6534 15.6733 87.0134 8.75999 92.4001C2.4115 79.7633 0.475318 65.3651 3.25999 51.5001Z"
                    fill="#F8BD00"
                  />
                  <path
                    d="M65.2701 52.1499H124.79C126.825 63.3193 126.274 74.8064 123.18 85.7299C120.332 95.7747 114.801 104.853 107.18 111.99C100.49 106.77 93.7701 101.59 87.0801 96.3699C90.3968 94.1327 93.2278 91.2488 95.4032 87.8912C97.5786 84.5336 99.0537 80.7713 99.7401 76.8299H65.2701C65.2601 68.6099 65.2701 60.3799 65.2701 52.1499Z"
                    fill="#587DBD"
                  />
                  <path
                    d="M8.75 92.3998C15.6633 87.0665 22.5733 81.7065 29.48 76.3198C32.1521 84.1618 37.234 90.9588 44 95.7398C48.2195 98.7235 53.015 100.794 58.08 101.82C63.0705 102.748 68.1895 102.748 73.18 101.82C78.1563 100.979 82.9014 99.1052 87.11 96.3198C93.8 101.54 100.52 106.72 107.21 111.94C99.8889 118.597 90.9642 123.239 81.31 125.41C70.6541 127.915 59.5492 127.795 48.95 125.06C40.567 122.822 32.7368 118.876 25.95 113.47C18.7673 107.766 12.9003 100.579 8.75 92.3998Z"
                    fill="#319F43"
                  />
                </svg>
                LOGIN WITH GOOGLE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
