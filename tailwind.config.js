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
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                muted: "hsl(var(--muted-foreground))",
                "muted-bg": "hsl(var(--muted))",
                card: "hsl(var(--card))",
                "card-foreground": "hsl(var(--card-foreground))",
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                secondary: "hsl(var(--secondary))",
                "secondary-foreground": "hsl(var(--secondary-foreground))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                destructive: "hsl(var(--destructive))",
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
