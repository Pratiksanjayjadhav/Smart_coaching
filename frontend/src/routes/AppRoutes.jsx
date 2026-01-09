import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import Dashboard from "../components/dashboard/Dashboard.jsx"; // generic home page
import AthleteDashboard from "../pages/Athlete/AthleteDashboard.jsx";
import AdminDashboard from "../pages/Admin/AdminDashboard.jsx";
import CoachDashboard from "../pages/Coach/CoachDashboard.jsx"
import AboutUs from "../components/AboutUs/AboutUs.jsx"
function AppRoutes() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Dashboard />} />
    {/* AboutUs pages */}
       <Route path="/about" element={<AboutUs />} />
      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Admin routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/athlete/dashboard" element={<AthleteDashboard />} />  {/* <-- Add this */}
              <Route path="/coach/dashboard" element={<CoachDashboard />} />


      {/* Fallback */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
}

export default AppRoutes;
