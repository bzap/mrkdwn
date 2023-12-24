import { CustomComponents } from "@/app/interface/CustomComponents";
import { Icons } from "@/app/interface/Icons";
import { updateText } from "./ButtonHandlers";
import { useEffect } from "react";

const TextStyleGroup = {
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

const InsertionFeatureGroup = {
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
};

const TextFeatureContainer = ({ editorRef }) => {
    return (
        <div className="flex-col">
            <CustomComponents.ButtonGroup
                elements={InsertionFeatureGroup}
                editorRef={editorRef}
            />
            <CustomComponents.ButtonGroup
                elements={TextStyleGroup}
                editorRef={editorRef}
            />
        </div>
    );
};

export default TextFeatureContainer;
