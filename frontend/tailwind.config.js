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
            mono: ["var(--font-fira-mono)"],
        },
        screens: {
            base: "0px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
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
                        // fontSize: "14px",
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
                            fontWeight: "bold",
                            "border-bottom-width": "1px",
                            marginBottom: "0",
                            paddingBottom: "8px",
                        },
                        h2: {
                            fontWeight: "bold",
                            "border-bottom-width": "1px",
                            marginBottom: "16px",
                            paddingBottom: "6px",
                        },
                        h3: {
                            fontWeight: "bold",
                            marginBottom: "10px",
                        },
                        h4: {
                            fontWeight: "bold",
                            marginBottom: "10px",
                        },
                        h5: {
                            fontWeight: "500",
                            marginBottom: "10px",
                        },
                        h6: {
                            fontWeight: "500",
                            marginBottom: "10px",
                            color: "#78716c",
                        },
                        hr: {
                            borderWidth: "2px",
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
                            "background-color": "#d1fae5",
                            "padding-left": "6px",
                            "padding-right": "6px",
                            "padding-top": "2px",
                            paddingBottom: "2px",
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
                            paddingBottom: "2px",
                            "border-radius": "5px",
                            lineHeight: "1.8rem",
                            "background-color": "#f5f5f4",
                            "font-weight": "normal",
                        },
                        "code::before": {
                            content: "",
                        },
                        "code::after": {
                            content: "",
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
                        },
                        "blockquote p:first-of-type::before": {
                            content: "none",
                        },
                        "blockquote p:first-of-type::after": {
                            content: "none",
                        },
                    },
                },

                dark: {
                    css: {
                        // fontSize: "14px",
                        "--tw-prose-body": "#CECFD0",
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
                        path: {
                            fill: "#CECFD0",
                        },
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
                        h1: {
                            fontWeight: "bold",
                            "border-bottom-width": "1px",
                            marginBottom: "0",
                            paddingBottom: "8px",
                            color: "#CECFD0",
                            "border-color": "#737373",
                        },
                        h2: {
                            fontWeight: "bold",
                            "border-bottom-width": "1px",
                            marginBottom: "16px",
                            paddingBottom: "6px",
                            color: "#CECFD0",
                            "border-color": "#737373",
                        },
                        h3: {
                            color: "#CECFD0",
                            fontWeight: "bold",
                            marginBottom: "10px",
                        },
                        h4: {
                            color: "#CECFD0",
                            fontWeight: "bold",
                            marginBottom: "10px",
                        },
                        h5: {
                            color: "#CECFD0",
                            fontWeight: "500",
                            marginBottom: "10px",
                        },
                        h6: {
                            fontWeight: "500",
                            marginBottom: "10px",
                            color: "#737373",
                        },
                        hr: {
                            borderColor: "#737373",
                        },
                        a: {
                            color: "#a5b4fc",
                        },
                        mark: {
                            "background-color": "#0f766e",
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
                            "background-color": "#52525b",
                        },
                        "code::before": {
                            content: "",
                        },
                        "code::after": {
                            content: "",
                        },
                        pre: {
                            "background-color": "#52525b",
                            color: "#CECFD0",
                        },
                        blockquote: {
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
                        th: {
                            color: "#CECFD0",
                        },
                        table: {
                            margin: "5px",
                        },
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
