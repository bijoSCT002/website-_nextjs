import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DEFAULT_THEME_ID, getStoredTheme, THEMES } from "../theme/themes";

export const useThemeStore = create(
  devtools(
    (set) => ({
  current: getStoredTheme(),
  setTheme: (themeId) =>
    set((state) => {
      if (!THEMES.some((t) => t.id === themeId)) return state;
      return { current: themeId };
    }),
  reset: () => set({ current: DEFAULT_THEME_ID }),
}),
    { name: "theme" }
  )
);
