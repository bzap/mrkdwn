import { Icons } from "../interface/Icons";
import {
    updateText,
    createTable,
} from "@/components/workspace/navbar/text/ButtonHandlers";

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
    highlight: {
        icon: Icons.HighlightIcon,
        func: updateText,
        symbol: "==",
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
        description: "Enter the URL:",
        placeholder: "https://example.com",
    },
    image: {
        icon: Icons.ImageIcon,
        func: updateText,
        symbol: "**",
        type: "popover",
        description: "Enter the image URL:",
        placeholder: "https://example.com",
    },
    table: {
        icon: Icons.TableIcon,
        func: createTable,
        symbol: "table",
        type: "popover",
        description: "Enter the number of rows and columns:",
        placeholder: ["rows", "columns"],
    },
    footnote: {
        icon: Icons.FootnoteIcon,
        func: updateText,
        symbol: "**",
        type: "popover",
        description: "Enter the number of rows and columns:",
        url: "https://example.com",
    },
    divider: {
        icon: Icons.DividerIcon,
        func: updateText,
        symbol: "---",
    },
};
