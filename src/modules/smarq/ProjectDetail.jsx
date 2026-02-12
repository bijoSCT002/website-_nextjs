import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { recordProjectView } from "./data/projectsData";

export function ProjectDetail() {
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) recordProjectView(projectId);
  }, [projectId]);
  return (
    <main
      className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100"
      role="main"
    >
      <div className="mx-auto max-w-4xl">
        <Link
          to="/smarq"
          className="text-sm text-slate-400 transition-colors hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          ← Back to SMARQ Projects
        </Link>
        <h1 className="mt-4 text-2xl font-semibold text-white">
          Project details
        </h1>
        <p className="mt-2 text-slate-400">Project ID: {projectId}</p>
      </div>
    </main>
  );
}
