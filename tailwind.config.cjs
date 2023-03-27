/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary_900: "var(--primary-color-900)",
                primary_800: "var(--primary-color-800)",
                primary_700: "var(--primary-color-700)",
                primary_600: "var(--primary-color-600)",
                primary_500: "var(--primary-color-500)",
                primary_400: "var(--primary-color-400)",
                primary_300: "var(--primary-color-300)",
                primary_200: "var(--primary-color-200)",
                primary_100: "var(--primary-color-100)",
            },
        },
    },
    plugins: [],
};
