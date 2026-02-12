import React, { createContext, useState, useCallback } from "react";

export const ProjectListContext = createContext(null);

export function ProjectListProvider({ children }) {
  const [selectedId, setSelectedId] = useState(null);
  const selectProject = useCallback((id) => setSelectedId(id), []);

  return (
    <ProjectListContext.Provider
      value={{ selectedId, selectProject }}
    >
      {children}
    </ProjectListContext.Provider>
  );
}
