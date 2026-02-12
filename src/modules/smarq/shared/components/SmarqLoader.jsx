import React from "react";

/** Dummy loader for SMARQ module */
export function SmarqLoader() {
  return (
    <div
      className="flex items-center justify-center py-12"
      role="status"
      aria-label="Loading"
    >
      <span className="theme-text-muted text-sm">Loading…</span>
    </div>
  );
}
