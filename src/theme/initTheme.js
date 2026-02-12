import { applyThemeToDocument, getStoredTheme } from "./themes";

/**
 * Applies stored theme to document before React mounts to prevent flash.
 * Import at app entry (main.jsx) before rendering.
 */
if (typeof document !== "undefined") {
  applyThemeToDocument(getStoredTheme());
}
