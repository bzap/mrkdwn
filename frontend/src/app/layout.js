import {
    Inter,
    Fira_Code,
    Roboto_Mono,
    JetBrains_Mono,
    IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    display: "swap",
    subsets: ["latin"],
});
const firaCode = Fira_Code({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fira-mono",
});

const robotoMono = Roboto_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-mono",
});

const plexMono = IBM_Plex_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plex-mono",
});

const jetMono = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jet-mono",
});

export const metadata = {
    title: "Mrkdwn",
    description: "A simple, but powerful markdown editor.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} 
                ${firaCode.variable} 
                ${robotoMono.variable} 
                ${plexMono.variable} 
                ${jetMono.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
