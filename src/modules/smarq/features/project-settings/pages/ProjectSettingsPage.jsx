import React from "react";
import { Link, useParams } from "react-router-dom";
import { SMARQ_PATHS, buildProjectDetailPath } from "../../../shared/constants";

/** Dummy Project settings page */
export function ProjectSettingsPage() {
  const { projectId } = useParams();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        to={projectId ? buildProjectDetailPath(projectId) : SMARQ_PATHS.ROOT}
        className="text-sm text-cyan-400 hover:underline"
      >
        ← Back to Project
      </Link>
      <h1 className="mt-4 text-2xl font-semibold theme-text">Project Settings</h1>
      <p className="mt-2 theme-text-muted">
        Project ID: {projectId ?? "—"}
      </p>
      <p className="mt-4 text-sm theme-text-muted">
        Settings placeholder. Configure project options here.
      </p>
    </div>
  );
}
