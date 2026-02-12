import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTheme } from "../store/slices/themeSlice";
import { selectTheme } from "../store/slices/themeSlice";
import { THEMES } from "./themes";

/**
 * Redux-backed theme hook. Same API as previous Context-based useTheme.
 * Returns { theme, setTheme }. Use anywhere inside the app (must be within Redux Provider).
 */
export function useTheme() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const setThemeAction = useCallback(
    (themeId) => {
      if (THEMES.some((t) => t.id === themeId)) {
        dispatch(setTheme(themeId));
      }
    },
    [dispatch]
  );

  return { theme, setTheme: setThemeAction };
}
