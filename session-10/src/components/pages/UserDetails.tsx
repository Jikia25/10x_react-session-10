import { useNavigate, useParams } from "react-router-dom";
import { users } from "../../data/data";

function UserDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [currentUser] = users.filter((user) => user.id === Number(userId));

  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
      <h1>User</h1>
      <h2>user : {currentUser.name}</h2>
      <h2>email : {currentUser.email}</h2>
    </>
  );
}

export default UserDetails;
