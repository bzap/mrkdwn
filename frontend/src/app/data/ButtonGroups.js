import { Icons } from "../interface/Icons";
import {
    updateText,
    createTable,
    insertText,
    insertList,
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
        func: insertList,
        type: "dropdown",
    },
    link: {
        icon: Icons.LinkIcon,
        func: insertText,
        symbol: "link",
        type: "popover",
        description: "Enter the link URL:",
        placeholder: "https://example.com",
    },
    image: {
        icon: Icons.ImageIcon,
        func: insertText,
        symbol: "image",
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
        func: insertText,
        symbol: "footnote",
        type: "popover",
        description: "Enter the footnote subscript:",
        placeholder: "subscript",
    },
    divider: {
        icon: Icons.DividerIcon,
        func: updateText,
        symbol: "---",
    },
};
