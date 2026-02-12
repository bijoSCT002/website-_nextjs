import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme";
import { THEMES } from "../theme/themes";

/**
 * Top-right action group: info, app market, theme.
 * Theme button opens a floating dropdown with theme list and radio-style selection.
 */
export function TopRightActions() {
  const { theme, setTheme } = useTheme();
  const [themeOpen, setThemeOpen] = useState(false);
  const containerRef = useRef(null);

  const handleCloseTheme = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setThemeOpen(false);
    }
  };

  useEffect(() => {
    if (!themeOpen) return;
    const onEscape = (e) => {
      if (e.key === "Escape") setThemeOpen(false);
    };
    document.addEventListener("click", handleCloseTheme);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("click", handleCloseTheme);
      document.removeEventListener("keydown", onEscape);
    };
  }, [themeOpen]);

  const handleSelectTheme = (themeId) => {
    setTheme(themeId);
    setThemeOpen(false);
  };

  return (
    <div className="top-right-actions">
      <button
        type="button"
        className="top-right-actions__btn"
        aria-label="Info"
      >
        info
      </button>
      <button
        type="button"
        className="top-right-actions__btn"
        aria-label="App market"
      >
        market
      </button>
      <div className="top-right-actions__theme-wrap" ref={containerRef}>
        <button
          type="button"
          className="top-right-actions__btn top-right-actions__btn--theme"
          onClick={() => setThemeOpen((o) => !o)}
          aria-expanded={themeOpen}
          aria-haspopup="listbox"
          aria-label="Change theme"
          id="theme-menu-trigger"
        >
          <span>theme</span>
          <span className="top-right-actions__theme-icon" aria-hidden />
        </button>
        {themeOpen && (
          <div
            className="top-right-actions__dropdown"
            role="listbox"
            aria-labelledby="theme-menu-trigger"
          >
            <div className="top-right-actions__dropdown-title">Theme</div>
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                role="option"
                aria-selected={theme === t.id}
                className={`top-right-actions__theme-option ${theme === t.id ? "top-right-actions__theme-option--active" : ""}`}
                onClick={() => handleSelectTheme(t.id)}
              >
                <span
                  className={`top-right-actions__preview top-right-actions__preview--${t.id}`}
                  aria-hidden
                />
                <span className="top-right-actions__theme-label">{t.label}</span>
                <span
                  className={`top-right-actions__radio ${theme === t.id ? "top-right-actions__radio--selected" : ""}`}
                  aria-hidden
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
