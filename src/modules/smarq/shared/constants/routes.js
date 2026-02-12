/** SMARQ route constants – used across features */

export const SMARQ_PATHS = {
  ROOT: "/smarq",
  PROJECTS: "/smarq/projects",
  PROJECT_DETAIL: "/smarq/projects/:projectId",
  PROJECT_SETTINGS: "/smarq/projects/:projectId/settings",
  ARCHIVE: "/smarq/archive",
};

export const buildProjectDetailPath = (projectId) =>
  `/smarq/projects/${projectId}`;

export const buildProjectSettingsPath = (projectId) =>
  `/smarq/projects/${projectId}/settings`;
