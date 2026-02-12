import React from "react";
import { Link } from "react-router-dom";
import { useArchivedProjects } from "../hooks/useArchivedProjects";
import { SMARQ_PATHS } from "../../../../../shared/constants";

/** Dummy Archived projects page */
export function ArchivedProjectsPage() {
  const { projects, loading } = useArchivedProjects();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link to={SMARQ_PATHS.ROOT} className="text-sm text-cyan-400 hover:underline">
        ← Back to Projects
      </Link>
      <h1 className="mt-4 text-2xl font-semibold theme-text">Archived Projects</h1>
      {loading ? (
        <p className="mt-4 theme-text-muted">Loading…</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {projects.map((p) => (
            <li key={p.id} className="rounded border border-slate-600/50 bg-slate-800/30 px-4 py-2">
              <span className="theme-text">{p.name}</span>
              <span className="ml-2 text-xs theme-text-muted">({p.status})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
