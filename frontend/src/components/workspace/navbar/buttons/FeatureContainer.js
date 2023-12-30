import { CustomComponents } from "@/app/interface/CustomComponents";
import { InsertionFeatureGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { TextStyleGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { FileOperationGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { CustomizationGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { useSelector } from "react-redux";

const TextFeatureContainer = ({ editorRef }) => {
    const markdownText = useSelector((state) => state.markdownText);

    return (
        <div className="flex-col flex mt-8 justify-between h-full">
            <div>
                <CustomComponents.ButtonGroup
                    elements={FileOperationGroup}
                    editorRef={editorRef}
                    data={markdownText}
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
