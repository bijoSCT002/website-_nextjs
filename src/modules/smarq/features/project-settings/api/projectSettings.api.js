/** Dummy API – project settings */

export async function fetchProjectSettings(projectId) {
  return { projectId, theme: "dark" };
}

export async function updateProjectSettings(projectId, updates) {
  return { ...updates };
}
