/** Dummy hook – project preview drawer state */

import { useState, useCallback } from "react";

export function useProjectPreview() {
  const [previewProject, setPreviewProject] = useState(null);
  const [open, setOpen] = useState(false);

  const openPreview = useCallback((project) => {
    setPreviewProject(project);
    setOpen(true);
  }, []);

  const closePreview = useCallback(() => {
    setOpen(false);
    setPreviewProject(null);
  }, []);

  return { previewProject, open, openPreview, closePreview };
}
