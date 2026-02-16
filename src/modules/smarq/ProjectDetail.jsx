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
      className="min-h-screen bg-background px-4 py-8 text-foreground"
      role="main"
    >
      <div className="mx-auto max-w-4xl">
        <Link
          to="/smarq"
          className="text-sm text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          ← Back to SMARQ Projects
        </Link>
        <h1 className="mt-4 text-2xl font-semibold text-foreground">
          Project details
        </h1>
        <p className="mt-2 text-muted">Project ID: {projectId}</p>
      </div>
    </main>
  );
}
