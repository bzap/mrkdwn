/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            mono: ["var(--font-fira-code)"],
        },
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
                        "--tw-prose-body": "black",
                        "--tw-prose-headings": "black",
                        "--tw-prose-bold": "black",
                        "--tw-prose-counters": "black",
                        "--tw-prose-bullets": "black",
                        "--tw-prose-lead": "black",
                        "--tw-prose-th-borders": "#e7e5e4",
                        "--tw-prose-td-borders": "#e7e5e4",
                        "--tw-prose-captions": "#CECFD0",
                        lineHeight: "1.1rem",
                        color: "black",
                        h1: {
                            "padding-bottom": "8px",
                            "border-bottom-width": "1px",
                        },
                        h2: {
                            "padding-bottom": "8px",
                            "border-bottom-width": "1px",
                        },
                        h3: {
                            "padding-bottom": "8px",
                            "border-bottom-width": "1px",
                        },
                        h4: {
                            "padding-bottom": "8px",
                            "border-bottom-width": "1px",
                        },
                        h5: {
                            "padding-bottom": "8px",
                            "border-bottom-width": "1px",
                        },
                        h6: {
                            "padding-bottom": "8px",
                            "border-bottom-width": "1px",
                        },
                        p: {
                            "word-break": "break-words",
                        },
                        a: {
                            color: "#6366f1",
                        },
                        "a:hover": {
                            color: "#818cf8",
                        },
                        ul: {
                            lineHeight: "1.1rem",
                        },
                        ol: {
                            lineHeight: "1.1rem",
                        },
                        mark: {
                            "background-color": "#ecfdf5",
                            "padding-left": "6px",
                            "padding-right": "6px",
                            "padding-top": "2px",
                            "padding-bottom": "2px",
                            lineHeight: "1.8rem",
                            "border-radius": "5px",
                            color: "black",
                        },
                        input: {
                            margin: "0",
                        },
                        code: {
                            color: "black",
                            "padding-left": "6px",
                            "padding-right": "6px",
                            "padding-top": "2px",
                            "padding-bottom": "2px",
                            "border-radius": "5px",
                            lineHeight: "1.8rem",
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
                            borderLeftColor: "#d6d3d1",
                        },
                        table: {
                            margin: "5px",
                            // lineHeight: "1.1rem",
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
                dark: {
                    css: {
                        "--tw-prose-body": "#CECFD0",
                        "--tw-prose-headings": "#CECFD0",
                        "--tw-prose-bold": "#CECFD0",
                        "--tw-prose-counters": "#CECFD0",
                        "--tw-prose-bullets": "#CECFD0",
                        "--tw-prose-hr": "#CECFD0",
                        "--tw-prose-quotes": "#CECFD0",
                        "--tw-prose-quote-borders": "#CECFD0",
                        "--tw-prose-captions": "#CECFD0",
                        "--tw-prose-code": "#CECFD0",
                        "--tw-prose-pre-code": "#CECFD0",
                        "--tw-prose-pre-bg": "#CECFD0",
                        "--tw-prose-th-borders": "#737373",
                        "--tw-prose-td-borders": "#737373",
                        lineHeight: "1.1rem",
                        p: {
                            color: "#CECFD0",
                            "word-break": "break-words",
                        },
                        ul: {
                            lineHeight: "1.1rem",
                        },
                        ol: {
                            lineHeight: "1.1rem",
                        },
                        li: {
                            color: "#CECFD0",
                        },
                        h6: {
                            color: "#CECFD0",
                        },
                        a: {
                            color: "#a5b4fc",
                        },
                        mark: {
                            "background-color": "#0f766e",
                            "padding-left": "6px",
                            "padding-right": "6px",
                            "padding-top": "2px",
                            "padding-bottom": "2px",
                            lineHeight: "1.8rem",
                            "border-radius": "5px",
                            color: "#CECFD0",
                        },
                        input: {
                            margin: "0",
                        },
                        "a:hover": {
                            color: "#c7d2fe",
                        },
                        code: {
                            color: "#CECFD0",
                            "padding-left": "6px",
                            "padding-right": "2px",
                            "padding-top": "2px",
                            "padding-bottom": "2px",
                            "border-radius": "5px",
                            lineHeight: "1.8rem",
                            "border-radius": "5px",
                            "background-color": "#52525b",
                            "font-weight": "normal",
                        },
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                        pre: {
                            "background-color": "#52525b",
                            color: "#CECFD0",
                        },
                        blockquote: {
                            "font-style": "normal",
                            "font-weight": "normal",
                            color: "#a1a1aa",
                            borderLeftColor: "#52525b",
                        },
                        "blockquote p:first-of-type::before": {
                            content: "none",
                        },
                        "blockquote p:first-of-type::after": {
                            content: "none",
                        },
                        td: {
                            color: "#CECFD0",
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
        variants: {
            typography: ["dark"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
