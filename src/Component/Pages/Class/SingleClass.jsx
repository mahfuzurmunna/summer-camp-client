/* eslint-disable react/prop-types */


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
        <h2 className="font-bold text-2xl mt-4 mb-2">{className}</h2>
        <p className="text-para text-base">{instructorName}</p>
        <p className="text-para text-base">{seats}</p>
        <p className="text-para text-base">{price}</p>
      </div>
    </div>
  );
};

export default SingleClass;