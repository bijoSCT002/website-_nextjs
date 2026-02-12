import React from "react";
import { PROJECT_STATUS } from "../data/projectsData";

function StatusIndicator({ status }) {
  const dotClass =
    status === PROJECT_STATUS.ACTIVE
      ? "smarq-status-dot--active"
      : status === PROJECT_STATUS.ARCHIVED
        ? "smarq-status-dot--archived"
        : "smarq-status-dot--draft";
  return (
    <span
      className={`smarq-status-dot ${dotClass}`}
      aria-hidden
      title={status}
    />
  );
}

export function ProjectListPanel({
  searchValue,
  onSearchChange,
  projects,
  selectedId,
  onSelectProject,
  loading,
  emptyMessage = "No projects match your search.",
}) {
  const searchInputClass =
    "w-full rounded-md border border-slate-600/50 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 transition-colors focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30";
  return (
    <aside
      className="smarq-panel flex h-full min-h-[280px] min-w-0 flex-col"
      aria-label="Project list"
    >
      <div className="shrink-0 p-3">
        <label htmlFor="smarq-project-search" className="sr-only">
          Search projects by name
        </label>
        <input
          id="smarq-project-search"
          type="search"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className={searchInputClass}
          aria-label="Search projects by name"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        {loading && (
          <div
            className="flex items-center justify-center py-8 text-slate-500"
            role="status"
            aria-live="polite"
          >
            Loading…
          </div>
        )}
        {!loading && projects.length === 0 && (
          <p className="py-6 text-center text-sm text-slate-500" role="status">
            {emptyMessage}
          </p>
        )}
        {!loading && projects.length > 0 && (
          <ul className="space-y-0.5" role="list">
            {projects.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  onClick={() => onSelectProject(project.id)}
                  className={`smarq-list-item w-full rounded-md border-l-2 border-transparent px-3 py-2.5 text-left text-sm ${
                    selectedId === project.id ? "smarq-list-item--selected" : ""
                  }`}
                  aria-pressed={selectedId === project.id}
                  aria-label={`Select ${project.name}, ${project.status}`}
                >
                  <span className="flex items-center gap-2">
                    <StatusIndicator status={project.status} />
                    <span className="truncate text-slate-200">{project.name}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
