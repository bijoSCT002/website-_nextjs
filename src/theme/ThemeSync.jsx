import { useEffect } from "react";
import { useThemeStore } from "../stores/useThemeStore";
import { applyThemeToDocument, STORAGE_KEY } from "./themes";

/**
 * Syncs theme state to the DOM and localStorage.
 * Runs on mount and whenever theme changes.
 */
export function ThemeSync() {
  const theme = useThemeStore((s) => s.current);

  useEffect(() => {
    applyThemeToDocument(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  return null;
}
