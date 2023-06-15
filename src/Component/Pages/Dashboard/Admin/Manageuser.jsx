import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Customhooks/useAxios";
import Swal from "sweetalert2";

const Manageuser = () => {
  const [axiosSecure] = useAxios();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/allusers");
    return res.data;
  });

  const handleAdmin = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/allusers/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top",
            icon: "success",
            title: "You have been promoted to Admin",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
   const handleInstructor = (id) => {
     console.log(id);
     fetch(`http://localhost:5000/allusers/instructor/${id}`, {
       method: "PATCH",
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.modifiedCount) {
           refetch();
           Swal.fire({
             position: "top",
             icon: "success",
             title: "You have been promoted to Instructor",
             showConfirmButton: false,
             timer: 1000,
           });
         }
       });
   };

  console.log(users);

  return (
    <div>
      <div className="my-container">
        <div className="overflow-x-auto">
          <table className="table border border-bg2">
            {/* head */}
            <thead className="bg-slate-800">
              <tr className="rehn-normal text-white text-base underline">
                <th></th>
                <th>Image</th>
                <th className="pr-16"> User Name</th>
                <th>Email</th>
                <th>User Role</th>
                <th>Change to Instructor</th>
                <th>Change to Admin</th>
              </tr>
            </thead>
            <tBody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    {/* Replace the label with the number */}
                    <span className="font-bold text-lg">{index + 1}.</span>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        {user.photo && (
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="rehn-medium text-lg">{user.name}</td>

                  <td>{user.email}</td>
                  <td>{user.role}</td>

                  <td>
                    <button
                      className="btn-primary"
                      onClick={() => {
                        handleInstructor(user._id);
                      }}
                      disabled={user.role === "instructor" ? true : false}
                    >
                      Make Instructor
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn-primary"
                      onClick={() => {
                        handleAdmin(user._id);
                      }}
                      disabled={user.role === "admin" ? true : false}
                    >
                      Make Admin
                    </button>
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

export default Manageuser;
