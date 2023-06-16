import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Customhooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Manageclass = () => {
  const [axiosSecure] = useAxios();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/allclasses");
    return res.data;
  });

  console.log(classes);
  const handleApprove = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/allclasses/approve/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Class approved",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
  const handleDeny = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/allclasses/deny/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Class Denied",
            timer: 1000,
          });
        }
      });
  };
 

  return (
    <div>
      <div className="my-container">
        <div className="overflow-x-auto">
          <table className="table border border-bg2">
            {/* head */}
            <thead className="bg-slate-800">
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
              {classes.map((cl, index) => (
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

                  <td className="space-x-5">
                    <button
                      className={
                        cl.status === "approved"
                          ? "bg-slate-100 border-2 disabled text-primary px-4 py-2 rounded-lg cursor-not-allowed"
                          : "bg-green-600 px-4 py-2 rounded-lg text-white font-semibold text-base"
                      }
                      onClick={() => {
                        handleApprove(cl._id);
                      }}
                      disabled={cl.status === "approved" ? true : false}
                    >
                      Approve
                    </button>
                    <button
                      className={
                        cl.status === "denied"
                          ? "bg-slate-100 border-2 disabled text-primary px-4 py-2 rounded-lg cursor-not-allowed"
                          : "bg-red-500 px-4 py-2 rounded-lg text-white font-semibold text-base"
                      }
                      onClick={() => {
                        handleDeny(cl._id);
                      }}
                      disabled={cl.status === "denied" ? true : false}
                    >
                      Deny
                    </button>
                    <Link to={`/dashboard/feedback/${cl._id}`}>
                      <button
                        className={
                          cl.status === "feedback"
                            ? "bg-slate-100 border-2 disabled text-primary px-4 py-2 rounded-lg cursor-not-allowed"
                            : "bg-accent px-4 py-2 rounded-lg text-white font-semibold text-base"
                        }
                      >
                        Feedback
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tBody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manageclass;
