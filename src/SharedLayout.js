import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
