/**
 * Theme definitions for the app. IDs match data-theme values in theme.css.
 */

export const DEFAULT_THEME_ID = "dark-ai";

export const THEMES = [
  { id: "dark-ai", label: "Dark AI" },
  { id: "deep-space", label: "Deep Space" },
  { id: "neon-matrix", label: "Neon Matrix" },
  { id: "industrial-graphite", label: "Industrial Graphite" },
];

export const STORAGE_KEY = "smarq-theme";

/** Read persisted theme from localStorage. Used by Redux initial state and init. */
export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const found = THEMES.some((t) => t.id === stored);
    return found ? stored : DEFAULT_THEME_ID;
  } catch {
    return DEFAULT_THEME_ID;
  }
}

/** Apply theme to document. Used by ThemeSync and init. */
export function applyThemeToDocument(themeId) {
  document.documentElement.setAttribute("data-theme", themeId);
}
