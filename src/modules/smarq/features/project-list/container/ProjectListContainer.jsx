import React from "react";
import { ProjectListPage } from "../pages/ProjectListPage";
import { ProjectListProvider } from "../context/ProjectListContext";

/** Container – provides context and renders page */
export function ProjectListContainer() {
  return (
    <ProjectListProvider>
      <ProjectListPage />
    </ProjectListProvider>
  );
}
