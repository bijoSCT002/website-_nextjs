import React from "react";

/** Dummy component – project grid placeholder */
export function ProjectGrid({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" role="list">
      {children}
    </div>
  );
}
