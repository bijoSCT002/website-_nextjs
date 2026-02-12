/** Dummy API – project list */

import { getProjects } from "../../../data/projectsData";

export async function fetchProjectList() {
  return getProjects();
}
