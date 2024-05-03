/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    extend: {
        typography: {
            DEFAULT: {
                css: {
                    ul: {
                        listStyleType: 'disc',
                    },
                    ol: {
                        listStyleType: 'decimal',
                    },
                    li: {
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem',
                    },
                },
            },
        },
    },
    theme: {
        
        extend: {
            colors: {
                /*
                primary: "#2b6777",
                secondary: "#c8d8e4",
                text_white: "#ffffff",
                button: "#52ab98",
                text: "#f2f2f2",
                buttonhover: "#3e8e7f",
                */
            },
        },
        
    },
    plugins: [require("daisyui"), require('@tailwindcss/typography'),],

    // daisyUI config (optional - here are the default values)
    daisyui: {
        themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};
