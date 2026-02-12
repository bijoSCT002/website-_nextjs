import React from "react";
import { Outlet } from "react-router-dom";

/** Layout wrapper for SMARQ module routes */
export function SmarqLayout() {
  return (
    <div className="theme-page-gradient-simple theme-text min-h-screen">
      <Outlet />
    </div>
  );
}
