import React from "react";
import { Link } from "react-router-dom";

const ACTIONS = [
  { label: "Technical Docs", to: "#docs", id: "tech-docs" },
  { label: "User Guide", to: "#guide", id: "user-guide" },
  { label: "Support / Help", to: "/support", id: "support" },
];

export function UtilityBar() {
  return (
    <footer
      className="smarq-utility-bar flex flex-wrap items-center justify-center gap-4 px-4 py-3"
      role="contentinfo"
    >
      {ACTIONS.map(({ label, to, id }) => (
        <Link
          key={id}
          to={to}
          className="text-sm text-slate-500 transition-colors hover:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          id={id}
        >
          {label}
        </Link>
      ))}
    </footer>
  );
}
