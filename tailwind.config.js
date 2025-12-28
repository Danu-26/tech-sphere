/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1BC47D",
                secondary: "#FFFFFF",
                accent: "#111316",
                tertiary:"#6C7484",
                cardBg: "#1a1d24",
                infoBg: "#B2BEB5"
            },
        },
    },
    plugins: [],
}
