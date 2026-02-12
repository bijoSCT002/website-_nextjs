/** Project context hook – dummy placeholder */

import { createContext, useContext } from "react";

export const ProjectContext = createContext(null);

export function useProjectContext() {
  const ctx = useContext(ProjectContext);
  return ctx ?? {};
}
