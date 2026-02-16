import React from "react";
import { Link } from "react-router-dom";
import { SMARQ_PATHS } from "../../../shared/constants";

/** Dummy ArchiveSection – feature-specific; existing ArchiveSection stays in smarq/components */
export function ProjectListArchiveSection() {
  return (
    <section
      className="mt-6 rounded-lg border border-border bg-muted-bg/50 px-4 py-3"
      aria-label="Archive"
    >
      <h3 className="text-sm font-medium text-muted">Archive</h3>
      <p className="mt-1 text-xs text-muted">
        Manage archived projects.{" "}
        <Link to={SMARQ_PATHS.ARCHIVE} className="text-primary hover:underline">
          View archived
        </Link>
      </p>
    </section>
  );
}
