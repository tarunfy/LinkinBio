import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import WalkThrough from "./pages/WalkThrough";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!user ? <Home /> : <Navigate to="/walk-through" />}
        />
        <Route
          path="/walk-through"
          element={user ? <WalkThrough /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default App;
