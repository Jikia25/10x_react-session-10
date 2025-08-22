import { Link } from "react-router-dom";
import { users } from "../../data/data";
import type Data from "../../interefaces/data";
function Users() {
  return (
    <div>
      <h1>users list</h1>

      <ul>
        {users.map((user:Data) => {
          return (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
