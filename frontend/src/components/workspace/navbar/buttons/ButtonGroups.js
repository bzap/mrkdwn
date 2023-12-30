import {
    downloadFile,
    uploadFile,
    saveFile,
    newFile,
} from "@/components/workspace/navbar/buttons/BackendButtonHandlers";
import { Icons } from "../../../../app/interface/Icons";
import {
    updateText,
    createTable,
    insertText,
    insertList,
} from "@/components/workspace/navbar/buttons/ButtonHandlers";
import { setDarkMode, setSaveState } from "@/lib/reducers/markdownSlice";

export const FileOperationGroup = {
    newFile: {
        icon: Icons.NewDocumentIcon,
        func: newFile,
        symbol: "new",
    },
    upload: {
        icon: Icons.UploadIcon,
        func: uploadFile,
        symbol: "**",
    },
    image: {
        icon: Icons.DownloadIcon,
        func: downloadFile,
        symbol: "download",
        type: "popover",
        description: "Enter the name of the file:",
        placeholder: "README.md",
    },
};

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

export const CustomizationGroup = {
    save: {
        icon: Icons.SaveIcon,
        func: saveFile,
        symbol: "saveState",
        type: "switch",
        dispatcher: setSaveState,
    },
    theme: {
        icon: Icons.DarkModeIcon,
        func: saveFile,
        symbol: "darkMode",
        type: "switch",
        dispatcher: setDarkMode,
    },
    settings: {
        icon: Icons.SettingsIcon,
        func: updateText,
        symbol: "**",
    },
};
