import { CustomComponents } from "@/app/interface/CustomComponents";
import { InsertionFeatureGroup } from "@/app/data/ButtonGroups";
import { TextStyleGroup } from "@/app/data/ButtonGroups";

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
