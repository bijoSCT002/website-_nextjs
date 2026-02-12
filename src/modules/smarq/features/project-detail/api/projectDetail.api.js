/** Dummy API – project detail */

import { getProjects } from "../../data/projectsData";

export async function fetchProjectDetail(projectId) {
  const data = await getProjects();
  return data.find((p) => p.id === projectId) ?? null;
}
