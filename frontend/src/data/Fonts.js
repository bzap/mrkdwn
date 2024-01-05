import {
    Fira_Code,
    IBM_Plex_Mono,
    Roboto_Mono,
    JetBrains_Mono,
    Inter,
    Roboto_Flex,
    Open_Sans,
} from "next/font/google";

export const interSans = Inter({
    variable: "--font-inter",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-inter",
});

export const robotoSans = Roboto_Flex({
    weight: "400",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const openSans = Open_Sans({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-open",
});

export const firaCode = Fira_Code({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fira-mono",
});

export const robotoMono = Roboto_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-mono",
});

export const plexMono = IBM_Plex_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plex-mono",
});

export const jetMono = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jet-mono",
});

export const editorFonts = {
    roboto: {
        var: `var(--font-roboto-mono)`,
        name: "Roboto Mono",
    },
    fira: {
        var: `var(--font-fira-mono)`,
        name: "Fira Code",
    },
    plex: {
        var: `var(--font-plex-mono)`,
        name: "IBM Plex Mono",
    },
    jetbrain: {
        var: `var(--font-jet-mono})`,
        name: "JetBrains Mono",
    },
};

export const viewerFonts = {
    inter: {
        var: interSans.className,
        name: "Inter",
    },
    roboto: {
        var: robotoSans.className,
        name: "Roboto",
    },
    open: {
        var: openSans.className,
        name: "Open Sans",
    },
};
