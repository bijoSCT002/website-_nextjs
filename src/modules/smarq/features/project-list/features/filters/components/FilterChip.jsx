import React from "react";

/** Dummy FilterChip component */
export function FilterChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs transition-colors ${
        active
          ? "bg-primary/20 text-primary"
          : "bg-muted-bg/50 text-muted hover:bg-muted-bg"
      }`}
    >
      {label}
    </button>
  );
}
