/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2b6777",
                secondary: "#c8d8e4",
                text_white: "#ffffff",
                button: "#52ab98",
                text: "#f2f2f2",
                buttonhover: "#3e8e7f",
            },
        },
    },
    plugins: [],
};
