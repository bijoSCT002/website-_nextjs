import React from "react";
import { Link } from "react-router-dom";
import { buildProjectDetailPath } from "../../../shared/constants";

/** Dummy ProjectCard – feature-specific; existing ProjectCard stays in smarq/components */
export function ProjectListProjectCard({ project }) {
  return (
    <Link
      to={buildProjectDetailPath(project.id)}
      className="block rounded-lg border border-slate-600/50 bg-slate-800/30 p-4 transition-colors hover:border-slate-500/50"
    >
      <h3 className="font-medium theme-text">{project?.name ?? "Project"}</h3>
      <p className="mt-1 text-sm theme-text-muted">{project?.owner ?? ""}</p>
    </Link>
  );
}
