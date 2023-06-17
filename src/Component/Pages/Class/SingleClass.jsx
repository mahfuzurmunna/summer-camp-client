/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SingleClass = ({cl}) => {
  console.log(cl);
  const { classImage, className, instructorName, seats, price } = cl;
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
          <button className="btn-secondary">Select Class</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleClass;