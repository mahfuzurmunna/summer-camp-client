import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProiver/Authprovider";
import { useContext } from "react";
import useAxios from "../../../Customhooks/useAxios";

const Myselectedclasses = () => {
  const [axiosSecure] = useAxios();
  const { user } = useContext(AuthContext);

  const { data: classCart = [], refetch } = useQuery(
    ["classCart"],
    async () => {
      const res = await axiosSecure.get(`/classCart/${user?.email}`);
      return res.data;
    }
  );

  const handleDelete = (id) => {
    if (!user) {
      alert("Please login before deleting a class");
    } else {
      // Send a DELETE request to the backend
      axiosSecure
        .delete(`/classCart/${id}/${user?.email}`)
        .then((res) => {
          console.log("Class deleted:", res.data);
          // Refresh the data by refetching
          refetch();
          // Show a success message
          Swal.fire({
            position: "top",
            icon: "success",
            title: " Class Deleted",
            showConfirmButton: false,
            timer: 1700,
          });
        })
        .catch((error) => {
          console.log("Error deleting course:", error);
          // Show an error message
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error deleting the class!",
            footer: "Please try again",
          });
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border border-bg2">
          {/* head */}
          <thead className="bg-accent">
            <tr className="rehn-normal text-white text-base underline">
              <th></th>
              <th>Class Image</th>
              <th className="pr-16"> Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tBody>
            {classCart.map((cl, index) => (
              <tr key={cl._id}>
                <th>
                  {/* Replace the label with the number */}
                  <span className="font-bold text-lg">{index + 1}.</span>
                </th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                      {cl.classImage && (
                        <img
                          src={cl.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      )}
                    </div>
                  </div>
                </td>
                <td className="rehn-medium text-lg">{cl.className}</td>

                <td>{cl.instructorName}</td>
                <td>{cl.instructorEmail}</td>
                <td>{cl.seats}</td>
                <td>{cl.price}</td>
                <td>{cl.status}</td>

                <td>{cl.feedback ? <td>{cl.feedback}</td> : <></>}</td>
                <td className="space-x-5">
                  <button className="bg-slate-100 border-2 disabled text-primary px-4 py-2 rounded-lg cursor-not-allowed">
                    Pay
                  </button>
                  <button
                    className="bg-red-500 px-4 py-2 rounded-lg text-white font-semibold text-base"
                    onClick={() => {
                      handleDelete(cl._id);
                    }}
                    disabled={cl.status === "denied" ? true : false}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tBody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Myselectedclasses;
