/* eslint-disable react/prop-types */
// import React from 'react';


const Instructor = ({user}) => {
const {email,name, photo} = user;

  return (
    <div className="hover:scale-105 transition duration-500  mt-12 px-2">
      <img
        src={photo}
        className="rounded-lg h-[400px] w-[90%] border-y-4 border-x-2 py-1 border-primary object-cover mx-auto "
        alt=""
      />
      <h2 className="font-bold text-2xl mt-4 mb-2">{name}</h2>
      <p className="text-para text-base">{email}</p>
    </div>
  );
};

export default Instructor;