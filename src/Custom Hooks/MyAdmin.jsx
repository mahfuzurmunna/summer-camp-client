import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Component/AuthProiver/Authprovider";
import MyAxios from "./MyAxios";

const MyAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = MyAxios();
  // use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allusers/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default MyAdmin;
