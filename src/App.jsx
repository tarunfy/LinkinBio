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
          element={
            user && !user?.details ? (
              <WalkThrough />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={user && user?.details ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default App;
