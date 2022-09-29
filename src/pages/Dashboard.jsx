import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
