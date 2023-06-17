/* eslint-disable react/prop-types */

import { useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProiver/Authprovider";
import useAxios from "../../Customhooks/useAxios";
import { useForm } from "react-hook-form";

const SingleClass = ({ cl }) => {
  const [axiosSecure] = useAxios();
  const { reset } = useForm();
  const { user } = useContext(AuthContext);
  const {
    classImage,
    className,
    instructorEmail,
    instructorName,
    price,
    seats,
    status,
    _id,
  } = cl;
  console.log(cl);
  const handleSelect = (id) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login before selecting your class!",
      });
      // navigate(from, { replace: true });
    } else if (user) {
      const classCart = {
        _id,
        classImage,
        className,
        instructorEmail,
        instructorName,
        price,
        seats,
        status,
        student: [user?.email],
      };
      console.log(classCart);

      axiosSecure
        .post("/classCart", classCart)
        .then((response) => {
          console.log("after posting new class item", response.data);
          if (response.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Seected",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        })
        .catch((error) => {
          console.log("Error response:", error.response); // Log the error response
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already selected this class!",
            footer: "Please select another class",
          });
        });
    }
  };

  console.log(cl);

  return (
    <div>
      <div className="hover:scale-105 transition duration-500  mt-12 px-2">
        <img
          src={classImage}
          className="rounded-lg h-[400px] w-[90%] border-y-4 border-x-2 py-1 border-primary object-cover mx-auto "
          alt=""
        />
        <div className="space-y-3">
          <h2 className="font-bold text-2xl mt-4 mb-2">{className}</h2>
          <p className="text-para text-base">Instructor: {instructorName}</p>
          <p className="text-para text-base">Available Seats: {seats}</p>
          <p className="text-para text-base">CLass Price: {price}</p>
        </div>
        <Link>
          <button
            className="btn-secondary"
            onClick={() => handleSelect(cl._id)}
          >
            Select Class
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleClass;
