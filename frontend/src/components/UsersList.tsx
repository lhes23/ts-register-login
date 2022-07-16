import { useEffect, useState } from "react";
import { getAllUsers } from "../api/UserApi";

type Props = {};
interface IUsers {
  _id: string;
  username: string;
  email: string;
}
const UsersList = (props: Props) => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUsers();
      const data = await res.json();
      setUsers(data.users);
    };

    fetchData();
  }, []);

  return (
    <div>
      UsersList
      <ul>
        {users?.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
