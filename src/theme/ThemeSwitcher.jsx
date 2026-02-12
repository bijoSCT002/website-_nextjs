import React, { useRef, useState } from "react";
import { useTheme } from "./useTheme";
import { THEMES } from "./themes";

/**
 * Lightweight theme switcher. Place anywhere; no layout shift.
 * Uses a compact dropdown; respects focus and keyboard.
 */
export function ThemeSwitcher({ className = "" }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClose = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    if (!open) return;
    const onEscape = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("click", handleClose);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("click", handleClose);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const current = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <div className={`relative ${className}`.trim()} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="theme-switcher-btn theme-switcher-focus flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Change theme"
        id="theme-switcher-button"
      >
        <span aria-hidden className="theme-switcher-muted">
          Theme
        </span>
        <span>{current.label}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-labelledby="theme-switcher-button"
          className="theme-switcher-list absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-lg py-1"
        >
          {THEMES.map((t) => (
            <li key={t.id} role="option" aria-selected={theme === t.id}>
              <button
                type="button"
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className="theme-switcher-item theme-switcher-focus w-full px-3 py-2 text-left text-sm transition-colors focus:outline-none"
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
