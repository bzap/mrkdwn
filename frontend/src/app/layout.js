import { Inter, Fira_Code } from "next/font/google";
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

export const metadata = {
    title: "Mrkdwn",
    description: "A simple, but powerful markdown editor.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${firaCode.variable}`}>
                {children}
            </body>
        </html>
    );
}
