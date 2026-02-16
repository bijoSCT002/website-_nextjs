import React from "react";

/** Dummy ProjectPreviewDrawer component */
export function ProjectPreviewDrawer({ open, project, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-label="Project preview"
    >
      <div className="mx-4 max-w-lg rounded-lg border border-border bg-card p-6 shadow-xl">
        <h3 className="text-lg font-medium text-card-foreground">{project?.name ?? "Preview"}</h3>
        <p className="mt-2 text-sm text-muted">{project?.owner ?? ""}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 rounded bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90"
        >
          Close
        </button>
      </div>
    </div>
  );
}
