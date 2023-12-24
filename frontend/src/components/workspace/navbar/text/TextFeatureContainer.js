import { CustomComponents } from "@/app/interface/CustomComponents";
import { Icons } from "@/app/interface/Icons";

const TextStyleGroup = {
    bold: [Icons.Bold],
    italic: [Icons.Italic],
    underline: [Icons.Underline],
    strikethrough: [Icons.StrikeThrough],
};

const InsertionFeatureGroup = {
    lists: [Icons.Lists, "dropdown"],
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
