/** Dummy hook – project selection state */

import { useState, useCallback } from "react";

export function useProjectSelection() {
  const [selectedId, setSelectedId] = useState(null);

  const selectProject = useCallback((id) => setSelectedId(id), []);
  const clearSelection = useCallback(() => setSelectedId(null), []);

  return { selectedId, selectProject, clearSelection };
}
