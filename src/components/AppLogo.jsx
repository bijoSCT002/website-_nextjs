import React from "react";
import { Link } from "react-router-dom";

/**
 * App logo in the top bar. Links to home. Accepts optional image src.
 */
export function AppLogo({ logoSrc, alt = "Smarq", children }) {
  return (
    <Link
      to="/"
      className="top-bar__logo"
      aria-label="Go to home"
    >
      {logoSrc ? (
        <img src={logoSrc} alt={alt} className="top-bar__logo-img" />
      ) : (
        <span className="top-bar__logo-text">{children ?? "Smarq"}</span>
      )}
    </Link>
  );
}
