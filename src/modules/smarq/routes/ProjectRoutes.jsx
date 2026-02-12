import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProjectLayout } from "../layouts";
import { ProjectDetailContainer } from "../features/project-detail/container/ProjectDetailContainer";
import { ProjectSettingsContainer } from "../features/project-settings/container/ProjectSettingsContainer";

/** Project-scoped routes (detail, settings) */
export function ProjectRoutes() {
  return (
    <Route path="projects" element={<ProjectLayout />}>
      <Route path=":projectId" element={<ProjectDetailContainer />} />
      <Route path=":projectId/settings" element={<ProjectSettingsContainer />} />
    </Route>
  );
}
