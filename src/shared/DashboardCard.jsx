import { Link } from "react-router-dom";

export const DashboardCard = ({ to, label, description, isPrimary, gridArea, className = "" }) => {
    const baseClasses =
        "group relative flex min-h-[120px] w-full min-w-0 flex-col justify-center rounded-xl border p-6 text-center transition-colors duration-150 motion-reduce:transition-none " +
        "dashboard-card";

    const primaryClasses = "dashboard-card--primary";

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
            <span className="dashboard-card__label">
                {label}
            </span>
            <p className="dashboard-card__desc">
                {description}
            </p>
        </Link>
    );
}