import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Sendfeedback = () => {
  const cl = useLoaderData();
    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
    } = useForm();
 const handleFeedback = (id, newData) => {
   console.log(id);
   fetch(`http://localhost:5000/allclasses/feedback/${id}`, {
     method: "PATCH",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(newData),
   })
     .then((res) => res.json())
     .then((data) => {
       if (data.modifiedCount) {
         Swal.fire({
           position: "top",
           icon: "success",
           title: "Feedback sent",
           showConfirmButton: false,
           timer: 1000,
         });
       }
     });
 };
  const onSubmit = (data) => {
    console.log(data)
    handleFeedback(cl[0]._id, data);
  }
  console.log(cl[0]._id, "this is cl");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-4xl text-bold my-8 font-semibold">
        Send your feedback to instructor!
      </h2>
      <textarea
        {...register("feedback")}
        id=""
        cols="60"
        rows="8"
        className="block border-2 mb-7"
      ></textarea>
      <button type="submit"  className="btn-primary">
        Send Feedback
      </button>
    </form>
  );
};

export default Sendfeedback;