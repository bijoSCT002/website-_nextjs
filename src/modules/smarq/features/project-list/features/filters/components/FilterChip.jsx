import React from "react";

/** Dummy FilterChip component */
export function FilterChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs transition-colors ${
        active
          ? "bg-cyan-500/20 text-cyan-300"
          : "bg-slate-700/50 text-slate-400 hover:bg-slate-600/50"
      }`}
    >
      {label}
    </button>
  );
}
