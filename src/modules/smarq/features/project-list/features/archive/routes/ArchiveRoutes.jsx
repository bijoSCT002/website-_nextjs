import React from "react";
import { Route } from "react-router-dom";
import { ArchivedProjectsContainer } from "../container/ArchivedProjectsContainer";
import { SMARQ_PATHS } from "../../../shared/constants";

export function ArchiveRoutes() {
  return (
    <Route path="archive" element={<ArchivedProjectsContainer />} />
  );
}
