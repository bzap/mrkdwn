import { CustomComponents } from "@/app/interface/CustomComponents";
import { InsertionFeatureGroup } from "@/app/data/ButtonGroups";
import { TextStyleGroup } from "@/app/data/ButtonGroups";
import { FileOperationGroup } from "@/app/data/ButtonGroups";
import { CustomizationGroup } from "@/app/data/ButtonGroups";

const TextFeatureContainer = ({ editorRef }) => {
    return (
        <div className="flex-col flex mt-8 justify-between h-full">
            <div>
                <CustomComponents.ButtonGroup
                    elements={FileOperationGroup}
                    editorRef={editorRef}
                />
            </div>
            <div>
                <CustomComponents.ButtonGroup
                    elements={TextStyleGroup}
                    editorRef={editorRef}
                />
                <CustomComponents.ButtonGroup
                    elements={InsertionFeatureGroup}
                    editorRef={editorRef}
                />
            </div>
            <div>
                <CustomComponents.ButtonGroup
                    elements={CustomizationGroup}
                    editorRef={editorRef}
                />
            </div>
        </div>
    );
};

export default TextFeatureContainer;
