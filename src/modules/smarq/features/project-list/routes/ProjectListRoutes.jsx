import React from "react";
import { Route } from "react-router-dom";
import { ProjectListContainer } from "../container/ProjectListContainer";

export function ProjectListRoutes() {
  return <Route index element={<ProjectListContainer />} />;
}
