// eslint-disable-next-line no-unused-vars
import React from "react";
import SingleClass from "./SingleClass";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Customhooks/useAxios";

const Class = () => {
  const [axiosSecure] = useAxios();

  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/allclasses");
    return res.data;
  });
  const approvedClass = classes.filter((cl) => cl.status === "approved");
  return (
    <div className="w-[1150px]  mx-auto md:my-24 my-12 lg:my-28 text-center">
      <p className="text-accent text-base mb-2 font-medium">OUR CLASSES</p>
      <h1 className=" text-4xl lg:text-[52px] leading-tight font-bold text-primary ">
        Our Music Classes
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {approvedClass.slice(0, 6).map((cl) => (
          <SingleClass key={cl._id} cl={cl}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Class;
