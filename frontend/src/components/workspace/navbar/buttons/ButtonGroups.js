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
} from "@fortawesome/free-solid-svg-icons";
import { setScrollSynced } from "../../../../lib/reducers/markdownSlice";

export const FileOperationGroup = {
    newFile: {
        icon: faPlus,
        func: newFile,
        symbol: "new",
    },
    upload: {
        icon: faUpload,
        func: uploadFile,
        symbol: "upload",
        type: "popover",
        description: "Select an existing markdown file:",
        placeholder: "https://example.com",
    },
    download: {
        icon: faDownload,
        func: downloadFile,
        symbol: "download",
        type: "popover",
        fetcher: true,
        description: "Enter the name of the file:",
        placeholder: "README",
    },
};

export const TextStyleGroup = {
    bold: {
        icon: faBold,
        func: updateText,
        symbol: "**",
    },
    italic: {
        icon: faItalic,
        func: updateText,
        symbol: "_",
    },
    strikeThrough: {
        icon: faStrikethrough,
        func: updateText,
        symbol: "~~",
    },
    highlight: {
        icon: faHighlighter,
        func: updateText,
        symbol: "==",
    },
    quote: {
        icon: faQuoteRight,
        func: updateText,
        symbol: ">",
    },
    code: {
        icon: faCode,
        func: updateText,
        symbol: "```",
    },
};

export const InsertionFeatureGroup = {
    list: {
        icon: faListUl,
        func: insertList,
        type: "dropdown",
    },
    link: {
        icon: faLink,
        func: insertText,
        symbol: "link",
        type: "popover",
        description: "Enter the link URL:",
        placeholder: "https://example.com",
    },
    image: {
        icon: faImage,
        func: insertText,
        symbol: "image",
        type: "popover",
        description: "Enter the image URL:",
        placeholder: "https://example.com",
    },
    table: {
        icon: faTableCellsLarge,
        func: createTable,
        symbol: "table",
        type: "popover",
        description: "Enter the number of rows and columns:",
        placeholder: ["Rows", "Columns"],
    },
    footnote: {
        icon: faSuperscript,
        func: insertText,
        symbol: "footnote",
        type: "popover",
        description: "Enter the footnote subscript:",
        placeholder: "Subscript",
    },
    divider: {
        icon: faMinus,
        func: updateText,
        symbol: "---",
    },
};

export const CustomizationGroup = {
    save: {
        icon: faFloppyDisk,
        symbol: "saveState",
        type: "switch",
        dispatcher: setSaveState,
    },
    scroll: {
        icon: faArrowsDownToLine,
        symbol: "scrollSynced",
        type: "switch",
        dispatcher: setScrollSynced,
    },
    theme: {
        icon: faMoon,
        symbol: "darkMode",
        type: "switch",
        dispatcher: setDarkMode,
    },
};

export const InfoGroup = {
    settings: {
        icon: faGear,
        func: updateText,
        symbol: "**",
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
