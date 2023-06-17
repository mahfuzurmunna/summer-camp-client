/* eslint-disable react/prop-types */


const ClassSection = ({cl}) => {
  console.log(cl);
  const {classImage,className, instructorName, seats } = cl;

  return (
    <div className="hover:scale-105 transition duration-500  mt-12 px-2">
      <img
        src={classImage}
        className="rounded-lg h-[400px] w-[90%] border-y-4 border-x-2 py-1 border-primary object-cover mx-auto "
        alt=""
      />
      <h2 className="font-bold text-2xl mt-4 mb-2">{className}</h2>
      <p className="text-para text-base">Instructor: {instructorName}</p>
      <p className="text-para text-base">Available Seat: {seats}</p>
      <p className="text-para text-base">Instructor: {instructorName}</p>
    </div>
  );
};

export default ClassSection;