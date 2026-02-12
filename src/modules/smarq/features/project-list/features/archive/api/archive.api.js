/** Dummy API – archive */

import { getProjects, PROJECT_STATUS } from "../../../../../data/projectsData";

export async function fetchArchivedProjects() {
  const data = await getProjects();
  return data.filter((p) => p.status === PROJECT_STATUS.ARCHIVED);
}
