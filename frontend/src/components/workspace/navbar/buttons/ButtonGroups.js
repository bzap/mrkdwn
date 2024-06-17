import {
    downloadFile,
    uploadFile,
    newFile,
} from "@/components/workspace/navbar/buttons/BackendButtonHandlers";
import {
    updateText,
    createTable,
    insertText,
    insertList,
    toggleVisibility,
} from "@/components/workspace/navbar/buttons/ButtonHandlers";
import {
    setDarkMode,
    setEditorVisible,
    setSaveState,
} from "@/lib/reducers/markdownSlice";
import {
    faPlus,
    faBold,
    faItalic,
    faHeading,
    faStrikethrough,
    faHighlighter,
    faQuoteRight,
    faCode,
    faListUl,
    faLink,
    faImage,
    faUpload,
    faDownload,
    faTableCellsLarge,
    faSuperscript,
    faMinus,
    faFloppyDisk,
    faArrowsDownToLine,
    faMoon,
    faGear,
    faEye,
    faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { setScrollSynced } from "../../../../lib/reducers/markdownSlice";

export const FileOperationGroup = {
    newFile: {
        icon: faPlus,
        func: newFile,
        symbol: "new",
        title: "New file",
    },
    upload: {
        icon: faUpload,
        func: uploadFile,
        symbol: "upload",
        type: "popover",
        description: "Select an existing markdown file:",
        placeholder: "https://example.com",
        title: "Upload file",
    },
    download: {
        icon: faDownload,
        func: downloadFile,
        symbol: "download",
        type: "popover",
        fetcher: true,
        description: "Enter the name of the file:",
        placeholder: "README",
        title: "Download file",
    },
};

export const TextStyleGroup = {
    bold: {
        icon: faBold,
        func: updateText,
        symbol: "**",
        title: "Bold text",
    },
    italic: {
        icon: faItalic,
        func: updateText,
        symbol: "_",
        title: "Italic text",
    },
    strikeThrough: {
        icon: faStrikethrough,
        func: updateText,
        symbol: "~~",
        title: "Strikethrough text",
    },
    header: {
        icon: faHeading,
        func: updateText,
        symbol: "#",
        title: "Heading",
    },
    highlight: {
        icon: faHighlighter,
        func: updateText,
        symbol: "==",
        title: "Highlight text",
    },
    quote: {
        icon: faQuoteRight,
        func: updateText,
        symbol: ">",
        title: "Blockquote",
    },
    code: {
        icon: faCode,
        func: updateText,
        symbol: "```",
        title: "Code block",
    },
    math: {
        icon: faCalculator,
        func: updateText,
        symbol: "$",
        title: "Math equation",
    },
};

export const InsertionFeatureGroup = {
    list: {
        icon: faListUl,
        func: insertList,
        type: "dropdown",
        title: "List",
    },
    link: {
        icon: faLink,
        func: insertText,
        symbol: "link",
        type: "popover",
        description: "Enter the link URL:",
        placeholder: "https://example.com",
        title: "Link",
    },
    image: {
        icon: faImage,
        func: insertText,
        symbol: "image",
        type: "popover",
        description: "Enter the image URL:",
        placeholder: "https://example.com",
        title: "Image",
    },
    table: {
        icon: faTableCellsLarge,
        func: createTable,
        symbol: "table",
        type: "popover",
        description: "Enter the number of rows and columns:",
        placeholder: ["Rows", "Columns"],
        title: "Table",
    },
    footnote: {
        icon: faSuperscript,
        func: insertText,
        symbol: "footnote",
        type: "popover",
        description: "Enter the footnote subscript:",
        placeholder: "Subscript",
        title: "Footnote",
    },
    divider: {
        icon: faMinus,
        func: updateText,
        symbol: "---",
        title: "Divider",
    },
};

export const CustomizationGroup = {
    save: {
        icon: faFloppyDisk,
        symbol: "saveState",
        type: "switch",
        dispatcher: setSaveState,
        title: "Save state",
    },
    scroll: {
        icon: faArrowsDownToLine,
        symbol: "scrollSynced",
        type: "switch",
        dispatcher: setScrollSynced,
        title: "Scroll sync",
    },
    theme: {
        icon: faMoon,
        symbol: "darkMode",
        type: "switch",
        dispatcher: setDarkMode,
        title: "Dark mode",
    },
};

export const InfoGroup = {
    settings: {
        icon: faGear,
        type: "dialog",
        title: "Settings",
        // func: updateText,
    },
};

export const VisibilityGroup = {
    settings: {
        icon: faEye,
        func: toggleVisibility,
        type: "switch",
        symbol: "visiblity",
        dispatcher: setEditorVisible,
    },
};
