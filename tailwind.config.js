/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                base: ["'Poppins'", "'Noto Sans Khmer'", 'sans-serif'],
            }
        },
    },
    plugins: [],
}

