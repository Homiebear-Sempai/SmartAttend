import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Attendance from "./pages/attendance/Attendance";

function App() {
  const path = window.location.pathname;

  if (path === "/dashboard") return <Dashboard />;
  if (path === "/attendance") return <Attendance />;

  return <Home />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

