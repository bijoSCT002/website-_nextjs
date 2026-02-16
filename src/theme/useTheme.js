import { useCallback } from "react";
import { useThemeStore } from "../stores/useThemeStore";
import { THEMES } from "./themes";

/**
 * Theme hook. Returns { theme, setTheme }. Use anywhere in the app.
 */
export function useTheme() {
  const theme = useThemeStore((s) => s.current);
  const setThemeAction = useThemeStore((s) => s.setTheme);

  const setTheme = useCallback(
    (themeId) => {
      if (THEMES.some((t) => t.id === themeId)) {
        setThemeAction(themeId);
      }
    },
    [setThemeAction]
  );

  return { theme, setTheme };
}
