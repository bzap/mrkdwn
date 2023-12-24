import { CustomComponents } from "@/app/interface/CustomComponents";
import { Icons } from "@/app/interface/Icons";

const TextButtonGroup = {
    bold: Icons.Bold,
    italic: Icons.Italic,
    underline: Icons.Underline,
    strikethrough: Icons.StrikeThrough,
};

const TextFeatureContainer = () => {
    return (
        <div className="flex">
            <CustomComponents.ButtonGroup elements={TextButtonGroup} />
        </div>
    );
};

export default TextFeatureContainer;
