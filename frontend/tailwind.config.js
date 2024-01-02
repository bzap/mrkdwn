/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        screens: {
            base: "0px",
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            typography: {
                DEFAULT: {
                    css: {
                        // maxWidth: "1-",
                        color: "black",
                        p: {
                            "word-break": "break-words",
                        },
                        a: {
                            color: "#6366f1",
                        },
                        "a:hover": {
                            color: "#818cf8",
                        },
                        code: {
                            color: "black",
                            padding: "6px",
                            "border-radius": "5px",
                            "background-color": "#f5f5f4",
                            "font-weight": "normal",
                        },
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                        pre: {
                            "background-color": "#f5f5f4",
                            color: "black",
                        },
                        blockquote: {
                            "font-style": "normal",
                            "font-weight": "normal",
                            color: "#78716c",
                        },
                        "blockquote p:first-of-type::before": {
                            content: "none",
                        },
                        "blockquote p:first-of-type::after": {
                            content: "none",
                        },
                        // table: {
                        //     display: "block",
                        //     width: "100%",
                        //     color: "#78716c",
                        // },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
