import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../AuthProiver/Authprovider";
import { useForm } from "react-hook-form";
import useAxios from "../../../Customhooks/useAxios";

const Addclass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const { register, handleSubmit, reset } = useForm();



  const onSubmit = (data) => {
       const {
         classImage,
         className,
         instructorEmail,
         instructorName,
         price,
         seats,
       } = data;

         let classes = {
           className,
           classImage,
           instructorEmail,
           instructorName,
           price,
           seats,
           status: "pending",
         };

           console.log(classes);

           axiosSecure.post("/allclasses", classes).then(data => {
            console.log('after posting new class', data.data);
            if(data.data.insertedId) {
              reset();
                toast.success("Class Added Successfully", {
                  style: {
                    backgroundColor: "#FDC153",
                    border: "3px solid #ffffff",
                    borderRadius: "30px",
                    padding: "16px",
                    color: "#ffffff",
                    fontSize: "20px",
                  },
                  iconTheme: {
                    primary: "#232413",
                    secondary: "#FFFAEE",
                  },
                });
            }
           })
  };

  return (
    <div className=" rounded-xl mb-12 ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 ">
        <div className="border-2 border-accent w-full lg:w-[95%] py-12 lg:pt-8 lg:pb-12 px-6 lg:px-16 rounded-xl mt-4">
          <h2 className="text-4xl rehn-bold my-6 font-bold">Add a Class</h2>
          <p className="mb-8 text-lg">
           Please fill up the form with the desired values. Make sure you have added the values with proper name.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            {/* toy name and seller */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label htmlFor="">Class Name</label> <br />
                <input
                  type="text"
                  {...register("className")}
                  placeholder="Enter class name"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-xl outline-accent2"
                  required
                />
               
              </div>
              <div className="w-1/2">
                <label htmlFor="">Class Image</label> <br />
                <input
                  type="text"
                  {...register("classImage")}
                  // defaultValue={user?.displayName}
                  placeholder="Enter photo url"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-xl  outline-accent2"
                  required
                />
              </div>
            </div>

            {/* seller email and sub-category */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label htmlFor="">Instructor Name</label> <br />
                <input
                  type="email"
                  {...register("instructorName")}
                  defaultValue={user?.displayName}
                  readOnly
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-xl  outline-accent2"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Instructor Email</label> <br />
                <input
                  type="email"
                  {...register("instructorEmail")}
                  defaultValue={user?.email}
                  readOnly
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-xl  outline-accent2"
                  required
                />
              </div>
            </div>

            {/* url and quantity */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label htmlFor="">Available Seats</label> <br />
                <input
                  type="number"
                  {...register("seats")}
                  placeholder="Enter seat number"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-xl  outline-accent2"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Price</label> <br />
                <input
                  type="number"
                  {...register("price")}
                  placeholder="Enter class price"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-xl  outline-accent2"
                />
              </div>
            </div>

            <input
              type="submit"
              className=" transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-12 md:py-3 m-2 text-xl rounded-xl border-transparent border-2 text-white font-bold  bg-accent mb-8 w-full cursor-pointer"
              value="Add Class"
            />
            <Toaster />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addclass;
