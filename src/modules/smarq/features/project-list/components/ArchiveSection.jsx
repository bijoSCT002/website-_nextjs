import React from "react";
import { Link } from "react-router-dom";
import { SMARQ_PATHS } from "../../../shared/constants";

/** Dummy ArchiveSection – feature-specific; existing ArchiveSection stays in smarq/components */
export function ProjectListArchiveSection() {
  return (
    <section
      className="mt-6 rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3"
      aria-label="Archive"
    >
      <h3 className="text-sm font-medium text-slate-400">Archive</h3>
      <p className="mt-1 text-xs text-slate-500">
        Manage archived projects.{" "}
        <Link to={SMARQ_PATHS.ARCHIVE} className="text-cyan-400 hover:underline">
          View archived
        </Link>
      </p>
    </section>
  );
}
