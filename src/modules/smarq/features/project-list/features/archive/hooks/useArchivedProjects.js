/** Dummy hook – archived projects */

import { useState, useEffect } from "react";
import { getProjects, PROJECT_STATUS } from "../../../../../data/projectsData";

export function useArchivedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => data.filter((p) => p.status === PROJECT_STATUS.ARCHIVED))
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading };
}
