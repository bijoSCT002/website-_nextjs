/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                smarq: {
                    400: "#4CD137",
                    500: "#3CA92C",
                },
            },
            keyframes: {
                "ai-pulse": {
                    "0%, 100%": {
                        boxShadow: "0 0 24px -4px rgba(76, 209, 55, 0.2)",
                    },
                    "50%": {
                        boxShadow: "0 0 32px -4px rgba(76, 209, 55, 0.35)",
                    },
                },
            },
            animation: {
                "ai-pulse": "ai-pulse 2.5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
}
