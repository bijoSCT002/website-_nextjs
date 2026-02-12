import React from "react";

export function CreateProjectCard() {
  return (
    <div
      className="smarq-card flex min-h-[120px] flex-col items-center justify-center rounded-lg border-dashed p-4 text-center transition-colors hover:border-cyan-500/20"
      role="presentation"
    >
      <span className="text-2xl text-slate-500" aria-hidden>
        +
      </span>
      <span className="mt-2 text-sm font-medium text-slate-400">
        Create New Project
      </span>
    </div>
  );
}
