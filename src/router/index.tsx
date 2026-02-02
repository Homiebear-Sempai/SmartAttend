import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Attendance from "../pages/attendance/Attendance";
import Admin from "../pages/admin/Admin";
import StudentPortal from "../pages/portal/StudentPortal";
import ParentPortal from "../pages/parent-portal/ParentPortal";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/attendance", element: <Attendance /> },
  { path: "/admin", element: <Admin /> },
  { path: "/portal", element: <StudentPortal /> },
  { path: "/parent-portal", element: <ParentPortal /> }
]);
