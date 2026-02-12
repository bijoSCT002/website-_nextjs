/** Dummy hook – project detail data */

import { useState, useEffect } from "react";
import { getProjects } from "../../data/projectsData";

export function useProjectDetail(projectId) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectId) {
      setLoading(false);
      return;
    }
    getProjects()
      .then((data) => data.find((p) => p.id === projectId))
      .then(setProject)
      .finally(() => setLoading(false));
  }, [projectId]);

  return { project, loading };
}
