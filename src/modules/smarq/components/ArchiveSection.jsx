import React from "react";

export function ArchiveSection() {
  return (
    <section
      className="mt-6 rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3"
      aria-label="Archive"
    >
      <h3 className="text-sm font-medium text-slate-400">Archive</h3>
      <p className="mt-1 text-xs text-slate-500">
        Manage archived projects and restore when needed.
      </p>
    </section>
  );
}
