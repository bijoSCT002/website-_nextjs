import React from "react";
import { Link } from "react-router-dom";
import { buildProjectDetailPath } from "../../../shared/constants";

/** Dummy ProjectHeader component */
export function ProjectHeader({ project }) {
  return (
    <header className="border-b border-slate-600/50 px-4 py-3">
      <Link
        to="/smarq"
        className="text-sm text-cyan-400 hover:underline"
      >
        ← Back to Projects
      </Link>
      <h1 className="mt-2 text-xl font-semibold theme-text">
        {project?.name ?? "Project"}
      </h1>
    </header>
  );
}
