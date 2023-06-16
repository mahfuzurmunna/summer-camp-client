// eslint-disable-next-line no-unused-vars
import React from "react";
import useAxios from "../../Customhooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Singleinstructor from "./Singleinstructor";

const Instructors = () => {
  const [axiosSecure] = useAxios();

  // eslint-disable-next-line no-unused-vars
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/allusers");
    return res.data;
  });
  const instructorUsers = users.filter((user) => user.role === "instructor");
  return (
    <div className="w-[1150px]  mx-auto md:my-32 my-24 lg:my-44 text-center">
      <p className="text-accent text-base mb-2 font-medium">OUR TEACHERS</p>
      <h1 className=" text-4xl lg:text-[52px] leading-tight font-bold text-primary ">
        Our Popular Instructors
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {instructorUsers.map((user) => (
          <Singleinstructor
            Singleinstructor
            key={user._id}
            user={user}
          ></Singleinstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
