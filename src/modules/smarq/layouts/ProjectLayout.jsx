import React from "react";
import { Outlet } from "react-router-dom";

/** Layout wrapper for project-scoped routes (detail, settings) */
export function ProjectLayout() {
  return (
    <div className="theme-page-gradient-simple theme-text min-h-screen">
      <Outlet />
    </div>
  );
}
