import React from "react";

export function CreateProjectCard() {
  return (
    <div
      className="smarq-card flex min-h-[120px] flex-col items-center justify-center rounded-lg border-dashed p-4 text-center transition-colors hover:border-primary/30"
      role="presentation"
    >
      <span className="text-2xl text-muted" aria-hidden>
        +
      </span>
      <span className="mt-2 text-sm font-medium text-muted">
        Create New Project
      </span>
    </div>
  );
}
