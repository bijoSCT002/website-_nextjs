import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_THEME_ID, getStoredTheme, STORAGE_KEY, THEMES } from "../../theme/themes";

/**
 * Theme slice – single source of truth for UI theme.
 * Initial state from localStorage. Persistence handled by ThemeSync.
 */
const initialState = {
  current: getStoredTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      const themeId = action.payload;
      if (THEMES.some((t) => t.id === themeId)) {
        state.current = themeId;
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;

/** Select current theme ID from state. */
export const selectTheme = (state) => state.theme.current;

export default themeSlice.reducer;
