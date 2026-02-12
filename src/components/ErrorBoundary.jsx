import React from "react";

/** Catches render errors and displays them instead of a blank page */
export class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="theme-app flex min-h-screen flex-col items-center justify-center p-8">
          <h2 className="mb-4 text-xl font-semibold theme-text">Something went wrong</h2>
          <pre className="max-w-2xl overflow-auto rounded bg-slate-800 p-4 text-left text-sm text-red-300">
            {this.state.error?.message ?? String(this.state.error)}
          </pre>
          <button
            type="button"
            onClick={() => this.setState({ error: null })}
            className="mt-4 rounded bg-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-500"
          >
            Dismiss
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
