import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProiver/Authprovider";

const Myclass = () => {
  const { user } = useContext(AuthContext);
  console.log("this is the current instructor, ", user?.email);
  const [myClass, setMyclass] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allclasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyclass(data));
  }, [user]);

  console.log(myClass);
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
              <th>Total Enrolled Student</th>
              <th>Status</th>
              <th>Feedback</th>
            
            </tr>
          </thead>
          <tBody>
            {myClass.map((cl, index) => (
             
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

                <td>1</td>
                <td>{cl.status}</td>

                <td>
                {cl.feedback ? <td>{cl.feedback}</td> : <></>}
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

export default Myclass;
