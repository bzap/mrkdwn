import { Icons } from "../interface/Icons";
import { updateText } from "@/components/workspace/navbar/text/ButtonHandlers";

export const TextStyleGroup = {
    bold: {
        icon: Icons.BoldIcon,
        func: updateText,
        symbol: "**",
    },
    italic: {
        icon: Icons.ItalicIcon,
        func: updateText,
        symbol: "_",
    },
    strikeThrough: {
        icon: Icons.StrikeThroughIcon,
        func: updateText,
        symbol: "~~",
    },
};

export const InsertionFeatureGroup = {
    list: {
        icon: Icons.ListIcon,
        func: updateText,
        symbol: "_",
        type: "dropdown",
    },
    link: {
        icon: Icons.LinkIcon,
        func: updateText,
        symbol: "**",
        type: "popover",
        description: "Please enter the URL:",
        placeholder: "https://example.com",
    },
    image: {
        icon: Icons.ImageIcon,
        func: updateText,
        symbol: "**",
        type: "popover",
        description: "Please enter the URL:",
        placeholder: "https://example.com",
    },
    quote: {
        icon: Icons.QuoteIcon,
        func: updateText,
        symbol: ">",
    },
    code: {
        icon: Icons.CodeIcon,
        func: updateText,
        symbol: "```",
    },
    divider: {
        icon: Icons.DividerIcon,
        func: updateText,
        symbol: "---",
    },
};
