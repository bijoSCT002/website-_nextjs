/** Dummy hook – project list data */

import { useState, useEffect } from "react";
import { getProjects } from "../../../data/projectsData";

export function useProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading };
}
