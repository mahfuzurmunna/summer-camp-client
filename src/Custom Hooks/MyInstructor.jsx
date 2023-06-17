import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Component/AuthProiver/Authprovider";
import MyAxios from "./MyAxios";

const MyInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = MyAxios();
  // use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allusers/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default MyInstructor;
