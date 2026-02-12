import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_STATUS } from "../data/projectsData";

function StatusDot({ status }) {
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

export function ProjectCard({ project, isRecent }) {
  const cardClass = isRecent
    ? "smarq-card smarq-card--recent"
    : "smarq-card";
  return (
    <Link
      to={`/smarq/projects/${project.id}`}
      className={`block rounded-lg p-4 text-left ${cardClass}`}
      aria-label={`Open ${project.name}, ${project.status}, owner ${project.owner}`}
    >
      <div className="flex items-center gap-2">
        <StatusDot status={project.status} />
        <span className="text-xs uppercase tracking-wide text-slate-500">
          {project.status}
        </span>
      </div>
      <h3 className="mt-2 truncate font-medium text-white">{project.name}</h3>
      <p className="mt-1 truncate text-sm text-slate-400">{project.owner}</p>
    </Link>
  );
}
