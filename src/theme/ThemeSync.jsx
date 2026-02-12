import React, { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { selectTheme } from "../store/slices/themeSlice";
import { applyThemeToDocument, STORAGE_KEY } from "./themes";

/**
 * Syncs Redux theme state to the DOM and localStorage.
 * Mount inside Provider. Runs on mount and whenever theme changes.
 */
export function ThemeSync() {
  const theme = useAppSelector(selectTheme);

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
