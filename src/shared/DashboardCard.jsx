import { Link } from "react-router-dom";

export const DashboardCard = ({ to, label, description, isPrimary, gridArea, className = "" }) => {
    const baseClasses =
        "group relative flex min-h-[120px] w-full min-w-0 flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-xl backdrop-blur-xl transition-colors duration-150 hover:border-smarq-400/40 hover:bg-white/10 hover:shadow-[0_0_28px_-6px_rgba(76,209,55,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-smarq-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transition-none";

    const primaryClasses =
        "border-smarq-400/20 shadow-[0_0_24px_-6px_rgba(76,209,55,0.2)] hover:scale-[1.02] hover:shadow-[0_0_36px_-6px_rgba(76,209,55,0.4)] motion-reduce:animate-none motion-reduce:hover:scale-100";

    const areaClass = gridArea
        ? {
            center: "grid-area-center",
            "top-left": "grid-area-top-left",
            "top-right": "grid-area-top-right",
            "bottom-left": "grid-area-bottom-left",
            "bottom-right": "grid-area-bottom-right",
        }[gridArea]
        : "";

    return (
        <Link
            to={to}
            className={`${baseClasses} ${isPrimary ? primaryClasses : ""} ${areaClass} ${className}`.trim()}
            aria-label={`Go to ${label}: ${description}`}
        >
            <span className="text-lg font-semibold text-white transition-colors group-hover:text-smarq-400/90">
                {label}
            </span>
            <p className="mt-1 text-sm text-slate-400 transition-colors group-hover:text-slate-300">
                {description}
            </p>
        </Link>
    );
}