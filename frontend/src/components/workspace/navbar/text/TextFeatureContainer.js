import { CustomComponents } from "@/app/interface/CustomComponents";
import { Icons } from "@/app/interface/Icons";

const TextStyleGroup = {
    bold: [Icons.BoldIcon],
    italic: [Icons.ItalicIcon],
    underline: [Icons.UnderlineIcon],
    strikethrough: [Icons.StrikeThroughIcon],
};

const InsertionFeatureGroup = {
    lists: [Icons.ListIcon, "dropdown"],
    links: [
        Icons.LinkIcon,
        "popover",
        "Please enter the URL:",
        "https://example.com",
    ],
    images: [
        Icons.ImageIcon,
        "popover",
        "Please enter the image URL:",
        "https://example.com",
    ],
};

const TextFeatureContainer = () => {
    return (
        <div className="flex-col">
            <CustomComponents.ButtonGroup elements={InsertionFeatureGroup} />
            <CustomComponents.ButtonGroup elements={TextStyleGroup} />
        </div>
    );
};

export default TextFeatureContainer;
