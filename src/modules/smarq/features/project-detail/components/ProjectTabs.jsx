import React from "react";

/** Dummy ProjectTabs component */
export function ProjectTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex gap-2 border-b border-slate-600/50 px-4">
      {(tabs ?? ["Overview", "Settings"]).map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange?.(tab)}
          className={`border-b-2 px-4 py-2 text-sm ${
            activeTab === tab
              ? "border-cyan-500 text-cyan-300"
              : "border-transparent theme-text-muted hover:theme-text"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
