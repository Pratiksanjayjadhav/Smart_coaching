import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login.jsx";
import Dashboard from "../components/dashboard/Dashboard.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
