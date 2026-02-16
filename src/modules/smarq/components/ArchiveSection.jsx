import React from "react";

export function ArchiveSection() {
  return (
    <section
      className="mt-6 rounded-lg border border-border bg-muted-bg/50 px-4 py-3"
      aria-label="Archive"
    >
      <h3 className="text-sm font-medium text-muted">Archive</h3>
      <p className="mt-1 text-xs text-muted">
        Manage archived projects and restore when needed.
      </p>
    </section>
  );
}
