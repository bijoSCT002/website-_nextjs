import React from "react";
import { Routes, Route } from "react-router-dom";
import { SmarqLayout } from "../layouts";
import { ProjectListContainer } from "../features/project-list/container/ProjectListContainer";
import { ArchivedProjectsContainer } from "../features/project-list/features/archive/container/ArchivedProjectsContainer";
import { ProjectDetailContainer } from "../features/project-detail/container/ProjectDetailContainer";
import { ProjectSettingsContainer } from "../features/project-settings/container/ProjectSettingsContainer";

/** SMARQ module routes – rendered as element of /smarq/* route */
export function SmarqRoutes() {
  return (
    <Routes>
      <Route element={<SmarqLayout />}>
        <Route index element={<ProjectListContainer />} />
        <Route path="archive" element={<ArchivedProjectsContainer />} />
        <Route path="projects/:projectId" element={<ProjectDetailContainer />} />
        <Route path="projects/:projectId/settings" element={<ProjectSettingsContainer />} />
      </Route>
    </Routes>
  );
}
