import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Customhooks/useAxios";


const Manageuser = () => {
  const [axiosSecure] = useAxios();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    });

  return (
    <div>
      <h2>Hello users</h2>
    </div>
  );
};

export default Manageuser;