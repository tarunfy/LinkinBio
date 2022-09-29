import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout, user } = useContext(AuthContext);
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h2>{user.displayName}</h2>
      <img src={user?.photoURL} alt="csd" />
    </div>
  );
};

export default Dashboard;
