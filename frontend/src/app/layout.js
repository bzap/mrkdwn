import "./globals.css";
import {
    robotoMono,
    firaCode,
    plexMono,
    jetMono,
    interSans,
} from "@/components/interface/Fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Mrkdwn",
    description: "A simple, but powerful markdown editor.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${interSans.className} 
                ${firaCode.variable} 
                ${robotoMono.variable} 
                ${plexMono.variable} 
                ${jetMono.variable}`}
            >
                <Analytics />
                {children}
            </body>
        </html>
    );
}
